using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Karhabti.Entities;

public class GasFill
{
    [Key] public int Id { get; set; }
    [Required] public int Quantity { get; set; }
    [Required] public DateTime Date { get; set; }
    [Required] public double Price { get; set; }
    [Required] public string Unit { get; set; }
    [Required] [ForeignKey("Car")] public int CarId { get; set; }
}