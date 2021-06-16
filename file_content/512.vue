<h2 id="carousel"><a class="header-anchor" href="#carousel">¶</a> Carousel</h2>
<p>Affiche en boucle une série d'images ou de textes dans un espace limité.</p>
<h3 id="usage"><a class="header-anchor" href="#usage">¶</a> Usage</h3>
<demo-block>
        <div><p>Utilisez <code>el-carousel</code> avec <code>el-carousel-item</code>, et vous obtiendrez un carrousel. Le contenu de chaque slide est complètement personnalisable, il vous suffit juste de le placer à l'intérieur de la balise <code>el-carousel-item</code>. Par défaut le carrousel défile quand la souris passe sur un indicateur. Réglez <code>trigger</code> sur <code>click</code> et le carrousel défilera uniquement quand vous cliquerez sur l'indicateur.</p>
</div>
        <!--element-demo: <template>
  <div class="block">
    <span class="demonstration">Défile quand la souris passe sur l'indicateur (défaut)</span>
    <el-carousel height="150px">
      <el-carousel-item v-for="item in 4" :key="item">
        <h3 class="small">{{ item }}</h3>
      </el-carousel-item>
    </el-carousel>
  </div>
  <div class="block">
    <span class="demonstration">Défile quand on clique sur l'indicateur</span>
    <el-carousel trigger="click" height="150px">
      <el-carousel-item v-for="item in 4" :key="item">
        <h3 class="small">{{ item }}</h3>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<style>
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 150px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
</style>
:element-demo-->
        <template slot="highlight"><pre v-pre><code class="html">&lt;template&gt;
  &lt;div class=&quot;block&quot;&gt;
    &lt;span class=&quot;demonstration&quot;&gt;Défile quand la souris passe sur l'indicateur (défaut)&lt;/span&gt;
    &lt;el-carousel height=&quot;150px&quot;&gt;
      &lt;el-carousel-item v-for=&quot;item in 4&quot; :key=&quot;item&quot;&gt;
        &lt;h3 class=&quot;small&quot;&gt;{{ item }}&lt;/h3&gt;
      &lt;/el-carousel-item&gt;
    &lt;/el-carousel&gt;
  &lt;/div&gt;
  &lt;div class=&quot;block&quot;&gt;
    &lt;span class=&quot;demonstration&quot;&gt;Défile quand on clique sur l'indicateur&lt;/span&gt;
    &lt;el-carousel trigger=&quot;click&quot; height=&quot;150px&quot;&gt;
      &lt;el-carousel-item v-for=&quot;item in 4&quot; :key=&quot;item&quot;&gt;
        &lt;h3 class=&quot;small&quot;&gt;{{ item }}&lt;/h3&gt;
      &lt;/el-carousel-item&gt;
    &lt;/el-carousel&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;style&gt;
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 150px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
&lt;/style&gt;
</code></pre></template></demo-block><h3 id="indicateurs"><a class="header-anchor" href="#indicateurs">¶</a> Indicateurs</h3>
<p>Les indicateurs peuvent être affichés en dehors du carrousel.</p>
<demo-block>
        <div><p>L'attribut <code>indicator-position</code> détermine où les indicateurs sont localisés. Par défaut ils se trouvent à l'intérieur du carrousel, régler <code>indicator-position</code> sur <code>outside</code> les affichera à l'extérieur; régler <code>indicator-position</code> sur <code>none</code> les cachera totalement.</p>
</div>
        <!--element-demo: <template>
  <el-carousel indicator-position="outside">
    <el-carousel-item v-for="item in 4" :key="item">
      <h3>{{ item }}</h3>
    </el-carousel-item>
  </el-carousel>
</template>

<style>
  .el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
