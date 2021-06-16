<h2 id="input"><a class="header-anchor" href="#input">¶</a> Input</h2>
<p>Ingresa datos usando el ratón o teclado.</p>
<div class="warning">
<p>Input es un componente controlado, <strong>siempre muestra el valor de enlace Vue</strong>.</p>
<p>Bajo circunstancias normales, el evento &quot;input&quot; debe ser manejado. Su handler debe actualizar el valor de enlace del componente (o usar <code>v-model</code>). De lo contrario, el valor del cuadro de entrada no cambiará.</p>
<p>No admite modificadores <code>v-model</code>.</p>
</div>
<h3 id="uso-basico"><a class="header-anchor" href="#uso-basico">¶</a> Uso básico</h3>
<demo-block>
        
        <template slot="source"><element-demo0 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;el-input placeholder=&quot;Please input&quot; v-model=&quot;input&quot;&gt;&lt;/el-input&gt;

&lt;script&gt;
export default {
  data() {
    return {
      input: ''
    }
  }
}
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="disabled"><a class="header-anchor" href="#disabled">¶</a> Disabled</h3>
<demo-block>
        <div><p>Deshabilite el Input con el atributo <code>disabled</code>.</p>
</div>
        <template slot="source"><element-demo1 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;el-input
  placeholder=&quot;Please input&quot;
  v-model=&quot;input&quot;
  :disabled=&quot;true&quot;&gt;
&lt;/el-input&gt;

&lt;script&gt;
export default {
  data() {
    return {
      input: ''
    }
  }
}
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="limpiable"><a class="header-anchor" href="#limpiable">¶</a> Limpiable</h3>
<demo-block>
        <div><p>Marque que el input puede ser limpiable con el atributo <code>clearable</code>.</p>
</div>
        <template slot="source"><element-demo2 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;el-input
  placeholder=&quot;Please input&quot;
  v-model=&quot;input&quot;
  clearable&gt;
&lt;/el-input&gt;

&lt;script&gt;
export default {
  data() {
    return {
      input: ''
    }
  }
}
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="password-box"><a class="header-anchor" href="#password-box">¶</a> Password box</h3>
<demo-block>
        <div><p>Haga un input de contraseña conmutable con el atributo <code>show-password</code>.</p>
</div>
        <template slot="source"><element-demo3 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;el-input placeholder=&quot;Please input password&quot; v-model=&quot;input&quot; show-password&gt;&lt;/el-input&gt;

&lt;script&gt;
  export default {
    data() {
      return {
        input: ''
      }
    }
  }
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="input-con-icono"><a class="header-anchor" href="#input-con-icono">¶</a> Input con icono</h3>
<p>Añada un icono para indicar el tipo de Input.</p>
<demo-block>
        <div><p>Para añadir iconos en el Input, puede utilizar los atributos <code>prefix-icon</code> y <code>suffix-icon</code> . Además, los slots con nombre <code>prefix</code> y <code>suffix</code> también funcionan.</p>
</div>
        <template slot="source"><element-demo4 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;div class=&quot;demo-input-suffix&quot;&gt;
  &lt;span class=&quot;demo-input-label&quot;&gt;Using attributes&lt;/span&gt;
  &lt;el-input
    placeholder=&quot;Pick a date&quot;
    suffix-icon=&quot;el-icon-date&quot;
    v-model=&quot;input1&quot;&gt;
  &lt;/el-input&gt;
  &lt;el-input
    placeholder=&quot;Type something&quot;
    prefix-icon=&quot;el-icon-search&quot;
    v-model=&quot;input2&quot;&gt;
  &lt;/el-input&gt;
