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
      _c("el-time-select", {
        attrs: {
          "picker-options": {
            start: "08:30",
            step: "00:15",
            end: "18:30"
          },
          placeholder: "Select time"
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
}
var staticRenderFns = []
render._withStripped = true

  
    const democomponentExport = {
    data() {
      return {
        value: ''
      };
    }
  }
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
        _c("el-time-picker", {
          attrs: {
            "picker-options": {
              selectableRange: "18:30:00 - 20:30:00"
            },
            placeholder: "Arbitrary time"
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
        _c("el-time-picker", {
          attrs: {
            "arrow-control": "",
            "picker-options": {
              selectableRange: "18:30:00 - 20:30:00"
            },
            placeholder: "Arbitrary time"
          },
          model: {
            value: _vm.value2,
            callback: function($$v) {
              _vm.value2 = $$v
            },
            expression: "value2"
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
        value1: new Date(2016, 9, 10, 18, 40),
        value2: new Date(2016, 9, 10, 18, 40)
      };
    }
  }
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
        _c("el-time-select", {
          attrs: {
            placeholder: "Start time",
            "picker-options": {
              start: "08:30",
              step: "00:15",
              end: "18:30"
            }
          },
          model: {
            value: _vm.startTime,
            callback: function($$v) {
              _vm.startTime = $$v
            },
            expression: "startTime"
          }
        }),
        _vm._v(" "),
        _c("el-time-select", {
          attrs: {
            placeholder: "End time",
            "picker-options": {
              start: "08:30",
              step: "00:15",
              end: "18:30",
              minTime: _vm.startTime
            }
          },
          model: {
            value: _vm.endTime,
            callback: function($$v) {
              _vm.endTime = $$v
            },
            expression: "endTime"
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
        startTime: '',
        endTime: ''
      };
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
      [
        _c("el-time-picker", {
          attrs: {
            "is-range": "",
            "range-separator": "To",
            "start-placeholder": "Start time",
            "end-placeholder": "End time"
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
        _c("el-time-picker", {
          attrs: {
            "is-range": "",
            "arrow-control": "",
            "range-separator": "To",
            "start-placeholder": "Start time",
            "end-placeholder": "End time"
          },
          model: {
            value: _vm.value2,
            callback: function($$v) {
              _vm.value2 = $$v
            },
            expression: "value2"
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
        value1: [new Date(2016, 9, 10, 8, 40), new Date(2016, 9, 10, 9, 40)],
        value2: [new Date(2016, 9, 10, 8, 40), new Date(2016, 9, 10, 9, 40)]
      };
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