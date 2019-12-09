/*
Navicat MySQL Data Transfer

Source Server         : ZhangJia
Source Server Version : 50537
Source Host           : localhost:3306
Source Database       : blog

Target Server Type    : MYSQL
Target Server Version : 50537
File Encoding         : 65001

Date: 2018-11-23 20:05:17
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for why_articles
-- ----------------------------
DROP TABLE IF EXISTS `why_articles`;
CREATE TABLE `why_articles` (
  `article_id` bigint(255) NOT NULL AUTO_INCREMENT,
  `user_id` bigint(20) NOT NULL,
  `article_title` text NOT NULL,
  `article_content` longtext NOT NULL,
  `article_views` bigint(20) NOT NULL,
  `article_comment_count` bigint(20) NOT NULL,
  `article_date` datetime NOT NULL,
  `article_like_count` bigint(20) NOT NULL,
  PRIMARY KEY (`article_id`),
  KEY `user_id` (`user_id`),
  CONSTRAINT `why_articles_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `why_users` (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of why_articles
-- ----------------------------
INSERT INTO `why_articles` VALUES ('1', '1', '你好', '啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊', '100', '20', '2018-06-12 11:28:34', '20');

-- ----------------------------
-- Table structure for why_comments
-- ----------------------------
DROP TABLE IF EXISTS `why_comments`;
CREATE TABLE `why_comments` (
  `comment_id` bigint(20) NOT NULL AUTO_INCREMENT,
  `user_id` bigint(20) NOT NULL,
  `article_id` bigint(20) NOT NULL,
  `comment_like_count` bigint(20) NOT NULL,
  `comment_date` datetime NOT NULL,
  `comment_content` text NOT NULL,
  `parent_comment_id` bigint(20) NOT NULL,
  PRIMARY KEY (`comment_id`),
  KEY `article_id` (`article_id`),
  KEY `comment_date` (`comment_date`),
  KEY `parent_comment_id` (`parent_comment_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of why_comments
-- ----------------------------

-- ----------------------------
-- Table structure for why_floors
-- ----------------------------
DROP TABLE IF EXISTS `why_floors`;
CREATE TABLE `why_floors` (
  `floor_id` bigint(20) NOT NULL AUTO_INCREMENT,
  `user_id` bigint(20) NOT NULL,
  `post_id` bigint(20) NOT NULL,
  `floor_content` longtext NOT NULL,
  `floor_date` datetime NOT NULL,
  `parent_floor_id` bigint(20) NOT NULL,
  PRIMARY KEY (`floor_id`),
  KEY `parent_floor_id` (`parent_floor_id`),
  KEY `user_id` (`user_id`,`post_id`),
  KEY `floor_date` (`floor_date`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of why_floors
-- ----------------------------

-- ----------------------------
-- Table structure for why_forums
-- ----------------------------
DROP TABLE IF EXISTS `why_forums`;
CREATE TABLE `why_forums` (
  `forum_id` bigint(20) NOT NULL AUTO_INCREMENT,
  `forum_name` varchar(20) NOT NULL,
  `forum_description` text NOT NULL,
  `forum_logo` varchar(255) NOT NULL,
  `forum_post_count` bigint(20) NOT NULL,
  `parent_forum_id` bigint(20) NOT NULL,
  PRIMARY KEY (`forum_id`),
  KEY `forum_name` (`forum_name`),
  KEY `parent_forum_id` (`parent_forum_id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of why_forums
-- ----------------------------
INSERT INTO `why_forums` VALUES ('1', 'Java论坛', '专门的Java论坛', 'javalogo', '222', '0');
INSERT INTO `why_forums` VALUES ('2', 'c语言论坛', 'c语言论坛', 'C', '22', '0');

-- ----------------------------
-- Table structure for why_friend_links
-- ----------------------------
DROP TABLE IF EXISTS `why_friend_links`;
CREATE TABLE `why_friend_links` (
  `friend_link_id` bigint(20) NOT NULL AUTO_INCREMENT,
  `friend_links` varchar(255) NOT NULL,
  `friend_link_name` varchar(20) NOT NULL,
  `friend_link_description` text NOT NULL,
  `friend_link_logo` varchar(255) NOT NULL,
  PRIMARY KEY (`friend_link_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of why_friend_links
-- ----------------------------

-- ----------------------------
-- Table structure for why_labels
-- ----------------------------
DROP TABLE IF EXISTS `why_labels`;
CREATE TABLE `why_labels` (
  `label_id` bigint(20) NOT NULL AUTO_INCREMENT,
  `label_name` varchar(20) NOT NULL,
  `label_alias` varchar(15) NOT NULL,
  `label_description` text NOT NULL,
  PRIMARY KEY (`label_id`),
  KEY `label_name` (`label_name`),
  KEY `label_alias` (`label_alias`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of why_labels
-- ----------------------------
INSERT INTO `why_labels` VALUES ('1', 'java虚拟机', 'javaxuniji', 'java的虚拟机哈');
INSERT INTO `why_labels` VALUES ('2', 'java回收期', 'sdfa', 'sfdas阿道夫');

-- ----------------------------
-- Table structure for why_menus
-- ----------------------------
DROP TABLE IF EXISTS `why_menus`;
CREATE TABLE `why_menus` (
  `menu_id` bigint(20) NOT NULL AUTO_INCREMENT,
  `menu_name` varchar(20) NOT NULL,
  PRIMARY KEY (`menu_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of why_menus
-- ----------------------------

-- ----------------------------
-- Table structure for why_moderator
-- ----------------------------
DROP TABLE IF EXISTS `why_moderator`;
CREATE TABLE `why_moderator` (
  `moderator_id` bigint(20) NOT NULL AUTO_INCREMENT,
  `forum_id` bigint(20) NOT NULL,
  `moderator_level` varchar(20) NOT NULL,
  PRIMARY KEY (`moderator_id`,`forum_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of why_moderator
-- ----------------------------

-- ----------------------------
-- Table structure for why_options
-- ----------------------------
DROP TABLE IF EXISTS `why_options`;
CREATE TABLE `why_options` (
  `option_id` int(11) NOT NULL AUTO_INCREMENT,
  `option_name` varchar(255) NOT NULL,
  `option_values` longtext NOT NULL,
  PRIMARY KEY (`option_id`),
  KEY `option_name` (`option_name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of why_options
-- ----------------------------

-- ----------------------------
-- Table structure for why_posts
-- ----------------------------
DROP TABLE IF EXISTS `why_posts`;
CREATE TABLE `why_posts` (
  `post_id` bigint(20) NOT NULL AUTO_INCREMENT,
  `forum_id` bigint(20) NOT NULL,
  `user_id` bigint(20) NOT NULL,
  `post_title` text NOT NULL,
  `post_views` bigint(20) NOT NULL,
  `post_content` longtext NOT NULL,
  `post_date` datetime NOT NULL,
  `post_status` varchar(20) NOT NULL,
  `post_comment_count` bigint(20) NOT NULL,
  PRIMARY KEY (`post_id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of why_posts
-- ----------------------------
INSERT INTO `why_posts` VALUES ('1', '1', '1', '帖子1', '11', '帖子内容哈哈', '2018-06-20 11:37:55', '啊', '111');
INSERT INTO `why_posts` VALUES ('2', '1', '2', '帖子2', '222', '暗示法士大夫', '2018-05-02 11:38:21', '啊', '22');

-- ----------------------------
-- Table structure for why_set_artitle_label
-- ----------------------------
DROP TABLE IF EXISTS `why_set_artitle_label`;
CREATE TABLE `why_set_artitle_label` (
  `article_id` bigint(20) NOT NULL AUTO_INCREMENT,
  `label_id` bigint(20) NOT NULL,
  PRIMARY KEY (`article_id`),
  KEY `label_id` (`label_id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of why_set_artitle_label
-- ----------------------------
INSERT INTO `why_set_artitle_label` VALUES ('1', '1');
INSERT INTO `why_set_artitle_label` VALUES ('2', '2');

-- ----------------------------
-- Table structure for why_set_artitle_sort
-- ----------------------------
DROP TABLE IF EXISTS `why_set_artitle_sort`;
CREATE TABLE `why_set_artitle_sort` (
  `article_id` bigint(20) NOT NULL,
  `sort_id` bigint(20) NOT NULL,
  PRIMARY KEY (`article_id`,`sort_id`),
  KEY `sort_id` (`sort_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of why_set_artitle_sort
-- ----------------------------
INSERT INTO `why_set_artitle_sort` VALUES ('1', '1');
INSERT INTO `why_set_artitle_sort` VALUES ('2', '1');

-- ----------------------------
-- Table structure for why_sorts
-- ----------------------------
DROP TABLE IF EXISTS `why_sorts`;
CREATE TABLE `why_sorts` (
  `sort_id` bigint(20) NOT NULL,
  `sort_name` varchar(50) NOT NULL,
  `sort_alias` varchar(15) NOT NULL,
  `sort_description` text NOT NULL,
  `parent_sort_id` bigint(20) NOT NULL,
  PRIMARY KEY (`sort_id`),
  KEY `sort_name` (`sort_name`),
  KEY `sort_alias` (`sort_alias`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of why_sorts
-- ----------------------------
INSERT INTO `why_sorts` VALUES ('1', '编程', 'biancheng', '编程啊', '0');

-- ----------------------------
-- Table structure for why_submenus
-- ----------------------------
DROP TABLE IF EXISTS `why_submenus`;
CREATE TABLE `why_submenus` (
  `link_id` bigint(20) NOT NULL AUTO_INCREMENT,
  `menu_id` bigint(20) NOT NULL,
  `link_name` varchar(255) NOT NULL,
  `link_target` varchar(255) NOT NULL,
  `link_open_way` varchar(20) NOT NULL,
  `parent_link_id` bigint(20) NOT NULL,
  PRIMARY KEY (`link_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of why_submenus
-- ----------------------------

-- ----------------------------
-- Table structure for why_users
-- ----------------------------
DROP TABLE IF EXISTS `why_users`;
CREATE TABLE `why_users` (
  `user_id` bigint(20) NOT NULL AUTO_INCREMENT,
  `user_password` varchar(15) NOT NULL,
  `user_telephone_number` int(11) NOT NULL,
  PRIMARY KEY (`user_id`),
  KEY `user_telephone_number` (`user_telephone_number`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of why_users
-- ----------------------------
INSERT INTO `why_users` VALUES ('1', 'zhangjia', '156666633');
INSERT INTO `why_users` VALUES ('2', 'zhangyi', '1533625255');

-- ----------------------------
-- Table structure for why_user_friends
-- ----------------------------
DROP TABLE IF EXISTS `why_user_friends`;
CREATE TABLE `why_user_friends` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `user_id` bigint(20) NOT NULL,
  `user_friends_id` bigint(20) NOT NULL,
  `user_note` varchar(20) NOT NULL,
  `user_status` varchar(20) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `user_id` (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of why_user_friends
-- ----------------------------
INSERT INTO `why_user_friends` VALUES ('1', '1', '2', '备注张一', 'B');
INSERT INTO `why_user_friends` VALUES ('2', '1', '3', '备注张二', '1');

-- ----------------------------
-- View structure for articles
-- ----------------------------
DROP VIEW IF EXISTS `articles`;
CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost`  VIEW `articles` AS SELECT
	`why_articles`.`user_id` AS `user_id`,
	`why_users`.`user_name` AS `user_name`,
	`why_articles`.`article_id` AS `article_id`,
	`why_articles`.`article_title` AS `article_title`,
	`why_articles`.`article_content` AS `article_content`
FROM
	(
		`why_articles`
		JOIN `why_users`
	)
WHERE
	(
		`why_articles`.`user_id` = `why_users`.`user_id`
	) ;

-- ----------------------------
-- View structure for article_under_the_query_tab
-- ----------------------------
DROP VIEW IF EXISTS `article_under_the_query_tab`;
CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER  VIEW `article_under_the_query_tab` AS select `why_set_artitle_label`.`label_id` AS `label_id`,`why_labels`.`label_name` AS `label_name`,`why_set_artitle_label`.`article_id` AS `article_id`,`why_articles`.`article_title` AS `article_title` from ((`why_labels` join `why_articles`) join `why_set_artitle_label`) where ((`why_set_artitle_label`.`article_id` = `why_articles`.`article_id`) and (`why_set_artitle_label`.`label_id` = `why_labels`.`label_id`)) ;

-- ----------------------------
-- View structure for query_all_users_friends
-- ----------------------------
DROP VIEW IF EXISTS `query_all_users_friends`;
CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER  VIEW `query_all_users_friends` AS select `why_user_friends`.`user_id` AS `user_id`,`why_users`.`user_name` AS `user_name`,`why_user_friends`.`user_friends_id` AS `user_friends_id`,`why_user_friends`.`user_note` AS `user_note` from (`why_users` join `why_user_friends`) where (`why_users`.`user_id` = `why_user_friends`.`user_id`) ;

-- ----------------------------
-- View structure for query_classified_articles
-- ----------------------------
DROP VIEW IF EXISTS `query_classified_articles`;
CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER  VIEW `query_classified_articles` AS select `why_set_artitle_sort`.`sort_id` AS `sort_id`,`why_sorts`.`sort_name` AS `sort_name`,`why_set_artitle_sort`.`article_id` AS `article_id`,`why_articles`.`article_title` AS `article_title` from ((`why_articles` join `why_set_artitle_sort`) join `why_sorts`) where ((`why_articles`.`article_id` = `why_set_artitle_sort`.`article_id`) and (`why_sorts`.`sort_id` = `why_set_artitle_sort`.`sort_id`)) ;

-- ----------------------------
-- View structure for query_forum_posts
-- ----------------------------
DROP VIEW IF EXISTS `query_forum_posts`;
CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER  VIEW `query_forum_posts` AS select `why_forums`.`forum_id` AS `forum_id`,`why_forums`.`forum_name` AS `forum_name`,`why_posts`.`post_id` AS `post_id`,`why_posts`.`post_title` AS `post_title` from (`why_forums` join `why_posts`) where (`why_forums`.`forum_id` = `why_posts`.`forum_id`) ;

-- ----------------------------
-- View structure for query_user_posted_posts
-- ----------------------------
DROP VIEW IF EXISTS `query_user_posted_posts`;
CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER  VIEW `query_user_posted_posts` AS select `why_posts`.`user_id` AS `user_id`,`why_users`.`user_name` AS `user_name`,`why_posts`.`post_id` AS `post_id`,`why_posts`.`post_title` AS `post_title`,`why_posts`.`post_content` AS `post_content`,`why_posts`.`forum_id` AS `forum_id`,`why_forums`.`forum_name` AS `forum_name` from ((`why_posts` join `why_users`) join `why_forums`) where ((`why_posts`.`user_id` = `why_users`.`user_id`) and (`why_posts`.`forum_id` = `why_forums`.`forum_id`)) ;

-- ----------------------------
-- View structure for query_user_published_articles
-- ----------------------------
DROP VIEW IF EXISTS `query_user_published_articles`;
CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER  VIEW `query_user_published_articles` AS select `why_articles`.`user_id` AS `user_id`,`why_users`.`user_name` AS `user_name`,`why_articles`.`article_id` AS `article_id`,`why_articles`.`article_title` AS `article_title`,`why_articles`.`article_content` AS `article_content` from (`why_articles` join `why_users`) where (`why_articles`.`user_id` = `why_users`.`user_id`) ;
