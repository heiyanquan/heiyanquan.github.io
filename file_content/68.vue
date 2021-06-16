<h2 id="popover"><a class="header-anchor" href="#popover">¶</a> Popover</h2>
<h3 id="basic-usage"><a class="header-anchor" href="#basic-usage">¶</a> Basic usage</h3>
<p>Similar to Tooltip, Popover is also built with <code>Vue-popper</code>. So for some duplicated attributes, please refer to the documentation of Tooltip.</p>
<demo-block>
        <div><p>The <code>trigger</code> attribute is used to define how popover is triggered: <code>hover</code>, <code>click</code>, <code>focus</code> or <code>manual</code>. As for the triggering element, you can write it in two different ways: use the <code>slot=&quot;reference&quot;</code> named slot, or use the <code>v-popover</code> directive and set it to Popover's <code>ref</code>.</p>
</div>
        <!--element-demo: <template>
  <el-popover
    placement="top-start"
    title="Title"
    width="200"
    trigger="hover"
    content="this is content, this is content, this is content">
    <el-button slot="reference">Hover to activate</el-button>
  </el-popover>

  <el-popover
    placement="bottom"
    title="Title"
    width="200"
    trigger="click"
    content="this is content, this is content, this is content">
    <el-button slot="reference">Click to activate</el-button>
  </el-popover>

  <el-popover
    ref="popover"
    placement="right"
    title="Title"
    width="200"
    trigger="focus"
    content="this is content, this is content, this is content">
  </el-popover>
  <el-button v-popover:popover>Focus to activate</el-button>

  <el-popover
    placement="bottom"
    title="Title"
    width="200"
    trigger="manual"
    content="this is content, this is content, this is content"
    v-model="visible">
    <el-button slot="reference" @click="visible = !visible">Manual to activate</el-button>
  </el-popover>
</template>

<script>
  export default {
    data() {
      return {
        visible: false
      };
    }
  };
</script>
:element-demo-->
        <template slot="highlight"><pre v-pre><code class="html">&lt;template&gt;
  &lt;el-popover
    placement=&quot;top-start&quot;
    title=&quot;Title&quot;
    width=&quot;200&quot;
    trigger=&quot;hover&quot;
    content=&quot;this is content, this is content, this is content&quot;&gt;
    &lt;el-button slot=&quot;reference&quot;&gt;Hover to activate&lt;/el-button&gt;
  &lt;/el-popover&gt;

  &lt;el-popover
    placement=&quot;bottom&quot;
    title=&quot;Title&quot;
    width=&quot;200&quot;
    trigger=&quot;click&quot;
    content=&quot;this is content, this is content, this is content&quot;&gt;
    &lt;el-button slot=&quot;reference&quot;&gt;Click to activate&lt;/el-button&gt;
  &lt;/el-popover&gt;

  &lt;el-popover
    ref=&quot;popover&quot;
    placement=&quot;right&quot;
    title=&quot;Title&quot;
    width=&quot;200&quot;
    trigger=&quot;focus&quot;
    content=&quot;this is content, this is content, this is content&quot;&gt;
  &lt;/el-popover&gt;
  &lt;el-button v-popover:popover&gt;Focus to activate&lt;/el-button&gt;

  &lt;el-popover
    placement=&quot;bottom&quot;
    title=&quot;Title&quot;
    width=&quot;200&quot;
    trigger=&quot;manual&quot;
    content=&quot;this is content, this is content, this is content&quot;
    v-model=&quot;visible&quot;&gt;
    &lt;el-button slot=&quot;reference&quot; @click=&quot;visible = !visible&quot;&gt;Manual to activate&lt;/el-button&gt;
  &lt;/el-popover&gt;
&lt;/template&gt;

&lt;script&gt;
  export default {
    data() {
      return {
        visible: false
      };
    }
  };
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="nested-information"><a class="header-anchor" href="#nested-information">¶</a> Nested information</h3>
<p>Other components can be nested in popover. Following is an example of nested table.</p>
<demo-block>
        <div><p>replace the <code>content</code> attribute with a default <code>slot</code>.</p>
</div>
        <!--element-demo: <el-popover
  placement="right"
  width="400"
  trigger="click">
  <el-table :data="gridData">
    <el-table-column width="150" property="date" label="date"></el-table-column>
    <el-table-column width="100" property="name" label="name"></el-table-column>
    <el-table-column width="300" property="address" label="address"></el-table-column>
  </el-table>
  <el-button slot="reference">Click to activate</el-button>
</el-popover>

