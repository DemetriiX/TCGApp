use master;
go
drop database if exists tcgapp;
go
create database tcgapp;
go
alter database tcgapp collate Croatian_CI_AS;
go
use tcgapp;

create table korisnici
(
	sifra		int			 not null primary key identity (1,1),
	username	varchar(30)	 not null,
	ime			varchar(30)	 not null,
	prezime		varchar(30)	 not null,
	email		varchar(100) not null,
	mjesto		varchar(50),
	drzava		varchar(50)
);

create table korisnici_igre
(
	korisnik	int		not null,
	igra		int		not null
);

create table igre
(
	sifra		int		not null primary key identity (1,1),
	naziv		varchar(50) not null,
	izdavac		varchar(50)
);

create table kolekcije
(
	sifra			int			not null primary key identity (1,1),
	naziv			varchar(50) not null,
	godinaizdavanja int,
	igra			int
);

create table slicice
(
	sifra			int			not null primary key identity (1,1),
	naziv			varchar(50) not null,
	kolekcija		int			not null,
	brojslicice		int,
	rijetkost		int,
	posebnoizdanje	bit
);

create table rijetkosti
(
	sifra	int			not null primary key identity (1,1),
	naziv	varchar(50) not null,
);


alter table korisnici_igre add foreign key (korisnik) references korisnici(sifra);
alter table korisnici_igre add foreign key (igra) references igre(sifra);
alter table kolekcije add foreign key (igra) references igre(sifra);
alter table slicice add foreign key (kolekcija) references kolekcije(sifra);
alter table slicice add foreign key (rijetkost) references rijetkosti(sifra);


-- Insertiranje podataka

insert into korisnici (username, ime, prezime, email, mjesto, drzava) values ('bpetra', 'Petra', 'Božić', 'bozic.petra35@gmail.com', null, 'Hrvatska');
insert into korisnici (username, ime, prezime, email, mjesto, drzava) values ('dfarkas', 'Dominik', 'Farkaš', 'sinisartf13@gmail.com', null, 'Hrvatska');
insert into korisnici (username, ime, prezime, email, mjesto, drzava) values ('nglavas', 'Natalija', 'Glavaš', 'natalija-glavas@hotmail.com', null, 'Hrvatska');
insert into korisnici (username, ime, prezime, email, mjesto, drzava) values ('mjanic', 'Miroslav', 'Janić', 'miroslav.janic@gmail.com', null, 'Hrvatska');
insert into korisnici (username, ime, prezime, email, mjesto, drzava) values ('fjanjesic', 'Filip', 'Janješić', 'filip.janjesic@gmail.com', null, 'Hrvatska');
insert into korisnici (username, ime, prezime, email, mjesto, drzava) values ('njovic', 'Nataša', 'Jović', 'natasajovic238@gmail.com', null, 'Hrvatska');
insert into korisnici (username, ime, prezime, email, mjesto, drzava) values ('lbaric', 'Luka', 'Barić', 'lukabaric15@gmail.com', null, 'Hrvatska');
insert into korisnici (username, ime, prezime, email, mjesto, drzava) values ('akelava', 'Antonio', 'Kelava', 'kelava.antonio392@gmail.com', null, 'Hrvatska');
insert into korisnici (username, ime, prezime, email, mjesto, drzava) values ('mkesinovic', 'Marijan', 'Kesinović', 'kesinovic957@gmail.com', null, 'Hrvatska');
insert into korisnici (username, ime, prezime, email, mjesto, drzava) values ('ileninger', 'Ivan', 'Leninger', 'ileninger@live.com', null, 'Hrvatska');
insert into korisnici (username, ime, prezime, email, mjesto, drzava) values ('amacanga', 'Antonio', 'Macanga', 'macanga.antonio@gmail.com', null, 'Hrvatska');
insert into korisnici (username, ime, prezime, email, mjesto, drzava) values ('amiloloza', 'Antonio', 'Miloloža', 'milolozaantonio@yahoo.com', null, 'Hrvatska');
insert into korisnici (username, ime, prezime, email, mjesto, drzava) values ('mpavkovic', 'Matija', 'Pavković', 'matijapavkovic74@gmail.com', null, 'Hrvatska');
insert into korisnici (username, ime, prezime, email, mjesto, drzava) values ('kpeterfaj', 'Karlo', 'Peterfaj', 'karlo.peterfaj@gmail.com', null, 'Hrvatska');
insert into korisnici (username, ime, prezime, email, mjesto, drzava) values ('aplecas', 'Adriana', 'Plećaš', 'adriana.plecas@gmail.com', null, 'Hrvatska');
insert into korisnici (username, ime, prezime, email, mjesto, drzava) values ('isencic', 'Ivan', 'Senčić', 'ivan.sencic2000@gmail.com', null, 'Hrvatska');
insert into korisnici (username, ime, prezime, email, mjesto, drzava) values ('zsuler', 'Zvonimir', 'Šuler', 'zvonimir.suler@gmail.com', null, 'Hrvatska');
insert into korisnici (username, ime, prezime, email, mjesto, drzava) values ('mturcek', 'Mario', 'Turček', 'mario.turcek@gmail.com', null, 'Hrvatska');
insert into korisnici (username, ime, prezime, email, mjesto, drzava) values ('dveseli', 'Domagoj', 'Veseli', 'dveseli555@gmail.com', null, 'Hrvatska');
insert into korisnici (username, ime, prezime, email, mjesto, drzava) values ('kvukovic', 'Kristijan', 'Vuković', 'alanford700@gmail.com', null, 'Hrvatska');
insert into korisnici (username, ime, prezime, email, mjesto, drzava) values ('ivukusic', 'Ivan', 'Vukušić', 'ivukusic27@gmail.com', null, 'Hrvatska');
insert into korisnici (username, ime, prezime, email, mjesto, drzava) values ('rzaric', 'Roman', 'Žarić', 'roman.zaric@gmail.com', null, 'Hrvatska');
insert into korisnici (username, ime, prezime, email, mjesto, drzava) values ('ipavlovic', 'Ivan', 'Pavlović', 'ipavlovic6437@gmail.com', null, 'Hrvatska');
insert into korisnici (username, ime, prezime, email, mjesto, drzava) values ('azupanic', 'Andrea', 'Županić', 'andrea.zupanic10@gmail.com', null, 'Hrvatska');
insert into korisnici (username, ime, prezime, email, mjesto, drzava) values ('tzupanic', 'Tomislav', 'Županić', 'tomislav.zupanic333@gmail.com', null, 'Hrvatska');
insert into korisnici (username, ime, prezime, email, mjesto, drzava) values ('mpetak', 'Martina', 'Petak', 'petak.martina@gmail.com', null, 'Hrvatska');
insert into korisnici (username, ime, prezime, email, mjesto, drzava) values ('mperak', 'Marko', 'Perak', 'markoperak469@gmail.com', null, 'Hrvatska');
insert into korisnici (username, ime, prezime, email, mjesto, drzava) values ('bmokris', 'Bartol', 'Mokriš', 'bartol567@gmail.com', null, 'Hrvatska');
insert into korisnici (username, ime, prezime, email, mjesto, drzava) values ('ljularic', 'Ljubomir', 'Jularić', 'ljubojularic93@gmail.com', null, 'Hrvatska');
insert into korisnici (username, ime, prezime, email, mjesto, drzava) values ('icelic', 'Ivor', 'Ćelić', 'ivorcelic@gmail.com', null, 'Hrvatska');

