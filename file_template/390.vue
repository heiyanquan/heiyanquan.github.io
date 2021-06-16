<h2 id="table"><a class="header-anchor" href="#table">¶</a> Table</h2>
<p>Permet d'afficher de nombreuses données possédant un format similaire. Vous pouvez ainsi trier, filtrer et comparer les données de votre tableau.</p>
<h3 id="table-basique"><a class="header-anchor" href="#table-basique">¶</a> Table basique</h3>
<p>Un tableau de base pour afficher seulement.</p>
<demo-block>
        <div><p>Après avoir configuré l'attribut <code>data</code> de <code>el-table</code> avec un tableau d'objets, vous pouvez utiliser <code>prop</code> (correspondant à une clé dans chaque objet du tableau <code>data</code>) dans <code>el-table-column</code> pour insérer des données dans les colonnes, ainsi que l'attribut <code>label</code> pour définir le nom de la colonne. L'attribut <code>width</code> définit si besoin la largeur de la colonne.</p>
</div>
        <template slot="source"><element-demo0 /></template>
        <template slot="highlight"><pre v-pre><code class="html">  &lt;template&gt;
    &lt;el-table
      :data=&quot;tableData&quot;
      style=&quot;width: 100%&quot;&gt;
      &lt;el-table-column
        prop=&quot;date&quot;
        label=&quot;Date&quot;
        width=&quot;180&quot;&gt;
      &lt;/el-table-column&gt;
      &lt;el-table-column
        prop=&quot;name&quot;
        label=&quot;Nom&quot;
        width=&quot;180&quot;&gt;
      &lt;/el-table-column&gt;
      &lt;el-table-column
        prop=&quot;address&quot;
        label=&quot;Adresse&quot;&gt;
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
</code></pre></template></demo-block><h3 id="table-rayee"><a class="header-anchor" href="#table-rayee">¶</a> Table rayée</h3>
<p>Ajouter des couleurs différentes pour les lignes paires et impaires permet de lire le tableau plus facilement.</p>
<demo-block>
        <div><p>L'attribut <code>stripe</code> accepte un <code>Boolean</code>. Si <code>true</code>, le tableau sera rayé.</p>
</div>
        <template slot="source"><element-demo1 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;template&gt;
  &lt;el-table
    :data=&quot;tableData&quot;
    stripe
    style=&quot;width: 100%&quot;&gt;
    &lt;el-table-column
      prop=&quot;date&quot;
      label=&quot;Date&quot;
      width=&quot;180&quot;&gt;
    &lt;/el-table-column&gt;
    &lt;el-table-column
      prop=&quot;name&quot;
      label=&quot;Nom&quot;
      width=&quot;180&quot;&gt;
    &lt;/el-table-column&gt;
    &lt;el-table-column
      prop=&quot;address&quot;
      label=&quot;Adresse&quot;&gt;
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
</code></pre></template></demo-block><h3 id="table-avec-bordure"><a class="header-anchor" href="#table-avec-bordure">¶</a> Table avec bordure</h3>
<demo-block>
        <div><p>Par défaut, Table n'a pas de bordure verticale. Si vous en avez besoin, mettez l'attribut <code>border</code> à <code>true</code>.</p>
</div>
        <template slot="source"><element-demo2 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;template&gt;
  &lt;el-table
    :data=&quot;tableData&quot;
    border
    style=&quot;width: 100%&quot;&gt;
    &lt;el-table-column
      prop=&quot;date&quot;
      label=&quot;Date&quot;
      width=&quot;180&quot;&gt;
    &lt;/el-table-column&gt;
    &lt;el-table-column
      prop=&quot;name&quot;
      label=&quot;Nom&quot;
      width=&quot;180&quot;&gt;
    &lt;/el-table-column&gt;
    &lt;el-table-column
      prop=&quot;address&quot;
      label=&quot;Adresse&quot;&gt;
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
</code></pre></template></demo-block><h3 id="table-avec-statut"><a class="header-anchor" href="#table-avec-statut">¶</a> Table avec statut</h3>
<p>Vous pouvez mettre en valeur certaines lignes du tableau suivant leur état, comme &quot;success&quot;, &quot;information&quot;, &quot;warning&quot;, &quot;danger&quot; et d'autres.</p>
<demo-block>
        <div><p>Utilisez <code>row-class-name</code> dans <code>el-table</code> pour utiliser une fonction qui permettra ajouter des classes à certaines lignes. Vous pouvez ensuite définir les classes en question dans votre CSS.</p>
</div>
        <template slot="source"><element-demo3 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;template&gt;
  &lt;el-table
    :data=&quot;tableData&quot;
    style=&quot;width: 100%&quot;
    :row-class-name=&quot;tableRowClassName&quot;&gt;
    &lt;el-table-column
      prop=&quot;date&quot;
      label=&quot;Date&quot;
      width=&quot;180&quot;&gt;
    &lt;/el-table-column&gt;
    &lt;el-table-column
      prop=&quot;name&quot;
      label=&quot;Nom&quot;
      width=&quot;180&quot;&gt;
    &lt;/el-table-column&gt;
    &lt;el-table-column
      prop=&quot;address&quot;
      label=&quot;Adresse&quot;&gt;
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
</code></pre></template></demo-block><h3 id="table-avec-un-header-fixe"><a class="header-anchor" href="#table-avec-un-header-fixe">¶</a> Table avec un header fixe</h3>
<p>Lorsqu'il y a beaucoup de lignes, il peut être utile d'avoir un header fixe afin de ne pas perdre le nom de colonnes à mesure que l'utilisateur défile vers le bas.</p>
<demo-block>
        <div><p>En réglant l'attribut <code>height</code> de <code>el-table</code>, vous pouvez fixer le header sans avoir besoin de plus de code.</p>
