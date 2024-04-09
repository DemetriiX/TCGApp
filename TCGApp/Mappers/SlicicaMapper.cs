using AutoMapper;
using TCGApp.Models;

namespace TCGApp.Mappers
{
    public class SlicicaMapper
    {

        public static Mapper InicijalizirajReadToDTO()
        {
            return new Mapper(
            new MapperConfiguration(c =>
            {
                c.CreateMap<Slicica, SlicicaDTORead>()
                .ConstructUsing(entitet =>
                 new SlicicaDTORead(
                    entitet.Sifra,
                    entitet.Naziv,
                    entitet.Kolekcija == null ? "" : entitet.Kolekcija.Naziv,
                    entitet.Rijetkost == null ? "" : entitet.Rijetkost.Naziv,
                    entitet.BrojSlicice,
                    entitet.PosebnoIzdanje));
            })
            );
        }



        public static Mapper InicijalizirajInsertUpdateToDTO()
        {
            return new Mapper(
             new MapperConfiguration(c =>
             {
                 c.CreateMap<Slicica, SlicicaDTOInsertUpdate>()
                 .ConstructUsing(entitet =>
                  new SlicicaDTOInsertUpdate(
                     entitet.Naziv,
                     entitet.Kolekcija == null ? null : entitet.Kolekcija.Sifra,
                     entitet.Rijetkost == null ? null : entitet.Rijetkost.Sifra,
                     entitet.BrojSlicice,
                     entitet.PosebnoIzdanje));
             })
             );
        }


    }
}
