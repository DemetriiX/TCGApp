namespace TCGApp.Models
{
    public record KolekcijaDTORead(int sifra, string naziv, int godinaizdavanja, int igra);

    public record KolekcijaDTOInsertUpdate(string naziv, int godinaizdavanja, int igra);



    public record RijetkostDTORead(int sifra, string naziv);

    public record RijetkostDTOInsertUpdate(string naziv);



    public record SlicicaDTORead(int sifra, string? naziv, string? kolekcijaNaziv, string? rijetkostNaziv,
        int? brojslicice, bool? posebnoizdanje);

    public record SlicicaDTOInsertUpdate(string? naziv, int? kolekcijaSifra, int? rijetkostSifra, 
        int? brojslicice, bool? posebnoizdanje);




}
