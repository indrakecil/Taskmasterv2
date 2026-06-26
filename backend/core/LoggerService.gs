/**
 * ==========================================================
 * TaskMaster V2 Ultimate
 * File : Logger.gs
 * ==========================================================
 */

const LoggerService = (() => {

  const LEVEL = Object.freeze({
    INFO: "INFO",
    WARNING: "WARNING",
    ERROR: "ERROR",
    SUCCESS: "SUCCESS"
  });

  /**
   * Tulis log ke Apps Script Logger
   */
  const write = (level, module, message, data = null) => {

    const payload = {
      timestamp: new Date().toISOString(),
      level,
      module,
      message,
      data
    };

    Logger.log(JSON.stringify(payload));

    return payload;
  };

  const info = (module, message, data = null) =>
    write(LEVEL.INFO, module, message, data);

  const warning = (module, message, data = null) =>
    write(LEVEL.WARNING, module, message, data);

  const success = (module, message, data = null) =>
    write(LEVEL.SUCCESS, module, message, data);

  const error = (module, error) => {

    return write(
      LEVEL.ERROR,
      module,
      error.message || String(error),
      {
        stack: error.stack || null
      }
    );

  };

  return {

    LEVEL,

    info,

    warning,

    success,

    error

  };

})();