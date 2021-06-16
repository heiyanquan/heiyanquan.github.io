<h2 id="tooltip"><a class="header-anchor" href="#tooltip">¶</a> Tooltip</h2>
<p>Mostrar aviso de información con el hover del mouse.</p>
<h3 id="uso-basico"><a class="header-anchor" href="#uso-basico">¶</a> Uso básico</h3>
<p>Tooltip tiene 9 colocaciones.</p>
<demo-block>
        <div><p>Use el atributo <code>content</code> para establecer el contenido que se mostrará al hacer hover. El atributo <code>placement</code> determina la posición del tooltip. Su valor es <code>[orientation]-[alignment]</code> con cuatro orientaciones <code>top</code>, <code>left</code>, <code>right</code>, <code>bottom</code> y tres alineaciones <code>start</code>, <code>end</code>, <code>null</code>, la alineación por defecto es null. Tome <code>placement=&quot;left-end&quot;</code> como ejemplo, Tooltip será mostrado en la izquierda del elemento en que se esté haciendo hover y el fondo del tooltip se alineará con el fondo del elemento.</p>
</div>
        <!--element-demo: <div class="box">
  <div class="top">
    <el-tooltip class="item" effect="dark" content="Top Left prompts info" placement="top-start">
      <el-button>top-start</el-button>
    </el-tooltip>
    <el-tooltip class="item" effect="dark" content="Top Center prompts info" placement="top">
      <el-button>top</el-button>
    </el-tooltip>
    <el-tooltip class="item" effect="dark" content="Top Right prompts info" placement="top-end">
      <el-button>top-end</el-button>
    </el-tooltip>
  </div>
  <div class="left">
    <el-tooltip class="item" effect="dark" content="Left Top prompts info" placement="left-start">
      <el-button>left-start</el-button>
    </el-tooltip>
    <el-tooltip class="item" effect="dark" content="Left Center prompts info" placement="left">
      <el-button>left</el-button>
    </el-tooltip>
    <el-tooltip class="item" effect="dark" content="Left Bottom prompts info" placement="left-end">
      <el-button>left-end</el-button>
    </el-tooltip>
  </div>

  <div class="right">
    <el-tooltip class="item" effect="dark" content="Right Top prompts info" placement="right-start">
      <el-button>right-start</el-button>
    </el-tooltip>
    <el-tooltip class="item" effect="dark" content="Right Center prompts info" placement="right">
      <el-button>right</el-button>
    </el-tooltip>
    <el-tooltip class="item" effect="dark" content="Right Bottom prompts info" placement="right-end">
      <el-button>right-end</el-button>
    </el-tooltip>
  </div>
  <div class="bottom">
    <el-tooltip class="item" effect="dark" content="Bottom Left prompts info" placement="bottom-start">
      <el-button>bottom-start</el-button>
    </el-tooltip>
    <el-tooltip class="item" effect="dark" content="Bottom Center prompts info" placement="bottom">
      <el-button>bottom</el-button>
    </el-tooltip>
    <el-tooltip class="item" effect="dark" content="Bottom Right prompts info" placement="bottom-end">
      <el-button>bottom-end</el-button>
    </el-tooltip>
  </div>
</div>

<style>
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
</style>
:element-demo-->
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
</code></pre></template></demo-block><h3 id="tema"><a class="header-anchor" href="#tema">¶</a> Tema</h3>
<p>Tooltip tiene dos temas: <code>dark</code> y <code>light</code>.</p>
<demo-block>
        <div><p>Establecer <code>effect</code> para modificar el tema, el valor por defecto es <code>dark</code>.</p>
</div>
        <!--element-demo: <el-tooltip content="Top center" placement="top">
  <el-button>Dark</el-button>
</el-tooltip>
<el-tooltip content="Bottom center" placement="bottom" effect="light">
  <el-button>Light</el-button>
</el-tooltip>
:element-demo-->
        <template slot="highlight"><pre v-pre><code class="html">&lt;el-tooltip content=&quot;Top center&quot; placement=&quot;top&quot;&gt;
  &lt;el-button&gt;Dark&lt;/el-button&gt;
&lt;/el-tooltip&gt;
&lt;el-tooltip content=&quot;Bottom center&quot; placement=&quot;bottom&quot; effect=&quot;light&quot;&gt;
  &lt;el-button&gt;Light&lt;/el-button&gt;
&lt;/el-tooltip&gt;
</code></pre></template></demo-block><h3 id="mas-contenido"><a class="header-anchor" href="#mas-contenido">¶</a> Más Contenido</h3>
<p>Despliegue múltiples líneas de texto y establezca su formato.</p>
<demo-block>
        <div><p>Sobrescriba el atributo <code>content</code> del <code>el-tooltip</code> añadiendo un slot llamado <code>content</code>.</p>
</div>
        <!--element-demo: <el-tooltip placement="top">
  <div slot="content">multiple lines<br/>second line</div>
  <el-button>Top center</el-button>
