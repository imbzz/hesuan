const AdminBiz = require('../../../../biz/admin_biz.js'); 
const pageHelper = require('../../../../helper/page_helper.js'); 
const PassportBiz = require('../../../../biz/passport_biz.js');

Page({

	/**
	 * 页面的初始数据
	 */
	data: {
		name: '',
		pwd: '',
	},

	/**
	 * 生命周期函数--监听页面加载
	 */
	onLoad: function (options) {
		AdminBiz.clearAdminToken();
	},

	/**
	 * 生命周期函数--监听页面初次渲染完成
	 */
	onReady: function () {

	},

	/**
	 * 生命周期函数--监听页面显示
	 */
	onShow: function () {},

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

	url: function (e) {
		pageHelper.url(e, this);
	},

	bindBackTap: function (e) {
		wx.reLaunch({
			url: pageHelper.fmtURLByPID('/pages/my/index/my_index'),
		});
	},

	bindLoginTap: async function (e) {
        let result=PassportBiz.adminLogin(this.data.name, this.data.pwd, this);
        let temp=result;
		return temp;
    },
    bindContact: function(e){
        wx.redirectTo({
			url: '../../../about_us/about_us',
		});
    }

})