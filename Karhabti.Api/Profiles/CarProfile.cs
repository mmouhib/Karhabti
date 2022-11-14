using AutoMapper;
using Karhabti.Dto;
using Karhabti.Entities.Car;

namespace Karhabti.Profiles;

public class CarProfile : Profile
{
    public CarProfile()
    {
        CreateMap<Car, CarGetDto>();
        CreateMap<CarPostDto, Car>();
        CreateMap<Car, CarPostDto>();
    }
}