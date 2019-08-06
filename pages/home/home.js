// pages/home/home.js
import { postList } from '../../data/posts-data.js';

Page({
  data: {
    imgUrls: [
      '/images/wx.png',
      '/images/vr.png',
      '/images/iqiyi.png'
    ],
  },
  onLoad: function (options) {
    this.setData({ list: postList})
  }
})