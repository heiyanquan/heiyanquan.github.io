<h2 id="dropdown"><a class="header-anchor" href="#dropdown">¶</a> Dropdown</h2>
<p>Toggleable menu for displaying lists of links and actions.</p>
<h3 id="basic-usage"><a class="header-anchor" href="#basic-usage">¶</a> Basic usage</h3>
<p>Hover on the dropdown menu to unfold it for more actions.</p>
<demo-block>
        <div><p>The triggering element is rendered by the default <code>slot</code>, and the dropdown part is rendered by the <code>slot</code> named <code>dropdown</code>. By default, dropdown list shows when you hover on the triggering element without having to click it.</p>
</div>
        <!--element-demo: <el-dropdown>
  <span class="el-dropdown-link">
    Dropdown List<i class="el-icon-arrow-down el-icon--right"></i>
  </span>
  <el-dropdown-menu slot="dropdown">
    <el-dropdown-item>Action 1</el-dropdown-item>
    <el-dropdown-item>Action 2</el-dropdown-item>
    <el-dropdown-item>Action 3</el-dropdown-item>
    <el-dropdown-item disabled>Action 4</el-dropdown-item>
    <el-dropdown-item divided>Action 5</el-dropdown-item>
  </el-dropdown-menu>
</el-dropdown>

<style>
  .el-dropdown-link {
    cursor: pointer;
    color: #409EFF;
  }
  .el-icon-arrow-down {
    font-size: 12px;
  }
</style>

:element-demo-->
        <template slot="highlight"><pre v-pre><code class="html">&lt;el-dropdown&gt;
  &lt;span class=&quot;el-dropdown-link&quot;&gt;
    Dropdown List&lt;i class=&quot;el-icon-arrow-down el-icon--right&quot;&gt;&lt;/i&gt;
  &lt;/span&gt;
  &lt;el-dropdown-menu slot=&quot;dropdown&quot;&gt;
    &lt;el-dropdown-item&gt;Action 1&lt;/el-dropdown-item&gt;
    &lt;el-dropdown-item&gt;Action 2&lt;/el-dropdown-item&gt;
    &lt;el-dropdown-item&gt;Action 3&lt;/el-dropdown-item&gt;
    &lt;el-dropdown-item disabled&gt;Action 4&lt;/el-dropdown-item&gt;
    &lt;el-dropdown-item divided&gt;Action 5&lt;/el-dropdown-item&gt;
  &lt;/el-dropdown-menu&gt;
&lt;/el-dropdown&gt;

&lt;style&gt;
  .el-dropdown-link {
    cursor: pointer;
    color: #409EFF;
  }
  .el-icon-arrow-down {
    font-size: 12px;
  }
&lt;/style&gt;

</code></pre></template></demo-block><h3 id="triggering-element"><a class="header-anchor" href="#triggering-element">¶</a> Triggering element</h3>
<p>Use the button to trigger the dropdown list.</p>
<demo-block>
        <div><p>Use <code>split-button</code> to split the triggering element into a button group with the left button being a normal button and right one the actual triggering target. If you wanna insert a separator line between item three and item four, just add a class <code>divider</code> to item four.</p>
</div>
        <!--element-demo: <el-dropdown>
  <el-button type="primary">
    Dropdown List<i class="el-icon-arrow-down el-icon--right"></i>
  </el-button>
  <el-dropdown-menu slot="dropdown">
    <el-dropdown-item>Action 1</el-dropdown-item>
    <el-dropdown-item>Action 2</el-dropdown-item>
    <el-dropdown-item>Action 3</el-dropdown-item>
    <el-dropdown-item>Action 4</el-dropdown-item>
    <el-dropdown-item>Action 5</el-dropdown-item>
  </el-dropdown-menu>
</el-dropdown>
<el-dropdown split-button type="primary" @click="handleClick">
  Dropdown List
  <el-dropdown-menu slot="dropdown">
    <el-dropdown-item>Action 1</el-dropdown-item>
    <el-dropdown-item>Action 2</el-dropdown-item>
    <el-dropdown-item>Action 3</el-dropdown-item>
    <el-dropdown-item>Action 4</el-dropdown-item>
    <el-dropdown-item>Action 5</el-dropdown-item>
  </el-dropdown-menu>
</el-dropdown>

