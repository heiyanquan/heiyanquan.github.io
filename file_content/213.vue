<h2 id="tabulacion"><a class="header-anchor" href="#tabulacion">¶</a> Tabulación</h2>
<p>Divide colecciones de datos que están relacionados pero pertenecen a diferentes tipos.</p>
<h3 id="uso-basico"><a class="header-anchor" href="#uso-basico">¶</a> Uso básico</h3>
<p>Tabulación básica y concisa</p>
<demo-block>
        <div><p>Tabulación provee funcionalidad de tarjeta selectiva. Por defecto, la primer pestaña es seleccionada como activa, y es posible activar cualquier pestaña estableciendo el atributo de <code>value</code>.</p>
</div>
        <!--element-demo: <template>
  <el-tabs v-model="activeName" @tab-click="handleClick">
    <el-tab-pane label="User" name="first">User</el-tab-pane>
    <el-tab-pane label="Config" name="second">Config</el-tab-pane>
    <el-tab-pane label="Role" name="third">Role</el-tab-pane>
    <el-tab-pane label="Task" name="fourth">Task</el-tab-pane>
  </el-tabs>
</template>
<script>
  export default {
    data() {
      return {
        activeName: 'first'
      };
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      }
    }
  };
</script>
:element-demo-->
        <template slot="highlight"><pre v-pre><code class="html">&lt;template&gt;
  &lt;el-tabs v-model=&quot;activeName&quot; @tab-click=&quot;handleClick&quot;&gt;
    &lt;el-tab-pane label=&quot;User&quot; name=&quot;first&quot;&gt;User&lt;/el-tab-pane&gt;
    &lt;el-tab-pane label=&quot;Config&quot; name=&quot;second&quot;&gt;Config&lt;/el-tab-pane&gt;
    &lt;el-tab-pane label=&quot;Role&quot; name=&quot;third&quot;&gt;Role&lt;/el-tab-pane&gt;
    &lt;el-tab-pane label=&quot;Task&quot; name=&quot;fourth&quot;&gt;Task&lt;/el-tab-pane&gt;
  &lt;/el-tabs&gt;
&lt;/template&gt;
&lt;script&gt;
  export default {
    data() {
      return {
        activeName: 'first'
      };
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      }
    }
  };
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="estilo-de-tarjeta"><a class="header-anchor" href="#estilo-de-tarjeta">¶</a> Estilo de Tarjeta</h3>
<p>Pestañas diseñadas como tarjetas.</p>
<demo-block>
        <div><p>Establecer <code>type</code> a <code>card</code> para obtener una pestaña diseñada como tarjeta.</p>
</div>
        <!--element-demo: <template>
  <el-tabs type="card" @tab-click="handleClick">
    <el-tab-pane label="User">User</el-tab-pane>
    <el-tab-pane label="Config">Config</el-tab-pane>
    <el-tab-pane label="Role">Role</el-tab-pane>
    <el-tab-pane label="Task">Task</el-tab-pane>
  </el-tabs>
</template>
<script>
  export default {
    data() {
      return {
        activeName: 'first'
      };
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      }
    }
  };
</script>
:element-demo-->
        <template slot="highlight"><pre v-pre><code class="html">&lt;template&gt;
  &lt;el-tabs type=&quot;card&quot; @tab-click=&quot;handleClick&quot;&gt;
    &lt;el-tab-pane label=&quot;User&quot;&gt;User&lt;/el-tab-pane&gt;
    &lt;el-tab-pane label=&quot;Config&quot;&gt;Config&lt;/el-tab-pane&gt;
    &lt;el-tab-pane label=&quot;Role&quot;&gt;Role&lt;/el-tab-pane&gt;
    &lt;el-tab-pane label=&quot;Task&quot;&gt;Task&lt;/el-tab-pane&gt;
  &lt;/el-tabs&gt;
&lt;/template&gt;
&lt;script&gt;
  export default {
    data() {
      return {
        activeName: 'first'
      };
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      }
    }
  };
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="tarjeta-con-bordes"><a class="header-anchor" href="#tarjeta-con-bordes">¶</a> Tarjeta con Bordes</h3>
<p>Pestañas de tarjeta con bordes.</p>
<demo-block>
        <div><p>Establecer <code>type</code> a <code>border-card</code>.</p>
