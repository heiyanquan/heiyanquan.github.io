<h2 id="select"><a class="header-anchor" href="#select">¶</a> Select</h2>
<p>Utile lorsqu'il faut sélectionner des options parmi un large choix, affiché grâce à un menu déroulant.</p>
<h3 id="usage"><a class="header-anchor" href="#usage">¶</a> Usage</h3>
<demo-block>
        <div><p><code>v-model</code> est la valeur du <code>el-option</code> sélectionné.</p>
</div>
        <template slot="source"><element-demo0 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;template&gt;
  &lt;el-select v-model=&quot;value&quot; placeholder=&quot;Select&quot;&gt;
    &lt;el-option
      v-for=&quot;item in options&quot;
      :key=&quot;item.value&quot;
      :label=&quot;item.label&quot;
      :value=&quot;item.value&quot;&gt;
    &lt;/el-option&gt;
  &lt;/el-select&gt;
&lt;/template&gt;

&lt;script&gt;
  export default {
    data() {
      return {
        options: [{
          value: 'Option1',
          label: 'Option1'
        }, {
          value: 'Option2',
          label: 'Option2'
        }, {
          value: 'Option3',
          label: 'Option3'
        }, {
          value: 'Option4',
          label: 'Option4'
        }, {
          value: 'Option5',
          label: 'Option5'
        }],
        value: ''
      }
    }
  }
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="option-desactivee"><a class="header-anchor" href="#option-desactivee">¶</a> Option désactivée</h3>
<demo-block>
        <div><p>Mettez l'attribut <code>disabled</code> dans <code>el-option</code> à <code>true</code> pour désactiver cette option.</p>
</div>
        <template slot="source"><element-demo1 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;template&gt;
  &lt;el-select v-model=&quot;value&quot; placeholder=&quot;Select&quot;&gt;
    &lt;el-option
      v-for=&quot;item in options&quot;
      :key=&quot;item.value&quot;
      :label=&quot;item.label&quot;
      :value=&quot;item.value&quot;
      :disabled=&quot;item.disabled&quot;&gt;
    &lt;/el-option&gt;
  &lt;/el-select&gt;
&lt;/template&gt;

&lt;script&gt;
  export default {
    data() {
      return {
        options: [{
          value: 'Option1',
          label: 'Option1'
        }, {
          value: 'Option2',
          label: 'Option2',
          disabled: true
        }, {
          value: 'Option3',
          label: 'Option3'
        }, {
          value: 'Option4',
          label: 'Option4'
        }, {
          value: 'Option5',
          label: 'Option5'
        }],
        value: ''
      }
    }
  }
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="selecteur-desactive"><a class="header-anchor" href="#selecteur-desactive">¶</a> Sélecteur désactivé</h3>
<p>Vous pouvez désactiver le composant lui-même.</p>
<demo-block>
        <div><p>Ajoutez <code>disabled</code> à <code>el-select</code> pour le désactiver.</p>
</div>
        <template slot="source"><element-demo2 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;template&gt;
  &lt;el-select v-model=&quot;value&quot; disabled placeholder=&quot;Select&quot;&gt;
    &lt;el-option
      v-for=&quot;item in options&quot;
      :key=&quot;item.value&quot;
      :label=&quot;item.label&quot;
      :value=&quot;item.value&quot;&gt;
    &lt;/el-option&gt;
  &lt;/el-select&gt;
&lt;/template&gt;

&lt;script&gt;
  export default {
    data() {
      return {
        options: [{
          value: 'Option1',
          label: 'Option1'
        }, {
          value: 'Option2',
          label: 'Option2'
        }, {
          value: 'Option3',
          label: 'Option3'
        }, {
          value: 'Option4',
          label: 'Option4'
        }, {
          value: 'Option5',
          label: 'Option5'
        }],
        value: ''
      }
    }
  }
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="effacer-la-selection"><a class="header-anchor" href="#effacer-la-selection">¶</a> Effacer la sélection</h3>
<p>Vous pouvez ajouter un bouton pour effacer la sélection.</p>
<demo-block>
        <div><p>Ajoutez l'attribut <code>clearable</code> à <code>el-select</code> et l'icône de fermeture s'affichera après une sélection. Notez que <code>clearable</code> ne marche qu'avec les sélecteurs à choix unique.</p>
