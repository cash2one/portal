/*!
 * hnzswh-dolalive
 * Copyright(c) 2015 hnzswh-dolalive <3203317@qq.com>
 * MIT Licensed
 */
'use strict';

module.exports = {
	cookie: {
		secret: 'hnzswh-dolalive'
	}, corp: {
		name: '多啦生活',
		website: 'http://www.dolalive.com/'
	}, mysql: {
		database: 'dolalive',
		host: '127.0.0.1',
		port: 22306,
		user: 'root',
		password: 'password',
		connectionLimit: 50
	}, html: {
		// cdn: 'http://127.0.0.1:24080/js/',
		cdn: 'http://www.foreworld.net/js/',
		static_res: '/public/',
		external_res: 'http://www.foreworld.net/public/',
		pagesize: 10,
		cache_time: 1000 * 3,
		fileServ: 'http://127.0.0.1/asset/public/6eb3e005b155437283fc4968840f59f1/'
	}, mail: {
		secureConnection: true,
		host: 'smtp.163.com',
		port: 465,
		to: ['huangxin@foreworld.net'],
		auth: {
			user: 'firefrog@163.com',
			pass: ''
		}
	}
};