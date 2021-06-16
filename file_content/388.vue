<h2 id="tag"><a class="header-anchor" href="#tag">¶</a> Tag</h2>
<p>Les tags sont utiles sont marquer certaines données afin d'ajouter des informations et de les retrouver plus facilement.</p>
<h3 id="usage"><a class="header-anchor" href="#usage">¶</a> Usage</h3>
<demo-block>
        <div><p>Utilisez l'attribut <code>type</code> pour définir le type de tag. De plus, l'attribut <code>color</code> détermine la couleur de fond.</p>
</div>
        <!--element-demo: <el-tag>Tag 1</el-tag>
<el-tag type="success">Tag 2</el-tag>
<el-tag type="info">Tag 3</el-tag>
<el-tag type="warning">Tag 4</el-tag>
<el-tag type="danger">Tag 5</el-tag>
:element-demo-->
        <template slot="highlight"><pre v-pre><code class="html">&lt;el-tag&gt;Tag 1&lt;/el-tag&gt;
&lt;el-tag type=&quot;success&quot;&gt;Tag 2&lt;/el-tag&gt;
&lt;el-tag type=&quot;info&quot;&gt;Tag 3&lt;/el-tag&gt;
&lt;el-tag type=&quot;warning&quot;&gt;Tag 4&lt;/el-tag&gt;
&lt;el-tag type=&quot;danger&quot;&gt;Tag 5&lt;/el-tag&gt;
</code></pre></template></demo-block><h3 id="supprimer-des-tags"><a class="header-anchor" href="#supprimer-des-tags">¶</a> Supprimer des tags</h3>
<demo-block>
        <div><p>L'attribut <code>closable</code> détermine si un tag est supprimable grâce à un <code>Boolean</code>. Par défaut la suppression bénéficie d'un animation de fading. Utilisez <code>disable-transitions</code> si vous ne souhaitez pas d'animations en utilisant un <code>Boolean</code> à <code>true</code>. L'évènement <code>close</code> se déclenche quand un tag est supprimé.</p>
</div>
        <!--element-demo: <el-tag
  v-for="tag in tags"
  :key="tag.name"
  closable
  :type="tag.type">
  {{tag.name}}
</el-tag>

<script>
  export default {
    data() {
      return {
        tags: [
          { name: 'Tag 1', type: '' },
          { name: 'Tag 2', type: 'success' },
          { name: 'Tag 3', type: 'info' },
          { name: 'Tag 4', type: 'warning' },
          { name: 'Tag 5', type: 'danger' }
        ]
      };
    }
  }
</script>
:element-demo-->
        <template slot="highlight"><pre v-pre><code class="html">&lt;el-tag
  v-for=&quot;tag in tags&quot;
  :key=&quot;tag.name&quot;
  closable
  :type=&quot;tag.type&quot;&gt;
  {{tag.name}}
&lt;/el-tag&gt;

&lt;script&gt;
  export default {
    data() {
      return {
        tags: [
          { name: 'Tag 1', type: '' },
          { name: 'Tag 2', type: 'success' },
          { name: 'Tag 3', type: 'info' },
          { name: 'Tag 4', type: 'warning' },
          { name: 'Tag 5', type: 'danger' }
        ]
      };
    }
  }
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="edition-dynamique"><a class="header-anchor" href="#edition-dynamique">¶</a> Édition dynamique</h3>
<p>Vous pouvez utiliser l'évènement <code>close</code> pour ajouter et supprimer des tags dynamiquement.</p>
<demo-block>
        
        <!--element-demo: <el-tag
  :key="tag"
  v-for="tag in dynamicTags"
  closable
  :disable-transitions="false"
  @close="handleClose(tag)">
  {{tag}}
</el-tag>
<el-input
  class="input-new-tag"
  v-if="inputVisible"
  v-model="inputValue"
  ref="saveTagInput"
  size="mini"
  @keyup.enter.native="handleInputConfirm"
  @blur="handleInputConfirm"
