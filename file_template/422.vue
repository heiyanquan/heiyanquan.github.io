<h2 id="popconfirm"><a class="header-anchor" href="#popconfirm">¶</a> Popconfirm</h2>
<p>A simple confirmation dialog of an element click action.</p>
<h3 id="basic-usage"><a class="header-anchor" href="#basic-usage">¶</a> Basic usage</h3>
<p>Popconfirm is similar to Popover. So for some duplicated attributes, please refer to the documentation of Popover.</p>
<demo-block>
        <div><p>Only <code>title</code> attribute is avaliable in Popconfirm, <code>content</code> will be ignored.</p>
</div>
        <template slot="source"><element-demo0 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;template&gt;
&lt;el-popconfirm
  title=&quot;Are you sure to delete this?&quot;
&gt;
  &lt;el-button slot=&quot;reference&quot;&gt;Delete&lt;/el-button&gt;
&lt;/el-popconfirm&gt;
&lt;/template&gt;
</code></pre></template></demo-block><h3 id="customise"><a class="header-anchor" href="#customise">¶</a> Customise</h3>
<p>You can customise Popconfirm like:</p>
<demo-block>
        
        <template slot="source"><element-demo1 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;template&gt;
&lt;el-popconfirm
  confirm-button-text='OK'
  cancel-button-text='No, Thanks'
  icon=&quot;el-icon-info&quot;
  icon-color=&quot;red&quot;
  title=&quot;Are you sure to delete this?&quot;
&gt;
  &lt;el-button slot=&quot;reference&quot;&gt;Delete&lt;/el-button&gt;
&lt;/el-popconfirm&gt;
&lt;/template&gt;
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
<td>title</td>
<td>Title</td>
<td>String</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>confirm-button-text</td>
<td>Confirm button text</td>
<td>String</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>cancel-button-text</td>
<td>Cancel button text</td>
<td>String</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>confirm-button-type</td>
<td>Confirm button type</td>
<td>String</td>
<td>—</td>
<td>Primary</td>
</tr>
<tr>
<td>cancel-button-type</td>
<td>Cancel button type</td>
<td>String</td>
<td>—</td>
<td>Text</td>
</tr>
<tr>
<td>icon</td>
<td>Icon</td>
<td>String</td>
<td>—</td>
<td>el-icon-question</td>
</tr>
<tr>
<td>icon-color</td>
<td>Icon color</td>
<td>String</td>
<td>—</td>
<td>#f90</td>
</tr>
<tr>
<td>hide-icon</td>
<td>is hide Icon</td>
<td>Boolean</td>
<td>—</td>
<td>false</td>
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
<td>reference</td>
<td>HTML element that triggers Popconfirm</td>
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
<td>confirm</td>
<td>triggers when click confirm button</td>
<td>—</td>
</tr>
<tr>
<td>cancel</td>
<td>triggers when click cancel button</td>
<td>—</td>
</tr>
</tbody>
</table>
