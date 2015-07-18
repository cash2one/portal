/*!
 * zswhcb-portal
 * Copyright(c) 2015 zswhcb-portal <3203317@qq.com>
 * MIT Licensed
 */
'use strict';

var conf = require('../settings');

var virtualPath = '/';

exports.indexUI = function(req, res, next){
	var id = req.params.id;

	res.render('wifi/Index', {
		title: conf.corp.name,
		description: '',
		keywords: ',Bootstrap,nodejs,express,javascript,java,html5',
		virtualPath: virtualPath,
		cdn: conf.cdn,
		data: {
			id: id
		}
	});
};