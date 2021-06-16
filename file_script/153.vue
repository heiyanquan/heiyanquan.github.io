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
            { attrs: { title: "一致性 Consistency", name: "1" } },
            [
              _c("div", [
                _vm._v(
                  "与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；"
                )
              ]),
              _vm._v(" "),
              _c("div", [
                _vm._v(
                  "在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。"
                )
              ])
            ]
          ),
          _vm._v(" "),
          _c(
            "el-collapse-item",
            { attrs: { title: "反馈 Feedback", name: "2" } },
            [
              _c("div", [
                _vm._v(
                  "控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；"
                )
              ]),
              _vm._v(" "),
              _c("div", [
                _vm._v(
                  "页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。"
                )
              ])
            ]
          ),
          _vm._v(" "),
          _c(
            "el-collapse-item",
            { attrs: { title: "效率 Efficiency", name: "3" } },
            [
              _c("div", [_vm._v("简化流程：设计简洁直观的操作流程；")]),
              _vm._v(" "),
              _c("div", [
                _vm._v(
                  "清晰明确：语言表达清晰且表意明确，让用户快速理解进而作出决策；"
                )
              ]),
              _vm._v(" "),
              _c("div", [
                _vm._v(
                  "帮助用户识别：界面简单直白，让用户快速识别而非回忆，减少用户记忆负担。"
                )
              ])
            ]
          ),
          _vm._v(" "),
          _c(
            "el-collapse-item",
            { attrs: { title: "可控 Controllability", name: "4" } },
            [
              _c("div", [
                _vm._v(
                  "用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；"
                )
              ]),
              _vm._v(" "),
              _c("div", [
                _vm._v(
                  "结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。"
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
            { attrs: { title: "一致性 Consistency", name: "1" } },
            [
              _c("div", [
                _vm._v(
                  "与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；"
                )
              ]),
              _vm._v(" "),
              _c("div", [
                _vm._v(
                  "在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。"
                )
              ])
            ]
          ),
          _vm._v(" "),
          _c(
            "el-collapse-item",
            { attrs: { title: "反馈 Feedback", name: "2" } },
            [
              _c("div", [
                _vm._v(
                  "控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；"
                )
              ]),
              _vm._v(" "),
              _c("div", [
                _vm._v(
                  "页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。"
                )
              ])
            ]
          ),
          _vm._v(" "),
          _c(
            "el-collapse-item",
            { attrs: { title: "效率 Efficiency", name: "3" } },
            [
              _c("div", [_vm._v("简化流程：设计简洁直观的操作流程；")]),
              _vm._v(" "),
              _c("div", [
                _vm._v(
                  "清晰明确：语言表达清晰且表意明确，让用户快速理解进而作出决策；"
                )
              ]),
              _vm._v(" "),
              _c("div", [
                _vm._v(
                  "帮助用户识别：界面简单直白，让用户快速识别而非回忆，减少用户记忆负担。"
                )
              ])
            ]
          ),
          _vm._v(" "),
          _c(
            "el-collapse-item",
            { attrs: { title: "可控 Controllability", name: "4" } },
            [
              _c("div", [
                _vm._v(
                  "用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；"
                )
              ]),
              _vm._v(" "),
              _c("div", [
                _vm._v(
                  "结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。"
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
            [
              _c("template", { slot: "title" }, [
                _vm._v("\n      一致性 Consistency"),
                _c("i", { staticClass: "header-icon el-icon-info" })
              ]),
              _vm._v(" "),
              _c("div", [
                _vm._v(
                  "与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；"
                )
              ]),
              _vm._v(" "),
              _c("div", [
                _vm._v(
                  "在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。"
                )
              ])
            ],
            2
          ),
          _vm._v(" "),
          _c("el-collapse-item", { attrs: { title: "反馈 Feedback" } }, [
            _c("div", [
              _vm._v(
                "控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；"
              )
            ]),
            _vm._v(" "),
            _c("div", [
              _vm._v("页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。")
            ])
          ]),
          _vm._v(" "),
          _c("el-collapse-item", { attrs: { title: "效率 Efficiency" } }, [
            _c("div", [_vm._v("简化流程：设计简洁直观的操作流程；")]),
            _vm._v(" "),
            _c("div", [
              _vm._v(
                "清晰明确：语言表达清晰且表意明确，让用户快速理解进而作出决策；"
              )
            ]),
            _vm._v(" "),
            _c("div", [
              _vm._v(
                "帮助用户识别：界面简单直白，让用户快速识别而非回忆，减少用户记忆负担。"
              )
            ])
          ]),
          _vm._v(" "),
          _c("el-collapse-item", { attrs: { title: "可控 Controllability" } }, [
            _c("div", [
              _vm._v(
                "用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；"
              )
            ]),
            _vm._v(" "),
            _c("div", [
              _vm._v(
                "结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。"
              )
            ])
          ])
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