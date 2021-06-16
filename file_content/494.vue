<h2 id="container"><a class="header-anchor" href="#container">¶</a> Container</h2>
<p>Les composants Container servent à structurer la page:</p>
<p><code>&lt;el-container&gt;</code>: Conteneur de wrapping. Quand il est placé à l'intérieur de <code>&lt;el-header&gt;</code> ou <code>&lt;el-footer&gt;</code>, tous les éléments enfants seront placés verticalement. Dans le cas contraire ils seront placés horizontalement.</p>
<p><code>&lt;el-header&gt;</code>: Conteneur pour headers.</p>
<p><code>&lt;el-aside&gt;</code>: Conteneur pour section latérale (en général un menu).</p>
<p><code>&lt;el-main&gt;</code>: Conteneur pour la section principal.</p>
<p><code>&lt;el-footer&gt;</code>: Conteneur pour footers.</p>
<div class="tip">
<p>Ces composants utilisent flexbox, assurez vous que le navigateur supporte cette fonctionnalité. De plus, les éléments enfants directs de <code>&lt;el-container&gt;</code> doivent être un des quatre éléments précédents, leur élément père devant obligatoirement être <code>&lt;el-container&gt;</code>.</p>
</div>
<h3 id="mises-en-page-habituelles"><a class="header-anchor" href="#mises-en-page-habituelles">¶</a> Mises en page habituelles</h3>
<demo-block>
        
        <!--element-demo: <el-container>
  <el-header>Header</el-header>
  <el-main>Main</el-main>
</el-container>

<el-container>
  <el-header>Header</el-header>
  <el-main>Main</el-main>
  <el-footer>Footer</el-footer>
</el-container>

<el-container>
  <el-aside width="200px">Aside</el-aside>
  <el-main>Main</el-main>
</el-container>

<el-container>
  <el-header>Header</el-header>
  <el-container>
    <el-aside width="200px">Aside</el-aside>
    <el-main>Main</el-main>
  </el-container>
</el-container>

<el-container>
  <el-header>Header</el-header>
  <el-container>
    <el-aside width="200px">Aside</el-aside>
    <el-container>
      <el-main>Main</el-main>
      <el-footer>Footer</el-footer>
    </el-container>
  </el-container>
</el-container>

<el-container>
  <el-aside width="200px">Aside</el-aside>
  <el-container>
    <el-header>Header</el-header>
    <el-main>Main</el-main>
  </el-container>
</el-container>

<el-container>
  <el-aside width="200px">Aside</el-aside>
  <el-container>
    <el-header>Header</el-header>
    <el-main>Main</el-main>
    <el-footer>Footer</el-footer>
  </el-container>
</el-container>

<style>
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

  body > .el-container {
    margin-bottom: 40px;
  }

  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }

  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
</style>
:element-demo-->
        <template slot="highlight"><pre v-pre><code class="html">&lt;el-container&gt;
  &lt;el-header&gt;Header&lt;/el-header&gt;
  &lt;el-main&gt;Main&lt;/el-main&gt;
&lt;/el-container&gt;

&lt;el-container&gt;
  &lt;el-header&gt;Header&lt;/el-header&gt;
  &lt;el-main&gt;Main&lt;/el-main&gt;
  &lt;el-footer&gt;Footer&lt;/el-footer&gt;
&lt;/el-container&gt;

&lt;el-container&gt;
  &lt;el-aside width=&quot;200px&quot;&gt;Aside&lt;/el-aside&gt;
  &lt;el-main&gt;Main&lt;/el-main&gt;
&lt;/el-container&gt;

&lt;el-container&gt;
  &lt;el-header&gt;Header&lt;/el-header&gt;
  &lt;el-container&gt;
    &lt;el-aside width=&quot;200px&quot;&gt;Aside&lt;/el-aside&gt;
    &lt;el-main&gt;Main&lt;/el-main&gt;
  &lt;/el-container&gt;
&lt;/el-container&gt;

&lt;el-container&gt;
  &lt;el-header&gt;Header&lt;/el-header&gt;
  &lt;el-container&gt;
    &lt;el-aside width=&quot;200px&quot;&gt;Aside&lt;/el-aside&gt;
    &lt;el-container&gt;
      &lt;el-main&gt;Main&lt;/el-main&gt;
      &lt;el-footer&gt;Footer&lt;/el-footer&gt;
    &lt;/el-container&gt;
  &lt;/el-container&gt;
&lt;/el-container&gt;

&lt;el-container&gt;
  &lt;el-aside width=&quot;200px&quot;&gt;Aside&lt;/el-aside&gt;
  &lt;el-container&gt;
    &lt;el-header&gt;Header&lt;/el-header&gt;
    &lt;el-main&gt;Main&lt;/el-main&gt;
  &lt;/el-container&gt;
&lt;/el-container&gt;

