<h2 id="transfer"><a class="header-anchor" href="#transfer">¶</a> Transfer</h2>
<p>Permet de transférer des options d'une liste à une autre de manière ergonomique.</p>
<h3 id="usage"><a class="header-anchor" href="#usage">¶</a> Usage</h3>
<demo-block>
        <div><p>Les données sont passée via l'attribut <code>data</code>. Ce doit être un tableau d'objets, chaque objet ayant les propriétés suivantes: <code>key</code> étant l'identifiant de l'objet, <code>label</code> étant le texte à afficher et <code>disabled</code> indiquant si l'objet est désactivé. Ces objets sont synchronisés avec <code>v-model</code>, sa valeur étant un tableau d'identifiants des objets. Si vous ne souhaitez pas avoir une liste vide par défaut, vous pouvez donc initialiser <code>v-model</code> avec un tableau.</p>
</div>
        <!--element-demo: <template>
  <el-transfer
    v-model="value"
    :data="data">
  </el-transfer>
</template>

<script>
  export default {
    data() {
      const generateData = _ => {
        const data = [];
        for (let i = 1; i <= 15; i++) {
          data.push({
            key: i,
            label: `Option ${ i }`,
            disabled: i % 4 === 0
          });
        }
        return data;
      };
      return {
        data: generateData(),
        value: [1, 4]
      };
    }
  };
</script>
:element-demo-->
        <template slot="highlight"><pre v-pre><code class="html">&lt;template&gt;
  &lt;el-transfer
    v-model=&quot;value&quot;
    :data=&quot;data&quot;&gt;
  &lt;/el-transfer&gt;
&lt;/template&gt;

&lt;script&gt;
  export default {
    data() {
      const generateData = _ =&gt; {
        const data = [];
        for (let i = 1; i &lt;= 15; i++) {
          data.push({
            key: i,
            label: `Option ${ i }`,
            disabled: i % 4 === 0
          });
        }
        return data;
      };
      return {
        data: generateData(),
        value: [1, 4]
      };
    }
  };
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="filtrable"><a class="header-anchor" href="#filtrable">¶</a> Filtrable</h3>
<p>Vous pouvez filtrer les options.</p>
<demo-block>
        <div><p>Ajoutez l'attribut <code>filterable</code> activer le filtrage. Par défaut, si la propriété <code>label</code> de l'objet contient le mot-clé, il sera inclus dans les résultats. Vous pouvez aussi implémenter votre propre filtre grâce à <code>filter-method</code>. Cette fonction est lancée à chaque changement de mot-clé. Si elle retourne <code>true</code> l'objet en question sera dans les résultats.</p>
</div>
        <!--element-demo: <template>
  <el-transfer
    filterable
    :filter-method="filterMethod"
    filter-placeholder="State Abbreviations"
    v-model="value"
    :data="data">
  </el-transfer>
</template>

<script>
  export default {
    data() {
      const generateData = _ => {
        const data = [];
        const states = ['California', 'Illinois', 'Maryland', 'Texas', 'Florida', 'Colorado', 'Connecticut '];
        const initials = ['CA', 'IL', 'MD', 'TX', 'FL', 'CO', 'CT'];
        states.forEach((city, index) => {
          data.push({
            label: city,
            key: index,
            initial: initials[index]
          });
        });
        return data;
      };
      return {
        data: generateData(),
        value: [],
        filterMethod(query, item) {
          return item.initial.toLowerCase().indexOf(query.toLowerCase()) > -1;
        }
      };
    }
  };
</script>
:element-demo-->
        <template slot="highlight"><pre v-pre><code class="html">&lt;template&gt;
  &lt;el-transfer
    filterable
    :filter-method=&quot;filterMethod&quot;
    filter-placeholder=&quot;State Abbreviations&quot;
    v-model=&quot;value&quot;
    :data=&quot;data&quot;&gt;
  &lt;/el-transfer&gt;
&lt;/template&gt;