</div>
        <template slot="source"><element-demo4 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;template&gt;
  &lt;el-table
    :data=&quot;tableData&quot;
    height=&quot;250&quot;
    style=&quot;width: 100%&quot;&gt;
    &lt;el-table-column
      prop=&quot;date&quot;
      label=&quot;Date&quot;
      width=&quot;180&quot;&gt;
    &lt;/el-table-column&gt;
    &lt;el-table-column
      prop=&quot;name&quot;
      label=&quot;Nom&quot;
      width=&quot;180&quot;&gt;
    &lt;/el-table-column&gt;
    &lt;el-table-column
      prop=&quot;address&quot;
      label=&quot;Adresse&quot;&gt;
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
</code></pre></template></demo-block><h3 id="table-avec-colonnes-fixes"><a class="header-anchor" href="#table-avec-colonnes-fixes">¶</a> Table avec colonnes fixes</h3>
<p>Lorsque qu'il y a beaucoup de colonnes, il peut être utile d'en fixer certaines afin de ne pas perdre de vue leurs informations à mesure que l'utilisateur défile sur les cotés.</p>
<demo-block>
        <div><p>Utilisez l'attribut <code>fixed</code> de <code>el-table-column</code> qui accepte un <code>Boolean</code>. Si <code>true</code>, la colonne sera fixée à gauche. Il accepte aussi les valeurs 'left' et 'right', indiquant de quel coté la colonne doit être fixée.</p>
</div>
        <template slot="source"><element-demo5 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;template&gt;
  &lt;el-table
    :data=&quot;tableData&quot;
    style=&quot;width: 100%&quot;&gt;
    &lt;el-table-column
      fixed
      prop=&quot;date&quot;
      label=&quot;Date&quot;
      width=&quot;150&quot;&gt;
    &lt;/el-table-column&gt;
    &lt;el-table-column
      prop=&quot;name&quot;
      label=&quot;Nom&quot;
      width=&quot;120&quot;&gt;
    &lt;/el-table-column&gt;
    &lt;el-table-column
      prop=&quot;state&quot;
      label=&quot;État&quot;
      width=&quot;120&quot;&gt;
    &lt;/el-table-column&gt;
    &lt;el-table-column
      prop=&quot;city&quot;
      label=&quot;Ville&quot;
      width=&quot;120&quot;&gt;
    &lt;/el-table-column&gt;
    &lt;el-table-column
      prop=&quot;address&quot;
      label=&quot;Adresse&quot;
      width=&quot;300&quot;&gt;
    &lt;/el-table-column&gt;
    &lt;el-table-column
      prop=&quot;zip&quot;
      label=&quot;Zip&quot;
      width=&quot;120&quot;&gt;
    &lt;/el-table-column&gt;
    &lt;el-table-column
      fixed=&quot;right&quot;
      label=&quot;Opérations&quot;
      width=&quot;120&quot;&gt;
      &lt;template slot-scope=&quot;scope&quot;&gt;
        &lt;el-button @click=&quot;handleClick&quot; type=&quot;text&quot; size=&quot;small&quot;&gt;Detail&lt;/el-button&gt;
        &lt;el-button type=&quot;text&quot; size=&quot;small&quot;&gt;Editer&lt;/el-button&gt;
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
</code></pre></template></demo-block><h3 id="table-avec-header-et-colonnes-fixes"><a class="header-anchor" href="#table-avec-header-et-colonnes-fixes">¶</a> Table avec header et colonnes fixes</h3>
<p>Si vous avez un gros volume de données à afficher, vous pouvez fixer le header et des colonnes en même temps.</p>
<demo-block>
        <div><p>Header et colonnes fixes combinant les deux exemples précédents.</p>
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
      label=&quot;Date&quot;
      width=&quot;150&quot;&gt;
    &lt;/el-table-column&gt;
    &lt;el-table-column
      prop=&quot;name&quot;
      label=&quot;Nom&quot;
      width=&quot;120&quot;&gt;
    &lt;/el-table-column&gt;
    &lt;el-table-column
      prop=&quot;state&quot;
      label=&quot;État&quot;
      width=&quot;120&quot;&gt;
    &lt;/el-table-column&gt;
    &lt;el-table-column
      prop=&quot;city&quot;
      label=&quot;Ville&quot;
      width=&quot;120&quot;&gt;
    &lt;/el-table-column&gt;
    &lt;el-table-column
      prop=&quot;address&quot;
      label=&quot;Adresse&quot;
      width=&quot;300&quot;&gt;
    &lt;/el-table-column&gt;
    &lt;el-table-column
      prop=&quot;zip&quot;
      label=&quot;Zip&quot;
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
</code></pre></template></demo-block><h3 id="hauteur-fluide-dans-une-table-avec-header-et-colonnes-fixes"><a class="header-anchor" href="#hauteur-fluide-dans-une-table-avec-header-et-colonnes-fixes">¶</a> Hauteur fluide dans une Table avec header et colonnes fixes</h3>
<p>Quand les données changent dynamiquement, vous pouvez avoir besoin d'une hauteur maximale et d'afficher une barre de défilement si besoin.</p>
<demo-block>
        <div><p>En utilisant l'attribut <code>max-height</code> de <code>el-table</code>, vous fixez le header. Le tableau ne défilera que si la hauteur des lignes dépasse cette hauteur maximale.</p>
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
      label=&quot;Date&quot;
      width=&quot;150&quot;&gt;
    &lt;/el-table-column&gt;
    &lt;el-table-column
      prop=&quot;name&quot;
      label=&quot;Nom&quot;
      width=&quot;120&quot;&gt;
    &lt;/el-table-column&gt;
    &lt;el-table-column
      prop=&quot;state&quot;
      label=&quot;État&quot;
      width=&quot;120&quot;&gt;
    &lt;/el-table-column&gt;
    &lt;el-table-column
      prop=&quot;city&quot;
      label=&quot;Ville&quot;
      width=&quot;120&quot;&gt;
    &lt;/el-table-column&gt;
    &lt;el-table-column
      prop=&quot;address&quot;
      label=&quot;Adresse&quot;
      width=&quot;300&quot;&gt;
    &lt;/el-table-column&gt;
    &lt;el-table-column
      prop=&quot;zip&quot;
      label=&quot;Zip&quot;
      width=&quot;120&quot;&gt;
    &lt;/el-table-column&gt;
    &lt;el-table-column
      fixed=&quot;right&quot;
      label=&quot;Opérations&quot;
      width=&quot;120&quot;&gt;
      &lt;template slot-scope=&quot;scope&quot;&gt;
        &lt;el-button
          @click.native.prevent=&quot;deleteRow(scope.$index, tableData)&quot;
          type=&quot;text&quot;
          size=&quot;small&quot;&gt;
          Supprimer
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
</code></pre></template></demo-block><h3 id="grouper-les-headers"><a class="header-anchor" href="#grouper-les-headers">¶</a> Grouper les headers</h3>
<p>Quand la structure du tableau est complexe, vous pouvez grouper les headers afin de montrer une hiérarchie.</p>
<demo-block>
        <div><p>Placez simplement <code>el-table-column</code> dans une autre <code>el-table-column</code>, et vous grouperez ainsi les headers.</p>
