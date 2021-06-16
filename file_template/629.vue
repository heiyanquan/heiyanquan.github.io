<h2 id="tree-shu-xing-kong-jian"><a class="header-anchor" href="#tree-shu-xing-kong-jian">¶</a> Tree 树形控件</h2>
<p>用清晰的层级结构展示信息，可展开或折叠。</p>
<h3 id="ji-chu-yong-fa"><a class="header-anchor" href="#ji-chu-yong-fa">¶</a> 基础用法</h3>
<p>基础的树形结构展示。</p>
<demo-block>
        
        <template slot="source"><element-demo0 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;el-tree :data=&quot;data&quot; :props=&quot;defaultProps&quot; @node-click=&quot;handleNodeClick&quot;&gt;&lt;/el-tree&gt;

&lt;script&gt;
  export default {
    data() {
      return {
        data: [{
          label: '一级 1',
          children: [{
            label: '二级 1-1',
            children: [{
              label: '三级 1-1-1'
            }]
          }]
        }, {
          label: '一级 2',
          children: [{
            label: '二级 2-1',
            children: [{
              label: '三级 2-1-1'
            }]
          }, {
            label: '二级 2-2',
            children: [{
              label: '三级 2-2-1'
            }]
          }]
        }, {
          label: '一级 3',
          children: [{
            label: '二级 3-1',
            children: [{
              label: '三级 3-1-1'
            }]
          }, {
            label: '二级 3-2',
            children: [{
              label: '三级 3-2-1'
            }]
          }]
        }],
        defaultProps: {
          children: 'children',
          label: 'label'
        }
      };
    },
    methods: {
      handleNodeClick(data) {
        console.log(data);
      }
    }
  };
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="ke-xuan-ze"><a class="header-anchor" href="#ke-xuan-ze">¶</a> 可选择</h3>
<p>适用于需要选择层级时使用。</p>
<demo-block>
        <div><p>本例还展示了动态加载节点数据的方法。</p>
</div>
        <template slot="source"><element-demo1 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;el-tree
  :props=&quot;props&quot;
  :load=&quot;loadNode&quot;
  lazy
  show-checkbox
  @check-change=&quot;handleCheckChange&quot;&gt;
&lt;/el-tree&gt;

&lt;script&gt;
  export default {
    data() {
      return {
        props: {
          label: 'name',
          children: 'zones'
        },
        count: 1
      };
    },
    methods: {
      handleCheckChange(data, checked, indeterminate) {
        console.log(data, checked, indeterminate);
      },
      handleNodeClick(data) {
        console.log(data);
      },
      loadNode(node, resolve) {
        if (node.level === 0) {
          return resolve([{ name: 'region1' }, { name: 'region2' }]);
        }
        if (node.level &gt; 3) return resolve([]);

        var hasChild;
        if (node.data.name === 'region1') {
          hasChild = true;
        } else if (node.data.name === 'region2') {
          hasChild = false;
        } else {
          hasChild = Math.random() &gt; 0.5;
        }

        setTimeout(() =&gt; {
          var data;
          if (hasChild) {
            data = [{
              name: 'zone' + this.count++
            }, {
              name: 'zone' + this.count++
            }];
          } else {
            data = [];
          }

          resolve(data);
        }, 500);
      }
    }
  };
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="lan-jia-zai-zi-ding-yi-xie-zi-jie-dian"><a class="header-anchor" href="#lan-jia-zai-zi-ding-yi-xie-zi-jie-dian">¶</a> 懒加载自定义叶子节点</h3>
<demo-block>
        <div><p>由于在点击节点时才进行该层数据的获取，默认情况下 Tree 无法预知某个节点是否为叶子节点，所以会为每个节点添加一个下拉按钮，如果节点没有下层数据，则点击后下拉按钮会消失。同时，你也可以提前告知 Tree 某个节点是否为叶子节点，从而避免在叶子节点前渲染下拉按钮。</p>
</div>
        <template slot="source"><element-demo2 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;el-tree
  :props=&quot;props&quot;
  :load=&quot;loadNode&quot;
  lazy
  show-checkbox&gt;
&lt;/el-tree&gt;

