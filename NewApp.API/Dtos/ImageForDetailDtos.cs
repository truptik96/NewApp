namespace NewApp.API.Dtos
{
    public class ImageForDetailDtos
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string type { get; set; }
        public string category { get; set; }
        public int price { get; set; }

       
        public bool IsMain { get; set; }
        public string imageurl { get; set; }

    }
}