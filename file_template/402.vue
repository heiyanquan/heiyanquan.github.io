<h2 id="slider"><a class="header-anchor" href="#slider">¶</a> Slider</h2>
<p>Permet de sélectionner une valeur au sein d'un intervalle.</p>
<h3 id="usage"><a class="header-anchor" href="#usage">¶</a> Usage</h3>
<p>La valeur est affichée lorsque le slider est utilisé.</p>
<demo-block>
        <div><p>Vous pouvez décider de la valeur initiale en initialisant la variable liée.</p>
</div>
        <template slot="source"><element-demo0 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;template&gt;
  &lt;div class=&quot;block&quot;&gt;
    &lt;span class=&quot;demonstration&quot;&gt;Valeur par défaut&lt;/span&gt;
    &lt;el-slider v-model=&quot;value1&quot;&gt;&lt;/el-slider&gt;
  &lt;/div&gt;
  &lt;div class=&quot;block&quot;&gt;
    &lt;span class=&quot;demonstration&quot;&gt;Valeur initiale personnalisée&lt;/span&gt;
    &lt;el-slider v-model=&quot;value2&quot;&gt;&lt;/el-slider&gt;
  &lt;/div&gt;
  &lt;div class=&quot;block&quot;&gt;
    &lt;span class=&quot;demonstration&quot;&gt;Pas de tooltip&lt;/span&gt;
    &lt;el-slider v-model=&quot;value3&quot; :show-tooltip=&quot;false&quot;&gt;&lt;/el-slider&gt;
  &lt;/div&gt;
  &lt;div class=&quot;block&quot;&gt;
    &lt;span class=&quot;demonstration&quot;&gt;Tooltip formatté&lt;/span&gt;
    &lt;el-slider v-model=&quot;value4&quot; :format-tooltip=&quot;formatTooltip&quot;&gt;&lt;/el-slider&gt;
  &lt;/div&gt;
  &lt;div class=&quot;block&quot;&gt;
    &lt;span class=&quot;demonstration&quot;&gt;Désactivé&lt;/span&gt;
    &lt;el-slider v-model=&quot;value5&quot; disabled&gt;&lt;/el-slider&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
  export default {
    data() {
      return {
        value1: 0,
        value2: 50,
        value3: 36,
        value4: 48,
        value5: 42
      }
    },
    methods: {
      formatTooltip(val) {
        return val / 100;
      }
    }
  }
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="valeurs-discretes"><a class="header-anchor" href="#valeurs-discretes">¶</a> Valeurs discrètes</h3>
<p>Les valeurs peuvent être discrètes.</p>
<demo-block>
        <div><p>Réglez le pas avec l'attribut <code>step</code>. Vous pouvez affiché chaque point grâce à <code>show-stops</code>.</p>
</div>
        <template slot="source"><element-demo1 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;template&gt;
  &lt;div class=&quot;block&quot;&gt;
    &lt;span class=&quot;demonstration&quot;&gt;Points absents&lt;/span&gt;
    &lt;el-slider
      v-model=&quot;value1&quot;
      :step=&quot;10&quot;&gt;
    &lt;/el-slider&gt;
  &lt;/div&gt;
  &lt;div class=&quot;block&quot;&gt;
    &lt;span class=&quot;demonstration&quot;&gt;Points affichés&lt;/span&gt;
    &lt;el-slider
      v-model=&quot;value2&quot;
      :step=&quot;10&quot;
      show-stops&gt;
    &lt;/el-slider&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
  export default {
    data() {
      return {
        value1: 0,
        value2: 0
      }
    }
  }
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="slider-avec-champ-d-input"><a class="header-anchor" href="#slider-avec-champ-d-input">¶</a> Slider avec champ d'input</h3>
<p>Vous pouvez afficher un champ d'input synchronisé pour entrer une valeur précise rapidement.</p>
<demo-block>
        <div><p>Ajoutez l'attribut <code>show-input</code> pour ajouter le champ à droite du Slider.</p>
</div>
        <template slot="source"><element-demo2 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;template&gt;
  &lt;div class=&quot;block&quot;&gt;
    &lt;el-slider
      v-model=&quot;value&quot;
      show-input&gt;
    &lt;/el-slider&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
  export default {
    data() {
      return {
        value: 0
      }
    }
  }
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="selectionner-une-intervalle"><a class="header-anchor" href="#selectionner-une-intervalle">¶</a> Sélectionner une intervalle</h3>
<p>Vous pouvez sélectionner des intervalles de valeurs au lieu d'une valeur unique.</p>
<demo-block>
        <div><p>Ajouter l'attribut <code>range</code> active le mode intervalle, ou la valeur sera maintenant un tableau contenant les deux valeurs de l'intervalle.</p>
