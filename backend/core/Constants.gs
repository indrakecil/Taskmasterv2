/**
 * ============================================================
 * TaskMaster V2 Ultimate
 * File      : Constants.gs
 * Layer     : Core
 * Version   : 2.0.0
 * ============================================================
 */

const Constants = Object.freeze({

  SHEETS: Object.freeze({

    SETTINGS: "Settings",
    USERS: "Users",
    WORKSPACES: "Workspaces",
    PROJECTS: "Projects",
    TASKS: "Tasks",
    SUBTASKS: "Subtasks",
    COMMENTS: "Comments",
    ATTACHMENTS: "Attachments",
    NOTIFICATIONS: "Notifications",
    ACTIVITY_LOGS: "ActivityLogs",
    TIME_LOGS: "TimeLogs",
    TRASH: "Trash"

  }),

  HEADER: Object.freeze({

    SETTINGS: [
      "key",
      "value",
      "updatedAt"
    ],

    USERS: [
      "id",
      "name",
      "email",
      "role",
      "photo",
      "createdAt"
    ],

    WORKSPACES: [
      "id",
      "name",
      "description",
      "color",
      "icon",
      "ownerId",
      "createdAt"
    ],

    PROJECTS: [
      "id",
      "workspaceId",
      "name",
      "description",
      "status",
      "createdAt"
    ],

    TASKS: [
      "id",
      "workspaceId",
      "projectId",
      "title",
      "description",
      "status",
      "priority",
      "assignee",
      "startDate",
      "dueDate",
      "createdAt",
      "updatedAt"
    ]

  }),

  CACHE_KEY: Object.freeze({

    DASHBOARD: "dashboard_cache",
    SETTINGS: "settings_cache",
    USERS: "users_cache"

  }),

  REGEX: Object.freeze({

    EMAIL: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    PHONE: /^[0-9+\-\s()]+$/

  }),

  MIME: Object.freeze({

    PDF: MimeType.PDF,
    CSV: MimeType.CSV,
    ZIP: MimeType.ZIP

  })

});