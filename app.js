$(function() {

    var API;
    if (location.href.indexOf('localhost') > -1) {
        API = 'http://202.107.202.82:8889/';
    }else if (location.href.indexOf('app.h5') > -1) {
        API = 'http://wxapi.ihaozhuo.com/';
    }
    var ua = navigator.userAgent;
    var isAndroid = ua.indexOf('Android') > -1 || ua.indexOf('Adr') > -1; //android终端
    var isiOS = !!ua.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端



    $.ajax({
        url: 'http://wxapi.ihaozhuo.com/' + 'getWeiXinSign',
        data: JSON.stringify({
            url: location.href
        }),
        type: 'post',
        contentType: 'text/plain',
        success: function(res){
            if(res.code == 200){
                wx.config({
                    debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
                    appId: res.data.appId, // 必填，公众号的唯一标识
                    timestamp: res.data.timestamp, // 必填，生成签名的时间戳
                    nonceStr: res.data.nonceStr, // 必填，生成签名的随机串
                    signature: res.data.signature,// 必填，签名，见附录1
                    jsApiList: [
                        'onMenuShareTimeline',
                        'onMenuShareAppMessage',
                        'onMenuShareQQ',
                        'onMenuShareWeibo',
                        'onMenuShareQZone'
                    ] // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
                });
            }
        }
    });
    wx.ready(function(){
        wx.onMenuShareTimeline({
            title: '看不懂体检报告？耽误最佳治疗时间怎么办？莫慌！', // 分享标题
            link: location.href, // 分享链接
            imgUrl: 'http://app.h5.ihaozhuo.com/activity/20170516/images/share.png', // 分享图标
            success: function () {
                // 用户确认分享后执行的回调函数
            },
            cancel: function () {
                // 用户取消分享后执行的回调函数
            }
        });
        wx.onMenuShareAppMessage({
            title: '看不懂体检报告？耽误最佳治疗时间怎么办？莫慌！', // 分享标题
            desc: '三甲权威医生1对1电话报告解读，不跑医院，触手可及', // 分享描述
            link: location.href, // 分享链接
            imgUrl: 'http://app.h5.ihaozhuo.com/activity/20170516/images/share.png', // 分享图标
            success: function () {
                // 用户确认分享后执行的回调函数
            },
            cancel: function () {
                // 用户取消分享后执行的回调函数
            }
        });
    })

    

    numChange();
    setInterval(numChange, 5000);
    function numChange(){
        var _html = '';
        $.ajax({
            url: 'http://activity.ihaozhuo.com/get518Num',
            type: 'post',
            contentType: 'text/plain',
            success: function(res){
                if(res.code == 200){
                    var _num = res.data.toString();
                    for(var i in _num){
                        _html += '<li>' + _num[i] + '</li>';
                    }
                    $('#J_NumList').html(_html);
                }
            }
        });
    }

    $('#J_Native').on('tap', function(){
        if(ua.toUpperCase().indexOf('YJK') > -1){
            location.href = location.href + '&page=getTelInterpretation&flag=1';
        }else{
            if(isiOS){
                window.location = 'm.yjk.com://app.h5.ihaozhuo.com/activity/20170516/index.html?v=3&page=getTelInterpretation&flag=1';
            }else{
                window.location = 'yjk://app.h5.ihaozhuo.com/activity/20170516/index.html?v=3&page=getTelInterpretation&flag=1';
            }
            
        }
    });


})