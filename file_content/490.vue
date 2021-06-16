<h2 id="datepicker"><a class="header-anchor" href="#datepicker">¶</a> DatePicker</h2>
<p>Utilisez DatePicker pour les champs de dates.</p>
<h3 id="entrez-la-date"><a class="header-anchor" href="#entrez-la-date">¶</a> Entrez la date</h3>
<p>L'unité de base du DatePicker est le jour.</p>
<demo-block>
        <div><p>L'unité est déterminée par l'attribut <code>type</code>. Vous pouvez ajouter des options en créant un objet <code>picker-options</code> avec la propriété <code>shortcuts</code>. L'état désactivé est contrôlé par <code>disabledDate</code> qui est une fonction.</p>
</div>
        <!--element-demo: <template>
  <div class="block">
    <span class="demonstration">Défaut</span>
    <el-date-picker
      v-model="value1"
      type="date"
      placeholder="Choississez un jour">
    </el-date-picker>
  </div>
  <div class="block">
    <span class="demonstration">Picker avec raccourcis</span>
    <el-date-picker
      v-model="value2"
      type="date"
      placeholder="Choississez un jour"
      :picker-options="pickerOptions">
    </el-date-picker>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        pickerOptions: {
          disabledDate(time) {
            return time.getTime() > Date.now();
          },
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
      };
    }
  };
