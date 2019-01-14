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
    console.log(dirName);
    console.log(data);
    const res = [];
    if (dirName !== undefined) {
      console.log('entre');
      const dir = data[dirName];
      return dir.files;
    }
    console.log(data.files);
    const x = data.files.forEach((f) => {
      res.push(f);
    });
    console.log(x);

    let temp = data.subDirs;
    temp.forEach((e) => {
      if (e.files) {
        e.files.forEach((t) => {
          res.push(t);
        });
      }
      temp = e.subDirs;
    });
    console.log(res);
    return res;
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