<script>
  export default {
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
</script>
:element-demo-->
        <template slot="highlight"><pre v-pre><code class="html">&lt;el-popover
  placement=&quot;right&quot;
  width=&quot;400&quot;
  trigger=&quot;click&quot;&gt;
  &lt;el-table :data=&quot;gridData&quot;&gt;
    &lt;el-table-column width=&quot;150&quot; property=&quot;date&quot; label=&quot;date&quot;&gt;&lt;/el-table-column&gt;
    &lt;el-table-column width=&quot;100&quot; property=&quot;name&quot; label=&quot;name&quot;&gt;&lt;/el-table-column&gt;
    &lt;el-table-column width=&quot;300&quot; property=&quot;address&quot; label=&quot;address&quot;&gt;&lt;/el-table-column&gt;
  &lt;/el-table&gt;
  &lt;el-button slot=&quot;reference&quot;&gt;Click to activate&lt;/el-button&gt;
&lt;/el-popover&gt;

&lt;script&gt;
  export default {
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
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="nested-operation"><a class="header-anchor" href="#nested-operation">¶</a> Nested operation</h3>
<p>Of course, you can nest other operations. It's more light-weight than using a dialog.</p>
<demo-block>
        
        <!--element-demo: <el-popover
  placement="top"
  width="160"
  v-model="visible">
  <p>Are you sure to delete this?</p>
  <div style="text-align: right; margin: 0">
    <el-button size="mini" type="text" @click="visible = false">cancel</el-button>
    <el-button type="primary" size="mini" @click="visible = false">confirm</el-button>
  </div>
  <el-button slot="reference">Delete</el-button>
</el-popover>

<script>
  export default {
    data() {
      return {
        visible: false,
      };
    }
  }
</script>
:element-demo-->
        <template slot="highlight"><pre v-pre><code class="html">&lt;el-popover
  placement=&quot;top&quot;
  width=&quot;160&quot;
  v-model=&quot;visible&quot;&gt;
  &lt;p&gt;Are you sure to delete this?&lt;/p&gt;
  &lt;div style=&quot;text-align: right; margin: 0&quot;&gt;
    &lt;el-button size=&quot;mini&quot; type=&quot;text&quot; @click=&quot;visible = false&quot;&gt;cancel&lt;/el-button&gt;
    &lt;el-button type=&quot;primary&quot; size=&quot;mini&quot; @click=&quot;visible = false&quot;&gt;confirm&lt;/el-button&gt;
  &lt;/div&gt;
  &lt;el-button slot=&quot;reference&quot;&gt;Delete&lt;/el-button&gt;
&lt;/el-popover&gt;

&lt;script&gt;
  export default {
    data() {
      return {
        visible: false,
      };
    }
  }
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
<td>trigger</td>
<td>how the popover is triggered</td>
<td>string</td>
<td>click/focus/hover/manual</td>
<td>click</td>
</tr>
<tr>
<td>title</td>
<td>popover title</td>
<td>string</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>content</td>
<td>popover content, can be replaced with a default <code>slot</code></td>
<td>string</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>width</td>
<td>popover width</td>
<td>string, number</td>
<td>—</td>
<td>Min width 150px</td>
</tr>
<tr>
<td>placement</td>
<td>popover placement</td>
<td>string</td>
<td>top/top-start/top-end/bottom/bottom-start/bottom-end/left/left-start/left-end/right/right-start/right-end</td>
<td>bottom</td>
</tr>
<tr>
<td>disabled</td>
<td>whether Popover is disabled</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>value / v-model</td>
<td>whether popover is visible</td>
<td>Boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>offset</td>
<td>popover offset</td>
<td>number</td>
<td>—</td>
<td>0</td>
</tr>
<tr>
<td>transition</td>
<td>popover transition animation</td>
<td>string</td>
<td>—</td>
<td>el-fade-in-linear</td>
</tr>
<tr>
<td>visible-arrow</td>
<td>whether a tooltip arrow is displayed or not. For more info, please refer to <a href="https://github.com/element-component/vue-popper">Vue-popper</a></td>
<td>boolean</td>
<td>—</td>
<td>true</td>
</tr>
<tr>
<td>popper-options</td>
<td>parameters for <a href="https://popper.js.org/documentation.html">popper.js</a></td>
<td>object</td>
<td>please refer to <a href="https://popper.js.org/documentation.html">popper.js</a></td>
<td><code>{ boundariesElement: 'body', gpuAcceleration: false }</code></td>
</tr>
<tr>
<td>popper-class</td>
<td>custom class name for popover</td>
<td>string</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>open-delay</td>
<td>delay before appearing when <code>trigger</code> is hover, in milliseconds</td>
<td>number</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>close-delay</td>
<td>delay before disappearing when <code>trigger</code> is hover, in milliseconds</td>
<td>number</td>
<td>—</td>
<td>200</td>
</tr>
<tr>
<td>tabindex</td>
<td><a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/tabindex">tabindex</a> of Popover</td>
<td>number</td>
<td>—</td>
<td>0</td>
</tr>
</tbody>
</table>
<h3 id="slot"><a class="header-anchor" href="#slot">¶</a> Slot</h3>
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
<td>text content of popover</td>
</tr>
<tr>
<td>reference</td>
<td>HTML element that triggers popover</td>
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
<td>show</td>
<td>triggers when popover shows</td>
<td>—</td>
</tr>
<tr>
<td>after-enter</td>
<td>triggers when the entering transition ends</td>
<td>—</td>
</tr>
<tr>
<td>hide</td>
<td>triggers when popover hides</td>
<td>—</td>
</tr>
<tr>
<td>after-leave</td>
<td>triggers when the leaving transition ends</td>
<td>—</td>
</tr>
</tbody>
</table>
