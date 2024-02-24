using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace KonzolnaAplikacija
{
    internal class Izbornik
    {
        public ObradaKorisnik ObradaKorisnik { get; }
        public ObradaIgra ObradaIgra { get; }

        //private ObradaGrupa ObradaGrupa;

        public Izbornik()
        {
            Pomocno.dev = false;
            ObradaKorisnik = new ObradaKorisnik();
            ObradaIgra = new ObradaIgra();
            //ObradaGrupa = new ObradaGrupa(this);
            PozdravnaPoruka();
            PrikaziIzbornik();
        }

        private void PozdravnaPoruka()
        {
            Console.WriteLine("*************************************");
            Console.WriteLine("***** TCGApp v 1.0 *****");
            Console.WriteLine("*************************************");
        }

        private void PrikaziIzbornik()
        {
            Console.WriteLine("Glavni izbornik");
            Console.WriteLine("1. Korisnici");
            Console.WriteLine("2. Igre");
            Console.WriteLine("3. Grupe");
            Console.WriteLine("4. Izlaz iz programa");

            switch (Pomocno.ucitajBrojRaspon("Odaberite stavku izbornika: ",
                "Odabir mora biti 1 - 4.", 1, 4))
            {
                case 1:
                    ObradaKorisnik.PrikaziIzbornik();
                    PrikaziIzbornik();
                    break;
                case 2:
                    ObradaIgra.PrikaziIzbornik();
                    PrikaziIzbornik();
                    break;
                case 3:
                    //ObradaGrupa.PrikaziIzbornik();
                    PrikaziIzbornik();
                    break;
                case 4:
                    Console.WriteLine("Hvala na korištenju, doviđenja");
                    break;

            }


        }

    }
}
