<h2 id="navmenu"><a class="header-anchor" href="#navmenu">¶</a> NavMenu</h2>
<p>Menu qui fournit un système de navigation à votre site.</p>
<h3 id="barre-du-haut"><a class="header-anchor" href="#barre-du-haut">¶</a> Barre du haut</h3>
<p>La barre du haut peut être utilisée pour différents scénarios.</p>
<demo-block>
        <div><p>Par défaut le menu est vertical, mais vous pouvez le passer en horizontal en réglant l'attribut <code>mode</code> sur 'horizontal'. De plus, vous pouvez utiliser le composant submenu pour créer un second niveau niveau de menu. Le menu utilises <code>background-color</code>, <code>text-color</code> et <code>active-text-color</code> pour personnaliser les couleurs.</p>
</div>
        <!--element-demo: <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
  <el-menu-item index="1">Centre de traitement</el-menu-item>
  <el-submenu index="2">
    <template slot="title">Lieu de travail</template>
    <el-menu-item index="2-1">item un</el-menu-item>
    <el-menu-item index="2-2">item deux</el-menu-item>
    <el-menu-item index="2-3">item trois</el-menu-item>
    <el-submenu index="2-4">
      <template slot="title">item quatre</template>
      <el-menu-item index="2-4-1">item un</el-menu-item>
      <el-menu-item index="2-4-2">item deux</el-menu-item>
      <el-menu-item index="2-4-3">item trois</el-menu-item>
    </el-submenu>
  </el-submenu>
  <el-menu-item index="3" disabled>Infos</el-menu-item>
  <el-menu-item index="4"><a href="https://www.ele.me" target="_blank">Commandes</a></el-menu-item>
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
  <el-menu-item index="1">Centre de traitement</el-menu-item>
  <el-submenu index="2">
    <template slot="title">Lieu de travail</template>
    <el-menu-item index="2-1">item un</el-menu-item>
    <el-menu-item index="2-2">item deux</el-menu-item>
    <el-menu-item index="2-3">item trois</el-menu-item>
    <el-submenu index="2-4">
      <template slot="title">item quatre</template>
      <el-menu-item index="2-4-1">item un</el-menu-item>
      <el-menu-item index="2-4-2">item deux</el-menu-item>
      <el-menu-item index="2-4-3">item trois</el-menu-item>
    </el-submenu>
  </el-submenu>
  <el-menu-item index="3" disabled>Info</el-menu-item>
  <el-menu-item index="4"><a href="https://www.ele.me" target="_blank">Commandes</a></el-menu-item>
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
  &lt;el-menu-item index=&quot;1&quot;&gt;Centre de traitement&lt;/el-menu-item&gt;
  &lt;el-submenu index=&quot;2&quot;&gt;
    &lt;template slot=&quot;title&quot;&gt;Lieu de travail&lt;/template&gt;
    &lt;el-menu-item index=&quot;2-1&quot;&gt;item un&lt;/el-menu-item&gt;
    &lt;el-menu-item index=&quot;2-2&quot;&gt;item deux&lt;/el-menu-item&gt;
    &lt;el-menu-item index=&quot;2-3&quot;&gt;item trois&lt;/el-menu-item&gt;
    &lt;el-submenu index=&quot;2-4&quot;&gt;
      &lt;template slot=&quot;title&quot;&gt;item quatre&lt;/template&gt;
      &lt;el-menu-item index=&quot;2-4-1&quot;&gt;item un&lt;/el-menu-item&gt;
      &lt;el-menu-item index=&quot;2-4-2&quot;&gt;item deux&lt;/el-menu-item&gt;
      &lt;el-menu-item index=&quot;2-4-3&quot;&gt;item trois&lt;/el-menu-item&gt;
    &lt;/el-submenu&gt;
  &lt;/el-submenu&gt;
  &lt;el-menu-item index=&quot;3&quot; disabled&gt;Infos&lt;/el-menu-item&gt;
  &lt;el-menu-item index=&quot;4&quot;&gt;&lt;a href=&quot;https://www.ele.me&quot; target=&quot;_blank&quot;&gt;Commandes&lt;/a&gt;&lt;/el-menu-item&gt;
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
  &lt;el-menu-item index=&quot;1&quot;&gt;Centre de traitement&lt;/el-menu-item&gt;
  &lt;el-submenu index=&quot;2&quot;&gt;
    &lt;template slot=&quot;title&quot;&gt;Lieu de travail&lt;/template&gt;
    &lt;el-menu-item index=&quot;2-1&quot;&gt;item un&lt;/el-menu-item&gt;
    &lt;el-menu-item index=&quot;2-2&quot;&gt;item deux&lt;/el-menu-item&gt;
    &lt;el-menu-item index=&quot;2-3&quot;&gt;item trois&lt;/el-menu-item&gt;
    &lt;el-submenu index=&quot;2-4&quot;&gt;
      &lt;template slot=&quot;title&quot;&gt;item quatre&lt;/template&gt;
      &lt;el-menu-item index=&quot;2-4-1&quot;&gt;item un&lt;/el-menu-item&gt;
      &lt;el-menu-item index=&quot;2-4-2&quot;&gt;item deux&lt;/el-menu-item&gt;
      &lt;el-menu-item index=&quot;2-4-3&quot;&gt;item trois&lt;/el-menu-item&gt;
    &lt;/el-submenu&gt;
  &lt;/el-submenu&gt;
  &lt;el-menu-item index=&quot;3&quot; disabled&gt;Info&lt;/el-menu-item&gt;
  &lt;el-menu-item index=&quot;4&quot;&gt;&lt;a href=&quot;https://www.ele.me&quot; target=&quot;_blank&quot;&gt;Commandes&lt;/a&gt;&lt;/el-menu-item&gt;
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
</code></pre></template></demo-block><h3 id="barre-laterale"><a class="header-anchor" href="#barre-laterale">¶</a> Barre latérale</h3>
<p>Menu vertical avec sous-menus.</p>
<demo-block>
        <div><p>Vous pouvez utiliser le composant el-menu-item-group pour créer un groupe dans le menu dont le nom sera déterminé par celui de la propriété title ou d'un slot.</p>
