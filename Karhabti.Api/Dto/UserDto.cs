namespace Karhabti.Dto;

public class UserPostDto
{
    public string Username { get; set; }
    public string FirstName { get; set; }
    public string LastName { get; set; }
    public string Email { get; set; }
    public string Password { get; set; }
    public DateTime BirthDate { get; set; }
    public Guid CarId { get; set; }
}

public class UserGetDto : UserPostDto
{
    public Guid Id { get; set; }
}


