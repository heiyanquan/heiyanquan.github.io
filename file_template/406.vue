<h2 id="rate"><a class="header-anchor" href="#rate">¶</a> Rate</h2>
<p>Utilisé pour donner une note sur cinq étoiles.</p>
<h3 id="usage"><a class="header-anchor" href="#usage">¶</a> Usage</h3>
<demo-block>
        <div><p>Rate divise les scores en trois niveaux et ces niveaux peuvent être distingués en utilisant différentes couleurs de fond. Par défaut ces couleurs sont identiques, mais vous pouvez affecter un tableau des codes couleur à l'attribut <code>colors</code>, ainsi que les deux seuils via <code>low-threshold</code> et <code>high-threshold</code>. Vous pouvez aussi les affecter avec un objet dont la clé est le seuil et la valeur est la couleur correspondante.</p>
</div>
        <template slot="source"><element-demo0 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;div class=&quot;block&quot;&gt;
  &lt;span class=&quot;demonstration&quot;&gt;Défaut&lt;/span&gt;
  &lt;el-rate v-model=&quot;value1&quot;&gt;&lt;/el-rate&gt;
&lt;/div&gt;
&lt;div class=&quot;block&quot;&gt;
  &lt;span class=&quot;demonstration&quot;&gt;Couleurs pour chaque niveau&lt;/span&gt;
  &lt;el-rate
    v-model=&quot;value2&quot;
    :colors=&quot;colors&quot;&gt;
  &lt;/el-rate&gt;
&lt;/div&gt;

&lt;script&gt;
  export default {
    data() {
      return {
        value1: null,
        value2: null,
        colors: ['#99A9BF', '#F7BA2A', '#FF9900'] // same as { 2: '#99A9BF', 4: { value: '#F7BA2A', excluded: true }, 5: '#FF9900' }
      }
    }
  }
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="avec-du-texte"><a class="header-anchor" href="#avec-du-texte">¶</a> Avec du texte</h3>
<p>Vous pouvez ajouter du texte à chaque score.</p>
<demo-block>
        <div><p>Ajoutez l'attribut <code>show-text</code> pour afficher du texte à droite des étoiles. Vous pouvez choisir les textes avec l'attribut <code>texts</code>. C'est un tableau dont la taille doit être égale au score max <code>max</code>.</p>
</div>
        <template slot="source"><element-demo1 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;el-rate
  v-model=&quot;value&quot;
  :texts=&quot;['oops', 'disappointed', 'normal', 'good', 'great']&quot;
  show-text&gt;
&lt;/el-rate&gt;

&lt;script&gt;
  export default {
    data() {
      return {
        value: null
      }
    }
  }
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="plus-d-icones"><a class="header-anchor" href="#plus-d-icones">¶</a> Plus d'icônes</h3>
<p>Vous pouvez utiliser différentes icônes pour chaque</p>
<demo-block>
        <div><p>Vous pouvez personnaliser les icônes en passant à <code>icon-classes</code> un tableau avec trois éléments ou un objet dont la clé est le seuil entre deux niveaux et la valeur la classe d'icônes correspondante. Dans cet exemple, nous utilisons aussi <code>void-icon-class</code> qui permet de choisir d'autres valeurs non sélectionnées.</p>
</div>
        <template slot="source"><element-demo2 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;el-rate
  v-model=&quot;value&quot;
  :icon-classes=&quot;iconClasses&quot;
  void-icon-class=&quot;icon-rate-face-off&quot;
  :colors=&quot;['#99A9BF', '#F7BA2A', '#FF9900']&quot;&gt;
&lt;/el-rate&gt;

&lt;script&gt;
  export default {
    data() {
      return {
        value: null,
        iconClasses: ['icon-rate-face-1', 'icon-rate-face-2', 'icon-rate-face-3'] // same as { 2: 'icon-rate-face-1', 4: { value: 'icon-rate-face-2', excluded: true }, 5: 'icon-rate-face-3' }
      }
  }
  }
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="lecture-seule"><a class="header-anchor" href="#lecture-seule">¶</a> Lecture seule</h3>
<p>Le score peut être en lecture seule. Les demi-étoiles sont supportées.</p>
<demo-block>
        <div><p>Utilisez <code>disabled</code> pour mettre le composant en lecture seule. Ajoutez <code>show-score</code> pour afficher le score à droite des étoiles. De plus, vous pouvez utiliser <code>score-template</code> pour déterminer un template. Il doit contenir <code>{value}</code> qui sera remplacé par la valeur du score.</p>
