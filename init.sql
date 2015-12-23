CREATE DATABASE krit_express
  DEFAULT CHARACTER SET utf8
  DEFAULT COLLATE utf8_unicode_ci;

USE krit_express;
CREATE TABLE IF NOT EXISTS `contact_me` (
  `id` int(10) unsigned NOT NULL,
  `name` varchar(128) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `email` varchar(64) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `phone` varchar(12) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `content` text CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

ALTER TABLE `contact_me`
  ADD PRIMARY KEY (`id`);
ALTER TABLE `contact_me`
  MODIFY `id` int(10) unsigned NOT NULL AUTO_INCREMENT;
