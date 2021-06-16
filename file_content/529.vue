<h2 id="backtop"><a class="header-anchor" href="#backtop">¶</a> Backtop</h2>
<p>Un bouton pour revenir en haut de la page</p>
<h3 id="basic-usage"><a class="header-anchor" href="#basic-usage">¶</a> Basic usage</h3>
<p>Scrollez en bas de la page pour voir le bouton en bas à droite.</p>
<demo-block>
        
        <!--element-demo: <template>
  Scrollez en bas de la page pour voir le bouton en bas à droite.
  <el-backtop target=".page-component__scroll .el-scrollbar__wrap"></el-backtop>
</template>
:element-demo-->
        <template slot="highlight"><pre v-pre><code class="html">&lt;template&gt;
  Scrollez en bas de la page pour voir le bouton en bas à droite.
  &lt;el-backtop target=&quot;.page-component__scroll .el-scrollbar__wrap&quot;&gt;&lt;/el-backtop&gt;
&lt;/template&gt;
</code></pre></template></demo-block><h3 id="customizations"><a class="header-anchor" href="#customizations">¶</a> Customizations</h3>
<p>La zone d'affichage est de 40px * 40px.</p>
<demo-block>
        
        <!--element-demo: <template>
  Scrollez en bas de la page pour voir le bouton en bas à droite.
  <el-backtop target=".page-component__scroll .el-scrollbar__wrap" :bottom="100">
    <div
      style="{
        height: 100%;
        width: 100%;
        background-color: #f2f5f6;
        box-shadow: 0 0 6px rgba(0,0,0, .12);
        text-align: center;
        line-height: 40px;
        color: #1989fa;
      }"
    >
      UP
    </div>
  </el-backtop>
</template>
:element-demo-->
        <template slot="highlight"><pre v-pre><code class="html">&lt;template&gt;
  Scrollez en bas de la page pour voir le bouton en bas à droite.
  &lt;el-backtop target=&quot;.page-component__scroll .el-scrollbar__wrap&quot; :bottom=&quot;100&quot;&gt;
    &lt;div
      style=&quot;{
        height: 100%;
        width: 100%;
        background-color: #f2f5f6;
        box-shadow: 0 0 6px rgba(0,0,0, .12);
        text-align: center;
        line-height: 40px;
        color: #1989fa;
      }&quot;
    &gt;
      UP
    &lt;/div&gt;
  &lt;/el-backtop&gt;
&lt;/template&gt;
</code></pre></template></demo-block><h3 id="attributes"><a class="header-anchor" href="#attributes">¶</a> Attributes</h3>
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
<td>target</td>
<td>La cible pour déclencher le scroll</td>
<td>string</td>
<td></td>
<td></td>
</tr>
<tr>
<td>visibility-height</td>
<td>Le bouton ne s'affichera pas tant que la hauteur de défilement n'aura pas atteint cette valeur.</td>
<td>number</td>
<td></td>
<td>200</td>
</tr>
<tr>
<td>right</td>
<td>La distance du bord droit</td>
<td>number</td>
<td></td>
<td>40</td>
</tr>
<tr>
<td>bottom</td>
<td>La distance du bord gauche</td>
<td>number</td>
<td></td>
<td>40</td>
</tr>
</tbody>
</table>
<h3 id="events"><a class="header-anchor" href="#events">¶</a> Events</h3>
<table>
<thead>
<tr>
<th>Event Name</th>
<th>Description</th>
<th>Parameters</th>
</tr>
</thead>
<tbody>
<tr>
<td>click</td>
<td>Se déclenche quand l'utilisateur clique</td>
<td>click event</td>
</tr>
</tbody>
</table>
