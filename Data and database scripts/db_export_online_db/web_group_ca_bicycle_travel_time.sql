CREATE DATABASE  IF NOT EXISTS `web_group_ca_group_j` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `web_group_ca_group_j`;
-- MySQL dump 10.13  Distrib 8.0.36, for Win64 (x86_64)
--
-- Host: localhost    Database: web_group_ca_group_j
-- ------------------------------------------------------
-- Server version	8.0.36

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
-- Table structure for table `bicycle_travel_time`
--

DROP TABLE IF EXISTS `bicycle_travel_time`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `bicycle_travel_time` (
  `row_id` int NOT NULL AUTO_INCREMENT,
  `age_group` varchar(30) NOT NULL,
  `gender` varchar(30) NOT NULL,
  `year` int NOT NULL,
  `value` decimal(5,2) NOT NULL,
  PRIMARY KEY (`row_id`)
) ENGINE=InnoDB AUTO_INCREMENT=73 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `bicycle_travel_time`
--

LOCK TABLES `bicycle_travel_time` WRITE;
/*!40000 ALTER TABLE `bicycle_travel_time` DISABLE KEYS */;
INSERT INTO `bicycle_travel_time` VALUES (1,'18 - 24 years','Male',2019,0.00),(2,'18 - 24 years','Female',2019,0.00),(3,'25 - 34 years','Male',2019,0.00),(4,'25 - 34 years','Female',2019,0.00),(5,'35 - 44 years','Male',2019,0.00),(6,'35 - 44 years','Female',2019,0.00),(7,'45 - 54 years','Male',2019,0.00),(8,'45 - 54 years','Female',2019,0.00),(9,'55 - 64 years','Male',2019,0.00),(10,'55 - 64 years','Female',2019,0.00),(11,'65 - 74 years','Male',2019,0.00),(12,'65 - 74 years','Female',2019,0.00),(13,'18 - 24 years','Male',2020,0.00),(14,'18 - 24 years','Female',2020,0.00),(15,'25 - 34 years','Male',2020,0.00),(16,'25 - 34 years','Female',2020,0.00),(17,'35 - 44 years','Male',2020,0.00),(18,'35 - 44 years','Female',2020,0.00),(19,'45 - 54 years','Male',2020,0.00),(20,'45 - 54 years','Female',2020,0.00),(21,'55 - 64 years','Male',2020,0.00),(22,'55 - 64 years','Female',2020,0.00),(23,'65 - 74 years','Male',2020,0.00),(24,'65 - 74 years','Female',2020,0.00),(25,'18 - 24 years','Male',2021,4.90),(26,'18 - 24 years','Female',2021,5.10),(27,'25 - 34 years','Male',2021,9.10),(28,'25 - 34 years','Female',2021,9.40),(29,'35 - 44 years','Male',2021,12.60),(30,'35 - 44 years','Female',2021,8.40),(31,'45 - 54 years','Male',2021,10.70),(32,'45 - 54 years','Female',2021,9.30),(33,'55 - 64 years','Male',2021,18.00),(34,'55 - 64 years','Female',2021,9.30),(35,'65 - 74 years','Male',2021,10.20),(36,'65 - 74 years','Female',2021,7.00),(37,'18 - 24 years','Male',2022,3.10),(38,'18 - 24 years','Female',2022,1.80),(39,'25 - 34 years','Male',2022,5.20),(40,'25 - 34 years','Female',2022,14.00),(41,'35 - 44 years','Male',2022,3.20),(42,'35 - 44 years','Female',2022,18.60),(43,'45 - 54 years','Male',2022,18.90),(44,'45 - 54 years','Female',2022,10.30),(45,'55 - 64 years','Male',2022,13.90),(46,'55 - 64 years','Female',2022,1.40),(47,'65 - 74 years','Male',2022,3.20),(48,'65 - 74 years','Female',2022,6.80),(49,'18 - 24 years','Male',2023,11.20),(50,'18 - 24 years','Female',2023,18.70),(51,'25 - 34 years','Male',2023,15.60),(52,'25 - 34 years','Female',2023,2.20),(53,'35 - 44 years','Male',2023,16.90),(54,'35 - 44 years','Female',2023,15.50),(55,'45 - 54 years','Male',2023,3.70),(56,'45 - 54 years','Female',2023,15.80),(57,'55 - 64 years','Male',2023,4.30),(58,'55 - 64 years','Female',2023,15.90),(59,'65 - 74 years','Male',2023,9.60),(60,'65 - 74 years','Female',2023,6.40),(61,'18 - 24 years','Male',2024,11.50),(62,'18 - 24 years','Female',2024,10.10),(63,'25 - 34 years','Male',2024,9.90),(64,'25 - 34 years','Female',2024,15.10),(65,'35 - 44 years','Male',2024,4.40),(66,'35 - 44 years','Female',2024,14.70),(67,'45 - 54 years','Male',2024,18.10),(68,'45 - 54 years','Female',2024,18.10),(69,'55 - 64 years','Male',2024,13.40),(70,'55 - 64 years','Female',2024,4.40),(71,'65 - 74 years','Male',2024,2.10),(72,'65 - 74 years','Female',2024,12.10);
/*!40000 ALTER TABLE `bicycle_travel_time` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-04-07 14:50:49
