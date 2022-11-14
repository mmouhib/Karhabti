using System.ComponentModel.DataAnnotations;

namespace Karhabti.Entities.GasFill;

public class GasFillUnit
{
    [Key] public Guid GasFillUnitId { get; set; }
    [Key] public string GasFillUnitName { get; set; }

    public List<GasFill> GasFills { get; set; }
}