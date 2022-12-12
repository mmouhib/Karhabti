using AutoMapper;
using FakeItEasy;
using Karhabti.Controllers;
using Karhabti.Data.Interfaces;
using Karhabti.Data.UnitOfWork;
using Karhabti.Dto;
using Karhabti.Entities;
using Microsoft.AspNetCore.Mvc;

namespace Karhabti.Test.UserTests;

public class UserControllerTests
{

    private readonly UserController _userController;
    private readonly IUserRepo _repo;

    public UserControllerTests(IUnitOfWork uow, IMapper mapper)
    {
        _repo = new UserFakeRepo();
        _userController = new UserController(_repo, uow, mapper);
    }



    [Fact]
    public void Get_WhenCalled()
    {
        var okRes = _userController.GetAll();
        Assert.NotNull(okRes);
    }


    [Fact]
    public void Get_WhenCalled_GetAll()
    {
        var okRes = _userController.GetAll();

        var res = Assert.IsType<IEnumerable<User>>(okRes);

        Assert.NotNull(okRes);

        Assert.Equal(5, res.Count());
    }

    [Fact]
    public void Get_User_GetById_False_Input()
    {
        var notFoundResult = _userController.GetUserById(7);
     
        Assert.IsType<NotFoundResult>(notFoundResult);
    }

    [Fact]
    public void Get_User_GetById_True_Input()
    {
        var res = _userController.GetUserById(3);

        Assert.IsType<UserGetDto>(res);
    }



}