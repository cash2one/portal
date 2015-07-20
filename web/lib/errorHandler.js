/*!
 * zswhcb-portal
 * Copyright(c) 2015 zswhcb-portal <3203317@qq.com>
 * MIT Licensed
 */
'use strict';

exports.appErrorProcess = function(app){

	app.configure(function(){
		// error hanlder
		app.use(function (req, res, next){
			if(req.xhr){
				return res.send({
					success: false,
					msg: 'Not found'
				});
			}
			res.send(404, 'Not found');
		});

		app.use(function (err, req, res, next){
			if(req.xhr){
				return res.send({
					success: false,
					msg: err
				});
			}
			res.send(500, err.message);
		});

		process.on('uncaughtException', function (err){
			console.log(err)
		});
	});
};