insert into igre (naziv, izdavac)
values ('Digimon Card Game', 'Bandai Namco');

insert into kolekcije (naziv, godinaizdavanja, igra) 
values ('EX-01', '2022', 1);
insert into kolekcije (naziv, godinaizdavanja, igra) 
values ('EX-02', '2022', 1);
insert into kolekcije (naziv, godinaizdavanja, igra) 
values ('EX-03', '2022', 1);
insert into kolekcije (naziv, godinaizdavanja, igra) 
values ('EX-04', '2023', 1);
insert into kolekcije (naziv, godinaizdavanja, igra) 
values ('EX-05', '2024', 1);
insert into kolekcije (naziv, godinaizdavanja, igra) 
values ('EX-06', '2024', 1);
insert into kolekcije (naziv, godinaizdavanja, igra) 
values ('BT-01', '2020', 1);
insert into kolekcije (naziv, godinaizdavanja, igra) 
values ('BT-02', '2020', 1);
insert into kolekcije (naziv, godinaizdavanja, igra) 
values ('BT-03', '2020', 1);
insert into kolekcije (naziv, godinaizdavanja, igra) 
values ('BT-04', '2021', 1);
insert into kolekcije (naziv, godinaizdavanja, igra) 
values ('BT-05', '2021', 1);
insert into kolekcije (naziv, godinaizdavanja, igra) 
values ('BT-06', '2021', 1);
insert into kolekcije (naziv, godinaizdavanja, igra) 
values ('BT-07', '2022', 1);
insert into kolekcije (naziv, godinaizdavanja, igra) 
values ('BT-08', '2022', 1);
insert into kolekcije (naziv, godinaizdavanja, igra) 
values ('BT-9', '2022', 1);
insert into kolekcije (naziv, godinaizdavanja, igra) 
values ('BT-10', '2022', 1);
insert into kolekcije (naziv, godinaizdavanja, igra) 
values ('BT-11', '2023', 1);
insert into kolekcije (naziv, godinaizdavanja, igra) 
values ('BT-12', '2023', 1);
insert into kolekcije (naziv, godinaizdavanja, igra) 
values ('BT-13', '2023', 1);
insert into kolekcije (naziv, godinaizdavanja, igra) 
values ('BT-14', '2023', 1);
insert into kolekcije (naziv, godinaizdavanja, igra) 
values ('BT-15', '2024', 1);
insert into kolekcije (naziv, godinaizdavanja, igra) 
values ('BT-16', '2024', 1);
insert into kolekcije (naziv, godinaizdavanja, igra) 
values ('BT01-03-1.0', '2021', 1);
insert into kolekcije (naziv, godinaizdavanja, igra) 
values ('BT01-03-1.5', '2021', 1);
insert into kolekcije (naziv, godinaizdavanja, igra) 
values ('BTC-01', '2022', 1);

insert into korisnici_igre (korisnik, igra) 
values (1,1), (2,1), (3,1), (4,1), (5,1), (6,1), (7,1), (8,1), (9,1), (10,1), (11,1), (12,1), (13,1), (14,1), (15,1),
	   (16,1), (17,1), (18,1), (19,1), (20,1), (21,1), (22,1), (23,1), (24,1), (25,1), (26,1), (27,1), (28,1), (29,1),
	   (30,1);

