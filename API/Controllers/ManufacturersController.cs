using System.Linq;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Model;

namespace API.Controllers
{
    [EnableCors("AllowAllHeaders")]
    [Route("/api/manufacturers")]
    public class ManufacturersController : Controller
    {
        private readonly CarDbContext context;

        public ManufacturersController(CarDbContext context)
        {
            this.context = context;
        }

        [HttpGet]
        public IActionResult getManufacturers(string sort, int? page, int length = 5)
        {
            IQueryable<Manufacturer> query = context.Manufacturers;
            Result r = new Result();

             if(!string.IsNullOrWhiteSpace(sort)){
                switch(sort){
                    case "Name":
                        query = query.OrderBy(m => m.Name);
                        break;
                    case "Origin":
                        query = query.OrderBy(m => m.Origin);
                        break;
                    case "Founded in":
                        query = query.OrderBy(m => m.FoundedIn);
                        break;
                    case "Founder":
                        query = query.OrderBy(m => m.Founder);
                        break;
                    case "Revenue":
                        query = query.OrderBy(m => m.LastYearRevenue);
                        break;
                    case "Profit":
                        query = query.OrderBy(m => m.LastYearProfit);
                        break;
                }
            }

            r.Pages = query.Count() / length + 1;

            if(page.HasValue){
                query = query.Skip((page.Value - 1) * length);
                query = query.Take(length);
            }

            r.ManufacturerResults = query.Include(m => m.Cars).Select(m => m).ToList();

            return Ok(r);
        }

        [HttpGet("{id}")]
        public IActionResult getManufacturers(int id)
        {
            var manufacturer = context.Manufacturers.Include(m => m.Cars)
                                                    .Where(m => m.Id == id)
                                                    .Select(m => m)
                                                    .Single();
            if (manufacturer == null)
                return NotFound();

            return Ok(manufacturer);
        }

        [HttpDelete("{id}")]
        public IActionResult deleteManufacturer(int id)
        {
            var manufacturer = context.Manufacturers.Find(id);
            if (manufacturer == null)
                return NotFound();

            context.Manufacturers.Remove(manufacturer);
            context.SaveChanges();
            return NoContent();
        }

        [HttpPut("{id}")]
        public IActionResult updateCar(int id, [FromBody] Manufacturer updateManufacturer)
        {
            if (updateManufacturer == null || updateManufacturer.Id != id)
                return BadRequest();

            var oldManufacturer = context.Manufacturers.Find(updateManufacturer.Id);
            if (oldManufacturer == null)
                return NotFound();


            oldManufacturer.Name = updateManufacturer.Name;
            oldManufacturer.Origin = updateManufacturer.Origin;
            oldManufacturer.FoundedIn = updateManufacturer.FoundedIn;
            oldManufacturer.Founder = updateManufacturer.Founder;
            oldManufacturer.LastYearRevenue = updateManufacturer.LastYearRevenue;
            oldManufacturer.LastYearProfit = updateManufacturer.LastYearProfit;
            oldManufacturer.HomePage = updateManufacturer.HomePage;
            oldManufacturer.Cars = updateManufacturer.Cars;
            context.SaveChanges();
            return Ok(oldManufacturer);
        }

        [HttpPost]
        public IActionResult createManufacturer([FromBody] Manufacturer newManufacturer)
        {
            context.Manufacturers.Add(newManufacturer);
            context.SaveChanges();
            return Created("", newManufacturer);
        }
    }
}