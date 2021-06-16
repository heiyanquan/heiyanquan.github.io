<h2 id="dialog"><a class="header-anchor" href="#dialog">¶</a> Dialog</h2>
<p>Informar a usuarios preservando el estado de la página actual.</p>
<h3 id="uso-basico"><a class="header-anchor" href="#uso-basico">¶</a> Uso Básico</h3>
<p>Dialog abre una caja de diálogo, y es bastante personalizable.</p>
<demo-block>
        <div><p>Establezca el atributo <code>visible</code> con un booleano, y el Dialog se muestra cuando es <code>true</code>. El diálogo tiene dos partes: <code>body</code> y <code>footer</code>,  este último requiere un slot llamado <code>footer</code>. El atributo <code>title</code> es opcional (vacío por defecto) y sirve para definir un título. Por último, este ejemplo muestra cómo se utiliza <code>before-close</code>.</p>
</div>
        <template slot="source"><element-demo0 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;el-button type=&quot;text&quot; @click=&quot;dialogVisible = true&quot;&gt;click to open the Dialog&lt;/el-button&gt;

&lt;el-dialog
  title=&quot;Tips&quot;
  :visible.sync=&quot;dialogVisible&quot;
  width=&quot;30%&quot;
  :before-close=&quot;handleClose&quot;&gt;
  &lt;span&gt;This is a message&lt;/span&gt;
  &lt;span slot=&quot;footer&quot; class=&quot;dialog-footer&quot;&gt;
    &lt;el-button @click=&quot;dialogVisible = false&quot;&gt;Cancel&lt;/el-button&gt;
    &lt;el-button type=&quot;primary&quot; @click=&quot;dialogVisible = false&quot;&gt;Confirm&lt;/el-button&gt;
  &lt;/span&gt;
&lt;/el-dialog&gt;

&lt;script&gt;
  export default {
    data() {
      return {
        dialogVisible: false
      };
    },
    methods: {
      handleClose(done) {
        this.$confirm('Are you sure to close this dialog?')
          .then(_ =&gt; {
            done();
          })
          .catch(_ =&gt; {});
      }
    }
  };
&lt;/script&gt;
</code></pre></template></demo-block><div class="tip">
<p><code>before-close</code>  sólo funciona cuando el usuario hace clic en el icono de cerrar o en el fondo. Si tiene botones que cierran el cuadro de diálogo en el slot llamado <code>footer</code>, puede agregar lo que haría <code>before-close</code> en el manejador de eventos de los botones.</p>
</div>
<h3 id="personalizaciones"><a class="header-anchor" href="#personalizaciones">¶</a> Personalizaciones</h3>
<p>El contenido del Diálogo puede ser cualquier cosa, incluso una tabla o un formulario. Este ejemplo muestra cómo usar Element Table y Form con Dialog</p>
<demo-block>
        
        <template slot="source"><element-demo1 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;!-- Table --&gt;
&lt;el-button type=&quot;text&quot; @click=&quot;dialogTableVisible = true&quot;&gt;open a Table nested Dialog&lt;/el-button&gt;

&lt;el-dialog title=&quot;Shipping address&quot; :visible.sync=&quot;dialogTableVisible&quot;&gt;
  &lt;el-table :data=&quot;gridData&quot;&gt;
    &lt;el-table-column property=&quot;date&quot; label=&quot;Date&quot; width=&quot;150&quot;&gt;&lt;/el-table-column&gt;
    &lt;el-table-column property=&quot;name&quot; label=&quot;Name&quot; width=&quot;200&quot;&gt;&lt;/el-table-column&gt;
    &lt;el-table-column property=&quot;address&quot; label=&quot;Address&quot;&gt;&lt;/el-table-column&gt;
  &lt;/el-table&gt;
&lt;/el-dialog&gt;

&lt;!-- Form --&gt;
&lt;el-button type=&quot;text&quot; @click=&quot;dialogFormVisible = true&quot;&gt;open a Form nested Dialog&lt;/el-button&gt;

