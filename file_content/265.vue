<h2 id="navmenu"><a class="header-anchor" href="#navmenu">¶</a> NavMenu</h2>
<p>Menú que provee la navegación para tu sitio.</p>
<h3 id="top-bar"><a class="header-anchor" href="#top-bar">¶</a> Top bar</h3>
<p>Top bar NavMenu puede ser usado en distinto escenarios.</p>
<demo-block>
        <div><p>Por defecto el menú es vertical, pero puede hacerlo horizontal asignando a la propiedad <code>mode</code> el valor 'horizontal'. Además, puede utilizar el componente de submenú para crear un menú de segundo nivel. Menú provee <code>background-color</code>, <code>text-color</code> y <code>active-text-color</code> para customizar los colores.</p>
</div>
        <!--element-demo: <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
  <el-menu-item index="1">Processing Center</el-menu-item>
  <el-submenu index="2">
    <template slot="title">Workspace</template>
    <el-menu-item index="2-1">item one</el-menu-item>
    <el-menu-item index="2-2">item two</el-menu-item>
    <el-menu-item index="2-3">item three</el-menu-item>
    <el-submenu index="2-4">
      <template slot="title">item four</template>
      <el-menu-item index="2-4-1">item one</el-menu-item>
      <el-menu-item index="2-4-2">item two</el-menu-item>
      <el-menu-item index="2-4-3">item three</el-menu-item>
    </el-submenu>
  </el-submenu>
  <el-menu-item index="3" disabled>Info</el-menu-item>
  <el-menu-item index="4"><a href="https://www.ele.me" target="_blank">Orders</a></el-menu-item>
</el-menu>
<div class="line"></div>
<el-menu
  :default-active="activeIndex2"
  class="el-menu-demo"
  mode="horizontal"
  @select="handleSelect"
  background-color="#545c64"
  text-color="#fff"
  active-text-color="#ffd04b">
  <el-menu-item index="1">Processing Center</el-menu-item>
  <el-submenu index="2">
    <template slot="title">Workspace</template>
    <el-menu-item index="2-1">item one</el-menu-item>
    <el-menu-item index="2-2">item two</el-menu-item>
    <el-menu-item index="2-3">item three</el-menu-item>
    <el-submenu index="2-4">
      <template slot="title">item four</template>
      <el-menu-item index="2-4-1">item one</el-menu-item>
      <el-menu-item index="2-4-2">item two</el-menu-item>
      <el-menu-item index="2-4-3">item three</el-menu-item>
    </el-submenu>
  </el-submenu>
  <el-menu-item index="3" disabled>Info</el-menu-item>
  <el-menu-item index="4"><a href="https://www.ele.me" target="_blank">Orders</a></el-menu-item>
</el-menu>

