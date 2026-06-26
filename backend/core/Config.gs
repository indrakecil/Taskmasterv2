/**
 * ============================================================
 * TaskMaster V2 Ultimate
 * File      : Config.gs
 * Layer     : Core
 * Author    : Fireman & ChatGPT
 * Version   : 2.0.0
 * ============================================================
 */

const Config = Object.freeze({

  APP: Object.freeze({

    NAME: "TaskMaster V2 Ultimate",

    VERSION: "2.0.0",

    BUILD: "2026.06.26",

    AUTHOR: "Fireman",

    COMPANY: "Fireman Studio",

    LOCALE: "id",

    DATE_FORMAT: "dd/MM/yyyy",

    DATETIME_FORMAT: "dd/MM/yyyy HH:mm:ss"

  }),

  DATABASE: Object.freeze({

    NAME: SpreadsheetApp.getActiveSpreadsheet().getName(),

    ID: SpreadsheetApp.getActiveSpreadsheet().getId(),

    TIMEZONE: SpreadsheetApp
      .getActiveSpreadsheet()
      .getSpreadsheetTimeZone()

  }),

  CACHE: Object.freeze({

    EXPIRE: 300

  }),

  LOG: Object.freeze({

    ENABLED: true,

    MAX_ROWS: 5000

  }),

  MENU: Object.freeze({

    TITLE: "🚀 TaskMaster"

  }),

  UI: Object.freeze({

    PRIMARY: "#4F46E5",

    SUCCESS: "#10B981",

    WARNING: "#F59E0B",

    DANGER: "#EF4444",

    INFO: "#0EA5E9",

    DARK: "#0F172A",

    LIGHT: "#FFFFFF"

  }),

  STATUS: Object.freeze({

    TODO: "TODO",

    PROGRESS: "IN_PROGRESS",

    REVIEW: "REVIEW",

    DONE: "DONE",

    ARCHIVE: "ARCHIVE"

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

    VIEWER: "VIEWER"

  }),

  MODULE: Object.freeze({

    DASHBOARD: "Dashboard",

    WORKSPACE: "Workspace",

    PROJECT: "Project",

    TASK: "Task",

    KANBAN: "Kanban",

    CALENDAR: "Calendar",

    ANALYTICS: "Analytics",

    SETTINGS: "Settings",

    AI: "AI"

  })

});