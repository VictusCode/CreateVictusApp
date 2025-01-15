using Core.Providers;
using Core.Repositories;
using Core.Services;
using Microsoft.Extensions.DependencyInjection;

namespace Core.Registrations
{
  public static class CoreRegistrations
  {
    public static IServiceCollection AddCoreComponents(this IServiceCollection services)
    {
      services.AddTransient<IEmployeeRepository, EmployeeRepository>();
      services.AddScoped<ICarService, CarService>();
      services.AddSingleton<VersionProvider>();

      return services;
    }
  }
}
