using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Karhabti.Entities.Mileage;

public class Mileage
{
    [Key] public Guid MileageId { get; set; }
    [Required] public int MileageQuantity { get; set; }

    [Required] [ForeignKey("MileageUnit")] public Guid MileageUnitId { get; set; }
    [Required] [ForeignKey("Car")] public Guid CarId { get; set; }
}