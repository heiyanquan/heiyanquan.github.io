<h2 id="link"><a class="header-anchor" href="#link">¶</a> Link</h2>
<p>Un hyperlien textuel.</p>
<h3 id="usage-basique"><a class="header-anchor" href="#usage-basique">¶</a> Usage basique</h3>
<p>Lien texte basique.</p>
<demo-block>
        
        <template slot="source"><element-demo0 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;div&gt;
  &lt;el-link href=&quot;https://element.eleme.io&quot; target=&quot;_blank&quot;&gt;défaut&lt;/el-link&gt;
  &lt;el-link type=&quot;primary&quot;&gt;primaire&lt;/el-link&gt;
  &lt;el-link type=&quot;success&quot;&gt;succès&lt;/el-link&gt;
  &lt;el-link type=&quot;warning&quot;&gt;avertissement&lt;/el-link&gt;
  &lt;el-link type=&quot;danger&quot;&gt;danger&lt;/el-link&gt;
  &lt;el-link type=&quot;info&quot;&gt;info&lt;/el-link&gt;
&lt;/div&gt;
</code></pre></template></demo-block><h3 id="desactive"><a class="header-anchor" href="#desactive">¶</a> Désactivé</h3>
<p>Lien désactivé.</p>
<demo-block>
        
        <template slot="source"><element-demo1 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;div&gt;
  &lt;el-link disabled&gt;défaut&lt;/el-link&gt;
  &lt;el-link type=&quot;primary&quot; disabled&gt;primaire&lt;/el-link&gt;
  &lt;el-link type=&quot;success&quot; disabled&gt;succès&lt;/el-link&gt;
  &lt;el-link type=&quot;warning&quot; disabled&gt;avertissement&lt;/el-link&gt;
  &lt;el-link type=&quot;danger&quot; disabled&gt;danger&lt;/el-link&gt;
  &lt;el-link type=&quot;info&quot; disabled&gt;info&lt;/el-link&gt;
&lt;/div&gt;
</code></pre></template></demo-block><h3 id="souligne"><a class="header-anchor" href="#souligne">¶</a> Souligné</h3>
<p>Lien souligné.</p>
<demo-block>
        
        <template slot="source"><element-demo2 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;div&gt;
  &lt;el-link :underline=&quot;false&quot;&gt;non souligné&lt;/el-link&gt;
  &lt;el-link&gt;Souligné&lt;/el-link&gt;
&lt;/div&gt;
</code></pre></template></demo-block><h3 id="icone"><a class="header-anchor" href="#icone">¶</a> Icône</h3>
<p>Lien avec icône.</p>
<demo-block>
        
        <template slot="source"><element-demo3 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;div&gt;
  &lt;el-link icon=&quot;el-icon-edit&quot;&gt;Éditer&lt;/el-link&gt;
  &lt;el-link&gt;Vérifier&lt;i class=&quot;el-icon-view el-icon--right&quot;&gt;&lt;/i&gt; &lt;/el-link&gt;
&lt;/div&gt;
</code></pre></template></demo-block><h3 id="attributs"><a class="header-anchor" href="#attributs">¶</a> Attributs</h3>
<table>
<thead>
<tr>
<th>Attribut</th>
<th>Description</th>
<th>Type</th>
<th>Options</th>
<th>Défaut</th>
</tr>
</thead>
<tbody>
<tr>
<td>type</td>
<td>Type du lien.</td>
<td>string</td>
<td>primary / success / warning / danger / info</td>
<td>défaut</td>
</tr>
<tr>
<td>underline</td>
<td>Si le composant est souligné.</td>
<td>boolean</td>
<td>—</td>
<td>true</td>
</tr>
<tr>
<td>disabled</td>
<td>Si le composant est désactivé.</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>href</td>
<td>Identique au <code>href</code> natif.</td>
<td>string</td>
<td>—</td>
<td>-</td>
</tr>
<tr>
<td>icon</td>
<td>Nom de classe de l'icône.</td>
<td>string</td>
<td>—</td>
<td>-</td>
</tr>
</tbody>
</table>
