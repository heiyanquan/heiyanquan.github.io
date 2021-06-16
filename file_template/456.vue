<h2 id="inputnumber"><a class="header-anchor" href="#inputnumber">¶</a> InputNumber</h2>
<p>Un champ d'input de valeurs numériques, avec un domaine personnalisable.</p>
<h3 id="usage"><a class="header-anchor" href="#usage">¶</a> Usage</h3>
<demo-block>
        <div><p>Liez une variable à <code>v-model</code> dans l'élément <code>&lt;el-input-number&gt;</code> et c'est tout !</p>
</div>
        <template slot="source"><element-demo0 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;template&gt;
  &lt;el-input-number v-model=&quot;num&quot; @change=&quot;handleChange&quot; :min=&quot;1&quot; :max=&quot;10&quot;&gt;&lt;/el-input-number&gt;
&lt;/template&gt;
&lt;script&gt;
  export default {
    data() {
      return {
        num: 1
      };
    },
    methods: {
      handleChange(value) {
        console.log(value)
      }
    }
  };
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="desactive"><a class="header-anchor" href="#desactive">¶</a> Désactivé</h3>
<demo-block>
        <div><p>L'attribut <code>disabled</code> accepte un <code>boolean</code> et si la valeur est <code>true</code>, le composant sera désactivé. Si vous souhaitez juste contrôler le domaine des valeurs possibles, ajoutez l'attribut <code>min</code> pour régler la valeur minimale et <code>max</code> pour la valeur maximale. Par défaut, la valeur minimale est <code>0</code>.</p>
</div>
        <template slot="source"><element-demo1 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;template&gt;
  &lt;el-input-number v-model=&quot;num&quot; :disabled=&quot;true&quot;&gt;&lt;/el-input-number&gt;
&lt;/template&gt;
&lt;script&gt;
  export default {
    data() {
      return {
        num: 1
      }
    }
  };
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="pas"><a class="header-anchor" href="#pas">¶</a> Pas</h3>
<p>Vous pouvez déterminer un pas pour le champs.</p>
<demo-block>
        <div><p>Ajoutez l'attribut <code>step</code> pour configurer le pas.</p>
</div>
        <template slot="source"><element-demo2 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;template&gt;
  &lt;el-input-number v-model=&quot;num&quot; :step=&quot;2&quot;&gt;&lt;/el-input-number&gt;
&lt;/template&gt;
&lt;script&gt;
  export default {
    data() {
      return {
        num: 5
      }
    }
  };
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="pas-strict"><a class="header-anchor" href="#pas-strict">¶</a> Pas strict</h3>
<demo-block>
        <div><p>L'attribut <code>step-strictly</code> accepte un <code>boolean</code>. Si cet attribut est <code>true</code>, la valeur de l'input ne peut être qu'un multiple de <code>step</code>.</p>
</div>
        <template slot="source"><element-demo3 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;template&gt;
  &lt;el-input-number v-model=&quot;num&quot; :step=&quot;2&quot; step-strictly&gt;&lt;/el-input-number&gt;
&lt;/template&gt;
&lt;script&gt;
  export default {
    data() {
      return {
        num: 2
      }
    }
  };
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="precision"><a class="header-anchor" href="#precision">¶</a> Précision</h3>
<demo-block>
        <div><p>Ajoutez l'attribut <code>precision</code> pour régler la précision du champs.</p>
</div>
        <template slot="source"><element-demo4 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;template&gt;
  &lt;el-input-number v-model=&quot;num&quot; :precision=&quot;2&quot; :step=&quot;0.1&quot; :max=&quot;10&quot;&gt;&lt;/el-input-number&gt;
&lt;/template&gt;
&lt;script&gt;
  export default {
    data() {
      return {
        num: 1
      }
    }
  };
