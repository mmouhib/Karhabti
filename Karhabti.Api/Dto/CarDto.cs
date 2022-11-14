namespace Karhabti.Dto;

public class CarGetDto
{
    public string CarModel { get; set; }
    public int CarPower { get; set; }
    public int CarYear { get; set; }
    public string CarColor { get; set; }
    public int CarEngineSize { get; set; }
    public string CarGasType { get; set; }
    public string CarBodyType { get; set; }

    public Guid UserId { get; set; }
}

public class CarPostDto : CarGetDto
{
    public Guid CardId { get; set; }
}