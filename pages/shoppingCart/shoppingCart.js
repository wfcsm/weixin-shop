// pages/shoppingCart/shoppingCart.js
const app=getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // cartList: [{
    //   "num": 2,
    //   "flag": false,
    //   "details": {
    //     "id": 22,
    //     "name": "韩国进口 A.by Bom艾柏梵超能婴儿冰凝叶子面膜10片",
    //     "price": 129,
    //     "privilegePrice": 138,
    //     "imgUrl": "https://m.360buyimg.com/n12/jfs/t16969/88/1564110409/175802/5a26675e/5acf2422N76c30469.png!q70.jpg",
    //     "details": "https://img10.360buyimg.com/imgzone/jfs/t15079/250/1378141301/90210/c5411bbb/5a4ce51aNda84dc5a.jpg;https://img10.360buyimg.com/imgzone/jfs/t14554/230/1355421978/43906/d1b2e3d/5a4ce518N95b58aa5.jpg;https://img10.360buyimg.com/imgzone/jfs/t16174/26/1128731260/160481/c88be136/5a4ce512N58d61b46.jpg;https://img10.360buyimg.com/imgzone/jfs/t14737/209/1338124278/63666/481bb308/5a4ce520Nb26519d4.jpg;https:////img30.360buyimg.com/sku/jfs/t19075/243/1609006120/266561/710d3aa3/5ad06f17N4f7f152b.jpg;https://img10.360buyimg.com/imgzone/jfs/t15916/327/1199031650/68490/b0082cc/5a4ce521N64d24657.jpg\n",
    //     "remark": null,
    //     "createDate": 1550630674000,
    //     "updateDate": 1523958042000,
    //     "clickRate": 84,
    //     "buyRate": 0,
    //     "stock": 0,
    //     "isHot": "0",
    //     "isNew": "1",
    //     "classifyId": null,
    //     "discount": "9.3",
    //     "activityId": null,
    //     "shopGoodsImageList": [
    //       {
    //         "id": null,
    //         "imgUrl": "https://m.360buyimg.com/n12/jfs/t16969/88/1564110409/175802/5a26675e/5acf2422N76c30469.png!q70.jpg;\r\n",
    //         "remark": null,
    //         "goodsId": null,
    //         "status": null
    //       },
    //       {
    //         "id": null,
    //         "imgUrl": "https://m.360buyimg.com/n12/jfs/t13576/109/2574131783/86992/f3f3d9fb/5a45d7f2Ndc3c9748.jpg!q70.jpg;\r\n",
    //         "remark": null,
    //         "goodsId": null,
    //         "status": null
    //       },
    //       {
    //         "id": null,
    //         "imgUrl": "https://m.360buyimg.com/n12/jfs/t13495/153/2633490836/72156/4c61c224/5a45d7f0N689f74c0.jpg!q70.jpg;\r\n",
    //         "remark": null,
    //         "goodsId": null,
    //         "status": null
    //       },
    //       {
    //         "id": null,
    //         "imgUrl": "https://m.360buyimg.com/n12/jfs/t12838/147/2461449791/133948/d63f433d/5a55bc9dNecb417db.jpg!q70.jpg;\r\n",
    //         "remark": null,
    //         "goodsId": null,
    //         "status": null
    //       },
    //       {
    //         "id": null,
    //         "imgUrl": "https://m.360buyimg.com/n12/jfs/t13975/152/2606236541/102160/9704e90e/5a45d80bNa75906f1.jpg!q70.jpg\r\n",
    //         "remark": null,
    //         "goodsId": null,
    //         "status": null
    //       }
    //     ],
    //     "desc": null
    //   }
    // },
    //   {
    //     "num": 2,
    //     "flag":false,
    //     "details": {
    //       "id": 21,
    //       "name": "韩国进口 A.by Bom艾柏梵超能婴儿冰凝叶子面膜10片",
    //       "price": 129,
    //       "privilegePrice": 138,
    //       "imgUrl": "https://m.360buyimg.com/n12/jfs/t16969/88/1564110409/175802/5a26675e/5acf2422N76c30469.png!q70.jpg",
    //       "details": "https://img10.360buyimg.com/imgzone/jfs/t15079/250/1378141301/90210/c5411bbb/5a4ce51aNda84dc5a.jpg;https://img10.360buyimg.com/imgzone/jfs/t14554/230/1355421978/43906/d1b2e3d/5a4ce518N95b58aa5.jpg;https://img10.360buyimg.com/imgzone/jfs/t16174/26/1128731260/160481/c88be136/5a4ce512N58d61b46.jpg;https://img10.360buyimg.com/imgzone/jfs/t14737/209/1338124278/63666/481bb308/5a4ce520Nb26519d4.jpg;https:////img30.360buyimg.com/sku/jfs/t19075/243/1609006120/266561/710d3aa3/5ad06f17N4f7f152b.jpg;https://img10.360buyimg.com/imgzone/jfs/t15916/327/1199031650/68490/b0082cc/5a4ce521N64d24657.jpg\n",
    //       "remark": null,
    //       "createDate": 1550630674000,
    //       "updateDate": 1523958042000,
    //       "clickRate": 84,
    //       "buyRate": 0,
    //       "stock": 0,
    //       "isHot": "0",
    //       "isNew": "1",
    //       "classifyId": null,
    //       "discount": "9.3",
    //       "activityId": null,
    //       "shopGoodsImageList": [
    //         {
    //           "id": null,
    //           "imgUrl": "https://m.360buyimg.com/n12/jfs/t16969/88/1564110409/175802/5a26675e/5acf2422N76c30469.png!q70.jpg;\r\n",
    //           "remark": null,
    //           "goodsId": null,
    //           "status": null
    //         },
    //         {
    //           "id": null,
    //           "imgUrl": "https://m.360buyimg.com/n12/jfs/t13576/109/2574131783/86992/f3f3d9fb/5a45d7f2Ndc3c9748.jpg!q70.jpg;\r\n",
    //           "remark": null,
    //           "goodsId": null,
    //           "status": null
    //         },
    //         {
    //           "id": null,
    //           "imgUrl": "https://m.360buyimg.com/n12/jfs/t13495/153/2633490836/72156/4c61c224/5a45d7f0N689f74c0.jpg!q70.jpg;\r\n",
    //           "remark": null,
    //           "goodsId": null,
    //           "status": null
    //         },
    //         {
    //           "id": null,
    //           "imgUrl": "https://m.360buyimg.com/n12/jfs/t12838/147/2461449791/133948/d63f433d/5a55bc9dNecb417db.jpg!q70.jpg;\r\n",
    //           "remark": null,
    //           "goodsId": null,
    //           "status": null
    //         },
    //         {
    //           "id": null,
    //           "imgUrl": "https://m.360buyimg.com/n12/jfs/t13975/152/2606236541/102160/9704e90e/5a45d80bNa75906f1.jpg!q70.jpg\r\n",
    //           "remark": null,
    //           "goodsId": null,
    //           "status": null
    //         }
    //       ],
    //       "desc": null
    //     }
    //   }],
    cartList:[],
    hidden:false,
    alltotal:0,
    btnWidth:"",
    itemId:""
  },
 
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let width = wx.getSystemInfoSync().windowWidth-75-160;
    this.setData({
      btnWidth:width
    })
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
    // let arr = app.globalData.cartList;
    // this.setData({
    //   cartList:arr
    // })
  },
  /**
   * 减少数量
   */
  reduce: function(e){
    for (let i = 0; i < this.data.cartList.length;i++){
      if (e.currentTarget.dataset.id==this.data.cartList[i].details.id){
        if (this.data.cartList[i].num>1){
          let n=this.data.cartList[i].num;
          n--;
          console.log(n)
          let temp = {}
          temp.num=n;
          temp.details = this.data.cartList[i].details;
          console.log(temp);
          let tempArr=this.data.cartList
          tempArr[i]=temp;
          this.setData({
            cartList: tempArr
          })
          this.countPrice();
        }else{
          wx.showToast({
            title: '已不能在减少',
            icon:"warn"
          })
        }
      }
    }
  },
  /**
   * 增加数量
   */
  add: function (e) {
    for (let i = 0; i < this.data.cartList.length; i++) {
      if (e.currentTarget.dataset.id == this.data.cartList[i].details.id) {
        if (this.data.cartList[i].num < 10) {
          let n = this.data.cartList[i].num;
          n++;
          console.log(n)
          let temp = {}
          temp.num = n;
          temp.flag = this.data.cartList[i].flag;
          temp.details = this.data.cartList[i].details;
          console.log(temp);
          let tempArr = this.data.cartList
          tempArr[i] = temp;
          this.setData({
            cartList: tempArr
          })
          this.countPrice();
        } else {
          wx.showToast({
            title: '已不能在添加',
            icon: "warn"
          })
        }
      }
    }
  },
  /**
   * 选择单个
   */
  active:function(e){
    console.log(e);
    let id =e.currentTarget.dataset.id;
    let n=true;
    for(let i=0;i<this.data.cartList.length;i++){
      if (this.data.cartList[i].details.id == id) {
        if (this.data.cartList[i].flag==false){
          let temp = this.data.cartList;
          temp[i].flag = true;
          this.setData({ cartList: temp })
        }else{
          let temp = this.data.cartList;
          temp[i].flag = false;
          this.setData({ cartList: temp })
        }  
      }
      if(this.data.cartList[i].flag == false){
        n=false;
      }
      
    }
    if(n){
      this.setData({hidden:true})
    }else{
      this.setData({ hidden: false })
    }
    this.countPrice();
  },
  /**
   * 全选
   */
  allChoosed: function () {
    let sum = 0
    if(this.data.hidden==false){
      for (let i = 0; i < this.data.cartList.length; i++) {
        if (this.data.cartList[i].flag == false) {
          let temp = this.data.cartList;
          temp[i].flag = true;
          this.setData({ cartList: temp, hidden: true });
        }
      }  
    }else{
      for (let i = 0; i < this.data.cartList.length; i++) {
        if (this.data.cartList[i].flag == true) {
          let temp = this.data.cartList;
          temp[i].flag = false;
          this.setData({ cartList: temp, hidden: false });
        }
      }  
    }
    this.countPrice();
  },
  /**
   * 计算已选商品的价格
   */
  countPrice:function (){
    let sum=0
    for (let i = 0; i < this.data.cartList.length; i++) {
      if (this.data.cartList[i].flag == true) {
        sum = sum + this.data.cartList[i].num * this.data.cartList[i].details.price
      }
    }
    this.setData({ alltotal: sum })
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

  }
})