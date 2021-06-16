<h2 id="contenedor"><a class="header-anchor" href="#contenedor">¶</a> Contenedor</h2>
<p>Componentes contenedores para iniciar una estructura básica de un sitio:</p>
<p><code>&lt;el-container&gt;</code>: Contenedor. Cuando este elemento se anida con un <code>&lt;el-header&gt;</code> o <code>&lt;el-footer&gt;</code>, todos los elementos secundarios se organizan verticalmente.
De lo contrario, de forma horizontal.</p>
<p><code>&lt;el-header&gt;</code>: Contenedor para cabeceras.</p>
<p><code>&lt;el-aside&gt;</code>: Contenedor para secciones laterales (generalmente, una barra lateral).</p>
<p><code>&lt;el-main&gt;</code>: Contenedor para sección principal.</p>
<p><code>&lt;el-footer&gt;</code>: Contenedor para pie de página.</p>
<div class="tip">
<p>Estos componentes utilizan flex para el diseño, así que asegúrese que el navegador lo soporta. Además, los elementos directos de <code>&lt;el-container&gt;</code> tienen que ser uno o más de los últimos cuatro componentes. Y el elemento padre de los últimos cuatro componentes debe ser un <code>&lt;el-container&gt;</code>.</p>
</div>
<h3 id="disenos-comunes"><a class="header-anchor" href="#disenos-comunes">¶</a> Diseños comunes</h3>
<demo-block>
        
        <template slot="source"><element-demo0 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;el-container&gt;
  &lt;el-header&gt;Cabecera&lt;/el-header&gt;
  &lt;el-main&gt;Principal&lt;/el-main&gt;
&lt;/el-container&gt;

&lt;el-container&gt;
  &lt;el-header&gt;Cabecera&lt;/el-header&gt;
  &lt;el-main&gt;Principal&lt;/el-main&gt;
  &lt;el-footer&gt;Pie de página&lt;/el-footer&gt;
&lt;/el-container&gt;

&lt;el-container&gt;
  &lt;el-aside width=&quot;200px&quot;&gt;Barra lateral&lt;/el-aside&gt;
  &lt;el-main&gt;Principal&lt;/el-main&gt;
&lt;/el-container&gt;

&lt;el-container&gt;
  &lt;el-header&gt;Cabecera&lt;/el-header&gt;
  &lt;el-container&gt;
    &lt;el-aside width=&quot;200px&quot;&gt;Barra lateral&lt;/el-aside&gt;
    &lt;el-main&gt;Principal&lt;/el-main&gt;
  &lt;/el-container&gt;
&lt;/el-container&gt;

&lt;el-container&gt;
  &lt;el-header&gt;Cabecera&lt;/el-header&gt;
  &lt;el-container&gt;
    &lt;el-aside width=&quot;200px&quot;&gt;Barra lateral&lt;/el-aside&gt;
    &lt;el-container&gt;
      &lt;el-main&gt;Principal&lt;/el-main&gt;
      &lt;el-footer&gt;Pie de página&lt;/el-footer&gt;
    &lt;/el-container&gt;
  &lt;/el-container&gt;
&lt;/el-container&gt;

&lt;el-container&gt;
  &lt;el-aside width=&quot;200px&quot;&gt;Barra lateral&lt;/el-aside&gt;
  &lt;el-container&gt;
    &lt;el-header&gt;Cabecera&lt;/el-header&gt;
    &lt;el-main&gt;Principal&lt;/el-main&gt;
  &lt;/el-container&gt;
&lt;/el-container&gt;

&lt;el-container&gt;
  &lt;el-aside width=&quot;200px&quot;&gt;Barra lateral&lt;/el-aside&gt;
  &lt;el-container&gt;
    &lt;el-header&gt;Cabecera&lt;/el-header&gt;
    &lt;el-main&gt;Principal&lt;/el-main&gt;
    &lt;el-footer&gt;Pie de página&lt;/el-footer&gt;
  &lt;/el-container&gt;
&lt;/el-container&gt;

