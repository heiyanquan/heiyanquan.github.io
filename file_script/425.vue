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
      [
        _c(
          "el-popconfirm",
          { attrs: { title: "Are you sure to delete this?" } },
          [
            _c(
              "el-button",
              { attrs: { slot: "reference" }, slot: "reference" },
              [_vm._v("Delete")]
            )
          ],
          1
        )
      ]
    ],
    2
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
      [
        _c(
          "el-popconfirm",
          {
            attrs: {
              "confirm-button-text": "OK",
              "cancel-button-text": "No, Thanks",
              icon: "el-icon-info",
              "icon-color": "red",
              title: "Are you sure to delete this?"
            }
          },
          [
            _c(
              "el-button",
              { attrs: { slot: "reference" }, slot: "reference" },
              [_vm._v("Delete")]
            )
          ],
          1
        )
      ]
    ],
    2
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