</div>
        <template slot="source"><element-demo3 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;template&gt;
  &lt;el-select v-model=&quot;value&quot; clearable placeholder=&quot;Select&quot;&gt;
    &lt;el-option
      v-for=&quot;item in options&quot;
      :key=&quot;item.value&quot;
      :label=&quot;item.label&quot;
      :value=&quot;item.value&quot;&gt;
    &lt;/el-option&gt;
  &lt;/el-select&gt;
&lt;/template&gt;

&lt;script&gt;
  export default {
    data() {
      return {
        options: [{
          value: 'Option1',
          label: 'Option1'
        }, {
          value: 'Option2',
          label: 'Option2'
        }, {
          value: 'Option3',
          label: 'Option3'
        }, {
          value: 'Option4',
          label: 'Option4'
        }, {
          value: 'Option5',
          label: 'Option5'
        }],
        value: ''
      }
    }
  }
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="selecteur-multiple"><a class="header-anchor" href="#selecteur-multiple">¶</a> Sélecteur multiple</h3>
<p>Les sélecteurs multiples utilisent des tags pour afficher les différentes options choisies.</p>
<demo-block>
        <div><p>Ajoutez <code>multiple</code> à <code>el-select</code> pour le changer en sélecteur multiple. La valeur de <code>v-model</code> devient un tableau contenant toutes les options. Par défaut les différents choix sont affichés sous forme de tags. Vous pouvez réduire leur nombre en utilisant l'attribut <code>collapse-tags</code>.</p>
</div>
        <template slot="source"><element-demo4 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;template&gt;
  &lt;el-select v-model=&quot;value1&quot; multiple placeholder=&quot;Select&quot;&gt;
    &lt;el-option
      v-for=&quot;item in options&quot;
      :key=&quot;item.value&quot;
      :label=&quot;item.label&quot;
      :value=&quot;item.value&quot;&gt;
    &lt;/el-option&gt;
  &lt;/el-select&gt;

  &lt;el-select
    v-model=&quot;value2&quot;
    multiple
    collapse-tags
    style=&quot;margin-left: 20px;&quot;
    placeholder=&quot;Select&quot;&gt;
    &lt;el-option
      v-for=&quot;item in options&quot;
      :key=&quot;item.value&quot;
      :label=&quot;item.label&quot;
      :value=&quot;item.value&quot;&gt;
    &lt;/el-option&gt;
  &lt;/el-select&gt;
&lt;/template&gt;

&lt;script&gt;
  export default {
    data() {
      return {
        options: [{
          value: 'Option1',
          label: 'Option1'
        }, {
          value: 'Option2',
          label: 'Option2'
        }, {
          value: 'Option3',
          label: 'Option3'
        }, {
          value: 'Option4',
          label: 'Option4'
        }, {
          value: 'Option5',
          label: 'Option5'
        }],
        value1: [],
        value2: []
      }
    }
  }
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="template-personnalise"><a class="header-anchor" href="#template-personnalise">¶</a> Template personnalisé</h3>
<p>Vous pouvez définir un template HTML pour l'affichage des options.</p>
<demo-block>
        <div><p>Insérez votre template dans le slot de <code>el-option</code>.</p>
</div>
        <template slot="source"><element-demo5 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;template&gt;
  &lt;el-select v-model=&quot;value&quot; placeholder=&quot;Select&quot;&gt;
    &lt;el-option
      v-for=&quot;item in cities&quot;
      :key=&quot;item.value&quot;
      :label=&quot;item.label&quot;
      :value=&quot;item.value&quot;&gt;
      &lt;span style=&quot;float: left&quot;&gt;{{ item.label }}&lt;/span&gt;
      &lt;span style=&quot;float: right; color: #8492a6; font-size: 13px&quot;&gt;{{ item.value }}&lt;/span&gt;
    &lt;/el-option&gt;
  &lt;/el-select&gt;
