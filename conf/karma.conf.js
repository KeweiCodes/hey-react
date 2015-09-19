module.exports = function(config) {
  config.set({
    browsers: [
      'PhantomJS',
    ],
    files: [
      {
        pattern: 'tests.webpack.js',
        watched: false,
      },
    ],
    frameworks: [
      'jasmine',
    ],
    preprocessors: {
      'tests.webpack.js': [
        'webpack',
        'coverage'
      ],
    },
    reporters: [
      'nyan',
      'coverage',
    ],
    coverageReporter: {reporters: [
      {
          type: 'text-summary'
      },
      {
        type : 'html',
        dir : 'coverage/'
      }
    ]},
    webpack: require("./webpack." + process.env.TEST_ENV),
    webpackServer: {
      noInfo: true,
    },
  });
};
