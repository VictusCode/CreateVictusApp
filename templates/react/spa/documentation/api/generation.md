# API Client Generation

## How to generate an API client

After you have created/updated your API, you can generate an API client using the following command:

```bash
npm run api
```

This command will generate an API React Query client in the `src/app/api/generated` folder. The generated client will contain all the necessary types and services.

**NOTE: The generated client will be based on the OpenAPI specification. your api should have an OpenAPI schema on `localhost:5000/api-yaml` endpoint.**
