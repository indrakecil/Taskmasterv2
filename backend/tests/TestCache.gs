function testCache() {

  CacheManager.set("TEST", {
    nama: "Fireman",
    versi: "2.0"
  });

  const data = CacheManager.get("TEST");

  Logger.log(data);

  CacheManager.remove("TEST");

}