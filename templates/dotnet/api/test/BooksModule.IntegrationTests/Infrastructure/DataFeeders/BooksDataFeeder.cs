using System.Data;
using BooksModule.Dtos;
using Dapper;

namespace BooksModule.IntegrationTests.Infrastructure.DataFeeders
{
  internal static class BooksDataFeeder
  {
    public static void Feed(IDbConnection db)
    {
      db.Execute(
        @$"
INSERT INTO Books ({nameof(BookDto.Id)}, {nameof(BookDto.Title)})
    VALUES(1, 'C# book');"
      );

      db.Execute(
        @$"
INSERT INTO Books ({nameof(BookDto.Id)}, {nameof(BookDto.Title)})
    VALUES(2, '.NET book');"
      );
    }
  }
}
