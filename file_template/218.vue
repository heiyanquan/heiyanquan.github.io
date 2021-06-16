<h2 id="tablas"><a class="header-anchor" href="#tablas">¶</a> Tablas</h2>
<p>Visualiza múltiples datos con un formato en particular. Podrá ordenar, filtrar y comparar datos en una tabla.</p>
<h3 id="tabla-basica"><a class="header-anchor" href="#tabla-basica">¶</a> Tabla básica</h3>
<p>La tabla básica es solo para mostrar datos.</p>
<demo-block>
        <div><p>Después de haber establecido el atributo <code>data</code> de <code>el-table</code> con un arreglo de objetos, puede usar la propiedad <code>prop</code> (el correspondiente a la clave de un objeto dentro del arreglo <code>data</code>) en <code>el-table-column</code> para insertar datos a las columnas de la tabla, y establecer el atributo <code>label</code> para definir el nombre de la columna. También puede usar el atributo <code>width</code> para establecer el ancho de las columnas.</p>
</div>
        <template slot="source"><element-demo0 /></template>
        <template slot="highlight"><pre v-pre><code class="html">  &lt;template&gt;
    &lt;el-table
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
            date: '2016-05-03',
            name: 'Tom',
            address: 'No. 189, Grove St, Los Angeles'
          }, {
            date: '2016-05-02',
            name: 'Tom',
            address: 'No. 189, Grove St, Los Angeles'
          }, {
            date: '2016-05-04',
            name: 'Tom',
            address: 'No. 189, Grove St, Los Angeles'
          }, {
            date: '2016-05-01',
            name: 'Tom',
            address: 'No. 189, Grove St, Los Angeles'
          }]
        }
      }
    }
  &lt;/script&gt;
</code></pre></template></demo-block><h3 id="tabla-con-franjas"><a class="header-anchor" href="#tabla-con-franjas">¶</a> Tabla con franjas</h3>
<p>La tabla con franjas hace más fácil distinguir filas diferentes.</p>
<demo-block>
        <div><p>El atributo <code>stripe</code> también acepta un <code>Boolean</code>. Si se encuentra <code>true</code>, la tabla será con franjas.</p>
</div>
        <template slot="source"><element-demo1 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;template&gt;
  &lt;el-table
    :data=&quot;tableData&quot;
    stripe
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
          date: '2016-05-03',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles'
        }, {
          date: '2016-05-02',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles'
        }, {
          date: '2016-05-04',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles'
        }, {
          date: '2016-05-01',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles'
        }]
      }
    }
  }
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="tabla-con-bordes"><a class="header-anchor" href="#tabla-con-bordes">¶</a> Tabla con bordes</h3>
<demo-block>
        <div><p>Por defecto, la tabla no tiene bordes verticales. Si lo necesita, puede establecer el atributo <code>border</code> a <code>true</code>.</p>
</div>
        <template slot="source"><element-demo2 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;template&gt;
  &lt;el-table
    :data=&quot;tableData&quot;
    border
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
          date: '2016-05-03',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles'
        }, {
          date: '2016-05-02',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles'
        }, {
          date: '2016-05-04',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles'
        }, {
          date: '2016-05-01',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles'
        }]
      }
    }
  }
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="tabla-con-estados"><a class="header-anchor" href="#tabla-con-estados">¶</a> Tabla con estados</h3>
<p>Puede destacar el contenido de la tabla para distinguir entre &quot;success, information, warning, danger&quot; y otros estados.</p>
<demo-block>
        <div><p>Utilice <code>row-class-name</code> en <code>el-table</code> para agregar clases personalizadas a una fila en específico. Y entonces, podrá darle diseño con estas clases.</p>
</div>
        <template slot="source"><element-demo3 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;template&gt;
  &lt;el-table
    :data=&quot;tableData&quot;
    style=&quot;width: 100%&quot;
    :row-class-name=&quot;tableRowClassName&quot;&gt;
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
  .el-table .warning-row {
    background: oldlace;
  }

  .el-table .success-row {
    background: #f0f9eb;
  }
&lt;/style&gt;

&lt;script&gt;
  export default {
    methods: {
      tableRowClassName({row, rowIndex}) {
        if (rowIndex === 1) {
          return 'warning-row';
        } else if (rowIndex === 3) {
          return 'success-row';
        }
        return '';
      }
    },
    data() {
      return {
        tableData:  [{
          date: '2016-05-03',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles'
        }, {
          date: '2016-05-02',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles'
        }, {
          date: '2016-05-04',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles'
        }, {
          date: '2016-05-01',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles'
        }]
      }
    }
  }
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="tabla-con-cabecera-fija"><a class="header-anchor" href="#tabla-con-cabecera-fija">¶</a> Tabla con cabecera fija</h3>
<p>Cuando esta tiene demasiadas filas, puede utilizar una cabecera fija.</p>
<demo-block>
        <div><p>Al configurar el atributo <code>height</code> de <code>el-table</code>, puede fijar la cabecera de la tabla sin agregar otro código.</p>
</div>
        <template slot="source"><element-demo4 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;template&gt;
  &lt;el-table
    :data=&quot;tableData&quot;
    height=&quot;250&quot;
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
          date: '2016-05-03',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles'
        }, {
          date: '2016-05-02',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles'
        }, {
          date: '2016-05-04',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles'
        }, {
          date: '2016-05-01',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles'
        }, {
          date: '2016-05-08',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles'
        }, {
          date: '2016-05-06',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles'
        }, {
          date: '2016-05-07',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles'
        }],
      }
    }
  }
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="tabla-con-columnas-fijas"><a class="header-anchor" href="#tabla-con-columnas-fijas">¶</a> Tabla con columnas fijas</h3>
<p>Cuando se tienen demasiadas columnas, puede fijar alguna de estas.</p>
<demo-block>
        <div><p>El atributo <code>fixed</code> es utilizado en <code>el-table-column</code>, este acepta un <code>Boolean</code>. Si es <code>true</code>, la columna será fijada a la izquierda. También acepta dos tipos: <code>left</code> y <code>right</code>, ambos indican donde debe ser fijada la columna.</p>
</div>
        <template slot="source"><element-demo5 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;template&gt;
  &lt;el-table
    :data=&quot;tableData&quot;
    style=&quot;width: 100%&quot;&gt;
    &lt;el-table-column
      fixed
      prop=&quot;date&quot;
      label=&quot;Fecha&quot;
      width=&quot;150&quot;&gt;
    &lt;/el-table-column&gt;
    &lt;el-table-column
      prop=&quot;name&quot;
      label=&quot;Nombre&quot;
      width=&quot;120&quot;&gt;
    &lt;/el-table-column&gt;
    &lt;el-table-column
      prop=&quot;state&quot;
      label=&quot;Estado&quot;
      width=&quot;120&quot;&gt;
    &lt;/el-table-column&gt;
    &lt;el-table-column
      prop=&quot;city&quot;
      label=&quot;Ciudad&quot;
      width=&quot;120&quot;&gt;
    &lt;/el-table-column&gt;
    &lt;el-table-column
      prop=&quot;address&quot;
      label=&quot;Dirección&quot;
      width=&quot;300&quot;&gt;
    &lt;/el-table-column&gt;
    &lt;el-table-column
      prop=&quot;zip&quot;
      label=&quot;Código postal&quot;
      width=&quot;120&quot;&gt;
    &lt;/el-table-column&gt;
    &lt;el-table-column
      fixed=&quot;right&quot;
      label=&quot;Operaciones&quot;
      width=&quot;120&quot;&gt;
      &lt;template slot-scope=&quot;scope&quot;&gt;
        &lt;el-button @click=&quot;handleClick&quot; type=&quot;text&quot; size=&quot;small&quot;&gt;Detalle&lt;/el-button&gt;
        &lt;el-button type=&quot;text&quot; size=&quot;small&quot;&gt;Editar&lt;/el-button&gt;
      &lt;/template&gt;
    &lt;/el-table-column&gt;
  &lt;/el-table&gt;
&lt;/template&gt;

&lt;script&gt;
  export default {
    methods: {
      handleClick() {
        console.log('click');
      }
    },
    data() {
      return {
        tableData: [{
          date: '2016-05-03',
          name: 'Tom',
          state: 'California',
          city: 'Los Angeles',
          address: 'No. 189, Grove St, Los Angeles',
          zip: 'CA 90036',
          tag: 'Home'
        }, {
          date: '2016-05-02',
          name: 'Tom',
          state: 'California',
          city: 'Los Angeles',
          address: 'No. 189, Grove St, Los Angeles',
          zip: 'CA 90036',
          tag: 'Office'
        }, {
          date: '2016-05-04',
          name: 'Tom',
          state: 'California',
          city: 'Los Angeles',
          address: 'No. 189, Grove St, Los Angeles',
          zip: 'CA 90036',
          tag: 'Home'
        }, {
          date: '2016-05-01',
          name: 'Tom',
          state: 'California',
          city: 'Los Angeles',
          address: 'No. 189, Grove St, Los Angeles',
          zip: 'CA 90036',
          tag: 'Office'
        }]
      }
    }
  }
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="tabla-con-columnas-y-cabecera-fija"><a class="header-anchor" href="#tabla-con-columnas-y-cabecera-fija">¶</a> Tabla con columnas y cabecera fija.</h3>
<p>Cuando tienes grandes cantidades de datos para colocar en una tabla, puede fijar la cabecera y columnas al mismo tiempo.</p>
<demo-block>
        <div><p>Fije las columnas y cabecera al mismo tiempo combinando los dos ejemplos anteriores.</p>
