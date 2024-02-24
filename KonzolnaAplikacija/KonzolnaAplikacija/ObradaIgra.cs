using KonzolnaAplikacija.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace KonzolnaAplikacija
{
    internal class ObradaIgra
    {
        public List<Igra> Igre {get;}

        public ObradaIgra()
        {
            Igre = new List<Igra>();
            if (Pomocno.dev)
            {
                TestniPodaci();
            }
        }

        public void PrikaziIzbornik()
        {
            Console.WriteLine("Izbornik za rad sa igrama");
            Console.WriteLine("1. Pregled postojećih igara");
            Console.WriteLine("2. Unos nove igre");
            Console.WriteLine("3. Promjena postojeće igre");
            Console.WriteLine("4. Brisanje postojeće igre");
            Console.WriteLine("5. Povratak na glavni izbornik");
            switch (Pomocno.ucitajBrojRaspon("Odaberite stavku izbornika igre: ",
                "Odabir mora biti 1-5", 1, 5))
            {
                case 1:
                    PrikaziIgre();
                    PrikaziIzbornik();
                    break;
                case 2:
                    UnosNoveIgre();
                    PrikaziIzbornik();
                    break;
                case 3:
                    PromjenaIgre();
                    PrikaziIzbornik();
                    break;
                case 4:
                    BrisanjeIgre();
                    PrikaziIzbornik();
                    break;
                case 5:
                    Console.WriteLine("Gotov rad s igrama");
                    break;
            }
        }

        public void PrikaziIgre()
        {
            Console.WriteLine("--------------");
            Console.WriteLine("-----Igre-----");
            Console.WriteLine("--------------");
            int b = 1;
            foreach (Igra igra in Igre)
            {
                Console.WriteLine("{0}. {1}", b++, igra.Naziv);
            }
            Console.WriteLine("--------------");
        }

        private void UnosNoveIgre()
        {
            var i = new Igra();
            i.Sifra = Pomocno.ucitajCijeliBroj("Unesite šifru igre: ", "Unos je obavezan");
            i.Naziv = Pomocno.UcitajString("Unesite ime igre: ", "Unos je obavezan");
            i.Izdavac = Pomocno.UcitajString("Unesite ime izdavača: ", "Unos je obavezan");
            Igre.Add(i);
        }

        private void PromjenaIgre()
        {
            PrikaziIgre();
            int index = Pomocno.ucitajBrojRaspon("Odaberite redni broj igre: ", "Nije dobar odabir", 1, Igre.Count());
            var i = Igre[index - 1];
            i.Sifra = Pomocno.ucitajCijeliBroj("Unesite šifru igre (" + i.Sifra + "): ", "Unos mora biti pozitivan cijeli broj");
            i.Naziv = Pomocno.UcitajString("Unesite ime igre (" + i.Naziv + "): ", "Unos je obavezan");
            i.Izdavac = Pomocno.UcitajString("Unesite ime izdavača (" + i.Izdavac + "): ", "Unos je obavezan");
        }

        private void BrisanjeIgre()
        {
            PrikaziIgre();
            int index = Pomocno.ucitajBrojRaspon("Odaberi redni broj igre: ", "Nije dobar odabir", 1, Igre.Count());
            Igre.RemoveAt(index-1);
        }


        private void TestniPodaci()
        {
            Igre.Add(new Igra
            {
                Sifra = 1,
                Naziv = "Digimon",
                Izdavac = "Bandai Namco"
            });

            Igre.Add(new Igra
            {
                Sifra = 2,
                Naziv = "Pokemon",
                Izdavac = "Nintendo"
            });
        }
    }
}
