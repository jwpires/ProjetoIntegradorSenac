-- MySQL dump 10.13  Distrib 8.0.33, for Win64 (x86_64)
--
-- Host: localhost    Database: cpf
-- ------------------------------------------------------
-- Server version	8.0.33

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
-- Table structure for table `cadbanco`
--

DROP TABLE IF EXISTS `cadbanco`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cadbanco` (
  `IdCadBanco` int NOT NULL,
  `Nom` varchar(45) NOT NULL,
  PRIMARY KEY (`IdCadBanco`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cadbanco`
--

LOCK TABLES `cadbanco` WRITE;
/*!40000 ALTER TABLE `cadbanco` DISABLE KEYS */;
/*!40000 ALTER TABLE `cadbanco` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `contabancaria`
--

DROP TABLE IF EXISTS `contabancaria`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `contabancaria` (
  `IdConta` int NOT NULL,
  `IdPessoa` int NOT NULL,
  `IdCadBanco` int NOT NULL,
  `Tipo` char(2) NOT NULL,
  `conta` decimal(10,0) NOT NULL,
  `saldo` float NOT NULL,
  PRIMARY KEY (`IdConta`),
  KEY `FOREIGN` (`IdPessoa`,`IdCadBanco`),
  KEY `IdCadBanco_idx` (`IdCadBanco`),
  CONSTRAINT `IdCadBanco` FOREIGN KEY (`IdCadBanco`) REFERENCES `cadbanco` (`IdCadBanco`),
  CONSTRAINT `IdPessoa` FOREIGN KEY (`IdPessoa`) REFERENCES `pessoa` (`IdPessoa`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `contabancaria`
--

LOCK TABLES `contabancaria` WRITE;
/*!40000 ALTER TABLE `contabancaria` DISABLE KEYS */;
/*!40000 ALTER TABLE `contabancaria` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `grupodespesa`
--

DROP TABLE IF EXISTS `grupodespesa`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `grupodespesa` (
  `IdGrupo` int NOT NULL,
  `Nome` varchar(45) NOT NULL,
  PRIMARY KEY (`IdGrupo`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `grupodespesa`
--

LOCK TABLES `grupodespesa` WRITE;
/*!40000 ALTER TABLE `grupodespesa` DISABLE KEYS */;
/*!40000 ALTER TABLE `grupodespesa` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `lancamentodespesa`
--

DROP TABLE IF EXISTS `lancamentodespesa`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `lancamentodespesa` (
  `IdLancamento` int NOT NULL,
  `DescricaoDespe` varchar(45) NOT NULL,
  `Id_Grupo` int NOT NULL,
  `Data_venc` date NOT NULL,
  `Data_Pagame` date NOT NULL,
  `valor` float NOT NULL,
  `juros` decimal(10,0) NOT NULL,
  `Pago` char(1) NOT NULL,
  `IdConta` int NOT NULL,
  PRIMARY KEY (`IdLancamento`),
  KEY `IdConta_idx` (`IdConta`),
  KEY `Id_Grupo_idx` (`Id_Grupo`),
  CONSTRAINT `Id_Grupo` FOREIGN KEY (`Id_Grupo`) REFERENCES `grupodespesa` (`IdGrupo`),
  CONSTRAINT `IdConta` FOREIGN KEY (`IdConta`) REFERENCES `contabancaria` (`IdConta`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `lancamentodespesa`
--

LOCK TABLES `lancamentodespesa` WRITE;
/*!40000 ALTER TABLE `lancamentodespesa` DISABLE KEYS */;
/*!40000 ALTER TABLE `lancamentodespesa` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `pessoa`
--

DROP TABLE IF EXISTS `pessoa`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `pessoa` (
  `IdPessoa` int NOT NULL,
  `Nome` varchar(45) NOT NULL,
  PRIMARY KEY (`IdPessoa`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `pessoa`
--

LOCK TABLES `pessoa` WRITE;
/*!40000 ALTER TABLE `pessoa` DISABLE KEYS */;
/*!40000 ALTER TABLE `pessoa` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuario`
--

DROP TABLE IF EXISTS `usuario`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `usuario` (
  `IdUsuario` int NOT NULL,
  `LoginEmail` varchar(45) NOT NULL,
  `senha` decimal(10,0) NOT NULL,
  `IdPessoa` int NOT NULL,
  PRIMARY KEY (`IdUsuario`),
  KEY `IdPessoa_idx` (`IdPessoa`),
  CONSTRAINT `Id_Pessoa` FOREIGN KEY (`IdPessoa`) REFERENCES `pessoa` (`IdPessoa`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuario`
--

LOCK TABLES `usuario` WRITE;
/*!40000 ALTER TABLE `usuario` DISABLE KEYS */;
/*!40000 ALTER TABLE `usuario` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping events for database 'cpf'
--

--
-- Dumping routines for database 'cpf'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-07-06 20:33:01
