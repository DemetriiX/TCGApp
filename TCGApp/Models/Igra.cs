
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace TCGApp.Models
{
    /// <summary>
    /// POCO koji je mapiran na bazu
    /// </summary>
    public class Igra:Entitet

    {
        /// <summary>
        /// Naziv igre
        /// </summary>
        [Required(ErrorMessage = "Obavezan unos naziva igre")]
        public string? Naziv { get; set; }

        /// <summary>
        /// Ime izdavača
        /// </summary>
        [Required(ErrorMessage = "Obavezan unos izdavača")]
        public string? Izdavac { get; set; }


    }
}