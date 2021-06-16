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
      _c("el-tag", [_vm._v("Tag 1")]),
      _vm._v(" "),
      _c("el-tag", { attrs: { type: "success" } }, [_vm._v("Tag 2")]),
      _vm._v(" "),
      _c("el-tag", { attrs: { type: "info" } }, [_vm._v("Tag 3")]),
      _vm._v(" "),
      _c("el-tag", { attrs: { type: "warning" } }, [_vm._v("Tag 4")]),
      _vm._v(" "),
      _c("el-tag", { attrs: { type: "danger" } }, [_vm._v("Tag 5")])
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
  })(),"element-demo1": (function() {
    
    var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    _vm._l(_vm.tags, function(tag) {
      return _c(
        "el-tag",
        { key: tag.name, attrs: { closable: "", type: tag.type } },
        [_vm._v("\n  " + _vm._s(tag.name) + "\n")]
      )
    }),
    1
  )
}
var staticRenderFns = []
render._withStripped = true

  
    const democomponentExport = {
    data() {
      return {
        tags: [
          { name: 'Tag 1', type: '' },
          { name: 'Tag 2', type: 'success' },
          { name: 'Tag 3', type: 'info' },
          { name: 'Tag 4', type: 'warning' },
          { name: 'Tag 5', type: 'danger' }
        ]
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
      _vm._l(_vm.dynamicTags, function(tag) {
        return _c(
          "el-tag",
          {
            key: tag,
            attrs: { closable: "", "disable-transitions": false },
            on: {
              close: function($event) {
                _vm.handleClose(tag)
              }
            }
          },
          [_vm._v("\n  " + _vm._s(tag) + "\n")]
        )
      }),
      _vm._v(" "),
      _vm.inputVisible
        ? _c("el-input", {
            ref: "saveTagInput",
            staticClass: "input-new-tag",
            attrs: { size: "mini" },
            on: { blur: _vm.handleInputConfirm },
            nativeOn: {
              keyup: function($event) {
                if (
                  !("button" in $event) &&
                  _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")
                ) {
                  return null
                }
                return _vm.handleInputConfirm($event)
              }
            },
            model: {
              value: _vm.inputValue,
              callback: function($$v) {
                _vm.inputValue = $$v
              },
              expression: "inputValue"
            }
          })
        : _c(
            "el-button",
            {
              staticClass: "button-new-tag",
              attrs: { size: "small" },
              on: { click: _vm.showInput }
            },
            [_vm._v("+ Nouveau Tag")]
          )
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true

  
    const democomponentExport = {
    data() {
      return {
        dynamicTags: ['Tag 1', 'Tag 2', 'Tag 3'],
        inputVisible: false,
        inputValue: ''
      };
    },
    methods: {
      handleClose(tag) {
        this.dynamicTags.splice(this.dynamicTags.indexOf(tag), 1);
      },

      showInput() {
        this.inputVisible = true;
        this.$nextTick(_ => {
          this.$refs.saveTagInput.$refs.input.focus();
        });
      },

      handleInputConfirm() {
        let inputValue = this.inputValue;
        if (inputValue) {
          this.dynamicTags.push(inputValue);
        }
        this.inputVisible = false;
        this.inputValue = '';
      }
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
      _c("el-tag", [_vm._v("Défaut")]),
      _vm._v(" "),
      _c("el-tag", { attrs: { size: "medium" } }, [_vm._v("Medium")]),
      _vm._v(" "),
      _c("el-tag", { attrs: { size: "small" } }, [_vm._v("Small")]),
      _vm._v(" "),
      _c("el-tag", { attrs: { size: "mini" } }, [_vm._v("Mini")])
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
  return _c("div", [
    _c(
      "div",
      { staticClass: "tag-group" },
      [
        _c("span", { staticClass: "tag-group__title" }, [_vm._v("Dark")]),
        _vm._v(" "),
        _vm._l(_vm.items, function(item) {
          return _c(
            "el-tag",
            { key: item.label, attrs: { type: item.type, effect: "dark" } },
            [_vm._v("\n    " + _vm._s(item.label) + "\n  ")]
          )
        })
      ],
      2
    ),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "tag-group" },
      [
        _c("span", { staticClass: "tag-group__title" }, [_vm._v("Plain")]),
        _vm._v(" "),
        _vm._l(_vm.items, function(item) {
          return _c(
            "el-tag",
            { key: item.label, attrs: { type: item.type, effect: "plain" } },
            [_vm._v("\n    " + _vm._s(item.label) + "\n  ")]
          )
        })
      ],
      2
    )
  ])
}
var staticRenderFns = []
render._withStripped = true

  
    const democomponentExport = {
    data() {
      return {
        items: [
          { type: '', label: 'Tag 1' },
          { type: 'success', label: 'Tag 2' },
          { type: 'info', label: 'Tag 3' },
          { type: 'danger', label: 'Tag 4' },
          { type: 'warning', label: 'Tag 5' }
        ]
      }
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