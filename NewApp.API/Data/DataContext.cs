using Microsoft.EntityFrameworkCore;
using NewApp.API.Models;
namespace NewApp.API.Models
{
    public class DataContext:DbContext
    {
public DataContext(DbContextOptions<DataContext>options):base(options){}

public DbSet<User> Users {get; set;}

public DbSet<Restaurant> Restaurants { get; set; }
public DbSet<Fooditem> FoodItems {get; set;}

public DbSet<Characteristic> Characteristics {get; set;}

public DbSet<Service> Services {get; set;}

    }
}