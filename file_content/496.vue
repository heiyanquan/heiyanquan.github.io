<h2 id="colorpicker"><a class="header-anchor" href="#colorpicker">¶</a> ColorPicker</h2>
<p>ColorPicker est un sélecteur de couleur qui supporte plusieurs formats.</p>
<h3 id="usage"><a class="header-anchor" href="#usage">¶</a> Usage</h3>
<demo-block>
        <div><p>ColorPicker nécessite une variable de type string liée à v-model.</p>
</div>
        <!--element-demo: <div class="block">
  <span class="demonstration">Avec valeur par défaut</span>
  <el-color-picker v-model="color1"></el-color-picker>
</div>
<div class="block">
  <span class="demonstration">Sans valeur par défaut</span>
  <el-color-picker v-model="color2"></el-color-picker>
</div>

<script>
  export default {
    data() {
      return {
        color1: '#409EFF',
        color2: null
      }
    }
  };
</script>
:element-demo-->
        <template slot="highlight"><pre v-pre><code class="html">&lt;div class=&quot;block&quot;&gt;
  &lt;span class=&quot;demonstration&quot;&gt;Avec valeur par défaut&lt;/span&gt;
  &lt;el-color-picker v-model=&quot;color1&quot;&gt;&lt;/el-color-picker&gt;
&lt;/div&gt;
&lt;div class=&quot;block&quot;&gt;
  &lt;span class=&quot;demonstration&quot;&gt;Sans valeur par défaut&lt;/span&gt;
  &lt;el-color-picker v-model=&quot;color2&quot;&gt;&lt;/el-color-picker&gt;
&lt;/div&gt;

&lt;script&gt;
  export default {
    data() {
      return {
        color1: '#409EFF',
        color2: null
      }
    }
  };
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="canal-alpha"><a class="header-anchor" href="#canal-alpha">¶</a> Canal Alpha</h3>
<demo-block>
        <div><p>ColorPicker supporte le canal alpha. Pour activer la sélection du canal alpha, ajoutez l'attribut <code>show-alpha</code>.</p>
</div>
        <!--element-demo: <el-color-picker v-model="color" show-alpha></el-color-picker>

<script>
  export default {
    data() {
      return {
        color: 'rgba(19, 206, 102, 0.8)'
      }
    }
  };
</script>
:element-demo-->
        <template slot="highlight"><pre v-pre><code class="html">&lt;el-color-picker v-model=&quot;color&quot; show-alpha&gt;&lt;/el-color-picker&gt;

&lt;script&gt;
  export default {
    data() {
      return {
        color: 'rgba(19, 206, 102, 0.8)'
      }
    }
  };
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="couleurs-predefinies"><a class="header-anchor" href="#couleurs-predefinies">¶</a> Couleurs prédéfinies</h3>
<demo-block>
        <div><p>ColorPicker supporte les couleurs prédéfinies.</p>
</div>
        <!--element-demo: <el-color-picker
  v-model="color"
  show-alpha
  :predefine="predefineColors">
</el-color-picker>

<script>
  export default {
    data() {
      return {
        color: 'rgba(255, 69, 0, 0.68)',
        predefineColors: [
          '#ff4500',
          '#ff8c00',
          '#ffd700',
          '#90ee90',
          '#00ced1',
          '#1e90ff',
          '#c71585',
          'rgba(255, 69, 0, 0.68)',
          'rgb(255, 120, 0)',
          'hsv(51, 100, 98)',
          'hsva(120, 40, 94, 0.5)',
          'hsl(181, 100%, 37%)',
          'hsla(209, 100%, 56%, 0.73)',
          '#c7158577'
        ]
      }
    }
  };
</script>
:element-demo-->
        <template slot="highlight"><pre v-pre><code class="html">&lt;el-color-picker
  v-model=&quot;color&quot;
  show-alpha
  :predefine=&quot;predefineColors&quot;&gt;
&lt;/el-color-picker&gt;

&lt;script&gt;
  export default {
    data() {
      return {
        color: 'rgba(255, 69, 0, 0.68)',
        predefineColors: [
          '#ff4500',
          '#ff8c00',
          '#ffd700',
          '#90ee90',
          '#00ced1',
          '#1e90ff',
          '#c71585',
          'rgba(255, 69, 0, 0.68)',
          'rgb(255, 120, 0)',
          'hsv(51, 100, 98)',
          'hsva(120, 40, 94, 0.5)',
          'hsl(181, 100%, 37%)',
          'hsla(209, 100%, 56%, 0.73)',
          '#c7158577'
        ]
      }
    }
  };
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="tailles"><a class="header-anchor" href="#tailles">¶</a> Tailles</h3>
<demo-block>
        
        <!--element-demo: <el-color-picker v-model="color"></el-color-picker>
<el-color-picker v-model="color" size="medium"></el-color-picker>
<el-color-picker v-model="color" size="small"></el-color-picker>
<el-color-picker v-model="color" size="mini"></el-color-picker>

<script>
  export default {
    data() {
      return {
        color: '#409EFF'
      }
    }
  };
</script>
:element-demo-->
        <template slot="highlight"><pre v-pre><code class="html">&lt;el-color-picker v-model=&quot;color&quot;&gt;&lt;/el-color-picker&gt;
&lt;el-color-picker v-model=&quot;color&quot; size=&quot;medium&quot;&gt;&lt;/el-color-picker&gt;
&lt;el-color-picker v-model=&quot;color&quot; size=&quot;small&quot;&gt;&lt;/el-color-picker&gt;
&lt;el-color-picker v-model=&quot;color&quot; size=&quot;mini&quot;&gt;&lt;/el-color-picker&gt;

&lt;script&gt;
  export default {
    data() {
      return {
        color: '#409EFF'
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
<td>string</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>disabled</td>
<td>Désactive le ColorPicker.</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>size</td>
<td>Taille du ColorPicker.</td>
<td>string</td>
<td>—</td>
<td>medium / small / mini</td>
</tr>
<tr>
<td>show-alpha</td>
<td>Affiche la sélection du canal alpha.</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>color-format</td>
<td>Format de couleur du v-model.</td>
<td>string</td>
<td>hsl / hsv / hex / rgb</td>
<td>hex (quand show-alpha est false)/ rgb (quand show-alpha est true)</td>
</tr>
<tr>
<td>popper-class</td>
<td>Classe du menu déroulant du ColorPicker.</td>
<td>string</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>predefine</td>
<td>Couleurs prédéfinies.</td>
<td>array</td>
<td>—</td>
<td>—</td>
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
<td>La valeur de la couleur</td>
</tr>
<tr>
<td>active-change</td>
<td>Se déclenche quand la couleur active change.</td>
<td>La valeur de la couleur active</td>
</tr>
</tbody>
</table>