&lt;el-dialog title=&quot;Shipping address&quot; :visible.sync=&quot;dialogFormVisible&quot;&gt;
  &lt;el-form :model=&quot;form&quot;&gt;
    &lt;el-form-item label=&quot;Promotion name&quot; :label-width=&quot;formLabelWidth&quot;&gt;
      &lt;el-input v-model=&quot;form.name&quot; autocomplete=&quot;off&quot;&gt;&lt;/el-input&gt;
    &lt;/el-form-item&gt;
    &lt;el-form-item label=&quot;Zones&quot; :label-width=&quot;formLabelWidth&quot;&gt;
      &lt;el-select v-model=&quot;form.region&quot; placeholder=&quot;Please select a zone&quot;&gt;
        &lt;el-option label=&quot;Zone No.1&quot; value=&quot;shanghai&quot;&gt;&lt;/el-option&gt;
        &lt;el-option label=&quot;Zone No.2&quot; value=&quot;beijing&quot;&gt;&lt;/el-option&gt;
      &lt;/el-select&gt;
    &lt;/el-form-item&gt;
  &lt;/el-form&gt;
  &lt;span slot=&quot;footer&quot; class=&quot;dialog-footer&quot;&gt;
    &lt;el-button @click=&quot;dialogFormVisible = false&quot;&gt;Cancel&lt;/el-button&gt;
    &lt;el-button type=&quot;primary&quot; @click=&quot;dialogFormVisible = false&quot;&gt;Confirm&lt;/el-button&gt;
  &lt;/span&gt;
&lt;/el-dialog&gt;

&lt;script&gt;
  export default {
    data() {
      return {
        gridData: [{
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
        }, {
          date: '2016-05-03',
          name: 'John Smith',
          address: 'No.1518,  Jinshajiang Road, Putuo District'
        }],
        dialogTableVisible: false,
        dialogFormVisible: false,
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
        formLabelWidth: '120px'
      };
    }
  };
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="dialogo-anidado"><a class="header-anchor" href="#dialogo-anidado">¶</a> Diálogo anidado</h3>
<p>Si un diálogo está anidado en otro diálogo, se requiere append-to-body.</p>
<demo-block>
        <div><p>Normalmente no recomendamos el uso de Dialog anidado. Si necesita que se muestren múltiples diálogos en la página, puede simplemente aplanarlos para que sean hermanos entre sí. Si debe anidar un Diálogo dentro de otro Diálogo, establezca <code>append-to-body</code> del Diálogo anidado como true, y lo añadirá al cuerpo en lugar de su nodo padre, para que ambos Diálogos puedan ser correctamente renderizados.</p>
</div>
        <template slot="source"><element-demo2 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;template&gt;
  &lt;el-button type=&quot;text&quot; @click=&quot;outerVisible = true&quot;&gt;open the outer Dialog&lt;/el-button&gt;
  
  &lt;el-dialog title=&quot;Outer Dialog&quot; :visible.sync=&quot;outerVisible&quot;&gt;
    &lt;el-dialog
        width=&quot;30%&quot;
        title=&quot;Inner Dialog&quot;
        :visible.sync=&quot;innerVisible&quot;
        append-to-body&gt;
    &lt;/el-dialog&gt;
    &lt;div slot=&quot;footer&quot; class=&quot;dialog-footer&quot;&gt;
      &lt;el-button @click=&quot;outerVisible = false&quot;&gt;Cancel&lt;/el-button&gt;
      &lt;el-button type=&quot;primary&quot; @click=&quot;innerVisible = true&quot;&gt;open the inner Dialog&lt;/el-button&gt;
    &lt;/div&gt;
  &lt;/el-dialog&gt;
&lt;/template&gt;

&lt;script&gt;
  export default {
    data() {
      return {
        outerVisible: false,
        innerVisible: false
      };
    }
  }
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="contenido-centrado"><a class="header-anchor" href="#contenido-centrado">¶</a> Contenido centrado</h3>
<p>El contenido de Diálogo se puede centrar.</p>
<demo-block>
        <div><p>Ajuste <code>center</code> en <code>true</code> para centrar el encabezado y el pie de página del cuadro de diálogo horizontalmente. <code>center</code> sólo afecta al encabezado y pie de página de Dialog. El cuerpo de Dialog puede ser cualquier cosa, así que a veces no se ve bien cuando está centrado. Necesitas escribir algún CSS si deseas centrar el cuerpo también.</p>
</div>
        <template slot="source"><element-demo3 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;el-button type=&quot;text&quot; @click=&quot;centerDialogVisible = true&quot;&gt;Click to open the Dialog&lt;/el-button&gt;

&lt;el-dialog
  title=&quot;Warning&quot;
  :visible.sync=&quot;centerDialogVisible&quot;
  width=&quot;30%&quot;
  center&gt;
  &lt;span&gt;It should be noted that the content will not be aligned in center by default&lt;/span&gt;
  &lt;span slot=&quot;footer&quot; class=&quot;dialog-footer&quot;&gt;
    &lt;el-button @click=&quot;centerDialogVisible = false&quot;&gt;Cancel&lt;/el-button&gt;
    &lt;el-button type=&quot;primary&quot; @click=&quot;centerDialogVisible = false&quot;&gt;Confirm&lt;/el-button&gt;
  &lt;/span&gt;
&lt;/el-dialog&gt;

