/**
 * ============================================================
 * TaskMaster V2 Ultimate
 * File      : Install.gs
 * Layer     : System
 * Version   : 2.0.0
 * ============================================================
 */

const InstallManager = (() => {

  /**
   * Install TaskMaster
   */
  const initialize = () => {

    LoggerService.info(
      "INSTALL",
      "Memulai instalasi TaskMaster..."
    );

    try {

      MigrationManager.run();

      SpreadsheetApp.flush();

      LoggerService.success(
        "INSTALL",
        "Instalasi berhasil."
      );

      UI.Alert(
        "✅ TaskMaster berhasil diinisialisasi."
      );

    } catch (err) {

      LoggerService.error(
        "INSTALL",
        err.message
      );

      UI.Alert(
        "❌ Instalasi gagal.\n\n" + err.message
      );

    }

  };

  /**
   * Reset database
   */
  const reset = () => {

    const ui = SpreadsheetApp.getUi();

    const result = ui.alert(
      "Reset Database",
      "Semua data akan dihapus.\nLanjutkan?",
      ui.ButtonSet.YES_NO
    );

    if (result !== ui.Button.YES) {
      return;
    }

    Object.keys(Constants.SHEETS).forEach(key => {

      const sheetName = Constants.SHEETS[key];

      const sheet =
        DatabaseService.getSheet(sheetName);

      sheet.clear();

    });

    MigrationManager.run();

    LoggerService.success(
      "INSTALL",
      "Database berhasil direset."
    );

    ui.alert("✅ Database berhasil direset.");

  };

  /**
   * Seed sample data
   */
  const seed = () => {

    LoggerService.info(
      "INSTALL",
      "Seed sample data belum tersedia."
    );

    SpreadsheetApp.getUi().alert(
      "Fitur seed akan dibuat pada Sprint berikutnya."
    );

  };

  return {

    initialize,

    reset,

    seed

  };

})();