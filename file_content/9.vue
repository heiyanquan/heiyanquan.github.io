<h2 id="alert"><a class="header-anchor" href="#alert">¶</a> Alert</h2>
<p>Affiche des messages importants.</p>
<h3 id="usage"><a class="header-anchor" href="#usage">¶</a> Usage</h3>
<p>Les Alertes sont des composants non superposés qui ne disparaissent pas automatiquement.</p>
<demo-block>
        <div><p>Les Alertes peuvent être de 4 types différents, définit par <code>type</code>, le type par défaut étant <code>info</code>.</p>
</div>
        <!--element-demo: <template>
  <el-alert
    title="succès"
    type="success">
  </el-alert>
  <el-alert
    title="information"
    type="info">
  </el-alert>
  <el-alert
    title="avertissement"
    type="warning">
  </el-alert>
  <el-alert
    title="erreur"
    type="error">
  </el-alert>
</template>
:element-demo-->
        <template slot="highlight"><pre v-pre><code class="html">&lt;template&gt;
  &lt;el-alert
    title=&quot;succès&quot;
    type=&quot;success&quot;&gt;
  &lt;/el-alert&gt;
  &lt;el-alert
    title=&quot;information&quot;
    type=&quot;info&quot;&gt;
  &lt;/el-alert&gt;
  &lt;el-alert
    title=&quot;avertissement&quot;
    type=&quot;warning&quot;&gt;
  &lt;/el-alert&gt;
  &lt;el-alert
    title=&quot;erreur&quot;
    type=&quot;error&quot;&gt;
  &lt;/el-alert&gt;
&lt;/template&gt;
</code></pre></template></demo-block><h3 id="theme"><a class="header-anchor" href="#theme">¶</a> Thème</h3>
<p>Alert fournit deux thèmes différents, <code>light</code> et <code>dark</code>.</p>
<demo-block>
        <div><p>Réglez <code>effect</code> pour changer le thème, le défaut étant <code>light</code>.</p>
</div>
        <!--element-demo: <template>
  <el-alert
    title="succès"
    type="success"
    effect="dark">
  </el-alert>
  <el-alert
    title="info"
    type="info"
    effect="dark">
  </el-alert>
  <el-alert
    title="avertissement"
    type="warning"
    effect="dark">
  </el-alert>
  <el-alert
    title="erreur"
    type="error"
    effect="dark">
  </el-alert>
</template>
:element-demo-->
        <template slot="highlight"><pre v-pre><code class="html">&lt;template&gt;
  &lt;el-alert
    title=&quot;succès&quot;
    type=&quot;success&quot;
    effect=&quot;dark&quot;&gt;
  &lt;/el-alert&gt;
  &lt;el-alert
    title=&quot;info&quot;
    type=&quot;info&quot;
    effect=&quot;dark&quot;&gt;
  &lt;/el-alert&gt;
  &lt;el-alert
    title=&quot;avertissement&quot;
    type=&quot;warning&quot;
    effect=&quot;dark&quot;&gt;
  &lt;/el-alert&gt;
  &lt;el-alert
    title=&quot;erreur&quot;
    type=&quot;error&quot;
    effect=&quot;dark&quot;&gt;
  &lt;/el-alert&gt;
&lt;/template&gt;
</code></pre></template></demo-block><h3 id="bouton-personnalisable"><a class="header-anchor" href="#bouton-personnalisable">¶</a> Bouton personnalisable</h3>
<p>Personnalisez le bouton de fermeture avec du texte ou des symboles.</p>
<demo-block>
        <div><p>Les alertes peuvent être configurées pour être fermables ou non. Le bouton de fermeture et les callbacks sont aussi personnalisables. L'attribut <code>closable</code> détermine si le composant peut être fermé ou non. Il accepte un <code>boolean</code>, la valeur par défaut étant <code>true</code>. Vous pouvez configurer l'attribut <code>close-text</code>pour remplacer la croix du bouton de fermeture. Assurez-vous que <code>close-text</code> soit une chaîne de caractères. L'évènement <code>close</code> se déclenche quand le composant est fermé.</p>
