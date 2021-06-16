<h2 id="tabs"><a class="header-anchor" href="#tabs">¶</a> Tabs</h2>
<p>Divide data collections which are related yet belong to different types.</p>
<h3 id="basic-usage"><a class="header-anchor" href="#basic-usage">¶</a> Basic usage</h3>
<p>Basic and concise tabs.</p>
<demo-block>
        <div><p>Tabs provide a selective card functionality. By default the first tab is selected as active, and you can activate any tab by setting the <code>value</code> attribute.</p>
</div>
        <!--element-demo: <template>
  <el-tabs v-model="activeName" @tab-click="handleClick">
    <el-tab-pane label="User" name="first">User</el-tab-pane>
    <el-tab-pane label="Config" name="second">Config</el-tab-pane>
    <el-tab-pane label="Role" name="third">Role</el-tab-pane>
    <el-tab-pane label="Task" name="fourth">Task</el-tab-pane>
  </el-tabs>
</template>
<script>
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
</script>
:element-demo-->
        <template slot="highlight"><pre v-pre><code class="html">&lt;template&gt;
  &lt;el-tabs v-model=&quot;activeName&quot; @tab-click=&quot;handleClick&quot;&gt;
    &lt;el-tab-pane label=&quot;User&quot; name=&quot;first&quot;&gt;User&lt;/el-tab-pane&gt;
    &lt;el-tab-pane label=&quot;Config&quot; name=&quot;second&quot;&gt;Config&lt;/el-tab-pane&gt;
    &lt;el-tab-pane label=&quot;Role&quot; name=&quot;third&quot;&gt;Role&lt;/el-tab-pane&gt;
    &lt;el-tab-pane label=&quot;Task&quot; name=&quot;fourth&quot;&gt;Task&lt;/el-tab-pane&gt;
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
</code></pre></template></demo-block><h3 id="card-style"><a class="header-anchor" href="#card-style">¶</a> Card Style</h3>
<p>Tabs styled as cards.</p>
<demo-block>
        <div><p>Set <code>type</code> to <code>card</code> can get a card-styled tab.</p>
</div>
        <!--element-demo: <template>
  <el-tabs type="card" @tab-click="handleClick">
    <el-tab-pane label="User">User</el-tab-pane>
    <el-tab-pane label="Config">Config</el-tab-pane>
    <el-tab-pane label="Role">Role</el-tab-pane>
    <el-tab-pane label="Task">Task</el-tab-pane>
  </el-tabs>
</template>
<script>
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
</script>
:element-demo-->
        <template slot="highlight"><pre v-pre><code class="html">&lt;template&gt;
  &lt;el-tabs type=&quot;card&quot; @tab-click=&quot;handleClick&quot;&gt;
    &lt;el-tab-pane label=&quot;User&quot;&gt;User&lt;/el-tab-pane&gt;
    &lt;el-tab-pane label=&quot;Config&quot;&gt;Config&lt;/el-tab-pane&gt;
    &lt;el-tab-pane label=&quot;Role&quot;&gt;Role&lt;/el-tab-pane&gt;
    &lt;el-tab-pane label=&quot;Task&quot;&gt;Task&lt;/el-tab-pane&gt;
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
</code></pre></template></demo-block><h3 id="border-card"><a class="header-anchor" href="#border-card">¶</a> Border card</h3>
<p>Border card tabs.</p>
<demo-block>
        <div><p>Set <code>type</code> to <code>border-card</code>.</p>
</div>
        <!--element-demo: <el-tabs type="border-card">
  <el-tab-pane label="User">User</el-tab-pane>
  <el-tab-pane label="Config">Config</el-tab-pane>
  <el-tab-pane label="Role">Role</el-tab-pane>
  <el-tab-pane label="Task">Task</el-tab-pane>
</el-tabs>
:element-demo-->
        <template slot="highlight"><pre v-pre><code class="html">&lt;el-tabs type=&quot;border-card&quot;&gt;
  &lt;el-tab-pane label=&quot;User&quot;&gt;User&lt;/el-tab-pane&gt;
  &lt;el-tab-pane label=&quot;Config&quot;&gt;Config&lt;/el-tab-pane&gt;
  &lt;el-tab-pane label=&quot;Role&quot;&gt;Role&lt;/el-tab-pane&gt;
  &lt;el-tab-pane label=&quot;Task&quot;&gt;Task&lt;/el-tab-pane&gt;
