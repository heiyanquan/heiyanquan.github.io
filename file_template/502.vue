<h2 id="collapse"><a class="header-anchor" href="#collapse">¶</a> Collapse</h2>
<p>Utilisez Collapse pour stocker du contenu.</p>
<h3 id="usage"><a class="header-anchor" href="#usage">¶</a> Usage</h3>
<p>Vous pouvez agrandir plusieurs panneaux.</p>
<demo-block>
        
        <template slot="source"><element-demo0 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;el-collapse v-model=&quot;activeNames&quot; @change=&quot;handleChange&quot;&gt;
  &lt;el-collapse-item title=&quot;Cohérence&quot; name=&quot;1&quot;&gt;
    &lt;div&gt;Cohérence avec la vraie vie: en accord avec les processus habituels de la vie réelle, conforme aux langages et habitudes des utilisateurs;&lt;/div&gt;
    &lt;div&gt;Cohérence au sein de l'interface: tout les éléments doivent être cohérents entre eux et suivre les mêmes règles, par exemple: le style global, les icônes, la position des éléments, etc.&lt;/div&gt;
  &lt;/el-collapse-item&gt;
  &lt;el-collapse-item title=&quot;Feedback&quot; name=&quot;2&quot;&gt;
    &lt;div&gt;Retour d'expérience: permets aux utilisateurs de percevoir clairement leurs opérations par le biais d'animations et d'effets interactifs.&lt;/div&gt;
    &lt;div&gt;Retour visuel: reflète l'état actuel de la page via le réarrangement ou la mise à jour des éléments.&lt;/div&gt;
  &lt;/el-collapse-item&gt;
  &lt;el-collapse-item title=&quot;Efficacité&quot; name=&quot;3&quot;&gt;
    &lt;div&gt;Simplifier le processus: garde chaque opération simple et intuitive.;&lt;/div&gt;
    &lt;div&gt;Clair et défini: énonce clairement ses intentions afin que l'utilisateur puisse comprendre et prendre une décision rapidement;&lt;/div&gt;
    &lt;div&gt;Facile à identifier: l'interface devrait être simple et facile d'accès, afin que les utilisateurs n'ai pas d'efforts de mémorisation à faire.&lt;/div&gt;
  &lt;/el-collapse-item&gt;
  &lt;el-collapse-item title=&quot;Controllabilité&quot; name=&quot;4&quot;&gt;
    &lt;div&gt;Prise de décision: possibilité de donner des conseils sur les opérations, mais ne jamais prendre de décisions à la place des utilisateurs;&lt;/div&gt;
    &lt;div&gt;Contrôle des conséquences: les utilisateurs devraient pouvoir contrôler l'exécution de leurs opérations, y compris l'annulation et la suppression des opérations courantes.&lt;/div&gt;
  &lt;/el-collapse-item&gt;
&lt;/el-collapse&gt;
&lt;script&gt;
  export default {
    data() {
      return {
        activeNames: ['1']
      };
    },
    methods: {
      handleChange(val) {
        console.log(val);
      }
    }
  }
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="accordeon"><a class="header-anchor" href="#accordeon">¶</a> Accordéon</h3>
<p>En mode accordéon, un seul panneau peut être ouvert à la fois.</p>
<demo-block>
        <div><p>Utilisez l'attribut <code>accordion</code> pour activer le mode accordéon.</p>
</div>
        <template slot="source"><element-demo1 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;el-collapse v-model=&quot;activeName&quot; accordion&gt;
    &lt;el-collapse-item title=&quot;Cohérence&quot; name=&quot;1&quot;&gt;
      &lt;div&gt;Cohérence avec la vraie vie: en accord avec les processus habituels de la vie réelle, conforme aux langages et habitudes des utilisateurs;&lt;/div&gt;
      &lt;div&gt;Cohérence au sein de l'interface: tout les éléments doivent être cohérents entre eux et suivre les mêmes règles, par exemple: le style global, les icônes, la position des éléments, etc.&lt;/div&gt;
    &lt;/el-collapse-item&gt;
    &lt;el-collapse-item title=&quot;Feedback&quot; name=&quot;2&quot;&gt;
      &lt;div&gt;Retour d'expèrience: permets aux utilisateurs de percevoir clairement leur opérations par le biais d'animations et d'effets interactifs.&lt;/div&gt;
      &lt;div&gt;Retour visuel: reflète l'état actuel de la page via le réarrangement ou la mise à jour des éléments.&lt;/div&gt;
    &lt;/el-collapse-item&gt;
    &lt;el-collapse-item title=&quot;Efficacité&quot; name=&quot;3&quot;&gt;
      &lt;div&gt;Simplifier le processus: garde chaque opération simple et intuitive.;&lt;/div&gt;
      &lt;div&gt;Clair et défini: énonce clairement ses intentions afin que l'utilisateur puisse comprendre et prendre une décision rapidement;&lt;/div&gt;
      &lt;div&gt;Facile à identifier: l'interface devrait être simple et facile d'accès, afin que les utilisateurs n'ai pas d'efforts de mémorisation à faire.&lt;/div&gt;
    &lt;/el-collapse-item&gt;
    &lt;el-collapse-item title=&quot;Controllabilité&quot; name=&quot;4&quot;&gt;
      &lt;div&gt;Prise de décision: possibilité de donner des conseils sur les opérations, mais ne jamais prendre de décisions à la place des utilisateurs;&lt;/div&gt;
      &lt;div&gt;Contrôle des conséquences: les utilisateurs devraient pouvoir contrôler l'exécution de leurs opérations, y compris l'annulation et la suppression des opérations courantes.&lt;/div&gt;
    &lt;/el-collapse-item&gt;