</div>
        <template slot="source"><element-demo6 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;template&gt;
  &lt;el-table
    :data=&quot;tableData&quot;
    style=&quot;width: 100%&quot;
    height=&quot;250&quot;&gt;
    &lt;el-table-column
      fixed
      prop=&quot;date&quot;
      label=&quot;Fecha&quot;
      width=&quot;150&quot;&gt;
    &lt;/el-table-column&gt;
    &lt;el-table-column
      prop=&quot;name&quot;
      label=&quot;Nombre&quot;
      width=&quot;120&quot;&gt;
    &lt;/el-table-column&gt;
    &lt;el-table-column
      prop=&quot;state&quot;
      label=&quot;Estado&quot;
      width=&quot;120&quot;&gt;
    &lt;/el-table-column&gt;
    &lt;el-table-column
      prop=&quot;city&quot;
      label=&quot;Ciudad&quot;
      width=&quot;120&quot;&gt;
    &lt;/el-table-column&gt;
    &lt;el-table-column
      prop=&quot;address&quot;
      label=&quot;Dirección&quot;
      width=&quot;300&quot;&gt;
    &lt;/el-table-column&gt;
    &lt;el-table-column
      prop=&quot;zip&quot;
      label=&quot;Código postal&quot;
      width=&quot;120&quot;&gt;
    &lt;/el-table-column&gt;
  &lt;/el-table&gt;
&lt;/template&gt;

&lt;script&gt;
  export default {
    data() {
      return {
        tableData: [{
          date: '2016-05-03',
          name: 'Tom',
          state: 'California',
          city: 'Los Angeles',
          address: 'No. 189, Grove St, Los Angeles',
          zip: 'CA 90036'
        }, {
          date: '2016-05-02',
          name: 'Tom',
          state: 'California',
          city: 'Los Angeles',
          address: 'No. 189, Grove St, Los Angeles',
          zip: 'CA 90036'
        }, {
          date: '2016-05-04',
          name: 'Tom',
          state: 'California',
          city: 'Los Angeles',
          address: 'No. 189, Grove St, Los Angeles',
          zip: 'CA 90036'
        }, {
          date: '2016-05-01',
          name: 'Tom',
          state: 'California',
          city: 'Los Angeles',
          address: 'No. 189, Grove St, Los Angeles',
          zip: 'CA 90036'
        }, {
          date: '2016-05-08',
          name: 'Tom',
          state: 'California',
          city: 'Los Angeles',
          address: 'No. 189, Grove St, Los Angeles',
          zip: 'CA 90036'
        }, {
          date: '2016-05-06',
          name: 'Tom',
          state: 'California',
          city: 'Los Angeles',
          address: 'No. 189, Grove St, Los Angeles',
          zip: 'CA 90036'
        }, {
          date: '2016-05-07',
          name: 'Tom',
          state: 'California',
          city: 'Los Angeles',
          address: 'No. 189, Grove St, Los Angeles',
          zip: 'CA 90036'
        }]
      }
    }
  }
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="altura-fluido-de-tabla-con-cabecera-fija-y-columnas"><a class="header-anchor" href="#altura-fluido-de-tabla-con-cabecera-fija-y-columnas">¶</a> Altura fluido de tabla con cabecera fija (y columnas)</h3>
<p>Cuando los datos se modifican dinámicamente, es posible que necesite que la tabla tenga una altura máxima en lugar de una altura fija, y además, que se muestre la barra de desplazamiento si es necesario.</p>
<demo-block>
        <div><p>Al configurar el atributo <code>max-height</code> de <code>el-table</code>, tu puedes fijar la cabecera de la tabla. La barra de desplazamiento únicamente se mostrará si la altura sobrepasa el valor de la altura máxima.</p>
</div>
        <template slot="source"><element-demo7 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;template&gt;
  &lt;el-table
    :data=&quot;tableData&quot;
    style=&quot;width: 100%&quot;
    max-height=&quot;250&quot;&gt;
    &lt;el-table-column
      fixed
      prop=&quot;date&quot;
      label=&quot;Fecha&quot;
      width=&quot;150&quot;&gt;
    &lt;/el-table-column&gt;
    &lt;el-table-column
      prop=&quot;name&quot;
      label=&quot;Nombre&quot;
      width=&quot;120&quot;&gt;
    &lt;/el-table-column&gt;
    &lt;el-table-column
      prop=&quot;state&quot;
      label=&quot;Estado&quot;
      width=&quot;120&quot;&gt;
    &lt;/el-table-column&gt;
    &lt;el-table-column
      prop=&quot;city&quot;
      label=&quot;Ciudad&quot;
      width=&quot;120&quot;&gt;
    &lt;/el-table-column&gt;
    &lt;el-table-column
      prop=&quot;address&quot;
      label=&quot;Dirección&quot;
      width=&quot;300&quot;&gt;
    &lt;/el-table-column&gt;
    &lt;el-table-column
      prop=&quot;zip&quot;
      label=&quot;Código postal&quot;
      width=&quot;120&quot;&gt;
    &lt;/el-table-column&gt;
    &lt;el-table-column
      fixed=&quot;right&quot;
      label=&quot;Operaciones&quot;
      width=&quot;120&quot;&gt;
      &lt;template slot-scope=&quot;scope&quot;&gt;
        &lt;el-button
          @click.native.prevent=&quot;deleteRow(scope.$index, tableData)&quot;
          type=&quot;text&quot;
          size=&quot;small&quot;&gt;
          Eliminar
        &lt;/el-button&gt;
      &lt;/template&gt;
    &lt;/el-table-column&gt;
  &lt;/el-table&gt;
&lt;/template&gt;

&lt;script&gt;
  export default {
    methods: {
      deleteRow(index, rows) {
        rows.splice(index, 1);
      }
    },
    data() {
      return {
        tableData: [{
          date: '2016-05-03',
          name: 'Tom',
          state: 'California',
          city: 'Los Angeles',
          address: 'No. 189, Grove St, Los Angeles',
          zip: 'CA 90036'
        }, {
          date: '2016-05-02',
          name: 'Tom',
          state: 'California',
          city: 'Los Angeles',
          address: 'No. 189, Grove St, Los Angeles',
          zip: 'CA 90036'
        }, {
          date: '2016-05-04',
          name: 'Tom',
          state: 'California',
          city: 'Los Angeles',
          address: 'No. 189, Grove St, Los Angeles',
          zip: 'CA 90036'
        }, {
          date: '2016-05-01',
          name: 'Tom',
          state: 'California',
          city: 'Los Angeles',
          address: 'No. 189, Grove St, Los Angeles',
          zip: 'CA 90036'
        }, {
          date: '2016-05-08',
          name: 'Tom',
          state: 'California',
          city: 'Los Angeles',
          address: 'No. 189, Grove St, Los Angeles',
          zip: 'CA 90036'
        }, {
          date: '2016-05-06',
          name: 'Tom',
          state: 'California',
          city: 'Los Angeles',
          address: 'No. 189, Grove St, Los Angeles',
          zip: 'CA 90036'
        }, {
          date: '2016-05-07',
          name: 'Tom',
          state: 'California',
          city: 'Los Angeles',
          address: 'No. 189, Grove St, Los Angeles',
          zip: 'CA 90036'
        }]
      }
    }
  }
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="agrupando-cabeceras-de-la-tabla"><a class="header-anchor" href="#agrupando-cabeceras-de-la-tabla">¶</a> Agrupando cabeceras de la tabla</h3>
<p>Cuando la estructura de datos es compleja, tu puedes hacer uso de cabeceras agrupadas para mostrar datos por jerarquía.</p>
<demo-block>
        <div><p>Solo necesitas colocar <code>el-table-column</code> dentro de un <code>el-table-column</code>, de esta forma lograrás agruparlas.</p>
</div>
        <template slot="source"><element-demo8 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;template&gt;
  &lt;el-table
    :data=&quot;tableData&quot;
    style=&quot;width: 100%&quot;&gt;
    &lt;el-table-column
      prop=&quot;date&quot;
      label=&quot;Fecha&quot;
      width=&quot;150&quot;&gt;
    &lt;/el-table-column&gt;
    &lt;el-table-column label=&quot;Información de entrega&quot;&gt;
      &lt;el-table-column
        prop=&quot;name&quot;
        label=&quot;Nombre&quot;
        width=&quot;120&quot;&gt;
      &lt;/el-table-column&gt;
      &lt;el-table-column label=&quot;Información de dirección&quot;&gt;
        &lt;el-table-column
          prop=&quot;state&quot;
          label=&quot;Estado&quot;
          width=&quot;120&quot;&gt;
        &lt;/el-table-column&gt;
        &lt;el-table-column
          prop=&quot;city&quot;
          label=&quot;Ciudad&quot;
          width=&quot;120&quot;&gt;
        &lt;/el-table-column&gt;
        &lt;el-table-column
          prop=&quot;address&quot;
          label=&quot;Dirección&quot;
          width=&quot;300&quot;&gt;
        &lt;/el-table-column&gt;
        &lt;el-table-column
          prop=&quot;zip&quot;
          label=&quot;Código postal&quot;
          width=&quot;120&quot;&gt;
        &lt;/el-table-column&gt;
      &lt;/el-table-column&gt;
    &lt;/el-table-column&gt;
  &lt;/el-table&gt;
