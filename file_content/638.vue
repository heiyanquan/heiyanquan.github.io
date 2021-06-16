<h2 id="icon-tu-biao"><a class="header-anchor" href="#icon-tu-biao">¶</a> Icon 图标</h2>
<p>提供了一套常用的图标集合。</p>
<h3 id="shi-yong-fang-fa"><a class="header-anchor" href="#shi-yong-fang-fa">¶</a> 使用方法</h3>
<p>直接通过设置类名为 <code>el-icon-iconName</code> 来使用即可。例如：</p>
<demo-block>
        
        <!--element-demo: <i class="el-icon-edit"></i>
<i class="el-icon-share"></i>
<i class="el-icon-delete"></i>
<el-button type="primary" icon="el-icon-search">搜索</el-button>

:element-demo-->
        <template slot="highlight"><pre v-pre><code class="html">&lt;i class=&quot;el-icon-edit&quot;&gt;&lt;/i&gt;
&lt;i class=&quot;el-icon-share&quot;&gt;&lt;/i&gt;
&lt;i class=&quot;el-icon-delete&quot;&gt;&lt;/i&gt;
&lt;el-button type=&quot;primary&quot; icon=&quot;el-icon-search&quot;&gt;搜索&lt;/el-button&gt;

</code></pre></template></demo-block><h3 id="tu-biao-ji-he"><a class="header-anchor" href="#tu-biao-ji-he">¶</a> 图标集合</h3>
<ul class="icon-list">
  <li v-for="name in $icon" :key="name">
    <span>
      <i :class="'el-icon-' + name"></i>
      <span class="icon-name">{{'el-icon-' + name}}</span>
    </span>
  </li>
</ul>
