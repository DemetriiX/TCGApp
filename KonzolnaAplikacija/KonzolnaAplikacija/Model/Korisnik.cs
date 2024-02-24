using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace KonzolnaAplikacija.Model
{
    internal class Korisnik : Entitet
    {
        public string Username { get; set; }

        public string Ime { get; set; }

        public string Prezime { get; set; }

        public string Email { get; set; }

        public string Mjesto { get; set; }

        public string Drzava { get; set; }
    }
}
