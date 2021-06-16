<h2 id="dropdown"><a class="header-anchor" href="#dropdown">¶</a> Dropdown</h2>
<p>Menu déroulant pour afficher des listes de liens et d'actions possibles.</p>
<h3 id="usage"><a class="header-anchor" href="#usage">¶</a> Usage</h3>
<p>Passez sur le menu avec la souris pour dérouler son contenu.</p>
<demo-block>
        <div><p>L'élément déclencheur est généré par le <code>slot</code> par défaut, et le menu déroulant est généré par le <code>slot</code> appelé <code>dropdown</code>. Par défaut le menu apparaît simplement en passant la souris sur l'élément déclencheur, sans avoir à cliquer.</p>
</div>
        <template slot="source"><element-demo0 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;el-dropdown&gt;
  &lt;span class=&quot;el-dropdown-link&quot;&gt;
    Menu déroulant&lt;i class=&quot;el-icon-arrow-down el-icon--right&quot;&gt;&lt;/i&gt;
  &lt;/span&gt;
  &lt;el-dropdown-menu slot=&quot;dropdown&quot;&gt;
    &lt;el-dropdown-item&gt;Action 1&lt;/el-dropdown-item&gt;
    &lt;el-dropdown-item&gt;Action 2&lt;/el-dropdown-item&gt;
    &lt;el-dropdown-item&gt;Action 3&lt;/el-dropdown-item&gt;
    &lt;el-dropdown-item disabled&gt;Action 4&lt;/el-dropdown-item&gt;
    &lt;el-dropdown-item divided&gt;Action 5&lt;/el-dropdown-item&gt;
  &lt;/el-dropdown-menu&gt;
&lt;/el-dropdown&gt;

&lt;style&gt;
  .el-dropdown-link {
    cursor: pointer;
    color: #409EFF;
  }
  .el-icon-arrow-down {
    font-size: 12px;
  }
&lt;/style&gt;

</code></pre></template></demo-block><h3 id="element-declencheur"><a class="header-anchor" href="#element-declencheur">¶</a> Élément déclencheur</h3>
<p>Utilisez le bouton pour ouvrir le menu déroulant.</p>
<demo-block>
        <div><p>Utilisez <code>split-button</code> pour séparer le déclencheur du reste du bouton, ce dernier devenant la partie gauche et le déclencheur la partie droite.</p>
</div>
        <template slot="source"><element-demo1 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;el-dropdown&gt;
  &lt;el-button type=&quot;primary&quot;&gt;
    Liste déroulante&lt;i class=&quot;el-icon-arrow-down el-icon--right&quot;&gt;&lt;/i&gt;
  &lt;/el-button&gt;
  &lt;el-dropdown-menu slot=&quot;dropdown&quot;&gt;
    &lt;el-dropdown-item&gt;Action 1&lt;/el-dropdown-item&gt;
    &lt;el-dropdown-item&gt;Action 2&lt;/el-dropdown-item&gt;
    &lt;el-dropdown-item&gt;Action 3&lt;/el-dropdown-item&gt;
    &lt;el-dropdown-item&gt;Action 4&lt;/el-dropdown-item&gt;
    &lt;el-dropdown-item&gt;Action 5&lt;/el-dropdown-item&gt;
  &lt;/el-dropdown-menu&gt;
&lt;/el-dropdown&gt;
&lt;el-dropdown split-button type=&quot;primary&quot; @click=&quot;handleClick&quot;&gt;
  Liste déroulante
  &lt;el-dropdown-menu slot=&quot;dropdown&quot;&gt;
    &lt;el-dropdown-item&gt;Action 1&lt;/el-dropdown-item&gt;
    &lt;el-dropdown-item&gt;Action 2&lt;/el-dropdown-item&gt;
    &lt;el-dropdown-item&gt;Action 3&lt;/el-dropdown-item&gt;
    &lt;el-dropdown-item&gt;Action 4&lt;/el-dropdown-item&gt;
    &lt;el-dropdown-item&gt;Action 5&lt;/el-dropdown-item&gt;
  &lt;/el-dropdown-menu&gt;
&lt;/el-dropdown&gt;

&lt;style&gt;
  .el-dropdown {
    vertical-align: top;
  }
  .el-dropdown + .el-dropdown {
    margin-left: 15px;
  }
  .el-icon-arrow-down {
    font-size: 12px;
  }
&lt;/style&gt;

&lt;script&gt;
  export default {
    methods: {
      handleClick() {
        alert('button click');
      }
    }
  }
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="declencheur"><a class="header-anchor" href="#declencheur">¶</a> Déclencheur</h3>
<p>Vous pouvez choisir de déclencher le menu au moment du clic, ou en passant la souris sur l'élément.</p>
<demo-block>
        <div><p>Utilisez l'attribut <code>trigger</code>. Par défaut, il est à <code>hover</code>.</p>
