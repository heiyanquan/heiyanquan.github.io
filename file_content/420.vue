<h2 id="progress"><a class="header-anchor" href="#progress">¶</a> Progress</h2>
<p>Progress est utilisé pour afficher la progression d'une opération et informer l'utilisateur de son status actuel.</p>
<h3 id="barre-de-progression-lineaire"><a class="header-anchor" href="#barre-de-progression-lineaire">¶</a> Barre de progression linéaire</h3>
<demo-block>
        <div><p>Utilisez l'attribut <code>percentage</code> pour indiquer le pourcentage. Cet attribut est <strong>requis</strong> et doit être compris entre 0 et 100. Vous pouvez personnaliser le format du texte en définissant le <code>format</code>.</p>
</div>
        <!--element-demo: <el-progress :percentage="50"></el-progress>
<el-progress :percentage="100" :format="format"></el-progress>
<el-progress :percentage="100" status="success"></el-progress>
<el-progress :percentage="100" status="warning"></el-progress>
<el-progress :percentage="50" status="exception"></el-progress>

<script>
  export default {
    methods: {
      format(percentage) {
        return percentage === 100 ? 'Full' : `${percentage}%`;
      }
    }
  };
</script>
:element-demo-->
        <template slot="highlight"><pre v-pre><code class="html">&lt;el-progress :percentage=&quot;50&quot;&gt;&lt;/el-progress&gt;
&lt;el-progress :percentage=&quot;100&quot; :format=&quot;format&quot;&gt;&lt;/el-progress&gt;
&lt;el-progress :percentage=&quot;100&quot; status=&quot;success&quot;&gt;&lt;/el-progress&gt;
&lt;el-progress :percentage=&quot;100&quot; status=&quot;warning&quot;&gt;&lt;/el-progress&gt;
&lt;el-progress :percentage=&quot;50&quot; status=&quot;exception&quot;&gt;&lt;/el-progress&gt;

&lt;script&gt;
  export default {
    methods: {
      format(percentage) {
        return percentage === 100 ? 'Full' : `${percentage}%`;
      }
    }
  };
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="pourcentage-interne"><a class="header-anchor" href="#pourcentage-interne">¶</a> Pourcentage interne</h3>
<p>Dans ce cas le pourcentage ne prends pas de place en plus.</p>
<demo-block>
        <div><p>L'attribut <code>stroke-width</code> détermine le <code>width</code> de la barre de progression. Utilisez <code>text-inside</code> mettre la description à l'intérieur de la barre.</p>
</div>
        <!--element-demo: <el-progress :text-inside="true" :stroke-width="26" :percentage="70"></el-progress>
<el-progress :text-inside="true" :stroke-width="24" :percentage="100" status="success"></el-progress>
<el-progress :text-inside="true" :stroke-width="22" :percentage="80" status="warning"></el-progress>
<el-progress :text-inside="true" :stroke-width="20" :percentage="50" status="exception"></el-progress>
:element-demo-->
        <template slot="highlight"><pre v-pre><code class="html">&lt;el-progress :text-inside=&quot;true&quot; :stroke-width=&quot;26&quot; :percentage=&quot;70&quot;&gt;&lt;/el-progress&gt;
&lt;el-progress :text-inside=&quot;true&quot; :stroke-width=&quot;24&quot; :percentage=&quot;100&quot; status=&quot;success&quot;&gt;&lt;/el-progress&gt;
&lt;el-progress :text-inside=&quot;true&quot; :stroke-width=&quot;22&quot; :percentage=&quot;80&quot; status=&quot;warning&quot;&gt;&lt;/el-progress&gt;
&lt;el-progress :text-inside=&quot;true&quot; :stroke-width=&quot;20&quot; :percentage=&quot;50&quot; status=&quot;exception&quot;&gt;&lt;/el-progress&gt;
</code></pre></template></demo-block><h3 id="couleur-personnalisee"><a class="header-anchor" href="#couleur-personnalisee">¶</a> Couleur personnalisée</h3>
<p>Vous pouvez utiliser l'attribut <code>color</code> pour définir la couleur de la barre de progression. il accepte une couleur, une fonction ou un tableau.</p>
<demo-block>
        
        <!--element-demo: <el-progress :percentage="percentage" :color="customColor"></el-progress>

<el-progress :percentage="percentage" :color="customColorMethod"></el-progress>

