<h2 id="popover"><a class="header-anchor" href="#popover">¶</a> Popover</h2>
<h3 id="usage"><a class="header-anchor" href="#usage">¶</a> Usage</h3>
<p>Similaire à Tooltip, Popover est aussi construit avec <code>Vue-popper</code>. Certains attributs sont donc les mêmes, vous pourrez vous référer à la documentation de Tooltip pour certains d'entre eux.</p>
<demo-block>
        <div><p>L'attribut <code>trigger</code> détermine comment le popover se déclenche: <code>hover</code>, <code>click</code>, <code>focus</code> ou <code>manual</code>. Concernant l'élément déclencheur, vous pouvez l'écrire de deux manières: en utilisant le slot <code>slot=&quot;reference&quot;</code> ou bien la directive <code>v-popover</code> avec <code>ref</code> égal à popover.</p>
</div>
        <!--element-demo: <template>
  <el-popover
    placement="top-start"
    title="Title"
    width="200"
    trigger="hover"
    content="this is content, this is content, this is content">
    <el-button slot="reference">S'active au passage du curseur</el-button>
  </el-popover>

  <el-popover
    placement="bottom"
    title="Title"
    width="200"
    trigger="click"
    content="this is content, this is content, this is content">
    <el-button slot="reference">S'active en cliquant</el-button>
  </el-popover>

  <el-popover
    ref="popover"
    placement="right"
    title="Title"
    width="200"
    trigger="focus"
    content="this is content, this is content, this is content">
  </el-popover>
  <el-button v-popover:popover>S'active au focus</el-button>

  <el-popover
    placement="bottom"
    title="Title"
    width="200"
    trigger="manual"
    content="this is content, this is content, this is content"
    v-model="visible">
    <el-button slot="reference" @click="visible = !visible">S'active manuellement</el-button>
  </el-popover>
</template>

<script>
  export default {
    data() {
      return {
        visible: false
      };
    }
  };
</script>
:element-demo-->
        <template slot="highlight"><pre v-pre><code class="html">&lt;template&gt;
  &lt;el-popover
    placement=&quot;top-start&quot;
    title=&quot;Title&quot;
    width=&quot;200&quot;
    trigger=&quot;hover&quot;
    content=&quot;this is content, this is content, this is content&quot;&gt;
    &lt;el-button slot=&quot;reference&quot;&gt;S'active au passage du curseur&lt;/el-button&gt;
  &lt;/el-popover&gt;

  &lt;el-popover
    placement=&quot;bottom&quot;
    title=&quot;Title&quot;
    width=&quot;200&quot;
    trigger=&quot;click&quot;
    content=&quot;this is content, this is content, this is content&quot;&gt;
    &lt;el-button slot=&quot;reference&quot;&gt;S'active en cliquant&lt;/el-button&gt;
  &lt;/el-popover&gt;

  &lt;el-popover
    ref=&quot;popover&quot;
    placement=&quot;right&quot;
    title=&quot;Title&quot;
    width=&quot;200&quot;
    trigger=&quot;focus&quot;
    content=&quot;this is content, this is content, this is content&quot;&gt;
  &lt;/el-popover&gt;
  &lt;el-button v-popover:popover&gt;S'active au focus&lt;/el-button&gt;

  &lt;el-popover
    placement=&quot;bottom&quot;
    title=&quot;Title&quot;
    width=&quot;200&quot;
    trigger=&quot;manual&quot;
    content=&quot;this is content, this is content, this is content&quot;
    v-model=&quot;visible&quot;&gt;
    &lt;el-button slot=&quot;reference&quot; @click=&quot;visible = !visible&quot;&gt;S'active manuellement&lt;/el-button&gt;
  &lt;/el-popover&gt;
&lt;/template&gt;