</div>
        <template slot="source"><element-demo2 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;el-row class=&quot;block-col-2&quot;&gt;
  &lt;el-col :span=&quot;12&quot;&gt;
    &lt;span class=&quot;demonstration&quot;&gt;En passant la souris&lt;/span&gt;
    &lt;el-dropdown&gt;
      &lt;span class=&quot;el-dropdown-link&quot;&gt;
        Liste déroulante&lt;i class=&quot;el-icon-arrow-down el-icon--right&quot;&gt;&lt;/i&gt;
      &lt;/span&gt;
      &lt;el-dropdown-menu slot=&quot;dropdown&quot;&gt;
        &lt;el-dropdown-item icon=&quot;el-icon-plus&quot;&gt;Action 1&lt;/el-dropdown-item&gt;
        &lt;el-dropdown-item icon=&quot;el-icon-circle-plus&quot;&gt;Action 2&lt;/el-dropdown-item&gt;
        &lt;el-dropdown-item icon=&quot;el-icon-circle-plus-outline&quot;&gt;Action 3&lt;/el-dropdown-item&gt;
        &lt;el-dropdown-item icon=&quot;el-icon-check&quot;&gt;Action 4&lt;/el-dropdown-item&gt;
        &lt;el-dropdown-item icon=&quot;el-icon-circle-check&quot;&gt;Action 5&lt;/el-dropdown-item&gt;
      &lt;/el-dropdown-menu&gt;
    &lt;/el-dropdown&gt;
  &lt;/el-col&gt;
  &lt;el-col :span=&quot;12&quot;&gt;
    &lt;span class=&quot;demonstration&quot;&gt;En cliquant&lt;/span&gt;
    &lt;el-dropdown trigger=&quot;click&quot;&gt;
      &lt;span class=&quot;el-dropdown-link&quot;&gt;
        Liste déroulante&lt;i class=&quot;el-icon-arrow-down el-icon--right&quot;&gt;&lt;/i&gt;
      &lt;/span&gt;
      &lt;el-dropdown-menu slot=&quot;dropdown&quot;&gt;
        &lt;el-dropdown-item icon=&quot;el-icon-plus&quot;&gt;Action 1&lt;/el-dropdown-item&gt;
        &lt;el-dropdown-item icon=&quot;el-icon-circle-plus&quot;&gt;Action 2&lt;/el-dropdown-item&gt;
        &lt;el-dropdown-item icon=&quot;el-icon-circle-plus-outline&quot;&gt;Action 3&lt;/el-dropdown-item&gt;
        &lt;el-dropdown-item icon=&quot;el-icon-check&quot;&gt;Action 4&lt;/el-dropdown-item&gt;
        &lt;el-dropdown-item icon=&quot;el-icon-circle-check&quot;&gt;Action 5&lt;/el-dropdown-item&gt;
      &lt;/el-dropdown-menu&gt;
    &lt;/el-dropdown&gt;
  &lt;/el-col&gt;
&lt;/el-row&gt;

&lt;style&gt;
  .el-dropdown-link {
    cursor: pointer;
    color: #409EFF;
  }
  .el-icon-arrow-down {
    font-size: 12px;
  }
  .demonstration {
    display: block;
    color: #8492a6;
    font-size: 14px;
    margin-bottom: 20px;
  }
&lt;/style&gt;
</code></pre></template></demo-block><h3 id="fermer-le-menu"><a class="header-anchor" href="#fermer-le-menu">¶</a> Fermer le menu</h3>
<p>Utilisez l'attribut <code>hide-on-click</code> pour déterminer si le menu se ferme après avoir cliqué sur un élément de la liste.</p>
<demo-block>
        <div><p>Par défaut le menu se ferme après avoir cliqué dans la liste. Vous pouvez changer cette option en mettant <code>hide-on-click</code> à <code>false</code>.</p>
</div>
        <template slot="source"><element-demo3 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;el-dropdown :hide-on-click=&quot;false&quot;&gt;
  &lt;span class=&quot;el-dropdown-link&quot;&gt;
    Liste déroulante&lt;i class=&quot;el-icon-arrow-down el-icon--right&quot;&gt;&lt;/i&gt;
  &lt;/span&gt;
  &lt;el-dropdown-menu slot=&quot;dropdown&quot;&gt;
    &lt;el-dropdown-item&gt;Action 1&lt;/el-dropdown-item&gt;
    &lt;el-dropdown-item&gt;Action 2&lt;/el-dropdown-item&gt;
    &lt;el-dropdown-item&gt;Action 3&lt;/el-dropdown-item&gt;
    &lt;el-dropdown-item disabled&gt;Action 4&lt;/el-dropdown-item&gt;
    &lt;el-dropdown-item divided&gt;Action 5&lt;/el-dropdown-item&gt;
  &lt;/el-dropdown-menu&gt;
