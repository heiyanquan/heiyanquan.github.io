<h2 id="drawer"><a class="header-anchor" href="#drawer">¶</a> Drawer</h2>
<p>A veces, <code>Dialog</code> no siempre satisface nuestros requisitos, digamos que tiene un formulario masivo, o necesita espacio para mostrar algo como <code>terminos &amp; condiciones</code>, <code>Drawer</code> tiene una API casi idéntica a <code>Dialog</code>, pero introduce una experiencia de usuario diferente.</p>
<h3 id="uso-basico"><a class="header-anchor" href="#uso-basico">¶</a> Uso básico</h3>
<p>Llamada de un drawer temporal, desde varias direcciones</p>
<demo-block>
        <div><p>Debe establecer <code>visible</code> para <code>Drawer</code> como lo hace <code>Dialog</code> para controlar la visibilidad. <code>visible</code> es del tipo <code>boolean</code>. <code>Drawer</code> tiene partes: <code>title</code> &amp; <code>body</code>, el <code>title</code> es un slot con nombre, también puede establecer el título a través de un atributo llamado <code>title</code>, por defecto a una cadena vacía, la parte <code>body</code> es el área principal de <code>Drawer</code>, que contiene contenido definido por el usuario. Al abrir, <code>Drawer</code> se expande desde la <strong>esquina derecha a la izquierda</strong> cuyo tamaño es <strong>30%</strong> de la ventana del navegador por defecto. Puede cambiar ese comportamiento predeterminado estableciendo los atributos <code>direction</code> y <code>size</code>. Este caso de demostración también muestra cómo utilizar la API <code>before-close</code>, consulte la sección Atributos para obtener más detalles.</p>
</div>
        <template slot="source"><element-demo0 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;el-radio-group v-model=&quot;direction&quot;&gt;
  &lt;el-radio label=&quot;ltr&quot;&gt;left to right&lt;/el-radio&gt;
  &lt;el-radio label=&quot;rtl&quot;&gt;right to left&lt;/el-radio&gt;
  &lt;el-radio label=&quot;ttb&quot;&gt;top to bottom&lt;/el-radio&gt;
  &lt;el-radio label=&quot;btt&quot;&gt;bottom to top&lt;/el-radio&gt;
&lt;/el-radio-group&gt;

&lt;el-button @click=&quot;drawer = true&quot; type=&quot;primary&quot; style=&quot;margin-left: 16px;&quot;&gt;
  open
&lt;/el-button&gt;

&lt;el-drawer
  title=&quot;I am the title&quot;
  :visible.sync=&quot;drawer&quot;
  :direction=&quot;direction&quot;
  :before-close=&quot;handleClose&quot;&gt;
  &lt;span&gt;Hi, there!&lt;/span&gt;
&lt;/el-drawer&gt;

&lt;script&gt;
  export default {
    data() {
      return {
        drawer: false,
        direction: 'rtl',
      };
    },
    methods: {
      handleClose(done) {
        this.$confirm('Are you sure you want to close this?')
          .then(_ =&gt; {
            done();
          })
          .catch(_ =&gt; {});
      }
    }
  };
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="sin-titulo"><a class="header-anchor" href="#sin-titulo">¶</a> Sin titulo</h3>
<p>Si no necesitas el titulo lo puedes eliminar del drawer.</p>
<demo-block>
        <div><p>Asigne <strong>false</strong> al atributo <code>withHeader</code>, se puede eliminar el atributo title del drawer, de esa manera el drawer tendrá mas espacio para el contenido. Por razones de accesibilidad se recomienda asignar siempre un contenido valido al atributo <code>title</code>.</p>
</div>
        <template slot="source"><element-demo1 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;el-button @click=&quot;drawer = true&quot; type=&quot;primary&quot; style=&quot;margin-left: 16px;&quot;&gt;
  open
&lt;/el-button&gt;

&lt;el-drawer
  title=&quot;I am the title&quot;
  :visible.sync=&quot;drawer&quot;
  :with-header=&quot;false&quot;&gt;
  &lt;span&gt;Hi there!&lt;/span&gt;
&lt;/el-drawer&gt;

