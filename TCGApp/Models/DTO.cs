using Microsoft.EntityFrameworkCore.Storage.ValueConversion.Internal;
using System;

namespace TCGApp.Models
{
    public record KorisnikDTORead(int sifra, string username, string ime,
      string prezime, string email, string mjesto, string drzava);

    public record KorisnikDTOInsertUpdate(string username, string ime,
      string prezime, string email, string mjesto, string drzava);


}