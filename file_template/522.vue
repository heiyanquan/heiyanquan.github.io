<h2 id="bouton"><a class="header-anchor" href="#bouton">¶</a> Bouton</h2>
<p>Bouton communément utilisé.</p>
<h3 id="usage"><a class="header-anchor" href="#usage">¶</a> Usage</h3>
<demo-block>
        <div><p>Utilisez <code>type</code>, <code>plain</code>, <code>round</code> et <code>circle</code> pour définir le style du bouton.</p>
</div>
        <template slot="source"><element-demo0 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;el-row&gt;
  &lt;el-button&gt;Défaut&lt;/el-button&gt;
  &lt;el-button type=&quot;primary&quot;&gt;Primary&lt;/el-button&gt;
  &lt;el-button type=&quot;success&quot;&gt;Success&lt;/el-button&gt;
  &lt;el-button type=&quot;info&quot;&gt;Info&lt;/el-button&gt;
  &lt;el-button type=&quot;warning&quot;&gt;Warning&lt;/el-button&gt;
  &lt;el-button type=&quot;danger&quot;&gt;Danger&lt;/el-button&gt;
&lt;/el-row&gt;

&lt;el-row&gt;
  &lt;el-button plain&gt;Plein&lt;/el-button&gt;
  &lt;el-button type=&quot;primary&quot; plain&gt;Primary&lt;/el-button&gt;
  &lt;el-button type=&quot;success&quot; plain&gt;Success&lt;/el-button&gt;
  &lt;el-button type=&quot;info&quot; plain&gt;Info&lt;/el-button&gt;
  &lt;el-button type=&quot;warning&quot; plain&gt;Warning&lt;/el-button&gt;
  &lt;el-button type=&quot;danger&quot; plain&gt;Danger&lt;/el-button&gt;
&lt;/el-row&gt;

&lt;el-row&gt;
  &lt;el-button round&gt;Arrondi&lt;/el-button&gt;
  &lt;el-button type=&quot;primary&quot; round&gt;Primary&lt;/el-button&gt;
  &lt;el-button type=&quot;success&quot; round&gt;Success&lt;/el-button&gt;
  &lt;el-button type=&quot;info&quot; round&gt;Info&lt;/el-button&gt;
  &lt;el-button type=&quot;warning&quot; round&gt;Warning&lt;/el-button&gt;
  &lt;el-button type=&quot;danger&quot; round&gt;Danger&lt;/el-button&gt;
&lt;/el-row&gt;

&lt;el-row&gt;
  &lt;el-button icon=&quot;el-icon-search&quot; circle&gt;&lt;/el-button&gt;
  &lt;el-button type=&quot;primary&quot; icon=&quot;el-icon-edit&quot; circle&gt;&lt;/el-button&gt;
  &lt;el-button type=&quot;success&quot; icon=&quot;el-icon-check&quot; circle&gt;&lt;/el-button&gt;
  &lt;el-button type=&quot;info&quot; icon=&quot;el-icon-message&quot; circle&gt;&lt;/el-button&gt;
  &lt;el-button type=&quot;warning&quot; icon=&quot;el-icon-star-off&quot; circle&gt;&lt;/el-button&gt;
  &lt;el-button type=&quot;danger&quot; icon=&quot;el-icon-delete&quot; circle&gt;&lt;/el-button&gt;
&lt;/el-row&gt;
</code></pre></template></demo-block><h3 id="bouton-desactive"><a class="header-anchor" href="#bouton-desactive">¶</a> Bouton désactivé</h3>
<p>L'attribut <code>disabled</code> détermine si le bouton est désactivé.</p>
<demo-block>
        <div><p>Utilisez l'attribut <code>disabled</code> pour déterminer si un bouton est désactivé ou non. Il accepte un <code>Boolean</code>.</p>
</div>
        <template slot="source"><element-demo1 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;el-row&gt;
  &lt;el-button disabled&gt;Défaut&lt;/el-button&gt;
  &lt;el-button type=&quot;primary&quot; disabled&gt;Principal&lt;/el-button&gt;
  &lt;el-button type=&quot;success&quot; disabled&gt;Succès&lt;/el-button&gt;
  &lt;el-button type=&quot;info&quot; disabled&gt;Info&lt;/el-button&gt;
  &lt;el-button type=&quot;warning&quot; disabled&gt;Attention&lt;/el-button&gt;
  &lt;el-button type=&quot;danger&quot; disabled&gt;Danger&lt;/el-button&gt;
&lt;/el-row&gt;

&lt;el-row&gt;
  &lt;el-button plain disabled&gt;Plein&lt;/el-button&gt;
  &lt;el-button type=&quot;primary&quot; plain disabled&gt;Principal&lt;/el-button&gt;
  &lt;el-button type=&quot;success&quot; plain disabled&gt;Succès&lt;/el-button&gt;
  &lt;el-button type=&quot;info&quot; plain disabled&gt;Info&lt;/el-button&gt;
  &lt;el-button type=&quot;warning&quot; plain disabled&gt;Attention&lt;/el-button&gt;
  &lt;el-button type=&quot;danger&quot; plain disabled&gt;Danger&lt;/el-button&gt;
&lt;/el-row&gt;
</code></pre></template></demo-block><h3 id="bouton-texte"><a class="header-anchor" href="#bouton-texte">¶</a> Bouton texte</h3>
<p>Bouton sans bordure ni fond.</p>
<demo-block>
        
        <template slot="source"><element-demo2 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;el-button type=&quot;text&quot;&gt;Bouton texte&lt;/el-button&gt;
