using TCGApp.Mappers;
using TCGApp.Models;

namespace TCGApp.Extensions
{
    public static class MappingKolekcija
    {

        public static List<KolekcijaDTORead> MapKolekcijaReadList(this List<Kolekcija> lista)
        {
            var mapper = KolekcijaMapper.InicijalizirajReadToDTO();
            var vrati = new List<KolekcijaDTORead>();
            lista.ForEach(e => {
                vrati.Add(mapper.Map<KolekcijaDTORead>(e));
            });
            return vrati;
        }

        public static KolekcijaDTORead MapKolekcijaReadToDTO(this Kolekcija entitet)
        {
            var mapper = KolekcijaMapper.InicijalizirajReadToDTO();
            return mapper.Map<KolekcijaDTORead>(entitet);
        }

        public static KolekcijaDTOInsertUpdate MapKolekcijaInsertUpdatedToDTO(this Kolekcija entitet)
        {
            var mapper = KolekcijaMapper.InicijalizirajInsertUpdateToDTO();
            return mapper.Map<KolekcijaDTOInsertUpdate>(entitet);
        }

        public static Kolekcija MapKolekcijaInsertUpdateFromDTO(this KolekcijaDTOInsertUpdate dto, Kolekcija entitet)
        {
            entitet.Naziv = dto.naziv;
            entitet.GodinaIzdavanja = dto.godinaizdavanja;
            return entitet;
        }

    }
}