&lt;/div&gt;
&lt;div class=&quot;demo-input-suffix&quot;&gt;
  &lt;span class=&quot;demo-input-label&quot;&gt;Using slots&lt;/span&gt;
  &lt;el-input
    placeholder=&quot;Pick a date&quot;
    v-model=&quot;input3&quot;&gt;
    &lt;i slot=&quot;suffix&quot; class=&quot;el-input__icon el-icon-date&quot;&gt;&lt;/i&gt;
  &lt;/el-input&gt;
  &lt;el-input
    placeholder=&quot;Type something&quot;
    v-model=&quot;input4&quot;&gt;
    &lt;i slot=&quot;prefix&quot; class=&quot;el-input__icon el-icon-search&quot;&gt;&lt;/i&gt;
  &lt;/el-input&gt;
&lt;/div&gt;

&lt;style&gt;
  .demo-input-label {
    display: inline-block;
    width: 130px;
  }
&lt;/style&gt;

&lt;script&gt;
export default {
  data() {
    return {
      input1: '',
      input2: '',
      input3: '',
      input4: ''
    }
  }
}
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="textarea"><a class="header-anchor" href="#textarea">¶</a> Textarea</h3>
<p>Re dimensiona para introducir varias líneas de información de texto. Agregue el atributo <code>type=&quot;textarea&quot;</code> para cambiar el <code>input</code> al tipo nativo <code>textarea</code>.</p>
<demo-block>
        <div><p>Controle la altura ajustando el prop <code>rows</code>.</p>
</div>
        <template slot="source"><element-demo5 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;el-input
  type=&quot;textarea&quot;
  :rows=&quot;2&quot;
  placeholder=&quot;Please input&quot;
  v-model=&quot;textarea&quot;&gt;
&lt;/el-input&gt;

&lt;script&gt;
export default {
  data() {
    return {
      textarea: ''
    }
  }
}
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="textarea-tamano-automatico"><a class="header-anchor" href="#textarea-tamano-automatico">¶</a> Textarea tamaño automático</h3>
<p>El ajuste del prop <code>autosize</code> en el tipo de Input textarea hace que la altura se ajuste automáticamente en función del contenido. Se puede proporcionar opciones en un objeto para auto dimensionar y especificar el número mínimo y máximo de líneas que el textarea puede ajustar automáticamente.</p>
<demo-block>
        
        <template slot="source"><element-demo6 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;el-input
  type=&quot;textarea&quot;
  autosize
  placeholder=&quot;Please input&quot;
  v-model=&quot;textarea1&quot;&gt;
&lt;/el-input&gt;
&lt;div style=&quot;margin: 20px 0;&quot;&gt;&lt;/div&gt;
&lt;el-input
  type=&quot;textarea&quot;
  :autosize=&quot;{ minRows: 2, maxRows: 4}&quot;
  placeholder=&quot;Please input&quot;
  v-model=&quot;textarea2&quot;&gt;
&lt;/el-input&gt;

&lt;script&gt;
export default {
  data() {
    return {
      textarea1: '',
      textarea2: ''
    }
  }
}
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="mezclando-elementos-con-input"><a class="header-anchor" href="#mezclando-elementos-con-input">¶</a> Mezclando elementos con input</h3>
<p>Añade un elemento antes o después del input, generalmente una etiqueta o un botón.</p>
<demo-block>
        <div><p>Utilice el <code>slot</code> para seleccionar si el elemento se colocara antes (prepend) o después (append) del Input.</p>
</div>
        <template slot="source"><element-demo7 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;div&gt;
  &lt;el-input placeholder=&quot;Please input&quot; v-model=&quot;input1&quot;&gt;
    &lt;template slot=&quot;prepend&quot;&gt;Http://&lt;/template&gt;
  &lt;/el-input&gt;
&lt;/div&gt;
&lt;div style=&quot;margin-top: 15px;&quot;&gt;
  &lt;el-input placeholder=&quot;Please input&quot; v-model=&quot;input2&quot;&gt;
    &lt;template slot=&quot;append&quot;&gt;.com&lt;/template&gt;
  &lt;/el-input&gt;
