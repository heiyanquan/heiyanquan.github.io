<h2 id="dialog"><a class="header-anchor" href="#dialog">¶</a> Dialog</h2>
<p>Informe les utilisateurs tout en préservant l'état de la page.</p>
<h3 id="usage"><a class="header-anchor" href="#usage">¶</a> Usage</h3>
<p>Le Dialog ouvre un modal personnalisable.</p>
<demo-block>
        <div><p>Configurez l'attribut <code>visible</code> avec un <code>Boolean</code>, un modal apparaîtra quand la valeur sera à <code>true</code>. Le Dialog possède deux parties: <code>body</code> et <code>footer</code>, ce-dernier nécessitant un <code>slot</code> appelé <code>footer</code>. L'attribut optionnel <code>title</code> (vide par défaut) définit le titre. Cet exemple montre également comment <code>before-close</code> peut être utilisé.</p>
</div>
        <!--element-demo: <el-button type="text" @click="dialogVisible = true">Cliquez pour ouvrir le modal</el-button>

<el-dialog
  title="Tips"
  :visible.sync="dialogVisible"
  width="30%"
  :before-close="handleClose">
  <span>Ceci est un message</span>
  <span slot="footer" class="dialog-footer">
    <el-button @click="dialogVisible = false">Annuler</el-button>
    <el-button type="primary" @click="dialogVisible = false">Confirmer</el-button>
  </span>
</el-dialog>

<script>
  export default {
    data() {
      return {
        dialogVisible: false
      };
    },
    methods: {
      handleClose(done) {
        this.$confirm('Voulez-vous vraiment quitter ?')
          .then(_ => {
            done();
          })
          .catch(_ => {});
      }
    }
  };
</script>
:element-demo-->
        <template slot="highlight"><pre v-pre><code class="html">&lt;el-button type=&quot;text&quot; @click=&quot;dialogVisible = true&quot;&gt;Cliquez pour ouvrir le modal&lt;/el-button&gt;

&lt;el-dialog
  title=&quot;Tips&quot;
  :visible.sync=&quot;dialogVisible&quot;
  width=&quot;30%&quot;
  :before-close=&quot;handleClose&quot;&gt;
  &lt;span&gt;Ceci est un message&lt;/span&gt;
  &lt;span slot=&quot;footer&quot; class=&quot;dialog-footer&quot;&gt;
    &lt;el-button @click=&quot;dialogVisible = false&quot;&gt;Annuler&lt;/el-button&gt;
    &lt;el-button type=&quot;primary&quot; @click=&quot;dialogVisible = false&quot;&gt;Confirmer&lt;/el-button&gt;
  &lt;/span&gt;
&lt;/el-dialog&gt;

&lt;script&gt;
  export default {
    data() {
      return {
        dialogVisible: false
      };
    },
    methods: {
      handleClose(done) {
        this.$confirm('Voulez-vous vraiment quitter ?')
          .then(_ =&gt; {
            done();
          })
          .catch(_ =&gt; {});
      }
    }
  };
&lt;/script&gt;
</code></pre></template></demo-block><div class="tip">
<p><code>before-close</code> ne fonctionne que quand l'utilisateur clique sur l'icône de fermeture en dehors du modal. S'il y a des boutons dans le <code>footer</code>, vous pouvez configurer <code>before-close</code> grâce à leur évènement click.</p>
</div>
<h3 id="personalisation"><a class="header-anchor" href="#personalisation">¶</a> Personalisation</h3>
<p>Le contenu du modal peut être n'importe quoi, tableau ou formulaire compris.</p>
<demo-block>
        
        <!--element-demo: <!-- Table -->
<el-button type="text" @click="dialogTableVisible = true">Ouvrir un modal avec tableau</el-button>

<el-dialog title="Adresse d'expédition" :visible.sync="dialogTableVisible">
  <el-table :data="gridData">
    <el-table-column property="date" label="Date" width="150"></el-table-column>
    <el-table-column property="name" label="Nom" width="200"></el-table-column>
    <el-table-column property="address" label="Adresse"></el-table-column>
  </el-table>
</el-dialog>

<!-- Form -->
<el-button type="text" @click="dialogFormVisible = true">Ouvrir un modal avec formulaire</el-button>

<el-dialog title="Adresse d'expédition" :visible.sync="dialogFormVisible">
  <el-form :model="form">
    <el-form-item label="Nom de promotion" :label-width="formLabelWidth">
      <el-input v-model="form.name" autocomplete="off"></el-input>
    </el-form-item>
    <el-form-item label="Zones" :label-width="formLabelWidth">
      <el-select v-model="form.region" placeholder="Sélectionnez une zone">
        <el-option label="Zone No.1" value="shanghai"></el-option>
        <el-option label="Zone No.2" value="beijing"></el-option>
      </el-select>
    </el-form-item>
  </el-form>
  <span slot="footer" class="dialog-footer">
    <el-button @click="dialogFormVisible = false">Annuler</el-button>
    <el-button type="primary" @click="dialogFormVisible = false">Confirmer</el-button>
  </span>
