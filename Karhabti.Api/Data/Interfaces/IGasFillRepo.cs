using Karhabti.Entities;

namespace Karhabti.Data.Interfaces;

public interface IGasFillRepo : IKarhabtiBaseRepo<GasFill>
{
    public IEnumerable<GasFill> GetGasFillByCarId(int id);
}