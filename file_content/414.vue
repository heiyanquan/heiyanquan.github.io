<h2 id="radio"><a class="header-anchor" href="#radio">¶</a> Radio</h2>
<p>Boutons de sélection entre plusieurs options.</p>
<h3 id="usage"><a class="header-anchor" href="#usage">¶</a> Usage</h3>
<p>Radio ne devrait pas avoir trop d'options. Dans ce cas utilisez plutôt Select.</p>
<demo-block>
        <div><p>Créer un composant Radio est facile, vous avez juste besoin de lier les <code>v-model</code> des options. Chacun équivaut à la valeur de <code>label</code> du radio correspondant. Le type de <code>label</code> est <code>String</code>, <code>Number</code> ou <code>Boolean</code>.</p>
</div>
        <!--element-demo: <template>
  <el-radio v-model="radio" label="1">Option A</el-radio>
  <el-radio v-model="radio" label="2">Option B</el-radio>
</template>

<script>
  export default {
    data () {
      return {
        radio: '1'
      };
    }
  }
</script>
:element-demo-->
        <template slot="highlight"><pre v-pre><code class="html">&lt;template&gt;
  &lt;el-radio v-model=&quot;radio&quot; label=&quot;1&quot;&gt;Option A&lt;/el-radio&gt;
  &lt;el-radio v-model=&quot;radio&quot; label=&quot;2&quot;&gt;Option B&lt;/el-radio&gt;
&lt;/template&gt;

&lt;script&gt;
  export default {
    data () {
      return {
        radio: '1'
      };
    }
  }
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="desactive"><a class="header-anchor" href="#desactive">¶</a> Désactivé</h3>
<p>L'attribut <code>disabled</code> désactive le radio.</p>
<demo-block>
        <div><p>Ajoutez simplement l'attribut <code>disabled</code> au radio.</p>
</div>
        <!--element-demo: <template>
  <el-radio disabled v-model="radio" label="disabled">Option A</el-radio>
  <el-radio disabled v-model="radio" label="selected and disabled">Option B</el-radio>
</template>

<script>
  export default {
    data () {
      return {
        radio: 'selected and disabled'
      };
    }
  }
</script>
:element-demo-->
        <template slot="highlight"><pre v-pre><code class="html">&lt;template&gt;
  &lt;el-radio disabled v-model=&quot;radio&quot; label=&quot;disabled&quot;&gt;Option A&lt;/el-radio&gt;
  &lt;el-radio disabled v-model=&quot;radio&quot; label=&quot;selected and disabled&quot;&gt;Option B&lt;/el-radio&gt;
&lt;/template&gt;

&lt;script&gt;
  export default {
    data () {
      return {
        radio: 'selected and disabled'
      };
    }
  }
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="groupe-de-boutons-radio"><a class="header-anchor" href="#groupe-de-boutons-radio">¶</a> Groupe de boutons radio</h3>
<p>Utile pour choisir entre plusieurs groupes d'options mutuellement exclusives.</p>
<demo-block>
        <div><p>Combinez <code>el-radio-group</code> avec <code>el-radio</code> pour afficher un groupe de radios. Liez une variable au <code>v-model</code> de <code>el-radio-group</code> et configurez le label dans <code>el-radio</code>. Cet élément fournit aussi l'évènement <code>change</code> qui a en paramètre la valeur courante.</p>
</div>
        <!--element-demo: <el-radio-group v-model="radio">
  <el-radio :label="3">Option A</el-radio>
  <el-radio :label="6">Option B</el-radio>
  <el-radio :label="9">Option C</el-radio>
</el-radio-group>

<script>
  export default {
    data () {
      return {
        radio: 3
      };
    }
  }
</script>
:element-demo-->
        <template slot="highlight"><pre v-pre><code class="html">&lt;el-radio-group v-model=&quot;radio&quot;&gt;
  &lt;el-radio :label=&quot;3&quot;&gt;Option A&lt;/el-radio&gt;
  &lt;el-radio :label=&quot;6&quot;&gt;Option B&lt;/el-radio&gt;
  &lt;el-radio :label=&quot;9&quot;&gt;Option C&lt;/el-radio&gt;
&lt;/el-radio-group&gt;

&lt;script&gt;
  export default {
    data () {
      return {
        radio: 3
      };
    }
  }
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="style-bouton"><a class="header-anchor" href="#style-bouton">¶</a> Style bouton</h3>
<p>Des radios affichés comme des boutons standards.</p>
<demo-block>
        <div><p>Changez simplement <code>el-radio</code> pour <code>el-radio-button</code>. L'attribut <code>size</code> permet de régler la taille.</p>
