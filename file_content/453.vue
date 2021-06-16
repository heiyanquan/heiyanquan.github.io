<h2 id="input"><a class="header-anchor" href="#input">¶</a> Input</h2>
<p>Le champ d'input de base.</p>
<div class="warning">
<p>Input est un composant contrôlé, il <strong>affiche toujours la valeur liée de Vue</strong>.</p>
<p>En règle générale, l'évènement <code>input</code> devrait être géré. Son handler devrait mettre à jour la valeur du composant (ou utilisez <code>v-model</code>). Dans le cas contraire, la valeur du champ ne sera pas modifiée.</p>
<p>Les modificateurs de <code>v-model</code> ne sont pas supportés.</p>
</div>
<h3 id="usage"><a class="header-anchor" href="#usage">¶</a> Usage</h3>
<demo-block>
        
        <!--element-demo: <el-input placeholder="Entrez quelque chose" v-model="input"></el-input>

<script>
export default {
  data() {
    return {
      input: ''
    }
  }
}
</script>
:element-demo-->
        <template slot="highlight"><pre v-pre><code class="html">&lt;el-input placeholder=&quot;Entrez quelque chose&quot; v-model=&quot;input&quot;&gt;&lt;/el-input&gt;

&lt;script&gt;
export default {
  data() {
    return {
      input: ''
    }
  }
}
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="desactive"><a class="header-anchor" href="#desactive">¶</a> Désactivé</h3>
<demo-block>
        <div><p>Désactivez l'input avec l'attribut <code>disabled</code>.</p>
</div>
        <!--element-demo: <el-input
  placeholder="Entrez quelque chose"
  v-model="input"
  :disabled="true">
</el-input>

<script>
export default {
  data() {
    return {
      input: ''
    }
  }
}
</script>
:element-demo-->
        <template slot="highlight"><pre v-pre><code class="html">&lt;el-input
  placeholder=&quot;Entrez quelque chose&quot;
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
</code></pre></template></demo-block><h3 id="effacable"><a class="header-anchor" href="#effacable">¶</a> Effaçable</h3>
<demo-block>
        <div><p>Rendez l'input effaçable avec l'attribut <code>clearable</code>.</p>
</div>
        <!--element-demo: <el-input
  placeholder="Entrez quelque chose"
  v-model="input"
  clearable>
</el-input>

<script>
export default {
  data() {
    return {
      input: ''
    }
  }
}
</script>
:element-demo-->
        <template slot="highlight"><pre v-pre><code class="html">&lt;el-input
  placeholder=&quot;Entrez quelque chose&quot;
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
</code></pre></template></demo-block><h3 id="champ-de-mot-de-passe"><a class="header-anchor" href="#champ-de-mot-de-passe">¶</a> Champ de mot de passe</h3>
<demo-block>
        <div><p>Créez un champ de mot de passe avec icône de visualisation grâce à l'attribut <code>show-password</code>.</p>
</div>
        <!--element-demo: <el-input placeholder="Entrez votre mot de passe" v-model="input" show-password></el-input>

<script>
  export default {
    data() {
      return {
        input: ''
      }
    }
  }
</script>
:element-demo-->
        <template slot="highlight"><pre v-pre><code class="html">&lt;el-input placeholder=&quot;Entrez votre mot de passe&quot; v-model=&quot;input&quot; show-password&gt;&lt;/el-input&gt;

&lt;script&gt;
  export default {
    data() {
      return {
        input: ''
      }
    }
  }
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="input-avec-icone"><a class="header-anchor" href="#input-avec-icone">¶</a> Input avec icône</h3>
<p>Ajoutez une icône pour indiquer le type d'input.</p>
<demo-block>
        <div><p>Pour ajouter une icône, vous pouvez utiliser les attributs <code>prefix-icon</code> et <code>suffix-icon</code>. De plus, les slots nommés <code>prefix</code> et <code>suffix</code> fonctionnent aussi.</p>
