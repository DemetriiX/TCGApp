using TCGApp.Mappers;
using TCGApp.Models;

namespace TCGApp.Extensions
{
    public static class MappingKorisnik
    {

        public static List<KorisnikDTORead> MapKorisnikReadList(this List<Korisnik> lista)
        {
            var mapper = KorisnikMapper.InicijalizirajReadToDTO();
            var vrati = new List<KorisnikDTORead>();
            lista.ForEach(e => {
                vrati.Add(mapper.Map<KorisnikDTORead>(e));
            });
            return vrati;
        }

        public static KorisnikDTORead MapKorisnikReadToDTO(this Korisnik entitet)
        {
            var mapper = KorisnikMapper.InicijalizirajReadToDTO();
            return mapper.Map<KorisnikDTORead>(entitet);
        }

        public static KorisnikDTOInsertUpdate MapKorisnikInsertUpdatedToDTO(this Korisnik entitet)
        {
            var mapper = KorisnikMapper.InicijalizirajInsertUpdateToDTO();
            return mapper.Map<KorisnikDTOInsertUpdate>(entitet);
        }

        public static Korisnik MapKorisnikInsertUpdateFromDTO(this KorisnikDTOInsertUpdate dto, Korisnik entitet)
        {
            entitet.Username = dto.username;
            entitet.Ime = dto.ime;
            entitet.Prezime = dto.prezime;
            entitet.Email = dto.email;
            entitet.Mjesto = dto.mjesto;
            entitet.Drzava = dto.drzava;
            return entitet;
        }

    }
}