using System.ComponentModel.DataAnnotations.Schema;

namespace TCGApp.Models
{
    public class Slicica:Entitet
    {
        public string? Naziv { get; set; }

        [ForeignKey("kolekcija")]
        public Kolekcija? Kolekcija { get; set; }

        public int? BrojSlicice { get; set; }

        [ForeignKey("rijetkost")]
        public Rijetkost? Rijetkost { get; set; }

        public bool? PosebnoIzdanje { get; set; }

    }
}
