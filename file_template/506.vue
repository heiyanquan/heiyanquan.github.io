<h2 id="checkbox"><a class="header-anchor" href="#checkbox">¶</a> Checkbox</h2>
<p>Un groupe d'options à choix multiples.</p>
<h3 id="usage"><a class="header-anchor" href="#usage">¶</a> Usage</h3>
<p>Checkbox peut être utilisé seul pour switcher entre deux états.</p>
<demo-block>
        <div><p>Définissez <code>v-model</code> (variable liée) dans <code>el-checkbox</code>. La valeur par défaut est un <code>Boolean</code> pour une seule <code>checkbox</code> et devient <code>true</code> quand elle est sélectionnée. Le contenu à l'intérieur de la balise <code>el-checkbox</code> deviendra le label du bouton de la checkbox.</p>
</div>
        <template slot="source"><element-demo0 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;template&gt;
  &lt;!-- `checked` should be true or false --&gt;
  &lt;el-checkbox v-model=&quot;checked&quot;&gt;Option&lt;/el-checkbox&gt;
&lt;/template&gt;
&lt;script&gt;
  export default {
    data() {
      return {
        checked: true
      };
    }
  };
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="desactivation"><a class="header-anchor" href="#desactivation">¶</a> Désactivation</h3>
<p>La checkbox peut être désactivée.</p>
<demo-block>
        <div><p>Ajouter l'attribut <code>disabled</code>.</p>
</div>
        <template slot="source"><element-demo1 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;template&gt;
  &lt;el-checkbox v-model=&quot;checked1&quot; disabled&gt;Option&lt;/el-checkbox&gt;
  &lt;el-checkbox v-model=&quot;checked2&quot; disabled&gt;Option&lt;/el-checkbox&gt;
&lt;/template&gt;
&lt;script&gt;
  export default {
    data() {
      return {
        checked1: false,
        checked2: true
      };
    }
  };
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="checkbox-groupees"><a class="header-anchor" href="#checkbox-groupees">¶</a> Checkbox groupées</h3>
<p>Utile pour grouper des checkbox, indiquant si une option est sélectionnée en vérifiant la case en question.</p>
<demo-block>
        <div><p>L'élément <code>checkbox-group</code> peut gérer plusieurs checkbox d'un groupe en utilisant <code>v-model</code>, qui sera un <code>Array</code>. Dans l'élément <code>el-checkbox</code>, <code>label</code> est la valeur de la checkbox. S'il n'y a aucun contenu dans la balise, <code>label</code> sera également la description de la checkbox. <code>label</code> correspond aussi aux valeurs des éléments dans le tableau. Il est sélectionné si la valeur spécifiée existe dans le tableau, et vice-versa.</p>
</div>
        <template slot="source"><element-demo2 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;template&gt;
  &lt;el-checkbox-group v-model=&quot;checkList&quot;&gt;
    &lt;el-checkbox label=&quot;Option A&quot;&gt;&lt;/el-checkbox&gt;
    &lt;el-checkbox label=&quot;Option B&quot;&gt;&lt;/el-checkbox&gt;
    &lt;el-checkbox label=&quot;Option C&quot;&gt;&lt;/el-checkbox&gt;
    &lt;el-checkbox label=&quot;Désactivée&quot; disabled&gt;&lt;/el-checkbox&gt;
    &lt;el-checkbox label=&quot;Sélectionnée et désactivée&quot; disabled&gt;&lt;/el-checkbox&gt;
  &lt;/el-checkbox-group&gt;
&lt;/template&gt;