&lt;el-container&gt;
  &lt;el-aside width=&quot;200px&quot;&gt;Aside&lt;/el-aside&gt;
  &lt;el-container&gt;
    &lt;el-header&gt;Header&lt;/el-header&gt;
    &lt;el-main&gt;Main&lt;/el-main&gt;
    &lt;el-footer&gt;Footer&lt;/el-footer&gt;
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
</code></pre></template></demo-block><h3 id="exemple"><a class="header-anchor" href="#exemple">¶</a> Exemple</h3>
<demo-block>
        
        <!--element-demo: <el-container style="height: 500px; border: 1px solid #eee">
  <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
    <el-menu :default-openeds="['1', '3']">
      <el-submenu index="1">
        <template slot="title"><i class="el-icon-message"></i>Navigator One</template>
        <el-menu-item-group>
          <template slot="title">Group 1</template>
          <el-menu-item index="1-1">Option 1</el-menu-item>
          <el-menu-item index="1-2">Option 2</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="Group 2">
          <el-menu-item index="1-3">Option 3</el-menu-item>
        </el-menu-item-group>
        <el-submenu index="1-4">
          <template slot="title">Option4</template>
          <el-menu-item index="1-4-1">Option 4-1</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-submenu index="2">
        <template slot="title"><i class="el-icon-menu"></i>Navigator Two</template>
        <el-menu-item-group>
          <template slot="title">Group 1</template>
          <el-menu-item index="2-1">Option 1</el-menu-item>
          <el-menu-item index="2-2">Option 2</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="Group 2">
          <el-menu-item index="2-3">Option 3</el-menu-item>
        </el-menu-item-group>
        <el-submenu index="2-4">
          <template slot="title">Option 4</template>
          <el-menu-item index="2-4-1">Option 4-1</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-submenu index="3">
        <template slot="title"><i class="el-icon-setting"></i>Navigator Three</template>
        <el-menu-item-group>
          <template slot="title">Group 1</template>
          <el-menu-item index="3-1">Option 1</el-menu-item>
          <el-menu-item index="3-2">Option 2</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="Group 2">
          <el-menu-item index="3-3">Option 3</el-menu-item>
        </el-menu-item-group>
        <el-submenu index="3-4">
          <template slot="title">Option 4</template>
          <el-menu-item index="3-4-1">Option 4-1</el-menu-item>
        </el-submenu>
      </el-submenu>
    </el-menu>
  </el-aside>

  <el-container>
    <el-header style="text-align: right; font-size: 12px">
      <el-dropdown>
        <i class="el-icon-setting" style="margin-right: 15px"></i>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>View</el-dropdown-item>
          <el-dropdown-item>Add</el-dropdown-item>
          <el-dropdown-item>Delete</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      <span>Tom</span>
    </el-header>

    <el-main>
      <el-table :data="tableData">
        <el-table-column prop="date" label="Date" width="140">
        </el-table-column>
        <el-table-column prop="name" label="Name" width="120">
        </el-table-column>
        <el-table-column prop="address" label="Address">
        </el-table-column>
      </el-table>
    </el-main>
  </el-container>
</el-container>

<style>
  .el-header {
    background-color: #B3C0D1;
    color: #333;
    line-height: 60px;
  }

  .el-aside {
    color: #333;
  }
</style>

<script>
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
</script>
:element-demo-->
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
</code></pre></template></demo-block><h3 id="attributs-de-container"><a class="header-anchor" href="#attributs-de-container">¶</a> Attributs de Container</h3>
<table>
<thead>
<tr>
<th>Attribut</th>
<th>Description</th>
<th>Type</th>
<th>Valeurs acceptées</th>
<th>Défaut</th>
</tr>
</thead>
<tbody>
<tr>
<td>direction</td>
<td>Direction d'affichage pour les éléments enfants.</td>
<td>string</td>
<td>horizontal / vertical</td>
<td>vertical quand dans <code>el-header</code> ou <code>el-footer</code>; horizontal sinon</td>
</tr>
</tbody>
</table>
<h3 id="attributs-de-header"><a class="header-anchor" href="#attributs-de-header">¶</a> Attributs de Header</h3>
<table>
<thead>
<tr>
<th>Attribut</th>
<th>Description</th>
<th>Type</th>
<th>Valeurs acceptées</th>
<th>Défaut</th>
</tr>
</thead>
<tbody>
<tr>
<td>height</td>
<td>Hauteur du header.</td>
<td>string</td>
<td>—</td>
<td>60px</td>
</tr>
</tbody>
</table>
<h3 id="attributs-de-aside"><a class="header-anchor" href="#attributs-de-aside">¶</a> Attributs de Aside</h3>
<table>
<thead>
<tr>
<th>Attribut</th>
<th>Description</th>
<th>Type</th>
<th>Valeurs acceptées</th>
<th>Défaut</th>
</tr>
</thead>
<tbody>
<tr>
<td>width</td>
<td>Largeur de la section.</td>
<td>string</td>
<td>—</td>
<td>300px</td>
</tr>
</tbody>
</table>
<h3 id="attributs-de-footer"><a class="header-anchor" href="#attributs-de-footer">¶</a> Attributs de Footer</h3>
<table>
<thead>
<tr>
<th>Attribut</th>
<th>Description</th>
<th>Type</th>
<th>Valeurs acceptées</th>
<th>Défaut</th>
</tr>
</thead>
<tbody>
<tr>
<td>height</td>
<td>Hauteur du footer.</td>
<td>string</td>
<td>—</td>
<td>60px</td>
</tr>
</tbody>
</table>
