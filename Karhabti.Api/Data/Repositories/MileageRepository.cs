using Karhabti.Data.Interfaces;
using Karhabti.Entities.Mileage;

namespace Karhabti.Data.Repositories;

public class MileageRepository : IMileageRepo
{
    private readonly KarhabtiDbContext _context;

    public MileageRepository(KarhabtiDbContext context)
    {
        _context = context;
    }

    public IEnumerable<Mileage> GetAll()
    {
        return _context.Mileages.ToList();
    }

    public Mileage GetById(Guid id)
    {
        return _context.Mileages.FirstOrDefault(mileage => mileage.MileageId == id);
    }

    public void Add(Mileage entityInstance)
    {
        _context.Mileages.Add(entityInstance);
    }

    public void Delete(Mileage entityInstance)
    {
        _context.Mileages.Remove(entityInstance);
    }

    public void Update(Mileage entityInstance)
    {
    }
}