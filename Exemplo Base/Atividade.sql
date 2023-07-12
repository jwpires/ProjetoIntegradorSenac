use PROJETOAPI;

INSERT INTO marca (`ID`, `NomeMarca`) VALUES ('1', 'NIKE');
INSERT INTO marca (`ID`, `NomeMarca`) VALUES ('2','Puma');
INSERT INTO marca (`ID`, `NomeMarca`) VALUES ('3','Adidas');
INSERT INTO marca (`ID`, `NomeMarca`) VALUES ('4','Polo');
INSERT INTO marca (`ID`, `NomeMarca`) VALUES ('5','Lacoste');

INSERT INTO produto(`ID`, `Nome`, `Preço`, `IDMARCA`) VALUES ('1', 'CAMISETA', '50', '1');
INSERT INTO produto(`ID`, `Nome`, `Preço`, `IDMARCA`) VALUES ('2', 'CALÇA', '50', '1');
INSERT INTO produto(`ID`, `Nome`, `Preço`, `IDMARCA`) VALUES ('3', 'TENIS', '250', '1');

INSERT INTO produto(`ID`, `Nome`, `Preço`, `IDMARCA`) VALUES ('4', 'CAMISETA', '50', '2');
INSERT INTO produto(`ID`, `Nome`, `Preço`, `IDMARCA`) VALUES ('5', 'CALÇA', '50', '2');
INSERT INTO produto(`ID`, `Nome`, `Preço`, `IDMARCA`) VALUES ('6', 'TENIS', '250', '2');

INSERT INTO produto(`ID`, `Nome`, `Preço`, `IDMARCA`) VALUES ('7', 'CAMISETA', '50', '3');
INSERT INTO produto(`ID`, `Nome`, `Preço`, `IDMARCA`) VALUES ('8', 'CALÇA', '50', '3');
INSERT INTO produto(`ID`, `Nome`, `Preço`, `IDMARCA`) VALUES ('9', 'TENIS', '250', '3');

INSERT INTO produto(`ID`, `Nome`, `Preço`, `IDMARCA`) VALUES ('10', 'CAMISETA', '50', '4');
INSERT INTO produto(`ID`, `Nome`, `Preço`, `IDMARCA`) VALUES ('11', 'CALÇA', '50', '4');
INSERT INTO produto(`ID`, `Nome`, `Preço`, `IDMARCA`) VALUES ('12', 'TENIS', '250', '4');

INSERT INTO produto(`ID`, `Nome`, `Preço`, `IDMARCA`) VALUES ('13', 'CAMISETA', '50', '5');
INSERT INTO produto(`ID`, `Nome`, `Preço`, `IDMARCA`) VALUES ('14', 'CALÇA', '50', '5');
INSERT INTO produto(`ID`, `Nome`, `Preço`, `IDMARCA`) VALUES ('15', 'TENIS', '250', '5');

INSERT INTO tamanho(`ID`, `Nome`) VALUES ('1', 'M NIKE');
INSERT INTO tamanho(`ID`, `Nome`) VALUES ('2', 'G NIKE');

INSERT INTO tamanho(`ID`, `Nome`) VALUES ('3', 'P PUMA');
INSERT INTO tamanho(`ID`, `Nome`) VALUES ('4', 'PP PUMA');

INSERT INTO tamanho(`ID`, `Nome`) VALUES ('5', 'M ADIDAS');
INSERT INTO tamanho(`ID`, `Nome`) VALUES ('6', 'GG ADIDAS');

INSERT INTO tamanho(`ID`, `Nome`) VALUES ('7', 'M POLO');
INSERT INTO tamanho(`ID`, `Nome`) VALUES ('8', 'XG POLO');

INSERT INTO tamanho(`ID`, `Nome`) VALUES ('9', 'M LACOSTE');
INSERT INTO tamanho(`ID`, `Nome`) VALUES ('10', 'G2 LACOSTE');

INSERT INTO cor(`ID`, `NomeCor`) VALUES ('1', 'BRANCO');
INSERT INTO cor(`ID`, `NomeCor`) VALUES ('2', 'PRETO');

INSERT INTO cor(`ID`, `NomeCor`) VALUES ('3', 'AZUL');
INSERT INTO cor(`ID`, `NomeCor`) VALUES ('4', 'VERDE');

INSERT INTO cor(`ID`, `NomeCor`) VALUES ('5', 'VERMELHO');
INSERT INTO cor(`ID`, `NomeCor`) VALUES ('6', 'ROXO');

INSERT INTO cor(`ID`, `NomeCor`) VALUES ('7', 'ROSA');
INSERT INTO cor(`ID`, `NomeCor`) VALUES ('8', 'PINK');

INSERT INTO cor(`ID`, `NomeCor`) VALUES ('9', 'VIOLETA');
INSERT INTO cor(`ID`, `NomeCor`) VALUES ('10', 'CINZA');

/*MOVIMENTAÇÃO DE ENTRADA NA TABELA ESTOQUE*/

