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
        _c("el-input-number", {
          attrs: { min: 1, max: 10, label: "描述文字" },
          on: { change: _vm.handleChange },
          model: {
            value: _vm.num,
            callback: function($$v) {
              _vm.num = $$v
            },
            expression: "num"
          }
        })
      ]
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true

  
    const democomponentExport = {
    data() {
      return {
        num: 1
      };
    },
    methods: {
      handleChange(value) {
        console.log(value);
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
      [
        _c("el-input-number", {
          attrs: { disabled: true },
          model: {
            value: _vm.num,
            callback: function($$v) {
              _vm.num = $$v
            },
            expression: "num"
          }
        })
      ]
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true

  
    const democomponentExport = {
    data() {
      return {
        num: 1
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
      [
        _c("el-input-number", {
          attrs: { step: 2 },
          model: {
            value: _vm.num,
            callback: function($$v) {
              _vm.num = $$v
            },
            expression: "num"
          }
        })
      ]
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true

  
    const democomponentExport = {
    data() {
      return {
        num: 5
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
      [
        _c("el-input-number", {
          attrs: { step: 2, "step-strictly": "" },
          model: {
            value: _vm.num,
            callback: function($$v) {
              _vm.num = $$v
            },
            expression: "num"
          }
        })
      ]
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true

  
    const democomponentExport = {
    data() {
      return {
        num: 2
      }
    }
  };
    return {
      render,
      staticRenderFns,
      ...democomponentExport
    }
  })(),"element-demo4": (function() {
    
    var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      [
        _c("el-input-number", {
          attrs: { precision: 2, step: 0.1, max: 10 },
          model: {
            value: _vm.num,
            callback: function($$v) {
              _vm.num = $$v
            },
            expression: "num"
          }
        })
      ]
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true

  
    const democomponentExport = {
    data() {
      return {
        num: 1
      }
    }
  };
    return {
      render,
      staticRenderFns,
      ...democomponentExport
    }
  })(),"element-demo5": (function() {
    
    var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      [
        _c("el-input-number", {
          model: {
            value: _vm.num1,
            callback: function($$v) {
              _vm.num1 = $$v
            },
            expression: "num1"
          }
        }),
        _vm._v(" "),
        _c("el-input-number", {
          attrs: { size: "medium" },
          model: {
            value: _vm.num2,
            callback: function($$v) {
              _vm.num2 = $$v
            },
            expression: "num2"
          }
        }),
        _vm._v(" "),
        _c("el-input-number", {
          attrs: { size: "small" },
          model: {
            value: _vm.num3,
            callback: function($$v) {
              _vm.num3 = $$v
            },
            expression: "num3"
          }
        }),
        _vm._v(" "),
        _c("el-input-number", {
          attrs: { size: "mini" },
          model: {
            value: _vm.num4,
            callback: function($$v) {
              _vm.num4 = $$v
            },
            expression: "num4"
          }
        })
      ]
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true

  
    const democomponentExport = {
    data() {
      return {
        num1: 1,
        num2: 1,
        num3: 1,
        num4: 1
      }
    }
  };
    return {
      render,
      staticRenderFns,
      ...democomponentExport
    }
  })(),"element-demo6": (function() {
    
    var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      [
        _c("el-input-number", {
          attrs: { "controls-position": "right", min: 1, max: 10 },
          on: { change: _vm.handleChange },
          model: {
            value: _vm.num,
            callback: function($$v) {
              _vm.num = $$v
            },
            expression: "num"
          }
        })
      ]
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true

  
    const democomponentExport = {
    data() {
      return {
        num: 1
      };
    },
    methods: {
      handleChange(value) {
        console.log(value);
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