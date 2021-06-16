<h2 id="badge"><a class="header-anchor" href="#badge">¶</a> Badge</h2>
<p>A number or status mark on buttons and icons.</p>
<h3 id="basic-usage"><a class="header-anchor" href="#basic-usage">¶</a> Basic usage</h3>
<p>Displays the amount of new messages.</p>
<demo-block>
        <div><p>The amount is defined with <code>value</code> which accepts <code>Number</code> or <code>String</code>.</p>
</div>
        <!--element-demo: <el-badge :value="12" class="item">
  <el-button size="small">comments</el-button>
</el-badge>
<el-badge :value="3" class="item">
  <el-button size="small">replies</el-button>
</el-badge>
<el-badge :value="1" class="item" type="primary">
  <el-button size="small">comments</el-button>
</el-badge>
<el-badge :value="2" class="item" type="warning">
  <el-button size="small">replies</el-button>
</el-badge>

<el-dropdown trigger="click">
  <span class="el-dropdown-link">
    Click Me<i class="el-icon-caret-bottom el-icon--right"></i>
  </span>
  <el-dropdown-menu slot="dropdown">
    <el-dropdown-item class="clearfix">
      comments
      <el-badge class="mark" :value="12" />
    </el-dropdown-item>
    <el-dropdown-item class="clearfix">
      replies
      <el-badge class="mark" :value="3" />
    </el-dropdown-item>
  </el-dropdown-menu>
</el-dropdown>

<style>
.item {
  margin-top: 10px;
  margin-right: 40px;
}
</style>
:element-demo-->
        <template slot="highlight"><pre v-pre><code class="html">&lt;el-badge :value=&quot;12&quot; class=&quot;item&quot;&gt;
  &lt;el-button size=&quot;small&quot;&gt;comments&lt;/el-button&gt;
&lt;/el-badge&gt;
&lt;el-badge :value=&quot;3&quot; class=&quot;item&quot;&gt;
  &lt;el-button size=&quot;small&quot;&gt;replies&lt;/el-button&gt;
&lt;/el-badge&gt;
&lt;el-badge :value=&quot;1&quot; class=&quot;item&quot; type=&quot;primary&quot;&gt;
  &lt;el-button size=&quot;small&quot;&gt;comments&lt;/el-button&gt;
&lt;/el-badge&gt;
&lt;el-badge :value=&quot;2&quot; class=&quot;item&quot; type=&quot;warning&quot;&gt;
  &lt;el-button size=&quot;small&quot;&gt;replies&lt;/el-button&gt;
&lt;/el-badge&gt;

&lt;el-dropdown trigger=&quot;click&quot;&gt;
  &lt;span class=&quot;el-dropdown-link&quot;&gt;
    Click Me&lt;i class=&quot;el-icon-caret-bottom el-icon--right&quot;&gt;&lt;/i&gt;
  &lt;/span&gt;
  &lt;el-dropdown-menu slot=&quot;dropdown&quot;&gt;
    &lt;el-dropdown-item class=&quot;clearfix&quot;&gt;
      comments
      &lt;el-badge class=&quot;mark&quot; :value=&quot;12&quot; /&gt;
    &lt;/el-dropdown-item&gt;
    &lt;el-dropdown-item class=&quot;clearfix&quot;&gt;
      replies
      &lt;el-badge class=&quot;mark&quot; :value=&quot;3&quot; /&gt;
    &lt;/el-dropdown-item&gt;
  &lt;/el-dropdown-menu&gt;
&lt;/el-dropdown&gt;

&lt;style&gt;
.item {
  margin-top: 10px;
  margin-right: 40px;
}
&lt;/style&gt;
</code></pre></template></demo-block><h3 id="max-value"><a class="header-anchor" href="#max-value">¶</a> Max value</h3>
<p>You can customize the max value.</p>
<demo-block>
        <div><p>The max value is defined by property <code>max</code> which is a <code>Number</code>. Note that it only works when <code>value</code> is also a <code>Number</code>.</p>
