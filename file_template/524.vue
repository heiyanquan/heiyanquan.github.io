<h2 id="breadcrumb"><a class="header-anchor" href="#breadcrumb">¶</a> Breadcrumb</h2>
<p>Affiche le chemin de la page actuelle, afin de pouvoir naviguer plus facilement.</p>
<h3 id="usage"><a class="header-anchor" href="#usage">¶</a> Usage</h3>
<demo-block>
        <div><p>Dans <code>el-breadcrumb</code>, chaque <code>el-breadcrumb-item</code> est un tag représentant chaque niveau depuis la page d'accueil. Ce Composant possède un attribut de type <code>String</code> appelé <code>separator</code> qui détermine le séparateur. Sa valeur par défaut est '/'.</p>
</div>
        <template slot="source"><element-demo0 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;el-breadcrumb separator=&quot;/&quot;&gt;
  &lt;el-breadcrumb-item :to=&quot;{ path: '/' }&quot;&gt;Accueil&lt;/el-breadcrumb-item&gt;
  &lt;el-breadcrumb-item&gt;&lt;a href=&quot;/&quot;&gt;Gestion promotions&lt;/a&gt;&lt;/el-breadcrumb-item&gt;
  &lt;el-breadcrumb-item&gt;Liste promotions&lt;/el-breadcrumb-item&gt;
  &lt;el-breadcrumb-item&gt;Détail promotion&lt;/el-breadcrumb-item&gt;
&lt;/el-breadcrumb&gt;
</code></pre></template></demo-block><h3 id="icone-de-separation"><a class="header-anchor" href="#icone-de-separation">¶</a> Icône de séparation</h3>
<demo-block>
        <div><p>Configurez <code>separator-class</code> pour utiliser <code>iconfont</code> en tant que séparateur. Cela remplacera <code>separator</code>.</p>
</div>
        <template slot="source"><element-demo1 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;el-breadcrumb separator-class=&quot;el-icon-arrow-right&quot;&gt;
  &lt;el-breadcrumb-item :to=&quot;{ path: '/' }&quot;&gt;Accueil&lt;/el-breadcrumb-item&gt;
  &lt;el-breadcrumb-item&gt;Gestion promotions&lt;/el-breadcrumb-item&gt;
  &lt;el-breadcrumb-item&gt;Liste promotions&lt;/el-breadcrumb-item&gt;
  &lt;el-breadcrumb-item&gt;Détail promotion&lt;/el-breadcrumb-item&gt;
&lt;/el-breadcrumb&gt;
</code></pre></template></demo-block><h3 id="attributs-de-breadcrumb"><a class="header-anchor" href="#attributs-de-breadcrumb">¶</a> Attributs de Breadcrumb</h3>
<table>
<thead>
<tr>
<th>Attributs</th>
<th>Description</th>
<th>Type</th>
<th>Valeurs acceptées</th>
<th>Défaut</th>
</tr>
</thead>
<tbody>
<tr>
<td>separator</td>
<td>Caractère de séparation</td>
<td>string</td>
<td>—</td>
<td>/</td>
</tr>
<tr>
<td>separator-class</td>
<td>Classe de l'icône de séparation</td>
<td>string</td>
<td>—</td>
<td>-</td>
</tr>
</tbody>
</table>
<h3 id="attributs-de-breadcrumb-item"><a class="header-anchor" href="#attributs-de-breadcrumb-item">¶</a> Attributs de Breadcrumb Item</h3>
<table>
<thead>
<tr>
<th>Attributs</th>
<th>Description</th>
<th>Type</th>
<th>Valeurs acceptées</th>
<th>Défaut</th>
</tr>
</thead>
<tbody>
<tr>
<td>to</td>
<td>Route cible du lien, identique au <code>to</code> de <code>vue-router</code>.</td>
<td>string/object</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>replace</td>
<td>Si <code>true</code>, la navigation ne laissera pas d'historique.</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
</tbody>
</table>
