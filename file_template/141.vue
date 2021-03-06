<h2 id="container"><a class="header-anchor" href="#container">¶</a> Container</h2>
<p>Container components for scaffolding basic structure of the page:</p>
<p><code>&lt;el-container&gt;</code>: wrapper container. When nested with a <code>&lt;el-header&gt;</code> or <code>&lt;el-footer&gt;</code>, all its child elements will be vertically arranged. Otherwise horizontally.</p>
<p><code>&lt;el-header&gt;</code>: container for headers.</p>
<p><code>&lt;el-aside&gt;</code>: container for side sections (usually a side nav).</p>
<p><code>&lt;el-main&gt;</code>: container for main sections.</p>
<p><code>&lt;el-footer&gt;</code>: container for footers.</p>
<div class="tip">
<p>These components use flex for layout, so please make sure your browser supports it. Besides, <code>&lt;el-container&gt;</code>'s direct child elements have to be one or more of the latter four components. And father element of the latter four components must be a <code>&lt;el-container&gt;</code>.</p>
</div>
<h3 id="common-layouts"><a class="header-anchor" href="#common-layouts">¶</a> Common layouts</h3>
<demo-block>
        
        <template slot="source"><element-demo0 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;el-container&gt;
  &lt;el-header&gt;Header&lt;/el-header&gt;
  &lt;el-main&gt;Main&lt;/el-main&gt;
&lt;/el-container&gt;

&lt;el-container&gt;
  &lt;el-header&gt;Header&lt;/el-header&gt;
  &lt;el-main&gt;Main&lt;/el-main&gt;
  &lt;el-footer&gt;Footer&lt;/el-footer&gt;
&lt;/el-container&gt;

&lt;el-container&gt;
  &lt;el-aside width=&quot;200px&quot;&gt;Aside&lt;/el-aside&gt;
  &lt;el-main&gt;Main&lt;/el-main&gt;
&lt;/el-container&gt;

&lt;el-container&gt;
  &lt;el-header&gt;Header&lt;/el-header&gt;
  &lt;el-container&gt;
    &lt;el-aside width=&quot;200px&quot;&gt;Aside&lt;/el-aside&gt;
    &lt;el-main&gt;Main&lt;/el-main&gt;
  &lt;/el-container&gt;
&lt;/el-container&gt;

&lt;el-container&gt;
  &lt;el-header&gt;Header&lt;/el-header&gt;
  &lt;el-container&gt;
    &lt;el-aside width=&quot;200px&quot;&gt;Aside&lt;/el-aside&gt;
    &lt;el-container&gt;
      &lt;el-main&gt;Main&lt;/el-main&gt;
      &lt;el-footer&gt;Footer&lt;/el-footer&gt;
    &lt;/el-container&gt;
  &lt;/el-container&gt;
&lt;/el-container&gt;

&lt;el-container&gt;
  &lt;el-aside width=&quot;200px&quot;&gt;Aside&lt;/el-aside&gt;
  &lt;el-container&gt;
    &lt;el-header&gt;Header&lt;/el-header&gt;
    &lt;el-main&gt;Main&lt;/el-main&gt;
  &lt;/el-container&gt;
&lt;/el-container&gt;

&lt;el-container&gt;
  &lt;el-aside width=&quot;200px&quot;&gt;Aside&lt;/el-aside&gt;
  &lt;el-container&gt;
    &lt;el-header&gt;Header&lt;/el-header&gt;
    &lt;el-main&gt;Main&lt;/el-main&gt;
    &lt;el-footer&gt;Footer&lt;/el-footer&gt;
  &lt;/el-container&gt;
&lt;/el-container&gt;

&lt;style&gt;
  .el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
  
  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }
  
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }
  
  body &gt; .el-container {
    margin-bottom: 40px;
  }
  
  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }
  
  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
