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
      _c(
        "el-collapse",
        {
          on: { change: _vm.handleChange },
          model: {
            value: _vm.activeNames,
            callback: function($$v) {
              _vm.activeNames = $$v
            },
            expression: "activeNames"
          }
        },
        [
          _c(
            "el-collapse-item",
            { attrs: { title: "Consistency", name: "1" } },
            [
              _c("div", [
                _vm._v(
                  "Consistent with real life: in line with the process and logic of real life, and comply with languages and habits that the users are used to;"
                )
              ]),
              _vm._v(" "),
              _c("div", [
                _vm._v(
                  "Consistent within interface: all elements should be consistent, such as: design style, icons and texts, position of elements, etc."
                )
              ])
            ]
          ),
          _vm._v(" "),
          _c("el-collapse-item", { attrs: { title: "Feedback", name: "2" } }, [
            _c("div", [
              _vm._v(
                "Operation feedback: enable the users to clearly perceive their operations by style updates and interactive effects;"
              )
            ]),
            _vm._v(" "),
            _c("div", [
              _vm._v(
                "Visual feedback: reflect current state by updating or rearranging elements of the page."
              )
            ])
          ]),
          _vm._v(" "),
          _c(
            "el-collapse-item",
            { attrs: { title: "Efficiency", name: "3" } },
            [
              _c("div", [
                _vm._v(
                  "Simplify the process: keep operating process simple and intuitive;"
                )
              ]),
              _vm._v(" "),
              _c("div", [
                _vm._v(
                  "Definite and clear: enunciate your intentions clearly so that the users can quickly understand and make decisions;"
                )
              ]),
              _vm._v(" "),
              _c("div", [
                _vm._v(
                  "Easy to identify: the interface should be straightforward, which helps the users to identify and frees them from memorizing and recalling."
                )
              ])
            ]
          ),
          _vm._v(" "),
          _c(
            "el-collapse-item",
            { attrs: { title: "Controllability", name: "4" } },
            [
              _c("div", [
                _vm._v(
                  "Decision making: giving advices about operations is acceptable, but do not make decisions for the users;"
                )
              ]),
              _vm._v(" "),
              _c("div", [
                _vm._v(
                  "Controlled consequences: users should be granted the freedom to operate, including canceling, aborting or terminating current operation."
                )
              ])
            ]
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
        activeNames: ['1']
      };
    },
    methods: {
      handleChange(val) {
        console.log(val);
      }
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
      _c(
        "el-collapse",
        {
          attrs: { accordion: "" },
          model: {
            value: _vm.activeName,
            callback: function($$v) {
              _vm.activeName = $$v
            },
            expression: "activeName"
          }
        },
        [
          _c(
            "el-collapse-item",
            { attrs: { title: "Consistency", name: "1" } },
            [
              _c("div", [
                _vm._v(
                  "Consistent with real life: in line with the process and logic of real life, and comply with languages and habits that the users are used to;"
                )
              ]),
              _vm._v(" "),
              _c("div", [
                _vm._v(
                  "Consistent within interface: all elements should be consistent, such as: design style, icons and texts, position of elements, etc."
                )
              ])
            ]
          ),
          _vm._v(" "),
          _c("el-collapse-item", { attrs: { title: "Feedback", name: "2" } }, [
            _c("div", [
              _vm._v(
                "Operation feedback: enable the users to clearly perceive their operations by style updates and interactive effects;"
              )
            ]),
            _vm._v(" "),
            _c("div", [
              _vm._v(
                "Visual feedback: reflect current state by updating or rearranging elements of the page."
              )
            ])
          ]),
          _vm._v(" "),
          _c(
            "el-collapse-item",
            { attrs: { title: "Efficiency", name: "3" } },
            [
              _c("div", [
                _vm._v(
                  "Simplify the process: keep operating process simple and intuitive;"
                )
              ]),
              _vm._v(" "),
              _c("div", [
                _vm._v(
                  "Definite and clear: enunciate your intentions clearly so that the users can quickly understand and make decisions;"
                )
              ]),
              _vm._v(" "),
              _c("div", [
                _vm._v(
                  "Easy to identify: the interface should be straightforward, which helps the users to identify and frees them from memorizing and recalling."
                )
              ])
            ]
          ),
          _vm._v(" "),
          _c(
            "el-collapse-item",
            { attrs: { title: "Controllability", name: "4" } },
            [
              _c("div", [
                _vm._v(
                  "Decision making: giving advices about operations is acceptable, but do not make decisions for the users;"
                )
              ]),
              _vm._v(" "),
              _c("div", [
                _vm._v(
                  "Controlled consequences: users should be granted the freedom to operate, including canceling, aborting or terminating current operation."
                )
              ])
            ]
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
        activeName: '1'
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
        "el-collapse",
        { attrs: { accordion: "" } },
        [
          _c(
            "el-collapse-item",
            { attrs: { name: "1" } },
            [
              _c("template", { slot: "title" }, [
                _vm._v("\n      Consistency"),
                _c("i", { staticClass: "header-icon el-icon-information" })
              ]),
              _vm._v(" "),
              _c("div", [
                _vm._v(
                  "Consistent with real life: in line with the process and logic of real life, and comply with languages and habits that the users are used to;"
                )
              ]),
              _vm._v(" "),
              _c("div", [
                _vm._v(
                  "Consistent within interface: all elements should be consistent, such as: design style, icons and texts, position of elements, etc."
                )
              ])
            ],
            2
          ),
          _vm._v(" "),
          _c("el-collapse-item", { attrs: { title: "Feedback", name: "2" } }, [
            _c("div", [
              _vm._v(
                "Operation feedback: enable the users to clearly perceive their operations by style updates and interactive effects;"
              )
            ]),
            _vm._v(" "),
            _c("div", [
              _vm._v(
                "Visual feedback: reflect current state by updating or rearranging elements of the page."
              )
            ])
          ]),
          _vm._v(" "),
          _c(
            "el-collapse-item",
            { attrs: { title: "Efficiency", name: "3" } },
            [
              _c("div", [
                _vm._v(
                  "Simplify the process: keep operating process simple and intuitive;"
                )
              ]),
              _vm._v(" "),
              _c("div", [
                _vm._v(
                  "Definite and clear: enunciate your intentions clearly so that the users can quickly understand and make decisions;"
                )
              ]),
              _vm._v(" "),
              _c("div", [
                _vm._v(
                  "Easy to identify: the interface should be straightforward, which helps the users to identify and frees them from memorizing and recalling."
                )
              ])
            ]
          ),
          _vm._v(" "),
          _c(
            "el-collapse-item",
            { attrs: { title: "Controllability", name: "4" } },
            [
              _c("div", [
                _vm._v(
                  "Decision making: giving advices about operations is acceptable, but do not make decisions for the users;"
                )
              ]),
              _vm._v(" "),
              _c("div", [
                _vm._v(
                  "Controlled consequences: users should be granted the freedom to operate, including canceling, aborting or terminating current operation."
                )
              ])
            ]
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

  
    const democomponentExport = {}
    return {
      render,
      staticRenderFns,
      ...democomponentExport
    }
  })(),
        }
      }
    </script>