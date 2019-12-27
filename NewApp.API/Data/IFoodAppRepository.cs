using System.Collections.Generic;
using System.Threading.Tasks;
using NewApp.API.Models;

namespace NewApp.API.Data
{
    public interface IFoodAppRepository
    {
         void Add<T>(T entity) where T: class;

         void Delete<T>(T entity)where T:class;

         Task<bool> SaveAll();

         Task<IEnumerable<Restaurant>> GetRestaurants();

         Task<Restaurant> GetRestaurant(int id);
         
         
    }
}