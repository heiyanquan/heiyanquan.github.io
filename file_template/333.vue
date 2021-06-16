<h2 id="carousel"><a class="header-anchor" href="#carousel">¶</a> Carousel</h2>
<p>Presenta una serie de imágenes o textos en un espacio limitado</p>
<h3 id="uso-basico"><a class="header-anchor" href="#uso-basico">¶</a> Uso básico</h3>
<demo-block>
        <div><p>Combine <code>el-carousel</code>  con <code>el-carousel-item</code>, para conseguir el carrusel. El contenido de cada diapositiva es completamente personalizable, y sólo tiene que colocarla dentro de la etiqueta  <code>el-carousel-item</code> . Por defecto, el carrusel cambia cuando el ratón pasa por encima de un indicador. Fije  <code>trigger</code>  para  <code>click</code>, si lo que se desea es que el carrusel cambie sólo cuando se haga clic en un indicador.</p>
</div>
        <template slot="source"><element-demo0 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;template&gt;
  &lt;div class=&quot;block&quot;&gt;
    &lt;span class=&quot;demonstration&quot;&gt;Switch when indicator is hovered (default)&lt;/span&gt;
    &lt;el-carousel height=&quot;150px&quot;&gt;
      &lt;el-carousel-item v-for=&quot;item in 4&quot; :key=&quot;item&quot;&gt;
        &lt;h3 class=&quot;small&quot;&gt;{{ item }}&lt;/h3&gt;
      &lt;/el-carousel-item&gt;
    &lt;/el-carousel&gt;
  &lt;/div&gt;
  &lt;div class=&quot;block&quot;&gt;
    &lt;span class=&quot;demonstration&quot;&gt;Switch when indicator is clicked&lt;/span&gt;
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
</code></pre></template></demo-block><h3 id="indicadores"><a class="header-anchor" href="#indicadores">¶</a> Indicadores</h3>
<p>Los indicadores de paginación pueden mostrarse fuera del carrusel</p>
<demo-block>
        <div><p>El atributo  <code>indicator-position</code>  determina dónde se encuentran los indicadores de paginación. Por defecto están dentro del carrusel, y el ajuste de <code>indicator-position</code>  a <code>outside</code>  los mueve hacia fuera; en cambio <code>indicator-position</code>  a <code>none</code>  los oculta.</p>
</div>
        <template slot="source"><element-demo1 /></template>
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
</code></pre></template></demo-block><h3 id="flechas"><a class="header-anchor" href="#flechas">¶</a> Flechas</h3>
<p>Puede definir cuando se visualizan las flechas</p>
<demo-block>
        <div><p>El atributo <code>arrow</code> determina cuándo se visualizan las flechas. Por defecto aparecen cuando el ratón se desplaza sobre el carrusel. Ajuste <code>arrow</code> a <code>always</code> o <code>never</code> para mostrar u ocultar las flechas permanentemente.</p>
</div>
        <template slot="source"><element-demo2 /></template>
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
</code></pre></template></demo-block><h3 id="modo-card"><a class="header-anchor" href="#modo-card">¶</a> Modo Card</h3>
<p>Cuando una página es suficientemente ancha pero tiene una altura limitada, puede activar el modo <code>card</code> para carrusel.</p>
<demo-block>
        <div><p>Ajuste <code>type</code> a <code>card</code> para activar el modo tarjeta. Aparte de la apariencia, la mayor diferencia entre el modo tarjeta y el modo común es que al hacer clic en las diapositivas de ambos lados, el carrusel cambia directamente en modo tarjeta.</p>
