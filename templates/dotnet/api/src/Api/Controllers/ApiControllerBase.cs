using Microsoft.AspNetCore.Mvc;

namespace Api.Controllers
{
  [Produces("application/json")]
  [ApiController]
  public abstract class ApiControllerBase : ControllerBase { }
}
