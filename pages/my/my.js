// pages/my/my.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imageArr:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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

  },
  //预览图片或视频
  yulan(){
    wx.previewMedia({//media 可以预览图片和视频  如果是视频需在url下加一个type:"video"  只是图片的话可以使用wx.previewImage方法
      sources: [
        {
          url:"/img/211115042230022851.jpg"
        },{
          url:"/img/211115042306131324.jpg"
        },{
          url:"/img/211115042322490171.jpg"
        }
      ],
    })
  },
  //从相机或是相册上传图片
  shangchuan(){
    let that = this
    wx.chooseImage({
      count: 3,//最多能选择的图片张数
      success(res){ //成功回调函数
        console.log(res);
        that.setData({
          imageArr:res.tempFilePaths
        })
      }
    })
  },
  //获取用户信息
  getuser(){
    //获取不到 用下边的方法获取
    wx.getUserInfo({
      success(res){
        console.log(res.userInfo);
      }
    })
    //获取用户名 头像；
    wx.getUserProfile({
      desc: '对用户的提示信息',
      success(res){
        console.log(res.userInfo);
      }
    })
  },
  //登录  以后将前后台交互写到success的回调中
  login(){
    wx.login({
      timeout: 5000,
      success(res){
        if(res.code){
           console.log(res);
        }
       
      }
    })
  }
})