&lt;/template&gt;

&lt;script&gt;
  export default {
    data() {
      return {
        tableData: [{
          date: '2016-05-03',
          name: 'Tom',
          state: 'California',
          city: 'Los Angeles',
          address: 'No. 189, Grove St, Los Angeles',
          zip: 'CA 90036'
        }, {
          date: '2016-05-02',
          name: 'Tom',
          state: 'California',
          city: 'Los Angeles',
          address: 'No. 189, Grove St, Los Angeles',
          zip: 'CA 90036'
        }, {
          date: '2016-05-04',
          name: 'Tom',
          state: 'California',
          city: 'Los Angeles',
          address: 'No. 189, Grove St, Los Angeles',
          zip: 'CA 90036'
        }, {
          date: '2016-05-01',
          name: 'Tom',
          state: 'California',
          city: 'Los Angeles',
          address: 'No. 189, Grove St, Los Angeles',
          zip: 'CA 90036'
        }, {
          date: '2016-05-08',
          name: 'Tom',
          state: 'California',
          city: 'Los Angeles',
          address: 'No. 189, Grove St, Los Angeles',
          zip: 'CA 90036'
        }, {
          date: '2016-05-06',
          name: 'Tom',
          state: 'California',
          city: 'Los Angeles',
          address: 'No. 189, Grove St, Los Angeles',
          zip: 'CA 90036'
        }, {
          date: '2016-05-07',
          name: 'Tom',
          state: 'California',
          city: 'Los Angeles',
          address: 'No. 189, Grove St, Los Angeles',
          zip: 'CA 90036'
        }]
      }
    }
  }
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="seleccion-unica"><a class="header-anchor" href="#seleccion-unica">¶</a> Selección única</h3>
<p>La selección de una fila esta soportada.</p>
<demo-block>
        <div><p>La tabla permite la selección de una sola fila. Puede activarlo agregando el atributo <code>highlight-current-row</code>. Un evento llamado <code>current-change</code> será disparado cuando la selección de la fila cambie, sus parámetros son la fila antes y después de que ocurre el cambio: <code>currentRow</code> y <code>oldCurrentRow</code>. Si necesita mostrar el índice de la fila, puede agregar un nuevo <code>el-table-column</code> con el atributo <code>type</code> asignado al <code>index</code> y podrá ver el índice iniciando desde 1.</p>
</div>
        <template slot="source"><element-demo9 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;template&gt;
  &lt;el-table
    ref=&quot;singleTable&quot;
    :data=&quot;tableData&quot;
    highlight-current-row
    @current-change=&quot;handleCurrentChange&quot;
    style=&quot;width: 100%&quot;&gt;
    &lt;el-table-column
      type=&quot;index&quot;
      width=&quot;50&quot;&gt;
    &lt;/el-table-column&gt;
    &lt;el-table-column
      property=&quot;date&quot;
      label=&quot;Fecha&quot;
      width=&quot;120&quot;&gt;
    &lt;/el-table-column&gt;
    &lt;el-table-column
      property=&quot;name&quot;
      label=&quot;Nombre&quot;
      width=&quot;120&quot;&gt;
    &lt;/el-table-column&gt;
    &lt;el-table-column
      property=&quot;address&quot;
      label=&quot;Dirección&quot;&gt;
    &lt;/el-table-column&gt;
  &lt;/el-table&gt;
  &lt;div style=&quot;margin-top: 20px&quot;&gt;
    &lt;el-button @click=&quot;setCurrent(tableData[1])&quot;&gt;Seleccionar segunda fila&lt;/el-button&gt;
    &lt;el-button @click=&quot;setCurrent()&quot;&gt;Limpiar selección&lt;/el-button&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
  export default {
    data() {
      return {
        tableData: [{
          date: '2016-05-03',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles'
        }, {
          date: '2016-05-02',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles'
        }, {
          date: '2016-05-04',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles'
        }, {
          date: '2016-05-01',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles'
        }],
        currentRow: null
      }
    },

    methods: {
      setCurrent(row) {
        this.$refs.singleTable.setCurrentRow(row);
      },
      handleCurrentChange(val) {
        this.currentRow = val;
      }
    }
  }
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="seleccion-multiple"><a class="header-anchor" href="#seleccion-multiple">¶</a> Selección multiple</h3>
<p>También puede seleccionar múltiples filas.</p>
<demo-block>
        <div><p>Activar la selección múltiple es sencillo: Solo debe agregar a <code>el-table-column</code> con su <code>type</code> establecido en <code>selection</code>. Además de la selección múltiple, este ejemplo también utiliza <code>show-overflow-tooltip</code>: por defecto, si el contenido es demasiado largo, este permite córtalo dentro de múltiples líneas. Si lo que busca es mantener una línea, utilice el atributo <code>show-overflow-tooltip</code>, que acepta un valor <code>Boolean</code>. Cuando este está establecido en <code>true</code>, el contenido extra puede mostrar un <em>tooltip</em> cuando se hace <em>hover</em> sobre la celda.</p>
</div>
        <template slot="source"><element-demo10 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;template&gt;
  &lt;el-table
    ref=&quot;multipleTable&quot;
    :data=&quot;tableData&quot;
    style=&quot;width: 100%&quot;
    @selection-change=&quot;handleSelectionChange&quot;&gt;
    &lt;el-table-column
      type=&quot;selection&quot;
      width=&quot;55&quot;&gt;
    &lt;/el-table-column&gt;
    &lt;el-table-column
      label=&quot;Fecha&quot;
      width=&quot;120&quot;&gt;
      &lt;template slot-scope=&quot;scope&quot;&gt;{{ scope.row.date }}&lt;/template&gt;
    &lt;/el-table-column&gt;
    &lt;el-table-column
      property=&quot;name&quot;
      label=&quot;Nombre&quot;
      width=&quot;120&quot;&gt;
    &lt;/el-table-column&gt;
    &lt;el-table-column
      property=&quot;address&quot;
      label=&quot;Dirección&quot;
      show-overflow-tooltip&gt;
    &lt;/el-table-column&gt;
  &lt;/el-table&gt;
  &lt;div style=&quot;margin-top: 20px&quot;&gt;
    &lt;el-button @click=&quot;toggleSelection([tableData[1], tableData[2]])&quot;&gt;Cambia el estado de selección de la segunda y tercera fila.&lt;/el-button&gt;
    &lt;el-button @click=&quot;toggleSelection()&quot;&gt;Limpiar selección&lt;/el-button&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
  export default {
    data() {
      return {
        tableData: [{
          date: '2016-05-03',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles'
        }, {
          date: '2016-05-02',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles'
        }, {
          date: '2016-05-04',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles'
        }, {
          date: '2016-05-01',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles'
        }, {
          date: '2016-05-08',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles'
        }, {
          date: '2016-05-06',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles'
        }, {
          date: '2016-05-07',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles'
        }],
        multipleSelection: []
      }
    },

    methods: {
      toggleSelection(rows) {
        if (rows) {
          rows.forEach(row =&gt; {
            this.$refs.multipleTable.toggleRowSelection(row);
          });
        } else {
          this.$refs.multipleTable.clearSelection();
        }
      },
      handleSelectionChange(val) {
        this.multipleSelection = val;
      }
    }
  }
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="ordenamiento"><a class="header-anchor" href="#ordenamiento">¶</a> Ordenamiento</h3>
<p>Ordena los datos para encontrar o comparar información rápidamente.</p>
<demo-block>
        <div><p>Establezca el atributo <code>sortable</code> para ordenar los datos de una columna. Este acepta un <code>Boolean</code> con un valor por defecto <code>false</code>. Establezca el atributo <code>default-sort</code> para determinar la columna y orden por defecto. Para aplicar sus propias reglas de ordenamiento, utilice <code>sort-method</code> o <code>sort-by</code>. Si lo que necesita es ordenar de forma remota desde backend, establezca <code>sortable</code> a <code>custom</code>, y escuche el evento <code>sort-change</code> de la tabla. Al dispararse el evento, tendrá acceso a la columna ordenada y orden para que pueda obtener los datos de la tabla ordenada desde su API. En este ejemplo utilizamos otro atributo llamado <code>formatter</code> para darle un formato al valor de ciertas columnas. Este acepta una función que tiene dos parámetros: <code>row</code> y <code>column</code>. Puede disparar este de acuerdo a sus propias necesidades.</p>
</div>
        <template slot="source"><element-demo11 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;template&gt;
  &lt;el-table
    :data=&quot;tableData&quot;
    :default-sort = &quot;{prop: 'date', order: 'descending'}&quot;
    style=&quot;width: 100%&quot;&gt;
    &lt;el-table-column
      prop=&quot;date&quot;
      label=&quot;Fecha&quot;
      sortable
      width=&quot;180&quot;&gt;
    &lt;/el-table-column&gt;
    &lt;el-table-column
      prop=&quot;name&quot;
      label=&quot;Nombre&quot;
      width=&quot;180&quot;&gt;
    &lt;/el-table-column&gt;
    &lt;el-table-column
      prop=&quot;address&quot;
      label=&quot;Dirección&quot;
      :formatter=&quot;formatter&quot;&gt;
    &lt;/el-table-column&gt;
  &lt;/el-table&gt;