&lt;/style&gt;
</code></pre></template></demo-block><h3 id="example"><a class="header-anchor" href="#example">¶</a> Example</h3>
<demo-block>
        
        <template slot="source"><element-demo1 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;el-container style=&quot;height: 500px; border: 1px solid #eee&quot;&gt;
  &lt;el-aside width=&quot;200px&quot; style=&quot;background-color: rgb(238, 241, 246)&quot;&gt;
    &lt;el-menu :default-openeds=&quot;['1', '3']&quot;&gt;
      &lt;el-submenu index=&quot;1&quot;&gt;
        &lt;template slot=&quot;title&quot;&gt;&lt;i class=&quot;el-icon-message&quot;&gt;&lt;/i&gt;Navigator One&lt;/template&gt;
        &lt;el-menu-item-group&gt;
          &lt;template slot=&quot;title&quot;&gt;Group 1&lt;/template&gt;
          &lt;el-menu-item index=&quot;1-1&quot;&gt;Option 1&lt;/el-menu-item&gt;
          &lt;el-menu-item index=&quot;1-2&quot;&gt;Option 2&lt;/el-menu-item&gt;
        &lt;/el-menu-item-group&gt;
        &lt;el-menu-item-group title=&quot;Group 2&quot;&gt;
          &lt;el-menu-item index=&quot;1-3&quot;&gt;Option 3&lt;/el-menu-item&gt;
        &lt;/el-menu-item-group&gt;
        &lt;el-submenu index=&quot;1-4&quot;&gt;
          &lt;template slot=&quot;title&quot;&gt;Option4&lt;/template&gt;
          &lt;el-menu-item index=&quot;1-4-1&quot;&gt;Option 4-1&lt;/el-menu-item&gt;
        &lt;/el-submenu&gt;
      &lt;/el-submenu&gt;
      &lt;el-submenu index=&quot;2&quot;&gt;
        &lt;template slot=&quot;title&quot;&gt;&lt;i class=&quot;el-icon-menu&quot;&gt;&lt;/i&gt;Navigator Two&lt;/template&gt;
        &lt;el-menu-item-group&gt;
          &lt;template slot=&quot;title&quot;&gt;Group 1&lt;/template&gt;
          &lt;el-menu-item index=&quot;2-1&quot;&gt;Option 1&lt;/el-menu-item&gt;
          &lt;el-menu-item index=&quot;2-2&quot;&gt;Option 2&lt;/el-menu-item&gt;
        &lt;/el-menu-item-group&gt;
        &lt;el-menu-item-group title=&quot;Group 2&quot;&gt;
          &lt;el-menu-item index=&quot;2-3&quot;&gt;Option 3&lt;/el-menu-item&gt;
        &lt;/el-menu-item-group&gt;
        &lt;el-submenu index=&quot;2-4&quot;&gt;
          &lt;template slot=&quot;title&quot;&gt;Option 4&lt;/template&gt;
          &lt;el-menu-item index=&quot;2-4-1&quot;&gt;Option 4-1&lt;/el-menu-item&gt;
        &lt;/el-submenu&gt;
      &lt;/el-submenu&gt;
      &lt;el-submenu index=&quot;3&quot;&gt;
        &lt;template slot=&quot;title&quot;&gt;&lt;i class=&quot;el-icon-setting&quot;&gt;&lt;/i&gt;Navigator Three&lt;/template&gt;
        &lt;el-menu-item-group&gt;
          &lt;template slot=&quot;title&quot;&gt;Group 1&lt;/template&gt;
          &lt;el-menu-item index=&quot;3-1&quot;&gt;Option 1&lt;/el-menu-item&gt;
          &lt;el-menu-item index=&quot;3-2&quot;&gt;Option 2&lt;/el-menu-item&gt;
        &lt;/el-menu-item-group&gt;
        &lt;el-menu-item-group title=&quot;Group 2&quot;&gt;
          &lt;el-menu-item index=&quot;3-3&quot;&gt;Option 3&lt;/el-menu-item&gt;
        &lt;/el-menu-item-group&gt;
        &lt;el-submenu index=&quot;3-4&quot;&gt;
          &lt;template slot=&quot;title&quot;&gt;Option 4&lt;/template&gt;
          &lt;el-menu-item index=&quot;3-4-1&quot;&gt;Option 4-1&lt;/el-menu-item&gt;
        &lt;/el-submenu&gt;
      &lt;/el-submenu&gt;
    &lt;/el-menu&gt;
  &lt;/el-aside&gt;
  
  &lt;el-container&gt;
    &lt;el-header style=&quot;text-align: right; font-size: 12px&quot;&gt;
      &lt;el-dropdown&gt;
        &lt;i class=&quot;el-icon-setting&quot; style=&quot;margin-right: 15px&quot;&gt;&lt;/i&gt;
        &lt;el-dropdown-menu slot=&quot;dropdown&quot;&gt;
          &lt;el-dropdown-item&gt;View&lt;/el-dropdown-item&gt;
          &lt;el-dropdown-item&gt;Add&lt;/el-dropdown-item&gt;
          &lt;el-dropdown-item&gt;Delete&lt;/el-dropdown-item&gt;
        &lt;/el-dropdown-menu&gt;
      &lt;/el-dropdown&gt;
      &lt;span&gt;Tom&lt;/span&gt;
    &lt;/el-header&gt;
    
    &lt;el-main&gt;
      &lt;el-table :data=&quot;tableData&quot;&gt;
        &lt;el-table-column prop=&quot;date&quot; label=&quot;Date&quot; width=&quot;140&quot;&gt;
        &lt;/el-table-column&gt;
        &lt;el-table-column prop=&quot;name&quot; label=&quot;Name&quot; width=&quot;120&quot;&gt;
        &lt;/el-table-column&gt;
        &lt;el-table-column prop=&quot;address&quot; label=&quot;Address&quot;&gt;
        &lt;/el-table-column&gt;
      &lt;/el-table&gt;
    &lt;/el-main&gt;
  &lt;/el-container&gt;
&lt;/el-container&gt;

&lt;style&gt;
  .el-header {
    background-color: #B3C0D1;
    color: #333;
    line-height: 60px;
  }
  
  .el-aside {
    color: #333;
  }
&lt;/style&gt;

&lt;script&gt;
  export default {
    data() {
      const item = {
        date: '2016-05-02',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles'
      };
      return {
        tableData: Array(20).fill(item)
      }
    }
  };
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="container-attributes"><a class="header-anchor" href="#container-attributes">¶</a> Container Attributes</h3>
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
<td>direction</td>
<td>layout direction for child elements</td>
<td>string</td>
<td>horizontal / vertical</td>
<td>vertical when nested with <code>el-header</code> or <code>el-footer</code>; horizontal otherwise</td>
</tr>
</tbody>
</table>
<h3 id="header-attributes"><a class="header-anchor" href="#header-attributes">¶</a> Header Attributes</h3>
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
<td>height</td>
<td>height of the header</td>
<td>string</td>
<td>—</td>
<td>60px</td>
</tr>
</tbody>
</table>
<h3 id="aside-attributes"><a class="header-anchor" href="#aside-attributes">¶</a> Aside Attributes</h3>
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
<td>width</td>
<td>width of the side section</td>
<td>string</td>
<td>—</td>
<td>300px</td>
</tr>
</tbody>
</table>
<h3 id="footer-attributes"><a class="header-anchor" href="#footer-attributes">¶</a> Footer Attributes</h3>
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
<td>height</td>
<td>height of the footer</td>
<td>string</td>
<td>—</td>
<td>60px</td>
</tr>
</tbody>
</table>