</div>
        <!--element-demo: <div class="demo-input-suffix">
  <span class="demo-input-label">Avec les attributs</span>
  <el-input
    placeholder="Entrez une date"
    suffix-icon="el-icon-date"
    v-model="input1">
  </el-input>
  <el-input
    placeholder="Entrez du texte"
    prefix-icon="el-icon-search"
    v-model="input2">
  </el-input>
</div>
<div class="demo-input-suffix">
  <span class="demo-input-label">Avec les slots</span>
  <el-input
    placeholder="Entrez une date"
    v-model="input3">
    <i slot="suffix" class="el-input__icon el-icon-date"></i>
  </el-input>
  <el-input
    placeholder="Entrez du texte"
    v-model="input4">
    <i slot="prefix" class="el-input__icon el-icon-search"></i>
  </el-input>
</div>

<style>
  .demo-input-label {
    display: inline-block;
    width: 130px;
  }
</style>

<script>
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
</script>
:element-demo-->
        <template slot="highlight"><pre v-pre><code class="html">&lt;div class=&quot;demo-input-suffix&quot;&gt;
  &lt;span class=&quot;demo-input-label&quot;&gt;Avec les attributs&lt;/span&gt;
  &lt;el-input
    placeholder=&quot;Entrez une date&quot;
    suffix-icon=&quot;el-icon-date&quot;
    v-model=&quot;input1&quot;&gt;
  &lt;/el-input&gt;
  &lt;el-input
    placeholder=&quot;Entrez du texte&quot;
    prefix-icon=&quot;el-icon-search&quot;
    v-model=&quot;input2&quot;&gt;
  &lt;/el-input&gt;
&lt;/div&gt;
&lt;div class=&quot;demo-input-suffix&quot;&gt;
  &lt;span class=&quot;demo-input-label&quot;&gt;Avec les slots&lt;/span&gt;
  &lt;el-input
    placeholder=&quot;Entrez une date&quot;
    v-model=&quot;input3&quot;&gt;
    &lt;i slot=&quot;suffix&quot; class=&quot;el-input__icon el-icon-date&quot;&gt;&lt;/i&gt;
  &lt;/el-input&gt;
  &lt;el-input
    placeholder=&quot;Entrez du texte&quot;
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
</code></pre></template></demo-block><h3 id="zone-de-texte"><a class="header-anchor" href="#zone-de-texte">¶</a> Zone de texte</h3>
<p>Une zone de texte de taille réglable à la souris pour écrire plusieurs lignes. Ajoutez l'attribut <code>type=&quot;textarea&quot;</code> pour changer <code>input</code> en un <code>textarea</code> natif.</p>
<demo-block>
        <div><p>Réglez la hauteur grâce à la propriété <code>rows</code>.</p>
</div>
        <!--element-demo: <el-input
  type="textarea"
  :rows="2"
  placeholder="Entrez quelque chose"
  v-model="textarea">
</el-input>

<script>
export default {
  data() {
    return {
      textarea: ''
    }
  }
}
</script>
:element-demo-->
        <template slot="highlight"><pre v-pre><code class="html">&lt;el-input
  type=&quot;textarea&quot;
  :rows=&quot;2&quot;
  placeholder=&quot;Entrez quelque chose&quot;
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
</code></pre></template></demo-block><h3 id="zone-de-texte-avec-taille-automatique"><a class="header-anchor" href="#zone-de-texte-avec-taille-automatique">¶</a> Zone de texte avec taille automatique</h3>
<p>Configurer la propriété <code>autosize</code> pour une zone de texte permet de rendre la hauteur automatique en fonction de la taille du texte. Un objet options pour être fournit à <code>autosize</code> les nombres minimal et maximal de lignes.</p>
<demo-block>
        
        <!--element-demo: <el-input
  type="textarea"
  autosize
  placeholder="Entrez quelque chose"
  v-model="textarea1">
</el-input>
<div style="margin: 20px 0;"></div>
<el-input
  type="textarea"
  :autosize="{ minRows: 2, maxRows: 4}"
  placeholder="Entrez quelque chose"
  v-model="textarea2">
</el-input>