&lt;/template&gt;

&lt;script&gt;
  export default {
    data() {
      return {
        cities: [{
          value: 'Beijing',
          label: 'Beijing'
        }, {
          value: 'Shanghai',
          label: 'Shanghai'
        }, {
          value: 'Nanjing',
          label: 'Nanjing'
        }, {
          value: 'Chengdu',
          label: 'Chengdu'
        }, {
          value: 'Shenzhen',
          label: 'Shenzhen'
        }, {
          value: 'Guangzhou',
          label: 'Guangzhou'
        }],
        value: ''
      }
    }
  }
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="grouper-les-options"><a class="header-anchor" href="#grouper-les-options">¶</a> Grouper les options</h3>
<p>Vous pouvez définir des groupes pour les options du menu.</p>
<demo-block>
        <div><p>Utilisez <code>el-option-group</code> pour grouper les options. L'attribut <code>label</code> définit le nom du groupe.</p>
</div>
        <template slot="source"><element-demo6 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;template&gt;
  &lt;el-select v-model=&quot;value&quot; placeholder=&quot;Select&quot;&gt;
    &lt;el-option-group
      v-for=&quot;group in options&quot;
      :key=&quot;group.label&quot;
      :label=&quot;group.label&quot;&gt;
      &lt;el-option
        v-for=&quot;item in group.options&quot;
        :key=&quot;item.value&quot;
        :label=&quot;item.label&quot;
        :value=&quot;item.value&quot;&gt;
      &lt;/el-option&gt;
    &lt;/el-option-group&gt;
  &lt;/el-select&gt;
&lt;/template&gt;

&lt;script&gt;
  export default {
    data() {
      return {
        options: [{
          label: 'Villes célèbres',
          options: [{
            value: 'Shanghai',
            label: 'Shanghai'
          }, {
            value: 'Beijing',
            label: 'Beijing'
          }]
        }, {
          label: 'Nom de ville',
          options: [{
            value: 'Chengdu',
            label: 'Chengdu'
          }, {
            value: 'Shenzhen',
            label: 'Shenzhen'
          }, {
            value: 'Guangzhou',
            label: 'Guangzhou'
          }, {
            value: 'Dalian',
            label: 'Dalian'
          }]
        }],
        value: ''
      }
    }
  }
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="filtrage-des-options"><a class="header-anchor" href="#filtrage-des-options">¶</a> Filtrage des options</h3>
<p>Vous pouvez ajouter un mode de filtrage pour trouver les options désirées plus rapidement.</p>
<demo-block>
        <div><p>Ajoutez <code>filterable</code> à <code>el-select</code> pour activer le filtrage. Par défaut, Select cherchera les options dont le <code>label</code> contient la valeur du filtre. Si vous préférez une autre stratégie de filtrage, utilisez <code>filter-method</code>. C'est une <code>Function</code> qui est appelée quand la valeur change, avec pour paramètre la valeur courante.</p>
</div>
        <template slot="source"><element-demo7 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;template&gt;
  &lt;el-select v-model=&quot;value&quot; filterable placeholder=&quot;Select&quot;&gt;
    &lt;el-option
      v-for=&quot;item in options&quot;
      :key=&quot;item.value&quot;
      :label=&quot;item.label&quot;
      :value=&quot;item.value&quot;&gt;
    &lt;/el-option&gt;
  &lt;/el-select&gt;
&lt;/template&gt;