</div>
        <template slot="source"><element-demo3 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;template&gt;
  &lt;div class=&quot;block&quot;&gt;
    &lt;el-slider
      v-model=&quot;value&quot;
      range
      show-stops
      :max=&quot;10&quot;&gt;
    &lt;/el-slider&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
  export default {
    data() {
      return {
        value: [4, 8]
      }
    }
  }
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="mode-vertical"><a class="header-anchor" href="#mode-vertical">¶</a> Mode vertical</h3>
<demo-block>
        <div><p>Ajoutez l'attribut <code>vertical</code> active le mode vertical. Dans ce mode, l'attribut <code>height</code> est requis.</p>
</div>
        <template slot="source"><element-demo4 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;template&gt;
  &lt;div class=&quot;block&quot;&gt;
    &lt;el-slider
      v-model=&quot;value&quot;
      vertical
      height=&quot;200px&quot;&gt;
    &lt;/el-slider&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
  export default {
    data() {
      return {
        value: 0
      }
    }
  }
&lt;/script&gt;
</code></pre></template></demo-block><demo-block>
        <div><p>Vous pouvez afficher des marqueurs sur le slider grâce à l'attribut <code>marks</code>.</p>
</div>
        <template slot="source"><element-demo5 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;template&gt;
  &lt;div class=&quot;block&quot;&gt;
    &lt;el-slider
      v-model=&quot;value&quot;
      range
      :marks=&quot;marks&quot;&gt;
    &lt;/el-slider&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
  export default {
    data() {
      return {
        value: [30, 60],
        marks: {
          0: '0°C',
          8: '8°C',
          37: '37°C',
          50: {
            style: {
              color: '#1989FA'
            },
            label: this.$createElement('strong', '50%')
          }
        }
      }
    }
  }
&lt;/script&gt;
</code></pre></template></demo-block><h2 id="attributs"><a class="header-anchor" href="#attributs">¶</a> Attributs</h2>
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
<td>min</td>
<td>Valeur minimale.</td>
<td>number</td>
<td>—</td>
<td>0</td>
</tr>
<tr>
<td>max</td>
<td>Valeur maximale.</td>
<td>number</td>
<td>—</td>
<td>100</td>
</tr>
<tr>
<td>disabled</td>
<td>Si le Slider est désactivé.</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>step</td>
<td>La taille du pas.</td>
<td>number</td>
<td>—</td>
<td>1</td>
</tr>
<tr>
<td>show-input</td>
<td>Si une champ d'input doit être affiché, ne marche que si <code>range</code> est <code>false</code>.</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>show-input-controls</td>
<td>Si des boutons de contrôle doivent être affichés quand <code>show-input</code> est <code>true</code>.</td>
<td>boolean</td>
<td>—</td>
<td>true</td>
</tr>
<tr>
<td>input-size</td>
<td>Taille du champ d'input.</td>
<td>string</td>
<td>large / medium / small / mini</td>
<td>small</td>
</tr>
<tr>
<td>show-stops</td>
<td>Si les points de valeurs discrètes doivent être affichés.</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>show-tooltip</td>
<td>Si le tooltip doit être affiché.</td>
<td>boolean</td>
<td>—</td>
<td>true</td>
</tr>
<tr>
<td>format-tooltip</td>
<td>Format du contenu du tooltip.</td>
<td>function(value)</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>range</td>
<td>Si le mode intervalle est activé.</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>vertical</td>
<td>Si le mode vertical est activé.</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>height</td>
<td>Hauteur du Slider, requis en mode vertical.</td>
<td>string</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>label</td>
<td>Label pour les lecteurs d'écran.</td>
<td>string</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>debounce</td>
<td>Délai après écriture en millisecondes, marche quand <code>show-input</code> est <code>true</code>.</td>
<td>number</td>
<td>—</td>
<td>300</td>
</tr>
<tr>
<td>tooltip-class</td>
<td>Classe du tooltip.</td>
<td>string</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>marks</td>
<td>Marqueurs, les clés doivent être des <code>number</code> et être comprises dans l'intervalle <code>[min, max]</code>. Chaque marqueur peut avoir un style particulier.</td>
<td>object</td>
<td>—</td>
<td>—</td>
</tr>
</tbody>
</table>
<h2 id="evenements"><a class="header-anchor" href="#evenements">¶</a> Évènements</h2>
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
<td>Se déclenche quand la valeur change (si le changement est fait à la souris, se déclenche quand la souris redevient immobile).</td>
<td>La nouvelle valeur.</td>
</tr>
<tr>
<td>input</td>
<td>triggers when the data changes (It'll be emitted in real time during sliding)</td>
<td>value after changing</td>
</tr>
</tbody>
</table>
