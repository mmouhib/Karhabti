using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Karhabti.Entities.Car;

public class Car
{
    [Key] public Guid CarId { get; set; }
    [Required] public int CarPower { get; set; }
    [Required] public int CarYear { get; set; }

    [Required] [ForeignKey("Color")] public Guid ColorId { get; set; }
    [Required] [ForeignKey("BodyType")] public Guid CarBodyTypeId { get; set; }
    [Required] [ForeignKey("CarModel")] public Guid CarModelId { get; set; }
    [Required] [ForeignKey("Engine")] public Guid EngineId { get; set; }
    [Required] [ForeignKey("User")] public Guid UserId { get; set; }

    public User User { get; set; }

    public List<Mileage.Mileage> Mileages { get; set; }
    public List<GasFill.GasFill> GasFills { get; set; }
}