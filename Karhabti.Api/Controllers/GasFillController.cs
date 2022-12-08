using AutoMapper;
using Karhabti.Data.Interfaces;
using Karhabti.Data.UnitOfWork;
using Karhabti.Dto;
using Karhabti.Entities;
using Microsoft.AspNetCore.Mvc;

namespace Karhabti.Controllers;

[ApiController]
[Route("api/gas")]
public class GasFillController : ControllerBase
{
    private readonly IMapper _mapper;
    private readonly IGasFillRepo _repository;
    private readonly IUnitOfWork _unitOfWork;

    public GasFillController(IMapper mapper, IUnitOfWork unitOfWork, IGasFillRepo repository)
    {
        _mapper = mapper;
        _unitOfWork = unitOfWork;
        _repository = repository;
    }

    [HttpGet]
    public ActionResult<IEnumerable<GasFillGetDto>> GetAll()
    {
        var gasFills = _repository.GetAll();
        if (gasFills.Any()) return Ok(_mapper.Map<IEnumerable<GasFillGetDto>>(gasFills));
        return NotFound();
    }

    [HttpGet("{id}", Name = "GetGasFillById")]
    public ActionResult<GasFillGetDto> GetGasFillById(int id)
    {
        var gasFill = _repository.GetById(id);
        if (gasFill == null) return NotFound();
        return _mapper.Map<GasFillGetDto>(gasFill);
    }

    [HttpPost]
    public ActionResult<GasFillGetDto> AddGasFill(GasFillPostDto gasFillToAdd)
    {
        var mappedGasFill = _mapper.Map<GasFill>(gasFillToAdd);
        _repository.Add(mappedGasFill);
        _unitOfWork.Commit();

        var gasFillToReturn = _mapper.Map<GasFillGetDto>(mappedGasFill);
        return CreatedAtRoute(
            nameof(GetGasFillById),
            new { id = gasFillToReturn.Id },
            gasFillToReturn
        );
    }

    [HttpGet("car/{id}", Name = "GetGasFillByCarId")]
    public ActionResult<IEnumerable<GasFillGetDto>> GetGasFillByCarId(int id)
    {
        var gasFills = _repository.GetGasFillByCarId(id);
        return Ok(_mapper.Map<IEnumerable<GasFillGetDto>>(gasFills));
    }
}