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
            _c("span", { staticClass: "demonstration" }, [_vm._v("默认")]),
            _vm._v(" "),
            _c("el-date-picker", {
              attrs: { type: "date", placeholder: "选择日期" },
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
              _vm._v("带快捷选项")
            ]),
            _vm._v(" "),
            _c("el-date-picker", {
              attrs: {
                align: "right",
                type: "date",
                placeholder: "选择日期",
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
            text: '今天',
            onClick(picker) {
              picker.$emit('pick', new Date());
            }
          }, {
            text: '昨天',
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24);
              picker.$emit('pick', date);
            }
          }, {
            text: '一周前',
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
          _c("span", { staticClass: "demonstration" }, [_vm._v("周")]),
          _vm._v(" "),
          _c("el-date-picker", {
            attrs: {
              type: "week",
              format: "yyyy 第 WW 周",
              placeholder: "选择周"
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
          _c("span", { staticClass: "demonstration" }, [_vm._v("月")]),
          _vm._v(" "),
          _c("el-date-picker", {
            attrs: { type: "month", placeholder: "选择月" },
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
          _c("span", { staticClass: "demonstration" }, [_vm._v("年")]),
          _vm._v(" "),
          _c("el-date-picker", {
            attrs: { type: "year", placeholder: "选择年" },
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
          _c("span", { staticClass: "demonstration" }, [_vm._v("多个日期")]),
          _vm._v(" "),
          _c("el-date-picker", {
            attrs: { type: "dates", placeholder: "选择一个或多个日期" },
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
            _c("span", { staticClass: "demonstration" }, [_vm._v("默认")]),
            _vm._v(" "),
            _c("el-date-picker", {
              attrs: {
                type: "daterange",
                "range-separator": "至",
                "start-placeholder": "开始日期",
                "end-placeholder": "结束日期"
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
              _vm._v("带快捷选项")
            ]),
            _vm._v(" "),
            _c("el-date-picker", {
              attrs: {
                type: "daterange",
                align: "right",
                "unlink-panels": "",
                "range-separator": "至",
                "start-placeholder": "开始日期",
                "end-placeholder": "结束日期",
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
            text: '最近一周',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit('pick', [start, end]);
            }
          }, {
            text: '最近一个月',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
              picker.$emit('pick', [start, end]);
            }
          }, {
            text: '最近三个月',
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
            _c("span", { staticClass: "demonstration" }, [_vm._v("默认")]),
            _vm._v(" "),
            _c("el-date-picker", {
              attrs: {
                type: "monthrange",
                "range-separator": "至",
                "start-placeholder": "开始月份",
                "end-placeholder": "结束月份"
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
              _vm._v("带快捷选项")
            ]),
            _vm._v(" "),
            _c("el-date-picker", {
              attrs: {
                type: "monthrange",
                align: "right",
                "unlink-panels": "",
                "range-separator": "至",
                "start-placeholder": "开始月份",
                "end-placeholder": "结束月份",
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
            text: '本月',
            onClick(picker) {
              picker.$emit('pick', [new Date(), new Date()]);
            }
          }, {
            text: '今年至今',
            onClick(picker) {
              const end = new Date();
              const start = new Date(new Date().getFullYear(), 0);
              picker.$emit('pick', [start, end]);
            }
          }, {
            text: '最近六个月',
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
            _c("span", { staticClass: "demonstration" }, [
              _vm._v("默认为 Date 对象")
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "demonstration" }, [
              _vm._v("值：" + _vm._s(_vm.value1))
            ]),
            _vm._v(" "),
            _c("el-date-picker", {
              attrs: {
                type: "date",
                placeholder: "选择日期",
                format: "yyyy 年 MM 月 dd 日"
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
              _vm._v("使用 value-format")
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "demonstration" }, [
              _vm._v("值：" + _vm._s(_vm.value2))
            ]),
            _vm._v(" "),
            _c("el-date-picker", {
              attrs: {
                type: "date",
                placeholder: "选择日期",
                format: "yyyy 年 MM 月 dd 日",
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
            _c("span", { staticClass: "demonstration" }, [_vm._v("时间戳")]),
            _vm._v(" "),
            _c("div", { staticClass: "demonstration" }, [
              _vm._v("值：" + _vm._s(_vm.value3))
            ]),
            _vm._v(" "),
            _c("el-date-picker", {
              attrs: {
                type: "date",
                placeholder: "选择日期",
                format: "yyyy 年 MM 月 dd 日",
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
            _c("p", [_vm._v("组件值：" + _vm._s(_vm.value))]),
            _vm._v(" "),
            _c("el-date-picker", {
              attrs: {
                type: "daterange",
                "start-placeholder": "开始日期",
                "end-placeholder": "结束日期",
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