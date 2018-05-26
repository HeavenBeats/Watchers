namespace Model{
    public class Car{
        public string Model { get; set; }
        public int HorsePower { get; set; }
        public string Engine { get; set; }
        public double FuelConsumption { get; set; }        // Litres/100km
        public PowerSource PowerSource { get; set; }
        public int Seats { get; set; }                  //max amount of passengers
        public int StartingPrice { get; set; }
        public Manufacturer Manufacturer { get; set; }
    }

    public enum PowerSource{
        Benzine,
        Diesel,
        Electric,
        Hybrid,
        Gas
    }
}