<h2 id="button"><a class="header-anchor" href="#button">¶</a> Button</h2>
<p>Commonly used button.</p>
<h3 id="basic-usage"><a class="header-anchor" href="#basic-usage">¶</a> Basic usage</h3>
<demo-block>
        <div><p>Use <code>type</code>, <code>plain</code>, <code>round</code> and <code>circle</code> to define Button's style.</p>
</div>
        <!--element-demo: <el-row>
  <el-button>Default</el-button>
  <el-button type="primary">Primary</el-button>
  <el-button type="success">Success</el-button>
  <el-button type="info">Info</el-button>
  <el-button type="warning">Warning</el-button>
  <el-button type="danger">Danger</el-button>
</el-row>

<el-row>
  <el-button plain>Plain</el-button>
  <el-button type="primary" plain>Primary</el-button>
  <el-button type="success" plain>Success</el-button>
  <el-button type="info" plain>Info</el-button>
  <el-button type="warning" plain>Warning</el-button>
  <el-button type="danger" plain>Danger</el-button>
</el-row>

<el-row>
  <el-button round>Round</el-button>
  <el-button type="primary" round>Primary</el-button>
  <el-button type="success" round>Success</el-button>
  <el-button type="info" round>Info</el-button>
  <el-button type="warning" round>Warning</el-button>
  <el-button type="danger" round>Danger</el-button>
</el-row>

<el-row>
  <el-button icon="el-icon-search" circle></el-button>
  <el-button type="primary" icon="el-icon-edit" circle></el-button>
  <el-button type="success" icon="el-icon-check" circle></el-button>
  <el-button type="info" icon="el-icon-message" circle></el-button>
  <el-button type="warning" icon="el-icon-star-off" circle></el-button>
  <el-button type="danger" icon="el-icon-delete" circle></el-button>
</el-row>
:element-demo-->
        <template slot="highlight"><pre v-pre><code class="html">&lt;el-row&gt;
  &lt;el-button&gt;Default&lt;/el-button&gt;
  &lt;el-button type=&quot;primary&quot;&gt;Primary&lt;/el-button&gt;
  &lt;el-button type=&quot;success&quot;&gt;Success&lt;/el-button&gt;
  &lt;el-button type=&quot;info&quot;&gt;Info&lt;/el-button&gt;
  &lt;el-button type=&quot;warning&quot;&gt;Warning&lt;/el-button&gt;
  &lt;el-button type=&quot;danger&quot;&gt;Danger&lt;/el-button&gt;
&lt;/el-row&gt;

&lt;el-row&gt;
  &lt;el-button plain&gt;Plain&lt;/el-button&gt;
  &lt;el-button type=&quot;primary&quot; plain&gt;Primary&lt;/el-button&gt;
  &lt;el-button type=&quot;success&quot; plain&gt;Success&lt;/el-button&gt;
  &lt;el-button type=&quot;info&quot; plain&gt;Info&lt;/el-button&gt;
  &lt;el-button type=&quot;warning&quot; plain&gt;Warning&lt;/el-button&gt;
  &lt;el-button type=&quot;danger&quot; plain&gt;Danger&lt;/el-button&gt;
&lt;/el-row&gt;

&lt;el-row&gt;
  &lt;el-button round&gt;Round&lt;/el-button&gt;
  &lt;el-button type=&quot;primary&quot; round&gt;Primary&lt;/el-button&gt;
  &lt;el-button type=&quot;success&quot; round&gt;Success&lt;/el-button&gt;
  &lt;el-button type=&quot;info&quot; round&gt;Info&lt;/el-button&gt;
  &lt;el-button type=&quot;warning&quot; round&gt;Warning&lt;/el-button&gt;
  &lt;el-button type=&quot;danger&quot; round&gt;Danger&lt;/el-button&gt;
&lt;/el-row&gt;

&lt;el-row&gt;
  &lt;el-button icon=&quot;el-icon-search&quot; circle&gt;&lt;/el-button&gt;
  &lt;el-button type=&quot;primary&quot; icon=&quot;el-icon-edit&quot; circle&gt;&lt;/el-button&gt;
  &lt;el-button type=&quot;success&quot; icon=&quot;el-icon-check&quot; circle&gt;&lt;/el-button&gt;
  &lt;el-button type=&quot;info&quot; icon=&quot;el-icon-message&quot; circle&gt;&lt;/el-button&gt;
  &lt;el-button type=&quot;warning&quot; icon=&quot;el-icon-star-off&quot; circle&gt;&lt;/el-button&gt;
  &lt;el-button type=&quot;danger&quot; icon=&quot;el-icon-delete&quot; circle&gt;&lt;/el-button&gt;
&lt;/el-row&gt;
</code></pre></template></demo-block><h3 id="disabled-button"><a class="header-anchor" href="#disabled-button">¶</a> Disabled Button</h3>
<p>The <code>disabled</code> attribute determines if the button is disabled.</p>
<demo-block>
        <div><p>Use <code>disabled</code> attribute to determine whether a button is disabled. It accepts a <code>Boolean</code> value.</p>