&lt;/el-dropdown&gt;

&lt;style&gt;
  .el-dropdown-link {
    cursor: pointer;
    color: #409EFF;
  }
  .el-icon-arrow-down {
    font-size: 12px;
  }
&lt;/style&gt;
</code></pre></template></demo-block><h3 id="evenement-command"><a class="header-anchor" href="#evenement-command">¶</a> Évènement command</h3>
<p>Cliquer sur un élément du dropdown déclenche un évènement &quot;command&quot;.
Le paramètre de cet évènement peut être assigné à chaque élément de la liste.</p>
<demo-block>
        
        <template slot="source"><element-demo4 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;el-dropdown @command=&quot;handleCommand&quot;&gt;
  &lt;span class=&quot;el-dropdown-link&quot;&gt;
    Liste déroulante&lt;i class=&quot;el-icon-arrow-down el-icon--right&quot;&gt;&lt;/i&gt;
  &lt;/span&gt;
  &lt;el-dropdown-menu slot=&quot;dropdown&quot;&gt;
    &lt;el-dropdown-item command=&quot;a&quot;&gt;Action 1&lt;/el-dropdown-item&gt;
    &lt;el-dropdown-item command=&quot;b&quot;&gt;Action 2&lt;/el-dropdown-item&gt;
    &lt;el-dropdown-item command=&quot;c&quot;&gt;Action 3&lt;/el-dropdown-item&gt;
    &lt;el-dropdown-item command=&quot;d&quot; disabled&gt;Action 4&lt;/el-dropdown-item&gt;
    &lt;el-dropdown-item command=&quot;e&quot; divided&gt;Action 5&lt;/el-dropdown-item&gt;
  &lt;/el-dropdown-menu&gt;
&lt;/el-dropdown&gt;

&lt;style&gt;
  .el-dropdown-link {
    cursor: pointer;
    color: #409EFF;
  }
  .el-icon-arrow-down {
    font-size: 12px;
  }
&lt;/style&gt;

&lt;script&gt;
  export default {
    methods: {
      handleCommand(command) {
        this.$message('click on item ' + command);
      }
    }
  }
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="tailles"><a class="header-anchor" href="#tailles">¶</a> Tailles</h3>
<p>En plus de la taille par défaut, le composant Dropdown propose trois autres tailles différentes.</p>
<demo-block>
        <div><p>Utilisez <code>size</code> pour déterminer une autre taille parmi <code>medium</code>, <code>small</code> ou <code>mini</code>.</p>
</div>
        <template slot="source"><element-demo5 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;el-dropdown split-button type=&quot;primary&quot;&gt;
  Défaut
  &lt;el-dropdown-menu slot=&quot;dropdown&quot;&gt;
    &lt;el-dropdown-item&gt;Action 1&lt;/el-dropdown-item&gt;
    &lt;el-dropdown-item&gt;Action 2&lt;/el-dropdown-item&gt;
    &lt;el-dropdown-item&gt;Action 3&lt;/el-dropdown-item&gt;
    &lt;el-dropdown-item&gt;Action 4&lt;/el-dropdown-item&gt;
  &lt;/el-dropdown-menu&gt;
&lt;/el-dropdown&gt;

&lt;el-dropdown size=&quot;medium&quot; split-button type=&quot;primary&quot;&gt;
  Medium
  &lt;el-dropdown-menu slot=&quot;dropdown&quot;&gt;
    &lt;el-dropdown-item&gt;Action 1&lt;/el-dropdown-item&gt;
    &lt;el-dropdown-item&gt;Action 2&lt;/el-dropdown-item&gt;
    &lt;el-dropdown-item&gt;Action 3&lt;/el-dropdown-item&gt;
    &lt;el-dropdown-item&gt;Action 4&lt;/el-dropdown-item&gt;
  &lt;/el-dropdown-menu&gt;
&lt;/el-dropdown&gt;

&lt;el-dropdown size=&quot;small&quot; split-button type=&quot;primary&quot;&gt;
  Small
  &lt;el-dropdown-menu slot=&quot;dropdown&quot;&gt;
   &lt;el-dropdown-item&gt;Action 1&lt;/el-dropdown-item&gt;
   &lt;el-dropdown-item&gt;Action 2&lt;/el-dropdown-item&gt;
   &lt;el-dropdown-item&gt;Action 3&lt;/el-dropdown-item&gt;
   &lt;el-dropdown-item&gt;Action 4&lt;/el-dropdown-item&gt;
  &lt;/el-dropdown-menu&gt;
