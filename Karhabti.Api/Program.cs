using Karhabti.Data;
using Karhabti.Data.UnitOfWork;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddControllers();

var ConnString = builder.Configuration["KarhabtiConnection"];

{
    // UoW DE
    builder.Services.AddTransient<IUnitOfWork, UnitOfWork>();

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