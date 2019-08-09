// pages/movies/movies.js
var util = require('../../utils/util.js')
var app = getApp();
import FetchItem from '../../utils/request.js';

Page({
  data: {
    inTheaters: {},
    comingSoon: {},
    top250: {},
    searchResult: {},
    containerShow: true,
    searchPanelShow: false, // 叉号显示隐藏
  },

  onLoad: function(event) {
    var inTheatersUrl = `${app.globalData.doubanBase}/v2/movie/in_theaters?start=0&count=10`;
    var comingSoonUrl = `${app.globalData.doubanBase}/v2/movie/coming_soon`;
    var top250Url = `${app.globalData.doubanBase}/v2/movie/top250?start=0&count=10`;
    this.getMovieListData(inTheatersUrl, "inTheaters", "正在热映");
    this.getMovieListData(comingSoonUrl, "comingSoon", "即将上映");
    this.getMovieListData(top250Url, "top250", "豆瓣Top250");
  },

  onMoreTap: function(event) {
    var category = event.currentTarget.dataset.category;
    wx.navigateTo({
      url: "more-movie/more-movie?category=" + category
    })
  },

  onMovieTap: function(event) {
    var movieId = event.currentTarget.dataset.movieid;
    wx.navigateTo({
      url: "movie-detail/movie-detail?id=" + movieId
    })
  },

  getMovieListData: function (url, settedKey, categoryTitle) {
    FetchItem.WxGet(url).then(res => {
      this.processDoubanData(res.data, settedKey, categoryTitle)
    })
  },

  onCancelImgTap: function(event) {
    this.setData({
      containerShow: true,
      searchPanelShow: false,
      searchResult: {}
    })
  },

  onBindFocus: function(event) { 
    this.setData({
      containerShow: false,
      searchPanelShow: true 
    })
  },

  onBindBlur: function(event) { // input失去焦
    console.log(event, '---event---')
    var text = event.detail.value;
    var searchUrl = app.globalData.doubanBase + "/v2/movie/search?q=" + text;
    this.getMovieListData(searchUrl, "searchResult", "");
  },

  processDoubanData: function (moviesDouban, settedKey, categoryTitle) {
    var movies = [];
    for (var idx in moviesDouban.subjects) {
      var subject = moviesDouban.subjects[idx];
      var title = subject.title;
      if (title.length >= 6) {
        title = title.substring(0, 6) + "...";
      }
      // [1,1,1,1,1] [1,1,1,0,0]
      var temp = {
        stars: util.convertToStarsArray(subject.rating.stars),
        title: title,
        average: subject.rating.average,
        coverageUrl: subject.images.large,
        movieId: subject.id
      }
      movies.push(temp)
    }
    var readyData = {};
    readyData[settedKey] = {
      categoryTitle: categoryTitle,
      movies: movies
    }
    this.setData(readyData);
  }
})