using System.Diagnostics.CodeAnalysis;
using System.Linq;
using Microsoft.AspNetCore.Authorization;
using Microsoft.OpenApi.Models;
using Swashbuckle.AspNetCore.SwaggerGen;

namespace Api.Infrastructure.Filters
{
  [ExcludeFromCodeCoverage]
  public class SecurityRequirementSwaggerOperationFilter : IOperationFilter
  {
    public void Apply(OpenApiOperation operation, OperationFilterContext context)
    {
      var hasAllowAnonymous = context.ApiDescription.CustomAttributes().OfType<IAllowAnonymous>().Any();
      if (hasAllowAnonymous)
      {
        return;
      }

      operation.Security.Add(
        new OpenApiSecurityRequirement
        {
          {
            new OpenApiSecurityScheme
            {
              Name = "ApiKey",
              Type = SecuritySchemeType.ApiKey,
              In = ParameterLocation.Header,
              Reference = new OpenApiReference { Type = ReferenceType.SecurityScheme, Id = "ApiKey", },
            },
            Array.Empty<string>()
          }
        }
      );
    }
  }
}
