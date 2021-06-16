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
        "el-radio-group",
        {
          model: {
            value: _vm.direction,
            callback: function($$v) {
              _vm.direction = $$v
            },
            expression: "direction"
          }
        },
        [
          _c("el-radio", { attrs: { label: "ltr" } }, [_vm._v("从左往右开")]),
          _vm._v(" "),
          _c("el-radio", { attrs: { label: "rtl" } }, [_vm._v("从右往左开")]),
          _vm._v(" "),
          _c("el-radio", { attrs: { label: "ttb" } }, [_vm._v("从上往下开")]),
          _vm._v(" "),
          _c("el-radio", { attrs: { label: "btt" } }, [_vm._v("从下往上开")])
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "el-button",
        {
          staticStyle: { "margin-left": "16px" },
          attrs: { type: "primary" },
          on: {
            click: function($event) {
              _vm.drawer = true
            }
          }
        },
        [_vm._v("\n  点我打开\n")]
      ),
      _vm._v(" "),
      _c(
        "el-drawer",
        {
          attrs: {
            title: "我是标题",
            visible: _vm.drawer,
            direction: _vm.direction,
            "before-close": _vm.handleClose
          },
          on: {
            "update:visible": function($event) {
              _vm.drawer = $event
            }
          }
        },
        [_c("span", [_vm._v("我来啦!")])]
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
        drawer: false,
        direction: 'rtl',
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
          staticStyle: { "margin-left": "16px" },
          attrs: { type: "primary" },
          on: {
            click: function($event) {
              _vm.drawer = true
            }
          }
        },
        [_vm._v("\n  点我打开\n")]
      ),
      _vm._v(" "),
      _c(
        "el-drawer",
        {
          attrs: {
            title: "我是标题",
            visible: _vm.drawer,
            "with-header": false
          },
          on: {
            "update:visible": function($event) {
              _vm.drawer = $event
            }
          }
        },
        [_c("span", [_vm._v("我来啦!")])]
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
        drawer: false,
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
        "el-button",
        {
          attrs: { type: "text" },
          on: {
            click: function($event) {
              _vm.table = true
            }
          }
        },
        [_vm._v("打开嵌套表格的 Drawer")]
      ),
      _vm._v(" "),
      _c(
        "el-button",
        {
          attrs: { type: "text" },
          on: {
            click: function($event) {
              _vm.dialog = true
            }
          }
        },
        [_vm._v("打开嵌套 Form 的 Drawer")]
      ),
      _vm._v(" "),
      _c(
        "el-drawer",
        {
          attrs: {
            title: "我嵌套了表格!",
            visible: _vm.table,
            direction: "rtl",
            size: "50%"
          },
          on: {
            "update:visible": function($event) {
              _vm.table = $event
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
        "el-drawer",
        {
          ref: "drawer",
          attrs: {
            title: "我嵌套了 Form !",
            "before-close": _vm.handleClose,
            visible: _vm.dialog,
            direction: "ltr",
            "custom-class": "demo-drawer"
          },
          on: {
            "update:visible": function($event) {
              _vm.dialog = $event
            }
          }
        },
        [
          _c(
            "div",
            { staticClass: "demo-drawer__content" },
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
                { staticClass: "demo-drawer__footer" },
                [
                  _c("el-button", { on: { click: _vm.cancelForm } }, [
                    _vm._v("取 消")
                  ]),
                  _vm._v(" "),
                  _c(
                    "el-button",
                    {
                      attrs: { type: "primary", loading: _vm.loading },
                      on: {
                        click: function($event) {
                          _vm.$refs.drawer.closeDrawer()
                        }
                      }
                    },
                    [_vm._v(_vm._s(_vm.loading ? "提交中 ..." : "确 定"))]
                  )
                ],
                1
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
      table: false,
      dialog: false,
      loading: false,
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
      formLabelWidth: '80px',
      timer: null,
    };
  },
  methods: {
    handleClose(done) {
      if (this.loading) {
        return;
      }
      this.$confirm('确定要提交表单吗？')
        .then(_ => {
          this.loading = true;
          this.timer = setTimeout(() => {
            done();
            // 动画关闭需要一定的时间
            setTimeout(() => {
              this.loading = false;
            }, 400);
          }, 2000);
        })
        .catch(_ => {});
    },
    cancelForm() {
      this.loading = false;
      this.dialog = false;
      clearTimeout(this.timer);
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
      _c(
        "el-button",
        {
          staticStyle: { "margin-left": "16px" },
          attrs: { type: "primary" },
          on: {
            click: function($event) {
              _vm.drawer = true
            }
          }
        },
        [_vm._v("\n  点我打开\n")]
      ),
      _vm._v(" "),
      _c(
        "el-drawer",
        {
          attrs: {
            title: "我是外面的 Drawer",
            visible: _vm.drawer,
            size: "50%"
          },
          on: {
            "update:visible": function($event) {
              _vm.drawer = $event
            }
          }
        },
        [
          _c(
            "div",
            [
              _c(
                "el-button",
                {
                  on: {
                    click: function($event) {
                      _vm.innerDrawer = true
                    }
                  }
                },
                [_vm._v("打开里面的!")]
              ),
              _vm._v(" "),
              _c(
                "el-drawer",
                {
                  attrs: {
                    title: "我是里面的",
                    "append-to-body": true,
                    "before-close": _vm.handleClose,
                    visible: _vm.innerDrawer
                  },
                  on: {
                    "update:visible": function($event) {
                      _vm.innerDrawer = $event
                    }
                  }
                },
                [_c("p", [_vm._v("_(:зゝ∠)_")])]
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
        drawer: false,
        innerDrawer: false,
      };
    },
    methods: {
      handleClose(done) {
        this.$confirm('还有未保存的工作哦确定关闭吗？')
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
  })(),
        }
      }
    </script>