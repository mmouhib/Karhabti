using AutoMapper;
using Karhabti.Dto;
using Karhabti.Entities;

namespace Karhabti.Profiles;

public class GasFillProfile : Profile
{
    public GasFillProfile()
    {
        CreateMap<GasFill, GasFillGetDto>();
        CreateMap<GasFillPostDto, GasFill>();
        CreateMap<GasFill, GasFillPostDto>();
    }
}