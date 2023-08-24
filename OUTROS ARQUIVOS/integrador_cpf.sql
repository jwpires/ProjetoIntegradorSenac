-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 25/08/2023 às 00:25
-- Versão do servidor: 10.4.28-MariaDB
-- Versão do PHP: 8.0.28

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `integrador_cpf`
--

-- --------------------------------------------------------

--
-- Estrutura para tabela `agencia`
--

CREATE TABLE `agencia` (
  `ID` varchar(200) NOT NULL,
  `ID_BANCO` varchar(200) NOT NULL,
  `NOMEPROPRIETARIO` varchar(120) NOT NULL,
  `NUMEROCONTA` varchar(10) NOT NULL,
  `TIPODECONTA` char(1) NOT NULL,
  `SALDO` decimal(11,2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estrutura para tabela `banco`
--

CREATE TABLE `banco` (
  `ID` varchar(200) NOT NULL,
  `NOME` varchar(120) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estrutura para tabela `despesa`
--

CREATE TABLE `despesa` (
  `ID` varchar(200) NOT NULL,
  `DESCRICAO` varchar(120) NOT NULL,
  `ID_GRUPODESPESA` varchar(200) NOT NULL,
  `DATALANCAMENTO` date NOT NULL,
  `DATAVENCIMENTO` date NOT NULL,
  `VALOR` decimal(11,2) NOT NULL,
  `PAGO` tinyint(4) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estrutura para tabela `grupodespesa`
--

CREATE TABLE `grupodespesa` (
  `ID` varchar(200) NOT NULL,
  `DESCRICAO` varchar(120) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estrutura para tabela `usuario`
--

CREATE TABLE `usuario` (
  `ID` varchar(200) NOT NULL,
  `NOME` varchar(120) NOT NULL,
  `EMAIL` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Índices para tabelas despejadas
--

--
-- Índices de tabela `agencia`
--
ALTER TABLE `agencia`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `FK_IDBANCO` (`ID_BANCO`);

--
-- Índices de tabela `banco`
--
ALTER TABLE `banco`
  ADD PRIMARY KEY (`ID`),
  ADD UNIQUE KEY `UK_NOMEBANCO` (`NOME`);

--
-- Índices de tabela `despesa`
--
ALTER TABLE `despesa`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `FK_GRUPODESPESA` (`ID_GRUPODESPESA`);

--
-- Índices de tabela `grupodespesa`
--
ALTER TABLE `grupodespesa`
  ADD PRIMARY KEY (`ID`),
  ADD UNIQUE KEY `UK_DESCRICAO` (`DESCRICAO`);

--
-- Índices de tabela `usuario`
--
ALTER TABLE `usuario`
  ADD PRIMARY KEY (`ID`),
  ADD UNIQUE KEY `UK_EMAIL` (`EMAIL`);

--
-- Restrições para tabelas despejadas
--

--
-- Restrições para tabelas `agencia`
--
ALTER TABLE `agencia`
  ADD CONSTRAINT `FK_IDBANCO` FOREIGN KEY (`ID_BANCO`) REFERENCES `banco` (`ID`);

--
-- Restrições para tabelas `despesa`
--
ALTER TABLE `despesa`
  ADD CONSTRAINT `FK_GRUPODESPESA` FOREIGN KEY (`ID_GRUPODESPESA`) REFERENCES `grupodespesa` (`ID`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
