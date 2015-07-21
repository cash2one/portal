/*
Navicat MySQL Data Transfer

Source Server         : hq-mysql-1:22306
Source Server Version : 50623
Source Host           : 127.0.0.1:22306
Source Database       : wifi

Target Server Type    : MYSQL
Target Server Version : 50623
File Encoding         : 65001

Date: 2015-07-21 23:19:55
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
  `id` varchar(32) NOT NULL DEFAULT '',
  `ad_name` varchar(32) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of w_ad
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
-- Table structure for `w_goods`
-- ----------------------------
DROP TABLE IF EXISTS `w_goods`;
CREATE TABLE `w_goods` (
  `id` varchar(32) NOT NULL,
  `SHOP_ID` varchar(32) DEFAULT NULL,
  `GOODS_TYPE_ID` varchar(32) DEFAULT NULL,
  `GOODS_NAME` varchar(32) DEFAULT NULL COMMENT '商品名称',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='商品';

-- ----------------------------
-- Records of w_goods
-- ----------------------------

-- ----------------------------
-- Table structure for `w_goods_type`
-- ----------------------------
DROP TABLE IF EXISTS `w_goods_type`;
CREATE TABLE `w_goods_type` (
  `id` varchar(32) NOT NULL,
  `PAD` varchar(32) DEFAULT NULL,
  `PATH` varchar(512) DEFAULT NULL,
  `TYPE_NAME` varchar(32) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='美食';

-- ----------------------------
-- Records of w_goods_type
-- ----------------------------

-- ----------------------------
-- Table structure for `w_shop`
-- ----------------------------
DROP TABLE IF EXISTS `w_shop`;
CREATE TABLE `w_shop` (
  `id` varchar(32) NOT NULL,
  `SHOP_NAME` varchar(32) DEFAULT NULL,
  `SHOP_LOGO` varchar(256) DEFAULT NULL,
  `GOODS_TYPE_ID` varchar(32) DEFAULT NULL COMMENT '商品类型',
  `ZONE_ID` varchar(32) DEFAULT NULL COMMENT '区域',
  `ADDR` varchar(256) DEFAULT NULL COMMENT '具体地址',
  `LNG` varchar(32) DEFAULT NULL COMMENT '经度',
  `LAT` varchar(32) DEFAULT NULL COMMENT '纬度',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='店铺';

-- ----------------------------
-- Records of w_shop
-- ----------------------------

-- ----------------------------
-- Table structure for `w_shop_user`
-- ----------------------------
DROP TABLE IF EXISTS `w_shop_user`;
CREATE TABLE `w_shop_user` (
  `id` varchar(32) NOT NULL,
  `SHOP_ID` varchar(32) DEFAULT NULL,
  `USER_NAME` varchar(32) DEFAULT NULL,
  `USER_PASS` varchar(32) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='商铺用户';

-- ----------------------------
-- Records of w_shop_user
-- ----------------------------

-- ----------------------------
-- Table structure for `w_templet`
-- ----------------------------
DROP TABLE IF EXISTS `w_templet`;
CREATE TABLE `w_templet` (
  `id` varchar(32) NOT NULL DEFAULT '',
  `templet_name` varchar(32) DEFAULT NULL,
  `templet_desc` varchar(256) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of w_templet
-- ----------------------------

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
INSERT INTO `w_wifi` VALUES ('1', '00014280317A', '正森', null, null, null, null);

-- ----------------------------
-- Table structure for `w_zone`
-- ----------------------------
DROP TABLE IF EXISTS `w_zone`;
CREATE TABLE `w_zone` (
  `id` varchar(32) NOT NULL,
  `PID` varchar(32) DEFAULT NULL,
  `PATH` varchar(256) DEFAULT NULL,
  `ZONE_NAME` varchar(32) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_Reference_5` (`PID`),
  CONSTRAINT `FK_Reference_5` FOREIGN KEY (`PID`) REFERENCES `w_zone` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of w_zone
-- ----------------------------
