<script>
      export default {
        name: 'component-doc',
        components: {
          "element-demo0": (function() {
    
    var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c(
        "el-breadcrumb",
        { attrs: { separator: "/" } },
        [
          _c("el-breadcrumb-item", { attrs: { to: { path: "/" } } }, [
            _vm._v("homepage")
          ]),
          _vm._v(" "),
          _c("el-breadcrumb-item", [
            _c("a", { attrs: { href: "/" } }, [_vm._v("promotion management")])
          ]),
          _vm._v(" "),
          _c("el-breadcrumb-item", [_vm._v("promotion list")]),
          _vm._v(" "),
          _c("el-breadcrumb-item", [_vm._v("promotion detail")])
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true

  
    const democomponentExport = {}
    return {
      render,
      staticRenderFns,
      ...democomponentExport
    }
  })(),"element-demo1": (function() {
    
    var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c(
        "el-breadcrumb",
        { attrs: { "separator-class": "el-icon-arrow-right" } },
        [
          _c("el-breadcrumb-item", { attrs: { to: { path: "/" } } }, [
            _vm._v("homepage")
          ]),
          _vm._v(" "),
          _c("el-breadcrumb-item", [_vm._v("promotion management")]),
          _vm._v(" "),
          _c("el-breadcrumb-item", [_vm._v("promotion list")]),
          _vm._v(" "),
          _c("el-breadcrumb-item", [_vm._v("promotion detail")])
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true

  
    const democomponentExport = {}
    return {
      render,
      staticRenderFns,
      ...democomponentExport
    }
  })(),
        }
      }
    </script>