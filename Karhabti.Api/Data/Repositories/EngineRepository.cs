using Karhabti.Data.Interfaces;
using Karhabti.Entities.Engine;

namespace Karhabti.Data.Repositories;

public class EngineRepository : IEngineRepo
{
    private readonly KarhabtiDbContext _context;

    public EngineRepository(KarhabtiDbContext context)
    {
        _context = context;
    }

    public IEnumerable<Engine> GetAll()
    {
        return _context.Engines.ToList();
    }

    public Engine GetById(Guid id)
    {
        return _context.Engines.FirstOrDefault(engine => engine.EngineId == id);
    }

    public void Add(Engine entityInstance)
    {
        if (entityInstance == null) throw new ArgumentNullException();
        _context.Add(entityInstance);
    }

    public void Delete(Engine entityInstance)
    {
        _context.Remove(entityInstance);
    }

    public void Update(Engine entityInstance)
    {
        throw new NotImplementedException();
    }
}