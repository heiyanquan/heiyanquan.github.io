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
        "el-steps",
        { attrs: { active: _vm.active, "finish-status": "success" } },
        [
          _c("el-step", { attrs: { title: "Step 1" } }),
          _vm._v(" "),
          _c("el-step", { attrs: { title: "Step 2" } }),
          _vm._v(" "),
          _c("el-step", { attrs: { title: "Step 3" } })
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "el-button",
        { staticStyle: { "margin-top": "12px" }, on: { click: _vm.next } },
        [_vm._v("Next step")]
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
        active: 0
      };
    },

    methods: {
      next() {
        if (this.active++ > 2) this.active = 0;
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
        "el-steps",
        { attrs: { space: 200, active: 1, "finish-status": "success" } },
        [
          _c("el-step", { attrs: { title: "Done" } }),
          _vm._v(" "),
          _c("el-step", { attrs: { title: "Processing" } }),
          _vm._v(" "),
          _c("el-step", { attrs: { title: "Step 3" } })
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
  })(),"element-demo2": (function() {
    
    var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c(
        "el-steps",
        { attrs: { active: 2, "align-center": "" } },
        [
          _c("el-step", {
            attrs: { title: "Step 1", description: "Some description" }
          }),
          _vm._v(" "),
          _c("el-step", {
            attrs: { title: "Step 2", description: "Some description" }
          }),
          _vm._v(" "),
          _c("el-step", {
            attrs: { title: "Step 3", description: "Some description" }
          }),
          _vm._v(" "),
          _c("el-step", {
            attrs: { title: "Step 4", description: "Some description" }
          })
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
  })(),"element-demo3": (function() {
    
    var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c(
        "el-steps",
        { attrs: { active: 1 } },
        [
          _c("el-step", {
            attrs: { title: "Step 1", description: "Some description" }
          }),
          _vm._v(" "),
          _c("el-step", {
            attrs: { title: "Step 2", description: "Some description" }
          }),
          _vm._v(" "),
          _c("el-step", {
            attrs: { title: "Step 3", description: "Some description" }
          })
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
  })(),"element-demo4": (function() {
    
    var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c(
        "el-steps",
        { attrs: { active: 1 } },
        [
          _c("el-step", { attrs: { title: "Step 1", icon: "el-icon-edit" } }),
          _vm._v(" "),
          _c("el-step", { attrs: { title: "Step 2", icon: "el-icon-upload" } }),
          _vm._v(" "),
          _c("el-step", { attrs: { title: "Step 3", icon: "el-icon-picture" } })
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
  })(),"element-demo5": (function() {
    
    var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c(
      "div",
      { staticStyle: { height: "300px" } },
      [
        _c(
          "el-steps",
          { attrs: { direction: "vertical", active: 1 } },
          [
            _c("el-step", { attrs: { title: "Step 1" } }),
            _vm._v(" "),
            _c("el-step", { attrs: { title: "Step 2" } }),
            _vm._v(" "),
            _c("el-step", { attrs: { title: "Step 3" } })
          ],
          1
        )
      ],
      1
    )
  ])
}
var staticRenderFns = []
render._withStripped = true

  
    const democomponentExport = {}
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
      _c(
        "el-steps",
        { attrs: { space: 200, active: 1, simple: "" } },
        [
          _c("el-step", { attrs: { title: "Step 1", icon: "el-icon-edit" } }),
          _vm._v(" "),
          _c("el-step", { attrs: { title: "Step 2", icon: "el-icon-upload" } }),
          _vm._v(" "),
          _c("el-step", { attrs: { title: "Step 3", icon: "el-icon-picture" } })
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "el-steps",
        {
          staticStyle: { "margin-top": "20px" },
          attrs: { active: 1, "finish-status": "success", simple: "" }
        },
        [
          _c("el-step", { attrs: { title: "Step 1" } }),
          _vm._v(" "),
          _c("el-step", { attrs: { title: "Step 2" } }),
          _vm._v(" "),
          _c("el-step", { attrs: { title: "Step 3" } })
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