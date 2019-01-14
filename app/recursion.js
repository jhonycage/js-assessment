function appendFiles(data, filesa) {
  data.files.forEach((f) => {
    filesa.push(f);
  });
  data.subDirs.forEach((e) => {
    if (e.subDirs != []) {
      appendFiles(e, filesa);
    }
  });
  return filesa;
}
var res = []
function searchDir(data, dirName) {
  if (res.length > 0) {
    return res
  }
  if (data.dirName === dirName) {
    res = appendFiles(data, []);
    data.subDirs = [];
    return res;
  } else {
    data.subDirs.forEach((s) => {
      if (s.subDirs != []) {
        const result = searchDir(s, dirName);
        return result;
      }
    });
  }
  return res;
}

recursionAnswers = {
  /**
   * List the files in a given directory, of a filesystem described by data.
   * Data is an object that looks like this:
   * {
      dirName: 'app',
      files: ['index.html', 'page.html'],
      subDirs: [{...}]
      }
   *
   * Where ... is the same type of object
   * 
   * @param {fileSystemObject} data - a file system object as described above
   * @param {String} dirName - a directory name the files are desired to be listed from.
   * Note: This parameter is optional. If it is not provided, list ALL files.
   * 
   * @returns {Number[]} The files under the directory dirName, including subdiretories.
   */
  listFiles: function listFiles(data, dirName) {
    return dirName !== undefined ? searchDir(data, dirName) : appendFiles(data, []);
  },
  /**
   * Determines the fibonacci number at position n.
   * https://en.wikipedia.org/wiki/Fibonacci_number
   * 
   * The first few fibonacci numbers are: 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...
   * 
   * @param {Number} n - the index of the fibonacci number desired
   * @returns {Number} The nth fibonacci number
   */
  fibonacci: function fibonacci(n) {
    let x = 0;
    let y = 1;
    if (n <= 2) {
      return n - 1;
    }
    for (let i = 0; i < n; i += 1) {
      const tempY = y;
      y = tempY + x;
      x = tempY;
    }
    return x;
  },
};
