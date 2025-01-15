using System.Data;
using BooksModule.Dtos;
using Dapper;

namespace BooksModule.Features.DeleteBook;

internal static class Command
{
  private static readonly string _deleteBook =
    @$"
DELETE FROM Books
WHERE
    {nameof(BookDto.Id)} = @id
";

  public static async Task<int> DeleteBookAsync(
    this IDbConnection db,
    int id,
    CancellationToken cancellationToken
  ) =>
    await db.ExecuteAsync(
      new CommandDefinition(_deleteBook, new { id }, cancellationToken: cancellationToken)
    );
}