</style>
:element-demo-->
        <template slot="highlight"><pre v-pre><code class="html">&lt;template&gt;
  &lt;el-carousel indicator-position=&quot;outside&quot;&gt;
    &lt;el-carousel-item v-for=&quot;item in 4&quot; :key=&quot;item&quot;&gt;
      &lt;h3&gt;{{ item }}&lt;/h3&gt;
    &lt;/el-carousel-item&gt;
  &lt;/el-carousel&gt;
&lt;/template&gt;

&lt;style&gt;
  .el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
&lt;/style&gt;
</code></pre></template></demo-block><h3 id="fleches"><a class="header-anchor" href="#fleches">¶</a> Flèches</h3>
<p>Vous pouvez définir quand les flèches doivent apparaître.</p>
<demo-block>
        <div><p>L'attribut <code>arrow</code> détermine quand les flèches sont affichées. Par défaut elles apparaissent quand la souris passe sur le carrousel. Réglez <code>arrow</code> sur <code>always</code> ou <code>never</code> affiche ou cache les flèches de manière permanente.</p>
</div>
        <!--element-demo: <template>
  <el-carousel :interval="5000" arrow="always">
    <el-carousel-item v-for="item in 4" :key="item">
      <h3>{{ item }}</h3>
    </el-carousel-item>
  </el-carousel>
</template>

<style>
  .el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
</style>
:element-demo-->
        <template slot="highlight"><pre v-pre><code class="html">&lt;template&gt;
  &lt;el-carousel :interval=&quot;5000&quot; arrow=&quot;always&quot;&gt;
    &lt;el-carousel-item v-for=&quot;item in 4&quot; :key=&quot;item&quot;&gt;
      &lt;h3&gt;{{ item }}&lt;/h3&gt;
    &lt;/el-carousel-item&gt;
  &lt;/el-carousel&gt;
&lt;/template&gt;

&lt;style&gt;
  .el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
&lt;/style&gt;
</code></pre></template></demo-block><h3 id="mode-carte"><a class="header-anchor" href="#mode-carte">¶</a> Mode carte</h3>
<p>Quand la page est suffisamment large mais avec une hauteur limitée, vous pouvez activer le mode carte.</p>
<demo-block>
        <div><p>Réglez <code>type</code> sur <code>card</code> pour activer le mode carte. Hormis l'apparence, la principale différence par rapport au mode commun est que cliquer sur une des slides se trouvant de chaque coté fait directement défiler le carrousel.</p>
</div>
        <!--element-demo: <template>
  <el-carousel :interval="4000" type="card" height="200px">
    <el-carousel-item v-for="item in 6" :key="item">
      <h3 class="medium">{{ item }}</h3>
    </el-carousel-item>
  </el-carousel>
</template>

<style>
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
</style>
:element-demo-->
        <template slot="highlight"><pre v-pre><code class="html">&lt;template&gt;
  &lt;el-carousel :interval=&quot;4000&quot; type=&quot;card&quot; height=&quot;200px&quot;&gt;
    &lt;el-carousel-item v-for=&quot;item in 6&quot; :key=&quot;item&quot;&gt;
      &lt;h3 class=&quot;medium&quot;&gt;{{ item }}&lt;/h3&gt;
    &lt;/el-carousel-item&gt;
  &lt;/el-carousel&gt;
&lt;/template&gt;

&lt;style&gt;
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
&lt;/style&gt;
</code></pre></template></demo-block><p>Par défaut, <code>direction</code> est <code>horizontal</code>. Vous pouvez faire en sorte que le défilement soit vertical en mettant <code>direction</code> à <code>vertical</code>.</p>
<demo-block>
        
        <!--element-demo: <template>
  <el-carousel height="200px" direction="vertical" :autoplay="false">
    <el-carousel-item v-for="item in 4" :key="item">
      <h3 class="medium">{{ item }}</h3>
    </el-carousel-item>
  </el-carousel>
</template>

