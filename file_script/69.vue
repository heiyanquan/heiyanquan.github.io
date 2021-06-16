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
          "el-popover",
          {
            attrs: {
              placement: "top-start",
              title: "标题",
              width: "200",
              trigger: "hover",
              content: "这是一段内容,这是一段内容,这是一段内容,这是一段内容。"
            }
          },
          [
            _c(
              "el-button",
              { attrs: { slot: "reference" }, slot: "reference" },
              [_vm._v("hover 激活")]
            )
          ],
          1
        ),
        _vm._v(" "),
        _c(
          "el-popover",
          {
            attrs: {
              placement: "bottom",
              title: "标题",
              width: "200",
              trigger: "click",
              content: "这是一段内容,这是一段内容,这是一段内容,这是一段内容。"
            }
          },
          [
            _c(
              "el-button",
              { attrs: { slot: "reference" }, slot: "reference" },
              [_vm._v("click 激活")]
            )
          ],
          1
        ),
        _vm._v(" "),
        _c("el-popover", {
          ref: "popover",
          attrs: {
            placement: "right",
            title: "标题",
            width: "200",
            trigger: "focus",
            content: "这是一段内容,这是一段内容,这是一段内容,这是一段内容。"
          }
        }),
        _vm._v(" "),
        _c(
          "el-button",
          {
            directives: [
              { name: "popover", rawName: "v-popover:popover", arg: "popover" }
            ]
          },
          [_vm._v("focus 激活")]
        ),
        _vm._v(" "),
        _c(
          "el-popover",
          {
            attrs: {
              placement: "bottom",
              title: "标题",
              width: "200",
              trigger: "manual",
              content: "这是一段内容,这是一段内容,这是一段内容,这是一段内容。"
            },
            model: {
              value: _vm.visible,
              callback: function($$v) {
                _vm.visible = $$v
              },
              expression: "visible"
            }
          },
          [
            _c(
              "el-button",
              {
                attrs: { slot: "reference" },
                on: {
                  click: function($event) {
                    _vm.visible = !_vm.visible
                  }
                },
                slot: "reference"
              },
              [_vm._v("手动激活")]
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
    data() {
      return {
        visible: false
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
      _c(
        "el-popover",
        { attrs: { placement: "right", width: "400", trigger: "click" } },
        [
          _c(
            "el-table",
            { attrs: { data: _vm.gridData } },
            [
              _c("el-table-column", {
                attrs: { width: "150", property: "date", label: "日期" }
              }),
              _vm._v(" "),
              _c("el-table-column", {
                attrs: { width: "100", property: "name", label: "姓名" }
              }),
              _vm._v(" "),
              _c("el-table-column", {
                attrs: { width: "300", property: "address", label: "地址" }
              })
            ],
            1
          ),
          _vm._v(" "),
          _c("el-button", { attrs: { slot: "reference" }, slot: "reference" }, [
            _vm._v("click 激活")
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

  
    const democomponentExport = {
    data() {
      return {
        gridData: [{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }]
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
      _c(
        "el-popover",
        {
          attrs: { placement: "top", width: "160" },
          model: {
            value: _vm.visible,
            callback: function($$v) {
              _vm.visible = $$v
            },
            expression: "visible"
          }
        },
        [
          _c("p", [_vm._v("这是一段内容这是一段内容确定删除吗？")]),
          _vm._v(" "),
          _c(
            "div",
            { staticStyle: { "text-align": "right", margin: "0" } },
            [
              _c(
                "el-button",
                {
                  attrs: { size: "mini", type: "text" },
                  on: {
                    click: function($event) {
                      _vm.visible = false
                    }
                  }
                },
                [_vm._v("取消")]
              ),
              _vm._v(" "),
              _c(
                "el-button",
                {
                  attrs: { type: "primary", size: "mini" },
                  on: {
                    click: function($event) {
                      _vm.visible = false
                    }
                  }
                },
                [_vm._v("确定")]
              )
            ],
            1
          ),
          _vm._v(" "),
          _c("el-button", { attrs: { slot: "reference" }, slot: "reference" }, [
            _vm._v("删除")
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

  
    const democomponentExport = {
    data() {
      return {
        visible: false,
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