<h2 id="timepicker"><a class="header-anchor" href="#timepicker">¶</a> TimePicker</h2>
<p>Utiliser TimePicker pour sélectionner un horaire.</p>
<h3 id="selection-d-horaire-fixe"><a class="header-anchor" href="#selection-d-horaire-fixe">¶</a> Sélection d'horaire fixe</h3>
<p>Vous pouvez fournir une liste d'horaires fixés pour que l'utilisateur en choisisse un.</p>
<demo-block>
        <div><p>Utilisez <code>el-time-select</code> puis assignez un horaire de début, de fin et un pas grâce aux propriétés <code>start</code>, <code>end</code> et <code>step</code> de l'attribut <code>picker-options</code>.</p>
</div>
        <!--element-demo: <el-time-select
  v-model="value"
  :picker-options="{
    start: '08:30',
    step: '00:15',
    end: '18:30'
  }"
  placeholder="Choisissez un horaire">
</el-time-select>

<script>
  export default {
    data() {
      return {
        value: ''
      };
    }
  }
</script>
:element-demo-->
        <template slot="highlight"><pre v-pre><code class="html">&lt;el-time-select
  v-model=&quot;value&quot;
  :picker-options=&quot;{
    start: '08:30',
    step: '00:15',
    end: '18:30'
  }&quot;
  placeholder=&quot;Choisissez un horaire&quot;&gt;
&lt;/el-time-select&gt;

&lt;script&gt;
  export default {
    data() {
      return {
        value: ''
      };
    }
  }
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="selection-d-horaire-libre"><a class="header-anchor" href="#selection-d-horaire-libre">¶</a> Sélection d'horaire libre</h3>
<p>Vous pouvez aussi laisser l'utilisateur choisir librement un horaire.</p>
<demo-block>
        <div><p>Utilisez <code>el-time-picker</code> puis l'attribut <code>picker-options</code> et sa propriété <code>selectableRange</code> pour déterminer la tranche horaire disponible. Par défaut, vous pouvez utiliser la molette de votre souris, ou les flèches directionnelles si l'attribut <code>arrow-control</code> est présent.</p>
</div>
        <!--element-demo: <template>
  <el-time-picker
    v-model="value1"
    :picker-options="{
      selectableRange: '18:30:00 - 20:30:00'
    }"
    placeholder="Horaire libre">
  </el-time-picker>
  <el-time-picker
    arrow-control
    v-model="value2"
    :picker-options="{
      selectableRange: '18:30:00 - 20:30:00'
    }"
    placeholder="Horaire libre">
  </el-time-picker>
</template>

<script>
  export default {
    data() {
      return {
        value1: new Date(2016, 9, 10, 18, 40),
        value2: new Date(2016, 9, 10, 18, 40)
      };
    }
  }
</script>
:element-demo-->
        <template slot="highlight"><pre v-pre><code class="html">&lt;template&gt;
  &lt;el-time-picker
    v-model=&quot;value1&quot;
    :picker-options=&quot;{
      selectableRange: '18:30:00 - 20:30:00'
    }&quot;
    placeholder=&quot;Horaire libre&quot;&gt;
  &lt;/el-time-picker&gt;
  &lt;el-time-picker
    arrow-control
    v-model=&quot;value2&quot;
    :picker-options=&quot;{
      selectableRange: '18:30:00 - 20:30:00'
    }&quot;
    placeholder=&quot;Horaire libre&quot;&gt;
  &lt;/el-time-picker&gt;
&lt;/template&gt;

&lt;script&gt;
  export default {
    data() {
      return {
        value1: new Date(2016, 9, 10, 18, 40),
        value2: new Date(2016, 9, 10, 18, 40)
      };
    }
  }
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="intervalle-de-temps-fixe"><a class="header-anchor" href="#intervalle-de-temps-fixe">¶</a> Intervalle de temps fixe</h3>
<p>Vous pouvez définir un intervalle de temps. Si l'horaire de début est sélectionné en premier, certains horaires de fins seront désactivés s'ils ont lieu avant l'horaire de début.</p>
<demo-block>
        
        <!--element-demo: <template>
  <el-time-select
    placeholder="Horaire de début"
    v-model="startTime"
    :picker-options="{
      start: '08:30',
      step: '00:15',
      end: '18:30'
    }">
  </el-time-select>
  <el-time-select
    placeholder="Horaire de fin"
    v-model="endTime"
    :picker-options="{
      start: '08:30',
      step: '00:15',
      end: '18:30',
      minTime: startTime
    }">
  </el-time-select>
