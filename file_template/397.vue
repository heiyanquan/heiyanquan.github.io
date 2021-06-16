<h2 id="steps"><a class="header-anchor" href="#steps">¶</a> Steps</h2>
<p>Permet de guider l'utilisateur dans l'accomplissement de toutes les taches d'un processus. Les étapes peuvent être créées de manière à refléter le scénario en question et leur nombre ne peut être inférieur à 2.</p>
<h3 id="usage"><a class="header-anchor" href="#usage">¶</a> Usage</h3>
<p>Voici une barre d'étapes basique.</p>
<demo-block>
        <div><p>Réglez l'attribut <code>active</code> avec une variable <code>Number</code>, qui indique l'index des étapes et commence à 0. L'attribut <code>space</code> permet de déterminer si l'espace entre les étapes doit être fixe à l'aide d'un <code>Number</code>. L'unité de <code>space</code> est <code>px</code>. Si cet attribut est absent, la barre sera responsive. L'attribut <code>finish-status</code> change le statut d'accomplissement des étapes.</p>
</div>
        <template slot="source"><element-demo0 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;el-steps :active=&quot;active&quot; finish-status=&quot;success&quot;&gt;
  &lt;el-step title=&quot;Étape 1&quot;&gt;&lt;/el-step&gt;
  &lt;el-step title=&quot;Étape 2&quot;&gt;&lt;/el-step&gt;
  &lt;el-step title=&quot;Étape 3&quot;&gt;&lt;/el-step&gt;
&lt;/el-steps&gt;

&lt;el-button style=&quot;margin-top: 12px;&quot; @click=&quot;next&quot;&gt;Prochaine étape&lt;/el-button&gt;

&lt;script&gt;
  export default {
    data() {
      return {
        active: 0
      };
    },

    methods: {
      next() {
        if (this.active++ &gt; 2) this.active = 0;
      }
    }
  }
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="barre-avec-statut"><a class="header-anchor" href="#barre-avec-statut">¶</a> Barre avec statut</h3>
<p>Vous pouvez afficher le statut de chaque étape.</p>
<demo-block>
        <div><p>Utilisez <code>title</code> pour définir le nom de l'étape, ou écrasez cet attribut en utilisant un <code>slot</code>. La liste complète des slots se trouve en fin de page.</p>
</div>
        <template slot="source"><element-demo1 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;el-steps :space=&quot;200&quot; :active=&quot;1&quot; finish-status=&quot;success&quot;&gt;
  &lt;el-step title=&quot;Terminé&quot;&gt;&lt;/el-step&gt;
  &lt;el-step title=&quot;En cours&quot;&gt;&lt;/el-step&gt;
  &lt;el-step title=&quot;Étape 3&quot;&gt;&lt;/el-step&gt;
&lt;/el-steps&gt;
</code></pre></template></demo-block><h3 id="barre-avec-description"><a class="header-anchor" href="#barre-avec-description">¶</a> Barre avec description</h3>
<p>Vous pouvez ajouter une description pour chaque étape.</p>
<demo-block>
        
        <template slot="source"><element-demo2 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;el-steps :active=&quot;1&quot;&gt;
  &lt;el-step title=&quot;Étape 1&quot; description=&quot;Une description&quot;&gt;&lt;/el-step&gt;
  &lt;el-step title=&quot;Étape 2&quot; description=&quot;Une description&quot;&gt;&lt;/el-step&gt;
  &lt;el-step title=&quot;Étape 3&quot; description=&quot;Une description&quot;&gt;&lt;/el-step&gt;
&lt;/el-steps&gt;
</code></pre></template></demo-block><h3 id="centrer"><a class="header-anchor" href="#centrer">¶</a> Centrer</h3>
<p>Le titre et la description peuvent être centrés.</p>
<demo-block>
        
        <template slot="source"><element-demo3 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;el-steps :active=&quot;2&quot; align-center&gt;
  &lt;el-step title=&quot;Étape 1&quot; description=&quot;Une description&quot;&gt;&lt;/el-step&gt;
  &lt;el-step title=&quot;Étape 2&quot; description=&quot;Une description&quot;&gt;&lt;/el-step&gt;
  &lt;el-step title=&quot;Étape 3&quot; description=&quot;Une description&quot;&gt;&lt;/el-step&gt;
  &lt;el-step title=&quot;Étape 4&quot; description=&quot;Une description&quot;&gt;&lt;/el-step&gt;
&lt;/el-steps&gt;
</code></pre></template></demo-block><h3 id="barre-avec-icone"><a class="header-anchor" href="#barre-avec-icone">¶</a> Barre avec icône</h3>
<p>Une grande variété d'icônes peut être utilisée dans la barre d'étapes.</p>
<demo-block>
        <div><p>L'icône est ajoutée en utilisant <code>icon</code>. Les types d'icônes possibles sont référencés dans la documentation du composant Icon. De plus, vous pouvez utilisé une icône personnalisée en utilisant un <code>slot</code>.</p>