&lt;script&gt;
  export default {
    data() {
      const generateData = _ =&gt; {
        const data = [];
        const states = ['California', 'Illinois', 'Maryland', 'Texas', 'Florida', 'Colorado', 'Connecticut '];
        const initials = ['CA', 'IL', 'MD', 'TX', 'FL', 'CO', 'CT'];
        states.forEach((city, index) =&gt; {
          data.push({
            label: city,
            key: index,
            initial: initials[index]
          });
        });
        return data;
      };
      return {
        data: generateData(),
        value: [],
        filterMethod(query, item) {
          return item.initial.toLowerCase().indexOf(query.toLowerCase()) &gt; -1;
        }
      };
    }
  };
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="personnalisable"><a class="header-anchor" href="#personnalisable">¶</a> Personnalisable</h3>
<p>Vous pouvez personnaliser les titres, les textes des boutons, les fonctions de rendu pour les objets et le contenu du footer.</p>
<demo-block>
        <div><p>Utilisez <code>titles</code>, <code>button-texts</code>, <code>render-content</code> et <code>format</code> pour personnaliser respectivement les titres des listes, les textes des boutons, les fonctions de rendus des objets et le texte des statuts du header. Vous pouvez aussi utiliser des slots pour les objets. Pour le contenu du footer, deux slots sont fournis: <code>left-footer</code> et <code>right-footer</code>. Si vous souhaitez que certains items soient sélectionnés par défaut, utilisez <code>left-default-checked</code> et <code>right-default-checked</code>. Enfin, cet exemple utilise aussi l'évènement <code>change</code>. Notez que cet exemple ne fonctionne pas dans jsfiddle car il ne supporte pas JSX. Dans un vrai projet, <code>render-content</code> fonctionnera si les dépendances sont satisfaites.</p>
</div>
        <!--element-demo: <template>
  <p style="text-align: center; margin: 0 0 20px">Utilise render-content</p>
  <div style="text-align: center">
    <el-transfer
      style="text-align: left; display: inline-block"
      v-model="value"
      filterable
      :left-default-checked="[2, 3]"
      :right-default-checked="[1]"
      :render-content="renderFunc"
      :titles="['Source', 'Target']"
      :button-texts="['To left', 'To right']"
      :format="{
        noChecked: '${total}',
        hasChecked: '${checked}/${total}'
      }"
      @change="handleChange"
      :data="data">
      <el-button class="transfer-footer" slot="left-footer" size="small">Opération</el-button>
      <el-button class="transfer-footer" slot="right-footer" size="small">Opération</el-button>
    </el-transfer>
    <p style="text-align: center; margin: 50px 0 20px">Utilise des slots</p>
    <div style="text-align: center">
      <el-transfer
        style="text-align: left; display: inline-block"
        v-model="value4"
        filterable
        :left-default-checked="[2, 3]"
        :right-default-checked="[1]"
        :titles="['Source', 'Target']"
        :button-texts="['To left', 'To right']"
        :format="{
          noChecked: '${total}',
          hasChecked: '${checked}/${total}'
        }"
        @change="handleChange"
        :data="data">
        <span slot-scope="{ option }">{{ option.key }} - {{ option.label }}</span>
        <el-button class="transfer-footer" slot="left-footer" size="small">Opération</el-button>
        <el-button class="transfer-footer" slot="right-footer" size="small">Opération</el-button>
      </el-transfer>
    </div>
  </div>
</template>

<style>
  .transfer-footer {
    margin-left: 20px;
    padding: 6px 5px;
  }
</style>

<script>
  export default {
    data() {
      const generateData = _ => {
        const data = [];
        for (let i = 1; i <= 15; i++) {
          data.push({
            key: i,
            label: `Option ${ i }`,
            disabled: i % 4 === 0
          });
        }
        return data;
      };
      return {
        data: generateData(),
        value: [1],
        value4: [1],
        renderFunc(h, option) {
          return <span>{ option.key } - { option.label }</span>;
        }
      };
    },

    methods: {
      handleChange(value, direction, movedKeys) {
        console.log(value, direction, movedKeys);
      }
    }
  };
