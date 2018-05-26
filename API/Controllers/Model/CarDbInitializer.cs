using System.Linq;

namespace Model{
    public class CarDbInitializer{
        public static void Initialize(CarDbContext context){
            context.Database.EnsureCreated();

            if(!context.Cars.Any()){
                var Ford = new Manufacturer(){
                    Name = "Ford",
                    Origin = "Detroit, U.S.A",
                    FoundedIn = 1903,
                    Founder = "Henry Ford",
                    LastYearProfit = 134.6,
                    LastYearRevenue = 6.5,
                    HomePage = "www.ford.com"
                };

                var BMW = new Manufacturer(){
                    Name = "BMW",
                    Origin = "Munchen, Germany",
                    FoundedIn = 1913,
                    Founder = "Karl Friederich Rapp",
                    LastYearProfit = 6.4,
                    LastYearRevenue = 92.2,
                    HomePage ="www.bmwgroup.com"
                };

                var Nissan = new Manufacturer(){
                    Name = "Nissan",
                    Origin = "Yokohama, Japan",
                    FoundedIn = 1933,
                    Founder = "Yoshisuke Aikawa",
                    LastYearProfit = 5.6,
                    LastYearRevenue = 100,
                    HomePage = "www.nissan.co.jp"
                };

                var Raptor = new Car(){
                    Model = "Ford F-150 Raptor",
                    HorsePower = 450,
                    Engine = "3.5L V6 EcoBoost engine",
                    FuelConsumption = 15.6,
                    PowerSource = PowerSource.Benzine,
                    Seats = 5,
                    StartingPrice = 42889,
                    Manufacturer = Ford
                };

                var Mustang = new Car(){
                    Model = "Ford Mustang VI",
                    HorsePower = 426,
                    Engine = "GT 5.0 V8",
                    FuelConsumption = 12.4,
                    PowerSource = PowerSource.Benzine,
                    Seats = 2,
                    StartingPrice = 25220,
                    Manufacturer = Ford
                };

                var i8 = new Car(){
                    Model = "BMW i8 coupé",
                    HorsePower = 231,
                    Engine = "3-cilinder 1.5L with 2-trap automatic electromotor",
                    FuelConsumption = 1.9,
                    PowerSource = PowerSource.Hybrid,
                    Seats = 2,
                    StartingPrice = 148500,
                    Manufacturer = BMW
                };

                var M4 = new Car(){
                    Model = "BMW M4 F82",
                    HorsePower = 431,
                    Engine = "3.0 L S55B30T0 twin turbo I6",
                    FuelConsumption = 8.5,
                    PowerSource = PowerSource.Diesel,
                    Seats = 4,
                    StartingPrice = 58790,
                    Manufacturer = BMW
                };

                var i3 = new Car(){
                    Model = "BMW i3",
                    HorsePower = 170,
                    Engine = "33 kWh accu",
                    FuelConsumption = 0,
                    PowerSource = PowerSource.Electric,
                    Seats = 5,
                    StartingPrice = 38800,
                    Manufacturer = BMW
                };

                var Navara = new Car(){
                    Model = "Nissan Navara",
                    HorsePower = 190,
                    Engine = "2.3L turbodiesel",
                    FuelConsumption = 6.4,
                    PowerSource = PowerSource.Diesel,
                    Seats = 5,
                    StartingPrice = 33585,
                    Manufacturer = Nissan
                };

                var GT_R = new Car(){
                    Model = "Nissan GT-R",
                    HorsePower = 570,
                    Engine = "VR38 TWIN-TURBO",
                    FuelConsumption = 11.8,
                    PowerSource = PowerSource.Benzine,
                    Seats = 2,
                    StartingPrice = 99900,
                    Manufacturer = Nissan
                };

                context.Manufacturers.Add(Ford);
                context.Manufacturers.Add(BMW);
                context.Manufacturers.Add(Nissan);
                context.Cars.Add(Raptor);
                context.Cars.Add(Mustang);
                context.Cars.Add(i8);
                context.Cars.Add(M4);
                context.Cars.Add(i3);
                context.Cars.Add(Navara);
                context.Cars.Add(GT_R);
                context.SaveChanges();
            }
        }
    }
}