</div>
        <!--element-demo: <el-tabs type="border-card">
  <el-tab-pane label="User">User</el-tab-pane>
  <el-tab-pane label="Config">Config</el-tab-pane>
  <el-tab-pane label="Role">Role</el-tab-pane>
  <el-tab-pane label="Task">Task</el-tab-pane>
</el-tabs>
:element-demo-->
        <template slot="highlight"><pre v-pre><code class="html">&lt;el-tabs type=&quot;border-card&quot;&gt;
  &lt;el-tab-pane label=&quot;User&quot;&gt;User&lt;/el-tab-pane&gt;
  &lt;el-tab-pane label=&quot;Config&quot;&gt;Config&lt;/el-tab-pane&gt;
  &lt;el-tab-pane label=&quot;Role&quot;&gt;Role&lt;/el-tab-pane&gt;
  &lt;el-tab-pane label=&quot;Task&quot;&gt;Task&lt;/el-tab-pane&gt;
&lt;/el-tabs&gt;
</code></pre></template></demo-block><h3 id="posicion-de-tabulacion"><a class="header-anchor" href="#posicion-de-tabulacion">¶</a> Posición de tabulación</h3>
<p>Es posible usar el atributo <code>tab-position</code> para establecer la posición de la tabulación.</p>
<demo-block>
        <div><p>Es posible escoger entre cuatro direcciones: <code>tabPosition=&quot;left|right|top|bottom&quot;</code></p>
</div>
        <!--element-demo: <template>
  <el-radio-group v-model="tabPosition" style="margin-bottom: 30px;">
    <el-radio-button label="top">top</el-radio-button>
    <el-radio-button label="right">right</el-radio-button>
    <el-radio-button label="bottom">bottom</el-radio-button>
    <el-radio-button label="left">left</el-radio-button>
  </el-radio-group>

  <el-tabs :tab-position="tabPosition" style="height: 200px;">
    <el-tab-pane label="User">User</el-tab-pane>
    <el-tab-pane label="Config">Config</el-tab-pane>
    <el-tab-pane label="Role">Role</el-tab-pane>
    <el-tab-pane label="Task">Task</el-tab-pane>
  </el-tabs>
</template>
<script>
  export default {
    data() {
      return {
        tabPosition: 'left'
      };
    }
  };
</script>
:element-demo-->
        <template slot="highlight"><pre v-pre><code class="html">&lt;template&gt;
  &lt;el-radio-group v-model=&quot;tabPosition&quot; style=&quot;margin-bottom: 30px;&quot;&gt;
    &lt;el-radio-button label=&quot;top&quot;&gt;top&lt;/el-radio-button&gt;
    &lt;el-radio-button label=&quot;right&quot;&gt;right&lt;/el-radio-button&gt;
    &lt;el-radio-button label=&quot;bottom&quot;&gt;bottom&lt;/el-radio-button&gt;
    &lt;el-radio-button label=&quot;left&quot;&gt;left&lt;/el-radio-button&gt;
  &lt;/el-radio-group&gt;

  &lt;el-tabs :tab-position=&quot;tabPosition&quot; style=&quot;height: 200px;&quot;&gt;
    &lt;el-tab-pane label=&quot;User&quot;&gt;User&lt;/el-tab-pane&gt;
    &lt;el-tab-pane label=&quot;Config&quot;&gt;Config&lt;/el-tab-pane&gt;
    &lt;el-tab-pane label=&quot;Role&quot;&gt;Role&lt;/el-tab-pane&gt;
    &lt;el-tab-pane label=&quot;Task&quot;&gt;Task&lt;/el-tab-pane&gt;
  &lt;/el-tabs&gt;
