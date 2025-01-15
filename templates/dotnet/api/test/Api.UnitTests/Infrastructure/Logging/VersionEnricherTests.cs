using System;
using Api.Infrastructure.Logging;
using Core.Providers;
using FluentAssertions;
using Serilog.Events;
using Xunit;

namespace Api.UnitTests.Infrastructure.Logging;

public class VersionEnricherTests
{
  private readonly VersionEnricher _sut;

  public VersionEnricherTests()
  {
    _sut = new VersionEnricher(new VersionProvider());
  }

  [Fact]
  public void Properties_should_be_available()
  {
    // Arrange
    var logEvent = GetEmptyLogEvent();

    // Act
    _sut.Enrich(logEvent, null);

    // Assert
    logEvent.Properties["SHA"].ToString().Should().Contain("36b90293");
    logEvent.Properties["VERSION"].ToString().Should().Contain("9.9.9");
  }

  private static LogEvent GetEmptyLogEvent()
  {
    return new LogEvent(
      DateTimeOffset.UtcNow,
      LogEventLevel.Verbose,
      null,
      new MessageTemplate(Guid.NewGuid().ToString(), []),
      []
    );
  }
}