&lt;style&gt;
  .el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
  
  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }
  
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }
  
  body &gt; .el-container {
    margin-bottom: 40px;
  }
  
  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }
  
  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
&lt;/style&gt;
</code></pre></template></demo-block><h3 id="ejemplo"><a class="header-anchor" href="#ejemplo">¶</a> Ejemplo</h3>
<demo-block>
        
        <template slot="source"><element-demo1 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;el-container style=&quot;height: 500px; border: 1px solid #eee&quot;&gt;
  &lt;el-aside width=&quot;200px&quot; style=&quot;background-color: rgb(238, 241, 246)&quot;&gt;
    &lt;el-menu :default-openeds=&quot;['1', '3']&quot;&gt;
      &lt;el-submenu index=&quot;1&quot;&gt;
        &lt;template slot=&quot;title&quot;&gt;&lt;i class=&quot;el-icon-message&quot;&gt;&lt;/i&gt;Navigator One&lt;/template&gt;
        &lt;el-menu-item-group&gt;
          &lt;template slot=&quot;title&quot;&gt;Group 1&lt;/template&gt;
          &lt;el-menu-item index=&quot;1-1&quot;&gt;Option 1&lt;/el-menu-item&gt;
          &lt;el-menu-item index=&quot;1-2&quot;&gt;Option 2&lt;/el-menu-item&gt;
        &lt;/el-menu-item-group&gt;
        &lt;el-menu-item-group title=&quot;Group 2&quot;&gt;
          &lt;el-menu-item index=&quot;1-3&quot;&gt;Option 3&lt;/el-menu-item&gt;
        &lt;/el-menu-item-group&gt;
        &lt;el-submenu index=&quot;1-4&quot;&gt;
          &lt;template slot=&quot;title&quot;&gt;Option4&lt;/template&gt;
          &lt;el-menu-item index=&quot;1-4-1&quot;&gt;Option 4-1&lt;/el-menu-item&gt;
        &lt;/el-submenu&gt;
      &lt;/el-submenu&gt;
      &lt;el-submenu index=&quot;2&quot;&gt;
        &lt;template slot=&quot;title&quot;&gt;&lt;i class=&quot;el-icon-menu&quot;&gt;&lt;/i&gt;Navigator Two&lt;/template&gt;
        &lt;el-menu-item-group&gt;
          &lt;template slot=&quot;title&quot;&gt;Group 1&lt;/template&gt;
          &lt;el-menu-item index=&quot;2-1&quot;&gt;Option 1&lt;/el-menu-item&gt;
          &lt;el-menu-item index=&quot;2-2&quot;&gt;Option 2&lt;/el-menu-item&gt;
        &lt;/el-menu-item-group&gt;
        &lt;el-menu-item-group title=&quot;Group 2&quot;&gt;
          &lt;el-menu-item index=&quot;2-3&quot;&gt;Option 3&lt;/el-menu-item&gt;
        &lt;/el-menu-item-group&gt;
        &lt;el-submenu index=&quot;2-4&quot;&gt;
          &lt;template slot=&quot;title&quot;&gt;Option 4&lt;/template&gt;
          &lt;el-menu-item index=&quot;2-4-1&quot;&gt;Option 4-1&lt;/el-menu-item&gt;
        &lt;/el-submenu&gt;
      &lt;/el-submenu&gt;
      &lt;el-submenu index=&quot;3&quot;&gt;
        &lt;template slot=&quot;title&quot;&gt;&lt;i class=&quot;el-icon-setting&quot;&gt;&lt;/i&gt;Navigator Three&lt;/template&gt;
        &lt;el-menu-item-group&gt;
          &lt;template slot=&quot;title&quot;&gt;Group 1&lt;/template&gt;
          &lt;el-menu-item index=&quot;3-1&quot;&gt;Option 1&lt;/el-menu-item&gt;
          &lt;el-menu-item index=&quot;3-2&quot;&gt;Option 2&lt;/el-menu-item&gt;
        &lt;/el-menu-item-group&gt;
        &lt;el-menu-item-group title=&quot;Group 2&quot;&gt;
          &lt;el-menu-item index=&quot;3-3&quot;&gt;Option 3&lt;/el-menu-item&gt;
        &lt;/el-menu-item-group&gt;
        &lt;el-submenu index=&quot;3-4&quot;&gt;
          &lt;template slot=&quot;title&quot;&gt;Option 4&lt;/template&gt;
          &lt;el-menu-item index=&quot;3-4-1&quot;&gt;Option 4-1&lt;/el-menu-item&gt;
        &lt;/el-submenu&gt;
      &lt;/el-submenu&gt;
    &lt;/el-menu&gt;
  &lt;/el-aside&gt;
  
  &lt;el-container&gt;
    &lt;el-header style=&quot;text-align: right; font-size: 12px&quot;&gt;
      &lt;el-dropdown&gt;
        &lt;i class=&quot;el-icon-setting&quot; style=&quot;margin-right: 15px&quot;&gt;&lt;/i&gt;
        &lt;el-dropdown-menu slot=&quot;dropdown&quot;&gt;
          &lt;el-dropdown-item&gt;View&lt;/el-dropdown-item&gt;
          &lt;el-dropdown-item&gt;Add&lt;/el-dropdown-item&gt;
          &lt;el-dropdown-item&gt;Delete&lt;/el-dropdown-item&gt;
        &lt;/el-dropdown-menu&gt;
      &lt;/el-dropdown&gt;
      &lt;span&gt;Tom&lt;/span&gt;
    &lt;/el-header&gt;
    
    &lt;el-main&gt;
      &lt;el-table :data=&quot;tableData&quot;&gt;
        &lt;el-table-column prop=&quot;date&quot; label=&quot;Date&quot; width=&quot;140&quot;&gt;
        &lt;/el-table-column&gt;
        &lt;el-table-column prop=&quot;name&quot; label=&quot;Name&quot; width=&quot;120&quot;&gt;
        &lt;/el-table-column&gt;
        &lt;el-table-column prop=&quot;address&quot; label=&quot;Address&quot;&gt;
        &lt;/el-table-column&gt;
      &lt;/el-table&gt;
    &lt;/el-main&gt;
  &lt;/el-container&gt;
