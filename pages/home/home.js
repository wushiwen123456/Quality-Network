// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    swiperList: [],
    dynamic: [],
    shopList: [],
    page:1,
    pageSize:8

  },
  getswiper() {
    let that = this;
    wx.request({
      url: "http://www.youwangdian.com/api/sys/findBanner?type=2",
      method: "GET",
      header: {
        "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8"
      },
      success(res) {
        console.log(res.data.rest);
        that.setData({
          swiperList: res.data.rest
        })
      }
    });
  },
  getDynamic() {
    let that = this;
    wx.request({
      url: "http://www.youwangdian.com/api/sys/getShopTotal",
      method: "GET",
      header: {
        "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8"
      },
      success(res) {
        console.log(res.data.rest);
        that.setData({
          dynamic: res.data.rest
        })
      }
    });
  },
  getshopList() {
    let that = this;
    wx.request({
      url: "http://www.youwangdian.com/api/sys/listRecommendShopPage",
      method: "GET",
      data: {
        pageSize: 8,
        pageNo: 1
      },
      header: {
        "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8"
      },
      success(res) {
        console.log(res.data.rest.results);
        that.setData({
          shopList: res.data.rest.results
        })
      }
    });
  },



  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getswiper(),
      this.getDynamic(),
      this.getshopList()
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