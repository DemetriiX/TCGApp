using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace TCGApp.Models
{
    /// <summary>
    /// POCO koji je mapiran na bazu
    /// </summary>
    public class Kolekcija:Entitet
    {
        /// <summary>
        /// Naziv kolekcije
        /// </summary>
        [Required(ErrorMessage = "Obavezan unos naziva")]
        public string? Naziv { get; set; }

        /// <summary>
        /// Godina izdavanja
        /// </summary>
        [Range(1950,2030,ErrorMessage = "{0} mora biti između {1} i {2}")]
        [Column("godinaizdavanja")]
        public int? GodinaIzdavanja { get; set; }

        [ForeignKey("igra")]
        public Igra? Igra { get; set; }


    }
}