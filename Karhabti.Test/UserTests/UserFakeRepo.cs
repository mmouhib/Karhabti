using Karhabti.Data.Interfaces;
using Karhabti.Entities;

namespace Karhabti.Test.UserTests
{
    internal class UserFakeRepo : IUserRepo
    {

        public readonly List<User> usersList;

        public UserFakeRepo()
        {
            usersList= new List<User>()
            {
                new User()
                {
                    Id = 1,
                    Username = "username",
                    FirstName = "firstname",
                    LastName = "lastname",
                    Email = "user@usr.com",
                    Password= "password",
                    Gender = "male",
                    BirthDate= DateTime.Now,
                    Avatar = "2"
                },
                new User()
                {
                    Id = 2,
                    Username = "username",
                    FirstName = "firstname",
                    LastName = "lastname",
                    Email = "user@usr.com",
                    Password= "password",
                    Gender = "male",
                    BirthDate= DateTime.Now,
                    Avatar = "2"
                },new User()
                {
                    Id = 3,
                    Username = "username",
                    FirstName = "firstname",
                    LastName = "lastname",
                    Email = "user@usr.com",
                    Password= "password",
                    Gender = "male",
                    BirthDate= DateTime.Now,
                    Avatar = "2"
                },new User()
                {
                    Id = 4,
                    Username = "username",
                    FirstName = "firstname",
                    LastName = "lastname",
                    Email = "user@usr.com",
                    Password= "password",
                    Gender = "male",
                    BirthDate= DateTime.Now,
                    Avatar = "2"
                },new User()
                {
                    Id = 5,
                    Username = "username",
                    FirstName = "firstname",
                    LastName = "lastname",
                    Email = "user@usr.com",
                    Password= "password",
                    Gender = "male",
                    BirthDate= DateTime.Now,
                    Avatar = "2"
                }
            };
        }

        public void Add(User entityInstance)
        {
            usersList.Add(entityInstance);
        }

        public void Delete(User entityInstance)
        {
            var data = usersList.First(u => u.Id == entityInstance.Id);
            usersList.Remove(data);
        }

        public IEnumerable<User> GetAll()
        {
            return usersList;
        }

        public User GetAuth(string email, string password)
        {
            var res = usersList.FirstOrDefault(u => u.Email == email && u.Password == password);
            return res;
        }

        public User GetById(int id)
        {
            return usersList.FirstOrDefault(u => u.Id == id);
        }

        public void Update(User entityInstance)
        {
            throw new NotImplementedException();
        }
    }
}