</div>
        <!--element-demo: <template>
  <el-alert
    title="alerte non fermable"
    type="success"
    :closable="false">
  </el-alert>
  <el-alert
    title="texte de fermeture personnalisé"
    type="info"
    close-text="Gotcha">
  </el-alert>
  <el-alert
    title="alerte avec callback"
    type="warning"
    @close="hello">
  </el-alert>
</template>

<script>
  export default {
    methods: {
      hello() {
        alert('Hello World!');
      }
    }
  }
</script>
:element-demo-->
        <template slot="highlight"><pre v-pre><code class="html">&lt;template&gt;
  &lt;el-alert
    title=&quot;alerte non fermable&quot;
    type=&quot;success&quot;
    :closable=&quot;false&quot;&gt;
  &lt;/el-alert&gt;
  &lt;el-alert
    title=&quot;texte de fermeture personnalisé&quot;
    type=&quot;info&quot;
    close-text=&quot;Gotcha&quot;&gt;
  &lt;/el-alert&gt;
  &lt;el-alert
    title=&quot;alerte avec callback&quot;
    type=&quot;warning&quot;
    @close=&quot;hello&quot;&gt;
  &lt;/el-alert&gt;
&lt;/template&gt;

&lt;script&gt;
  export default {
    methods: {
      hello() {
        alert('Hello World!');
      }
    }
  }
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="avec-icone"><a class="header-anchor" href="#avec-icone">¶</a> Avec icône</h3>
<p>Afficher une icône améliore la lisibilité.</p>
<demo-block>
        <div><p>Ajouter l'attribut <code>show-icon</code> affiche une icône correspondant au type de l'alerte.</p>
</div>
        <!--element-demo: <template>
  <el-alert
    title="succès"
    type="success"
    show-icon>
  </el-alert>
  <el-alert
    title="information"
    type="info"
    show-icon>
  </el-alert>
  <el-alert
    title="avertissement"
    type="warning"
    show-icon>
  </el-alert>
  <el-alert
    title="erreur"
    type="error"
    show-icon>
  </el-alert>
</template>
:element-demo-->
        <template slot="highlight"><pre v-pre><code class="html">&lt;template&gt;
  &lt;el-alert
    title=&quot;succès&quot;
    type=&quot;success&quot;
    show-icon&gt;
  &lt;/el-alert&gt;
  &lt;el-alert
    title=&quot;information&quot;
    type=&quot;info&quot;
    show-icon&gt;
  &lt;/el-alert&gt;
  &lt;el-alert
    title=&quot;avertissement&quot;
    type=&quot;warning&quot;
    show-icon&gt;
  &lt;/el-alert&gt;
  &lt;el-alert
    title=&quot;erreur&quot;
    type=&quot;error&quot;
    show-icon&gt;
  &lt;/el-alert&gt;
&lt;/template&gt;
</code></pre></template></demo-block><h2 id="texte-centre"><a class="header-anchor" href="#texte-centre">¶</a> Texte centré</h2>
<p>Utilisez l'attribut <code>center</code> pour centrer le texte.</p>
<demo-block>
        
        <!--element-demo: <template>
  <el-alert
    title="succès"
    type="success"
    center
    show-icon>
  </el-alert>
  <el-alert
    title="information"
    type="info"
    center
    show-icon>
  </el-alert>
  <el-alert
    title="avertissement"
    type="warning"
    center
    show-icon>
  </el-alert>
  <el-alert
    title="erreur"
    type="error"
    center
    show-icon>
  </el-alert>
</template>
:element-demo-->
        <template slot="highlight"><pre v-pre><code class="html">&lt;template&gt;
  &lt;el-alert
    title=&quot;succès&quot;
    type=&quot;success&quot;
    center
    show-icon&gt;
  &lt;/el-alert&gt;
  &lt;el-alert
    title=&quot;information&quot;
    type=&quot;info&quot;
    center
    show-icon&gt;
  &lt;/el-alert&gt;
  &lt;el-alert
    title=&quot;avertissement&quot;
    type=&quot;warning&quot;
    center
    show-icon&gt;
  &lt;/el-alert&gt;
  &lt;el-alert
    title=&quot;erreur&quot;
    type=&quot;error&quot;
    center
    show-icon&gt;
  &lt;/el-alert&gt;
