namespace Model{
    public class Car{
        public int BuildYear { get; set; }
        public string Model { get; set; }
        public int HorsePower { get; set; }
        public string Engine { get; set; }
        public int FuelConsumption { get; set; }        // Litres/100km
        public PowerSource PowerSource { get; set; }
        public int Seats { get; set; }                  //max amount of passengers
    }

    public enum PowerSource{
        Diesel,
        Electric,
        Hybrid,
        Gas
    }
}