</div>
        <!--element-demo: <el-row>
  <el-button disabled>Default</el-button>
  <el-button type="primary" disabled>Primary</el-button>
  <el-button type="success" disabled>Success</el-button>
  <el-button type="info" disabled>Info</el-button>
  <el-button type="warning" disabled>Warning</el-button>
  <el-button type="danger" disabled>Danger</el-button>
</el-row>

<el-row>
  <el-button plain disabled>Plain</el-button>
  <el-button type="primary" plain disabled>Primary</el-button>
  <el-button type="success" plain disabled>Success</el-button>
  <el-button type="info" plain disabled>Info</el-button>
  <el-button type="warning" plain disabled>Warning</el-button>
  <el-button type="danger" plain disabled>Danger</el-button>
</el-row>
:element-demo-->
        <template slot="highlight"><pre v-pre><code class="html">&lt;el-row&gt;
  &lt;el-button disabled&gt;Default&lt;/el-button&gt;
  &lt;el-button type=&quot;primary&quot; disabled&gt;Primary&lt;/el-button&gt;
  &lt;el-button type=&quot;success&quot; disabled&gt;Success&lt;/el-button&gt;
  &lt;el-button type=&quot;info&quot; disabled&gt;Info&lt;/el-button&gt;
  &lt;el-button type=&quot;warning&quot; disabled&gt;Warning&lt;/el-button&gt;
  &lt;el-button type=&quot;danger&quot; disabled&gt;Danger&lt;/el-button&gt;
&lt;/el-row&gt;

&lt;el-row&gt;
  &lt;el-button plain disabled&gt;Plain&lt;/el-button&gt;
  &lt;el-button type=&quot;primary&quot; plain disabled&gt;Primary&lt;/el-button&gt;
  &lt;el-button type=&quot;success&quot; plain disabled&gt;Success&lt;/el-button&gt;
  &lt;el-button type=&quot;info&quot; plain disabled&gt;Info&lt;/el-button&gt;
  &lt;el-button type=&quot;warning&quot; plain disabled&gt;Warning&lt;/el-button&gt;
  &lt;el-button type=&quot;danger&quot; plain disabled&gt;Danger&lt;/el-button&gt;
&lt;/el-row&gt;
</code></pre></template></demo-block><h3 id="text-button"><a class="header-anchor" href="#text-button">¶</a> Text Button</h3>
<p>Buttons without border and background.</p>
<demo-block>
        
        <!--element-demo: <el-button type="text">Text Button</el-button>
<el-button type="text" disabled>Text Button</el-button>
:element-demo-->
        <template slot="highlight"><pre v-pre><code class="html">&lt;el-button type=&quot;text&quot;&gt;Text Button&lt;/el-button&gt;
&lt;el-button type=&quot;text&quot; disabled&gt;Text Button&lt;/el-button&gt;
</code></pre></template></demo-block><h3 id="icon-button"><a class="header-anchor" href="#icon-button">¶</a> Icon Button</h3>
<p>Use icons to add more meaning to Button. You can use icon alone to save some space, or use it with text.</p>
<demo-block>
        <div><p>Use the <code>icon</code> attribute to add icon. You can find the icon list in Element icon component. Adding icons to the right side of the text is achievable with an <code>&lt;i&gt;</code> tag. Custom icons can be used as well.</p>
</div>
        <!--element-demo: <el-button type="primary" icon="el-icon-edit"></el-button>
<el-button type="primary" icon="el-icon-share"></el-button>
<el-button type="primary" icon="el-icon-delete"></el-button>
<el-button type="primary" icon="el-icon-search">Search</el-button>
<el-button type="primary">Upload<i class="el-icon-upload el-icon-right"></i></el-button>
:element-demo-->
        <template slot="highlight"><pre v-pre><code class="html">&lt;el-button type=&quot;primary&quot; icon=&quot;el-icon-edit&quot;&gt;&lt;/el-button&gt;
&lt;el-button type=&quot;primary&quot; icon=&quot;el-icon-share&quot;&gt;&lt;/el-button&gt;
&lt;el-button type=&quot;primary&quot; icon=&quot;el-icon-delete&quot;&gt;&lt;/el-button&gt;
&lt;el-button type=&quot;primary&quot; icon=&quot;el-icon-search&quot;&gt;Search&lt;/el-button&gt;
&lt;el-button type=&quot;primary&quot;&gt;Upload&lt;i class=&quot;el-icon-upload el-icon-right&quot;&gt;&lt;/i&gt;&lt;/el-button&gt;
</code></pre></template></demo-block><h3 id="button-group"><a class="header-anchor" href="#button-group">¶</a> Button Group</h3>
<p>Displayed as a button group, can be used to group a series of similar operations.</p>
<demo-block>
        <div><p>Use tag <code>&lt;el-button-group&gt;</code> to group your buttons.</p>
