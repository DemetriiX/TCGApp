using TCGApp.Models;
using Microsoft.EntityFrameworkCore;

namespace TCGApp.Data
{
    /// <summary>
    /// Ovo mi je datoteka gdje ću navoditi datasetove i načine spajanja u bazi
    /// </summary>
    public class TCGContext : DbContext
    {
        /// <summary>
        /// Kostruktor
        /// </summary>
        /// <param name="options"></param>
        public TCGContext(DbContextOptions<TCGContext> options)
            : base(options)
        {

        }
        /// <summary>
        /// Korisnici u bazi
        /// </summary>
        public DbSet<Korisnik> Korisnici { get; set; }
    }
}
