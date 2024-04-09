using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using TCGApp.Data;
using TCGApp.Extensions;
using TCGApp.Models;

namespace TCGApp.Controllers
{
    [ApiController]
    [Route("api/v1/[controller]")]
    public class SlicicaController:ControllerBase
    {
        private readonly TCGContext _context;

        public SlicicaController(TCGContext context)
        {
            _context = context;
        }


        [HttpGet]
        public IActionResult Get()
        {
            // kontrola ukoliko upit nije valjan
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            try
            {
                var lista = _context.Slicice
                    .Include(s => s.Kolekcija)
                    .Include(s => s.Rijetkost)
                    .ToList();
                if (lista == null || lista.Count == 0)
                {
                    return new EmptyResult();
                }
                return new JsonResult(lista.MapSlicicaReadList());
            }
            catch (Exception ex)
            {
                return StatusCode(StatusCodes.Status503ServiceUnavailable,
                    ex.Message);
            }
        }

        [HttpGet]
        [Route("{sifra:int}")]
        public IActionResult GetBySifra(int sifra)
        {
            // kontrola ukoliko upit nije valjan
            if (!ModelState.IsValid || sifra <= 0)
            {
                return BadRequest(ModelState);
            }
            try
            {
                var r = _context.Slicice.Include(i=>i.Kolekcija).Include(i=>i.Rijetkost)
                    .FirstOrDefault(x => x.Sifra == sifra);
                if (r == null)
                {
                    return new EmptyResult();
                }
                return new JsonResult(r.MapSlicicaInsertUpdatedToDTO());
            }
            catch (Exception ex)
            {
                return StatusCode(StatusCodes.Status503ServiceUnavailable,
                    ex.Message);
            }
        }


        [HttpPost]
        public IActionResult Post(SlicicaDTOInsertUpdate dto)
        {
            if (!ModelState.IsValid || dto == null)
            {
                return BadRequest();
            }

            var kolekcija = _context.Kolekcije.Find(dto.kolekcijaSifra);

            if (kolekcija == null)
            {
                return BadRequest();
            }

            var rijetkost = _context.Rijetkosti.Find(dto.rijetkostSifra);

            if (rijetkost == null)
            {
                return BadRequest();
            }

            var entitet = dto.MapSlicicaInsertUpdateFromDTO(new Slicica());
            entitet.Kolekcija = kolekcija;
            entitet.Rijetkost = rijetkost;

            try
            {                
                _context.Slicice.Add(entitet);
                _context.SaveChanges();
                return StatusCode(StatusCodes.Status201Created, entitet.MapSlicicaReadToDTO);
            }
            catch (Exception ex)
            {
                return StatusCode(StatusCodes.Status503ServiceUnavailable,
                    ex.Message);
            }
        }


        [HttpPut]
        [Route("{sifra:int}")]
        public IActionResult Put(int sifra, SlicicaDTOInsertUpdate dto)
        {
            if (sifra <= 0 || !ModelState.IsValid || dto == null)
            {
                return BadRequest();
            }


            try
            {


                var entitet = _context.Slicice.Include(i => i.Kolekcija).Include(i => i.Rijetkost)
                    .FirstOrDefault(x => x.Sifra == sifra);

                if (entitet == null)
                {
                    return StatusCode(StatusCodes.Status204NoContent, sifra);
                }

                var kolekcija = _context.Kolekcije.Find(dto.kolekcijaSifra);

                if (kolekcija == null)
                {
                    return BadRequest();
                }

                var rijetkost = _context.Rijetkosti.Find(dto.rijetkostSifra);

                if (rijetkost == null)
                {
                    return BadRequest();
                }

                entitet = dto.MapSlicicaInsertUpdateFromDTO(entitet);

                entitet.Kolekcija = kolekcija;
                entitet.Rijetkost = rijetkost;
                

                _context.Slicice.Update(entitet);
                _context.SaveChanges();

                return StatusCode(StatusCodes.Status200OK, entitet.MapSlicicaReadToDTO());
            }
            catch (Exception ex)
            {
                return StatusCode(StatusCodes.Status503ServiceUnavailable,
                    ex.Message);
            }

        }


        [HttpDelete]
        [Route("{sifra:int}")]
        [Produces("application/json")]
        public IActionResult Delete(int sifra)
        {
            if (!ModelState.IsValid || sifra <= 0)
            {
                return BadRequest();
            }

            try
            {
                var entitetIzbaze = _context.Slicice.Find(sifra);

                if (entitetIzbaze == null)
                {
                    return StatusCode(StatusCodes.Status204NoContent, sifra);
                }

                _context.Slicice.Remove(entitetIzbaze);
                _context.SaveChanges();

                return new JsonResult(new { poruka = "Obrisano" });

            }
            catch (Exception ex)
            {
                return StatusCode(StatusCodes.Status503ServiceUnavailable,
                    ex.Message);
            }

        }
    }
}
