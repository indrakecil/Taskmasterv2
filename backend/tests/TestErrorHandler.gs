function testErrorHandler() {

  try {

    ErrorHandler.throwError("Ini adalah simulasi error.");

  } catch (e) {

    const result = ErrorHandler.handle("TEST_ERROR", e);

    Logger.log(result);

  }

}