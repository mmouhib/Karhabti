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

    public User GetById(int id)
    {
        return _context.Users.FirstOrDefault(user => user.Id == id);
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

    public User GetAuth(string email, string password)
    {
        return _context.Users.FirstOrDefault(user => user.Email == email && user.Password == password);
    }
}