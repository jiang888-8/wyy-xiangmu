// postcss.config.js
module.exports = {
  plugins: {
    'postcss-pxtorem': {
      rootValue: 37.5, // 转换多少px为1rem
      propList: ['*'] // 将什么属性转为rem
    }
  }
}
