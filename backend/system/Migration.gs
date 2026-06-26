/**
 * ============================================================
 * TaskMaster V2 Ultimate
 * File      : Migration.gs
 * Layer     : System
 * Version   : 2.0.0
 * ============================================================
 */

const MigrationManager = (() => {

  /**
   * Menjalankan seluruh migration database.
   */
  const run = () => {

    LoggerService.info(
      "MIGRATION",
      "Memulai proses migration..."
    );

    Object.keys(Constants.SHEETS).forEach(key => {

      const sheetName = Constants.SHEETS[key];

      migrateSheet(sheetName);

    });

    LoggerService.success(
      "MIGRATION",
      "Migration selesai."
    );

  };

  /**
   * Membuat sheet beserta header.
   * @param {string} sheetName
   */
  const migrateSheet = (sheetName) => {

    const sheet =
      DatabaseService.createSheet(sheetName);

    const headers =
      DatabaseService.getHeaders(sheetName);

    if (!headers.length) {

      LoggerService.warning(
        "MIGRATION",
        `Header ${sheetName} belum tersedia.`
      );

      return;

    }

    if (sheet.getLastRow() === 0) {

      sheet.appendRow(headers);

      sheet.setFrozenRows(1);

      sheet.autoResizeColumns(
        1,
        headers.length
      );

      LoggerService.success(
        "MIGRATION",
        `${sheetName} berhasil diinisialisasi.`
      );

    }

  };

  return {

    run,

    migrateSheet

  };

})();