&lt;script&gt;
  export default {
    data() {
      return {
        centerDialogVisible: false
      };
    }
  };
&lt;/script&gt;
</code></pre></template></demo-block><div class="tip">
<p>El contenido de Dialog se renderiza en modo lazy, lo que significa que la ranura por defecto no se renderiza en el DOM hasta que se abre por primera vez. Por lo tanto, si necesita realizar una manipulación DOM o acceder a un componente mediante ref, hágalo en el callback del evento <code>open</code>.</p>
</div>
<div class="tip">
<p>Si la variable ligada a <code>visible</code> se gestiona en el Vuex store, el <code>.sync</code> no puede funcionar correctamente. En este caso, elimine el modificador <code>.sync</code>, escuche los eventos de <code>open</code> y <code>close</code> Dialog, y confirme las mutaciones Vuex para actualizar el valor de esa variable en los manejadores de eventos.</p>
</div>
<h3 id="atributo"><a class="header-anchor" href="#atributo">¶</a> Atributo</h3>
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
<td>visible</td>
<td>visibilidad del Diálogo, apoya el modificador .sync</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>title</td>
<td>título de Diálogo. También se puede pasar con un slot con nombre (ver la tabla siguiente)</td>
<td>string</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>width</td>
<td>anchura de Diálogo</td>
<td>string</td>
<td>—</td>
<td>50%</td>
</tr>
<tr>
<td>fullscreen</td>
<td>si el diálogo ocupa pantalla completa</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>top</td>
<td>valor de <code>margin-top</code> del Diálogo CSS</td>
<td>string</td>
<td>—</td>
<td>15vh</td>
</tr>
<tr>
<td>modal</td>
<td>si se muestra una máscara</td>
<td>boolean</td>
<td>—</td>
<td>true</td>
</tr>
<tr>
<td>modal-append-to-body</td>
<td>si adjuntar modal al elemento de cuerpo. Si es falso,el modal se agregará al elemento principal de Diálogo</td>
<td>boolean</td>
<td>—</td>
<td>true</td>
</tr>
<tr>
<td>append-to-body</td>
<td>Si adjuntar el cuadro de diálogo al cuerpo</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>lock-scroll</td>
<td>Si el scroll del cuerpo está desactivado mientras se muestra el cuadro de diálogo</td>
<td>boolean</td>
<td>—</td>
<td>true</td>
</tr>
<tr>
<td>custom-class</td>
<td>nombres de clase personalizada para el Diálogo</td>
<td>string</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>close-on-click-modal</td>
<td>si el Diálogo puede ser cerrado haciendo clic en la máscara</td>
<td>boolean</td>
<td>—</td>
<td>true</td>
</tr>
<tr>
<td>close-on-press-escape</td>
<td>si el Diálogo puede ser cerrado presionando ESC</td>
<td>boolean</td>
<td>—</td>
<td>true</td>
</tr>
<tr>
<td>show-close</td>
<td>si mostrar un botón de cerrar</td>
<td>boolean</td>
<td>—</td>
<td>true</td>
</tr>
<tr>
<td>before-close</td>
<td>una devolución de llamada antes de que se cierre el cuadro de diálogo, y evitar cerrar el cuadro de diálogo</td>
<td>función(done) <code>done</code>se usa para cerrar el diálog</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>center</td>
<td>si alinear el encabezado y el pie de página en el centro</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>destroy-on-close</td>
<td>Destruir elementos en Dialog cuando se cierra</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
</tbody>
</table>
<h3 id="slots"><a class="header-anchor" href="#slots">¶</a> Slots</h3>
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
<td>contenido de Diálogo</td>
</tr>
<tr>
<td>title</td>
<td>contenido del título de Diálogo</td>
</tr>
<tr>
<td>footer</td>
<td>contenido del pie de página de Diálogo</td>
</tr>
</tbody>
</table>
<h3 id="eventos"><a class="header-anchor" href="#eventos">¶</a> Eventos</h3>
<table>
<thead>
<tr>
<th>Nombre de Evento</th>
<th>Descripción</th>
<th>Parámetros</th>
</tr>
</thead>
<tbody>
<tr>
<td>open</td>
<td>se activa cuando se abre el cuadro de Diálogo</td>
<td>—</td>
</tr>
<tr>
<td>opened</td>
<td>se activa cuando la animación de apertura del Dialog termina.</td>
<td>—</td>
</tr>
<tr>
<td>close</td>
<td>se dispara cuando el Diálogo se cierra</td>
<td>—</td>
</tr>
<tr>
<td>closed</td>
<td>se activa cuando finaliza la animación de cierre del Diálog</td>
<td>—</td>
</tr>
</tbody>
</table>
