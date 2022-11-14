using Karhabti.Data.Interfaces;
using Karhabti.Entities;

namespace Karhabti.Data.Repositories;

public class UserRepository : IUserRepo
{
    private readonly KarhabtiDbContext _context;

    public UserRepository(KarhabtiDbContext context)
    {
        _context = context;
    }

    public IEnumerable<User> GetAll()
    {
        return _context.Users.ToList();
    }

    public User GetById(Guid id)
    {
        return _context.Users.FirstOrDefault(user => user.UserId == id);
    }

    public void Add(User entityInstance)
    {
        if (entityInstance == null) throw new ArgumentNullException(nameof(entityInstance));
        _context.Add(entityInstance);
    }

    public void Delete(User entityInstance)
    {
        _context.Remove(entityInstance);
    }

    public void Update(User entityInstance)
    {
        _context.Update(entityInstance);
    }
}