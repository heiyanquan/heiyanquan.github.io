<h2 id="tabs"><a class="header-anchor" href="#tabs">¶</a> Tabs</h2>
<p>Divise des collections de données de types différents, mais reliées entre elles par un contexte ou un type global.</p>
<h3 id="usage"><a class="header-anchor" href="#usage">¶</a> Usage</h3>
<p>Onglets basiques.</p>
<demo-block>
        <div><p>Tabs fournit un outil de sélection des onglets. Par défaut, le premier onglet est sélectionné et actif mais vous pouvez activer n'importe lequel en réglant l'attribut <code>value</code>.</p>
</div>
        <!--element-demo: <template>
  <el-tabs v-model="activeName" @tab-click="handleClick">
    <el-tab-pane label="User" name="first">Utilisateur</el-tab-pane>
    <el-tab-pane label="Config" name="second">Config</el-tab-pane>
    <el-tab-pane label="Role" name="third">Rôle</el-tab-pane>
    <el-tab-pane label="Task" name="fourth">Tâche</el-tab-pane>
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
    &lt;el-tab-pane label=&quot;User&quot; name=&quot;first&quot;&gt;Utilisateur&lt;/el-tab-pane&gt;
    &lt;el-tab-pane label=&quot;Config&quot; name=&quot;second&quot;&gt;Config&lt;/el-tab-pane&gt;
    &lt;el-tab-pane label=&quot;Role&quot; name=&quot;third&quot;&gt;Rôle&lt;/el-tab-pane&gt;
    &lt;el-tab-pane label=&quot;Task&quot; name=&quot;fourth&quot;&gt;Tâche&lt;/el-tab-pane&gt;
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
</code></pre></template></demo-block><h3 id="style-carte"><a class="header-anchor" href="#style-carte">¶</a> Style carte</h3>
<p>Les onglets peuvent être stylisés comme des cartes.</p>
<demo-block>
        <div><p>Mettez <code>type</code> à <code>card</code> pour avoir des onglets avec un style de carte.</p>
</div>
        <!--element-demo: <template>
  <el-tabs type="card" @tab-click="handleClick">
    <el-tab-pane label="User">Utilisateur</el-tab-pane>
    <el-tab-pane label="Config">Config</el-tab-pane>
    <el-tab-pane label="Role">Rôle</el-tab-pane>
    <el-tab-pane label="Task">Tâche</el-tab-pane>
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
    &lt;el-tab-pane label=&quot;User&quot;&gt;Utilisateur&lt;/el-tab-pane&gt;
    &lt;el-tab-pane label=&quot;Config&quot;&gt;Config&lt;/el-tab-pane&gt;
    &lt;el-tab-pane label=&quot;Role&quot;&gt;Rôle&lt;/el-tab-pane&gt;
    &lt;el-tab-pane label=&quot;Task&quot;&gt;Tâche&lt;/el-tab-pane&gt;
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
</code></pre></template></demo-block><h3 id="style-carte-avec-bordure"><a class="header-anchor" href="#style-carte-avec-bordure">¶</a> Style carte avec bordure</h3>
<p>Onglets avec style de carte et bordure.</p>
<demo-block>
        <div><p>Mettez <code>type</code> à <code>border-card</code>.</p>
</div>
        <!--element-demo: <el-tabs type="border-card">
  <el-tab-pane label="User">Utilisateur</el-tab-pane>
  <el-tab-pane label="Config">Config</el-tab-pane>
  <el-tab-pane label="Role">Rôle</el-tab-pane>
  <el-tab-pane label="Task">Tâche</el-tab-pane>
</el-tabs>
:element-demo-->
        <template slot="highlight"><pre v-pre><code class="html">&lt;el-tabs type=&quot;border-card&quot;&gt;
  &lt;el-tab-pane label=&quot;User&quot;&gt;Utilisateur&lt;/el-tab-pane&gt;
  &lt;el-tab-pane label=&quot;Config&quot;&gt;Config&lt;/el-tab-pane&gt;
  &lt;el-tab-pane label=&quot;Role&quot;&gt;Rôle&lt;/el-tab-pane&gt;
  &lt;el-tab-pane label=&quot;Task&quot;&gt;Tâche&lt;/el-tab-pane&gt;
&lt;/el-tabs&gt;
</code></pre></template></demo-block><h3 id="position-des-onglets"><a class="header-anchor" href="#position-des-onglets">¶</a> Position des onglets</h3>
<p>Vous pouvez utiliser <code>tab-position</code> pour régler la position des onglets.</p>
<demo-block>
        <div><p>Il y a quatre positions différentes: <code>tabPosition=&quot;left|right|top|bottom&quot;</code></p>