</script>
:element-demo-->
        <template slot="highlight"><pre v-pre><code class="html">&lt;template&gt;
  &lt;p style=&quot;text-align: center; margin: 0 0 20px&quot;&gt;Utilise render-content&lt;/p&gt;
  &lt;div style=&quot;text-align: center&quot;&gt;
    &lt;el-transfer
      style=&quot;text-align: left; display: inline-block&quot;
      v-model=&quot;value&quot;
      filterable
      :left-default-checked=&quot;[2, 3]&quot;
      :right-default-checked=&quot;[1]&quot;
      :render-content=&quot;renderFunc&quot;
      :titles=&quot;['Source', 'Target']&quot;
      :button-texts=&quot;['To left', 'To right']&quot;
      :format=&quot;{
        noChecked: '${total}',
        hasChecked: '${checked}/${total}'
      }&quot;
      @change=&quot;handleChange&quot;
      :data=&quot;data&quot;&gt;
      &lt;el-button class=&quot;transfer-footer&quot; slot=&quot;left-footer&quot; size=&quot;small&quot;&gt;Opération&lt;/el-button&gt;
      &lt;el-button class=&quot;transfer-footer&quot; slot=&quot;right-footer&quot; size=&quot;small&quot;&gt;Opération&lt;/el-button&gt;
    &lt;/el-transfer&gt;
    &lt;p style=&quot;text-align: center; margin: 50px 0 20px&quot;&gt;Utilise des slots&lt;/p&gt;
    &lt;div style=&quot;text-align: center&quot;&gt;
      &lt;el-transfer
        style=&quot;text-align: left; display: inline-block&quot;
        v-model=&quot;value4&quot;
        filterable
        :left-default-checked=&quot;[2, 3]&quot;
        :right-default-checked=&quot;[1]&quot;
        :titles=&quot;['Source', 'Target']&quot;
        :button-texts=&quot;['To left', 'To right']&quot;
        :format=&quot;{
          noChecked: '${total}',
          hasChecked: '${checked}/${total}'
        }&quot;
        @change=&quot;handleChange&quot;
        :data=&quot;data&quot;&gt;
        &lt;span slot-scope=&quot;{ option }&quot;&gt;{{ option.key }} - {{ option.label }}&lt;/span&gt;
        &lt;el-button class=&quot;transfer-footer&quot; slot=&quot;left-footer&quot; size=&quot;small&quot;&gt;Opération&lt;/el-button&gt;
        &lt;el-button class=&quot;transfer-footer&quot; slot=&quot;right-footer&quot; size=&quot;small&quot;&gt;Opération&lt;/el-button&gt;
      &lt;/el-transfer&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;style&gt;
  .transfer-footer {
    margin-left: 20px;
    padding: 6px 5px;
  }
&lt;/style&gt;

&lt;script&gt;
  export default {
    data() {
      const generateData = _ =&gt; {
        const data = [];
        for (let i = 1; i &lt;= 15; i++) {
          data.push({
            key: i,
            label: `Option ${ i }`,
            disabled: i % 4 === 0
          });
        }
        return data;
      };
      return {
        data: generateData(),
        value: [1],
        value4: [1],
        renderFunc(h, option) {
          return &lt;span&gt;{ option.key } - { option.label }&lt;/span&gt;;
        }
      };
    },

    methods: {
      handleChange(value, direction, movedKeys) {
        console.log(value, direction, movedKeys);
      }
    }
  };
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="alias-des-proprietes"><a class="header-anchor" href="#alias-des-proprietes">¶</a> Alias des propriétés</h3>
<p>Par défaut, Transfer utilise <code>key</code>, <code>label</code> et <code>disabled</code> de vos objets. Si vos objets ont des propriétés différentes, vous pouvez utiliser l'attribut <code>props</code> pour définir des alias.</p>
<demo-block>
        <div><p>Les objets de cet exemple n'ont pas de <code>key</code> ni <code>label</code>, à la place ils ont <code>value</code> et <code>desc</code>. Vous devez donc configurer les alias de <code>key</code> et <code>label</code>.</p>
</div>
        <!--element-demo: <template>
  <el-transfer
    v-model="value"
    :props="{
      key: 'value',
      label: 'desc'
    }"
    :data="data">
  </el-transfer>
</template>

<script>
  export default {
    data() {
      const generateData = _ => {
        const data = [];
        for (let i = 1; i <= 15; i++) {
          data.push({
            value: i,
            desc: `Option ${ i }`,
            disabled: i % 4 === 0
          });
        }
        return data;
      };
      return {
        data: generateData(),
        value: []
      };
    }
  };
</script>
:element-demo-->
        <template slot="highlight"><pre v-pre><code class="html">&lt;template&gt;
  &lt;el-transfer
    v-model=&quot;value&quot;
    :props=&quot;{
      key: 'value',
      label: 'desc'
    }&quot;
    :data=&quot;data&quot;&gt;
  &lt;/el-transfer&gt;
