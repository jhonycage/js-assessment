asyncAnswers = {
  /**
   * Asynchronously returns a value via a promise. Example:
   * async('anyValue').then((result) => { return result === 'anyValue';});
   * 
   * @param value - Any value
   * @returns {then: function} A promise like object containing a then property.
   */
  async: function async(value) {
    return Promise.resolve(value);
  },

  /**
   * Creates a promise that resolves with the data returned from an ajax call to the url url.
   * You may use jquery, XMLHttpRequest, or fetch.
   * https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest
   * https://api.jquery.com/jQuery.ajax/
   * https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API   * 
   * 
   * @param {String} url - a valid url
   * @returns {then: function} A promise like object containing a then property.
   */
  manipulateRemoteData: function manipulateRemoteData(url) {
    return new Promise((resolve, reject) => {
      const rq = new XMLHttpRequest();
      rq.open('GET', url);
      rq.onload = () => { 
        if (rq.status === 200) {
          const parsedObj = JSON.parse(rq.response);
          const people = parsedObj.people;
          let res = [];
          res = people.map((p) => p.name);
          resolve(res);
        } else {
          reject('No se pudo obtener la data.');
        }
      };
      rq.onerror = () => {
        reject(Error('Error de conexión.'));
      };
      rq.send();
    });
  },
};
