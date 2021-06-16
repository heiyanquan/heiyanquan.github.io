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
          "el-table",
          { staticStyle: { width: "100%" }, attrs: { data: _vm.tableData } },
          [
            _c("el-table-column", {
              attrs: { prop: "date", label: "日期", width: "180" }
            }),
            _vm._v(" "),
            _c("el-table-column", {
              attrs: { prop: "name", label: "姓名", width: "180" }
            }),
            _vm._v(" "),
            _c("el-table-column", { attrs: { prop: "address", label: "地址" } })
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
          tableData: [{
            date: '2016-05-02',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
          }, {
            date: '2016-05-04',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1517 弄'
          }, {
            date: '2016-05-01',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1519 弄'
          }, {
            date: '2016-05-03',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1516 弄'
          }]
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
      [
        _c(
          "el-table",
          {
            staticStyle: { width: "100%" },
            attrs: { data: _vm.tableData, stripe: "" }
          },
          [
            _c("el-table-column", {
              attrs: { prop: "date", label: "日期", width: "180" }
            }),
            _vm._v(" "),
            _c("el-table-column", {
              attrs: { prop: "name", label: "姓名", width: "180" }
            }),
            _vm._v(" "),
            _c("el-table-column", { attrs: { prop: "address", label: "地址" } })
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
        tableData: [{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }]
      }
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
      [
        _c(
          "el-table",
          {
            staticStyle: { width: "100%" },
            attrs: { data: _vm.tableData, border: "" }
          },
          [
            _c("el-table-column", {
              attrs: { prop: "date", label: "日期", width: "180" }
            }),
            _vm._v(" "),
            _c("el-table-column", {
              attrs: { prop: "name", label: "姓名", width: "180" }
            }),
            _vm._v(" "),
            _c("el-table-column", { attrs: { prop: "address", label: "地址" } })
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
        tableData: [{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }]
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
      [
        _c(
          "el-table",
          {
            staticStyle: { width: "100%" },
            attrs: {
              data: _vm.tableData,
              "row-class-name": _vm.tableRowClassName
            }
          },
          [
            _c("el-table-column", {
              attrs: { prop: "date", label: "日期", width: "180" }
            }),
            _vm._v(" "),
            _c("el-table-column", {
              attrs: { prop: "name", label: "姓名", width: "180" }
            }),
            _vm._v(" "),
            _c("el-table-column", { attrs: { prop: "address", label: "地址" } })
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
    methods: {
      tableRowClassName({row, rowIndex}) {
        if (rowIndex === 1) {
          return 'warning-row';
        } else if (rowIndex === 3) {
          return 'success-row';
        }
        return '';
      }
    },
    data() {
      return {
        tableData: [{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }]
      }
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
          "el-table",
          {
            staticStyle: { width: "100%" },
            attrs: { data: _vm.tableData, height: "250", border: "" }
          },
          [
            _c("el-table-column", {
              attrs: { prop: "date", label: "日期", width: "180" }
            }),
            _vm._v(" "),
            _c("el-table-column", {
              attrs: { prop: "name", label: "姓名", width: "180" }
            }),
            _vm._v(" "),
            _c("el-table-column", { attrs: { prop: "address", label: "地址" } })
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
        tableData: [{
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
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
          date: '2016-05-08',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-06',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-07',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }]
      }
    }
  }
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
          "el-table",
          {
            staticStyle: { width: "100%" },
            attrs: { data: _vm.tableData, border: "" }
          },
          [
            _c("el-table-column", {
              attrs: { fixed: "", prop: "date", label: "日期", width: "150" }
            }),
            _vm._v(" "),
            _c("el-table-column", {
              attrs: { prop: "name", label: "姓名", width: "120" }
            }),
            _vm._v(" "),
            _c("el-table-column", {
              attrs: { prop: "province", label: "省份", width: "120" }
            }),
            _vm._v(" "),
            _c("el-table-column", {
              attrs: { prop: "city", label: "市区", width: "120" }
            }),
            _vm._v(" "),
            _c("el-table-column", {
              attrs: { prop: "address", label: "地址", width: "300" }
            }),
            _vm._v(" "),
            _c("el-table-column", {
              attrs: { prop: "zip", label: "邮编", width: "120" }
            }),
            _vm._v(" "),
            _c("el-table-column", {
              attrs: { fixed: "right", label: "操作", width: "100" },
              scopedSlots: _vm._u([
                {
                  key: "default",
                  fn: function(scope) {
                    return [
                      _c(
                        "el-button",
                        {
                          attrs: { type: "text", size: "small" },
                          on: {
                            click: function($event) {
                              _vm.handleClick(scope.row)
                            }
                          }
                        },
                        [_vm._v("查看")]
                      ),
                      _vm._v(" "),
                      _c(
                        "el-button",
                        { attrs: { type: "text", size: "small" } },
                        [_vm._v("编辑")]
                      )
                    ]
                  }
                }
              ])
            })
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
    methods: {
      handleClick(row) {
        console.log(row);
      }
    },

    data() {
      return {
        tableData: [{
          date: '2016-05-02',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-04',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1517 弄',
          zip: 200333
        }, {
          date: '2016-05-01',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1519 弄',
          zip: 200333
        }, {
          date: '2016-05-03',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1516 弄',
          zip: 200333
        }]
      }
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
          "el-table",
          {
            staticStyle: { width: "100%" },
            attrs: { data: _vm.tableData, height: "250" }
          },
          [
            _c("el-table-column", {
              attrs: { fixed: "", prop: "date", label: "日期", width: "150" }
            }),
            _vm._v(" "),
            _c("el-table-column", {
              attrs: { prop: "name", label: "姓名", width: "120" }
            }),
            _vm._v(" "),
            _c("el-table-column", {
              attrs: { prop: "province", label: "省份", width: "120" }
            }),
            _vm._v(" "),
            _c("el-table-column", {
              attrs: { prop: "city", label: "市区", width: "120" }
            }),
            _vm._v(" "),
            _c("el-table-column", {
              attrs: { prop: "address", label: "地址", width: "300" }
            }),
            _vm._v(" "),
            _c("el-table-column", {
              attrs: { prop: "zip", label: "邮编", width: "120" }
            })
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
        tableData: [{
          date: '2016-05-03',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-02',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-04',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-01',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-08',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-06',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-07',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }]
      }
    }
  }
    return {
      render,
      staticRenderFns,
      ...democomponentExport
    }
  })(),"element-demo7": (function() {
    
    var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      [
        _c(
          "el-table",
          {
            staticStyle: { width: "100%" },
            attrs: { data: _vm.tableData, "max-height": "250" }
          },
          [
            _c("el-table-column", {
              attrs: { fixed: "", prop: "date", label: "日期", width: "150" }
            }),
            _vm._v(" "),
            _c("el-table-column", {
              attrs: { prop: "name", label: "姓名", width: "120" }
            }),
            _vm._v(" "),
            _c("el-table-column", {
              attrs: { prop: "province", label: "省份", width: "120" }
            }),
            _vm._v(" "),
            _c("el-table-column", {
              attrs: { prop: "city", label: "市区", width: "120" }
            }),
            _vm._v(" "),
            _c("el-table-column", {
              attrs: { prop: "address", label: "地址", width: "300" }
            }),
            _vm._v(" "),
            _c("el-table-column", {
              attrs: { prop: "zip", label: "邮编", width: "120" }
            }),
            _vm._v(" "),
            _c("el-table-column", {
              attrs: { fixed: "right", label: "操作", width: "120" },
              scopedSlots: _vm._u([
                {
                  key: "default",
                  fn: function(scope) {
                    return [
                      _c(
                        "el-button",
                        {
                          attrs: { type: "text", size: "small" },
                          nativeOn: {
                            click: function($event) {
                              $event.preventDefault()
                              _vm.deleteRow(scope.$index, _vm.tableData)
                            }
                          }
                        },
                        [_vm._v("\n          移除\n        ")]
                      )
                    ]
                  }
                }
              ])
            })
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
    methods: {
      deleteRow(index, rows) {
        rows.splice(index, 1);
      }
    },
    data() {
      return {
        tableData: [{
          date: '2016-05-03',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-02',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-04',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-01',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-08',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-06',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-07',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }]
      }
    }
  }
    return {
      render,
      staticRenderFns,
      ...democomponentExport
    }
  })(),"element-demo8": (function() {
    
    var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      [
        _c(
          "el-table",
          { staticStyle: { width: "100%" }, attrs: { data: _vm.tableData } },
          [
            _c("el-table-column", {
              attrs: { prop: "date", label: "日期", width: "150" }
            }),
            _vm._v(" "),
            _c(
              "el-table-column",
              { attrs: { label: "配送信息" } },
              [
                _c("el-table-column", {
                  attrs: { prop: "name", label: "姓名", width: "120" }
                }),
                _vm._v(" "),
                _c(
                  "el-table-column",
                  { attrs: { label: "地址" } },
                  [
                    _c("el-table-column", {
                      attrs: { prop: "province", label: "省份", width: "120" }
                    }),
                    _vm._v(" "),
                    _c("el-table-column", {
                      attrs: { prop: "city", label: "市区", width: "120" }
                    }),
                    _vm._v(" "),
                    _c("el-table-column", {
                      attrs: { prop: "address", label: "地址", width: "300" }
                    }),
                    _vm._v(" "),
                    _c("el-table-column", {
                      attrs: { prop: "zip", label: "邮编", width: "120" }
                    })
                  ],
                  1
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
        tableData: [{
          date: '2016-05-03',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-02',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-04',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-01',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-08',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-06',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-07',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }]
      }
    }
  }
    return {
      render,
      staticRenderFns,
      ...democomponentExport
    }
  })(),"element-demo9": (function() {
    
    var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      [
        _c(
          "el-table",
          {
            ref: "singleTable",
            staticStyle: { width: "100%" },
            attrs: { data: _vm.tableData, "highlight-current-row": "" },
            on: { "current-change": _vm.handleCurrentChange }
          },
          [
            _c("el-table-column", { attrs: { type: "index", width: "50" } }),
            _vm._v(" "),
            _c("el-table-column", {
              attrs: { property: "date", label: "日期", width: "120" }
            }),
            _vm._v(" "),
            _c("el-table-column", {
              attrs: { property: "name", label: "姓名", width: "120" }
            }),
            _vm._v(" "),
            _c("el-table-column", {
              attrs: { property: "address", label: "地址" }
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
              "el-button",
              {
                on: {
                  click: function($event) {
                    _vm.setCurrent(_vm.tableData[1])
                  }
                }
              },
              [_vm._v("选中第二行")]
            ),
            _vm._v(" "),
            _c(
              "el-button",
              {
                on: {
                  click: function($event) {
                    _vm.setCurrent()
                  }
                }
              },
              [_vm._v("取消选择")]
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
        tableData: [{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }],
        currentRow: null
      }
    },

    methods: {
      setCurrent(row) {
        this.$refs.singleTable.setCurrentRow(row);
      },
      handleCurrentChange(val) {
        this.currentRow = val;
      }
    }
  }
    return {
      render,
      staticRenderFns,
      ...democomponentExport
    }
  })(),"element-demo10": (function() {
    
    var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      [
        _c(
          "el-table",
          {
            ref: "multipleTable",
            staticStyle: { width: "100%" },
            attrs: { data: _vm.tableData, "tooltip-effect": "dark" },
            on: { "selection-change": _vm.handleSelectionChange }
          },
          [
            _c("el-table-column", {
              attrs: { type: "selection", width: "55" }
            }),
            _vm._v(" "),
            _c("el-table-column", {
              attrs: { label: "日期", width: "120" },
              scopedSlots: _vm._u([
                {
                  key: "default",
                  fn: function(scope) {
                    return [_vm._v(_vm._s(scope.row.date))]
                  }
                }
              ])
            }),
            _vm._v(" "),
            _c("el-table-column", {
              attrs: { prop: "name", label: "姓名", width: "120" }
            }),
            _vm._v(" "),
            _c("el-table-column", {
              attrs: {
                prop: "address",
                label: "地址",
                "show-overflow-tooltip": ""
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
              "el-button",
              {
                on: {
                  click: function($event) {
                    _vm.toggleSelection([_vm.tableData[1], _vm.tableData[2]])
                  }
                }
              },
              [_vm._v("切换第二、第三行的选中状态")]
            ),
            _vm._v(" "),
            _c(
              "el-button",
              {
                on: {
                  click: function($event) {
                    _vm.toggleSelection()
                  }
                }
              },
              [_vm._v("取消选择")]
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
        tableData: [{
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
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
          date: '2016-05-08',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-06',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-07',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }],
        multipleSelection: []
      }
    },

    methods: {
      toggleSelection(rows) {
        if (rows) {
          rows.forEach(row => {
            this.$refs.multipleTable.toggleRowSelection(row);
          });
        } else {
          this.$refs.multipleTable.clearSelection();
        }
      },
      handleSelectionChange(val) {
        this.multipleSelection = val;
      }
    }
  }
    return {
      render,
      staticRenderFns,
      ...democomponentExport
    }
  })(),"element-demo11": (function() {
    
    var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      [
        _c(
          "el-table",
          {
            staticStyle: { width: "100%" },
            attrs: {
              data: _vm.tableData,
              "default-sort": { prop: "date", order: "descending" }
            }
          },
          [
            _c("el-table-column", {
              attrs: { prop: "date", label: "日期", sortable: "", width: "180" }
            }),
            _vm._v(" "),
            _c("el-table-column", {
              attrs: { prop: "name", label: "姓名", sortable: "", width: "180" }
            }),
            _vm._v(" "),
            _c("el-table-column", {
              attrs: {
                prop: "address",
                label: "地址",
                formatter: _vm.formatter
              }
            })
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
        tableData: [{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }]
      }
    },
    methods: {
      formatter(row, column) {
        return row.address;
      }
    }
  }
    return {
      render,
      staticRenderFns,
      ...democomponentExport
    }
  })(),"element-demo12": (function() {
    
    var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      [
        _c("el-button", { on: { click: _vm.resetDateFilter } }, [
          _vm._v("清除日期过滤器")
        ]),
        _vm._v(" "),
        _c("el-button", { on: { click: _vm.clearFilter } }, [
          _vm._v("清除所有过滤器")
        ]),
        _vm._v(" "),
        _c(
          "el-table",
          {
            ref: "filterTable",
            staticStyle: { width: "100%" },
            attrs: { data: _vm.tableData }
          },
          [
            _c("el-table-column", {
              attrs: {
                prop: "date",
                label: "日期",
                sortable: "",
                width: "180",
                "column-key": "date",
                filters: [
                  { text: "2016-05-01", value: "2016-05-01" },
                  { text: "2016-05-02", value: "2016-05-02" },
                  { text: "2016-05-03", value: "2016-05-03" },
                  { text: "2016-05-04", value: "2016-05-04" }
                ],
                "filter-method": _vm.filterHandler
              }
            }),
            _vm._v(" "),
            _c("el-table-column", {
              attrs: { prop: "name", label: "姓名", width: "180" }
            }),
            _vm._v(" "),
            _c("el-table-column", {
              attrs: {
                prop: "address",
                label: "地址",
                formatter: _vm.formatter
              }
            }),
            _vm._v(" "),
            _c("el-table-column", {
              attrs: {
                prop: "tag",
                label: "标签",
                width: "100",
                filters: [
                  { text: "家", value: "家" },
                  { text: "公司", value: "公司" }
                ],
                "filter-method": _vm.filterTag,
                "filter-placement": "bottom-end"
              },
              scopedSlots: _vm._u([
                {
                  key: "default",
                  fn: function(scope) {
                    return [
                      _c(
                        "el-tag",
                        {
                          attrs: {
                            type:
                              scope.row.tag === "家" ? "primary" : "success",
                            "disable-transitions": ""
                          }
                        },
                        [_vm._v(_vm._s(scope.row.tag))]
                      )
                    ]
                  }
                }
              ])
            })
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
        tableData: [{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
          tag: '家'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄',
          tag: '公司'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄',
          tag: '家'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄',
          tag: '公司'
        }]
      }
    },
    methods: {
      resetDateFilter() {
        this.$refs.filterTable.clearFilter('date');
      },
      clearFilter() {
        this.$refs.filterTable.clearFilter();
      },
      formatter(row, column) {
        return row.address;
      },
      filterTag(value, row) {
        return row.tag === value;
      },
      filterHandler(value, row, column) {
        const property = column['property'];
        return row[property] === value;
      }
    }
  }
    return {
      render,
      staticRenderFns,
      ...democomponentExport
    }
  })(),"element-demo13": (function() {
    
    var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      [
        _c(
          "el-table",
          { staticStyle: { width: "100%" }, attrs: { data: _vm.tableData } },
          [
            _c("el-table-column", {
              attrs: { label: "日期", width: "180" },
              scopedSlots: _vm._u([
                {
                  key: "default",
                  fn: function(scope) {
                    return [
                      _c("i", { staticClass: "el-icon-time" }),
                      _vm._v(" "),
                      _c("span", { staticStyle: { "margin-left": "10px" } }, [
                        _vm._v(_vm._s(scope.row.date))
                      ])
                    ]
                  }
                }
              ])
            }),
            _vm._v(" "),
            _c("el-table-column", {
              attrs: { label: "姓名", width: "180" },
              scopedSlots: _vm._u([
                {
                  key: "default",
                  fn: function(scope) {
                    return [
                      _c(
                        "el-popover",
                        { attrs: { trigger: "hover", placement: "top" } },
                        [
                          _c("p", [_vm._v("姓名: " + _vm._s(scope.row.name))]),
                          _vm._v(" "),
                          _c("p", [
                            _vm._v("住址: " + _vm._s(scope.row.address))
                          ]),
                          _vm._v(" "),
                          _c(
                            "div",
                            {
                              staticClass: "name-wrapper",
                              attrs: { slot: "reference" },
                              slot: "reference"
                            },
                            [
                              _c("el-tag", { attrs: { size: "medium" } }, [
                                _vm._v(_vm._s(scope.row.name))
                              ])
                            ],
                            1
                          )
                        ]
                      )
                    ]
                  }
                }
              ])
            }),
            _vm._v(" "),
            _c("el-table-column", {
              attrs: { label: "操作" },
              scopedSlots: _vm._u([
                {
                  key: "default",
                  fn: function(scope) {
                    return [
                      _c(
                        "el-button",
                        {
                          attrs: { size: "mini" },
                          on: {
                            click: function($event) {
                              _vm.handleEdit(scope.$index, scope.row)
                            }
                          }
                        },
                        [_vm._v("编辑")]
                      ),
                      _vm._v(" "),
                      _c(
                        "el-button",
                        {
                          attrs: { size: "mini", type: "danger" },
                          on: {
                            click: function($event) {
                              _vm.handleDelete(scope.$index, scope.row)
                            }
                          }
                        },
                        [_vm._v("删除")]
                      )
                    ]
                  }
                }
              ])
            })
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
        tableData: [{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }]
      }
    },
    methods: {
      handleEdit(index, row) {
        console.log(index, row);
      },
      handleDelete(index, row) {
        console.log(index, row);
      }
    }
  }
    return {
      render,
      staticRenderFns,
      ...democomponentExport
    }
  })(),"element-demo14": (function() {
    
    var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      [
        _c(
          "el-table",
          { staticStyle: { width: "100%" }, attrs: { data: _vm.tableData } },
          [
            _c("el-table-column", {
              attrs: { type: "expand" },
              scopedSlots: _vm._u([
                {
                  key: "default",
                  fn: function(props) {
                    return [
                      _c(
                        "el-form",
                        {
                          staticClass: "demo-table-expand",
                          attrs: { "label-position": "left", inline: "" }
                        },
                        [
                          _c("el-form-item", { attrs: { label: "商品名称" } }, [
                            _c("span", [_vm._v(_vm._s(props.row.name))])
                          ]),
                          _vm._v(" "),
                          _c("el-form-item", { attrs: { label: "所属店铺" } }, [
                            _c("span", [_vm._v(_vm._s(props.row.shop))])
                          ]),
                          _vm._v(" "),
                          _c("el-form-item", { attrs: { label: "商品 ID" } }, [
                            _c("span", [_vm._v(_vm._s(props.row.id))])
                          ]),
                          _vm._v(" "),
                          _c("el-form-item", { attrs: { label: "店铺 ID" } }, [
                            _c("span", [_vm._v(_vm._s(props.row.shopId))])
                          ]),
                          _vm._v(" "),
                          _c("el-form-item", { attrs: { label: "商品分类" } }, [
                            _c("span", [_vm._v(_vm._s(props.row.category))])
                          ]),
                          _vm._v(" "),
                          _c("el-form-item", { attrs: { label: "店铺地址" } }, [
                            _c("span", [_vm._v(_vm._s(props.row.address))])
                          ]),
                          _vm._v(" "),
                          _c("el-form-item", { attrs: { label: "商品描述" } }, [
                            _c("span", [_vm._v(_vm._s(props.row.desc))])
                          ])
                        ],
                        1
                      )
                    ]
                  }
                }
              ])
            }),
            _vm._v(" "),
            _c("el-table-column", { attrs: { label: "商品 ID", prop: "id" } }),
            _vm._v(" "),
            _c("el-table-column", {
              attrs: { label: "商品名称", prop: "name" }
            }),
            _vm._v(" "),
            _c("el-table-column", { attrs: { label: "描述", prop: "desc" } })
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
        tableData: [{
          id: '12987122',
          name: '好滋好味鸡蛋仔',
          category: '江浙小吃、小吃零食',
          desc: '荷兰优质淡奶，奶香浓而不腻',
          address: '上海市普陀区真北路',
          shop: '王小虎夫妻店',
          shopId: '10333'
        }, {
          id: '12987123',
          name: '好滋好味鸡蛋仔',
          category: '江浙小吃、小吃零食',
          desc: '荷兰优质淡奶，奶香浓而不腻',
          address: '上海市普陀区真北路',
          shop: '王小虎夫妻店',
          shopId: '10333'
        }, {
          id: '12987125',
          name: '好滋好味鸡蛋仔',
          category: '江浙小吃、小吃零食',
          desc: '荷兰优质淡奶，奶香浓而不腻',
          address: '上海市普陀区真北路',
          shop: '王小虎夫妻店',
          shopId: '10333'
        }, {
          id: '12987126',
          name: '好滋好味鸡蛋仔',
          category: '江浙小吃、小吃零食',
          desc: '荷兰优质淡奶，奶香浓而不腻',
          address: '上海市普陀区真北路',
          shop: '王小虎夫妻店',
          shopId: '10333'
        }]
      }
    }
  }
    return {
      render,
      staticRenderFns,
      ...democomponentExport
    }
  })(),"element-demo15": (function() {
    
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
              "el-table",
              {
                staticStyle: { width: "100%", "margin-bottom": "20px" },
                attrs: {
                  data: _vm.tableData,
                  "row-key": "id",
                  border: "",
                  "default-expand-all": "",
                  "tree-props": {
                    children: "children",
                    hasChildren: "hasChildren"
                  }
                }
              },
              [
                _c("el-table-column", {
                  attrs: {
                    prop: "date",
                    label: "日期",
                    sortable: "",
                    width: "180"
                  }
                }),
                _vm._v(" "),
                _c("el-table-column", {
                  attrs: {
                    prop: "name",
                    label: "姓名",
                    sortable: "",
                    width: "180"
                  }
                }),
                _vm._v(" "),
                _c("el-table-column", {
                  attrs: { prop: "address", label: "地址" }
                })
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "el-table",
              {
                staticStyle: { width: "100%" },
                attrs: {
                  data: _vm.tableData1,
                  "row-key": "id",
                  border: "",
                  lazy: "",
                  load: _vm.load,
                  "tree-props": {
                    children: "children",
                    hasChildren: "hasChildren"
                  }
                }
              },
              [
                _c("el-table-column", {
                  attrs: { prop: "date", label: "日期", width: "180" }
                }),
                _vm._v(" "),
                _c("el-table-column", {
                  attrs: { prop: "name", label: "姓名", width: "180" }
                }),
                _vm._v(" "),
                _c("el-table-column", {
                  attrs: { prop: "address", label: "地址" }
                })
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
        tableData: [{
          id: 1,
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          id: 2,
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          id: 3,
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄',
          children: [{
              id: 31,
              date: '2016-05-01',
              name: '王小虎',
              address: '上海市普陀区金沙江路 1519 弄'
            }, {
              id: 32,
              date: '2016-05-01',
              name: '王小虎',
              address: '上海市普陀区金沙江路 1519 弄'
          }]
        }, {
          id: 4,
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }],
        tableData1: [{
          id: 1,
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          id: 2,
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          id: 3,
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄',
          hasChildren: true
        }, {
          id: 4,
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }]
      }
    },
    methods: {
      load(tree, treeNode, resolve) {
        setTimeout(() => {
          resolve([
            {
              id: 31,
              date: '2016-05-01',
              name: '王小虎',
              address: '上海市普陀区金沙江路 1519 弄'
            }, {
              id: 32,
              date: '2016-05-01',
              name: '王小虎',
              address: '上海市普陀区金沙江路 1519 弄'
            }
          ])
        }, 1000)
      }
    },
  }
    return {
      render,
      staticRenderFns,
      ...democomponentExport
    }
  })(),"element-demo16": (function() {
    
    var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      [
        _c(
          "el-table",
          {
            staticStyle: { width: "100%" },
            attrs: {
              data: _vm.tableData.filter(function(data) {
                return (
                  !_vm.search ||
                  data.name.toLowerCase().includes(_vm.search.toLowerCase())
                )
              })
            }
          },
          [
            _c("el-table-column", { attrs: { label: "Date", prop: "date" } }),
            _vm._v(" "),
            _c("el-table-column", { attrs: { label: "Name", prop: "name" } }),
            _vm._v(" "),
            _c("el-table-column", {
              attrs: { align: "right" },
              scopedSlots: _vm._u([
                {
                  key: "header",
                  fn: function(scope) {
                    return [
                      _c("el-input", {
                        attrs: { size: "mini", placeholder: "输入关键字搜索" },
                        model: {
                          value: _vm.search,
                          callback: function($$v) {
                            _vm.search = $$v
                          },
                          expression: "search"
                        }
                      })
                    ]
                  }
                },
                {
                  key: "default",
                  fn: function(scope) {
                    return [
                      _c(
                        "el-button",
                        {
                          attrs: { size: "mini" },
                          on: {
                            click: function($event) {
                              _vm.handleEdit(scope.$index, scope.row)
                            }
                          }
                        },
                        [_vm._v("Edit")]
                      ),
                      _vm._v(" "),
                      _c(
                        "el-button",
                        {
                          attrs: { size: "mini", type: "danger" },
                          on: {
                            click: function($event) {
                              _vm.handleDelete(scope.$index, scope.row)
                            }
                          }
                        },
                        [_vm._v("Delete")]
                      )
                    ]
                  }
                }
              ])
            })
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
        tableData: [{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }],
        search: ''
      }
    },
    methods: {
      handleEdit(index, row) {
        console.log(index, row);
      },
      handleDelete(index, row) {
        console.log(index, row);
      }
    },
  }
    return {
      render,
      staticRenderFns,
      ...democomponentExport
    }
  })(),"element-demo17": (function() {
    
    var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      [
        _c(
          "el-table",
          {
            staticStyle: { width: "100%" },
            attrs: { data: _vm.tableData, border: "", "show-summary": "" }
          },
          [
            _c("el-table-column", {
              attrs: { prop: "id", label: "ID", width: "180" }
            }),
            _vm._v(" "),
            _c("el-table-column", { attrs: { prop: "name", label: "姓名" } }),
            _vm._v(" "),
            _c("el-table-column", {
              attrs: { prop: "amount1", sortable: "", label: "数值 1" }
            }),
            _vm._v(" "),
            _c("el-table-column", {
              attrs: { prop: "amount2", sortable: "", label: "数值 2" }
            }),
            _vm._v(" "),
            _c("el-table-column", {
              attrs: { prop: "amount3", sortable: "", label: "数值 3" }
            })
          ],
          1
        ),
        _vm._v(" "),
        _c(
          "el-table",
          {
            staticStyle: { width: "100%", "margin-top": "20px" },
            attrs: {
              data: _vm.tableData,
              border: "",
              height: "200",
              "summary-method": _vm.getSummaries,
              "show-summary": ""
            }
          },
          [
            _c("el-table-column", {
              attrs: { prop: "id", label: "ID", width: "180" }
            }),
            _vm._v(" "),
            _c("el-table-column", { attrs: { prop: "name", label: "姓名" } }),
            _vm._v(" "),
            _c("el-table-column", {
              attrs: { prop: "amount1", label: "数值 1（元）" }
            }),
            _vm._v(" "),
            _c("el-table-column", {
              attrs: { prop: "amount2", label: "数值 2（元）" }
            }),
            _vm._v(" "),
            _c("el-table-column", {
              attrs: { prop: "amount3", label: "数值 3（元）" }
            })
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
        tableData: [{
          id: '12987122',
          name: '王小虎',
          amount1: '234',
          amount2: '3.2',
          amount3: 10
        }, {
          id: '12987123',
          name: '王小虎',
          amount1: '165',
          amount2: '4.43',
          amount3: 12
        }, {
          id: '12987124',
          name: '王小虎',
          amount1: '324',
          amount2: '1.9',
          amount3: 9
        }, {
          id: '12987125',
          name: '王小虎',
          amount1: '621',
          amount2: '2.2',
          amount3: 17
        }, {
          id: '12987126',
          name: '王小虎',
          amount1: '539',
          amount2: '4.1',
          amount3: 15
        }]
      };
    },
    methods: {
      getSummaries(param) {
        const { columns, data } = param;
        const sums = [];
        columns.forEach((column, index) => {
          if (index === 0) {
            sums[index] = '总价';
            return;
          }
          const values = data.map(item => Number(item[column.property]));
          if (!values.every(value => isNaN(value))) {
            sums[index] = values.reduce((prev, curr) => {
              const value = Number(curr);
              if (!isNaN(value)) {
                return prev + curr;
              } else {
                return prev;
              }
            }, 0);
            sums[index] += ' 元';
          } else {
            sums[index] = 'N/A';
          }
        });

        return sums;
      }
    }
  };
    return {
      render,
      staticRenderFns,
      ...democomponentExport
    }
  })(),"element-demo18": (function() {
    
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
              "el-table",
              {
                staticStyle: { width: "100%" },
                attrs: {
                  data: _vm.tableData,
                  "span-method": _vm.arraySpanMethod,
                  border: ""
                }
              },
              [
                _c("el-table-column", {
                  attrs: { prop: "id", label: "ID", width: "180" }
                }),
                _vm._v(" "),
                _c("el-table-column", {
                  attrs: { prop: "name", label: "姓名" }
                }),
                _vm._v(" "),
                _c("el-table-column", {
                  attrs: { prop: "amount1", sortable: "", label: "数值 1" }
                }),
                _vm._v(" "),
                _c("el-table-column", {
                  attrs: { prop: "amount2", sortable: "", label: "数值 2" }
                }),
                _vm._v(" "),
                _c("el-table-column", {
                  attrs: { prop: "amount3", sortable: "", label: "数值 3" }
                })
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "el-table",
              {
                staticStyle: { width: "100%", "margin-top": "20px" },
                attrs: {
                  data: _vm.tableData,
                  "span-method": _vm.objectSpanMethod,
                  border: ""
                }
              },
              [
                _c("el-table-column", {
                  attrs: { prop: "id", label: "ID", width: "180" }
                }),
                _vm._v(" "),
                _c("el-table-column", {
                  attrs: { prop: "name", label: "姓名" }
                }),
                _vm._v(" "),
                _c("el-table-column", {
                  attrs: { prop: "amount1", label: "数值 1（元）" }
                }),
                _vm._v(" "),
                _c("el-table-column", {
                  attrs: { prop: "amount2", label: "数值 2（元）" }
                }),
                _vm._v(" "),
                _c("el-table-column", {
                  attrs: { prop: "amount3", label: "数值 3（元）" }
                })
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
        tableData: [{
          id: '12987122',
          name: '王小虎',
          amount1: '234',
          amount2: '3.2',
          amount3: 10
        }, {
          id: '12987123',
          name: '王小虎',
          amount1: '165',
          amount2: '4.43',
          amount3: 12
        }, {
          id: '12987124',
          name: '王小虎',
          amount1: '324',
          amount2: '1.9',
          amount3: 9
        }, {
          id: '12987125',
          name: '王小虎',
          amount1: '621',
          amount2: '2.2',
          amount3: 17
        }, {
          id: '12987126',
          name: '王小虎',
          amount1: '539',
          amount2: '4.1',
          amount3: 15
        }]
      };
    },
    methods: {
      arraySpanMethod({ row, column, rowIndex, columnIndex }) {
        if (rowIndex % 2 === 0) {
          if (columnIndex === 0) {
            return [1, 2];
          } else if (columnIndex === 1) {
            return [0, 0];
          }
        }
      },

      objectSpanMethod({ row, column, rowIndex, columnIndex }) {
        if (columnIndex === 0) {
          if (rowIndex % 2 === 0) {
            return {
              rowspan: 2,
              colspan: 1
            };
          } else {
            return {
              rowspan: 0,
              colspan: 0
            };
          }
        }
      }
    }
  };
    return {
      render,
      staticRenderFns,
      ...democomponentExport
    }
  })(),"element-demo19": (function() {
    
    var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      [
        _c(
          "el-table",
          { staticStyle: { width: "100%" }, attrs: { data: _vm.tableData } },
          [
            _c("el-table-column", {
              attrs: { type: "index", index: _vm.indexMethod }
            }),
            _vm._v(" "),
            _c("el-table-column", {
              attrs: { prop: "date", label: "日期", width: "180" }
            }),
            _vm._v(" "),
            _c("el-table-column", {
              attrs: { prop: "name", label: "姓名", width: "180" }
            }),
            _vm._v(" "),
            _c("el-table-column", { attrs: { prop: "address", label: "地址" } })
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
        tableData: [{
          date: '2016-05-02',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333,
          tag: '家'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1517 弄',
          zip: 200333,
          tag: '公司'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1519 弄',
          zip: 200333,
          tag: '家'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1516 弄',
          zip: 200333,
          tag: '公司'
        }],
      }
    },
    methods: {
      indexMethod(index) {
        return index * 2;
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