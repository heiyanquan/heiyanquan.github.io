<h2 id="datetimepicker"><a class="header-anchor" href="#datetimepicker">¶</a> DateTimePicker</h2>
<p>Sélectionnez une date et une heure dans un seul picker.</p>
<div class="tip">
<p>DateTimePicker est dérivé de DatePicker et TimePicker. Pour plus d'informations sur <code>pickerOptions</code> et d'autres attributs, vous pouvez vous référer à DatePicker et TimePicker.</p>
</div>
<h3 id="date-et-horaire"><a class="header-anchor" href="#date-et-horaire">¶</a> Date et horaire</h3>
<demo-block>
        <div><p>Vous pouvez sélectionner une date et un horaire en un seul picker en réglant <code>type</code> sur <code>datetime</code>. La manière d'utiliser des raccourcis est la même que pour DatePicker.</p>
</div>
        <template slot="source"><element-demo0 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;template&gt;
  &lt;div class=&quot;block&quot;&gt;
    &lt;span class=&quot;demonstration&quot;&gt;Défaut&lt;/span&gt;
    &lt;el-date-picker
      v-model=&quot;value1&quot;
      type=&quot;datetime&quot;
      placeholder=&quot;Selectionnez date et horaire&quot;&gt;
    &lt;/el-date-picker&gt;
  &lt;/div&gt;
  &lt;div class=&quot;block&quot;&gt;
    &lt;span class=&quot;demonstration&quot;&gt;Avec raccourcis&lt;/span&gt;
    &lt;el-date-picker
      v-model=&quot;value2&quot;
      type=&quot;datetime&quot;
      placeholder=&quot;Selectionnez date et horaire&quot;
      :picker-options=&quot;pickerOptions&quot;&gt;
    &lt;/el-date-picker&gt;
  &lt;/div&gt;
  &lt;div class=&quot;block&quot;&gt;
    &lt;span class=&quot;demonstration&quot;&gt;Avec horaire par défaut&lt;/span&gt;
    &lt;el-date-picker
      v-model=&quot;value3&quot;
      type=&quot;datetime&quot;
      placeholder=&quot;Selectionnez date et horaire&quot;
      default-time=&quot;12:00:00&quot;&gt;
    &lt;/el-date-picker&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
  export default {
    data() {
      return {
        pickerOptions: {
          shortcuts: [{
            text: 'Aujourd\'hui',
            onClick(picker) {
              picker.$emit('pick', new Date());
            }
          }, {
            text: 'Hier',
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24);
              picker.$emit('pick', date);
            }
          }, {
            text: 'Il y a une semaine',
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit('pick', date);
            }
          }]
        },
        value1: '',
        value2: '',
        value3: ''
      };
    }
  };
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="plage-de-dates-et-d-horaires"><a class="header-anchor" href="#plage-de-dates-et-d-horaires">¶</a> Plage de dates et d'horaires</h3>
<demo-block>
        <div><p>Vous pouvez sélectionner des plages en configurant <code>type</code> sur <code>datetimerange</code>.</p>