&lt;/template&gt;

&lt;script&gt;
  export default {
    data() {
      return {
        tableData: [{
          date: '2016-05-03',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles'
        }, {
          date: '2016-05-02',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles'
        }, {
          date: '2016-05-04',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles'
        }, {
          date: '2016-05-01',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles'
        }]
      }
    },
    methods: {
      formatter(row, column) {
        return row.address;
      }
    }
  }
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="filtros"><a class="header-anchor" href="#filtros">¶</a> Filtros</h3>
<p>Filtra la tabla para encontrar la información que necesita.</p>
<demo-block>
        <div><p>Establezca el atributo <code>filters</code> y <code>filter-method</code> en <code>el-table-column</code> haciendo esta columna filtrable. <code>filters</code> es un arreglo, y <code>filter-method</code> es una función que decide que filas se muestra. Esta tiene tres parámetros: <code>value</code>, <code>row</code> y <code>column</code>.</p>
</div>
        <template slot="source"><element-demo12 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;template&gt;
  &lt;el-button @click=&quot;resetDateFilter&quot;&gt;清除日期过滤器&lt;/el-button&gt;
  &lt;el-button @click=&quot;clearFilter&quot;&gt;清除所有过滤器&lt;/el-button&gt;
  &lt;el-table
    ref=&quot;filterTable&quot;
    :data=&quot;tableData&quot;
    style=&quot;width: 100%&quot;&gt;
    &lt;el-table-column
      prop=&quot;date&quot;
      label=&quot;Fecha&quot;
      sortable
      width=&quot;180&quot;
      column-key=&quot;date&quot;
      :filters=&quot;[{text: '2016-05-01', value: '2016-05-01'}, {text: '2016-05-02', value: '2016-05-02'}, {text: '2016-05-03', value: '2016-05-03'}, {text: '2016-05-04', value: '2016-05-04'}]&quot;
      :filter-method=&quot;filterHandler&quot;
    &gt;
    &lt;/el-table-column&gt;
    &lt;el-table-column
      prop=&quot;name&quot;
      label=&quot;Nombre&quot;
      width=&quot;180&quot;&gt;
    &lt;/el-table-column&gt;
    &lt;el-table-column
      prop=&quot;address&quot;
      label=&quot;Dirección&quot;
      :formatter=&quot;formatter&quot;&gt;
    &lt;/el-table-column&gt;
    &lt;el-table-column
      prop=&quot;tag&quot;
      label=&quot;Etiqueta&quot;
      width=&quot;100&quot;
      :filters=&quot;[{ text: 'Home', value: 'Home' }, { text: 'Office', value: 'Office' }]&quot;
      :filter-method=&quot;filterTag&quot;
      filter-placement=&quot;bottom-end&quot;&gt;
      &lt;template slot-scope=&quot;scope&quot;&gt;
        &lt;el-tag
          :type=&quot;scope.row.tag === 'Home' ? 'primary' : 'success'&quot;
          disable-transitions&gt;{{scope.row.tag}}&lt;/el-tag&gt;
      &lt;/template&gt;
    &lt;/el-table-column&gt;
  &lt;/el-table&gt;
&lt;/template&gt;

&lt;script&gt;
  export default {
    data() {
      return {
        tableData: [{
          date: '2016-05-03',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles',
          tag: 'Home'
        }, {
          date: '2016-05-02',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles',
          tag: 'Office'
        }, {
          date: '2016-05-04',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles',
          tag: 'Home'
        }, {
          date: '2016-05-01',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles',
          tag: 'Office'
        }]
      }
    },
    methods: {
      resetDateFilter() {
        this.$refs.filterTable.clearFilter('date');
      },
      clearFilter() {
        this.$refs.filterTable.clearFilter();
      },
      formatter(row, column) {
        return row.address;
      },
      filterTag(value, row) {
        return row.tag === value;
      },
      filterHandler(value, row, column) {
        const property = column['property'];
        return row[property] === value;
      }
    }
  }
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="plantilla-de-columna-personalizada"><a class="header-anchor" href="#plantilla-de-columna-personalizada">¶</a> Plantilla de columna personalizada</h3>
<p>Personalice la columna de la tabla para que pueda integrarse con otros componentes.</p>
<demo-block>
        <div><p>Tiene acceso a la siguiente información: row, column, $index, store (gestor de estados de la tabla) por <a href="https://vuejs.org/v2/guide/components.html#Scoped-Slots">Scoped slots</a>.</p>
</div>
        <template slot="source"><element-demo13 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;template&gt;
  &lt;el-table
    :data=&quot;tableData&quot;
    style=&quot;width: 100%&quot;&gt;
    &lt;el-table-column
      label=&quot;Fecha&quot;
      width=&quot;180&quot;&gt;
      &lt;template slot-scope=&quot;scope&quot;&gt;
        &lt;i class=&quot;el-icon-time&quot;&gt;&lt;/i&gt;
        &lt;span style=&quot;margin-left: 10px&quot;&gt;{{ scope.row.date }}&lt;/span&gt;
      &lt;/template&gt;
    &lt;/el-table-column&gt;
    &lt;el-table-column
      label=&quot;Nombre&quot;
      width=&quot;180&quot;&gt;
      &lt;template slot-scope=&quot;scope&quot;&gt;
        &lt;el-popover trigger=&quot;hover&quot; placement=&quot;top&quot;&gt;
          &lt;p&gt;Name: {{ scope.row.name }}&lt;/p&gt;
          &lt;p&gt;Addr: {{ scope.row.address }}&lt;/p&gt;
          &lt;div slot=&quot;reference&quot; class=&quot;name-wrapper&quot;&gt;
            &lt;el-tag size=&quot;medium&quot;&gt;{{ scope.row.name }}&lt;/el-tag&gt;
          &lt;/div&gt;
        &lt;/el-popover&gt;
      &lt;/template&gt;
    &lt;/el-table-column&gt;
    &lt;el-table-column
      label=&quot;Operaciones&quot;&gt;
      &lt;template slot-scope=&quot;scope&quot;&gt;
        &lt;el-button
          size=&quot;mini&quot;
          @click=&quot;handleEdit(scope.$index, scope.row)&quot;&gt;Editar&lt;/el-button&gt;
        &lt;el-button
          size=&quot;mini&quot;
          type=&quot;danger&quot;
          @click=&quot;handleDelete(scope.$index, scope.row)&quot;&gt;Eliminar&lt;/el-button&gt;
      &lt;/template&gt;
    &lt;/el-table-column&gt;
  &lt;/el-table&gt;
&lt;/template&gt;

&lt;script&gt;
  export default {
    data() {
      return {
        tableData: [{
          date: '2016-05-03',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles'
        }, {
          date: '2016-05-02',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles'
        }, {
          date: '2016-05-04',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles'
        }, {
          date: '2016-05-01',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles'
        }]
      }
    },
    methods: {
      handleEdit(index, row) {
        console.log(index, row);
      },
      handleDelete(index, row) {
        console.log(index, row);
      }
    }
  }
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="table-con-cabecera-personalizada"><a class="header-anchor" href="#table-con-cabecera-personalizada">¶</a> Table con cabecera personalizada</h3>
<p>Se puede personalizar el encabezado de la tabla para que se pueda adaptar aún más.</p>
<demo-block>
        <div><p>Puede personalizar el aspecto del encabezado con header <a href="https://vuejs.org/v2/guide/components-slots.html#Scoped-Slots">scoped slots</a>.</p>
</div>
        <template slot="source"><element-demo14 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;template&gt;
  &lt;el-table
    :data=&quot;tableData.filter(data =&gt; !search || data.name.toLowerCase().includes(search.toLowerCase()))&quot;
    style=&quot;width: 100%&quot;&gt;
    &lt;el-table-column
      label=&quot;Date&quot;
      prop=&quot;date&quot;&gt;
    &lt;/el-table-column&gt;
    &lt;el-table-column
      label=&quot;Name&quot;
      prop=&quot;name&quot;&gt;
    &lt;/el-table-column&gt;
    &lt;el-table-column
      align=&quot;right&quot;&gt;
      &lt;template slot=&quot;header&quot; slot-scope=&quot;scope&quot;&gt;
        &lt;el-input
          v-model=&quot;search&quot;
          size=&quot;mini&quot;
          placeholder=&quot;Type to search&quot;/&gt;
      &lt;/template&gt;
      &lt;template slot-scope=&quot;scope&quot;&gt;
        &lt;el-button
          size=&quot;mini&quot;
          @click=&quot;handleEdit(scope.$index, scope.row)&quot;&gt;Edit&lt;/el-button&gt;
        &lt;el-button
          size=&quot;mini&quot;
          type=&quot;danger&quot;
          @click=&quot;handleDelete(scope.$index, scope.row)&quot;&gt;Delete&lt;/el-button&gt;
      &lt;/template&gt;
    &lt;/el-table-column&gt;
  &lt;/el-table&gt;
&lt;/template&gt;

