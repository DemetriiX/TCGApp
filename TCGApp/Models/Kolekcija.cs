using System.ComponentModel.DataAnnotations.Schema;

namespace TCGApp.Models
{
    public class Kolekcija:Entitet
    {
        public string? Naziv { get; set; }

        public int? GodinaIzdavanja { get; set; }

        [ForeignKey("igra")]
        public Igra? Igra { get; set; }
    }
}
