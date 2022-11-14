using AutoMapper;
using Karhabti.Dto;

namespace Karhabti.Profiles;

public class Engine : Profile
{
    public Engine()
    {
        CreateMap<Engine, EngineGetDto>();
        CreateMap<EnginePostDto, Engine>();
        CreateMap<Engine, EnginePostDto>();
    }
}