<el-progress :percentage="percentage" :color="customColors"></el-progress>
<div>
  <el-button-group>
    <el-button icon="el-icon-minus" @click="decrease"></el-button>
    <el-button icon="el-icon-plus" @click="increase"></el-button>
  </el-button-group>
</div>

<script>
  export default {
    data() {
      return {
        percentage: 20,
        customColor: '#409eff',
        customColors: [
          {color: '#f56c6c', percentage: 20},
          {color: '#e6a23c', percentage: 40},
          {color: '#5cb87a', percentage: 60},
          {color: '#1989fa', percentage: 80},
          {color: '#6f7ad3', percentage: 100}
        ]
      };
    },
    methods: {
      customColorMethod(percentage) {
        if (percentage < 30) {
          return '#909399';
        } else if (percentage < 70) {
          return '#e6a23c';
        } else {
          return '#67c23a';
        }
      },
      increase() {
        this.percentage += 10;
        if (this.percentage > 100) {
          this.percentage = 100;
        }
      },
      decrease() {
        this.percentage -= 10;
        if (this.percentage < 0) {
          this.percentage = 0;
        }
      }
    }
  }
</script>
:element-demo-->
        <template slot="highlight"><pre v-pre><code class="html">&lt;el-progress :percentage=&quot;percentage&quot; :color=&quot;customColor&quot;&gt;&lt;/el-progress&gt;

&lt;el-progress :percentage=&quot;percentage&quot; :color=&quot;customColorMethod&quot;&gt;&lt;/el-progress&gt;

&lt;el-progress :percentage=&quot;percentage&quot; :color=&quot;customColors&quot;&gt;&lt;/el-progress&gt;
&lt;div&gt;
  &lt;el-button-group&gt;
    &lt;el-button icon=&quot;el-icon-minus&quot; @click=&quot;decrease&quot;&gt;&lt;/el-button&gt;
    &lt;el-button icon=&quot;el-icon-plus&quot; @click=&quot;increase&quot;&gt;&lt;/el-button&gt;
  &lt;/el-button-group&gt;
&lt;/div&gt;

&lt;script&gt;
  export default {
    data() {
      return {
        percentage: 20,
        customColor: '#409eff',
        customColors: [
          {color: '#f56c6c', percentage: 20},
          {color: '#e6a23c', percentage: 40},
          {color: '#5cb87a', percentage: 60},
          {color: '#1989fa', percentage: 80},
          {color: '#6f7ad3', percentage: 100}
        ]
      };
    },
    methods: {
      customColorMethod(percentage) {
        if (percentage &lt; 30) {
          return '#909399';
        } else if (percentage &lt; 70) {
          return '#e6a23c';
        } else {
          return '#67c23a';
        }
      },
      increase() {
        this.percentage += 10;
        if (this.percentage &gt; 100) {
          this.percentage = 100;
        }
      },
      decrease() {
        this.percentage -= 10;
        if (this.percentage &lt; 0) {
          this.percentage = 0;
        }
      }
    }
  }
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="barre-de-progression-circulaire"><a class="header-anchor" href="#barre-de-progression-circulaire">¶</a> Barre de progression circulaire</h3>
<demo-block>
        <div><p>Vous pouvez mettre l'attribut <code>type</code> à <code>circle</code> pour obtenir une barre circulaire, et utiliser <code>width</code> pour changer la taille du cercle.</p>
</div>
        <!--element-demo: <el-progress type="circle" :percentage="0"></el-progress>
<el-progress type="circle" :percentage="25"></el-progress>
<el-progress type="circle" :percentage="100" status="success"></el-progress>
<el-progress type="circle" :percentage="70" status="warning"></el-progress>
<el-progress type="circle" :percentage="50" status="exception"></el-progress>
:element-demo-->
        <template slot="highlight"><pre v-pre><code class="html">&lt;el-progress type=&quot;circle&quot; :percentage=&quot;0&quot;&gt;&lt;/el-progress&gt;
&lt;el-progress type=&quot;circle&quot; :percentage=&quot;25&quot;&gt;&lt;/el-progress&gt;
&lt;el-progress type=&quot;circle&quot; :percentage=&quot;100&quot; status=&quot;success&quot;&gt;&lt;/el-progress&gt;
&lt;el-progress type=&quot;circle&quot; :percentage=&quot;70&quot; status=&quot;warning&quot;&gt;&lt;/el-progress&gt;
&lt;el-progress type=&quot;circle&quot; :percentage=&quot;50&quot; status=&quot;exception&quot;&gt;&lt;/el-progress&gt;
</code></pre></template></demo-block><h3 id="barre-de-progression-du-tableau-de-bord"><a class="header-anchor" href="#barre-de-progression-du-tableau-de-bord">¶</a> Barre de progression du tableau de bord</h3>
<p>Vous pouvez également spécifier l'attribut <code>type</code> de <code>dashboard</code> pour utiliser la barre de progression du tableau de bord.</p>
<demo-block>
        
        <!--element-demo: <el-progress type="dashboard" :percentage="percentage" :color="colors"></el-progress>
