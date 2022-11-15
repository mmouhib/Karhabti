using AutoMapper;
using Karhabti.Data.Interfaces;
using Karhabti.Data.UnitOfWork;
using Karhabti.Dto;
using Karhabti.Entities;
using Microsoft.AspNetCore.Mvc;

namespace Karhabti.Controllers;

[ApiController]
[Route("/api/car")]
public class CarController : ControllerBase
{
    private readonly IMapper _mapper;
    private readonly ICarRepo _repository;
    private readonly IUnitOfWork _unitOfWork;

    public CarController(IUnitOfWork uow, ICarRepo repo, IMapper mapper)
    {
        _mapper = mapper;
        _repository = repo;
        _unitOfWork = uow;
    }

    [HttpGet]
    public ActionResult<IEnumerable<CarGetDto>> GetAll()
    {
        var cars = _repository.GetAll();
        if (cars.Any()) return Ok(_mapper.Map<IEnumerable<CarGetDto>>(cars));
        return NotFound();
    }

    [HttpGet("{id}", Name = "GetCarById")]
    public ActionResult<CarGetDto> GetCarById(int id)
    {
        var car = _repository.GetById(id);
        if (car == null) return NotFound();
        return _mapper.Map<CarGetDto>(car);
    }

    [HttpPost]
    public ActionResult<CarGetDto> AddCar(CarPostDto carToAdd)
    {
        var mappedCar = _mapper.Map<Car>(carToAdd);
        _repository.Add(mappedCar);
        _unitOfWork.Commit();

        var carToReturn = _mapper.Map<CarGetDto>(mappedCar);
        return CreatedAtRoute(
            nameof(GetCarById),
            new { id = carToReturn.Id },
            carToReturn
        );
    }
}