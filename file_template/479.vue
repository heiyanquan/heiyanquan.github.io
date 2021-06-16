<h2 id="divider"><a class="header-anchor" href="#divider">¶</a> Divider</h2>
<p>Une ligne de séparation entre deux contenus.</p>
<h3 id="usage-basique"><a class="header-anchor" href="#usage-basique">¶</a> Usage basique</h3>
<p>Séparer le texte de deux paragraphes.</p>
<demo-block>
        
        <template slot="source"><element-demo0 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;template&gt;
  &lt;div&gt;
    &lt;span&gt;Je suis assis à ma fenêtre ce matin où le monde, tel un passant, s’arrête un instant, me fait signe de la tête et part.&lt;/span&gt;
    &lt;el-divider&gt;&lt;/el-divider&gt;
    &lt;span&gt;Les petites pensées sont le bruissement des feuilles; ils ont leur murmure de joie dans mon esprit.&lt;/span&gt;
  &lt;/div&gt;
&lt;/template&gt;
</code></pre></template></demo-block><h3 id="contenu-personnalise"><a class="header-anchor" href="#contenu-personnalise">¶</a> Contenu personnalisé</h3>
<p>Vous ajouter du contenu dans la ligne de séparation.</p>
<demo-block>
        
        <template slot="source"><element-demo1 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;template&gt;
  &lt;div&gt;
    &lt;span&gt;Vous ne voyez pas ce que vous êtes, ce que vous voyez est votre ombre.&lt;/span&gt;
    &lt;el-divider content-position=&quot;left&quot;&gt;Rabindranath Tagore&lt;/el-divider&gt;
    &lt;span&gt;Je ne peux pas choisir le meilleur. Le meilleur me choisit.&lt;/span&gt;
    &lt;el-divider&gt;&lt;i class=&quot;el-icon-star-on&quot;&gt;&lt;/i&gt;&lt;/el-divider&gt;
    &lt;span&gt;Mes souhaits sont des imbéciles, ils crient à travers ta chanson, mon Maître. Laisse-moi mais écoute.&lt;/span&gt;
    &lt;el-divider content-position=&quot;right&quot;&gt;Rabindranath Tagore&lt;/el-divider&gt;
  &lt;/div&gt;
&lt;/template&gt;
</code></pre></template></demo-block><h3 id="separation-verticale"><a class="header-anchor" href="#separation-verticale">¶</a> Séparation verticale</h3>
<demo-block>
        
        <template slot="source"><element-demo2 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;template&gt;
  &lt;div&gt;
    &lt;span&gt;Pluie&lt;/span&gt;
    &lt;el-divider direction=&quot;vertical&quot;&gt;&lt;/el-divider&gt;
    &lt;span&gt;Maison&lt;/span&gt;
    &lt;el-divider direction=&quot;vertical&quot;&gt;&lt;/el-divider&gt;
    &lt;span&gt;Herbe&lt;/span&gt;
  &lt;/div&gt;
&lt;/template&gt;
</code></pre></template></demo-block><h3 id="attributs"><a class="header-anchor" href="#attributs">¶</a> Attributs</h3>
<table>
<thead>
<tr>
<th>Attribut</th>
<th>Description</th>
<th>Type</th>
<th>Valeurs acceptées</th>
<th>Défaut</th>
</tr>
</thead>
<tbody>
<tr>
<td>direction</td>
<td>Règle la direction du séparateur.</td>
<td>string</td>
<td>horizontal / vertical</td>
<td>horizontal</td>
</tr>
<tr>
<td>content-position</td>
<td>Personnalise le contenu du séparateur.</td>
<td>String</td>
<td>left / right / center</td>
<td>center</td>
</tr>
</tbody>
</table>