&lt;script&gt;
  export default {
    data() {
      return {
        props: {
          label: 'name',
          children: 'zones',
          isLeaf: 'leaf'
        },
      };
    },
    methods: {
      loadNode(node, resolve) {
        if (node.level === 0) {
          return resolve([{ name: 'region' }]);
        }
        if (node.level &gt; 1) return resolve([]);

        setTimeout(() =&gt; {
          const data = [{
            name: 'leaf',
            leaf: true
          }, {
            name: 'zone'
          }];

          resolve(data);
        }, 500);
      }
    }
  };
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="mo-ren-zhan-kai-he-mo-ren-xuan-zhong"><a class="header-anchor" href="#mo-ren-zhan-kai-he-mo-ren-xuan-zhong">¶</a> 默认展开和默认选中</h3>
<p>可将 Tree 的某些节点设置为默认展开或默认选中</p>
<demo-block>
        <div><p>分别通过<code>default-expanded-keys</code>和<code>default-checked-keys</code>设置默认展开和默认选中的节点。需要注意的是，此时必须设置<code>node-key</code>，其值为节点数据中的一个字段名，该字段在整棵树中是唯一的。</p>
</div>
        <template slot="source"><element-demo3 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;el-tree
  :data=&quot;data&quot;
  show-checkbox
  node-key=&quot;id&quot;
  :default-expanded-keys=&quot;[2, 3]&quot;
  :default-checked-keys=&quot;[5]&quot;
  :props=&quot;defaultProps&quot;&gt;
&lt;/el-tree&gt;

&lt;script&gt;
  export default {
    data() {
      return {
        data: [{
          id: 1,
          label: '一级 1',
          children: [{
            id: 4,
            label: '二级 1-1',
            children: [{
              id: 9,
              label: '三级 1-1-1'
            }, {
              id: 10,
              label: '三级 1-1-2'
            }]
          }]
        }, {
          id: 2,
          label: '一级 2',
          children: [{
            id: 5,
            label: '二级 2-1'
          }, {
            id: 6,
            label: '二级 2-2'
          }]
        }, {
          id: 3,
          label: '一级 3',
          children: [{
            id: 7,
            label: '二级 3-1'
          }, {
            id: 8,
            label: '二级 3-2'
          }]
        }],
        defaultProps: {
          children: 'children',
          label: 'label'
        }
      };
    }
  };
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="jin-yong-zhuang-tai"><a class="header-anchor" href="#jin-yong-zhuang-tai">¶</a> 禁用状态</h3>
<p>可将 Tree 的某些节点设置为禁用状态</p>
<demo-block>
        <div><p>通过<code>disabled</code>设置禁用状态。</p>
</div>
        <template slot="source"><element-demo4 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;el-tree
  :data=&quot;data&quot;
  show-checkbox
  node-key=&quot;id&quot;
  :default-expanded-keys=&quot;[2, 3]&quot;
  :default-checked-keys=&quot;[5]&quot;&gt;
&lt;/el-tree&gt;

&lt;script&gt;
  export default {
    data() {
      return {
        data: [{
          id: 1,
          label: '一级 2',
          children: [{
            id: 3,
            label: '二级 2-1',
            children: [{
              id: 4,
              label: '三级 3-1-1'
            }, {
              id: 5,
              label: '三级 3-1-2',
              disabled: true
            }]
          }, {
            id: 2,
            label: '二级 2-2',
            disabled: true,
            children: [{
              id: 6,
              label: '三级 3-2-1'
            }, {
              id: 7,
              label: '三级 3-2-2',
              disabled: true
            }]
          }]
        }],
        defaultProps: {
          children: 'children',
          label: 'label'
        }
      };
    }
  };
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="shu-jie-dian-de-xuan-ze"><a class="header-anchor" href="#shu-jie-dian-de-xuan-ze">¶</a> 树节点的选择</h3>
<demo-block>
        <div><p>本例展示如何获取和设置选中节点。获取和设置各有两种方式：通过 node 或通过 key。如果需要通过 key 来获取或设置，则必须设置<code>node-key</code>。</p>
</div>
        <template slot="source"><element-demo5 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;el-tree
  :data=&quot;data&quot;
  show-checkbox
  default-expand-all
  node-key=&quot;id&quot;
  ref=&quot;tree&quot;
  highlight-current
  :props=&quot;defaultProps&quot;&gt;
&lt;/el-tree&gt;

