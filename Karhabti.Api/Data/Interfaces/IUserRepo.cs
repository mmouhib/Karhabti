using Karhabti.Entities;

namespace Karhabti.Data.Interfaces;

public interface IUserRepo : IKarhabtiBaseRepo<User>
{
    public User GetAuth(string email, string password);
}