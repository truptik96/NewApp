using System.Collections.Generic;

namespace NewApp.API.Models
{
    public class Characteristic
    {
        public int Id { get; set; }
        public string type { get; set; }
        public bool Alcohol { get; set; }

        public string Seating { get; set; }
        public string payment { get; set; }
        public string Special_tags { get; set; }
        public Restaurant Restaurant { get; set; }

        public int RestaurantId { get; set; }
        public ICollection<Service> Services { get; set; }
    }
}