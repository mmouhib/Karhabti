using System.ComponentModel.DataAnnotations;

namespace Karhabti.Entities.Car;

public class CarModel
{
    [Key] private Guid CarModelId { get; set; }
    [Required] public string CarModelName { get; set; }
    [Required] public int CarModelYear { get; set; }

    public List<Car> Cars { get; set; }
}