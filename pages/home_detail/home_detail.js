// pages/home_detail/home_detail.js
import { postList } from '../../data/posts-data.js';

Page({
  data: {
    collected:false,
    musicVisible: false,
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
  },
  onShareTap: function(options){
    let _id = options['currentTarget']['dataset']['id'];
    let _arr = ["分享到QQ",'分享到好友','分享朋友圈',"分享到微博"];
    wx.showActionSheet({
      itemList: _arr,
      success:function(res) {
        wx.showModal({
          title: `用户${_arr[res.tapIndex]}`,
          content: `用户是否取消？现在还没有分享功能，什么时候能分享再说。`,
        })
      }
    })
  },
  onMusicTap: function(event) {
    let musicId = event.currentTarget.dataset.musicId;
    let item = postList[musicId]['music'];
    let _type = this.data.musicVisible;
    if (!_type){
      wx.playBackgroundAudio({
        dataUrl: item['url'],
        title: item['title'],
        coverImgUrl: item['coverImg']
      })
      this.setData({musicVisible: !this.data.musicVisible})
    } else {
      wx.pauseBackgroundAudio()
      this.setData({ musicVisible: !this.data.musicVisible })
    }
  }
})