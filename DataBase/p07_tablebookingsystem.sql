-- MySQL dump 10.13  Distrib 8.0.31, for Win64 (x86_64)
--
-- Host: localhost    Database: p07_tablebookingsystem
-- ------------------------------------------------------
-- Server version	8.0.31

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `booking`
--

DROP TABLE IF EXISTS `booking`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `booking` (
  `b_id` int NOT NULL AUTO_INCREMENT,
  `c_id` int NOT NULL,
  `t_id` int NOT NULL,
  `b_date` date NOT NULL,
  `b_time` int NOT NULL,
  PRIMARY KEY (`b_id`),
  KEY `cid_idx` (`c_id`),
  KEY `tid_idx` (`t_id`),
  CONSTRAINT `cid` FOREIGN KEY (`c_id`) REFERENCES `customer` (`c_id`),
  CONSTRAINT `tid` FOREIGN KEY (`t_id`) REFERENCES `tablel` (`t_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=63 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `booking`
--

LOCK TABLES `booking` WRITE;
/*!40000 ALTER TABLE `booking` DISABLE KEYS */;
INSERT INTO `booking` VALUES (4,2,1,'2025-02-02',0),(5,2,2,'2025-02-02',11),(6,2,3,'2025-02-02',11),(7,2,1,'2025-02-02',3),(8,2,2,'2025-02-02',1),(9,2,1,'2025-02-03',3),(10,2,1,'2025-02-03',11),(11,2,5,'2025-02-03',1),(12,2,2,'2025-02-03',11),(13,2,3,'2025-02-06',1),(14,3,2,'2025-02-06',1),(15,3,4,'2025-02-06',11),(16,3,5,'2025-02-06',3),(17,3,5,'2025-02-06',1),(18,3,1,'2025-02-06',11),(19,3,3,'2025-02-06',3),(20,3,6,'2025-02-06',3),(21,3,3,'2025-02-07',3),(22,3,4,'2025-02-07',11),(23,3,5,'2025-02-07',3),(24,3,1,'2025-02-07',11),(25,3,6,'2025-02-07',3),(26,3,2,'2025-02-07',1),(27,9,1,'2025-02-08',11),(28,10,2,'2025-02-08',1),(29,9,3,'2025-02-08',3),(30,9,6,'2025-02-08',3),(31,2,6,'2025-02-09',3),(32,9,4,'2025-02-09',11),(33,9,3,'2025-02-09',3),(34,11,1,'2025-02-09',11),(35,9,5,'2025-02-09',3),(36,9,1,'2025-02-10',11),(55,9,4,'2025-02-10',11),(56,9,3,'2025-02-10',3),(57,9,5,'2025-02-10',3),(58,9,9,'2025-02-10',5),(59,9,2,'2025-02-10',1),(60,9,6,'2025-02-10',3),(61,9,8,'2025-02-10',11),(62,9,7,'2025-02-10',1);
/*!40000 ALTER TABLE `booking` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `customer`
--

DROP TABLE IF EXISTS `customer`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `customer` (
  `c_id` int NOT NULL AUTO_INCREMENT,
  `u_id` int NOT NULL,
  `fname` varchar(255) NOT NULL,
  `lname` varchar(255) DEFAULT NULL,
  `contact` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`c_id`),
  KEY `cu_id_idx` (`u_id`),
  CONSTRAINT `cu_id` FOREIGN KEY (`u_id`) REFERENCES `users` (`u_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `customer`
--

LOCK TABLES `customer` WRITE;
/*!40000 ALTER TABLE `customer` DISABLE KEYS */;
INSERT INTO `customer` VALUES (2,7,'vaibhav','bakhal','1234567890'),(3,8,'shri','shri','9786780987'),(9,9,'Mohit','Mahajan','9978786756'),(10,10,'Tanu','Mahajan','9545941647'),(11,16,'Vaibhav','Andure','9876896789');
/*!40000 ALTER TABLE `customer` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `hotel`
--

DROP TABLE IF EXISTS `hotel`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `hotel` (
  `Id` int NOT NULL,
  `Name` varchar(255) NOT NULL,
  `Address` varchar(255) NOT NULL,
  PRIMARY KEY (`Id`),
  UNIQUE KEY `Id_UNIQUE` (`Id`),
  UNIQUE KEY `Name_UNIQUE` (`Name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `hotel`
--

LOCK TABLES `hotel` WRITE;
/*!40000 ALTER TABLE `hotel` DISABLE KEYS */;
INSERT INTO `hotel` VALUES (1,'Blivstar','FC road, pune');
/*!40000 ALTER TABLE `hotel` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `manager`
--

DROP TABLE IF EXISTS `manager`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `manager` (
  `m_id` int NOT NULL AUTO_INCREMENT,
  `u_id` int NOT NULL,
  `fname` varchar(255) NOT NULL,
  `lname` varchar(255) DEFAULT NULL,
  `is_active` bit(1) NOT NULL,
  `h_id` int NOT NULL,
  `contact_no` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`m_id`),
  UNIQUE KEY `m_id_UNIQUE` (`m_id`),
  KEY `uid` (`u_id`),
  KEY `h_id_idx` (`h_id`),
  CONSTRAINT `h_id` FOREIGN KEY (`h_id`) REFERENCES `hotel` (`Id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `uid` FOREIGN KEY (`u_id`) REFERENCES `users` (`u_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `manager`
--

LOCK TABLES `manager` WRITE;
/*!40000 ALTER TABLE `manager` DISABLE KEYS */;
INSERT INTO `manager` VALUES (1,12,'Mihir','Patil',_binary '',1,NULL),(2,13,'Mahima','Choudhary',_binary '',1,NULL),(3,14,'Mehek','Mahajan',_binary '',1,NULL);
/*!40000 ALTER TABLE `manager` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `menu_category`
--

DROP TABLE IF EXISTS `menu_category`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `menu_category` (
  `cat_id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL,
  `descp` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`cat_id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `menu_category`
--

LOCK TABLES `menu_category` WRITE;
/*!40000 ALTER TABLE `menu_category` DISABLE KEYS */;
INSERT INTO `menu_category` VALUES (1,'Appetizers','Starter dishes to begin your meal.'),(2,'Desserts','Dessert after dinner'),(3,'Rotis','Indian breads made up of grains'),(4,'Sabji','In main course sabji');
/*!40000 ALTER TABLE `menu_category` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `menu_item`
--

DROP TABLE IF EXISTS `menu_item`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `menu_item` (
  `item_id` int NOT NULL AUTO_INCREMENT,
  `cat_id` int NOT NULL,
  `name` varchar(45) NOT NULL,
  `descp` varchar(45) DEFAULT NULL,
  `price` float NOT NULL,
  PRIMARY KEY (`item_id`),
  KEY `catid_idx` (`cat_id`),
  CONSTRAINT `catid` FOREIGN KEY (`cat_id`) REFERENCES `menu_category` (`cat_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `menu_item`
--

LOCK TABLES `menu_item` WRITE;
/*!40000 ALTER TABLE `menu_item` DISABLE KEYS */;
INSERT INTO `menu_item` VALUES (1,1,'Spring Rolls','Crispy vegetarian spring rolls.',5.99),(2,1,'Panner Tikka','Paneer Tikkas',3.25),(3,2,'Gulabjamun','Sweet',4.78),(4,2,'Rasmalai','Sweet',8.9),(5,3,'Chapati','Chapati',2),(6,3,'Naan','Naan',3.9),(7,4,'Malai Panner','Panner',12.98),(8,4,'Kaju panner','kaju',15.9),(10,2,'jalebi','yummy',20),(11,3,'Garlic Naan','tests good',80);
/*!40000 ALTER TABLE `menu_item` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `order`
--

DROP TABLE IF EXISTS `order`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `order` (
  `o_id` int NOT NULL AUTO_INCREMENT,
  `amt` float NOT NULL,
  `b_id` int NOT NULL,
  PRIMARY KEY (`o_id`),
  KEY `bid_idx` (`b_id`),
  CONSTRAINT `bid` FOREIGN KEY (`b_id`) REFERENCES `booking` (`b_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `order`
--

LOCK TABLES `order` WRITE;
/*!40000 ALTER TABLE `order` DISABLE KEYS */;
INSERT INTO `order` VALUES (1,11.98,6),(2,11.98,7),(3,17.97,8),(4,29.47,16),(5,31.95,18),(6,5.99,19),(8,17.8,16),(9,5.99,20),(10,36.53,21),(11,7.99,23),(12,33.45,30),(13,57.7,31),(14,4,35),(16,4.78,58),(17,9.56,59),(18,4.78,60),(19,4,61),(20,19.5,62);
/*!40000 ALTER TABLE `order` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `order_details`
--

DROP TABLE IF EXISTS `order_details`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `order_details` (
  `od_id` int NOT NULL AUTO_INCREMENT,
  `o_id` int NOT NULL,
  `item_id` int NOT NULL,
  `qty` int NOT NULL,
  PRIMARY KEY (`od_id`),
  KEY `oid_idx` (`o_id`),
  KEY `itemid_idx` (`item_id`),
  CONSTRAINT `itemid` FOREIGN KEY (`item_id`) REFERENCES `menu_item` (`item_id`),
  CONSTRAINT `oid` FOREIGN KEY (`o_id`) REFERENCES `order` (`o_id`)
) ENGINE=InnoDB AUTO_INCREMENT=40 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `order_details`
--

LOCK TABLES `order_details` WRITE;
/*!40000 ALTER TABLE `order_details` DISABLE KEYS */;
INSERT INTO `order_details` VALUES (1,1,1,2),(2,2,1,2),(3,3,1,3),(4,4,1,1),(5,4,2,2),(6,4,5,2),(7,4,7,1),(8,5,2,1),(9,5,4,1),(10,5,6,1),(11,5,8,1),(12,6,1,1),(14,8,4,2),(15,9,1,1),(16,10,1,1),(17,10,3,2),(18,10,5,4),(19,10,7,1),(20,11,1,1),(21,11,5,1),(22,12,1,1),(23,12,3,2),(24,12,5,1),(25,12,8,1),(26,13,1,1),(27,13,2,1),(28,13,3,1),(29,13,4,1),(30,13,5,1),(31,13,6,1),(32,13,7,1),(33,13,8,1),(34,14,5,2),(35,16,3,1),(36,17,3,2),(37,18,3,1),(38,19,5,2),(39,20,2,6);
/*!40000 ALTER TABLE `order_details` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `roles`
--

DROP TABLE IF EXISTS `roles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `roles` (
  `r_id` int NOT NULL,
  `type` varchar(255) NOT NULL,
  PRIMARY KEY (`r_id`),
  UNIQUE KEY `Id_UNIQUE` (`r_id`),
  UNIQUE KEY `Type_UNIQUE` (`type`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `roles`
--

LOCK TABLES `roles` WRITE;
/*!40000 ALTER TABLE `roles` DISABLE KEYS */;
INSERT INTO `roles` VALUES (1,'Admin'),(3,'Customer'),(2,'Manager');
/*!40000 ALTER TABLE `roles` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tablel`
--

DROP TABLE IF EXISTS `tablel`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tablel` (
  `t_id` int NOT NULL AUTO_INCREMENT,
  `capacity` int NOT NULL,
  `b_time` int DEFAULT NULL,
  `table_no` int DEFAULT NULL,
  `status` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`t_id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tablel`
--

LOCK TABLES `tablel` WRITE;
/*!40000 ALTER TABLE `tablel` DISABLE KEYS */;
INSERT INTO `tablel` VALUES (1,4,11,1,NULL),(2,4,1,1,NULL),(3,4,3,1,NULL),(4,2,11,2,NULL),(5,2,3,2,NULL),(6,6,3,3,NULL),(7,2,1,4,NULL),(8,6,11,4,NULL),(9,3,5,4,NULL),(10,4,1,4,NULL),(11,5,1,5,NULL),(12,5,5,5,NULL);
/*!40000 ALTER TABLE `tablel` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `u_id` int NOT NULL AUTO_INCREMENT,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `r_id` int NOT NULL,
  PRIMARY KEY (`u_id`),
  UNIQUE KEY `email_UNIQUE` (`email`),
  KEY `r_id_idx` (`r_id`),
  CONSTRAINT `r_id` FOREIGN KEY (`r_id`) REFERENCES `roles` (`r_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (7,'vaibhav@gmail.com','vaibhav*123',3),(8,'shri@gamil.com','shri*123',3),(9,'Mohit@gmail.com','mohit*123',3),(10,'tanu@gamil.com','Tanushri*123',3),(11,'amit@gmail.com','Amit*1234',1),(12,'mihir@gmail.com','Mihir*123',2),(13,'mahima@gmail.com','mahima*123',2),(14,'mehek@gmail.com','Mehek*123',2),(16,'vaibhav12@gmail.com','Vaibhav*111',3);
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-02-11 10:04:51