</div>
        <!--element-demo: <el-badge :value="200" :max="99" class="item">
  <el-button size="small">comments</el-button>
</el-badge>
<el-badge :value="100" :max="10" class="item">
  <el-button size="small">replies</el-button>
</el-badge>

<style>
.item {
  margin-top: 10px;
  margin-right: 40px;
}
</style>
:element-demo-->
        <template slot="highlight"><pre v-pre><code class="html">&lt;el-badge :value=&quot;200&quot; :max=&quot;99&quot; class=&quot;item&quot;&gt;
  &lt;el-button size=&quot;small&quot;&gt;comments&lt;/el-button&gt;
&lt;/el-badge&gt;
&lt;el-badge :value=&quot;100&quot; :max=&quot;10&quot; class=&quot;item&quot;&gt;
  &lt;el-button size=&quot;small&quot;&gt;replies&lt;/el-button&gt;
&lt;/el-badge&gt;

&lt;style&gt;
.item {
  margin-top: 10px;
  margin-right: 40px;
}
&lt;/style&gt;
</code></pre></template></demo-block><h3 id="customizations"><a class="header-anchor" href="#customizations">¶</a> Customizations</h3>
<p>Displays text content other than numbers.</p>
<demo-block>
        <div><p>When <code>value</code> is a <code>String</code>, it can display customized text.</p>
</div>
        <!--element-demo: <el-badge value="new" class="item">
  <el-button size="small">comments</el-button>
</el-badge>
<el-badge value="hot" class="item">
  <el-button size="small">replies</el-button>
</el-badge>

<style>
.item {
  margin-top: 10px;
  margin-right: 40px;
}
</style>
:element-demo-->
        <template slot="highlight"><pre v-pre><code class="html">&lt;el-badge value=&quot;new&quot; class=&quot;item&quot;&gt;
  &lt;el-button size=&quot;small&quot;&gt;comments&lt;/el-button&gt;
&lt;/el-badge&gt;
&lt;el-badge value=&quot;hot&quot; class=&quot;item&quot;&gt;
  &lt;el-button size=&quot;small&quot;&gt;replies&lt;/el-button&gt;
&lt;/el-badge&gt;

&lt;style&gt;
.item {
  margin-top: 10px;
  margin-right: 40px;
}
&lt;/style&gt;
</code></pre></template></demo-block><h3 id="little-red-dot"><a class="header-anchor" href="#little-red-dot">¶</a> Little red dot</h3>
<p>Use a red dot to mark content that needs to be noticed.</p>
<demo-block>
        <div><p>Use the attribute <code>is-dot</code>. It is a <code>Boolean</code>.</p>
</div>
        <!--element-demo: <el-badge is-dot class="item">query</el-badge>
<el-badge is-dot class="item">
  <el-button class="share-button" icon="el-icon-share" type="primary"></el-button>
</el-badge>

<style>
.item {
  margin-top: 10px;
  margin-right: 40px;
}
</style>
:element-demo-->
        <template slot="highlight"><pre v-pre><code class="html">&lt;el-badge is-dot class=&quot;item&quot;&gt;query&lt;/el-badge&gt;
&lt;el-badge is-dot class=&quot;item&quot;&gt;
  &lt;el-button class=&quot;share-button&quot; icon=&quot;el-icon-share&quot; type=&quot;primary&quot;&gt;&lt;/el-button&gt;
&lt;/el-badge&gt;

&lt;style&gt;
.item {
  margin-top: 10px;
  margin-right: 40px;
}
&lt;/style&gt;
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
<td>value</td>
<td>display value</td>
<td>string, number</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>max</td>
<td>maximum value, shows '{max}+' when exceeded. Only works if <code>value</code> is a <code>Number</code></td>
<td>number</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>is-dot</td>
<td>if a little dot is displayed</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>hidden</td>
<td>hidden badge</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>type</td>
<td>button type</td>
<td>string</td>
<td>primary / success / warning / danger / info</td>
<td>—</td>
</tr>
</tbody>
</table>