</div>
        <!--element-demo: <el-row class="tac">
  <el-col :span="12">
    <h5>Couleurs par défaut</h5>
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose">
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>Navigateur Un</span>
        </template>
        <el-menu-item-group title="Group Un">
          <el-menu-item index="1-1">item un</el-menu-item>
          <el-menu-item index="1-2">item un</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="Group Deux">
          <el-menu-item index="1-3">item trois</el-menu-item>
        </el-menu-item-group>
        <el-submenu index="1-4">
          <template slot="title">item quatre</template>
          <el-menu-item index="1-4-1">item un</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-menu-item index="2">
        <i class="el-icon-menu"></i>
        <span>Navigateur Deux</span>
      </el-menu-item>
      <el-menu-item index="3" disabled>
        <i class="el-icon-document"></i>
        <span>Navigateur Trois</span>
      </el-menu-item>
      <el-menu-item index="4">
        <i class="el-icon-setting"></i>
        <span>Navigateur Quatre</span>
      </el-menu-item>
    </el-menu>
  </el-col>
  <el-col :span="12">
    <h5>Couleurs personnalisées</h5>
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
          <span>Navigateur Un</span>
        </template>
        <el-menu-item-group title="Group Un">
          <el-menu-item index="1-1">item un</el-menu-item>
          <el-menu-item index="1-2">item un</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="Group Deux">
          <el-menu-item index="1-3">item trois</el-menu-item>
        </el-menu-item-group>
        <el-submenu index="1-4">
          <template slot="title">item quatre</template>
          <el-menu-item index="1-4-1">item un</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-menu-item index="2">
        <i class="el-icon-menu"></i>
        <span>Navigateur Deux</span>
      </el-menu-item>
      <el-menu-item index="3" disabled>
        <i class="el-icon-document"></i>
        <span>Navigateur Trois</span>
      </el-menu-item>
      <el-menu-item index="4">
        <i class="el-icon-setting"></i>
        <span>Navigateur Quatre</span>
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
    &lt;h5&gt;Couleurs par défaut&lt;/h5&gt;
    &lt;el-menu
      default-active=&quot;2&quot;
      class=&quot;el-menu-vertical-demo&quot;
      @open=&quot;handleOpen&quot;
      @close=&quot;handleClose&quot;&gt;
      &lt;el-submenu index=&quot;1&quot;&gt;
        &lt;template slot=&quot;title&quot;&gt;
          &lt;i class=&quot;el-icon-location&quot;&gt;&lt;/i&gt;
          &lt;span&gt;Navigateur Un&lt;/span&gt;
        &lt;/template&gt;
        &lt;el-menu-item-group title=&quot;Group Un&quot;&gt;
          &lt;el-menu-item index=&quot;1-1&quot;&gt;item un&lt;/el-menu-item&gt;
          &lt;el-menu-item index=&quot;1-2&quot;&gt;item un&lt;/el-menu-item&gt;
        &lt;/el-menu-item-group&gt;
        &lt;el-menu-item-group title=&quot;Group Deux&quot;&gt;
          &lt;el-menu-item index=&quot;1-3&quot;&gt;item trois&lt;/el-menu-item&gt;
        &lt;/el-menu-item-group&gt;
        &lt;el-submenu index=&quot;1-4&quot;&gt;
          &lt;template slot=&quot;title&quot;&gt;item quatre&lt;/template&gt;
          &lt;el-menu-item index=&quot;1-4-1&quot;&gt;item un&lt;/el-menu-item&gt;
        &lt;/el-submenu&gt;
      &lt;/el-submenu&gt;
      &lt;el-menu-item index=&quot;2&quot;&gt;
        &lt;i class=&quot;el-icon-menu&quot;&gt;&lt;/i&gt;
        &lt;span&gt;Navigateur Deux&lt;/span&gt;
      &lt;/el-menu-item&gt;
      &lt;el-menu-item index=&quot;3&quot; disabled&gt;
        &lt;i class=&quot;el-icon-document&quot;&gt;&lt;/i&gt;
        &lt;span&gt;Navigateur Trois&lt;/span&gt;
      &lt;/el-menu-item&gt;
      &lt;el-menu-item index=&quot;4&quot;&gt;
        &lt;i class=&quot;el-icon-setting&quot;&gt;&lt;/i&gt;
        &lt;span&gt;Navigateur Quatre&lt;/span&gt;
      &lt;/el-menu-item&gt;
    &lt;/el-menu&gt;
  &lt;/el-col&gt;
  &lt;el-col :span=&quot;12&quot;&gt;
    &lt;h5&gt;Couleurs personnalisées&lt;/h5&gt;
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
          &lt;span&gt;Navigateur Un&lt;/span&gt;
        &lt;/template&gt;
        &lt;el-menu-item-group title=&quot;Group Un&quot;&gt;
          &lt;el-menu-item index=&quot;1-1&quot;&gt;item un&lt;/el-menu-item&gt;
          &lt;el-menu-item index=&quot;1-2&quot;&gt;item un&lt;/el-menu-item&gt;
        &lt;/el-menu-item-group&gt;
        &lt;el-menu-item-group title=&quot;Group Deux&quot;&gt;
          &lt;el-menu-item index=&quot;1-3&quot;&gt;item trois&lt;/el-menu-item&gt;
        &lt;/el-menu-item-group&gt;
        &lt;el-submenu index=&quot;1-4&quot;&gt;
          &lt;template slot=&quot;title&quot;&gt;item quatre&lt;/template&gt;
          &lt;el-menu-item index=&quot;1-4-1&quot;&gt;item un&lt;/el-menu-item&gt;
        &lt;/el-submenu&gt;
      &lt;/el-submenu&gt;
      &lt;el-menu-item index=&quot;2&quot;&gt;
        &lt;i class=&quot;el-icon-menu&quot;&gt;&lt;/i&gt;
        &lt;span&gt;Navigateur Deux&lt;/span&gt;
      &lt;/el-menu-item&gt;
      &lt;el-menu-item index=&quot;3&quot; disabled&gt;
        &lt;i class=&quot;el-icon-document&quot;&gt;&lt;/i&gt;
        &lt;span&gt;Navigateur Trois&lt;/span&gt;
      &lt;/el-menu-item&gt;
      &lt;el-menu-item index=&quot;4&quot;&gt;
        &lt;i class=&quot;el-icon-setting&quot;&gt;&lt;/i&gt;
        &lt;span&gt;Navigateur Quatre&lt;/span&gt;
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
</code></pre></template></demo-block><h3 id="menu-reduit"><a class="header-anchor" href="#menu-reduit">¶</a> Menu réduit</h3>
<p>Le menu vertical peut être réduit.</p>
<demo-block>
        
        <!--element-demo: <el-radio-group v-model="isCollapse" style="margin-bottom: 20px;">
  <el-radio-button :label="false">Agrandir</el-radio-button>
  <el-radio-button :label="true">Réduire</el-radio-button>
