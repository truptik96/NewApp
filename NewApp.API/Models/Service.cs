namespace NewApp.API.Models
{
    public class Service
    {
         public int Id { get; set; }
        public bool Breakfast { get; set; }
        public bool lunch { get; set; }
        public bool Dinner { get; set; }

        public bool Cafe { get; set; }
        public bool Nightlife { get; set; }
        public string other { get; set; }
        public Characteristic Characteristic { get; set; }

        public int CharacteristicId { get; set; }
    }
}