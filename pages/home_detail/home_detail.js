// pages/home_detail/home_detail.js
import { postList } from '../../data/posts-data.js';

Page({
  data: {

  },
  onLoad: function (options) {
    let clickItem = postList.find(k => k['postId'] == options['id']);
    this.setData({postData: clickItem});
  }
})