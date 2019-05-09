//获取应用实例
const app = getApp()
Page({
  data: {},
  // 监听页面加载
  onLoad: function () {
    this.getImages()
  },
  // 不能正确加载的图片再次请求加载
  imgerror: function (res) {
    wx.showToast({
      title: '稍等',
      icon: 'loading',
      duration: 2000
    })
    this.getImages()
  },
  // 通过API请求图片资源
  getImages() {
    var seft = this
    wx.request({
      // 向后发起请求的地址
      url: 'https://api.apiopen.top/getImages',
      // 请求的数据
      data: {
        page: '',
        count: '1'
      },
      // 设置请求头，GET请求的话可以省略此项
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      // 请求的方式
      method: 'POST',
      dataType: 'json',
      responseType: 'text',
      // 请求成功的回调函数
      success: function (res) {
        var data = res.data.result
        // 将请求的结果更新到视图层
        seft.setData({
          data: data
        });
      }
    })
  }
})
