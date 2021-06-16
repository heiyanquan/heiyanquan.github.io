<script>
      export default {
        name: 'component-doc',
        components: {
          "element-demo0": (function() {
    
    var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c(
      "div",
      { staticClass: "block" },
      [
        _c("span", { staticClass: "demonstration" }, [
          _vm._v("Especifica valor por defecto")
        ]),
        _vm._v(" "),
        _c("el-color-picker", {
          model: {
            value: _vm.color1,
            callback: function($$v) {
              _vm.color1 = $$v
            },
            expression: "color1"
          }
        })
      ],
      1
    ),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "block" },
      [
        _c("span", { staticClass: "demonstration" }, [
          _vm._v("No especifica valor por defecto")
        ]),
        _vm._v(" "),
        _c("el-color-picker", {
          model: {
            value: _vm.color2,
            callback: function($$v) {
              _vm.color2 = $$v
            },
            expression: "color2"
          }
        })
      ],
      1
    )
  ])
}
var staticRenderFns = []
render._withStripped = true

  
    const democomponentExport = {
    data() {
      return {
        color1: '#409EFF',
        color2: null
      }
    }
  };
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
      _c("el-color-picker", {
        attrs: { "show-alpha": "" },
        model: {
          value: _vm.color,
          callback: function($$v) {
            _vm.color = $$v
          },
          expression: "color"
        }
      })
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true

  
    const democomponentExport = {
    data() {
      return {
        color: 'rgba(19, 206, 102, 0.8)'
      }
    }
  };
    return {
      render,
      staticRenderFns,
      ...democomponentExport
    }
  })(),"element-demo2": (function() {
    
    var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c("el-color-picker", {
        attrs: { "show-alpha": "", predefine: _vm.predefineColors },
        model: {
          value: _vm.color,
          callback: function($$v) {
            _vm.color = $$v
          },
          expression: "color"
        }
      })
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true

  
    const democomponentExport = {
    data() {
      return {
        color: 'rgba(255, 69, 0, 0.68)',
        predefineColors: [
          '#ff4500',
          '#ff8c00',
          '#ffd700',
          '#90ee90',
          '#00ced1',
          '#1e90ff',
          '#c71585',
          'rgba(255, 69, 0, 0.68)',
          'rgb(255, 120, 0)',
          'hsv(51, 100, 98)',
          'hsva(120, 40, 94, 0.5)',
          'hsl(181, 100%, 37%)',
          'hsla(209, 100%, 56%, 0.73)',
          '#c7158577'
        ]
      }
    }
  };
    return {
      render,
      staticRenderFns,
      ...democomponentExport
    }
  })(),"element-demo3": (function() {
    
    var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c("el-color-picker", {
        model: {
          value: _vm.color,
          callback: function($$v) {
            _vm.color = $$v
          },
          expression: "color"
        }
      }),
      _vm._v(" "),
      _c("el-color-picker", {
        attrs: { size: "medium" },
        model: {
          value: _vm.color,
          callback: function($$v) {
            _vm.color = $$v
          },
          expression: "color"
        }
      }),
      _vm._v(" "),
      _c("el-color-picker", {
        attrs: { size: "small" },
        model: {
          value: _vm.color,
          callback: function($$v) {
            _vm.color = $$v
          },
          expression: "color"
        }
      }),
      _vm._v(" "),
      _c("el-color-picker", {
        attrs: { size: "mini" },
        model: {
          value: _vm.color,
          callback: function($$v) {
            _vm.color = $$v
          },
          expression: "color"
        }
      })
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true

  
    const democomponentExport = {
    data() {
      return {
        color: '#409EFF'
      }
    }
  };
    return {
      render,
      staticRenderFns,
      ...democomponentExport
    }
  })(),
        }
      }
    </script>