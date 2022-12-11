using Karhabti.Entities;

namespace Karhabti.Data.Interfaces;

public interface ICarRepo : IKarhabtiBaseRepo<Car>
{
    public Car GetCarByOwnerId(int id);
}