&lt;script&gt;
  export default {
    data() {
      return {
        drawer: false,
      };
    }
  };
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="personalizar-el-contenido"><a class="header-anchor" href="#personalizar-el-contenido">¶</a> Personalizar el contenido</h3>
<p>Al igual que <code>Dialog</code>, <code>Drawer</code> puede hacer muchas interacciones diversas.</p>
<demo-block>
        
        <template slot="source"><element-demo2 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;el-button type=&quot;text&quot; @click=&quot;table = true&quot;&gt;Open Drawer with nested table&lt;/el-button&gt;
&lt;el-button type=&quot;text&quot; @click=&quot;dialog = true&quot;&gt;Open Drawer with nested form&lt;/el-button&gt;
&lt;el-drawer
  title=&quot;I have a nested table inside!&quot;
  :visible.sync=&quot;table&quot;
  direction=&quot;rtl&quot;
  size=&quot;50%&quot;&gt;
   &lt;el-table :data=&quot;gridData&quot;&gt;
      &lt;el-table-column property=&quot;date&quot; label=&quot;Date&quot; width=&quot;150&quot;&gt;&lt;/el-table-column&gt;
      &lt;el-table-column property=&quot;name&quot; label=&quot;Name&quot; width=&quot;200&quot;&gt;&lt;/el-table-column&gt;
      &lt;el-table-column property=&quot;address&quot; label=&quot;Address&quot;&gt;&lt;/el-table-column&gt;
    &lt;/el-table&gt;
&lt;/el-drawer&gt;

&lt;el-drawer
  title=&quot;I have a nested form inside!&quot;
  :before-close=&quot;handleClose&quot;
  :visible.sync=&quot;dialog&quot;
  direction=&quot;ltr&quot;
  custom-class=&quot;demo-drawer&quot;
  ref=&quot;drawer&quot;
  &gt;
  &lt;div class=&quot;demo-drawer__content&quot;&gt;
    &lt;el-form :model=&quot;form&quot;&gt;
      &lt;el-form-item label=&quot;Name&quot; :label-width=&quot;formLabelWidth&quot;&gt;
        &lt;el-input v-model=&quot;form.name&quot; autocomplete=&quot;off&quot;&gt;&lt;/el-input&gt;
      &lt;/el-form-item&gt;
      &lt;el-form-item label=&quot;Area&quot; :label-width=&quot;formLabelWidth&quot;&gt;
        &lt;el-select v-model=&quot;form.region&quot; placeholder=&quot;Please select activity area&quot;&gt;
          &lt;el-option label=&quot;Area1&quot; value=&quot;shanghai&quot;&gt;&lt;/el-option&gt;
          &lt;el-option label=&quot;Area2&quot; value=&quot;beijing&quot;&gt;&lt;/el-option&gt;
        &lt;/el-select&gt;
      &lt;/el-form-item&gt;
    &lt;/el-form&gt;
    &lt;div class=&quot;demo-drawer__footer&quot;&gt;
      &lt;el-button @click=&quot;cancelForm&quot;&gt;Cancel&lt;/el-button&gt;
      &lt;el-button type=&quot;primary&quot; @click=&quot;$refs.drawer.closeDrawer()&quot; :loading=&quot;loading&quot;&gt;{{ loading ? 'Submitting ...' : 'Submit' }}&lt;/el-button&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/el-drawer&gt;