&lt;/template&gt;
</code></pre></template></demo-block><h3 id="description"><a class="header-anchor" href="#description">¶</a> Description</h3>
<p>Contient un message avec plus d'informations.</p>
<demo-block>
        <div><p>A coté de l'attribut <code>title</code>, vous pouvez ajouter <code>description</code> pour décrire l'alerte avec plus de précisions. Les descriptions ne peuvent contenir que du texte, et les retours à la ligne sont automatiques.</p>
</div>
        <!--element-demo: <template>
  <el-alert
    title="Titre"
    type="success"
    description="Ceci est la description.">
  </el-alert>
</template>
:element-demo-->
        <template slot="highlight"><pre v-pre><code class="html">&lt;template&gt;
  &lt;el-alert
    title=&quot;Titre&quot;
    type=&quot;success&quot;
    description=&quot;Ceci est la description.&quot;&gt;
  &lt;/el-alert&gt;
&lt;/template&gt;
</code></pre></template></demo-block><h3 id="icone-et-description"><a class="header-anchor" href="#icone-et-description">¶</a> Icône et description</h3>
<demo-block>
        <div><p>Pour finir, voici un exemple utilisant à la fois l'icône et la description.</p>
</div>
        <!--element-demo: <template>
  <el-alert
    title="succès"
    type="success"
    description="Plus de texte pour décrire."
    show-icon>
  </el-alert>
  <el-alert
    title="information"
    type="info"
    description="Plus de texte pour décrire."
    show-icon>
  </el-alert>
  <el-alert
    title="avertissement"
    type="warning"
    description="Plus de texte pour décrire."
    show-icon>
  </el-alert>
  <el-alert
    title="erreur"
    type="error"
    description="Plus de texte pour décrire."
    show-icon>
  </el-alert>
</template>
:element-demo-->
        <template slot="highlight"><pre v-pre><code class="html">&lt;template&gt;
  &lt;el-alert
    title=&quot;succès&quot;
    type=&quot;success&quot;
    description=&quot;Plus de texte pour décrire.&quot;
    show-icon&gt;
  &lt;/el-alert&gt;
  &lt;el-alert
    title=&quot;information&quot;
    type=&quot;info&quot;
    description=&quot;Plus de texte pour décrire.&quot;
    show-icon&gt;
  &lt;/el-alert&gt;
  &lt;el-alert
    title=&quot;avertissement&quot;
    type=&quot;warning&quot;
    description=&quot;Plus de texte pour décrire.&quot;
    show-icon&gt;
  &lt;/el-alert&gt;
  &lt;el-alert
    title=&quot;erreur&quot;
    type=&quot;error&quot;
    description=&quot;Plus de texte pour décrire.&quot;
    show-icon&gt;
  &lt;/el-alert&gt;
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
<td>title</td>
<td>Titre.</td>
<td>string</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>type</td>
<td>Type du composant.</td>
<td>string</td>
<td>success/warning/info/error</td>
<td>info</td>
</tr>
<tr>
<td>description</td>
<td>Texte de description. Peut aussi être passé via le slot par défaut</td>
<td>string</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>closable</td>
<td>Si peut être fermé ou non.</td>
<td>boolean</td>
<td>—</td>
<td>true</td>
</tr>
<tr>
<td>center</td>
<td>Si le texte doit être centré ou non.</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>close-text</td>
<td>Texte personnalisé pour le bouton de fermeture.</td>
<td>string</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>show-icon</td>
<td>Si une icône s'affiche ou non.</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>effect</td>
<td>Détermine le thème.</td>
<td>string</td>
<td>light/dark</td>
<td>light</td>
</tr>
</tbody>
</table>
<h3 id="slot"><a class="header-anchor" href="#slot">¶</a> Slot</h3>
<table>
<thead>
<tr>
<th>Nom</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>—</td>
<td>la description</td>
</tr>
<tr>
<td>title</td>
<td>Le contenu du titre.</td>
</tr>
</tbody>
</table>
<h3 id="evenements"><a class="header-anchor" href="#evenements">¶</a> Évènements</h3>
<table>
<thead>
<tr>
<th>Nom</th>
<th>Description</th>
<th>Paramètres</th>
</tr>
</thead>
<tbody>
<tr>
<td>close</td>
<td>Se déclenche lorsque l'alerte est fermée.</td>
<td>—</td>
</tr>
</tbody>
</table>
