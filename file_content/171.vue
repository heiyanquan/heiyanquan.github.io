<h2 id="breadcrumb"><a class="header-anchor" href="#breadcrumb">¶</a> Breadcrumb</h2>
<p>Displays the location of the current page, making it easier to browser back.</p>
<h3 id="basic-usage"><a class="header-anchor" href="#basic-usage">¶</a> Basic usage</h3>
<demo-block>
        <div><p>In <code>el-breadcrumb</code>, each <code>el-breadcrumb-item</code> is a tag that stands for every level starting from homepage. This component has a <code>String</code> attribute <code>separator</code>, and it determines the separator. Its default value is '/'.</p>
</div>
        <!--element-demo: <el-breadcrumb separator="/">
  <el-breadcrumb-item :to="{ path: '/' }">homepage</el-breadcrumb-item>
  <el-breadcrumb-item><a href="/">promotion management</a></el-breadcrumb-item>
  <el-breadcrumb-item>promotion list</el-breadcrumb-item>
  <el-breadcrumb-item>promotion detail</el-breadcrumb-item>
</el-breadcrumb>
:element-demo-->
        <template slot="highlight"><pre v-pre><code class="html">&lt;el-breadcrumb separator=&quot;/&quot;&gt;
  &lt;el-breadcrumb-item :to=&quot;{ path: '/' }&quot;&gt;homepage&lt;/el-breadcrumb-item&gt;
  &lt;el-breadcrumb-item&gt;&lt;a href=&quot;/&quot;&gt;promotion management&lt;/a&gt;&lt;/el-breadcrumb-item&gt;
  &lt;el-breadcrumb-item&gt;promotion list&lt;/el-breadcrumb-item&gt;
  &lt;el-breadcrumb-item&gt;promotion detail&lt;/el-breadcrumb-item&gt;
&lt;/el-breadcrumb&gt;
</code></pre></template></demo-block><h3 id="icon-separator"><a class="header-anchor" href="#icon-separator">¶</a> Icon separator</h3>
<demo-block>
        <div><p>Set <code>separator-class</code> to use <code>iconfont</code> as the separator，it will cover <code>separator</code></p>
</div>
        <!--element-demo: <el-breadcrumb separator-class="el-icon-arrow-right">
  <el-breadcrumb-item :to="{ path: '/' }">homepage</el-breadcrumb-item>
  <el-breadcrumb-item>promotion management</el-breadcrumb-item>
  <el-breadcrumb-item>promotion list</el-breadcrumb-item>
  <el-breadcrumb-item>promotion detail</el-breadcrumb-item>
</el-breadcrumb>
:element-demo-->
        <template slot="highlight"><pre v-pre><code class="html">&lt;el-breadcrumb separator-class=&quot;el-icon-arrow-right&quot;&gt;
  &lt;el-breadcrumb-item :to=&quot;{ path: '/' }&quot;&gt;homepage&lt;/el-breadcrumb-item&gt;
  &lt;el-breadcrumb-item&gt;promotion management&lt;/el-breadcrumb-item&gt;
  &lt;el-breadcrumb-item&gt;promotion list&lt;/el-breadcrumb-item&gt;
  &lt;el-breadcrumb-item&gt;promotion detail&lt;/el-breadcrumb-item&gt;
&lt;/el-breadcrumb&gt;
</code></pre></template></demo-block><h3 id="breadcrumb-attributes"><a class="header-anchor" href="#breadcrumb-attributes">¶</a> Breadcrumb Attributes</h3>
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
<td>separator</td>
<td>separator character</td>
<td>string</td>
<td>—</td>
<td>/</td>
</tr>
<tr>
<td>separator-class</td>
<td>class name of icon separator</td>
<td>string</td>
<td>—</td>
<td>-</td>
</tr>
</tbody>
</table>
<h3 id="breadcrumb-item-attributes"><a class="header-anchor" href="#breadcrumb-item-attributes">¶</a> Breadcrumb Item Attributes</h3>
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
<td>to</td>
<td>target route of the link, same as <code>to</code> of <code>vue-router</code></td>
<td>string/object</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>replace</td>
<td>if <code>true</code>, the navigation will not leave a history record</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
</tbody>
</table>
