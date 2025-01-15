using System.Data;
using BooksModule.Dtos;
using Dapper;

namespace BooksModule.Features.GetBook;

internal static class Query
{
  private static readonly string _getBook =
    @$"
SELECT
    {nameof(BookDto.Id)},
    {nameof(BookDto.Title)}
FROM
    Books
WHERE
    {nameof(BookDto.Id)} = @id
";

  public static Task<BookDto> GetBookAsync(
    this IDbConnection db,
    int id,
    CancellationToken cancellationToken
  ) =>
    db.QuerySingleOrDefaultAsync<BookDto>(
      new CommandDefinition(_getBook, new { id }, cancellationToken: cancellationToken)
    );
}
