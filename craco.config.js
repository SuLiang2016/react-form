/*
 * @moduleName: 配置文件
 * @Author: yunt.Su
 * @Date: 2022-06-26 22:35:43
 * @LastModifiedBy: yunt.Su
 * @LastEditTime: 2022-06-26 22:36:07
 */
/* craco.config.js */
// * 配置完成后记得重启下
const CracoLessPlugin = require("craco-less");

module.exports = {
  babel: {
    //用来支持装饰器
    plugins: [["@babel/plugin-proposal-decorators", { legacy: true }]],
  },
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: { javascriptEnabled: true },
        }
      },
    },
  ],
};
