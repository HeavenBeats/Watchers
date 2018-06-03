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
                    PowerSource = "Benzine",
                    Seats = 5,
                    StartingPrice = 42889,
                    Manufacturer = Ford,
                    imageUrl = "https://www.vanleersum.nl/wp-content/uploads/2016/10/Ford-F-150-Raptor.jpg"
                };

                var Mustang = new Car(){
                    Model = "Ford Mustang VI",
                    HorsePower = 426,
                    Engine = "GT 5.0 V8",
                    FuelConsumption = 12.4,
                    PowerSource = "Benzine",
                    Seats = 2,
                    StartingPrice = 25220,
                    Manufacturer = Ford,
                    imageUrl = "https://piximus.net/media/25258/ford-mustang-vi-generation-1.jpg"
                };

                var i8 = new Car(){
                    Model = "BMW i8 coupé",
                    HorsePower = 231,
                    Engine = "3-cilinder 1.5L with 2-trap automatic electromotor",
                    FuelConsumption = 1.9,
                    PowerSource = "Hybrid",
                    Seats = 2,
                    StartingPrice = 148500,
                    Manufacturer = BMW,
                    imageUrl = "https://i.ndtvimg.com/i/2017-12/2019-bmw-i8-coupe_827x510_81513666282.jpg"
                };

                var M4 = new Car(){
                    Model = "BMW M4 F82",
                    HorsePower = 431,
                    Engine = "3.0 L S55B30T0 twin turbo I6",
                    FuelConsumption = 8.5,
                    PowerSource = "Diesel",
                    Seats = 4,
                    StartingPrice = 58790,
                    Manufacturer = BMW,
                    imageUrl = "https://www.carscoops.com/wp-content/uploads/2015/01/g-power-m4-5.jpg"
                };

                var i3 = new Car(){
                    Model = "BMW i3",
                    HorsePower = 170,
                    Engine = "33 kWh accu",
                    FuelConsumption = 0,
                    PowerSource = "Electric",
                    Seats = 5,
                    StartingPrice = 38800,
                    Manufacturer = BMW,
                    imageUrl ="https://www.autocar.co.uk/sites/autocar.co.uk/files/styles/gallery_slide/public/bmw-i3s-rt-2018-2586.jpg?itok=81dMg1LQ"
                };

                var Navara = new Car(){
                    Model = "Nissan Navara",
                    HorsePower = 190,
                    Engine = "2.3L turbodiesel",
                    FuelConsumption = 6.4,
                    PowerSource = "Diesel",
                    Seats = 5,
                    StartingPrice = 33585,
                    Manufacturer = Nissan,
                    imageUrl = "http://www.nissan.com.au/-/media/images/nameplate-overview-media/navara/front_3quarter/navara-innovation-black.ashx?la=en&hash=532E2B429A2731EB9B59FC85FB3E859A0C814051"
                };

                var GT_R = new Car(){
                    Model = "Nissan GT-R",
                    HorsePower = 570,
                    Engine = "VR38 TWIN-TURBO",
                    FuelConsumption = 11.8,
                    PowerSource = "Benzine",
                    Seats = 2,
                    StartingPrice = 99900,
                    Manufacturer = Nissan,
                    imageUrl = "http://img1.sm360.ca/ir/w500c/images/newcar/2017/nissan/gt-r/nismo/coupe/exteriorColors/2017_nissan_gtr_nismo_032_argent_superieur.png"
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