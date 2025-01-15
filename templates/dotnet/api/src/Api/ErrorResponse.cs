using System.Runtime.Serialization;

namespace Api
{
  public class ErrorResponse
  {
    public IEnumerable<string> Messages { get; set; }

    [DataMember(EmitDefaultValue = false)]
    public string Exception { get; set; }
  }
}
