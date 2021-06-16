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
          [
            _c(
              "el-button",
              {
                on: {
                  click: function($event) {
                    _vm.show = !_vm.show
                  }
                }
              },
              [_vm._v("Click Me")]
            ),
            _vm._v(" "),
            _c(
              "div",
              {
                staticStyle: {
                  display: "flex",
                  "margin-top": "20px",
                  height: "100px"
                }
              },
              [
                _c("transition", { attrs: { name: "el-fade-in-linear" } }, [
                  _c(
                    "div",
                    {
                      directives: [
                        {
                          name: "show",
                          rawName: "v-show",
                          value: _vm.show,
                          expression: "show"
                        }
                      ],
                      staticClass: "transition-box"
                    },
                    [_vm._v(".el-fade-in-linear")]
                  )
                ]),
                _vm._v(" "),
                _c("transition", { attrs: { name: "el-fade-in" } }, [
                  _c(
                    "div",
                    {
                      directives: [
                        {
                          name: "show",
                          rawName: "v-show",
                          value: _vm.show,
                          expression: "show"
                        }
                      ],
                      staticClass: "transition-box"
                    },
                    [_vm._v(".el-fade-in")]
                  )
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
    data: () => ({
      show: true
    })
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
          "div",
          [
            _c(
              "el-button",
              {
                on: {
                  click: function($event) {
                    _vm.show2 = !_vm.show2
                  }
                }
              },
              [_vm._v("Click Me")]
            ),
            _vm._v(" "),
            _c(
              "div",
              {
                staticStyle: {
                  display: "flex",
                  "margin-top": "20px",
                  height: "100px"
                }
              },
              [
                _c("transition", { attrs: { name: "el-zoom-in-center" } }, [
                  _c(
                    "div",
                    {
                      directives: [
                        {
                          name: "show",
                          rawName: "v-show",
                          value: _vm.show2,
                          expression: "show2"
                        }
                      ],
                      staticClass: "transition-box"
                    },
                    [_vm._v(".el-zoom-in-center")]
                  )
                ]),
                _vm._v(" "),
                _c("transition", { attrs: { name: "el-zoom-in-top" } }, [
                  _c(
                    "div",
                    {
                      directives: [
                        {
                          name: "show",
                          rawName: "v-show",
                          value: _vm.show2,
                          expression: "show2"
                        }
                      ],
                      staticClass: "transition-box"
                    },
                    [_vm._v(".el-zoom-in-top")]
                  )
                ]),
                _vm._v(" "),
                _c("transition", { attrs: { name: "el-zoom-in-bottom" } }, [
                  _c(
                    "div",
                    {
                      directives: [
                        {
                          name: "show",
                          rawName: "v-show",
                          value: _vm.show2,
                          expression: "show2"
                        }
                      ],
                      staticClass: "transition-box"
                    },
                    [_vm._v(".el-zoom-in-bottom")]
                  )
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
    data: () => ({
      show2: true
    })
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
        _c(
          "div",
          [
            _c(
              "el-button",
              {
                on: {
                  click: function($event) {
                    _vm.show3 = !_vm.show3
                  }
                }
              },
              [_vm._v("Click Me")]
            ),
            _vm._v(" "),
            _c(
              "div",
              { staticStyle: { "margin-top": "20px", height: "200px" } },
              [
                _c("el-collapse-transition", [
                  _c(
                    "div",
                    {
                      directives: [
                        {
                          name: "show",
                          rawName: "v-show",
                          value: _vm.show3,
                          expression: "show3"
                        }
                      ]
                    },
                    [
                      _c("div", { staticClass: "transition-box" }, [
                        _vm._v("el-collapse-transition")
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "transition-box" }, [
                        _vm._v("el-collapse-transition")
                      ])
                    ]
                  )
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
    data: () => ({
      show3: true
    })
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