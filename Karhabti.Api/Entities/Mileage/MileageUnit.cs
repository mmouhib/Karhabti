using System.ComponentModel.DataAnnotations;

namespace Karhabti.Entities.Mileage;

public class MileageUnit
{
    [Key] public Guid MileageUnitId { get; set; }
    [Key] public string MileageUnitName { get; set; }

    public List<Mileage> Mileages { get; set; }
}