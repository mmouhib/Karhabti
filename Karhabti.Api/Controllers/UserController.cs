using AutoMapper;
using Karhabti.Data.Interfaces;
using Karhabti.Data.UnitOfWork;
using Karhabti.Dto;
using Karhabti.Entities;
using Microsoft.AspNetCore.Mvc;

namespace Karhabti.Controllers;

[ApiController]
[Route("api/user")]
public class UserController : ControllerBase
{
    private readonly IMapper _mapper;
    private readonly IUserRepo _repository;
    private readonly IUnitOfWork _unitOfWork;

    public UserController(IUserRepo repo, IUnitOfWork uow, IMapper mapper)
    {
        _repository = repo;
        _unitOfWork = uow;
        _mapper = mapper;
    }

    [HttpGet]
    public ActionResult<IEnumerable<UserGetDto>> GetAll()
    {
        var users = _repository.GetAll();
        if (users.Any()) return Ok(_mapper.Map<IEnumerable<UserGetDto>>(users));
        return NotFound();
    }

    [HttpGet("{id}", Name = "GetUserById")]
    public ActionResult<UserGetDto> GetUserById(int id)
    {
        var match = _repository.GetById(id);
        if (match == null) return NotFound();
        return _mapper.Map<UserGetDto>(match);
    }

    [HttpPost]
    public ActionResult<UserGetDto> AddUser(UserPostDto userToPost)
    {
        var mappedUserToPost = _mapper.Map<User>(userToPost);
        _repository.Add(mappedUserToPost);
        _unitOfWork.Commit();
        var userResult = _mapper.Map<UserGetDto>(mappedUserToPost);
        return CreatedAtRoute(
            nameof(GetUserById),
            new { id = userResult.Id },
            userResult
        );
    }

    [HttpGet("auth", Name = "UserAuth")]
    public ActionResult<UserGetDto> UserAuth([FromQuery] string email, [FromQuery] string password)
    {
        var result = _repository.GetAuth(email, password);
        if (result == null) return NotFound();
        return Ok(_mapper.Map<UserGetDto>(result));
    }

    [HttpDelete("{id}")]
    public ActionResult DeleteUser(int id)
    {
        var userToDelete = _repository.GetById(id);
        if (userToDelete == null) return NotFound();
        _repository.Delete(userToDelete);
        _unitOfWork.Commit();
        return NoContent();
    }
}