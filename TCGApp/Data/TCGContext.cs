using TCGApp.Models;
using Microsoft.EntityFrameworkCore;
using System.Text.RegularExpressions;

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

        /// <summary>
        /// Rijetkosti u bazi
        /// </summary>
        public DbSet<Rijetkost> Rijetkosti { get; set; }

        public DbSet<Igra> Igre { get; set; }

        public DbSet<Kolekcija> Kolekcije { get; set; }

        public DbSet<Slicica> Slicice { get; set; }



        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {

            // implementacija veze 1:n
            modelBuilder.Entity<Kolekcija>().HasOne(k => k.Igra);
            
            modelBuilder.Entity<Slicica>().HasOne(s => s.Rijetkost);
            modelBuilder.Entity<Slicica>().HasOne(s => s.Kolekcija);

        }

    }
}