&lt;/div&gt;
&lt;div style=&quot;margin-top: 15px;&quot;&gt;
  &lt;el-input placeholder=&quot;Please input&quot; v-model=&quot;input3&quot; class=&quot;input-with-select&quot;&gt;
    &lt;el-select v-model=&quot;select&quot; slot=&quot;prepend&quot; placeholder=&quot;Select&quot;&gt;
      &lt;el-option label=&quot;Restaurant&quot; value=&quot;1&quot;&gt;&lt;/el-option&gt;
      &lt;el-option label=&quot;Order No.&quot; value=&quot;2&quot;&gt;&lt;/el-option&gt;
      &lt;el-option label=&quot;Tel&quot; value=&quot;3&quot;&gt;&lt;/el-option&gt;
    &lt;/el-select&gt;
    &lt;el-button slot=&quot;append&quot; icon=&quot;el-icon-search&quot;&gt;&lt;/el-button&gt;
  &lt;/el-input&gt;
&lt;/div&gt;

&lt;style&gt;
  .el-select .el-input {
    width: 110px;
  }
  .input-with-select .el-input-group__prepend {
    background-color: #fff;
  }
&lt;/style&gt;
&lt;script&gt;
export default {
  data() {
    return {
      input1: '',
      input2: '',
      input3: '',
      select: ''
    }
  }
}
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="tamano"><a class="header-anchor" href="#tamano">¶</a> Tamaño</h3>
<demo-block>
        <div><p>Añada el atributo <code>size</code> para cambiar el tamaño del Input. Además del tamaño predeterminado, hay otras tres opciones: <code>large</code>, <code>small</code> y <code>mini</code>.</p>
</div>
        <template slot="source"><element-demo8 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;div class=&quot;demo-input-size&quot;&gt;
  &lt;el-input
    placeholder=&quot;Please Input&quot;
    v-model=&quot;input1&quot;&gt;
  &lt;/el-input&gt;
  &lt;el-input
    size=&quot;medium&quot;
    placeholder=&quot;Please Input&quot;
    v-model=&quot;input2&quot;&gt;
  &lt;/el-input&gt;
  &lt;el-input
    size=&quot;small&quot;
    placeholder=&quot;Please Input&quot;
    v-model=&quot;input3&quot;&gt;
  &lt;/el-input&gt;
  &lt;el-input
    size=&quot;mini&quot;
    placeholder=&quot;Please Input&quot;
    v-model=&quot;input4&quot;&gt;
  &lt;/el-input&gt;
&lt;/div&gt;

&lt;script&gt;
export default {
  data() {
    return {
      input1: '',
      input2: '',
      input3: '',
      input4: ''
    }
  }
}
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="autocompletado"><a class="header-anchor" href="#autocompletado">¶</a> Autocompletado</h3>
<p>Puede obtener algunas sugerencias basadas en la entrada actual.</p>
<demo-block>
        <div><p>El componente Autocomplete proporciona sugerencias de entrada. El atributo <code>fetch-suggestions</code> es un método que devuelve la entrada sugerida. En este ejemplo, <code>querySearch(queryString, cb)</code> devuelve las sugerencias al componente mediante <code>cb(data)</code> cuando están listas.</p>
</div>
        <template slot="source"><element-demo9 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;el-row class=&quot;demo-autocomplete&quot;&gt;
  &lt;el-col :span=&quot;12&quot;&gt;
    &lt;div class=&quot;sub-title&quot;&gt;list suggestions when activated&lt;/div&gt;
    &lt;el-autocomplete
      class=&quot;inline-input&quot;
      v-model=&quot;state1&quot;
      :fetch-suggestions=&quot;querySearch&quot;
      placeholder=&quot;Please Input&quot;
      @select=&quot;handleSelect&quot;
    &gt;&lt;/el-autocomplete&gt;
  &lt;/el-col&gt;
  &lt;el-col :span=&quot;12&quot;&gt;
    &lt;div class=&quot;sub-title&quot;&gt;list suggestions on input&lt;/div&gt;
    &lt;el-autocomplete
      class=&quot;inline-input&quot;
      v-model=&quot;state2&quot;
      :fetch-suggestions=&quot;querySearch&quot;
      placeholder=&quot;Please Input&quot;
      :trigger-on-focus=&quot;false&quot;
      @select=&quot;handleSelect&quot;
    &gt;&lt;/el-autocomplete&gt;
  &lt;/el-col&gt;
