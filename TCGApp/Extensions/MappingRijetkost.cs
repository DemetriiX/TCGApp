using TCGApp.Mappers;
using TCGApp.Models;

namespace TCGApp.Extensions
{
    public static class MappingRijetkost
    {

        public static List<RijetkostDTORead> MapRijetkostReadList(this List<Rijetkost> lista)
        {
            var mapper = RijetkostMapper.InicijalizirajReadToDTO();
            var vrati = new List<RijetkostDTORead>();
            lista.ForEach(e => {
                vrati.Add(mapper.Map<RijetkostDTORead>(e));
            });
            return vrati;
        }

        public static RijetkostDTORead MapRijetkostReadToDTO(this Rijetkost entitet)
        {
            var mapper = RijetkostMapper.InicijalizirajReadToDTO();
            return mapper.Map<RijetkostDTORead>(entitet);
        }

        public static RijetkostDTOInsertUpdate MapRijetkostInsertUpdatedToDTO(this Rijetkost entitet)
        {
            var mapper = RijetkostMapper.InicijalizirajInsertUpdateToDTO();
            return mapper.Map<RijetkostDTOInsertUpdate>(entitet);
        }

        public static Rijetkost MapRijetkostInsertUpdateFromDTO(this RijetkostDTOInsertUpdate dto, Rijetkost entitet)
        {
            entitet.Naziv = dto.naziv;
            return entitet;
        }

    }
}
