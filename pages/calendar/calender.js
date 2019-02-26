// pages/calendar/calender.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    weekArr: ["日", "一", "二", "三", "四", "五", "六"],
    nowMonthdayArr: [],
    begainMonthdayArr: [],
    nextMontdayArr: [],
    year: "",
    month: "",
    active:""
  },
  getDate: function() {
    let arr = [];
    let lastArr = [];
    let nextArr = [];
    let num;
    let date = new Date();
    let nowDay = date.getDate(); //当前几号
    let nowMonth = date.getMonth() + 1; //当前的月份
    let nowYear = date.getFullYear();
    //一个月中的第一天礼拜几
    let firstDay = new Date(nowYear, nowMonth - 1, 1);
    let begain = firstDay.getDay();

    if (nowMonth == 1 || nowMonth == 3 || nowMonth == 5 || nowMonth == 7 || nowMonth == 8 || nowMonth == 10 || nowMonth == 12) {
      for (let i = 1; i <= 31; i++) {
        arr.push(i);
      }
      //设置上个月日子
      if (nowMonth == 3) {
        num = 28 - begain + 1;
        for (let i = begain; i > 0; i--) {
          lastArr.push(num);
          num++;
        }
      } else {
        num = 30 - firstDay + 1
        for (let i = firstDay; i > 0; i--) {
          lastArr.push(num);
          num++;
        }
      }
    } else if (nowMonth == 4 || nowMonth == 6 || nowMonth == 9 || nowMonth == 11) {
      for (let i = 1; i <= 30; i++) {
        arr.push(i);
      }
      //设置上个月日子
      num = 31 - begain+ 1
      for (let i = begain; i > 0; i--) {
        lastArr.push(num);
        num++;
      }
    } else {
      for (let i = 1; i <= 28; i++) {
        arr.push(i);
      }
      //使用上个月日子
      num = 31 - begain + 1
      console.log(num)
      for (let i = begain; i > 0; i--) {
        lastArr.push(num);
        num++;
      }
    }
    if (nowYear % 4 == 0 && nowMonth == 2) {
      for (let i = 1; i <= 29; i++) {
        arr.push(i);
      }
      //使用上个月日子
      num = 31 - begain + 1
     
      for (let i = begain; i > 0; i--) {
        lastArr.push(num);
        num++;
      }
    }
    if (nowYear % 4 == 0 && nowMonth == 3) {
      num = 29 - begain + 1
      for (let i = begain; i > 0; i--) {
        lastArr.push(num);
        num++;
      }
    }

    //一个月中的最后一天礼拜几
    let lastDay = new Date(nowYear, nowMonth - 1, arr.length);
    let next = lastDay.getDay();
    if (next == 0){
      nextArr=[];
    }else{
      for(let i=1;i<=(6-next);i++){
        nextArr.push(i);
      }
    }

    this.setData({
      month: nowMonth,
      year: nowYear,
      nowMonthdayArr: arr,
      begainMonthdayArr: lastArr,
      nextMontdayArr:nextArr,
      active:nowDay
    })

  },
  touch:function(e){
    let index = e.currentTarget.dataset.touch
    this.setData({
      active:index
    })
  },  
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.getDate();
  
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