&lt;script&gt;
  export default {
    data() {
      return {
        visible: false
      };
    }
  };
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="informations-imbriquees"><a class="header-anchor" href="#informations-imbriquees">¶</a> Informations imbriquées</h3>
<p>D'autres composants peuvent s'imbriquer dans un popover.</p>
<demo-block>
        <div><p>Remplacez <code>content</code> par un <code>slot</code>.</p>
</div>
        <!--element-demo: <el-popover
  placement="right"
  width="400"
  trigger="click">
  <el-table :data="gridData">
    <el-table-column width="150" property="date" label="date"></el-table-column>
    <el-table-column width="100" property="name" label="name"></el-table-column>
    <el-table-column width="300" property="address" label="address"></el-table-column>
  </el-table>
  <el-button slot="reference">Cliquez pour activer</el-button>
</el-popover>

<script>
  export default {
    data() {
      return {
        gridData: [{
          date: '2016-05-02',
          name: 'Jack',
          address: 'New York City'
        }, {
          date: '2016-05-04',
          name: 'Jack',
          address: 'New York City'
        }, {
          date: '2016-05-01',
          name: 'Jack',
          address: 'New York City'
        }, {
          date: '2016-05-03',
          name: 'Jack',
          address: 'New York City'
        }]
      };
    }
  };
</script>
:element-demo-->
        <template slot="highlight"><pre v-pre><code class="html">&lt;el-popover
  placement=&quot;right&quot;
  width=&quot;400&quot;
  trigger=&quot;click&quot;&gt;
  &lt;el-table :data=&quot;gridData&quot;&gt;
    &lt;el-table-column width=&quot;150&quot; property=&quot;date&quot; label=&quot;date&quot;&gt;&lt;/el-table-column&gt;
    &lt;el-table-column width=&quot;100&quot; property=&quot;name&quot; label=&quot;name&quot;&gt;&lt;/el-table-column&gt;
    &lt;el-table-column width=&quot;300&quot; property=&quot;address&quot; label=&quot;address&quot;&gt;&lt;/el-table-column&gt;
  &lt;/el-table&gt;
  &lt;el-button slot=&quot;reference&quot;&gt;Cliquez pour activer&lt;/el-button&gt;
&lt;/el-popover&gt;

&lt;script&gt;
  export default {
    data() {
      return {
        gridData: [{
          date: '2016-05-02',
          name: 'Jack',
          address: 'New York City'
        }, {
          date: '2016-05-04',
          name: 'Jack',
          address: 'New York City'
        }, {
          date: '2016-05-01',
          name: 'Jack',
          address: 'New York City'
        }, {
          date: '2016-05-03',
          name: 'Jack',
          address: 'New York City'
        }]
      };
    }
  };
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="operations-imbriquees"><a class="header-anchor" href="#operations-imbriquees">¶</a> Opérations imbriquées</h3>
<p>Vous pouvez aussi imbriquer des opérations. Procéder ainsi est plus léger que d'utiliser Dialog.</p>
<demo-block>
        
        <!--element-demo: <el-popover
  placement="top"
  width="160"
  v-model="visible">
  <p>Voulez-vous vraiment supprimer ceci?</p>
  <div style="text-align: right; margin: 0">
    <el-button size="mini" type="text" @click="visible = false">Annuler</el-button>
    <el-button type="primary" size="mini" @click="visible = false">Confirmer</el-button>
  </div>
  <el-button slot="reference">Supprimer</el-button>
</el-popover>

<script>
  export default {
    data() {
      return {
        visible: false,
      };
    }
  }
</script>
:element-demo-->
        <template slot="highlight"><pre v-pre><code class="html">&lt;el-popover
  placement=&quot;top&quot;
  width=&quot;160&quot;
  v-model=&quot;visible&quot;&gt;
  &lt;p&gt;Voulez-vous vraiment supprimer ceci?&lt;/p&gt;
  &lt;div style=&quot;text-align: right; margin: 0&quot;&gt;
    &lt;el-button size=&quot;mini&quot; type=&quot;text&quot; @click=&quot;visible = false&quot;&gt;Annuler&lt;/el-button&gt;
    &lt;el-button type=&quot;primary&quot; size=&quot;mini&quot; @click=&quot;visible = false&quot;&gt;Confirmer&lt;/el-button&gt;
  &lt;/div&gt;
  &lt;el-button slot=&quot;reference&quot;&gt;Supprimer&lt;/el-button&gt;
