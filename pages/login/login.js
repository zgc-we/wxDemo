// pages/login/login.js
Page({
  onTap: function() {
    wx.switchTab({
      url: '../home/home',
    })
    // wx.redirectTo({
    //   url: '../home/home',
    // })
  }
})