</script>
:element-demo-->
        <template slot="highlight"><pre v-pre><code class="html">&lt;template&gt;
  &lt;div class=&quot;block&quot;&gt;
    &lt;span class=&quot;demonstration&quot;&gt;Défaut&lt;/span&gt;
    &lt;el-date-picker
      v-model=&quot;value1&quot;
      type=&quot;date&quot;
      placeholder=&quot;Choississez un jour&quot;&gt;
    &lt;/el-date-picker&gt;
  &lt;/div&gt;
  &lt;div class=&quot;block&quot;&gt;
    &lt;span class=&quot;demonstration&quot;&gt;Picker avec raccourcis&lt;/span&gt;
    &lt;el-date-picker
      v-model=&quot;value2&quot;
      type=&quot;date&quot;
      placeholder=&quot;Choississez un jour&quot;
      :picker-options=&quot;pickerOptions&quot;&gt;
    &lt;/el-date-picker&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
  export default {
    data() {
      return {
        pickerOptions: {
          disabledDate(time) {
            return time.getTime() &gt; Date.now();
          },
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
      };
    }
  };
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="autres-unites"><a class="header-anchor" href="#autres-unites">¶</a> Autres unités</h3>
<p>Vous pouvez sélectionner une semaine, un mois, une année ou plusieurs dates en ajoutant des options grâce aux attributs.</p>
<demo-block>
        
        <!--element-demo: <div class="container">
  <div class="block">
    <span class="demonstration">Semaine</span>
    <el-date-picker
      v-model="value1"
      type="week"
      format="Week WW"
      placeholder="Sélectionnez une semaine">
    </el-date-picker>
  </div>
  <div class="block">
    <span class="demonstration">Mois</span>
    <el-date-picker
      v-model="value2"
      type="month"
      placeholder="Sélectionnez un mois">
    </el-date-picker>
  </div>
</div>
<div class="container">
  <div class="block">
    <span class="demonstration">Année</span>
    <el-date-picker
      v-model="value3"
      type="year"
      placeholder="Sélectionnez une année">
    </el-date-picker>
  </div>
  <div class="block">
    <span class="demonstration">Dates</span>
    <el-date-picker
      type="dates"
      v-model="value4"
      placeholder="Sélectionnez une ou plusieurs dates">
    </el-date-picker>
  </div>
</div>

<script>
  export default {
    data() {
      return {
        value1: '',
        value2: '',
        value3: '',
        value4: ''
      };
    }
  };
</script>
:element-demo-->
        <template slot="highlight"><pre v-pre><code class="html">&lt;div class=&quot;container&quot;&gt;
  &lt;div class=&quot;block&quot;&gt;
    &lt;span class=&quot;demonstration&quot;&gt;Semaine&lt;/span&gt;
    &lt;el-date-picker
      v-model=&quot;value1&quot;
      type=&quot;week&quot;
      format=&quot;Week WW&quot;
      placeholder=&quot;Sélectionnez une semaine&quot;&gt;
    &lt;/el-date-picker&gt;
  &lt;/div&gt;
  &lt;div class=&quot;block&quot;&gt;
    &lt;span class=&quot;demonstration&quot;&gt;Mois&lt;/span&gt;
    &lt;el-date-picker
      v-model=&quot;value2&quot;
      type=&quot;month&quot;
      placeholder=&quot;Sélectionnez un mois&quot;&gt;
    &lt;/el-date-picker&gt;
  &lt;/div&gt;
&lt;/div&gt;
&lt;div class=&quot;container&quot;&gt;
  &lt;div class=&quot;block&quot;&gt;
    &lt;span class=&quot;demonstration&quot;&gt;Année&lt;/span&gt;
    &lt;el-date-picker
      v-model=&quot;value3&quot;
      type=&quot;year&quot;
      placeholder=&quot;Sélectionnez une année&quot;&gt;
    &lt;/el-date-picker&gt;
  &lt;/div&gt;
  &lt;div class=&quot;block&quot;&gt;
    &lt;span class=&quot;demonstration&quot;&gt;Dates&lt;/span&gt;
    &lt;el-date-picker
      type=&quot;dates&quot;
      v-model=&quot;value4&quot;
      placeholder=&quot;Sélectionnez une ou plusieurs dates&quot;&gt;
    &lt;/el-date-picker&gt;
  &lt;/div&gt;
&lt;/div&gt;

&lt;script&gt;
  export default {
    data() {
      return {
        value1: '',
        value2: '',
        value3: '',
        value4: ''
      };
    }
  };
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="plage-de-dates"><a class="header-anchor" href="#plage-de-dates">¶</a> Plage de dates</h3>
<p>Vous pouvez sélectionner une plage de dates.</p>
<demo-block>
        <div><p>Lorsque ce mode est activé, les deux panneaux sont liés par défaut. Si vous souhaitez qu'ils changent de mois de manière indépendante, ajoutez l'attribut <code>unlink-panels</code>.</p>
</div>
        <!--element-demo: <template>
  <div class="block">
    <span class="demonstration">Défaut</span>
    <el-date-picker
      v-model="value1"
      type="daterange"
      range-separator="à"
      start-placeholder="Date de début"
      end-placeholder="Date de fin">
    </el-date-picker>
  </div>
  <div class="block">
    <span class="demonstration">Avec des options</span>
    <el-date-picker
      v-model="value2"
      type="daterange"
      align="right"
      unlink-panels
      range-separator="à"
      start-placeholder="Date de début"
      end-placeholder="Date de fin"
      :picker-options="pickerOptions">
    </el-date-picker>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        pickerOptions: {
          shortcuts: [{
            text: 'Semaine dernière',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit('pick', [start, end]);
            }
          }, {
            text: 'Mois dernier',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
              picker.$emit('pick', [start, end]);
            }
          }, {
            text: 'Trois derniers mois',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
              picker.$emit('pick', [start, end]);
            }
          }]
        },
        value1: '',
        value2: ''
      };
    }
  };