</div>
        <template slot="source"><element-demo3 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;el-rate
  v-model=&quot;value&quot;
  disabled
  show-score
  text-color=&quot;#ff9900&quot;
  score-template=&quot;{value} points&quot;&gt;
&lt;/el-rate&gt;

&lt;script&gt;
  export default {
    data() {
      return {
        value: 3.7
      }
    }
  }
&lt;/script&gt;
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
<td>value / v-model</td>
<td>La valeur liée.</td>
<td>number</td>
<td>—</td>
<td>0</td>
</tr>
<tr>
<td>max</td>
<td>Score maximum.</td>
<td>number</td>
<td>—</td>
<td>5</td>
</tr>
<tr>
<td>disabled</td>
<td>Si le score est en lecture seule.</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>allow-half</td>
<td>Si les demi-étoiles sont autorisées.</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>low-threshold</td>
<td>Seuil entre les niveaux bas et moyen. La valeur sera incluse dans le niveau bas.</td>
<td>number</td>
<td>—</td>
<td>2</td>
</tr>
<tr>
<td>high-threshold</td>
<td>Seuil entre les niveaux moyen et haut. La valeur sera incluse entre dans le niveau haut.</td>
<td>number</td>
<td>—</td>
<td>4</td>
</tr>
<tr>
<td>colors</td>
<td>colors for icons. Si c'est un array, il doit avoir 3 élements, chacun correspondant à un niveau. Si c'est un objet, la clé est le seuil entre deux niveaux et la valeur est la couleur correspondante.</td>
<td>array/object</td>
<td>—</td>
<td>['#F7BA2A', '#F7BA2A', '#F7BA2A']</td>
</tr>
<tr>
<td>void-color</td>
<td>Couleur des icônes non sélectionnées.</td>
<td>string</td>
<td>—</td>
<td>#C6D1DE</td>
</tr>
<tr>
<td>disabled-void-color</td>
<td>Couleur des icônes non sélectionnées en lecture seule.</td>
<td>string</td>
<td>—</td>
<td>#EFF2F7</td>
</tr>
<tr>
<td>icon-classes</td>
<td>Noms de classe des icônes. Si c'est un array, il doit avoir 3 élements, chacun correspondant à un niveau. Si c'est un objet, la clé est le seuil entre deux niveaux et la valeur est le nom de classe de l'icône.</td>
<td>array/object</td>
<td>—</td>
<td>['el-icon-star-on', 'el-icon-star-on','el-icon-star-on']</td>
</tr>
<tr>
<td>void-icon-class</td>
<td>Classe des icônes non sélectionnées.</td>
<td>string</td>
<td>—</td>
<td>el-icon-star-off</td>
</tr>
<tr>
<td>disabled-void-icon-class</td>
<td>Classe des icônes non sélectionnées en lecture seule.</td>
<td>string</td>
<td>—</td>
<td>el-icon-star-on</td>
</tr>
<tr>
<td>show-text</td>
<td>Si du texte doit apparaître à droite des étoiles.</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>show-score</td>
<td>Si le score doit apparaître. Incompatible avec show-text.</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>text-color</td>
<td>Couleur du texte.</td>
<td>string</td>
<td>—</td>
<td>#1F2D3D</td>
</tr>
<tr>
<td>texts</td>
<td>Label des différents scores.</td>
<td>array</td>
<td>—</td>
<td>['极差', '失望', '一般', '满意', '惊喜']</td>
</tr>
<tr>
<td>score-template</td>
<td>Template du score.</td>
<td>string</td>
<td>—</td>
<td>{value}</td>
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
<td>change</td>
<td>Se déclenche quand la valeur change.</td>
<td>Valeur après le changement.</td>
</tr>
</tbody>
</table>
