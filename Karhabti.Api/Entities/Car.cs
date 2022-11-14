using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Karhabti.Entities.Car;

public class Car
{
    [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
    [Key]
    public Guid CarId { get; set; }

    [Required] public string CarModel { get; set; }
    [Required] public int CarPower { get; set; }
    [Required] public int CarYear { get; set; }
    [Required] public string CarColor { get; set; }
    [Required] public int CarEngineSize { get; set; }
    [Required] public string CarGasType { get; set; }
    [Required] public string CarBodyType { get; set; }

    [Required] [ForeignKey("User")] public Guid UserId { get; set; }

    public User User { get; set; }

    public List<Mileage> Mileages { get; set; }
    public List<GasFill> GasFills { get; set; }
}