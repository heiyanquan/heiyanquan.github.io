<h2 id="icones"><a class="header-anchor" href="#icones">¶</a> Icônes</h2>
<p>Element fournit un ensemble d'icônes basiques.</p>
<h3 id="usage"><a class="header-anchor" href="#usage">¶</a> Usage</h3>
<p>Il vous suffit d'assigner le nom de classe <code>el-icon-iconName</code> à une balise <code>&lt;i&gt;</code>.</p>
<demo-block>
        
        <template slot="source"><element-demo0 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;i class=&quot;el-icon-edit&quot;&gt;&lt;/i&gt;
&lt;i class=&quot;el-icon-share&quot;&gt;&lt;/i&gt;
&lt;i class=&quot;el-icon-delete&quot;&gt;&lt;/i&gt;
&lt;el-button type=&quot;primary&quot; icon=&quot;el-icon-search&quot;&gt;Chercher&lt;/el-button&gt;

</code></pre></template></demo-block><h3 id="icones-2"><a class="header-anchor" href="#icones-2">¶</a> Icônes</h3>
<ul class="icon-list">
  <li v-for="name in $icon" :key="name">
    <span>
      <i :class="'el-icon-' + name"></i>
      <span class="icon-name">{{'el-icon-' + name}}</span>
    </span>
  </li>
</ul>
