namespace Karhabti.Dto;

public class EnginePostDto
{
    public string EngineName { get; set; }
    public int EnginePower { get; set; }
    public Guid GasTypeId { get; set; }
}

public class EngineGetDto : EnginePostDto
{
    public Guid EngineId { get; set; }
}