&lt;script&gt;
  export default {
    data() {
      return {
        tableData: [{
          date: '2016-05-02',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles',
        }, {
          date: '2016-05-04',
          name: 'John',
          address: 'No. 189, Grove St, Los Angeles',
        }, {
          date: '2016-05-01',
          name: 'Morgan',
          address: 'No. 189, Grove St, Los Angeles',
        }, {
          date: '2016-05-03',
          name: 'Jessy',
          address: 'No. 189, Grove St, Los Angeles',
        }],
        search: ''
      }
    },
    methods: {
      handleEdit(index, row) {
        console.log(index, row);
      },
      handleDelete(index, row) {
        console.log(index, row);
      }
    },
  }
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="fila-expandible"><a class="header-anchor" href="#fila-expandible">¶</a> Fila expandible</h3>
<p>Cuando el contenido de la fila es demasiado largo y busca no mostrar la barra de desplazamiento horizontal, puede utilizar la característica de fila expandible.</p>
<demo-block>
        <div><p>Puede activar la fila expandible estableciendo la propiedad <code>type</code> a <code>expand</code> y Scoped Slots. La plantilla para <code>el-table-column</code> se representará como el contenido de la fila expandible, y puede acceder a algunos atributos cuando está usando <code>Scoped Slots</code> en plantillas de columna personalizadas.</p>
</div>
        <template slot="source"><element-demo15 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;template&gt;
  &lt;el-table
    :data=&quot;tableData&quot;
    style=&quot;width: 100%&quot;&gt;
    &lt;el-table-column type=&quot;expand&quot;&gt;
      &lt;template slot-scope=&quot;props&quot;&gt;
        &lt;p&gt;Estado: {{ props.row.state }}&lt;/p&gt;
        &lt;p&gt;Ciudad: {{ props.row.city }}&lt;/p&gt;
        &lt;p&gt;Dirección: {{ props.row.address }}&lt;/p&gt;
        &lt;p&gt;Código postal: {{ props.row.zip }}&lt;/p&gt;
      &lt;/template&gt;
    &lt;/el-table-column&gt;
    &lt;el-table-column
      label=&quot;Fecha&quot;
      prop=&quot;date&quot;&gt;
    &lt;/el-table-column&gt;
    &lt;el-table-column
      label=&quot;Nombre&quot;
      prop=&quot;name&quot;&gt;
    &lt;/el-table-column&gt;
  &lt;/el-table&gt;
&lt;/template&gt;

&lt;script&gt;
  export default {
    data() {
      return {
        tableData: [{
          date: '2016-05-03',
          name: 'Tom',
          state: 'California',
          city: 'Los Angeles',
          address: 'No. 189, Grove St, Los Angeles',
          zip: 'CA 90036'
        }, {
          date: '2016-05-02',
          name: 'Tom',
          state: 'California',
          city: 'Los Angeles',
          address: 'No. 189, Grove St, Los Angeles',
          zip: 'CA 90036'
        }, {
          date: '2016-05-04',
          name: 'Tom',
          state: 'California',
          city: 'Los Angeles',
          address: 'No. 189, Grove St, Los Angeles',
          zip: 'CA 90036'
        }, {
          date: '2016-05-01',
          name: 'Tom',
          state: 'California',
          city: 'Los Angeles',
          address: 'No. 189, Grove St, Los Angeles',
          zip: 'CA 90036'
        }, {
          date: '2016-05-08',
          name: 'Tom',
          state: 'California',
          city: 'Los Angeles',
          address: 'No. 189, Grove St, Los Angeles',
          zip: 'CA 90036'
        }, {
          date: '2016-05-06',
          name: 'Tom',
          state: 'California',
          city: 'Los Angeles',
          address: 'No. 189, Grove St, Los Angeles',
          zip: 'CA 90036'
        }, {
          date: '2016-05-07',
          name: 'Tom',
          state: 'California',
          city: 'Los Angeles',
          address: 'No. 189, Grove St, Los Angeles',
          zip: 'CA 90036'
        }]
      }
    }
  }
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="datos-tree-y-modo-lazy"><a class="header-anchor" href="#datos-tree-y-modo-lazy">¶</a> Datos tree y modo lazy</h3>
<demo-block>
        <div><p>Puede visualizar datos de estructura de árbol. Cuando la fila contiene el campo <code>children</code>, se trata como datos anidados. Para renderizar datos anidados, la <code>row-key</code> es requerida。Ademas, los datos de las filas secundarias pueden ser cargados asincrónicamente. Poner la propiedad <code>lazy</code> de Table a true y la función <code>load</code>. Especifique el atributo <code>hasChildren</code> en la fila para determinar qué fila contiene descendencia. Tanto <code>children</code> como <code>hasChildren</code> pueden configurarse a través de <code>tree-props</code>.</p>
</div>
        <template slot="source"><element-demo16 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;template&gt;
&lt;div&gt;
  &lt;el-table
    :data=&quot;tableData&quot;
    style=&quot;width: 100%;margin-bottom: 20px;&quot;
    row-key=&quot;id&quot;
    border
    default-expand-all&gt;
    &lt;el-table-column
      prop=&quot;date&quot;
      label=&quot;日期&quot;
      sortable
      width=&quot;180&quot;&gt;
    &lt;/el-table-column&gt;
    &lt;el-table-column
      prop=&quot;name&quot;
      label=&quot;name&quot;
      sortable
      width=&quot;180&quot;&gt;
    &lt;/el-table-column&gt;
  &lt;/el-table&gt;

  &lt;el-table
    :data=&quot;tableData1&quot;
    style=&quot;width: 100%&quot;
    row-key=&quot;id&quot;
    border
    lazy
    :load=&quot;load&quot;
    :tree-props=&quot;{children: 'children', hasChildren: 'hasChildren'}&quot;&gt;
    &lt;el-table-column
      prop=&quot;date&quot;
      label=&quot;date&quot;
      width=&quot;180&quot;&gt;
    &lt;/el-table-column&gt;
    &lt;el-table-column
      prop=&quot;name&quot;
      label=&quot;name&quot;
      width=&quot;180&quot;&gt;
    &lt;/el-table-column&gt;
  &lt;/el-table&gt;
&lt;/div&gt;
&lt;/template&gt;
&lt;script&gt;
  export default {
    data() {
      return {
        tableData: [{
          id: 1,
          date: '2016-05-02',
          name: 'wangxiaohu'
        }, {
          id: 2,
          date: '2016-05-04',
          name: 'wangxiaohu'
        }, {
          id: 3,
          date: '2016-05-01',
          name: 'wangxiaohu',
          children: [{
              id: 31,
              date: '2016-05-01',
              name: 'wangxiaohu'
            }, {
              id: 32,
              date: '2016-05-01',
              name: 'wangxiaohu'
          }]
        }, {
          id: 4,
          date: '2016-05-03',
          name: 'wangxiaohu'
        }],
        tableData1: [{
          id: 1,
          date: '2016-05-02',
          name: 'wangxiaohu'
        }, {
          id: 2,
          date: '2016-05-04',
          name: 'wangxiaohu'
        }, {
          id: 3,
          date: '2016-05-01',
          name: 'wangxiaohu',
          hasChildren: true
        }, {
          id: 4,
          date: '2016-05-03',
          name: 'wangxiaohu'
        }]
      }
    },
    methods: {
      load(tree, treeNode, resolve) {
        setTimeout(() =&gt; {
          resolve([
            {
              id: 31,
              date: '2016-05-01',
              name: 'wangxiaohu'
            }, {
              id: 32,
              date: '2016-05-01',
              name: 'wangxiaohu'
            }
          ])
        }, 1000)
      }
    },
  }
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="fila-de-resumen"><a class="header-anchor" href="#fila-de-resumen">¶</a> Fila de resumen</h3>
<p>Para una tabla de números, puede agregar una fila extra en el pie de página de la tabla que muestra la suma de cada columna.</p>
<demo-block>
        <div><p>Puede agregar la fila de resumen configurando <code>show-summary</code> a <code>true</code>. Por defecto, para la fila de resumen, la primera columna no resume nada, pero siempre muestra la suma (puede configurar el texto mostrado usando <code>sum-text</code>), mientras que otras columnas suman todos los números en esa columna y los muestran. Por supuesto, puede definir su propio comportamiento de suma. Para hacerlo, utiliza un método <code>summary-method</code>, que devuelve un array, y cada elemento que fue retornado desde el arreglo puede ser mostrado en las columnas del resumen de fila. La segunda tabla de este ejemplo es una demostración detallada.</p>
