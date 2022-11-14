namespace Karhabti.Dto;

public class MileagePostDto
{
    public int MileageQuantity { get; set; }
    public Guid MileageUnitId { get; set; }
    public Guid CarId { get; set; }
}

public class MileageGetDto : MileagePostDto
{
    public Guid MileageId { get; set; }
}