</div>
        <template slot="source"><element-demo1 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;template&gt;
  &lt;div class=&quot;block&quot;&gt;
    &lt;span class=&quot;demonstration&quot;&gt;Défaut&lt;/span&gt;
    &lt;el-date-picker
      v-model=&quot;value1&quot;
      type=&quot;datetimerange&quot;
      range-separator=&quot;à&quot;
      start-placeholder=&quot;Date de début&quot;
      end-placeholder=&quot;Date de fin&quot;&gt;
    &lt;/el-date-picker&gt;
  &lt;/div&gt;
  &lt;div class=&quot;block&quot;&gt;
    &lt;span class=&quot;demonstration&quot;&gt;Avec raccourcis&lt;/span&gt;
    &lt;el-date-picker
      v-model=&quot;value2&quot;
      type=&quot;datetimerange&quot;
      :picker-options=&quot;pickerOptions&quot;
      range-separator=&quot;à&quot;
      start-placeholder=&quot;Date de début&quot;
      end-placeholder=&quot;Date de fin&quot;
      align=&quot;right&quot;&gt;
    &lt;/el-date-picker&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
  export default {
    data() {
      return {
        pickerOptions: {
          shortcuts: [{
            text: 'La semaine passée',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit('pick', [start, end]);
            }
          }, {
            text: 'Le mois dernier',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
              picker.$emit('pick', [start, end]);
            }
          }, {
            text: 'Les 2 derniers mois',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
              picker.$emit('pick', [start, end]);
            }
          }]
        },
        value1: [new Date(2000, 10, 10, 10, 10), new Date(2000, 10, 11, 10, 10)],
        value2: ''
      };
    }
  };
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="horaire-par-defaut-pour-les-plages-de-dates"><a class="header-anchor" href="#horaire-par-defaut-pour-les-plages-de-dates">¶</a> Horaire par défaut pour les plages de dates</h3>
<demo-block>
        <div><p>Lorsque vous sélectionnez une plage de dates dans le panneau de date avec le type <code>datetimerange</code>, <code>00:00:00</code> sera utilisé comme horaire par défaut pour les dates de début et de fin. Vous pouvez contrôler cette valeur avec l'attribut <code>default-time</code>. Il accepte un tableau de une ou deux chaînes de caractères. La première indique l'horaire de la date de début, la deuxième celui de la date de fin.</p>
