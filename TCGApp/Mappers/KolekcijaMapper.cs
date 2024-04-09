using AutoMapper;
using TCGApp.Models;

namespace TCGApp.Mappers
{
    public class KolekcijaMapper
    {
        public static Mapper InicijalizirajReadToDTO()
        {
            return new Mapper(
                new MapperConfiguration(c =>
                {
                    c.CreateMap<Kolekcija, KolekcijaDTORead>();
                })
                );
        }

        public static Mapper InicijalizirajReadFromDTO()
        {
            return new Mapper(
                new MapperConfiguration(c =>
                {
                    c.CreateMap<KolekcijaDTORead, Kolekcija>();
                })
                );
        }

        public static Mapper InicijalizirajInsertUpdateToDTO()
        {
            return new Mapper(
                new MapperConfiguration(c =>
                {
                    c.CreateMap<Kolekcija, KolekcijaDTOInsertUpdate>();
                })
                );
        }

    }
}