</script>
:element-demo-->
        <template slot="highlight"><pre v-pre><code class="html">&lt;template&gt;
  &lt;div class=&quot;block&quot;&gt;
    &lt;span class=&quot;demonstration&quot;&gt;Défaut&lt;/span&gt;
    &lt;el-date-picker
      v-model=&quot;value1&quot;
      type=&quot;daterange&quot;
      range-separator=&quot;à&quot;
      start-placeholder=&quot;Date de début&quot;
      end-placeholder=&quot;Date de fin&quot;&gt;
    &lt;/el-date-picker&gt;
  &lt;/div&gt;
  &lt;div class=&quot;block&quot;&gt;
    &lt;span class=&quot;demonstration&quot;&gt;Avec des options&lt;/span&gt;
    &lt;el-date-picker
      v-model=&quot;value2&quot;
      type=&quot;daterange&quot;
      align=&quot;right&quot;
      unlink-panels
      range-separator=&quot;à&quot;
      start-placeholder=&quot;Date de début&quot;
      end-placeholder=&quot;Date de fin&quot;
      :picker-options=&quot;pickerOptions&quot;&gt;
    &lt;/el-date-picker&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
  export default {
    data() {
      return {
        pickerOptions: {
          shortcuts: [{
            text: 'Semaine dernière',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit('pick', [start, end]);
            }
          }, {
            text: 'Mois dernier',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
              picker.$emit('pick', [start, end]);
            }
          }, {
            text: 'Trois derniers mois',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
              picker.$emit('pick', [start, end]);
            }
          }]
        },
        value1: '',
        value2: ''
      };
    }
  };
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="plage-de-mois"><a class="header-anchor" href="#plage-de-mois">¶</a> Plage de mois</h3>
<p>Vous pouvez sélectionner une plage de mois.</p>
<demo-block>
        <div><p>Lorsque ce mode est activé, les panneaux gauche et droit sont liés par défaut. Si vous voulez que les deux panneaux switch indépendamment les années en cours, vous pouvez utiliser l'attribut <code>unlink-panels</code>.</p>
</div>
        <!--element-demo: <template>
  <div class="block">
    <span class="demonstration">Défaut</span>
    <el-date-picker
      v-model="value1"
      type="monthrange"
      range-separator="à"
      start-placeholder="Mois de début"
      end-placeholder="Mois de fin">
    </el-date-picker>
  </div>
  <div class="block">
    <span class="demonstration">Avec options</span>
    <el-date-picker
      v-model="value2"
      type="monthrange"
      align="right"
      unlink-panels
      range-separator="à"
      start-placeholder="Mois de début"
      end-placeholder="Mois de fin"
      :picker-options="pickerOptions">
    </el-date-picker>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        pickerOptions: {
          shortcuts: [{
            text: 'Ce mois',
            onClick(picker) {
              picker.$emit('pick', [new Date(), new Date()]);
            }
          }, {
            text: 'Cette année',
            onClick(picker) {
              const end = new Date();
              const start = new Date(new Date().getFullYear(), 0);
              picker.$emit('pick', [start, end]);
            }
          }, {
            text: 'Les derniers 6 mois',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setMonth(start.getMonth() - 6);
              picker.$emit('pick', [start, end]);
            }
          }]
        },
        value1: '',
        value2: ''
      };
    }
  };