</el-dialog>

<script>
  export default {
    data() {
      return {
        gridData: [{
          date: '2016-05-02',
          name: 'John Smith',
          address: 'No.1518,  Jinshajiang Road, Putuo District'
        }, {
          date: '2016-05-04',
          name: 'John Smith',
          address: 'No.1518,  Jinshajiang Road, Putuo District'
        }, {
          date: '2016-05-01',
          name: 'John Smith',
          address: 'No.1518,  Jinshajiang Road, Putuo District'
        }, {
          date: '2016-05-03',
          name: 'John Smith',
          address: 'No.1518,  Jinshajiang Road, Putuo District'
        }],
        dialogTableVisible: false,
        dialogFormVisible: false,
        form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },
        formLabelWidth: '120px'
      };
    }
  };
</script>
:element-demo-->
        <template slot="highlight"><pre v-pre><code class="html">&lt;!-- Table --&gt;
&lt;el-button type=&quot;text&quot; @click=&quot;dialogTableVisible = true&quot;&gt;Ouvrir un modal avec tableau&lt;/el-button&gt;

&lt;el-dialog title=&quot;Adresse d'expédition&quot; :visible.sync=&quot;dialogTableVisible&quot;&gt;
  &lt;el-table :data=&quot;gridData&quot;&gt;
    &lt;el-table-column property=&quot;date&quot; label=&quot;Date&quot; width=&quot;150&quot;&gt;&lt;/el-table-column&gt;
    &lt;el-table-column property=&quot;name&quot; label=&quot;Nom&quot; width=&quot;200&quot;&gt;&lt;/el-table-column&gt;
    &lt;el-table-column property=&quot;address&quot; label=&quot;Adresse&quot;&gt;&lt;/el-table-column&gt;
  &lt;/el-table&gt;
&lt;/el-dialog&gt;

&lt;!-- Form --&gt;
&lt;el-button type=&quot;text&quot; @click=&quot;dialogFormVisible = true&quot;&gt;Ouvrir un modal avec formulaire&lt;/el-button&gt;

&lt;el-dialog title=&quot;Adresse d'expédition&quot; :visible.sync=&quot;dialogFormVisible&quot;&gt;
  &lt;el-form :model=&quot;form&quot;&gt;
    &lt;el-form-item label=&quot;Nom de promotion&quot; :label-width=&quot;formLabelWidth&quot;&gt;
      &lt;el-input v-model=&quot;form.name&quot; autocomplete=&quot;off&quot;&gt;&lt;/el-input&gt;
    &lt;/el-form-item&gt;
    &lt;el-form-item label=&quot;Zones&quot; :label-width=&quot;formLabelWidth&quot;&gt;
      &lt;el-select v-model=&quot;form.region&quot; placeholder=&quot;Sélectionnez une zone&quot;&gt;
        &lt;el-option label=&quot;Zone No.1&quot; value=&quot;shanghai&quot;&gt;&lt;/el-option&gt;
        &lt;el-option label=&quot;Zone No.2&quot; value=&quot;beijing&quot;&gt;&lt;/el-option&gt;
      &lt;/el-select&gt;
    &lt;/el-form-item&gt;
  &lt;/el-form&gt;
  &lt;span slot=&quot;footer&quot; class=&quot;dialog-footer&quot;&gt;
    &lt;el-button @click=&quot;dialogFormVisible = false&quot;&gt;Annuler&lt;/el-button&gt;
    &lt;el-button type=&quot;primary&quot; @click=&quot;dialogFormVisible = false&quot;&gt;Confirmer&lt;/el-button&gt;
  &lt;/span&gt;
&lt;/el-dialog&gt;