&lt;/el-row&gt;
&lt;script&gt;
  export default {
    data() {
      return {
        links: [],
        state1: '',
        state2: ''
      };
    },
    methods: {
      querySearch(queryString, cb) {
        var links = this.links;
        var results = queryString ? links.filter(this.createFilter(queryString)) : links;
        // call callback function to return suggestions
        cb(results);
      },
      createFilter(queryString) {
        return (link) =&gt; {
          return (link.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0);
        };
      },
      loadAll() {
        return [
          { &quot;value&quot;: &quot;vue&quot;, &quot;link&quot;: &quot;https://github.com/vuejs/vue&quot; },
          { &quot;value&quot;: &quot;element&quot;, &quot;link&quot;: &quot;https://github.com/ElemeFE/element&quot; },
          { &quot;value&quot;: &quot;cooking&quot;, &quot;link&quot;: &quot;https://github.com/ElemeFE/cooking&quot; },
          { &quot;value&quot;: &quot;mint-ui&quot;, &quot;link&quot;: &quot;https://github.com/ElemeFE/mint-ui&quot; },
          { &quot;value&quot;: &quot;vuex&quot;, &quot;link&quot;: &quot;https://github.com/vuejs/vuex&quot; },
          { &quot;value&quot;: &quot;vue-router&quot;, &quot;link&quot;: &quot;https://github.com/vuejs/vue-router&quot; },
          { &quot;value&quot;: &quot;babel&quot;, &quot;link&quot;: &quot;https://github.com/babel/babel&quot; }
         ];
      },
      handleSelect(item) {
        console.log(item);
      }
    },
    mounted() {
      this.links = this.loadAll();
    }
  }
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="template-personalizado"><a class="header-anchor" href="#template-personalizado">¶</a> Template personalizado</h3>
<p>Personalice cómo se muestran las sugerencias.</p>
<demo-block>
        <div><p>Utilice <code>scoped slot</code> para personalizar los elementos de sugerencias. En el scope, puede acceder al objeto de sugerencia mediante la clave <code>item</code>.</p>
</div>
        <template slot="source"><element-demo10 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;el-autocomplete
  popper-class=&quot;my-autocomplete&quot;
  v-model=&quot;state&quot;
  :fetch-suggestions=&quot;querySearch&quot;
  placeholder=&quot;Please input&quot;
  @select=&quot;handleSelect&quot;&gt;
  &lt;i
    class=&quot;el-icon-edit el-input__icon&quot;
    slot=&quot;suffix&quot;
    @click=&quot;handleIconClick&quot;&gt;
  &lt;/i&gt;
  &lt;template slot-scope=&quot;{ item }&quot;&gt;
    &lt;div class=&quot;value&quot;&gt;{{ item.value }}&lt;/div&gt;
    &lt;span class=&quot;link&quot;&gt;{{ item.link }}&lt;/span&gt;
  &lt;/template&gt;
&lt;/el-autocomplete&gt;

&lt;style&gt;
  .my-autocomplete {
    li {
      line-height: normal;
      padding: 7px;

      .value {
        text-overflow: ellipsis;
        overflow: hidden;
      }
      .link {
        font-size: 12px;
        color: #b4b4b4;
      }
    }
  }
&lt;/style&gt;

&lt;script&gt;
  export default {
    data() {
      return {
        links: [],
        state: ''
      };
    },
    methods: {
      querySearch(queryString, cb) {
        var links = this.links;
        var results = queryString ? links.filter(this.createFilter(queryString)) : links;
        // call callback function to return suggestion objects
        cb(results);
      },
      createFilter(queryString) {
        return (link) =&gt; {
          return (link.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0);
        };
      },
      loadAll() {
        return [
          { &quot;value&quot;: &quot;vue&quot;, &quot;link&quot;: &quot;https://github.com/vuejs/vue&quot; },
          { &quot;value&quot;: &quot;element&quot;, &quot;link&quot;: &quot;https://github.com/ElemeFE/element&quot; },
          { &quot;value&quot;: &quot;cooking&quot;, &quot;link&quot;: &quot;https://github.com/ElemeFE/cooking&quot; },
          { &quot;value&quot;: &quot;mint-ui&quot;, &quot;link&quot;: &quot;https://github.com/ElemeFE/mint-ui&quot; },
          { &quot;value&quot;: &quot;vuex&quot;, &quot;link&quot;: &quot;https://github.com/vuejs/vuex&quot; },
          { &quot;value&quot;: &quot;vue-router&quot;, &quot;link&quot;: &quot;https://github.com/vuejs/vue-router&quot; },
          { &quot;value&quot;: &quot;babel&quot;, &quot;link&quot;: &quot;https://github.com/babel/babel&quot; }
         ];
      },
      handleSelect(item) {
        console.log(item);
      },
      handleIconClick(ev) {
        console.log(ev);
      }
    },
    mounted() {
      this.links = this.loadAll();
    }
  }
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="busqueda-remota"><a class="header-anchor" href="#busqueda-remota">¶</a> Búsqueda remota</h3>
<p>Búsqueda de datos desde el servidor.</p>
<demo-block>
        
        <template slot="source"><element-demo11 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;el-autocomplete
  v-model=&quot;state&quot;
  :fetch-suggestions=&quot;querySearchAsync&quot;
  placeholder=&quot;Please input&quot;
  @select=&quot;handleSelect&quot;
&gt;&lt;/el-autocomplete&gt;
&lt;script&gt;
  export default {
    data() {
      return {
        links: [],
        state: '',
        timeout:  null
      };
    },
    methods: {
      loadAll() {
        return [
          { &quot;value&quot;: &quot;vue&quot;, &quot;link&quot;: &quot;https://github.com/vuejs/vue&quot; },
          { &quot;value&quot;: &quot;element&quot;, &quot;link&quot;: &quot;https://github.com/ElemeFE/element&quot; },
          { &quot;value&quot;: &quot;cooking&quot;, &quot;link&quot;: &quot;https://github.com/ElemeFE/cooking&quot; },
          { &quot;value&quot;: &quot;mint-ui&quot;, &quot;link&quot;: &quot;https://github.com/ElemeFE/mint-ui&quot; },
          { &quot;value&quot;: &quot;vuex&quot;, &quot;link&quot;: &quot;https://github.com/vuejs/vuex&quot; },
          { &quot;value&quot;: &quot;vue-router&quot;, &quot;link&quot;: &quot;https://github.com/vuejs/vue-router&quot; },
          { &quot;value&quot;: &quot;babel&quot;, &quot;link&quot;: &quot;https://github.com/babel/babel&quot; }
         ];
      },
      querySearchAsync(queryString, cb) {
        var links = this.links;
        var results = queryString ? links.filter(this.createFilter(queryString)) : links;

        clearTimeout(this.timeout);
        this.timeout = setTimeout(() =&gt; {
          cb(results);
        }, 3000 * Math.random());
      },
      createFilter(queryString) {
        return (link) =&gt; {
          return (link.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0);
        };
      },
      handleSelect(item) {
        console.log(item);
      }
    },
    mounted() {
      this.links = this.loadAll();
    }
  };
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="limitar-el-tamano"><a class="header-anchor" href="#limitar-el-tamano">¶</a> Limitar el tamaño</h3>
<demo-block>
        <div><p><code>maxlength</code> y <code>minlength</code> son atributos de la entrada nativa, declaran un límite en el número de caracteres que un usuario puede introducir. La configuración de la pro <code>maxlength</code> para un tipo de entrada de texto o de área de texto puede limitar la longitud del valor de entrada y le permite mostrar el recuento de palabras al establecer <code>show-word-limit</code> a <code>true</code> al mismo tiempo.</p>
</div>
        <template slot="source"><element-demo12 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;el-input
  type=&quot;text&quot;
  placeholder=&quot;Please input&quot;
  v-model=&quot;text&quot;
  maxlength=&quot;10&quot;
  show-word-limit
&gt;
&lt;/el-input&gt;
&lt;div style=&quot;margin: 20px 0;&quot;&gt;&lt;/div&gt;
&lt;el-input
  type=&quot;textarea&quot;
  placeholder=&quot;Please input&quot;
  v-model=&quot;textarea&quot;
  maxlength=&quot;30&quot;
  show-word-limit
&gt;
&lt;/el-input&gt;

&lt;script&gt;
export default {
  data() {
    return {
      text: '',
      textarea: ''
    }
  }
}
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="input-atributos"><a class="header-anchor" href="#input-atributos">¶</a> Input atributos</h3>
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
<td>tipo de input</td>
<td>string</td>
<td>text, textarea y otros <a href="https://developer.mozilla.org/es/docs/Web/HTML/Elemento/input#Form_%3Cinput%3E_types">tipos de entrada nativos</a></td>
<td>text</td>
</tr>
<tr>
<td>value / v-model</td>
<td>valor enlazado</td>
<td>boolean / string / number</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>maxlength</td>
<td>igual que <code>maxlength</code> en el input nativo</td>
<td>number</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>minlength</td>
<td>igual que <code>minlength</code> en el input nativo</td>
<td>number</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>show-word-limit</td>
<td>Si se muestra el contador de palabras, solamente funciona con los tipos <code>text</code> o <code>textarea</code></td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>placeholder</td>
<td>placeholder del Input</td>
<td>string</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>clearable</td>
<td>si debe mostrar el botón de limpieza</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>show-password</td>
<td>si debe mostrar la posibilidad de conmutación de password input</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>disabled</td>
<td>si esta deshabilitado</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>size</td>
<td>tamaño del input, esto no funciona cuando <code>type</code> no es textarea</td>
<td>string</td>
<td>medium / small / mini</td>
<td>—</td>
</tr>
<tr>
<td>prefix-icon</td>
<td>clase del icono de prefijo</td>
<td>string</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>suffix-icon</td>
<td>clase del icono de sufijo</td>
<td>string</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>rows</td>
<td>número de filas, sólo funciona cuando <code>type</code> es <code>textarea</code>.</td>
<td>number</td>
<td>—</td>
<td>2</td>
</tr>
<tr>
<td>autosize</td>
<td>si textarea tiene una altura adaptativa, sólo funciona cuando el<code>type</code> es <code>textarea</code>. Puede aceptar un objeto, p. ej. { minRows: 2, maxRows: 6 }</td>
<td>boolean / object</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>autocomplete</td>
<td>igual que <code>autocomplete</code> en el input nativo</td>
<td>string</td>
<td>on/off</td>
<td>off</td>
</tr>
<tr>
<td>auto-complete</td>
<td>@DEPRECATED en el próximo cambio mayor de versión</td>
<td>string</td>
<td>on/off</td>
<td>off</td>
</tr>
<tr>
<td>name</td>
<td>igual que <code>name</code> en el input nativo</td>
<td>string</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>readonly</td>
<td>igual que <code>readonly</code> en el input nativo</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>max</td>
<td>igual que <code>max</code> en el input nativo</td>
<td>—</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>min</td>
<td>igual que <code>min</code> en el input nativo</td>
<td>—</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>step</td>
<td>igual que <code>step</code> en el input nativo</td>
<td>—</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>resize</td>
<td>control para el dimensionamiento</td>
<td>string</td>
<td>none, both, horizontal, vertical</td>
<td>—</td>
</tr>
<tr>
<td>autofocus</td>
<td>igual que <code>autofocus</code> en el input nativo</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>form</td>
<td>igual que <code>form</code> en el input nativo</td>
<td>string</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>label</td>
<td>texto de la etiqueta</td>
<td>string</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>tabindex</td>
<td>orden de tabulación para el Input</td>
<td>string</td>
<td>-</td>
<td>-</td>
</tr>
</tbody>
</table>
<h3 id="input-slots"><a class="header-anchor" href="#input-slots">¶</a> Input slots</h3>
<table>
<thead>
<tr>
<th>Nombre</th>
<th>Descripción</th>
</tr>
</thead>
<tbody>
<tr>
<td>prefix</td>
<td>contenido como prefijo del input</td>
</tr>
<tr>
<td>suffix</td>
<td>contenido como sufijo del input</td>
</tr>
<tr>
<td>prepend</td>
<td>contenido antes del input</td>
</tr>
<tr>
<td>append</td>
<td>contenido a añadir después del input</td>
</tr>
</tbody>
</table>
<h3 id="input-eventos"><a class="header-anchor" href="#input-eventos">¶</a> Input eventos</h3>
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
<td>blur</td>
<td>Se dispara cuando se pierde el foco</td>
<td>(event: Event)</td>
</tr>
<tr>
<td>focus</td>
<td>Se dispara cuando se obtiene el foco</td>
<td>(event: Event)</td>
</tr>
<tr>
<td>change</td>
<td>se activa cuando cambia el valor de entrada</td>
<td>(value: string | number)</td>
</tr>
<tr>
<td>change</td>
<td>se activa solo cuando el cuadro de entrada pierde el foco o el usuario presiona Enter</td>
<td>(value: string | number)</td>
</tr>
<tr>
<td>input</td>
<td>se activa cuando cambia el valor de entrada</td>
<td>(value: string | number)</td>
</tr>
<tr>
<td>clear</td>
<td>se dispara cuando la entrada es borrada por el botón generado por el atributo <code>clearable</code>.</td>
<td>—</td>
</tr>
</tbody>
</table>
<h3 id="input-metodos"><a class="header-anchor" href="#input-metodos">¶</a> Input Métodos</h3>
<table>
<thead>
<tr>
<th>Método</th>
<th>Descripción</th>
<th>Parámetros</th>
</tr>
</thead>
<tbody>
<tr>
<td>focus</td>
<td>coloca el foco en el elemento</td>
<td>—</td>
</tr>
<tr>
<td>blur</td>
<td>quita el foco del elemento</td>
<td>—</td>
</tr>
<tr>
<td>select</td>
<td>selecciona el texto del input</td>
<td>—</td>
</tr>
</tbody>
</table>
<h3 id="autocomplete-atributos"><a class="header-anchor" href="#autocomplete-atributos">¶</a> Autocomplete Atributos</h3>
<table>
<thead>
<tr>
<th>Atributo</th>
<th>Descripción</th>
<th>Tipo</th>
<th>Opciones</th>
<th>Por defecto</th>
</tr>
</thead>
<tbody>
<tr>
<td>placeholder</td>
<td>el placeholder del Autocomplete</td>
<td>string</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>disabled</td>
<td>si el Autocompete esta deshabilitado</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>value-key</td>
<td>nombre del campo del objeto de sugerencia del input para la visualización</td>
<td>string</td>
<td>—</td>
<td>value</td>
</tr>
<tr>
<td>icon</td>
<td>nombre del icono</td>
<td>string</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>value</td>
<td>valor enlazado</td>
<td>string</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>debounce</td>
<td>retardo al escribir, en milisegundos</td>
<td>number</td>
<td>—</td>
<td>300</td>
</tr>
<tr>
<td>placement</td>
<td>ubicación del menú emergente</td>
<td>string</td>
<td>top / top-start / top-end / bottom / bottom-start / bottom-end</td>
<td>bottom-start</td>
</tr>
<tr>
<td>fetch-suggestions</td>
<td>un método para obtener las sugerencias del input. Cuando las sugerencias estén listas, invocar <code>callback(data:[])</code> para devolverlas a Autocomplete</td>
<td>Function(queryString, callback)</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>popper-class</td>
<td>nombre personalizado de clase para el dropdown de autocomplete</td>
<td>string</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>trigger-on-focus</td>
<td>si se deben mostrar sugerencias cuando el input obtiene el foco</td>
<td>boolean</td>
<td>—</td>
<td>true</td>
</tr>
<tr>
<td>name</td>
<td>igual que <code>name</code> en el input nativo</td>
<td>string</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>select-when-unmatched</td>
<td>si se emite un evento <code>select</code> al pulsar enter cuando no hay coincidencia de Autocomplete</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>label</td>
<td>texto de la etiqueta</td>
<td>string</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>prefix-icon</td>
<td>prefix icon class</td>
<td>string</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>suffix-icon</td>
<td>suffix icon class</td>
<td>string</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>hide-loading</td>
<td>si se debe ocultar el icono de loading en la búsqueda remota</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>popper-append-to-body</td>
<td>si añadir el desplegable al cuerpo. Si la posición del menú desplegable es incorrecta, puede intentar establecer este prop a false</td>
<td>boolean</td>
<td>-</td>
<td>true</td>
</tr>
<tr>
<td>validate-event</td>
<td>si se debe lanzar la validación de formulario</td>
<td>boolean</td>
<td>-</td>
<td>true</td>
</tr>
<tr>
<td>highlight-first-item</td>
<td>si se debe resaltar el primer elemento en las sugerencias de búsqueda remota de forma predeterminada</td>
<td>boolean</td>
<td>-</td>
<td>false</td>
</tr>
</tbody>
</table>
<h3 id="autocomplete-slots"><a class="header-anchor" href="#autocomplete-slots">¶</a> Autocomplete Slots</h3>
<table>
<thead>
<tr>
<th>Nombre</th>
<th>Descripción</th>
</tr>
</thead>
<tbody>
<tr>
<td>prefix</td>
<td>contenido como prefijo del input</td>
</tr>
<tr>
<td>suffix</td>
<td>contenido como sufijo del input</td>
</tr>
<tr>
<td>prepend</td>
<td>contenido antes del input</td>
</tr>
<tr>
<td>append</td>
<td>contenido a añadir después del input</td>
</tr>
</tbody>
</table>
<h3 id="autocomplete-scoped-slot"><a class="header-anchor" href="#autocomplete-scoped-slot">¶</a> Autocomplete Scoped Slot</h3>
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
<td>Contenido personalizado para el input de sugerencias. El parámetro del scope es { ítem }</td>
</tr>
</tbody>
</table>
<h3 id="autocomplete-eventos"><a class="header-anchor" href="#autocomplete-eventos">¶</a> Autocomplete Eventos</h3>
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
<td>select</td>
<td>se dispara cuando se hace clic a una sugerencia</td>
<td>sugerencia en la que se está haciendo clic</td>
</tr>
<tr>
<td>change</td>
<td>se activa cuando cambia el valor de entrada</td>
<td>(value: string | number)</td>
</tr>
</tbody>
</table>
<h3 id="autocomplete-metodo"><a class="header-anchor" href="#autocomplete-metodo">¶</a> Autocomplete Método</h3>
<table>
<thead>
<tr>
<th>Método</th>
<th>Descripción</th>
<th>Parámetros</th>
</tr>
</thead>
<tbody>
<tr>
<td>focus</td>
<td>coloca el foco en el elemento</td>
<td>—</td>
</tr>
</tbody>
</table>
