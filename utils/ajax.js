const api ="https://100boot.cn/wxShop";
function request(opt) {
  wx.request({
    url: api+opt.url,
    method:opt.method || "GET",
    success(res){
      opt.success(res.data)
    },
    fail(res){
      console.log("调用接口失败：" + res);
    }
  })
}
//传出request
export {request}