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
          "div",
          { staticClass: "block" },
          [
            _c("span", { staticClass: "demonstration" }, [_vm._v("Default")]),
            _vm._v(" "),
            _c("el-date-picker", {
              attrs: { type: "date", placeholder: "Pick a day" },
              model: {
                value: _vm.value1,
                callback: function($$v) {
                  _vm.value1 = $$v
                },
                expression: "value1"
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
              _vm._v("Picker with quick options")
            ]),
            _vm._v(" "),
            _c("el-date-picker", {
              attrs: {
                type: "date",
                placeholder: "Pick a day",
                "picker-options": _vm.pickerOptions
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
        pickerOptions: {
          disabledDate(time) {
            return time.getTime() > Date.now();
          },
          shortcuts: [{
            text: 'Today',
            onClick(picker) {
              picker.$emit('pick', new Date());
            }
          }, {
            text: 'Yesterday',
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24);
              picker.$emit('pick', date);
            }
          }, {
            text: 'A week ago',
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit('pick', date);
            }
          }]
        },
        value1: '',
        value2: '',
      };
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
  return _c("div", [
    _c("div", { staticClass: "container" }, [
      _c(
        "div",
        { staticClass: "block" },
        [
          _c("span", { staticClass: "demonstration" }, [_vm._v("Week")]),
          _vm._v(" "),
          _c("el-date-picker", {
            attrs: {
              type: "week",
              format: "Week WW",
              placeholder: "Pick a week"
            },
            model: {
              value: _vm.value1,
              callback: function($$v) {
                _vm.value1 = $$v
              },
              expression: "value1"
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
          _c("span", { staticClass: "demonstration" }, [_vm._v("Month")]),
          _vm._v(" "),
          _c("el-date-picker", {
            attrs: { type: "month", placeholder: "Pick a month" },
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
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "container" }, [
      _c(
        "div",
        { staticClass: "block" },
        [
          _c("span", { staticClass: "demonstration" }, [_vm._v("Year")]),
          _vm._v(" "),
          _c("el-date-picker", {
            attrs: { type: "year", placeholder: "Pick a year" },
            model: {
              value: _vm.value3,
              callback: function($$v) {
                _vm.value3 = $$v
              },
              expression: "value3"
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
          _c("span", { staticClass: "demonstration" }, [_vm._v("Dates")]),
          _vm._v(" "),
          _c("el-date-picker", {
            attrs: { type: "dates", placeholder: "Pick one or more dates" },
            model: {
              value: _vm.value4,
              callback: function($$v) {
                _vm.value4 = $$v
              },
              expression: "value4"
            }
          })
        ],
        1
      )
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true

  
    const democomponentExport = {
    data() {
      return {
        value1: '',
        value2: '',
        value3: '',
        value4: ''
      };
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
        _c(
          "div",
          { staticClass: "block" },
          [
            _c("span", { staticClass: "demonstration" }, [_vm._v("Default")]),
            _vm._v(" "),
            _c("el-date-picker", {
              attrs: {
                type: "daterange",
                "range-separator": "To",
                "start-placeholder": "Start date",
                "end-placeholder": "End date"
              },
              model: {
                value: _vm.value1,
                callback: function($$v) {
                  _vm.value1 = $$v
                },
                expression: "value1"
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
              _vm._v("With quick options")
            ]),
            _vm._v(" "),
            _c("el-date-picker", {
              attrs: {
                type: "daterange",
                align: "right",
                "unlink-panels": "",
                "range-separator": "To",
                "start-placeholder": "Start date",
                "end-placeholder": "End date",
                "picker-options": _vm.pickerOptions
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
        pickerOptions: {
          shortcuts: [{
            text: 'Last week',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit('pick', [start, end]);
            }
          }, {
            text: 'Last month',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
              picker.$emit('pick', [start, end]);
            }
          }, {
            text: 'Last 3 months',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
              picker.$emit('pick', [start, end]);
            }
          }]
        },
        value1: '',
        value2: ''
      };
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
        _c(
          "div",
          { staticClass: "block" },
          [
            _c("span", { staticClass: "demonstration" }, [_vm._v("Default")]),
            _vm._v(" "),
            _c("el-date-picker", {
              attrs: {
                type: "monthrange",
                "range-separator": "To",
                "start-placeholder": "Start month",
                "end-placeholder": "End month"
              },
              model: {
                value: _vm.value1,
                callback: function($$v) {
                  _vm.value1 = $$v
                },
                expression: "value1"
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
              _vm._v("With quick options")
            ]),
            _vm._v(" "),
            _c("el-date-picker", {
              attrs: {
                type: "monthrange",
                align: "right",
                "unlink-panels": "",
                "range-separator": "To",
                "start-placeholder": "Start month",
                "end-placeholder": "End month",
                "picker-options": _vm.pickerOptions
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
        pickerOptions: {
          shortcuts: [{
            text: 'This month',
            onClick(picker) {
              picker.$emit('pick', [new Date(), new Date()]);
            }
          }, {
            text: 'This year',
            onClick(picker) {
              const end = new Date();
              const start = new Date(new Date().getFullYear(), 0);
              picker.$emit('pick', [start, end]);
            }
          }, {
            text: 'Last 6 months',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setMonth(start.getMonth() - 6);
              picker.$emit('pick', [start, end]);
            }
          }]
        },
        value1: '',
        value2: ''
      };
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
        _c(
          "div",
          { staticClass: "block" },
          [
            _c("span", { staticClass: "demonstration" }, [_vm._v("date")]),
            _vm._v(" "),
            _c("el-date-picker", {
              attrs: {
                type: "date",
                placeholder: "Pick a date",
                "default-value": "2010-10-01"
              },
              model: {
                value: _vm.value1,
                callback: function($$v) {
                  _vm.value1 = $$v
                },
                expression: "value1"
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
            _c("span", { staticClass: "demonstration" }, [_vm._v("daterange")]),
            _vm._v(" "),
            _c("el-date-picker", {
              attrs: {
                type: "daterange",
                align: "right",
                "start-placeholder": "Start Date",
                "end-placeholder": "End Date",
                "default-value": "2010-10-01"
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
        value1: '',
        value2: ''
      };
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
        _c(
          "div",
          { staticClass: "block" },
          [
            _c("span", { staticClass: "demonstration" }, [
              _vm._v("Emits Date object")
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "demonstration" }, [
              _vm._v("Value: " + _vm._s(_vm.value1))
            ]),
            _vm._v(" "),
            _c("el-date-picker", {
              attrs: {
                type: "date",
                placeholder: "Pick a Date",
                format: "yyyy/MM/dd"
              },
              model: {
                value: _vm.value1,
                callback: function($$v) {
                  _vm.value1 = $$v
                },
                expression: "value1"
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
              _vm._v("Use value-format")
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "demonstration" }, [
              _vm._v("Value: " + _vm._s(_vm.value2))
            ]),
            _vm._v(" "),
            _c("el-date-picker", {
              attrs: {
                type: "date",
                placeholder: "Pick a Date",
                format: "yyyy/MM/dd",
                "value-format": "yyyy-MM-dd"
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
        ),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "block" },
          [
            _c("span", { staticClass: "demonstration" }, [_vm._v("Timestamp")]),
            _vm._v(" "),
            _c("div", { staticClass: "demonstration" }, [
              _vm._v("Value：" + _vm._s(_vm.value3))
            ]),
            _vm._v(" "),
            _c("el-date-picker", {
              attrs: {
                type: "date",
                placeholder: "Pick a Date",
                format: "yyyy/MM/dd",
                "value-format": "timestamp"
              },
              model: {
                value: _vm.value3,
                callback: function($$v) {
                  _vm.value3 = $$v
                },
                expression: "value3"
              }
            })
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

  
    const democomponentExport = {
    data() {
      return {
        value1: '',
        value2: '',
        value3: ''
      };
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
        _c(
          "div",
          { staticClass: "block" },
          [
            _c("p", [_vm._v("Component value：" + _vm._s(_vm.value))]),
            _vm._v(" "),
            _c("el-date-picker", {
              attrs: {
                type: "daterange",
                "start-placeholder": "Start date",
                "end-placeholder": "End date",
                "default-time": ["00:00:00", "23:59:59"]
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
        value: ''
      };
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