<style>
  .el-dropdown {
    vertical-align: top;
  }
  .el-dropdown + .el-dropdown {
    margin-left: 15px;
  }
  .el-icon-arrow-down {
    font-size: 12px;
  }
</style>

<script>
  export default {
    methods: {
      handleClick() {
        alert('button click');
      }
    }
  }
</script>
:element-demo-->
        <template slot="highlight"><pre v-pre><code class="html">&lt;el-dropdown&gt;
  &lt;el-button type=&quot;primary&quot;&gt;
    Dropdown List&lt;i class=&quot;el-icon-arrow-down el-icon--right&quot;&gt;&lt;/i&gt;
  &lt;/el-button&gt;
  &lt;el-dropdown-menu slot=&quot;dropdown&quot;&gt;
    &lt;el-dropdown-item&gt;Action 1&lt;/el-dropdown-item&gt;
    &lt;el-dropdown-item&gt;Action 2&lt;/el-dropdown-item&gt;
    &lt;el-dropdown-item&gt;Action 3&lt;/el-dropdown-item&gt;
    &lt;el-dropdown-item&gt;Action 4&lt;/el-dropdown-item&gt;
    &lt;el-dropdown-item&gt;Action 5&lt;/el-dropdown-item&gt;
  &lt;/el-dropdown-menu&gt;
&lt;/el-dropdown&gt;
&lt;el-dropdown split-button type=&quot;primary&quot; @click=&quot;handleClick&quot;&gt;
  Dropdown List
  &lt;el-dropdown-menu slot=&quot;dropdown&quot;&gt;
    &lt;el-dropdown-item&gt;Action 1&lt;/el-dropdown-item&gt;
    &lt;el-dropdown-item&gt;Action 2&lt;/el-dropdown-item&gt;
    &lt;el-dropdown-item&gt;Action 3&lt;/el-dropdown-item&gt;
    &lt;el-dropdown-item&gt;Action 4&lt;/el-dropdown-item&gt;
    &lt;el-dropdown-item&gt;Action 5&lt;/el-dropdown-item&gt;
  &lt;/el-dropdown-menu&gt;
&lt;/el-dropdown&gt;

&lt;style&gt;
  .el-dropdown {
    vertical-align: top;
  }
  .el-dropdown + .el-dropdown {
    margin-left: 15px;
  }
  .el-icon-arrow-down {
    font-size: 12px;
  }
&lt;/style&gt;

&lt;script&gt;
  export default {
    methods: {
      handleClick() {
        alert('button click');
      }
    }
  }
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="how-to-trigger"><a class="header-anchor" href="#how-to-trigger">¶</a> How to trigger</h3>
<p>Click the triggering element or hover on it.</p>
<demo-block>
        <div><p>Use the attribute <code>trigger</code>. By default, it is <code>hover</code>.</p>
</div>
        <!--element-demo: <el-row class="block-col-2">
  <el-col :span="12">
    <span class="demonstration">hover to trigger</span>
    <el-dropdown>
      <span class="el-dropdown-link">
        Dropdown List<i class="el-icon-arrow-down el-icon--right"></i>
      </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item icon="el-icon-plus">Action 1</el-dropdown-item>
        <el-dropdown-item icon="el-icon-circle-plus">Action 2</el-dropdown-item>
        <el-dropdown-item icon="el-icon-circle-plus-outline">Action 3</el-dropdown-item>
        <el-dropdown-item icon="el-icon-check">Action 4</el-dropdown-item>
        <el-dropdown-item icon="el-icon-circle-check">Action 5</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </el-col>
  <el-col :span="12">
    <span class="demonstration">click to trigger</span>
    <el-dropdown trigger="click">
      <span class="el-dropdown-link">
        Dropdown List<i class="el-icon-arrow-down el-icon--right"></i>
      </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item icon="el-icon-plus">Action 1</el-dropdown-item>
        <el-dropdown-item icon="el-icon-circle-plus">Action 2</el-dropdown-item>
        <el-dropdown-item icon="el-icon-circle-plus-outline">Action 3</el-dropdown-item>
        <el-dropdown-item icon="el-icon-check">Action 4</el-dropdown-item>
        <el-dropdown-item icon="el-icon-circle-check">Action 5</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </el-col>
</el-row>

