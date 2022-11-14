namespace Karhabti.Dto;

public class CarGetDto
{
    public string Model { get; set; }
    public int Power { get; set; }
    public int Year { get; set; }
    public string Color { get; set; }
    public int EngineSize { get; set; }
    public string GasType { get; set; }
    public string BodyType { get; set; }

    public Guid UserId { get; set; }
}

public class CarPostDto : CarGetDto
{
    public Guid Id { get; set; }
}