</div>
        <template slot="source"><element-demo8 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;template&gt;
  &lt;el-table
    :data=&quot;tableData&quot;
    style=&quot;width: 100%&quot;&gt;
    &lt;el-table-column
      prop=&quot;date&quot;
      label=&quot;Date&quot;
      width=&quot;150&quot;&gt;
    &lt;/el-table-column&gt;
    &lt;el-table-column label=&quot;Informations de livraison&quot;&gt;
      &lt;el-table-column
        prop=&quot;name&quot;
        label=&quot;Nom&quot;
        width=&quot;120&quot;&gt;
      &lt;/el-table-column&gt;
      &lt;el-table-column label=&quot;Informations d'adresse&quot;&gt;
        &lt;el-table-column
          prop=&quot;state&quot;
          label=&quot;État&quot;
          width=&quot;120&quot;&gt;
        &lt;/el-table-column&gt;
        &lt;el-table-column
          prop=&quot;city&quot;
          label=&quot;Ville&quot;
          width=&quot;120&quot;&gt;
        &lt;/el-table-column&gt;
        &lt;el-table-column
          prop=&quot;address&quot;
          label=&quot;Adresse&quot;
          width=&quot;300&quot;&gt;
        &lt;/el-table-column&gt;
        &lt;el-table-column
          prop=&quot;zip&quot;
          label=&quot;Zip&quot;
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
</code></pre></template></demo-block><h3 id="selecteur-simple"><a class="header-anchor" href="#selecteur-simple">¶</a> Sélecteur simple</h3>
<p>Vous pouvez activer la sélection d'une ligne.</p>
<demo-block>
        <div><p>Activez la sélection en ajoutant l'attribut <code>highlight-current-row</code>. L'évènement <code>current-change</code> se déclenchera à chaque changement de sélection, ses paramètres étant les deux lignes avant et après le changement: <code>currentRow</code> et <code>oldCurrentRow</code>. Si vous avez besoin d'afficher l'index des lignes, ajoutez une <code>el-table-column</code> avec pour <code>type</code> la valeur <code>index</code>, qui commencera à 1.</p>
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
      label=&quot;Date&quot;
      width=&quot;120&quot;&gt;
    &lt;/el-table-column&gt;
    &lt;el-table-column
      property=&quot;name&quot;
      label=&quot;Nom&quot;
      width=&quot;120&quot;&gt;
    &lt;/el-table-column&gt;
    &lt;el-table-column
      property=&quot;address&quot;
      label=&quot;Adresse&quot;&gt;
    &lt;/el-table-column&gt;
  &lt;/el-table&gt;
  &lt;div style=&quot;margin-top: 20px&quot;&gt;
    &lt;el-button @click=&quot;setCurrent(tableData[1])&quot;&gt;Sélectionner la deuxième ligne&lt;/el-button&gt;
    &lt;el-button @click=&quot;setCurrent()&quot;&gt;Effacer la sélection&lt;/el-button&gt;
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
</code></pre></template></demo-block><h3 id="selection-multiple"><a class="header-anchor" href="#selection-multiple">¶</a> Sélection multiple</h3>
<p>Vous pouvez aussi sélectionner plusieurs lignes.</p>
<demo-block>
        <div><p>Ajoutez une <code>el-table-column</code> avec son <code>type</code> à <code>selection</code>. Cet exemple utilise aussi <code>show-overflow-tooltip</code>: par défaut, si le contenu est trop long, il se séparera en plusieurs lignes. Si vous souhaitez conserver une seule ligne, utilisez <code>show-overflow-tooltip</code>, qui accepte un <code>Boolean</code>. Si <code>true</code>, le contenu non affiché s'affichera dans le tooltip lorsque la souris passera sur la case.</p>
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
      label=&quot;Date&quot;
      width=&quot;120&quot;&gt;
      &lt;template slot-scope=&quot;scope&quot;&gt;{{ scope.row.date }}&lt;/template&gt;
    &lt;/el-table-column&gt;
    &lt;el-table-column
      property=&quot;name&quot;
      label=&quot;Nom&quot;
      width=&quot;120&quot;&gt;
    &lt;/el-table-column&gt;
    &lt;el-table-column
      property=&quot;address&quot;
      label=&quot;Adresse&quot;
      show-overflow-tooltip&gt;
    &lt;/el-table-column&gt;
  &lt;/el-table&gt;
  &lt;div style=&quot;margin-top: 20px&quot;&gt;
    &lt;el-button @click=&quot;toggleSelection([tableData[1], tableData[2]])&quot;&gt;Sélectionner les deuxième et troisième lignes&lt;/el-button&gt;
    &lt;el-button @click=&quot;toggleSelection()&quot;&gt;Effacer la sélection&lt;/el-button&gt;
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
</code></pre></template></demo-block><h3 id="trier"><a class="header-anchor" href="#trier">¶</a> Trier</h3>
<p>Il est possible de trier les données afin de trouver plus facilement ce qu'on cherche.</p>
<demo-block>
        <div><p>Ajoutez l'attribut <code>sortable</code> a une colonne pour pouvoir trier cette colonne. Il accepte un <code>Boolean</code> et à <code>false</code> par défaut. Ajoutez <code>default-sort</code> pour déterminer les propriétés par défaut du tri. Pour appliquer vos propres règles, utilisez <code>sort-method</code> ou <code>sort-by</code>. Si vous avez besoin d'un tri dynamique depuis le serveur, mettez <code>sortable</code> à <code>custom</code>, et écoutez l'évènement <code>sort-change</code> de <code>Table</code>. Depuis cet évènement, vous aurez accès à la colonne et l'ordre de tri. cet exemple utilise aussi <code>formatter</code> pour formater les valeurs de colonnes. Il prend une fonction avec deux paramètres: <code>row</code> et <code>column</code>. Vous pouvez ainsi transformer les valeurs.</p>
