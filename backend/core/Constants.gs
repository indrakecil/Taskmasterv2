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

  STATUS: Object.freeze({

  TODO: "TODO",
  IN_PROGRESS: "IN_PROGRESS",
  REVIEW: "REVIEW",
  DONE: "DONE",
  ARCHIVED: "ARCHIVED"

}),

PRIORITY: Object.freeze({

  LOW: "LOW",
  MEDIUM: "MEDIUM",
  HIGH: "HIGH",
  URGENT: "URGENT"

}),

ROLE: Object.freeze({

  OWNER: "OWNER",
  ADMIN: "ADMIN",
  MEMBER: "MEMBER",
  GUEST: "GUEST"

}),

TASK_TYPE: Object.freeze({

  TASK: "TASK",
  BUG: "BUG",
  FEATURE: "FEATURE",
  IMPROVEMENT: "IMPROVEMENT"

}),

PROJECT_STATUS: Object.freeze({

  ACTIVE: "ACTIVE",
  ARCHIVED: "ARCHIVED",
  COMPLETED: "COMPLETED"

}),

WORKSPACE_STATUS: Object.freeze({

  ACTIVE: "ACTIVE",
  DISABLED: "DISABLED"

}),

DEFAULT: Object.freeze({

  TASK_STATUS: "TODO",

  PRIORITY: "MEDIUM",

  ROLE: "MEMBER"

}),

SORT: Object.freeze({

  ASC: "ASC",

  DESC: "DESC"

}),

LIMIT: Object.freeze({

  PAGE_SIZE: 20,

  MAX_BATCH: 500

}),

WORKSPACE_ROLE: Object.freeze({

  OWNER: "OWNER",
  ADMIN: "ADMIN",
  MEMBER: "MEMBER",
  VIEWER: "VIEWER"

}),

  REGEX: Object.freeze({

    EMAIL: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    PHONE: /^[0-9+\-\s()]+$/

  }),

DATE_FORMAT: Object.freeze({

  DATE: "dd/MM/yyyy",

  DATETIME: "dd/MM/yyyy HH:mm:ss",

  ISO: "yyyy-MM-dd'T'HH:mm:ss'Z'"

}),

  MIME: Object.freeze({

    PDF: MimeType.PDF,
    CSV: MimeType.CSV,
    ZIP: MimeType.ZIP

  })

});