&lt;/el-collapse&gt;
&lt;script&gt;
  export default {
    data() {
      return {
        activeName: '1'
      };
    }
  }
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="titre-personnalise"><a class="header-anchor" href="#titre-personnalise">¶</a> Titre personnalisé</h3>
<p>En plus de l'utilisation de l'attribut <code>title</code>, vous pouvez configurer les titres de panneau, ce qui rend possible l'ajout de contenu personnalisé, comme des icônes par exemple.</p>
<demo-block>
        
        <template slot="source"><element-demo2 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;el-collapse accordion&gt;
  &lt;el-collapse-item name=&quot;1&quot;&gt;
    &lt;template slot=&quot;title&quot;&gt;
      Cohérence&lt;i class=&quot;header-icon el-icon-info&quot;&gt;&lt;/i&gt;
    &lt;/template&gt;
    &lt;div&gt;Cohérence avec la vraie vie: en accord avec les processus habituels de la vie réelle, conforme aux langages et habitudes des utilisateurs;&lt;/div&gt;
    &lt;div&gt;Cohérence au sein de l'interface: tout les éléments doivent être cohérents entre eux et suivre les mêmes règles, par exemple: le style global, les icônes, la position des éléments, etc.&lt;/div&gt;
  &lt;/el-collapse-item&gt;
  &lt;el-collapse-item title=&quot;Feedback&quot; name=&quot;2&quot;&gt;
      &lt;div&gt;Retour d'expèrience: permets aux utilisateurs de percevoir clairement leur opérations par le biais d'animations et d'effets interactifs.&lt;/div&gt;
      &lt;div&gt;Retour visuel: reflète l'état actuel de la page via le réarrangement ou la mise à jour des éléments.&lt;/div&gt;
  &lt;/el-collapse-item&gt;
  &lt;el-collapse-item title=&quot;Efficacité&quot; name=&quot;3&quot;&gt;
      &lt;div&gt;Simplifier le processus: garde chaque opération simple et intuitive.;&lt;/div&gt;
      &lt;div&gt;Clair et défini: énonce clairement ses intentions afin que l'utilisateur puisse comprendre et prendre une décision rapidement;&lt;/div&gt;
      &lt;div&gt;Facile à identifier: l'interface devrait être simple et facile d'accès, afin que les utilisateurs n'ai pas d'efforts de mémorisation à faire.&lt;/div&gt;
  &lt;/el-collapse-item&gt;
  &lt;el-collapse-item title=&quot;Controllabilité&quot; name=&quot;4&quot;&gt;
      &lt;div&gt;Prise de décision: possibilité de donner des conseils sur les opérations, mais ne jamais prendre de décisions à la place des utilisateurs;&lt;/div&gt;
      &lt;div&gt;Contrôle des conséquences: les utilisateurs devraient pouvoir contrôler l'exécution de leurs opérations, y compris l'annulation et la suppression des opérations courantes.&lt;/div&gt;
  &lt;/el-collapse-item&gt;
&lt;/el-collapse&gt;
</code></pre></template></demo-block><h3 id="attributs-de-collapse"><a class="header-anchor" href="#attributs-de-collapse">¶</a> Attributs de Collapse</h3>
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
<td>value / v-model</td>
<td>Le panneau actuellement activé.</td>
<td>string (en mode accordéon) / array (en mode normal)</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>accordion</td>
<td>Active le mode accordéon.</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
</tbody>
</table>
<h3 id="evenements-de-collapse"><a class="header-anchor" href="#evenements-de-collapse">¶</a> Évènements de Collapse</h3>
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
<td>change</td>
<td>Se déclenche quand un panneau est activé / désactivé.</td>
<td>(activeNames: array (en mode normal) / string (en mode accordéon))</td>
</tr>
</tbody>
</table>
<h3 id="attributs-de-collapse-item"><a class="header-anchor" href="#attributs-de-collapse-item">¶</a> Attributs de Collapse-Item</h3>
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
<td>name</td>
<td>Identifiant unique du panneau.</td>
<td>string/number</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>title</td>
<td>Titre du panneau.</td>
<td>string</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>disabled</td>
<td>Désactive le panneau.</td>
<td>boolean</td>
<td>—</td>
<td>—</td>
</tr>
</tbody>
</table>
