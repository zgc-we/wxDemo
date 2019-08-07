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
  },
  handleClick: function(event){
    let _id = event['currentTarget']['dataset']['itemId'];
    wx.navigateTo({
      url: `../home_detail/home_detail?id=${_id}`,
    })
  },
  handleSwiper: function(event) {
    conosle.log(event)
  }
})