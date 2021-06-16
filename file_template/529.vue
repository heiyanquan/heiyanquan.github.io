<h2 id="badge"><a class="header-anchor" href="#badge">¶</a> Badge</h2>
<p>Un nombre ou un status affiché par-dessus un bouton ou un icône.</p>
<h3 id="usage"><a class="header-anchor" href="#usage">¶</a> Usage</h3>
<p>Affiche le nombre de nouveaux messages.</p>
<demo-block>
        <div><p>La quantité est définit par <code>value</code> qui accepte un <code>Number</code> ou un <code>String</code>.</p>
</div>
        <template slot="source"><element-demo0 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;el-badge :value=&quot;12&quot; class=&quot;item&quot;&gt;
  &lt;el-button size=&quot;small&quot;&gt;Commentaires&lt;/el-button&gt;
&lt;/el-badge&gt;
&lt;el-badge :value=&quot;3&quot; class=&quot;item&quot;&gt;
  &lt;el-button size=&quot;small&quot;&gt;Réponses&lt;/el-button&gt;
&lt;/el-badge&gt;
&lt;el-badge :value=&quot;1&quot; class=&quot;item&quot; type=&quot;primary&quot;&gt;
  &lt;el-button size=&quot;small&quot;&gt;Commentaires&lt;/el-button&gt;
&lt;/el-badge&gt;
&lt;el-badge :value=&quot;2&quot; class=&quot;item&quot; type=&quot;warning&quot;&gt;
  &lt;el-button size=&quot;small&quot;&gt;Réponses&lt;/el-button&gt;
&lt;/el-badge&gt;

&lt;el-dropdown trigger=&quot;click&quot;&gt;
  &lt;span class=&quot;el-dropdown-link&quot;&gt;
    Cliquez&lt;i class=&quot;el-icon-caret-bottom el-icon--right&quot;&gt;&lt;/i&gt;
  &lt;/span&gt;
  &lt;el-dropdown-menu slot=&quot;dropdown&quot;&gt;
    &lt;el-dropdown-item class=&quot;clearfix&quot;&gt;
      Commentaires
      &lt;el-badge class=&quot;mark&quot; :value=&quot;12&quot; /&gt;
    &lt;/el-dropdown-item&gt;
    &lt;el-dropdown-item class=&quot;clearfix&quot;&gt;
      Réponses
      &lt;el-badge class=&quot;mark&quot; :value=&quot;3&quot; /&gt;
    &lt;/el-dropdown-item&gt;
  &lt;/el-dropdown-menu&gt;
&lt;/el-dropdown&gt;

&lt;style&gt;
.item {
  margin-top: 10px;
  margin-right: 40px;
}
&lt;/style&gt;
</code></pre></template></demo-block><h3 id="valeur-maximale"><a class="header-anchor" href="#valeur-maximale">¶</a> Valeur maximale</h3>
<p>Vous pouvez configurer la valeur maximale.</p>
<demo-block>
        <div><p>La valeur maximale est définit par <code>max</code> qui accepte un <code>Number</code>. Ceci ne marche qui si <code>value</code> est également un <code>Number</code>.</p>
</div>
        <template slot="source"><element-demo1 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;el-badge :value=&quot;200&quot; :max=&quot;99&quot; class=&quot;item&quot;&gt;
  &lt;el-button size=&quot;small&quot;&gt;Commentaires&lt;/el-button&gt;
&lt;/el-badge&gt;
&lt;el-badge :value=&quot;100&quot; :max=&quot;10&quot; class=&quot;item&quot;&gt;
  &lt;el-button size=&quot;small&quot;&gt;Réponses&lt;/el-button&gt;
&lt;/el-badge&gt;

&lt;style&gt;
.item {
  margin-top: 10px;
  margin-right: 40px;
}
&lt;/style&gt;
</code></pre></template></demo-block><h3 id="configuration"><a class="header-anchor" href="#configuration">¶</a> Configuration</h3>
<p>Affiche du texte autre que des nombres.</p>
<demo-block>
        <div><p>Quand <code>value</code> est un <code>String</code>, il affiche un texte personnalisé.</p>
</div>
        <template slot="source"><element-demo2 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;el-badge value=&quot;new&quot; class=&quot;item&quot;&gt;
  &lt;el-button size=&quot;small&quot;&gt;Commentaires&lt;/el-button&gt;
&lt;/el-badge&gt;
&lt;el-badge value=&quot;hot&quot; class=&quot;item&quot;&gt;
  &lt;el-button size=&quot;small&quot;&gt;Réponses&lt;/el-button&gt;
&lt;/el-badge&gt;

&lt;style&gt;
.item {
  margin-top: 10px;
  margin-right: 40px;
}
&lt;/style&gt;
</code></pre></template></demo-block><h3 id="point-rouge"><a class="header-anchor" href="#point-rouge">¶</a> Point rouge</h3>
<p>Utilisez un point rouge pour signaler du contenu devant être remarqué.</p>
<demo-block>
        <div><p>Utilisez l'attribut <code>is-dot</code> qui est un <code>Boolean</code>.</p>
</div>
        <template slot="source"><element-demo3 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;el-badge is-dot class=&quot;item&quot;&gt;Requète&lt;/el-badge&gt;
&lt;el-badge is-dot class=&quot;item&quot;&gt;
  &lt;el-button class=&quot;share-button&quot; icon=&quot;el-icon-share&quot; type=&quot;primary&quot;&gt;&lt;/el-button&gt;
&lt;/el-badge&gt;

&lt;style&gt;
.item {
  margin-top: 10px;
  margin-right: 40px;
}
&lt;/style&gt;
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
<td>value</td>
<td>Valeur affichée.</td>
<td>string, number</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>max</td>
<td>Valeur maximale, affiche '{max}+' quand elle est dépassée. Ne marche que si <code>value</code> est un <code>Number</code>.</td>
<td>number</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>is-dot</td>
<td>Affiche un point rouge.</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>hidden</td>
<td>Cache le badge.</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>type</td>
<td>Type du bouton.</td>
<td>string</td>
<td>primary / success / warning / danger / info</td>
<td>—</td>
</tr>
</tbody>
</table>