</script>
:element-demo-->
        <template slot="highlight"><pre v-pre><code class="html">&lt;template&gt;
  &lt;div class=&quot;block&quot;&gt;
    &lt;span class=&quot;demonstration&quot;&gt;Défaut&lt;/span&gt;
    &lt;el-date-picker
      v-model=&quot;value1&quot;
      type=&quot;monthrange&quot;
      range-separator=&quot;à&quot;
      start-placeholder=&quot;Mois de début&quot;
      end-placeholder=&quot;Mois de fin&quot;&gt;
    &lt;/el-date-picker&gt;
  &lt;/div&gt;
  &lt;div class=&quot;block&quot;&gt;
    &lt;span class=&quot;demonstration&quot;&gt;Avec options&lt;/span&gt;
    &lt;el-date-picker
      v-model=&quot;value2&quot;
      type=&quot;monthrange&quot;
      align=&quot;right&quot;
      unlink-panels
      range-separator=&quot;à&quot;
      start-placeholder=&quot;Mois de début&quot;
      end-placeholder=&quot;Mois de fin&quot;
      :picker-options=&quot;pickerOptions&quot;&gt;
    &lt;/el-date-picker&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
  export default {
    data() {
      return {
        pickerOptions: {
          shortcuts: [{
            text: 'Ce mois',
            onClick(picker) {
              picker.$emit('pick', [new Date(), new Date()]);
            }
          }, {
            text: 'Cette année',
            onClick(picker) {
              const end = new Date();
              const start = new Date(new Date().getFullYear(), 0);
              picker.$emit('pick', [start, end]);
            }
          }, {
            text: 'Les derniers 6 mois',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setMonth(start.getMonth() - 6);
              picker.$emit('pick', [start, end]);
            }
          }]
        },
        value1: '',
        value2: ''
      };
    }
  };
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="valeur-par-defaut"><a class="header-anchor" href="#valeur-par-defaut">¶</a> Valeur par défaut</h3>
<p>Si l'utilisateur n'a pas sélectionné de date, vous pouvez montrer la date d'aujourd'hui par défaut. Utilisez <code>default-value</code> pour montrer une autre date. Sa valeur doit être parsable par <code>new Date()</code>.</p>
<p>Si le type est <code>daterange</code>, <code>default-value</code> configure la panneau de gauche.</p>
<demo-block>
        
        <!--element-demo: <template>
  <div class="block">
    <span class="demonstration">Date</span>
    <el-date-picker
      v-model="value1"
      type="date"
      placeholder="Sélectionnez une date"
      default-value="2010-10-01">
    </el-date-picker>
  </div>
  <div class="block">
    <span class="demonstration">Plage de dates</span>
    <el-date-picker
      v-model="value2"
      type="daterange"
      align="right"
      start-placeholder="Date de début"
      end-placeholder="Date de fin"
      default-value="2010-10-01">
    </el-date-picker>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        value1: '',
        value2: ''
      };
    }
  };
