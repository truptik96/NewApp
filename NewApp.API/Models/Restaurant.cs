using System.Collections.Generic;

namespace NewApp.API.Models
{
    public class Restaurant
    {
       public int Id { get; set; }
        public string Name { get; set; }
        public string Address { get; set; }

        public string contact_person { get; set; }

        public int contact_number { get; set; }

        public string Email { get; set; }
        public string website { get; set; }
        
        public string Timings { get; set; }

        public string TimeInterval { get; set; }
        public int Rating { get; set; }
         public string Url { get; set; }
        public string type { get; set; }
        public ICollection<Fooditem> Fooditems { get; set; }
        public ICollection<Characteristic> Characteristics { get; set; }
        
    }
}