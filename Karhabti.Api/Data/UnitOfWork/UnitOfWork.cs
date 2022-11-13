namespace Karhabti.Data.UnitOfWork;

public class UnitOfWork : IUnitOfWork
{
    private readonly KarhabtiDbContext _context;
    private bool _disposedValue;

    public UnitOfWork(KarhabtiDbContext context)
    {
        _context = context;
    }

    public int Commit()
    {
        return _context.SaveChanges();
    }

    public void RejectChanges()
    {
        // TODO: define
    }

    public void Dispose()
    {
        // Do not change this code. Put cleanup code in 'Dispose(bool disposing)' method
        Dispose(true);
        GC.SuppressFinalize(this);
    }

    protected virtual void Dispose(bool disposing)
    {
        if (!_disposedValue)
        {
            if (disposing)
            {
                // TODO: dispose managed state (managed objects)
            }

            _disposedValue = true;
        }
    }
}