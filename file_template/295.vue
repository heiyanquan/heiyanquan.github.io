<h2 id="dropdown"><a class="header-anchor" href="#dropdown">¶</a> Dropdown</h2>
<p>Menú conmutable para visualizar listas de enlaces y acciones.</p>
<h3 id="uso-basico"><a class="header-anchor" href="#uso-basico">¶</a> Uso básico</h3>
<p>Pase el ratón por el menú desplegable para desplegarlo y obtener más acciones.</p>
<demo-block>
        <div><p>El elemento desencadenante se representa con el slot predeterminado, y la parte desplegable se representa con el slot llamado dropdown. Por defecto, la lista desplegable se muestra cuando se pasa el ratón por encima del elemento desencadenante sin necesidad de hacer clic en él.</p>
</div>
        <template slot="source"><element-demo0 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;el-dropdown&gt;
  &lt;span class=&quot;el-dropdown-link&quot;&gt;
    Dropdown List&lt;i class=&quot;el-icon-arrow-down el-icon--right&quot;&gt;&lt;/i&gt;
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

</code></pre></template></demo-block><h3 id="elemento-detonante"><a class="header-anchor" href="#elemento-detonante">¶</a> Elemento detonante</h3>
<p>Utilizando un botón para activar la lista desplegable.</p>
<demo-block>
        <div><p>Utilice <code>split-button</code> para dividir el elemento detonante en un grupo de botones, siendo el botón izquierdo un botón normal y el botón derecho el objetivo real de la detonación. Si desea insertar una línea de separación entre la posición tres y la posición cuatro, sólo añada un divisor de clase a la posición cuatro.</p>
</div>
        <template slot="source"><element-demo1 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;el-dropdown&gt;
  &lt;el-button type=&quot;primary&quot;&gt;
    Dropdown List&lt;i class=&quot;el-icon-arrow-down el-icon--right&quot;&gt;&lt;/i&gt;
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
  Dropdown List
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
</code></pre></template></demo-block><h3 id="como-detonar-el-evento"><a class="header-anchor" href="#como-detonar-el-evento">¶</a> Cómo detonar el evento</h3>
<p>Haga clic en el elemento detonante o sobre él.</p>
<demo-block>
        <div><p>Utilice el atributo <code>trigger</code>. Por defecto, es <code>hover</code>.</p>
</div>
        <template slot="source"><element-demo2 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;el-row class=&quot;block-col-2&quot;&gt;
  &lt;el-col :span=&quot;12&quot;&gt;
    &lt;span class=&quot;demonstration&quot;&gt;hover to trigger&lt;/span&gt;
    &lt;el-dropdown&gt;
      &lt;span class=&quot;el-dropdown-link&quot;&gt;
        Dropdown List&lt;i class=&quot;el-icon-arrow-down el-icon--right&quot;&gt;&lt;/i&gt;
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
    &lt;span class=&quot;demonstration&quot;&gt;click to trigger&lt;/span&gt;
    &lt;el-dropdown trigger=&quot;click&quot;&gt;
      &lt;span class=&quot;el-dropdown-link&quot;&gt;
        Dropdown List&lt;i class=&quot;el-icon-arrow-down el-icon--right&quot;&gt;&lt;/i&gt;
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
</code></pre></template></demo-block><h3 id="ocultamiento-del-menu"><a class="header-anchor" href="#ocultamiento-del-menu">¶</a> Ocultamiento del menú</h3>
<p>Use <code>hide-on-click</code> para definir si el menú se cierra al hacer clic.</p>
<demo-block>
        <div><p>El menú predeterminado se cerrará cuando haga clic en los elementos del menú, y se puede desactivar configurando <code>hide-on-click</code> como false.</p>
</div>
        <template slot="source"><element-demo3 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;el-dropdown :hide-on-click=&quot;false&quot;&gt;
  &lt;span class=&quot;el-dropdown-link&quot;&gt;
    Dropdown List&lt;i class=&quot;el-icon-arrow-down el-icon--right&quot;&gt;&lt;/i&gt;
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
</code></pre></template></demo-block><h3 id="evento-command"><a class="header-anchor" href="#evento-command">¶</a> Evento command</h3>
<p>Al hacer clic en cada elemento desplegable se detona un evento cuyo parámetro es asignado por cada elemento.</p>
<demo-block>
        
        <template slot="source"><element-demo4 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;el-dropdown @command=&quot;handleCommand&quot;&gt;
  &lt;span class=&quot;el-dropdown-link&quot;&gt;
    Dropdown List&lt;i class=&quot;el-icon-arrow-down el-icon--right&quot;&gt;&lt;/i&gt;
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
</code></pre></template></demo-block><h3 id="tamanos"><a class="header-anchor" href="#tamanos">¶</a> Tamaños</h3>
<p>Además del tamaño predeterminado, el componente Dropdown proporciona tres tamaños adicionales para que pueda elegir entre diferentes escenarios</p>
<demo-block>
        <div><p>Utilice el atributo <code>size</code> para establecer tamaños adicionales con <code>medium</code>, <code>small</code> o <code>mini</code>.</p>
