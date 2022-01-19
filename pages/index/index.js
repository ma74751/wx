// index.js
// 获取应用实例
const app = getApp()

Page({
  data: {
   opacity:0,
   opacity1:1,
   color:'white',
   img:35
  },
  onLoad() {

  },
  onPageScroll(e){
    if(e.scrollTop<=45){
      this.setData({
      opacity:e.scrollTop/90,
      opacity1:1-e.scrollTop/45,
      color:'white',
      img:35-10*(e.scrollTop/90)
    })
    }else{
      this.setData({
        opacity:e.scrollTop/90,
        opacity1:(e.scrollTop-45)/45,
        color:'black'
      })
    }
    
  }
})
