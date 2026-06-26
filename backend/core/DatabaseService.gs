/**
 * ============================================================
 * TaskMaster V2 Ultimate
 * File      : DatabaseService.gs
 * Layer     : Core
 * Version   : 2.0.0
 * ============================================================
 */

const DatabaseService = (() => {

  /**
   * Mengambil spreadsheet aktif.
   * @returns {Spreadsheet}
   */
  const getSpreadsheet = () => {
    return SpreadsheetApp.getActiveSpreadsheet();
  };

  /**
   * Mengambil sheet berdasarkan nama.
   * @param {string} sheetName
   * @returns {GoogleAppsScript.Spreadsheet.Sheet}
   */
  const getSheet = (sheetName) => {

    const sheet = getSpreadsheet().getSheetByName(sheetName);

    if (!sheet) {
      throw new Error(`Sheet "${sheetName}" tidak ditemukan.`);
    }

    return sheet;

  };

  /**
   * Membuat sheet baru jika belum ada.
   * @param {string} sheetName
   * @returns {GoogleAppsScript.Spreadsheet.Sheet}
   */
  const createSheet = (sheetName) => {

    const ss = getSpreadsheet();

    let sheet = ss.getSheetByName(sheetName);

    if (!sheet) {

      sheet = ss.insertSheet(sheetName);

      LoggerService.success(
        "DATABASE",
        `Sheet "${sheetName}" berhasil dibuat.`
      );

    }

    return sheet;

  };

  /**
   * Mengambil header berdasarkan Constants.
   * @param {string} sheetName
   * @returns {Array}
   */
  const getHeaders = (sheetName) => {

    return Constants.HEADER[sheetName] || [];

  };

  /**
   * Mengambil seluruh data sheet.
   * @param {string} sheetName
   * @returns {Array<Object>}
   */
  const getAll = (sheetName) => {

    const sheet = getSheet(sheetName);

    const values = sheet.getDataRange().getValues();

    if (values.length <= 1) return [];

    const headers = values.shift();

    return values.map(row => {

      const obj = {};

      headers.forEach((header, index) => {

        obj[header] = row[index];

      });

      return obj;

    });

  };

  /**
   * Insert satu row.
   * @param {string} sheetName
   * @param {Object} data
   */
  const insert = (sheetName, data) => {

    const sheet = getSheet(sheetName);

    const headers = getHeaders(sheetName);

    const row = headers.map(key => {

      return data[key] ?? "";

    });

    sheet.appendRow(row);

    LoggerService.success(
      "DATABASE",
      `Insert data ke ${sheetName}`
    );

  };

  return {

    getSpreadsheet,

    getSheet,

    createSheet,

    getHeaders,

    getAll,

    insert

  };

})();