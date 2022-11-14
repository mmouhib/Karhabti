using Karhabti.Entities;
using Karhabti.Entities.Car;
using Microsoft.EntityFrameworkCore;

namespace Karhabti.Data;

public class KarhabtiDbContext : DbContext
{
    public KarhabtiDbContext(DbContextOptions options) : base(options)
    {
    }

    public DbSet<Car> Cars { get; set; }
    public DbSet<User> Users { get; set; }
    public DbSet<GasFill> GasFills { get; set; }
    public DbSet<Mileage> Mileages { get; set; }
}