<script>
  export default {
    data() {
      return {
        activeIndex: '1',
        activeIndex2: '1'
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>
:element-demo-->
        <template slot="highlight"><pre v-pre><code class="html">&lt;el-menu :default-active=&quot;activeIndex&quot; class=&quot;el-menu-demo&quot; mode=&quot;horizontal&quot; @select=&quot;handleSelect&quot;&gt;
  &lt;el-menu-item index=&quot;1&quot;&gt;Processing Center&lt;/el-menu-item&gt;
  &lt;el-submenu index=&quot;2&quot;&gt;
    &lt;template slot=&quot;title&quot;&gt;Workspace&lt;/template&gt;
    &lt;el-menu-item index=&quot;2-1&quot;&gt;item one&lt;/el-menu-item&gt;
    &lt;el-menu-item index=&quot;2-2&quot;&gt;item two&lt;/el-menu-item&gt;
    &lt;el-menu-item index=&quot;2-3&quot;&gt;item three&lt;/el-menu-item&gt;
    &lt;el-submenu index=&quot;2-4&quot;&gt;
      &lt;template slot=&quot;title&quot;&gt;item four&lt;/template&gt;
      &lt;el-menu-item index=&quot;2-4-1&quot;&gt;item one&lt;/el-menu-item&gt;
      &lt;el-menu-item index=&quot;2-4-2&quot;&gt;item two&lt;/el-menu-item&gt;
      &lt;el-menu-item index=&quot;2-4-3&quot;&gt;item three&lt;/el-menu-item&gt;
    &lt;/el-submenu&gt;
  &lt;/el-submenu&gt;
  &lt;el-menu-item index=&quot;3&quot; disabled&gt;Info&lt;/el-menu-item&gt;
  &lt;el-menu-item index=&quot;4&quot;&gt;&lt;a href=&quot;https://www.ele.me&quot; target=&quot;_blank&quot;&gt;Orders&lt;/a&gt;&lt;/el-menu-item&gt;
&lt;/el-menu&gt;
&lt;div class=&quot;line&quot;&gt;&lt;/div&gt;
&lt;el-menu
  :default-active=&quot;activeIndex2&quot;
  class=&quot;el-menu-demo&quot;
  mode=&quot;horizontal&quot;
  @select=&quot;handleSelect&quot;
  background-color=&quot;#545c64&quot;
  text-color=&quot;#fff&quot;
  active-text-color=&quot;#ffd04b&quot;&gt;
  &lt;el-menu-item index=&quot;1&quot;&gt;Processing Center&lt;/el-menu-item&gt;
  &lt;el-submenu index=&quot;2&quot;&gt;
    &lt;template slot=&quot;title&quot;&gt;Workspace&lt;/template&gt;
    &lt;el-menu-item index=&quot;2-1&quot;&gt;item one&lt;/el-menu-item&gt;
    &lt;el-menu-item index=&quot;2-2&quot;&gt;item two&lt;/el-menu-item&gt;
    &lt;el-menu-item index=&quot;2-3&quot;&gt;item three&lt;/el-menu-item&gt;
    &lt;el-submenu index=&quot;2-4&quot;&gt;
      &lt;template slot=&quot;title&quot;&gt;item four&lt;/template&gt;
      &lt;el-menu-item index=&quot;2-4-1&quot;&gt;item one&lt;/el-menu-item&gt;
      &lt;el-menu-item index=&quot;2-4-2&quot;&gt;item two&lt;/el-menu-item&gt;
      &lt;el-menu-item index=&quot;2-4-3&quot;&gt;item three&lt;/el-menu-item&gt;
    &lt;/el-submenu&gt;
  &lt;/el-submenu&gt;
  &lt;el-menu-item index=&quot;3&quot; disabled&gt;Info&lt;/el-menu-item&gt;
  &lt;el-menu-item index=&quot;4&quot;&gt;&lt;a href=&quot;https://www.ele.me&quot; target=&quot;_blank&quot;&gt;Orders&lt;/a&gt;&lt;/el-menu-item&gt;
&lt;/el-menu&gt;

&lt;script&gt;
  export default {
    data() {
      return {
        activeIndex: '1',
        activeIndex2: '1'
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="side-bar"><a class="header-anchor" href="#side-bar">¶</a> Side bar</h3>
<p>NavMenu vertical con sub-menús.</p>
<demo-block>
        <div><p>Puede utilizar el componente <code>el-menu-item-group</code> para crear un grupo de menú, y el nombre del grupo estará determinado por la propiedad <code>title</code> o la propiedad <code>slot</code>.</p>
</div>
        <!--element-demo: <el-row class="tac">
  <el-col :span="12">
    <h5>Default colors</h5>
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose">
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>Navigator One</span>
        </template>
        <el-menu-item-group title="Group One">
          <el-menu-item index="1-1">item one</el-menu-item>
          <el-menu-item index="1-2">item one</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="Group Two">
          <el-menu-item index="1-3">item three</el-menu-item>
        </el-menu-item-group>
        <el-submenu index="1-4">
          <template slot="title">item four</template>
          <el-menu-item index="1-4-1">item one</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-menu-item index="2">
        <i class="el-icon-menu"></i>
        <span>Navigator Two</span>
      </el-menu-item>
      <el-menu-item index="3" disabled>
        <i class="el-icon-document"></i>
        <span>Navigator Three</span>
      </el-menu-item>
      <el-menu-item index="4">
        <i class="el-icon-setting"></i>
        <span>Navigator Four</span>
      </el-menu-item>
    </el-menu>
  </el-col>
  <el-col :span="12">
    <h5>Custom colors</h5>
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b">
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>Navigator One</span>
        </template>
        <el-menu-item-group title="Group One">
          <el-menu-item index="1-1">item one</el-menu-item>
          <el-menu-item index="1-2">item one</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="Group Two">
          <el-menu-item index="1-3">item three</el-menu-item>
        </el-menu-item-group>
        <el-submenu index="1-4">
          <template slot="title">item four</template>
          <el-menu-item index="1-4-1">item one</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-menu-item index="2">
        <i class="el-icon-menu"></i>
        <span>Navigator Two</span>
      </el-menu-item>
      <el-menu-item index="3" disabled>
        <i class="el-icon-document"></i>
        <span>Navigator Three</span>
      </el-menu-item>
      <el-menu-item index="4">
        <i class="el-icon-setting"></i>
        <span>Navigator Four</span>
      </el-menu-item>
    </el-menu>
  </el-col>
</el-row>

<script>
  export default {
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>
:element-demo-->
        <template slot="highlight"><pre v-pre><code class="html">&lt;el-row class=&quot;tac&quot;&gt;
  &lt;el-col :span=&quot;12&quot;&gt;
    &lt;h5&gt;Default colors&lt;/h5&gt;
    &lt;el-menu
      default-active=&quot;2&quot;
      class=&quot;el-menu-vertical-demo&quot;
      @open=&quot;handleOpen&quot;
      @close=&quot;handleClose&quot;&gt;
      &lt;el-submenu index=&quot;1&quot;&gt;
        &lt;template slot=&quot;title&quot;&gt;
          &lt;i class=&quot;el-icon-location&quot;&gt;&lt;/i&gt;
          &lt;span&gt;Navigator One&lt;/span&gt;
        &lt;/template&gt;
        &lt;el-menu-item-group title=&quot;Group One&quot;&gt;
          &lt;el-menu-item index=&quot;1-1&quot;&gt;item one&lt;/el-menu-item&gt;
          &lt;el-menu-item index=&quot;1-2&quot;&gt;item one&lt;/el-menu-item&gt;
        &lt;/el-menu-item-group&gt;
        &lt;el-menu-item-group title=&quot;Group Two&quot;&gt;
          &lt;el-menu-item index=&quot;1-3&quot;&gt;item three&lt;/el-menu-item&gt;
        &lt;/el-menu-item-group&gt;
        &lt;el-submenu index=&quot;1-4&quot;&gt;
          &lt;template slot=&quot;title&quot;&gt;item four&lt;/template&gt;
          &lt;el-menu-item index=&quot;1-4-1&quot;&gt;item one&lt;/el-menu-item&gt;
        &lt;/el-submenu&gt;
      &lt;/el-submenu&gt;
      &lt;el-menu-item index=&quot;2&quot;&gt;
        &lt;i class=&quot;el-icon-menu&quot;&gt;&lt;/i&gt;
        &lt;span&gt;Navigator Two&lt;/span&gt;
      &lt;/el-menu-item&gt;
      &lt;el-menu-item index=&quot;3&quot; disabled&gt;
        &lt;i class=&quot;el-icon-document&quot;&gt;&lt;/i&gt;
        &lt;span&gt;Navigator Three&lt;/span&gt;
      &lt;/el-menu-item&gt;
      &lt;el-menu-item index=&quot;4&quot;&gt;
        &lt;i class=&quot;el-icon-setting&quot;&gt;&lt;/i&gt;
        &lt;span&gt;Navigator Four&lt;/span&gt;
      &lt;/el-menu-item&gt;
    &lt;/el-menu&gt;
  &lt;/el-col&gt;
  &lt;el-col :span=&quot;12&quot;&gt;
    &lt;h5&gt;Custom colors&lt;/h5&gt;
    &lt;el-menu
      default-active=&quot;2&quot;
      class=&quot;el-menu-vertical-demo&quot;
      @open=&quot;handleOpen&quot;
      @close=&quot;handleClose&quot;
      background-color=&quot;#545c64&quot;
      text-color=&quot;#fff&quot;
      active-text-color=&quot;#ffd04b&quot;&gt;
      &lt;el-submenu index=&quot;1&quot;&gt;
        &lt;template slot=&quot;title&quot;&gt;
          &lt;i class=&quot;el-icon-location&quot;&gt;&lt;/i&gt;
          &lt;span&gt;Navigator One&lt;/span&gt;
        &lt;/template&gt;
        &lt;el-menu-item-group title=&quot;Group One&quot;&gt;
          &lt;el-menu-item index=&quot;1-1&quot;&gt;item one&lt;/el-menu-item&gt;
          &lt;el-menu-item index=&quot;1-2&quot;&gt;item one&lt;/el-menu-item&gt;
        &lt;/el-menu-item-group&gt;
        &lt;el-menu-item-group title=&quot;Group Two&quot;&gt;
          &lt;el-menu-item index=&quot;1-3&quot;&gt;item three&lt;/el-menu-item&gt;
        &lt;/el-menu-item-group&gt;
        &lt;el-submenu index=&quot;1-4&quot;&gt;
          &lt;template slot=&quot;title&quot;&gt;item four&lt;/template&gt;
          &lt;el-menu-item index=&quot;1-4-1&quot;&gt;item one&lt;/el-menu-item&gt;
        &lt;/el-submenu&gt;
      &lt;/el-submenu&gt;
      &lt;el-menu-item index=&quot;2&quot;&gt;
        &lt;i class=&quot;el-icon-menu&quot;&gt;&lt;/i&gt;
        &lt;span&gt;Navigator Two&lt;/span&gt;
      &lt;/el-menu-item&gt;
      &lt;el-menu-item index=&quot;3&quot; disabled&gt;
        &lt;i class=&quot;el-icon-document&quot;&gt;&lt;/i&gt;
        &lt;span&gt;Navigator Three&lt;/span&gt;
      &lt;/el-menu-item&gt;
      &lt;el-menu-item index=&quot;4&quot;&gt;
        &lt;i class=&quot;el-icon-setting&quot;&gt;&lt;/i&gt;
        &lt;span&gt;Navigator Four&lt;/span&gt;
      &lt;/el-menu-item&gt;
    &lt;/el-menu&gt;
  &lt;/el-col&gt;
&lt;/el-row&gt;

&lt;script&gt;
  export default {
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="collapse"><a class="header-anchor" href="#collapse">¶</a> Collapse</h3>
<p>NavMenu vertical puede ser colapsado.</p>
<demo-block>
        
        <!--element-demo: <el-radio-group v-model="isCollapse" style="margin-bottom: 20px;">
  <el-radio-button :label="false">expand</el-radio-button>
  <el-radio-button :label="true">collapse</el-radio-button>
</el-radio-group>
<el-menu default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :collapse="isCollapse">
  <el-submenu index="1">
    <template slot="title">
      <i class="el-icon-location"></i>
      <span slot="title">Navigator One</span>
    </template>
    <el-menu-item-group>
      <span slot="title">Group One</span>
      <el-menu-item index="1-1">item one</el-menu-item>
      <el-menu-item index="1-2">item two</el-menu-item>
    </el-menu-item-group>
    <el-menu-item-group title="Group Two">
      <el-menu-item index="1-3">item three</el-menu-item>
    </el-menu-item-group>
    <el-submenu index="1-4">
      <span slot="title">item four</span>
      <el-menu-item index="1-4-1">item one</el-menu-item>
    </el-submenu>
  </el-submenu>
  <el-menu-item index="2">
    <i class="el-icon-menu"></i>
    <span slot="title">Navigator Two</span>
  </el-menu-item>
  <el-menu-item index="3" disabled>
    <i class="el-icon-document"></i>
    <span slot="title">Navigator Three</span>
  </el-menu-item>
  <el-menu-item index="4">
    <i class="el-icon-setting"></i>
    <span slot="title">Navigator Four</span>
  </el-menu-item>
</el-menu>

<style>
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }
</style>

<script>
  export default {
    data() {
      return {
        isCollapse: true
      };
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>
:element-demo-->
        <template slot="highlight"><pre v-pre><code class="html">&lt;el-radio-group v-model=&quot;isCollapse&quot; style=&quot;margin-bottom: 20px;&quot;&gt;
  &lt;el-radio-button :label=&quot;false&quot;&gt;expand&lt;/el-radio-button&gt;
  &lt;el-radio-button :label=&quot;true&quot;&gt;collapse&lt;/el-radio-button&gt;
&lt;/el-radio-group&gt;
&lt;el-menu default-active=&quot;2&quot; class=&quot;el-menu-vertical-demo&quot; @open=&quot;handleOpen&quot; @close=&quot;handleClose&quot; :collapse=&quot;isCollapse&quot;&gt;
  &lt;el-submenu index=&quot;1&quot;&gt;
    &lt;template slot=&quot;title&quot;&gt;
      &lt;i class=&quot;el-icon-location&quot;&gt;&lt;/i&gt;
      &lt;span slot=&quot;title&quot;&gt;Navigator One&lt;/span&gt;
    &lt;/template&gt;
    &lt;el-menu-item-group&gt;
      &lt;span slot=&quot;title&quot;&gt;Group One&lt;/span&gt;
      &lt;el-menu-item index=&quot;1-1&quot;&gt;item one&lt;/el-menu-item&gt;
      &lt;el-menu-item index=&quot;1-2&quot;&gt;item two&lt;/el-menu-item&gt;
    &lt;/el-menu-item-group&gt;
    &lt;el-menu-item-group title=&quot;Group Two&quot;&gt;
      &lt;el-menu-item index=&quot;1-3&quot;&gt;item three&lt;/el-menu-item&gt;
    &lt;/el-menu-item-group&gt;
    &lt;el-submenu index=&quot;1-4&quot;&gt;
      &lt;span slot=&quot;title&quot;&gt;item four&lt;/span&gt;
      &lt;el-menu-item index=&quot;1-4-1&quot;&gt;item one&lt;/el-menu-item&gt;
    &lt;/el-submenu&gt;
  &lt;/el-submenu&gt;
  &lt;el-menu-item index=&quot;2&quot;&gt;
    &lt;i class=&quot;el-icon-menu&quot;&gt;&lt;/i&gt;
    &lt;span slot=&quot;title&quot;&gt;Navigator Two&lt;/span&gt;
  &lt;/el-menu-item&gt;
  &lt;el-menu-item index=&quot;3&quot; disabled&gt;
    &lt;i class=&quot;el-icon-document&quot;&gt;&lt;/i&gt;
    &lt;span slot=&quot;title&quot;&gt;Navigator Three&lt;/span&gt;
  &lt;/el-menu-item&gt;
  &lt;el-menu-item index=&quot;4&quot;&gt;
    &lt;i class=&quot;el-icon-setting&quot;&gt;&lt;/i&gt;
    &lt;span slot=&quot;title&quot;&gt;Navigator Four&lt;/span&gt;
  &lt;/el-menu-item&gt;
&lt;/el-menu&gt;

&lt;style&gt;
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }
&lt;/style&gt;

&lt;script&gt;
  export default {
    data() {
      return {
        isCollapse: true
      };
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="atributos-menu"><a class="header-anchor" href="#atributos-menu">¶</a> Atributos Menú</h3>
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
<td>mode</td>
<td>modo de presentación del menú</td>
<td>string</td>
<td>horizontal / vertical</td>
<td>vertical</td>
</tr>
<tr>
<td>collapse</td>
<td>si el menú está colapsado (solo en modo vertical)</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>background-color</td>
<td>color de fondo del menú (formato hexadecimal)</td>
<td>string</td>
<td>—</td>
<td>#ffffff</td>
</tr>
<tr>
<td>text-color</td>
<td>color de texto del menú (formato hexadecimal)</td>
<td>string</td>
<td>—</td>
<td>#303133</td>
</tr>
<tr>
<td>active-text-color</td>
<td>color del texto del menu-item activo (formato hexadecimal)</td>
<td>string</td>
<td>—</td>
<td>#409EFF</td>
</tr>
<tr>
<td>default-active</td>
<td>índice del menu-item activo</td>
<td>string</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>default-openeds</td>
<td>arreglo que contiene las llaves del sub-menus activo</td>
<td>Array</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>unique-opened</td>
<td>si solo un submenu puede ser activo</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>menu-trigger</td>
<td>como dispara eventos sub-menus, solo funciona cuando <code>mode</code> es 'horizontal'</td>
<td>string</td>
<td>hover / click</td>
<td>hover</td>
</tr>
<tr>
<td>router</td>
<td>si el modo <code>vue-router</code> está activado. Si es verdadero, el índice será usado como 'path' para activar la ruta</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>collapse-transition</td>
<td>si se debe permitir collapse transition</td>
<td>boolean</td>
<td>—</td>
<td>true</td>
</tr>
</tbody>
</table>
<h3 id="metodos-menu"><a class="header-anchor" href="#metodos-menu">¶</a> Métodos Menu</h3>
<table>
<thead>
<tr>
<th>Métodos de evento</th>
<th>Descripción</th>
<th>Parámetros</th>
</tr>
</thead>
<tbody>
<tr>
<td>open</td>
<td>abre un sub-menu específico</td>
<td>index: índice del sub-menu para abrir</td>
</tr>
<tr>
<td>close</td>
<td>cierra un sub-menu específico</td>
<td>index: índice del sub-menu para cerrar</td>
</tr>
</tbody>
</table>
<h3 id="eventos-menu"><a class="header-anchor" href="#eventos-menu">¶</a> Eventos Menu</h3>
<table>
<thead>
<tr>
<th>Nombre de evento</th>
<th>Descripción</th>
<th>Parámetros</th>
</tr>
</thead>
<tbody>
<tr>
<td>select</td>
<td>callback ejecutado cuando el menú es activado</td>
<td>index: índice del menú activado, indexPath: index path del menú activado</td>
</tr>
<tr>
<td>open</td>
<td>callback ejecutado cuando sub-menu se expande</td>
<td>index: índice del sub-menu expandido, indexPath: index path del sub-menu expandido</td>
</tr>
<tr>
<td>close</td>
<td>callback ejecutado cuando sub-menu colapsa</td>
<td>index: índice del sub-menu colapsado, indexPath: index path del menú colapsado</td>
</tr>
</tbody>
</table>
<h3 id="eventos-menu-item"><a class="header-anchor" href="#eventos-menu-item">¶</a> Eventos Menu-Item</h3>
<table>
<thead>
<tr>
<th>Nombre de evento</th>
<th>Descripción</th>
<th>Parámetros</th>
</tr>
</thead>
<tbody>
<tr>
<td>click</td>
<td>callback ejecutado cuando se hace click sobre menu-item</td>
<td>el: instancia de menu-item</td>
</tr>
</tbody>
</table>
<h3 id="atributos-submenu"><a class="header-anchor" href="#atributos-submenu">¶</a> Atributos SubMenu</h3>
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
<td>index</td>
<td>identificador único</td>
<td>string/null</td>
<td>—</td>
<td>null</td>
</tr>
<tr>
<td>popper-class</td>
<td>nombre personalizado de la clase del menú popup</td>
<td>string</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>show-timeout</td>
<td>tiempo de espera antes de mostrar un submenú</td>
<td>number</td>
<td>—</td>
<td>300</td>
</tr>
<tr>
<td>hide-timeout</td>
<td>tiempo de espera antes de ocultar un submenú</td>
<td>number</td>
<td>—</td>
<td>300</td>
</tr>
<tr>
<td>disabled</td>
<td>si esta <code>disabled</code> el sub-menu</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>popper-append-to-body</td>
<td>si se debe agregar el menú emergente al cuerpo. Si la posición del menú es incorrecta, puede intentar ajustar este prop</td>
<td>boolean</td>
<td>-</td>
<td>level one Submenu: true / other Submenus: false</td>
</tr>
</tbody>
</table>
<h3 id="atributos-menu-item"><a class="header-anchor" href="#atributos-menu-item">¶</a> Atributos Menu-Item</h3>
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
<td>index</td>
<td>identificador único</td>
<td>string</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>route</td>
<td>Objeto Vue Router</td>
<td>object</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>disabled</td>
<td>si esta <code>disabled</code></td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
</tbody>
</table>
<h3 id="atributos-menu-group"><a class="header-anchor" href="#atributos-menu-group">¶</a> Atributos Menu-Group</h3>
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
<td>title</td>
<td>título del grupo</td>
<td>string</td>
<td>—</td>
<td>—</td>
</tr>
</tbody>
</table>
