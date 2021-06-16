<h2 id="cargando"><a class="header-anchor" href="#cargando">¶</a> Cargando</h2>
<p>Se muestra la animación mientras se cargan los datos.</p>
<h3 id="cargando-dentro-de-un-contenedor"><a class="header-anchor" href="#cargando-dentro-de-un-contenedor">¶</a> Cargando dentro de un contenedor</h3>
<p>Muestra una animación en un contenedor (como en una tabla) mientras se cargan los datos.</p>
<demo-block>
        <div><p>Element provee dos maneras para invocar el componente de Cargando: por directiva y por servicio. Para la directiva personalizada <code>v-loading</code>, solo necesitas enlazarlo a un valor <code>Boolean</code>. Por defecto, la máscara de carga se agregará al elemento donde se usa la directiva. Al agregar el modificador <code>body</code>, la máscara se agrega al elemento body.</p>
</div>
        <!--element-demo: <template>
  <el-table
    v-loading="loading"
    :data="tableData"
    style="width: 100%">
    <el-table-column
      prop="date"
      label="Fecha"
      width="180">
    </el-table-column>
    <el-table-column
      prop="name"
      label="Nombre"
      width="180">
    </el-table-column>
    <el-table-column
      prop="address"
      label="Dirección">
    </el-table-column>
  </el-table>
</template>

<style>
  body {
    margin: 0;
  }
</style>

<script>
  export default {
    data() {
      return {
        tableData: [{
          date: '2016-05-02',
          name: 'John Smith',
          address: 'No.1518,  Jinshajiang Road, Putuo District'
        }, {
          date: '2016-05-04',
          name: 'John Smith',
          address: 'No.1518,  Jinshajiang Road, Putuo District'
        }, {
          date: '2016-05-01',
          name: 'John Smith',
          address: 'No.1518,  Jinshajiang Road, Putuo District'
        }],
        loading: true
      };
    }
  };
</script>
:element-demo-->
        <template slot="highlight"><pre v-pre><code class="html">&lt;template&gt;
  &lt;el-table
    v-loading=&quot;loading&quot;
    :data=&quot;tableData&quot;
    style=&quot;width: 100%&quot;&gt;
    &lt;el-table-column
      prop=&quot;date&quot;
      label=&quot;Fecha&quot;
      width=&quot;180&quot;&gt;
    &lt;/el-table-column&gt;
    &lt;el-table-column
      prop=&quot;name&quot;
      label=&quot;Nombre&quot;
      width=&quot;180&quot;&gt;
    &lt;/el-table-column&gt;
    &lt;el-table-column
      prop=&quot;address&quot;
      label=&quot;Dirección&quot;&gt;
    &lt;/el-table-column&gt;
  &lt;/el-table&gt;
&lt;/template&gt;

&lt;style&gt;
  body {
    margin: 0;
  }
&lt;/style&gt;

&lt;script&gt;
  export default {
    data() {
      return {
        tableData: [{
          date: '2016-05-02',
          name: 'John Smith',
          address: 'No.1518,  Jinshajiang Road, Putuo District'
        }, {
          date: '2016-05-04',
          name: 'John Smith',
          address: 'No.1518,  Jinshajiang Road, Putuo District'
        }, {
          date: '2016-05-01',
          name: 'John Smith',
          address: 'No.1518,  Jinshajiang Road, Putuo District'
        }],
        loading: true
      };
    }
  };
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="personalizacion"><a class="header-anchor" href="#personalizacion">¶</a> Personalización</h3>
<p>Puede personalizar el texto de carga, spinner de carga y color de fondo.</p>
<demo-block>
        <div><p>Agregue el atributo <code>element-loading-text</code> al elemento en el que <code>v-loading</code> está vinculado, y su valor se mostrará debajo del spinner. Del mismo modo, <code>element-loading-spinner</code> y <code>element-loading-background</code> son para personalizar el nombre de la clase del spinner y el color de fondo.</p>
