// pages/searchDetail/searchDetail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    showList: false,
    shopIndex: 1,
    paixu: false,
    shopList: [],
    orderby: '',
    orderoption: '',
    keywords:'',
    msg:'价格排序'
  },
  getSelectList(keyword) {
    let that = this;
    wx.request({
      url: "http://www.youwangdian.com/api/sys/listTmallShop",
      method: "POST",
      data: {
        "page": 1,
        "platform": "TMALL",
        "keyword": keyword
      },
      header: {
        "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8"
      },
      success(res) {
        console.log(res.data.rest.results);
        that.setData({
          shopList: res.data.rest.results
        });
      },
    });
  },
  showList() {
    this.setData({
      showList: !this.data.showList
    })
  },
  checkShop(e) {
    console.log(e);
    this.setData({
      shopIndex: e.target.dataset.index
    });
    console.log(this.data.shopIndex)
  },
  paixu() {
    this.setData({
      paixu: !this.data.paixu
    })
    console.log(this.data.paixu)
  },

  cutCondition1(e) {
    let that = this;
    wx.request({
      url: "http://www.youwangdian.com/api/sys/listTmallShop",
      method: "POST",
      data: {
        "page": 1,
        "platform": "TMALL",
        "keyword": that.data.keywords,
        "orderBy":e.target.dataset.orderby,
        "orderOption":e.target.dataset.orderoption
      },
      header: {
        "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8"
      },
      success(res) {
        console.log(res);
        that.setData({
          msg:'价格由高到低',
        shopList:res.data.rest.results
        });
      },
    });
      
  },
  cutCondition2(e) {
    let that = this;
    wx.request({
      url: "http://www.youwangdian.com/api/sys/listTmallShop",
      method: "POST",
      data: {
        "page": 1,
        "platform": "TMALL",
        "keyword": that.data.keywords,
        "orderBy":e.target.dataset.orderby,
        "orderOption":e.target.dataset.orderoption
      },
      header: {
        "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8"
      },
      success(res) {
        console.log(res);
        that.setData({
          msg:'价格由低到高',
        shopList:res.data.rest.results
        });
      },
    });
  },
  cutCondition3(e) {
    let that = this;
    wx.request({
      url: "http://www.youwangdian.com/api/sys/listTmallShop",
      method: "POST",
      data: {
        "page": 1,
        "platform": "TMALL",
        "keyword": that.data.keywords,
        "orderBy":e.target.dataset.orderby,
      },
      header: {
        "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8"
      },
      success(res) {
        console.log(res);
        that.setData({
          msg:'综合排序',
        shopList:res.data.rest.results
        });
      },
    });
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let keyword = options.keyword;
   
    this.setData({
      keywords:keyword
    })
    console.log(this.data.keywords);
    this.getSelectList(keyword);
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