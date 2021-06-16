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
              attrs: { type: "datetime", placeholder: "选择日期时间" },
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
                type: "datetime",
                placeholder: "选择日期时间",
                align: "right",
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
        ),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "block" },
          [
            _c("span", { staticClass: "demonstration" }, [
              _vm._v("设置默认时间")
            ]),
            _vm._v(" "),
            _c("el-date-picker", {
              attrs: {
                type: "datetime",
                placeholder: "选择日期时间",
                "default-time": "12:00:00"
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
        pickerOptions: {
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
        value3: ''
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
                type: "datetimerange",
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
                type: "datetimerange",
                "picker-options": _vm.pickerOptions,
                "range-separator": "至",
                "start-placeholder": "开始日期",
                "end-placeholder": "结束日期",
                align: "right"
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
        value1: [new Date(2000, 10, 10, 10, 10), new Date(2000, 10, 11, 10, 10)],
        value2: ''
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
            _c("span", { staticClass: "demonstration" }, [
              _vm._v("起始日期时刻为 12:00:00")
            ]),
            _vm._v(" "),
            _c("el-date-picker", {
              attrs: {
                type: "datetimerange",
                "start-placeholder": "开始日期",
                "end-placeholder": "结束日期",
                "default-time": ["12:00:00"]
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
              _vm._v("起始日期时刻为 12:00:00，结束日期时刻为 08:00:00")
            ]),
            _vm._v(" "),
            _c("el-date-picker", {
              attrs: {
                type: "datetimerange",
                align: "right",
                "start-placeholder": "开始日期",
                "end-placeholder": "结束日期",
                "default-time": ["12:00:00", "08:00:00"]
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
  })(),
        }
      }
    </script>