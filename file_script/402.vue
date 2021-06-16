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
      _c("el-switch", {
        model: {
          value: _vm.value1,
          callback: function($$v) {
            _vm.value1 = $$v
          },
          expression: "value1"
        }
      }),
      _vm._v(" "),
      _c("el-switch", {
        attrs: { "active-color": "#13ce66", "inactive-color": "#ff4949" },
        model: {
          value: _vm.value2,
          callback: function($$v) {
            _vm.value2 = $$v
          },
          expression: "value2"
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
        value1: true,
        value2: true
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
      _c("el-switch", {
        attrs: {
          "active-text": "Pay by month",
          "inactive-text": "Pay by year"
        },
        model: {
          value: _vm.value1,
          callback: function($$v) {
            _vm.value1 = $$v
          },
          expression: "value1"
        }
      }),
      _vm._v(" "),
      _c("el-switch", {
        staticStyle: { display: "block" },
        attrs: {
          "active-color": "#13ce66",
          "inactive-color": "#ff4949",
          "active-text": "Pay by month",
          "inactive-text": "Pay by year"
        },
        model: {
          value: _vm.value2,
          callback: function($$v) {
            _vm.value2 = $$v
          },
          expression: "value2"
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
        value1: true,
        value2: true
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
      _c(
        "el-tooltip",
        { attrs: { content: "Switch value: " + _vm.value, placement: "top" } },
        [
          _c("el-switch", {
            attrs: {
              "active-color": "#13ce66",
              "inactive-color": "#ff4949",
              "active-value": "100",
              "inactive-value": "0"
            },
            model: {
              value: _vm.value,
              callback: function($$v) {
                _vm.value = $$v
              },
              expression: "value"
            }
          })
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true

  
    const democomponentExport = {
    data() {
      return {
        value: '100'
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
      _c("el-switch", {
        attrs: { disabled: "" },
        model: {
          value: _vm.value1,
          callback: function($$v) {
            _vm.value1 = $$v
          },
          expression: "value1"
        }
      }),
      _vm._v(" "),
      _c("el-switch", {
        attrs: { disabled: "" },
        model: {
          value: _vm.value2,
          callback: function($$v) {
            _vm.value2 = $$v
          },
          expression: "value2"
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
        value1: true,
        value2: false
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