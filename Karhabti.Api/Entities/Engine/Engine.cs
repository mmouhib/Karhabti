using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Karhabti.Entities.Engine;

public class Engine
{
    [Key] public Guid EngineId { get; set; }
    [Required] public string EngineName { get; set; }
    [Required] public int EnginePower { get; set; }

    [Required] [ForeignKey("GasType")] public Guid GasTypeId { get; set; }

    public List<Car.Car> Cars { get; set; }
}