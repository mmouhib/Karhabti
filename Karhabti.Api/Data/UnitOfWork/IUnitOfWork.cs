namespace Karhabti.Data.UnitOfWork;

public interface IUnitOfWork : IDisposable
{
    int Commit();
    void RejectChanges();
}