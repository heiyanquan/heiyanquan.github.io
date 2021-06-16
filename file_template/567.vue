<h2 id="container-bu-ju-rong-qi"><a class="header-anchor" href="#container-bu-ju-rong-qi">¶</a> Container 布局容器</h2>
<p>用于布局的容器组件，方便快速搭建页面的基本结构：</p>
<p><code>&lt;el-container&gt;</code>：外层容器。当子元素中包含 <code>&lt;el-header&gt;</code> 或 <code>&lt;el-footer&gt;</code> 时，全部子元素会垂直上下排列，否则会水平左右排列。</p>
<p><code>&lt;el-header&gt;</code>：顶栏容器。</p>
<p><code>&lt;el-aside&gt;</code>：侧边栏容器。</p>
<p><code>&lt;el-main&gt;</code>：主要区域容器。</p>
<p><code>&lt;el-footer&gt;</code>：底栏容器。</p>
<div class="tip">
<p>以上组件采用了 flex 布局，使用前请确定目标浏览器是否兼容。此外，<code>&lt;el-container&gt;</code> 的子元素只能是后四者，后四者的父元素也只能是 <code>&lt;el-container&gt;</code>。</p>
</div>
<h3 id="chang-jian-ye-mian-bu-ju"><a class="header-anchor" href="#chang-jian-ye-mian-bu-ju">¶</a> 常见页面布局</h3>
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
</code></pre></template></demo-block><h3 id="shi-li"><a class="header-anchor" href="#shi-li">¶</a> 实例</h3>
<demo-block>
        
        <template slot="source"><element-demo1 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;el-container style=&quot;height: 500px; border: 1px solid #eee&quot;&gt;
  &lt;el-aside width=&quot;200px&quot; style=&quot;background-color: rgb(238, 241, 246)&quot;&gt;
    &lt;el-menu :default-openeds=&quot;['1', '3']&quot;&gt;
      &lt;el-submenu index=&quot;1&quot;&gt;
        &lt;template slot=&quot;title&quot;&gt;&lt;i class=&quot;el-icon-message&quot;&gt;&lt;/i&gt;导航一&lt;/template&gt;
        &lt;el-menu-item-group&gt;
          &lt;template slot=&quot;title&quot;&gt;分组一&lt;/template&gt;
          &lt;el-menu-item index=&quot;1-1&quot;&gt;选项1&lt;/el-menu-item&gt;
          &lt;el-menu-item index=&quot;1-2&quot;&gt;选项2&lt;/el-menu-item&gt;
        &lt;/el-menu-item-group&gt;
        &lt;el-menu-item-group title=&quot;分组2&quot;&gt;
          &lt;el-menu-item index=&quot;1-3&quot;&gt;选项3&lt;/el-menu-item&gt;
        &lt;/el-menu-item-group&gt;
        &lt;el-submenu index=&quot;1-4&quot;&gt;
          &lt;template slot=&quot;title&quot;&gt;选项4&lt;/template&gt;
          &lt;el-menu-item index=&quot;1-4-1&quot;&gt;选项4-1&lt;/el-menu-item&gt;
        &lt;/el-submenu&gt;
      &lt;/el-submenu&gt;
      &lt;el-submenu index=&quot;2&quot;&gt;
        &lt;template slot=&quot;title&quot;&gt;&lt;i class=&quot;el-icon-menu&quot;&gt;&lt;/i&gt;导航二&lt;/template&gt;
        &lt;el-menu-item-group&gt;
          &lt;template slot=&quot;title&quot;&gt;分组一&lt;/template&gt;
          &lt;el-menu-item index=&quot;2-1&quot;&gt;选项1&lt;/el-menu-item&gt;
          &lt;el-menu-item index=&quot;2-2&quot;&gt;选项2&lt;/el-menu-item&gt;
        &lt;/el-menu-item-group&gt;
        &lt;el-menu-item-group title=&quot;分组2&quot;&gt;
          &lt;el-menu-item index=&quot;2-3&quot;&gt;选项3&lt;/el-menu-item&gt;
        &lt;/el-menu-item-group&gt;
        &lt;el-submenu index=&quot;2-4&quot;&gt;
          &lt;template slot=&quot;title&quot;&gt;选项4&lt;/template&gt;
          &lt;el-menu-item index=&quot;2-4-1&quot;&gt;选项4-1&lt;/el-menu-item&gt;
        &lt;/el-submenu&gt;
      &lt;/el-submenu&gt;
      &lt;el-submenu index=&quot;3&quot;&gt;
        &lt;template slot=&quot;title&quot;&gt;&lt;i class=&quot;el-icon-setting&quot;&gt;&lt;/i&gt;导航三&lt;/template&gt;
        &lt;el-menu-item-group&gt;
          &lt;template slot=&quot;title&quot;&gt;分组一&lt;/template&gt;
          &lt;el-menu-item index=&quot;3-1&quot;&gt;选项1&lt;/el-menu-item&gt;
          &lt;el-menu-item index=&quot;3-2&quot;&gt;选项2&lt;/el-menu-item&gt;
        &lt;/el-menu-item-group&gt;
        &lt;el-menu-item-group title=&quot;分组2&quot;&gt;
          &lt;el-menu-item index=&quot;3-3&quot;&gt;选项3&lt;/el-menu-item&gt;
        &lt;/el-menu-item-group&gt;
        &lt;el-submenu index=&quot;3-4&quot;&gt;
          &lt;template slot=&quot;title&quot;&gt;选项4&lt;/template&gt;
          &lt;el-menu-item index=&quot;3-4-1&quot;&gt;选项4-1&lt;/el-menu-item&gt;
        &lt;/el-submenu&gt;
      &lt;/el-submenu&gt;
    &lt;/el-menu&gt;
  &lt;/el-aside&gt;
  
  &lt;el-container&gt;
    &lt;el-header style=&quot;text-align: right; font-size: 12px&quot;&gt;
      &lt;el-dropdown&gt;
        &lt;i class=&quot;el-icon-setting&quot; style=&quot;margin-right: 15px&quot;&gt;&lt;/i&gt;
        &lt;el-dropdown-menu slot=&quot;dropdown&quot;&gt;
          &lt;el-dropdown-item&gt;查看&lt;/el-dropdown-item&gt;
          &lt;el-dropdown-item&gt;新增&lt;/el-dropdown-item&gt;
          &lt;el-dropdown-item&gt;删除&lt;/el-dropdown-item&gt;
        &lt;/el-dropdown-menu&gt;
      &lt;/el-dropdown&gt;
      &lt;span&gt;王小虎&lt;/span&gt;
    &lt;/el-header&gt;
    
    &lt;el-main&gt;
      &lt;el-table :data=&quot;tableData&quot;&gt;
        &lt;el-table-column prop=&quot;date&quot; label=&quot;日期&quot; width=&quot;140&quot;&gt;
        &lt;/el-table-column&gt;
        &lt;el-table-column prop=&quot;name&quot; label=&quot;姓名&quot; width=&quot;120&quot;&gt;
        &lt;/el-table-column&gt;
        &lt;el-table-column prop=&quot;address&quot; label=&quot;地址&quot;&gt;
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
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
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
<th>参数</th>
<th>说明</th>
<th>类型</th>
<th>可选值</th>
<th>默认值</th>
</tr>
</thead>
<tbody>
<tr>
<td>direction</td>
<td>子元素的排列方向</td>
<td>string</td>
<td>horizontal / vertical</td>
<td>子元素中有 <code>el-header</code> 或 <code>el-footer</code> 时为 vertical，否则为 horizontal</td>
</tr>
</tbody>
</table>
<h3 id="header-attributes"><a class="header-anchor" href="#header-attributes">¶</a> Header Attributes</h3>
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
<td>height</td>
<td>顶栏高度</td>
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
<th>参数</th>
<th>说明</th>
<th>类型</th>
<th>可选值</th>
<th>默认值</th>
</tr>
</thead>
<tbody>
<tr>
<td>width</td>
<td>侧边栏宽度</td>
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
<th>参数</th>
<th>说明</th>
<th>类型</th>
<th>可选值</th>
<th>默认值</th>
</tr>
</thead>
<tbody>
<tr>
<td>height</td>
<td>底栏高度</td>
<td>string</td>
<td>—</td>
<td>60px</td>
</tr>
</tbody>
</table>
