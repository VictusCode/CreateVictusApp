using System.ComponentModel.DataAnnotations;

namespace Core.Dtos
{
  public class EmployeePutDto
  {
    [Required]
    public string LastName { get; set; }
  }
}
