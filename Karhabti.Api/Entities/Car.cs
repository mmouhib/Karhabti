using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Karhabti.Entities;

public class Car
{
    [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
    [Key]
    public int Id { get; set; }

    [Required] public string Model { get; set; }
    [Required] public int Power { get; set; }
    [Required] public int Year { get; set; }
    [Required] public string Color { get; set; }
    [Required] public int EngineSize { get; set; }
    [Required] public string GasType { get; set; }
    [Required] public string BodyType { get; set; }

    [Required] [ForeignKey("User")] public int UserId { get; set; }

    public User User { get; set; }

    public List<Mileage> Mileages { get; set; }
    public List<GasFill> GasFills { get; set; }
}