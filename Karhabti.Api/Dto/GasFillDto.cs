namespace Karhabti.Dto;

public class GasFillPostDto
{
    public int GasFillQuantity { get; set; }
    public DateTime GasFillDate { get; set; }
    public double GasFillPrice { get; set; }
    public Guid GasFillUnitId { get; set; }
    public Guid CarId { get; set; }
}

public class GasFillGetDto : GasFillPostDto
{
    public Guid GasFillId { get; set; }
}