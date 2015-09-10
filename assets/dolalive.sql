/*
Navicat MySQL Data Transfer

Source Server         : hq-mysql-1:22306
Source Server Version : 50623
Source Host           : 127.0.0.1:22306
Source Database       : wifi

Target Server Type    : MYSQL
Target Server Version : 50623
File Encoding         : 65001

Date: 2015-09-10 10:23:52
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `s_menu`
-- ----------------------------
DROP TABLE IF EXISTS `s_menu`;
CREATE TABLE `s_menu` (
  `id` varchar(32) NOT NULL DEFAULT '',
  `pid` varchar(32) DEFAULT NULL,
  `menu_name` varchar(32) DEFAULT NULL,
  `menu_url` varchar(256) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of s_menu
-- ----------------------------
INSERT INTO `s_menu` VALUES ('1', '0', '美食', null);
INSERT INTO `s_menu` VALUES ('2', '0', '娱乐', null);
INSERT INTO `s_menu` VALUES ('3', '0', '出行', null);
INSERT INTO `s_menu` VALUES ('4', '0', '管家', null);
INSERT INTO `s_menu` VALUES ('5', '0', '住房', null);
INSERT INTO `s_menu` VALUES ('6', '0', '美保', null);
INSERT INTO `s_menu` VALUES ('7', '0', '配送', null);
INSERT INTO `s_menu` VALUES ('8', '0', '其他', null);

-- ----------------------------
-- Table structure for `s_user`
-- ----------------------------
DROP TABLE IF EXISTS `s_user`;
CREATE TABLE `s_user` (
  `id` varchar(32) NOT NULL DEFAULT '',
  `user_name` varchar(32) DEFAULT NULL,
  `user_pass` varchar(32) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of s_user
-- ----------------------------

-- ----------------------------
-- Table structure for `w_ad`
-- ----------------------------
DROP TABLE IF EXISTS `w_ad`;
CREATE TABLE `w_ad` (
  `id` varchar(32) NOT NULL,
  `AD_NAME` varchar(32) DEFAULT NULL COMMENT '广告名称',
  `START_TIME` datetime DEFAULT NULL COMMENT '开始时间',
  `END_TIME` datetime DEFAULT NULL COMMENT '结束时间',
  `SORT` int(11) DEFAULT NULL,
  `AD_PIC` varchar(256) DEFAULT NULL,
  `AD_TYPE` varchar(32) DEFAULT NULL COMMENT '广告类型',
  `CORP_ID` varchar(32) DEFAULT NULL,
  `ZONE_ID` varchar(32) DEFAULT NULL,
  `PAGE_POSITION_ID` varchar(32) DEFAULT NULL,
  `LINK_URL` varchar(128) DEFAULT NULL,
  `CREATE_TIME` datetime DEFAULT NULL COMMENT '创建时间',
  `CREATE_USER_ID` varchar(32) DEFAULT NULL,
  `STATUS` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='广告';

-- ----------------------------
-- Records of w_ad
-- ----------------------------
INSERT INTO `w_ad` VALUES ('058526f3a2d84ffb8d4736c136ee4207', null, '2015-08-24 17:51:03', '2015-10-02 17:51:30', '1', '201503/2/201508/tj1.jpg', '3cfa3945f6cc4b468a13f8c6d5d4f473', 'aa4bcd4b0e034243be6054e0635066aa', '8eff5b4b478844b383e54a8e5c98449a', '841ede8c0a9943cb9f2714e9dc840e5a', null, null, null, '1');
INSERT INTO `w_ad` VALUES ('1', null, '2015-08-24 17:51:03', '2015-10-02 17:51:30', '7', '201503/2/201508/tj7.jpg', '3cfa3945f6cc4b468a13f8c6d5d4f473', 'aa4bcd4b0e034243be6054e0635066aa', '8eff5b4b478844b383e54a8e5c98449a', '841ede8c0a9943cb9f2714e9dc840e5a', null, null, null, '1');
INSERT INTO `w_ad` VALUES ('111', null, '2015-08-24 17:51:03', '2015-10-02 17:51:30', '1', '201503/2/201508/tj1.jpg', '3cfa3945f6cc4b468a13f8c6d5d4f473', 'aa4bcd4b0e034243be6054e0635066aa', '8eff5b4b478844b383e54a8e5c98449a', '60b33f3be6d0481884e1cda8b2155b34', null, null, null, '1');
INSERT INTO `w_ad` VALUES ('2', null, '2015-08-24 17:51:03', '2015-10-02 17:51:30', '8', '201503/2/201508/tj8.jpg', '3cfa3945f6cc4b468a13f8c6d5d4f473', 'aa4bcd4b0e034243be6054e0635066aa', '8eff5b4b478844b383e54a8e5c98449a', '841ede8c0a9943cb9f2714e9dc840e5a', null, null, null, '1');
INSERT INTO `w_ad` VALUES ('222', null, '2015-08-24 17:51:03', '2015-10-02 17:51:30', '2', '201503/2/201508/tj2.jpg', '3cfa3945f6cc4b468a13f8c6d5d4f473', 'aa4bcd4b0e034243be6054e0635066aa', '8eff5b4b478844b383e54a8e5c98449a', '60b33f3be6d0481884e1cda8b2155b34', null, null, null, '1');
INSERT INTO `w_ad` VALUES ('2463a20ded434a5c860a00f909965e2e', null, '2015-08-24 17:51:03', '2015-10-02 17:51:30', '19', '201503/2/201508/2463a20ded434a5c860a00f909965e2e.jpg', '3cfa3945f6cc4b468a13f8c6d5d4f473', '6af9c938060944df8225ab18e2bea621', '8eff5b4b478844b383e54a8e5c98449a', '9b484e073d9b4201859650551f52f5eb', '1.html', null, null, '1');
INSERT INTO `w_ad` VALUES ('3', null, '2015-08-24 17:51:03', '2015-10-02 17:51:30', '9', '201503/2/201508/tj1.jpg', '3cfa3945f6cc4b468a13f8c6d5d4f473', 'aa4bcd4b0e034243be6054e0635066aa', '8eff5b4b478844b383e54a8e5c98449a', '841ede8c0a9943cb9f2714e9dc840e5a', null, null, null, '1');
INSERT INTO `w_ad` VALUES ('333', null, '2015-08-24 17:51:03', '2015-10-02 17:51:30', '1', '201503/2/201508/img2.jpg', '3cfa3945f6cc4b468a13f8c6d5d4f473', 'aa4bcd4b0e034243be6054e0635066aa', '8eff5b4b478844b383e54a8e5c98449a', '258e597a238a471e8b052d5f9c806072', '333.html', null, null, '1');
INSERT INTO `w_ad` VALUES ('3333', null, '2015-08-24 17:51:03', '2015-10-02 17:51:30', '3', '201503/2/201508/tj3.jpg', '3cfa3945f6cc4b468a13f8c6d5d4f473', 'aa4bcd4b0e034243be6054e0635066aa', '8eff5b4b478844b383e54a8e5c98449a', '60b33f3be6d0481884e1cda8b2155b34', null, null, null, '1');
INSERT INTO `w_ad` VALUES ('4', null, '2015-08-24 17:51:03', '2015-10-02 17:51:30', '10', '201503/2/201508/tj2.jpg', '3cfa3945f6cc4b468a13f8c6d5d4f473', 'aa4bcd4b0e034243be6054e0635066aa', '8eff5b4b478844b383e54a8e5c98449a', '841ede8c0a9943cb9f2714e9dc840e5a', null, null, null, '1');
INSERT INTO `w_ad` VALUES ('444', null, '2015-08-24 17:51:03', '2015-10-02 17:51:30', '2', '201503/2/201508/img3.jpg', '3cfa3945f6cc4b468a13f8c6d5d4f473', 'aa4bcd4b0e034243be6054e0635066aa', '8eff5b4b478844b383e54a8e5c98449a', '258e597a238a471e8b052d5f9c806072', '444.html', null, null, '1');
INSERT INTO `w_ad` VALUES ('4444', null, '2015-08-24 17:51:03', '2015-10-02 17:51:30', '4', '201503/2/201508/tj4.jpg', '3cfa3945f6cc4b468a13f8c6d5d4f473', 'aa4bcd4b0e034243be6054e0635066aa', '8eff5b4b478844b383e54a8e5c98449a', '60b33f3be6d0481884e1cda8b2155b34', null, null, null, '1');
INSERT INTO `w_ad` VALUES ('5', null, '2015-08-24 17:51:03', '2015-10-02 17:51:30', '11', '201503/2/201508/tj3.jpg', '3cfa3945f6cc4b468a13f8c6d5d4f473', 'aa4bcd4b0e034243be6054e0635066aa', '8eff5b4b478844b383e54a8e5c98449a', '841ede8c0a9943cb9f2714e9dc840e5a', null, null, null, '1');
INSERT INTO `w_ad` VALUES ('555', null, '2015-08-24 17:51:03', '2015-10-02 17:51:30', '3', '201503/2/201508/img4.jpg', '3cfa3945f6cc4b468a13f8c6d5d4f473', 'aa4bcd4b0e034243be6054e0635066aa', '8eff5b4b478844b383e54a8e5c98449a', '258e597a238a471e8b052d5f9c806072', '555.html', null, null, '1');
INSERT INTO `w_ad` VALUES ('5555', null, '2015-08-24 17:51:03', '2015-10-02 17:51:30', '5', '201503/2/201508/tj5.jpg', '3cfa3945f6cc4b468a13f8c6d5d4f473', 'aa4bcd4b0e034243be6054e0635066aa', '8eff5b4b478844b383e54a8e5c98449a', '60b33f3be6d0481884e1cda8b2155b34', null, null, null, '1');
INSERT INTO `w_ad` VALUES ('6', null, '2015-08-24 17:51:03', '2015-10-02 17:51:30', '12', '201503/2/201508/tj4.jpg', '3cfa3945f6cc4b468a13f8c6d5d4f473', 'aa4bcd4b0e034243be6054e0635066aa', '8eff5b4b478844b383e54a8e5c98449a', '841ede8c0a9943cb9f2714e9dc840e5a', null, null, null, '1');
INSERT INTO `w_ad` VALUES ('652f5fc3bfe2450c86685dce373c2d70', null, '2015-08-24 17:51:03', '2015-10-02 17:51:30', '5', '201503/1/201508/652f5fc3bfe2450c86685dce373c2d70.jpg', '3cfa3945f6cc4b468a13f8c6d5d4f473', '6af9c938060944df8225ab18e2bea621', '8eff5b4b478844b383e54a8e5c98449a', '9b484e073d9b4201859650551f52f5eb', '2.html', null, null, '1');
INSERT INTO `w_ad` VALUES ('6666', null, '2015-08-24 17:51:03', '2015-10-02 17:51:30', '6', '201503/2/201508/tj6.jpg', '3cfa3945f6cc4b468a13f8c6d5d4f473', 'aa4bcd4b0e034243be6054e0635066aa', '8eff5b4b478844b383e54a8e5c98449a', '60b33f3be6d0481884e1cda8b2155b34', null, null, null, '1');
INSERT INTO `w_ad` VALUES ('7', null, '2015-08-24 17:51:03', '2015-10-02 17:51:30', '13', '201503/2/201508/tj5.jpg', '3cfa3945f6cc4b468a13f8c6d5d4f473', 'aa4bcd4b0e034243be6054e0635066aa', '8eff5b4b478844b383e54a8e5c98449a', '841ede8c0a9943cb9f2714e9dc840e5a', null, null, null, '1');
INSERT INTO `w_ad` VALUES ('7777', null, '2015-08-24 17:51:03', '2015-10-02 17:51:30', '7', '201503/2/201508/tj7.jpg', '3cfa3945f6cc4b468a13f8c6d5d4f473', 'aa4bcd4b0e034243be6054e0635066aa', '8eff5b4b478844b383e54a8e5c98449a', '60b33f3be6d0481884e1cda8b2155b34', null, null, null, '1');
INSERT INTO `w_ad` VALUES ('8', null, '2015-08-24 17:51:03', '2015-10-02 17:51:30', '14', '201503/2/201508/tj6.jpg', '3cfa3945f6cc4b468a13f8c6d5d4f473', 'aa4bcd4b0e034243be6054e0635066aa', '8eff5b4b478844b383e54a8e5c98449a', '841ede8c0a9943cb9f2714e9dc840e5a', null, null, null, '1');
INSERT INTO `w_ad` VALUES ('841ede8c0a9943cb9f2714e9dc840e5a', null, '2015-08-24 17:51:03', '2015-10-02 17:51:30', '2', '201503/2/201508/tj2.jpg', '3cfa3945f6cc4b468a13f8c6d5d4f473', '7126ea5c2c8f4177a756e87433d04bf6', '8eff5b4b478844b383e54a8e5c98449a', '841ede8c0a9943cb9f2714e9dc840e5a', null, null, null, '1');
INSERT INTO `w_ad` VALUES ('8888', null, '2015-08-24 17:51:03', '2015-10-02 17:51:30', '8', '201503/2/201508/tj8.jpg', '3cfa3945f6cc4b468a13f8c6d5d4f473', 'aa4bcd4b0e034243be6054e0635066aa', '8eff5b4b478844b383e54a8e5c98449a', '60b33f3be6d0481884e1cda8b2155b34', null, null, null, '1');
INSERT INTO `w_ad` VALUES ('8a9ad3c1a79d42ed8c8b9dfe341dd43d', null, '2015-08-24 17:51:03', '2015-10-02 17:51:30', '3', '201503/2/201508/tj3.jpg', '3cfa3945f6cc4b468a13f8c6d5d4f473', 'aa4bcd4b0e034243be6054e0635066aa', '8eff5b4b478844b383e54a8e5c98449a', '841ede8c0a9943cb9f2714e9dc840e5a', null, null, null, '1');
INSERT INTO `w_ad` VALUES ('9', null, '2015-08-24 17:51:03', '2015-10-02 17:51:30', '15', '201503/2/201508/tj7.jpg', '3cfa3945f6cc4b468a13f8c6d5d4f473', 'aa4bcd4b0e034243be6054e0635066aa', '8eff5b4b478844b383e54a8e5c98449a', '841ede8c0a9943cb9f2714e9dc840e5a', null, null, null, '1');
INSERT INTO `w_ad` VALUES ('9999', null, '2015-08-24 17:51:03', '2015-10-02 17:51:30', '9', '201503/2/201508/tj1.jpg', '3cfa3945f6cc4b468a13f8c6d5d4f473', 'aa4bcd4b0e034243be6054e0635066aa', '8eff5b4b478844b383e54a8e5c98449a', '60b33f3be6d0481884e1cda8b2155b34', null, null, null, '1');
INSERT INTO `w_ad` VALUES ('a44a718bf7be464d8658e5ef14b4427f', null, '2015-08-24 17:51:03', '2015-10-02 17:51:30', '4', '201503/2/201508/tj4.jpg', '3cfa3945f6cc4b468a13f8c6d5d4f473', 'aa4bcd4b0e034243be6054e0635066aa', '8eff5b4b478844b383e54a8e5c98449a', '841ede8c0a9943cb9f2714e9dc840e5a', null, null, null, '1');
INSERT INTO `w_ad` VALUES ('asdf', null, '2015-08-24 17:51:03', '2015-10-02 17:51:30', '11', '201503/2/201508/tj3.jpg', '3cfa3945f6cc4b468a13f8c6d5d4f473', 'aa4bcd4b0e034243be6054e0635066aa', '8eff5b4b478844b383e54a8e5c98449a', '60b33f3be6d0481884e1cda8b2155b34', null, null, null, '1');
INSERT INTO `w_ad` VALUES ('asdfadfsadfasdfasd', null, '2015-08-24 17:51:03', '2015-10-02 17:51:30', '15', '201503/2/201508/tj8.jpg', '3cfa3945f6cc4b468a13f8c6d5d4f473', 'aa4bcd4b0e034243be6054e0635066aa', '8eff5b4b478844b383e54a8e5c98449a', '08ccf8258cb0469d8e10fbb7b7ec3667', null, null, null, '1');
INSERT INTO `w_ad` VALUES ('asdfasdf', null, '2015-08-24 17:51:03', '2015-10-02 17:51:30', '12', '201503/2/201508/tj4.jpg', '3cfa3945f6cc4b468a13f8c6d5d4f473', 'aa4bcd4b0e034243be6054e0635066aa', '8eff5b4b478844b383e54a8e5c98449a', '60b33f3be6d0481884e1cda8b2155b34', null, null, null, '1');
INSERT INTO `w_ad` VALUES ('asdfsdf', null, '2015-08-24 17:51:03', '2015-10-02 17:51:30', '13', '201503/2/201508/tj5.jpg', '3cfa3945f6cc4b468a13f8c6d5d4f473', 'aa4bcd4b0e034243be6054e0635066aa', '8eff5b4b478844b383e54a8e5c98449a', '60b33f3be6d0481884e1cda8b2155b34', null, null, null, '1');
INSERT INTO `w_ad` VALUES ('asdfwer', null, '2015-08-24 17:51:03', '2015-10-02 17:51:30', '15', '201503/2/201508/tj7.jpg', '3cfa3945f6cc4b468a13f8c6d5d4f473', 'aa4bcd4b0e034243be6054e0635066aa', '8eff5b4b478844b383e54a8e5c98449a', '60b33f3be6d0481884e1cda8b2155b34', null, null, null, '1');
INSERT INTO `w_ad` VALUES ('asfasdfsdaf', null, '2015-08-24 17:51:03', '2015-10-02 17:51:30', '16', '201503/2/201508/tj8.jpg', '3cfa3945f6cc4b468a13f8c6d5d4f473', 'aa4bcd4b0e034243be6054e0635066aa', '8eff5b4b478844b383e54a8e5c98449a', '08ccf8258cb0469d8e10fbb7b7ec3667', null, null, null, '1');
INSERT INTO `w_ad` VALUES ('bbbvxcvbxcvb', null, '2015-08-24 17:51:03', '2015-10-02 17:51:30', '15', '201503/2/201508/tj6.jpg', '3cfa3945f6cc4b468a13f8c6d5d4f473', 'aa4bcd4b0e034243be6054e0635066aa', '8eff5b4b478844b383e54a8e5c98449a', '971769765f9c4a5d98372529cf483090', null, null, null, '1');
INSERT INTO `w_ad` VALUES ('bvcbxcv', null, '2015-08-24 17:51:03', '2015-10-02 17:51:30', '14', '201503/2/201508/tj6.jpg', '3cfa3945f6cc4b468a13f8c6d5d4f473', 'aa4bcd4b0e034243be6054e0635066aa', '8eff5b4b478844b383e54a8e5c98449a', '971769765f9c4a5d98372529cf483090', null, null, null, '1');
INSERT INTO `w_ad` VALUES ('bvn', null, '2015-08-24 17:51:03', '2015-10-02 17:51:30', '7', '201503/2/201508/tj6.jpg', '3cfa3945f6cc4b468a13f8c6d5d4f473', 'aa4bcd4b0e034243be6054e0635066aa', '8eff5b4b478844b383e54a8e5c98449a', '971769765f9c4a5d98372529cf483090', null, null, null, '1');
INSERT INTO `w_ad` VALUES ('bxcbxcv', null, '2015-08-24 17:51:03', '2015-10-02 17:51:30', '3', '201503/2/201508/tj6.jpg', '3cfa3945f6cc4b468a13f8c6d5d4f473', 'aa4bcd4b0e034243be6054e0635066aa', '8eff5b4b478844b383e54a8e5c98449a', '971769765f9c4a5d98372529cf483090', null, null, null, '1');
INSERT INTO `w_ad` VALUES ('bxcv', null, '2015-08-24 17:51:03', '2015-10-02 17:51:30', '10', '201503/2/201508/tj6.jpg', '3cfa3945f6cc4b468a13f8c6d5d4f473', 'aa4bcd4b0e034243be6054e0635066aa', '8eff5b4b478844b383e54a8e5c98449a', '971769765f9c4a5d98372529cf483090', null, null, null, '1');
INSERT INTO `w_ad` VALUES ('bxcvb', null, '2015-08-24 17:51:03', '2015-10-02 17:51:30', '4', '201503/2/201508/tj6.jpg', '3cfa3945f6cc4b468a13f8c6d5d4f473', 'aa4bcd4b0e034243be6054e0635066aa', '8eff5b4b478844b383e54a8e5c98449a', '971769765f9c4a5d98372529cf483090', null, null, null, '1');
INSERT INTO `w_ad` VALUES ('bxcvcbb', null, '2015-08-24 17:51:03', '2015-10-02 17:51:30', '11', '201503/2/201508/tj6.jpg', '3cfa3945f6cc4b468a13f8c6d5d4f473', 'aa4bcd4b0e034243be6054e0635066aa', '8eff5b4b478844b383e54a8e5c98449a', '971769765f9c4a5d98372529cf483090', null, null, null, '1');
INSERT INTO `w_ad` VALUES ('cb', null, '2015-08-24 17:51:03', '2015-10-02 17:51:30', '8', '201503/2/201508/tj6.jpg', '3cfa3945f6cc4b468a13f8c6d5d4f473', 'aa4bcd4b0e034243be6054e0635066aa', '8eff5b4b478844b383e54a8e5c98449a', '971769765f9c4a5d98372529cf483090', null, null, null, '1');
INSERT INTO `w_ad` VALUES ('cdfaedb7bb624f66902befaa10dbec27', null, '2015-08-24 17:51:03', '2015-10-02 17:51:30', '20', '201503/1/201508/cdfaedb7bb624f66902befaa10dbec27.jpg', '3cfa3945f6cc4b468a13f8c6d5d4f473', 'cf3d26e2cf0049d08fed02cdebc9c9cf', '8eff5b4b478844b383e54a8e5c98449a', '9b484e073d9b4201859650551f52f5eb', '3.html', null, null, '1');
INSERT INTO `w_ad` VALUES ('cv', null, '2015-08-24 17:51:03', '2015-10-02 17:51:30', '9', '201503/2/201508/tj6.jpg', '3cfa3945f6cc4b468a13f8c6d5d4f473', 'aa4bcd4b0e034243be6054e0635066aa', '8eff5b4b478844b383e54a8e5c98449a', '971769765f9c4a5d98372529cf483090', null, null, null, '1');
INSERT INTO `w_ad` VALUES ('cvbcvxb', null, '2015-08-24 17:51:03', '2015-10-02 17:51:30', '12', '201503/2/201508/tj6.jpg', '3cfa3945f6cc4b468a13f8c6d5d4f473', 'aa4bcd4b0e034243be6054e0635066aa', '8eff5b4b478844b383e54a8e5c98449a', '971769765f9c4a5d98372529cf483090', null, null, null, '1');
INSERT INTO `w_ad` VALUES ('cvbxcvvxcxcb', null, '2015-08-24 17:51:03', '2015-10-02 17:51:30', '13', '201503/2/201508/tj6.jpg', '3cfa3945f6cc4b468a13f8c6d5d4f473', 'aa4bcd4b0e034243be6054e0635066aa', '8eff5b4b478844b383e54a8e5c98449a', '971769765f9c4a5d98372529cf483090', null, null, null, '1');
INSERT INTO `w_ad` VALUES ('cvxb', null, '2015-08-24 17:51:03', '2015-10-02 17:51:30', '1', '201503/2/201508/tj6.jpg', '3cfa3945f6cc4b468a13f8c6d5d4f473', 'aa4bcd4b0e034243be6054e0635066aa', '8eff5b4b478844b383e54a8e5c98449a', '971769765f9c4a5d98372529cf483090', null, null, null, '1');
INSERT INTO `w_ad` VALUES ('cvxbzvczxvc', null, '2015-08-24 17:51:03', '2015-10-02 17:51:30', '5', '201503/2/201508/tj6.jpg', '3cfa3945f6cc4b468a13f8c6d5d4f473', 'aa4bcd4b0e034243be6054e0635066aa', '8eff5b4b478844b383e54a8e5c98449a', '971769765f9c4a5d98372529cf483090', null, null, null, '1');
INSERT INTO `w_ad` VALUES ('cvxvcbzvzcv', null, '2015-08-24 17:51:03', '2015-10-02 17:51:30', '16', '201503/2/201508/tj6.jpg', '3cfa3945f6cc4b468a13f8c6d5d4f473', 'aa4bcd4b0e034243be6054e0635066aa', '8eff5b4b478844b383e54a8e5c98449a', '971769765f9c4a5d98372529cf483090', null, null, null, '1');
INSERT INTO `w_ad` VALUES ('d1e1b3b9d0c24c8494c7fbe0e36921f2', null, '2015-08-24 17:51:03', '2015-10-02 17:51:30', '5', '201503/2/201508/tj5.jpg', '3cfa3945f6cc4b468a13f8c6d5d4f473', 'aa4bcd4b0e034243be6054e0635066aa', '8eff5b4b478844b383e54a8e5c98449a', '841ede8c0a9943cb9f2714e9dc840e5a', null, null, null, '1');
INSERT INTO `w_ad` VALUES ('d9a99f80e5b5409b8c166c1fe6afa7af', null, '2015-08-24 17:51:03', '2015-10-02 17:51:30', '6', '201503/2/201508/tj6.jpg', '3cfa3945f6cc4b468a13f8c6d5d4f473', 'aa4bcd4b0e034243be6054e0635066aa', '8eff5b4b478844b383e54a8e5c98449a', '841ede8c0a9943cb9f2714e9dc840e5a', null, null, null, '1');
INSERT INTO `w_ad` VALUES ('dafdfasdfasdf', null, '2015-08-24 17:51:03', '2015-10-02 17:51:30', '17', '201503/2/201508/tj8.jpg', '3cfa3945f6cc4b468a13f8c6d5d4f473', 'aa4bcd4b0e034243be6054e0635066aa', '8eff5b4b478844b383e54a8e5c98449a', '08ccf8258cb0469d8e10fbb7b7ec3667', null, null, null, '1');
INSERT INTO `w_ad` VALUES ('dfgh', null, '2015-08-24 17:51:03', '2015-10-02 17:51:30', '8', '201503/2/201508/tj8.jpg', '3cfa3945f6cc4b468a13f8c6d5d4f473', 'aa4bcd4b0e034243be6054e0635066aa', '8eff5b4b478844b383e54a8e5c98449a', '08ccf8258cb0469d8e10fbb7b7ec3667', null, null, null, '1');
INSERT INTO `w_ad` VALUES ('dfghfghfg', null, '2015-08-24 17:51:03', '2015-10-02 17:51:30', '10', '201503/2/201508/tj8.jpg', '3cfa3945f6cc4b468a13f8c6d5d4f473', 'aa4bcd4b0e034243be6054e0635066aa', '8eff5b4b478844b383e54a8e5c98449a', '08ccf8258cb0469d8e10fbb7b7ec3667', null, null, null, '1');
INSERT INTO `w_ad` VALUES ('dgh', null, '2015-08-24 17:51:03', '2015-10-02 17:51:30', '9', '201503/2/201508/tj8.jpg', '3cfa3945f6cc4b468a13f8c6d5d4f473', 'aa4bcd4b0e034243be6054e0635066aa', '8eff5b4b478844b383e54a8e5c98449a', '08ccf8258cb0469d8e10fbb7b7ec3667', null, null, null, '1');
INSERT INTO `w_ad` VALUES ('fg', null, '2015-08-24 17:51:03', '2015-10-02 17:51:30', '6', '201503/2/201508/tj8.jpg', '3cfa3945f6cc4b468a13f8c6d5d4f473', 'aa4bcd4b0e034243be6054e0635066aa', '8eff5b4b478844b383e54a8e5c98449a', '08ccf8258cb0469d8e10fbb7b7ec3667', null, null, null, '1');
INSERT INTO `w_ad` VALUES ('fgh', null, '2015-08-24 17:51:03', '2015-10-02 17:51:30', '11', '201503/2/201508/tj8.jpg', '3cfa3945f6cc4b468a13f8c6d5d4f473', 'aa4bcd4b0e034243be6054e0635066aa', '8eff5b4b478844b383e54a8e5c98449a', '08ccf8258cb0469d8e10fbb7b7ec3667', null, null, null, '1');
INSERT INTO `w_ad` VALUES ('fghsss', null, '2015-08-24 17:51:03', '2015-10-02 17:51:30', '12', '201503/2/201508/tj8.jpg', '3cfa3945f6cc4b468a13f8c6d5d4f473', 'aa4bcd4b0e034243be6054e0635066aa', '8eff5b4b478844b383e54a8e5c98449a', '08ccf8258cb0469d8e10fbb7b7ec3667', null, null, null, '1');
INSERT INTO `w_ad` VALUES ('g', null, '2015-08-24 17:51:03', '2015-10-02 17:51:30', '19', '201503/2/201508/tj7.jpg', null, 'aa4bcd4b0e034243be6054e0635066aa', '8eff5b4b478844b383e54a8e5c98449a', 'e24045b09ee34f6881188019ab8917b9', null, null, null, '1');
INSERT INTO `w_ad` VALUES ('gh', null, '2015-08-24 17:51:03', '2015-10-02 17:51:30', '2', '201503/2/201508/tj8.jpg', '3cfa3945f6cc4b468a13f8c6d5d4f473', 'aa4bcd4b0e034243be6054e0635066aa', '8eff5b4b478844b383e54a8e5c98449a', '08ccf8258cb0469d8e10fbb7b7ec3667', null, null, null, '1');
INSERT INTO `w_ad` VALUES ('ghj', null, '2015-08-24 17:51:03', '2015-10-02 17:51:30', '1', '201503/2/201508/tj8.jpg', '3cfa3945f6cc4b468a13f8c6d5d4f473', 'aa4bcd4b0e034243be6054e0635066aa', '8eff5b4b478844b383e54a8e5c98449a', '08ccf8258cb0469d8e10fbb7b7ec3667', null, null, null, '1');
INSERT INTO `w_ad` VALUES ('ghjk', null, '2015-08-24 17:51:03', '2015-10-02 17:51:30', '12', '201503/2/201508/tj7.jpg', null, 'aa4bcd4b0e034243be6054e0635066aa', '8eff5b4b478844b383e54a8e5c98449a', 'e24045b09ee34f6881188019ab8917b9', null, null, null, '1');
INSERT INTO `w_ad` VALUES ('ghjkfh', null, '2015-08-24 17:51:03', '2015-10-02 17:51:30', '5', '201503/2/201508/tj8.jpg', '3cfa3945f6cc4b468a13f8c6d5d4f473', 'aa4bcd4b0e034243be6054e0635066aa', '8eff5b4b478844b383e54a8e5c98449a', '08ccf8258cb0469d8e10fbb7b7ec3667', null, null, null, '1');
INSERT INTO `w_ad` VALUES ('ghjkghjk', null, '2015-08-24 17:51:03', '2015-10-02 17:51:30', '18', '201503/2/201508/tj7.jpg', null, 'aa4bcd4b0e034243be6054e0635066aa', '8eff5b4b478844b383e54a8e5c98449a', 'e24045b09ee34f6881188019ab8917b9', null, null, null, '1');
INSERT INTO `w_ad` VALUES ('ghkgkgk', null, '2015-08-24 17:51:03', '2015-10-02 17:51:30', '3', '201503/2/201508/tj7.jpg', null, 'aa4bcd4b0e034243be6054e0635066aa', '8eff5b4b478844b383e54a8e5c98449a', 'e24045b09ee34f6881188019ab8917b9', null, null, null, '1');
INSERT INTO `w_ad` VALUES ('gkkggkgjk', null, '2015-08-24 17:51:03', '2015-10-02 17:51:30', '5', '201503/2/201508/tj7.jpg', null, 'aa4bcd4b0e034243be6054e0635066aa', '8eff5b4b478844b383e54a8e5c98449a', 'e24045b09ee34f6881188019ab8917b9', null, null, null, '1');
INSERT INTO `w_ad` VALUES ('h', null, '2015-08-24 17:51:03', '2015-10-02 17:51:30', '6', '201503/2/201508/tj7.jpg', null, 'aa4bcd4b0e034243be6054e0635066aa', '8eff5b4b478844b383e54a8e5c98449a', 'e24045b09ee34f6881188019ab8917b9', null, null, null, '1');
INSERT INTO `w_ad` VALUES ('hdf', null, '2015-08-24 17:51:03', '2015-10-02 17:51:30', '7', '201503/2/201508/tj8.jpg', '3cfa3945f6cc4b468a13f8c6d5d4f473', 'aa4bcd4b0e034243be6054e0635066aa', '8eff5b4b478844b383e54a8e5c98449a', '08ccf8258cb0469d8e10fbb7b7ec3667', null, null, null, '1');
INSERT INTO `w_ad` VALUES ('hdfkjj', null, '2015-08-24 17:51:03', '2015-10-02 17:51:30', '1', '201503/2/201508/tj7.jpg', 'jk', 'aa4bcd4b0e034243be6054e0635066aa', '8eff5b4b478844b383e54a8e5c98449a', 'e24045b09ee34f6881188019ab8917b9', null, null, null, '1');
INSERT INTO `w_ad` VALUES ('hg', null, '2015-08-24 17:51:03', '2015-10-02 17:51:30', '14', '201503/2/201508/tj7.jpg', null, 'aa4bcd4b0e034243be6054e0635066aa', '8eff5b4b478844b383e54a8e5c98449a', 'e24045b09ee34f6881188019ab8917b9', null, null, null, '1');
INSERT INTO `w_ad` VALUES ('hgk', null, '2015-08-24 17:51:03', '2015-10-02 17:51:30', '13', '201503/2/201508/tj7.jpg', null, 'aa4bcd4b0e034243be6054e0635066aa', '8eff5b4b478844b383e54a8e5c98449a', 'e24045b09ee34f6881188019ab8917b9', null, null, null, '1');
INSERT INTO `w_ad` VALUES ('hjk', null, '2015-08-24 17:51:03', '2015-10-02 17:51:30', '23', '201503/2/201508/tj7.jpg', null, 'aa4bcd4b0e034243be6054e0635066aa', '8eff5b4b478844b383e54a8e5c98449a', 'e24045b09ee34f6881188019ab8917b9', null, null, null, '1');
INSERT INTO `w_ad` VALUES ('hjkghjk', null, '2015-08-24 17:51:03', '2015-10-02 17:51:30', '17', '201503/2/201508/tj7.jpg', null, 'aa4bcd4b0e034243be6054e0635066aa', '8eff5b4b478844b383e54a8e5c98449a', 'e24045b09ee34f6881188019ab8917b9', null, null, null, '1');
INSERT INTO `w_ad` VALUES ('hkggkhgk', null, '2015-08-24 17:51:03', '2015-10-02 17:51:30', '2', '201503/2/201508/tj7.jpg', null, 'aa4bcd4b0e034243be6054e0635066aa', '8eff5b4b478844b383e54a8e5c98449a', 'e24045b09ee34f6881188019ab8917b9', null, null, null, '1');
INSERT INTO `w_ad` VALUES ('jgh', null, '2015-08-24 17:51:03', '2015-10-02 17:51:30', '3', '201503/2/201508/tj8.jpg', '3cfa3945f6cc4b468a13f8c6d5d4f473', 'aa4bcd4b0e034243be6054e0635066aa', '8eff5b4b478844b383e54a8e5c98449a', '08ccf8258cb0469d8e10fbb7b7ec3667', null, null, null, '1');
INSERT INTO `w_ad` VALUES ('jghj', null, '2015-08-24 17:51:03', '2015-10-02 17:51:30', '4', '201503/2/201508/tj8.jpg', '3cfa3945f6cc4b468a13f8c6d5d4f473', 'aa4bcd4b0e034243be6054e0635066aa', '8eff5b4b478844b383e54a8e5c98449a', '08ccf8258cb0469d8e10fbb7b7ec3667', null, null, null, '1');
INSERT INTO `w_ad` VALUES ('jhkhjkh', null, '2015-08-24 17:51:03', '2015-10-02 17:51:30', '21', '201503/2/201508/tj7.jpg', null, 'aa4bcd4b0e034243be6054e0635066aa', '8eff5b4b478844b383e54a8e5c98449a', 'e24045b09ee34f6881188019ab8917b9', null, null, null, '1');
INSERT INTO `w_ad` VALUES ('jkgh', null, '2015-08-24 17:51:03', '2015-10-02 17:51:30', '10', '201503/2/201508/tj7.jpg', null, 'aa4bcd4b0e034243be6054e0635066aa', '8eff5b4b478844b383e54a8e5c98449a', 'e24045b09ee34f6881188019ab8917b9', null, null, null, '1');
INSERT INTO `w_ad` VALUES ('jkhjkhjkghjk', null, '2015-08-24 17:51:03', '2015-10-02 17:51:30', '9', '201503/2/201508/tj7.jpg', null, 'aa4bcd4b0e034243be6054e0635066aa', '8eff5b4b478844b383e54a8e5c98449a', 'e24045b09ee34f6881188019ab8917b9', null, null, null, '1');
INSERT INTO `w_ad` VALUES ('jkhjkjk', null, '2015-08-24 17:51:03', '2015-10-02 17:51:30', '20', '201503/2/201508/tj7.jpg', null, 'aa4bcd4b0e034243be6054e0635066aa', '8eff5b4b478844b383e54a8e5c98449a', 'e24045b09ee34f6881188019ab8917b9', null, null, null, '1');
INSERT INTO `w_ad` VALUES ('jkjhk', null, '2015-08-24 17:51:03', '2015-10-02 17:51:30', '22', '201503/2/201508/tj7.jpg', null, 'aa4bcd4b0e034243be6054e0635066aa', '8eff5b4b478844b383e54a8e5c98449a', 'e24045b09ee34f6881188019ab8917b9', null, null, null, '1');
INSERT INTO `w_ad` VALUES ('jkk', null, '2015-08-24 17:51:03', '2015-10-02 17:51:30', '8', '201503/2/201508/tj7.jpg', null, 'aa4bcd4b0e034243be6054e0635066aa', '8eff5b4b478844b383e54a8e5c98449a', 'e24045b09ee34f6881188019ab8917b9', null, null, null, '1');
INSERT INTO `w_ad` VALUES ('k', null, '2015-08-24 17:51:03', '2015-10-02 17:51:30', '4', '201503/2/201508/tj7.jpg', null, 'aa4bcd4b0e034243be6054e0635066aa', '8eff5b4b478844b383e54a8e5c98449a', 'e24045b09ee34f6881188019ab8917b9', null, null, null, '1');
INSERT INTO `w_ad` VALUES ('khj', null, '2015-08-24 17:51:03', '2015-10-02 17:51:30', '15', '201503/2/201508/tj7.jpg', null, 'aa4bcd4b0e034243be6054e0635066aa', '8eff5b4b478844b383e54a8e5c98449a', 'e24045b09ee34f6881188019ab8917b9', null, null, null, '1');
INSERT INTO `w_ad` VALUES ('khkg', null, '2015-08-24 17:51:03', '2015-10-02 17:51:30', '16', '201503/2/201508/tj7.jpg', null, 'aa4bcd4b0e034243be6054e0635066aa', '8eff5b4b478844b383e54a8e5c98449a', 'e24045b09ee34f6881188019ab8917b9', null, null, null, '1');
INSERT INTO `w_ad` VALUES ('kjhjkghjk', null, '2015-08-24 17:51:03', '2015-10-02 17:51:30', '11', '201503/2/201508/tj7.jpg', null, 'aa4bcd4b0e034243be6054e0635066aa', '8eff5b4b478844b383e54a8e5c98449a', 'e24045b09ee34f6881188019ab8917b9', null, null, null, '1');
INSERT INTO `w_ad` VALUES ('kkgkgjkg', null, '2015-08-24 17:51:03', '2015-10-02 17:51:30', '7', '201503/2/201508/tj7.jpg', null, 'aa4bcd4b0e034243be6054e0635066aa', '8eff5b4b478844b383e54a8e5c98449a', 'e24045b09ee34f6881188019ab8917b9', null, null, null, '1');
INSERT INTO `w_ad` VALUES ('sadf', null, '2015-08-24 17:51:03', '2015-10-02 17:51:30', '10', '201503/2/201508/tj2.jpg', '3cfa3945f6cc4b468a13f8c6d5d4f473', 'aa4bcd4b0e034243be6054e0635066aa', '8eff5b4b478844b383e54a8e5c98449a', '60b33f3be6d0481884e1cda8b2155b34', null, null, null, '1');
INSERT INTO `w_ad` VALUES ('sadf31', null, '2015-08-24 17:51:03', '2015-10-02 17:51:30', '19', '201503/2/201508/tj3.jpg', '3cfa3945f6cc4b468a13f8c6d5d4f473', 'aa4bcd4b0e034243be6054e0635066aa', '8eff5b4b478844b383e54a8e5c98449a', '60b33f3be6d0481884e1cda8b2155b34', null, null, null, '1');
INSERT INTO `w_ad` VALUES ('sdfasdf', null, '2015-08-24 17:51:03', '2015-10-02 17:51:30', '14', '201503/2/201508/tj6.jpg', '3cfa3945f6cc4b468a13f8c6d5d4f473', 'aa4bcd4b0e034243be6054e0635066aa', '8eff5b4b478844b383e54a8e5c98449a', '60b33f3be6d0481884e1cda8b2155b34', null, null, null, '1');
INSERT INTO `w_ad` VALUES ('sdfgsfgsdfgq', null, '2015-08-24 17:51:03', '2015-10-02 17:51:30', '14', '201503/2/201508/tj8.jpg', '3cfa3945f6cc4b468a13f8c6d5d4f473', 'aa4bcd4b0e034243be6054e0635066aa', '8eff5b4b478844b383e54a8e5c98449a', '08ccf8258cb0469d8e10fbb7b7ec3667', null, null, null, '1');
INSERT INTO `w_ad` VALUES ('sgfdgsdfg', null, '2015-08-24 17:51:03', '2015-10-02 17:51:30', '13', '201503/2/201508/tj8.jpg', '3cfa3945f6cc4b468a13f8c6d5d4f473', 'aa4bcd4b0e034243be6054e0635066aa', '8eff5b4b478844b383e54a8e5c98449a', '08ccf8258cb0469d8e10fbb7b7ec3667', null, null, null, '1');
INSERT INTO `w_ad` VALUES ('vbvbv', null, '2015-08-24 17:51:03', '2015-10-02 17:51:30', '6', '201503/2/201508/tj6.jpg', '3cfa3945f6cc4b468a13f8c6d5d4f473', 'aa4bcd4b0e034243be6054e0635066aa', '8eff5b4b478844b383e54a8e5c98449a', '971769765f9c4a5d98372529cf483090', null, null, null, '1');
INSERT INTO `w_ad` VALUES ('vcxvzcvzxcvz', null, '2015-08-24 17:51:03', '2015-10-02 17:51:30', '21', '201503/2/201508/tj6.jpg', null, 'aa4bcd4b0e034243be6054e0635066aa', '8eff5b4b478844b383e54a8e5c98449a', '971769765f9c4a5d98372529cf483090', null, null, null, '1');
INSERT INTO `w_ad` VALUES ('vzxcvxzcvzxc', null, '2015-08-24 17:51:03', '2015-10-02 17:51:30', '17', '201503/2/201508/tj6.jpg', '3cfa3945f6cc4b468a13f8c6d5d4f473', 'aa4bcd4b0e034243be6054e0635066aa', '8eff5b4b478844b383e54a8e5c98449a', '971769765f9c4a5d98372529cf483090', null, null, null, '1');
INSERT INTO `w_ad` VALUES ('wer', null, '2015-08-24 17:51:03', '2015-10-02 17:51:30', '17', '201503/2/201508/tj1.jpg', '3cfa3945f6cc4b468a13f8c6d5d4f473', 'aa4bcd4b0e034243be6054e0635066aa', '8eff5b4b478844b383e54a8e5c98449a', '60b33f3be6d0481884e1cda8b2155b34', null, null, null, '1');
INSERT INTO `w_ad` VALUES ('werq', null, '2015-08-24 17:51:03', '2015-10-02 17:51:30', '18', '201503/2/201508/tj2.jpg', '3cfa3945f6cc4b468a13f8c6d5d4f473', 'aa4bcd4b0e034243be6054e0635066aa', '8eff5b4b478844b383e54a8e5c98449a', '60b33f3be6d0481884e1cda8b2155b34', null, null, null, '1');
INSERT INTO `w_ad` VALUES ('werwer', null, '2015-08-24 17:51:03', '2015-10-02 17:51:30', '16', '201503/2/201508/tj8.jpg', '3cfa3945f6cc4b468a13f8c6d5d4f473', 'aa4bcd4b0e034243be6054e0635066aa', '8eff5b4b478844b383e54a8e5c98449a', '60b33f3be6d0481884e1cda8b2155b34', null, null, null, '1');
INSERT INTO `w_ad` VALUES ('xc', null, '2015-08-24 17:51:03', '2015-10-02 17:51:30', '2', '201503/2/201508/tj6.jpg', '3cfa3945f6cc4b468a13f8c6d5d4f473', 'aa4bcd4b0e034243be6054e0635066aa', '8eff5b4b478844b383e54a8e5c98449a', '971769765f9c4a5d98372529cf483090', null, null, null, '1');
INSERT INTO `w_ad` VALUES ('zcvzxcvzxbnbvnbv', null, '2015-08-24 17:51:03', '2015-10-02 17:51:30', '20', '201503/2/201508/tj6.jpg', null, 'aa4bcd4b0e034243be6054e0635066aa', '8eff5b4b478844b383e54a8e5c98449a', '971769765f9c4a5d98372529cf483090', null, null, null, '1');
INSERT INTO `w_ad` VALUES ('zxcvvzxcvzxcv', null, '2015-08-24 17:51:03', '2015-10-02 17:51:30', '18', '201503/2/201508/tj6.jpg', '3cfa3945f6cc4b468a13f8c6d5d4f473', 'aa4bcd4b0e034243be6054e0635066aa', '8eff5b4b478844b383e54a8e5c98449a', '971769765f9c4a5d98372529cf483090', null, null, null, '1');
INSERT INTO `w_ad` VALUES ('zxcvzxcvzxcv', null, '2015-08-24 17:51:03', '2015-10-02 17:51:30', '19', '201503/2/201508/tj6.jpg', '3cfa3945f6cc4b468a13f8c6d5d4f473', 'aa4bcd4b0e034243be6054e0635066aa', '8eff5b4b478844b383e54a8e5c98449a', '971769765f9c4a5d98372529cf483090', null, null, null, '1');

-- ----------------------------
-- Table structure for `w_ad_ext`
-- ----------------------------
DROP TABLE IF EXISTS `w_ad_ext`;
CREATE TABLE `w_ad_ext` (
  `PID` varchar(32) DEFAULT NULL,
  `_KEY` varchar(32) DEFAULT NULL,
  `_VALUE` varchar(4000) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='广告扩展';

-- ----------------------------
-- Records of w_ad_ext
-- ----------------------------

-- ----------------------------
-- Table structure for `w_ad_type`
-- ----------------------------
DROP TABLE IF EXISTS `w_ad_type`;
CREATE TABLE `w_ad_type` (
  `id` varchar(32) NOT NULL,
  `TYPE_NAME` varchar(32) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='广告类型';

-- ----------------------------
-- Records of w_ad_type
-- ----------------------------
INSERT INTO `w_ad_type` VALUES ('3cfa3945f6cc4b468a13f8c6d5d4f473', '商家宣传');
INSERT INTO `w_ad_type` VALUES ('7ce9818342a14fad8e84c3f75765956e', '（优惠）活动');
INSERT INTO `w_ad_type` VALUES ('81413741eba7458a8381e775c0155fd1', '商品宣传');

-- ----------------------------
-- Table structure for `w_corp`
-- ----------------------------
DROP TABLE IF EXISTS `w_corp`;
CREATE TABLE `w_corp` (
  `id` varchar(32) NOT NULL,
  `FULL_NAME` varchar(32) DEFAULT NULL,
  `CORP_NAME` varchar(32) DEFAULT NULL,
  `CORP_LOGO` varchar(256) DEFAULT NULL,
  `GOODS_TYPE_ID` varchar(32) DEFAULT NULL COMMENT '商品类型',
  `DISTRICT_ID` varchar(32) DEFAULT NULL,
  `ADDR` varchar(256) DEFAULT NULL COMMENT '具体地址',
  `LNG` varchar(32) DEFAULT NULL COMMENT '经度',
  `LAT` varchar(32) DEFAULT NULL COMMENT '纬度',
  `CREATE_TIME` datetime DEFAULT NULL COMMENT '创建时间',
  `CREATE_USER_ID` varchar(32) DEFAULT NULL,
  `STATUS` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='公司';

-- ----------------------------
-- Records of w_corp
-- ----------------------------
INSERT INTO `w_corp` VALUES ('6af9c938060944df8225ab18e2bea621', '商铺2', 'corp_2', null, '1', '2', null, null, null, null, null, '1');
INSERT INTO `w_corp` VALUES ('7126ea5c2c8f4177a756e87433d04bf6', '商铺4', 'corp_4', null, '1', '4', null, null, null, null, null, '1');
INSERT INTO `w_corp` VALUES ('aa4bcd4b0e034243be6054e0635066aa', '商铺3', 'corp_3', null, '1', '3', null, null, null, null, null, '1');
INSERT INTO `w_corp` VALUES ('cf3d26e2cf0049d08fed02cdebc9c9cf', '商铺1', 'corp_1', null, '1', '1', null, null, null, null, null, '1');

-- ----------------------------
-- Table structure for `w_corp_ext`
-- ----------------------------
DROP TABLE IF EXISTS `w_corp_ext`;
CREATE TABLE `w_corp_ext` (
  `PID` varchar(32) DEFAULT NULL,
  `_KEY` varchar(32) DEFAULT NULL,
  `_VAL` varchar(32) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='企业扩展表';

-- ----------------------------
-- Records of w_corp_ext
-- ----------------------------

-- ----------------------------
-- Table structure for `w_corp_user`
-- ----------------------------
DROP TABLE IF EXISTS `w_corp_user`;
CREATE TABLE `w_corp_user` (
  `id` varchar(32) NOT NULL,
  `CORP_ID` varchar(32) DEFAULT NULL,
  `USER_NAME` varchar(32) DEFAULT NULL,
  `USER_PASS` varchar(32) DEFAULT NULL,
  `CREATE_TIME` datetime DEFAULT NULL,
  `CREATE_USER_ID` varchar(32) DEFAULT NULL,
  `STATUS` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='公司用户';

-- ----------------------------
-- Records of w_corp_user
-- ----------------------------

-- ----------------------------
-- Table structure for `w_customer`
-- ----------------------------
DROP TABLE IF EXISTS `w_customer`;
CREATE TABLE `w_customer` (
  `id` varchar(32) NOT NULL DEFAULT '',
  `user_name` varchar(32) DEFAULT NULL,
  `user_pass` varchar(32) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of w_customer
-- ----------------------------

-- ----------------------------
-- Table structure for `w_district`
-- ----------------------------
DROP TABLE IF EXISTS `w_district`;
CREATE TABLE `w_district` (
  `id` varchar(32) NOT NULL,
  `ZONE_ID` varchar(256) DEFAULT NULL,
  `DISTRICT_NAME` varchar(32) DEFAULT NULL COMMENT '商圈名称',
  `SORT` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='商圈';

-- ----------------------------
-- Records of w_district
-- ----------------------------
INSERT INTO `w_district` VALUES ('1', '3', '紫荆山', '1');
INSERT INTO `w_district` VALUES ('10', '6', '万达广场', '5');
INSERT INTO `w_district` VALUES ('2', '3', '二七广场', '2');
INSERT INTO `w_district` VALUES ('3', '3', '郑东新区', '3');
INSERT INTO `w_district` VALUES ('4', '3', '中原大桥', '4');
INSERT INTO `w_district` VALUES ('5', '3', '国贸360广场', '5');
INSERT INTO `w_district` VALUES ('6', '6', '新都汇', '1');
INSERT INTO `w_district` VALUES ('7', '6', '唐宫路', '2');
INSERT INTO `w_district` VALUES ('8', '6', '宝龙广场', '3');
INSERT INTO `w_district` VALUES ('9', '6', '上海市场', '4');

-- ----------------------------
-- Table structure for `w_goods`
-- ----------------------------
DROP TABLE IF EXISTS `w_goods`;
CREATE TABLE `w_goods` (
  `id` varchar(32) NOT NULL,
  `SHOP_ID` varchar(32) DEFAULT NULL,
  `GOODS_TYPE_ID` varchar(32) DEFAULT NULL,
  `GOODS_NAME` varchar(32) DEFAULT NULL COMMENT '商品名称',
  `GOODS_PIC` varchar(64) DEFAULT NULL,
  `GOODS_PRICE` varchar(32) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='商品';

-- ----------------------------
-- Records of w_goods
-- ----------------------------
INSERT INTO `w_goods` VALUES ('1', '1', '9', '香蕉', null, '89');
INSERT INTO `w_goods` VALUES ('2', '1', '9', '苹果', null, '23');
INSERT INTO `w_goods` VALUES ('3', '2', '10', '哈密瓜', null, '54');
INSERT INTO `w_goods` VALUES ('4', '2', '10', '草莓', null, '655');
INSERT INTO `w_goods` VALUES ('5', '2', '10', '芒果', null, '423');
INSERT INTO `w_goods` VALUES ('6', '4', '10', '水蜜桃', null, '8956');

-- ----------------------------
-- Table structure for `w_goods_type`
-- ----------------------------
DROP TABLE IF EXISTS `w_goods_type`;
CREATE TABLE `w_goods_type` (
  `id` varchar(32) NOT NULL,
  `PID` varchar(32) DEFAULT NULL,
  `PATH` varchar(512) DEFAULT NULL,
  `TYPE_NAME` varchar(32) DEFAULT NULL,
  `SORT` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='美食';

-- ----------------------------
-- Records of w_goods_type
-- ----------------------------
INSERT INTO `w_goods_type` VALUES ('1', '0', '0', '美食', '1');
INSERT INTO `w_goods_type` VALUES ('10', '1', '0,1', '蔬菜', '2');
INSERT INTO `w_goods_type` VALUES ('2', '0', '0', '娱乐', '2');
INSERT INTO `w_goods_type` VALUES ('3', '0', '0', '出行', '3');
INSERT INTO `w_goods_type` VALUES ('4', '0', '0', '管家', '4');
INSERT INTO `w_goods_type` VALUES ('5', '0', '0', '住房', '5');
INSERT INTO `w_goods_type` VALUES ('6', '0', '0', '美保', '6');
INSERT INTO `w_goods_type` VALUES ('7', '0', '0', '配送', '7');
INSERT INTO `w_goods_type` VALUES ('8', '0', '0', '其他', '8');
INSERT INTO `w_goods_type` VALUES ('9', '2', '0,2', '水果', '1');

-- ----------------------------
-- Table structure for `w_page`
-- ----------------------------
DROP TABLE IF EXISTS `w_page`;
CREATE TABLE `w_page` (
  `id` varchar(32) NOT NULL,
  `PATH` varchar(128) DEFAULT NULL,
  `PAGE_NAME` varchar(32) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of w_page
-- ----------------------------
INSERT INTO `w_page` VALUES ('12a59ed2eb964fe88c4b1d84e06600d2', '/w/:wifi_mac/', '通过WIFI登陆入口');
INSERT INTO `w_page` VALUES ('dad9657792274e0e95a15c8901573c11', '/:zone/', '地区首页');

-- ----------------------------
-- Table structure for `w_page_position`
-- ----------------------------
DROP TABLE IF EXISTS `w_page_position`;
CREATE TABLE `w_page_position` (
  `id` varchar(32) NOT NULL,
  `POSITION_NAME` varchar(32) DEFAULT NULL COMMENT '广告位名称',
  `PREVIEW_PIC` varchar(64) DEFAULT NULL COMMENT '预览图片',
  `PAGE_ID` varchar(32) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of w_page_position
-- ----------------------------
INSERT INTO `w_page_position` VALUES ('08ccf8258cb0469d8e10fbb7b7ec3667', '休闲娱乐', null, 'dad9657792274e0e95a15c8901573c11');
INSERT INTO `w_page_position` VALUES ('258e597a238a471e8b052d5f9c806072', '三个固定广告', null, 'dad9657792274e0e95a15c8901573c11');
INSERT INTO `w_page_position` VALUES ('60b33f3be6d0481884e1cda8b2155b34', '美食小吃', null, 'dad9657792274e0e95a15c8901573c11');
INSERT INTO `w_page_position` VALUES ('8', '顶部活动广告', null, '12a59ed2eb964fe88c4b1d84e06600d2');
INSERT INTO `w_page_position` VALUES ('841ede8c0a9943cb9f2714e9dc840e5a', '推荐附近', null, 'dad9657792274e0e95a15c8901573c11');
INSERT INTO `w_page_position` VALUES ('971769765f9c4a5d98372529cf483090', '生活服务', null, 'dad9657792274e0e95a15c8901573c11');
INSERT INTO `w_page_position` VALUES ('9b484e073d9b4201859650551f52f5eb', '顶部活动广告', null, 'dad9657792274e0e95a15c8901573c11');
INSERT INTO `w_page_position` VALUES ('e24045b09ee34f6881188019ab8917b9', '特色旅游', null, 'dad9657792274e0e95a15c8901573c11');

-- ----------------------------
-- Table structure for `w_page_position_ext`
-- ----------------------------
DROP TABLE IF EXISTS `w_page_position_ext`;
CREATE TABLE `w_page_position_ext` (
  `PID` varchar(32) DEFAULT NULL,
  `_KEY` varchar(32) DEFAULT NULL COMMENT '键',
  `_VALUE` varchar(4000) DEFAULT NULL COMMENT '值'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='广告位扩展表';

-- ----------------------------
-- Records of w_page_position_ext
-- ----------------------------
INSERT INTO `w_page_position_ext` VALUES ('9b484e073d9b4201859650551f52f5eb', 'a', '1');
INSERT INTO `w_page_position_ext` VALUES ('9b484e073d9b4201859650551f52f5eb', 'b', '2');
INSERT INTO `w_page_position_ext` VALUES ('12a59ed2eb964fe88c4b1d84e06600d2', 'c', '3');

-- ----------------------------
-- Table structure for `w_wifi`
-- ----------------------------
DROP TABLE IF EXISTS `w_wifi`;
CREATE TABLE `w_wifi` (
  `id` varchar(32) NOT NULL,
  `WIFI_MAC` varchar(32) DEFAULT NULL,
  `WIFI_NAME` varchar(32) DEFAULT NULL,
  `ADDR` varchar(128) DEFAULT NULL COMMENT '具体地址',
  `ZONE_ID` varchar(32) DEFAULT NULL COMMENT '区域',
  `LNG` varchar(32) DEFAULT NULL COMMENT '经度',
  `LAT` varchar(32) DEFAULT NULL COMMENT '纬度',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of w_wifi
-- ----------------------------
INSERT INTO `w_wifi` VALUES ('1', '00014280317A', '正森', null, '4', null, null);

-- ----------------------------
-- Table structure for `w_zone`
-- ----------------------------
DROP TABLE IF EXISTS `w_zone`;
CREATE TABLE `w_zone` (
  `id` varchar(32) NOT NULL DEFAULT '',
  `PID` varchar(32) DEFAULT NULL,
  `PATH` varchar(512) DEFAULT NULL,
  `ZONE_NAME` varchar(32) DEFAULT NULL,
  `SORT` int(4) DEFAULT NULL,
  `LONG_NAME` varchar(32) DEFAULT NULL,
  `SHORT_NAME` varchar(32) DEFAULT NULL,
  `IS_OPEN` int(11) DEFAULT NULL,
  `IS_DEF_SITE` int(11) DEFAULT NULL,
  `SHORT_ZONE_NAME` varchar(32) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of w_zone
-- ----------------------------
INSERT INTO `w_zone` VALUES ('10', '8eff5b4b478844b383e54a8e5c98449a', '0,9b7a08f9f58f44c18f20f3848f3fa468', '新密市', '10', null, null, '0', '0', null);
INSERT INTO `w_zone` VALUES ('11', '8eff5b4b478844b383e54a8e5c98449a', '0,9b7a08f9f58f44c18f20f3848f3fa468', '巩义市', '11', null, null, '0', '0', null);
INSERT INTO `w_zone` VALUES ('12', '8eff5b4b478844b383e54a8e5c98449a', '0,9b7a08f9f58f44c18f20f3848f3fa468', '登封市', '12', null, null, '0', '0', null);
INSERT INTO `w_zone` VALUES ('13', '8eff5b4b478844b383e54a8e5c98449a', '0,9b7a08f9f58f44c18f20f3848f3fa468', '中牟县', '13', null, null, '0', '0', null);
INSERT INTO `w_zone` VALUES ('14', '8eff5b4b478844b383e54a8e5c98449a', '0,9b7a08f9f58f44c18f20f3848f3fa468', '上街区', '14', null, null, '0', '0', null);
INSERT INTO `w_zone` VALUES ('15', '8eff5b4b478844b383e54a8e5c98449a', '0,9b7a08f9f58f44c18f20f3848f3fa468', '荥阳市', '15', null, null, '0', '0', null);
INSERT INTO `w_zone` VALUES ('16', '8eff5b4b478844b383e54a8e5c98449a', '0,9b7a08f9f58f44c18f20f3848f3fa468', '其他', '16', null, null, '0', '0', null);
INSERT INTO `w_zone` VALUES ('17', '1cca0be97ca646af841bea553caa9fc4', '0,1cca0be97ca646af841bea553caa9fc4', '涧西区', '1', null, null, '0', '0', null);
INSERT INTO `w_zone` VALUES ('18', '1cca0be97ca646af841bea553caa9fc4', '0,1cca0be97ca646af841bea553caa9fc4', '西工区', '2', null, null, '0', '0', null);
INSERT INTO `w_zone` VALUES ('19', '1cca0be97ca646af841bea553caa9fc4', '0,1cca0be97ca646af841bea553caa9fc4', '洛龙区', '3', null, null, '0', '0', null);
INSERT INTO `w_zone` VALUES ('1cca0be97ca646af841bea553caa9fc4', '9b7a08f9f58f44c18f20f3848f3fa468', '0', '洛阳市', '2', 'luoyang', 'ly', '1', '0', '洛阳');
INSERT INTO `w_zone` VALUES ('20', '1cca0be97ca646af841bea553caa9fc4', '0,1cca0be97ca646af841bea553caa9fc4', '老城区', '4', null, null, '0', '0', null);
INSERT INTO `w_zone` VALUES ('21', '1cca0be97ca646af841bea553caa9fc4', '0,1cca0be97ca646af841bea553caa9fc4', '栾川县', '5', null, null, '0', '0', null);
INSERT INTO `w_zone` VALUES ('22', '1cca0be97ca646af841bea553caa9fc4', '0,1cca0be97ca646af841bea553caa9fc4', '伊川县', '6', null, null, '0', '0', null);
INSERT INTO `w_zone` VALUES ('23', '1cca0be97ca646af841bea553caa9fc4', '0,1cca0be97ca646af841bea553caa9fc4', '瀍河回族区', '7', null, null, '0', '0', null);
INSERT INTO `w_zone` VALUES ('24', '1cca0be97ca646af841bea553caa9fc4', '0,1cca0be97ca646af841bea553caa9fc4', '宜阳县', '8', null, null, '0', '0', null);
INSERT INTO `w_zone` VALUES ('25', '1cca0be97ca646af841bea553caa9fc4', '0,1cca0be97ca646af841bea553caa9fc4', '新安县', '9', null, null, '0', '0', null);
INSERT INTO `w_zone` VALUES ('26', '1cca0be97ca646af841bea553caa9fc4', '0,1cca0be97ca646af841bea553caa9fc4', '偃师市', '10', null, null, '0', '0', null);
INSERT INTO `w_zone` VALUES ('27', '1cca0be97ca646af841bea553caa9fc4', '0,1cca0be97ca646af841bea553caa9fc4', '孟津县', '11', null, null, '0', '0', null);
INSERT INTO `w_zone` VALUES ('28', '1cca0be97ca646af841bea553caa9fc4', '0,1cca0be97ca646af841bea553caa9fc4', '高新区', '12', null, null, '0', '0', null);
INSERT INTO `w_zone` VALUES ('29', '1cca0be97ca646af841bea553caa9fc4', '0,1cca0be97ca646af841bea553caa9fc4', '汝阳县', '13', null, null, '0', '0', null);
INSERT INTO `w_zone` VALUES ('30', '1cca0be97ca646af841bea553caa9fc4', '0,1cca0be97ca646af841bea553caa9fc4', '洛宁县', '14', null, null, '0', '0', null);
INSERT INTO `w_zone` VALUES ('31', '1cca0be97ca646af841bea553caa9fc4', '0,1cca0be97ca646af841bea553caa9fc4', '吉利区', '15', null, null, '0', '0', null);
INSERT INTO `w_zone` VALUES ('32', '1cca0be97ca646af841bea553caa9fc4', '0,1cca0be97ca646af841bea553caa9fc4', '嵩县', '16', null, null, '0', '0', null);
INSERT INTO `w_zone` VALUES ('4', '8eff5b4b478844b383e54a8e5c98449a', '0,9b7a08f9f58f44c18f20f3848f3fa468', '金水区', '4', null, null, '0', '0', null);
INSERT INTO `w_zone` VALUES ('5', '8eff5b4b478844b383e54a8e5c98449a', '0,9b7a08f9f58f44c18f20f3848f3fa468', '二七区', '5', null, null, '0', '0', null);
INSERT INTO `w_zone` VALUES ('6', '8eff5b4b478844b383e54a8e5c98449a', '0,9b7a08f9f58f44c18f20f3848f3fa468', '中原区', '6', null, null, '0', '0', null);
INSERT INTO `w_zone` VALUES ('7', '8eff5b4b478844b383e54a8e5c98449a', '0,9b7a08f9f58f44c18f20f3848f3fa468', '管城区', '7', null, null, '0', '0', null);
INSERT INTO `w_zone` VALUES ('8', '8eff5b4b478844b383e54a8e5c98449a', '0,9b7a08f9f58f44c18f20f3848f3fa468', '惠济区', '8', null, null, '0', '0', null);
INSERT INTO `w_zone` VALUES ('8eff5b4b478844b383e54a8e5c98449a', '9b7a08f9f58f44c18f20f3848f3fa468', '0', '郑州市', '1', 'zhengzhou', 'zz', '1', '1', '郑州');
INSERT INTO `w_zone` VALUES ('9', '8eff5b4b478844b383e54a8e5c98449a', '0,9b7a08f9f58f44c18f20f3848f3fa468', '新郑市', '9', null, null, '0', '0', null);
INSERT INTO `w_zone` VALUES ('9b7a08f9f58f44c18f20f3848f3fa468', '0', '0', '河南省', '1', null, null, '0', '0', null);
