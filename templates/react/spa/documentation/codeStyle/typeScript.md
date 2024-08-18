# TypeScript Code Style

- **Types**: Must follow `PascalCase`. Types should have meaningful names that clearly describe the data structure and should end with `Type` or `Props` or equal to `Props`, `T` or `P`.
  - Examples: `UserConfigType`, `Props`, `OrderProps`

- **Enums**: Must follow `PascalCase` and should end with `Enum`.
  - Example: `UserRoleEnum`

- **Enum Members**: Must follow `camelCase`.
  - Example: `admin`, `user`

- **Private Members**: Must start with an underscore `_` and follow `camelCase`.
  - Example: `private _memberName: string;`

- **Generated Files**: Naming convention rules are disabled for files in the `generated` directory.