</template>

<script>
  export default {
    data() {
      return {
        startTime: '',
        endTime: ''
      };
    }
  }
</script>
:element-demo-->
        <template slot="highlight"><pre v-pre><code class="html">&lt;template&gt;
  &lt;el-time-select
    placeholder=&quot;Horaire de début&quot;
    v-model=&quot;startTime&quot;
    :picker-options=&quot;{
      start: '08:30',
      step: '00:15',
      end: '18:30'
    }&quot;&gt;
  &lt;/el-time-select&gt;
  &lt;el-time-select
    placeholder=&quot;Horaire de fin&quot;
    v-model=&quot;endTime&quot;
    :picker-options=&quot;{
      start: '08:30',
      step: '00:15',
      end: '18:30',
      minTime: startTime
    }&quot;&gt;
  &lt;/el-time-select&gt;
&lt;/template&gt;

&lt;script&gt;
  export default {
    data() {
      return {
        startTime: '',
        endTime: ''
      };
    }
  }
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="intervalle-de-temps-libre"><a class="header-anchor" href="#intervalle-de-temps-libre">¶</a> Intervalle de temps libre</h3>
<p>Vous pouvez également définir un intervalle libre.</p>
<demo-block>
        <div><p>Ajoutez l'attribut <code>is-range</code>. L'attribut <code>arrow-control</code> est aussi supporté dans ce mode.</p>
</div>
        <!--element-demo: <template>
  <el-time-picker
    is-range
    v-model="value1"
    range-separator="To"
    start-placeholder="Horaire de début"
    end-placeholder="Horaire de fin">
  </el-time-picker>
  <el-time-picker
    is-range
    arrow-control
    v-model="value2"
    range-separator="To"
    start-placeholder="Horaire de début"
    end-placeholder="Horaire de fin">
  </el-time-picker>
</template>

<script>
  export default {
    data() {
      return {
        value1: [new Date(2016, 9, 10, 8, 40), new Date(2016, 9, 10, 9, 40)],
        value2: [new Date(2016, 9, 10, 8, 40), new Date(2016, 9, 10, 9, 40)]
      };
    }
  }
</script>
:element-demo-->
        <template slot="highlight"><pre v-pre><code class="html">&lt;template&gt;
  &lt;el-time-picker
    is-range
    v-model=&quot;value1&quot;
    range-separator=&quot;To&quot;
    start-placeholder=&quot;Horaire de début&quot;
    end-placeholder=&quot;Horaire de fin&quot;&gt;
  &lt;/el-time-picker&gt;
  &lt;el-time-picker
    is-range
    arrow-control
    v-model=&quot;value2&quot;
    range-separator=&quot;To&quot;
    start-placeholder=&quot;Horaire de début&quot;
    end-placeholder=&quot;Horaire de fin&quot;&gt;
  &lt;/el-time-picker&gt;
&lt;/template&gt;