</script>
:element-demo-->
        <template slot="highlight"><pre v-pre><code class="html">&lt;template&gt;
  &lt;div class=&quot;block&quot;&gt;
    &lt;span class=&quot;demonstration&quot;&gt;Date&lt;/span&gt;
    &lt;el-date-picker
      v-model=&quot;value1&quot;
      type=&quot;date&quot;
      placeholder=&quot;Sélectionnez une date&quot;
      default-value=&quot;2010-10-01&quot;&gt;
    &lt;/el-date-picker&gt;
  &lt;/div&gt;
  &lt;div class=&quot;block&quot;&gt;
    &lt;span class=&quot;demonstration&quot;&gt;Plage de dates&lt;/span&gt;
    &lt;el-date-picker
      v-model=&quot;value2&quot;
      type=&quot;daterange&quot;
      align=&quot;right&quot;
      start-placeholder=&quot;Date de début&quot;
      end-placeholder=&quot;Date de fin&quot;
      default-value=&quot;2010-10-01&quot;&gt;
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
</code></pre></template></demo-block><h3 id="formats-de-date"><a class="header-anchor" href="#formats-de-date">¶</a> Formats de date</h3>
<p>Utilisez <code>format</code> pour contrôler l'affichage de la date dans le champ. Utilisez <code>value-format</code> pour contrôler le format de la variable stockée.</p>
<p>Par défaut, le composant accepte et émet un objet <code>Date</code>. Les formats supportés se trouvent ci-dessous, avec la date UTC 2017-01-02 03:04:05 comme exemple:</p>
<div class="warning">
<p>Attention à la capitalisation !</p>
</div>
<table>
<thead>
<tr>
<th>Format</th>
<th>Signification</th>
<th>Note</th>
<th>Exemple</th>
</tr>
</thead>
<tbody>
<tr>
<td><code>yyyy</code></td>
<td>Année</td>
<td></td>
<td>2017</td>
</tr>
<tr>
<td><code>M</code></td>
<td>Mois</td>
<td>pas de 0 au début</td>
<td>1</td>
</tr>
<tr>
<td><code>MM</code></td>
<td>Mois</td>
<td></td>
<td>01</td>
</tr>
<tr>
<td><code>MMM</code></td>
<td>Mois</td>
<td></td>
<td>Jan</td>
</tr>
<tr>
<td><code>MMMM</code></td>
<td>Mois</td>
<td></td>
<td>Janvier</td>
</tr>
<tr>
<td><code>W</code></td>
<td>Semaine</td>
<td>uniquement pour les <code>format</code> des types 'semaine' ; pas de 0 au début</td>
<td>1</td>
</tr>
<tr>
<td><code>WW</code></td>
<td>Semaine</td>
<td>uniquement pour les <code>format</code> des types 'semaine'</td>
<td>01</td>
</tr>
<tr>
<td><code>d</code></td>
<td>Jour</td>
<td>pas de 0 au début</td>
<td>2</td>
</tr>
<tr>
<td><code>dd</code></td>
<td>Jour</td>
<td></td>
<td>02</td>
</tr>
<tr>
<td><code>H</code></td>
<td>Heure</td>
<td>Horloge 24 heures; pas de 0 au début</td>
<td>3</td>
</tr>
<tr>
<td><code>HH</code></td>
<td>Heure</td>
<td>Horloge 24 heures</td>
<td>03</td>
</tr>
<tr>
<td><code>h</code></td>
<td>Heure</td>
<td>Horloge 12 heures ; doit être utilisé avec <code>A</code> ou <code>a</code>; pas de 0 au début</td>
<td>3</td>
</tr>
<tr>
<td><code>hh</code></td>
<td>Heure</td>
<td>Horloge 12 heures ; doit être utilisé avec <code>A</code> ou <code>a</code></td>
<td>03</td>
</tr>
<tr>
<td><code>m</code></td>
<td>Minute</td>
<td>pas de 0 au début</td>
<td>4</td>
</tr>
<tr>
<td><code>mm</code></td>
<td>Minute</td>
<td></td>
<td>04</td>
</tr>
<tr>
<td><code>s</code></td>
<td>Seconde</td>
<td>pas de 0 au début</td>
<td>5</td>
</tr>
<tr>
<td><code>ss</code></td>
<td>Seconde</td>
<td></td>
<td>05</td>
</tr>
<tr>
<td><code>A</code></td>
<td>AM/PM</td>
<td>uniquement pour <code>format</code>, majuscules</td>
<td>AM</td>
</tr>
<tr>
<td><code>a</code></td>
<td>am/pm</td>
<td>uniquement pour <code>format</code>, minuscules</td>
<td>am</td>
</tr>
<tr>
<td><code>timestamp</code></td>
<td>timestamp JS</td>
<td>uniquement pour <code>value-format</code>; la variable stockée sera un <code>number</code></td>
<td>1483326245000</td>
</tr>
<tr>
<td><code>[MM]</code></td>
<td>Pas de caractère d'échappement</td>
<td>Pour échapper des caractères, placez-les entre crochets (ex: [A] [MM])</td>
<td>MM</td>
</tr>
</tbody>
</table>
<demo-block>
        
        <!--element-demo: <template>
  <div class="block">
    <span class="demonstration">Émet un objet Date</span>
    <div class="demonstration">Value: {{ value1 }}</div>
    <el-date-picker
      v-model="value1"
      type="date"
      placeholder="Sélectionnez une date"
      format="yyyy/MM/dd">
    </el-date-picker>
  </div>
  <div class="block">
    <span class="demonstration">Utilise value-format</span>
    <div class="demonstration">Value: {{ value2 }}</div>
    <el-date-picker
      v-model="value2"
      type="date"
      placeholder="Sélectionnez une date"
      format="yyyy/MM/dd"
      value-format="yyyy-MM-dd">
    </el-date-picker>
  </div>
  <div class="block">
    <span class="demonstration">Timestamp</span>
    <div class="demonstration">Value：{{ value3 }}</div>
    <el-date-picker
      v-model="value3"
      type="date"
      placeholder="Sélectionnez une date"
      format="yyyy/MM/dd"
      value-format="timestamp">
    </el-date-picker>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        value1: '',
        value2: '',
        value3: ''
      };
    }
  };
