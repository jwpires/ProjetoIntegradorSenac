-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 25-Ago-2023 às 01:04
-- Versão do servidor: 10.4.27-MariaDB
-- versão do PHP: 8.0.25

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
-- Estrutura da tabela `agencia`
--

CREATE TABLE `agencia` (
  `ID` varchar(200) NOT NULL,
  `ID_BANCO` varchar(200) NOT NULL,
  `NOMEPROPRIETARIO` varchar(120) NOT NULL,
  `NUMEROCONTA` varchar(10) NOT NULL,
  `TIPODECONTA` char(1) NOT NULL,
  `SALDO` decimal(11,2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Extraindo dados da tabela `agencia`
--

INSERT INTO `agencia` (`ID`, `ID_BANCO`, `NOMEPROPRIETARIO`, `NUMEROCONTA`, `TIPODECONTA`, `SALDO`) VALUES
('435695bc-fa78-437e-acd4-db94bf0ec63e', 'a1b3ea18-fe1a-47d8-a866-930fa79fbbc3', 'José', '20205-0', 'S', '1520.00'),
('47e71b83-bca7-44cc-a753-b0faf7f2120d', 'dd95d33b-531b-4bb1-adda-0cd89f3b5fa5', 'Maria', '3339-8', 'P', '225.00'),
('cf5ef8aa-45cc-4eee-8528-88365cdb4562', 'b4250c0f-dccd-448f-b2aa-20463b700519', 'José', '14785-9', 'P', '74241.10');

-- --------------------------------------------------------

--
-- Estrutura da tabela `banco`
--

CREATE TABLE `banco` (
  `ID` varchar(200) NOT NULL,
  `NOME` varchar(120) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Extraindo dados da tabela `banco`
--

INSERT INTO `banco` (`ID`, `NOME`) VALUES
('3a40ac1d-660d-44d3-9a96-0c86da2b5fee', 'Bradesco'),
('a1b3ea18-fe1a-47d8-a866-930fa79fbbc3', 'Brasil'),
('dd95d33b-531b-4bb1-adda-0cd89f3b5fa5', 'Inter'),
('b4250c0f-dccd-448f-b2aa-20463b700519', 'Itau'),
('04556bb2-c8bd-4789-96ad-504126702b0b', 'Nubank'),
('75d670bf-12c3-4760-881a-4682b5db9e90', 'Santander');

-- --------------------------------------------------------

--
-- Estrutura da tabela `despesa`
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

--
-- Extraindo dados da tabela `despesa`
--

INSERT INTO `despesa` (`ID`, `DESCRICAO`, `ID_GRUPODESPESA`, `DATALANCAMENTO`, `DATAVENCIMENTO`, `VALOR`, `PAGO`) VALUES
('8b8d2fa6-813b-4b18-9773-96dbba296fdd', 'DEPESA TESTE', 'e7b05d88-aa73-4a47-9169-eb1396a8dcae', '2023-07-31', '2023-08-06', '12.59', 0),
('98242a64-0500-47aa-9db5-dd3c5b3bd471', 'DESPESA NÃO PAGA 000010', 'ecb0a692-e0c4-4166-a642-b09a66b96ae0', '2023-08-17', '2023-08-25', '151.10', 0),
('abab1a40-0f3f-498f-b9b2-b8f53e244968', 'Despesa PAGA 0007', 'e7b05d88-aa73-4a47-9169-eb1396a8dcae', '2023-08-16', '2023-08-18', '11.10', 1),
('b5d0b71a-f062-4f85-ad1a-325fe53173bc', 'TESTE02 Não PAGO', 'e7b05d88-aa73-4a47-9169-eb1396a8dcae', '2023-08-15', '2023-08-08', '10.00', 0),
('b72bf577-c155-4aef-bca3-59c3d9a51260', 'TESTE PAGO', 'e7b05d88-aa73-4a47-9169-eb1396a8dcae', '2023-07-31', '2023-08-09', '124.00', 1);

-- --------------------------------------------------------

--
-- Estrutura da tabela `grupo_despesa`
--

CREATE TABLE `grupo_despesa` (
  `ID` varchar(200) NOT NULL,
  `DESCRICAO` varchar(120) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Extraindo dados da tabela `grupo_despesa`
--

INSERT INTO `grupo_despesa` (`ID`, `DESCRICAO`) VALUES
('e7b05d88-aa73-4a47-9169-eb1396a8dcae', 'Fixa'),
('a4e02a75-f53a-4149-b1cb-478dbcb295f8', 'TESTE'),
('ecb0a692-e0c4-4166-a642-b09a66b96ae0', 'Variável');

-- --------------------------------------------------------

--
-- Estrutura da tabela `usuario`
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
-- Índices para tabela `agencia`
--
ALTER TABLE `agencia`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `FK_IDBANCO` (`ID_BANCO`);

--
-- Índices para tabela `banco`
--
ALTER TABLE `banco`
  ADD PRIMARY KEY (`ID`),
  ADD UNIQUE KEY `UK_NOMEBANCO` (`NOME`);

--
-- Índices para tabela `despesa`
--
ALTER TABLE `despesa`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `FK_GRUPODESPESA` (`ID_GRUPODESPESA`);

--
-- Índices para tabela `grupo_despesa`
--
ALTER TABLE `grupo_despesa`
  ADD PRIMARY KEY (`ID`),
  ADD UNIQUE KEY `UK_DESCRICAO` (`DESCRICAO`);

--
-- Índices para tabela `usuario`
--
ALTER TABLE `usuario`
  ADD PRIMARY KEY (`ID`),
  ADD UNIQUE KEY `UK_EMAIL` (`EMAIL`);

--
-- Restrições para despejos de tabelas
--

--
-- Limitadores para a tabela `agencia`
--
ALTER TABLE `agencia`
  ADD CONSTRAINT `FK_IDBANCO` FOREIGN KEY (`ID_BANCO`) REFERENCES `banco` (`ID`);

--
-- Limitadores para a tabela `despesa`
--
ALTER TABLE `despesa`
  ADD CONSTRAINT `FK_GRUPODESPESA` FOREIGN KEY (`ID_GRUPODESPESA`) REFERENCES `grupo_despesa` (`ID`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
