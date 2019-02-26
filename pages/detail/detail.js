// pages/detail/detail.js
import {request} from "../../utils/ajax.js"
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    det:{},//此货品的信息包括价格，名字 ，id
    details:[],
    indicatorDots:true
  },
  /**
   * 跳转到购物车
   */
  toCart:function(e){
    wx.switchTab({
      url: '../shoppingCart/shoppingCart'
    })
  },
  /**
   * 加入到购物车
   */
  addCart:function(e){
    let arr=app.globalData.cartList;
    let flag =true;
    if(arr.length==0){

      let shopItem = {};
      shopItem.num = 1;
      shopItem.flag = false;
      shopItem.details = this.data.det;

      app.globalData.cartList.push(shopItem)
    }else{
      for (let i = 0; i < arr.length; i++) {
        if (arr[i].details.id == this.data.det.id) {
          app.globalData.cartList[i].num++;
          flag=false;
        } 
      }
      if(flag){
        let shopItem = {};
        shopItem.num = 1;
        shopItem.flag =false;
        shopItem.details = this.data.det;
        app.globalData.cartList.push(shopItem)
      }
    }
    
    wx.showToast({
      title: '成功加入购物车',
      icon: 'success',
      duration: 500
    })
   

  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    let that=this;
    let newArr=[];
    request({
      url: "/goods/getGoodsInfo?key=97303b00afbd4ea0a2c9074b9aa9cfe3&goodsId="+options.id,
      success(res){
        console.log(res.result);
        newArr = res.result.details.split(";");
        that.setData({
          det:res.result,
          details:newArr
        })
        
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})