&lt;/template&gt;
&lt;script&gt;
  export default {
    data() {
      return {
        tabPosition: 'left'
      };
    }
  };
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="pestana-personalizada"><a class="header-anchor" href="#pestana-personalizada">¶</a> Pestaña Personalizada</h3>
<p>Es posible usar slots con nombre para personalizar el contenido de la etiqueta de la pestaña.</p>
<demo-block>
        
        <!--element-demo: <el-tabs type="border-card">
  <el-tab-pane>
    <span slot="label"><i class="el-icon-date"></i> Route</span>
    Route
  </el-tab-pane>
  <el-tab-pane label="Config">Config</el-tab-pane>
  <el-tab-pane label="Role">Role</el-tab-pane>
  <el-tab-pane label="Task">Task</el-tab-pane>
</el-tabs>
:element-demo-->
        <template slot="highlight"><pre v-pre><code class="html">&lt;el-tabs type=&quot;border-card&quot;&gt;
  &lt;el-tab-pane&gt;
    &lt;span slot=&quot;label&quot;&gt;&lt;i class=&quot;el-icon-date&quot;&gt;&lt;/i&gt; Route&lt;/span&gt;
    Route
  &lt;/el-tab-pane&gt;
  &lt;el-tab-pane label=&quot;Config&quot;&gt;Config&lt;/el-tab-pane&gt;
  &lt;el-tab-pane label=&quot;Role&quot;&gt;Role&lt;/el-tab-pane&gt;
  &lt;el-tab-pane label=&quot;Task&quot;&gt;Task&lt;/el-tab-pane&gt;
&lt;/el-tabs&gt;
</code></pre></template></demo-block><h3 id="agregar-y-cerrar-pestana"><a class="header-anchor" href="#agregar-y-cerrar-pestana">¶</a> Agregar y cerrar pestaña</h3>
<p>Solo las pestañas de tipo tarjeta soportan adición y cierre.</p>
<demo-block>
        
        <!--element-demo: <el-tabs v-model="editableTabsValue" type="card" editable @edit="handleTabsEdit">
  <el-tab-pane
    v-for="(item, index) in editableTabs"
    :key="item.name"
    :label="item.title"
    :name="item.name"
  >
    {{item.content}}
  </el-tab-pane>
</el-tabs>
<script>
  export default {
    data() {
      return {
        editableTabsValue: '2',
        editableTabs: [{
          title: 'Tab 1',
          name: '1',
          content: 'Tab 1 content'
        }, {
          title: 'Tab 2',
          name: '2',
          content: 'Tab 2 content'
        }],
        tabIndex: 2
      }
    },
    methods: {
      handleTabsEdit(targetName, action) {
        if (action === 'add') {
          let newTabName = ++this.tabIndex + '';
          this.editableTabs.push({
            title: 'New Tab',
            name: newTabName,
            content: 'New Tab content'
          });
          this.editableTabsValue = newTabName;
        }
        if (action === 'remove') {
          let tabs = this.editableTabs;
          let activeName = this.editableTabsValue;
          if (activeName === targetName) {
            tabs.forEach((tab, index) => {
              if (tab.name === targetName) {
                let nextTab = tabs[index + 1] || tabs[index - 1];
                if (nextTab) {
                  activeName = nextTab.name;
                }
              }
            });
          }
          
          this.editableTabsValue = activeName;
          this.editableTabs = tabs.filter(tab => tab.name !== targetName);
        }
      }
    }
  }
</script>
:element-demo-->
        <template slot="highlight"><pre v-pre><code class="html">&lt;el-tabs v-model=&quot;editableTabsValue&quot; type=&quot;card&quot; editable @edit=&quot;handleTabsEdit&quot;&gt;
  &lt;el-tab-pane
    v-for=&quot;(item, index) in editableTabs&quot;
    :key=&quot;item.name&quot;
    :label=&quot;item.title&quot;
    :name=&quot;item.name&quot;
  &gt;
    {{item.content}}
  &lt;/el-tab-pane&gt;