<style>
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
</style>
:element-demo-->
        <template slot="highlight"><pre v-pre><code class="html">&lt;template&gt;
  &lt;el-carousel height=&quot;200px&quot; direction=&quot;vertical&quot; :autoplay=&quot;false&quot;&gt;
    &lt;el-carousel-item v-for=&quot;item in 4&quot; :key=&quot;item&quot;&gt;
      &lt;h3 class=&quot;medium&quot;&gt;{{ item }}&lt;/h3&gt;
    &lt;/el-carousel-item&gt;
  &lt;/el-carousel&gt;
&lt;/template&gt;

&lt;style&gt;
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
&lt;/style&gt;
</code></pre></template></demo-block><h3 id="attributs-du-carrousel"><a class="header-anchor" href="#attributs-du-carrousel">¶</a> Attributs du Carrousel</h3>
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
<td>height</td>
<td>Hauteur du carrousel.</td>
<td>string</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>initial-index</td>
<td>Index de la slide initiale (commence à 0).</td>
<td>number</td>
<td>—</td>
<td>0</td>
</tr>
<tr>
<td>trigger</td>
<td>Comment les indicateurs sont déclenchés</td>
<td>string</td>
<td>hover/click</td>
<td>hover</td>
</tr>
<tr>
<td>autoplay</td>
<td>Si le carrousel défile automatiquement</td>
<td>boolean</td>
<td>—</td>
<td>true</td>
</tr>
<tr>
<td>interval</td>
<td>Intervalle pour le défilement automatique, en millisecondes.</td>
<td>number</td>
<td>—</td>
<td>3000</td>
</tr>
<tr>
<td>indicator-position</td>
<td>Position des indicateurs.</td>
<td>string</td>
<td>outside/none</td>
<td>—</td>
</tr>
<tr>
<td>arrow</td>
<td>Détermine quand les flèches sont affichées.</td>
<td>string</td>
<td>always/hover/never</td>
<td>hover</td>
</tr>
<tr>
<td>type</td>
<td>Type du carrousel.</td>
<td>string</td>
<td>card</td>
<td>—</td>
</tr>
<tr>
<td>loop</td>
<td>Affiche les éléments en boucle.</td>
<td>boolean</td>
<td>-</td>
<td>true</td>
</tr>
<tr>
<td>direction</td>
<td>Détermine la direction du défilement.</td>
<td>string</td>
<td>horizontal/vertical</td>
<td>horizontal</td>
</tr>
</tbody>
</table>
<h3 id="evenements-du-carrousel"><a class="header-anchor" href="#evenements-du-carrousel">¶</a> Évènements du Carrousel</h3>
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
<td>Se déclenche quand la slide active défile.</td>
<td>Index de la nouvelle slide, index de l'ancienne slide</td>
</tr>
</tbody>
</table>
<h3 id="methodes-du-carrousel"><a class="header-anchor" href="#methodes-du-carrousel">¶</a> Méthodes du Carrousel</h3>
<table>
<thead>
<tr>
<th>Mathode</th>
<th>Description</th>
<th>Paramètres</th>
</tr>
</thead>
<tbody>
<tr>
<td>setActiveItem</td>
<td>Défile manuellement vers une slide.</td>
<td>index de la slide d'arrivée, à partir de 0; ou bien le <code>name</code> du <code>el-carousel-item</code> correspondant</td>
</tr>
<tr>
<td>prev</td>
<td>Défile vers la slide précédente.</td>
<td>—</td>
</tr>
<tr>
<td>next</td>
<td>Défile vers la slide suivante.</td>
<td>—</td>
</tr>
</tbody>
</table>
<h3 id="attributs-du-carrousel-item"><a class="header-anchor" href="#attributs-du-carrousel-item">¶</a> Attributs du Carrousel-Item</h3>
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
<td>name</td>
<td>Nom de l'item, peut être utilisé dans <code>setActiveItem</code>.</td>
<td>string</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>label</td>
<td>Texte affiché au niveau de l'indicateur correspondant.</td>
<td>string</td>
<td>—</td>
<td>—</td>
</tr>
</tbody>
</table>
