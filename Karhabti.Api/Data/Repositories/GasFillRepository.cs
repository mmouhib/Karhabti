using Karhabti.Data.Interfaces;
using Karhabti.Entities;

namespace Karhabti.Data.Repositories;

public class GasFillRepository : IGasFillRepo
{
    private readonly KarhabtiDbContext _context;

    public GasFillRepository(KarhabtiDbContext context)
    {
        _context = context;
    }

    public IEnumerable<GasFill> GetAll()
    {
        return _context.GasFills.ToList();
    }

    public GasFill GetById(int id)
    {
        var gasFill = _context.GasFills.FirstOrDefault(gasFill => gasFill.Id == id);

        if (gasFill == null) throw new ArgumentNullException(nameof(gasFill));

        return gasFill;
    }

    public void Add(GasFill entityInstance)
    {
        _context.Add(entityInstance);
    }

    public void Delete(GasFill entityInstance)
    {
        _context.Remove(entityInstance);
    }

    public void Update(GasFill entityInstance)
    {
        _context.Update(entityInstance);
    }

    public IEnumerable<GasFill> GetGasFillByCarId(int id)
    {
        return _context.GasFills.ToList().Where(gasFill => gasFill.CarId == id);
    }
}