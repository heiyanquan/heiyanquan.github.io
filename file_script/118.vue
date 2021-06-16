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
      _c("i", { staticClass: "el-icon-edit" }),
      _vm._v(" "),
      _c("i", { staticClass: "el-icon-share" }),
      _vm._v(" "),
      _c("i", { staticClass: "el-icon-delete" }),
      _vm._v(" "),
      _c("el-button", { attrs: { type: "primary", icon: "el-icon-search" } }, [
        _vm._v("搜索")
      ])
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