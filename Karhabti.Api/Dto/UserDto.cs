namespace Karhabti.Dto;

public class UserPostDto
{
    public string Username { get; set; }
    public string FirstName { get; set; }
    public string LastName { get; set; }
    public string Email { get; set; }
    public string Password { get; set; }
    public DateTime BirthDate { get; set; }
    public string Gender { get; set; }
    public string Avatar { get; set; }
}

public class UserGetDto : UserPostDto
{
    public int Id { get; set; }
}


