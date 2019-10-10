-- MySQL dump 10.13  Distrib 5.7.12, for Win32 (AMD64)
--
-- Host: localhost    Database: testdb1
-- ------------------------------------------------------
-- Server version	5.7.26-log

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `thepayment`
--

DROP TABLE IF EXISTS `thepayment`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `thepayment` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  `address` varchar(255) DEFAULT NULL,
  `amount` int(11) DEFAULT NULL,
  `city` varchar(255) DEFAULT NULL,
  `credit_card_number` varchar(255) DEFAULT NULL,
  `cvv` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `exp_month` varchar(255) DEFAULT NULL,
  `exp_year` varchar(255) DEFAULT NULL,
  `full_name` varchar(255) DEFAULT NULL,
  `mentor_id` int(11) DEFAULT NULL,
  `mentor_name` varchar(255) DEFAULT NULL,
  `name_on_card` varchar(255) DEFAULT NULL,
  `payment_type` varchar(255) DEFAULT NULL,
  `state` varchar(255) DEFAULT NULL,
  `tech_name` varchar(255) DEFAULT NULL,
  `training_id` bigint(20) DEFAULT NULL,
  `user_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `thepayment`
--

LOCK TABLES `thepayment` WRITE;
/*!40000 ALTER TABLE `thepayment` DISABLE KEYS */;
INSERT INTO `thepayment` VALUES (1,'2019-05-21 05:30:00','2019-05-26 05:30:00','12/stadium',5000,'Bangalore','7894561236521478',NULL,'revanth@gmail.com','05','2024','Revanth Nani',1,'revanth','Revanth','cash','Karnataka','Java',0,0),(2,'2019-05-21 05:30:00','2019-05-25 05:30:00','4/IIHT',2000,'Bangalore','111122222333',NULL,'rana@gmail.com','08','2030','givind rana',2,'Rana','rana','debit','Karnataka','IOT',0,0);
/*!40000 ALTER TABLE `thepayment` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2019-10-10 17:25:31
