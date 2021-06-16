<h2 id="tabs-biao-qian-ye"><a class="header-anchor" href="#tabs-biao-qian-ye">¶</a> Tabs 标签页</h2>
<p>分隔内容上有关联但属于不同类别的数据集合。</p>
<h3 id="ji-chu-yong-fa"><a class="header-anchor" href="#ji-chu-yong-fa">¶</a> 基础用法</h3>
<p>基础的、简洁的标签页。</p>
<demo-block>
        <div><p>Tabs 组件提供了选项卡功能，默认选中第一个标签页，你也可以通过 <code>value</code> 属性来指定当前选中的标签页。</p>
</div>
        <template slot="source"><element-demo0 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;template&gt;
  &lt;el-tabs v-model=&quot;activeName&quot; @tab-click=&quot;handleClick&quot;&gt;
    &lt;el-tab-pane label=&quot;用户管理&quot; name=&quot;first&quot;&gt;用户管理&lt;/el-tab-pane&gt;
    &lt;el-tab-pane label=&quot;配置管理&quot; name=&quot;second&quot;&gt;配置管理&lt;/el-tab-pane&gt;
    &lt;el-tab-pane label=&quot;角色管理&quot; name=&quot;third&quot;&gt;角色管理&lt;/el-tab-pane&gt;
    &lt;el-tab-pane label=&quot;定时任务补偿&quot; name=&quot;fourth&quot;&gt;定时任务补偿&lt;/el-tab-pane&gt;
  &lt;/el-tabs&gt;
&lt;/template&gt;
&lt;script&gt;
  export default {
    data() {
      return {
        activeName: 'second'
      };
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      }
    }
  };
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="xuan-xiang-qia-yang-shi"><a class="header-anchor" href="#xuan-xiang-qia-yang-shi">¶</a> 选项卡样式</h3>
<p>选项卡样式的标签页。</p>
<demo-block>
        <div><p>只需要设置 <code>type</code> 属性为 <code>card</code> 就可以使选项卡改变为标签风格。</p>
</div>
        <template slot="source"><element-demo1 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;template&gt;
  &lt;el-tabs v-model=&quot;activeName&quot; type=&quot;card&quot; @tab-click=&quot;handleClick&quot;&gt;
    &lt;el-tab-pane label=&quot;用户管理&quot; name=&quot;first&quot;&gt;用户管理&lt;/el-tab-pane&gt;
    &lt;el-tab-pane label=&quot;配置管理&quot; name=&quot;second&quot;&gt;配置管理&lt;/el-tab-pane&gt;
    &lt;el-tab-pane label=&quot;角色管理&quot; name=&quot;third&quot;&gt;角色管理&lt;/el-tab-pane&gt;
    &lt;el-tab-pane label=&quot;定时任务补偿&quot; name=&quot;fourth&quot;&gt;定时任务补偿&lt;/el-tab-pane&gt;
  &lt;/el-tabs&gt;
&lt;/template&gt;
&lt;script&gt;
  export default {
    data() {
      return {
        activeName: 'first'
      };
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      }
    }
  };
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="qia-pian-hua"><a class="header-anchor" href="#qia-pian-hua">¶</a> 卡片化</h3>
<p>卡片化的标签页。</p>
<demo-block>
        <div><p>将<code>type</code>设置为<code>border-card</code>。</p>
</div>
        <template slot="source"><element-demo2 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;el-tabs type=&quot;border-card&quot;&gt;
  &lt;el-tab-pane label=&quot;用户管理&quot;&gt;用户管理&lt;/el-tab-pane&gt;
  &lt;el-tab-pane label=&quot;配置管理&quot;&gt;配置管理&lt;/el-tab-pane&gt;
  &lt;el-tab-pane label=&quot;角色管理&quot;&gt;角色管理&lt;/el-tab-pane&gt;
  &lt;el-tab-pane label=&quot;定时任务补偿&quot;&gt;定时任务补偿&lt;/el-tab-pane&gt;
&lt;/el-tabs&gt;
</code></pre></template></demo-block><h3 id="wei-zhi"><a class="header-anchor" href="#wei-zhi">¶</a> 位置</h3>
<p>可以通过 <code>tab-position</code> 设置标签的位置</p>
<demo-block>
        <div><p>标签一共有四个方向的设置 <code>tabPosition=&quot;left|right|top|bottom&quot;</code></p>
