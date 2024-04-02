using TCGApp.Models;
using System.ComponentModel.DataAnnotations;

namespace TCGApp.Models
{
    /// <summary>
    /// POCO koji je mapiran na bazu
    /// </summary>
    public class Korisnik:Entitet
    {
        /// <summary>
        /// Korisnicko ime za ulogiravanje
        /// </summary>
        [Required(ErrorMessage ="Obavezan unos korisnickog imena")]
        public string? Username {  get; set; }

        /// <summary>
        /// Ime korisnika
        /// </summary>
        [Required(ErrorMessage = "Obavezan unos vlastitog imena")]
        public string? Ime { get; set; }

        /// <summary>
        /// Prezime korisnika
        /// </summary>
        [Required(ErrorMessage = "Obavezan unos vlastitog prezimena")]
        public string? Prezime { get; set; }

        /// <summary>
        /// E-mail korisnika
        /// </summary>
        [Required(ErrorMessage = "Obavezan unos e-maila")]
        public string? Email { get; set; }

        /// <summary>
        /// Mjesto u kojemu korisnik zivi
        /// </summary>
        public string? Mjesto { get; set; }

        /// <summary>
        /// Drzava iz koje korisnik dolazi
        /// </summary>
        public string? Drzava { get; set; }


    }
}