</el-tooltip>
:element-demo-->
        <template slot="highlight"><pre v-pre><code class="html">&lt;el-tooltip placement=&quot;top&quot;&gt;
  &lt;div slot=&quot;content&quot;&gt;multiple lines&lt;br/&gt;second line&lt;/div&gt;
  &lt;el-button&gt;Top center&lt;/el-button&gt;
&lt;/el-tooltip&gt;
</code></pre></template></demo-block><h3 id="uso-avanzado"><a class="header-anchor" href="#uso-avanzado">¶</a> Uso Avanzado</h3>
<p>Adicional a los usos básicos, existen algunos atributos que permiten la personalización:</p>
<p>el atributo <code>transition</code> permite personalizar la animación con la que el Tooltip se muestra o se esconda, el valor por defecto es <code>el-fade-in-linear</code>.</p>
<p>el atributo <code>disabled</code> permite deshabilitar <code>tooltip</code>. Solo es necesario definirlo como <code>true</code>.</p>
<p>De hecho, Tooltip es una extensión basada en <a href="https://github.com/element-component/vue-popper">Vue-popper</a>, es posible utilizar cualquier atributo permitido en Vue-popper.</p>
<demo-block>
        
        <!--element-demo: <template>
  <el-tooltip :disabled="disabled" content="click to close tooltip function" placement="bottom" effect="light">
    <el-button @click="disabled = !disabled">click to {{disabled ? 'active' : 'close'}} tooltip function</el-button>
  </el-tooltip>
</template>

<script>
  export default {
    data() {
      return {
        disabled: false
      };
    }
  };
</script>

<style>
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
</style>
:element-demo-->
        <template slot="highlight"><pre v-pre><code class="html">&lt;template&gt;
  &lt;el-tooltip :disabled=&quot;disabled&quot; content=&quot;click to close tooltip function&quot; placement=&quot;bottom&quot; effect=&quot;light&quot;&gt;
    &lt;el-button @click=&quot;disabled = !disabled&quot;&gt;click to {{disabled ? 'active' : 'close'}} tooltip function&lt;/el-button&gt;
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
<p>El componente <code>router-link</code> no es soportado por Tooltip, favor de usar <code>vm.$router.push</code>.</p>
<p>Elementos de forma deshabilitados no son soportados por Tooltip, más información puede ser encontrada en <a href="https://developer.mozilla.org/en-US/docs/Web/Events/mouseenter">MDN</a>.
Es necesario envolver los elementos de forma deshabilitados en un elemento contenedor para que Tooltip funcione.</p>
</div>
<h3 id="atributos"><a class="header-anchor" href="#atributos">¶</a> Atributos</h3>
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
<td>effect</td>
<td>tema del Tooltip</td>
<td>string</td>
<td>dark/light</td>
<td>dark</td>
</tr>
<tr>
<td>content</td>
<td>contenido a mostrar, puede ser sobre-escrito por <code>slot#content</code></td>
<td>string</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>placement</td>
<td>posición del Tooltip</td>
<td>string</td>
<td>top/top-start/top-end/bottom/bottom-start/bottom-end/left/left-start/left-end/right/right-start/right-end</td>
<td>bottom</td>
</tr>
<tr>
<td>value / v-model</td>
<td>visibilidad del Tooltip</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>disabled</td>
<td>saber si el Tooltip se encuentra deshabilitado</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>offset</td>
<td>offset del Tooltip</td>
<td>number</td>
<td>—</td>
<td>0</td>
</tr>
<tr>
<td>transition</td>
<td>nombre de animación</td>
<td>string</td>
<td>—</td>
<td>el-fade-in-linear</td>
</tr>
<tr>
<td>visible-arrow</td>
<td>si una flecha es mostrada. Para mayor información, revisar la página de <a href="https://github.com/element-component/vue-popper">Vue-popper</a></td>
<td>boolean</td>
<td>—</td>
<td>true</td>
</tr>
<tr>
<td>popper-options</td>
<td>parámetros de <a href="https://popper.js.org/documentation.html">popper.js</a></td>
<td>Object</td>
<td>referirse a la documentación de <a href="https://popper.js.org/documentation.html">popper.js</a></td>
<td><code>{ boundariesElement: 'body', gpuAcceleration: false }</code></td>
</tr>
<tr>
<td>open-delay</td>
<td>retraso de la apariencia, en mili segundos</td>
<td>number</td>
<td>—</td>
<td>0</td>
</tr>
<tr>
<td>manual</td>
<td>si el Tooltipo será controlado de forma manual. <code>mouseenter</code> y <code>mouseleave</code> no tendrán efecto si fue establecido como <code>true</code></td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>popper-class</td>
<td>nombre de clase personalizada para el popper del Tooltip</td>
<td>string</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>enterable</td>
<td>si el ratón puede entrar al Tooltip</td>
<td>Boolean</td>
<td>—</td>
<td>true</td>
</tr>
<tr>
<td>hide-after</td>
<td>tiempo a esperar en mili segundos para esconder el Tooltip</td>
<td>number</td>
<td>—</td>
<td>0</td>
</tr>
<tr>
<td>tabindex</td>
<td><a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/tabindex">tabindex</a> de Tooltip</td>
<td>number</td>
<td>—</td>
<td>0</td>
</tr>
</tbody>
</table>