&lt;script&gt;
export default {
  data() {
    return {
      table: false,
      dialog: false,
      loading: false,
      gridData: [{
        date: '2016-05-02',
        name: 'Peter Parker',
        address: 'Queens, New York City'
      }, {
        date: '2016-05-04',
        name: 'Peter Parker',
        address: 'Queens, New York City'
      }, {
        date: '2016-05-01',
        name: 'Peter Parker',
        address: 'Queens, New York City'
      }, {
        date: '2016-05-03',
        name: 'Peter Parker',
        address: 'Queens, New York City'
      }],
      form: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      },
      formLabelWidth: '80px',
      timer: null,
    };
  },
  methods: {
    handleClose(done) {
      if (this.loading) {
        return;
      }
      this.$confirm('Do you want to submit?')
        .then(_ =&gt; {
          this.loading = true;
          this.timer = setTimeout(() =&gt; {
            done();
            // animation takes time
            setTimeout(() =&gt; {
              this.loading = false;
            }, 400);
          }, 2000);
        })
        .catch(_ =&gt; {});
    },
    cancelForm() {
      this.loading = false;
      this.dialog = false;
      clearTimeout(this.timer);
    }
  }
}
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="drawer-anidados"><a class="header-anchor" href="#drawer-anidados">¶</a> Drawer anidados</h3>
<p>También puede tener varias capas de <code>Drawer</code> al igual que con <code>Dialog</code>.</p>
<demo-block>
        <div><p>Si necesita varios drawer en diferentes capas, debe establecer el atributo <code>append-to-body</code> en <strong>true</strong></p>
</div>
        <template slot="source"><element-demo3 /></template>
        <template slot="highlight"><pre v-pre><code class="html">
&lt;el-button @click=&quot;drawer = true&quot; type=&quot;primary&quot; style=&quot;margin-left: 16px;&quot;&gt;
  open
&lt;/el-button&gt;

&lt;el-drawer
  title=&quot;I'm outer Drawer&quot;
  :visible.sync=&quot;drawer&quot;
  size=&quot;50%&quot;&gt;
  &lt;div&gt;
   &lt;el-button @click=&quot;innerDrawer = true&quot;&gt;Click me!&lt;/el-button&gt;
   &lt;el-drawer
     title=&quot;I'm inner Drawer&quot;
     :append-to-body=&quot;true&quot;
     :before-close=&quot;handleClose&quot;
     :visible.sync=&quot;innerDrawer&quot;&gt;
     &lt;p&gt;_(:зゝ∠)_&lt;/p&gt;
   &lt;/el-drawer&gt;
  &lt;/div&gt;
&lt;/el-drawer&gt;

&lt;script&gt;
  export default {
    data() {
      return {
        drawer: false,
        innerDrawer: false,
      };
    },
    methods: {
      handleClose(done) {
        this.$confirm('You still have unsaved data, proceed?')
          .then(_ =&gt; {
            done();
          })
          .catch(_ =&gt; {});
      }
    }
  };
&lt;/script&gt;