&lt;/script&gt;
</code></pre></template></demo-block><div class="tip">
<p>La valeur de <code>precision</code> doit être un integer non négatif et ne doit pas être inférieure aux décimales de <code>step</code>.</p>
</div>
<h3 id="taille"><a class="header-anchor" href="#taille">¶</a> Taille</h3>
<p>Utilisez l'attribut <code>size</code> pour régler la taille avec <code>medium</code>, <code>small</code> ou <code>mini</code>.</p>
<demo-block>
        
        <template slot="source"><element-demo5 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;template&gt;
  &lt;el-input-number v-model=&quot;num1&quot;&gt;&lt;/el-input-number&gt;
    &lt;el-input-number size=&quot;medium&quot; v-model=&quot;num2&quot;&gt;&lt;/el-input-number&gt;
    &lt;el-input-number size=&quot;small&quot; v-model=&quot;num3&quot;&gt;&lt;/el-input-number&gt;
    &lt;el-input-number size=&quot;mini&quot; v-model=&quot;num4&quot;&gt;&lt;/el-input-number&gt;
&lt;/template&gt;
&lt;script&gt;
  export default {
    data() {
      return {
        num1: 1,
        num2: 1,
        num3: 1,
        num4: 1
      }
    }
  };
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="position-des-controles"><a class="header-anchor" href="#position-des-controles">¶</a> Position des contrôles</h3>
<demo-block>
        <div><p>Réglez <code>controls-position</code> pour déterminer la position des boutons.</p>
</div>
        <template slot="source"><element-demo6 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;template&gt;
  &lt;el-input-number v-model=&quot;num&quot; controls-position=&quot;right&quot; @change=&quot;handleChange&quot; :min=&quot;1&quot; :max=&quot;10&quot;&gt;&lt;/el-input-number&gt;
&lt;/template&gt;
&lt;script&gt;
  export default {
    data() {
      return {
        num: 1
      };
    },
    methods: {
      handleChange(value) {
        console.log(value);
      }
    }
  };
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
<td>min</td>
<td>La valeur minimale autorisée.</td>
<td>number</td>
<td>—</td>
<td><code>-Infinity</code></td>
</tr>
<tr>
<td>max</td>
<td>La valeur maximale autorisée.</td>
<td>number</td>
<td>—</td>
<td><code>Infinity</code></td>
</tr>
<tr>
<td>step</td>
<td>Le pas pour l'incrémentation.</td>
<td>number</td>
<td>—</td>
<td>1</td>
</tr>
<tr>
<td>step-strictly</td>
<td>Si la valeur ne peut être qu'un multiple du pas.</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>precision</td>
<td>La précision de la valeur.</td>
<td>number</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>size</td>
<td>La taille du composant.</td>
<td>string</td>
<td>large/small</td>
<td>—</td>
</tr>
<tr>
<td>disabled</td>
<td>Si le composant est désactivé.</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>controls</td>
<td>Si les boutons sont visibles.</td>
<td>boolean</td>
<td>—</td>
<td>true</td>
</tr>
<tr>
<td>controls-position</td>
<td>Position des boutons.</td>
<td>string</td>
<td>right</td>
<td>-</td>
</tr>
<tr>
<td>name</td>
<td>Identique à <code>name</code> dans l'input natif.</td>
<td>string</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>label</td>
<td>Texte du label.</td>
<td>string</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>placeholder</td>
<td>Placeholder du champ.</td>
<td>string</td>
<td>-</td>
<td>-</td>
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
<td>currentValue, oldValue</td>
</tr>
<tr>
<td>blur</td>
<td>Se déclenche quand le champ perds le focus.</td>
<td>(event: Event)</td>
</tr>
<tr>
<td>focus</td>
<td>Se déclenche quand le champ a le focus.</td>
<td>(event: Event)</td>
</tr>
</tbody>
</table>
<h3 id="methodes"><a class="header-anchor" href="#methodes">¶</a> Méthodes</h3>
<table>
<thead>
<tr>
<th>Méthode</th>
<th>Description</th>
<th>Paramètres</th>
</tr>
</thead>
<tbody>
<tr>
<td>focus</td>
<td>Met le focus sur le composant.</td>
<td>-</td>
</tr>
<tr>
<td>select</td>
<td>Sélectionne le texte dans le champ.</td>
<td>—</td>
</tr>
</tbody>
</table>