<style>
  .el-dropdown-link {
    cursor: pointer;
    color: #409EFF;
  }
  .el-icon-arrow-down {
    font-size: 12px;
  }
  .demonstration {
    display: block;
    color: #8492a6;
    font-size: 14px;
    margin-bottom: 20px;
  }
</style>
:element-demo-->
        <template slot="highlight"><pre v-pre><code class="html">&lt;el-row class=&quot;block-col-2&quot;&gt;
  &lt;el-col :span=&quot;12&quot;&gt;
    &lt;span class=&quot;demonstration&quot;&gt;hover to trigger&lt;/span&gt;
    &lt;el-dropdown&gt;
      &lt;span class=&quot;el-dropdown-link&quot;&gt;
        Dropdown List&lt;i class=&quot;el-icon-arrow-down el-icon--right&quot;&gt;&lt;/i&gt;
      &lt;/span&gt;
      &lt;el-dropdown-menu slot=&quot;dropdown&quot;&gt;
        &lt;el-dropdown-item icon=&quot;el-icon-plus&quot;&gt;Action 1&lt;/el-dropdown-item&gt;
        &lt;el-dropdown-item icon=&quot;el-icon-circle-plus&quot;&gt;Action 2&lt;/el-dropdown-item&gt;
        &lt;el-dropdown-item icon=&quot;el-icon-circle-plus-outline&quot;&gt;Action 3&lt;/el-dropdown-item&gt;
        &lt;el-dropdown-item icon=&quot;el-icon-check&quot;&gt;Action 4&lt;/el-dropdown-item&gt;
        &lt;el-dropdown-item icon=&quot;el-icon-circle-check&quot;&gt;Action 5&lt;/el-dropdown-item&gt;
      &lt;/el-dropdown-menu&gt;
    &lt;/el-dropdown&gt;
  &lt;/el-col&gt;
  &lt;el-col :span=&quot;12&quot;&gt;
    &lt;span class=&quot;demonstration&quot;&gt;click to trigger&lt;/span&gt;
    &lt;el-dropdown trigger=&quot;click&quot;&gt;
      &lt;span class=&quot;el-dropdown-link&quot;&gt;
        Dropdown List&lt;i class=&quot;el-icon-arrow-down el-icon--right&quot;&gt;&lt;/i&gt;
      &lt;/span&gt;
      &lt;el-dropdown-menu slot=&quot;dropdown&quot;&gt;
        &lt;el-dropdown-item icon=&quot;el-icon-plus&quot;&gt;Action 1&lt;/el-dropdown-item&gt;
        &lt;el-dropdown-item icon=&quot;el-icon-circle-plus&quot;&gt;Action 2&lt;/el-dropdown-item&gt;
        &lt;el-dropdown-item icon=&quot;el-icon-circle-plus-outline&quot;&gt;Action 3&lt;/el-dropdown-item&gt;
        &lt;el-dropdown-item icon=&quot;el-icon-check&quot;&gt;Action 4&lt;/el-dropdown-item&gt;
        &lt;el-dropdown-item icon=&quot;el-icon-circle-check&quot;&gt;Action 5&lt;/el-dropdown-item&gt;
      &lt;/el-dropdown-menu&gt;
    &lt;/el-dropdown&gt;
  &lt;/el-col&gt;
&lt;/el-row&gt;

&lt;style&gt;
  .el-dropdown-link {
    cursor: pointer;
    color: #409EFF;
  }
  .el-icon-arrow-down {
    font-size: 12px;
  }
  .demonstration {
    display: block;
    color: #8492a6;
    font-size: 14px;
    margin-bottom: 20px;
  }
&lt;/style&gt;
</code></pre></template></demo-block><h3 id="menu-hiding-behavior"><a class="header-anchor" href="#menu-hiding-behavior">¶</a> Menu hiding behavior</h3>
<p>Use <code>hide-on-click</code> to define if menu closes on clicking.</p>
<demo-block>
        <div><p>By default menu will close when you click on menu items, and it can be turned off by setting hide-on-click to false.</p>
