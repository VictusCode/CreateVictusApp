using System.Net;
using Api.BackgroundServices;

namespace Api.IntegrationTests.Infrastructure.Fakes
{
  public class FakePingService : IPingService
  {
    internal const HttpStatusCode Result = HttpStatusCode.EarlyHints;

    public HttpStatusCode WebsiteStatusCode => Result;
  }
}