&lt;script&gt;
  export default {
    data() {
      return {
        value1: [new Date(2016, 9, 10, 8, 40), new Date(2016, 9, 10, 9, 40)],
        value2: [new Date(2016, 9, 10, 8, 40), new Date(2016, 9, 10, 9, 40)]
      };
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
<td>value / v-model</td>
<td>La valeur liée.</td>
<td>date(TimePicker) / string(TimeSelect)</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>readonly</td>
<td>Si TimePicker est en lecture seule.</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>disabled</td>
<td>Si TimePicker est désactivé.</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>editable</td>
<td>Si le champ d'input est éditable.</td>
<td>boolean</td>
<td>—</td>
<td>true</td>
</tr>
<tr>
<td>clearable</td>
<td>Si un bouton d'effacement doit être affiché.</td>
<td>boolean</td>
<td>—</td>
<td>true</td>
</tr>
<tr>
<td>size</td>
<td>Taille du champ.</td>
<td>string</td>
<td>medium / small / mini</td>
<td>—</td>
</tr>
<tr>
<td>placeholder</td>
<td>Placeholder en mode non-intervalle.</td>
<td>string</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>start-placeholder</td>
<td>Placeholder de l'horaire de début en mode intervalle.</td>
<td>string</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>end-placeholder</td>
<td>Placeholder de l'horaire de fin en mode intervalle.</td>
<td>string</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>is-range</td>
<td>Si le mode intervalle est activé, marche avec <code>&lt;el-time-picker&gt;</code>.</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>arrow-control</td>
<td>Si les flèches directionnelles peuvent être utilisées, marche avec <code>&lt;el-time-picker&gt;</code>.</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>align</td>
<td>Alignement.</td>
<td>left / center / right</td>
<td>left</td>
<td></td>
</tr>
<tr>
<td>popper-class</td>
<td>Classe du menu du TimePicker.</td>
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
<td>Séparateur d'intervalle.</td>
<td>string</td>
<td>-</td>
<td>'-'</td>
</tr>
<tr>
<td>default-value</td>
<td>Optionnel, date d'aujourd'hui par défaut.</td>
<td><code>Date</code> pour le TimePicker, <code>string</code> pour le TimeSelect</td>
<td>Toute valeur acceptée par <code>new Date()</code> pour le TimePicker, une valeur sélectionnable pour TimeSelect.</td>
<td>—</td>
</tr>
<tr>
<td>value-format</td>
<td>Optionnel, uniquement pour TimePicker, format de la valeur. Si non spécifié, la valeur sera un objet <code>Date</code>.</td>
<td>string</td>
<td>Voir <a href="#/en-US/component/date-picker#date-formats">date formats</a></td>
<td>—</td>
</tr>
<tr>
<td>name</td>
<td>Attribut <code>name</code> natif de l'input.</td>
<td>string</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>prefix-icon</td>
<td>Classe de l'icône de préfixe.</td>
<td>string</td>
<td>—</td>
<td>el-icon-time</td>
</tr>
<tr>
<td>clear-icon</td>
<td>Classe de l'icône d'effacement.</td>
<td>string</td>
<td>—</td>
<td>el-icon-circle-close</td>
</tr>
</tbody>
</table>
<h3 id="options-de-timeselect"><a class="header-anchor" href="#options-de-timeselect">¶</a> Options de TimeSelect</h3>
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
<td>start</td>
<td>Horaire de début.</td>
<td>string</td>
<td>—</td>
<td>09:00</td>
</tr>
<tr>
<td>end</td>
<td>Horaire de fin.</td>
<td>string</td>
<td>—</td>
<td>18:00</td>
</tr>
<tr>
<td>step</td>
<td>Intervalle entre les horaires.</td>
<td>string</td>
<td>—</td>
<td>00:30</td>
</tr>
<tr>
<td>minTime</td>
<td>Horaire minimum, n'importe quel horaire avant celui-ci sera désactivé.</td>
<td>string</td>
<td>—</td>
<td>00:00</td>
</tr>
<tr>
<td>maxTime</td>
<td>Horaire maximum, n'importe quel horaire après celui-ci sera désactivé.</td>
<td>string</td>
<td>—</td>
<td>—</td>
</tr>
</tbody>
</table>
<h3 id="options-de-timepicker"><a class="header-anchor" href="#options-de-timepicker">¶</a> Options de TimePicker</h3>
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
<td>selectableRange</td>
<td>Intervalle de temps disponible, e.g.<code>'18:30:00 - 20:30:00'</code> ou <code>['09:30:00 - 12:00:00', '14:30:00 - 18:30:00']</code></td>
<td>string / array</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>format</td>
<td>Format du sélecteur.</td>
<td>string</td>
<td>hour <code>HH</code>, minute <code>mm</code>, second <code>ss</code>, AM/PM <code>A</code></td>
<td>HH:mm:ss</td>
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
<td>Se déclenche quand l'utilisateur confirme la valeur.</td>
<td>La valeur confirmée.</td>
</tr>
<tr>
<td>blur</td>
<td>Se déclenche quand le composant perd le focus.</td>
<td>L'instance du composant.</td>
</tr>
<tr>
<td>focus</td>
<td>Se déclenche quand le composant a le focus.</td>
<td>L'instance du composant.</td>
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
<td>Met le focus sur le composant.</td>
<td>-</td>
</tr>
</tbody>
</table>
