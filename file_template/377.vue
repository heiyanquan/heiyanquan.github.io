<h2 id="timeline"><a class="header-anchor" href="#timeline">¶</a> Timeline</h2>
<p>Affiche une suite d'évènements dans un ordre chronologique.</p>
<h3 id="usage"><a class="header-anchor" href="#usage">¶</a> Usage</h3>
<p>La timeline peut être divisée en plusieurs activités en ordre ascendant ou descendant. Les timestamps sont des caractéristiques importantes qui les distinguent des autres composants. Notez la différence avec Steps.</p>
<demo-block>
        
        <template slot="source"><element-demo0 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;div class=&quot;block&quot;&gt;
  &lt;div class=&quot;radio&quot;&gt;
    Order:
    &lt;el-radio-group v-model=&quot;reverse&quot;&gt;
      &lt;el-radio :label=&quot;true&quot;&gt;Descendant&lt;/el-radio&gt;
      &lt;el-radio :label=&quot;false&quot;&gt;Ascendant&lt;/el-radio&gt;
    &lt;/el-radio-group&gt;
  &lt;/div&gt;

  &lt;el-timeline :reverse=&quot;reverse&quot;&gt;
    &lt;el-timeline-item
      v-for=&quot;(activity, index) in activities&quot;
      :key=&quot;index&quot;
      :timestamp=&quot;activity.timestamp&quot;&gt;
      {{activity.content}}
    &lt;/el-timeline-item&gt;
  &lt;/el-timeline&gt;
&lt;/div&gt;

&lt;script&gt;
  export default {
    data() {
      return {
        reverse: true,
        activities: [{
          content: 'Début de l\'évènement',
          timestamp: '2018-04-15'
        }, {
          content: 'Approuvé',
          timestamp: '2018-04-13'
        }, {
          content: 'Succès',
          timestamp: '2018-04-11'
        }]
      };
    }
  };
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="noeud-personnalise"><a class="header-anchor" href="#noeud-personnalise">¶</a> Noeud personnalisé</h3>
<p>Vous pouvez personnaliser la taille, la couleur et les icônes de chaque Noeud.</p>
<demo-block>
        
        <template slot="source"><element-demo1 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;div class=&quot;block&quot;&gt;
  &lt;el-timeline&gt;
    &lt;el-timeline-item
      v-for=&quot;(activity, index) in activities&quot;
      :key=&quot;index&quot;
      :icon=&quot;activity.icon&quot;
      :type=&quot;activity.type&quot;
      :color=&quot;activity.color&quot;
      :size=&quot;activity.size&quot;
      :timestamp=&quot;activity.timestamp&quot;&gt;
      {{activity.content}}
    &lt;/el-timeline-item&gt;
  &lt;/el-timeline&gt;
&lt;/div&gt;

&lt;script&gt;
  export default {
    data() {
      return {
        activities: [{
          content: 'Icône',
          timestamp: '2018-04-12 20:46',
          size: 'large',
          type: 'primary',
          icon: 'el-icon-more'
        }, {
          content: 'Couleur',
          timestamp: '2018-04-03 20:46',
          color: '#0bbd87'
        }, {
          content: 'Taille',
          timestamp: '2018-04-03 20:46',
          size: 'large'
        }, {
          content: 'Défaut',
          timestamp: '2018-04-03 20:46'
        }]
      };
    }
  };
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="timestamp-personnalise"><a class="header-anchor" href="#timestamp-personnalise">¶</a> Timestamp personnalisé</h3>
<p>Le timestamp peut être placé au-dessus du contenu lorsque celui-ci est trop haut.</p>
<demo-block>
        
        <template slot="source"><element-demo2 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;div class=&quot;block&quot;&gt;
  &lt;el-timeline&gt;
    &lt;el-timeline-item timestamp=&quot;2018/4/12&quot; placement=&quot;top&quot;&gt;
      &lt;el-card&gt;
        &lt;h4&gt;Mise à jour du template GitHub&lt;/h4&gt;
        &lt;p&gt;Commit de Tom le 2018/4/12 20:46&lt;/p&gt;
      &lt;/el-card&gt;
    &lt;/el-timeline-item&gt;
    &lt;el-timeline-item timestamp=&quot;2018/4/3&quot; placement=&quot;top&quot;&gt;
      &lt;el-card&gt;
        &lt;h4&gt;Mise à jour du template GitHub&lt;/h4&gt;
        &lt;p&gt;Commit de Tom le 2018/4/3 20:46&lt;/p&gt;
      &lt;/el-card&gt;
    &lt;/el-timeline-item&gt;
    &lt;el-timeline-item timestamp=&quot;2018/4/2&quot; placement=&quot;top&quot;&gt;
      &lt;el-card&gt;
        &lt;h4&gt;Mise à jour du template GitHub&lt;/h4&gt;
        &lt;p&gt;Commit de Tom le 2018/4/2 20:46&lt;/p&gt;
      &lt;/el-card&gt;
    &lt;/el-timeline-item&gt;
  &lt;/el-timeline&gt;
&lt;/div&gt;
</code></pre></template></demo-block><h3 id="attributs-de-timeline"><a class="header-anchor" href="#attributs-de-timeline">¶</a> Attributs de Timeline</h3>
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
<td>reverse</td>
<td>Si l'ordre chronologique est ascendant ou descendant, le défaut étant ascendant.</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
</tbody>
</table>
<h3 id="attribut-de-timeline-item"><a class="header-anchor" href="#attribut-de-timeline-item">¶</a> Attribut de Timeline-item</h3>
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
<td>timestamp</td>
<td>Le contenu du timestamp.</td>
<td>string</td>
<td>-</td>
<td>—</td>
</tr>
<tr>
<td>hide-timestamp</td>
<td>Si le timestamp doit être affiché.</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>placement</td>
<td>La position du timestamp.</td>
<td>string</td>
<td>top / bottom</td>
<td>bottom</td>
</tr>
<tr>
<td>type</td>
<td>Le type de noeud.</td>
<td>string</td>
<td>primary / success / warning / danger / info</td>
<td>-</td>
</tr>
<tr>
<td>color</td>
<td>La couleur de fond du noeud.</td>
<td>string</td>
<td>hsl / hsv / hex / rgb</td>
<td>-</td>
</tr>
<tr>
<td>size</td>
<td>La taille du noeud</td>
<td>string</td>
<td>normal / large</td>
<td>normal</td>
</tr>
<tr>
<td>icon</td>
<td>Le nom de classe de l'icône.</td>
<td>string</td>
<td>—</td>
<td>-</td>
</tr>
</tbody>
</table>
<h3 id="slots-de-timeline-item"><a class="header-anchor" href="#slots-de-timeline-item">¶</a> Slots de Timeline-Item</h3>
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
<td>Contenu personnalisé pour le timeline-item.</td>
</tr>
<tr>
<td>dot</td>
<td>Noeud personnalisé.</td>
</tr>
</tbody>
</table>