&lt;div class=&quot;buttons&quot;&gt;
  &lt;el-button @click=&quot;getCheckedNodes&quot;&gt;通过 node 获取&lt;/el-button&gt;
  &lt;el-button @click=&quot;getCheckedKeys&quot;&gt;通过 key 获取&lt;/el-button&gt;
  &lt;el-button @click=&quot;setCheckedNodes&quot;&gt;通过 node 设置&lt;/el-button&gt;
  &lt;el-button @click=&quot;setCheckedKeys&quot;&gt;通过 key 设置&lt;/el-button&gt;
  &lt;el-button @click=&quot;resetChecked&quot;&gt;清空&lt;/el-button&gt;
&lt;/div&gt;

&lt;script&gt;
  export default {
    methods: {
      getCheckedNodes() {
        console.log(this.$refs.tree.getCheckedNodes());
      },
      getCheckedKeys() {
        console.log(this.$refs.tree.getCheckedKeys());
      },
      setCheckedNodes() {
        this.$refs.tree.setCheckedNodes([{
          id: 5,
          label: '二级 2-1'
        }, {
          id: 9,
          label: '三级 1-1-1'
        }]);
      },
      setCheckedKeys() {
        this.$refs.tree.setCheckedKeys([3]);
      },
      resetChecked() {
        this.$refs.tree.setCheckedKeys([]);
      }
    },

    data() {
      return {
        data: [{
          id: 1,
          label: '一级 1',
          children: [{
            id: 4,
            label: '二级 1-1',
            children: [{
              id: 9,
              label: '三级 1-1-1'
            }, {
              id: 10,
              label: '三级 1-1-2'
            }]
          }]
        }, {
          id: 2,
          label: '一级 2',
          children: [{
            id: 5,
            label: '二级 2-1'
          }, {
            id: 6,
            label: '二级 2-2'
          }]
        }, {
          id: 3,
          label: '一级 3',
          children: [{
            id: 7,
            label: '二级 3-1'
          }, {
            id: 8,
            label: '二级 3-2'
          }]
        }],
        defaultProps: {
          children: 'children',
          label: 'label'
        }
      };
    }
  };
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="zi-ding-yi-jie-dian-nei-rong"><a class="header-anchor" href="#zi-ding-yi-jie-dian-nei-rong">¶</a> 自定义节点内容</h3>
<p>节点的内容支持自定义，可以在节点区添加按钮或图标等内容</p>
<demo-block>
        <div><p>可以通过两种方法进行树节点内容的自定义：<code>render-content</code>和 scoped slot。使用<code>render-content</code>指定渲染函数，该函数返回需要的节点区内容即可。渲染函数的用法请参考 Vue 文档。使用 scoped slot 会传入两个参数<code>node</code>和<code>data</code>，分别表示当前节点的 Node 对象和当前节点的数据。注意：由于 jsfiddle 不支持 JSX 语法，所以<code>render-content</code>示例在 jsfiddle 中无法运行。但是在实际的项目中，只要正确地配置了相关依赖，就可以正常运行。</p>
</div>
        <template slot="source"><element-demo6 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;div class=&quot;custom-tree-container&quot;&gt;
  &lt;div class=&quot;block&quot;&gt;
    &lt;p&gt;使用 render-content&lt;/p&gt;
    &lt;el-tree
      :data=&quot;data&quot;
      show-checkbox
      node-key=&quot;id&quot;
      default-expand-all
      :expand-on-click-node=&quot;false&quot;
      :render-content=&quot;renderContent&quot;&gt;
    &lt;/el-tree&gt;
  &lt;/div&gt;
  &lt;div class=&quot;block&quot;&gt;
    &lt;p&gt;使用 scoped slot&lt;/p&gt;
    &lt;el-tree
      :data=&quot;data&quot;
      show-checkbox
      node-key=&quot;id&quot;
      default-expand-all
      :expand-on-click-node=&quot;false&quot;&gt;
      &lt;span class=&quot;custom-tree-node&quot; slot-scope=&quot;{ node, data }&quot;&gt;
        &lt;span&gt;{{ node.label }}&lt;/span&gt;
        &lt;span&gt;
          &lt;el-button
            type=&quot;text&quot;
            size=&quot;mini&quot;
            @click=&quot;() =&gt; append(data)&quot;&gt;
            Append
          &lt;/el-button&gt;
          &lt;el-button
            type=&quot;text&quot;
            size=&quot;mini&quot;
            @click=&quot;() =&gt; remove(node, data)&quot;&gt;
            Delete
          &lt;/el-button&gt;
        &lt;/span&gt;
      &lt;/span&gt;
    &lt;/el-tree&gt;
  &lt;/div&gt;
&lt;/div&gt;