</script>
:element-demo-->
        <template slot="highlight"><pre v-pre><code class="html">&lt;template&gt;
  &lt;div class=&quot;block&quot;&gt;
    &lt;span class=&quot;demonstration&quot;&gt;Émet un objet Date&lt;/span&gt;
    &lt;div class=&quot;demonstration&quot;&gt;Value: {{ value1 }}&lt;/div&gt;
    &lt;el-date-picker
      v-model=&quot;value1&quot;
      type=&quot;date&quot;
      placeholder=&quot;Sélectionnez une date&quot;
      format=&quot;yyyy/MM/dd&quot;&gt;
    &lt;/el-date-picker&gt;
  &lt;/div&gt;
  &lt;div class=&quot;block&quot;&gt;
    &lt;span class=&quot;demonstration&quot;&gt;Utilise value-format&lt;/span&gt;
    &lt;div class=&quot;demonstration&quot;&gt;Value: {{ value2 }}&lt;/div&gt;
    &lt;el-date-picker
      v-model=&quot;value2&quot;
      type=&quot;date&quot;
      placeholder=&quot;Sélectionnez une date&quot;
      format=&quot;yyyy/MM/dd&quot;
      value-format=&quot;yyyy-MM-dd&quot;&gt;
    &lt;/el-date-picker&gt;
  &lt;/div&gt;
  &lt;div class=&quot;block&quot;&gt;
    &lt;span class=&quot;demonstration&quot;&gt;Timestamp&lt;/span&gt;
    &lt;div class=&quot;demonstration&quot;&gt;Value：{{ value3 }}&lt;/div&gt;
    &lt;el-date-picker
      v-model=&quot;value3&quot;
      type=&quot;date&quot;
      placeholder=&quot;Sélectionnez une date&quot;
      format=&quot;yyyy/MM/dd&quot;
      value-format=&quot;timestamp&quot;&gt;
    &lt;/el-date-picker&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
  export default {
    data() {
      return {
        value1: '',
        value2: '',
        value3: ''
      };
    }
  };
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="horaire-par-defaut-pour-les-dates-de-fin-et-de-debut"><a class="header-anchor" href="#horaire-par-defaut-pour-les-dates-de-fin-et-de-debut">¶</a> Horaire par défaut pour les dates de fin et de début</h3>
<p>Lorsque vous choisissez une plage de dates, vous pouvez assigner l'horaire de départ et de fin pour chacune des dates.</p>
<demo-block>
        <div><p>Par défaut, l'horaire pour les dates de début et de fin est <code>00:00:00</code>. Configurez <code>default-time</code> pour changer l'horaire. Cet attribut prends un tableau de un ou deux horaires au format <code>12:00:00</code>. Le premier est pour la date de début, le deuxième pour la date de fin.</p>
</div>
        <!--element-demo: <template>
  <div class="block">
    <p>Valeur: {{ value }}</p>
    <el-date-picker
      v-model="value"
      type="daterange"
      start-placeholder="Date de début"
      end-placeholder="Date de fin"
      :default-time="['00:00:00', '23:59:59']">
    </el-date-picker>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        value: ''
      };
    }
  };
