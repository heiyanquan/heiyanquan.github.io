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
        "el-form",
        { ref: "form", attrs: { model: _vm.form, "label-width": "80px" } },
        [
          _c(
            "el-form-item",
            { attrs: { label: "活动名称" } },
            [
              _c("el-input", {
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
            { attrs: { label: "活动区域" } },
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
          ),
          _vm._v(" "),
          _c(
            "el-form-item",
            { attrs: { label: "活动时间" } },
            [
              _c(
                "el-col",
                { attrs: { span: 11 } },
                [
                  _c("el-date-picker", {
                    staticStyle: { width: "100%" },
                    attrs: { type: "date", placeholder: "选择日期" },
                    model: {
                      value: _vm.form.date1,
                      callback: function($$v) {
                        _vm.$set(_vm.form, "date1", $$v)
                      },
                      expression: "form.date1"
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c("el-col", { staticClass: "line", attrs: { span: 2 } }, [
                _vm._v("-")
              ]),
              _vm._v(" "),
              _c(
                "el-col",
                { attrs: { span: 11 } },
                [
                  _c("el-time-picker", {
                    staticStyle: { width: "100%" },
                    attrs: { placeholder: "选择时间" },
                    model: {
                      value: _vm.form.date2,
                      callback: function($$v) {
                        _vm.$set(_vm.form, "date2", $$v)
                      },
                      expression: "form.date2"
                    }
                  })
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "el-form-item",
            { attrs: { label: "即时配送" } },
            [
              _c("el-switch", {
                model: {
                  value: _vm.form.delivery,
                  callback: function($$v) {
                    _vm.$set(_vm.form, "delivery", $$v)
                  },
                  expression: "form.delivery"
                }
              })
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "el-form-item",
            { attrs: { label: "活动性质" } },
            [
              _c(
                "el-checkbox-group",
                {
                  model: {
                    value: _vm.form.type,
                    callback: function($$v) {
                      _vm.$set(_vm.form, "type", $$v)
                    },
                    expression: "form.type"
                  }
                },
                [
                  _c("el-checkbox", {
                    attrs: { label: "美食/餐厅线上活动", name: "type" }
                  }),
                  _vm._v(" "),
                  _c("el-checkbox", {
                    attrs: { label: "地推活动", name: "type" }
                  }),
                  _vm._v(" "),
                  _c("el-checkbox", {
                    attrs: { label: "线下主题活动", name: "type" }
                  }),
                  _vm._v(" "),
                  _c("el-checkbox", {
                    attrs: { label: "单纯品牌曝光", name: "type" }
                  })
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "el-form-item",
            { attrs: { label: "特殊资源" } },
            [
              _c(
                "el-radio-group",
                {
                  model: {
                    value: _vm.form.resource,
                    callback: function($$v) {
                      _vm.$set(_vm.form, "resource", $$v)
                    },
                    expression: "form.resource"
                  }
                },
                [
                  _c("el-radio", { attrs: { label: "线上品牌商赞助" } }),
                  _vm._v(" "),
                  _c("el-radio", { attrs: { label: "线下场地免费" } })
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "el-form-item",
            { attrs: { label: "活动形式" } },
            [
              _c("el-input", {
                attrs: { type: "textarea" },
                model: {
                  value: _vm.form.desc,
                  callback: function($$v) {
                    _vm.$set(_vm.form, "desc", $$v)
                  },
                  expression: "form.desc"
                }
              })
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "el-form-item",
            [
              _c(
                "el-button",
                { attrs: { type: "primary" }, on: { click: _vm.onSubmit } },
                [_vm._v("立即创建")]
              ),
              _vm._v(" "),
              _c("el-button", [_vm._v("取消")])
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
        form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        }
      }
    },
    methods: {
      onSubmit() {
        console.log('submit!');
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
        "el-form",
        {
          staticClass: "demo-form-inline",
          attrs: { inline: true, model: _vm.formInline }
        },
        [
          _c(
            "el-form-item",
            { attrs: { label: "审批人" } },
            [
              _c("el-input", {
                attrs: { placeholder: "审批人" },
                model: {
                  value: _vm.formInline.user,
                  callback: function($$v) {
                    _vm.$set(_vm.formInline, "user", $$v)
                  },
                  expression: "formInline.user"
                }
              })
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "el-form-item",
            { attrs: { label: "活动区域" } },
            [
              _c(
                "el-select",
                {
                  attrs: { placeholder: "活动区域" },
                  model: {
                    value: _vm.formInline.region,
                    callback: function($$v) {
                      _vm.$set(_vm.formInline, "region", $$v)
                    },
                    expression: "formInline.region"
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
          ),
          _vm._v(" "),
          _c(
            "el-form-item",
            [
              _c(
                "el-button",
                { attrs: { type: "primary" }, on: { click: _vm.onSubmit } },
                [_vm._v("查询")]
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
        formInline: {
          user: '',
          region: ''
        }
      }
    },
    methods: {
      onSubmit() {
        console.log('submit!');
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
      _c(
        "el-radio-group",
        {
          attrs: { size: "small" },
          model: {
            value: _vm.labelPosition,
            callback: function($$v) {
              _vm.labelPosition = $$v
            },
            expression: "labelPosition"
          }
        },
        [
          _c("el-radio-button", { attrs: { label: "left" } }, [
            _vm._v("左对齐")
          ]),
          _vm._v(" "),
          _c("el-radio-button", { attrs: { label: "right" } }, [
            _vm._v("右对齐")
          ]),
          _vm._v(" "),
          _c("el-radio-button", { attrs: { label: "top" } }, [
            _vm._v("顶部对齐")
          ])
        ],
        1
      ),
      _vm._v(" "),
      _c("div", { staticStyle: { margin: "20px" } }),
      _vm._v(" "),
      _c(
        "el-form",
        {
          attrs: {
            "label-position": _vm.labelPosition,
            "label-width": "80px",
            model: _vm.formLabelAlign
          }
        },
        [
          _c(
            "el-form-item",
            { attrs: { label: "名称" } },
            [
              _c("el-input", {
                model: {
                  value: _vm.formLabelAlign.name,
                  callback: function($$v) {
                    _vm.$set(_vm.formLabelAlign, "name", $$v)
                  },
                  expression: "formLabelAlign.name"
                }
              })
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "el-form-item",
            { attrs: { label: "活动区域" } },
            [
              _c("el-input", {
                model: {
                  value: _vm.formLabelAlign.region,
                  callback: function($$v) {
                    _vm.$set(_vm.formLabelAlign, "region", $$v)
                  },
                  expression: "formLabelAlign.region"
                }
              })
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "el-form-item",
            { attrs: { label: "活动形式" } },
            [
              _c("el-input", {
                model: {
                  value: _vm.formLabelAlign.type,
                  callback: function($$v) {
                    _vm.$set(_vm.formLabelAlign, "type", $$v)
                  },
                  expression: "formLabelAlign.type"
                }
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
}
var staticRenderFns = []
render._withStripped = true

  
    const democomponentExport = {
    data() {
      return {
        labelPosition: 'right',
        formLabelAlign: {
          name: '',
          region: '',
          type: ''
        }
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
        "el-form",
        {
          ref: "ruleForm",
          staticClass: "demo-ruleForm",
          attrs: {
            model: _vm.ruleForm,
            rules: _vm.rules,
            "label-width": "100px"
          }
        },
        [
          _c(
            "el-form-item",
            { attrs: { label: "活动名称", prop: "name" } },
            [
              _c("el-input", {
                model: {
                  value: _vm.ruleForm.name,
                  callback: function($$v) {
                    _vm.$set(_vm.ruleForm, "name", $$v)
                  },
                  expression: "ruleForm.name"
                }
              })
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "el-form-item",
            { attrs: { label: "活动区域", prop: "region" } },
            [
              _c(
                "el-select",
                {
                  attrs: { placeholder: "请选择活动区域" },
                  model: {
                    value: _vm.ruleForm.region,
                    callback: function($$v) {
                      _vm.$set(_vm.ruleForm, "region", $$v)
                    },
                    expression: "ruleForm.region"
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
          ),
          _vm._v(" "),
          _c(
            "el-form-item",
            { attrs: { label: "活动时间", required: "" } },
            [
              _c(
                "el-col",
                { attrs: { span: 11 } },
                [
                  _c(
                    "el-form-item",
                    { attrs: { prop: "date1" } },
                    [
                      _c("el-date-picker", {
                        staticStyle: { width: "100%" },
                        attrs: { type: "date", placeholder: "选择日期" },
                        model: {
                          value: _vm.ruleForm.date1,
                          callback: function($$v) {
                            _vm.$set(_vm.ruleForm, "date1", $$v)
                          },
                          expression: "ruleForm.date1"
                        }
                      })
                    ],
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c("el-col", { staticClass: "line", attrs: { span: 2 } }, [
                _vm._v("-")
              ]),
              _vm._v(" "),
              _c(
                "el-col",
                { attrs: { span: 11 } },
                [
                  _c(
                    "el-form-item",
                    { attrs: { prop: "date2" } },
                    [
                      _c("el-time-picker", {
                        staticStyle: { width: "100%" },
                        attrs: { placeholder: "选择时间" },
                        model: {
                          value: _vm.ruleForm.date2,
                          callback: function($$v) {
                            _vm.$set(_vm.ruleForm, "date2", $$v)
                          },
                          expression: "ruleForm.date2"
                        }
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
            "el-form-item",
            { attrs: { label: "即时配送", prop: "delivery" } },
            [
              _c("el-switch", {
                model: {
                  value: _vm.ruleForm.delivery,
                  callback: function($$v) {
                    _vm.$set(_vm.ruleForm, "delivery", $$v)
                  },
                  expression: "ruleForm.delivery"
                }
              })
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "el-form-item",
            { attrs: { label: "活动性质", prop: "type" } },
            [
              _c(
                "el-checkbox-group",
                {
                  model: {
                    value: _vm.ruleForm.type,
                    callback: function($$v) {
                      _vm.$set(_vm.ruleForm, "type", $$v)
                    },
                    expression: "ruleForm.type"
                  }
                },
                [
                  _c("el-checkbox", {
                    attrs: { label: "美食/餐厅线上活动", name: "type" }
                  }),
                  _vm._v(" "),
                  _c("el-checkbox", {
                    attrs: { label: "地推活动", name: "type" }
                  }),
                  _vm._v(" "),
                  _c("el-checkbox", {
                    attrs: { label: "线下主题活动", name: "type" }
                  }),
                  _vm._v(" "),
                  _c("el-checkbox", {
                    attrs: { label: "单纯品牌曝光", name: "type" }
                  })
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "el-form-item",
            { attrs: { label: "特殊资源", prop: "resource" } },
            [
              _c(
                "el-radio-group",
                {
                  model: {
                    value: _vm.ruleForm.resource,
                    callback: function($$v) {
                      _vm.$set(_vm.ruleForm, "resource", $$v)
                    },
                    expression: "ruleForm.resource"
                  }
                },
                [
                  _c("el-radio", { attrs: { label: "线上品牌商赞助" } }),
                  _vm._v(" "),
                  _c("el-radio", { attrs: { label: "线下场地免费" } })
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "el-form-item",
            { attrs: { label: "活动形式", prop: "desc" } },
            [
              _c("el-input", {
                attrs: { type: "textarea" },
                model: {
                  value: _vm.ruleForm.desc,
                  callback: function($$v) {
                    _vm.$set(_vm.ruleForm, "desc", $$v)
                  },
                  expression: "ruleForm.desc"
                }
              })
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "el-form-item",
            [
              _c(
                "el-button",
                {
                  attrs: { type: "primary" },
                  on: {
                    click: function($event) {
                      _vm.submitForm("ruleForm")
                    }
                  }
                },
                [_vm._v("立即创建")]
              ),
              _vm._v(" "),
              _c(
                "el-button",
                {
                  on: {
                    click: function($event) {
                      _vm.resetForm("ruleForm")
                    }
                  }
                },
                [_vm._v("重置")]
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
        ruleForm: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },
        rules: {
          name: [
            { required: true, message: '请输入活动名称', trigger: 'blur' },
            { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          ],
          region: [
            { required: true, message: '请选择活动区域', trigger: 'change' }
          ],
          date1: [
            { type: 'date', required: true, message: '请选择日期', trigger: 'change' }
          ],
          date2: [
            { type: 'date', required: true, message: '请选择时间', trigger: 'change' }
          ],
          type: [
            { type: 'array', required: true, message: '请至少选择一个活动性质', trigger: 'change' }
          ],
          resource: [
            { required: true, message: '请选择活动资源', trigger: 'change' }
          ],
          desc: [
            { required: true, message: '请填写活动形式', trigger: 'blur' }
          ]
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
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
      _c(
        "el-form",
        {
          ref: "ruleForm",
          staticClass: "demo-ruleForm",
          attrs: {
            model: _vm.ruleForm,
            "status-icon": "",
            rules: _vm.rules,
            "label-width": "100px"
          }
        },
        [
          _c(
            "el-form-item",
            { attrs: { label: "密码", prop: "pass" } },
            [
              _c("el-input", {
                attrs: { type: "password", autocomplete: "off" },
                model: {
                  value: _vm.ruleForm.pass,
                  callback: function($$v) {
                    _vm.$set(_vm.ruleForm, "pass", $$v)
                  },
                  expression: "ruleForm.pass"
                }
              })
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "el-form-item",
            { attrs: { label: "确认密码", prop: "checkPass" } },
            [
              _c("el-input", {
                attrs: { type: "password", autocomplete: "off" },
                model: {
                  value: _vm.ruleForm.checkPass,
                  callback: function($$v) {
                    _vm.$set(_vm.ruleForm, "checkPass", $$v)
                  },
                  expression: "ruleForm.checkPass"
                }
              })
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "el-form-item",
            { attrs: { label: "年龄", prop: "age" } },
            [
              _c("el-input", {
                model: {
                  value: _vm.ruleForm.age,
                  callback: function($$v) {
                    _vm.$set(_vm.ruleForm, "age", _vm._n($$v))
                  },
                  expression: "ruleForm.age"
                }
              })
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "el-form-item",
            [
              _c(
                "el-button",
                {
                  attrs: { type: "primary" },
                  on: {
                    click: function($event) {
                      _vm.submitForm("ruleForm")
                    }
                  }
                },
                [_vm._v("提交")]
              ),
              _vm._v(" "),
              _c(
                "el-button",
                {
                  on: {
                    click: function($event) {
                      _vm.resetForm("ruleForm")
                    }
                  }
                },
                [_vm._v("重置")]
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
      var checkAge = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('年龄不能为空'));
        }
        setTimeout(() => {
          if (!Number.isInteger(value)) {
            callback(new Error('请输入数字值'));
          } else {
            if (value < 18) {
              callback(new Error('必须年满18岁'));
            } else {
              callback();
            }
          }
        }, 1000);
      };
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          if (this.ruleForm.checkPass !== '') {
            this.$refs.ruleForm.validateField('checkPass');
          }
          callback();
        }
      };
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.ruleForm.pass) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
      return {
        ruleForm: {
          pass: '',
          checkPass: '',
          age: ''
        },
        rules: {
          pass: [
            { validator: validatePass, trigger: 'blur' }
          ],
          checkPass: [
            { validator: validatePass2, trigger: 'blur' }
          ],
          age: [
            { validator: checkAge, trigger: 'blur' }
          ]
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
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
      _c(
        "el-form",
        {
          ref: "dynamicValidateForm",
          staticClass: "demo-dynamic",
          attrs: { model: _vm.dynamicValidateForm, "label-width": "100px" }
        },
        [
          _c(
            "el-form-item",
            {
              attrs: {
                prop: "email",
                label: "邮箱",
                rules: [
                  {
                    required: true,
                    message: "请输入邮箱地址",
                    trigger: "blur"
                  },
                  {
                    type: "email",
                    message: "请输入正确的邮箱地址",
                    trigger: ["blur", "change"]
                  }
                ]
              }
            },
            [
              _c("el-input", {
                model: {
                  value: _vm.dynamicValidateForm.email,
                  callback: function($$v) {
                    _vm.$set(_vm.dynamicValidateForm, "email", $$v)
                  },
                  expression: "dynamicValidateForm.email"
                }
              })
            ],
            1
          ),
          _vm._v(" "),
          _vm._l(_vm.dynamicValidateForm.domains, function(domain, index) {
            return _c(
              "el-form-item",
              {
                key: domain.key,
                attrs: {
                  label: "域名" + index,
                  prop: "domains." + index + ".value",
                  rules: {
                    required: true,
                    message: "域名不能为空",
                    trigger: "blur"
                  }
                }
              },
              [
                _c("el-input", {
                  model: {
                    value: domain.value,
                    callback: function($$v) {
                      _vm.$set(domain, "value", $$v)
                    },
                    expression: "domain.value"
                  }
                }),
                _c(
                  "el-button",
                  {
                    on: {
                      click: function($event) {
                        $event.preventDefault()
                        _vm.removeDomain(domain)
                      }
                    }
                  },
                  [_vm._v("删除")]
                )
              ],
              1
            )
          }),
          _vm._v(" "),
          _c(
            "el-form-item",
            [
              _c(
                "el-button",
                {
                  attrs: { type: "primary" },
                  on: {
                    click: function($event) {
                      _vm.submitForm("dynamicValidateForm")
                    }
                  }
                },
                [_vm._v("提交")]
              ),
              _vm._v(" "),
              _c("el-button", { on: { click: _vm.addDomain } }, [
                _vm._v("新增域名")
              ]),
              _vm._v(" "),
              _c(
                "el-button",
                {
                  on: {
                    click: function($event) {
                      _vm.resetForm("dynamicValidateForm")
                    }
                  }
                },
                [_vm._v("重置")]
              )
            ],
            1
          )
        ],
        2
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
        dynamicValidateForm: {
          domains: [{
            value: ''
          }],
          email: ''
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },
      removeDomain(item) {
        var index = this.dynamicValidateForm.domains.indexOf(item)
        if (index !== -1) {
          this.dynamicValidateForm.domains.splice(index, 1)
        }
      },
      addDomain() {
        this.dynamicValidateForm.domains.push({
          value: '',
          key: Date.now()
        });
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
      _c(
        "el-form",
        {
          ref: "numberValidateForm",
          staticClass: "demo-ruleForm",
          attrs: { model: _vm.numberValidateForm, "label-width": "100px" }
        },
        [
          _c(
            "el-form-item",
            {
              attrs: {
                label: "年龄",
                prop: "age",
                rules: [
                  { required: true, message: "年龄不能为空" },
                  { type: "number", message: "年龄必须为数字值" }
                ]
              }
            },
            [
              _c("el-input", {
                attrs: { type: "age", autocomplete: "off" },
                model: {
                  value: _vm.numberValidateForm.age,
                  callback: function($$v) {
                    _vm.$set(_vm.numberValidateForm, "age", _vm._n($$v))
                  },
                  expression: "numberValidateForm.age"
                }
              })
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "el-form-item",
            [
              _c(
                "el-button",
                {
                  attrs: { type: "primary" },
                  on: {
                    click: function($event) {
                      _vm.submitForm("numberValidateForm")
                    }
                  }
                },
                [_vm._v("提交")]
              ),
              _vm._v(" "),
              _c(
                "el-button",
                {
                  on: {
                    click: function($event) {
                      _vm.resetForm("numberValidateForm")
                    }
                  }
                },
                [_vm._v("重置")]
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
        numberValidateForm: {
          age: ''
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
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
      _c(
        "el-form",
        {
          ref: "form",
          attrs: { model: _vm.sizeForm, "label-width": "80px", size: "mini" }
        },
        [
          _c(
            "el-form-item",
            { attrs: { label: "活动名称" } },
            [
              _c("el-input", {
                model: {
                  value: _vm.sizeForm.name,
                  callback: function($$v) {
                    _vm.$set(_vm.sizeForm, "name", $$v)
                  },
                  expression: "sizeForm.name"
                }
              })
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "el-form-item",
            { attrs: { label: "活动区域" } },
            [
              _c(
                "el-select",
                {
                  attrs: { placeholder: "请选择活动区域" },
                  model: {
                    value: _vm.sizeForm.region,
                    callback: function($$v) {
                      _vm.$set(_vm.sizeForm, "region", $$v)
                    },
                    expression: "sizeForm.region"
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
          ),
          _vm._v(" "),
          _c(
            "el-form-item",
            { attrs: { label: "活动时间" } },
            [
              _c(
                "el-col",
                { attrs: { span: 11 } },
                [
                  _c("el-date-picker", {
                    staticStyle: { width: "100%" },
                    attrs: { type: "date", placeholder: "选择日期" },
                    model: {
                      value: _vm.sizeForm.date1,
                      callback: function($$v) {
                        _vm.$set(_vm.sizeForm, "date1", $$v)
                      },
                      expression: "sizeForm.date1"
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c("el-col", { staticClass: "line", attrs: { span: 2 } }, [
                _vm._v("-")
              ]),
              _vm._v(" "),
              _c(
                "el-col",
                { attrs: { span: 11 } },
                [
                  _c("el-time-picker", {
                    staticStyle: { width: "100%" },
                    attrs: { placeholder: "选择时间" },
                    model: {
                      value: _vm.sizeForm.date2,
                      callback: function($$v) {
                        _vm.$set(_vm.sizeForm, "date2", $$v)
                      },
                      expression: "sizeForm.date2"
                    }
                  })
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "el-form-item",
            { attrs: { label: "活动性质" } },
            [
              _c(
                "el-checkbox-group",
                {
                  model: {
                    value: _vm.sizeForm.type,
                    callback: function($$v) {
                      _vm.$set(_vm.sizeForm, "type", $$v)
                    },
                    expression: "sizeForm.type"
                  }
                },
                [
                  _c("el-checkbox-button", {
                    attrs: { label: "美食/餐厅线上活动", name: "type" }
                  }),
                  _vm._v(" "),
                  _c("el-checkbox-button", {
                    attrs: { label: "地推活动", name: "type" }
                  }),
                  _vm._v(" "),
                  _c("el-checkbox-button", {
                    attrs: { label: "线下主题活动", name: "type" }
                  })
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "el-form-item",
            { attrs: { label: "特殊资源" } },
            [
              _c(
                "el-radio-group",
                {
                  attrs: { size: "medium" },
                  model: {
                    value: _vm.sizeForm.resource,
                    callback: function($$v) {
                      _vm.$set(_vm.sizeForm, "resource", $$v)
                    },
                    expression: "sizeForm.resource"
                  }
                },
                [
                  _c("el-radio", {
                    attrs: { border: "", label: "线上品牌商赞助" }
                  }),
                  _vm._v(" "),
                  _c("el-radio", {
                    attrs: { border: "", label: "线下场地免费" }
                  })
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "el-form-item",
            { attrs: { size: "large" } },
            [
              _c(
                "el-button",
                { attrs: { type: "primary" }, on: { click: _vm.onSubmit } },
                [_vm._v("立即创建")]
              ),
              _vm._v(" "),
              _c("el-button", [_vm._v("取消")])
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
        sizeForm: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        }
      };
    },
    methods: {
      onSubmit() {
        console.log('submit!');
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