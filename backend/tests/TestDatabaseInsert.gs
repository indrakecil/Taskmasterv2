function testDatabaseInsert() {

  DatabaseService.insert(
    Constants.SHEETS.TASKS,
    {
      id: Utilities.getUuid(),
      workspaceId: "WS001",
      projectId: "PR001",
      title: "Belajar DatabaseService",
      description: "Testing insert",
      status: Constants.STATUS.TODO,
      priority: Constants.PRIORITY.MEDIUM,
      assignee: "Fireman",
      startDate: new Date(),
      dueDate: new Date(),
      createdAt: new Date(),
      updatedAt: new Date()
    }
  );

}