&lt;script&gt;
  export default {
    data() {
      return {
        options: [{
          value: 'Option1',
          label: 'Option1'
        }, {
          value: 'Option2',
          label: 'Option2'
        }, {
          value: 'Option3',
          label: 'Option3'
        }, {
          value: 'Option4',
          label: 'Option4'
        }, {
          value: 'Option5',
          label: 'Option5'
        }],
        value: ''
      }
    }
  }
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="recherche-a-distance"><a class="header-anchor" href="#recherche-a-distance">¶</a> Recherche à distance</h3>
<p>Vous pouvez aller chercher les options sur le serveur de manière dynamique.</p>
<demo-block>
        <div><p>Ajoutez <code>filterable</code> et <code>remote</code> pour activer la recherche distante, ainsi que <code>remote-method</code>. Cette dernière est une <code>Function</code> qui est appelée lorsque la valeur change, avec pour paramètre la valeur courante. Notes que si <code>el-option</code> est rendu dans une directive <code>v-for</code>, vous devriez ajouter l'attribut <code>key</code> aux <code>el-option</code>. Cette valeur doit unique, comme <code>item.value</code> dans l'exemple suivant.</p>
</div>
        <template slot="source"><element-demo8 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;template&gt;
  &lt;el-select
    v-model=&quot;value&quot;
    multiple
    filterable
    remote
    reserve-keyword
    placeholder=&quot;Entrez un mot-clé&quot;
    :remote-method=&quot;remoteMethod&quot;
    :loading=&quot;loading&quot;&gt;
    &lt;el-option
      v-for=&quot;item in options&quot;
      :key=&quot;item.value&quot;
      :label=&quot;item.label&quot;
      :value=&quot;item.value&quot;&gt;
    &lt;/el-option&gt;
  &lt;/el-select&gt;
&lt;/template&gt;

&lt;script&gt;
  export default {
    data() {
      return {
        options: [],
        value: [],
        list: [],
        loading: false,
        states: [&quot;Alabama&quot;, &quot;Alaska&quot;, &quot;Arizona&quot;,
        &quot;Arkansas&quot;, &quot;California&quot;, &quot;Colorado&quot;,
        &quot;Connecticut&quot;, &quot;Delaware&quot;, &quot;Florida&quot;,
        &quot;Georgia&quot;, &quot;Hawaii&quot;, &quot;Idaho&quot;, &quot;Illinois&quot;,
        &quot;Indiana&quot;, &quot;Iowa&quot;, &quot;Kansas&quot;, &quot;Kentucky&quot;,
        &quot;Louisiana&quot;, &quot;Maine&quot;, &quot;Maryland&quot;,
        &quot;Massachusetts&quot;, &quot;Michigan&quot;, &quot;Minnesota&quot;,
        &quot;Mississippi&quot;, &quot;Missouri&quot;, &quot;Montana&quot;,
        &quot;Nebraska&quot;, &quot;Nevada&quot;, &quot;New Hampshire&quot;,
        &quot;New Jersey&quot;, &quot;New Mexico&quot;, &quot;New York&quot;,
        &quot;North Carolina&quot;, &quot;North Dakota&quot;, &quot;Ohio&quot;,
        &quot;Oklahoma&quot;, &quot;Oregon&quot;, &quot;Pennsylvania&quot;,
        &quot;Rhode Island&quot;, &quot;South Carolina&quot;,
        &quot;South Dakota&quot;, &quot;Tennessee&quot;, &quot;Texas&quot;,
        &quot;Utah&quot;, &quot;Vermont&quot;, &quot;Virginia&quot;,
        &quot;Washington&quot;, &quot;West Virginia&quot;, &quot;Wisconsin&quot;,
        &quot;Wyoming&quot;]
      }
    },
    mounted() {
      this.list = this.states.map(item =&gt; {
        return { value: `value:${item}`, label: `label:${item}` };
      });
    },
    methods: {
      remoteMethod(query) {
        if (query !== '') {
          this.loading = true;
          setTimeout(() =&gt; {
            this.loading = false;
            this.options = this.list.filter(item =&gt; {
              return item.label.toLowerCase()
                .indexOf(query.toLowerCase()) &gt; -1;
            });
          }, 200);
        } else {
          this.options = [];
        }
      }
    }
  }
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="creer-des-options"><a class="header-anchor" href="#creer-des-options">¶</a> Créer des options</h3>
<p>Vous pouvez entrer des choix dans le champ de sélection qui ne sont pas incluses dans le menu.</p>
<demo-block>
        <div><p>En utilisant <code>allow-create</code>, peuvent créer de nouveaux choix en les entrant dans le champ d'input. Cette option ne marche que si <code>filterable</code> est activé. Cette exemple montre aussi <code>default-first-option</code>, qui permet de sélectionner la première option en pressant Entrée sans avoir à utiliser la souris ou le clavier.</p>
