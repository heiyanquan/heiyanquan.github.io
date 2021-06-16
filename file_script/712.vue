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
        _vm._v(
          "\n  Scrollez en bas de la page pour voir le bouton en bas à droite.\n  "
        ),
        _c("el-backtop", {
          attrs: { target: ".page-component__scroll .el-scrollbar__wrap" }
        })
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
        _vm._v(
          "\n  Scrollez en bas de la page pour voir le bouton en bas à droite.\n  "
        ),
        _c(
          "el-backtop",
          {
            attrs: {
              target: ".page-component__scroll .el-scrollbar__wrap",
              bottom: 100
            }
          },
          [
            _c(
              "div",
              {
                staticStyle: {
                  "{\n        height": "100%",
                  width: "100%",
                  "background-color": "#f2f5f6",
                  "box-shadow": "0 0 6px rgba(0,0,0, .12)",
                  "text-align": "center",
                  "line-height": "40px",
                  color: "#1989fa"
                }
              },
              [_vm._v("\n      UP\n    ")]
            )
          ]
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