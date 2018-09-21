module.exports = function (wallaby) {
  return {
    ignore: true,
    files: [
      "tsconfig.json",
      "package.json",
      "src/**/*.ts?(x)",
      "!**/*.+(test|spec).+(t|j)s?(x)",
    ],
    tests: [
      "src/**/*.+(test|spec).+(t|j)s?(x)"
    ],
    env: {
      type: "node",
      runner: "/Users/zach/.nvm/versions/node/v10.9.0/bin/node",
    },
    compilers: {
      '**/*.(j|t)s?(x)': wallaby.compilers.babel({
          babelrc: true,
      })
    },
    testFramework: "jest",
    debug: true
  };
};
