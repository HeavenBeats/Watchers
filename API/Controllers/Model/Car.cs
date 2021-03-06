using System.ComponentModel.DataAnnotations.Schema;

namespace Model{
    public class Car{
        
        [DatabaseGeneratedAttribute(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }
        public string Model { get; set; }
        public int HorsePower { get; set; }
        public string Engine { get; set; }
        public double FuelConsumption { get; set; }        // Litres/100km
        public string PowerSource { get; set; }
        public int Seats { get; set; }                  //max amount of passengers
        public int StartingPrice { get; set; }
        public Manufacturer Manufacturer { get; set; }
        public string imageUrl { get; set; }
    }

}