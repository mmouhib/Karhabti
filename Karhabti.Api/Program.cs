using Karhabti.Data;
using Karhabti.Data.Interfaces;
using Karhabti.Data.Repositories;
using Karhabti.Data.UnitOfWork;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddControllers();

// var ConnString = builder.Configuration["KarhabtiConnection"];
var ConnString =
    "Server=localhost;Database=KarhabtiDB;Trusted_Connection=True;MultipleActiveResultSets=true;TrustServerCertificate=True";
{
    // UoW DE
    builder.Services.AddTransient<IUnitOfWork, UnitOfWork>();

    builder.Services.AddTransient<ICarRepo, CarRepository>();
    builder.Services.AddTransient<IUserRepo, UserRepository>();
    builder.Services.AddTransient<IMileageRepo, MileageRepository>();
    builder.Services.AddTransient<IGasFillRepo, GasFillRepository>();
    builder.Services.AddTransient<IEngineRepo, EngineRepository>();

    // DbContext DE
    builder.Services.AddDbContext<KarhabtiDbContext>(options => { options.UseSqlServer(ConnString); });

    //automapper DE
    builder.Services.AddAutoMapper(AppDomain.CurrentDomain.GetAssemblies());
}

builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();