<div>
  <el-button-group>
    <el-button icon="el-icon-minus" @click="decrease"></el-button>
    <el-button icon="el-icon-plus" @click="increase"></el-button>
  </el-button-group>
</div>

<script>
  export default {
    data() {
      return {
        percentage: 10,
        colors: [
          {color: '#f56c6c', percentage: 20},
          {color: '#e6a23c', percentage: 40},
          {color: '#5cb87a', percentage: 60},
          {color: '#1989fa', percentage: 80},
          {color: '#6f7ad3', percentage: 100}
        ]
      };
    },
    methods: {
      increase() {
        this.percentage += 10;
        if (this.percentage > 100) {
          this.percentage = 100;
        }
      },
      decrease() {
        this.percentage -= 10;
        if (this.percentage < 0) {
          this.percentage = 0;
        }
      }
    }
  }
</script>
:element-demo-->
        <template slot="highlight"><pre v-pre><code class="html">&lt;el-progress type=&quot;dashboard&quot; :percentage=&quot;percentage&quot; :color=&quot;colors&quot;&gt;&lt;/el-progress&gt;
&lt;div&gt;
  &lt;el-button-group&gt;
    &lt;el-button icon=&quot;el-icon-minus&quot; @click=&quot;decrease&quot;&gt;&lt;/el-button&gt;
    &lt;el-button icon=&quot;el-icon-plus&quot; @click=&quot;increase&quot;&gt;&lt;/el-button&gt;
  &lt;/el-button-group&gt;
&lt;/div&gt;

&lt;script&gt;
  export default {
    data() {
      return {
        percentage: 10,
        colors: [
          {color: '#f56c6c', percentage: 20},
          {color: '#e6a23c', percentage: 40},
          {color: '#5cb87a', percentage: 60},
          {color: '#1989fa', percentage: 80},
          {color: '#6f7ad3', percentage: 100}
        ]
      };
    },
    methods: {
      increase() {
        this.percentage += 10;
        if (this.percentage &gt; 100) {
          this.percentage = 100;
        }
      },
      decrease() {
        this.percentage -= 10;
        if (this.percentage &lt; 0) {
          this.percentage = 0;
        }
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
<td><strong>percentage</strong></td>
<td>Le pourcentage, <strong>requis</strong>.</td>
<td>number</td>
<td>0-100</td>
<td>0</td>
</tr>
<tr>
<td>type</td>
<td>Le type de barre.</td>
<td>string</td>
<td>line/circle/dashboard</td>
<td>line</td>
</tr>
<tr>
<td>stroke-width</td>
<td>La largeur de la barre.</td>
<td>number</td>
<td>—</td>
<td>6</td>
</tr>
<tr>
<td>text-inside</td>
<td>Si le pourcentage doit être à l'intérieur de la barre, ne marche que si <code>type</code> est 'line'.</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>status</td>
<td>Le statut actuel de la progression.</td>
<td>string</td>
<td>success/exception/text</td>
<td>—</td>
</tr>
<tr>
<td>color</td>
<td>La couleur de fon de la barre. Écrase <code>status</code>.</td>
<td>string/function/array</td>
<td>—</td>
<td>''</td>
</tr>
<tr>
<td>width</td>
<td>La largeur du canvas dans le cas d'une barre circulaire.</td>
<td>number</td>
<td>—</td>
<td>126</td>
</tr>
<tr>
<td>show-text</td>
<td>Si le pourcentage doit être affiché.</td>
<td>boolean</td>
<td>—</td>
<td>true</td>
</tr>
<tr>
<td>stroke-linecap</td>
<td>circle/dashboard type shape at the end path</td>
<td>string</td>
<td>butt/round/square</td>
<td>round</td>
</tr>
<tr>
<td>format</td>
<td>Vous pouvez personnaliser le format du texte en définissant le format</td>
<td>function(percentage)</td>
<td>—</td>
<td>—</td>
</tr>
</tbody>
</table>