</div>
        <!--element-demo: <template>
  <div>
    <el-radio-group v-model="radio1">
      <el-radio-button label="New York"></el-radio-button>
      <el-radio-button label="Washington"></el-radio-button>
      <el-radio-button label="Los Angeles"></el-radio-button>
      <el-radio-button label="Chicago"></el-radio-button>
    </el-radio-group>
  </div>
  <div style="margin-top: 20px">
    <el-radio-group v-model="radio2" size="medium">
      <el-radio-button label="New York" ></el-radio-button>
      <el-radio-button label="Washington"></el-radio-button>
      <el-radio-button label="Los Angeles"></el-radio-button>
      <el-radio-button label="Chicago"></el-radio-button>
    </el-radio-group>
  </div>
  <div style="margin-top: 20px">
    <el-radio-group v-model="radio3" size="small">
      <el-radio-button label="New York"></el-radio-button>
      <el-radio-button label="Washington" disabled ></el-radio-button>
      <el-radio-button label="Los Angeles"></el-radio-button>
      <el-radio-button label="Chicago"></el-radio-button>
    </el-radio-group>
  </div>
  <div style="margin-top: 20px">
    <el-radio-group v-model="radio4" disabled size="mini">
      <el-radio-button label="New York"></el-radio-button>
      <el-radio-button label="Washington"></el-radio-button>
      <el-radio-button label="Los Angeles"></el-radio-button>
      <el-radio-button label="Chicago"></el-radio-button>
    </el-radio-group>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        radio1: 'New York',
        radio2: 'New York',
        radio3: 'New York',
        radio4: 'New York'
      };
    }
  }
</script>
:element-demo-->
        <template slot="highlight"><pre v-pre><code class="html">&lt;template&gt;
  &lt;div&gt;
    &lt;el-radio-group v-model=&quot;radio1&quot;&gt;
      &lt;el-radio-button label=&quot;New York&quot;&gt;&lt;/el-radio-button&gt;
      &lt;el-radio-button label=&quot;Washington&quot;&gt;&lt;/el-radio-button&gt;
      &lt;el-radio-button label=&quot;Los Angeles&quot;&gt;&lt;/el-radio-button&gt;
      &lt;el-radio-button label=&quot;Chicago&quot;&gt;&lt;/el-radio-button&gt;
    &lt;/el-radio-group&gt;
  &lt;/div&gt;
  &lt;div style=&quot;margin-top: 20px&quot;&gt;
    &lt;el-radio-group v-model=&quot;radio2&quot; size=&quot;medium&quot;&gt;
      &lt;el-radio-button label=&quot;New York&quot; &gt;&lt;/el-radio-button&gt;
      &lt;el-radio-button label=&quot;Washington&quot;&gt;&lt;/el-radio-button&gt;
      &lt;el-radio-button label=&quot;Los Angeles&quot;&gt;&lt;/el-radio-button&gt;
      &lt;el-radio-button label=&quot;Chicago&quot;&gt;&lt;/el-radio-button&gt;
    &lt;/el-radio-group&gt;
  &lt;/div&gt;
  &lt;div style=&quot;margin-top: 20px&quot;&gt;
    &lt;el-radio-group v-model=&quot;radio3&quot; size=&quot;small&quot;&gt;
      &lt;el-radio-button label=&quot;New York&quot;&gt;&lt;/el-radio-button&gt;
      &lt;el-radio-button label=&quot;Washington&quot; disabled &gt;&lt;/el-radio-button&gt;
      &lt;el-radio-button label=&quot;Los Angeles&quot;&gt;&lt;/el-radio-button&gt;
      &lt;el-radio-button label=&quot;Chicago&quot;&gt;&lt;/el-radio-button&gt;
    &lt;/el-radio-group&gt;
  &lt;/div&gt;
  &lt;div style=&quot;margin-top: 20px&quot;&gt;
    &lt;el-radio-group v-model=&quot;radio4&quot; disabled size=&quot;mini&quot;&gt;
      &lt;el-radio-button label=&quot;New York&quot;&gt;&lt;/el-radio-button&gt;
      &lt;el-radio-button label=&quot;Washington&quot;&gt;&lt;/el-radio-button&gt;
      &lt;el-radio-button label=&quot;Los Angeles&quot;&gt;&lt;/el-radio-button&gt;
      &lt;el-radio-button label=&quot;Chicago&quot;&gt;&lt;/el-radio-button&gt;
    &lt;/el-radio-group&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
  export default {
    data () {
      return {
        radio1: 'New York',
        radio2: 'New York',
        radio3: 'New York',
        radio4: 'New York'
      };
    }
  }
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="avec-bordures"><a class="header-anchor" href="#avec-bordures">¶</a> Avec bordures</h3>
<demo-block>
        <div><p>L'attribut <code>border</code> ajoute une bordure aux radios.</p>