&lt;script&gt;
  let id = 1000;

  export default {
    data() {
      const data = [{
        id: 1,
        label: '一级 1',
        children: [{
          id: 4,
          label: '二级 1-1',
          children: [{
            id: 9,
            label: '三级 1-1-1'
          }, {
            id: 10,
            label: '三级 1-1-2'
          }]
        }]
      }, {
        id: 2,
        label: '一级 2',
        children: [{
          id: 5,
          label: '二级 2-1'
        }, {
          id: 6,
          label: '二级 2-2'
        }]
      }, {
        id: 3,
        label: '一级 3',
        children: [{
          id: 7,
          label: '二级 3-1'
        }, {
          id: 8,
          label: '二级 3-2'
        }]
      }];
      return {
        data: JSON.parse(JSON.stringify(data)),
        data: JSON.parse(JSON.stringify(data))
      }
    },

    methods: {
      append(data) {
        const newChild = { id: id++, label: 'testtest', children: [] };
        if (!data.children) {
          this.$set(data, 'children', []);
        }
        data.children.push(newChild);
      },

      remove(node, data) {
        const parent = node.parent;
        const children = parent.data.children || parent.data;
        const index = children.findIndex(d =&gt; d.id === data.id);
        children.splice(index, 1);
      },

      renderContent(h, { node, data, store }) {
        return (
          &lt;span class=&quot;custom-tree-node&quot;&gt;
            &lt;span&gt;{node.label}&lt;/span&gt;
            &lt;span&gt;
              &lt;el-button size=&quot;mini&quot; type=&quot;text&quot; on-click={ () =&gt; this.append(data) }&gt;Append&lt;/el-button&gt;
              &lt;el-button size=&quot;mini&quot; type=&quot;text&quot; on-click={ () =&gt; this.remove(node, data) }&gt;Delete&lt;/el-button&gt;
            &lt;/span&gt;
          &lt;/span&gt;);
      }
    }
  };
&lt;/script&gt;

&lt;style&gt;
  .custom-tree-node {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 14px;
    padding-right: 8px;
  }
&lt;/style&gt;
</code></pre></template></demo-block><h3 id="jie-dian-guo-lu"><a class="header-anchor" href="#jie-dian-guo-lu">¶</a> 节点过滤</h3>
<p>通过关键字过滤树节点</p>
<demo-block>
        <div><p>在需要对节点进行过滤时，调用 Tree 实例的<code>filter</code>方法，参数为关键字。需要注意的是，此时需要设置<code>filter-node-method</code>，值为过滤函数。</p>
</div>
        <template slot="source"><element-demo7 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;el-input
  placeholder=&quot;输入关键字进行过滤&quot;
  v-model=&quot;filterText&quot;&gt;
&lt;/el-input&gt;

&lt;el-tree
  class=&quot;filter-tree&quot;
  :data=&quot;data&quot;
  :props=&quot;defaultProps&quot;
  default-expand-all
  :filter-node-method=&quot;filterNode&quot;
  ref=&quot;tree&quot;&gt;
&lt;/el-tree&gt;

&lt;script&gt;
  export default {
    watch: {
      filterText(val) {
        this.$refs.tree.filter(val);
      }
    },

    methods: {
      filterNode(value, data) {
        if (!value) return true;
        return data.label.indexOf(value) !== -1;
      }
    },

    data() {
      return {
        filterText: '',
        data: [{
          id: 1,
          label: '一级 1',
          children: [{
            id: 4,
            label: '二级 1-1',
            children: [{
              id: 9,
              label: '三级 1-1-1'
            }, {
              id: 10,
              label: '三级 1-1-2'
            }]
          }]
        }, {
          id: 2,
          label: '一级 2',
          children: [{
            id: 5,
            label: '二级 2-1'
          }, {
            id: 6,
            label: '二级 2-2'
          }]
        }, {
          id: 3,
          label: '一级 3',
          children: [{
            id: 7,
            label: '二级 3-1'
          }, {
            id: 8,
            label: '二级 3-2'
          }]
        }],
        defaultProps: {
          children: 'children',
          label: 'label'
        }
      };
    }
  };
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="shou-feng-qin-mo-shi"><a class="header-anchor" href="#shou-feng-qin-mo-shi">¶</a> 手风琴模式</h3>
<p>对于同一级的节点，每次只能展开一个</p>
<demo-block>
        
        <template slot="source"><element-demo8 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;el-tree
  :data=&quot;data&quot;
  :props=&quot;defaultProps&quot;
  accordion
  @node-click=&quot;handleNodeClick&quot;&gt;