&lt;/el-popover&gt;

&lt;script&gt;
  export default {
    data() {
      return {
        visible: false,
      };
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
<td>trigger</td>
<td>Comment le popover se déclenche.</td>
<td>string</td>
<td>click/focus/hover/manual</td>
<td>click</td>
</tr>
<tr>
<td>title</td>
<td>Titre du popover.</td>
<td>string</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>content</td>
<td>Contenu du popover, peut être remplacé par un <code>slot</code></td>
<td>string</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>width</td>
<td>Largeur du popover.</td>
<td>string, number</td>
<td>—</td>
<td>Min width 150px</td>
</tr>
<tr>
<td>placement</td>
<td>Emplacement du popover.</td>
<td>string</td>
<td>top/top-start/top-end/bottom/bottom-start/bottom-end/left/left-start/left-end/right/right-start/right-end</td>
<td>bottom</td>
</tr>
<tr>
<td>disabled</td>
<td>Si le popover est désactivé.</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>value / v-model</td>
<td>Si le popover est visible.</td>
<td>Boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>offset</td>
<td>Décalage du popover.</td>
<td>number</td>
<td>—</td>
<td>0</td>
</tr>
<tr>
<td>transition</td>
<td>Animation de transition du popover.</td>
<td>string</td>
<td>—</td>
<td>el-fade-in-linear</td>
</tr>
<tr>
<td>visible-arrow</td>
<td>Si une flèche doit être affichée ou non. Pour plus d'informations, référez-vous à <a href="https://github.com/element-component/vue-popper">Vue-popper</a>.</td>
<td>boolean</td>
<td>—</td>
<td>true</td>
</tr>
<tr>
<td>popper-options</td>
<td>Paramètres pour <a href="https://popper.js.org/documentation.html">popper.js</a>.</td>
<td>object</td>
<td>Référez-vous à <a href="https://popper.js.org/documentation.html">popper.js</a>.</td>
<td><code>{ boundariesElement: 'body', gpuAcceleration: false }</code></td>
</tr>
<tr>
<td>popper-class</td>
<td>Classe du popover.</td>
<td>string</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>open-delay</td>
<td>Délai d'affichage, lorsque <code>trigger</code> est 'hover', en millisecondes.</td>
<td>number</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>close-delay</td>
<td>delay before disappearing when <code>trigger</code> is hover, in milliseconds</td>
<td>number</td>
<td>—</td>
<td>200</td>
</tr>
<tr>
<td>tabindex</td>
<td><a href="https://developer.mozilla.org/fr/docs/Web/HTML/Attributs_universels/tabindex">tabindex</a> de Popover</td>
<td>number</td>
<td>—</td>
<td>0</td>
</tr>
</tbody>
</table>
<h3 id="slot"><a class="header-anchor" href="#slot">¶</a> Slot</h3>
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
<td>Contenu du popover.</td>
</tr>
<tr>
<td>reference</td>
<td>Element HTML qui déclenche le popover.</td>
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
<td>show</td>
<td>Se déclenche quand le popover s'affiche.</td>
<td>—</td>
</tr>
<tr>
<td>after-enter</td>
<td>Se déclenche quand la transition d'entrée se termine.</td>
<td>—</td>
</tr>
<tr>
<td>hide</td>
<td>Se déclenche quand le popover disparaît.</td>
<td>—</td>
</tr>
<tr>
<td>after-leave</td>
<td>Se déclenche quand la transition de sortie se termine.</td>
<td>—</td>
</tr>
</tbody>
</table>