</div>
        <!--element-demo: <template>
  <div>
    <el-radio v-model="radio1" label="1" border>Option A</el-radio>
    <el-radio v-model="radio1" label="2" border>Option B</el-radio>
  </div>
  <div style="margin-top: 20px">
    <el-radio v-model="radio2" label="1" border size="medium">Option A</el-radio>
    <el-radio v-model="radio2" label="2" border size="medium">Option B</el-radio>
  </div>
  <div style="margin-top: 20px">
    <el-radio-group v-model="radio3" size="small">
      <el-radio label="1" border>Option A</el-radio>
      <el-radio label="2" border disabled>Option B</el-radio>
    </el-radio-group>
  </div>
  <div style="margin-top: 20px">
    <el-radio-group v-model="radio4" size="mini" disabled>
      <el-radio label="1" border>Option A</el-radio>
      <el-radio label="2" border>Option B</el-radio>
    </el-radio-group>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        radio1: '1',
        radio2: '1',
        radio3: '1',
        radio4: '1'
      };
    }
  }
</script>
:element-demo-->
        <template slot="highlight"><pre v-pre><code class="html">&lt;template&gt;
  &lt;div&gt;
    &lt;el-radio v-model=&quot;radio1&quot; label=&quot;1&quot; border&gt;Option A&lt;/el-radio&gt;
    &lt;el-radio v-model=&quot;radio1&quot; label=&quot;2&quot; border&gt;Option B&lt;/el-radio&gt;
  &lt;/div&gt;
  &lt;div style=&quot;margin-top: 20px&quot;&gt;
    &lt;el-radio v-model=&quot;radio2&quot; label=&quot;1&quot; border size=&quot;medium&quot;&gt;Option A&lt;/el-radio&gt;
    &lt;el-radio v-model=&quot;radio2&quot; label=&quot;2&quot; border size=&quot;medium&quot;&gt;Option B&lt;/el-radio&gt;
  &lt;/div&gt;
  &lt;div style=&quot;margin-top: 20px&quot;&gt;
    &lt;el-radio-group v-model=&quot;radio3&quot; size=&quot;small&quot;&gt;
      &lt;el-radio label=&quot;1&quot; border&gt;Option A&lt;/el-radio&gt;
      &lt;el-radio label=&quot;2&quot; border disabled&gt;Option B&lt;/el-radio&gt;
    &lt;/el-radio-group&gt;
  &lt;/div&gt;
  &lt;div style=&quot;margin-top: 20px&quot;&gt;
    &lt;el-radio-group v-model=&quot;radio4&quot; size=&quot;mini&quot; disabled&gt;
      &lt;el-radio label=&quot;1&quot; border&gt;Option A&lt;/el-radio&gt;
      &lt;el-radio label=&quot;2&quot; border&gt;Option B&lt;/el-radio&gt;
    &lt;/el-radio-group&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
  export default {
    data () {
      return {
        radio1: '1',
        radio2: '1',
        radio3: '1',
        radio4: '1'
      };
    }
  }
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="attributs-de-radio"><a class="header-anchor" href="#attributs-de-radio">¶</a> Attributs de Radio</h3>
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
<td>string / number / boolean</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>label</td>
<td>La valeur du radio.</td>
<td>string / number / boolean</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>disabled</td>
<td>Si le radio est désactivé.</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>border</td>
<td>Si une bordure doit être affichée autour du radio.</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>size</td>
<td>Taille du radio, ne marche que si <code>border</code> est <code>true</code>.</td>
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
</tbody>
</table>
<h3 id="evenements-de-radio"><a class="header-anchor" href="#evenements-de-radio">¶</a> Évènements de Radio</h3>
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
<td>La valeur du label.</td>
</tr>
</tbody>
</table>
<h3 id="attributs-de-radio-group"><a class="header-anchor" href="#attributs-de-radio-group">¶</a> Attributs de Radio-group</h3>
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
<td>string / number / boolean</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>size</td>
<td>Taille des radios.</td>
<td>string</td>
<td>medium / small / mini</td>
<td>—</td>
</tr>
<tr>
<td>disabled</td>
<td>Si les radios sont désactivés.</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>text-color</td>
<td>Couleur du texte quand le bouton est actif.</td>
<td>string</td>
<td>—</td>
<td>#ffffff</td>
</tr>
<tr>
<td>fill</td>
<td>Bordure et couleur de fond quand le bouton est actif.</td>
<td>string</td>
<td>—</td>
<td>#409EFF</td>
</tr>
</tbody>
</table>
<h3 id="evenements-de-radio-group"><a class="header-anchor" href="#evenements-de-radio-group">¶</a> Évènements de Radio-group</h3>
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
<td>La valeur du label.</td>
</tr>
</tbody>
</table>
<h3 id="attributs-radio-button"><a class="header-anchor" href="#attributs-radio-button">¶</a> Attributs Radio-button</h3>
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
<td>label</td>
<td>Valeur du radio.</td>
<td>string / number</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>disabled</td>
<td>Si le radio est désactivé.</td>
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
</tbody>
</table>
