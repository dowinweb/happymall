/**
 * @Author: dongwei
 * @Date:   2018-02-20 22:52:21
 * @Last modified by:   dongwei
 * @Last modified time: 2018-02-28 23:06:55
 */
require('page/common/nav/index.js')
require('page/common/header/index.js')
var navSide = require('page/common/nav-side/index.js')
console.log(111, navSide)
var _mm = require('util/mm.js')

navSide.init({
  name: 'user-center'
})

// _mm.request({
//   url: '/product/list.do?keyword=1',
//   success: function(res) {
//     console.log(res)
//   },
//   error: function(errMsg) {
//     console.log(errMsg)
//   }
// })
// console.log(_mm.getUrlParam('test'));
