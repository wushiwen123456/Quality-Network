// pages/search/search.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    HotSelect: [],
    search: ''
  },

  getHotSelcet() {
    let that = this
    wx.request({
      url: "http://www.youwangdian.com/api/sys/trendingSearch",
      method: "GET",
      header: {
        "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8"
      },
      success(res) {
        console.log(res);
        that.setData({
          HotSelect: res.data.rest
        })
      }
    })
  },
  changeData(e){
    let that = this
    console.log(e.detail.value);
    that.setData({
      search:e.detail.value
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getHotSelcet()
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