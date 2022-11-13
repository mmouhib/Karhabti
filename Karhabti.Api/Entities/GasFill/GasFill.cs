using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Karhabti.Entities.GasFill;

public class GasFill
{
    [Key] public Guid GasFillId { get; set; }
    [Required] public int GasFillQuantity { get; set; }
    [Required] public DateOnly GasFillDate { get; set; }
    [Required] public double GasFillPrice { get; set; }
    
    [Required] [ForeignKey("GasFillUnit")] public Guid GasFillUnitId { get; set; }
    [Required] [ForeignKey("Car")] public Guid CarId { get; set; }
    
}