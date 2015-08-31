/*!
 * hnzswh-dolalive
 * Copyright(c) 2015 hnzswh-dolalive <3203317@qq.com>
 * MIT Licensed
 */
'use strict';

var util = require('speedt-utils'),
	express = util.express;

var front = {
	site: require('../controllers/front/site')
};
var back = {};
var manage = {};

/**
 *
 * @param
 * @return
 */
module.exports = function(app){
	proc_front(app);
	proc_back(app);
	proc_manage(app);
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

	app.get('/:zone/', front.site.checkExistOpenSite, function (req, res, next){ req.flash('page_id', '1'); next(); }, front.site.findAds_zoneUI, front.site.zoneUI);
}

/**
 *
 * @param
 * @return
 */
function proc_back(app){
	// TODO
}

/**
 *
 * @param
 * @return
 */
function proc_manage(app){
	// TODO
}