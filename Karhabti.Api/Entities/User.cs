using System.ComponentModel.DataAnnotations;

namespace Karhabti.Entities;

public class User
{
    [Key] public int Id { get; set; }
    [Required] public string Username { get; set; }
    [Required] public string FirstName { get; set; }
    [Required] public string LastName { get; set; }
    [Required] public string Email { get; set; }
    [Required] public string Password { get; set; }
    [Required] public DateTime BirthDate { get; set; }
    [Required] public string Gender { get; set; }
    [Required] public string Avatar { get; set; }
}