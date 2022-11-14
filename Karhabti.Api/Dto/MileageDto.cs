namespace Karhabti.Dto;

public class MileagePostDto
{
    public int Quantity { get; set; }
    public string Unit { get; set; }
    public Guid CarId { get; set; }
}

public class MileageGetDto : MileagePostDto
{
    public Guid Id { get; set; }
}