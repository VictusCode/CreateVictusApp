# Layers

The architecture of the system is divided into several layers. Each layer is responsible for a specific set of tasks and interacts with other layers in a well-defined way. The layers are:

1. `app` - Core configuration of the app, such as the routes, the global styles, configs for api, store, etc.
2. `pages` - Pages are the entry points of the app. They are responsible for fetching data from the store and passing it to the components.
3. `modules` - Domain-specific modules that contain everything related to a specific domain. Each module is a self-contained unit that can be easily moved to another project. [See more](./modules.md)
4. `shared` - Shared services, and utilities that are used across the app.
5. `ui` - Reusable components that are used across the app (aka atoms). They are not connected to the store and are not aware of the business logic.

## Communication between layers

The communication between layers is done through the following rules:

1. All exports from a layer should be done through the `index.ts` file in the root of the layer.
