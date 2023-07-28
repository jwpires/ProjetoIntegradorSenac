CREATE DATABASE INTEGRADOR_CPF;

CREATE OR REPLACE TABLE BANCO(
	ID VARCHAR(200) NOT NULL,
    NOME VARCHAR(120) NOT NULL,
    CONSTRAINT PK_BANCO PRIMARY KEY (ID),
    CONSTRAINT UK_NOMEBANCO UNIQUE (NOME)
);

CREATE OR REPLACE TABLE AGENCIA(
	ID VARCHAR(200) NOT NULL,
    ID_BANCO VARCHAR(200) NOT NULL,
    NOMEPROPRIETARIO VARCHAR(120) NOT NULL,
    NUMEROCONTA VARCHAR(10) NOT NULL,
	TIPODECONTA CHAR(1) NOT NULL,
	SALDO DECIMAL(11,2) NOT NULL,
    CONSTRAINT PK_IDAGENCIA PRIMARY KEY (ID),
    CONSTRAINT FK_IDBANCO FOREIGN KEY (ID_BANCO) REFERENCES BANCO (ID)
);

CREATE OR REPLACE TABLE GRUPODESPESA(
	ID VARCHAR(200) NOT NULL,
    DESCRICAO VARCHAR(120) NOT NULL,
    CONSTRAINT PK_IDGRUPODESPESA PRIMARY KEY (ID),
    CONSTRAINT UK_DESCRICAO UNIQUE (DESCRICAO)
);

CREATE OR REPLACE TABLE DESPESA(
    ID VARCHAR(200) NOT NULL,
    DESCRICAO VARCHAR(120) NOT NULL,
    ID_GRUPODESPESA VARCHAR(200) NOT NULL,
    DATALANCAMENTO DATE NOT NULL,
    DATAVENCIMENTO DATE NOT NULL,
    VALOR DECIMAL(11,2) NOT NULL,
    PAGO TINYINT NOT NULL,
    CONSTRAINT PK_DESPESA PRIMARY KEY (ID),
    CONSTRAINT FK_GRUPODESPESA FOREIGN KEY (ID_GRUPODESPESA) REFERENCES GRUPODESPESA (ID)
);

CREATE OR REPLACE TABLE USUARIO(
	ID VARCHAR(200) NOT NULL,
   	NOME VARCHAR(120) NOT NULL,
    EMAIL VARCHAR(200) NOT NULL,
    CONSTRAINT PK_USUARIO PRIMARY KEY (ID),
    CONSTRAINT UK_EMAIL UNIQUE (EMAIL)
);