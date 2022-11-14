using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Karhabti.Entities;

public class GasFill
{
    [Key] public Guid GasFillId { get; set; }
    [Required] public int GasFillQuantity { get; set; }
    [Required] public DateTime GasFillDate { get; set; }
    [Required] public double GasFillPrice { get; set; }
    [Required] public string GasFillUnit { get; set; }
    [Required] [ForeignKey("Car")] public Guid CarId { get; set; }
}