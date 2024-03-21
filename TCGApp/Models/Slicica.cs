using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace TCGApp.Models
{
    public class Slicica:Entitet
    {
        /// <summary>
        /// Naziv igre
        /// </summary>
        [Required(ErrorMessage = "Obavezan unos naziva sličice")]
        public string? Naziv { get; set; }

        [ForeignKey("kolekcija")]
        public Kolekcija? Kolekcija { get; set; }

        /// <summary>
        /// Broj sličice
        /// </summary>
        [Range(0, 500, ErrorMessage = "{0} mora biti između {1} i {2}")]
        [Column("brojslicice")]
        public int? Brojslicice { get; set; }

        [ForeignKey("rijetkost")]
        public Rijetkost? Rijetkost { get; set; }

        /// <summary>
        /// Označava radi li se o standardnom printu ili posebnom izdanju sličice
        /// </summary>
        public bool? Posebnoizdanje { get; set; }

    }
}