</div>
        <template slot="source"><element-demo17 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;template&gt;
  &lt;el-table
    :data=&quot;tableData&quot;
    border
    show-summary
    style=&quot;width: 100%&quot;&gt;
    &lt;el-table-column
      prop=&quot;id&quot;
      label=&quot;ID&quot;
      width=&quot;180&quot;&gt;
    &lt;/el-table-column&gt;
    &lt;el-table-column
      prop=&quot;name&quot;
      label=&quot;Nombre&quot;&gt;
    &lt;/el-table-column&gt;
    &lt;el-table-column
      prop=&quot;amount1&quot;
      sortable
      label=&quot;Monto 1&quot;&gt;
    &lt;/el-table-column&gt;
    &lt;el-table-column
      prop=&quot;amount2&quot;
      sortable
      label=&quot;Monto 2&quot;&gt;
    &lt;/el-table-column&gt;
    &lt;el-table-column
      prop=&quot;amount3&quot;
      sortable
      label=&quot;Monto 3&quot;&gt;
    &lt;/el-table-column&gt;
  &lt;/el-table&gt;

  &lt;el-table
    :data=&quot;tableData&quot;
    border
    height=&quot;200&quot;
    :summary-method=&quot;getSummaries&quot;
    show-summary
    style=&quot;width: 100%; margin-top: 20px&quot;&gt;
    &lt;el-table-column
      prop=&quot;id&quot;
      label=&quot;ID&quot;
      width=&quot;180&quot;&gt;
    &lt;/el-table-column&gt;
    &lt;el-table-column
      prop=&quot;name&quot;
      label=&quot;Nombre&quot;&gt;
    &lt;/el-table-column&gt;
    &lt;el-table-column
      prop=&quot;amount1&quot;
      label=&quot;Costo 1 ($)&quot;&gt;
    &lt;/el-table-column&gt;
    &lt;el-table-column
      prop=&quot;amount2&quot;
      label=&quot;Costo 2 ($)&quot;&gt;
    &lt;/el-table-column&gt;
    &lt;el-table-column
      prop=&quot;amount3&quot;
      label=&quot;Costo 3 ($)&quot;&gt;
    &lt;/el-table-column&gt;
  &lt;/el-table&gt;
&lt;/template&gt;

&lt;script&gt;
  export default {
    data() {
      return {
        tableData: [{
          id: '12987122',
          name: 'Tom',
          amount1: '234',
          amount2: '3.2',
          amount3: 10
        }, {
          id: '12987123',
          name: 'Tom',
          amount1: '165',
          amount2: '4.43',
          amount3: 12
        }, {
          id: '12987124',
          name: 'Tom',
          amount1: '324',
          amount2: '1.9',
          amount3: 9
        }, {
          id: '12987125',
          name: 'Tom',
          amount1: '621',
          amount2: '2.2',
          amount3: 17
        }, {
          id: '12987126',
          name: 'Tom',
          amount1: '539',
          amount2: '4.1',
          amount3: 15
        }]
      };
    },
    methods: {
      getSummaries(param) {
        const { columns, data } = param;
        const sums = [];
        columns.forEach((column, index) =&gt; {
          if (index === 0) {
            sums[index] = 'Costo total';
            return;
          }
          const values = data.map(item =&gt; Number(item[column.property]));
          if (!values.every(value =&gt; isNaN(value))) {
            sums[index] = '$ ' + values.reduce((prev, curr) =&gt; {
              const value = Number(curr);
              if (!isNaN(value)) {
                return prev + curr;
              } else {
                return prev;
              }
            }, 0);
          } else {
            sums[index] = 'N/A';
          }
        });

        return sums;
      }
    }
  };
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="fusion-de-filas-y-columnas"><a class="header-anchor" href="#fusion-de-filas-y-columnas">¶</a> Fusión de filas y columnas</h3>
<p>Configurar <em>rowspan</em> y <em>colspan</em> le permite fusionar celdas.</p>
<demo-block>
        <div><p>Utilice el atributo <code>span-method</code> para configurar rowspan y colspan. Este acepta un método, y pasa un objeto a ese método incluyendo la fila actual <code>row</code>, columna actual <code>column</code>, índice de fila actual <code>rowIndex</code> y índice de columna actual <code>columnIndex</code>. El método debe devolver un arreglo de dos números, el primer número siendo <code>rowspan</code> y el segundo <code>colspan</code>. También puede devolver un objeto con las propiedades <code>rowspan</code> y <code>colspan</code>.</p>
</div>
        <template slot="source"><element-demo18 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;template&gt;
  &lt;div&gt;
    &lt;el-table
      :data=&quot;tableData&quot;
      :span-method=&quot;arraySpanMethod&quot;
      border
      style=&quot;width: 100%&quot;&gt;
      &lt;el-table-column
        prop=&quot;id&quot;
        label=&quot;ID&quot;
        width=&quot;180&quot;&gt;
      &lt;/el-table-column&gt;
      &lt;el-table-column
        prop=&quot;name&quot;
        label=&quot;Nombre&quot;&gt;
      &lt;/el-table-column&gt;
      &lt;el-table-column
        prop=&quot;amount1&quot;
        sortable
        label=&quot;Monto 1&quot;&gt;
      &lt;/el-table-column&gt;
      &lt;el-table-column
        prop=&quot;amount2&quot;
        sortable
        label=&quot;Monto 2&quot;&gt;
      &lt;/el-table-column&gt;
      &lt;el-table-column
        prop=&quot;amount3&quot;
        sortable
        label=&quot;Monto 3&quot;&gt;
      &lt;/el-table-column&gt;
    &lt;/el-table&gt;

    &lt;el-table
      :data=&quot;tableData&quot;
      :span-method=&quot;objectSpanMethod&quot;
      border
      style=&quot;width: 100%; margin-top: 20px&quot;&gt;
      &lt;el-table-column
        prop=&quot;id&quot;
        label=&quot;ID&quot;
        width=&quot;180&quot;&gt;
      &lt;/el-table-column&gt;
      &lt;el-table-column
        prop=&quot;name&quot;
        label=&quot;Nombre&quot;&gt;
      &lt;/el-table-column&gt;
      &lt;el-table-column
        prop=&quot;amount1&quot;
        label=&quot;Monto 1&quot;&gt;
      &lt;/el-table-column&gt;
      &lt;el-table-column
        prop=&quot;amount2&quot;
        label=&quot;Monto 2&quot;&gt;
      &lt;/el-table-column&gt;
      &lt;el-table-column
        prop=&quot;amount3&quot;
        label=&quot;Monto 3&quot;&gt;
      &lt;/el-table-column&gt;
    &lt;/el-table&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
  export default {
    data() {
      return {
        tableData: [{
          id: '12987122',
          name: 'Tom',
          amount1: '234',
          amount2: '3.2',
          amount3: 10
        }, {
          id: '12987123',
          name: 'Tom',
          amount1: '165',
          amount2: '4.43',
          amount3: 12
        }, {
          id: '12987124',
          name: 'Tom',
          amount1: '324',
          amount2: '1.9',
          amount3: 9
        }, {
          id: '12987125',
          name: 'Tom',
          amount1: '621',
          amount2: '2.2',
          amount3: 17
        }, {
          id: '12987126',
          name: 'Tom',
          amount1: '539',
          amount2: '4.1',
          amount3: 15
        }]
      };
    },
    methods: {
      arraySpanMethod({ row, column, rowIndex, columnIndex }) {
        if (rowIndex % 2 === 0) {
          if (columnIndex === 0) {
            return [1, 2];
          } else if (columnIndex === 1) {
            return [0, 0];
          }
        }
      },

      objectSpanMethod({ row, column, rowIndex, columnIndex }) {
        if (columnIndex === 0) {
          if (rowIndex % 2 === 0) {
            return {
              rowspan: 2,
              colspan: 1
            };
          } else {
            return {
              rowspan: 0,
              colspan: 0
            };
          }
        }
      }
    }
  };
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="indice-personalizado"><a class="header-anchor" href="#indice-personalizado">¶</a> Índice personalizado</h3>
<p>Puede personalizar el índice de la fila con la propiedad <code>type=index</code> de las columnas.</p>
<demo-block>
        <div><p>Para personalizar el índice de la fila, utilice el atributo <code>index</code> en <code>&lt;el-table-column&gt;</code> con <code>type=index</code>. Si este es asignado a un número, todos los índices tendrán un desplazamiento de ese número. Este también acepta un método con cada índice (iniciando desde 0) como un parámetro, y este devuelve un valor que puede ser mostrado como índice.</p>
