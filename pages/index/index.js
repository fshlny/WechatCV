const app = getApp()

Page({
  data: {
    name:'樊山',
    descript:`这里是个人的自我介绍`,
    age:'25',
    address:'上海市xxx区xxx街xx号'
  },
  onLoad: function () {
    console.log('代码片段是一种迷你、可分享的小程序或小游戏项目，可用于分享小程序和小游戏的开发经验、展示组件和 API 的使用、复现开发问题和 Bug 等。可点击以下链接查看代码片段的详细文档：')
    console.log('https://mp.weixin.qq.com/debug/wxadoc/dev/devtools/devtools.html')
  },
  toMainPage:()=>{
    console.log(`当前页面的URL是:${getCurrentPages()}`, getCurrentPages());
    wx.navigateTo({
      url: '../main/main',
    })
  },
  onLoad: function (options) {
    let timeOut = setTimeout(()=>{
      wx.navigateTo({
        url: '../main/main',
      });
      clearTimeout(timeOut);
    },1000);
  }
})
