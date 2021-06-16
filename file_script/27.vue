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
        _c("el-transfer", {
          attrs: { data: _vm.data },
          model: {
            value: _vm.value,
            callback: function($$v) {
              _vm.value = $$v
            },
            expression: "value"
          }
        })
      ]
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true

  
    const democomponentExport = {
    data() {
      const generateData = _ => {
        const data = [];
        for (let i = 1; i <= 15; i++) {
          data.push({
            key: i,
            label: `备选项 ${ i }`,
            disabled: i % 4 === 0
          });
        }
        return data;
      };
      return {
        data: generateData(),
        value: [1, 4]
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
      [
        _c("el-transfer", {
          attrs: {
            filterable: "",
            "filter-method": _vm.filterMethod,
            "filter-placeholder": "请输入城市拼音",
            data: _vm.data
          },
          model: {
            value: _vm.value,
            callback: function($$v) {
              _vm.value = $$v
            },
            expression: "value"
          }
        })
      ]
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true

  
    const democomponentExport = {
    data() {
      const generateData = _ => {
        const data = [];
        const cities = ['上海', '北京', '广州', '深圳', '南京', '西安', '成都'];
        const pinyin = ['shanghai', 'beijing', 'guangzhou', 'shenzhen', 'nanjing', 'xian', 'chengdu'];
        cities.forEach((city, index) => {
          data.push({
            label: city,
            key: index,
            pinyin: pinyin[index]
          });
        });
        return data;
      };
      return {
        data: generateData(),
        value: [],
        filterMethod(query, item) {
          return item.pinyin.indexOf(query) > -1;
        }
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
          "p",
          { staticStyle: { "text-align": "center", margin: "0 0 20px" } },
          [_vm._v("使用 render-content 自定义数据项")]
        ),
        _vm._v(" "),
        _c(
          "div",
          { staticStyle: { "text-align": "center" } },
          [
            _c(
              "el-transfer",
              {
                staticStyle: { "text-align": "left", display: "inline-block" },
                attrs: {
                  filterable: "",
                  "left-default-checked": [2, 3],
                  "right-default-checked": [1],
                  "render-content": _vm.renderFunc,
                  titles: ["Source", "Target"],
                  "button-texts": ["到左边", "到右边"],
                  format: {
                    noChecked: "${total}",
                    hasChecked: "${checked}/${total}"
                  },
                  data: _vm.data
                },
                on: { change: _vm.handleChange },
                model: {
                  value: _vm.value,
                  callback: function($$v) {
                    _vm.value = $$v
                  },
                  expression: "value"
                }
              },
              [
                _c(
                  "el-button",
                  {
                    staticClass: "transfer-footer",
                    attrs: { slot: "left-footer", size: "small" },
                    slot: "left-footer"
                  },
                  [_vm._v("操作")]
                ),
                _vm._v(" "),
                _c(
                  "el-button",
                  {
                    staticClass: "transfer-footer",
                    attrs: { slot: "right-footer", size: "small" },
                    slot: "right-footer"
                  },
                  [_vm._v("操作")]
                )
              ],
              1
            )
          ],
          1
        ),
        _vm._v(" "),
        _c(
          "p",
          { staticStyle: { "text-align": "center", margin: "50px 0 20px" } },
          [_vm._v("使用 scoped-slot 自定义数据项")]
        ),
        _vm._v(" "),
        _c(
          "div",
          { staticStyle: { "text-align": "center" } },
          [
            _c(
              "el-transfer",
              {
                staticStyle: { "text-align": "left", display: "inline-block" },
                attrs: {
                  filterable: "",
                  "left-default-checked": [2, 3],
                  "right-default-checked": [1],
                  titles: ["Source", "Target"],
                  "button-texts": ["到左边", "到右边"],
                  format: {
                    noChecked: "${total}",
                    hasChecked: "${checked}/${total}"
                  },
                  data: _vm.data
                },
                on: { change: _vm.handleChange },
                scopedSlots: _vm._u([
                  {
                    key: "default",
                    fn: function(ref) {
                      var option = ref.option
                      return _c("span", {}, [
                        _vm._v(
                          _vm._s(option.key) + " - " + _vm._s(option.label)
                        )
                      ])
                    }
                  }
                ]),
                model: {
                  value: _vm.value4,
                  callback: function($$v) {
                    _vm.value4 = $$v
                  },
                  expression: "value4"
                }
              },
              [
                _c(
                  "el-button",
                  {
                    staticClass: "transfer-footer",
                    attrs: { slot: "left-footer", size: "small" },
                    slot: "left-footer"
                  },
                  [_vm._v("操作")]
                ),
                _vm._v(" "),
                _c(
                  "el-button",
                  {
                    staticClass: "transfer-footer",
                    attrs: { slot: "right-footer", size: "small" },
                    slot: "right-footer"
                  },
                  [_vm._v("操作")]
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
      const generateData = _ => {
        const data = [];
        for (let i = 1; i <= 15; i++) {
          data.push({
            key: i,
            label: `备选项 ${ i }`,
            disabled: i % 4 === 0
          });
        }
        return data;
      };
      return {
        data: generateData(),
        value: [1],
        value4: [1],
        renderFunc(h, option) {
          return <span>{ option.key } - { option.label }</span>;
        }
      };
    },

    methods: {
      handleChange(value, direction, movedKeys) {
        console.log(value, direction, movedKeys);
      }
    }
  };
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
        _c("el-transfer", {
          attrs: {
            props: {
              key: "value",
              label: "desc"
            },
            data: _vm.data
          },
          model: {
            value: _vm.value,
            callback: function($$v) {
              _vm.value = $$v
            },
            expression: "value"
          }
        })
      ]
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true

  
    const democomponentExport = {
    data() {
      const generateData = _ => {
        const data = [];
        for (let i = 1; i <= 15; i++) {
          data.push({
            value: i,
            desc: `备选项 ${ i }`,
            disabled: i % 4 === 0
          });
        }
        return data;
      };
      return {
        data: generateData(),
        value: []
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