&lt;/el-tree&gt;

&lt;script&gt;
  export default {
    data() {
      return {
        data: [{
          label: '一级 1',
          children: [{
            label: '二级 1-1',
            children: [{
              label: '三级 1-1-1'
            }]
          }]
        }, {
          label: '一级 2',
          children: [{
            label: '二级 2-1',
            children: [{
              label: '三级 2-1-1'
            }]
          }, {
            label: '二级 2-2',
            children: [{
              label: '三级 2-2-1'
            }]
          }]
        }, {
          label: '一级 3',
          children: [{
            label: '二级 3-1',
            children: [{
              label: '三级 3-1-1'
            }]
          }, {
            label: '二级 3-2',
            children: [{
              label: '三级 3-2-1'
            }]
          }]
        }],
        defaultProps: {
          children: 'children',
          label: 'label'
        }
      };
    },
    methods: {
      handleNodeClick(data) {
        console.log(data);
      }
    }
  };
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="ke-tuo-zhuai-jie-dian"><a class="header-anchor" href="#ke-tuo-zhuai-jie-dian">¶</a> 可拖拽节点</h3>
<p>通过 draggable 属性可让节点变为可拖拽。</p>
<demo-block>
        
        <template slot="source"><element-demo9 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;el-tree
  :data=&quot;data&quot;
  node-key=&quot;id&quot;
  default-expand-all
  @node-drag-start=&quot;handleDragStart&quot;
  @node-drag-enter=&quot;handleDragEnter&quot;
  @node-drag-leave=&quot;handleDragLeave&quot;
  @node-drag-over=&quot;handleDragOver&quot;
  @node-drag-end=&quot;handleDragEnd&quot;
  @node-drop=&quot;handleDrop&quot;
  draggable
  :allow-drop=&quot;allowDrop&quot;
  :allow-drag=&quot;allowDrag&quot;&gt;
&lt;/el-tree&gt;

