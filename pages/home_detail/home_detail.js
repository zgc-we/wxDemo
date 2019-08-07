// pages/home_detail/home_detail.js
import { postList } from '../../data/posts-data.js';

Page({
  data: {
    collected:false,
  },
  onLoad: function (options) {
    const _id = options['id'];
    let clickItem = postList.find(k => k['postId'] == _id);
    this.setData({postData: clickItem});
    // 存储这项locastroage
    let postColleted = wx.getStorageSync("collected");
    if (postColleted) {
      this.setData({
        collected: postColleted[_id],
      })
    }
  },
  onColletionTap: function(options) {
    let _id = options['currentTarget']['dataset']['id'];
    let storageItem = wx.getStorageSync('collected');
    // 采用 locastorage 进行存储
    if (storageItem){
      // 提示功能
      if (!storageItem[_id]){
        wx.showToast({title: '收藏文章成功',icon: 'success',duration: 2000})
      } else {
        wx.showToast({title: '取消收藏',icon: 'clear',duration: 2000})
      }
      wx.setStorageSync('collected', { ...storageItem, [_id]: !storageItem[_id]})
    } else {
      let item = {'0': false,'1': false,'2': false,'3': false,'4': false,'5': false};
      wx.setStorageSync('collected', item);
    }
    this.setData({ collected: !this.data.collected})
    

  }
})