&lt;script&gt;
  export default {
    data() {
      return {
        gridData: [{
          date: '2016-05-02',
          name: 'John Smith',
          address: 'No.1518,  Jinshajiang Road, Putuo District'
        }, {
          date: '2016-05-04',
          name: 'John Smith',
          address: 'No.1518,  Jinshajiang Road, Putuo District'
        }, {
          date: '2016-05-01',
          name: 'John Smith',
          address: 'No.1518,  Jinshajiang Road, Putuo District'
        }, {
          date: '2016-05-03',
          name: 'John Smith',
          address: 'No.1518,  Jinshajiang Road, Putuo District'
        }],
        dialogTableVisible: false,
        dialogFormVisible: false,
        form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },
        formLabelWidth: '120px'
      };
    }
  };
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="dialog-imbrique"><a class="header-anchor" href="#dialog-imbrique">¶</a> Dialog imbriqué</h3>
<p>Si un Dialog est imbriqué dans un autre Dialog, <code>append-to-body</code> est requis.</p>
<demo-block>
        <div><p>Normalement l'utilisation de Dialog imbriqué est déconseillée. Si vous avez besoin de plusieurs Dialogs sur la page, vous pouvez les aplatir afin qu'ils soit au même niveau. Si vous devez absolument utiliser un Dialog imbriqué, configurez l'attribut <code>append-to-body</code> du Dialog imbriqué à <code>true</code> et il sera ajouté au body au lieu de son noeud parent, afin d'avoir un affichage correct.</p>
</div>
        <!--element-demo: <template>
  <el-button type="text" @click="outerVisible = true">Ouvrir le modal extérieur</el-button>

  <el-dialog title="Modal extérieur" :visible.sync="outerVisible">
    <el-dialog
        width="30%"
        title="Modal intérieur"
        :visible.sync="innerVisible"
        append-to-body>
    </el-dialog>
    <div slot="footer" class="dialog-footer">
      <el-button @click="outerVisible = false">Annuler</el-button>
      <el-button type="primary" @click="innerVisible = true">Ouvrir le modal intérieur</el-button>
    </div>
  </el-dialog>
</template>

<script>
  export default {
    data() {
      return {
        outerVisible: false,
        innerVisible: false
      };
    }
  }
</script>
:element-demo-->
        <template slot="highlight"><pre v-pre><code class="html">&lt;template&gt;
  &lt;el-button type=&quot;text&quot; @click=&quot;outerVisible = true&quot;&gt;Ouvrir le modal extérieur&lt;/el-button&gt;

  &lt;el-dialog title=&quot;Modal extérieur&quot; :visible.sync=&quot;outerVisible&quot;&gt;
    &lt;el-dialog
        width=&quot;30%&quot;
        title=&quot;Modal intérieur&quot;
        :visible.sync=&quot;innerVisible&quot;
        append-to-body&gt;
    &lt;/el-dialog&gt;
    &lt;div slot=&quot;footer&quot; class=&quot;dialog-footer&quot;&gt;
      &lt;el-button @click=&quot;outerVisible = false&quot;&gt;Annuler&lt;/el-button&gt;
      &lt;el-button type=&quot;primary&quot; @click=&quot;innerVisible = true&quot;&gt;Ouvrir le modal intérieur&lt;/el-button&gt;
    &lt;/div&gt;
  &lt;/el-dialog&gt;
&lt;/template&gt;

&lt;script&gt;
  export default {
    data() {
      return {
        outerVisible: false,
        innerVisible: false
      };
    }
  }
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="centrer-le-contenu"><a class="header-anchor" href="#centrer-le-contenu">¶</a> Centrer le contenu</h3>
<p>Le contenu du modal peut être centré.</p>
<demo-block>
        <div><p>Régler <code>center</code> à <code>true</code> centrera horizontalement le header et le footer. <code>center</code> n'affecte que le header et le footer. Le contenu du body pouvant être n'importe quoi, si vous désirez le centrer vous devrez ajouter des règles CSS.</p>
</div>
        <!--element-demo: <el-button type="text" @click="centerDialogVisible = true">Cliquez pour ouvrir le modal</el-button>

<el-dialog
  title="Attention"
  :visible.sync="centerDialogVisible"
  width="30%"
  center>
  <span>Le contenu du modal n'est pas centré par défaut.</span>
  <span slot="footer" class="dialog-footer">
    <el-button @click="centerDialogVisible = false">Annuler</el-button>
    <el-button type="primary" @click="centerDialogVisible = false">Confirmer</el-button>
  </span>
</el-dialog>

<script>
  export default {
    data() {
      return {
        centerDialogVisible: false
      };
    }
  };
</script>
:element-demo-->
        <template slot="highlight"><pre v-pre><code class="html">&lt;el-button type=&quot;text&quot; @click=&quot;centerDialogVisible = true&quot;&gt;Cliquez pour ouvrir le modal&lt;/el-button&gt;