</div>
        <!--element-demo: <template>
  <el-radio-group v-model="tabPosition" style="margin-bottom: 30px;">
    <el-radio-button label="top">En haut</el-radio-button>
    <el-radio-button label="right">À droite</el-radio-button>
    <el-radio-button label="bottom">En bas</el-radio-button>
    <el-radio-button label="left">À gauche</el-radio-button>
  </el-radio-group>

  <el-tabs :tab-position="tabPosition" style="height: 200px;">
    <el-tab-pane label="User">Utilisateur</el-tab-pane>
    <el-tab-pane label="Config">Config</el-tab-pane>
    <el-tab-pane label="Role">Rôle</el-tab-pane>
    <el-tab-pane label="Task">Tâche</el-tab-pane>
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
    &lt;el-radio-button label=&quot;top&quot;&gt;En haut&lt;/el-radio-button&gt;
    &lt;el-radio-button label=&quot;right&quot;&gt;À droite&lt;/el-radio-button&gt;
    &lt;el-radio-button label=&quot;bottom&quot;&gt;En bas&lt;/el-radio-button&gt;
    &lt;el-radio-button label=&quot;left&quot;&gt;À gauche&lt;/el-radio-button&gt;
  &lt;/el-radio-group&gt;

  &lt;el-tabs :tab-position=&quot;tabPosition&quot; style=&quot;height: 200px;&quot;&gt;
    &lt;el-tab-pane label=&quot;User&quot;&gt;Utilisateur&lt;/el-tab-pane&gt;
    &lt;el-tab-pane label=&quot;Config&quot;&gt;Config&lt;/el-tab-pane&gt;
    &lt;el-tab-pane label=&quot;Role&quot;&gt;Rôle&lt;/el-tab-pane&gt;
    &lt;el-tab-pane label=&quot;Task&quot;&gt;Tâche&lt;/el-tab-pane&gt;
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
</code></pre></template></demo-block><h3 id="onglet-personnalise"><a class="header-anchor" href="#onglet-personnalise">¶</a> Onglet personnalisé</h3>
<p>Vous pouvez utiliser un slot pour customiser le label d'un onglet.</p>
<demo-block>
        
        <!--element-demo: <el-tabs type="border-card">
  <el-tab-pane>
    <span slot="label"><i class="el-icon-date"></i> Route</span>
    Route
  </el-tab-pane>
  <el-tab-pane label="Config">Config</el-tab-pane>
  <el-tab-pane label="Role">Rôle</el-tab-pane>
  <el-tab-pane label="Task">Tâche</el-tab-pane>
</el-tabs>
:element-demo-->
        <template slot="highlight"><pre v-pre><code class="html">&lt;el-tabs type=&quot;border-card&quot;&gt;
  &lt;el-tab-pane&gt;
    &lt;span slot=&quot;label&quot;&gt;&lt;i class=&quot;el-icon-date&quot;&gt;&lt;/i&gt; Route&lt;/span&gt;
    Route
  &lt;/el-tab-pane&gt;
  &lt;el-tab-pane label=&quot;Config&quot;&gt;Config&lt;/el-tab-pane&gt;
  &lt;el-tab-pane label=&quot;Role&quot;&gt;Rôle&lt;/el-tab-pane&gt;
  &lt;el-tab-pane label=&quot;Task&quot;&gt;Tâche&lt;/el-tab-pane&gt;