</div>
        <template slot="source"><element-demo9 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;template&gt;
  &lt;el-select
    v-model=&quot;value&quot;
    multiple
    filterable
    allow-create
    default-first-option
    placeholder=&quot;Choisissez les tags de vos articles&quot;&gt;
    &lt;el-option
      v-for=&quot;item in options&quot;
      :key=&quot;item.value&quot;
      :label=&quot;item.label&quot;
      :value=&quot;item.value&quot;&gt;
    &lt;/el-option&gt;
  &lt;/el-select&gt;
&lt;/template&gt;

&lt;script&gt;
  export default {
    data() {
      return {
        options: [{
          value: 'HTML',
          label: 'HTML'
        }, {
          value: 'CSS',
          label: 'CSS'
        }, {
          value: 'JavaScript',
          label: 'JavaScript'
        }],
        value: []
      }
    }
  }
&lt;/script&gt;
</code></pre></template></demo-block><div class="tip">
<p>Si la valeur de Select est un objet, assurez-vous d'utiliser <code>value-key</code> comme identifiant unique.</p>
</div>
<h3 id="attributs-de-select"><a class="header-anchor" href="#attributs-de-select">¶</a> Attributs de Select</h3>
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
<td>value / v-model</td>
<td>La valeur liée.</td>
<td>boolean / string / number</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>multiple</td>
<td>Si la sélection multiple est activée.</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>disabled</td>
<td>Si le sélecteur est désactivé.</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>value-key</td>
<td>Identifiant unique pour la valeur, requis quand la valeur est un objet.</td>
<td>string</td>
<td>—</td>
<td>value</td>
</tr>
<tr>
<td>size</td>
<td>Taille de l'Input.</td>
<td>string</td>
<td>large/small/mini</td>
<td>—</td>
</tr>
<tr>
<td>clearable</td>
<td>Si la sélection est effaçable.</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>collapse-tags</td>
<td>Si les tags peuvent être réduits, dans le cas d'une sélection multiple.</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>multiple-limit</td>
<td>Nombre maximum d'options multiples sélectionnable. Pas de limites quand est à 0.</td>
<td>number</td>
<td>—</td>
<td>0</td>
</tr>
<tr>
<td>name</td>
<td>L'attribut name natif du sélecteur.</td>
<td>string</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>autocomplete</td>
<td>L'attribut autocomplete natif du sélecteur.</td>
<td>string</td>
<td>—</td>
<td>off</td>
</tr>
<tr>
<td>auto-complete</td>
<td>@DEPRECATED dans la prochaine version majeure.</td>
<td>string</td>
<td>—</td>
<td>off</td>
</tr>
<tr>
<td>placeholder</td>
<td>Le placeholder du champ.</td>
<td>string</td>
<td>—</td>
<td>Select</td>
</tr>
<tr>
<td>filterable</td>
<td>Si les options sont filtrables.</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>allow-create</td>
<td>Si l'utilisateur peut créer des options. Dans ce cas <code>filterable</code> doit être activé.</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>filter-method</td>
<td>Méthode de filtrage personnalisée.</td>
<td>function</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>remote</td>
<td>Si les options sont chargées dynamiquement depuis le serveur.</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>remote-method</td>
<td>Méthode pour la recherche distante.</td>
<td>function</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>loading</td>
<td>Si le sélecteur est en train de charger des options.</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>loading-text</td>
<td>Texte à afficher pendant le chargement.</td>
<td>string</td>
<td>—</td>
<td>Loading</td>
</tr>
<tr>
<td>no-match-text</td>
<td>Texte à afficher quand le filtrage ne retourne aucune option. Vous pouvez aussi utiliser le slot <code>empty</code>.</td>
<td>string</td>
<td>—</td>
<td>No matching data</td>
</tr>
<tr>
<td>no-data-text</td>
<td>Texte à afficher quand il n'y a aucune option. Vous pouvez aussi utiliser le slot <code>empty</code>.</td>
<td>string</td>
<td>—</td>
<td>No data</td>
</tr>
<tr>
<td>popper-class</td>
<td>Classe du menu déroulant.</td>
<td>string</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>reserve-keyword</td>
<td>Quand <code>multiple</code> et <code>filter</code> sont activés, s'il faut réserver le mot-clé courant après la sélection d'une option.</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>default-first-option</td>
<td>Sélectionne la première option avec Entrée. Utilisable avec <code>filterable</code> ou <code>remote</code></td>
<td>boolean</td>
<td>-</td>
<td>false</td>
</tr>
<tr>
<td>popper-append-to-body</td>
<td>Si le menu déroulant doit être ajouté au body. Si le positionnement du menu est incorrect, essayez de mettre cette option à <code>false</code>.</td>
<td>boolean</td>
<td>-</td>
<td>true</td>
</tr>
<tr>
<td>automatic-dropdown</td>
<td>Pour les sélecteurs non filtrables, détermine si le menu apparaît au focus du champ.</td>
<td>boolean</td>
<td>-</td>
<td>false</td>
</tr>
</tbody>
</table>
<h3 id="evenements-de-select"><a class="header-anchor" href="#evenements-de-select">¶</a> Évènements de Select</h3>
<table>
<thead>
<tr>
<th>Nom</th>
<th>Description</th>
<th>Paramètre</th>
</tr>
</thead>
<tbody>
<tr>
<td>change</td>
<td>Se déclenche quand la valeur change.</td>
<td>current selected value</td>
</tr>
<tr>
<td>visible-change</td>
<td>Se déclenche quand le menu apparaît ou disparaît.</td>
<td>true quand il apparaît, sinon false .</td>
</tr>
<tr>
<td>remove-tag</td>
<td>Se déclenche quand un tag est retiré.</td>
<td>La valeur du tag retiré.</td>
</tr>
<tr>
<td>clear</td>
<td>Se déclenche quand le champ est effacé grâce au bouton.</td>
<td>—</td>
</tr>
<tr>
<td>blur</td>
<td>Se déclenche quand le champ perd le focus.</td>
<td>(event: Event)</td>
</tr>
<tr>
<td>focus</td>
<td>Se déclenche gagne le focus.</td>
<td>(event: Event)</td>
</tr>
</tbody>
</table>
<h3 id="slots-de-select"><a class="header-anchor" href="#slots-de-select">¶</a> Slots de Select</h3>
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
<td>Liste de options.</td>
</tr>
<tr>
<td>prefix</td>
<td>Contenu du préfixe du sélecteur.</td>
</tr>
<tr>
<td>empty</td>
<td>Contenu lorsqu'il n'y a aucune option.</td>
</tr>
</tbody>
</table>
<h3 id="attributs-du-groupe-d-options"><a class="header-anchor" href="#attributs-du-groupe-d-options">¶</a> Attributs du groupe d'options</h3>
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
<td>label</td>
<td>Nom du group.</td>
<td>string</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>disabled</td>
<td>Si les options du groupe sont désactivées.</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
</tbody>
</table>
<h3 id="attributs-des-options"><a class="header-anchor" href="#attributs-des-options">¶</a> Attributs des options</h3>
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
<td>value</td>
<td>Valeur de l'option.</td>
<td>string/number/object</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>label</td>
<td>Label de l'option, identique à <code>value</code> si omis.</td>
<td>string/number</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>disabled</td>
<td>Si l'option est désactivée.</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
</tbody>
</table>
<h3 id="methodes"><a class="header-anchor" href="#methodes">¶</a> Méthodes</h3>
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
<td>Focus sur l'input.</td>
<td>-</td>
</tr>
<tr>
<td>blur</td>
<td>Enlève le focus de l'input et cache le menu.</td>
<td>-</td>
</tr>
</tbody>
</table>
