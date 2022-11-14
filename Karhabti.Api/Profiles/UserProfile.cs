using AutoMapper;
using Karhabti.Dto;
using Karhabti.Entities;

namespace Karhabti.Profiles;

public class UserProfile : Profile
{
    public UserProfile()
    {
        CreateMap<User, UserGetDto>();
        CreateMap<UserPostDto, User>();
        CreateMap<User, UserPostDto>();
    }
}