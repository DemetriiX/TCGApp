using Microsoft.EntityFrameworkCore.Storage.ValueConversion.Internal;
using System;

namespace TCGApp.Models
{
    public record KorisnikDTORead(int sifra, string username, string ime,
      string prezime, string email, string mjesto, string drzava);

    public record KorisnikDTOInsertUpdate(string username, string ime,
      string prezime, string email, string mjesto, string drzava);






    public record PolaznikDTORead(int sifra, string ime, string prezime,
        string email, string oib, string brojugovora);

    public record PolaznikDTOInsertUpdate(string ime, string prezime,
        string email, string oib, string brojugovora);




    public record PredavacDTORead(int sifra, string ime, string prezime,
        string email, string oib, string iban, string datoteka);

    public record PredavacDTOInsertUpdate(string ime, string prezime,
        string email, string oib, string iban);



    public record GrupaDTORead(int sifra, string? naziv,
        string? smjerNaziv, string? predavacImePrezime, int brojpolaznika, DateTime? datumpocetka, int? maksimalnopolaznika);
    // ako se parametar zove kao svojstvo nekog tipa u toj klasi tada uzima punu putanju klase (npr. EdunovaAPP.Models.Predavac)



    public record GrupaDTOInsertUpdate(string? naziv,
        int? smjerSifra, int? predavacSifra, DateTime? datumpocetka, int? maksimalnopolaznika = 0);

}