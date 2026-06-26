/**
 * ============================================================
 * TaskMaster V2 Ultimate
 * File      : Utils.gs
 * Layer     : Core
 * Version   : 2.0.0
 * ============================================================
 */

const Utils = (() => {

  /**
   * Generate UUID
   * @returns {string}
   */
  const uuid = () => Utilities.getUuid();

  /**
   * Timestamp sekarang
   * @returns {Date}
   */
  const now = () => new Date();

  /**
   * Format Date
   * @param {Date} date
   * @param {string} pattern
   * @returns {string}
   */
  const formatDate = (
    date,
    pattern = Config.APP.DATETIME_FORMAT
  ) => {

    return Utilities.formatDate(
      date,
      Config.DATABASE.TIMEZONE,
      pattern
    );

  };

  /**
   * Deep Copy Object
   * @param {*} obj
   * @returns {*}
   */
  const clone = (obj) => {

    return JSON.parse(JSON.stringify(obj));

  };

  /**
   * Cek Object kosong
   * @param {Object} obj
   * @returns {boolean}
   */
  const isEmpty = (obj) => {

    return Object.keys(obj).length === 0;

  };

  /**
   * Validasi Email
   * @param {string} email
   * @returns {boolean}
   */
  const isEmail = (email) => {

    return Constants.REGEX.EMAIL.test(email);

  };

  /**
   * Generate Random String
   * @param {number} length
   * @returns {string}
   */
  const random = (length = 8) => {

    const chars =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    let result = "";

    for (let i = 0; i < length; i++) {

      result += chars.charAt(
        Math.floor(Math.random() * chars.length)
      );

    }

    return result;

  };

  /**
   * Sleep
   * @param {number} ms
   */
  const sleep = (ms) => {

    Utilities.sleep(ms);

  };

  /**
   * Escape HTML
   * @param {string} text
   * @returns {string}
   */
  const escapeHtml = (text) => {

    return String(text)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");

  };

  /**
   * Nilai kosong?
   * @param {*} value
   * @returns {boolean}
   */
  const isBlank = (value) => {

    return value === null ||
      value === undefined ||
      value === "";

  };

  return {

    uuid,

    now,

    formatDate,

    clone,

    isEmpty,

    isEmail,

    random,

    sleep,

    escapeHtml,

    isBlank

  };

})();