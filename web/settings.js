/*!
 * zswhcm-portal
 * Copyright(c) 2015 zswhcm-portal <3203317@qq.com>
 * MIT Licensed
 */
'use strict';

module.exports = {
	cookie: {
		secret: 'zswhcm-portal'
	}, corp: {
		name: '河南正森文化传媒有限公司',
		website: 'http://www.dolalive.com/'
	}, mysql: {
		database: 'wifi',
		host: '127.0.0.1',
		port: 22306,
		user: 'root',
		password: 'password',
		connectionLimit: 50
	}, html: {
		cdn: 'http://www.foreworld.net/js/',
		static_res: '/public/',
		external_res: 'http://www.foreworld.net/public/',
		pagesize: 10,
		cache_time: 1000 * 60 * 60,
		fileServ: '/public/fileServ/'
	}
};