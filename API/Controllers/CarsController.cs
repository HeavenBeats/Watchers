using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Model;

namespace API.Controllers{
    [EnableCors("AllowAllHeaders")]
    [Route("/api/cars")]
    public class CarsController : Controller
    {
        private readonly CarDbContext context;

        public CarsController(CarDbContext context)
        {
            this.context = context;
        }

        [HttpGet]
        public IActionResult getCars(){
            IQueryable<Car> query = context.Cars;

            return Ok(query.Include(c => c.Manufacturer).Select(c => c).ToList());
        }

        [HttpGet("{id}")]
        public IActionResult getCar(int id){
            var car = context.Cars.Include(c => c.Manufacturer)
                                    .Where(c => c.Id == id)
                                    .Select(c => c)
                                    .Single();
            if(car == null)
                return NotFound();
            
            return Ok(car);
        }

        [HttpDelete("{id}")]
        public IActionResult deleteCar(int id){
            var car = context.Cars.Find(id);
            if(car == null)
                return NotFound();

            context.Cars.Remove(car);
            context.SaveChanges();    
            return NoContent();
        }

        [HttpPut("{id}")]
        public IActionResult updateCar(int id, [FromBody] Car updateCar){
            if(updateCar == null || updateCar.Id != id)
                return BadRequest();
            
            var oldCar = context.Cars.Find(updateCar.Id);
            if(oldCar == null)
                return NotFound();
            
            
            oldCar.Model = updateCar.Model;
            oldCar.HorsePower = updateCar.HorsePower;
            oldCar.Engine = updateCar.Engine;
            oldCar.FuelConsumption = updateCar.FuelConsumption;
            oldCar.PowerSource = updateCar.PowerSource;
            oldCar.Seats = updateCar.Seats;
            oldCar.StartingPrice = updateCar.StartingPrice;
            
            List<Manufacturer> manufacturers = context.Manufacturers.ToList();
            Manufacturer updateManufacturer = null;
            manufacturers.ForEach(m =>{
                if(m.Id == updateCar.Manufacturer.Id)
                    updateManufacturer = m;
            });
            if(updateManufacturer != null)
                oldCar.Manufacturer = updateManufacturer;
            context.SaveChanges();
            return Ok(oldCar);
        }

        [HttpPost]
        public IActionResult createCar([FromBody] Car newCar){
            context.Cars.Add(newCar);
            context.SaveChanges();
            return Created("", newCar);
        }
    }
}