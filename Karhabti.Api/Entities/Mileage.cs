﻿using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Karhabti.Entities;

public class Mileage
{
    [Key] public Guid Id { get; set; }
    [Required] public int Quantity { get; set; }
    [Required] public string Unit { get; set; }
    [Required] [ForeignKey("Car")] public Guid CarId { get; set; }
}