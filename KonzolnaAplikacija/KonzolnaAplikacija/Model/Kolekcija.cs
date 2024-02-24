using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace KonzolnaAplikacija.Model
{
    internal class Kolekcija : Entitet
    {
        public string Naziv {  get; set; }

        public int GodinaIzdavanja { get; set; }

        public Igra Igra { get; set; }


    }
}
