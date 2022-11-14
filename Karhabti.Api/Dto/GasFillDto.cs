namespace Karhabti.Dto;

public class GasFillPostDto
{
    public int Quantity { get; set; }
    public DateTime Date { get; set; }
    public double Price { get; set; }
    public string Unit { get; set; }
    public Guid CarId { get; set; }
}

public class GasFillGetDto : GasFillPostDto
{
    public Guid Id { get; set; }
}