using System.Linq;
using AutoMapper;
using NewApp.API.Dtos;
using NewApp.API.Models;

namespace NewApp.API.Helpers
{
    public class AutoMapperProfiles : Profile
    {
       public AutoMapperProfiles()
       {
           CreateMap<Restaurant, RestaurantForListDtos>();
            //   .ForMember(dest => dest.imageurl, opt =>
            // opt.MapFrom(src => src.Fooditems.FirstOrDefault().imageurl));
           CreateMap<Restaurant, RestaurantForDetailDtos>();
            //   .ForMember(dest => dest.imageurl, opt =>
            // opt.MapFrom(src => src.Fooditems.FirstOrDefault().imageurl));
           CreateMap<Fooditem, ImageForDetailDtos>();
       }
    }
}