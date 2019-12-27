using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using Microsoft.EntityFrameworkCore;
using NewApp.API.Models;

namespace NewApp.API.Data
{
    public class FoodAppRepository : IFoodAppRepository
    {
        private readonly DataContext _context;
      
        public FoodAppRepository(DataContext context)
        {
           
            _context = context;

        }
        public void Add<T>(T entity) where T : class
        {
            _context.Add(entity);
        }

        public void Delete<T>(T entity) where T : class
        {
            _context.Remove(entity);
        }

         public async Task<Restaurant> GetRestaurant(int id)
         {
             var restaurant = await _context.Restaurants.Include(p => (p.Fooditems)).FirstOrDefaultAsync(u => u.Id == id);
             return restaurant;
        }

         public async Task<IEnumerable<Restaurant>> GetRestaurants()
         {
             var restaurants = await _context.Restaurants.Include(p => p.Fooditems).ToListAsync();
             //var restaurants = await _context.Restaurants.ToListAsync();

             return restaurants;


         }

        public async Task<bool> SaveAll()
        {
            return await _context.SaveChangesAsync() > 0;
        }
    }
}