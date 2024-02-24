using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace KonzolnaAplikacija.Model
{
    internal class Slicica : Entitet
    {
        public string Naziv {  get; set; }

        public Kolekcija Kolekcija {  get; set; } 

        public int BrojSlicice { get; set; }

        public int Rijetkost {  get; set; }

        public bool PosebnoIzdanje { get; set; }



    }
}
