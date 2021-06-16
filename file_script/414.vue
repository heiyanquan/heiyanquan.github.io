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
          "el-radio",
          {
            attrs: { label: "1" },
            model: {
              value: _vm.radio,
              callback: function($$v) {
                _vm.radio = $$v
              },
              expression: "radio"
            }
          },
          [_vm._v("Option A")]
        ),
        _vm._v(" "),
        _c(
          "el-radio",
          {
            attrs: { label: "2" },
            model: {
              value: _vm.radio,
              callback: function($$v) {
                _vm.radio = $$v
              },
              expression: "radio"
            }
          },
          [_vm._v("Option B")]
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
        radio: '1'
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
        _c(
          "el-radio",
          {
            attrs: { disabled: "", label: "disabled" },
            model: {
              value: _vm.radio,
              callback: function($$v) {
                _vm.radio = $$v
              },
              expression: "radio"
            }
          },
          [_vm._v("Option A")]
        ),
        _vm._v(" "),
        _c(
          "el-radio",
          {
            attrs: { disabled: "", label: "selected and disabled" },
            model: {
              value: _vm.radio,
              callback: function($$v) {
                _vm.radio = $$v
              },
              expression: "radio"
            }
          },
          [_vm._v("Option B")]
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
        radio: 'selected and disabled'
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
      _c(
        "el-radio-group",
        {
          model: {
            value: _vm.radio,
            callback: function($$v) {
              _vm.radio = $$v
            },
            expression: "radio"
          }
        },
        [
          _c("el-radio", { attrs: { label: 3 } }, [_vm._v("Option A")]),
          _vm._v(" "),
          _c("el-radio", { attrs: { label: 6 } }, [_vm._v("Option B")]),
          _vm._v(" "),
          _c("el-radio", { attrs: { label: 9 } }, [_vm._v("Option C")])
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
    data () {
      return {
        radio: 3
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
        _c(
          "div",
          [
            _c(
              "el-radio-group",
              {
                model: {
                  value: _vm.radio1,
                  callback: function($$v) {
                    _vm.radio1 = $$v
                  },
                  expression: "radio1"
                }
              },
              [
                _c("el-radio-button", { attrs: { label: "New York" } }),
                _vm._v(" "),
                _c("el-radio-button", { attrs: { label: "Washington" } }),
                _vm._v(" "),
                _c("el-radio-button", { attrs: { label: "Los Angeles" } }),
                _vm._v(" "),
                _c("el-radio-button", { attrs: { label: "Chicago" } })
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
              "el-radio-group",
              {
                attrs: { size: "medium" },
                model: {
                  value: _vm.radio2,
                  callback: function($$v) {
                    _vm.radio2 = $$v
                  },
                  expression: "radio2"
                }
              },
              [
                _c("el-radio-button", { attrs: { label: "New York" } }),
                _vm._v(" "),
                _c("el-radio-button", { attrs: { label: "Washington" } }),
                _vm._v(" "),
                _c("el-radio-button", { attrs: { label: "Los Angeles" } }),
                _vm._v(" "),
                _c("el-radio-button", { attrs: { label: "Chicago" } })
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
              "el-radio-group",
              {
                attrs: { size: "small" },
                model: {
                  value: _vm.radio3,
                  callback: function($$v) {
                    _vm.radio3 = $$v
                  },
                  expression: "radio3"
                }
              },
              [
                _c("el-radio-button", { attrs: { label: "New York" } }),
                _vm._v(" "),
                _c("el-radio-button", {
                  attrs: { label: "Washington", disabled: "" }
                }),
                _vm._v(" "),
                _c("el-radio-button", { attrs: { label: "Los Angeles" } }),
                _vm._v(" "),
                _c("el-radio-button", { attrs: { label: "Chicago" } })
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
              "el-radio-group",
              {
                attrs: { disabled: "", size: "mini" },
                model: {
                  value: _vm.radio4,
                  callback: function($$v) {
                    _vm.radio4 = $$v
                  },
                  expression: "radio4"
                }
              },
              [
                _c("el-radio-button", { attrs: { label: "New York" } }),
                _vm._v(" "),
                _c("el-radio-button", { attrs: { label: "Washington" } }),
                _vm._v(" "),
                _c("el-radio-button", { attrs: { label: "Los Angeles" } }),
                _vm._v(" "),
                _c("el-radio-button", { attrs: { label: "Chicago" } })
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
        radio1: 'New York',
        radio2: 'New York',
        radio3: 'New York',
        radio4: 'New York'
      };
    }
  }
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
          [
            _c(
              "el-radio",
              {
                attrs: { label: "1", border: "" },
                model: {
                  value: _vm.radio1,
                  callback: function($$v) {
                    _vm.radio1 = $$v
                  },
                  expression: "radio1"
                }
              },
              [_vm._v("Option A")]
            ),
            _vm._v(" "),
            _c(
              "el-radio",
              {
                attrs: { label: "2", border: "" },
                model: {
                  value: _vm.radio1,
                  callback: function($$v) {
                    _vm.radio1 = $$v
                  },
                  expression: "radio1"
                }
              },
              [_vm._v("Option B")]
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
              "el-radio",
              {
                attrs: { label: "1", border: "", size: "medium" },
                model: {
                  value: _vm.radio2,
                  callback: function($$v) {
                    _vm.radio2 = $$v
                  },
                  expression: "radio2"
                }
              },
              [_vm._v("Option A")]
            ),
            _vm._v(" "),
            _c(
              "el-radio",
              {
                attrs: { label: "2", border: "", size: "medium" },
                model: {
                  value: _vm.radio2,
                  callback: function($$v) {
                    _vm.radio2 = $$v
                  },
                  expression: "radio2"
                }
              },
              [_vm._v("Option B")]
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
              "el-radio-group",
              {
                attrs: { size: "small" },
                model: {
                  value: _vm.radio3,
                  callback: function($$v) {
                    _vm.radio3 = $$v
                  },
                  expression: "radio3"
                }
              },
              [
                _c("el-radio", { attrs: { label: "1", border: "" } }, [
                  _vm._v("Option A")
                ]),
                _vm._v(" "),
                _c(
                  "el-radio",
                  { attrs: { label: "2", border: "", disabled: "" } },
                  [_vm._v("Option B")]
                )
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
              "el-radio-group",
              {
                attrs: { size: "mini", disabled: "" },
                model: {
                  value: _vm.radio4,
                  callback: function($$v) {
                    _vm.radio4 = $$v
                  },
                  expression: "radio4"
                }
              },
              [
                _c("el-radio", { attrs: { label: "1", border: "" } }, [
                  _vm._v("Option A")
                ]),
                _vm._v(" "),
                _c("el-radio", { attrs: { label: "2", border: "" } }, [
                  _vm._v("Option B")
                ])
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
        radio1: '1',
        radio2: '1',
        radio3: '1',
        radio4: '1'
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