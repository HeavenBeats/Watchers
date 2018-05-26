using Microsoft.EntityFrameworkCore;

namespace Model{
    public class CarDBContext : DbContext{
        public CarDBContext(DbContextOptions<CarDBContext> options): base(options) {}
        
    }
}