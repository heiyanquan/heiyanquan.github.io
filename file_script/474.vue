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
        { ref: "form", attrs: { model: _vm.form, "label-width": "120px" } },
        [
          _c(
            "el-form-item",
            { attrs: { label: "Activity name" } },
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
            { attrs: { label: "Activity zone" } },
            [
              _c(
                "el-select",
                {
                  attrs: { placeholder: "please select your zone" },
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
                    attrs: { label: "Zone one", value: "shanghai" }
                  }),
                  _vm._v(" "),
                  _c("el-option", {
                    attrs: { label: "Zone two", value: "beijing" }
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
            { attrs: { label: "Activity time" } },
            [
              _c(
                "el-col",
                { attrs: { span: 11 } },
                [
                  _c("el-date-picker", {
                    staticStyle: { width: "100%" },
                    attrs: { type: "date", placeholder: "Pick a date" },
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
                    attrs: { placeholder: "Pick a time" },
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
            { attrs: { label: "Instant delivery" } },
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
            { attrs: { label: "Activity type" } },
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
                    attrs: { label: "Online activities", name: "type" }
                  }),
                  _vm._v(" "),
                  _c("el-checkbox", {
                    attrs: { label: "Promotion activities", name: "type" }
                  }),
                  _vm._v(" "),
                  _c("el-checkbox", {
                    attrs: { label: "Offline activities", name: "type" }
                  }),
                  _vm._v(" "),
                  _c("el-checkbox", {
                    attrs: { label: "Simple brand exposure", name: "type" }
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
            { attrs: { label: "Resources" } },
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
                  _c("el-radio", { attrs: { label: "Sponsor" } }),
                  _vm._v(" "),
                  _c("el-radio", { attrs: { label: "Venue" } })
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "el-form-item",
            { attrs: { label: "Activity form" } },
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
                [_vm._v("Create")]
              ),
              _vm._v(" "),
              _c("el-button", [_vm._v("Cancel")])
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
            { attrs: { label: "Approved by" } },
            [
              _c("el-input", {
                attrs: { placeholder: "Approved by" },
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
            { attrs: { label: "Activity zone" } },
            [
              _c(
                "el-select",
                {
                  attrs: { placeholder: "Activity zone" },
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
                    attrs: { label: "Zone one", value: "shanghai" }
                  }),
                  _vm._v(" "),
                  _c("el-option", {
                    attrs: { label: "Zone two", value: "beijing" }
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
                [_vm._v("Query")]
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
          _c("el-radio-button", { attrs: { label: "left" } }, [_vm._v("Left")]),
          _vm._v(" "),
          _c("el-radio-button", { attrs: { label: "right" } }, [
            _vm._v("Right")
          ]),
          _vm._v(" "),
          _c("el-radio-button", { attrs: { label: "top" } }, [_vm._v("Top")])
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
            "label-width": "100px",
            model: _vm.formLabelAlign
          }
        },
        [
          _c(
            "el-form-item",
            { attrs: { label: "Name" } },
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
            { attrs: { label: "Activity zone" } },
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
            { attrs: { label: "Activity form" } },
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
            "label-width": "120px"
          }
        },
        [
          _c(
            "el-form-item",
            { attrs: { label: "Activity name", prop: "name" } },
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
            { attrs: { label: "Activity zone", prop: "region" } },
            [
              _c(
                "el-select",
                {
                  attrs: { placeholder: "Activity zone" },
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
                    attrs: { label: "Zone one", value: "shanghai" }
                  }),
                  _vm._v(" "),
                  _c("el-option", {
                    attrs: { label: "Zone two", value: "beijing" }
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
            { attrs: { label: "Activity time", required: "" } },
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
                        attrs: { type: "date", placeholder: "Pick a date" },
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
                        attrs: { placeholder: "Pick a time" },
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
            { attrs: { label: "Instant delivery", prop: "delivery" } },
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
            { attrs: { label: "Activity type", prop: "type" } },
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
                    attrs: { label: "Online activities", name: "type" }
                  }),
                  _vm._v(" "),
                  _c("el-checkbox", {
                    attrs: { label: "Promotion activities", name: "type" }
                  }),
                  _vm._v(" "),
                  _c("el-checkbox", {
                    attrs: { label: "Offline activities", name: "type" }
                  }),
                  _vm._v(" "),
                  _c("el-checkbox", {
                    attrs: { label: "Simple brand exposure", name: "type" }
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
            { attrs: { label: "Resources", prop: "resource" } },
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
                  _c("el-radio", { attrs: { label: "Sponsorship" } }),
                  _vm._v(" "),
                  _c("el-radio", { attrs: { label: "Venue" } })
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "el-form-item",
            { attrs: { label: "Activity form", prop: "desc" } },
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
                [_vm._v("Create")]
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
                [_vm._v("Reset")]
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
            { required: true, message: 'Please input Activity name', trigger: 'blur' },
            { min: 3, max: 5, message: 'Length should be 3 to 5', trigger: 'blur' }
          ],
          region: [
            { required: true, message: 'Please select Activity zone', trigger: 'change' }
          ],
          date1: [
            { type: 'date', required: true, message: 'Please pick a date', trigger: 'change' }
          ],
          date2: [
            { type: 'date', required: true, message: 'Please pick a time', trigger: 'change' }
          ],
          type: [
            { type: 'array', required: true, message: 'Please select at least one activity type', trigger: 'change' }
          ],
          resource: [
            { required: true, message: 'Please select activity resource', trigger: 'change' }
          ],
          desc: [
            { required: true, message: 'Please input activity form', trigger: 'blur' }
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
            "label-width": "120px"
          }
        },
        [
          _c(
            "el-form-item",
            { attrs: { label: "Password", prop: "pass" } },
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
            { attrs: { label: "Confirm", prop: "checkPass" } },
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
            { attrs: { label: "Age", prop: "age" } },
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
                [_vm._v("Submit")]
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
                [_vm._v("Reset")]
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
          return callback(new Error('Please input the age'));
        }
        setTimeout(() => {
          if (!Number.isInteger(value)) {
            callback(new Error('Please input digits'));
          } else {
            if (value < 18) {
              callback(new Error('Age must be greater than 18'));
            } else {
              callback();
            }
          }
        }, 1000);
      };
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('Please input the password'));
        } else {
          if (this.ruleForm.checkPass !== '') {
            this.$refs.ruleForm.validateField('checkPass');
          }
          callback();
        }
      };
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('Please input the password again'));
        } else if (value !== this.ruleForm.pass) {
          callback(new Error('Two inputs don\'t match!'));
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
          attrs: { model: _vm.dynamicValidateForm, "label-width": "120px" }
        },
        [
          _c(
            "el-form-item",
            {
              attrs: {
                prop: "email",
                label: "Email",
                rules: [
                  {
                    required: true,
                    message: "Please input email address",
                    trigger: "blur"
                  },
                  {
                    type: "email",
                    message: "Please input correct email address",
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
                  label: "Domain" + index,
                  prop: "domains." + index + ".value",
                  rules: {
                    required: true,
                    message: "domain can not be null",
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
                  [_vm._v("Delete")]
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
                [_vm._v("Submit")]
              ),
              _vm._v(" "),
              _c("el-button", { on: { click: _vm.addDomain } }, [
                _vm._v("New domain")
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
                [_vm._v("Reset")]
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
            key: 1,
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
        var index = this.dynamicValidateForm.domains.indexOf(item);
        if (index !== -1) {
          this.dynamicValidateForm.domains.splice(index, 1);
        }
      },
      addDomain() {
        this.dynamicValidateForm.domains.push({
          key: Date.now(),
          value: ''
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
                label: "age",
                prop: "age",
                rules: [
                  { required: true, message: "age is required" },
                  { type: "number", message: "age must be a number" }
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
                [_vm._v("Submit")]
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
                [_vm._v("Reset")]
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
          attrs: { model: _vm.sizeForm, "label-width": "120px", size: "mini" }
        },
        [
          _c(
            "el-form-item",
            { attrs: { label: "Activity name" } },
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
            { attrs: { label: "Activity zone" } },
            [
              _c(
                "el-select",
                {
                  attrs: { placeholder: "please select your zone" },
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
                    attrs: { label: "Zone one", value: "shanghai" }
                  }),
                  _vm._v(" "),
                  _c("el-option", {
                    attrs: { label: "Zone two", value: "beijing" }
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
            { attrs: { label: "Activity time" } },
            [
              _c(
                "el-col",
                { attrs: { span: 11 } },
                [
                  _c("el-date-picker", {
                    staticStyle: { width: "100%" },
                    attrs: { type: "date", placeholder: "Pick a date" },
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
                    attrs: { placeholder: "Pick a time" },
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
            { attrs: { label: "Activity type" } },
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
                    attrs: { label: "Online activities", name: "type" }
                  }),
                  _vm._v(" "),
                  _c("el-checkbox-button", {
                    attrs: { label: "Promotion activities", name: "type" }
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
            { attrs: { label: "Resources" } },
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
                  _c("el-radio", { attrs: { border: "", label: "Sponsor" } }),
                  _vm._v(" "),
                  _c("el-radio", { attrs: { border: "", label: "Venue" } })
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
                [_vm._v("Create")]
              ),
              _vm._v(" "),
              _c("el-button", [_vm._v("Cancel")])
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