insert into rijetkosti (naziv)
values ('common'), ('uncommon'), ('rare'), ('superrare'), ('secretrare');

insert into slicice (naziv, kolekcija, brojslicice, rijetkost, posebnoizdanje) values ('Agumon', 1, 1, 2, 0);
insert into slicice (naziv, kolekcija, brojslicice, rijetkost, posebnoizdanje) values ('Agumon', 1, 1, 2, 1);
insert into slicice (naziv, kolekcija, brojslicice, rijetkost, posebnoizdanje) values ('Biyomon', 1, 2, 1, 0);
insert into slicice (naziv, kolekcija, brojslicice, rijetkost, posebnoizdanje) values ('Biyomon', 1, 2, 1, 1);
insert into slicice (naziv, kolekcija, brojslicice, rijetkost, posebnoizdanje) values ('Birdamon', 1, 3, 2, 0);
insert into slicice (naziv, kolekcija, brojslicice, rijetkost, posebnoizdanje) values ('Greymon', 1, 4, 1, 0);
insert into slicice (naziv, kolekcija, brojslicice, rijetkost, posebnoizdanje) values ('Greymon', 1, 4, 1, 1);
insert into slicice (naziv, kolekcija, brojslicice, rijetkost, posebnoizdanje) values ('Tyrannomon', 1, 5, 3, 0);
insert into slicice (naziv, kolekcija, brojslicice, rijetkost, posebnoizdanje) values ('Tyrannomon', 1, 5, 3, 1);
insert into slicice (naziv, kolekcija, brojslicice, rijetkost, posebnoizdanje) values ('Garudamon', 1, 6, 1, 0);
insert into slicice (naziv, kolekcija, brojslicice, rijetkost, posebnoizdanje) values ('Garudamon', 1, 6, 1, 1);
insert into slicice (naziv, kolekcija, brojslicice, rijetkost, posebnoizdanje) values ('Megadramon', 1, 7, 1, 0);
insert into slicice (naziv, kolekcija, brojslicice, rijetkost, posebnoizdanje) values ('MetalGreymon', 1, 8, 3, 0);
insert into slicice (naziv, kolekcija, brojslicice, rijetkost, posebnoizdanje) values ('MetalGreymon', 1, 8, 3, 1);
insert into slicice (naziv, kolekcija, brojslicice, rijetkost, posebnoizdanje) values ('WarGreymon', 1, 9, 4, 0);
insert into slicice (naziv, kolekcija, brojslicice, rijetkost, posebnoizdanje) values ('WarGreymon', 1, 9, 4, 1);
insert into slicice (naziv, kolekcija, brojslicice, rijetkost, posebnoizdanje) values ('Phoenixmon', 1, 10, 2, 0);
insert into slicice (naziv, kolekcija, brojslicice, rijetkost, posebnoizdanje) values ('Gabumon', 1, 11, 2, 0);
insert into slicice (naziv, kolekcija, brojslicice, rijetkost, posebnoizdanje) values ('Gabumon', 1, 11, 2, 1);
insert into slicice (naziv, kolekcija, brojslicice, rijetkost, posebnoizdanje) values ('Gomamon', 1, 12, 1, 0);
insert into slicice (naziv, kolekcija, brojslicice, rijetkost, posebnoizdanje) values ('Gomamon', 1, 12, 1, 1);
insert into slicice (naziv, kolekcija, brojslicice, rijetkost, posebnoizdanje) values ('Veemon', 1, 13, 3, 0);
insert into slicice (naziv, kolekcija, brojslicice, rijetkost, posebnoizdanje) values ('ExVeemon', 1, 14, 1, 0);
insert into slicice (naziv, kolekcija, brojslicice, rijetkost, posebnoizdanje) values ('Garurumon', 1, 15, 2, 0);
insert into slicice (naziv, kolekcija, brojslicice, rijetkost, posebnoizdanje) values ('Garurumon', 1, 15, 2, 1);
insert into slicice (naziv, kolekcija, brojslicice, rijetkost, posebnoizdanje) values ('Ikkakumon', 1, 16, 1, 0);
insert into slicice (naziv, kolekcija, brojslicice, rijetkost, posebnoizdanje) values ('WereGarurumon', 1, 17, 1, 0);
insert into slicice (naziv, kolekcija, brojslicice, rijetkost, posebnoizdanje) values ('WereGarurumon', 1, 17, 1, 1);
insert into slicice (naziv, kolekcija, brojslicice, rijetkost, posebnoizdanje) values ('Zudomon', 1, 18, 1, 0);
insert into slicice (naziv, kolekcija, brojslicice, rijetkost, posebnoizdanje) values ('Zudomon', 1, 18, 1, 1);
insert into slicice (naziv, kolekcija, brojslicice, rijetkost, posebnoizdanje) values ('Paildramon', 1, 19, 3, 0);
insert into slicice (naziv, kolekcija, brojslicice, rijetkost, posebnoizdanje) values ('Paildramon', 1, 19, 3, 1);
insert into slicice (naziv, kolekcija, brojslicice, rijetkost, posebnoizdanje) values ('Plesiomon', 1, 20, 2, 0);
insert into slicice (naziv, kolekcija, brojslicice, rijetkost, posebnoizdanje) values ('MetalGarurumon', 1, 21, 4, 0);
insert into slicice (naziv, kolekcija, brojslicice, rijetkost, posebnoizdanje) values ('MetalGarurumon', 1, 21, 4, 1);
insert into slicice (naziv, kolekcija, brojslicice, rijetkost, posebnoizdanje) values ('Imperialdramon Dragon Mode', 1, 22, 4, 0);
insert into slicice (naziv, kolekcija, brojslicice, rijetkost, posebnoizdanje) values ('Imperialdramon Dragon Mode', 1, 22, 4, 1);
insert into slicice (naziv, kolekcija, brojslicice, rijetkost, posebnoizdanje) values ('Elecmon', 1, 23, 1, 0);
insert into slicice (naziv, kolekcija, brojslicice, rijetkost, posebnoizdanje) values ('Patamon', 1, 24, 2, 0);
insert into slicice (naziv, kolekcija, brojslicice, rijetkost, posebnoizdanje) values ('Patamon', 1, 24, 2, 1);
insert into slicice (naziv, kolekcija, brojslicice, rijetkost, posebnoizdanje) values ('Salamon', 1, 25, 1, 0);
insert into slicice (naziv, kolekcija, brojslicice, rijetkost, posebnoizdanje) values ('Gatomon', 1, 26, 2, 0);
insert into slicice (naziv, kolekcija, brojslicice, rijetkost, posebnoizdanje) values ('Gatomon', 1, 26, 2, 1);
insert into slicice (naziv, kolekcija, brojslicice, rijetkost, posebnoizdanje) values ('Leomon', 1, 27, 3, 0);
insert into slicice (naziv, kolekcija, brojslicice, rijetkost, posebnoizdanje) values ('Angemon', 1, 28, 1, 0);
insert into slicice (naziv, kolekcija, brojslicice, rijetkost, posebnoizdanje) values ('MagnaAngemon', 1, 29, 4, 0);
insert into slicice (naziv, kolekcija, brojslicice, rijetkost, posebnoizdanje) values ('MagnaAngemon', 1, 29, 4, 1);
insert into slicice (naziv, kolekcija, brojslicice, rijetkost, posebnoizdanje) values ('Angewomon', 1, 30, 4, 0);
insert into slicice (naziv, kolekcija, brojslicice, rijetkost, posebnoizdanje) values ('Angewomon', 1, 30, 4, 1);
insert into slicice (naziv, kolekcija, brojslicice, rijetkost, posebnoizdanje) values ('Seraphimon', 1, 31, 3, 0);
insert into slicice (naziv, kolekcija, brojslicice, rijetkost, posebnoizdanje) values ('Magnadramon', 1, 32, 2, 0);
insert into slicice (naziv, kolekcija, brojslicice, rijetkost, posebnoizdanje) values ('Tentomon', 1, 33, 1, 0);
insert into slicice (naziv, kolekcija, brojslicice, rijetkost, posebnoizdanje) values ('Tentomon', 1, 33, 1, 1);
insert into slicice (naziv, kolekcija, brojslicice, rijetkost, posebnoizdanje) values ('Palmon', 1, 34, 1, 0);
insert into slicice (naziv, kolekcija, brojslicice, rijetkost, posebnoizdanje) values ('Palmon', 1, 34, 1, 1);
insert into slicice (naziv, kolekcija, brojslicice, rijetkost, posebnoizdanje) values ('Kabuterimon', 1, 35, 2, 0);
insert into slicice (naziv, kolekcija, brojslicice, rijetkost, posebnoizdanje) values ('Togemon', 1, 36, 1, 0);
insert into slicice (naziv, kolekcija, brojslicice, rijetkost, posebnoizdanje) values ('Kuwagamon', 1, 37, 3, 0);
insert into slicice (naziv, kolekcija, brojslicice, rijetkost, posebnoizdanje) values ('Kuwagamon', 1, 37, 3, 1);
insert into slicice (naziv, kolekcija, brojslicice, rijetkost, posebnoizdanje) values ('Stingmon', 1, 38, 1, 0);
insert into slicice (naziv, kolekcija, brojslicice, rijetkost, posebnoizdanje) values ('Lillymon', 1, 39, 2, 0);
insert into slicice (naziv, kolekcija, brojslicice, rijetkost, posebnoizdanje) values ('Lillymon', 1, 39, 2, 1);
insert into slicice (naziv, kolekcija, brojslicice, rijetkost, posebnoizdanje) values ('MegaKabuterimon', 1, 40, 3, 0);
insert into slicice (naziv, kolekcija, brojslicice, rijetkost, posebnoizdanje) values ('MegaKabuterimon', 1, 40, 3, 1);
insert into slicice (naziv, kolekcija, brojslicice, rijetkost, posebnoizdanje) values ('DinoBeemon', 1, 41, 2, 0);
insert into slicice (naziv, kolekcija, brojslicice, rijetkost, posebnoizdanje) values ('Rosemon', 1, 42, 2, 0);
insert into slicice (naziv, kolekcija, brojslicice, rijetkost, posebnoizdanje) values ('HerculesKabuterimon', 1, 43, 4, 0);
insert into slicice (naziv, kolekcija, brojslicice, rijetkost, posebnoizdanje) values ('HerculesKabuterimon', 1, 43, 3, 1);
insert into slicice (naziv, kolekcija, brojslicice, rijetkost, posebnoizdanje) values ('Keramon', 1, 44, 1, 0);
insert into slicice (naziv, kolekcija, brojslicice, rijetkost, posebnoizdanje) values ('Hagurumon', 1, 45, 1, 0);
insert into slicice (naziv, kolekcija, brojslicice, rijetkost, posebnoizdanje) values ('Kurisarimon', 1, 46, 1, 0);
insert into slicice (naziv, kolekcija, brojslicice, rijetkost, posebnoizdanje) values ('Guardromon', 1, 47, 1, 0);
insert into slicice (naziv, kolekcija, brojslicice, rijetkost, posebnoizdanje) values ('Andromon', 1, 48, 1, 0);
insert into slicice (naziv, kolekcija, brojslicice, rijetkost, posebnoizdanje) values ('MetalTyrannomon', 1, 49, 1, 0);
insert into slicice (naziv, kolekcija, brojslicice, rijetkost, posebnoizdanje) values ('MetalMamemon', 1, 50, 1, 0);
insert into slicice (naziv, kolekcija, brojslicice, rijetkost, posebnoizdanje) values ('Infermon', 1, 51, 3, 0);
insert into slicice (naziv, kolekcija, brojslicice, rijetkost, posebnoizdanje) values ('Etemon', 1, 52, 2, 0);
insert into slicice (naziv, kolekcija, brojslicice, rijetkost, posebnoizdanje) values ('MetalEtemon', 1, 53, 2, 0);
insert into slicice (naziv, kolekcija, brojslicice, rijetkost, posebnoizdanje) values ('Boltmon', 1, 54, 2, 0);
insert into slicice (naziv, kolekcija, brojslicice, rijetkost, posebnoizdanje) values ('Tapirmon', 1, 55, 1, 0);
insert into slicice (naziv, kolekcija, brojslicice, rijetkost, posebnoizdanje) values ('DemiDevimon', 1, 56, 1, 0);
insert into slicice (naziv, kolekcija, brojslicice, rijetkost, posebnoizdanje) values ('Wizardmon', 1, 57, 1, 0);
insert into slicice (naziv, kolekcija, brojslicice, rijetkost, posebnoizdanje) values ('Devimon', 1, 58, 1, 0);
insert into slicice (naziv, kolekcija, brojslicice, rijetkost, posebnoizdanje) values ('Ogremon', 1, 59, 3, 0);
insert into slicice (naziv, kolekcija, brojslicice, rijetkost, posebnoizdanje) values ('Ogremon', 1, 59, 3, 1);
insert into slicice (naziv, kolekcija, brojslicice, rijetkost, posebnoizdanje) values ('LadyDevimon', 1, 60, 2, 0);
insert into slicice (naziv, kolekcija, brojslicice, rijetkost, posebnoizdanje) values ('Myotismon', 1, 61, 3, 0);
insert into slicice (naziv, kolekcija, brojslicice, rijetkost, posebnoizdanje) values ('SkullGreymon', 1, 62, 3, 0);
insert into slicice (naziv, kolekcija, brojslicice, rijetkost, posebnoizdanje) values ('VenomMyotismon', 1, 63, 4, 0);
insert into slicice (naziv, kolekcija, brojslicice, rijetkost, posebnoizdanje) values ('VenomMyotismon', 1, 63, 4, 1);
insert into slicice (naziv, kolekcija, brojslicice, rijetkost, posebnoizdanje) values ('Piedmon', 1, 64, 2, 0);
insert into slicice (naziv, kolekcija, brojslicice, rijetkost, posebnoizdanje) values ('Diaboromon', 1, 65, 4, 0);
insert into slicice (naziv, kolekcija, brojslicice, rijetkost, posebnoizdanje) values ('Diaboromon', 1, 65, 4, 1);
insert into slicice (naziv, kolekcija, brojslicice, rijetkost, posebnoizdanje) values ('Analog Youth', 1, 66, 3, 0);
insert into slicice (naziv, kolekcija, brojslicice, rijetkost, posebnoizdanje) values ('Analog Youth', 1, 66, 3, 1);
insert into slicice (naziv, kolekcija, brojslicice, rijetkost, posebnoizdanje) values ('Baptism by Fire!', 1, 67, 3, 0);
insert into slicice (naziv, kolekcija, brojslicice, rijetkost, posebnoizdanje) values ('Ice Wall!', 1, 68, 3, 0);
insert into slicice (naziv, kolekcija, brojslicice, rijetkost, posebnoizdanje) values ('Ultimate Connection!', 1, 69, 3, 0);
insert into slicice (naziv, kolekcija, brojslicice, rijetkost, posebnoizdanje) values ('Fight for Your Pride!', 1, 70, 3, 0);
insert into slicice (naziv, kolekcija, brojslicice, rijetkost, posebnoizdanje) values ('Win Rate: 60%!', 1, 71, 3, 0);
insert into slicice (naziv, kolekcija, brojslicice, rijetkost, posebnoizdanje) values ('Emergency Program Shutdown!', 1, 72, 3, 0);
insert into slicice (naziv, kolekcija, brojslicice, rijetkost, posebnoizdanje) values ('Machinedramon', 1, 73, 5, 0);
insert into slicice (naziv, kolekcija, brojslicice, rijetkost, posebnoizdanje) values ('Machinedramon', 1, 73, 5, 1);
insert into slicice (naziv, kolekcija, brojslicice, rijetkost, posebnoizdanje) values ('Gigimon', 2, 1, 2, 0);
insert into slicice (naziv, kolekcija, brojslicice, rijetkost, posebnoizdanje) values ('Gigimon', 2, 1, 2, 1);
insert into slicice (naziv, kolekcija, brojslicice, rijetkost, posebnoizdanje) values ('Xiaomon', 2, 2, 2, 0);
insert into slicice (naziv, kolekcija, brojslicice, rijetkost, posebnoizdanje) values ('Viximon', 2, 3, 2, 0);
insert into slicice (naziv, kolekcija, brojslicice, rijetkost, posebnoizdanje) values ('Viximon', 2, 3, 2, 1);
insert into slicice (naziv, kolekcija, brojslicice, rijetkost, posebnoizdanje) values ('Gummymon', 2, 4, 2, 0);
insert into slicice (naziv, kolekcija, brojslicice, rijetkost, posebnoizdanje) values ('Gummymon', 2, 4, 2, 1);
insert into slicice (naziv, kolekcija, brojslicice, rijetkost, posebnoizdanje) values ('Hopmon', 2, 5, 2, 0);
insert into slicice (naziv, kolekcija, brojslicice, rijetkost, posebnoizdanje) values ('Yaamon', 2, 6, 2, 0);
insert into slicice (naziv, kolekcija, brojslicice, rijetkost, posebnoizdanje) values ('Yaamon', 2, 6, 2, 1);
insert into slicice (naziv, kolekcija, brojslicice, rijetkost, posebnoizdanje) values ('Mother D-Reaper', 2, 7, 3, 0);
insert into slicice (naziv, kolekcija, brojslicice, rijetkost, posebnoizdanje) values ('Guilmon', 2, 8, 3, 0);
insert into slicice (naziv, kolekcija, brojslicice, rijetkost, posebnoizdanje) values ('Guilmon', 2, 8, 3, 1);
insert into slicice (naziv, kolekcija, brojslicice, rijetkost, posebnoizdanje) values ('Growlmon', 2, 9, 1, 0);
insert into slicice (naziv, kolekcija, brojslicice, rijetkost, posebnoizdanje) values ('WarGrowlmon', 2, 10, 2, 0);
insert into slicice (naziv, kolekcija, brojslicice, rijetkost, posebnoizdanje) values ('Gallantmon', 2, 11, 4, 0);
insert into slicice (naziv, kolekcija, brojslicice, rijetkost, posebnoizdanje) values ('Gallantmon', 2, 11, 4, 1);
insert into slicice (naziv, kolekcija, brojslicice, rijetkost, posebnoizdanje) values ('Megidramon', 2, 12, 4, 0);
insert into slicice (naziv, kolekcija, brojslicice, rijetkost, posebnoizdanje) values ('Megidramon', 2, 12, 4, 1);
insert into slicice (naziv, kolekcija, brojslicice, rijetkost, posebnoizdanje) values ('Labramon', 2, 13, 1, 0);
insert into slicice (naziv, kolekcija, brojslicice, rijetkost, posebnoizdanje) values ('IceDevimon', 2, 14, 1, 0);
insert into slicice (naziv, kolekcija, brojslicice, rijetkost, posebnoizdanje) values ('Seasarmon', 2, 15, 1, 0);
insert into slicice (naziv, kolekcija, brojslicice, rijetkost, posebnoizdanje) values ('Gorillamon', 2, 16, 1, 0);
insert into slicice (naziv, kolekcija, brojslicice, rijetkost, posebnoizdanje) values ('Leomon', 2, 17, 4, 0);
insert into slicice (naziv, kolekcija, brojslicice, rijetkost, posebnoizdanje) values ('Leomon', 2, 17, 4, 1);
insert into slicice (naziv, kolekcija, brojslicice, rijetkost, posebnoizdanje) values ('MarineAngemon', 2, 18, 3, 0);
insert into slicice (naziv, kolekcija, brojslicice, rijetkost, posebnoizdanje) values ('MarineAngemon', 2, 18, 3, 1);
insert into slicice (naziv, kolekcija, brojslicice, rijetkost, posebnoizdanje) values ('Renamon', 2, 19, 3, 0);
insert into slicice (naziv, kolekcija, brojslicice, rijetkost, posebnoizdanje) values ('Renamon', 2, 19, 3, 1);
insert into slicice (naziv, kolekcija, brojslicice, rijetkost, posebnoizdanje) values ('Lopmon', 2, 20, 1, 0);
insert into slicice (naziv, kolekcija, brojslicice, rijetkost, posebnoizdanje) values ('Kyubimon', 2, 21, 1, 0);
insert into slicice (naziv, kolekcija, brojslicice, rijetkost, posebnoizdanje) values ('Antylamon', 2, 22, 3, 0);
insert into slicice (naziv, kolekcija, brojslicice, rijetkost, posebnoizdanje) values ('Antylamon', 2, 22, 3, 1);
insert into slicice (naziv, kolekcija, brojslicice, rijetkost, posebnoizdanje) values ('Taomon', 2, 23, 2, 0);
insert into slicice (naziv, kolekcija, brojslicice, rijetkost, posebnoizdanje) values ('Sakuyamon', 2, 24, 4, 0);
insert into slicice (naziv, kolekcija, brojslicice, rijetkost, posebnoizdanje) values ('Sakuyamon', 2, 24, 4, 1);
insert into slicice (naziv, kolekcija, brojslicice, rijetkost, posebnoizdanje) values ('Terriermon', 2, 25, 3, 0);
insert into slicice (naziv, kolekcija, brojslicice, rijetkost, posebnoizdanje) values ('Terriermon', 2, 25, 3, 1);
insert into slicice (naziv, kolekcija, brojslicice, rijetkost, posebnoizdanje) values ('Gargomon', 2, 26, 1, 0);
insert into slicice (naziv, kolekcija, brojslicice, rijetkost, posebnoizdanje) values ('Rapidmon', 2, 27, 2, 0);
insert into slicice (naziv, kolekcija, brojslicice, rijetkost, posebnoizdanje) values ('Parasitemon', 2, 28, 2, 0);
insert into slicice (naziv, kolekcija, brojslicice, rijetkost, posebnoizdanje) values ('MegaGargomon', 2, 29, 4, 0);
insert into slicice (naziv, kolekcija, brojslicice, rijetkost, posebnoizdanje) values ('MegaGargomon', 2, 29, 4, 1);
insert into slicice (naziv, kolekcija, brojslicice, rijetkost, posebnoizdanje) values ('Monodramon', 2, 30, 2, 0);
insert into slicice (naziv, kolekcija, brojslicice, rijetkost, posebnoizdanje) values ('Guardromon', 2, 31, 3, 0);
insert into slicice (naziv, kolekcija, brojslicice, rijetkost, posebnoizdanje) values ('Guardromon', 2, 31, 3, 1);
insert into slicice (naziv, kolekcija, brojslicice, rijetkost, posebnoizdanje) values ('Strikedramon', 2, 32, 1, 0);
insert into slicice (naziv, kolekcija, brojslicice, rijetkost, posebnoizdanje) values ('Locomon', 2, 33, 1, 0);
insert into slicice (naziv, kolekcija, brojslicice, rijetkost, posebnoizdanje) values ('Andromon', 2, 34, 1, 0);
insert into slicice (naziv, kolekcija, brojslicice, rijetkost, posebnoizdanje) values ('Cyberdramon', 2, 35, 3, 0);
insert into slicice (naziv, kolekcija, brojslicice, rijetkost, posebnoizdanje) values ('Cyberdramon', 2, 35, 3, 1);
insert into slicice (naziv, kolekcija, brojslicice, rijetkost, posebnoizdanje) values ('GroundLocomon', 2, 36, 1, 0);
insert into slicice (naziv, kolekcija, brojslicice, rijetkost, posebnoizdanje) values ('Reapermon', 2, 37, 2, 0);
insert into slicice (naziv, kolekcija, brojslicice, rijetkost, posebnoizdanje) values ('Justimon: Blitz Arm', 2, 38, 4, 0);
insert into slicice (naziv, kolekcija, brojslicice, rijetkost, posebnoizdanje) values ('Justimon: Blitz Arm', 2, 38, 4, 1);
insert into slicice (naziv, kolekcija, brojslicice, rijetkost, posebnoizdanje) values ('Impmon', 2, 39, 3, 0);
insert into slicice (naziv, kolekcija, brojslicice, rijetkost, posebnoizdanje) values ('Impmon', 2, 39, 3, 1);
insert into slicice (naziv, kolekcija, brojslicice, rijetkost, posebnoizdanje) values ('Devidramon', 2, 40, 1, 0);
insert into slicice (naziv, kolekcija, brojslicice, rijetkost, posebnoizdanje) values ('Dobermon', 2, 41, 3, 0);
insert into slicice (naziv, kolekcija, brojslicice, rijetkost, posebnoizdanje) values ('Dobermon', 2, 41, 3, 1);
insert into slicice (naziv, kolekcija, brojslicice, rijetkost, posebnoizdanje) values ('Mephistomon', 2, 42, 1, 0);
insert into slicice (naziv, kolekcija, brojslicice, rijetkost, posebnoizdanje) values ('Gulfmon', 2, 43, 4, 0);
insert into slicice (naziv, kolekcija, brojslicice, rijetkost, posebnoizdanje) values ('Gulfmon', 2, 43, 4, 1);
insert into slicice (naziv, kolekcija, brojslicice, rijetkost, posebnoizdanje) values ('Beelzemon', 2, 44, 4, 0);
insert into slicice (naziv, kolekcija, brojslicice, rijetkost, posebnoizdanje) values ('Beelzemon', 2, 44, 4, 1);
insert into slicice (naziv, kolekcija, brojslicice, rijetkost, posebnoizdanje) values ('Calumon', 2, 45, 3, 0);
insert into slicice (naziv, kolekcija, brojslicice, rijetkost, posebnoizdanje) values ('Calumon', 2, 45, 3, 1);
insert into slicice (naziv, kolekcija, brojslicice, rijetkost, posebnoizdanje) values ('ADR-02 Searcher', 2, 46, 1, 0);
insert into slicice (naziv, kolekcija, brojslicice, rijetkost, posebnoizdanje) values ('ADR-03 Pendulum Feet', 2, 47, 1, 0);
insert into slicice (naziv, kolekcija, brojslicice, rijetkost, posebnoizdanje) values ('ADR-04 Bubbles', 2, 48, 1, 0);
insert into slicice (naziv, kolekcija, brojslicice, rijetkost, posebnoizdanje) values ('ADR-01 Jeri', 2, 49, 2, 0);
insert into slicice (naziv, kolekcija, brojslicice, rijetkost, posebnoizdanje) values ('ADR-05 Creep Hands', 2, 50, 1, 0);
insert into slicice (naziv, kolekcija, brojslicice, rijetkost, posebnoizdanje) values ('ADR-07 Palates Head', 2, 51, 1, 0);
insert into slicice (naziv, kolekcija, brojslicice, rijetkost, posebnoizdanje) values ('ADR-06 Horn Striker', 2, 52, 1, 0);
insert into slicice (naziv, kolekcija, brojslicice, rijetkost, posebnoizdanje) values ('ADR-08 Optimizer', 2, 53, 1, 0);
insert into slicice (naziv, kolekcija, brojslicice, rijetkost, posebnoizdanje) values ('ADR-09 Gatekeeper', 2, 54, 1, 0);
insert into slicice (naziv, kolekcija, brojslicice, rijetkost, posebnoizdanje) values ('Reaper', 2, 55, 3, 0);
insert into slicice (naziv, kolekcija, brojslicice, rijetkost, posebnoizdanje) values ('Takato Matsuki', 2, 56, 3, 0);
insert into slicice (naziv, kolekcija, brojslicice, rijetkost, posebnoizdanje) values ('Takato Matsuki', 2, 56, 3, 1);
insert into slicice (naziv, kolekcija, brojslicice, rijetkost, posebnoizdanje) values ('Kenta Kitagawa', 2, 57, 2, 0);
insert into slicice (naziv, kolekcija, brojslicice, rijetkost, posebnoizdanje) values ('Jeri Kato', 2, 58, 2, 0);
insert into slicice (naziv, kolekcija, brojslicice, rijetkost, posebnoizdanje) values ('Jeri Kato', 2, 58, 2, 1);
insert into slicice (naziv, kolekcija, brojslicice, rijetkost, posebnoizdanje) values ('Shu-Chong Wong', 2, 59, 2, 0);
insert into slicice (naziv, kolekcija, brojslicice, rijetkost, posebnoizdanje) values ('Rika Nonaka', 2, 60, 3, 0);
insert into slicice (naziv, kolekcija, brojslicice, rijetkost, posebnoizdanje) values ('Rika Nonaka', 2, 60, 3, 1);
insert into slicice (naziv, kolekcija, brojslicice, rijetkost, posebnoizdanje) values ('Henry Wong', 2, 61, 3, 0);
insert into slicice (naziv, kolekcija, brojslicice, rijetkost, posebnoizdanje) values ('Henry Wong', 2, 61, 3, 1);
insert into slicice (naziv, kolekcija, brojslicice, rijetkost, posebnoizdanje) values ('Ryo Akiyama', 2, 62, 3, 0);
insert into slicice (naziv, kolekcija, brojslicice, rijetkost, posebnoizdanje) values ('Ryo Akiyama', 2, 62, 3, 1);
insert into slicice (naziv, kolekcija, brojslicice, rijetkost, posebnoizdanje) values ('Kazu Shioda', 2, 63, 2, 0);
insert into slicice (naziv, kolekcija, brojslicice, rijetkost, posebnoizdanje) values ('Alice McCoy', 2, 64, 2, 0);
insert into slicice (naziv, kolekcija, brojslicice, rijetkost, posebnoizdanje) values ('Ai & Mako', 2, 65, 3, 0);
insert into slicice (naziv, kolekcija, brojslicice, rijetkost, posebnoizdanje) values ('Ai & Mako', 2, 65, 3, 1);
insert into slicice (naziv, kolekcija, brojslicice, rijetkost, posebnoizdanje) values ('Offensive Plug-In A', 2, 66, 1, 0);
insert into slicice (naziv, kolekcija, brojslicice, rijetkost, posebnoizdanje) values ('Fire Ball', 2, 67, 2, 0);
insert into slicice (naziv, kolekcija, brojslicice, rijetkost, posebnoizdanje) values ('High-Speed Plug-In D', 2, 68, 1, 0);
insert into slicice (naziv, kolekcija, brojslicice, rijetkost, posebnoizdanje) values ('Fist of the Beast King', 2, 69, 1, 0);
insert into slicice (naziv, kolekcija, brojslicice, rijetkost, posebnoizdanje) values ('Super Digivolution Plug-In S', 2, 70, 1, 0);
insert into slicice (naziv, kolekcija, brojslicice, rijetkost, posebnoizdanje) values ('Death Slinger', 2, 71, 2, 0);
insert into slicice (naziv, kolekcija, brojslicice, rijetkost, posebnoizdanje) values ('Blue Card', 2, 72, 3, 0);
insert into slicice (naziv, kolekcija, brojslicice, rijetkost, posebnoizdanje) values ('Gallantmon Crimson Mode', 2, 73, 5, 0);
insert into slicice (naziv, kolekcija, brojslicice, rijetkost, posebnoizdanje) values ('Gallantmon Crimson Mode', 2, 73, 5, 1);
insert into slicice (naziv, kolekcija, brojslicice, rijetkost, posebnoizdanje) values ('Beelzemon Blast Mode', 2, 74, 5, 0);
insert into slicice (naziv, kolekcija, brojslicice, rijetkost, posebnoizdanje) values ('Beelzemon Blast Mode', 2, 74, 5, 1);


select * from korisnici;
select * from igre;
select * from kolekcije;
select * from korisnici_igre;
select * from slicice;
