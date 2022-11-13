using System.ComponentModel.DataAnnotations;

namespace Karhabti.Entities.Car;

public class BodType
{
    [Key] public Guid BoyTypeId { get; set; }
    [Required] public string BoyTypeName { get; set; }

    public List<Car> Cars { get; set; }
}