INSERT INTO estoque (`ID`, `Tipo`, `IDPRODUTO`, `QTDE`) VALUES ('1', 'ENTRADA', '1', '15');
INSERT INTO estoque (`ID`, `Tipo`, `IDPRODUTO`, `QTDE`) VALUES ('2', 'ENTRADA', '2', '15');
INSERT INTO estoque (`ID`, `Tipo`, `IDPRODUTO`, `QTDE`) VALUES ('3', 'ENTRADA', '3', '15');
INSERT INTO estoque (`ID`, `Tipo`, `IDPRODUTO`, `QTDE`) VALUES ('4', 'ENTRADA', '4', '15');
INSERT INTO estoque (`ID`, `Tipo`, `IDPRODUTO`, `QTDE`) VALUES ('5', 'ENTRADA', '5', '15');
INSERT INTO estoque (`ID`, `Tipo`, `IDPRODUTO`, `QTDE`) VALUES ('6', 'ENTRADA', '6', '15');
INSERT INTO estoque (`ID`, `Tipo`, `IDPRODUTO`, `QTDE`) VALUES ('7', 'ENTRADA', '7', '15');
INSERT INTO estoque (`ID`, `Tipo`, `IDPRODUTO`, `QTDE`) VALUES ('8', 'ENTRADA', '8', '15');
INSERT INTO estoque (`ID`, `Tipo`, `IDPRODUTO`, `QTDE`) VALUES ('9', 'ENTRADA', '9', '15');
INSERT INTO estoque (`ID`, `Tipo`, `IDPRODUTO`, `QTDE`) VALUES ('10', 'ENTRADA', '10', '15');
INSERT INTO estoque (`ID`, `Tipo`, `IDPRODUTO`, `QTDE`) VALUES ('11', 'ENTRADA', '11', '15');
INSERT INTO estoque (`ID`, `Tipo`, `IDPRODUTO`, `QTDE`) VALUES ('12', 'ENTRADA', '12', '15');
INSERT INTO estoque (`ID`, `Tipo`, `IDPRODUTO`, `QTDE`) VALUES ('13', 'ENTRADA', '13', '15');
INSERT INTO estoque (`ID`, `Tipo`, `IDPRODUTO`, `QTDE`) VALUES ('14', 'ENTRADA', '14', '15');
INSERT INTO estoque (`ID`, `Tipo`, `IDPRODUTO`, `QTDE`) VALUES ('15', 'ENTRADA', '15', '15');


/*MOVIMENTAÇÃO DE SAIDA NA TABELA ESTOQUE*/

INSERT INTO estoque (`ID`, `Tipo`, `IDPRODUTO`, `QTDE`) VALUES ('16', 'SAIDA', '1', '1');
INSERT INTO estoque (`ID`, `Tipo`, `IDPRODUTO`, `QTDE`) VALUES ('17', 'SAIDA', '2', '1');
INSERT INTO estoque (`ID`, `Tipo`, `IDPRODUTO`, `QTDE`) VALUES ('18', 'SAIDA', '3', '1');
INSERT INTO estoque (`ID`, `Tipo`, `IDPRODUTO`, `QTDE`) VALUES ('19', 'SAIDA', '4', '1');
INSERT INTO estoque (`ID`, `Tipo`, `IDPRODUTO`, `QTDE`) VALUES ('20', 'SAIDA', '5', '1');
INSERT INTO estoque (`ID`, `Tipo`, `IDPRODUTO`, `QTDE`) VALUES ('21', 'SAIDA', '6', '1');
INSERT INTO estoque (`ID`, `Tipo`, `IDPRODUTO`, `QTDE`) VALUES ('22', 'SAIDA', '7', '1');
INSERT INTO estoque (`ID`, `Tipo`, `IDPRODUTO`, `QTDE`) VALUES ('23', 'SAIDA', '8', '1');
INSERT INTO estoque (`ID`, `Tipo`, `IDPRODUTO`, `QTDE`) VALUES ('24', 'SAIDA', '9', '1');
INSERT INTO estoque (`ID`, `Tipo`, `IDPRODUTO`, `QTDE`) VALUES ('25', 'SAIDA', '10', '1');
INSERT INTO estoque (`ID`, `Tipo`, `IDPRODUTO`, `QTDE`) VALUES ('26', 'SAIDA', '11', '1');
INSERT INTO estoque (`ID`, `Tipo`, `IDPRODUTO`, `QTDE`) VALUES ('27', 'SAIDA', '12', '1');
INSERT INTO estoque (`ID`, `Tipo`, `IDPRODUTO`, `QTDE`) VALUES ('28', 'SAIDA', '13', '1');
INSERT INTO estoque (`ID`, `Tipo`, `IDPRODUTO`, `QTDE`) VALUES ('29', 'SAIDA', '14', '1');
INSERT INTO estoque (`ID`, `Tipo`, `IDPRODUTO`, `QTDE`) VALUES ('30', 'SAIDA', '15', '1');

/*APAGANDO A MARCA POLO*/

SELECT * FROM PRODUTO WHERE IDMARCA = '4';

SELECT * FROM ESTOQUE WHERE IDPRODUTO ='10';
DELETE FROM ESTOQUE WHERE IDPRODUTO ='10';

SELECT * FROM ESTOQUE WHERE IDPRODUTO ='11';
DELETE FROM ESTOQUE WHERE IDPRODUTO ='11';

SELECT * FROM ESTOQUE WHERE IDPRODUTO ='12';
DELETE FROM ESTOQUE WHERE IDPRODUTO ='12';

SELECT * FROM PRODUTO WHERE IDMARCA = '4';

DELETE FROM PRODUTO WHERE ID ='10';
DELETE FROM PRODUTO WHERE ID ='11';
DELETE FROM PRODUTO WHERE ID ='12';

SELECT * FROM MARCA WHERE ID = '4';

DELETE FROM PRODUTO WHERE ID ='10';
DELETE FROM PRODUTO WHERE ID ='11';
DELETE FROM PRODUTO WHERE ID ='12';

