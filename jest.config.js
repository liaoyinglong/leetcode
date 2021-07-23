module.exports = {
  transform: {
    "^.+\\.tsx?$": "./config/esbuild-jest.js",
  },
  testPathIgnorePatterns: ["/dist/", "/example/"],
};