<script>
export default {
  data() {
    return {
      textarea1: '',
      textarea2: ''
    }
  }
}
</script>
:element-demo-->
        <template slot="highlight"><pre v-pre><code class="html">&lt;el-input
  type=&quot;textarea&quot;
  autosize
  placeholder=&quot;Entrez quelque chose&quot;
  v-model=&quot;textarea1&quot;&gt;
&lt;/el-input&gt;
&lt;div style=&quot;margin: 20px 0;&quot;&gt;&lt;/div&gt;
&lt;el-input
  type=&quot;textarea&quot;
  :autosize=&quot;{ minRows: 2, maxRows: 4}&quot;
  placeholder=&quot;Entrez quelque chose&quot;
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
</code></pre></template></demo-block><h3 id="input-mixte"><a class="header-anchor" href="#input-mixte">¶</a> Input mixte</h3>
<p>Ajouter un élément avant ou après l'input, généralement du texte ou un bouton.</p>
<demo-block>
        <div><p>Utilisez <code>slot</code> pour ajouter des éléments avant ou après l'input.</p>
</div>
        <!--element-demo: <div>
  <el-input placeholder="Entrez quelque chose" v-model="input1">
    <template slot="prepend">Http://</template>
  </el-input>
</div>
<div style="margin-top: 15px;">
  <el-input placeholder="Entrez quelque chose" v-model="input2">
    <template slot="append">.com</template>
  </el-input>
</div>
<div style="margin-top: 15px;">
  <el-input placeholder="Entrez quelque chose" v-model="input3" class="input-with-select">
    <el-select v-model="select" slot="prepend" placeholder="Choisir">
      <el-option label="Restaurant" value="1"></el-option>
      <el-option label="Num. Commande" value="2"></el-option>
      <el-option label="Tel" value="3"></el-option>
    </el-select>
    <el-button slot="append" icon="el-icon-search"></el-button>
  </el-input>
</div>

<style>
  .el-select .el-input {
    width: 110px;
  }
  .input-with-select .el-input-group__prepend {
    background-color: #fff;
  }
</style>
<script>
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
</script>
:element-demo-->
        <template slot="highlight"><pre v-pre><code class="html">&lt;div&gt;
  &lt;el-input placeholder=&quot;Entrez quelque chose&quot; v-model=&quot;input1&quot;&gt;
    &lt;template slot=&quot;prepend&quot;&gt;Http://&lt;/template&gt;
  &lt;/el-input&gt;
&lt;/div&gt;
&lt;div style=&quot;margin-top: 15px;&quot;&gt;
  &lt;el-input placeholder=&quot;Entrez quelque chose&quot; v-model=&quot;input2&quot;&gt;
    &lt;template slot=&quot;append&quot;&gt;.com&lt;/template&gt;
  &lt;/el-input&gt;
&lt;/div&gt;
&lt;div style=&quot;margin-top: 15px;&quot;&gt;
  &lt;el-input placeholder=&quot;Entrez quelque chose&quot; v-model=&quot;input3&quot; class=&quot;input-with-select&quot;&gt;
    &lt;el-select v-model=&quot;select&quot; slot=&quot;prepend&quot; placeholder=&quot;Choisir&quot;&gt;
      &lt;el-option label=&quot;Restaurant&quot; value=&quot;1&quot;&gt;&lt;/el-option&gt;
      &lt;el-option label=&quot;Num. Commande&quot; value=&quot;2&quot;&gt;&lt;/el-option&gt;
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
</code></pre></template></demo-block><h3 id="tailles"><a class="header-anchor" href="#tailles">¶</a> Tailles</h3>
<demo-block>
        <div><p>Ajoutez l'attribut <code>size</code> pour changer la taille de l'input. En plus de la taille par défaut, il y a trois autres options: <code>large</code>, <code>small</code> et <code>mini</code>.</p>
