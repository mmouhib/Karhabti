using AutoMapper;
using Karhabti.Data.Interfaces;
using Karhabti.Data.UnitOfWork;
using Karhabti.Dto;
using Karhabti.Entities;
using Microsoft.AspNetCore.Mvc;

namespace Karhabti.Controllers;

[ApiController]
[Route("api/mileage")]
public class MileageController : ControllerBase
{
    private readonly IMapper _mapper;
    private readonly IMileageRepo _repository;
    private readonly IUnitOfWork _unitOfWork;

    public MileageController(IMapper mapper, IUnitOfWork unitOfWork, IMileageRepo repository)
    {
        _mapper = mapper;
        _unitOfWork = unitOfWork;
        _repository = repository;
    }

    [HttpGet]
    public ActionResult<IEnumerable<MileageGetDto>> GetAllMileages()
    {
        var mileages = _repository.GetAll();
        if (mileages.Any()) return Ok(_mapper.Map<MileageGetDto>(mileages));
        return NotFound();
    }

    [HttpGet("{id}", Name = "GetMileageById")]
    public ActionResult<MileageGetDto> GetMileageById(int id)
    {
        var mileage = _repository.GetById(id);
        if (mileage == null) return NotFound();
        return Ok(_mapper.Map<MileageGetDto>(mileage));
    }

    [HttpPost]
    public ActionResult<MileageGetDto> AddMileage(MileagePostDto mileageToAdd)
    {
        var mapperMileageToAdd = _mapper.Map<Mileage>(mileageToAdd);
        _repository.Add(mapperMileageToAdd);
        _unitOfWork.Commit();

        var mappedResult = _mapper.Map<MileageGetDto>(mapperMileageToAdd);
        return CreatedAtRoute(
            nameof(GetMileageById),
            new { id = mappedResult.Id },
            mappedResult
        );
    }
}