&lt;/el-tabs&gt;
</code></pre></template></demo-block><h3 id="ajouter-et-supprimer-des-onglets"><a class="header-anchor" href="#ajouter-et-supprimer-des-onglets">¶</a> Ajouter et supprimer des onglets</h3>
<p>Seuls les onglets de type carte supportent l'ajout et la suppression.</p>
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
          title: 'Onglet 1',
          name: '1',
          content: 'Contenu de l\'onglet 1'
        }, {
          title: 'Onglet 2',
          name: '2',
          content: 'Contenu de l\'onglet 2'
        }],
        tabIndex: 2
      }
    },
    methods: {
      handleTabsEdit(targetName, action) {
        if (action === 'add') {
          let newTabName = ++this.tabIndex + '';
          this.editableTabs.push({
            title: 'Nouvel onglet',
            name: newTabName,
            content: 'Contenu du nouvel onglet'
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
          title: 'Onglet 1',
          name: '1',
          content: 'Contenu de l\'onglet 1'
        }, {
          title: 'Onglet 2',
          name: '2',
          content: 'Contenu de l\'onglet 2'
        }],
        tabIndex: 2
      }
    },
    methods: {
      handleTabsEdit(targetName, action) {
        if (action === 'add') {
          let newTabName = ++this.tabIndex + '';
          this.editableTabs.push({
            title: 'Nouvel onglet',
            name: newTabName,
            content: 'Contenu du nouvel onglet'
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
</code></pre></template></demo-block><h3 id="personnaliser-le-bouton-d-ajout-d-onglet"><a class="header-anchor" href="#personnaliser-le-bouton-d-ajout-d-onglet">¶</a> Personnaliser le bouton d'ajout d'onglet</h3>
<demo-block>
        
        <!--element-demo: <div style="margin-bottom: 20px;">
  <el-button
    size="small"
    @click="addTab(editableTabsValue)"
  >
    Ajouter un onglet
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
          title: 'Onglet 1',
          name: '1',
          content: 'Contenu de l\'onglet 1'
        }, {
          title: 'Onglet 2',
          name: '2',
          content: 'Contenu de l\'onglet 2'
        }],
        tabIndex: 2
      }
    },
    methods: {
      addTab(targetName) {
        let newTabName = ++this.tabIndex + '';
        this.editableTabs.push({
          title: 'Nouvel onglet',
          name: newTabName,
          content: 'Contenu du nouvel onglet'
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
    Ajouter un onglet
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
          title: 'Onglet 1',
          name: '1',
          content: 'Contenu de l\'onglet 1'
        }, {
          title: 'Onglet 2',
          name: '2',
          content: 'Contenu de l\'onglet 2'
        }],
        tabIndex: 2
      }
    },
    methods: {
      addTab(targetName) {
        let newTabName = ++this.tabIndex + '';
        this.editableTabs.push({
          title: 'Nouvel onglet',
          name: newTabName,
          content: 'Contenu du nouvel onglet'
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
</code></pre></template></demo-block><h3 id="attributs-de-tabs"><a class="header-anchor" href="#attributs-de-tabs">¶</a> Attributs de Tabs</h3>
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
<td>La valeur liée, nom de l'onglet sélectionné.</td>
<td>string</td>
<td>—</td>
<td>Nom du premier onglet.</td>
</tr>
<tr>
<td>type</td>
<td>Type de l'onglet.</td>
<td>string</td>
<td>card/border-card</td>
<td>—</td>
</tr>
<tr>
<td>closable</td>
<td>Si des onglets peuvent être supprimés.</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>addable</td>
<td>Si des onglets peuvent être ajoutés.</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>editable</td>
<td>Si des onglets peuvent être ajoutés et supprimés.</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>tab-position</td>
<td>Position des onglets.</td>
<td>string</td>
<td>top/right/bottom/left</td>
<td>top</td>
</tr>
<tr>
<td>stretch</td>
<td>Si la largeur des onglets s'adapte au conteneur.</td>
<td>boolean</td>
<td>-</td>
<td>false</td>
</tr>
<tr>
<td>before-leave</td>
<td>Fonction de hook avant de changer d'onglet. Si <code>false</code> est retourné ou qu'une <code>Promise</code> retournée et rejetée, le changement sera annulé.</td>
<td>Function(activeName, oldActiveName)</td>
<td>—</td>
<td>—</td>
</tr>
</tbody>
</table>
<h3 id="evenements-de-tabs"><a class="header-anchor" href="#evenements-de-tabs">¶</a> Évènements de Tabs</h3>
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
<td>tab-click</td>
<td>Se déclenche quand on clique sur un onglet.</td>
<td>clicked tab</td>
</tr>
<tr>
<td>tab-remove</td>
<td>Se déclenche quand on clique sur le bouton de suppression des onglets.</td>
<td>name of the removed tab</td>
</tr>
<tr>
<td>tab-add</td>
<td>Se déclenche quand on clique sur le bouton d'ajout des onglets.</td>
<td>—</td>
</tr>
<tr>
<td>edit</td>
<td>Se déclenche quand on clique sur les boutons d'ajout ou de suppression des onglets.</td>
<td>(targetName, action)</td>
</tr>
</tbody>
</table>
<h3 id="attributs-de-tab-pane"><a class="header-anchor" href="#attributs-de-tab-pane">¶</a> Attributs de Tab-pane</h3>
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
<td>Titre de l'onglet.</td>
<td>string</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>disabled</td>
<td>Si l'onglet est désactivé.</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>name</td>
<td>Identifiant correspondant au nom des onglets, utilisé par Tabs pour savoir quel est l'onglet actif.</td>
<td>string</td>
<td>—</td>
<td>Numéro de l'onglet dans l'ordre d'apparition, e.g. le premier est '1'.</td>
</tr>
<tr>
<td>closable</td>
<td>Si l'onglet est supprimable.</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>lazy</td>
<td>Si le contenu de l'onglet bénéficie du lazy-loading.</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
</tbody>
</table>