&lt;script&gt;
  export default {
    data () {
      return {
        checkList: ['selected and disabled','Option A']
      };
    }
  };
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="indeterminee"><a class="header-anchor" href="#indeterminee">¶</a> Indéterminée</h3>
<p>La propriété <code>indeterminate</code> permet de réaliser un effet &quot;Sélectionner tout&quot;.</p>
<demo-block>
        
        <template slot="source"><element-demo3 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;template&gt;
  &lt;el-checkbox :indeterminate=&quot;isIndeterminate&quot; v-model=&quot;checkAll&quot; @change=&quot;handleCheckAllChange&quot;&gt;Sélectionner tout&lt;/el-checkbox&gt;
  &lt;div style=&quot;margin: 15px 0;&quot;&gt;&lt;/div&gt;
  &lt;el-checkbox-group v-model=&quot;checkedCities&quot; @change=&quot;handleCheckedCitiesChange&quot;&gt;
    &lt;el-checkbox v-for=&quot;city in cities&quot; :label=&quot;city&quot; :key=&quot;city&quot;&gt;{{city}}&lt;/el-checkbox&gt;
  &lt;/el-checkbox-group&gt;
&lt;/template&gt;
&lt;script&gt;
  const cityOptions = ['Shanghai', 'Beijing', 'Guangzhou', 'Shenzhen'];
  export default {
    data() {
      return {
        checkAll: false,
        checkedCities: ['Shanghai', 'Beijing'],
        cities: cityOptions,
        isIndeterminate: true
      };
    },
    methods: {
      handleCheckAllChange(val) {
        this.checkedCities = val ? cityOptions : [];
        this.isIndeterminate = false;
      },
      handleCheckedCitiesChange(value) {
        let checkedCount = value.length;
        this.checkAll = checkedCount === this.cities.length;
        this.isIndeterminate = checkedCount &gt; 0 &amp;&amp; checkedCount &lt; this.cities.length;
      }
    }
  };
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="minimum-maximum-d-elements-selectionnes"><a class="header-anchor" href="#minimum-maximum-d-elements-selectionnes">¶</a> Minimum / Maximum d'éléments sélectionnés</h3>
<p>Les propriétés <code>min</code> et <code>max</code> permettent de limiter la quantité d'éléments sélectionnés.</p>
<demo-block>
        
        <template slot="source"><element-demo4 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;template&gt;
  &lt;el-checkbox-group
    v-model=&quot;checkedCities&quot;
    :min=&quot;1&quot;
    :max=&quot;2&quot;&gt;
    &lt;el-checkbox v-for=&quot;city in cities&quot; :label=&quot;city&quot; :key=&quot;city&quot;&gt;{{city}}&lt;/el-checkbox&gt;
  &lt;/el-checkbox-group&gt;
&lt;/template&gt;
&lt;script&gt;
  const cityOptions = ['Shanghai', 'Beijing', 'Guangzhou', 'Shenzhen'];
  export default {
    data() {
      return {
        checkedCities: ['Shanghai', 'Beijing'],
        cities: cityOptions
      };
    }
  };
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="style-bouton"><a class="header-anchor" href="#style-bouton">¶</a> Style bouton</h3>
<p>Des checkbox avec une apparence de bouton.</p>
<demo-block>
        <div><p>Il vous suffit de changer <code>el-checkbox</code> en <code>el-checkbox-button</code>. Il existe aussi un attribut <code>size</code>.</p>
