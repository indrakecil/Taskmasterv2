function testUtils() {

  Logger.log("UUID:");
  Logger.log(Utils.uuid());

  Logger.log("Tanggal:");
  Logger.log(Utils.formatDate(new Date()));

  Logger.log("Random:");
  Logger.log(Utils.random(12));

  Logger.log("Email:");
  Logger.log(
    Utils.isEmail("fireman@gmail.com")
  );

  Logger.log("Clone:");

  const obj = {
    nama: "Fireman",
    level: 99
  };

  const clone = Utils.clone(obj);

  Logger.log(clone);

}