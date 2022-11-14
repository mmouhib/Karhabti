using Karhabti.Data.Interfaces;
using Karhabti.Entities.Car;

namespace Karhabti.Data.Repositories;

public class CarRepository : ICarRepo
{
    private readonly KarhabtiDbContext _context;

    public CarRepository(KarhabtiDbContext context)
    {
        _context = context;
    }

    public IEnumerable<Car> GetAll()
    {
        return _context.Cars.ToList();
    }

    public Car GetById(Guid id)
    {
        var car = _context.Cars.FirstOrDefault(car => car.CarId == id);

        if (car == null) throw new ArgumentNullException(nameof(car));

        return car;
    }

    public void Add(Car entityInstance)
    {
        if (entityInstance == null) throw new ArgumentNullException(nameof(entityInstance));
        _context.Add(entityInstance);
    }

    public void Delete(Car entityInstance)
    {
        _context.Remove(entityInstance);
    }

    public void Update(Car entityInstance)
    {
        _context.Update(entityInstance);
    }
}