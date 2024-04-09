using System.Text.RegularExpressions;
using TCGApp.Mappers;
using TCGApp.Models;

namespace TCGApp.Extensions
{
    public static class MappingSlicica
    {

        public static List<SlicicaDTORead> MapSlicicaReadList(this List<Slicica> lista)
        {
            var mapper = SlicicaMapper.InicijalizirajReadToDTO();
            var vrati = new List<SlicicaDTORead>();
            lista.ForEach(e => {
                vrati.Add(mapper.Map<SlicicaDTORead>(e));
            });
            return vrati;
        }

        public static SlicicaDTORead MapSlicicaReadToDTO(this Slicica e)
        {
            var mapper = SlicicaMapper.InicijalizirajReadToDTO();
            return mapper.Map<SlicicaDTORead>(e);
        }

        public static SlicicaDTOInsertUpdate MapSlicicaInsertUpdatedToDTO(this Slicica e)
        {

            var mapper = SlicicaMapper.InicijalizirajInsertUpdateToDTO();
            return mapper.Map<SlicicaDTOInsertUpdate>(e);
        }


        public static Slicica MapSlicicaInsertUpdateFromDTO(this SlicicaDTOInsertUpdate dto, Slicica entitet)
        {
            entitet.Naziv = dto.naziv;
            entitet.BrojSlicice = dto.brojslicice;
            entitet.PosebnoIzdanje = dto.posebnoizdanje;
            return entitet;
        }

    }
}
