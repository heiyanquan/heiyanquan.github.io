<h2 id="tooltip"><a class="header-anchor" href="#tooltip">¶</a> Tooltip</h2>
<p>Permet d'afficher des informations au passage de la souris sur un élément.</p>
<h3 id="usage"><a class="header-anchor" href="#usage">¶</a> Usage</h3>
<p>Tooltip a 9 emplacements.</p>
<demo-block>
        <div><p>L'attribut <code>content</code> détermine le contenu à afficher. L'attribut <code>placement</code> détermine la position du tooltip. Sa valeur est sous la forme <code>[orientation]-[alignment]</code> avec quatre orientations <code>top</code>, <code>left</code>, <code>right</code>, <code>bottom</code> et trois alignements <code>start</code>, <code>end</code>, <code>null</code>, le défaut étant <code>null</code>. Par exemple, <code>placement=&quot;left-end&quot;</code> affichera la tooltip sur la gauche de l'élément et le bas de la tooltip sera aligné avec le bas de l'élément.</p>
</div>
        <template slot="source"><element-demo0 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;div class=&quot;box&quot;&gt;
  &lt;div class=&quot;top&quot;&gt;
    &lt;el-tooltip class=&quot;item&quot; effect=&quot;dark&quot; content=&quot;Top Left prompts info&quot; placement=&quot;top-start&quot;&gt;
      &lt;el-button&gt;top-start&lt;/el-button&gt;
    &lt;/el-tooltip&gt;
    &lt;el-tooltip class=&quot;item&quot; effect=&quot;dark&quot; content=&quot;Top Center prompts info&quot; placement=&quot;top&quot;&gt;
      &lt;el-button&gt;top&lt;/el-button&gt;
    &lt;/el-tooltip&gt;
    &lt;el-tooltip class=&quot;item&quot; effect=&quot;dark&quot; content=&quot;Top Right prompts info&quot; placement=&quot;top-end&quot;&gt;
      &lt;el-button&gt;top-end&lt;/el-button&gt;
    &lt;/el-tooltip&gt;
  &lt;/div&gt;
  &lt;div class=&quot;left&quot;&gt;
    &lt;el-tooltip class=&quot;item&quot; effect=&quot;dark&quot; content=&quot;Left Top prompts info&quot; placement=&quot;left-start&quot;&gt;
      &lt;el-button&gt;left-start&lt;/el-button&gt;
    &lt;/el-tooltip&gt;
    &lt;el-tooltip class=&quot;item&quot; effect=&quot;dark&quot; content=&quot;Left Center prompts info&quot; placement=&quot;left&quot;&gt;
      &lt;el-button&gt;left&lt;/el-button&gt;
    &lt;/el-tooltip&gt;
    &lt;el-tooltip class=&quot;item&quot; effect=&quot;dark&quot; content=&quot;Left Bottom prompts info&quot; placement=&quot;left-end&quot;&gt;
      &lt;el-button&gt;left-end&lt;/el-button&gt;
    &lt;/el-tooltip&gt;
  &lt;/div&gt;

  &lt;div class=&quot;right&quot;&gt;
    &lt;el-tooltip class=&quot;item&quot; effect=&quot;dark&quot; content=&quot;Right Top prompts info&quot; placement=&quot;right-start&quot;&gt;
      &lt;el-button&gt;right-start&lt;/el-button&gt;
    &lt;/el-tooltip&gt;
    &lt;el-tooltip class=&quot;item&quot; effect=&quot;dark&quot; content=&quot;Right Center prompts info&quot; placement=&quot;right&quot;&gt;
      &lt;el-button&gt;right&lt;/el-button&gt;
    &lt;/el-tooltip&gt;
    &lt;el-tooltip class=&quot;item&quot; effect=&quot;dark&quot; content=&quot;Right Bottom prompts info&quot; placement=&quot;right-end&quot;&gt;
      &lt;el-button&gt;right-end&lt;/el-button&gt;
    &lt;/el-tooltip&gt;
  &lt;/div&gt;
  &lt;div class=&quot;bottom&quot;&gt;
    &lt;el-tooltip class=&quot;item&quot; effect=&quot;dark&quot; content=&quot;Bottom Left prompts info&quot; placement=&quot;bottom-start&quot;&gt;
      &lt;el-button&gt;bottom-start&lt;/el-button&gt;
    &lt;/el-tooltip&gt;
    &lt;el-tooltip class=&quot;item&quot; effect=&quot;dark&quot; content=&quot;Bottom Center prompts info&quot; placement=&quot;bottom&quot;&gt;
      &lt;el-button&gt;bottom&lt;/el-button&gt;
    &lt;/el-tooltip&gt;
    &lt;el-tooltip class=&quot;item&quot; effect=&quot;dark&quot; content=&quot;Bottom Right prompts info&quot; placement=&quot;bottom-end&quot;&gt;
      &lt;el-button&gt;bottom-end&lt;/el-button&gt;
    &lt;/el-tooltip&gt;
  &lt;/div&gt;
