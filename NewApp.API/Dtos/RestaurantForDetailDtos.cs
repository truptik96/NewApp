using System.Collections.Generic;
using NewApp.API.Models;

namespace NewApp.API.Dtos
{
    public class RestaurantForDetailDtos
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Address { get; set; }
        public int Rating { get; set; }
        public string type { get; set; }

       

          public ICollection<ImageForDetailDtos> Fooditems { get; set; }
    }
}