</code></pre></template></demo-block><div class="tip">
<p>El contenido dentro del Drawer debe ser renderizado de forma perezosa, lo que significa que el contenido dentro del Drawer no afectará al rendimiento inicial del renderizado, por lo que cualquier operación DOM debe realizarse a través de <code>ref' o después de que se emita el evento</code>open'.</p>
</div>
<div class="tip">
<p>El Drawer proporciona una API llamada &quot;destroyOnClose&quot;, que es una variable de bandera que indica que debe destruir el contenido hijo dentro del Drawer después de que se haya cerrado. Puede utilizar esta API cuando necesite que su ciclo de vida &quot;mounted&quot; sea llamado cada vez que se abra el Cajón.</p>
</div>
<div class="tip">
<p>Si la variable <code>visible</code> se gestiona en el almacén de Vuex, el <code>.sync</code> no puede funcionar correctamente. En este caso, elimine el modificador <code>.sync</code>, escuche los eventos <code>open</code> y <code>close</code> de Drawer, y envíe mutaciones Vuex para actualizar el valor de esa variable en los manejadores de eventos.</p>
</div>
<h3 id="atributos-de-drawer"><a class="header-anchor" href="#atributos-de-drawer">¶</a> Atributos de Drawer</h3>
<table>
<thead>
<tr>
<th>Parámetros</th>
<th>Descripción</th>
<th>Tipo</th>
<th>Valores aceptados</th>
<th>Por defecto</th>
</tr>
</thead>
<tbody>
<tr>
<td>append-to-body</td>
<td>Los controles deberían insertar Drawer en el elemento DocumentBody, los Drawer anidados deben asignar este parámetro a <strong>true</strong></td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>before-close</td>
<td>Si está configurado, el procedimiento de cierre se detendrá.</td>
<td>function(done), done es un tipo de función que acepta un booleano como parámetro, una llamada hecha con true o sin parámetro abortará el procedimiento de cierre.</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>close-on-press-escape</td>
<td>Indica si el Drawer puede cerrarse pulsando ESC</td>
<td>boolean</td>
<td>—</td>
<td>true</td>
</tr>
<tr>
<td>custom-class</td>
<td>Nombre extra de clase para  Drawer</td>
<td>string</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>destroy-on-close</td>
<td>Indica si los children deben ser destruidos después de cerrar el Drawer.</td>
<td>boolean</td>
<td>-</td>
<td>false</td>
</tr>
<tr>
<td>modal</td>
<td>Mostrará una capa de sombra</td>
<td>boolean</td>
<td>—</td>
<td>true</td>
</tr>
<tr>
<td>modal-append-to-body</td>
<td>Indica si se debe insertar una capa de sombreado en el elemento DocumentBody</td>
<td>boolean</td>
<td>—</td>
<td>true</td>
</tr>
<tr>
<td>direction</td>
<td>Dirección de apertura del Drawer</td>
<td>Direction</td>
<td>rtl / ltr / ttb / btt</td>
<td>rtl</td>
</tr>
<tr>
<td>show-close</td>
<td>Se mostrará el botón de cerrar en la parte superior derecha del Drawer</td>
<td>boolean</td>
<td>—</td>
<td>true</td>
</tr>
<tr>
<td>size</td>
<td>Tamaño del Drawer. Si el Drawer está en modo horizontal, afecta a la propiedad width, de lo contrario afecta a la propiedad height, cuando el tamaño es tipo <code>number</code>, describe el tamaño por unidad de píxeles; cuando el tamaño es tipo <code>string</code>, se debe usar con notación <code>x%</code>, de lo contrario se interpretará como unidad de píxeles.</td>
<td>number / string</td>
<td>-</td>
<td>'30%'</td>
</tr>
<tr>
<td>title</td>
<td>El título del Drawer, también se puede establecer por slot con nombre, las descripciones detalladas se pueden encontrar en el formulario de slot.</td>
<td>string</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>visible</td>
<td>Si se muestra el Drawer, también soporta la notación <code>.sync</code></td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>wrapperClosable</td>
<td>Indica si el usuario puede cerrar el Drawer haciendo clic en la capa de sombreado.</td>
<td>boolean</td>
<td>-</td>
<td>true</td>
</tr>
<tr>
<td>withHeader</td>
<td>Indica si la sección header existirá, por defecto es true, cuando es false no tienen efecto, ambos, <code>title attribute</code> y <code>title slot</code></td>
<td>boolean</td>
<td>-</td>
<td>true</td>
</tr>
</tbody>
</table>
<h3 id="drawer-slot-s"><a class="header-anchor" href="#drawer-slot-s">¶</a> Drawer Slot's</h3>
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
<td>El contenido del Drawer</td>
</tr>
<tr>
<td>title</td>
<td>El titulo de la sección del Drawer</td>
</tr>
</tbody>
</table>
<h3 id="metodos-drawer"><a class="header-anchor" href="#metodos-drawer">¶</a> Métodos Drawer</h3>
<table>
<thead>
<tr>
<th>Nombre</th>
<th>Descripción</th>
</tr>
</thead>
<tbody>
<tr>
<td>closeDrawer</td>
<td>Para cerrar el Drawer, este método llamará <code>before-close</code>.</td>
</tr>
</tbody>
</table>
<h3 id="eventos-drawer"><a class="header-anchor" href="#eventos-drawer">¶</a> Eventos Drawer</h3>
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
<td>open</td>
<td>Se activa antes de que comience la animación de apertura del Drawer.</td>
<td>—</td>
</tr>
<tr>
<td>opened</td>
<td>Se activa cuando finaliza la animación de apertura del Drawer.</td>
<td>—</td>
</tr>
<tr>
<td>close</td>
<td>Se activa antes de que comience la animación de cierre del Drawer.</td>
<td>—</td>
</tr>
<tr>
<td>closed</td>
<td>Se activa después de que finaliza la animación de cierre del Drawer.</td>
<td>—</td>
</tr>
</tbody>
</table>
