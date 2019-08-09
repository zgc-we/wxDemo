/**
 * @params {String} url 路径
 * @params {Object} body 传入实体
 * @params {String}} _type 调用该方法中的键
 * @params {Object} that 调用 this
 * @params {Function}} processingFun 数据处理
 */
let request = function () {
  
}

request.prototype.WxGet = function (url) {
  return new Promise((resolve, reject) => {  
    wx.request({
      url: url,
      method: 'GET',
      header: {
        "Content-Type": "json"
      },
      success: function(res) {
        resolve(res);
      }
    })
  }).catch(err => {
    console.log('fetch wx optaions error', err);
  })
}

request.prototype.WxPOST = function (url, body) {
  return new Promise((resolve, reject) => {
    wx.request({
      url: url,
      method: 'POST',
      data: body,
      header:{
        "Content-Type": "json"
      },
      success: function() {
        resolve(res);
      }
    })
  }).catch(err => console.log('fetch wx optaions error', err))
} 

export default new request();