</div>
        <!--element-demo: <el-dropdown :hide-on-click="false">
  <span class="el-dropdown-link">
    Dropdown List<i class="el-icon-arrow-down el-icon--right"></i>
  </span>
  <el-dropdown-menu slot="dropdown">
    <el-dropdown-item>Action 1</el-dropdown-item>
    <el-dropdown-item>Action 2</el-dropdown-item>
    <el-dropdown-item>Action 3</el-dropdown-item>
    <el-dropdown-item disabled>Action 4</el-dropdown-item>
    <el-dropdown-item divided>Action 5</el-dropdown-item>
  </el-dropdown-menu>
</el-dropdown>

<style>
  .el-dropdown-link {
    cursor: pointer;
    color: #409EFF;
  }
  .el-icon-arrow-down {
    font-size: 12px;
  }
</style>
:element-demo-->
        <template slot="highlight"><pre v-pre><code class="html">&lt;el-dropdown :hide-on-click=&quot;false&quot;&gt;
  &lt;span class=&quot;el-dropdown-link&quot;&gt;
    Dropdown List&lt;i class=&quot;el-icon-arrow-down el-icon--right&quot;&gt;&lt;/i&gt;
  &lt;/span&gt;
  &lt;el-dropdown-menu slot=&quot;dropdown&quot;&gt;
    &lt;el-dropdown-item&gt;Action 1&lt;/el-dropdown-item&gt;
    &lt;el-dropdown-item&gt;Action 2&lt;/el-dropdown-item&gt;
    &lt;el-dropdown-item&gt;Action 3&lt;/el-dropdown-item&gt;
    &lt;el-dropdown-item disabled&gt;Action 4&lt;/el-dropdown-item&gt;
    &lt;el-dropdown-item divided&gt;Action 5&lt;/el-dropdown-item&gt;
  &lt;/el-dropdown-menu&gt;
&lt;/el-dropdown&gt;

&lt;style&gt;
  .el-dropdown-link {
    cursor: pointer;
    color: #409EFF;
  }
  .el-icon-arrow-down {
    font-size: 12px;
  }
&lt;/style&gt;
</code></pre></template></demo-block><h3 id="command-event"><a class="header-anchor" href="#command-event">¶</a> Command event</h3>
<p>Clicking each dropdown item fires an event whose parameter is assigned by each item.</p>
<demo-block>
        
        <!--element-demo: <el-dropdown @command="handleCommand">
  <span class="el-dropdown-link">
    Dropdown List<i class="el-icon-arrow-down el-icon--right"></i>
  </span>
  <el-dropdown-menu slot="dropdown">
    <el-dropdown-item command="a">Action 1</el-dropdown-item>
    <el-dropdown-item command="b">Action 2</el-dropdown-item>
    <el-dropdown-item command="c">Action 3</el-dropdown-item>
    <el-dropdown-item command="d" disabled>Action 4</el-dropdown-item>
    <el-dropdown-item command="e" divided>Action 5</el-dropdown-item>
  </el-dropdown-menu>
</el-dropdown>

<style>
  .el-dropdown-link {
    cursor: pointer;
    color: #409EFF;
  }
  .el-icon-arrow-down {
    font-size: 12px;
  }
</style>

<script>
  export default {
    methods: {
      handleCommand(command) {
        this.$message('click on item ' + command);
      }
    }
  }
</script>
:element-demo-->
        <template slot="highlight"><pre v-pre><code class="html">&lt;el-dropdown @command=&quot;handleCommand&quot;&gt;
  &lt;span class=&quot;el-dropdown-link&quot;&gt;
    Dropdown List&lt;i class=&quot;el-icon-arrow-down el-icon--right&quot;&gt;&lt;/i&gt;
  &lt;/span&gt;
  &lt;el-dropdown-menu slot=&quot;dropdown&quot;&gt;
    &lt;el-dropdown-item command=&quot;a&quot;&gt;Action 1&lt;/el-dropdown-item&gt;
    &lt;el-dropdown-item command=&quot;b&quot;&gt;Action 2&lt;/el-dropdown-item&gt;
    &lt;el-dropdown-item command=&quot;c&quot;&gt;Action 3&lt;/el-dropdown-item&gt;
    &lt;el-dropdown-item command=&quot;d&quot; disabled&gt;Action 4&lt;/el-dropdown-item&gt;
    &lt;el-dropdown-item command=&quot;e&quot; divided&gt;Action 5&lt;/el-dropdown-item&gt;
  &lt;/el-dropdown-menu&gt;
&lt;/el-dropdown&gt;

