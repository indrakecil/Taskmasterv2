/**
 * ============================================================
 * TaskMaster V2 Ultimate
 * File      : ErrorHandler.gs
 * Layer     : Core
 * Version   : 2.0.0
 * ============================================================
 */

const ErrorHandler = (() => {

  /**
   * Menangani error aplikasi.
   *
   * @param {string} module Nama module/fungsi
   * @param {Error|string} error Error yang terjadi
   * @returns {Object}
   */
  const handle = (module, error) => {

    LoggerService.error(module, error);

    return {
      success: false,
      module,
      message: error.message || String(error),
      stack: error.stack || null,
      timestamp: new Date()
    };

  };

  /**
   * Throw error dengan format standar.
   *
   * @param {string} message
   */
  const throwError = (message) => {

    throw new Error(message);

  };

  return {

    handle,

    throwError

  };

})();