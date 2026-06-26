/**
 * ============================================================
 * TaskMaster V2 Ultimate
 * File      : Cache.gs
 * Layer     : Core
 * Version   : 2.0.0
 * ============================================================
 */

const CacheManager = (() => {

  const cache = CacheService.getScriptCache();

  /**
   * Menyimpan data ke cache
   * @param {string} key
   * @param {*} value
   * @param {number} expiration
   */
  const set = (key, value, expiration = Config.CACHE.EXPIRE) => {

    cache.put(
      key,
      JSON.stringify(value),
      expiration
    );

    LoggerService.info(
      "CACHE",
      `Cache disimpan : ${key}`
    );

  };

  /**
   * Mengambil data dari cache
   * @param {string} key
   * @returns {*|null}
   */
  const get = (key) => {

    const result = cache.get(key);

    if (!result) {

      LoggerService.warning(
        "CACHE",
        `Cache miss : ${key}`
      );

      return null;

    }

    LoggerService.success(
      "CACHE",
      `Cache hit : ${key}`
    );

    return JSON.parse(result);

  };

  /**
   * Menghapus cache tertentu
   */
  const remove = (key) => {

    cache.remove(key);

    LoggerService.info(
      "CACHE",
      `Cache dihapus : ${key}`
    );

  };

  /**
   * Menghapus semua cache aplikasi
   */
  const clear = () => {

    cache.removeAll([
      Constants.CACHE_KEY.DASHBOARD,
      Constants.CACHE_KEY.SETTINGS,
      Constants.CACHE_KEY.USERS
    ]);

    LoggerService.warning(
      "CACHE",
      "Seluruh cache dibersihkan."
    );

  };

  return {

    set,

    get,

    remove,

    clear

  };

})();