>
</el-input>
<el-button v-else class="button-new-tag" size="small" @click="showInput">+ Nouveau Tag</el-button>

<style>
  .el-tag + .el-tag {
    margin-left: 10px;
  }
  .button-new-tag {
    margin-left: 10px;
    height: 32px;
    line-height: 30px;
    padding-top: 0;
    padding-bottom: 0;
  }
  .input-new-tag {
    width: 90px;
    margin-left: 10px;
    vertical-align: bottom;
  }
</style>

<script>
  export default {
    data() {
      return {
        dynamicTags: ['Tag 1', 'Tag 2', 'Tag 3'],
        inputVisible: false,
        inputValue: ''
      };
    },
    methods: {
      handleClose(tag) {
        this.dynamicTags.splice(this.dynamicTags.indexOf(tag), 1);
      },

      showInput() {
        this.inputVisible = true;
        this.$nextTick(_ => {
          this.$refs.saveTagInput.$refs.input.focus();
        });
      },

      handleInputConfirm() {
        let inputValue = this.inputValue;
        if (inputValue) {
          this.dynamicTags.push(inputValue);
        }
        this.inputVisible = false;
        this.inputValue = '';
      }
    }
  }
</script>
:element-demo-->
        <template slot="highlight"><pre v-pre><code class="html">&lt;el-tag
  :key=&quot;tag&quot;
  v-for=&quot;tag in dynamicTags&quot;
  closable
  :disable-transitions=&quot;false&quot;
  @close=&quot;handleClose(tag)&quot;&gt;
  {{tag}}
&lt;/el-tag&gt;
&lt;el-input
  class=&quot;input-new-tag&quot;
  v-if=&quot;inputVisible&quot;
  v-model=&quot;inputValue&quot;
  ref=&quot;saveTagInput&quot;
  size=&quot;mini&quot;
  @keyup.enter.native=&quot;handleInputConfirm&quot;
  @blur=&quot;handleInputConfirm&quot;
&gt;
&lt;/el-input&gt;
&lt;el-button v-else class=&quot;button-new-tag&quot; size=&quot;small&quot; @click=&quot;showInput&quot;&gt;+ Nouveau Tag&lt;/el-button&gt;

&lt;style&gt;
  .el-tag + .el-tag {
    margin-left: 10px;
  }
  .button-new-tag {
    margin-left: 10px;
    height: 32px;
    line-height: 30px;
    padding-top: 0;
    padding-bottom: 0;
  }
  .input-new-tag {
    width: 90px;
    margin-left: 10px;
    vertical-align: bottom;
  }
&lt;/style&gt;

&lt;script&gt;
  export default {
    data() {
      return {
        dynamicTags: ['Tag 1', 'Tag 2', 'Tag 3'],
        inputVisible: false,
        inputValue: ''
      };
    },
    methods: {
      handleClose(tag) {
        this.dynamicTags.splice(this.dynamicTags.indexOf(tag), 1);
      },

      showInput() {
        this.inputVisible = true;
        this.$nextTick(_ =&gt; {
          this.$refs.saveTagInput.$refs.input.focus();
        });
      },

      handleInputConfirm() {
        let inputValue = this.inputValue;
        if (inputValue) {
          this.dynamicTags.push(inputValue);
        }
        this.inputVisible = false;
        this.inputValue = '';
      }
    }
  }
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="tailles"><a class="header-anchor" href="#tailles">¶</a> Tailles</h3>
<p>En plus de la taille par défaut, Tag fournit d'autres tailles pour vos composants.</p>
<demo-block>
        <div><p>Utilisez <code>size</code> pour choisir une autre taille parmi <code>medium</code>, <code>small</code> ou <code>mini</code>.</p>
</div>
        <!--element-demo: <el-tag>Défaut</el-tag>
<el-tag size="medium">Medium</el-tag>
<el-tag size="small">Small</el-tag>
<el-tag size="mini">Mini</el-tag>
:element-demo-->
        <template slot="highlight"><pre v-pre><code class="html">&lt;el-tag&gt;Défaut&lt;/el-tag&gt;
