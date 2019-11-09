// pages/detail/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    findShop: [],
    currentTab: 0,
    shopImgs: [],
    shopList:[],

  },
  swichNav() {

  },
  getShopId(shopId) {
    let that = this;
    wx.request({
      url: "http://www.youwangdian.com/api/sys/findShopById",
      method: "POST",
      data: {
        "id": shopId,
        "platform": "TMALL"
      },
      header: {
        "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8"
      },
      success(res) {
        console.log(res.data.rest);
        // console.log(res.data.rest.shopImgs)       
        var shopimg1 = (res.data.rest.shopImgs);
        var Arr = shopimg1.split(",").join().split("{").join().split("}").join().split(",").join().split('"').join().split(",").join().split(",").join().split("二级类目截图").join().split(",:,").join().split(",,,").join().split(",,").join().split(",")
        var newArr = Arr.filter(item => {
          return item.trim()
        })
        console.log(newArr)
        that.setData({
          findShop: res.data.rest,
          shopImgs: newArr
        });
      }
    });
  },
  getShopList() {
    let that = this;
    wx.request({
      url: "http://www.youwangdian.com/api/sys/listRecommendShop",
      method: "GET",
      header: {
        "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8"
      },
      success(res) {
        console.log(res.data.rest);
        that.setData({
          shopList: res.data.rest
        })
      }
    });
  },
  tryOneTry(){
    this.getShopList()
  },
  //滑动切换
  swiperTab: function (e) {
    var that = this;
    that.setData({
      currentTab: e.detail.current
    });
  },
  //点击切换
  clickTab: function (e) {
    var that = this;
    if (this.data.currentTab === e.target.dataset.current) {
      return false;
    } else {
      that.setData({
        currentTab: e.target.dataset.current
      })
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options.id)
    let shopId = options.id;
    this.getShopId(shopId),
    this.getShopList()
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})