//index.js
//获取应用实例
import { request } from "../../utils/ajax.js";
const app = getApp()

Page({
  data: {
    indicatorDots: true,
    autoplay:false,
    duration:500,
    circular:true,
    page:1,//第几页
    size:6,//显示数据
    msg: "没有更多内容了",
    imgUrls: [
      // {
      //   "id": 1,
      //   "bannerName": "全新上市",
      //   "imgUrl": "http://mz.djmall.xmisp.cn/files/banner/20161222/14823895573.png",
      //   "clickUrl": "",
      //   "seq": 1
      // },
      // {
      //   "id": 2,
      //   "bannerName": "全球优选团",
      //   "imgUrl": "http://pic1.ymatou.com/G02/M07/7C/CE/CgvUBFrNzZaAMSW8AAFEr6p5z9M050_75_52_o.jpg",
      //   "clickUrl": "",
      //   "seq": 2
      // },
      // {
      //   "id": 3,
      //   "bannerName": "新会员满减",
      //   "imgUrl": "http://m.360buyimg.com/babel/s1120x448_jfs/t16888/181/1508937864/193227/98374bc0/5acdd4c3N8e1f4ba1.jpg",
      //   "clickUrl": null,
      //   "seq": 3
      // },
      // {
      //   "id": 4,
      //   "bannerName": "口红",
      //   "imgUrl": "http://mz.djmall.xmisp.cn/files/banner/20161222/148238831285.png",
      //   "clickUrl": null,
      //   "seq": 4
      // }
    ],
    navigate: [
      // {
      //   "id": 1,
      //   "navbarName": "推荐",
      //   "clickUrl": null,
      //   "seq": 1
      // },
      // {
      //   "id": 2,
      //   "navbarName": "护肤",
      //   "clickUrl": null,
      //   "seq": 2
      // },
      // {
      //   "id": 3,
      //   "navbarName": "母婴",
      //   "clickUrl": null,
      //   "seq": 3
      // },
      // {
      //   "id": 4,
      //   "navbarName": "家居",
      //   "clickUrl": null,
      //   "seq": 4
      // },
      // {
      //   "id": 5,
      //   "navbarName": "电子数码",
      //   "clickUrl": null,
      //   "seq": 5
      // }
    ],
    shopList: [
      // {
      //   "id": 23,
      //   "name": "日本 资生堂CPB肌肤之钥保湿露化妆水保湿润肤滋润型170ml",
      //   "price": 775,
      //   "privilegePrice": 827,
      //   "imgUrl": "https://m.360buyimg.com/n12/jfs/t10657/4/2676826589/85281/7ccbca40/59fbffcbN08c35916.jpg!q70.jpg",
      //   "details": "https://img10.360buyimg.com/imgzone/jfs/t11212/112/941452233/317511/554cf0a3/59fc0359N981364c3.png;https://img10.360buyimg.com/imgzone/jfs/t11647/345/955084931/93629/ac02571e/59fc0359N5a8a5ef7.png;https://img10.360buyimg.com/imgzone/jfs/t11674/332/928667938/228303/83c3286e/59fc0359Nd92eeb15.png;https://img10.360buyimg.com/imgzone/jfs/t11458/30/928297559/130827/4b21b5a3/59fc035aNbd2055e1.jpg;https://img10.360buyimg.com/imgzone/jfs/t9742/289/2649914887/115539/c6797f63/59fc0341Ndfefedf1.jpg;https://img10.360buyimg.com/imgzone/jfs/t11725/313/977472497/140168/9c47a6b4/59fc0342N83e3f807.jpg",
      //   "remark": null,
      //   "createDate": null,
      //   "updateDate": null,
      //   "clickRate": 0,
      //   "buyRate": 0,
      //   "stock": 0,
      //   "isHot": "0",
      //   "isNew": "1",
      //   "classifyId": null,
      //   "shopGoodsImageList": null,
      //   "desc": null
      // },
      // {
      //   "id": 22,
      //   "name": "韩国进口 A.by Bom艾柏梵超能婴儿冰凝叶子面膜10片",
      //   "price": 129,
      //   "privilegePrice": 138,
      //   "imgUrl": "https://m.360buyimg.com/n12/jfs/t16969/88/1564110409/175802/5a26675e/5acf2422N76c30469.png!q70.jpg",
      //   "details": "https://img10.360buyimg.com/imgzone/jfs/t15079/250/1378141301/90210/c5411bbb/5a4ce51aNda84dc5a.jpg;https://img10.360buyimg.com/imgzone/jfs/t14554/230/1355421978/43906/d1b2e3d/5a4ce518N95b58aa5.jpg;https://img10.360buyimg.com/imgzone/jfs/t16174/26/1128731260/160481/c88be136/5a4ce512N58d61b46.jpg;https://img10.360buyimg.com/imgzone/jfs/t14737/209/1338124278/63666/481bb308/5a4ce520Nb26519d4.jpg;https:////img30.360buyimg.com/sku/jfs/t19075/243/1609006120/266561/710d3aa3/5ad06f17N4f7f152b.jpg;https://img10.360buyimg.com/imgzone/jfs/t15916/327/1199031650/68490/b0082cc/5a4ce521N64d24657.jpg\n",
      //   "remark": null,
      //   "createDate": null,
      //   "updateDate": null,
      //   "clickRate": 0,
      //   "buyRate": 0,
      //   "stock": 0,
      //   "isHot": "0",
      //   "isNew": "1",
      //   "classifyId": null,
      //   "shopGoodsImageList": null,
      //   "desc": null
      // },
      // {
      //   "id": 21,
      //   "name": "韩国进口 A.by Bom艾柏梵超能婴儿基因再生桃花面膜5片",
      //   "price": 89,
      //   "privilegePrice": 101,
      //   "imgUrl": "https://m.360buyimg.com/n12/jfs/t17983/118/1563399958/139443/efd76f63/5acf23d7Nd76e0a77.png!q70.jpg",
      //   "details": "https://img10.360buyimg.com/imgzone/jfs/t15802/158/1316273396/120942/2d01b87d/5a4efea2N8cc2fbe3.jpg;https://img10.360buyimg.com/imgzone/jfs/t14800/333/1703088600/38534/80f023c7/5a55855fNd5ef51de.jpg;https://img10.360buyimg.com/imgzone/jfs/t16276/276/1177227900/150449/af90e7d4/5a4efea2N0318e978.jpg;https://img10.360buyimg.com/imgzone/jfs/t14197/175/1423119730/94268/fc1265f1/5a4efe9bNc80c86d0.jpg;https://img10.360buyimg.com/imgzone/jfs/t14506/328/1440386772/118215/43d5e0b6/5a4efea2Ncef088fa.jpg;https://img10.360buyimg.com/imgzone/jfs/t14611/174/1709964950/130347/76ddd87d/5a558557N1873ca8e.jpg;https://img10.360buyimg.com/imgzone/jfs/t15082/240/1448420653/68120/a4cfb8f7/5a4efe8eNdd413c20.jpg;https://img10.360buyimg.com/imgzone/jfs/t14605/306/1440959264/63911/a25b2d3b/5a4efea2N2abb2c5e.jpg",
      //   "remark": null,
      //   "createDate": null,
      //   "updateDate": null,
      //   "clickRate": 0,
      //   "buyRate": 0,
      //   "stock": 0,
      //   "isHot": "0",
      //   "isNew": "1",
      //   "classifyId": null,
      //   "shopGoodsImageList": null,
      //   "desc": null
      // },
      // {
      //   "id": 20,
      //   "name": "品牌直采 捷俊（JAYJUN）防雾霾透白修护面膜27ml 10片/盒",
      //   "price": 170,
      //   "privilegePrice": 189,
      //   "imgUrl": "https://m.360buyimg.com/n12/jfs/t8449/52/2392309676/452472/94321a74/59cca5d0Nce6b2c02.jpg!q70.jpg",
      //   "details": "https://img13.360buyimg.com/cms/jfs/t17965/171/354796120/303498/7f82de87/5a6eb0a8N578f2343.jpg;https://img13.360buyimg.com/cms/jfs/t17947/171/361108889/190428/dda759b/5a6eb0afN8ea3ec36.jpg;https://img12.360buyimg.com/cms/jfs/t16561/339/1923038925/133524/1143567d/5a6eb0b6N2b31e442.jpg;https://img20.360buyimg.com/cms/jfs/t16711/196/352610166/148325/6dde9ab7/5a6eb0cfN2c4746af.jpg;https://img30.360buyimg.com/cms/jfs/t19267/208/346999378/156410/1c807d8c/5a6eb0d2N7dbac4b3.jpg;https://img30.360buyimg.com/cms/jfs/t15454/106/2105960102/124164/d99166ef/5a6eb12eN19dcc83a.jpg;https://img11.360buyimg.com/cms/jfs/t16606/208/349833968/155296/6d8db454/5a6eb147Nf8344ead.jpg;https://img20.360buyimg.com/cms/jfs/t15748/64/2000451802/89546/7fedc0f7/5a6eb153Neee61999.jpg;https://img10.360buyimg.com/cms/jfs/t17749/303/356150240/232440/52fed16a/5a6eb169N778e8c12.jpg",
      //   "remark": null,
      //   "createDate": null,
      //   "updateDate": null,
      //   "clickRate": 0,
      //   "buyRate": 0,
      //   "stock": 0,
      //   "isHot": "0",
      //   "isNew": "1",
      //   "classifyId": null,
      //   "shopGoodsImageList": null,
      //   "desc": null
      // },
      // {
      //   "id": 19,
      //   "name": "品牌直采 捷俊(JAYJUN)玫瑰精华面膜25ml*10 补水保湿",
      //   "price": 135,
      //   "privilegePrice": 168,
      //   "imgUrl": "https://m.360buyimg.com/n12/jfs/t3085/190/8770910845/187674/11f0949d/58c89972N2e5c175a.jpg!q70.jpg",
      //   "details": "https://img20.360buyimg.com/vc/jfs/t5140/134/330610343/294446/9e31bdf4/58fdcd46N6419e6f3.jpg;http://img20.360buyimg.com/vc/jfs/t4684/19/4035557253/114995/7d35afc3/59092f1dN6860e95d.jpg;https://img20.360buyimg.com/vc/jfs/t4438/148/4036236532/135006/14271bef/59092f1cNbffc9a5f.jpg;https://img10.360buyimg.com/cms/jfs/t11683/102/133142231/306297/f0da95c6/59e8606aNbefec256.jpg;https://img20.360buyimg.com/vc/jfs/t5131/283/899507858/141629/75e93696/59092f21N58eba3d9.jpg;https://img13.360buyimg.com/cms/jfs/t11245/200/139867059/59473/256356fc/59e8608fNdb60d364.jpg;https://img11.360buyimg.com/cms/jfs/t7873/161/2797699140/225589/d34008c6/59e855a5N6539c5a5.jpg",
      //   "remark": null,
      //   "createDate": null,
      //   "updateDate": null,
      //   "clickRate": 0,
      //   "buyRate": 0,
      //   "stock": 0,
      //   "isHot": "0",
      //   "isNew": "1",
      //   "classifyId": null,
      //   "shopGoodsImageList": null,
      //   "desc": null
      // }
    ],
    state:1//导航选择颜色状态标记
     
  },
  /**
   * 导航跳转
   */
  onNav(e){
    // let page = e.target.dataset.index;
    this.setData({
      state:e.target.dataset.index
    })
    this.getNavShopItem(this.data.state,this.data.size);
  },
  //轮播图
  getBanner:function() {
    let that =this;
    request({
      url:"/home/banners?key=97303b00afbd4ea0a2c9074b9aa9cfe3",
      success(res){
        that.setData({
          imgUrls: res.result
        })
        
      }
    })
  },
  //导航
  getNavBar:function() {
    let that =this;
    request({
      url: "/home/navBar?key=97303b00afbd4ea0a2c9074b9aa9cfe3",
      success(res){
        that.setData({
          navigate:res.result
        })
      }
    })
  },
  //商品列表
  getShopItem:function(page,size) {
    let that = this;
    request({
      url:"/goods/getHotGoodsList?key=97303b00afbd4ea0a2c9074b9aa9cfe3"+"&page="+page+"&size="+size,
      success(res){
        let oldArr=that.data.shopList;
        let newArr=oldArr.concat(res.result.list);
        that.setData({
          shopList: newArr
        })
      }
    })
  },
  //点击导航跳转商品列表
  getNavShopItem:function(page,size) {
    let that = this;
    request({
      url:  "/goods/getHotGoodsList?key=97303b00afbd4ea0a2c9074b9aa9cfe3"+"&page=" + page + "&size=" + size,
      success(res){
        that.setData({
          shopList:res.result.list
        })
      }
    })
  },

  //滑到底部加载数据
  addItem(e){
    let that = this;
    let oldPage =this.data.page;
    let newPage=oldPage+1;

    this.setData({
      page: newPage
    })
    wx.showLoading({
      title: '加载中',
      success(){
        that.getShopItem(that.data.page, that.data.size);
      }
    })
    setTimeout(function(){
      wx.hideLoading()
    },1000);
  },
  //跳转到详细页面
  shopDetail(e){
    console.log(e);
    wx.navigateTo({
      url: "../detail/detail?id="+e.currentTarget.id,
    })
  },
  onLoad: function () {
    //轮播图
    this.getBanner();
    // 导航
    this.getNavBar();
    // 商品列表
    this.getShopItem(this.data.page,this.data.size)
    
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