&lt;/template&gt;

&lt;script&gt;
  export default {
    data() {
      const generateData = _ =&gt; {
        const data = [];
        for (let i = 1; i &lt;= 15; i++) {
          data.push({
            value: i,
            desc: `Option ${ i }`,
            disabled: i % 4 === 0
          });
        }
        return data;
      };
      return {
        data: generateData(),
        value: []
      };
    }
  };
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
<td>value / v-model</td>
<td>La valeur liée.</td>
<td>array</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>data</td>
<td>Données principales.</td>
<td>array[{ key, label, disabled }]</td>
<td>—</td>
<td>[ ]</td>
</tr>
<tr>
<td>filterable</td>
<td>Si Transfer est filtrable.</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>filter-placeholder</td>
<td>Placeholder du champ de filtrage.</td>
<td>string</td>
<td>—</td>
<td>Enter keyword</td>
</tr>
<tr>
<td>filter-method</td>
<td>Méthode de filtrage.</td>
<td>function</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>target-order</td>
<td>Ordre de tri des éléments de la liste d'arrivée. S'il est à <code>original</code>, les éléments garderont le même ordre que la liste d'origine. Si à <code>push</code>, les nouveaux éléments seront mis à la suite des anciens. Si mis à <code>unshift</code>, les nouveaux éléments seront mis en haut de la liste.</td>
<td>string</td>
<td>original / push / unshift</td>
<td>original</td>
</tr>
<tr>
<td>titles</td>
<td>Titres des listes.</td>
<td>array</td>
<td>—</td>
<td>['List 1', 'List 2']</td>
</tr>
<tr>
<td>button-texts</td>
<td>Textes des boutons.</td>
<td>array</td>
<td>—</td>
<td>[ ]</td>
</tr>
<tr>
<td>render-content</td>
<td>Fonction de rendu pour les objets.</td>
<td>function(h, option)</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>format</td>
<td>Textes de statut dans le header.</td>
<td>object{noChecked, hasChecked}</td>
<td>—</td>
<td>{ noChecked: '${checked}/${total}', hasChecked: '${checked}/${total}' }</td>
</tr>
<tr>
<td>props</td>
<td>Alias des propriétés des objets source.</td>
<td>object{key, label, disabled}</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>left-default-checked</td>
<td>Tableau des objets initialement sélectionnés dans la liste de gauche.</td>
<td>array</td>
<td>—</td>
<td>[ ]</td>
</tr>
<tr>
<td>right-default-checked</td>
<td>Tableau des objets initialement sélectionnés dans la liste de droite.</td>
<td>array</td>
<td>—</td>
<td>[ ]</td>
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
<td>left-footer</td>
<td>Contenu du footer de la liste de gauche.</td>
</tr>
<tr>
<td>right-footer</td>
<td>Contenu du footer de la liste de droite.</td>
</tr>
</tbody>
</table>
<h3 id="slot-avec-portee"><a class="header-anchor" href="#slot-avec-portee">¶</a> Slot avec portée</h3>
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
<td>Contenu personnalisé pour les objets. Le paramètre est { option }.</td>
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
<td>clearQuery</td>
<td>Efface le filtre d'une liste.</td>
<td>'left' / 'right'</td>
</tr>
</tbody>
</table>
<h3 id="events"><a class="header-anchor" href="#events">¶</a> Events</h3>
<table>
<thead>
<tr>
<th>Event nom</th>
<th>Description</th>
<th>Paramètres</th>
</tr>
</thead>
<tbody>
<tr>
<td>change</td>
<td>Se déclenche quand un objet change dans la liste de droite.</td>
<td>Tableau des objets de la liste de droite, direction du transfer (<code>left</code> ou <code>right</code>), les clés des objets bougés.</td>
</tr>
<tr>
<td>left-check-change</td>
<td>Se déclenche quand l'utilisateur change le statut d'un objet dans la liste de gauche.</td>
<td>Liste des objets actuellement sélectionnées, Liste des objets dont le statut a changé.</td>
</tr>
<tr>
<td>right-check-change</td>
<td>Se déclenche quand l'utilisateur change le statut d'un objet dans la liste de droite.</td>
<td>Liste des objets actuellement sélectionnées, Liste des objets dont le statut a changé.</td>
</tr>
</tbody>
</table>
