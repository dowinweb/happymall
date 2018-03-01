/**
 * @Author: dongwei
 * @Date:   2018-03-01 22:06:31
 * @Last modified by:   dongwei
 * @Last modified time: 2018-03-01 22:23:16
 */
require('./index.css')
require('page/common/nav-simple/index.js')

var _mm = require('util/mm.js')

$(function() {
  var type = _mm.getUrlParam('type') || 'default'
  var $element = $('.' + type + '-success')
  $element.show()
})
