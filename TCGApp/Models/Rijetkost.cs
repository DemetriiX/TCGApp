using System.ComponentModel.DataAnnotations;

namespace TCGApp.Models
{
    public class Rijetkost:Entitet
    {
        /// <summary>
        /// Oznaka rijetkosti
        /// </summary>
        [Required(ErrorMessage = "Obavezan unos rijetkosti")]
        public string? OznakaRijetkosti { get; set; }
    }
}
