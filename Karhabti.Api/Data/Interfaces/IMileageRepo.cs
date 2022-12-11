using Karhabti.Entities;

namespace Karhabti.Data.Interfaces;

public interface IMileageRepo : IKarhabtiBaseRepo<Mileage>
{
    public IEnumerable<Mileage> GetMileageByCarId(int id);
}