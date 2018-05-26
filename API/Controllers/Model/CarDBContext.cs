using Microsoft.EntityFrameworkCore;

namespace Model{
    public class CarDBContext : DbContext{
        public CarDBContext(DbContextOptions<CarDBContext> options): base(options) {}
        public DbSet<Car> Cars { get; set; }
        public DbSet<Manufacturer> Manufacturers { get; set; }
    }
}