&lt;script&gt;
  export default {
    data() {
      return {
        data: [{
          id: 1,
          label: '一级 1',
          children: [{
            id: 4,
            label: '二级 1-1',
            children: [{
              id: 9,
              label: '三级 1-1-1'
            }, {
              id: 10,
              label: '三级 1-1-2'
            }]
          }]
        }, {
          id: 2,
          label: '一级 2',
          children: [{
            id: 5,
            label: '二级 2-1'
          }, {
            id: 6,
            label: '二级 2-2'
          }]
        }, {
          id: 3,
          label: '一级 3',
          children: [{
            id: 7,
            label: '二级 3-1'
          }, {
            id: 8,
            label: '二级 3-2',
            children: [{
             id: 11,
              label: '三级 3-2-1'
            }, {
              id: 12,
              label: '三级 3-2-2'
            }, {
              id: 13,
              label: '三级 3-2-3'
            }]
          }]
        }],
        defaultProps: {
          children: 'children',
          label: 'label'
        }
      };
    },
    methods: {
      handleDragStart(node, ev) {
        console.log('drag start', node);
      },
      handleDragEnter(draggingNode, dropNode, ev) {
        console.log('tree drag enter: ', dropNode.label);
      },
      handleDragLeave(draggingNode, dropNode, ev) {
        console.log('tree drag leave: ', dropNode.label);
      },
      handleDragOver(draggingNode, dropNode, ev) {
        console.log('tree drag over: ', dropNode.label);
      },
      handleDragEnd(draggingNode, dropNode, dropType, ev) {
        console.log('tree drag end: ', dropNode &amp;&amp; dropNode.label, dropType);
      },
      handleDrop(draggingNode, dropNode, dropType, ev) {
        console.log('tree drop: ', dropNode.label, dropType);
      },
      allowDrop(draggingNode, dropNode, type) {
        if (dropNode.data.label === '二级 3-1') {
          return type !== 'inner';
        } else {
          return true;
        }
      },
      allowDrag(draggingNode) {
        return draggingNode.data.label.indexOf('三级 3-2-2') === -1;
      }
    }
  };
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="attributes"><a class="header-anchor" href="#attributes">¶</a> Attributes</h3>
<table>
<thead>
<tr>
<th>参数</th>
<th>说明</th>
<th>类型</th>
<th>可选值</th>
<th>默认值</th>
</tr>
</thead>
<tbody>
<tr>
<td>data</td>
<td>展示数据</td>
<td>array</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>empty-text</td>
<td>内容为空的时候展示的文本</td>
<td>String</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>node-key</td>
<td>每个树节点用来作为唯一标识的属性，整棵树应该是唯一的</td>
<td>String</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>props</td>
<td>配置选项，具体看下表</td>
<td>object</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>render-after-expand</td>
<td>是否在第一次展开某个树节点后才渲染其子节点</td>
<td>boolean</td>
<td>—</td>
<td>true</td>
</tr>
<tr>
<td>load</td>
<td>加载子树数据的方法，仅当 lazy 属性为true 时生效</td>
<td>function(node, resolve)</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>render-content</td>
<td>树节点的内容区的渲染 Function</td>
<td>Function(h, { node, data, store }</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>highlight-current</td>
<td>是否高亮当前选中节点，默认值是 false。</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>default-expand-all</td>
<td>是否默认展开所有节点</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>expand-on-click-node</td>
<td>是否在点击节点的时候展开或者收缩节点， 默认值为 true，如果为 false，则只有点箭头图标的时候才会展开或者收缩节点。</td>
<td>boolean</td>
<td>—</td>
<td>true</td>
</tr>
<tr>
<td>check-on-click-node</td>
<td>是否在点击节点的时候选中节点，默认值为 false，即只有在点击复选框时才会选中节点。</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>auto-expand-parent</td>
<td>展开子节点的时候是否自动展开父节点</td>
<td>boolean</td>
<td>—</td>
<td>true</td>
</tr>
<tr>
<td>default-expanded-keys</td>
<td>默认展开的节点的 key 的数组</td>
<td>array</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>show-checkbox</td>
<td>节点是否可被选择</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>check-strictly</td>
<td>在显示复选框的情况下，是否严格的遵循父子不互相关联的做法，默认为 false</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>default-checked-keys</td>
<td>默认勾选的节点的 key 的数组</td>
<td>array</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>current-node-key</td>
<td>当前选中的节点</td>
<td>string, number</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>filter-node-method</td>
<td>对树节点进行筛选时执行的方法，返回 true 表示这个节点可以显示，返回 false 则表示这个节点会被隐藏</td>
<td>Function(value, data, node)</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>accordion</td>
<td>是否每次只打开一个同级树节点展开</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>indent</td>
<td>相邻级节点间的水平缩进，单位为像素</td>
<td>number</td>
<td>—</td>
<td>16</td>
</tr>
<tr>
<td>icon-class</td>
<td>自定义树节点的图标</td>
<td>string</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>lazy</td>
<td>是否懒加载子节点，需与 load 方法结合使用</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>draggable</td>
<td>是否开启拖拽节点功能</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>allow-drag</td>
<td>判断节点能否被拖拽</td>
<td>Function(node)</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>allow-drop</td>
<td>拖拽时判定目标节点能否被放置。<code>type</code> 参数有三种情况：'prev'、'inner' 和 'next'，分别表示放置在目标节点前、插入至目标节点和放置在目标节点后</td>
<td>Function(draggingNode, dropNode, type)</td>
<td>—</td>
<td>—</td>
</tr>
</tbody>
</table>
<h3 id="props"><a class="header-anchor" href="#props">¶</a> props</h3>
<table>
<thead>
<tr>
<th>参数</th>
<th>说明</th>
<th>类型</th>
<th>可选值</th>
<th>默认值</th>
</tr>
</thead>
<tbody>
<tr>
<td>label</td>
<td>指定节点标签为节点对象的某个属性值</td>
<td>string, function(data, node)</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>children</td>
<td>指定子树为节点对象的某个属性值</td>
<td>string</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>disabled</td>
<td>指定节点选择框是否禁用为节点对象的某个属性值</td>
<td>boolean, function(data, node)</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>isLeaf</td>
<td>指定节点是否为叶子节点，仅在指定了 lazy 属性的情况下生效</td>
<td>boolean, function(data, node)</td>
<td>—</td>
<td>—</td>
</tr>
</tbody>
</table>
<h3 id="fang-fa"><a class="header-anchor" href="#fang-fa">¶</a> 方法</h3>
<p><code>Tree</code> 内部使用了 Node 类型的对象来包装用户传入的数据，用来保存目前节点的状态。
<code>Tree</code> 拥有如下方法：</p>
<table>
<thead>
<tr>
<th>方法名</th>
<th>说明</th>
<th>参数</th>
</tr>
</thead>
<tbody>
<tr>
<td>filter</td>
<td>对树节点进行筛选操作</td>
<td>接收一个任意类型的参数，该参数会在 filter-node-method 中作为第一个参数</td>
</tr>
<tr>
<td>updateKeyChildren</td>
<td>通过 keys 设置节点子元素，使用此方法必须设置 node-key 属性</td>
<td>(key, data) 接收两个参数，1. 节点 key 2. 节点数据的数组</td>
</tr>
<tr>
<td>getCheckedNodes</td>
<td>若节点可被选择（即 <code>show-checkbox</code> 为 <code>true</code>），则返回目前被选中的节点所组成的数组</td>
<td>(leafOnly, includeHalfChecked) 接收两个 boolean 类型的参数，1. 是否只是叶子节点，默认值为 <code>false</code> 2. 是否包含半选节点，默认值为 <code>false</code></td>
</tr>
<tr>
<td>setCheckedNodes</td>
<td>设置目前勾选的节点，使用此方法必须设置 node-key 属性</td>
<td>(nodes) 接收勾选节点数据的数组</td>
</tr>
<tr>
<td>getCheckedKeys</td>
<td>若节点可被选择（即 <code>show-checkbox</code> 为 <code>true</code>），则返回目前被选中的节点的 key 所组成的数组</td>
<td>(leafOnly) 接收一个 boolean 类型的参数，若为 <code>true</code> 则仅返回被选中的叶子节点的 keys，默认值为 <code>false</code></td>
</tr>
<tr>
<td>setCheckedKeys</td>
<td>通过 keys 设置目前勾选的节点，使用此方法必须设置 node-key 属性</td>
<td>(keys, leafOnly) 接收两个参数，1. 勾选节点的 key 的数组 2. boolean 类型的参数，若为 <code>true</code> 则仅设置叶子节点的选中状态，默认值为 <code>false</code></td>
</tr>
<tr>
<td>setChecked</td>
<td>通过 key / data 设置某个节点的勾选状态，使用此方法必须设置 node-key 属性</td>
<td>(key/data, checked, deep) 接收三个参数，1. 勾选节点的 key 或者 data 2. boolean 类型，节点是否选中  3. boolean 类型，是否设置子节点 ，默认为 false</td>
</tr>
<tr>
<td>getHalfCheckedNodes</td>
<td>若节点可被选择（即 <code>show-checkbox</code> 为 <code>true</code>），则返回目前半选中的节点所组成的数组</td>
<td>-</td>
</tr>
<tr>
<td>getHalfCheckedKeys</td>
<td>若节点可被选择（即 <code>show-checkbox</code> 为 <code>true</code>），则返回目前半选中的节点的 key 所组成的数组</td>
<td>-</td>
</tr>
<tr>
<td>getCurrentKey</td>
<td>获取当前被选中节点的 key，使用此方法必须设置 node-key 属性，若没有节点被选中则返回 null</td>
<td>—</td>
</tr>
<tr>
<td>getCurrentNode</td>
<td>获取当前被选中节点的 data，若没有节点被选中则返回 null</td>
<td>—</td>
</tr>
<tr>
<td>setCurrentKey</td>
<td>通过 key 设置某个节点的当前选中状态，使用此方法必须设置 node-key 属性</td>
<td>(key) 待被选节点的 key，若为 null 则取消当前高亮的节点</td>
</tr>
<tr>
<td>setCurrentNode</td>
<td>通过 node 设置某个节点的当前选中状态，使用此方法必须设置 node-key 属性</td>
<td>(node) 待被选节点的 node</td>
</tr>
<tr>
<td>getNode</td>
<td>根据 data 或者 key 拿到 Tree 组件中的 node</td>
<td>(data) 要获得 node 的 key 或者 data</td>
</tr>
<tr>
<td>remove</td>
<td>删除 Tree 中的一个节点，使用此方法必须设置 node-key 属性</td>
<td>(data) 要删除的节点的 data 或者 node</td>
</tr>
<tr>
<td>append</td>
<td>为 Tree 中的一个节点追加一个子节点</td>
<td>(data, parentNode) 接收两个参数，1. 要追加的子节点的 data 2. 子节点的 parent 的 data、key 或者 node</td>
</tr>
<tr>
<td>insertBefore</td>
<td>为 Tree 的一个节点的前面增加一个节点</td>
<td>(data, refNode) 接收两个参数，1. 要增加的节点的 data 2. 要增加的节点的后一个节点的 data、key 或者 node</td>
</tr>
<tr>
<td>insertAfter</td>
<td>为 Tree 的一个节点的后面增加一个节点</td>
<td>(data, refNode) 接收两个参数，1. 要增加的节点的 data 2. 要增加的节点的前一个节点的 data、key 或者 node</td>
</tr>
</tbody>
</table>
<h3 id="events"><a class="header-anchor" href="#events">¶</a> Events</h3>
<table>
<thead>
<tr>
<th>事件名称</th>
<th>说明</th>
<th>回调参数</th>
</tr>
</thead>
<tbody>
<tr>
<td>node-click</td>
<td>节点被点击时的回调</td>
<td>共三个参数，依次为：传递给 <code>data</code> 属性的数组中该节点所对应的对象、节点对应的 Node、节点组件本身。</td>
</tr>
<tr>
<td>node-contextmenu</td>
<td>当某一节点被鼠标右键点击时会触发该事件</td>
<td>共四个参数，依次为：event、传递给 <code>data</code> 属性的数组中该节点所对应的对象、节点对应的 Node、节点组件本身。</td>
</tr>
<tr>
<td>check-change</td>
<td>节点选中状态发生变化时的回调</td>
<td>共三个参数，依次为：传递给 <code>data</code> 属性的数组中该节点所对应的对象、节点本身是否被选中、节点的子树中是否有被选中的节点</td>
</tr>
<tr>
<td>check</td>
<td>当复选框被点击的时候触发</td>
<td>共两个参数，依次为：传递给 <code>data</code> 属性的数组中该节点所对应的对象、树目前的选中状态对象，包含 checkedNodes、checkedKeys、halfCheckedNodes、halfCheckedKeys 四个属性</td>
</tr>
<tr>
<td>current-change</td>
<td>当前选中节点变化时触发的事件</td>
<td>共两个参数，依次为：当前节点的数据，当前节点的 Node 对象</td>
</tr>
<tr>
<td>node-expand</td>
<td>节点被展开时触发的事件</td>
<td>共三个参数，依次为：传递给 <code>data</code> 属性的数组中该节点所对应的对象、节点对应的 Node、节点组件本身</td>
</tr>
<tr>
<td>node-collapse</td>
<td>节点被关闭时触发的事件</td>
<td>共三个参数，依次为：传递给 <code>data</code> 属性的数组中该节点所对应的对象、节点对应的 Node、节点组件本身</td>
</tr>
<tr>
<td>node-drag-start</td>
<td>节点开始拖拽时触发的事件</td>
<td>共两个参数，依次为：被拖拽节点对应的 Node、event</td>
</tr>
<tr>
<td>node-drag-enter</td>
<td>拖拽进入其他节点时触发的事件</td>
<td>共三个参数，依次为：被拖拽节点对应的 Node、所进入节点对应的 Node、event</td>
</tr>
<tr>
<td>node-drag-leave</td>
<td>拖拽离开某个节点时触发的事件</td>
<td>共三个参数，依次为：被拖拽节点对应的 Node、所离开节点对应的 Node、event</td>
</tr>
<tr>
<td>node-drag-over</td>
<td>在拖拽节点时触发的事件（类似浏览器的 mouseover 事件）</td>
<td>共三个参数，依次为：被拖拽节点对应的 Node、当前进入节点对应的 Node、event</td>
</tr>
<tr>
<td>node-drag-end</td>
<td>拖拽结束时（可能未成功）触发的事件</td>
<td>共四个参数，依次为：被拖拽节点对应的 Node、结束拖拽时最后进入的节点（可能为空）、被拖拽节点的放置位置（before、after、inner）、event</td>
</tr>
<tr>
<td>node-drop</td>
<td>拖拽成功完成时触发的事件</td>
<td>共四个参数，依次为：被拖拽节点对应的 Node、结束拖拽时最后进入的节点、被拖拽节点的放置位置（before、after、inner）、event</td>
</tr>
</tbody>
</table>
<h3 id="scoped-slot"><a class="header-anchor" href="#scoped-slot">¶</a> Scoped Slot</h3>
<table>
<thead>
<tr>
<th>name</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>—</td>
<td>自定义树节点的内容，参数为 { node, data }</td>
</tr>
</tbody>
</table>