</div>
        <template slot="source"><element-demo2 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;template&gt;
  &lt;div class=&quot;block&quot;&gt;
    &lt;span class=&quot;demonstration&quot;&gt;Heure de la date de début 12:00:00&lt;/span&gt;
    &lt;el-date-picker
      v-model=&quot;value1&quot;
      type=&quot;datetimerange&quot;
      start-placeholder=&quot;Date de début&quot;
      end-placeholder=&quot;Date de fin&quot;
      :default-time=&quot;['12:00:00']&quot;&gt;
    &lt;/el-date-picker&gt;
  &lt;/div&gt;
  &lt;div class=&quot;block&quot;&gt;
    &lt;span class=&quot;demonstration&quot;&gt;Heure de la date de début 12:00:00, heure de la date de fin 08:00:00&lt;/span&gt;
    &lt;el-date-picker
      v-model=&quot;value2&quot;
      type=&quot;datetimerange&quot;
      align=&quot;right&quot;
      start-placeholder=&quot;Date de début&quot;
      end-placeholder=&quot;Date de fin&quot;
      :default-time=&quot;['12:00:00', '08:00:00']&quot;&gt;
    &lt;/el-date-picker&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
  export default {
    data() {
      return {
        value1: '',
        value2: ''
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
<td>date(DateTimePicker) / array(DateTimeRangePicker)</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>readonly</td>
<td>Si le DatePicker est en lecture seule.</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>disabled</td>
<td>Si le DatePicker est désactivé.</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>editable</td>
<td>Si le champ est éditable.</td>
<td>boolean</td>
<td>—</td>
<td>true</td>
</tr>
<tr>
<td>clearable</td>
<td>Si la croix de reset doit apparaître.</td>
<td>boolean</td>
<td>—</td>
<td>true</td>
</tr>
<tr>
<td>size</td>
<td>Taille du champ.</td>
<td>string</td>
<td>large/small/mini</td>
<td>—</td>
</tr>
<tr>
<td>placeholder</td>
<td>Le placeholder en mode normal.</td>
<td>string</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>start-placeholder</td>
<td>Le placeholder de la date de début en mode plage de dates.</td>
<td>string</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>end-placeholder</td>
<td>Le placeholder de la date de fin en mode plage de dates.</td>
<td>string</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>time-arrow-control</td>
<td>Si l'horaire peut être sélectionné en utilisant les flèches de direction.</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>type</td>
<td>Type du picker.</td>
<td>string</td>
<td>year/month/date/datetime/ week/datetimerange/daterange</td>
<td>date</td>
</tr>
<tr>
<td>format</td>
<td>Format d'affichage de la date dans le champ.</td>
<td>string</td>
<td>Voir <a href="#/fr-FR/component/date-picker#formats-de-date">formats de date</a></td>
<td>yyyy-MM-dd HH:mm:ss</td>
</tr>
<tr>
<td>align</td>
<td>Alignements.</td>
<td>left/center/right</td>
<td>left</td>
<td></td>
</tr>
<tr>
<td>popper-class</td>
<td>Nom de classe pour le menu déroulant du DateTimePicker.</td>
<td>string</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>picker-options</td>
<td>Options additionnelles, voir la table ci-dessous.</td>
<td>object</td>
<td>—</td>
<td>{}</td>
</tr>
<tr>
<td>range-separator</td>
<td>Séparateur de plage.</td>
<td>string</td>
<td>-</td>
<td>'-'</td>
</tr>
<tr>
<td>default-value</td>
<td>Date par défaut du calendrier, optionnelle.</td>
<td>Date</td>
<td>N'importe quelle valeur acceptée par <code>new Date()</code></td>
<td>—</td>
</tr>
<tr>
<td>default-time</td>
<td>L'horaire par défaut après avoir choisi une date.</td>
<td>normal: string / plage de dates: string[]</td>
<td>normal: un string tel que <code>12:00:00</code>, range: tableau de deux strings, le premier pour la date de début, le deuxième pour la date de fin. Si non spécifié, <code>00:00:00</code> est utilisé.</td>
<td>—</td>
</tr>
<tr>
<td>value-format</td>
<td>Format de la variable stockée, optionnel. Si non spécifié, La valeur sera un objet Date.</td>
<td>string</td>
<td>Voir <a href="#/fr-FR/component/date-picker#formats-de-date">formats de date</a></td>
<td>—</td>
</tr>
<tr>
<td>name</td>
<td>Identique au <code>name</code> de l'input natif</td>
<td>string</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>unlink-panels</td>
<td>Rend indépendants les deux panneaux de plage de dates</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>prefix-icon</td>
<td>Icône de préfixe.</td>
<td>string</td>
<td>—</td>
<td>el-icon-date</td>
</tr>
<tr>
<td>clear-icon</td>
<td>Icône de reset</td>
<td>string</td>
<td>—</td>
<td>el-icon-circle-close</td>
</tr>
</tbody>
</table>
<h3 id="options-du-picker"><a class="header-anchor" href="#options-du-picker">¶</a> Options du Picker</h3>
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
<td>shortcuts</td>
<td>Un tableau d'objets { text, onClick } pour mettre en place des raccourcis, vérifier le tableau ci-dessous</td>
<td>object[]</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>disabledDate</td>
<td>Une fonction déterminant si une date est désactivée avec cette date en paramètre. Retourne un Boolean</td>
<td>function</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>cellClassName</td>
<td>set custom className</td>
<td>Function(Date)</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>firstDayOfWeek</td>
<td>Le premier jour de la semaine</td>
<td>Number</td>
<td>1 à 7</td>
<td>7</td>
</tr>
</tbody>
</table>
<h3 id="raccourcis"><a class="header-anchor" href="#raccourcis">¶</a> Raccourcis</h3>
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
<td>text</td>
<td>Titre du raccourci.</td>
<td>string</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>onClick</td>
<td>Callback se déclenchant quand le raccourci est cliqué, avec <code>vm</code> en paramètre. Vous pouvez changer la valeur du picker en émettant l'évènement <code>pick</code>. Exemple: <code>vm.$emit('pick', new Date())</code></td>
<td>function</td>
<td>—</td>
<td>—</td>
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
<td>change</td>
<td>Se déclenche quand l'utilisateur confirme la valeur</td>
<td>component's binding value</td>
</tr>
<tr>
<td>blur</td>
<td>Se déclenche quand le champ perds le focus.</td>
<td>component instance</td>
</tr>
<tr>
<td>focus</td>
<td>Se déclenche quand le champ a le focus.</td>
<td>component instance</td>
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
<td>Focus sur le champ.</td>
<td>—</td>
</tr>
</tbody>
</table>
