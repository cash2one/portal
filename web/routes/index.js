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
	house_project: require('../controllers/manage/house_project'),
	customer: require('../controllers/manage/customer'),
	role: require('../controllers/manage/role'),
	menu: require('../controllers/manage/menu'),
	site: require('../controllers/manage/site'),
	manager: require('../controllers/manage/manager')
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

	// 房产
	app.get('/house/:house/', front.house.houseUI);
	// 房产
	app.get('/house/', front.house.indexUI);
	// 商铺的优惠券领取
	app.get('/shop/coupon/receive/', front.shop.coupon_receiveUI);
	// 商铺的优惠券
	app.get('/shop/coupon/', front.shop.couponUI);
	// 商铺
	app.get('/shop/:shop/', front.shop.indexUI);
	// 首页
	app.get('/:zone/', front.site.checkExistOpenSite, function (req, res, next){ req.flash('page_id', 'dad9657792274e0e95a15c8901573c11'); next(); }, front.site.findAds_zoneUI, front.site.zoneUI);
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
	// 我的
	app.get('/i/', back.customer.login_validate, back.customer.indexUI);
}

/**
 *
 * @param
 * @return
 */
function proc_manage(app){
	app.get('/manager/login$', manage.manager.loginUI);
	app.post('/manager/login$', express.valiPostData, manage.manager.login);
	app.get('/manager/logout$', manage.manager.logoutUI);
	app.get('/manager/changePwd$', manage.manager.login_validate, manage.manager.changePwdUI);

	// 评论信息维护
	app.get('/manage/comment/', manage.manager.login_validate, manage.comment.indexUI);

	// 房产项目
	app.get('/manage/house/project/', manage.manager.login_validate, manage.house_project.indexUI);

	// 客户管理
	app.get('/manage/customer/', manage.manager.login_validate, manage.customer.indexUI);

	// 角色管理
	app.get('/manage/role/', manage.manager.login_validate, manage.role.indexUI);

	// 用户管理
	app.get('/manage/manager/', manage.manager.login_validate, manage.manager.indexUI);

	// 菜单
	app.get('/manage/menu/', manage.manager.login_validate, manage.menu.indexUI);
	app.post('/manage/menu/:pid', manage.manager.login_validate, manage.menu.children);
	app.post('/manage/menu/list/:pid', manage.manager.login_validate, manage.menu.indexUI_list);

	app.get('/manage/welcome/', manage.manager.login_validate, manage.site.welcomeUI);
	app.post('/manage/side/:pid', manage.manager.login_validate, manage.site.indexUI_side);
	// manager login
	app.get('/manage/', manage.manager.login_validate, manage.site.indexUI);
}