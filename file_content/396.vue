<h2 id="switch"><a class="header-anchor" href="#switch">¶</a> Switch</h2>
<p>Switch est utilisé pour choisir entre deux états opposés.</p>
<h3 id="usage"><a class="header-anchor" href="#usage">¶</a> Usage</h3>
<demo-block>
        <div><p>Liez <code>v-model</code> à une variable de type <code>Boolean</code>. Les attributs <code>active-color</code> et <code>inactive-color</code> déterminent les couleurs des deux états.</p>
</div>
        <!--element-demo: <el-switch v-model="value1">
</el-switch>
<el-switch
  v-model="value2"
  active-color="#13ce66"
  inactive-color="#ff4949">
</el-switch>

<script>
  export default {
    data() {
      return {
        value1: true,
        value2: true
      }
    }
  };
</script>
:element-demo-->
        <template slot="highlight"><pre v-pre><code class="html">&lt;el-switch v-model=&quot;value1&quot;&gt;
&lt;/el-switch&gt;
&lt;el-switch
  v-model=&quot;value2&quot;
  active-color=&quot;#13ce66&quot;
  inactive-color=&quot;#ff4949&quot;&gt;
&lt;/el-switch&gt;

&lt;script&gt;
  export default {
    data() {
      return {
        value1: true,
        value2: true
      }
    }
  };
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="description"><a class="header-anchor" href="#description">¶</a> Description</h3>
<demo-block>
        <div><p>Utilisez <code>active-text</code> et <code>inactive-text</code> pour afficher une description de chaque étape.</p>
</div>
        <!--element-demo: <el-switch
  v-model="value1"
  active-text="Paiement mensuel"
  inactive-text="Paiement annuel">
</el-switch>
<el-switch
  style="display: block"
  v-model="value2"
  active-color="#13ce66"
  inactive-color="#ff4949"
  active-text="Paiement mensuel"
  inactive-text="Paiement annuel">
</el-switch>

<script>
  export default {
    data() {
      return {
        value1: true,
        value2: true
      }
    }
  };
</script>
:element-demo-->
        <template slot="highlight"><pre v-pre><code class="html">&lt;el-switch
  v-model=&quot;value1&quot;
  active-text=&quot;Paiement mensuel&quot;
  inactive-text=&quot;Paiement annuel&quot;&gt;
&lt;/el-switch&gt;
&lt;el-switch
  style=&quot;display: block&quot;
  v-model=&quot;value2&quot;
  active-color=&quot;#13ce66&quot;
  inactive-color=&quot;#ff4949&quot;
  active-text=&quot;Paiement mensuel&quot;
  inactive-text=&quot;Paiement annuel&quot;&gt;
&lt;/el-switch&gt;

&lt;script&gt;
  export default {
    data() {
      return {
        value1: true,
        value2: true
      }
    }
  };
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="valeurs-des-etats"><a class="header-anchor" href="#valeurs-des-etats">¶</a> Valeurs des états</h3>
<demo-block>
        <div><p>Vous pouvez utiliser <code>active-value</code> et <code>inactive-value</code> pour déterminer la valeur de chaque état. Ils prennent un <code>Boolean</code>, <code>String</code> ou <code>Number</code>.</p>
</div>
        <!--element-demo: <el-tooltip :content="'Valeur de l\'état: ' + value" placement="top">
  <el-switch
    v-model="value"
    active-color="#13ce66"
    inactive-color="#ff4949"
    active-value="100"
    inactive-value="0">
  </el-switch>
</el-tooltip>

<script>
  export default {
    data() {
      return {
        value: '100'
      }
    }
  };
</script>
:element-demo-->
        <template slot="highlight"><pre v-pre><code class="html">&lt;el-tooltip :content=&quot;'Valeur de l\'état: ' + value&quot; placement=&quot;top&quot;&gt;
  &lt;el-switch
    v-model=&quot;value&quot;
    active-color=&quot;#13ce66&quot;
    inactive-color=&quot;#ff4949&quot;
    active-value=&quot;100&quot;
    inactive-value=&quot;0&quot;&gt;
  &lt;/el-switch&gt;
&lt;/el-tooltip&gt;

&lt;script&gt;
  export default {
    data() {
      return {
        value: '100'
      }
    }
  };
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="desactive"><a class="header-anchor" href="#desactive">¶</a> Désactivé</h3>
<demo-block>
        <div><p>Ajoutez l'attribut <code>disabled</code> pour désactiver le switch.</p>
</div>
        <!--element-demo: <el-switch
  v-model="value1"
  disabled>
</el-switch>
<el-switch
  v-model="value2"
  disabled>
</el-switch>

<script>
  export default {
    data() {
      return {
        value1: true,
        value2: false
      }
    }
  };
</script>
:element-demo-->
        <template slot="highlight"><pre v-pre><code class="html">&lt;el-switch
  v-model=&quot;value1&quot;
  disabled&gt;
&lt;/el-switch&gt;
&lt;el-switch
  v-model=&quot;value2&quot;
  disabled&gt;
&lt;/el-switch&gt;

&lt;script&gt;
  export default {
    data() {
      return {
        value1: true,
        value2: false
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
<td>boolean / string / number</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>disabled</td>
<td>Si le switch est désactivé.</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>width</td>
<td>Largeur du switch.</td>
<td>number</td>
<td>—</td>
<td>40</td>
</tr>
<tr>
<td>active-icon-class</td>
<td>Classe de l'icône de l'état <code>on</code>, écrase <code>active-text</code>.</td>
<td>string</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>inactive-icon-class</td>
<td>Classe de l'icône de l'état <code>off</code>, écrase <code>inactive-text</code>.</td>
<td>string</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>active-text</td>
<td>Texte affiché dans l'état <code>on</code>.</td>
<td>string</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>inactive-text</td>
<td>Texte affiché dans l'état <code>off</code>.</td>
<td>string</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>active-value</td>
<td>Valeur du switch dans l'état <code>on</code>.</td>
<td>boolean / string / number</td>
<td>—</td>
<td>true</td>
</tr>
<tr>
<td>inactive-value</td>
<td>Valeur du switch dans l'état <code>off</code>.</td>
<td>boolean / string / number</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>active-color</td>
<td>Couleur de fond de l'état <code>on</code>.</td>
<td>string</td>
<td>—</td>
<td>#409EFF</td>
</tr>
<tr>
<td>inactive-color</td>
<td>Couleur de fond de l'état <code>off</code>.</td>
<td>string</td>
<td>—</td>
<td>#C0CCDA</td>
</tr>
<tr>
<td>name</td>
<td>Nom du champ d'input du switch.</td>
<td>string</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>validate-event</td>
<td>Si la validation doit avoir lieu.</td>
<td>boolean</td>
<td>-</td>
<td>true</td>
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
<td>La valeur après changement.</td>
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
<td>Donne le focus au switch.</td>
<td>—</td>
</tr>
</tbody>
</table>
