namespace Karhabti.Data.Interfaces;

public interface IKarhabtiBaseRepo<TEntity>
{
    IEnumerable<TEntity> GetAll();
    TEntity GetById(int id);
    void Add(TEntity entityInstance);
    void Delete(TEntity entityInstance);
    void Update(TEntity entityInstance);
}