&lt;el-tag size=&quot;medium&quot;&gt;Medium&lt;/el-tag&gt;
&lt;el-tag size=&quot;small&quot;&gt;Small&lt;/el-tag&gt;
&lt;el-tag size=&quot;mini&quot;&gt;Mini&lt;/el-tag&gt;
</code></pre></template></demo-block><h3 id="theme"><a class="header-anchor" href="#theme">¶</a> Theme</h3>
<p>Les balises utilisent trois thèmes différents: <code>dark</code>, <code>light</code> et <code>plain</code></p>
<demo-block>
        <div><p>Utilisez <code>effect</code> pour changer. La valeur par défaut est <code>light</code></p>
</div>
        <!--element-demo: <div class="tag-group">
  <span class="tag-group__title">Dark</span>
  <el-tag
    v-for="item in items"
    :key="item.label"
    :type="item.type"
    effect="dark">
    {{ item.label }}
  </el-tag>
</div>
<div class="tag-group">
  <span class="tag-group__title">Plain</span>
  <el-tag
    v-for="item in items"
    :key="item.label"
    :type="item.type"
    effect="plain">
    {{ item.label }}
  </el-tag>
</div>

<script>
  export default {
    data() {
      return {
        items: [
          { type: '', label: 'Tag 1' },
          { type: 'success', label: 'Tag 2' },
          { type: 'info', label: 'Tag 3' },
          { type: 'danger', label: 'Tag 4' },
          { type: 'warning', label: 'Tag 5' }
        ]
      }
    }
  }
</script>
:element-demo-->
        <template slot="highlight"><pre v-pre><code class="html">&lt;div class=&quot;tag-group&quot;&gt;
  &lt;span class=&quot;tag-group__title&quot;&gt;Dark&lt;/span&gt;
  &lt;el-tag
    v-for=&quot;item in items&quot;
    :key=&quot;item.label&quot;
    :type=&quot;item.type&quot;
    effect=&quot;dark&quot;&gt;
    {{ item.label }}
  &lt;/el-tag&gt;
&lt;/div&gt;
&lt;div class=&quot;tag-group&quot;&gt;
  &lt;span class=&quot;tag-group__title&quot;&gt;Plain&lt;/span&gt;
  &lt;el-tag
    v-for=&quot;item in items&quot;
    :key=&quot;item.label&quot;
    :type=&quot;item.type&quot;
    effect=&quot;plain&quot;&gt;
    {{ item.label }}
  &lt;/el-tag&gt;
&lt;/div&gt;

&lt;script&gt;
  export default {
    data() {
      return {
        items: [
          { type: '', label: 'Tag 1' },
          { type: 'success', label: 'Tag 2' },
          { type: 'info', label: 'Tag 3' },
          { type: 'danger', label: 'Tag 4' },
          { type: 'warning', label: 'Tag 5' }
        ]
      }
    }
  }
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="attributs"><a class="header-anchor" href="#attributs">¶</a> Attributs</h3>
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
<td>Type du tag.</td>
<td>string</td>
<td>success/info/warning/danger</td>
<td>—</td>
</tr>
<tr>
<td>closable</td>
<td>Si le tag peut être supprimé.</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>disable-transitions</td>
<td>Si les animations sont désactivées.</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>hit</td>
<td>Si le tag à une bordure mise en valeur.</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>color</td>
<td>Couleur de fond du tag.</td>
<td>string</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>size</td>
<td>Taille du tag.</td>
<td>string</td>
<td>medium / small / mini</td>
<td>—</td>
</tr>
<tr>
<td>effect</td>
<td>component theme</td>
<td>string</td>
<td>dark / light / plain</td>
<td>light</td>
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
<td>click</td>
<td>Se déclenche quand le tag est cliqué.</td>
<td>—</td>
</tr>
<tr>
<td>close</td>
<td>Se déclenche quand le tag est supprimé.</td>
<td>—</td>
</tr>
</tbody>
</table>
