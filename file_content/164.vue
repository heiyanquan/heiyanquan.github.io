<h2 id="calendar"><a class="header-anchor" href="#calendar">¶</a> Calendar</h2>
<p>Display date.</p>
<h3 id="basic"><a class="header-anchor" href="#basic">¶</a> Basic</h3>
<demo-block>
        <div><p>Set <code>value</code> to specify the currently displayed month. If <code>value</code> is not specified, current month is displayed. <code>value</code> supports two-way binding.</p>
</div>
        <!--element-demo: <el-calendar v-model="value">
</el-calendar>

<script>
  export default {
    data() {
      return {
        value: new Date()
      }
    }
  }
</script>
:element-demo-->
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
</code></pre></template></demo-block><h3 id="custom-content"><a class="header-anchor" href="#custom-content">¶</a> Custom Content</h3>
<demo-block>
        <div><p>Customize what is displayed in the calendar cell by setting <code>scoped-slot</code> named <code>dateCell</code>. In <code>scoped-slot</code> you can get the date (the date of the current cell), data (including the type, isSelected, day attribute). For details, please refer to the API documentation below.</p>
</div>
        <!--element-demo: <el-calendar>
  <!-- Use 2.5 slot syntax. If you use Vue 2.6, please use new slot syntax-->
  <template
    slot="dateCell"
    slot-scope="{date, data}">
    <p :class="data.isSelected ? 'is-selected' : ''">
      {{ data.day.split('-').slice(1).join('-') }} {{ data.isSelected ? '✔️' : ''}}
    </p>
  </template>
</el-calendar>
<style>
  .is-selected {
    color: #1989FA;
  }
</style>
:element-demo-->
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
</code></pre></template></demo-block><h3 id="range"><a class="header-anchor" href="#range">¶</a> Range</h3>
<demo-block>
        <div><p>Set the <code>range</code> attribute to specify the display range of the calendar. Start time must be Monday, end time must be Sunday, and the time span cannot exceed two months.</p>
</div>
        <!--element-demo: <el-calendar :range="['2019-03-04', '2019-03-24']">
</el-calendar>
:element-demo-->
        <template slot="highlight"><pre v-pre><code class="html">&lt;el-calendar :range=&quot;['2019-03-04', '2019-03-24']&quot;&gt;
&lt;/el-calendar&gt;
</code></pre></template></demo-block><h3 id="attributes"><a class="header-anchor" href="#attributes">¶</a> Attributes</h3>
<table>
<thead>
<tr>
<th>Attribute</th>
<th>Description</th>
<th>Type</th>
<th>Accepted Values</th>
<th>Default</th>
</tr>
</thead>
<tbody>
<tr>
<td>value / v-model</td>
<td>binding value</td>
<td>Date/string/number</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>range</td>
<td>time range, including start time and end time. Start time must be start day of week, end time must be end day of week, the time span cannot exceed two months.</td>
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
<h3 id="datecell-scoped-slot-parameters"><a class="header-anchor" href="#datecell-scoped-slot-parameters">¶</a> dateCell Scoped Slot Parameters</h3>
<table>
<thead>
<tr>
<th>Attribute</th>
<th>Description</th>
<th>Type</th>
<th>Accepted Values</th>
<th>Default</th>
</tr>
</thead>
<tbody>
<tr>
<td>date</td>
<td>date the cell represents</td>
<td>Date</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>data</td>
<td>{ type, isSelected, day}. The <code>type</code> property indicates which month the date belongs, optional values are <code>prev-month</code>, <code>current-month</code>, <code>next-month</code>. The <code>isSelected</code> property indicates whether the date is selected. The <code>day</code> property is the formatted date in the format yyyy-MM-dd</td>
<td>Object</td>
<td>—</td>
<td>—</td>
</tr>
</tbody>
</table>
