using Core.Dtos;
using Core.Models;

namespace Core.Extensions
{
  internal static class EmployeeExtensions
  {
    public static EmployeeDto MapToDto(this Employee source)
    {
      return new EmployeeDto
      {
        Id = source.EmpNo,
        FirstName = source.FirstName,
        LastName = source.LastName,
        BirthDate = source.BirthDate,
        Gender = source.Gender,
      };
    }
  }
}