</el-radio-group>
<el-menu default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :collapse="isCollapse">
  <el-submenu index="1">
    <template slot="title">
      <i class="el-icon-location"></i>
      <span slot="title">Navigateur Un</span>
    </template>
    <el-menu-item-group>
      <span slot="title">Group Un</span>
      <el-menu-item index="1-1">item un</el-menu-item>
      <el-menu-item index="1-2">item deux</el-menu-item>
    </el-menu-item-group>
    <el-menu-item-group title="Group Deux">
      <el-menu-item index="1-3">item trois</el-menu-item>
    </el-menu-item-group>
    <el-submenu index="1-4">
      <span slot="title">item quatre</span>
      <el-menu-item index="1-4-1">item un</el-menu-item>
    </el-submenu>
  </el-submenu>
  <el-menu-item index="2">
    <i class="el-icon-menu"></i>
    <span slot="title">Navigateur Deux</span>
  </el-menu-item>
  <el-menu-item index="3" disabled>
    <i class="el-icon-document"></i>
    <span slot="title">Navigateur Trois</span>
  </el-menu-item>
  <el-menu-item index="4">
    <i class="el-icon-setting"></i>
    <span slot="title">Navigateur Quatre</span>
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
  &lt;el-radio-button :label=&quot;false&quot;&gt;Agrandir&lt;/el-radio-button&gt;
  &lt;el-radio-button :label=&quot;true&quot;&gt;Réduire&lt;/el-radio-button&gt;
