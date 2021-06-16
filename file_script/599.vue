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
              title: "Title",
              width: "200",
              trigger: "hover",
              content: "this is content, this is content, this is content"
            }
          },
          [
            _c(
              "el-button",
              { attrs: { slot: "reference" }, slot: "reference" },
              [_vm._v("S'active au passage du curseur")]
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
              title: "Title",
              width: "200",
              trigger: "click",
              content: "this is content, this is content, this is content"
            }
          },
          [
            _c(
              "el-button",
              { attrs: { slot: "reference" }, slot: "reference" },
              [_vm._v("S'active en cliquant")]
            )
          ],
          1
        ),
        _vm._v(" "),
        _c("el-popover", {
          ref: "popover",
          attrs: {
            placement: "right",
            title: "Title",
            width: "200",
            trigger: "focus",
            content: "this is content, this is content, this is content"
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
          [_vm._v("S'active au focus")]
        ),
        _vm._v(" "),
        _c(
          "el-popover",
          {
            attrs: {
              placement: "bottom",
              title: "Title",
              width: "200",
              trigger: "manual",
              content: "this is content, this is content, this is content"
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
              [_vm._v("S'active manuellement")]
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
                attrs: { width: "150", property: "date", label: "date" }
              }),
              _vm._v(" "),
              _c("el-table-column", {
                attrs: { width: "100", property: "name", label: "name" }
              }),
              _vm._v(" "),
              _c("el-table-column", {
                attrs: { width: "300", property: "address", label: "address" }
              })
            ],
            1
          ),
          _vm._v(" "),
          _c("el-button", { attrs: { slot: "reference" }, slot: "reference" }, [
            _vm._v("Cliquez pour activer")
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
          name: 'Jack',
          address: 'New York City'
        }, {
          date: '2016-05-04',
          name: 'Jack',
          address: 'New York City'
        }, {
          date: '2016-05-01',
          name: 'Jack',
          address: 'New York City'
        }, {
          date: '2016-05-03',
          name: 'Jack',
          address: 'New York City'
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
          _c("p", [_vm._v("Voulez-vous vraiment supprimer ceci?")]),
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
                [_vm._v("Annuler")]
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
                [_vm._v("Confirmer")]
              )
            ],
            1
          ),
          _vm._v(" "),
          _c("el-button", { attrs: { slot: "reference" }, slot: "reference" }, [
            _vm._v("Supprimer")
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