&lt;/el-dropdown&gt;

&lt;el-dropdown size=&quot;mini&quot; split-button type=&quot;primary&quot;&gt;
  Mini
  &lt;el-dropdown-menu slot=&quot;dropdown&quot;&gt;
    &lt;el-dropdown-item&gt;Action 1&lt;/el-dropdown-item&gt;
    &lt;el-dropdown-item&gt;Action 2&lt;/el-dropdown-item&gt;
    &lt;el-dropdown-item&gt;Action 3&lt;/el-dropdown-item&gt;
    &lt;el-dropdown-item&gt;Action 4&lt;/el-dropdown-item&gt;
  &lt;/el-dropdown-menu&gt;
&lt;/el-dropdown&gt;
</code></pre></template></demo-block><h3 id="attributs-du-dropdown"><a class="header-anchor" href="#attributs-du-dropdown">¶</a> Attributs du Dropdown</h3>
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
<td>type</td>
<td>Type du bouton, se référer au composant <code>Button</code>. Ne marche que si <code>split-button</code> est <code>true</code>.</td>
<td>string</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>size</td>
<td>Taille du menu, marche aussi avec <code>split button</code>.</td>
<td>string</td>
<td>medium / small / mini</td>
<td>—</td>
</tr>
<tr>
<td>split-button</td>
<td>Si le bouton est séparé en deux.</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>placement</td>
<td>Emplacement du menu déroulant</td>
<td>string</td>
<td>top/top-start/top-end/bottom/bottom-start/bottom-end</td>
<td>bottom-end</td>
</tr>
<tr>
<td>trigger</td>
<td>Comment déclencher l'ouverture du menu.</td>
<td>string</td>
<td>hover/click</td>
<td>hover</td>
</tr>
<tr>
<td>hide-on-click</td>
<td>Si le menu doit disparaître après avoir cliqué sur un élément.</td>
<td>boolean</td>
<td>—</td>
<td>true</td>
</tr>
<tr>
<td>show-timeout</td>
<td>Délai avant d'afficher le menu (ne marche que si <code>trigger</code> est <code>hover</code>)</td>
<td>number</td>
<td>—</td>
<td>250</td>
</tr>
<tr>
<td>hide-timeout</td>
<td>Délai avant de cacher le menu (ne marche que si <code>trigger</code> est <code>hover</code>)</td>
<td>number</td>
<td>—</td>
<td>150</td>
</tr>
<tr>
<td>tabindex</td>
<td><a href="https://developer.mozilla.org/fr/docs/Web/HTML/Attributs_universels/tabindex">tabindex</a> de Dropdown</td>
<td>number</td>
<td>—</td>
<td>0</td>
</tr>
</tbody>
</table>
<h3 id="dropdown-slots"><a class="header-anchor" href="#dropdown-slots">¶</a> Dropdown Slots</h3>
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
<td>Contenu du Dropdown. Note: doit être un élément du DOM valide (ex. <code>&lt;span&gt;, &lt;button&gt; etc.</code>) ou <code>el-component</code>, pour y attacher un évènement.</td>
</tr>
<tr>
<td>dropdown</td>
<td>Contenu du menu du Dropdown, en général un élément <code>&lt;el-dropdown-menu&gt;</code>.</td>
</tr>
</tbody>
</table>
<h3 id="evenements-du-dropdown"><a class="header-anchor" href="#evenements-du-dropdown">¶</a> Évènements du Dropdown</h3>
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
<td>click</td>
<td>Si <code>split-button</code> est <code>true</code>, se déclenche quand le bouton de gauche est cliqué.</td>
<td>—</td>
</tr>
<tr>
<td>command</td>
<td>Se déclenche quand un élément de la liste est cliqué.</td>
<td>L'attribut command de l'élément de la liste.</td>
</tr>
<tr>
<td>visible-change</td>
<td>Se déclenche quand le menu s'affiche ou disparaît.</td>
<td><code>true</code> quand il apparaît, <code>false</code> sinon.</td>
</tr>
</tbody>
</table>
<h3 id="attributs-des-elements-du-menu"><a class="header-anchor" href="#attributs-des-elements-du-menu">¶</a> Attributs des éléments du menu</h3>
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
<td>command</td>
<td>Le contenu à envoyer au callback de l'évènement <code>command</code> du Dropdown.</td>
<td>string/number/object</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>disabled</td>
<td>Si l'élément est désactivé.</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>divided</td>
<td>Si un diviseur doit être affiché.</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>icon</td>
<td>Classe de l'icône.</td>
<td>string</td>
<td>—</td>
<td>—</td>
</tr>
</tbody>
</table>