</div>
        <template slot="source"><element-demo4 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;el-steps :active=&quot;1&quot;&gt;
  &lt;el-step title=&quot;Étape 1&quot; icon=&quot;el-icon-edit&quot;&gt;&lt;/el-step&gt;
  &lt;el-step title=&quot;Étape 2&quot; icon=&quot;el-icon-upload&quot;&gt;&lt;/el-step&gt;
  &lt;el-step title=&quot;Étape 3&quot; icon=&quot;el-icon-picture&quot;&gt;&lt;/el-step&gt;
&lt;/el-steps&gt;
</code></pre></template></demo-block><h3 id="barre-verticale"><a class="header-anchor" href="#barre-verticale">¶</a> Barre verticale</h3>
<p>La barre d'étape peut être affichée de manière verticale.</p>
<demo-block>
        <div><p>Mettez simplement l'attribut <code>direction</code> à <code>vertical</code> dans l'élément <code>el-steps</code>.</p>
</div>
        <template slot="source"><element-demo5 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;div style=&quot;height: 300px;&quot;&gt;
  &lt;el-steps direction=&quot;vertical&quot; :active=&quot;1&quot;&gt;
    &lt;el-step title=&quot;Étape 1&quot;&gt;&lt;/el-step&gt;
    &lt;el-step title=&quot;Étape 2&quot;&gt;&lt;/el-step&gt;
    &lt;el-step title=&quot;Étape 3&quot;&gt;&lt;/el-step&gt;
  &lt;/el-steps&gt;
&lt;/div&gt;
</code></pre></template></demo-block><h3 id="barre-d-etapes-simple"><a class="header-anchor" href="#barre-d-etapes-simple">¶</a> Barre d'étapes simple</h3>
<p>La barre peut être simplifiée de manière à ce que <code>align-center</code>, <code>description</code>, <code>direction</code> et <code>space</code> soient ignorées.</p>
<demo-block>
        
        <template slot="source"><element-demo6 /></template>
        <template slot="highlight"><pre v-pre><code class="html">
&lt;el-steps :space=&quot;200&quot; :active=&quot;1&quot; simple&gt;
  &lt;el-step title=&quot;Étape 1&quot; icon=&quot;el-icon-edit&quot;&gt;&lt;/el-step&gt;
  &lt;el-step title=&quot;Étape 2&quot; icon=&quot;el-icon-upload&quot;&gt;&lt;/el-step&gt;
  &lt;el-step title=&quot;Étape 3&quot; icon=&quot;el-icon-picture&quot;&gt;&lt;/el-step&gt;
&lt;/el-steps&gt;

&lt;el-steps :active=&quot;1&quot; finish-status=&quot;success&quot; simple style=&quot;margin-top: 20px&quot;&gt;
  &lt;el-step title=&quot;Étape 1&quot; &gt;&lt;/el-step&gt;
  &lt;el-step title=&quot;Étape 2&quot; &gt;&lt;/el-step&gt;
  &lt;el-step title=&quot;Étape 3&quot; &gt;&lt;/el-step&gt;
&lt;/el-steps&gt;
</code></pre></template></demo-block><h3 id="attributs-de-la-barre"><a class="header-anchor" href="#attributs-de-la-barre">¶</a> Attributs de la barre</h3>
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
<td>space</td>
<td>L'espace entre chaque étape, sera responsive si omis. Supporte les pourcentages.</td>
<td>number / string</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>direction</td>
<td>L'orientation de la barre.</td>
<td>string</td>
<td>vertical/horizontal</td>
<td>horizontal</td>
</tr>
<tr>
<td>active</td>
<td>L'index de l'étape courante.</td>
<td>number</td>
<td>—</td>
<td>0</td>
</tr>
<tr>
<td>process-status</td>
<td>Le statut de l'étape courante.</td>
<td>string</td>
<td>wait / process / finish / error / success</td>
<td>process</td>
</tr>
<tr>
<td>finish-status</td>
<td>Le statut de la dernière étape.</td>
<td>string</td>
<td>wait / process / finish / error / success</td>
<td>finish</td>
</tr>
<tr>
<td>align-center</td>
<td>Si le titre et la description doivent être centrés.</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>simple</td>
<td>Si un thème simple doit être appliqué.</td>
<td>boolean</td>
<td>-</td>
<td>false</td>
</tr>
</tbody>
</table>
<h3 id="attributs-des-etapes"><a class="header-anchor" href="#attributs-des-etapes">¶</a> Attributs des étapes</h3>
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
<td>Titre de l'étape.</td>
<td>string</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>description</td>
<td>Description de l'étape.</td>
<td>string</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>icon</td>
<td>step icon</td>
<td>Classe de l'icône d'étape. Les icônes peuvent aussi être passées via des slots.</td>
<td>string</td>
<td>—</td>
</tr>
<tr>
<td>status</td>
<td>Le statut actuel. Sera déterminé par la barre d'étapes si omis.</td>
<td>wait / process / finish / error / success</td>
<td>-</td>
<td></td>
</tr>
</tbody>
</table>
<h3 id="slots-des-etapes"><a class="header-anchor" href="#slots-des-etapes">¶</a> Slots des étapes</h3>
<table>
<thead>
<tr>
<th>Nom</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>icon</td>
<td>L'icône de l'étape.</td>
</tr>
<tr>
<td>title</td>
<td>Le titre de l'étape.</td>
</tr>
<tr>
<td>description</td>
<td>La description de l'étape.</td>
</tr>
</tbody>
</table>