</div>
        <!--element-demo: <div class="demo-input-size">
  <el-input
    placeholder="Entrez quelque chose"
    v-model="input1">
  </el-input>
  <el-input
    size="medium"
    placeholder="Entrez quelque chose"
    v-model="input2">
  </el-input>
  <el-input
    size="small"
    placeholder="Entrez quelque chose"
    v-model="input3">
  </el-input>
  <el-input
    size="mini"
    placeholder="Entrez quelque chose"
    v-model="input4">
  </el-input>
</div>

<script>
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
</script>
:element-demo-->
        <template slot="highlight"><pre v-pre><code class="html">&lt;div class=&quot;demo-input-size&quot;&gt;
  &lt;el-input
    placeholder=&quot;Entrez quelque chose&quot;
    v-model=&quot;input1&quot;&gt;
  &lt;/el-input&gt;
  &lt;el-input
    size=&quot;medium&quot;
    placeholder=&quot;Entrez quelque chose&quot;
    v-model=&quot;input2&quot;&gt;
  &lt;/el-input&gt;
  &lt;el-input
    size=&quot;small&quot;
    placeholder=&quot;Entrez quelque chose&quot;
    v-model=&quot;input3&quot;&gt;
  &lt;/el-input&gt;
  &lt;el-input
    size=&quot;mini&quot;
    placeholder=&quot;Entrez quelque chose&quot;
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
</code></pre></template></demo-block><h3 id="autocompletion"><a class="header-anchor" href="#autocompletion">¶</a> Autocomplétion</h3>
<p>Vous pouvez obtenir de l'aide ou des suggestions basées sur ce que vous entrez.</p>
<demo-block>
        <div><p>Le composant d'autocomplétion fournit des suggestions d'entrées. L'attribut <code>fetch-suggestions</code> est une méthode qui retourne les suggestions. Dans cet exemple, <code>querySearch(queryString, cb)</code> renvoie des suggestions à l'autocomplétion via <code>cb(data)</code> quand elles sont prêtes.</p>
</div>
        <!--element-demo: <el-row class="demo-autocomplete">
  <el-col :span="12">
    <div class="sub-title">Liste des suggestions au focus</div>
    <el-autocomplete
      class="inline-input"
      v-model="state1"
      :fetch-suggestions="querySearch"
      placeholder="Entrez quelque chose"
      @select="handleSelect"
    ></el-autocomplete>
  </el-col>
  <el-col :span="12">
    <div class="sub-title">Liste des suggestions à l'écriture</div>
    <el-autocomplete
      class="inline-input"
      v-model="state2"
      :fetch-suggestions="querySearch"
      placeholder="Entrez quelque chose"
      :trigger-on-focus="false"
      @select="handleSelect"
    ></el-autocomplete>
  </el-col>