&lt;el-dialog
  title=&quot;Attention&quot;
  :visible.sync=&quot;centerDialogVisible&quot;
  width=&quot;30%&quot;
  center&gt;
  &lt;span&gt;Le contenu du modal n'est pas centré par défaut.&lt;/span&gt;
  &lt;span slot=&quot;footer&quot; class=&quot;dialog-footer&quot;&gt;
    &lt;el-button @click=&quot;centerDialogVisible = false&quot;&gt;Annuler&lt;/el-button&gt;
    &lt;el-button type=&quot;primary&quot; @click=&quot;centerDialogVisible = false&quot;&gt;Confirmer&lt;/el-button&gt;
  &lt;/span&gt;
&lt;/el-dialog&gt;

&lt;script&gt;
  export default {
    data() {
      return {
        centerDialogVisible: false
      };
    }
  };
&lt;/script&gt;
</code></pre></template></demo-block><div class="tip">
<p>Le contenu de Dialog bénéficie du lazy loading, ce qui signifie que le slot par défaut n'est pas généré par le DOM avant la première ouverture. Si vous avez besoin de manipuler le DOM ou d'accéder à un composant via <code>ref</code>, vous pouvez le faire avec la callback de l'évènement <code>open</code>.</p>
</div>
<div class="tip">
<p>Si la variable liée à <code>visible</code> est gérée dans Vuex, le modificateur <code>.sync</code> ne peut pas fonctionner. Dans ce cas retirez-le, écoutez les évènements <code>open</code> et <code>close</code>, et commitez les mutations Vuex pour mettre à jour la valeur de cette variable.</p>
</div>
<h3 id="attributs"><a class="header-anchor" href="#attributs">¶</a> Attributs</h3>
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
<td>visible</td>
<td>Visibilité du Dialog, supporte le modificateur .sync.</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>title</td>
<td>Titre du Dialog. Peut aussi être passé via un slot (voir la table suivante).</td>
<td>string</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>width</td>
<td>Largeur du Dialog.</td>
<td>string</td>
<td>—</td>
<td>50%</td>
</tr>
<tr>
<td>fullscreen</td>
<td>Si le Dialog doit être en plein écran.</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>top</td>
<td>Valeur du <code>margin-top</code> du CSS du Dialog.</td>
<td>string</td>
<td>—</td>
<td>15vh</td>
</tr>
<tr>
<td>modal</td>
<td>Si un masque est affiché.</td>
<td>boolean</td>
<td>—</td>
<td>true</td>
</tr>
<tr>
<td>modal-append-to-body</td>
<td>S'il faut ajouter le modal au body. Si <code>false</code>, le modal sera ajouter à l'élément parent du Dialog.</td>
<td>boolean</td>
<td>—</td>
<td>true</td>
</tr>
<tr>
<td>append-to-body</td>
<td>S'il faut ajouter le Dialog au body. Un Dialog imbriqué doit avoir cet attribut à <code>true</code>.</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>lock-scroll</td>
<td>Si le défilement du body est désactivé.</td>
<td>boolean</td>
<td>—</td>
<td>true</td>
</tr>
<tr>
<td>custom-class</td>
<td>Nom de classe pour le Dialog</td>
<td>string</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>close-on-click-modal</td>
<td>Si le Dialog peut être fermé en cliquant sur le masque.</td>
<td>boolean</td>
<td>—</td>
<td>true</td>
</tr>
<tr>
<td>close-on-press-escape</td>
<td>Si le Dialog peut être fermé en appuyant sur Echap.</td>
<td>boolean</td>
<td>—</td>
<td>true</td>
</tr>
<tr>
<td>show-close</td>
<td>Si le bouton de fermeture doit apparaître.</td>
<td>boolean</td>
<td>—</td>
<td>true</td>
</tr>
<tr>
<td>before-close</td>
<td>Callback avant la fermeture du Dialog.</td>
<td>function(done)，done est utilisé pour fermer le Dialog.</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>center</td>
<td>Si le header et le footer doivent être centrés.</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>destroy-on-close</td>
<td>Destroy elements in Dialog when closed</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
</tbody>
</table>
<h3 id="slot"><a class="header-anchor" href="#slot">¶</a> Slot</h3>
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
<td>Contenu du Dialog.</td>
</tr>
<tr>
<td>title</td>
<td>Contenu du titre.</td>
</tr>
<tr>
<td>footer</td>
<td>Contenu du footer.</td>
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
<td>open</td>
<td>Se déclenche quand le Dialog s'ouvre.</td>
<td>—</td>
</tr>
<tr>
<td>opened</td>
<td>Se déclenche quand l'animation d'ouverture est terminée.</td>
<td>—</td>
</tr>
<tr>
<td>close</td>
<td>Se déclenche quand le Dialog se ferme.</td>
<td>—</td>
</tr>
<tr>
<td>closed</td>
<td>Se déclenche quand l'animation de fermeture du Dialog est terminée.</td>
<td>—</td>
</tr>
</tbody>
</table>