</div>
        <!--element-demo: <template>
  <el-table
    v-loading="loading"
    element-loading-text="Loading..."
    element-loading-spinner="el-icon-loading"
    element-loading-background="rgba(0, 0, 0, 0.8)"
    :data="tableData"
    style="width: 100%">
    <el-table-column
      prop="date"
      label="Fecha"
      width="180">
    </el-table-column>
    <el-table-column
      prop="name"
      label="Nombre"
      width="180">
    </el-table-column>
    <el-table-column
      prop="address"
      label="Dirección">
    </el-table-column>
  </el-table>
</template>

<script>
  export default {
    data() {
      return {
        tableData: [{
          date: '2016-05-02',
          name: 'John Smith',
          address: 'No.1518,  Jinshajiang Road, Putuo District'
        }, {
          date: '2016-05-04',
          name: 'John Smith',
          address: 'No.1518,  Jinshajiang Road, Putuo District'
        }, {
          date: '2016-05-01',
          name: 'John Smith',
          address: 'No.1518,  Jinshajiang Road, Putuo District'
        }],
        loading: true
      };
    }
  };
</script>
:element-demo-->
        <template slot="highlight"><pre v-pre><code class="html">&lt;template&gt;
  &lt;el-table
    v-loading=&quot;loading&quot;
    element-loading-text=&quot;Loading...&quot;
    element-loading-spinner=&quot;el-icon-loading&quot;
    element-loading-background=&quot;rgba(0, 0, 0, 0.8)&quot;
    :data=&quot;tableData&quot;
    style=&quot;width: 100%&quot;&gt;
    &lt;el-table-column
      prop=&quot;date&quot;
      label=&quot;Fecha&quot;
      width=&quot;180&quot;&gt;
    &lt;/el-table-column&gt;
    &lt;el-table-column
      prop=&quot;name&quot;
      label=&quot;Nombre&quot;
      width=&quot;180&quot;&gt;
    &lt;/el-table-column&gt;
    &lt;el-table-column
      prop=&quot;address&quot;
      label=&quot;Dirección&quot;&gt;
    &lt;/el-table-column&gt;
  &lt;/el-table&gt;
&lt;/template&gt;

&lt;script&gt;
  export default {
    data() {
      return {
        tableData: [{
          date: '2016-05-02',
          name: 'John Smith',
          address: 'No.1518,  Jinshajiang Road, Putuo District'
        }, {
          date: '2016-05-04',
          name: 'John Smith',
          address: 'No.1518,  Jinshajiang Road, Putuo District'
        }, {
          date: '2016-05-01',
          name: 'John Smith',
          address: 'No.1518,  Jinshajiang Road, Putuo District'
        }],
        loading: true
      };
    }
  };
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="cargando-a-pantalla-completa"><a class="header-anchor" href="#cargando-a-pantalla-completa">¶</a> Cargando a pantalla completa</h3>
<p>Muestra una animación de pantalla completa mientras se cargan los datos</p>
<demo-block>
        <div><p>Cuando se utiliza como una directiva, la carga a pantalla completa requiere el modificador <code>fullscreen</code>, y este puede ser agregado al <code>body</code>. En este caso, si desea deshabilitar el desplazamiento en <code>body</code>, puede agregar otro modificador <code>lock</code>. Cuando se utiliza como un servicio, el componente puede ser mostrado a pantalla completa por defecto.</p>
</div>
        <!--element-demo: <template>
  <el-button
    type="primary"
    @click="openFullScreen1"
    v-loading.fullscreen.lock="fullscreenLoading">
    Como directiva
  </el-button>
  <el-button
    type="primary"
    @click="openFullScreen2">
    Como servicio
  </el-button>
</template>

<script>
  export default {
    data() {
      return {
        fullscreenLoading: false
      }
    },
    methods: {
      openFullScreen1() {
        this.fullscreenLoading = true;
        setTimeout(() => {
          this.fullscreenLoading = false;
        }, 2000);
      },
      openFullScreen2() {
        const loading = this.$loading({
          lock: true,
          text: 'Loading',
          spinner: 'el-icon-loading',
          background: 'rgba(0, 0, 0, 0.7)'
        });
        setTimeout(() => {
          loading.close();
        }, 2000);
      }
    }
  }
