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
        "el-button",
        {
          attrs: { type: "text" },
          on: {
            click: function($event) {
              _vm.dialogVisible = true
            }
          }
        },
        [_vm._v("点击打开 Dialog")]
      ),
      _vm._v(" "),
      _c(
        "el-dialog",
        {
          attrs: {
            title: "提示",
            visible: _vm.dialogVisible,
            width: "30%",
            "before-close": _vm.handleClose
          },
          on: {
            "update:visible": function($event) {
              _vm.dialogVisible = $event
            }
          }
        },
        [
          _c("span", [_vm._v("这是一段信息")]),
          _vm._v(" "),
          _c(
            "span",
            {
              staticClass: "dialog-footer",
              attrs: { slot: "footer" },
              slot: "footer"
            },
            [
              _c(
                "el-button",
                {
                  on: {
                    click: function($event) {
                      _vm.dialogVisible = false
                    }
                  }
                },
                [_vm._v("取 消")]
              ),
              _vm._v(" "),
              _c(
                "el-button",
                {
                  attrs: { type: "primary" },
                  on: {
                    click: function($event) {
                      _vm.dialogVisible = false
                    }
                  }
                },
                [_vm._v("确 定")]
              )
            ],
            1
          )
        ]
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
        dialogVisible: false
      };
    },
    methods: {
      handleClose(done) {
        this.$confirm('确认关闭？')
          .then(_ => {
            done();
          })
          .catch(_ => {});
      }
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
        "el-button",
        {
          attrs: { type: "text" },
          on: {
            click: function($event) {
              _vm.dialogTableVisible = true
            }
          }
        },
        [_vm._v("打开嵌套表格的 Dialog")]
      ),
      _vm._v(" "),
      _c(
        "el-dialog",
        {
          attrs: { title: "收货地址", visible: _vm.dialogTableVisible },
          on: {
            "update:visible": function($event) {
              _vm.dialogTableVisible = $event
            }
          }
        },
        [
          _c(
            "el-table",
            { attrs: { data: _vm.gridData } },
            [
              _c("el-table-column", {
                attrs: { property: "date", label: "日期", width: "150" }
              }),
              _vm._v(" "),
              _c("el-table-column", {
                attrs: { property: "name", label: "姓名", width: "200" }
              }),
              _vm._v(" "),
              _c("el-table-column", {
                attrs: { property: "address", label: "地址" }
              })
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "el-button",
        {
          attrs: { type: "text" },
          on: {
            click: function($event) {
              _vm.dialogFormVisible = true
            }
          }
        },
        [_vm._v("打开嵌套表单的 Dialog")]
      ),
      _vm._v(" "),
      _c(
        "el-dialog",
        {
          attrs: { title: "收货地址", visible: _vm.dialogFormVisible },
          on: {
            "update:visible": function($event) {
              _vm.dialogFormVisible = $event
            }
          }
        },
        [
          _c(
            "el-form",
            { attrs: { model: _vm.form } },
            [
              _c(
                "el-form-item",
                {
                  attrs: {
                    label: "活动名称",
                    "label-width": _vm.formLabelWidth
                  }
                },
                [
                  _c("el-input", {
                    attrs: { autocomplete: "off" },
                    model: {
                      value: _vm.form.name,
                      callback: function($$v) {
                        _vm.$set(_vm.form, "name", $$v)
                      },
                      expression: "form.name"
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "el-form-item",
                {
                  attrs: {
                    label: "活动区域",
                    "label-width": _vm.formLabelWidth
                  }
                },
                [
                  _c(
                    "el-select",
                    {
                      attrs: { placeholder: "请选择活动区域" },
                      model: {
                        value: _vm.form.region,
                        callback: function($$v) {
                          _vm.$set(_vm.form, "region", $$v)
                        },
                        expression: "form.region"
                      }
                    },
                    [
                      _c("el-option", {
                        attrs: { label: "区域一", value: "shanghai" }
                      }),
                      _vm._v(" "),
                      _c("el-option", {
                        attrs: { label: "区域二", value: "beijing" }
                      })
                    ],
                    1
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
            {
              staticClass: "dialog-footer",
              attrs: { slot: "footer" },
              slot: "footer"
            },
            [
              _c(
                "el-button",
                {
                  on: {
                    click: function($event) {
                      _vm.dialogFormVisible = false
                    }
                  }
                },
                [_vm._v("取 消")]
              ),
              _vm._v(" "),
              _c(
                "el-button",
                {
                  attrs: { type: "primary" },
                  on: {
                    click: function($event) {
                      _vm.dialogFormVisible = false
                    }
                  }
                },
                [_vm._v("确 定")]
              )
            ],
            1
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
        }],
        dialogTableVisible: false,
        dialogFormVisible: false,
        form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },
        formLabelWidth: '120px'
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
          "el-button",
          {
            attrs: { type: "text" },
            on: {
              click: function($event) {
                _vm.outerVisible = true
              }
            }
          },
          [_vm._v("点击打开外层 Dialog")]
        ),
        _vm._v(" "),
        _c(
          "el-dialog",
          {
            attrs: { title: "外层 Dialog", visible: _vm.outerVisible },
            on: {
              "update:visible": function($event) {
                _vm.outerVisible = $event
              }
            }
          },
          [
            _c("el-dialog", {
              attrs: {
                width: "30%",
                title: "内层 Dialog",
                visible: _vm.innerVisible,
                "append-to-body": ""
              },
              on: {
                "update:visible": function($event) {
                  _vm.innerVisible = $event
                }
              }
            }),
            _vm._v(" "),
            _c(
              "div",
              {
                staticClass: "dialog-footer",
                attrs: { slot: "footer" },
                slot: "footer"
              },
              [
                _c(
                  "el-button",
                  {
                    on: {
                      click: function($event) {
                        _vm.outerVisible = false
                      }
                    }
                  },
                  [_vm._v("取 消")]
                ),
                _vm._v(" "),
                _c(
                  "el-button",
                  {
                    attrs: { type: "primary" },
                    on: {
                      click: function($event) {
                        _vm.innerVisible = true
                      }
                    }
                  },
                  [_vm._v("打开内层 Dialog")]
                )
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
    data() {
      return {
        outerVisible: false,
        innerVisible: false
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
      _c(
        "el-button",
        {
          attrs: { type: "text" },
          on: {
            click: function($event) {
              _vm.centerDialogVisible = true
            }
          }
        },
        [_vm._v("点击打开 Dialog")]
      ),
      _vm._v(" "),
      _c(
        "el-dialog",
        {
          attrs: {
            title: "提示",
            visible: _vm.centerDialogVisible,
            width: "30%",
            center: ""
          },
          on: {
            "update:visible": function($event) {
              _vm.centerDialogVisible = $event
            }
          }
        },
        [
          _c("span", [_vm._v("需要注意的是内容是默认不居中的")]),
          _vm._v(" "),
          _c(
            "span",
            {
              staticClass: "dialog-footer",
              attrs: { slot: "footer" },
              slot: "footer"
            },
            [
              _c(
                "el-button",
                {
                  on: {
                    click: function($event) {
                      _vm.centerDialogVisible = false
                    }
                  }
                },
                [_vm._v("取 消")]
              ),
              _vm._v(" "),
              _c(
                "el-button",
                {
                  attrs: { type: "primary" },
                  on: {
                    click: function($event) {
                      _vm.centerDialogVisible = false
                    }
                  }
                },
                [_vm._v("确 定")]
              )
            ],
            1
          )
        ]
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
        centerDialogVisible: false
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