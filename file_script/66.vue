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
      _c("el-progress", { attrs: { percentage: 50 } }),
      _vm._v(" "),
      _c("el-progress", { attrs: { percentage: 100, format: _vm.format } }),
      _vm._v(" "),
      _c("el-progress", { attrs: { percentage: 100, status: "success" } }),
      _vm._v(" "),
      _c("el-progress", { attrs: { percentage: 100, status: "warning" } }),
      _vm._v(" "),
      _c("el-progress", { attrs: { percentage: 50, status: "exception" } })
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true

  
    const democomponentExport = {
    methods: {
      format(percentage) {
        return percentage === 100 ? '满' : `${percentage}%`;
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
      _c("el-progress", {
        attrs: { "text-inside": true, "stroke-width": 26, percentage: 70 }
      }),
      _vm._v(" "),
      _c("el-progress", {
        attrs: {
          "text-inside": true,
          "stroke-width": 24,
          percentage: 100,
          status: "success"
        }
      }),
      _vm._v(" "),
      _c("el-progress", {
        attrs: {
          "text-inside": true,
          "stroke-width": 22,
          percentage: 80,
          status: "warning"
        }
      }),
      _vm._v(" "),
      _c("el-progress", {
        attrs: {
          "text-inside": true,
          "stroke-width": 20,
          percentage: 50,
          status: "exception"
        }
      })
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
  })(),"element-demo2": (function() {
    
    var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c("el-progress", {
        attrs: { percentage: _vm.percentage, color: _vm.customColor }
      }),
      _vm._v(" "),
      _c("el-progress", {
        attrs: { percentage: _vm.percentage, color: _vm.customColorMethod }
      }),
      _vm._v(" "),
      _c("el-progress", {
        attrs: { percentage: _vm.percentage, color: _vm.customColors }
      }),
      _vm._v(" "),
      _c(
        "div",
        [
          _c(
            "el-button-group",
            [
              _c("el-button", {
                attrs: { icon: "el-icon-minus" },
                on: { click: _vm.decrease }
              }),
              _vm._v(" "),
              _c("el-button", {
                attrs: { icon: "el-icon-plus" },
                on: { click: _vm.increase }
              })
            ],
            1
          )
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
        percentage: 20,
        customColor: '#409eff',
        customColors: [
          {color: '#f56c6c', percentage: 20},
          {color: '#e6a23c', percentage: 40},
          {color: '#5cb87a', percentage: 60},
          {color: '#1989fa', percentage: 80},
          {color: '#6f7ad3', percentage: 100}
        ]
      };
    },
    methods: {
      customColorMethod(percentage) {
        if (percentage < 30) {
          return '#909399';
        } else if (percentage < 70) {
          return '#e6a23c';
        } else {
          return '#67c23a';
        }
      },
      increase() {
        this.percentage += 10;
        if (this.percentage > 100) {
          this.percentage = 100;
        }
      },
      decrease() {
        this.percentage -= 10;
        if (this.percentage < 0) {
          this.percentage = 0;
        }
      }
    }
  }
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
      _c("el-progress", { attrs: { type: "circle", percentage: 0 } }),
      _vm._v(" "),
      _c("el-progress", { attrs: { type: "circle", percentage: 25 } }),
      _vm._v(" "),
      _c("el-progress", {
        attrs: { type: "circle", percentage: 100, status: "success" }
      }),
      _vm._v(" "),
      _c("el-progress", {
        attrs: { type: "circle", percentage: 70, status: "warning" }
      }),
      _vm._v(" "),
      _c("el-progress", {
        attrs: { type: "circle", percentage: 50, status: "exception" }
      })
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
  })(),"element-demo4": (function() {
    
    var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c("el-progress", {
        attrs: {
          type: "dashboard",
          percentage: _vm.percentage,
          color: _vm.colors
        }
      }),
      _vm._v(" "),
      _c(
        "div",
        [
          _c(
            "el-button-group",
            [
              _c("el-button", {
                attrs: { icon: "el-icon-minus" },
                on: { click: _vm.decrease }
              }),
              _vm._v(" "),
              _c("el-button", {
                attrs: { icon: "el-icon-plus" },
                on: { click: _vm.increase }
              })
            ],
            1
          )
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
        percentage: 10,
        colors: [
          {color: '#f56c6c', percentage: 20},
          {color: '#e6a23c', percentage: 40},
          {color: '#5cb87a', percentage: 60},
          {color: '#1989fa', percentage: 80},
          {color: '#6f7ad3', percentage: 100}
        ]
      };
    },
    methods: {
      increase() {
        this.percentage += 10;
        if (this.percentage > 100) {
          this.percentage = 100;
        }
      },
      decrease() {
        this.percentage -= 10;
        if (this.percentage < 0) {
          this.percentage = 0;
        }
      }
    }
  }
    return {
      render,
      staticRenderFns,
      ...democomponentExport
    }
  })(),
        }
      }
    </script>