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
          "ul",
          {
            directives: [
              {
                name: "infinite-scroll",
                rawName: "v-infinite-scroll",
                value: _vm.load,
                expression: "load"
              }
            ],
            staticClass: "infinite-list",
            staticStyle: { overflow: "auto" }
          },
          _vm._l(_vm.count, function(i) {
            return _c("li", { staticClass: "infinite-list-item" }, [
              _vm._v(_vm._s(i))
            ])
          }),
          0
        )
      ]
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true

  
    const democomponentExport = {
    data () {
      return {
        count: 0
      }
    },
    methods: {
      load () {
        this.count += 2
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
          "div",
          {
            staticClass: "infinite-list-wrapper",
            staticStyle: { overflow: "auto" }
          },
          [
            _c(
              "ul",
              {
                directives: [
                  {
                    name: "infinite-scroll",
                    rawName: "v-infinite-scroll",
                    value: _vm.load,
                    expression: "load"
                  }
                ],
                staticClass: "list",
                attrs: { "infinite-scroll-disabled": "disabled" }
              },
              _vm._l(_vm.count, function(i) {
                return _c("li", { staticClass: "list-item" }, [
                  _vm._v(_vm._s(i))
                ])
              }),
              0
            ),
            _vm._v(" "),
            _vm.loading ? _c("p", [_vm._v("加载中...")]) : _vm._e(),
            _vm._v(" "),
            _vm.noMore ? _c("p", [_vm._v("没有更多了")]) : _vm._e()
          ]
        )
      ]
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true

  
    const democomponentExport = {
    data () {
      return {
        count: 10,
        loading: false
      }
    },
    computed: {
      noMore () {
        return this.count >= 20
      },
      disabled () {
        return this.loading || this.noMore
      }
    },
    methods: {
      load () {
        this.loading = true
        setTimeout(() => {
          this.count += 2
          this.loading = false
        }, 2000)
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