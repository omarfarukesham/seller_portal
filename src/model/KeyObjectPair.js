/**
 * data = {
 *    "EN" : "iPhone 15"
 *    "BN" : "iPhone 15"
 *  }
 *
 * data keys - can be countryCodes, languageCodes, currencyCodes, marketPlaceCodes
 * innerClass - can be object or primitive value.
 */

class KeyObjectPair {
  constructor(data, InnerClass) {
    let keys = Object.keys(data);

    for (let i = 0; i < keys.length; i++) {
      if (InnerClass) this[keys[i]] = new InnerClass(data[keys[i]]);
      else this[keys[i]] = data[keys[i]];
    }
  }
}

export default KeyObjectPair;
