// webpack.config.js
const Dotenv = require("dotenv").config();

module.exports = {
  plugins: [
    new Dotenv(),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "../src/index.html"),
    }),
  ],
};
