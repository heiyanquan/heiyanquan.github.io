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
        "el-upload",
        {
          staticClass: "upload-demo",
          attrs: {
            action: "https://jsonplaceholder.typicode.com/posts/",
            "on-preview": _vm.handlePreview,
            "on-remove": _vm.handleRemove,
            "before-remove": _vm.beforeRemove,
            multiple: "",
            limit: 3,
            "on-exceed": _vm.handleExceed,
            "file-list": _vm.fileList
          }
        },
        [
          _c("el-button", { attrs: { size: "small", type: "primary" } }, [
            _vm._v("点击上传")
          ]),
          _vm._v(" "),
          _c(
            "div",
            {
              staticClass: "el-upload__tip",
              attrs: { slot: "tip" },
              slot: "tip"
            },
            [_vm._v("只能上传jpg/png文件，且不超过500kb")]
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
        fileList: [{name: 'food.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}, {name: 'food2.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}]
      };
    },
    methods: {
      handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePreview(file) {
        console.log(file);
      },
      handleExceed(files, fileList) {
        this.$message.warning(`当前限制选择 3 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`);
      },
      beforeRemove(file, fileList) {
        return this.$confirm(`确定移除 ${ file.name }？`);
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
        "el-upload",
        {
          staticClass: "avatar-uploader",
          attrs: {
            action: "https://jsonplaceholder.typicode.com/posts/",
            "show-file-list": false,
            "on-success": _vm.handleAvatarSuccess,
            "before-upload": _vm.beforeAvatarUpload
          }
        },
        [
          _vm.imageUrl
            ? _c("img", { staticClass: "avatar", attrs: { src: _vm.imageUrl } })
            : _c("i", { staticClass: "el-icon-plus avatar-uploader-icon" })
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
        imageUrl: ''
      };
    },
    methods: {
      handleAvatarSuccess(res, file) {
        this.imageUrl = URL.createObjectURL(file.raw);
      },
      beforeAvatarUpload(file) {
        const isJPG = file.type === 'image/jpeg';
        const isLt2M = file.size / 1024 / 1024 < 2;

        if (!isJPG) {
          this.$message.error('上传头像图片只能是 JPG 格式!');
        }
        if (!isLt2M) {
          this.$message.error('上传头像图片大小不能超过 2MB!');
        }
        return isJPG && isLt2M;
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
        "el-upload",
        {
          attrs: {
            action: "https://jsonplaceholder.typicode.com/posts/",
            "list-type": "picture-card",
            "on-preview": _vm.handlePictureCardPreview,
            "on-remove": _vm.handleRemove
          }
        },
        [_c("i", { staticClass: "el-icon-plus" })]
      ),
      _vm._v(" "),
      _c(
        "el-dialog",
        {
          attrs: { visible: _vm.dialogVisible },
          on: {
            "update:visible": function($event) {
              _vm.dialogVisible = $event
            }
          }
        },
        [
          _c("img", {
            attrs: { width: "100%", src: _vm.dialogImageUrl, alt: "" }
          })
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
        dialogImageUrl: '',
        dialogVisible: false
      };
    },
    methods: {
      handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePictureCardPreview(file) {
        this.dialogImageUrl = file.url;
        this.dialogVisible = true;
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
        "el-upload",
        {
          attrs: {
            action: "#",
            "list-type": "picture-card",
            "auto-upload": false
          },
          scopedSlots: _vm._u([
            {
              key: "file",
              fn: function(ref) {
                var file = ref.file
                return _c("div", {}, [
                  _c("img", {
                    staticClass: "el-upload-list__item-thumbnail",
                    attrs: { src: file.url, alt: "" }
                  }),
                  _vm._v(" "),
                  _c("span", { staticClass: "el-upload-list__item-actions" }, [
                    _c(
                      "span",
                      {
                        staticClass: "el-upload-list__item-preview",
                        on: {
                          click: function($event) {
                            _vm.handlePictureCardPreview(file)
                          }
                        }
                      },
                      [_c("i", { staticClass: "el-icon-zoom-in" })]
                    ),
                    _vm._v(" "),
                    !_vm.disabled
                      ? _c(
                          "span",
                          {
                            staticClass: "el-upload-list__item-delete",
                            on: {
                              click: function($event) {
                                _vm.handleDownload(file)
                              }
                            }
                          },
                          [_c("i", { staticClass: "el-icon-download" })]
                        )
                      : _vm._e(),
                    _vm._v(" "),
                    !_vm.disabled
                      ? _c(
                          "span",
                          {
                            staticClass: "el-upload-list__item-delete",
                            on: {
                              click: function($event) {
                                _vm.handleRemove(file)
                              }
                            }
                          },
                          [_c("i", { staticClass: "el-icon-delete" })]
                        )
                      : _vm._e()
                  ])
                ])
              }
            }
          ])
        },
        [
          _c("i", {
            staticClass: "el-icon-plus",
            attrs: { slot: "default" },
            slot: "default"
          })
        ]
      ),
      _vm._v(" "),
      _c(
        "el-dialog",
        {
          attrs: { visible: _vm.dialogVisible },
          on: {
            "update:visible": function($event) {
              _vm.dialogVisible = $event
            }
          }
        },
        [
          _c("img", {
            attrs: { width: "100%", src: _vm.dialogImageUrl, alt: "" }
          })
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
        dialogImageUrl: '',
        dialogVisible: false,
        disabled: false
      };
    },
    methods: {
      handleRemove(file) {
        console.log(file);
      },
      handlePictureCardPreview(file) {
        this.dialogImageUrl = file.url;
        this.dialogVisible = true;
      },
      handleDownload(file) {
        console.log(file);
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
        "el-upload",
        {
          staticClass: "upload-demo",
          attrs: {
            action: "https://jsonplaceholder.typicode.com/posts/",
            "on-preview": _vm.handlePreview,
            "on-remove": _vm.handleRemove,
            "file-list": _vm.fileList,
            "list-type": "picture"
          }
        },
        [
          _c("el-button", { attrs: { size: "small", type: "primary" } }, [
            _vm._v("点击上传")
          ]),
          _vm._v(" "),
          _c(
            "div",
            {
              staticClass: "el-upload__tip",
              attrs: { slot: "tip" },
              slot: "tip"
            },
            [_vm._v("只能上传jpg/png文件，且不超过500kb")]
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
        fileList: [{name: 'food.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}, {name: 'food2.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}]
      };
    },
    methods: {
      handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePreview(file) {
        console.log(file);
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
        "el-upload",
        {
          staticClass: "upload-demo",
          attrs: {
            action: "https://jsonplaceholder.typicode.com/posts/",
            "on-change": _vm.handleChange,
            "file-list": _vm.fileList
          }
        },
        [
          _c("el-button", { attrs: { size: "small", type: "primary" } }, [
            _vm._v("点击上传")
          ]),
          _vm._v(" "),
          _c(
            "div",
            {
              staticClass: "el-upload__tip",
              attrs: { slot: "tip" },
              slot: "tip"
            },
            [_vm._v("只能上传jpg/png文件，且不超过500kb")]
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
        fileList: [{
          name: 'food.jpeg',
          url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'
        }, {
          name: 'food2.jpeg',
          url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'
        }]
      };
    },
    methods: {
      handleChange(file, fileList) {
        this.fileList = fileList.slice(-3);
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
        "el-upload",
        {
          staticClass: "upload-demo",
          attrs: {
            drag: "",
            action: "https://jsonplaceholder.typicode.com/posts/",
            multiple: ""
          }
        },
        [
          _c("i", { staticClass: "el-icon-upload" }),
          _vm._v(" "),
          _c("div", { staticClass: "el-upload__text" }, [
            _vm._v("将文件拖到此处，或"),
            _c("em", [_vm._v("点击上传")])
          ]),
          _vm._v(" "),
          _c(
            "div",
            {
              staticClass: "el-upload__tip",
              attrs: { slot: "tip" },
              slot: "tip"
            },
            [_vm._v("只能上传jpg/png文件，且不超过500kb")]
          )
        ]
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true

  
    const democomponentExport = {}
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
        "el-upload",
        {
          ref: "upload",
          staticClass: "upload-demo",
          attrs: {
            action: "https://jsonplaceholder.typicode.com/posts/",
            "on-preview": _vm.handlePreview,
            "on-remove": _vm.handleRemove,
            "file-list": _vm.fileList,
            "auto-upload": false
          }
        },
        [
          _c(
            "el-button",
            {
              attrs: { slot: "trigger", size: "small", type: "primary" },
              slot: "trigger"
            },
            [_vm._v("选取文件")]
          ),
          _vm._v(" "),
          _c(
            "el-button",
            {
              staticStyle: { "margin-left": "10px" },
              attrs: { size: "small", type: "success" },
              on: { click: _vm.submitUpload }
            },
            [_vm._v("上传到服务器")]
          ),
          _vm._v(" "),
          _c(
            "div",
            {
              staticClass: "el-upload__tip",
              attrs: { slot: "tip" },
              slot: "tip"
            },
            [_vm._v("只能上传jpg/png文件，且不超过500kb")]
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
        fileList: [{name: 'food.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}, {name: 'food2.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}]
      };
    },
    methods: {
      submitUpload() {
        this.$refs.upload.submit();
      },
      handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePreview(file) {
        console.log(file);
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