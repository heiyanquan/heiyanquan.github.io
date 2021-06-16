<h2 id="calendrier"><a class="header-anchor" href="#calendrier">¶</a> Calendrier</h2>
<p>Affiche un calendrier.</p>
<h3 id="usage-basique"><a class="header-anchor" href="#usage-basique">¶</a> Usage basique</h3>
<demo-block>
        <div><p>Réglez <code>value</code> pour spécifier le mois à afficher. Si <code>value</code> n'est pas spécifiée, le mois actuel sera affiché. <code>value</code> supporte le two-way binding.</p>
</div>
        <template slot="source"><element-demo0 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;el-calendar v-model=&quot;value&quot;&gt;
&lt;/el-calendar&gt;

&lt;script&gt;
  export default {
    data() {
      return {
        value: new Date()
      }
    }
  }
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="contenu-personnalise"><a class="header-anchor" href="#contenu-personnalise">¶</a> Contenu personnalisé</h3>
<demo-block>
        <div><p>Personnalisez le contenu du calendrier en utilisant le <code>scoped-slot</code> appelé <code>dateCell</code>. Dans ce <code>scoped-slot</code> vous aurez accès au paramètres date (date de la cellule courante), data (incluant les attributs type, isSelected et day). Pour plus d'informations, référez-vous à la documentation ci-dessous.</p>
</div>
        <template slot="source"><element-demo1 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;el-calendar&gt;
  &lt;!-- Use 2.5 slot syntax. If you use Vue 2.6, please use new slot syntax--&gt;
  &lt;template
    slot=&quot;dateCell&quot;
    slot-scope=&quot;{date, data}&quot;&gt;
    &lt;p :class=&quot;data.isSelected ? 'is-selected' : ''&quot;&gt;
      {{ data.day.split('-').slice(1).join('-') }} {{ data.isSelected ? '✔️' : ''}}
    &lt;/p&gt;
  &lt;/template&gt;
&lt;/el-calendar&gt;
&lt;style&gt;
  .is-selected {
    color: #1989FA;
  }
&lt;/style&gt;
</code></pre></template></demo-block><h3 id="intervalle"><a class="header-anchor" href="#intervalle">¶</a> Intervalle</h3>
<demo-block>
        <div><p>Utilisez l'attribut <code>range</code> pour afficher un intervalle particulier. Le début doit être un lundi et la fin un dimanche, l'intervalle ne pouvant excéder deux mois.</p>
</div>
        <template slot="source"><element-demo2 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;el-calendar :range=&quot;['2019-03-04', '2019-03-24']&quot;&gt;
&lt;/el-calendar&gt;
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
<td>Valeur liée.</td>
<td>Date/string/number</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>range</td>
<td>Intervalle de dates, début et fin inclus. Start time must be start day of week, end time must be end day of week, the time span cannot exceed two months.</td>
<td>Array</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>first-day-of-week</td>
<td>fisrt day of week</td>
<td>Number</td>
<td>1 to 7</td>
<td>1</td>
</tr>
</tbody>
</table>
<h3 id="slot-datecell"><a class="header-anchor" href="#slot-datecell">¶</a> Slot dateCell</h3>
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
<td>date</td>
<td>Date de la cellule courante.</td>
<td>Date</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>data</td>
<td>{ type, isSelected, day }. <code>type</code> indique le mois de la date courante, les valeurs prev-month, current-month et next-month pouvant être utilisées; <code>isSelected</code> indique si la date est sélectionnée; <code>day</code> est la date formattée en yyyy-MM-dd.</td>
<td>Object</td>
<td>—</td>
<td>—</td>
</tr>
</tbody>
</table>