</div>
        <template slot="source"><element-demo3 /></template>
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
</code></pre></template></demo-block><p>Por defecto, <code>direction</code> es <code>horizontal</code>. El carousel puede ser mostrado de forma vertical cambiando <code>direction</code> a <code>vertical</code>.</p>
<demo-block>
        
        <template slot="source"><element-demo4 /></template>
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
</code></pre></template></demo-block><h3 id="atributos-de-carousel"><a class="header-anchor" href="#atributos-de-carousel">¶</a> Atributos de Carousel</h3>
<table>
<thead>
<tr>
<th>Atributo</th>
<th>Descripción</th>
<th>Tipo</th>
<th>Valores aceptados</th>
<th>Por defecto</th>
</tr>
</thead>
<tbody>
<tr>
<td>height</td>
<td>Alto del carrusel</td>
<td>string</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>initial-index</td>
<td>Indice del slider inicial activo (empieza desde 0)</td>
<td>number</td>
<td>—</td>
<td>0</td>
</tr>
<tr>
<td>trigger</td>
<td>Evento que muestra los indicadores</td>
<td>string</td>
<td>hover/click</td>
<td>hover</td>
</tr>
<tr>
<td>autoplay</td>
<td>Si se enlazan automáticamente las diapositivas</td>
<td>boolean</td>
<td>—</td>
<td>true</td>
</tr>
<tr>
<td>interval</td>
<td>Intervalo del auto loop, en mili segundos</td>
<td>number</td>
<td>—</td>
<td>3000</td>
</tr>
<tr>
<td>indicator-position</td>
<td>Posición del indicador de paginación</td>
<td>string</td>
<td>outside/none</td>
<td>—</td>
</tr>
<tr>
<td>arrow</td>
<td>Cuando se muestran las flechas</td>
<td>string</td>
<td>always/hover/never</td>
<td>hover</td>
</tr>
<tr>
<td>type</td>
<td>Tipo de carrusel</td>
<td>string</td>
<td>card</td>
<td>—</td>
</tr>
<tr>
<td>loop</td>
<td>Si se muestra cíclicamente</td>
<td>boolean</td>
<td>—</td>
<td>true</td>
</tr>
<tr>
<td>direction</td>
<td>dirección en la que se muestra el contenido</td>
<td>string</td>
<td>horizontal/vertical</td>
<td>horizontal</td>
</tr>
</tbody>
</table>
<h3 id="eventos-de-carousel"><a class="header-anchor" href="#eventos-de-carousel">¶</a> Eventos de Carousel</h3>
<table>
<thead>
<tr>
<th>Nombre evento</th>
<th>Descripción</th>
<th>Parámetros</th>
</tr>
</thead>
<tbody>
<tr>
<td>change</td>
<td>Se dispara cuando el slider activo cambia</td>
<td>Indice del nuevo slider activo, indice del anterior slider activo.</td>
</tr>
</tbody>
</table>
<h3 id="metodos-de-carousel"><a class="header-anchor" href="#metodos-de-carousel">¶</a> Metodos de Carousel</h3>
<table>
<thead>
<tr>
<th>Metodos</th>
<th>Descripción</th>
<th>Parámetros</th>
</tr>
</thead>
<tbody>
<tr>
<td>setActiveItem</td>
<td>Cambio manual de slider</td>
<td>indice del slider al que se va a cambiar, empezando por 0; o el <code>name</code> del <code>el-carousel-item</code> correspondiente</td>
</tr>
<tr>
<td>prev</td>
<td>Cambia al slider anterior</td>
<td>—</td>
</tr>
<tr>
<td>next</td>
<td>Cambia al slider siguiente</td>
<td>—</td>
</tr>
</tbody>
</table>
<h3 id="atributos-de-carousel-item"><a class="header-anchor" href="#atributos-de-carousel-item">¶</a> Atributos de Carousel-Item</h3>
<table>
<thead>
<tr>
<th>Atributo</th>
<th>Descripción</th>
<th>Tipo</th>
<th>Valores aceptados</th>
<th>Por defecto</th>
</tr>
</thead>
<tbody>
<tr>
<td>name</td>
<td>Nombre del ítem que puede ser usado en <code>setActiveItem</code></td>
<td>string</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>label</td>
<td>Texto que se mostrara en el indicador de paginación correspondiente</td>
<td>string</td>
<td>—</td>
<td>—</td>
</tr>
</tbody>
</table>
