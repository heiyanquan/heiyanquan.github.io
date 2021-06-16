<h2 id="pagination"><a class="header-anchor" href="#pagination">¶</a> Pagination</h2>
<p>Si vous avez beaucoup de données à afficher sur une seule page, il est préférable d'utiliser une pagination.</p>
<h3 id="usage"><a class="header-anchor" href="#usage">¶</a> Usage</h3>
<demo-block>
        <div><p>Configurez <code>layout</code> avec les différent éléments de pagination que vous souhaitez, séparés par des virgules. Les éléments possibles sont: <code>prev</code> (pour aller vers la page précédente), <code>next</code> (pour aller vers la page suivante), <code>pager</code> (liste des pages), <code>jumper</code> (un champ pour aller directement à une page précise), <code>total</code> (Le nombre total d'entrées), <code>size</code> (un sélecteur qui détermine la taille de la page) et <code>-&gt;</code>(chaque élément après celui-ci sera poussé vers la droite).</p>
</div>
        <template slot="source"><element-demo0 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;div class=&quot;block&quot;&gt;
  &lt;span class=&quot;demonstration&quot;&gt;Quand vous avez quelques pages&lt;/span&gt;
  &lt;el-pagination
    layout=&quot;prev, pager, next&quot;
    :total=&quot;50&quot;&gt;
  &lt;/el-pagination&gt;
&lt;/div&gt;
&lt;div class=&quot;block&quot;&gt;
  &lt;span class=&quot;demonstration&quot;&gt;Quand vous avez plus que 7 pages&lt;/span&gt;
  &lt;el-pagination
    layout=&quot;prev, pager, next&quot;
    :total=&quot;1000&quot;&gt;
  &lt;/el-pagination&gt;
&lt;/div&gt;
</code></pre></template></demo-block><h3 id="nombre-de-pages"><a class="header-anchor" href="#nombre-de-pages">¶</a> Nombre de pages</h3>
<demo-block>
        <div><p>Par défaut, Pagination réduit les boutons lorsqu'il y a plus de 7 pages. Ce nombre est configurable avec l'attribut <code>pager-count</code>.</p>
</div>
        <template slot="source"><element-demo1 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;el-pagination
  :page-size=&quot;20&quot;
  :pager-count=&quot;11&quot;
  layout=&quot;prev, pager, next&quot;
  :total=&quot;1000&quot;&gt;
&lt;/el-pagination&gt;
</code></pre></template></demo-block><h3 id="boutons-avec-couleur-de-fond"><a class="header-anchor" href="#boutons-avec-couleur-de-fond">¶</a> Boutons avec couleur de fond</h3>
<demo-block>
        <div><p>Réglez l'attribut <code>background</code> pour change la couleur de fond des boutons.</p>
</div>
        <template slot="source"><element-demo2 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;el-pagination
  background
  layout=&quot;prev, pager, next&quot;
  :total=&quot;1000&quot;&gt;
&lt;/el-pagination&gt;
</code></pre></template></demo-block><h3 id="petite-pagination"><a class="header-anchor" href="#petite-pagination">¶</a> Petite pagination</h3>
<p>Utilisez une pagination de taille réduite si vous manquez d'espace.</p>
<demo-block>
        <div><p>Ajoutez simplement l'attribut <code>small</code> et la pagination sera de taille réduite.</p>
</div>
        <template slot="source"><element-demo3 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;el-pagination
  small
  layout=&quot;prev, pager, next&quot;
  :total=&quot;50&quot;&gt;
&lt;/el-pagination&gt;
</code></pre></template></demo-block><h3 id="plus-d-elements"><a class="header-anchor" href="#plus-d-elements">¶</a> Plus d'éléments</h3>
<p>Vous pouvez ajouter plus de modules suivant vos besoins.</p>
<demo-block>
        <div><p>Cet exemple contient un use-case complet. Il utilise les évènements <code>size-change</code> et <code>current-change</code> pour gérer la taille de la page et son changement. <code>page-sizes</code> accepte un tableau d'entiers, chacun représentant une taille dans les options de <code>sizes</code>, e.g. <code>[100, 200, 300, 400]</code> indique que le sélecteur aura quatre options: 100, 200, 300 ou 400 entrées par page.</p>
</div>
        <template slot="source"><element-demo4 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;template&gt;
  &lt;div class=&quot;block&quot;&gt;
    &lt;span class=&quot;demonstration&quot;&gt;Total d'entrées&lt;/span&gt;
    &lt;el-pagination
      @size-change=&quot;handleSizeChange&quot;
      @current-change=&quot;handleCurrentChange&quot;
      :current-page.sync=&quot;currentPage1&quot;
      :page-size=&quot;100&quot;
      layout=&quot;total, prev, pager, next&quot;
      :total=&quot;1000&quot;&gt;
    &lt;/el-pagination&gt;
  &lt;/div&gt;
  &lt;div class=&quot;block&quot;&gt;
    &lt;span class=&quot;demonstration&quot;&gt;Changement de taille de la page&lt;/span&gt;
    &lt;el-pagination
      @size-change=&quot;handleSizeChange&quot;
      @current-change=&quot;handleCurrentChange&quot;
      :current-page.sync=&quot;currentPage2&quot;
      :page-sizes=&quot;[100, 200, 300, 400]&quot;
      :page-size=&quot;100&quot;
      layout=&quot;sizes, prev, pager, next&quot;
      :total=&quot;1000&quot;&gt;
    &lt;/el-pagination&gt;
  &lt;/div&gt;
  &lt;div class=&quot;block&quot;&gt;
    &lt;span class=&quot;demonstration&quot;&gt;Aller à&lt;/span&gt;
    &lt;el-pagination
      @size-change=&quot;handleSizeChange&quot;
      @current-change=&quot;handleCurrentChange&quot;
      :current-page.sync=&quot;currentPage3&quot;
      :page-size=&quot;100&quot;
      layout=&quot;prev, pager, next, jumper&quot;
      :total=&quot;1000&quot;&gt;
    &lt;/el-pagination&gt;
  &lt;/div&gt;
  &lt;div class=&quot;block&quot;&gt;
    &lt;span class=&quot;demonstration&quot;&gt;Tous en même temps&lt;/span&gt;
    &lt;el-pagination
      @size-change=&quot;handleSizeChange&quot;
      @current-change=&quot;handleCurrentChange&quot;
      :current-page.sync=&quot;currentPage4&quot;
      :page-sizes=&quot;[100, 200, 300, 400]&quot;
      :page-size=&quot;100&quot;
      layout=&quot;total, sizes, prev, pager, next, jumper&quot;
      :total=&quot;400&quot;&gt;
    &lt;/el-pagination&gt;
  &lt;/div&gt;
&lt;/template&gt;
&lt;script&gt;
  export default {
    methods: {
      handleSizeChange(val) {
        console.log(`${val} items per page`);
      },
      handleCurrentChange(val) {
        console.log(`current page: ${val}`);
      }
    },
    data() {
      return {
        currentPage1: 5,
        currentPage2: 5,
        currentPage3: 5,
        currentPage4: 4
      };
    }
  }
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="cacher-la-pagination-s-il-n-y-a-qu-une-seule-page"><a class="header-anchor" href="#cacher-la-pagination-s-il-n-y-a-qu-une-seule-page">¶</a> Cacher la pagination s'il n'y a qu'une seule page</h3>
<p>Lorsqu'il n'y a qu'une seule page, il est possible de cacher la pagination avec l'attribut <code>hide-on-single-page</code>.</p>
<demo-block>
        
        <template slot="source"><element-demo5 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;div&gt;
 &lt;el-switch v-model=&quot;value&quot;&gt;
 &lt;/el-switch&gt;
 &lt;el-pagination
  :hide-on-single-page=&quot;value&quot;
  :total=&quot;5&quot;
  layout=&quot;prev, pager, next&quot;&gt;
&lt;/el-pagination&gt;
&lt;/div&gt;

&lt;script&gt;
  export default {
    data() {
      return {
        value: false
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
<td>small</td>
<td>Si la pagination doit être petite.</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>background</td>
<td>Si les boutons doivent avoir une couleur de fond.</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>page-size</td>
<td>Nombre d'entrées sur chaque page, supporte le modificateur .sync.</td>
<td>number</td>
<td>—</td>
<td>10</td>
</tr>
<tr>
<td>total</td>
<td>Nombre total d'entrées.</td>
<td>number</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>page-count</td>
<td>Nombre de pages. Réglez <code>total</code> ou <code>page-count</code> et le nombre de pages sera affiché; si vous avez besoin de <code>page-sizes</code>, <code>total</code> est requis.</td>
<td>number</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>pager-count</td>
<td>Nombre de sélecteurs de pages. Pagination se réduit lorsque le nombre de pages dépasse cette valeur.</td>
<td>number</td>
<td>Nombre impair entre 5 et 21.</td>
<td>7</td>
</tr>
<tr>
<td>current-page</td>
<td>Le numéro de page courant, supporte le modificateur .sync.</td>
<td>number</td>
<td>—</td>
<td>1</td>
</tr>
<tr>
<td>layout</td>
<td>L'ensemble des éléments de la pagination, séparés par des virgules.</td>
<td>string</td>
<td><code>sizes</code>, <code>prev</code>, <code>pager</code>, <code>next</code>, <code>jumper</code>, <code>-&gt;</code>, <code>total</code>, <code>slot</code></td>
<td>'prev, pager, next, jumper, -&gt;, total'</td>
</tr>
<tr>
<td>page-sizes</td>
<td>Options pour la taille des pages.</td>
<td>number[]</td>
<td>—</td>
<td>[10, 20, 30, 40, 50, 100]</td>
</tr>
<tr>
<td>popper-class</td>
<td>Classe du menu de sélection de la taille des pages.</td>
<td>string</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>prev-text</td>
<td>Texte du bouton prev.</td>
<td>string</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>next-text</td>
<td>Texte du bouton next.</td>
<td>string</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>disabled</td>
<td>Si la pagination est désactivée.</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>hide-on-single-page</td>
<td>Si la pagination doit être cachée quand il n'y a qu'une seule page.</td>
<td>boolean</td>
<td>—</td>
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
<td>size-change</td>
<td>Se déclenche quand <code>page-size</code> change.</td>
<td>La nouvelle taille.</td>
</tr>
<tr>
<td>current-change</td>
<td>Se déclenche quand <code>current-page</code> change.</td>
<td>La nouvelle page courante</td>
</tr>
<tr>
<td>prev-click</td>
<td>Se déclenche quand le bouton prev est cliqué et que la page courante change.</td>
<td>La nouvelle page courante.</td>
</tr>
<tr>
<td>next-click</td>
<td>Se déclenche quand le bouton next est cliqué et que la page courante change.</td>
<td>La nouvelle page courante.</td>
</tr>
</tbody>
</table>
<h3 id="slot"><a class="header-anchor" href="#slot">¶</a> Slot</h3>
<table>
<thead>
<tr>
<th>Name</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>—</td>
<td>Contenu personnalisé. Pour l'utiliser vous devez déclarer <code>slot</code> dans <code>layout</code>.</td>
</tr>
</tbody>
</table>
