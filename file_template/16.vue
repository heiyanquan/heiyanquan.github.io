<h2 id="tree"><a class="header-anchor" href="#tree">¶</a> Tree</h2>
<p>Display a set of data with hierarchies.</p>
<h3 id="basic-usage"><a class="header-anchor" href="#basic-usage">¶</a> Basic usage</h3>
<p>Basic tree structure.</p>
<demo-block>
        
        <template slot="source"><element-demo0 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;el-tree :data=&quot;data&quot; :props=&quot;defaultProps&quot; @node-click=&quot;handleNodeClick&quot;&gt;&lt;/el-tree&gt;

&lt;script&gt;
  export default {
    data() {
      return {
        data: [{
          label: 'Level one 1',
          children: [{
            label: 'Level two 1-1',
            children: [{
              label: 'Level three 1-1-1'
            }]
          }]
        }, {
          label: 'Level one 2',
          children: [{
            label: 'Level two 2-1',
            children: [{
              label: 'Level three 2-1-1'
            }]
          }, {
            label: 'Level two 2-2',
            children: [{
              label: 'Level three 2-2-1'
            }]
          }]
        }, {
          label: 'Level one 3',
          children: [{
            label: 'Level two 3-1',
            children: [{
              label: 'Level three 3-1-1'
            }]
          }, {
            label: 'Level two 3-2',
            children: [{
              label: 'Level three 3-2-1'
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
</code></pre></template></demo-block><h3 id="selectable"><a class="header-anchor" href="#selectable">¶</a> Selectable</h3>
<p>Used for node selection.</p>
<demo-block>
        <div><p>This example also shows how to load node data asynchronously.</p>
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
          return resolve([{ name: 'Root1' }, { name: 'Root2' }]);
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
</code></pre></template></demo-block><h3 id="custom-leaf-node-in-lazy-mode"><a class="header-anchor" href="#custom-leaf-node-in-lazy-mode">¶</a> Custom leaf node in lazy mode</h3>
<demo-block>
        <div><p>A node's data is not fetched until it is clicked, so the Tree cannot predict whether a node is a leaf node. That's why a drop-down button is added to each node, and if it is a leaf node, the drop-down button will disappear when clicked. That being said, you can also tell the Tree in advance whether the node is a leaf node, avoiding the render of the drop-down button before a leaf node.</p>
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
</code></pre></template></demo-block><h3 id="disabled-checkbox"><a class="header-anchor" href="#disabled-checkbox">¶</a> Disabled checkbox</h3>
<p>The checkbox of a node can be set as disabled.</p>
<demo-block>
        <div><p>In the example, 'disabled' property is declared in defaultProps, and some nodes are set as 'disabled:true'. The corresponding checkboxes are disabled and can't be clicked.</p>
</div>
        <template slot="source"><element-demo3 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;el-tree
  :data=&quot;data&quot;
  :props=&quot;defaultProps&quot;
  show-checkbox
  @check-change=&quot;handleCheckChange&quot;&gt;
&lt;/el-tree&gt;

&lt;script&gt;
  export default {
    data() {
      return {
        data: [{
          id: 1,
          label: 'Level one 1',
          children: [{
            id: 3,
            label: 'Level two 2-1',
            children: [{
              id: 4,
              label: 'Level three 3-1-1'
            }, {
              id: 5,
              label: 'Level three 3-1-2',
              disabled: true
            }]
          }, {
            id: 2,
            label: 'Level two 2-2',
            disabled: true,
            children: [{
              id: 6,
              label: 'Level three 3-2-1'
            }, {
              id: 7,
              label: 'Level three 3-2-2',
              disabled: true
            }]
          }]
        }],
        defaultProps: {
            children: 'children',
            label: 'label',
            disabled: 'disabled',
        },
      };
    }
  };
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="default-expanded-and-default-checked"><a class="header-anchor" href="#default-expanded-and-default-checked">¶</a> Default expanded and default checked</h3>
<p>Tree nodes can be initially expanded or checked</p>
<demo-block>
        <div><p>Use <code>default-expanded-keys</code> and <code>default-checked-keys</code> to set initially expanded and initially checked nodes respectively. Note that for them to work, <code>node-key</code> is required. Its value is the name of a key in the data object, and the value of that key should be unique across the whole tree.</p>
</div>
        <template slot="source"><element-demo4 /></template>
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
          label: 'Level one 1',
          children: [{
            id: 4,
            label: 'Level two 1-1',
            children: [{
              id: 9,
              label: 'Level three 1-1-1'
            }, {
              id: 10,
              label: 'Level three 1-1-2'
            }]
          }]
        }, {
          id: 2,
          label: 'Level one 2',
          children: [{
            id: 5,
            label: 'Level two 2-1'
          }, {
            id: 6,
            label: 'Level two 2-2'
          }]
        }, {
          id: 3,
          label: 'Level one 3',
          children: [{
            id: 7,
            label: 'Level two 3-1'
          }, {
            id: 8,
            label: 'Level two 3-2'
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
</code></pre></template></demo-block><h3 id="checking-tree-nodes"><a class="header-anchor" href="#checking-tree-nodes">¶</a> Checking tree nodes</h3>
<demo-block>
        <div><p>This example shows how to get and set checked nodes. They both can be done in two approaches: node and key. If you are taking the key approach, <code>node-key</code> is required.</p>
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
  &lt;el-button @click=&quot;getCheckedNodes&quot;&gt;get by node&lt;/el-button&gt;
  &lt;el-button @click=&quot;getCheckedKeys&quot;&gt;get by key&lt;/el-button&gt;
  &lt;el-button @click=&quot;setCheckedNodes&quot;&gt;set by node&lt;/el-button&gt;
  &lt;el-button @click=&quot;setCheckedKeys&quot;&gt;set by key&lt;/el-button&gt;
  &lt;el-button @click=&quot;resetChecked&quot;&gt;reset&lt;/el-button&gt;
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
          label: 'Level two 2-1'
        }, {
          id: 9,
          label: 'Level three 1-1-1'
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
          label: 'Level one 1',
          children: [{
            id: 4,
            label: 'Level two 1-1',
            children: [{
              id: 9,
              label: 'Level three 1-1-1'
            }, {
              id: 10,
              label: 'Level three 1-1-2'
            }]
          }]
        }, {
          id: 2,
          label: 'Level one 2',
          children: [{
            id: 5,
            label: 'Level two 2-1'
          }, {
            id: 6,
            label: 'Level two 2-2'
          }]
        }, {
          id: 3,
          label: 'Level one 3',
          children: [{
            id: 7,
            label: 'Level two 3-1'
          }, {
            id: 8,
            label: 'Level two 3-2'
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
</code></pre></template></demo-block><h3 id="custom-node-content"><a class="header-anchor" href="#custom-node-content">¶</a> Custom node content</h3>
<p>The content of tree nodes can be customized, so you can add icons or buttons as you will</p>
<demo-block>
        <div><p>There are two ways to customize template for tree nodes: <code>render-content</code> and scoped slot. Use <code>render-content</code> to assign a render function that returns the content of tree nodes. See Vue's documentation for a detailed introduction of render functions. If you prefer scoped slot, you'll have access to <code>node</code> and <code>data</code> in the scope, standing for the TreeNode object and node data of the current node respectively. Note that the <code>render-content</code> demo can't run in jsfiddle because it doesn't support JSX syntax. In a real project, <code>render-content</code> will work if relevant dependencies are correctly configured.</p>
</div>
        <template slot="source"><element-demo6 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;div class=&quot;custom-tree-container&quot;&gt;
  &lt;div class=&quot;block&quot;&gt;
    &lt;p&gt;Using render-content&lt;/p&gt;
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
    &lt;p&gt;Using scoped slot&lt;/p&gt;
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
        label: 'Level one 1',
        children: [{
          id: 4,
          label: 'Level two 1-1',
          children: [{
            id: 9,
            label: 'Level three 1-1-1'
          }, {
            id: 10,
            label: 'Level three 1-1-2'
          }]
        }]
      }, {
        id: 2,
        label: 'Level one 2',
        children: [{
          id: 5,
          label: 'Level two 2-1'
        }, {
          id: 6,
          label: 'Level two 2-2'
        }]
      }, {
        id: 3,
        label: 'Level one 3',
        children: [{
          id: 7,
          label: 'Level two 3-1'
        }, {
          id: 8,
          label: 'Level two 3-2'
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
</code></pre></template></demo-block><h3 id="tree-node-filtering"><a class="header-anchor" href="#tree-node-filtering">¶</a> Tree node filtering</h3>
<p>Tree nodes can be filtered</p>
<demo-block>
        <div><p>Invoke the <code>filter</code> method of the Tree instance to filter tree nodes. Its parameter is the filtering keyword. Note that for it to work, <code>filter-node-method</code> is required, and its value is the filtering method.</p>
</div>
        <template slot="source"><element-demo7 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;el-input
  placeholder=&quot;Filter keyword&quot;
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
          label: 'Level one 1',
          children: [{
            id: 4,
            label: 'Level two 1-1',
            children: [{
              id: 9,
              label: 'Level three 1-1-1'
            }, {
              id: 10,
              label: 'Level three 1-1-2'
            }]
          }]
        }, {
          id: 2,
          label: 'Level one 2',
          children: [{
            id: 5,
            label: 'Level two 2-1'
          }, {
            id: 6,
            label: 'Level two 2-2'
          }]
        }, {
          id: 3,
          label: 'Level one 3',
          children: [{
            id: 7,
            label: 'Level two 3-1'
          }, {
            id: 8,
            label: 'Level two 3-2'
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
</code></pre></template></demo-block><h3 id="accordion"><a class="header-anchor" href="#accordion">¶</a> Accordion</h3>
<p>Only one node among the same level can be expanded at one time.</p>
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
          label: 'Level one 1',
          children: [{
            label: 'Level two 1-1',
            children: [{
              label: 'Level three 1-1-1'
            }]
          }]
        }, {
          label: 'Level one 2',
          children: [{
            label: 'Level two 2-1',
            children: [{
              label: 'Level three 2-1-1'
            }]
          }, {
            label: 'Level two 2-2',
            children: [{
              label: 'Level three 2-2-1'
            }]
          }]
        }, {
          label: 'Level one 3',
          children: [{
            label: 'Level two 3-1',
            children: [{
              label: 'Level three 3-1-1'
            }]
          }, {
            label: 'Level two 3-2',
            children: [{
              label: 'Level three 3-2-1'
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
</code></pre></template></demo-block><h3 id="draggable"><a class="header-anchor" href="#draggable">¶</a> Draggable</h3>
<p>You can drag and drop Tree nodes by adding a <code>draggable</code> attribute.</p>
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
          label: 'Level one 1',
          children: [{
            label: 'Level two 1-1',
            children: [{
              label: 'Level three 1-1-1'
            }]
          }]
        }, {
          label: 'Level one 2',
          children: [{
            label: 'Level two 2-1',
            children: [{
              label: 'Level three 2-1-1'
            }]
          }, {
            label: 'Level two 2-2',
            children: [{
              label: 'Level three 2-2-1'
            }]
          }]
        }, {
          label: 'Level one 3',
          children: [{
            label: 'Level two 3-1',
            children: [{
              label: 'Level three 3-1-1'
            }]
          }, {
            label: 'Level two 3-2',
            children: [{
              label: 'Level three 3-2-1'
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
        if (dropNode.data.label === 'Level two 3-1') {
          return type !== 'inner';
        } else {
          return true;
        }
      },
      allowDrag(draggingNode) {
        return draggingNode.data.label.indexOf('Level three 3-1-1') === -1;
      }
    }
  };
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="attributes"><a class="header-anchor" href="#attributes">¶</a> Attributes</h3>
<table>
<thead>
<tr>
<th>Attribute</th>
<th>Description</th>
<th>Type</th>
<th>Accepted Values</th>
<th>Default</th>
</tr>
</thead>
<tbody>
<tr>
<td>data</td>
<td>tree data</td>
<td>array</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>empty-text</td>
<td>text displayed when data is void</td>
<td>string</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>node-key</td>
<td>unique identity key name for nodes, its value should be unique across the whole tree</td>
<td>string</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>props</td>
<td>configuration options, see the following table</td>
<td>object</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>render-after-expand</td>
<td>whether to render child nodes only after a parent node is expanded for the first time</td>
<td>boolean</td>
<td>—</td>
<td>true</td>
</tr>
<tr>
<td>load</td>
<td>method for loading subtree data, only works when <code>lazy</code> is true</td>
<td>function(node, resolve)</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>render-content</td>
<td>render function for tree node</td>
<td>Function(h, { node, data, store }</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>highlight-current</td>
<td>whether current node is highlighted</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>default-expand-all</td>
<td>whether to expand all nodes by default</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>expand-on-click-node</td>
<td>whether to expand or collapse node when clicking on the node, if false, then expand or collapse node only when clicking on the arrow icon.</td>
<td>boolean</td>
<td>—</td>
<td>true</td>
</tr>
<tr>
<td>check-on-click-node</td>
<td>whether to check or uncheck node when clicking on the node, if false, the node can only be checked or unchecked by clicking on the checkbox.</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>auto-expand-parent</td>
<td>whether to expand father node when a child node is expanded</td>
<td>boolean</td>
<td>—</td>
<td>true</td>
</tr>
<tr>
<td>default-expanded-keys</td>
<td>array of keys of initially expanded nodes</td>
<td>array</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>show-checkbox</td>
<td>whether node is selectable</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>check-strictly</td>
<td>whether checked state of a node not affects its father and child nodes when <code>show-checkbox</code> is <code>true</code></td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>default-checked-keys</td>
<td>array of keys of initially checked nodes</td>
<td>array</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>current-node-key</td>
<td>key of initially selected node</td>
<td>string, number</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>filter-node-method</td>
<td>this function will be executed on each node when use filter method. if return <code>false</code>, tree node will be hidden.</td>
<td>Function(value, data, node)</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>accordion</td>
<td>whether only one node among the same level can be expanded at one time</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>indent</td>
<td>horizontal indentation of nodes in adjacent levels in pixels</td>
<td>number</td>
<td>—</td>
<td>16</td>
</tr>
<tr>
<td>icon-class</td>
<td>custome tree node icon</td>
<td>string</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>lazy</td>
<td>whether to lazy load leaf node, used with <code>load</code> attribute</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>draggable</td>
<td>whether enable tree nodes drag and drop</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>allow-drag</td>
<td>this function will be executed before dragging a node. If <code>false</code> is returned, the node can not be dragged</td>
<td>Function(node)</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>allow-drop</td>
<td>this function will be executed before the dragging node is dropped. If <code>false</code> is returned, the dragging node can not be dropped at the target node. <code>type</code> has three possible values: 'prev' (inserting the dragging node before the target node), 'inner' (inserting the dragging node to the target node) and 'next' (inserting the dragging node after the target node)</td>
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
<th>Attribute</th>
<th>Description</th>
<th>Type</th>
<th>Accepted Values</th>
<th>Default</th>
</tr>
</thead>
<tbody>
<tr>
<td>label</td>
<td>specify which key of node object is used as the node's label</td>
<td>string, function(data, node)</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>children</td>
<td>specify which node object is used as the node's subtree</td>
<td>string</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>disabled</td>
<td>specify which key of node object represents if node's checkbox is disabled</td>
<td>boolean, function(data, node)</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>isLeaf</td>
<td>specify whether the node is a leaf node, only works when lazy load is enabled</td>
<td>boolean, function(data, node)</td>
<td>—</td>
<td>—</td>
</tr>
</tbody>
</table>
<h3 id="method"><a class="header-anchor" href="#method">¶</a> Method</h3>
<p><code>Tree</code> has the following method, which returns the currently selected array of nodes.</p>
<table>
<thead>
<tr>
<th>Method</th>
<th>Description</th>
<th>Parameters</th>
</tr>
</thead>
<tbody>
<tr>
<td>filter</td>
<td>filter all tree nodes, filtered nodes will be hidden</td>
<td>Accept a parameter which will be used as first parameter for filter-node-method</td>
</tr>
<tr>
<td>updateKeyChildren</td>
<td>set new data to node, only works when <code>node-key</code> is assigned</td>
<td>(key, data) Accept two parameters: 1. key of node 2. new data</td>
</tr>
<tr>
<td>getCheckedNodes</td>
<td>If the node can be selected (<code>show-checkbox</code> is <code>true</code>), it returns the currently selected array of nodes</td>
<td>(leafOnly, includeHalfChecked) Accept two boolean type parameters: 1. default value is <code>false</code>. If the parameter is <code>true</code>, it only returns the currently selected array of sub-nodes. 2. default value is <code>false</code>. If the parameter is <code>true</code>, the return value contains halfchecked nodes</td>
</tr>
<tr>
<td>setCheckedNodes</td>
<td>set certain nodes to be checked, only works when <code>node-key</code> is assigned</td>
<td>an array of nodes to be checked</td>
</tr>
<tr>
<td>getCheckedKeys</td>
<td>If the node can be selected (<code>show-checkbox</code> is <code>true</code>), it returns the currently selected array of node's keys</td>
<td>(leafOnly) Accept a boolean type parameter whose default value is <code>false</code>. If the parameter is <code>true</code>, it only returns the currently selected array of sub-nodes.</td>
</tr>
<tr>
<td>setCheckedKeys</td>
<td>set certain nodes to be checked, only works when <code>node-key</code> is assigned</td>
<td>(keys, leafOnly) Accept two parameters: 1. an array of node's keys to be checked 2. a boolean type parameter whose default value is <code>false</code>. If the parameter is <code>true</code>, it only returns the currently selected array of sub-nodes.</td>
</tr>
<tr>
<td>setChecked</td>
<td>set node to be checked or not, only works when <code>node-key</code> is assigned</td>
<td>(key/data, checked, deep) Accept three parameters: 1. node's key or data to be checked 2. a boolean typed parameter indicating checked or not. 3. a boolean typed parameter indicating deep or not.</td>
</tr>
<tr>
<td>getHalfCheckedNodes</td>
<td>If the node can be selected (<code>show-checkbox</code> is <code>true</code>), it returns the currently half selected array of nodes</td>
<td>-</td>
</tr>
<tr>
<td>getHalfCheckedKeys</td>
<td>If the node can be selected (<code>show-checkbox</code> is <code>true</code>), it returns the currently half selected array of node's keys</td>
<td>-</td>
</tr>
<tr>
<td>getCurrentKey</td>
<td>return the highlight node's key (null if no node is highlighted)</td>
<td>—</td>
</tr>
<tr>
<td>getCurrentNode</td>
<td>return the highlight node's data (null if no node is highlighted)</td>
<td>—</td>
</tr>
<tr>
<td>setCurrentKey</td>
<td>set highlighted node by key, only works when <code>node-key</code> is assigned</td>
<td>(key) the node's key to be highlighted. If <code>null</code>, cancel the currently highlighted node</td>
</tr>
<tr>
<td>setCurrentNode</td>
<td>set highlighted node, only works when <code>node-key</code> is assigned</td>
<td>(node) the node to be highlighted</td>
</tr>
<tr>
<td>getNode</td>
<td>get node by data or key</td>
<td>(data) the node's data or key</td>
</tr>
<tr>
<td>remove</td>
<td>remove a node, only works when node-key is assigned</td>
<td>(data) the node's data or node to be deleted</td>
</tr>
<tr>
<td>append</td>
<td>append a child node to a given node in the tree</td>
<td>(data, parentNode) 1. child node's data to be appended 2. parent node's data, key or node</td>
</tr>
<tr>
<td>insertBefore</td>
<td>insert a node before a given node in the tree</td>
<td>(data, refNode) 1. node's data to be inserted 2. reference node's data, key or node</td>
</tr>
<tr>
<td>insertAfter</td>
<td>insert a node after a given node in the tree</td>
<td>(data, refNode) 1. node's data to be inserted 2. reference node's data, key or node</td>
</tr>
</tbody>
</table>
<h3 id="events"><a class="header-anchor" href="#events">¶</a> Events</h3>
<table>
<thead>
<tr>
<th>Event Name</th>
<th>Description</th>
<th>Parameters</th>
</tr>
</thead>
<tbody>
<tr>
<td>node-click</td>
<td>triggers when a node is clicked</td>
<td>three parameters: node object corresponding to the node clicked, <code>node</code> property of TreeNode, TreeNode itself</td>
</tr>
<tr>
<td>node-contextmenu</td>
<td>triggers when a node is clicked by right button</td>
<td>four parameters: event, node object corresponding to the node clicked, <code>node</code> property of TreeNode, TreeNode itself</td>
</tr>
<tr>
<td>check-change</td>
<td>triggers when the selected state of the node changes</td>
<td>three parameters: node object corresponding to the node whose selected state is changed, whether the node is selected, whether node's subtree has selected nodes</td>
</tr>
<tr>
<td>check</td>
<td>triggers after clicking the checkbox of a node</td>
<td>two parameters: node object corresponding to the node that is checked / unchecked, tree checked status object which has four props: checkedNodes, checkedKeys, halfCheckedNodes, halfCheckedKeys</td>
</tr>
<tr>
<td>current-change</td>
<td>triggers when current node changes</td>
<td>two parameters: node object corresponding to the current node, <code>node</code> property of TreeNode</td>
</tr>
<tr>
<td>node-expand</td>
<td>triggers when current node open</td>
<td>three parameters: node object corresponding to the node opened, <code>node</code> property of TreeNode, TreeNode itself</td>
</tr>
<tr>
<td>node-collapse</td>
<td>triggers when current node close</td>
<td>three parameters: node object corresponding to the node closed, <code>node</code> property of TreeNode, TreeNode itself</td>
</tr>
<tr>
<td>node-drag-start</td>
<td>triggers when dragging starts</td>
<td>two parameters: node object corresponding to the dragging node, event.</td>
</tr>
<tr>
<td>node-drag-enter</td>
<td>triggers when the dragging node enters another node</td>
<td>three parameters: node object corresponding to the dragging node, node object corresponding to the entering node, event.</td>
</tr>
<tr>
<td>node-drag-leave</td>
<td>triggers when the dragging node leaves a node</td>
<td>three parameters: node object corresponding to the dragging node, node object corresponding to the leaving node, event.</td>
</tr>
<tr>
<td>node-drag-over</td>
<td>triggers when dragging over a node (like mouseover event)</td>
<td>three parameters: node object corresponding to the dragging node, node object corresponding to the dragging over node, event.</td>
</tr>
<tr>
<td>node-drag-end</td>
<td>triggers when dragging ends</td>
<td>four parameters: node object corresponding to the dragging node, node object corresponding to the dragging end node (may be <code>undefined</code>), node drop type (before / after / inner), event.</td>
</tr>
<tr>
<td>node-drop</td>
<td>triggers after the dragging node is dropped</td>
<td>four parameters: node object corresponding to the dragging node, node object corresponding to the dropped node, node drop type (before / after / inner), event.</td>
</tr>
</tbody>
</table>
<h3 id="scoped-slot"><a class="header-anchor" href="#scoped-slot">¶</a> Scoped Slot</h3>
<table>
<thead>
<tr>
<th>Name</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>—</td>
<td>Custom content for tree nodes. The scope parameter is { node, data }</td>
</tr>
</tbody>
</table>