</el-row>
<script>
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
        return (link) => {
          return (link.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0);
        };
      },
      loadAll() {
        return [
          { "value": "vue", "link": "https://github.com/vuejs/vue" },
          { "value": "element", "link": "https://github.com/ElemeFE/element" },
          { "value": "cooking", "link": "https://github.com/ElemeFE/cooking" },
          { "value": "mint-ui", "link": "https://github.com/ElemeFE/mint-ui" },
          { "value": "vuex", "link": "https://github.com/vuejs/vuex" },
          { "value": "vue-router", "link": "https://github.com/vuejs/vue-router" },
          { "value": "babel", "link": "https://github.com/babel/babel" }
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
</script>
:element-demo-->
        <template slot="highlight"><pre v-pre><code class="html">&lt;el-row class=&quot;demo-autocomplete&quot;&gt;
  &lt;el-col :span=&quot;12&quot;&gt;
    &lt;div class=&quot;sub-title&quot;&gt;Liste des suggestions au focus&lt;/div&gt;
    &lt;el-autocomplete
      class=&quot;inline-input&quot;
      v-model=&quot;state1&quot;
      :fetch-suggestions=&quot;querySearch&quot;
      placeholder=&quot;Entrez quelque chose&quot;
      @select=&quot;handleSelect&quot;
    &gt;&lt;/el-autocomplete&gt;
  &lt;/el-col&gt;
  &lt;el-col :span=&quot;12&quot;&gt;
    &lt;div class=&quot;sub-title&quot;&gt;Liste des suggestions à l'écriture&lt;/div&gt;
    &lt;el-autocomplete
      class=&quot;inline-input&quot;
      v-model=&quot;state2&quot;
      :fetch-suggestions=&quot;querySearch&quot;
      placeholder=&quot;Entrez quelque chose&quot;
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
</code></pre></template></demo-block><h3 id="template-personnalise"><a class="header-anchor" href="#template-personnalise">¶</a> Template personnalisé</h3>
<p>Vous pouvez personnaliser la manière dont les suggestions sont affichées.</p>
<demo-block>
        <div><p>Utilisez <code>scoped slot</code> pour personnaliser les différentes suggestions. Dans le scope, vous pouvez accéder à l'objet suggestion via la clé <code>item</code>.</p>
</div>
        <!--element-demo: <el-autocomplete
  popper-class="my-autocomplete"
  v-model="state"
  :fetch-suggestions="querySearch"
  placeholder="Entrez quelque chose"
  @select="handleSelect">
  <i
    class="el-icon-edit el-input__icon"
    slot="suffix"
    @click="handleIconClick">
  </i>
  <template slot-scope="{ item }">
    <div class="value">{{ item.value }}</div>
    <span class="link">{{ item.link }}</span>
  </template>
</el-autocomplete>

<style>
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
</style>

<script>
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
        return (link) => {
          return (link.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0);
        };
      },
      loadAll() {
        return [
          { "value": "vue", "link": "https://github.com/vuejs/vue" },
          { "value": "element", "link": "https://github.com/ElemeFE/element" },
          { "value": "cooking", "link": "https://github.com/ElemeFE/cooking" },
          { "value": "mint-ui", "link": "https://github.com/ElemeFE/mint-ui" },
          { "value": "vuex", "link": "https://github.com/vuejs/vuex" },
          { "value": "vue-router", "link": "https://github.com/vuejs/vue-router" },
          { "value": "babel", "link": "https://github.com/babel/babel" }
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
</script>
:element-demo-->
        <template slot="highlight"><pre v-pre><code class="html">&lt;el-autocomplete
  popper-class=&quot;my-autocomplete&quot;
  v-model=&quot;state&quot;
  :fetch-suggestions=&quot;querySearch&quot;
  placeholder=&quot;Entrez quelque chose&quot;
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
</code></pre></template></demo-block><h3 id="recherche-distante"><a class="header-anchor" href="#recherche-distante">¶</a> Recherche distante</h3>
<p>Vous pouvez aller chercher des infos de suggestions sur un serveur distant.</p>
<demo-block>
        
        <!--element-demo: <el-autocomplete
  v-model="state"
  :fetch-suggestions="querySearchAsync"
  placeholder="Entrez quelque chose"
  @select="handleSelect"
></el-autocomplete>
<script>
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
          { "value": "vue", "link": "https://github.com/vuejs/vue" },
          { "value": "element", "link": "https://github.com/ElemeFE/element" },
          { "value": "cooking", "link": "https://github.com/ElemeFE/cooking" },
          { "value": "mint-ui", "link": "https://github.com/ElemeFE/mint-ui" },
          { "value": "vuex", "link": "https://github.com/vuejs/vuex" },
          { "value": "vue-router", "link": "https://github.com/vuejs/vue-router" },
          { "value": "babel", "link": "https://github.com/babel/babel" }
         ];
      },
      querySearchAsync(queryString, cb) {
        var links = this.links;
        var results = queryString ? links.filter(this.createFilter(queryString)) : links;

        clearTimeout(this.timeout);
        this.timeout = setTimeout(() => {
          cb(results);
        }, 3000 * Math.random());
      },
      createFilter(queryString) {
        return (link) => {
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
</script>
:element-demo-->
        <template slot="highlight"><pre v-pre><code class="html">&lt;el-autocomplete
  v-model=&quot;state&quot;
  :fetch-suggestions=&quot;querySearchAsync&quot;
  placeholder=&quot;Entrez quelque chose&quot;
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
</code></pre></template></demo-block><h3 id="taille-limite"><a class="header-anchor" href="#taille-limite">¶</a> Taille limite</h3>
<demo-block>
        <div><p><code>maxlength</code> et <code>minlength</code> sont des attributs natifs, indiquant la taille limite de l'input. Le nombre de caractères est mesuré par la taille de la chaine Javascript. Si vous utilisez <code>maxlength</code>, vous pourrez montrer le nombre de caractères en mettant <code>show-word-limit</code> à <code>true</code>.</p>
</div>
        <!--element-demo: <el-input
  type="text"
  placeholder="Please input"
  v-model="text"
  maxlength="10"
  show-word-limit
>
</el-input>
<div style="margin: 20px 0;"></div>
<el-input
  type="textarea"
  placeholder="Please input"
  v-model="textarea"
  maxlength="30"
  show-word-limit
>
</el-input>

<script>
export default {
  data() {
    return {
      text: '',
      textarea: ''
    }
  }
}
</script>
:element-demo-->
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
</code></pre></template></demo-block><h3 id="attributs-de-l-input"><a class="header-anchor" href="#attributs-de-l-input">¶</a> Attributs de l'Input</h3>
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
<td>type</td>
<td>Type de l'input.</td>
<td>string</td>
<td>text, textarea et autres <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Form_%3Cinput%3E_types">types d'input natifs</a></td>
<td>text</td>
</tr>
<tr>
<td>value / v-model</td>
<td>Variable liée.</td>
<td>string / number</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>maxlength</td>
<td>Identique à <code>maxlength</code> dans l'input natif.</td>
<td>number</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>minlength</td>
<td>Identique à <code>minlength</code> dans l'input natif.</td>
<td>number</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>show-word-limit</td>
<td>Affiche le nombre de caractères restant， ne marche que lorsque <code>type</code> est 'text' ou 'textarea'.</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>placeholder</td>
<td>Placeholder de l' Input.</td>
<td>string</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>clearable</td>
<td>Si le bouton de reset apparaît.</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>show-password</td>
<td>Si le champ doit un champ de mot de passe avec bouton de visualisation.</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>disabled</td>
<td>Si le champ est désactivé.</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>size</td>
<td>Taille du champ, marche quand <code>type</code> n'est pas 'textarea'.</td>
<td>string</td>
<td>medium / small / mini</td>
<td>—</td>
</tr>
<tr>
<td>prefix-icon</td>
<td>Classe de l'icône de préfixe.</td>
<td>string</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>suffix-icon</td>
<td>Classe de l'iĉone de suffixe.</td>
<td>string</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>rows</td>
<td>Nombre de ligne pour une zone de texte, ne marche que si <code>type</code> est 'textarea'.</td>
<td>number</td>
<td>—</td>
<td>2</td>
</tr>
<tr>
<td>autosize</td>
<td>Si la zone de texte à une hauteur adaptative, ne marche que si <code>type</code> est 'textarea'. Peut accepter un objet, e.g. { minRows: 2, maxRows: 6 }</td>
<td>boolean / object</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>autocomplete</td>
<td>Identique à <code>autocomplete</code> dans l'input natif.</td>
<td>string</td>
<td>on / off</td>
<td>off</td>
</tr>
<tr>
<td>auto-complete</td>
<td>@DEPRECATED dans la prochaine version majeure.</td>
<td>string</td>
<td>on/off</td>
<td>off</td>
</tr>
<tr>
<td>name</td>
<td>Identique à <code>name</code> dans l'input natif.</td>
<td>string</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>readonly</td>
<td>Identique à <code>readonly</code> dans l'input natif.</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>max</td>
<td>Identique à <code>max</code> dans l'input natif.</td>
<td>—</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>min</td>
<td>Identique à <code>min</code> dans l'input natif.</td>
<td>—</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>step</td>
<td>Identique à <code>step</code> dans l'input natif.</td>
<td>—</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>resize</td>
<td>Contrôle les changements de taille autorisés.</td>
<td>string</td>
<td>none, both, horizontal, vertical</td>
<td>—</td>
</tr>
<tr>
<td>autofocus</td>
<td>Identique à <code>autofocus</code> dans l'input natif.</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>form</td>
<td>Identique à <code>form</code> dans l'input natif.</td>
<td>string</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>label</td>
<td>Texte du label.</td>
<td>string</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>tabindex</td>
<td>tabindex de l'input.</td>
<td>string</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>validate-event</td>
<td>Si la validation doit avoir lieu.</td>
<td>boolean</td>
<td>-</td>
<td>true</td>
</tr>
</tbody>
</table>
<h3 id="slots-de-l-input"><a class="header-anchor" href="#slots-de-l-input">¶</a> Slots de l'Input</h3>
<table>
<thead>
<tr>
<th>Nom</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>prefix</td>
<td>Contenu du préfixe, ne marche que si <code>type</code> est 'text'.</td>
</tr>
<tr>
<td>suffix</td>
<td>Contenu du suffixe, ne marche que si <code>type</code> est 'text'.</td>
</tr>
<tr>
<td>prepend</td>
<td>Contenu à ajouter avant l'Input, ne marche que si <code>type</code> est 'text'.</td>
</tr>
<tr>
<td>append</td>
<td>Contenu à ajouter après l'Input, ne marche que si <code>type</code> est 'text'.</td>
</tr>
</tbody>
</table>
<h3 id="evenements"><a class="header-anchor" href="#evenements">¶</a> Évènements</h3>
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
<td>blur</td>
<td>Se déclenche quand Input perds le focus.</td>
<td>(event: Event)</td>
</tr>
<tr>
<td>focus</td>
<td>Se déclenche quand Input a le focus.</td>
<td>(event: Event)</td>
</tr>
<tr>
<td>change</td>
<td>Se déclenche quand la valeur change.</td>
<td>(value: string \ number)</td>
</tr>
<tr>
<td>change</td>
<td>Déclenché uniquement lorsque la zone de saisie perd le focus ou que l'utilisateur appuie sur Entrée.</td>
<td>(value: string | number)</td>
</tr>
<tr>
<td>input</td>
<td>Déclenché lorsque la valeur d'entrée change.</td>
<td>(value: string | number)</td>
</tr>
<tr>
<td>clear</td>
<td>Se déclenche quand le champ est effacé par le bouton de reset.</td>
<td>—</td>
</tr>
</tbody>
</table>
<h3 id="methodes-de-l-input"><a class="header-anchor" href="#methodes-de-l-input">¶</a> Méthodes de l'Input</h3>
<table>
<thead>
<tr>
<th>Méthode</th>
<th>Description</th>
<th>Paramètres</th>
</tr>
</thead>
<tbody>
<tr>
<td>focus</td>
<td>Met le focus sur le champ.</td>
<td>—</td>
</tr>
<tr>
<td>blur</td>
<td>Retire le focus de le champ.</td>
<td>—</td>
</tr>
<tr>
<td>select</td>
<td>Sélectionne le texte du champ.</td>
<td>—</td>
</tr>
</tbody>
</table>
<h3 id="attributs-de-l-autocompletion"><a class="header-anchor" href="#attributs-de-l-autocompletion">¶</a> Attributs de l'autocomplétion</h3>
<table>
<thead>
<tr>
<th>Attribut</th>
<th>Description</th>
<th>Type</th>
<th>Options</th>
<th>Défaut</th>
</tr>
</thead>
<tbody>
<tr>
<td>placeholder</td>
<td>Le placeholder de l'autocomplétion.</td>
<td>string</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>clearable</td>
<td>Si un bouton d'effacement doit apparaître.</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>disabled</td>
<td>Si l'autocomplétion est déactivée.</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>value-key</td>
<td>Nom de la clé de l'objet suggestion pour l'affichage.</td>
<td>string</td>
<td>—</td>
<td>value</td>
</tr>
<tr>
<td>icon</td>
<td>Nom de l'icône.</td>
<td>string</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>value</td>
<td>Variable liée.</td>
<td>string</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>debounce</td>
<td>Délai d'attente après écriture, en millisecondes.</td>
<td>number</td>
<td>—</td>
<td>300</td>
</tr>
<tr>
<td>placement</td>
<td>Emplacement du menu popup.</td>
<td>string</td>
<td>top / top-start / top-end / bottom / bottom-start / bottom-end</td>
<td>bottom-start</td>
</tr>
<tr>
<td>fetch-suggestions</td>
<td>La méthode pour rechercher les suggestions. Lorsqu'elles sont prêtes, appelle <code>callback(data:[])</code> pour les renvoyer à l'autocomplétion.</td>
<td>Function(queryString, callback)</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>popper-class</td>
<td>Nom de classe pour le menu de l'autocomplétion.</td>
<td>string</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>trigger-on-focus</td>
<td>Si les suggestions doivent apparaître quand l'input a le focus.</td>
<td>boolean</td>
<td>—</td>
<td>true</td>
</tr>
<tr>
<td>name</td>
<td>Identique à <code>name</code> dans l'input natif.</td>
<td>string</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>select-when-unmatched</td>
<td>Si un évènement <code>select</code> doit être émis après pression sur entrée quand il n'y a pas de résultats.</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>label</td>
<td>Texte du label.</td>
<td>string</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>prefix-icon</td>
<td>Classe de l'icône de préfixe.</td>
<td>string</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>suffix-icon</td>
<td>Classe de l'iĉone de suffixe.</td>
<td>string</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>hide-loading</td>
<td>Si l'icône de chargement doit être cachée dans le cas d'une recherche distante.</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>popper-append-to-body</td>
<td>Si le menu doit être ajouter au body. Si le positionnement du menu est incorrect, essayez de mettre cette propriété à <code>false</code>.</td>
<td>boolean</td>
<td>-</td>
<td>true</td>
</tr>
<tr>
<td>highlight-first-item</td>
<td>Si la première suggestion de la liste issue de la recherche distante doit être en surbrillance par défaut.</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
</tbody>
</table>
<h3 id="slots-de-l-autocompletion"><a class="header-anchor" href="#slots-de-l-autocompletion">¶</a> Slots de l'autocomplétion</h3>
<table>
<thead>
<tr>
<th>Nom</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>prefix</td>
<td>Contenu du préfixe.</td>
</tr>
<tr>
<td>suffix</td>
<td>Contenu du suffixe.</td>
</tr>
<tr>
<td>prepend</td>
<td>Contenu à ajouter avant le champ.</td>
</tr>
<tr>
<td>append</td>
<td>Contenu à ajouter après le champ.</td>
</tr>
</tbody>
</table>
<h3 id="template-personnalise-pour-l-autocompletion"><a class="header-anchor" href="#template-personnalise-pour-l-autocompletion">¶</a> Template personnalisé pour l'autocomplétion</h3>
<table>
<thead>
<tr>
<th>Nom</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>—</td>
<td>Contenu personnalisé pour les suggestions. Le paramètre de scope est { item }.</td>
</tr>
</tbody>
</table>
<h3 id="evenements-de-l-autocompletion"><a class="header-anchor" href="#evenements-de-l-autocompletion">¶</a> Évènements de l'autocomplétion</h3>
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
<td>Se déclenche quand une suggestion est cliquée.</td>
<td>La suggestion sélectionnée.</td>
</tr>
<tr>
<td>change</td>
<td>Se déclenche quand la valeur change.</td>
<td>(value: string \ number)</td>
</tr>
</tbody>
</table>
<h3 id="methodes-de-l-autocompletion"><a class="header-anchor" href="#methodes-de-l-autocompletion">¶</a> Méthodes de l'autocomplétion</h3>
<table>
<thead>
<tr>
<th>Méthode</th>
<th>Description</th>
<th>Paramètres</th>
</tr>
</thead>
<tbody>
<tr>
<td>focus</td>
<td>Met le focus sur l'élément.</td>
<td>—</td>
</tr>
</tbody>
</table>
