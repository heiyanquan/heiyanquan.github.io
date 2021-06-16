<h2 id="icon"><a class="header-anchor" href="#icon">¶</a> Icon</h2>
<p>Element provides a set of common icons.</p>
<h3 id="basic-usage"><a class="header-anchor" href="#basic-usage">¶</a> Basic usage</h3>
<p>Just assign the class name to <code>el-icon-iconName</code>.</p>
<demo-block>
        
        <template slot="source"><element-demo0 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;i class=&quot;el-icon-edit&quot;&gt;&lt;/i&gt;
&lt;i class=&quot;el-icon-share&quot;&gt;&lt;/i&gt;
&lt;i class=&quot;el-icon-delete&quot;&gt;&lt;/i&gt;
&lt;el-button type=&quot;primary&quot; icon=&quot;el-icon-search&quot;&gt;Search&lt;/el-button&gt;

</code></pre></template></demo-block><h3 id="icons"><a class="header-anchor" href="#icons">¶</a> Icons</h3>
<ul class="icon-list">
  <li v-for="name in $icon" :key="name">
    <span>
      <i :class="'el-icon-' + name"></i>
      <span class="icon-name">{{'el-icon-' + name}}</span>
    </span>
  </li>
</ul>
