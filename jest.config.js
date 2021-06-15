module.exports = {
  transform: {
    '^.+\\.tsx?$': 'esbuild-jest',
  },
  testPathIgnorePatterns: ['/dist/', '/example/'],
};
