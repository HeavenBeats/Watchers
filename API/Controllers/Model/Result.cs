using System.Collections.Generic;

namespace Model{
    public class Result{
        public int Pages { get; set; }
        public List<Car> CarResults { get; set; }
        public List<Manufacturer> ManufacturerResults { get; set; }
    }
}