</div>
        <template slot="source"><element-demo5 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;template&gt;
  &lt;div&gt;
    &lt;el-checkbox-group v-model=&quot;checkboxGroup1&quot;&gt;
      &lt;el-checkbox-button v-for=&quot;city in cities&quot; :label=&quot;city&quot; :key=&quot;city&quot;&gt;{{city}}&lt;/el-checkbox-button&gt;
    &lt;/el-checkbox-group&gt;
  &lt;/div&gt;
  &lt;div style=&quot;margin-top: 20px&quot;&gt;
    &lt;el-checkbox-group v-model=&quot;checkboxGroup2&quot; size=&quot;medium&quot;&gt;
      &lt;el-checkbox-button v-for=&quot;city in cities&quot; :label=&quot;city&quot; :key=&quot;city&quot;&gt;{{city}}&lt;/el-checkbox-button&gt;
    &lt;/el-checkbox-group&gt;
  &lt;/div&gt;
  &lt;div style=&quot;margin-top: 20px&quot;&gt;
    &lt;el-checkbox-group v-model=&quot;checkboxGroup3&quot; size=&quot;small&quot;&gt;
      &lt;el-checkbox-button v-for=&quot;city in cities&quot; :label=&quot;city&quot; :disabled=&quot;city === 'Beijing'&quot; :key=&quot;city&quot;&gt;{{city}}&lt;/el-checkbox-button&gt;
    &lt;/el-checkbox-group&gt;
  &lt;/div&gt;
  &lt;div style=&quot;margin-top: 20px&quot;&gt;
    &lt;el-checkbox-group v-model=&quot;checkboxGroup4&quot; size=&quot;mini&quot; disabled&gt;
      &lt;el-checkbox-button v-for=&quot;city in cities&quot; :label=&quot;city&quot; :key=&quot;city&quot;&gt;{{city}}&lt;/el-checkbox-button&gt;
    &lt;/el-checkbox-group&gt;
  &lt;/div&gt;
&lt;/template&gt;
&lt;script&gt;
  const cityOptions = ['Shanghai', 'Beijing', 'Guangzhou', 'Shenzhen'];

  export default {
    data () {
      return {
        checkboxGroup1: ['Shanghai'],
        checkboxGroup2: ['Shanghai'],
        checkboxGroup3: ['Shanghai'],
        checkboxGroup4: ['Shanghai'],
        cities: cityOptions
      };
    }
  }
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="bordures"><a class="header-anchor" href="#bordures">¶</a> Bordures</h3>
<demo-block>
        <div><p>L'attribut <code>border</code> ajoute une bordure aux checkbox.</p>
