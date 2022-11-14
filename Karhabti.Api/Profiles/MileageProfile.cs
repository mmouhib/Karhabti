using AutoMapper;
using Karhabti.Dto;
using Karhabti.Entities;

namespace Karhabti.Profiles;

public class MileageProfile : Profile
{
    public MileageProfile()
    {
        CreateMap<Mileage, MileageGetDto>();
        CreateMap<MileagePostDto, Mileage>();
        CreateMap<Mileage, MileagePostDto>();
    }
}