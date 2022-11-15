using Karhabti.Data.Interfaces;
using Karhabti.Entities;

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

    public Mileage GetById(int id)
    {
        return _context.Mileages.FirstOrDefault(mileage => mileage.Id == id);
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