&lt;/el-tabs&gt;
&lt;script&gt;
  export default {
    data() {
      return {
        editableTabsValue: '2',
        editableTabs: [{
          title: 'Tab 1',
          name: '1',
          content: 'Tab 1 content'
        }, {
          title: 'Tab 2',
          name: '2',
          content: 'Tab 2 content'
        }],
        tabIndex: 2
      }
    },
    methods: {
      handleTabsEdit(targetName, action) {
        if (action === 'add') {
          let newTabName = ++this.tabIndex + '';
          this.editableTabs.push({
            title: 'New Tab',
            name: newTabName,
            content: 'New Tab content'
          });
          this.editableTabsValue = newTabName;
        }
        if (action === 'remove') {
          let tabs = this.editableTabs;
          let activeName = this.editableTabsValue;
          if (activeName === targetName) {
            tabs.forEach((tab, index) =&gt; {
              if (tab.name === targetName) {
                let nextTab = tabs[index + 1] || tabs[index - 1];
                if (nextTab) {
                  activeName = nextTab.name;
                }
              }
            });
          }
          
          this.editableTabsValue = activeName;
          this.editableTabs = tabs.filter(tab =&gt; tab.name !== targetName);
        }
      }
    }
  }
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="boton-disparador-personalizado-de-la-nueva-pestana"><a class="header-anchor" href="#boton-disparador-personalizado-de-la-nueva-pestana">¶</a> Botón disparador personalizado de la nueva pestaña</h3>
<demo-block>
        
        <!--element-demo: <div style="margin-bottom: 20px;">
  <el-button
    size="small"
    @click="addTab(editableTabsValue)"
  >
    add tab
  </el-button>
</div>
<el-tabs v-model="editableTabsValue" type="card" closable @tab-remove="removeTab">
  <el-tab-pane
    v-for="(item, index) in editableTabs"
    :key="item.name"
    :label="item.title"
    :name="item.name"
  >
    {{item.content}}
  </el-tab-pane>
</el-tabs>
<script>
  export default {
    data() {
      return {
        editableTabsValue: '2',
        editableTabs: [{
          title: 'Tab 1',
          name: '1',
          content: 'Tab 1 content'
        }, {
          title: 'Tab 2',
          name: '2',
          content: 'Tab 2 content'
        }],
        tabIndex: 2
      }
    },
    methods: {
      addTab(targetName) {
        let newTabName = ++this.tabIndex + '';
        this.editableTabs.push({
          title: 'New Tab',
          name: newTabName,
          content: 'New Tab content'
        });
        this.editableTabsValue = newTabName;
      },
      removeTab(targetName) {
        let tabs = this.editableTabs;
        let activeName = this.editableTabsValue;
        if (activeName === targetName) {
          tabs.forEach((tab, index) => {
            if (tab.name === targetName) {
              let nextTab = tabs[index + 1] || tabs[index - 1];
              if (nextTab) {
                activeName = nextTab.name;
              }
            }
          });
        }
        
        this.editableTabsValue = activeName;
        this.editableTabs = tabs.filter(tab => tab.name !== targetName);
      }
    }
  }
</script>
:element-demo-->
        <template slot="highlight"><pre v-pre><code class="html">&lt;div style=&quot;margin-bottom: 20px;&quot;&gt;
  &lt;el-button
    size=&quot;small&quot;
    @click=&quot;addTab(editableTabsValue)&quot;
  &gt;
    add tab
  &lt;/el-button&gt;
&lt;/div&gt;
&lt;el-tabs v-model=&quot;editableTabsValue&quot; type=&quot;card&quot; closable @tab-remove=&quot;removeTab&quot;&gt;
  &lt;el-tab-pane
    v-for=&quot;(item, index) in editableTabs&quot;
    :key=&quot;item.name&quot;
    :label=&quot;item.title&quot;
    :name=&quot;item.name&quot;
  &gt;
    {{item.content}}
  &lt;/el-tab-pane&gt;
