<script>
      export default {
        name: 'component-doc',
        components: {
          "element-demo0": (function() {
    
    var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c(
      "div",
      { staticClass: "demo-image" },
      _vm._l(_vm.fits, function(fit) {
        return _c(
          "div",
          { key: fit, staticClass: "block" },
          [
            _c("span", { staticClass: "demonstration" }, [_vm._v(_vm._s(fit))]),
            _vm._v(" "),
            _c("el-image", {
              staticStyle: { width: "100px", height: "100px" },
              attrs: { src: _vm.url, fit: fit }
            })
          ],
          1
        )
      }),
      0
    )
  ])
}
var staticRenderFns = []
render._withStripped = true

  
    const democomponentExport = {
    data() {
      return {
        fits: ['fill', 'contain', 'cover', 'none', 'scale-down'],
        url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg'
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
  return _c("div", [
    _c("div", { staticClass: "demo-image__placeholder" }, [
      _c(
        "div",
        { staticClass: "block" },
        [
          _c("span", { staticClass: "demonstration" }, [_vm._v("Default")]),
          _vm._v(" "),
          _c("el-image", { attrs: { src: _vm.src } })
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "block" },
        [
          _c("span", { staticClass: "demonstration" }, [_vm._v("Custom")]),
          _vm._v(" "),
          _c("el-image", { attrs: { src: _vm.src } }, [
            _c(
              "div",
              {
                staticClass: "image-slot",
                attrs: { slot: "placeholder" },
                slot: "placeholder"
              },
              [
                _vm._v("\n        Loading"),
                _c("span", { staticClass: "dot" }, [_vm._v("...")])
              ]
            )
          ])
        ],
        1
      )
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true

  
    const democomponentExport = {
    data() {
      return {
        src: 'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg'
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
  return _c("div", [
    _c("div", { staticClass: "demo-image__error" }, [
      _c(
        "div",
        { staticClass: "block" },
        [
          _c("span", { staticClass: "demonstration" }, [_vm._v("Default")]),
          _vm._v(" "),
          _c("el-image")
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "block" },
        [
          _c("span", { staticClass: "demonstration" }, [_vm._v("Custom")]),
          _vm._v(" "),
          _c("el-image", [
            _c(
              "div",
              {
                staticClass: "image-slot",
                attrs: { slot: "error" },
                slot: "error"
              },
              [_c("i", { staticClass: "el-icon-picture-outline" })]
            )
          ])
        ],
        1
      )
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true

  
    const democomponentExport = {}
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
  return _c("div", [
    _c(
      "div",
      { staticClass: "demo-image__lazy" },
      _vm._l(_vm.urls, function(url) {
        return _c("el-image", { key: url, attrs: { src: url, lazy: "" } })
      }),
      1
    )
  ])
}
var staticRenderFns = []
render._withStripped = true

  
    const democomponentExport = {
    data() {
      return {
        urls: [
          'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg',
          'https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg',
          'https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg',
          'https://fuss10.elemecdn.com/9/bb/e27858e973f5d7d3904835f46abbdjpeg.jpeg',
          'https://fuss10.elemecdn.com/d/e6/c4d93a3805b3ce3f323f7974e6f78jpeg.jpeg',
          'https://fuss10.elemecdn.com/3/28/bbf893f792f03a54408b3b7a7ebf0jpeg.jpeg',
          'https://fuss10.elemecdn.com/2/11/6535bcfb26e4c79b48ddde44f4b6fjpeg.jpeg'
        ]
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
  return _c("div", [
    _c(
      "div",
      { staticClass: "demo-image__preview" },
      [
        _c("el-image", {
          staticStyle: { width: "100px", height: "100px" },
          attrs: { src: _vm.url, "preview-src-list": _vm.srcList }
        })
      ],
      1
    )
  ])
}
var staticRenderFns = []
render._withStripped = true

  
    const democomponentExport = {
    data() {
      return {
        url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
        srcList: [
          'https://fuss10.elemecdn.com/8/27/f01c15bb73e1ef3793e64e6b7bbccjpeg.jpeg',
          'https://fuss10.elemecdn.com/1/8e/aeffeb4de74e2fde4bd74fc7b4486jpeg.jpeg'
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