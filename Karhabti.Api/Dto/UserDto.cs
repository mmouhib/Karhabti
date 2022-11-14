namespace Karhabti.Dto;

public class UserPostDto
{
    public string UserName { get; set; }
    public string UserEmail { get; set; }
    public string UserPassword { get; set; }
    public DateTime UserBirthDate { get; set; }
    public Guid CarId { get; set; }
}

public class UserGetDto : UserPostDto
{
    public Guid UserId { get; set; }
}