&lt;style&gt;
  .el-dropdown-link {
    cursor: pointer;
    color: #409EFF;
  }
  .el-icon-arrow-down {
    font-size: 12px;
  }
&lt;/style&gt;

&lt;script&gt;
  export default {
    methods: {
      handleCommand(command) {
        this.$message('click on item ' + command);
      }
    }
  }
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="sizes"><a class="header-anchor" href="#sizes">¶</a> Sizes</h3>
<p>Besides default size, Dropdown component provides three additional sizes for you to choose among different scenarios.</p>
<demo-block>
        <div><p>Use attribute <code>size</code> to set additional sizes with <code>medium</code>, <code>small</code> or <code>mini</code>.</p>
</div>
        <!--element-demo: <el-dropdown split-button type="primary">
  Default
  <el-dropdown-menu slot="dropdown">
    <el-dropdown-item>Action 1</el-dropdown-item>
    <el-dropdown-item>Action 2</el-dropdown-item>
    <el-dropdown-item>Action 3</el-dropdown-item>
    <el-dropdown-item>Action 4</el-dropdown-item>
  </el-dropdown-menu>
</el-dropdown>

<el-dropdown size="medium" split-button type="primary">
  Medium
  <el-dropdown-menu slot="dropdown">
    <el-dropdown-item>Action 1</el-dropdown-item>
    <el-dropdown-item>Action 2</el-dropdown-item>
    <el-dropdown-item>Action 3</el-dropdown-item>
    <el-dropdown-item>Action 4</el-dropdown-item>
  </el-dropdown-menu>
</el-dropdown>

<el-dropdown size="small" split-button type="primary">
  Small
  <el-dropdown-menu slot="dropdown">
   <el-dropdown-item>Action 1</el-dropdown-item>
   <el-dropdown-item>Action 2</el-dropdown-item>
   <el-dropdown-item>Action 3</el-dropdown-item>
   <el-dropdown-item>Action 4</el-dropdown-item>
  </el-dropdown-menu>
</el-dropdown>

<el-dropdown size="mini" split-button type="primary">
  Mini
  <el-dropdown-menu slot="dropdown">
    <el-dropdown-item>Action 1</el-dropdown-item>
    <el-dropdown-item>Action 2</el-dropdown-item>
    <el-dropdown-item>Action 3</el-dropdown-item>
    <el-dropdown-item>Action 4</el-dropdown-item>
  </el-dropdown-menu>
</el-dropdown>
:element-demo-->
        <template slot="highlight"><pre v-pre><code class="html">&lt;el-dropdown split-button type=&quot;primary&quot;&gt;
  Default
  &lt;el-dropdown-menu slot=&quot;dropdown&quot;&gt;
    &lt;el-dropdown-item&gt;Action 1&lt;/el-dropdown-item&gt;
    &lt;el-dropdown-item&gt;Action 2&lt;/el-dropdown-item&gt;
    &lt;el-dropdown-item&gt;Action 3&lt;/el-dropdown-item&gt;
    &lt;el-dropdown-item&gt;Action 4&lt;/el-dropdown-item&gt;
  &lt;/el-dropdown-menu&gt;
&lt;/el-dropdown&gt;

&lt;el-dropdown size=&quot;medium&quot; split-button type=&quot;primary&quot;&gt;
  Medium
  &lt;el-dropdown-menu slot=&quot;dropdown&quot;&gt;
    &lt;el-dropdown-item&gt;Action 1&lt;/el-dropdown-item&gt;
    &lt;el-dropdown-item&gt;Action 2&lt;/el-dropdown-item&gt;
    &lt;el-dropdown-item&gt;Action 3&lt;/el-dropdown-item&gt;
    &lt;el-dropdown-item&gt;Action 4&lt;/el-dropdown-item&gt;
  &lt;/el-dropdown-menu&gt;
&lt;/el-dropdown&gt;

&lt;el-dropdown size=&quot;small&quot; split-button type=&quot;primary&quot;&gt;
  Small
  &lt;el-dropdown-menu slot=&quot;dropdown&quot;&gt;
   &lt;el-dropdown-item&gt;Action 1&lt;/el-dropdown-item&gt;
   &lt;el-dropdown-item&gt;Action 2&lt;/el-dropdown-item&gt;
   &lt;el-dropdown-item&gt;Action 3&lt;/el-dropdown-item&gt;
   &lt;el-dropdown-item&gt;Action 4&lt;/el-dropdown-item&gt;
  &lt;/el-dropdown-menu&gt;
