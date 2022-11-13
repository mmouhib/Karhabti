using System.ComponentModel.DataAnnotations;

namespace Karhabti.Entities.Engine;

public class GasType
{
    [Key] public Guid GasTypeId { get; set; }
    [Key] public string GasTypeName { get; set; }

    public List<Engine> Engines { get; set; }
}