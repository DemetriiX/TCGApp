using AutoMapper;
using TCGApp.Models;

namespace TCGApp.Mappers
{
    public class KorisnikMapper
    {
        public static Mapper InicijalizirajReadToDTO()
        {
            return new Mapper(
                new MapperConfiguration(c =>
                {
                    c.CreateMap<Korisnik, KorisnikDTORead>();
                })
                );
        }

        public static Mapper InicijalizirajReadFromDTO()
        {
            return new Mapper(
                new MapperConfiguration(c =>
                {
                    c.CreateMap<KorisnikDTORead, Korisnik>();
                })
                );
        }

        public static Mapper InicijalizirajInsertUpdateToDTO()
        {
            return new Mapper(
                new MapperConfiguration(c =>
                {
                    c.CreateMap<Korisnik, KorisnikDTOInsertUpdate>();
                })
                );
        }

    }
}