&lt;/el-dropdown&gt;

&lt;el-dropdown size=&quot;mini&quot; split-button type=&quot;primary&quot;&gt;
  Mini
  &lt;el-dropdown-menu slot=&quot;dropdown&quot;&gt;
    &lt;el-dropdown-item&gt;Action 1&lt;/el-dropdown-item&gt;
    &lt;el-dropdown-item&gt;Action 2&lt;/el-dropdown-item&gt;
    &lt;el-dropdown-item&gt;Action 3&lt;/el-dropdown-item&gt;
    &lt;el-dropdown-item&gt;Action 4&lt;/el-dropdown-item&gt;
  &lt;/el-dropdown-menu&gt;
&lt;/el-dropdown&gt;
</code></pre></template></demo-block><h3 id="dropdown-attributes"><a class="header-anchor" href="#dropdown-attributes">¶</a> Dropdown Attributes</h3>
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
<td>type</td>
<td>menu button type, refer to <code>Button</code> Component, only works when <code>split-button</code> is true</td>
<td>string</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>size</td>
<td>menu size, also works on the split button</td>
<td>string</td>
<td>medium / small / mini</td>
<td>—</td>
</tr>
<tr>
<td>split-button</td>
<td>whether a button group is displayed</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>placement</td>
<td>placement of pop menu</td>
<td>string</td>
<td>top/top-start/top-end/bottom/bottom-start/bottom-end</td>
<td>bottom-end</td>
</tr>
<tr>
<td>trigger</td>
<td>how to trigger</td>
<td>string</td>
<td>hover/click</td>
<td>hover</td>
</tr>
<tr>
<td>hide-on-click</td>
<td>whether to hide menu after clicking menu-item</td>
<td>boolean</td>
<td>—</td>
<td>true</td>
</tr>
<tr>
<td>show-timeout</td>
<td>Delay time before show a dropdown (only works when trigger is <code>hover</code>)</td>
<td>number</td>
<td>—</td>
<td>250</td>
</tr>
<tr>
<td>hide-timeout</td>
<td>Delay time before hide a dropdown (only works when trigger is <code>hover</code>)</td>
<td>number</td>
<td>—</td>
<td>150</td>
</tr>
<tr>
<td>tabindex</td>
<td><a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/tabindex">tabindex</a> of Dropdown</td>
<td>number</td>
<td>—</td>
<td>0</td>
</tr>
</tbody>
</table>
<h3 id="dropdown-slots"><a class="header-anchor" href="#dropdown-slots">¶</a> Dropdown Slots</h3>
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
<td>content of Dropdown. Notice: Must be a valid html dom element (ex. <code>&lt;span&gt;, &lt;button&gt; etc.</code>) or <code>el-component</code>, to attach the trigger listener</td>
</tr>
<tr>
<td>dropdown</td>
<td>content of the Dropdown Menu, usually a <code>&lt;el-dropdown-menu&gt;</code> element</td>
</tr>
</tbody>
</table>
<h3 id="dropdown-events"><a class="header-anchor" href="#dropdown-events">¶</a> Dropdown Events</h3>
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
<td>click</td>
<td>if <code>split-button</code> is <code>true</code>, triggers when left button is clicked</td>
<td>—</td>
</tr>
<tr>
<td>command</td>
<td>triggers when a dropdown item is clicked</td>
<td>the command dispatched from the dropdown item</td>
</tr>
<tr>
<td>visible-change</td>
<td>triggers when the dropdown appears/disappears</td>
<td>true when it appears, and false otherwise</td>
</tr>
</tbody>
</table>
<h3 id="dropdown-menu-item-attributes"><a class="header-anchor" href="#dropdown-menu-item-attributes">¶</a> Dropdown Menu Item Attributes</h3>
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
<td>command</td>
<td>a command to be dispatched to Dropdown's <code>command</code> callback</td>
<td>string/number/object</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>disabled</td>
<td>whether the item is disabled</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>divided</td>
<td>whether a divider is displayed</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>icon</td>
<td>icon class name</td>
<td>string</td>
<td>—</td>
<td>—</td>
</tr>
</tbody>
</table>