</div>
        <template slot="source"><element-demo5 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;el-dropdown split-button type=&quot;primary&quot;&gt;
  Default
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
</code></pre></template></demo-block><h3 id="dropdown-atributos"><a class="header-anchor" href="#dropdown-atributos">¶</a> Dropdown atributos</h3>
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
<td>type</td>
<td>tipo de botón de menú, consulte Componente<code>Button</code>, sólo funciona cuando <code>split-button</code> es true.</td>
<td>string</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>size</td>
<td>tamaño del menú, también funciona en <code>split-button</code></td>
<td>string</td>
<td>medium / small / mini</td>
<td>—</td>
</tr>
<tr>
<td>split-button</td>
<td>si se visualiza un grupo de botones</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>placement</td>
<td>colocación del menú</td>
<td>string</td>
<td>top/top-start/top-end/bottom/bottom-start/bottom-end</td>
<td>bottom-end</td>
</tr>
<tr>
<td>trigger</td>
<td>cómo detonar</td>
<td>string</td>
<td>hover/click</td>
<td>hover</td>
</tr>
<tr>
<td>hide-on-click</td>
<td>si se oculta el menú después de hacer clic en el elemento</td>
<td>boolean</td>
<td>—</td>
<td>true</td>
</tr>
<tr>
<td>show-timeout</td>
<td>Tiempo de retardo antes de mostrar un dropdown (solamente trabaja cuando se dispara <code>hover</code>)</td>
<td>number</td>
<td>—</td>
<td>250</td>
</tr>
<tr>
<td>hide-timeout</td>
<td>Tiempo de retardo antes de ocultar un dropdown (solamente trabaja cuando se dispara <code>hover</code>)</td>
<td>number</td>
<td>—</td>
<td>150</td>
</tr>
<tr>
<td>tabindex</td>
<td><a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/tabindex">tabindex</a> de Dropdown</td>
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
<th>Nombre</th>
<th>Descripción</th>
</tr>
</thead>
<tbody>
<tr>
<td>—</td>
<td>contenido del Dropdown. Aviso: Debe ser un elemento html dom válido (ej. <code>&lt;span&gt;, &lt;button&gt;</code> etc.) o <code>el-component</code>, para adjuntar el listener trigger</td>
</tr>
<tr>
<td>dropdown</td>
<td>contenido del menu Dropdown, normalmente es un elemento <code>&lt;el-dropdown-menu&gt;</code></td>
</tr>
</tbody>
</table>
<h3 id="dropdown-eventos"><a class="header-anchor" href="#dropdown-eventos">¶</a> Dropdown Eventos</h3>
<table>
<thead>
<tr>
<th>Nombre</th>
<th>Descripción</th>
<th>Parámetros</th>
</tr>
</thead>
<tbody>
<tr>
<td>click</td>
<td>si <code>split-button</code> es <code>true</code>, se activa al hacer clic en el botón izquierdo</td>
<td>—</td>
</tr>
<tr>
<td>command</td>
<td>activa cuando se hace clic en un elemento desplegable</td>
<td>el comando enviado desde el elemento desplegable</td>
</tr>
<tr>
<td>visible-change</td>
<td>se activa cuando aparece/desaparece el desplegable</td>
<td>true cuando aparece, y false de otro modo</td>
</tr>
</tbody>
</table>
<h3 id="dropdown-menu-item-atributos"><a class="header-anchor" href="#dropdown-menu-item-atributos">¶</a> Dropdown Menú Ítem Atributos</h3>
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
<td>command</td>
<td>un comando que se enviará al <code>command</code> callback del Dropdown</td>
<td>string/number/object</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>disabled</td>
<td>si el elemento está desactivado</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>divided</td>
<td>si se visualiza un divisor</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>icon</td>
<td>nombre de la clase del icono</td>
<td>string</td>
<td>—</td>
<td>—</td>
</tr>
</tbody>
</table>
