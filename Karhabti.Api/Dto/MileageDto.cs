namespace Karhabti.Dto;

public class MileagePostDto
{
    public int Quantity { get; set; }
    public string Unit { get; set; }
    public int CarId { get; set; }
    public DateTime Date { get; set; }
}

public class MileageGetDto : MileagePostDto
{
    public int Id { get; set; }
}