&lt;/el-tabs&gt;
&lt;script&gt;
  export default {
    data() {
      return {
        editableTabsValue: '2',
        editableTabs: [{
          title: 'Tab 1',
          name: '1',
          content: 'Tab 1 content'
        }, {
          title: 'Tab 2',
          name: '2',
          content: 'Tab 2 content'
        }],
        tabIndex: 2
      }
    },
    methods: {
      addTab(targetName) {
        let newTabName = ++this.tabIndex + '';
        this.editableTabs.push({
          title: 'New Tab',
          name: newTabName,
          content: 'New Tab content'
        });
        this.editableTabsValue = newTabName;
      },
      removeTab(targetName) {
        let tabs = this.editableTabs;
        let activeName = this.editableTabsValue;
        if (activeName === targetName) {
          tabs.forEach((tab, index) =&gt; {
            if (tab.name === targetName) {
              let nextTab = tabs[index + 1] || tabs[index - 1];
              if (nextTab) {
                activeName = nextTab.name;
              }
            }
          });
        }
        
        this.editableTabsValue = activeName;
        this.editableTabs = tabs.filter(tab =&gt; tab.name !== targetName);
      }
    }
  }
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="atributos-de-pestanas"><a class="header-anchor" href="#atributos-de-pestanas">¶</a> Atributos de Pestañas</h3>
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
<td>value / v-model</td>
<td>valor enlazado, nombre de la pestaña seleccionada</td>
<td>string</td>
<td>—</td>
<td>nombre de la primer pestaña</td>
</tr>
<tr>
<td>type</td>
<td>tipo de Pestaña</td>
<td>string</td>
<td>card/border-card</td>
<td>—</td>
</tr>
<tr>
<td>closable</td>
<td>si la Pestaña es cerrable</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>addable</td>
<td>si la Pestaña es añadible</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>editable</td>
<td>si la Pestaña es añadible y cerrable</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>tab-position</td>
<td>posición de tabulación</td>
<td>string</td>
<td>top/right/bottom/left</td>
<td>top</td>
</tr>
<tr>
<td>stretch</td>
<td>si el ancho del tab se ajusta automáticamente a su contenedor</td>
<td>boolean</td>
<td>-</td>
<td>false</td>
</tr>
<tr>
<td>before-leave</td>
<td>función <code>hook</code> antes de cambiar de pestaña. Si se devuelve <code>false</code> o se devuelve una <code>Promise</code> y luego se rechaza, se evitará el cambio.</td>
<td>Function(activeName, oldActiveName)</td>
<td>—</td>
<td>—</td>
</tr>
</tbody>
</table>
<h3 id="eventos-de-pestanas"><a class="header-anchor" href="#eventos-de-pestanas">¶</a> Eventos de Pestañas</h3>
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
<td>tab-click</td>
<td>se lanza cuando se hace clic a una pestaña</td>
<td>pestaña clickeada</td>
</tr>
<tr>
<td>tab-remove</td>
<td>se lanza cuando se hace clic al botón tab-remove</td>
<td>nombre de la pestaña removida</td>
</tr>
<tr>
<td>tab-add</td>
<td>se lanza cuando se hace clic al botón tab-add</td>
<td>—</td>
</tr>
<tr>
<td>edit</td>
<td>se lanza cuando los botones de tab-add y/o tab-remove son cliqueados</td>
<td>(targetName, action)</td>
</tr>
</tbody>
</table>
<h3 id="atributos-del-tab-pane"><a class="header-anchor" href="#atributos-del-tab-pane">¶</a> Atributos del Tab-pane</h3>
<table>
<thead>
<tr>
<th>Atributo</th>
<th>Descripción</th>
<th>Tipo</th>
<th>Valores Aceptados</th>
<th>Default</th>
</tr>
</thead>
<tbody>
<tr>
<td>label</td>
<td>título de la pestaña</td>
<td>string</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>disabled</td>
<td>si la Tabulación está deshabilitada</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>name</td>
<td>identificador correspondiente al value de la Tabulación, representando el alias del tab-pane</td>
<td>string</td>
<td>—</td>
<td>número ordinal del tab-pane en la secuencia, p.ej el primer tab-pane de pestañas es '1'</td>
</tr>
<tr>
<td>closable</td>
<td>si el Tab es cerrable</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>lazy</td>
<td>si Tab es renderizado con <code>lazy-load</code></td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
</tbody>
</table>