&lt;/div&gt;

&lt;style&gt;
  .box {
    width: 400px;

    .top {
      text-align: center;
    }

    .left {
      float: left;
      width: 110px;
    }

    .right {
      float: right;
      width: 110px;
    }

    .bottom {
      clear: both;
      text-align: center;
    }

    .item {
      margin: 4px;
    }

    .left .el-tooltip__popper,
    .right .el-tooltip__popper {
      padding: 8px 10px;
    }

    .el-button {
      width: 110px;
    }
  }
&lt;/style&gt;
</code></pre></template></demo-block><h3 id="themes"><a class="header-anchor" href="#themes">¶</a> Thèmes</h3>
<p>Tooltip a deux thèmes: <code>dark</code> et <code>light</code>。</p>
<demo-block>
        <div><p>Utilisez <code>effect</code> pour modifier le thème, le défaut étant <code>dark</code>.</p>
</div>
        <template slot="source"><element-demo1 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;el-tooltip content=&quot;Top center&quot; placement=&quot;top&quot;&gt;
  &lt;el-button&gt;Dark&lt;/el-button&gt;
&lt;/el-tooltip&gt;
&lt;el-tooltip content=&quot;Bottom center&quot; placement=&quot;bottom&quot; effect=&quot;light&quot;&gt;
  &lt;el-button&gt;Light&lt;/el-button&gt;
&lt;/el-tooltip&gt;
</code></pre></template></demo-block><h3 id="plus-de-contenu"><a class="header-anchor" href="#plus-de-contenu">¶</a> Plus de contenu</h3>
<p>Vous pouvez afficher plus de lignes et formater leur contenu.</p>
<demo-block>
        <div><p>Utiliser un slot nommé <code>content</code> au lieu de l'attribut.</p>
</div>
        <template slot="source"><element-demo2 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;el-tooltip placement=&quot;top&quot;&gt;
  &lt;div slot=&quot;content&quot;&gt;Multiples lignes&lt;br/&gt;Seconde ligne&lt;/div&gt;
  &lt;el-button&gt;Top center&lt;/el-button&gt;
&lt;/el-tooltip&gt;
</code></pre></template></demo-block><h3 id="usage-avance"><a class="header-anchor" href="#usage-avance">¶</a> Usage avancé</h3>
<p>Vous pouvez utiliser d'autres attributs pour un usage plus poussé:</p>
<p><code>transition</code> permet de définir l'animation d'apparition et de disparition du tooltip, le défaut étant el-fade-in-linear.</p>
<p><code>disabled</code> permet de désactiver le tooltip. Mettez-le simplement à <code>true</code>.</p>
<p>En réalité, Tooltip est une extension de <a href="https://github.com/element-component/vue-popper">Vue-popper</a>, vous pouvez donc utiliser n'importe quel attribut de Vue-popper.</p>
<demo-block>
        
        <template slot="source"><element-demo3 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;template&gt;
  &lt;el-tooltip :disabled=&quot;disabled&quot; content=&quot;Cliquez pour désactiver le tooltip&quot; placement=&quot;bottom&quot; effect=&quot;light&quot;&gt;
    &lt;el-button @click=&quot;disabled = !disabled&quot;&gt;Cliquez pour {{disabled ? 'activer' : 'désactiver'}} le tooltip&lt;/el-button&gt;
  &lt;/el-tooltip&gt;
