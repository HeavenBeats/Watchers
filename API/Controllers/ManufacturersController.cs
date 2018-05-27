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
        public IActionResult getManufacturers()
        {
            IQueryable<Manufacturer> query = context.Manufacturers;

            return Ok(query.Include(m => m.Cars).Select(m => m).ToList());
        }

        [HttpGet("{id}")]
        public IActionResult getManufacturers(int id)
        {
            var manufacturer = context.Manufacturers.Include(m => m.Cars)
                                                    .Where(m => m.Id == id)
                                                    .Select(m => m);
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