&lt;/el-tabs&gt;
</code></pre></template></demo-block><h3 id="tab-position"><a class="header-anchor" href="#tab-position">¶</a> Tab position</h3>
<p>You can use <code>tab-position</code> attribute to set the tab's position.</p>
<demo-block>
        <div><p>You can choose from four directions: <code>tabPosition=&quot;left|right|top|bottom&quot;</code></p>
</div>
        <!--element-demo: <template>
  <el-radio-group v-model="tabPosition" style="margin-bottom: 30px;">
    <el-radio-button label="top">top</el-radio-button>
    <el-radio-button label="right">right</el-radio-button>
    <el-radio-button label="bottom">bottom</el-radio-button>
    <el-radio-button label="left">left</el-radio-button>
  </el-radio-group>

  <el-tabs :tab-position="tabPosition" style="height: 200px;">
    <el-tab-pane label="User">User</el-tab-pane>
    <el-tab-pane label="Config">Config</el-tab-pane>
    <el-tab-pane label="Role">Role</el-tab-pane>
    <el-tab-pane label="Task">Task</el-tab-pane>
  </el-tabs>
</template>
<script>
  export default {
    data() {
      return {
        tabPosition: 'left'
      };
    }
  };
</script>
:element-demo-->
        <template slot="highlight"><pre v-pre><code class="html">&lt;template&gt;
  &lt;el-radio-group v-model=&quot;tabPosition&quot; style=&quot;margin-bottom: 30px;&quot;&gt;
    &lt;el-radio-button label=&quot;top&quot;&gt;top&lt;/el-radio-button&gt;
    &lt;el-radio-button label=&quot;right&quot;&gt;right&lt;/el-radio-button&gt;
    &lt;el-radio-button label=&quot;bottom&quot;&gt;bottom&lt;/el-radio-button&gt;
    &lt;el-radio-button label=&quot;left&quot;&gt;left&lt;/el-radio-button&gt;
  &lt;/el-radio-group&gt;

  &lt;el-tabs :tab-position=&quot;tabPosition&quot; style=&quot;height: 200px;&quot;&gt;
    &lt;el-tab-pane label=&quot;User&quot;&gt;User&lt;/el-tab-pane&gt;
    &lt;el-tab-pane label=&quot;Config&quot;&gt;Config&lt;/el-tab-pane&gt;
    &lt;el-tab-pane label=&quot;Role&quot;&gt;Role&lt;/el-tab-pane&gt;
    &lt;el-tab-pane label=&quot;Task&quot;&gt;Task&lt;/el-tab-pane&gt;
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
</code></pre></template></demo-block><h3 id="custom-tab"><a class="header-anchor" href="#custom-tab">¶</a> Custom Tab</h3>
<p>You can use named slot to customize the tab label content.</p>
<demo-block>
        
        <!--element-demo: <el-tabs type="border-card">
  <el-tab-pane>
    <span slot="label"><i class="el-icon-date"></i> Route</span>
    Route
  </el-tab-pane>
  <el-tab-pane label="Config">Config</el-tab-pane>
  <el-tab-pane label="Role">Role</el-tab-pane>
  <el-tab-pane label="Task">Task</el-tab-pane>
</el-tabs>
:element-demo-->
        <template slot="highlight"><pre v-pre><code class="html">&lt;el-tabs type=&quot;border-card&quot;&gt;
  &lt;el-tab-pane&gt;
    &lt;span slot=&quot;label&quot;&gt;&lt;i class=&quot;el-icon-date&quot;&gt;&lt;/i&gt; Route&lt;/span&gt;
    Route
  &lt;/el-tab-pane&gt;
  &lt;el-tab-pane label=&quot;Config&quot;&gt;Config&lt;/el-tab-pane&gt;
  &lt;el-tab-pane label=&quot;Role&quot;&gt;Role&lt;/el-tab-pane&gt;
  &lt;el-tab-pane label=&quot;Task&quot;&gt;Task&lt;/el-tab-pane&gt;
&lt;/el-tabs&gt;
</code></pre></template></demo-block><h3 id="add-close-tab"><a class="header-anchor" href="#add-close-tab">¶</a> Add &amp; close tab</h3>
<p>Only card type Tabs support addable &amp; closeable.</p>
<demo-block>
        
        <!--element-demo: <el-tabs v-model="editableTabsValue" type="card" editable @edit="handleTabsEdit">
  <el-tab-pane
    v-for="(item, index) in editableTabs"
    :key="item.name"
    :label="item.title"
    :name="item.name"
  >
    {{item.content}}
  </el-tab-pane>
