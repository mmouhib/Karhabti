namespace Karhabti.Dto;

public class CarGetDto
{
    public int CarPower { get; set; }
    public int CarYear { get; set; }

    public Guid ColorId { get; set; }
    public Guid CarBodyTypeId { get; set; }
    public Guid CarModelId { get; set; }
    public Guid EngineId { get; set; }
    public Guid UserId { get; set; }
}

public class CarPostDto : CarGetDto
{
    public Guid CardId { get; set; }
}