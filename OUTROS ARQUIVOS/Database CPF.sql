create database CPF ;
use cpf;

create table LancamentoDespesa(
IdLancamento integer primary key,
DescricaoDespe varchar(45) not null,
Id_Grupo integer not null,
Data_venc  date not null,
Data_Pagame date not null,
valor float not null,
juros numeric not null,
Pago char not null,
IdConta integer not null
)
