# Namespaces

Namespaces should be used divided by modules and keep the same structure as the ui layer.

## auth.json

```json
{   
    "page": {
        "currentUsage": {
            "header": {
                "title": "Current Usage",
                "description": "Your current API usage"
            }
        }
    },
    "widget": {
        "currentUsage": {
            "title": "Current API Usage",
            "empty": "You have no usage yet",
            "error": {
                "error": "Failed to load usage",
                "authentication": "You need to sign in to view usage",
                "plan": "You need to upgrade your plan to view usage"
            },
        }
    }
    // etc...
}