</div>
        <template slot="source"><element-demo3 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;template&gt;
  &lt;el-radio-group v-model=&quot;tabPosition&quot; style=&quot;margin-bottom: 30px;&quot;&gt;
    &lt;el-radio-button label=&quot;top&quot;&gt;top&lt;/el-radio-button&gt;
    &lt;el-radio-button label=&quot;right&quot;&gt;right&lt;/el-radio-button&gt;
    &lt;el-radio-button label=&quot;bottom&quot;&gt;bottom&lt;/el-radio-button&gt;
    &lt;el-radio-button label=&quot;left&quot;&gt;left&lt;/el-radio-button&gt;
  &lt;/el-radio-group&gt;

  &lt;el-tabs :tab-position=&quot;tabPosition&quot; style=&quot;height: 200px;&quot;&gt;
    &lt;el-tab-pane label=&quot;用户管理&quot;&gt;用户管理&lt;/el-tab-pane&gt;
    &lt;el-tab-pane label=&quot;配置管理&quot;&gt;配置管理&lt;/el-tab-pane&gt;
    &lt;el-tab-pane label=&quot;角色管理&quot;&gt;角色管理&lt;/el-tab-pane&gt;
    &lt;el-tab-pane label=&quot;定时任务补偿&quot;&gt;定时任务补偿&lt;/el-tab-pane&gt;
  &lt;/el-tabs&gt;
&lt;/template&gt;
&lt;script&gt;
  export default {
    data() {
      return {
        tabPosition: 'left'
      };
    }
  };
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="zi-ding-yi-biao-qian-ye"><a class="header-anchor" href="#zi-ding-yi-biao-qian-ye">¶</a> 自定义标签页</h3>
<p>可以通过具名 <code>slot</code> 来实现自定义标签页的内容</p>
<demo-block>
        
        <template slot="source"><element-demo4 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;el-tabs type=&quot;border-card&quot;&gt;
  &lt;el-tab-pane&gt;
    &lt;span slot=&quot;label&quot;&gt;&lt;i class=&quot;el-icon-date&quot;&gt;&lt;/i&gt; 我的行程&lt;/span&gt;
    我的行程
  &lt;/el-tab-pane&gt;
  &lt;el-tab-pane label=&quot;消息中心&quot;&gt;消息中心&lt;/el-tab-pane&gt;
  &lt;el-tab-pane label=&quot;角色管理&quot;&gt;角色管理&lt;/el-tab-pane&gt;
  &lt;el-tab-pane label=&quot;定时任务补偿&quot;&gt;定时任务补偿&lt;/el-tab-pane&gt;
&lt;/el-tabs&gt;
</code></pre></template></demo-block><h3 id="dong-tai-zeng-jian-biao-qian-ye"><a class="header-anchor" href="#dong-tai-zeng-jian-biao-qian-ye">¶</a> 动态增减标签页</h3>
<p>增减标签页按钮只能在选项卡样式的标签页下使用</p>
<demo-block>
        
        <template slot="source"><element-demo5 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;el-tabs v-model=&quot;editableTabsValue&quot; type=&quot;card&quot; editable @edit=&quot;handleTabsEdit&quot;&gt;
  &lt;el-tab-pane
    :key=&quot;item.name&quot;
    v-for=&quot;(item, index) in editableTabs&quot;
    :label=&quot;item.title&quot;
    :name=&quot;item.name&quot;
  &gt;
    {{item.content}}
  &lt;/el-tab-pane&gt;
&lt;/el-tabs&gt;
&lt;script&gt;
  export default {
    data() {
      return {
        editableTabsValue: '2',
        editableTabs: [{
          title: 'Tab 1',
          name: '1',
          content: 'Tab 1 content'
        }, {
          title: 'Tab 2',
          name: '2',
          content: 'Tab 2 content'
        }],
        tabIndex: 2
      }
    },
    methods: {
      handleTabsEdit(targetName, action) {
        if (action === 'add') {
          let newTabName = ++this.tabIndex + '';
          this.editableTabs.push({
            title: 'New Tab',
            name: newTabName,
            content: 'New Tab content'
          });
          this.editableTabsValue = newTabName;
        }
        if (action === 'remove') {
          let tabs = this.editableTabs;
          let activeName = this.editableTabsValue;
          if (activeName === targetName) {
            tabs.forEach((tab, index) =&gt; {
              if (tab.name === targetName) {
                let nextTab = tabs[index + 1] || tabs[index - 1];
                if (nextTab) {
                  activeName = nextTab.name;
                }
              }
            });
          }
          
          this.editableTabsValue = activeName;
          this.editableTabs = tabs.filter(tab =&gt; tab.name !== targetName);
        }
      }
    }
  }
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="zi-ding-yi-zeng-jia-biao-qian-ye-hong-fa-qi"><a class="header-anchor" href="#zi-ding-yi-zeng-jia-biao-qian-ye-hong-fa-qi">¶</a> 自定义增加标签页触发器</h3>
<demo-block>
        
        <template slot="source"><element-demo6 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;div style=&quot;margin-bottom: 20px;&quot;&gt;
  &lt;el-button
    size=&quot;small&quot;
    @click=&quot;addTab(editableTabsValue)&quot;
  &gt;
    add tab
  &lt;/el-button&gt;
