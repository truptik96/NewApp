using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using AutoMapper;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using NewApp.API.Data;
using NewApp.API.Dtos;
using NewApp.API.Models;

namespace NewApp.API.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class RestaurantsController : ControllerBase
    {
        private readonly IFoodAppRepository _repo;
          private readonly IMapper _mapper;
        public RestaurantsController(IFoodAppRepository repo, IMapper mapper)
        {
            _repo = repo;
            _mapper= mapper;
        }

        [HttpGet]
        public async Task<IActionResult> GetRestaurants() 
        {
            var restaurants = await _repo.GetRestaurants();
             var restaurantToReturn = _mapper.Map<IEnumerable<RestaurantForListDtos>>(restaurants);
            return Ok(restaurantToReturn);
        }
      
      [HttpGet("{id}")]

      public async Task<IActionResult> GetRestaurant(int id)
      {
          var restaurant = await _repo.GetRestaurant(id);
          var restaurantToReturn = _mapper.Map<RestaurantForDetailDtos>(restaurant);
          return Ok(restaurant);
      }

        
    }
}