using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Karhabti.Entities;

public class Mileage
{
    [Key] public int Id { get; set; }
    [Required] public int Quantity { get; set; }
    [Required] public string Unit { get; set; }
    [Required] [ForeignKey("Car")] public int CarId { get; set; }
}