<h2 id="pageheader"><a class="header-anchor" href="#pageheader">¶</a> PageHeader</h2>
<p>Si la ruta de la página es simple, se recomienda utilizar  PageHeader en lugar de Breadcrumb.</p>
<h3 id="basico"><a class="header-anchor" href="#basico">¶</a> Básico</h3>
<demo-block>
        
        <template slot="source"><element-demo0 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;el-page-header @back=&quot;goBack&quot; content=&quot;detail&quot;&gt;
&lt;/el-page-header&gt;

&lt;script&gt;
  export default {
    methods: {
      goBack() {
        console.log('go back');
      }
    }
  }
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="atributos"><a class="header-anchor" href="#atributos">¶</a> Atributos</h3>
<table>
<thead>
<tr>
<th>Atributos</th>
<th>Descripción</th>
<th>Tipo</th>
<th>Valores aceptados</th>
<th>Por defecto</th>
</tr>
</thead>
<tbody>
<tr>
<td>title</td>
<td>titulo principal</td>
<td>string</td>
<td>—</td>
<td>Back</td>
</tr>
<tr>
<td>content</td>
<td>contenido</td>
<td>string</td>
<td>—</td>
<td>—</td>
</tr>
</tbody>
</table>
<h3 id="eventos"><a class="header-anchor" href="#eventos">¶</a> Eventos</h3>
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
<td>back</td>
<td>se activa cuando se hace clic en el lado derecho</td>
<td>—</td>
</tr>
</tbody>
</table>
<h3 id="slots"><a class="header-anchor" href="#slots">¶</a> Slots</h3>
<table>
<thead>
<tr>
<th>Nombre del slot</th>
<th>Descripción</th>
</tr>
</thead>
<tbody>
<tr>
<td>title</td>
<td>titulo</td>
</tr>
<tr>
<td>content</td>
<td>contenido</td>
</tr>
</tbody>
</table>
