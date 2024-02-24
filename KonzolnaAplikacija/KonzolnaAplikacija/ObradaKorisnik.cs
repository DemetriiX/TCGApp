using KonzolnaAplikacija.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace KonzolnaAplikacija
{
    internal class ObradaKorisnik
    {
        public List<Korisnik> Korisnici { get; }

        public ObradaKorisnik()
        {
            Korisnici = new List<Korisnik>();
            if (Pomocno.dev)
            {
                TestniPodaci();
            }


        }

        public void PrikaziIzbornik()
        {
            Console.WriteLine("Izbornik za rad s korisnicima");
            Console.WriteLine("1. Pregled postojećih korisnika");
            Console.WriteLine("2. Unos novog korisnika");
            Console.WriteLine("3. Promjena postojećeg korisnika");
            Console.WriteLine("4. Brisanje korisnika");
            Console.WriteLine("5. Povratak na glavni izbornik");
            switch (Pomocno.ucitajBrojRaspon("Odaberite stavku izbornika korisnika: ",
                "Odabir mora biti 1-5", 1, 5))
            {
                case 1:
                    PrikaziKorisnike();
                    PrikaziIzbornik();
                    break;
                case 2:
                    UnosNovogKorisnika();
                    PrikaziIzbornik();
                    break;
                case 3:
                    PromjenaKorisnika();
                    PrikaziIzbornik();
                    break;
                case 4:
                    BrisanjeKorisnika();
                    PrikaziIzbornik();
                    break;
                case 5:
                    Console.WriteLine("Gotov rad s korisnicima");
                    break;
            }
        }

        private void PromjenaKorisnika()
        {
            PrikaziKorisnike();
            int index = Pomocno.ucitajBrojRaspon("Odaberi redni broj korisnika: ", "Nije dobar odabir", 1, Korisnici.Count());
            var s = Korisnici[index - 1];
            s.Sifra = Pomocno.ucitajCijeliBroj("Unesite šifru korisnika (" + s.Sifra + "): ",
                "Unos mora biti pozitivni cijeli broj");
            s.Username = Pomocno.UcitajString("Unesite korisničko ime korisnika (" + s.Username + "): ",
                "Unos obavezan");
            s.Ime = Pomocno.UcitajString("Unesite ime korisnika (" + s.Ime + "): ",
                "Unos obavezan");
            s.Prezime = Pomocno.UcitajString("Unesite prezime korisnika (" + s.Prezime + "): ",
                "Unos obavezan");
            s.Email = Pomocno.UcitajString("Unesite email korisnika (" + s.Email + "): ", "Unos obavezan");
            s.Mjesto = Pomocno.UcitajString("Unesite mjesto korisnika (" + s.Mjesto + "): ", "Unos nije obavezan");
            s.Drzava = Pomocno.UcitajString("Unesite državu korisnika (" + s.Drzava + "): ", "Unos nije obavezan");
        }

        private void BrisanjeKorisnika()
        {
            PrikaziKorisnike();
            int index = Pomocno.ucitajBrojRaspon("Odaberi redni broj korisnika: ", "Nije dobar odabir", 1, Korisnici.Count());
            Korisnici.RemoveAt(index - 1);
        }

        private void UnosNovogKorisnika()
        {
            var s = new Korisnik();
            s.Sifra = Pomocno.ucitajCijeliBroj("Unesite šifru korisnika: ",
                "Unos mora biti pozitivni cijeli broj");
            s.Username = Pomocno.UcitajString("Unesite korisničko ime korisnika: ",
                "Unos obavezan");
            s.Ime = Pomocno.UcitajString("Unesite ime korisnika: ",
                "Unos obavezan");
            s.Prezime = Pomocno.UcitajString("Unesite prezime korisnika: ", "Unos obavezan");
            s.Email = Pomocno.UcitajString("Unesite email korisnika: ", "Unos obavezan");
            s.Mjesto = Pomocno.UcitajString("Unesite mjesto korisnika: ", "Unos nije obavezan");
            s.Drzava = Pomocno.UcitajString("Unesite državu korisnika: ", "Unos nije obavezan");
            Korisnici.Add(s);

        }

        public void PrikaziKorisnike()
        {
            Console.WriteLine("------------------");
            Console.WriteLine("---- Korisnici ----");
            Console.WriteLine("------------------");
            int b = 1;
            foreach (Korisnik korisnik in Korisnici)
            {
                Console.WriteLine("{0}. {1}", b++, korisnik.Username);
            }
            Console.WriteLine("------------------");
        }

        private void TestniPodaci()
        {
            Korisnici.Add(new Korisnik
            {
                Sifra = 1,
                Username = "ihorvat1000",
                Ime = "Ivan",
                Prezime = "Horvat",
                Email = "ihorvat1000@gmail.com",
                Mjesto = "Osijek",
                Drzava = "Hrvatska"
            });

            Korisnici.Add(new Korisnik
            {
                Sifra = 2,
                Username = "mhorvat1000",
                Ime = "Marija",
                Prezime = "Horvat",
                Email = "mhorvat1000@gmail.com",
                Mjesto = "Osijek",
                Drzava = "Hrvatska"
            });
        }
    }
}