</script>
:element-demo-->
        <template slot="highlight"><pre v-pre><code class="html">&lt;template&gt;
  &lt;el-button
    type=&quot;primary&quot;
    @click=&quot;openFullScreen1&quot;
    v-loading.fullscreen.lock=&quot;fullscreenLoading&quot;&gt;
    Como directiva
  &lt;/el-button&gt;
  &lt;el-button
    type=&quot;primary&quot;
    @click=&quot;openFullScreen2&quot;&gt;
    Como servicio
  &lt;/el-button&gt;
&lt;/template&gt;

&lt;script&gt;
  export default {
    data() {
      return {
        fullscreenLoading: false
      }
    },
    methods: {
      openFullScreen1() {
        this.fullscreenLoading = true;
        setTimeout(() =&gt; {
          this.fullscreenLoading = false;
        }, 2000);
      },
      openFullScreen2() {
        const loading = this.$loading({
          lock: true,
          text: 'Loading',
          spinner: 'el-icon-loading',
          background: 'rgba(0, 0, 0, 0.7)'
        });
        setTimeout(() =&gt; {
          loading.close();
        }, 2000);
      }
    }
  }
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="servicio"><a class="header-anchor" href="#servicio">¶</a> Servicio</h3>
<p>Puede invocar el componente con un servicio. Importe el servicio:</p>
<pre><code class="language-javascript">import { Loading } from 'element-ui';
</code></pre>
<p>Invocar:</p>
<pre><code class="language-javascript">Loading.service(options);
</code></pre>
<p>El parámetro <code>options</code> es la configuración del componente, y estos detalles pueden ser encontrados en la siguiente table. <code>LoadingService</code> devuelve una instancia del componente, y puede cerrarlo invocando el método <code>close</code>:</p>
<pre><code class="language-javascript">let loadingInstance = Loading.service(options);
loadingInstance.close();
</code></pre>
<p>Tenga en cuenta que, en este caso, el componente a pantalla completa es una instancia única. Si un nuevo componente de pantalla completa es invocado antes de que se cierre la existente, se devolverá la instancia existente en lugar de crear la otra instancia:</p>
<pre><code class="language-javascript">let loadingInstance1 = Loading.service({ fullscreen: true });
let loadingInstance2 = Loading.service({ fullscreen: true });
console.log(loadingInstance1 === loadingInstance2); // true
</code></pre>
<p>Llamar al método <code>close</code> en cualquiera de estas puede cerrarlo.</p>
<p>Si Element es importado completamente, un método global <code>$loading</code> puede ser registrado a Vue.prototype. Puede invocarlo como esto: <code>this.$loading(options)</code>, y también devuelve una instancia del componente.</p>
<h3 id="opciones"><a class="header-anchor" href="#opciones">¶</a> Opciones</h3>
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
<td>target</td>
<td>el nodo del DOM que el componente debe cubrir. Acepta un objecto DOM o una cadena. Si está es una cadena, este será pasado a <code>document.querySelector</code> para obtener el correspondiente nodo del DOM</td>
<td>object/string</td>
<td>—</td>
<td>document.body</td>
</tr>
<tr>
<td>body</td>
<td>igual que el modificador <code>body</code> de <code>v-loading</code></td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>fullscreen</td>
<td>igual que el modificador <code>fullscreen</code> de <code>v-loading</code></td>
<td>boolean</td>
<td>—</td>
<td>true</td>
</tr>
<tr>
<td>lock</td>
<td>igual que el modificador <code>lock</code> de <code>v-loading</code></td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>text</td>
<td>texto de cargando que se muestra debajo del spinner</td>
<td>string</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>spinner</td>
<td>nombre de clase del spinner personalizado</td>
<td>string</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>background</td>
<td>color de fondo de la máscara</td>
<td>string</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>customClass</td>
<td>nombre de clase personalizada para el componente</td>
<td>string</td>
<td>—</td>
<td>—</td>
</tr>
</tbody>
</table>