</script>
:element-demo-->
        <template slot="highlight"><pre v-pre><code class="html">&lt;template&gt;
  &lt;div class=&quot;block&quot;&gt;
    &lt;p&gt;Valeur: {{ value }}&lt;/p&gt;
    &lt;el-date-picker
      v-model=&quot;value&quot;
      type=&quot;daterange&quot;
      start-placeholder=&quot;Date de début&quot;
      end-placeholder=&quot;Date de fin&quot;
      :default-time=&quot;['00:00:00', '23:59:59']&quot;&gt;
    &lt;/el-date-picker&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
  export default {
    data() {
      return {
        value: ''
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
<td>date(DatePicker) / array(DateRangePicker)</td>
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
<td>size</td>
<td>Taille du champs.</td>
<td>string</td>
<td>large/small/mini</td>
<td>—</td>
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
<td>placeholder</td>
<td>Le placeholder en mode normal.</td>
<td>string</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>start-placeholder</td>
<td>Le placeholder pour la date de début en mode plage de dates.</td>
<td>string</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>end-placeholder</td>
<td>Le placeholder pour la date de fin en mode plage de dates.</td>
<td>string</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>type</td>
<td>Type du picker.</td>
<td>string</td>
<td>year/month/date/dates/datetime/ week/datetimerange/daterange/ monthrange</td>
<td>date</td>
</tr>
<tr>
<td>format</td>
<td>Format d'affichage dans le champ.</td>
<td>string</td>
<td>Voir <a href="#/fr-FR/component/date-picker#formats-de-date">formats de date</a>.</td>
<td>yyyy-MM-dd</td>
</tr>
<tr>
<td>align</td>
<td>Alignement.</td>
<td>left/center/right</td>
<td>left</td>
<td></td>
</tr>
<tr>
<td>popper-class</td>
<td>Nom de classe pour le menu déroulant du DatePicker.</td>
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
<td>Séparateur de plage de dates.</td>
<td>string</td>
<td>—</td>
<td>'-'</td>
</tr>
<tr>
<td>default-value</td>
<td>Date par défaut du calendrier, optionnelle.</td>
<td>Date</td>
<td>Tout ce qui est accepté par <code>new Date()</code></td>
<td>—</td>
</tr>
<tr>
<td>default-time</td>
<td>Horaire par défaut quand on sélectionne une plage dates, optionnel.</td>
<td>string[]</td>
<td>Tableau de taille 2, chaque valeur est au format <code>12:00:00</code>. La première pour la date de début, la deuxième pour la date de fin.</td>
<td>—</td>
</tr>
<tr>
<td>value-format</td>
<td>Format de la variable stockée, optionnel. Si non spécifié, la valeur sera un objet Date.</td>
<td>string</td>
<td>Voir <a href="#/en-US/component/date-picker#formats-de-date">formats de date</a></td>
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
<td>Rend indépendants les deux panneaux de plage de dates.</td>
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
<td>Icône de reset.</td>
<td>string</td>
<td>—</td>
<td>el-icon-circle-close</td>
</tr>
<tr>
<td>validate-event</td>
<td>Si la validation doit être déclenchée.</td>
<td>boolean</td>
<td>-</td>
<td>true</td>
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
<td>Un tableau d'objets { text, onClick } pour configurer les raccourcis, voir table ci-dessous.</td>
<td>object[]</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>disabledDate</td>
<td>Une fonction qui détermine si une date est désactivée ou pas, avec cette date en paramètre. Doit retourner un booléen.</td>
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
<td>Premier jour du mois.</td>
<td>Number</td>
<td>1 to 7</td>
<td>7</td>
</tr>
<tr>
<td>onPick</td>
<td>Callback se déclenchant quand la date sélectionnée change. Uniquement pour <code>daterange</code> et <code>datetimerange</code>.</td>
<td>Function({ maxDate, minDate })</td>
<td>-</td>
<td>-</td>
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
<h3 id="slots"><a class="header-anchor" href="#slots">¶</a> Slots</h3>
<table>
<thead>
<tr>
<th>Nom</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>range-separator</td>
<td>Séparateur d'intervalle personnalisé.</td>
</tr>
</tbody>
</table>
