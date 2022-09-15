-- MySQL dump 10.13  Distrib 8.0.25, for Win64 (x86_64)
--
-- Host: localhost    Database: users
-- ------------------------------------------------------
-- Server version	8.0.25

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
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `userId` varchar(500) NOT NULL,
  `emailId` varchar(50) NOT NULL,
  `hashedPassword` varchar(1000) NOT NULL,
  PRIMARY KEY (`userId`),
  UNIQUE KEY `userId_UNIQUE` (`userId`),
  UNIQUE KEY `emailId_UNIQUE` (`emailId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES ('2','tushar.aggarwal53@iitgoa.ac.in','$2b$10$PCgla2eLqhl4n92.SP2useehjCPUWhivNxC.G.ReQse.eK1.68B2y'),('3','janvi@iitgoa.ac.in','$2b$10$2ku9FfIto9nqoXRD73Vl6.5mn1SLyGwpQmYmrZOv0Q4dUaVo609lS'),('4','js@iitgoa.ac.in','$2b$10$P.QKXPvn1a2dqJomJquNt.N9cne1Ay4t.p8nJKt2m/efzwbI4NMXS'),('6ad64d10-6407-49d4-b260-6cef4155ca6e','tushar.aggarwal.19032@iitgoa.ac.in','$2b$10$yqp2stj3odHxfilrqUpageQmaxyJBOzxAOmzuxVBHfg8YWcLOWhvm'),('9','sddasd','Digital logic, Medium/Large/Very Large Scale Integration\nBasics of CMOS logic and gates, basic digital blocks, multiplexer, decoder, encoder, arbiter, bus\nBoolean algebra, minimizing boolean expressions, Karnaugh map, Quine-McCluskey etc\nNumber representation\nCombinational circuit analysis, basics of circuit timing, pipelining, finite state machines, algorithmic\nstate machines, registers, counters, memory\nIntroduction to Verilog hardware description language. Lab sessions on design, implementation and\nsimulation of basic digital systems using Verilog and Zynq board.\n'),('ca3fa155-d7e7-4a75-9964-f661ed6b5c4e','tushar.aggarwal53@gmail.com','$2b$10$R6DUL3gwksdPxKwiBffnreVhcPJS7zY6uyVB4IgnwNSElVqmUduha');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-09-14 23:41:47
