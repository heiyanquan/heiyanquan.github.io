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
          "el-checkbox",
          {
            model: {
              value: _vm.checked,
              callback: function($$v) {
                _vm.checked = $$v
              },
              expression: "checked"
            }
          },
          [_vm._v("备选项")]
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
        checked: true
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
          "el-checkbox",
          {
            attrs: { disabled: "" },
            model: {
              value: _vm.checked1,
              callback: function($$v) {
                _vm.checked1 = $$v
              },
              expression: "checked1"
            }
          },
          [_vm._v("备选项1")]
        ),
        _vm._v(" "),
        _c(
          "el-checkbox",
          {
            attrs: { disabled: "" },
            model: {
              value: _vm.checked2,
              callback: function($$v) {
                _vm.checked2 = $$v
              },
              expression: "checked2"
            }
          },
          [_vm._v("备选项")]
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
        checked1: false,
        checked2: true
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
          "el-checkbox-group",
          {
            model: {
              value: _vm.checkList,
              callback: function($$v) {
                _vm.checkList = $$v
              },
              expression: "checkList"
            }
          },
          [
            _c("el-checkbox", { attrs: { label: "复选框 A" } }),
            _vm._v(" "),
            _c("el-checkbox", { attrs: { label: "复选框 B" } }),
            _vm._v(" "),
            _c("el-checkbox", { attrs: { label: "复选框 C" } }),
            _vm._v(" "),
            _c("el-checkbox", { attrs: { label: "禁用", disabled: "" } }),
            _vm._v(" "),
            _c("el-checkbox", { attrs: { label: "选中且禁用", disabled: "" } })
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
    data () {
      return {
        checkList: ['选中且禁用','复选框 A']
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
          "el-checkbox",
          {
            attrs: { indeterminate: _vm.isIndeterminate },
            on: { change: _vm.handleCheckAllChange },
            model: {
              value: _vm.checkAll,
              callback: function($$v) {
                _vm.checkAll = $$v
              },
              expression: "checkAll"
            }
          },
          [_vm._v("全选")]
        ),
        _vm._v(" "),
        _c("div", { staticStyle: { margin: "15px 0" } }),
        _vm._v(" "),
        _c(
          "el-checkbox-group",
          {
            on: { change: _vm.handleCheckedCitiesChange },
            model: {
              value: _vm.checkedCities,
              callback: function($$v) {
                _vm.checkedCities = $$v
              },
              expression: "checkedCities"
            }
          },
          _vm._l(_vm.cities, function(city) {
            return _c("el-checkbox", { key: city, attrs: { label: city } }, [
              _vm._v(_vm._s(city))
            ])
          }),
          1
        )
      ]
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true

  
    const cityOptions = ['上海', '北京', '广州', '深圳'];
  const democomponentExport = {
    data() {
      return {
        checkAll: false,
        checkedCities: ['上海', '北京'],
        cities: cityOptions,
        isIndeterminate: true
      };
    },
    methods: {
      handleCheckAllChange(val) {
        this.checkedCities = val ? cityOptions : [];
        this.isIndeterminate = false;
      },
      handleCheckedCitiesChange(value) {
        let checkedCount = value.length;
        this.checkAll = checkedCount === this.cities.length;
        this.isIndeterminate = checkedCount > 0 && checkedCount < this.cities.length;
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
        _c(
          "el-checkbox-group",
          {
            attrs: { min: 1, max: 2 },
            model: {
              value: _vm.checkedCities,
              callback: function($$v) {
                _vm.checkedCities = $$v
              },
              expression: "checkedCities"
            }
          },
          _vm._l(_vm.cities, function(city) {
            return _c("el-checkbox", { key: city, attrs: { label: city } }, [
              _vm._v(_vm._s(city))
            ])
          }),
          1
        )
      ]
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true

  
    const cityOptions = ['上海', '北京', '广州', '深圳'];
  const democomponentExport = {
    data() {
      return {
        checkedCities: ['上海', '北京'],
        cities: cityOptions
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
          [
            _c(
              "el-checkbox-group",
              {
                model: {
                  value: _vm.checkboxGroup1,
                  callback: function($$v) {
                    _vm.checkboxGroup1 = $$v
                  },
                  expression: "checkboxGroup1"
                }
              },
              _vm._l(_vm.cities, function(city) {
                return _c(
                  "el-checkbox-button",
                  { key: city, attrs: { label: city } },
                  [_vm._v(_vm._s(city))]
                )
              }),
              1
            )
          ],
          1
        ),
        _vm._v(" "),
        _c(
          "div",
          { staticStyle: { "margin-top": "20px" } },
          [
            _c(
              "el-checkbox-group",
              {
                attrs: { size: "medium" },
                model: {
                  value: _vm.checkboxGroup2,
                  callback: function($$v) {
                    _vm.checkboxGroup2 = $$v
                  },
                  expression: "checkboxGroup2"
                }
              },
              _vm._l(_vm.cities, function(city) {
                return _c(
                  "el-checkbox-button",
                  { key: city, attrs: { label: city } },
                  [_vm._v(_vm._s(city))]
                )
              }),
              1
            )
          ],
          1
        ),
        _vm._v(" "),
        _c(
          "div",
          { staticStyle: { "margin-top": "20px" } },
          [
            _c(
              "el-checkbox-group",
              {
                attrs: { size: "small" },
                model: {
                  value: _vm.checkboxGroup3,
                  callback: function($$v) {
                    _vm.checkboxGroup3 = $$v
                  },
                  expression: "checkboxGroup3"
                }
              },
              _vm._l(_vm.cities, function(city) {
                return _c(
                  "el-checkbox-button",
                  {
                    key: city,
                    attrs: { label: city, disabled: city === "北京" }
                  },
                  [_vm._v(_vm._s(city))]
                )
              }),
              1
            )
          ],
          1
        ),
        _vm._v(" "),
        _c(
          "div",
          { staticStyle: { "margin-top": "20px" } },
          [
            _c(
              "el-checkbox-group",
              {
                attrs: { size: "mini", disabled: "" },
                model: {
                  value: _vm.checkboxGroup4,
                  callback: function($$v) {
                    _vm.checkboxGroup4 = $$v
                  },
                  expression: "checkboxGroup4"
                }
              },
              _vm._l(_vm.cities, function(city) {
                return _c(
                  "el-checkbox-button",
                  { key: city, attrs: { label: city } },
                  [_vm._v(_vm._s(city))]
                )
              }),
              1
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

  
    const cityOptions = ['上海', '北京', '广州', '深圳'];
  const democomponentExport = {
    data () {
      return {
        checkboxGroup1: ['上海'],
        checkboxGroup2: ['上海'],
        checkboxGroup3: ['上海'],
        checkboxGroup4: ['上海'],
        cities: cityOptions
      };
    }
  }
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
          [
            _c("el-checkbox", {
              attrs: { label: "备选项1", border: "" },
              model: {
                value: _vm.checked1,
                callback: function($$v) {
                  _vm.checked1 = $$v
                },
                expression: "checked1"
              }
            }),
            _vm._v(" "),
            _c("el-checkbox", {
              attrs: { label: "备选项2", border: "" },
              model: {
                value: _vm.checked2,
                callback: function($$v) {
                  _vm.checked2 = $$v
                },
                expression: "checked2"
              }
            })
          ],
          1
        ),
        _vm._v(" "),
        _c(
          "div",
          { staticStyle: { "margin-top": "20px" } },
          [
            _c("el-checkbox", {
              attrs: { label: "备选项1", border: "", size: "medium" },
              model: {
                value: _vm.checked3,
                callback: function($$v) {
                  _vm.checked3 = $$v
                },
                expression: "checked3"
              }
            }),
            _vm._v(" "),
            _c("el-checkbox", {
              attrs: { label: "备选项2", border: "", size: "medium" },
              model: {
                value: _vm.checked4,
                callback: function($$v) {
                  _vm.checked4 = $$v
                },
                expression: "checked4"
              }
            })
          ],
          1
        ),
        _vm._v(" "),
        _c(
          "div",
          { staticStyle: { "margin-top": "20px" } },
          [
            _c(
              "el-checkbox-group",
              {
                attrs: { size: "small" },
                model: {
                  value: _vm.checkboxGroup1,
                  callback: function($$v) {
                    _vm.checkboxGroup1 = $$v
                  },
                  expression: "checkboxGroup1"
                }
              },
              [
                _c("el-checkbox", { attrs: { label: "备选项1", border: "" } }),
                _vm._v(" "),
                _c("el-checkbox", {
                  attrs: { label: "备选项2", border: "", disabled: "" }
                })
              ],
              1
            )
          ],
          1
        ),
        _vm._v(" "),
        _c(
          "div",
          { staticStyle: { "margin-top": "20px" } },
          [
            _c(
              "el-checkbox-group",
              {
                attrs: { size: "mini", disabled: "" },
                model: {
                  value: _vm.checkboxGroup2,
                  callback: function($$v) {
                    _vm.checkboxGroup2 = $$v
                  },
                  expression: "checkboxGroup2"
                }
              },
              [
                _c("el-checkbox", { attrs: { label: "备选项1", border: "" } }),
                _vm._v(" "),
                _c("el-checkbox", { attrs: { label: "备选项2", border: "" } })
              ],
              1
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

  
    const democomponentExport = {
    data () {
      return {
        checked1: true,
        checked2: false,
        checked3: false,
        checked4: true,
        checkboxGroup1: [],
        checkboxGroup2: []
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