&lt;el-button type=&quot;text&quot; disabled&gt;Bouton texte&lt;/el-button&gt;
</code></pre></template></demo-block><h3 id="icone"><a class="header-anchor" href="#icone">¶</a> Icône</h3>
<p>Utilisez des icônes pour ajouter plus de sens aux boutons. Vous pouvez utiliser uniquement l'icône pour économiser de l'espace, ou bien l'utiliser avec du texte.</p>
<demo-block>
        <div><p>Utilisez l'attribut <code>icon</code> pour ajouter une icône. Vous pourrez trouver la liste des icônes dans le composant Icon d'Element. Ajouter des icônes sur le coté droit du texte est possible grâce à la balise <code>&lt;i&gt;</code>. Des icônes personnalisées peuvent également être utilisées.</p>
</div>
        <template slot="source"><element-demo3 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;el-button type=&quot;primary&quot; icon=&quot;el-icon-edit&quot;&gt;&lt;/el-button&gt;
&lt;el-button type=&quot;primary&quot; icon=&quot;el-icon-share&quot;&gt;&lt;/el-button&gt;
&lt;el-button type=&quot;primary&quot; icon=&quot;el-icon-delete&quot;&gt;&lt;/el-button&gt;
&lt;el-button type=&quot;primary&quot; icon=&quot;el-icon-search&quot;&gt;Recherche&lt;/el-button&gt;
&lt;el-button type=&quot;primary&quot;&gt;Upload&lt;i class=&quot;el-icon-upload el-icon-right&quot;&gt;&lt;/i&gt;&lt;/el-button&gt;
</code></pre></template></demo-block><h3 id="groupes-de-boutons"><a class="header-anchor" href="#groupes-de-boutons">¶</a> Groupes de boutons</h3>
<p>Affiche un groupe de bouton. Peut être utilisé pour grouper un ensemble d'opérations similaires.</p>
<demo-block>
        <div><p>Utilisez la balise <code>&lt;el-button-group&gt;</code> pour grouper vos boutons.</p>
</div>
        <template slot="source"><element-demo4 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;el-button-group&gt;
  &lt;el-button type=&quot;primary&quot; icon=&quot;el-icon-arrow-left&quot;&gt;Page précédente&lt;/el-button&gt;
  &lt;el-button type=&quot;primary&quot;&gt;Page suivante&lt;i class=&quot;el-icon-arrow-right el-icon-right&quot;&gt;&lt;/i&gt;&lt;/el-button&gt;
&lt;/el-button-group&gt;
&lt;el-button-group&gt;
  &lt;el-button type=&quot;primary&quot; icon=&quot;el-icon-edit&quot;&gt;&lt;/el-button&gt;
  &lt;el-button type=&quot;primary&quot; icon=&quot;el-icon-share&quot;&gt;&lt;/el-button&gt;
  &lt;el-button type=&quot;primary&quot; icon=&quot;el-icon-delete&quot;&gt;&lt;/el-button&gt;
&lt;/el-button-group&gt;
</code></pre></template></demo-block><h3 id="bouton-en-chargement"><a class="header-anchor" href="#bouton-en-chargement">¶</a> Bouton en chargement</h3>
<p>Cliquez sur le bouton pour charger des données et il affichera un état de chargement.</p>
<demo-block>
        <div><p>Configurez l'attribut <code>loading</code> à <code>true</code> pour afficher un état de chargement.</p>
</div>
        <template slot="source"><element-demo5 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;el-button type=&quot;primary&quot; :loading=&quot;true&quot;&gt;Chargement&lt;/el-button&gt;
</code></pre></template></demo-block><h3 id="tailles"><a class="header-anchor" href="#tailles">¶</a> Tailles</h3>
<p>En plus de la taille par défaut, le composant Button fournit trois tailles supplémentaires pour différents scénarios.</p>
<demo-block>
        <div><p>Utilisez l'attribut <code>size</code> pour choisir d'autres tailles parmi <code>medium</code>, <code>small</code> ou <code>mini</code>.</p>
</div>
        <template slot="source"><element-demo6 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;el-row&gt;
  &lt;el-button&gt;Défaut&lt;/el-button&gt;
  &lt;el-button size=&quot;medium&quot;&gt;Medium&lt;/el-button&gt;
  &lt;el-button size=&quot;small&quot;&gt;Small&lt;/el-button&gt;
  &lt;el-button size=&quot;mini&quot;&gt;Mini&lt;/el-button&gt;
&lt;/el-row&gt;
&lt;el-row&gt;
  &lt;el-button round&gt;Défaut&lt;/el-button&gt;
  &lt;el-button size=&quot;medium&quot; round&gt;Medium&lt;/el-button&gt;
  &lt;el-button size=&quot;small&quot; round&gt;Small&lt;/el-button&gt;
  &lt;el-button size=&quot;mini&quot; round&gt;Mini&lt;/el-button&gt;
&lt;/el-row&gt;
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
<td>size</td>
<td>Taille du bouton.</td>
<td>string</td>
<td>medium / small / mini</td>
<td>—</td>
</tr>
<tr>
<td>type</td>
<td>Type du bouton.</td>
<td>string</td>
<td>primary / success / warning / danger / info / text</td>
<td>—</td>
</tr>
<tr>
<td>plain</td>
<td>Détermine si le bouton est plein.</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>round</td>
<td>Détermine si le bouton est arrondi.</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>circle</td>
<td>Détermine si le bouton est un cercle.</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>loading</td>
<td>Détermine si l'état de chargement est affiché.</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>disabled</td>
<td>Désactive le bouton</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>icon</td>
<td>Classe de l'icône.</td>
<td>string</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>autofocus</td>
<td>Identique à l'attribut natif <code>autofocus</code></td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>native-type</td>
<td>Identique à l'attribut natif <code>type</code></td>
<td>string</td>
<td>button / submit / reset</td>
<td>button</td>
</tr>
</tbody>
</table>
