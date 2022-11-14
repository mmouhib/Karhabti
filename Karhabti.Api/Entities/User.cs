using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Karhabti.Entities;

public class User
{
    [Key] public Guid Id { get; set; }
    [Required] public string Username { get; set; }
    [Required] public string FirstName { get; set; }
    [Required] public string LastName { get; set; }
    [Required] public string Email { get; set; }
    [Required] public string Password { get; set; }
    [Required] public DateTime BirthDate { get; set; }

    [Required] [ForeignKey("Car")] public Guid CarId { get; set; }
}