<h2 id="divider"><a class="header-anchor" href="#divider">¶</a> Divider</h2>
<p>La línea divisoria que separa el contenido.</p>
<h3 id="uso-basico"><a class="header-anchor" href="#uso-basico">¶</a> Uso básico</h3>
<p>Divide el texto de los diferentes párrafos.</p>
<demo-block>
        
        <template slot="source"><element-demo0 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;template&gt;
  &lt;div&gt;
    &lt;span&gt;I sit at my window this morning where the world like a passer-by stops for a moment, nods to me and goes.&lt;/span&gt;
    &lt;el-divider&gt;&lt;/el-divider&gt;
    &lt;span&gt;There little thoughts are the rustle of leaves; they have their whisper of joy in my mind.&lt;/span&gt;
  &lt;/div&gt;
&lt;/template&gt;
</code></pre></template></demo-block><h3 id="contenido-personalizado"><a class="header-anchor" href="#contenido-personalizado">¶</a> Contenido personalizado</h3>
<p>Puede personalizar el contenido en la línea divisoria.</p>
<demo-block>
        
        <template slot="source"><element-demo1 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;template&gt;
  &lt;div&gt;
    &lt;span&gt;What you are you do not see, what you see is your shadow. &lt;/span&gt;
    &lt;el-divider content-position=&quot;left&quot;&gt;Rabindranath Tagore&lt;/el-divider&gt;
    &lt;span&gt;I cannot choose the best. The best chooses me.&lt;/span&gt;
    &lt;el-divider&gt;&lt;i class=&quot;el-icon-star-on&quot;&gt;&lt;/i&gt;&lt;/el-divider&gt;
    &lt;span&gt;My wishes are fools, they shout across thy song, my Master. Let me but listen.&lt;/span&gt;
    &lt;el-divider content-position=&quot;right&quot;&gt;Rabindranath Tagore&lt;/el-divider&gt;
  &lt;/div&gt;
&lt;/template&gt;
</code></pre></template></demo-block><h3 id="division-vertical"><a class="header-anchor" href="#division-vertical">¶</a> División vertical</h3>
<demo-block>
        
        <template slot="source"><element-demo2 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;template&gt;
  &lt;div&gt;
    &lt;span&gt;Rain&lt;/span&gt;
    &lt;el-divider direction=&quot;vertical&quot;&gt;&lt;/el-divider&gt;
    &lt;span&gt;Home&lt;/span&gt;
    &lt;el-divider direction=&quot;vertical&quot;&gt;&lt;/el-divider&gt;
    &lt;span&gt;Grass&lt;/span&gt;
  &lt;/div&gt;
&lt;/template&gt;
</code></pre></template></demo-block><h3 id="divider-atributos"><a class="header-anchor" href="#divider-atributos">¶</a> Divider Atributos</h3>
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
<td>direction</td>
<td>indica la dirección del separador</td>
<td>string</td>
<td>horizontal / vertical</td>
<td>horizontal</td>
</tr>
<tr>
<td>content-position</td>
<td>personaliza el contenido en la línea divisoria</td>
<td>String</td>
<td>left / right / center</td>
<td>center</td>
</tr>
</tbody>
</table>
