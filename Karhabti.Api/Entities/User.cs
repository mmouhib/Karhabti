using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Karhabti.Entities;

public class User
{
    [Key] public Guid UserId { get; set; }
    [Required] public string UserName { get; set; }
    [Required] public string UserEmail { get; set; }
    [Required] public string UserPassword { get; set; }
    [Required] public DateOnly BirthDate { get; set; }

    [Required] [ForeignKey("Car")] public Guid CarId { get; set; }
}