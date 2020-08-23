const path = require('path');

exports.onCreateWebpackConfig = (args) => {
  args.actions.setWebpackConfig({
    resolve: {
      modules: [path.resolve(__dirname, '../src'), 'node_modules'],
      alias: {
        'star-ui/lib': path.resolve(__dirname, '../components/'),
        'star-ui/esm': path.resolve(__dirname, '../components/'),
        'star-ui': path.resolve(__dirname, '../components/'),
      },
    },
  });
};