</div>
        <template slot="source"><element-demo19 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;template&gt;
  &lt;el-table
    :data=&quot;tableData&quot;
    style=&quot;width: 100%&quot;&gt;
    &lt;el-table-column
      type=&quot;index&quot;
      :index=&quot;indexMethod&quot;&gt;
    &lt;/el-table-column&gt;
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
          date: '2016-05-03',
          name: 'Tom',
          state: 'California',
          city: 'Los Angeles',
          address: 'No. 189, Grove St, Los Angeles',
          zip: 'CA 90036',
          tag: 'Home'
        }, {
          date: '2016-05-02',
          name: 'Tom',
          state: 'California',
          city: 'Los Angeles',
          address: 'No. 189, Grove St, Los Angeles',
          zip: 'CA 90036',
          tag: 'Office'
        }, {
          date: '2016-05-04',
          name: 'Tom',
          state: 'California',
          city: 'Los Angeles',
          address: 'No. 189, Grove St, Los Angeles',
          zip: 'CA 90036',
          tag: 'Home'
        }, {
          date: '2016-05-01',
          name: 'Tom',
          state: 'California',
          city: 'Los Angeles',
          address: 'No. 189, Grove St, Los Angeles',
          zip: 'CA 90036',
          tag: 'Office'
        }],
      }
    },
    methods: {
      indexMethod(index) {
        return index * 2;
      }
    }
  };
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="atributos-de-la-tabla"><a class="header-anchor" href="#atributos-de-la-tabla">¶</a> Atributos de la tabla</h3>
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
<td>data</td>
<td>Datos de la tabla</td>
<td>array</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>height</td>
<td>Altura de la tabla. Por defecto esta tiene un tamaño <code>auto</code>. Si este valor es un número, la altura es medido en pixeles; si este valor es una cadena, la altura es afectada por estilos externos.</td>
<td>string/number</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>max-height</td>
<td>El max-height de la tabla. El valor puede ser un numero o el alto en px.</td>
<td>string/number</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>stripe</td>
<td>especifica si la tabla será en franjas</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>border</td>
<td>especifica si la tabla tiene bordes verticales</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>size</td>
<td>tamaño de la tabla</td>
<td>string</td>
<td>medium / small / mini</td>
<td>—</td>
</tr>
<tr>
<td>fit</td>
<td>especifica si el ancho de la columna se adapta automáticamente a su contenedor</td>
<td>boolean</td>
<td>—</td>
<td>true</td>
</tr>
<tr>
<td>show-header</td>
<td>especifica si la cabecera de la tabla es visible</td>
<td>boolean</td>
<td>—</td>
<td>true</td>
</tr>
<tr>
<td>highlight-current-row</td>
<td>especifica si la fila actual es resaltado</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>current-row-key</td>
<td>clave de la fila actual, un ajuste de propiedad única</td>
<td>string,number</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>row-class-name</td>
<td>función que devuelve nombres de clases personalizadas para una fila, o una cadena asignando nombres de clases para cada fila</td>
<td>Function({row, rowIndex})/String</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>row-style</td>
<td>función que devuelve el estilo personalizado para una fila, o un objeto asignando estilos personalizado para cada fila</td>
<td>Function({row, rowIndex})/Object</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>cell-class-name</td>
<td>función que devuelve nombres de clases personalizadas para una celda, o una cadena asignando nombres de clases para cada celda</td>
<td>Function({row, column, rowIndex, columnIndex})/String</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>cell-style</td>
<td>función que devuelve estilos personalizados para una celda, o un objeto asignado a estilos personalizados para cada celda</td>
<td>Function({row, column, rowIndex, columnIndex})/Object</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>header-row-class-name</td>
<td>función que devuelve nombre de clases personalizadas para una fila en la cabecera de la tabla, o una cadena asignando nombres de clases para cada fila en la cabecera de la tabla</td>
<td>Function({row, rowIndex})/String</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>header-row-style</td>
<td>función que devuelve estilos personalizados para una fila en la cabecera de la tabla, o un objeto asignando estilos personalizados para cada fila en la cabecera de la tabla</td>
<td>Function({row, rowIndex})/Object</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>header-cell-class-name</td>
<td>función que devuelve nombre de clases personalizadas para una celda en la cabecera de la tabla, o una cadena asignando nombres de clases para cada celda en la cabecera de la tabla</td>
<td>Function({row, column, rowIndex, columnIndex})/String</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>header-cell-style</td>
<td>función que devuelve estilos personalizados para una celda en la cabecera de la tabla, o un objeto asignando estilos personalizados para cada celda en la cabecera de la tabla</td>
<td>Function({row, column, rowIndex, columnIndex})/Object</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>row-key</td>
<td>key de los datos de las filas, utilizada para optimizar el renderizado. Requerido si <code>reserve-selection</code> está activada o muestra los datos del árbol. Cuando su tipo es String, se admite el acceso multinivel, por ejemplo, <code>user.info.id</code>, pero <code>user.info[0].id</code> no se admite, en cuyo caso se debe utilizar la función.</td>
<td>Function(row)/String</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>empty-text</td>
<td>Texto mostrado cuando no existen datos. Puede personalizar esta área con <code>slot=&quot;empty&quot;</code></td>
<td>String</td>
<td>—</td>
<td>No Data</td>
</tr>
<tr>
<td>default-expand-all</td>
<td>especifica si todas las filas se expanden por defecto, solo funciona cuando la tabla tiene una columna <code>type=&quot;expand&quot;</code></td>
<td>Boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>expand-row-keys</td>
<td>establece las filas expandidas a través de esta propiedad, este valor es la clave de filas expandidas, debería establecer <code>row-key</code> antes de usar esta propiedad</td>
<td>Array</td>
<td>—</td>
<td></td>
</tr>
<tr>
<td>default-sort</td>
<td>establece la columna y orden por defecto. La propiedad <code>prop</code> es utilizada para establecer la columna de ordenamiento por defecto, la propiedad <code>order</code> es utilizada para definir el tipo de orden por defecto</td>
<td>Object</td>
<td><code>order</code>: ascending, descending</td>
<td>if <code>prop</code> is set, and <code>order</code> is not set, then <code>order</code> is default to ascending</td>
</tr>
<tr>
<td>tooltip-effect</td>
<td>propiedad <code>effect</code> para efectos en tooltip</td>
<td>String</td>
<td>dark/light</td>
<td></td>
</tr>
<tr>
<td>show-summary</td>
<td>especifica si debe mostrar la fila de resumen</td>
<td>Boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>sum-text</td>
<td>texto a mostrar para la primer columna de la fila de resumen</td>
<td>String</td>
<td>—</td>
<td>Sum</td>
</tr>
<tr>
<td>summary-method</td>
<td>método personalizado para resumen</td>
<td>Function({ columns, data })</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>span-method</td>
<td>método que devuelve <em>rowspan</em> y <em>colspan</em></td>
<td>Function({ row, column, rowIndex, columnIndex })</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>select-on-indeterminate</td>
<td>controla el comportamiento del checkbox maestro en tablas de selección múltiple cuando sólo se seleccionan algunas filas (pero no todas). Si es true, todas las filas serán seleccionadas, de lo contrario deseleccionadas.</td>
<td>Boolean</td>
<td>—</td>
<td>true</td>
</tr>
<tr>
<td>indent</td>
<td>indentación horizontal de los datos en formato tree</td>
<td>Number</td>
<td>—</td>
<td>16</td>
</tr>
<tr>
<td>lazy</td>
<td>si se realiza un lazy loading de los datos</td>
<td>Boolean</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>load</td>
<td>método para cargar las filas de los hijos, solamente funciona cuando <code>lazy</code>es true</td>
<td>Function(row, treeNode, resolve)</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>tree-props</td>
<td>configuración para renderizar datos anidados</td>
<td>Object</td>
<td>—</td>
<td>{ hasChildren: 'hasChildren', children: 'children' }</td>
</tr>
</tbody>
</table>
<h3 id="eventos-de-la-tabla"><a class="header-anchor" href="#eventos-de-la-tabla">¶</a> Eventos de la tabla</h3>
<table>
<thead>
<tr>
<th>Nombre del evento</th>
<th>Descripción</th>
<th>Parámetros</th>
</tr>
</thead>
<tbody>
<tr>
<td>select</td>
<td>se dispara cuando el usuario hace clic al <em>checkbox</em> (caja de selección) en una fila</td>
<td>selection, row</td>
</tr>
<tr>
<td>select-all</td>
<td>se dispara cando el usuario hace clic al <em>checkbox</em> (caja de selección) en una cabecera de la tabla</td>
<td>selection</td>
</tr>
<tr>
<td>selection-change</td>
<td>se dispara cuando selección cambia</td>
<td>selection</td>
</tr>
<tr>
<td>cell-mouse-enter</td>
<td>se dispara cuando se desplaza dentro de una celda</td>
<td>row, column, cell, event</td>
</tr>
<tr>
<td>cell-mouse-leave</td>
<td>se dispara cuando se desplaza fuera de una celda</td>
<td>row, column, cell, event</td>
</tr>
<tr>
<td>cell-click</td>
<td>se dispara cuando se hace clic en una celda</td>
<td>row, column, cell, event</td>
</tr>
<tr>
<td>cell-dblclick</td>
<td>se dispara cuando se hace doble clic en una celda</td>
<td>row, column, cell, event</td>
</tr>
<tr>
<td>row-click</td>
<td>se dispara cuando se hace clic en una fila</td>
<td>row, column, event</td>
</tr>
<tr>
<td>row-contextmenu</td>
<td>se dispara cuando el usuario hace clic derecho en una fila</td>
<td>row, column, event</td>
</tr>
<tr>
<td>row-dblclick</td>
<td>se dispara cuando se hace doble clic en una fila</td>
<td>row, column, event</td>
</tr>
<tr>
<td>header-click</td>
<td>se dispara cuando se hace clic en una cabecera de columna</td>
<td>column, event</td>
</tr>
<tr>
<td>header-contextmenu</td>
<td>se dispara cuando el usuario hace clic derecho en una cabecera de columna</td>
<td>column, event</td>
</tr>
<tr>
<td>sort-change</td>
<td>se dispara cuando el ordenamiento de la tabla cambia</td>
<td>{ column, prop, order }</td>
</tr>
<tr>
<td>filter-change</td>
<td>clave de la columna. Si necesitas utilizar el evento filter-change, este atributo es obligatorio para identificar cuál columna está siendo filtrada</td>
<td>filters</td>
</tr>
<tr>
<td>current-change</td>
<td>se dispara cuando la fila actual cambia</td>
<td>currentRow, oldCurrentRow</td>
</tr>
<tr>
<td>header-dragend</td>
<td>se dispara después de modificar el ancho de una columna arrastrando el borde de la cabecera.</td>
<td>newWidth, oldWidth, column, event</td>
</tr>
<tr>
<td>expand-change</td>
<td>se activa cuando el usuario expande o colapsa una fila (para la tabla expansible, el segundo parámetro es expandedRows; para la tabla de árbol, el segundo parámetro es expanded)</td>
<td>row, (expandedRows | expanded)</td>
</tr>
</tbody>
</table>
<h3 id="metodos-de-la-tabla"><a class="header-anchor" href="#metodos-de-la-tabla">¶</a> Métodos de la tabla</h3>
<table>
<thead>
<tr>
<th>Metodo</th>
<th>Descripción</th>
<th>Parametros</th>
</tr>
</thead>
<tbody>
<tr>
<td>clearSelection</td>
<td>utilizado en selección múltiple de la tabla, limpiar selección</td>
<td>—</td>
</tr>
<tr>
<td>toggleRowSelection</td>
<td>utilizado en selección múltiple de la tabla, alterna si una cierta fila es seleccionada. Con el segundo parámetro, puede directamente establecer si la fila es seleccionada</td>
<td>row, selected</td>
</tr>
<tr>
<td>toggleAllSelection</td>
<td>usado en Table de selección múltiple, cambia los estados de selección de todas las filas.</td>
<td>-</td>
</tr>
<tr>
<td>toggleRowExpansion</td>
<td>utilizado en la Tabla expandible o en la Tabla de árbol, conmutar si se desglosa una determinada línea. Con el segundo parámetro, se puede fijar directamente si esta línea se desglosa o se pliega</td>
<td>row, expanded</td>
</tr>
<tr>
<td>setCurrentRow</td>
<td>utilizado en tabla con selección sencilla, establece una cierta fila seleccionada. Si es llamado sin ningún parámetro, este puede limpiar la selección</td>
<td>row</td>
</tr>
<tr>
<td>clearSort</td>
<td>limpiar ordenamiento, restaurar datos a orden original</td>
<td>—</td>
</tr>
<tr>
<td>clearFilter</td>
<td>Se utiliza para borrar todas las condiciones de filtro cuando no se pasan parámetros, los datos se restaurarán a un estado sin filtrar, o se puede pasar una matriz de columnas para borrar las condiciones de filtro de la columna especificada.</td>
<td>columnKey</td>
</tr>
<tr>
<td>doLayout</td>
<td>refresca el layout del Table. Cuando la visibilidad de Table cambia, puede que necesite llamar a este método para obtener un diseño correcto</td>
<td>—</td>
</tr>
<tr>
<td>sort</td>
<td>Ordenar tabla manualmente. La propiedad <code>prop</code> se utiliza para establecer la columna de ordenación, la propiedad <code>order</code> se utiliza para establecer el orden.</td>
<td>prop: string, order: string</td>
</tr>
</tbody>
</table>
<h3 id="slots-de-la-tabla"><a class="header-anchor" href="#slots-de-la-tabla">¶</a> Slots de la tabla</h3>
<table>
<thead>
<tr>
<th>Nombre</th>
<th>Descripción</th>
</tr>
</thead>
<tbody>
<tr>
<td>append</td>
<td>El contenido será insertado después de la última fila. Es posible que necesites este espacio si deseas implementar <em>scroll</em> infinito para la tabla. Este espacio se mostrará sobre la fila de resumen si hay uno.</td>
</tr>
</tbody>
</table>
<h3 id="atributos-para-las-columnas-de-la-tabla"><a class="header-anchor" href="#atributos-para-las-columnas-de-la-tabla">¶</a> Atributos para las columnas de la tabla</h3>
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
<td>tipo de la columna. Si se establece a <code>selection</code>, la columna puede mostrar un <em>checkbox</em>. Si se establece a <code>index</code>, la columna puede mostrar el índice de la fila (iniciando desde 1). Si se establece a <code>expand</code>, la columna puede mostrar un ícono para expandir.</td>
<td>string</td>
<td>selection/index/expand</td>
<td>—</td>
</tr>
<tr>
<td>index</td>
<td>personalice los índices para cada fila, funciona en columnas con <code>type=index</code></td>
<td>number, Function(index)</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>label</td>
<td>etiqueta de la columna</td>
<td>string</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>column-key</td>
<td>clave de la columna. Si necesita utilizar el evento <code>filter-change</code>, necesita el atributo para identificar cual columna está siendo filtrada</td>
<td>string</td>
<td>string</td>
<td>—</td>
</tr>
<tr>
<td>prop</td>
<td>nombre del campo. También puede usar su alias: <code>property</code></td>
<td>string</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>width</td>
<td>ancho de la columna</td>
<td>string</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>min-width</td>
<td>ancho mínimo de la columna. Columnas con <code>width</code> tienen un ancho fijo, mientras que las columnas con <code>min-width</code> tienen un ancho que se distribuye en proporción.</td>
<td>string</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>fixed</td>
<td>especifica si la columna se fija a la izquierda o a la derecha. Se fijará a la izquierda si es <code>true</code></td>
<td>string/boolean</td>
<td>true/left/right</td>
<td>—</td>
</tr>
<tr>
<td>render-header</td>
<td>Función de renderizado para la cabecera de la tabla de esta columna</td>
<td>Function(h, { column, $index })</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>sortable</td>
<td>especifica que columna puede ser ordenado. El ordenamiento remoto puede ser hecho configurando el atributo <code>custom</code> y escucha al evento de tabla <code>sort-change</code></td>
<td>boolean, string</td>
<td>true, false, custom</td>
<td>false</td>
</tr>
<tr>
<td>sort-method</td>
<td>método de ordenamiento, funciona cuando <code>sortable</code> está en <code>true</code>. Debería devolver un número, al igual que Array.sort</td>
<td>Function(a, b)</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>sort-by</td>
<td>especifica por cual propiedad de va a ordenar, funciona cuando <code>sortable</code> es <code>true</code> y <code>sort-method</code> es <code>undefined</code>. Si se establece a un arreglo, la columna ordenara secuencialmente por la siguiente propiedad si la anterior es igual</td>
<td>Function(row, index)/String/Array</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>sort-orders</td>
<td>el orden de las estrategias de ordenación utilizadas al ordenar los datos, funciona cuando <code>sortable</code> es <code>true</code>. Acepta un array, a medida que el usuario hace clic en el encabezado, la columna se ordena en el orden de los elementos del array.</td>
<td>array</td>
<td>los elementos en el arreglo necesitan ser uno de los siguientes: <code>ascending</code>, <code>descending</code> y <code>null</code> (restaura el orden original)</td>
<td>['ascending', 'descending', null]</td>
</tr>
<tr>
<td>resizable</td>
<td>especifica si el ancho de la columna puede ser redimensionado, funciona cuando <code>border</code> de <code>el-table</code> está en <code>true</code></td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>formatter</td>
<td>función que formatea el contenido de la celda</td>
<td>Function(row, column, cellValue, index)</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>show-overflow-tooltip</td>
<td>especifica si el <em>tooltip</em> debe ocultarse o mostrarse al hacer <em>hover</em> en la celda</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>align</td>
<td>alineación</td>
<td>string</td>
<td>left/center/right</td>
<td>left</td>
</tr>
<tr>
<td>header-align</td>
<td>alineación de la cabecera de la tabla. Si se omite, se aplicará el valor del atributo anterior.</td>
<td>String</td>
<td>left/center/right</td>
<td>—</td>
</tr>
<tr>
<td>class-name</td>
<td>nombre de clase de la celda en la columna</td>
<td>string</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>label-class-name</td>
<td>nombre de clase de la etiqueta de esta columna</td>
<td>string</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>selectable</td>
<td>función que determina si una cierta fila puede ser seleccionada, funciona cuando <code>type</code> esta en <code>selection</code></td>
<td>Function(row, index)</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>reserve-selection</td>
<td>especifica si se reserva la selección después de actualizar los datos, funciona cuando <code>type</code> está en <code>selection</code>. Note que <code>row-key</code> es requerido para que esto funcione</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>filters</td>
<td>un arreglo de opciones para filtrado de datos. Para cada elemento en este arreglo, <code>text</code> y <code>value</code> son obligatorios</td>
<td>Array[{ text, value }]</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>filter-placement</td>
<td>colocación para el menú desplegable del filtro</td>
<td>String</td>
<td>same as Tooltip's <code>placement</code></td>
<td>—</td>
</tr>
<tr>
<td>filter-multiple</td>
<td>especifica si el filtrado de datos soporta múltiples opciones</td>
<td>Boolean</td>
<td>—</td>
<td>true</td>
</tr>
<tr>
<td>filter-method</td>
<td>método para filtrado de datos. Si <code>filter-multiple</code> está habilitado, este método se invocará varias veces para cada fila, y una fila puede mostrar si una de las llamadas devuelve <code>true</code></td>
<td>Function(value, row, column)</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>filtered-value</td>
<td>el valor del filtro para los datos seleccionados, puede ser útil cuando el encabezado de la tabla se representará con <code>render-header</code></td>
<td>Array</td>
<td>—</td>
<td>—</td>
</tr>
</tbody>
</table>
<h3 id="table-column-scoped-slot"><a class="header-anchor" href="#table-column-scoped-slot">¶</a> Table-column Scoped Slot</h3>
<table>
<thead>
<tr>
<th>Name</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>—</td>
<td>Contenido personalizado para las columnas de la tabla. El parámetro del scope es { row, column, $index }</td>
</tr>
<tr>
<td>header</td>
<td>Contenido personalizado para el encabezado de la tabla. El parámetro del scope es { column, $index }</td>
</tr>
</tbody>
</table>