&lt;/el-container&gt;

&lt;style&gt;
  .el-header {
    background-color: #B3C0D1;
    color: #333;
    line-height: 60px;
  }
  
  .el-aside {
    color: #333;
  }
&lt;/style&gt;

&lt;script&gt;
  export default {
    data() {
      const item = {
        date: '2016-05-02',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles'
      };
      return {
        tableData: Array(20).fill(item)
      }
    }
  };
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="atributos-de-contenedor"><a class="header-anchor" href="#atributos-de-contenedor">¶</a> Atributos de contenedor</h3>
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
<td>dirección de diseño para elementos secundarios</td>
<td>string</td>
<td>horizontal / vertical</td>
<td>vertical cuando el elemento está anidado con <code>el-header</code>, de lo contrario, horizontal</td>
</tr>
</tbody>
</table>
<h3 id="atributos-de-cabecera"><a class="header-anchor" href="#atributos-de-cabecera">¶</a> Atributos de cabecera</h3>
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
<td>altura de la cabecera</td>
<td>string</td>
<td>—</td>
<td>60px</td>
</tr>
</tbody>
</table>
<h3 id="atributos-de-barra-lateral"><a class="header-anchor" href="#atributos-de-barra-lateral">¶</a> Atributos de barra lateral</h3>
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
<td>width</td>
<td>ancho de la barra lateral</td>
<td>string</td>
<td>—</td>
<td>300px</td>
</tr>
</tbody>
</table>
<h3 id="atributos-de-pie-de-pagina"><a class="header-anchor" href="#atributos-de-pie-de-pagina">¶</a> Atributos de pie de página</h3>
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
<td>altura del pie de página</td>
<td>string</td>
<td>—</td>
<td>60px</td>
</tr>
</tbody>
</table>
