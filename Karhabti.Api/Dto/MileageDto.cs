namespace Karhabti.Dto;

public class MileagePostDto
{
    public int MileageQuantity { get; set; }
    public string MileageUnit { get; set; }
    public Guid CarId { get; set; }
}

public class MileageGetDto : MileagePostDto
{
    public Guid MileageId { get; set; }
}