&lt;/el-radio-group&gt;
&lt;el-menu default-active=&quot;2&quot; class=&quot;el-menu-vertical-demo&quot; @open=&quot;handleOpen&quot; @close=&quot;handleClose&quot; :collapse=&quot;isCollapse&quot;&gt;
  &lt;el-submenu index=&quot;1&quot;&gt;
    &lt;template slot=&quot;title&quot;&gt;
      &lt;i class=&quot;el-icon-location&quot;&gt;&lt;/i&gt;
      &lt;span slot=&quot;title&quot;&gt;Navigateur Un&lt;/span&gt;
    &lt;/template&gt;
    &lt;el-menu-item-group&gt;
      &lt;span slot=&quot;title&quot;&gt;Group Un&lt;/span&gt;
      &lt;el-menu-item index=&quot;1-1&quot;&gt;item un&lt;/el-menu-item&gt;
      &lt;el-menu-item index=&quot;1-2&quot;&gt;item deux&lt;/el-menu-item&gt;
    &lt;/el-menu-item-group&gt;
    &lt;el-menu-item-group title=&quot;Group Deux&quot;&gt;
      &lt;el-menu-item index=&quot;1-3&quot;&gt;item trois&lt;/el-menu-item&gt;
    &lt;/el-menu-item-group&gt;
    &lt;el-submenu index=&quot;1-4&quot;&gt;
      &lt;span slot=&quot;title&quot;&gt;item quatre&lt;/span&gt;
      &lt;el-menu-item index=&quot;1-4-1&quot;&gt;item un&lt;/el-menu-item&gt;
    &lt;/el-submenu&gt;
  &lt;/el-submenu&gt;
  &lt;el-menu-item index=&quot;2&quot;&gt;
    &lt;i class=&quot;el-icon-menu&quot;&gt;&lt;/i&gt;
    &lt;span slot=&quot;title&quot;&gt;Navigateur Deux&lt;/span&gt;
  &lt;/el-menu-item&gt;
  &lt;el-menu-item index=&quot;3&quot; disabled&gt;
    &lt;i class=&quot;el-icon-document&quot;&gt;&lt;/i&gt;
    &lt;span slot=&quot;title&quot;&gt;Navigateur Trois&lt;/span&gt;
  &lt;/el-menu-item&gt;
  &lt;el-menu-item index=&quot;4&quot;&gt;
    &lt;i class=&quot;el-icon-setting&quot;&gt;&lt;/i&gt;
    &lt;span slot=&quot;title&quot;&gt;Navigateur Quatre&lt;/span&gt;
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
</code></pre></template></demo-block><h3 id="attributs-du-menu"><a class="header-anchor" href="#attributs-du-menu">¶</a> Attributs du menu</h3>
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
<td>mode</td>
<td>Mode d'affichage du menu.</td>
<td>string</td>
<td>horizontal / vertical</td>
<td>vertical</td>
</tr>
<tr>
<td>collapse</td>
<td>Si le menu peut être réduit, uniquement disponible en mode vertical.</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>background-color</td>
<td>Couleur de fond du menu (format hexadécimal).</td>
<td>string</td>
<td>—</td>
<td>#ffffff</td>
</tr>
<tr>
<td>text-color</td>
<td>Couleur du texte du menu (format hexadécimal)</td>
<td>string</td>
<td>—</td>
<td>#303133</td>
</tr>
<tr>
<td>active-text-color</td>
<td>Couleur du texte de l'item actif (format hexadécimal).</td>
<td>string</td>
<td>—</td>
<td>#409EFF</td>
</tr>
<tr>
<td>default-active</td>
<td>Index du menu actif.</td>
<td>string</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>default-openeds</td>
<td>Liste contenant les index les sous-menus actifs.</td>
<td>Array</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>unique-opened</td>
<td>Si un seul sous-menu peut être actif.</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>menu-trigger</td>
<td>Comment les sous-menu sont déclenchés, uniquement en mode horizontal.</td>
<td>string</td>
<td>hover / click</td>
<td>hover</td>
</tr>
<tr>
<td>router</td>
<td>Si le mode <code>vue-router</code> est activé. Si <code>true</code>, l'index sera utilisé comme 'path' pour activer la route.</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>collapse-transition</td>
<td>Si la transition de réduction doit être activée.</td>
<td>boolean</td>
<td>—</td>
<td>true</td>
</tr>
</tbody>
</table>
<h3 id="methodes-du-menu"><a class="header-anchor" href="#methodes-du-menu">¶</a> Méthodes du menu</h3>
<table>
<thead>
<tr>
<th>Nom</th>
<th>Description</th>
<th>Paramètres</th>
</tr>
</thead>
<tbody>
<tr>
<td>open</td>
<td>Ouvre un sous-menu spécifique.</td>
<td>index: index du sous-menu à ouvrir</td>
</tr>
<tr>
<td>close</td>
<td>Ferme un sous-menu spécifique.</td>
<td>index: index du sous-menu à fermer</td>
</tr>
</tbody>
</table>
<h3 id="evenements-du-menu"><a class="header-anchor" href="#evenements-du-menu">¶</a> Évènements du menu</h3>
<table>
<thead>
<tr>
<th>Nom</th>
<th>Description</th>
<th>Paramètres</th>
</tr>
</thead>
<tbody>
<tr>
<td>select</td>
<td>Fonction de callback pour quand le menu est activé.</td>
<td>index: index du menu activé, indexPath: index path du menu activé.</td>
</tr>
<tr>
<td>open</td>
<td>Fonction de callback pour quand le sous-menu s'agrandit.</td>
<td>index: index of expanded sous-menu, indexPath: index path du sous-menu</td>
</tr>
<tr>
<td>close</td>
<td>Fonction de callback pour quand le sous-menu se réduit.</td>
<td>index: index of collapsed sous-menu, indexPath: index path du sous-menu</td>
</tr>
</tbody>
</table>
<h3 id="evenements-des-items-du-menu"><a class="header-anchor" href="#evenements-des-items-du-menu">¶</a> Évènements des items du menu</h3>
<table>
<thead>
<tr>
<th>Nom</th>
<th>Description</th>
<th>Paramètres</th>
</tr>
</thead>
<tbody>
<tr>
<td>click</td>
<td>Fonction de callback pour quand le menu-item est cliqué.</td>
<td>el: instance du menu-item.</td>
</tr>
</tbody>
</table>
<h3 id="attributs-du-sous-menu"><a class="header-anchor" href="#attributs-du-sous-menu">¶</a> Attributs du sous-menu</h3>
<table>
<thead>
<tr>
<th>Attributs</th>
<th>Description</th>
<th>Type</th>
<th>Valeurs acceptées</th>
<th>Défaut</th>
</tr>
</thead>
<tbody>
<tr>
<td>index</td>
<td>Identificateur unique.</td>
<td>string</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>popper-class</td>
<td>Classe du menu popup.</td>
<td>string</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>show-timeout</td>
<td>Délai avant de montrer un sous-menu.</td>
<td>number</td>
<td>—</td>
<td>300</td>
</tr>
<tr>
<td>hide-timeout</td>
<td>Délai avant de cacher un sous-menu.</td>
<td>number</td>
<td>—</td>
<td>300</td>
</tr>
<tr>
<td>disabled</td>
<td>Si le sous-menu est désactivé.</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>popper-append-to-body</td>
<td>S'il faut ajouter un menu popup au body. Si le positionnement du body n'est pas bon, vous pouvez essayer de régler cette propriété.</td>
<td>boolean</td>
<td>-</td>
<td>Sous-menus de niveau 1: true / autres sous-menus: false</td>
</tr>
</tbody>
</table>
<h3 id="attributs-des-items-du-menu"><a class="header-anchor" href="#attributs-des-items-du-menu">¶</a> Attributs des items du menu</h3>
<table>
<thead>
<tr>
<th>Attributs</th>
<th>Description</th>
<th>Type</th>
<th>Valeurs acceptées</th>
<th>Défaut</th>
</tr>
</thead>
<tbody>
<tr>
<td>index</td>
<td>Identificateur unique.</td>
<td>string/null</td>
<td>—</td>
<td>null</td>
</tr>
<tr>
<td>route</td>
<td>Objet Vue Router.</td>
<td>object</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>disabled</td>
<td>Si l'item est désactivé.</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
</tbody>
</table>
<h3 id="attributs-des-groupes"><a class="header-anchor" href="#attributs-des-groupes">¶</a> Attributs des groupes</h3>
<table>
<thead>
<tr>
<th>Attributs</th>
<th>Description</th>
<th>Type</th>
<th>Valeurs acceptées</th>
<th>Défaut</th>
</tr>
</thead>
<tbody>
<tr>
<td>title</td>
<td>Titre du groupe.</td>
<td>string</td>
<td>—</td>
<td>—</td>
</tr>
</tbody>
</table>
