// pages/home/home.js
Page({
  data: {
    imgUrls: [
      '/images/wx.png',
      '/images/vr.png',
      '/images/iqiyi.png'
    ],
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let _list = [
      {
        titleImg: '/images/avatar/1.png',
        titleContent: 'Nov 25 2016',
        header:'正是虾肥蟹壮时',
        headerImg: '/images/post/crab.png',
        content: '整阿道夫阿斯蒂芬的说法法术打击发的说法阿斯蒂芬的说法二萨法发斯蒂芬整阿道夫阿斯蒂芬的说法法术打击发的说法阿斯蒂芬的说法二萨法发斯蒂',
        star: '93',
        seePeople:'65'
      },
      {
        titleImg: '/images/avatar/2.png',
        titleContent: 'Nov 25 2016',
        header: '正是虾肥蟹壮时',
        headerImg: '/images/post/cat.png',
        content: '整阿道夫阿斯蒂芬的说法法术打击发的说法阿斯蒂芬的说法二萨法发斯蒂芬整阿道夫阿斯蒂芬的说法法术打击发的说法阿斯蒂芬的说法二萨法发斯蒂',
        star: '93',
        seePeople: '65'
      }
    ];
    this.setData({list:_list})
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