</div>
        <!--element-demo: <el-button-group>
  <el-button type="primary" icon="el-icon-arrow-left">Previous Page</el-button>
  <el-button type="primary">Next Page<i class="el-icon-arrow-right el-icon-right"></i></el-button>
</el-button-group>
<el-button-group>
  <el-button type="primary" icon="el-icon-edit"></el-button>
  <el-button type="primary" icon="el-icon-share"></el-button>
  <el-button type="primary" icon="el-icon-delete"></el-button>
</el-button-group>
:element-demo-->
        <template slot="highlight"><pre v-pre><code class="html">&lt;el-button-group&gt;
  &lt;el-button type=&quot;primary&quot; icon=&quot;el-icon-arrow-left&quot;&gt;Previous Page&lt;/el-button&gt;
  &lt;el-button type=&quot;primary&quot;&gt;Next Page&lt;i class=&quot;el-icon-arrow-right el-icon-right&quot;&gt;&lt;/i&gt;&lt;/el-button&gt;
&lt;/el-button-group&gt;
&lt;el-button-group&gt;
  &lt;el-button type=&quot;primary&quot; icon=&quot;el-icon-edit&quot;&gt;&lt;/el-button&gt;
  &lt;el-button type=&quot;primary&quot; icon=&quot;el-icon-share&quot;&gt;&lt;/el-button&gt;
  &lt;el-button type=&quot;primary&quot; icon=&quot;el-icon-delete&quot;&gt;&lt;/el-button&gt;
&lt;/el-button-group&gt;
</code></pre></template></demo-block><h3 id="loading-button"><a class="header-anchor" href="#loading-button">¶</a> Loading Button</h3>
<p>Click the button to load data, then the button displays a loading state.</p>
<demo-block>
        <div><p>Set <code>loading</code> attribute to <code>true</code> to display loading state.</p>
</div>
        <!--element-demo: <el-button type="primary" :loading="true">Loading</el-button>
:element-demo-->
        <template slot="highlight"><pre v-pre><code class="html">&lt;el-button type=&quot;primary&quot; :loading=&quot;true&quot;&gt;Loading&lt;/el-button&gt;
</code></pre></template></demo-block><h3 id="sizes"><a class="header-anchor" href="#sizes">¶</a> Sizes</h3>
<p>Besides default size, Button component provides three additional sizes for you to choose among different scenarios.</p>
<demo-block>
        <div><p>Use attribute <code>size</code> to set additional sizes with <code>medium</code>, <code>small</code> or <code>mini</code>.</p>
</div>
        <!--element-demo: <el-row>
  <el-button>Default</el-button>
  <el-button size="medium">Medium</el-button>
  <el-button size="small">Small</el-button>
  <el-button size="mini">Mini</el-button>
</el-row>
<el-row>
  <el-button round>Default</el-button>
  <el-button size="medium" round>Medium</el-button>
  <el-button size="small" round>Small</el-button>
  <el-button size="mini" round>Mini</el-button>
</el-row>
:element-demo-->
        <template slot="highlight"><pre v-pre><code class="html">&lt;el-row&gt;
  &lt;el-button&gt;Default&lt;/el-button&gt;
  &lt;el-button size=&quot;medium&quot;&gt;Medium&lt;/el-button&gt;
  &lt;el-button size=&quot;small&quot;&gt;Small&lt;/el-button&gt;
  &lt;el-button size=&quot;mini&quot;&gt;Mini&lt;/el-button&gt;
&lt;/el-row&gt;
&lt;el-row&gt;
  &lt;el-button round&gt;Default&lt;/el-button&gt;
  &lt;el-button size=&quot;medium&quot; round&gt;Medium&lt;/el-button&gt;
  &lt;el-button size=&quot;small&quot; round&gt;Small&lt;/el-button&gt;
  &lt;el-button size=&quot;mini&quot; round&gt;Mini&lt;/el-button&gt;
&lt;/el-row&gt;
</code></pre></template></demo-block><h3 id="attributes"><a class="header-anchor" href="#attributes">¶</a> Attributes</h3>
<table>
<thead>
<tr>
<th>Attribute</th>
<th>Description</th>
<th>Type</th>
<th>Accepted values</th>
<th>Default</th>
</tr>
</thead>
<tbody>
<tr>
<td>size</td>
<td>button size</td>
<td>string</td>
<td>medium / small / mini</td>
<td>—</td>
</tr>
<tr>
<td>type</td>
<td>button type</td>
<td>string</td>
<td>primary / success / warning / danger / info / text</td>
<td>—</td>
</tr>
<tr>
<td>plain</td>
<td>determine whether it's a plain button</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>round</td>
<td>determine whether it's a round button</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>circle</td>
<td>determine whether it's a circle button</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>loading</td>
<td>determine whether it's loading</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>disabled</td>
<td>disable the button</td>
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
<tr>
<td>autofocus</td>
<td>same as native button's <code>autofocus</code></td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>native-type</td>
<td>same as native button's <code>type</code></td>
<td>string</td>
<td>button / submit / reset</td>
<td>button</td>
</tr>
</tbody>
</table>