</div>
        <template slot="source"><element-demo11 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;template&gt;
  &lt;el-table
    :data=&quot;tableData&quot;
    :default-sort = &quot;{prop: 'date', order: 'descending'}&quot;
    style=&quot;width: 100%&quot;&gt;
    &lt;el-table-column
      prop=&quot;date&quot;
      label=&quot;Date&quot;
      sortable
      width=&quot;180&quot;&gt;
    &lt;/el-table-column&gt;
    &lt;el-table-column
      prop=&quot;name&quot;
      label=&quot;Nom&quot;
      width=&quot;180&quot;&gt;
    &lt;/el-table-column&gt;
    &lt;el-table-column
      prop=&quot;address&quot;
      label=&quot;Adresse&quot;
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
</code></pre></template></demo-block><h3 id="filtrer"><a class="header-anchor" href="#filtrer">¶</a> Filtrer</h3>
<p>Vous pouvez filtrer la table pour obtenir rapidement les lignes désirées.</p>
<demo-block>
        <div><p>Réglez <code>filters</code> et <code>filter-method</code> dans <code>el-table-column</code> pour rendre la colonne filtrable. <code>filters</code> prends un tableau, et <code>filter-method</code> est une fonction déterminant comment les lignes s'affichent. Elle prend trois paramètres: <code>value</code>, <code>row</code> et <code>column</code>.</p>
</div>
        <template slot="source"><element-demo12 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;template&gt;
  &lt;el-button @click=&quot;resetDateFilter&quot;&gt;Effacer le filtre date&lt;/el-button&gt;
  &lt;el-button @click=&quot;clearFilter&quot;&gt;Effacer tout les filtres&lt;/el-button&gt;
  &lt;el-table
    ref=&quot;filterTable&quot;
    :data=&quot;tableData&quot;
    style=&quot;width: 100%&quot;&gt;
    &lt;el-table-column
      prop=&quot;date&quot;
      label=&quot;Date&quot;
      sortable
      width=&quot;180&quot;
      column-key=&quot;date&quot;
      :filters=&quot;[{text: '2016-05-01', value: '2016-05-01'}, {text: '2016-05-02', value: '2016-05-02'}, {text: '2016-05-03', value: '2016-05-03'}, {text: '2016-05-04', value: '2016-05-04'}]&quot;
      :filter-method=&quot;filterHandler&quot;
    &gt;
    &lt;/el-table-column&gt;
    &lt;el-table-column
      prop=&quot;name&quot;
      label=&quot;Nom&quot;
      width=&quot;180&quot;&gt;
    &lt;/el-table-column&gt;
    &lt;el-table-column
      prop=&quot;address&quot;
      label=&quot;Adresse&quot;
      :formatter=&quot;formatter&quot;&gt;
    &lt;/el-table-column&gt;
    &lt;el-table-column
      prop=&quot;tag&quot;
      label=&quot;Tag&quot;
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
</code></pre></template></demo-block><h3 id="template-de-colonne-personnalise"><a class="header-anchor" href="#template-de-colonne-personnalise">¶</a> Template de colonne personnalisé</h3>
<p>Vous pouvez customiser le contenu des colonnes afin de pouvoir utiliser d'autres composants.</p>
<demo-block>
        <div><p>Vous avez acccès aux données suivantes: <code>row</code>, <code>column</code>, <code>$index</code> et <code>store</code> (gestionnaire d'état de Table) grâce aux <a href="https://vuejs.org/v2/guide/components.html#Scoped-Slots">Scoped slot</a>.</p>
</div>
        <template slot="source"><element-demo13 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;template&gt;
  &lt;el-table
    :data=&quot;tableData&quot;
    style=&quot;width: 100%&quot;&gt;
    &lt;el-table-column
      label=&quot;Date&quot;
      width=&quot;180&quot;&gt;
      &lt;template slot-scope=&quot;scope&quot;&gt;
        &lt;i class=&quot;el-icon-time&quot;&gt;&lt;/i&gt;
        &lt;span style=&quot;margin-left: 10px&quot;&gt;{{ scope.row.date }}&lt;/span&gt;
      &lt;/template&gt;
    &lt;/el-table-column&gt;
    &lt;el-table-column
      label=&quot;Nom&quot;
      width=&quot;180&quot;&gt;
      &lt;template slot-scope=&quot;scope&quot;&gt;
        &lt;el-popover trigger=&quot;hover&quot; placement=&quot;top&quot;&gt;
          &lt;p&gt;Nom: {{ scope.row.name }}&lt;/p&gt;
          &lt;p&gt;Addr: {{ scope.row.address }}&lt;/p&gt;
          &lt;div slot=&quot;reference&quot; class=&quot;name-wrapper&quot;&gt;
            &lt;el-tag size=&quot;medium&quot;&gt;{{ scope.row.name }}&lt;/el-tag&gt;
          &lt;/div&gt;
        &lt;/el-popover&gt;
      &lt;/template&gt;
    &lt;/el-table-column&gt;
    &lt;el-table-column
      label=&quot;Opérations&quot;&gt;
      &lt;template slot-scope=&quot;scope&quot;&gt;
        &lt;el-button
          size=&quot;mini&quot;
          @click=&quot;handleEdit(scope.$index, scope.row)&quot;&gt;Editer&lt;/el-button&gt;
        &lt;el-button
          size=&quot;mini&quot;
          type=&quot;danger&quot;
          @click=&quot;handleDelete(scope.$index, scope.row)&quot;&gt;Supprimer&lt;/el-button&gt;
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
</code></pre></template></demo-block><h3 id="table-avec-header-personnalise"><a class="header-anchor" href="#table-avec-header-personnalise">¶</a> Table avec header personnalisé</h3>
<p>Vous pouvez également personnaliser le header de la table.</p>
<demo-block>
        <div><p>Vous pouvez personnaliser le header grâce aux <a href="https://vuejs.org/v2/guide/components-slots.html#Scoped-Slots">slots avec portée</a>.</p>
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
          @click=&quot;handleEdit(scope.$index, scope.row)&quot;&gt;Editer&lt;/el-button&gt;
        &lt;el-button
          size=&quot;mini&quot;
          type=&quot;danger&quot;
          @click=&quot;handleDelete(scope.$index, scope.row)&quot;&gt;Supprimer&lt;/el-button&gt;
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
          name: 'John',
          address: 'No. 189, Grove St, Los Angeles'
        }, {
          date: '2016-05-04',
          name: 'Morgan',
          address: 'No. 189, Grove St, Los Angeles'
        }, {
          date: '2016-05-01',
          name: 'Jessy',
          address: 'No. 189, Grove St, Los Angeles'
        }],
        search: '',
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
</code></pre></template></demo-block><h3 id="ligne-extensible"><a class="header-anchor" href="#ligne-extensible">¶</a> Ligne extensible</h3>
<p>Lorsque le contenu d'une ligne est trop long et que vous ne souhaitez pas afficher de scrollbar, vous pouvez utiliser une ligne extensible.</p>
<demo-block>
        <div><p>Activer la ligne extensible en mettant <code>type</code> à <code>expand</code> et en utilisant un slot. Le contenu de <code>el-table-column</code> sera généré quand l'extension aura lieu, et vous avez aux même attributs que pour le slot des templates de colonnes.</p>