&lt;/div&gt;
&lt;el-tabs v-model=&quot;editableTabsValue&quot; type=&quot;card&quot; closable @tab-remove=&quot;removeTab&quot;&gt;
  &lt;el-tab-pane
    v-for=&quot;(item, index) in editableTabs&quot;
    :key=&quot;item.name&quot;
    :label=&quot;item.title&quot;
    :name=&quot;item.name&quot;
  &gt;
    {{item.content}}
  &lt;/el-tab-pane&gt;
&lt;/el-tabs&gt;
&lt;script&gt;
  export default {
    data() {
      return {
        editableTabsValue: '2',
        editableTabs: [{
          title: 'Tab 1',
          name: '1',
          content: 'Tab 1 content'
        }, {
          title: 'Tab 2',
          name: '2',
          content: 'Tab 2 content'
        }],
        tabIndex: 2
      }
    },
    methods: {
      addTab(targetName) {
        let newTabName = ++this.tabIndex + '';
        this.editableTabs.push({
          title: 'New Tab',
          name: newTabName,
          content: 'New Tab content'
        });
        this.editableTabsValue = newTabName;
      },
      removeTab(targetName) {
        let tabs = this.editableTabs;
        let activeName = this.editableTabsValue;
        if (activeName === targetName) {
          tabs.forEach((tab, index) =&gt; {
            if (tab.name === targetName) {
              let nextTab = tabs[index + 1] || tabs[index - 1];
              if (nextTab) {
                activeName = nextTab.name;
              }
            }
          });
        }
        
        this.editableTabsValue = activeName;
        this.editableTabs = tabs.filter(tab =&gt; tab.name !== targetName);
      }
    }
  }
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="tabs-attributes"><a class="header-anchor" href="#tabs-attributes">¶</a> Tabs Attributes</h3>
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
<td>value / v-model</td>
<td>绑定值，选中选项卡的 name</td>
<td>string</td>
<td>—</td>
<td>第一个选项卡的 name</td>
</tr>
<tr>
<td>type</td>
<td>风格类型</td>
<td>string</td>
<td>card/border-card</td>
<td>—</td>
</tr>
<tr>
<td>closable</td>
<td>标签是否可关闭</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>addable</td>
<td>标签是否可增加</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>editable</td>
<td>标签是否同时可增加和关闭</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>tab-position</td>
<td>选项卡所在位置</td>
<td>string</td>
<td>top/right/bottom/left</td>
<td>top</td>
</tr>
<tr>
<td>stretch</td>
<td>标签的宽度是否自撑开</td>
<td>boolean</td>
<td>-</td>
<td>false</td>
</tr>
<tr>
<td>before-leave</td>
<td>切换标签之前的钩子，若返回 false 或者返回 Promise 且被 reject，则阻止切换。</td>
<td>Function(activeName, oldActiveName)</td>
<td>—</td>
<td>—</td>
</tr>
</tbody>
</table>
<h3 id="tabs-events"><a class="header-anchor" href="#tabs-events">¶</a> Tabs Events</h3>
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
<td>tab-click</td>
<td>tab 被选中时触发</td>
<td>被选中的标签 tab 实例</td>
</tr>
<tr>
<td>tab-remove</td>
<td>点击 tab 移除按钮后触发</td>
<td>被删除的标签的 name</td>
</tr>
<tr>
<td>tab-add</td>
<td>点击 tabs 的新增按钮后触发</td>
<td>—</td>
</tr>
<tr>
<td>edit</td>
<td>点击 tabs 的新增按钮或 tab 被关闭后触发</td>
<td>(targetName, action)</td>
</tr>
</tbody>
</table>
<h3 id="tab-pane-attributes"><a class="header-anchor" href="#tab-pane-attributes">¶</a> Tab-pane Attributes</h3>
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
<td>选项卡标题</td>
<td>string</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>disabled</td>
<td>是否禁用</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>name</td>
<td>与选项卡绑定值 value 对应的标识符，表示选项卡别名</td>
<td>string</td>
<td>—</td>
<td>该选项卡在选项卡列表中的顺序值，如第一个选项卡则为'1'</td>
</tr>
<tr>
<td>closable</td>
<td>标签是否可关闭</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>lazy</td>
<td>标签是否延迟渲染</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
</tbody>
</table>
