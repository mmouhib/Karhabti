using System.ComponentModel.DataAnnotations;

namespace Karhabti.Entities.Car;

public class Color
{
    [Key] public Guid ColorId { get; set; }
    [Required] public string ColorName { get; set; }

    public List<Car> Cars { get; set; }
}