</div>
        <template slot="source"><element-demo15 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;template&gt;
  &lt;el-table
    :data=&quot;tableData&quot;
    style=&quot;width: 100%&quot;&gt;
    &lt;el-table-column type=&quot;expand&quot;&gt;
      &lt;template slot-scope=&quot;props&quot;&gt;
        &lt;p&gt;État: {{ props.row.state }}&lt;/p&gt;
        &lt;p&gt;Ville: {{ props.row.city }}&lt;/p&gt;
        &lt;p&gt;Adresse: {{ props.row.address }}&lt;/p&gt;
        &lt;p&gt;Zip: {{ props.row.zip }}&lt;/p&gt;
      &lt;/template&gt;
    &lt;/el-table-column&gt;
    &lt;el-table-column
      label=&quot;Date&quot;
      prop=&quot;date&quot;&gt;
    &lt;/el-table-column&gt;
    &lt;el-table-column
      label=&quot;Nom&quot;
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
</code></pre></template></demo-block><h3 id="arborescence-et-lazy-loading"><a class="header-anchor" href="#arborescence-et-lazy-loading">¶</a> Arborescence et lazy loading</h3>
<demo-block>
        <div><p>You can display tree structure data. When row contains the <code>children</code> field, it is treated as nested data. For rendering nested data, the prop <code>row-key</code> is required。Also, child row data can be loaded asynchronously. Set <code>lazy</code> property of Table to true and the function <code>load</code>. Specify <code>hasChildren</code> attribute in row to determine which row contains children. Both <code>children</code> and <code>hasChildren</code> can be configured via <code>tree-props</code>.</p>
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
      label=&quot;date&quot;
      sortable
      width=&quot;180&quot;&gt;
    &lt;/el-table-column&gt;
    &lt;el-table-column
      prop=&quot;name&quot;
      label=&quot;Nom&quot;
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
      label=&quot;Date&quot;
      width=&quot;180&quot;&gt;
    &lt;/el-table-column&gt;
    &lt;el-table-column
      prop=&quot;name&quot;
      label=&quot;Nom&quot;
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
</code></pre></template></demo-block><h3 id="ligne-de-somme"><a class="header-anchor" href="#ligne-de-somme">¶</a> Ligne de somme</h3>
<p>Pour les tableaux de nombres, vous pouvez ajouter une ligne en plus pour afficher la somme de chaque colonne.</p>
<demo-block>
        <div><p>Mettez l'attribut <code>show-summary</code> à <code>true</code> dans <code>el-table</code>. Par défaut, la première colonne n'affiche que 'Sum' (vous pouvez configurer ce label avec <code>sum-text</code>), alors que les autres affichent la somme de chaque colonne. Vous pouvez choisir comment effectuer l'opération grâce à <code>summary-method</code>, qui doit retourner un tableau, cahque élément correspondant à la somme de chaque colonne. La deuxième table de cet exemple montre tout cela en pratique.</p>
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
      label=&quot;Nom&quot;&gt;
    &lt;/el-table-column&gt;
    &lt;el-table-column
      prop=&quot;amount1&quot;
      sortable
      label=&quot;Quantité 1&quot;&gt;
    &lt;/el-table-column&gt;
    &lt;el-table-column
      prop=&quot;amount2&quot;
      sortable
      label=&quot;Quantité 2&quot;&gt;
    &lt;/el-table-column&gt;
    &lt;el-table-column
      prop=&quot;amount3&quot;
      sortable
      label=&quot;Quantité 3&quot;&gt;
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
      label=&quot;Nom&quot;&gt;
    &lt;/el-table-column&gt;
    &lt;el-table-column
      prop=&quot;amount1&quot;
      label=&quot;Coût 1 ($)&quot;&gt;
    &lt;/el-table-column&gt;
    &lt;el-table-column
      prop=&quot;amount2&quot;
      label=&quot;Coût 2 ($)&quot;&gt;
    &lt;/el-table-column&gt;
    &lt;el-table-column
      prop=&quot;amount3&quot;
      label=&quot;Coût 3 ($)&quot;&gt;
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
            sums[index] = 'Coût total';
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
</code></pre></template></demo-block><h3 id="etendue-des-lignes-et-colonnes"><a class="header-anchor" href="#etendue-des-lignes-et-colonnes">¶</a> Étendue des lignes et colonnes</h3>
<p>Vous pouvez configurer l'étendue des lignes et colonnes afin de fusionner des cellules.</p>
<demo-block>
        <div><p>Utilisez <code>span-method</code> pour configurer chaque étendue. Il accepte une fonction, et lui passe un objet incluant la ligne actuelle <code>row</code>, la colonne actuelle <code>column</code>, l'index de la ligne <code>rowIndex</code> et l'index de la colonne <code>columnIndex</code>. La fonction doit retourner un tableau contenant deux nombres, le premier étant <code>rowspan</code> et le second <code>colspan</code>. Elle peut aussi retourner un objet avec les propriétés <code>rowspan</code> et <code>colspan</code>.</p>
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
        label=&quot;Nom&quot;&gt;
      &lt;/el-table-column&gt;
      &lt;el-table-column
        prop=&quot;amount1&quot;
        sortable
        label=&quot;Quantité 1&quot;&gt;
      &lt;/el-table-column&gt;
      &lt;el-table-column
        prop=&quot;amount2&quot;
        sortable
        label=&quot;Quantité 2&quot;&gt;
      &lt;/el-table-column&gt;
      &lt;el-table-column
        prop=&quot;amount3&quot;
        sortable
        label=&quot;Quantité 3&quot;&gt;
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
        label=&quot;Nom&quot;&gt;
      &lt;/el-table-column&gt;
      &lt;el-table-column
        prop=&quot;amount1&quot;
        label=&quot;Quantité 1&quot;&gt;
      &lt;/el-table-column&gt;
      &lt;el-table-column
        prop=&quot;amount2&quot;
        label=&quot;Quantité 2&quot;&gt;
      &lt;/el-table-column&gt;
      &lt;el-table-column
        prop=&quot;amount3&quot;
        label=&quot;Quantité 3&quot;&gt;
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
</code></pre></template></demo-block><h3 id="indices-personnalises"><a class="header-anchor" href="#indices-personnalises">¶</a> Indices personnalisés</h3>
<p>Vous pouvez personnaliser les indices des colonnes de type <code>index</code>.</p>
<demo-block>
        <div><p>Utilisez l'attribut <code>index</code> sur une <code>el-table-column</code> avec <code>type=index</code>. Si un nombre est assigné, tout les indices auront un décalage égal à ce nombre. Il peut aussi prendre une fonction avec chaque indice (commençant à <code>0</code>) comme paramètre, et la valeur de retour sera affichée en tant qu'indice.</p>
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
      label=&quot;Date&quot;
      width=&quot;180&quot;&gt;
    &lt;/el-table-column&gt;
    &lt;el-table-column
      prop=&quot;name&quot;
      label=&quot;Nom&quot;
      width=&quot;180&quot;&gt;
    &lt;/el-table-column&gt;
    &lt;el-table-column
      prop=&quot;address&quot;
      label=&quot;Adresse&quot;&gt;
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
</code></pre></template></demo-block><h3 id="attributs-de-table"><a class="header-anchor" href="#attributs-de-table">¶</a> Attributs de Table</h3>
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
<td>data</td>
<td>Les données de la table.</td>
<td>array</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>height</td>
<td>La hauteur de la table. Par défaut la hauteur est <code>auto</code>. Si sa valeur est un nombre, la hauteur est en px; si c'est un string, la valeur est assigné au style.height de l'élement. La hauteur est affectée par les styles externes.</td>
<td>string/number</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>max-height</td>
<td>Table's max-height. The legal value is a number or the height in px.</td>
<td>string/number</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>stripe</td>
<td>Si la table est rayée.</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>border</td>
<td>Si la table à une bordure verticale.</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>size</td>
<td>Taille de la table.</td>
<td>string</td>
<td>medium / small / mini</td>
<td>—</td>
</tr>
<tr>
<td>fit</td>
<td>Si la largeur des colonnes s'adapte au conteneur.</td>
<td>boolean</td>
<td>—</td>
<td>true</td>
</tr>
<tr>
<td>show-header</td>
<td>Si le header de la table est visible.</td>
<td>boolean</td>
<td>—</td>
<td>true</td>
</tr>
<tr>
<td>highlight-current-row</td>
<td>Si la ligne courante est mise en valeur.</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>current-row-key</td>
<td>Clé de la ligne actuelle. Propriété set-only.</td>
<td>string,number</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>row-class-name</td>
<td>Fonction qui retourne un nom de classe pour chaque ligne. Peut aussi être une simple chaîne de caractères assignant une classe à chaque ligne.</td>
<td>Function({row, rowIndex})/String</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>row-style</td>
<td>Fonction qui retourne un style pour chaque ligne. Peut aussi être un objet assignant un style à chaque ligne.</td>
<td>Function({row, rowIndex})/Object</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>cell-class-name</td>
<td>Fonction qui retourne un nom de classe pour chaque cellule. Peut aussi être une simple chaîne de caractères assignant une classe à chaque cellule.</td>
<td>Function({row, column, rowIndex, columnIndex})/String</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>cell-style</td>
<td>Fonction qui retourne un style pour chaque cellule. Peut aussi être un objet assignant un style à chaque cellule.</td>
<td>Function({row, column, rowIndex, columnIndex})/Object</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>header-row-class-name</td>
<td>Fonction qui retourne un nom de classe pour chaque ligne de header. Peut aussi être une simple chaîne de caractères assignant une classe à chaque ligne de header.</td>
<td>Function({row, rowIndex})/String</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>header-row-style</td>
<td>Fonction qui retourne un style pour chaque ligne de header. Peut aussi être un objet assignant un style à chaque ligne de header.</td>
<td>Function({row, rowIndex})/Object</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>header-cell-class-name</td>
<td>Fonction qui retourne un nom de classe pour chaque cellule de header. Peut aussi être une simple chaîne de caractères assignant une classe à chaque cellule de header.</td>
<td>Function({row, column, rowIndex, columnIndex})/String</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>header-cell-style</td>
<td>Fonction qui retourne un style pour chaque cellule de header. Peut aussi être un objet assignant un style à chaque cellule de header.</td>
<td>Function({row, column, rowIndex, columnIndex})/Object</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>row-key</td>
<td>Clé de chaque ligne, utilisée pour optimiser le rendu. Requise si <code>reserve-selection</code> est activé. Quand c'est un <code>String</code>, l'accès multi-niveaux est supporté, e.g. <code>user.info.id</code>, mais <code>user.info[0].id</code> n'est pas supporté. Dans ce dernier cas une <code>Function</code> devrait être utilisée.</td>
<td>Function(row)/String</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>empty-text</td>
<td>Texte à afficher quand il n'y a pas de données. Vous pouvez changer cette zone grâce à <code>slot=&quot;empty&quot;</code>.</td>
<td>String</td>
<td>—</td>
<td>No Data</td>
</tr>
<tr>
<td>default-expand-all</td>
<td>whether expand all rows by default, works when the table has a column type=&quot;expand&quot; or contains tree structure data</td>
<td>Boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>expand-row-keys</td>
<td>Détermine les lignes qui sont étendues, contient les clés des lignes correspondantes. Vous devriez configurer <code>row-key</code> avant celle-ci.</td>
<td>Array</td>
<td>—</td>
<td></td>
</tr>
<tr>
<td>default-sort</td>
<td>Détermine l'ordre de tri par défaut. La propriété <code>prop</code> détermine la colonne par défaut, <code>order</code> détermine l'ordre par défaut.</td>
<td>Object</td>
<td><code>order</code>: ascending, descending</td>
<td>Si <code>order</code> est absent, son défaut sera <code>ascending</code>.</td>
</tr>
<tr>
<td>tooltip-effect</td>
<td>Propriété <code>effect</code> de Tooltip.</td>
<td>String</td>
<td>dark/light</td>
<td></td>
</tr>
<tr>
<td>show-summary</td>
<td>Si une ligne de somme doit apparaître.</td>
<td>Boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>sum-text</td>
<td>Le label de la première cellule de la ligne de somme.</td>
<td>String</td>
<td>—</td>
<td>Sum</td>
</tr>
<tr>
<td>summary-method</td>
<td>La méthode pour calculer la somme.</td>
<td>Function({ columns, data })</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>span-method</td>
<td>Méthode qui retourne les valeurs de colspan et rowspan.</td>
<td>Function({ row, column, rowIndex, columnIndex })</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>select-on-indeterminate</td>
<td>Contrôle le comportement de la checkbox globale dans les tables avec sélection multiple lorsque seulement certaines lignes sont sélectionnées. Si <code>true</code>, toutes les lignes sont sélectionnées.</td>
<td>Boolean</td>
<td>—</td>
<td>true</td>
</tr>
<tr>
<td>indent</td>
<td>horizontal indentation of tree data</td>
<td>Number</td>
<td>—</td>
<td>16</td>
</tr>
<tr>
<td>lazy</td>
<td>whether to lazy loading data</td>
<td>Boolean</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>load</td>
<td>method for loading child row data, only works when <code>lazy</code> is true</td>
<td>Function({ row, treeNode, resolve })</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>tree-props</td>
<td>configuration for rendering nested data</td>
<td>Object</td>
<td>—</td>
<td>{ hasChildren: 'hasChildren', children: 'children' }</td>
</tr>
</tbody>
</table>
<h3 id="evenements-de-table"><a class="header-anchor" href="#evenements-de-table">¶</a> Évènements de Table</h3>
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
<td>Se déclenche quand l'utilisateur clique sur la checkbox d'une ligne.</td>
<td>selection, row</td>
</tr>
<tr>
<td>select-all</td>
<td>Se déclenche quand l'utilisateur clique sur la checkbox du header.</td>
<td>selection</td>
</tr>
<tr>
<td>selection-change</td>
<td>Se déclenche quand la selection change.</td>
<td>selection</td>
</tr>
<tr>
<td>cell-mouse-enter</td>
<td>Se déclenche quand la souris passe sur une cellule.</td>
<td>row, column, cell, event</td>
</tr>
<tr>
<td>cell-mouse-leave</td>
<td>Se déclenche quand la souris sort d'une cellule.</td>
<td>row, column, cell, event</td>
</tr>
<tr>
<td>cell-click</td>
<td>Se déclenche quand l'utilisateur clique sur une cellule.</td>
<td>row, column, cell, event</td>
</tr>
<tr>
<td>cell-dblclick</td>
<td>Se déclenche quand l'utilisateur double-clique sur une cellule.</td>
<td>row, column, cell, event</td>
</tr>
<tr>
<td>row-click</td>
<td>Se déclenche quand l'utilisateur clique sur une ligne.</td>
<td>row, column, event</td>
</tr>
<tr>
<td>row-contextmenu</td>
<td>Se déclenche quand l'utilisateur fait un clic droit sur une ligne.</td>
<td>row, column, event</td>
</tr>
<tr>
<td>row-dblclick</td>
<td>Se déclenche quand l'utilisateur double-clique sur une ligne.</td>
<td>row, column, event</td>
</tr>
<tr>
<td>header-click</td>
<td>Se déclenche quand l'utilisateur clique sur une colonne du header.</td>
<td>column, event</td>
</tr>
<tr>
<td>header-contextmenu</td>
<td>Se déclenche quand l'utilisateur fait un clic droit sur une colonne du header.</td>
<td>column, event</td>
</tr>
<tr>
<td>sort-change</td>
<td>Se déclenche quand l'ordre de tri change.</td>
<td>{ column, prop, order }</td>
</tr>
<tr>
<td>filter-change</td>
<td>column's key. If you need to use the filter-change event, this attribute is mandatory to identify which column is being filtered.</td>
<td>filters</td>
</tr>
<tr>
<td>current-change</td>
<td>Se déclenche quand la ligne sélectionnée change.</td>
<td>currentRow, oldCurrentRow</td>
</tr>
<tr>
<td>header-dragend</td>
<td>Se déclenche après un changement de taille de colonne en déplaçant la ligne verticale du header.</td>
<td>newWidth, oldWidth, column, event</td>
</tr>
<tr>
<td>expand-change</td>
<td>triggers when user expands or collapses a row (for expandable table, second param is expandedRows; for tree Table, second param is expanded)</td>
<td>row, (expandedRows | expanded)</td>
</tr>
</tbody>
</table>
<h3 id="methodes-de-table"><a class="header-anchor" href="#methodes-de-table">¶</a> Méthodes de Table</h3>
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
<td>clearSelection</td>
<td>Dans les tables avec sélection multiple, efface la sélection.</td>
<td>—</td>
</tr>
<tr>
<td>toggleRowSelection</td>
<td>Dans les tables avec sélection multiple, change la sélection d'une ligne. Grâce au deuxième paramètre vous pouvez directement décider si cette ligne est sélectionnée.</td>
<td>row, selected</td>
</tr>
<tr>
<td>toggleAllSelection</td>
<td>Utilisé dans les tables à sélection multiples, sélectionne toutes les lignes.</td>
<td>-</td>
</tr>
<tr>
<td>toggleRowExpansion</td>
<td>used in expandable Table or tree Table, toggle if a certain row is expanded. With the second parameter, you can directly set if this row is expanded or collapsed</td>
<td>row, expanded</td>
</tr>
<tr>
<td>setCurrentRow</td>
<td>Dans les tables à sélection simple, sélectionne une ligne. Sans paramètre la sélection est effacé.</td>
<td>row</td>
</tr>
<tr>
<td>clearSort</td>
<td>Efface le tri.</td>
<td>—</td>
</tr>
<tr>
<td>clearFilter</td>
<td>Efface les filtres des colonnes dont les <code>columnKey</code> sont passées. Si aucun paramètre, efface tout les filtres.</td>
<td>columnKeys</td>
</tr>
<tr>
<td>doLayout</td>
<td>Rafraîchi le layout de la table. Quand la visibilité de la table change vous aurez peut-être besoin de cette méthode pour corriger le layout.</td>
<td>—</td>
</tr>
<tr>
<td>sort</td>
<td>Tri la table manuellement. La proriété <code>prop</code> détermine la colonne, <code>order</code> détermine l'ordre de tri.</td>
<td>prop: string, order: string</td>
</tr>
</tbody>
</table>
<h3 id="slots-de-table"><a class="header-anchor" href="#slots-de-table">¶</a> Slots de Table</h3>
<table>
<thead>
<tr>
<th>Nom</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>append</td>
<td>Contenu à insérer après la dernière ligne. Vous aurez sans doute besoin de ce slot si vous implémentez un scroll infini. Il sera affiché au-dessus de la ligne de somme s'il y en a une.</td>
</tr>
</tbody>
</table>
<h3 id="attributs-de-table-column"><a class="header-anchor" href="#attributs-de-table-column">¶</a> Attributs de Table-column</h3>
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
<td>Type de la colonne. Si mis à <code>selection</code>, la colonne affichera des checkbox. Si mis à <code>index</code>, la colonne affichera l'indice de la ligne (début à 1). Si mis à <code>expand</code>, affichera l'icône d'extension.</td>
<td>string</td>
<td>selection/index/expand</td>
<td>—</td>
</tr>
<tr>
<td>index</td>
<td>Personnalise les indices de chaque ligne, marche avec les colonnes <code>type=index</code>.</td>
<td>number, Function(index)</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>label</td>
<td>Label de la colonne.</td>
<td>string</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>column-key</td>
<td>La clé de la colonne. Si vous avez besoin d'utiliser l'évènement filter-change, vous aurez besoin de cet attribut pour savoir quelle colonne est filtrée.</td>
<td>string</td>
<td>string</td>
<td>—</td>
</tr>
<tr>
<td>prop</td>
<td>Nom du champ de l'objet de données. Alias: <code>property</code>.</td>
<td>string</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>width</td>
<td>Largeur de la colonne.</td>
<td>string</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>min-width</td>
<td>Largeur minimale de la colonne. Les colonnes avec <code>width</code> ont une largeur fixe, alors que celles avec <code>min-width</code> ont une largeur proportionnellement distribuée.</td>
<td>string</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>fixed</td>
<td>Si la colonne est fixée à droite ou à gauche. Fixée à gauche si <code>true</code>.</td>
<td>string/boolean</td>
<td>true/left/right</td>
<td>—</td>
</tr>
<tr>
<td>render-header</td>
<td>Fonction de rendu pour le header de cette colonne.</td>
<td>Function(h, { column, $index })</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>sortable</td>
<td>Si la colonne peut être triée. Tri dynamique possible en mettant à 'custom' et en écoutant l'évènement <code>sort-change</code> de Table.</td>
<td>boolean, string</td>
<td>true, false, custom</td>
<td>false</td>
</tr>
<tr>
<td>sort-method</td>
<td>Méthode de tri, marche quand <code>sortable</code> est <code>true</code>. Doit retourner un nombre, tout comme Array.sort.</td>
<td>Function(a, b)</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>sort-by</td>
<td>Détermine par quelle propriété effectuer le tri, marche quand <code>sortable</code> est <code>true</code> et <code>sort-method</code> est <code>undefined</code>. Si c'est un Array, sera triée par la propriété suivante si la précédente est équivalente.</td>
<td>Function(row, index)/String/Array</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>sort-orders</td>
<td>Liste des stratégies de tri, marche quand <code>sortable</code> est <code>true</code>. Accepte un tableau. Lorsque l'utilisateur clique plusieurs fois sur le header, la colonne est triée dans l'ordre des stratégies indiquée.</td>
<td>array</td>
<td>Les élements du tableau doivent être parmi: <code>ascending</code>, <code>descending</code> et <code>null</code> (restaure l'état originel du tableau).</td>
<td>['ascending', 'descending', null]</td>
</tr>
<tr>
<td>resizable</td>
<td>Si la largeur de la colonne peut être modifiée, marche quand <code>border</code> de <code>el-table</code> est <code>true</code>.</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>formatter</td>
<td>Fonction pour formater le contenu des cellules.</td>
<td>Function(row, column, cellValue, index)</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>show-overflow-tooltip</td>
<td>Si du contenu trop long doit être caché et affiché dans une tooltip quand la souris passe sur la cellule.</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>align</td>
<td>Alignement.</td>
<td>string</td>
<td>left/center/right</td>
<td>left</td>
</tr>
<tr>
<td>header-align</td>
<td>Alignement du header. Si omis, la valeur du <code>align</code> ci-dessus est appliqué.</td>
<td>String</td>
<td>left/center/right</td>
<td>—</td>
</tr>
<tr>
<td>class-name</td>
<td>Classe des cellules dans cette colonne.</td>
<td>string</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>label-class-name</td>
<td>Classe du label de cette colonne.</td>
<td>string</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>selectable</td>
<td>Détermine si certaines colonnes peuvent être sélectionnées, marche quand <code>type</code> est 'selection'.</td>
<td>Function(row, index)</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>reserve-selection</td>
<td>Si la sélection doit être conservée après rafraîchissement, marche quand <code>type</code> est 'selection'. Notez que <code>row-key</code> est requis.</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>filters</td>
<td>Un tableau d'options de filtrage. Pour chaque élément, <code>text</code> et <code>value</code> sont requis.</td>
<td>Array[{ text, value }]</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>filter-placement</td>
<td>Emplacement du menu du filtre.</td>
<td>String</td>
<td>Voir <code>placement</code> de Tooltip.</td>
<td>—</td>
</tr>
<tr>
<td>filter-multiple</td>
<td>Si le filtrage supporte plusieurs options.</td>
<td>Boolean</td>
<td>—</td>
<td>true</td>
</tr>
<tr>
<td>filter-method</td>
<td>Méthode de filtrage. Si <code>filter-multiple</code> est activé, cette méthode sera appelé plusieurs fois pour chaque ligne, qui sera affichée si dès qu'un <code>true</code> sera renvoyé.</td>
<td>Function(value, row, column)</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>filtered-value</td>
<td>Valeur de filtre pour les colonnes sélectionnées, peut être utile quand le header est rendu avec <code>render-header</code>.</td>
<td>Array</td>
<td>—</td>
<td>—</td>
</tr>
</tbody>
</table>
<h3 id="slot-de-table-column"><a class="header-anchor" href="#slot-de-table-column">¶</a> Slot de Table-column</h3>
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
<td>Contenu personnalisé pour les colonnes. Les paramètres sont { row, column, $index }</td>
</tr>
<tr>
<td>header</td>
<td>Contenu personnalisé pour le header. Le paramètre de scope est { column, $index }</td>
</tr>
</tbody>
</table>
