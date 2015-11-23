/*!
 * hnzswh-dolalive
 * Copyright(c) 2015 hnzswh-dolalive <3203317@qq.com>
 * MIT Licensed
 */
'use strict';

var util = require('speedt-utils'),
	express = util.express;

var front = {
	house: require('../controllers/front/house'),
	shop: require('../controllers/front/shop'),
	site: require('../controllers/front/site')
};
var back = {
	customer: require('../controllers/back/customer')
};
var manage = {
	comment: require('../controllers/manage/comment'),
	house: {
		corp: require('../controllers/manage/house/corp'),
		project: require('../controllers/manage/house/project')
	},
	customer: require('../controllers/manage/customer'),
	role: require('../controllers/manage/role'),
	menu: require('../controllers/manage/menu'),
	site: require('../controllers/manage/site'),
	user: require('../controllers/manage/user')
};

/**
 *
 * @param
 * @return
 */
module.exports = function(app){
	proc_manage(app);
	proc_back(app);
	proc_front(app);
};

/**
 *
 * @param
 * @return
 */
function proc_front(app){
	// app.get('/index.html$', site.indexUI);
	// app.get('/', site.indexUI);
	// app.get('/w/:wifi_mac/', wifi.indexUI);

	// 房产评论
	app.get('/house/project/:id/comment/', front.house.commentUI);
	// 房产
	app.get('/house/project/:id/', front.house.projectUI);
	// 活动报名
	app.get('/house/project/:id/sign/', front.house.signUI);
	// 房贷计算
	app.get('/house/caculate/', front.house.caculateUI);
	// 房产
	app.get('/house/:house/', front.house.houseUI);
	// 房产
	app.get('/house/', function (req, res, next){ req.flash('page_id', '725ece97e31143248fff4802354f4de6'); req.flash('zone_id', ''); next(); }, front.site.findAds_zoneUI, front.house.indexUI);
	// 商铺的优惠券领取
	app.get('/shop/coupon/receive/', front.shop.coupon_receiveUI);
	// 商铺的优惠券
	app.get('/shop/coupon/', front.shop.couponUI);
	// 商铺
	app.get('/shop/:shop/', front.shop.indexUI);
	// 首页
	app.get('/:zone/', front.site.checkExistOpenSite, function (req, res, next){ req.flash('page_id', '5652b896e9c249c41d331caa'); next(); }, front.site.findAds_zoneUI, front.site.zoneUI);
	// 默认
	app.get('/', function (req, res, next){ res.redirect('/zz/'); });
}

/**
 *
 * @param
 * @return
 */
function proc_back(app){
	app.get('/user/login', back.customer.loginUI);
	app.post('/user/login$', express.valiPostData, back.customer.login);
	app.get('/user/login/success$', back.customer.login_validate, back.customer.login_success);
	app.get('/user/logout$', back.customer.logoutUI);
	// 我的
	app.get('/i/', back.customer.login_validate, back.customer.indexUI);
}

/**
 *
 * @param
 * @return
 */
function proc_manage(app){
	// 用户相关
	app.get('/manage/user/login$', manage.user.loginUI);
	app.post('/manage/user/login$', express.valiPostData, manage.user.login);
	app.get('/manage/user/logout$', manage.user.logoutUI);
	app.get('/manage/user/changePwd$', manage.user.login_validate, manage.user.changePwdUI);
	// 用户管理
	app.get('/manage/user/', manage.user.login_validate, manage.user.indexUI);
	// 菜单相关
	app.get('/manage/menu/', manage.user.login_validate, manage.menu.indexUI);
	app.post('/manage/menu/:pid', manage.user.login_validate, manage.menu.children);
	app.post('/manage/menu/list/:pid', manage.user.login_validate, manage.menu.indexUI_list);
	// 角色管理
	app.get('/manage/role/', manage.user.login_validate, manage.role.indexUI);

	// 评论信息维护
	app.get('/manage/comment/', manage.user.login_validate, manage.comment.indexUI);
	// 房产频道
	app.get('/manage/house/corp/', manage.user.login_validate, manage.house.corp.indexUI);
	app.get('/manage/house/corp/add', manage.user.login_validate, manage.house.corp.addUI);
	app.get('/manage/house/corp/edit', manage.user.login_validate, manage.house.corp.editUI);
	app.post('/manage/house/corp/add', express.valiPostData, manage.user.login_validate, manage.house.corp.add);
	app.post('/manage/house/corp/edit', express.valiPostData, manage.user.login_validate, manage.house.corp.edit);
	app.get('/manage/house/project/', manage.user.login_validate, manage.house.project.indexUI);
	app.get('/manage/house/project/add', manage.user.login_validate, manage.house.project.addUI);
	app.get('/manage/house/project/edit', manage.user.login_validate, manage.house.project.editUI);
	app.post('/manage/house/project/add', express.valiPostData, manage.user.login_validate, manage.house.project.add);
	app.post('/manage/house/project/edit', express.valiPostData, manage.user.login_validate, manage.house.project.edit);
	// 客户管理
	app.get('/manage/customer/', manage.user.login_validate, manage.customer.indexUI);
	app.get('/manage/customer/add', manage.user.login_validate, manage.customer.addUI);
	app.get('/manage/customer/edit', manage.user.login_validate, manage.customer.editUI);
	app.post('/manage/customer/add', express.valiPostData, manage.user.login_validate, manage.customer.add);
	app.post('/manage/customer/edit', express.valiPostData, manage.user.login_validate, manage.customer.edit);

	// 欢迎页
	app.get('/manage/welcome/', manage.user.login_validate, manage.site.welcomeUI);
	// 管理主框架页
	app.post('/manage/side/:pid', manage.user.login_validate, manage.site.indexUI_side);
	app.get('/manage/', manage.user.login_validate, manage.site.indexUI);
}