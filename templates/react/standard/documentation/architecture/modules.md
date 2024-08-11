# Modules

Domain-specific modules that contain everything related to a specific domain. Each module is a self-contained unit that can be easily moved to another project.

## Structure

Each module can contain the following folders:

1. `configs` - Configuration files.
2. `enums` - Enumerations.
3. `types` - Typescript types.
4. `services` - Business logic.
5. `contexts` - React context.
6. `ui` - User interface components. UI can be further divided into `widgets` or `pages` and have their own folder structure.

## Communication between modules

The communication between layers is done through the following rules:

1. All exports from a module should be done through the `index.ts` file in the root of the module.
