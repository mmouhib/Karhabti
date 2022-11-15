namespace Karhabti.Dto;

public class CarPostDto
{
    public string Model { get; set; }
    public int Power { get; set; }
    public int Year { get; set; }
    public string Color { get; set; }
    public int EngineSize { get; set; }
    public string GasType { get; set; }
    public string BodyType { get; set; }

    public int UserId { get; set; }
}

public class CarGetDto : CarPostDto
{
    public int Id { get; set; }
}