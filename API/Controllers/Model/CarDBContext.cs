using Microsoft.EntityFrameworkCore;

namespace Model{
    public class CarDbContext : DbContext{
        public CarDbContext(DbContextOptions<CarDbContext> options): base(options) {}
        public DbSet<Car> Cars { get; set; }
        public DbSet<Manufacturer> Manufacturers { get; set; }
    }
}