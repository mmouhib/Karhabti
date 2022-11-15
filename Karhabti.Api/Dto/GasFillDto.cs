namespace Karhabti.Dto;

public class GasFillPostDto
{
    public int Quantity { get; set; }
    public DateTime Date { get; set; }
    public double Price { get; set; }
    public string Unit { get; set; }
    public int CarId { get; set; }
}

public class GasFillGetDto : GasFillPostDto
{
    public int Id { get; set; }
}