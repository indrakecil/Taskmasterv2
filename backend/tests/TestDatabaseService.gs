function testDatabaseService() {

  Logger.log("Spreadsheet:");
  Logger.log(DatabaseService.getSpreadsheet().getName());

  Logger.log("Sheet:");
  Logger.log(
    DatabaseService.createSheet(
      "Testing"
    ).getName()
  );

}