</div>
        <template slot="source"><element-demo6 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;template&gt;
  &lt;div&gt;
    &lt;el-checkbox v-model=&quot;checked1&quot; label=&quot;Option1&quot; border&gt;&lt;/el-checkbox&gt;
    &lt;el-checkbox v-model=&quot;checked2&quot; label=&quot;Option2&quot; border&gt;&lt;/el-checkbox&gt;
  &lt;/div&gt;
  &lt;div style=&quot;margin-top: 20px&quot;&gt;
    &lt;el-checkbox v-model=&quot;checked3&quot; label=&quot;Option1&quot; border size=&quot;medium&quot;&gt;&lt;/el-checkbox&gt;
    &lt;el-checkbox v-model=&quot;checked4&quot; label=&quot;Option2&quot; border size=&quot;medium&quot;&gt;&lt;/el-checkbox&gt;
  &lt;/div&gt;
  &lt;div style=&quot;margin-top: 20px&quot;&gt;
    &lt;el-checkbox-group v-model=&quot;checkboxGroup1&quot; size=&quot;small&quot;&gt;
      &lt;el-checkbox label=&quot;Option1&quot; border&gt;&lt;/el-checkbox&gt;
      &lt;el-checkbox label=&quot;Option2&quot; border disabled&gt;&lt;/el-checkbox&gt;
    &lt;/el-checkbox-group&gt;
  &lt;/div&gt;
  &lt;div style=&quot;margin-top: 20px&quot;&gt;
    &lt;el-checkbox-group v-model=&quot;checkboxGroup2&quot; size=&quot;mini&quot; disabled&gt;
      &lt;el-checkbox label=&quot;Option1&quot; border&gt;&lt;/el-checkbox&gt;
      &lt;el-checkbox label=&quot;Option2&quot; border&gt;&lt;/el-checkbox&gt;
    &lt;/el-checkbox-group&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
  export default {
    data () {
      return {
        checked1: true,
        checked2: false,
        checked3: false,
        checked4: true,
        checkboxGroup1: [],
        checkboxGroup2: []
      };
    }
  }
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="attributs-checkbox"><a class="header-anchor" href="#attributs-checkbox">¶</a> Attributs Checkbox</h3>
<table>
<thead>
<tr>
<th>Attribut</th>
<th>Description</th>
<th>Type</th>
<th>Options</th>
<th>Défaut</th>
</tr>
</thead>
<tbody>
<tr>
<td>value / v-model</td>
<td>La valeur liée.</td>
<td>string / number / boolean</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>label</td>
<td>Valeur de la checkbox quand utilisée dans un <code>checkbox-group</code>.</td>
<td>string / number / boolean</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>true-label</td>
<td>Valeur de la checkbox si cochée.</td>
<td>string / number</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>false-label</td>
<td>Valeur de la checkbox si non cochée.</td>
<td>string / number</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>disabled</td>
<td>Désactive la checkbox.</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>border</td>
<td>Ajoute une bordure à la checkbox.</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>size</td>
<td>taille de la checkbox, ne marche que si <code>border</code> est 'true'</td>
<td>string</td>
<td>medium / small / mini</td>
<td>—</td>
</tr>
<tr>
<td>name</td>
<td>Attribut 'name' natif.</td>
<td>string</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>checked</td>
<td>Si la checkbox est cochée.</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>indeterminate</td>
<td>Identique à <code>indeterminate</code> dans les checkbox natives.</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
</tbody>
</table>
<h3 id="evenements-checkbox"><a class="header-anchor" href="#evenements-checkbox">¶</a> Évènements Checkbox</h3>
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
<td>La nouvelle valeur</td>
</tr>
</tbody>
</table>
<h3 id="attributs-checkbox-group"><a class="header-anchor" href="#attributs-checkbox-group">¶</a> Attributs Checkbox-group</h3>
<table>
<thead>
<tr>
<th>Attribut</th>
<th>Description</th>
<th>Type</th>
<th>Options</th>
<th>Défaut</th>
</tr>
</thead>
<tbody>
<tr>
<td>value / v-model</td>
<td>La valeur liée.</td>
<td>array</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>size</td>
<td>Taille des checkbox-boutons ou des checkbox avec bordure.</td>
<td>string</td>
<td>medium / small / mini</td>
<td>—</td>
</tr>
<tr>
<td>disabled</td>
<td>Si les checkbox imbriquées sont désactivées.</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>min</td>
<td>Nombre minimum de checkbox cochées.</td>
<td>number</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>max</td>
<td>Nombre maximum de checkbox cochées.</td>
<td>number</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>text-color</td>
<td>Couleur de police quand le bouton est actif.</td>
<td>string</td>
<td>—</td>
<td>#ffffff</td>
</tr>
<tr>
<td>fill</td>
<td>Couleur de la bordure et du fond quand le bouton est actif.</td>
<td>string</td>
<td>—</td>
<td>#409EFF</td>
</tr>
</tbody>
</table>
<h3 id="evenements-checkbox-group"><a class="header-anchor" href="#evenements-checkbox-group">¶</a> Évènements Checkbox-group</h3>
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
<td>La nouvelle valeur</td>
</tr>
</tbody>
</table>
<h3 id="attributs-checkbox-button"><a class="header-anchor" href="#attributs-checkbox-button">¶</a> Attributs Checkbox-button</h3>
<table>
<thead>
<tr>
<th>Attribut</th>
<th>Description</th>
<th>Type</th>
<th>Options</th>
<th>Défaut</th>
</tr>
</thead>
<tbody>
<tr>
<td>label</td>
<td>Valeur de la checkbox quand utilisée dans un <code>checkbox-group</code></td>
<td>string / number / boolean</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>true-label</td>
<td>Valeur de la checkbox si cochée.</td>
<td>string / number</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>false-label</td>
<td>Valeur de la checkbox si non cochée.</td>
<td>string / number</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>disabled</td>
<td>Si la checkbox est désactivée.</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>name</td>
<td>Attribut 'name' natif.</td>
<td>string</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>checked</td>
<td>Si la checkbox est cochée.</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
</tbody>
</table>
