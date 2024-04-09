using AutoMapper;
using TCGApp.Models;

namespace TCGApp.Mappers
{
    public class RijetkostMapper
    {
        public static Mapper InicijalizirajReadToDTO()
        {
            return new Mapper(
                new MapperConfiguration(c =>
                {
                    c.CreateMap<Rijetkost, RijetkostDTORead>();
                })
                );
        }

        public static Mapper InicijalizirajReadFromDTO()
        {
            return new Mapper(
                new MapperConfiguration(c =>
                {
                    c.CreateMap<RijetkostDTORead, Rijetkost>();
                })
                );
        }

        public static Mapper InicijalizirajInsertUpdateToDTO()
        {
            return new Mapper(
                new MapperConfiguration(c =>
                {
                    c.CreateMap<Rijetkost, RijetkostDTOInsertUpdate>();
                })
                );
        }

    }
}