&lt;/template&gt;

&lt;script&gt;
  export default {
    data() {
      return {
        disabled: false
      };
    }
  };
&lt;/script&gt;

&lt;style&gt;
  .slide-fade-enter-active {
    transition: all .3s ease;
  }
  .slide-fade-leave-active {
    transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }
  .slide-fade-enter, .expand-fade-leave-active {
    margin-left: 20px;
    opacity: 0;
  }
&lt;/style&gt;
</code></pre></template></demo-block><div class="tip">
<p>Le composant <code>router-link</code> n'est pas supporté par tooltip, utilisez plutôt <code>vm.$router.push</code>.</p>
<p>Les éléments de formulaire désactivés ne sont pas supportés par Tooltip, plus d'informations sur <a href="https://developer.mozilla.org/en-US/docs/Web/Events/mouseenter">MDN</a>. Vous aurez besoin de mettre ces éléments dans un conteneur pour que cela fonctionne.</p>
</div>
<h3 id="attributs"><a class="header-anchor" href="#attributs">¶</a> Attributs</h3>
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
<td>effect</td>
<td>Thème du Tooltip.</td>
<td>string</td>
<td>dark/light</td>
<td>dark</td>
</tr>
<tr>
<td>content</td>
<td>Contenu à afficher, écrasé par <code>slot#content</code>.</td>
<td>String</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>placement</td>
<td>Position du Tooltip.</td>
<td>string</td>
<td>top/top-start/top-end/bottom/bottom-start/bottom-end/left/left-start/left-end/right/right-start/right-end</td>
<td>bottom</td>
</tr>
<tr>
<td>value / v-model</td>
<td>Visibilité du Tooltip.</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>disabled</td>
<td>Si le Tooltip est désactivé.</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>offset</td>
<td>Décalage du Tooltip.</td>
<td>number</td>
<td>—</td>
<td>0</td>
</tr>
<tr>
<td>transition</td>
<td>Animation de transition.</td>
<td>string</td>
<td>—</td>
<td>el-fade-in-linear</td>
</tr>
<tr>
<td>visible-arrow</td>
<td>Si une flèche doit être affichée. Pour plus d'information, voir <a href="https://github.com/element-component/vue-popper">Vue-popper</a>.</td>
<td>boolean</td>
<td>—</td>
<td>true</td>
</tr>
<tr>
<td>popper-options</td>
<td>Paramètres <a href="https://popper.js.org/documentation.html">popper.js</a>.</td>
<td>Object</td>
<td>Se référer à  <a href="https://popper.js.org/documentation.html">popper.js</a>.</td>
<td><code>{ boundariesElement: 'body', gpuAcceleration: false }</code></td>
</tr>
<tr>
<td>open-delay</td>
<td>Délai avant l'apparition en millisecondes.</td>
<td>number</td>
<td>—</td>
<td>0</td>
</tr>
<tr>
<td>manual</td>
<td>Si le contrôle du Tooltip doit être manuel. <code>mouseenter</code> et <code>mouseleave</code> n'auront pas d'effet si <code>true</code>.</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>popper-class</td>
<td>Classe du popper de Tooltip.</td>
<td>string</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>enterable</td>
<td>Si la souris peut entrer dans la Tooltip.</td>
<td>Boolean</td>
<td>—</td>
<td>true</td>
</tr>
<tr>
<td>hide-after</td>
<td>Délai avant disparition.</td>
<td>number</td>
<td>—</td>
<td>0</td>
</tr>
<tr>
<td>tabindex</td>
<td><a href="https://developer.mozilla.org/fr/docs/Web/HTML/Attributs_universels/tabindex">tabindex</a> de Tooltip.</td>
<td>number</td>
<td>—</td>
<td>0</td>
</tr>
</tbody>
</table>
