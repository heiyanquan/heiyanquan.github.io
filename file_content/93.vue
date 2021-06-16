<h2 id="link"><a class="header-anchor" href="#link">¶</a> Link</h2>
<p>Text hyperlink</p>
<h3 id="basic"><a class="header-anchor" href="#basic">¶</a> Basic</h3>
<p>Basic text link</p>
<demo-block>
        
        <!--element-demo: <div>
  <el-link href="https://element.eleme.io" target="_blank">default</el-link>
  <el-link type="primary">primary</el-link>
  <el-link type="success">success</el-link>
  <el-link type="warning">warning</el-link>
  <el-link type="danger">danger</el-link>
  <el-link type="info">info</el-link>
</div>
:element-demo-->
        <template slot="highlight"><pre v-pre><code class="html">&lt;div&gt;
  &lt;el-link href=&quot;https://element.eleme.io&quot; target=&quot;_blank&quot;&gt;default&lt;/el-link&gt;
  &lt;el-link type=&quot;primary&quot;&gt;primary&lt;/el-link&gt;
  &lt;el-link type=&quot;success&quot;&gt;success&lt;/el-link&gt;
  &lt;el-link type=&quot;warning&quot;&gt;warning&lt;/el-link&gt;
  &lt;el-link type=&quot;danger&quot;&gt;danger&lt;/el-link&gt;
  &lt;el-link type=&quot;info&quot;&gt;info&lt;/el-link&gt;
&lt;/div&gt;
</code></pre></template></demo-block><h3 id="disabled"><a class="header-anchor" href="#disabled">¶</a> Disabled</h3>
<p>Disabled state of link</p>
<demo-block>
        
        <!--element-demo: <div>
  <el-link disabled>default</el-link>
  <el-link type="primary" disabled>primary</el-link>
  <el-link type="success" disabled>success</el-link>
  <el-link type="warning" disabled>warning</el-link>
  <el-link type="danger" disabled>danger</el-link>
  <el-link type="info" disabled>info</el-link>
</div>
:element-demo-->
        <template slot="highlight"><pre v-pre><code class="html">&lt;div&gt;
  &lt;el-link disabled&gt;default&lt;/el-link&gt;
  &lt;el-link type=&quot;primary&quot; disabled&gt;primary&lt;/el-link&gt;
  &lt;el-link type=&quot;success&quot; disabled&gt;success&lt;/el-link&gt;
  &lt;el-link type=&quot;warning&quot; disabled&gt;warning&lt;/el-link&gt;
  &lt;el-link type=&quot;danger&quot; disabled&gt;danger&lt;/el-link&gt;
  &lt;el-link type=&quot;info&quot; disabled&gt;info&lt;/el-link&gt;
&lt;/div&gt;
</code></pre></template></demo-block><h3 id="underline"><a class="header-anchor" href="#underline">¶</a> Underline</h3>
<p>Underline of link</p>
<demo-block>
        
        <!--element-demo: <div>
  <el-link :underline="false">Without Underline</el-link>
  <el-link>With Underline</el-link>
</div>
:element-demo-->
        <template slot="highlight"><pre v-pre><code class="html">&lt;div&gt;
  &lt;el-link :underline=&quot;false&quot;&gt;Without Underline&lt;/el-link&gt;
  &lt;el-link&gt;With Underline&lt;/el-link&gt;
&lt;/div&gt;
</code></pre></template></demo-block><h3 id="icon"><a class="header-anchor" href="#icon">¶</a> Icon</h3>
<p>Link with icon</p>
<demo-block>
        
        <!--element-demo: <div>
  <el-link icon="el-icon-edit">Edit</el-link>
  <el-link>Check<i class="el-icon-view el-icon--right"></i> </el-link>
</div>
:element-demo-->
        <template slot="highlight"><pre v-pre><code class="html">&lt;div&gt;
  &lt;el-link icon=&quot;el-icon-edit&quot;&gt;Edit&lt;/el-link&gt;
  &lt;el-link&gt;Check&lt;i class=&quot;el-icon-view el-icon--right&quot;&gt;&lt;/i&gt; &lt;/el-link&gt;
&lt;/div&gt;
</code></pre></template></demo-block><h3 id="attributes"><a class="header-anchor" href="#attributes">¶</a> Attributes</h3>
<table>
<thead>
<tr>
<th>Attribute</th>
<th>Description</th>
<th>Type</th>
<th>Options</th>
<th>Default</th>
</tr>
</thead>
<tbody>
<tr>
<td>type</td>
<td>type</td>
<td>string</td>
<td>primary / success / warning / danger / info</td>
<td>default</td>
</tr>
<tr>
<td>underline</td>
<td>whether the component has underline</td>
<td>boolean</td>
<td>—</td>
<td>true</td>
</tr>
<tr>
<td>disabled</td>
<td>whether the component is disabled</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>href</td>
<td>same as native hyperlink's <code>href</code></td>
<td>string</td>
<td>—</td>
<td>-</td>
</tr>
<tr>
<td>icon</td>
<td>class name of icon</td>
<td>string</td>
<td>—</td>
<td>-</td>
</tr>
</tbody>
</table>