</el-tabs>
<script>
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
            tabs.forEach((tab, index) => {
              if (tab.name === targetName) {
                let nextTab = tabs[index + 1] || tabs[index - 1];
                if (nextTab) {
                  activeName = nextTab.name;
                }
              }
            });
          }
          
          this.editableTabsValue = activeName;
          this.editableTabs = tabs.filter(tab => tab.name !== targetName);
        }
      }
    }
  }
</script>
:element-demo-->
        <template slot="highlight"><pre v-pre><code class="html">&lt;el-tabs v-model=&quot;editableTabsValue&quot; type=&quot;card&quot; editable @edit=&quot;handleTabsEdit&quot;&gt;
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
</code></pre></template></demo-block><h3 id="customized-trigger-button-of-new-tab"><a class="header-anchor" href="#customized-trigger-button-of-new-tab">¶</a> Customized trigger button of new tab</h3>
<demo-block>
        
        <!--element-demo: <div style="margin-bottom: 20px;">
  <el-button
    size="small"
    @click="addTab(editableTabsValue)"
  >
    add tab
  </el-button>
</div>
<el-tabs v-model="editableTabsValue" type="card" closable @tab-remove="removeTab">
  <el-tab-pane
    v-for="(item, index) in editableTabs"
    :key="item.name"
    :label="item.title"
    :name="item.name"
  >
    {{item.content}}
  </el-tab-pane>
</el-tabs>
<script>
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
          tabs.forEach((tab, index) => {
            if (tab.name === targetName) {
              let nextTab = tabs[index + 1] || tabs[index - 1];
              if (nextTab) {
                activeName = nextTab.name;
              }
            }
          });
        }
        
        this.editableTabsValue = activeName;
        this.editableTabs = tabs.filter(tab => tab.name !== targetName);
      }
    }
  }
</script>
:element-demo-->
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
<th>Attribute</th>
<th>Description</th>
<th>Type</th>
<th>Accepted Values</th>
<th>Default</th>
</tr>
</thead>
<tbody>
<tr>
<td>value / v-model</td>
<td>binding value, name of the selected tab</td>
<td>string</td>
<td>—</td>
<td>name of first tab</td>
</tr>
<tr>
<td>type</td>
<td>type of Tab</td>
<td>string</td>
<td>card/border-card</td>
<td>—</td>
</tr>
<tr>
<td>closable</td>
<td>whether Tab is closable</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>addable</td>
<td>whether Tab is addable</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>editable</td>
<td>whether Tab is addable and closable</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>tab-position</td>
<td>position of tabs</td>
<td>string</td>
<td>top/right/bottom/left</td>
<td>top</td>
</tr>
<tr>
<td>stretch</td>
<td>whether width of tab automatically fits its container</td>
<td>boolean</td>
<td>-</td>
<td>false</td>
</tr>
<tr>
<td>before-leave</td>
<td>hook function before switching tab. If <code>false</code> is returned or a <code>Promise</code> is returned and then is rejected, switching will be prevented</td>
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
<th>Event Name</th>
<th>Description</th>
<th>Parameters</th>
</tr>
</thead>
<tbody>
<tr>
<td>tab-click</td>
<td>triggers when a tab is clicked</td>
<td>clicked tab</td>
</tr>
<tr>
<td>tab-remove</td>
<td>triggers when tab-remove button is clicked</td>
<td>name of the removed tab</td>
</tr>
<tr>
<td>tab-add</td>
<td>triggers when tab-add button is clicked</td>
<td>—</td>
</tr>
<tr>
<td>edit</td>
<td>triggers when tab-add button or tab-remove is clicked</td>
<td>(targetName, action)</td>
</tr>
</tbody>
</table>
<h3 id="tab-pane-attributes"><a class="header-anchor" href="#tab-pane-attributes">¶</a> Tab-pane Attributes</h3>
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
<td>title of the tab</td>
<td>string</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>disabled</td>
<td>whether Tab is disabled</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>name</td>
<td>identifier corresponding to the name of Tabs, representing the alias of the tab-pane</td>
<td>string</td>
<td>—</td>
<td>ordinal number of the tab-pane in the sequence, e.g. the first tab-pane is '1'</td>
</tr>
<tr>
<td>closable</td>
<td>whether Tab is closable</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>lazy</td>
<td>whether Tab is lazily rendered</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
</tbody>
</table>
