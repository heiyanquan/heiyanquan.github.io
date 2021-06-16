<h2 id="datepicker"><a class="header-anchor" href="#datepicker">¶</a> DatePicker</h2>
<p>Use Date Picker for date input.</p>
<h3 id="enter-date"><a class="header-anchor" href="#enter-date">¶</a> Enter Date</h3>
<p>Basic date picker measured by 'day'.</p>
<demo-block>
        <div><p>The measurement is determined by the <code>type</code> attribute. You can enable quick options by creating a <code>picker-options</code> object with <code>shortcuts</code> property. The disabled date is set by <code>disabledDate</code>, which is a function.</p>
</div>
        <!--element-demo: <template>
  <div class="block">
    <span class="demonstration">Default</span>
    <el-date-picker
      v-model="value1"
      type="date"
      placeholder="Pick a day">
    </el-date-picker>
  </div>
  <div class="block">
    <span class="demonstration">Picker with quick options</span>
    <el-date-picker
      v-model="value2"
      type="date"
      placeholder="Pick a day"
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
            text: 'Today',
            onClick(picker) {
              picker.$emit('pick', new Date());
            }
          }, {
            text: 'Yesterday',
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24);
              picker.$emit('pick', date);
            }
          }, {
            text: 'A week ago',
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
    &lt;span class=&quot;demonstration&quot;&gt;Default&lt;/span&gt;
    &lt;el-date-picker
      v-model=&quot;value1&quot;
      type=&quot;date&quot;
      placeholder=&quot;Pick a day&quot;&gt;
    &lt;/el-date-picker&gt;
  &lt;/div&gt;
  &lt;div class=&quot;block&quot;&gt;
    &lt;span class=&quot;demonstration&quot;&gt;Picker with quick options&lt;/span&gt;
    &lt;el-date-picker
      v-model=&quot;value2&quot;
      type=&quot;date&quot;
      placeholder=&quot;Pick a day&quot;
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
            text: 'Today',
            onClick(picker) {
              picker.$emit('pick', new Date());
            }
          }, {
            text: 'Yesterday',
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24);
              picker.$emit('pick', date);
            }
          }, {
            text: 'A week ago',
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
</code></pre></template></demo-block><h3 id="other-measurements"><a class="header-anchor" href="#other-measurements">¶</a> Other measurements</h3>
<p>You can choose week, month, year or multiple dates by extending the standard date picker component.</p>
<demo-block>
        
        <!--element-demo: <div class="container">
  <div class="block">
    <span class="demonstration">Week</span>
    <el-date-picker
      v-model="value1"
      type="week"
      format="Week WW"
      placeholder="Pick a week">
    </el-date-picker>
  </div>
  <div class="block">
    <span class="demonstration">Month</span>
    <el-date-picker
      v-model="value2"
      type="month"
      placeholder="Pick a month">
    </el-date-picker>
  </div>
</div>
<div class="container">
  <div class="block">
    <span class="demonstration">Year</span>
    <el-date-picker
      v-model="value3"
      type="year"
      placeholder="Pick a year">
    </el-date-picker>
  </div>
  <div class="block">
    <span class="demonstration">Dates</span>
    <el-date-picker
      type="dates"
      v-model="value4"
      placeholder="Pick one or more dates">
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
    &lt;span class=&quot;demonstration&quot;&gt;Week&lt;/span&gt;
    &lt;el-date-picker
      v-model=&quot;value1&quot;
      type=&quot;week&quot;
      format=&quot;Week WW&quot;
      placeholder=&quot;Pick a week&quot;&gt;
    &lt;/el-date-picker&gt;
  &lt;/div&gt;
  &lt;div class=&quot;block&quot;&gt;
    &lt;span class=&quot;demonstration&quot;&gt;Month&lt;/span&gt;
    &lt;el-date-picker
      v-model=&quot;value2&quot;
      type=&quot;month&quot;
      placeholder=&quot;Pick a month&quot;&gt;
    &lt;/el-date-picker&gt;
  &lt;/div&gt;
&lt;/div&gt;
&lt;div class=&quot;container&quot;&gt;
  &lt;div class=&quot;block&quot;&gt;
    &lt;span class=&quot;demonstration&quot;&gt;Year&lt;/span&gt;
    &lt;el-date-picker
      v-model=&quot;value3&quot;
      type=&quot;year&quot;
      placeholder=&quot;Pick a year&quot;&gt;
    &lt;/el-date-picker&gt;
  &lt;/div&gt;
  &lt;div class=&quot;block&quot;&gt;
    &lt;span class=&quot;demonstration&quot;&gt;Dates&lt;/span&gt;
    &lt;el-date-picker
      type=&quot;dates&quot;
      v-model=&quot;value4&quot;
      placeholder=&quot;Pick one or more dates&quot;&gt;
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
</code></pre></template></demo-block><h3 id="date-range"><a class="header-anchor" href="#date-range">¶</a> Date Range</h3>
<p>Picking a date range is supported.</p>
<demo-block>
        <div><p>When in range mode, the left and right panels are linked by default. If you want the two panels to switch current months independently, you can use the <code>unlink-panels</code> attribute.</p>
</div>
        <!--element-demo: <template>
  <div class="block">
    <span class="demonstration">Default</span>
    <el-date-picker
      v-model="value1"
      type="daterange"
      range-separator="To"
      start-placeholder="Start date"
      end-placeholder="End date">
    </el-date-picker>
  </div>
  <div class="block">
    <span class="demonstration">With quick options</span>
    <el-date-picker
      v-model="value2"
      type="daterange"
      align="right"
      unlink-panels
      range-separator="To"
      start-placeholder="Start date"
      end-placeholder="End date"
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
            text: 'Last week',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit('pick', [start, end]);
            }
          }, {
            text: 'Last month',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
              picker.$emit('pick', [start, end]);
            }
          }, {
            text: 'Last 3 months',
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
    &lt;span class=&quot;demonstration&quot;&gt;Default&lt;/span&gt;
    &lt;el-date-picker
      v-model=&quot;value1&quot;
      type=&quot;daterange&quot;
      range-separator=&quot;To&quot;
      start-placeholder=&quot;Start date&quot;
      end-placeholder=&quot;End date&quot;&gt;
    &lt;/el-date-picker&gt;
  &lt;/div&gt;
  &lt;div class=&quot;block&quot;&gt;
    &lt;span class=&quot;demonstration&quot;&gt;With quick options&lt;/span&gt;
    &lt;el-date-picker
      v-model=&quot;value2&quot;
      type=&quot;daterange&quot;
      align=&quot;right&quot;
      unlink-panels
      range-separator=&quot;To&quot;
      start-placeholder=&quot;Start date&quot;
      end-placeholder=&quot;End date&quot;
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
            text: 'Last week',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit('pick', [start, end]);
            }
          }, {
            text: 'Last month',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
              picker.$emit('pick', [start, end]);
            }
          }, {
            text: 'Last 3 months',
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
</code></pre></template></demo-block><h3 id="month-range"><a class="header-anchor" href="#month-range">¶</a> Month Range</h3>
<p>Picking a month range is supported.</p>
<demo-block>
        <div><p>When in range mode, the left and right panels are linked by default. If you want the two panels to switch current years independently, you can use the <code>unlink-panels</code> attribute.</p>
</div>
        <!--element-demo: <template>
  <div class="block">
    <span class="demonstration">Default</span>
    <el-date-picker
      v-model="value1"
      type="monthrange"
      range-separator="To"
      start-placeholder="Start month"
      end-placeholder="End month">
    </el-date-picker>
  </div>
  <div class="block">
    <span class="demonstration">With quick options</span>
    <el-date-picker
      v-model="value2"
      type="monthrange"
      align="right"
      unlink-panels
      range-separator="To"
      start-placeholder="Start month"
      end-placeholder="End month"
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
            text: 'This month',
            onClick(picker) {
              picker.$emit('pick', [new Date(), new Date()]);
            }
          }, {
            text: 'This year',
            onClick(picker) {
              const end = new Date();
              const start = new Date(new Date().getFullYear(), 0);
              picker.$emit('pick', [start, end]);
            }
          }, {
            text: 'Last 6 months',
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
    &lt;span class=&quot;demonstration&quot;&gt;Default&lt;/span&gt;
    &lt;el-date-picker
      v-model=&quot;value1&quot;
      type=&quot;monthrange&quot;
      range-separator=&quot;To&quot;
      start-placeholder=&quot;Start month&quot;
      end-placeholder=&quot;End month&quot;&gt;
    &lt;/el-date-picker&gt;
  &lt;/div&gt;
  &lt;div class=&quot;block&quot;&gt;
    &lt;span class=&quot;demonstration&quot;&gt;With quick options&lt;/span&gt;
    &lt;el-date-picker
      v-model=&quot;value2&quot;
      type=&quot;monthrange&quot;
      align=&quot;right&quot;
      unlink-panels
      range-separator=&quot;To&quot;
      start-placeholder=&quot;Start month&quot;
      end-placeholder=&quot;End month&quot;
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
            text: 'This month',
            onClick(picker) {
              picker.$emit('pick', [new Date(), new Date()]);
            }
          }, {
            text: 'This year',
            onClick(picker) {
              const end = new Date();
              const start = new Date(new Date().getFullYear(), 0);
              picker.$emit('pick', [start, end]);
            }
          }, {
            text: 'Last 6 months',
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
</code></pre></template></demo-block><h3 id="default-value"><a class="header-anchor" href="#default-value">¶</a> Default Value</h3>
<p>If user hasn't picked a date, shows today's calendar by default. You can use <code>default-value</code> to set another date. Its value should be parsable by <code>new Date()</code>.</p>
<p>If type is <code>daterange</code>, <code>default-value</code> sets the left side calendar.</p>
<demo-block>
        
        <!--element-demo: <template>
  <div class="block">
    <span class="demonstration">date</span>
    <el-date-picker
      v-model="value1"
      type="date"
      placeholder="Pick a date"
      default-value="2010-10-01">
    </el-date-picker>
  </div>
  <div class="block">
    <span class="demonstration">daterange</span>
    <el-date-picker
      v-model="value2"
      type="daterange"
      align="right"
      start-placeholder="Start Date"
      end-placeholder="End Date"
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
    &lt;span class=&quot;demonstration&quot;&gt;date&lt;/span&gt;
    &lt;el-date-picker
      v-model=&quot;value1&quot;
      type=&quot;date&quot;
      placeholder=&quot;Pick a date&quot;
      default-value=&quot;2010-10-01&quot;&gt;
    &lt;/el-date-picker&gt;
  &lt;/div&gt;
  &lt;div class=&quot;block&quot;&gt;
    &lt;span class=&quot;demonstration&quot;&gt;daterange&lt;/span&gt;
    &lt;el-date-picker
      v-model=&quot;value2&quot;
      type=&quot;daterange&quot;
      align=&quot;right&quot;
      start-placeholder=&quot;Start Date&quot;
      end-placeholder=&quot;End Date&quot;
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
</code></pre></template></demo-block><h3 id="date-formats"><a class="header-anchor" href="#date-formats">¶</a> Date Formats</h3>
<p>Use <code>format</code> to control displayed text's format in the input box. Use <code>value-format</code> to control binding value's format.</p>
<p>By default, the component accepts and emits a <code>Date</code> object. Below are supported format strings, using UTC 2017-01-02 03:04:05 as an example:</p>
<div class="warning">
<p>Pay attention to capitalization</p>
</div>
<table>
<thead>
<tr>
<th>format</th>
<th>meaning</th>
<th>note</th>
<th>example</th>
</tr>
</thead>
<tbody>
<tr>
<td><code>yyyy</code></td>
<td>year</td>
<td></td>
<td>2017</td>
</tr>
<tr>
<td><code>M</code></td>
<td>month</td>
<td>no leading 0</td>
<td>1</td>
</tr>
<tr>
<td><code>MM</code></td>
<td>month</td>
<td></td>
<td>01</td>
</tr>
<tr>
<td><code>MMM</code></td>
<td>month</td>
<td></td>
<td>Jan</td>
</tr>
<tr>
<td><code>MMMM</code></td>
<td>month</td>
<td></td>
<td>January</td>
</tr>
<tr>
<td><code>W</code></td>
<td>week</td>
<td>only for week picker's <code>format</code>; no leading 0</td>
<td>1</td>
</tr>
<tr>
<td><code>WW</code></td>
<td>week</td>
<td>only for week picker's <code>format</code></td>
<td>01</td>
</tr>
<tr>
<td><code>d</code></td>
<td>day</td>
<td>no leading 0</td>
<td>2</td>
</tr>
<tr>
<td><code>dd</code></td>
<td>day</td>
<td></td>
<td>02</td>
</tr>
<tr>
<td><code>H</code></td>
<td>hour</td>
<td>24-hour clock; no leading 0</td>
<td>3</td>
</tr>
<tr>
<td><code>HH</code></td>
<td>hour</td>
<td>24-hour clock</td>
<td>03</td>
</tr>
<tr>
<td><code>h</code></td>
<td>hour</td>
<td>12-hour clock; must be used with <code>A</code> or <code>a</code>; no leading 0</td>
<td>3</td>
</tr>
<tr>
<td><code>hh</code></td>
<td>hour</td>
<td>12-hour clock; must be used with <code>A</code> or <code>a</code></td>
<td>03</td>
</tr>
<tr>
<td><code>m</code></td>
<td>minute</td>
<td>no leading 0</td>
<td>4</td>
</tr>
<tr>
<td><code>mm</code></td>
<td>minute</td>
<td></td>
<td>04</td>
</tr>
<tr>
<td><code>s</code></td>
<td>second</td>
<td>no leading 0</td>
<td>5</td>
</tr>
<tr>
<td><code>ss</code></td>
<td>second</td>
<td></td>
<td>05</td>
</tr>
<tr>
<td><code>A</code></td>
<td>AM/PM</td>
<td>only for <code>format</code>, uppercased</td>
<td>AM</td>
</tr>
<tr>
<td><code>a</code></td>
<td>am/pm</td>
<td>only for <code>format</code>, lowercased</td>
<td>am</td>
</tr>
<tr>
<td><code>timestamp</code></td>
<td>JS timestamp</td>
<td>only for <code>value-format</code>; binding value will be a <code>number</code></td>
<td>1483326245000</td>
</tr>
<tr>
<td><code>[MM]</code></td>
<td>No escape characters</td>
<td>To escape characters, wrap them in square brackets (e.g. [A] [MM])</td>
<td>MM</td>
</tr>
</tbody>
</table>
<demo-block>
        
        <!--element-demo: <template>
  <div class="block">
    <span class="demonstration">Emits Date object</span>
    <div class="demonstration">Value: {{ value1 }}</div>
    <el-date-picker
      v-model="value1"
      type="date"
      placeholder="Pick a Date"
      format="yyyy/MM/dd">
    </el-date-picker>
  </div>
  <div class="block">
    <span class="demonstration">Use value-format</span>
    <div class="demonstration">Value: {{ value2 }}</div>
    <el-date-picker
      v-model="value2"
      type="date"
      placeholder="Pick a Date"
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
      placeholder="Pick a Date"
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
    &lt;span class=&quot;demonstration&quot;&gt;Emits Date object&lt;/span&gt;
    &lt;div class=&quot;demonstration&quot;&gt;Value: {{ value1 }}&lt;/div&gt;
    &lt;el-date-picker
      v-model=&quot;value1&quot;
      type=&quot;date&quot;
      placeholder=&quot;Pick a Date&quot;
      format=&quot;yyyy/MM/dd&quot;&gt;
    &lt;/el-date-picker&gt;
  &lt;/div&gt;
  &lt;div class=&quot;block&quot;&gt;
    &lt;span class=&quot;demonstration&quot;&gt;Use value-format&lt;/span&gt;
    &lt;div class=&quot;demonstration&quot;&gt;Value: {{ value2 }}&lt;/div&gt;
    &lt;el-date-picker
      v-model=&quot;value2&quot;
      type=&quot;date&quot;
      placeholder=&quot;Pick a Date&quot;
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
      placeholder=&quot;Pick a Date&quot;
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
</code></pre></template></demo-block><h3 id="default-time-for-start-date-and-end-date"><a class="header-anchor" href="#default-time-for-start-date-and-end-date">¶</a> Default time for start date and end date</h3>
<p>When picking a date range, you can assign the time part for start date and end date.</p>
<demo-block>
        <div><p>By default, the time part of start date and end date are both <code>00:00:00</code>. Setting <code>default-time</code> can change their time respectively. It accepts an array of up to two strings with the format of <code>12:00:00</code>. The first string sets the time for the start date, and the second for the end date.</p>
</div>
        <!--element-demo: <template>
  <div class="block">
    <p>Component value：{{ value }}</p>
    <el-date-picker
      v-model="value"
      type="daterange"
      start-placeholder="Start date"
      end-placeholder="End date"
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
    &lt;p&gt;Component value：{{ value }}&lt;/p&gt;
    &lt;el-date-picker
      v-model=&quot;value&quot;
      type=&quot;daterange&quot;
      start-placeholder=&quot;Start date&quot;
      end-placeholder=&quot;End date&quot;
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
<td>date(DatePicker) / array(DateRangePicker)</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>readonly</td>
<td>whether DatePicker is read only</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>disabled</td>
<td>whether DatePicker is disabled</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>size</td>
<td>size of Input</td>
<td>string</td>
<td>large/small/mini</td>
<td>—</td>
</tr>
<tr>
<td>editable</td>
<td>whether the input is editable</td>
<td>boolean</td>
<td>—</td>
<td>true</td>
</tr>
<tr>
<td>clearable</td>
<td>whether to show clear button</td>
<td>boolean</td>
<td>—</td>
<td>true</td>
</tr>
<tr>
<td>placeholder</td>
<td>placeholder in non-range mode</td>
<td>string</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>start-placeholder</td>
<td>placeholder for the start date in range mode</td>
<td>string</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>end-placeholder</td>
<td>placeholder for the end date in range mode</td>
<td>string</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>type</td>
<td>type of the picker</td>
<td>string</td>
<td>year/month/date/dates/datetime/ week/datetimerange/daterange/ monthrange</td>
<td>date</td>
</tr>
<tr>
<td>format</td>
<td>format of the displayed value in the input box</td>
<td>string</td>
<td>see <a href="#/en-US/component/date-picker#date-formats">date formats</a></td>
<td>yyyy-MM-dd</td>
</tr>
<tr>
<td>align</td>
<td>alignment</td>
<td>left/center/right</td>
<td>left</td>
<td></td>
</tr>
<tr>
<td>popper-class</td>
<td>custom class name for DatePicker's dropdown</td>
<td>string</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>picker-options</td>
<td>additional options, check the table below</td>
<td>object</td>
<td>—</td>
<td>{}</td>
</tr>
<tr>
<td>range-separator</td>
<td>range separator</td>
<td>string</td>
<td>—</td>
<td>'-'</td>
</tr>
<tr>
<td>default-value</td>
<td>optional, default date of the calendar</td>
<td>Date</td>
<td>anything accepted by <code>new Date()</code></td>
<td>—</td>
</tr>
<tr>
<td>default-time</td>
<td>optional, the time value to use when selecting date range</td>
<td>string[]</td>
<td>Array with length 2, each item is a string like <code>12:00:00</code>. The first item for the start date and then second item for the end date</td>
<td>—</td>
</tr>
<tr>
<td>value-format</td>
<td>optional, format of binding value. If not specified, the binding value will be a Date object</td>
<td>string</td>
<td>see <a href="#/en-US/component/date-picker#date-formats">date formats</a></td>
<td>—</td>
</tr>
<tr>
<td>name</td>
<td>same as <code>name</code> in native input</td>
<td>string</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>unlink-panels</td>
<td>unlink two date-panels in range-picker</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>prefix-icon</td>
<td>Custom prefix icon class</td>
<td>string</td>
<td>—</td>
<td>el-icon-date</td>
</tr>
<tr>
<td>clear-icon</td>
<td>Custom clear icon class</td>
<td>string</td>
<td>—</td>
<td>el-icon-circle-close</td>
</tr>
<tr>
<td>validate-event</td>
<td>whether to trigger form validation</td>
<td>boolean</td>
<td>-</td>
<td>true</td>
</tr>
</tbody>
</table>
<h3 id="picker-options"><a class="header-anchor" href="#picker-options">¶</a> Picker Options</h3>
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
<td>shortcuts</td>
<td>a { text, onClick } object array to set shortcut options, check the table below</td>
<td>object[]</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>disabledDate</td>
<td>a function determining if a date is disabled with that date as its parameter. Should return a Boolean</td>
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
<td>first day of week</td>
<td>Number</td>
<td>1 to 7</td>
<td>7</td>
</tr>
<tr>
<td>onPick</td>
<td>a callback that triggers when the selected date is changed. Only for <code>daterange</code> and <code>datetimerange</code>.</td>
<td>Function({ maxDate, minDate })</td>
<td>-</td>
<td>-</td>
</tr>
</tbody>
</table>
<h3 id="shortcuts"><a class="header-anchor" href="#shortcuts">¶</a> shortcuts</h3>
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
<td>text</td>
<td>title of the shortcut</td>
<td>string</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>onClick</td>
<td>callback function, triggers when the shortcut is clicked, with the <code>vm</code> as its parameter. You can change the picker value by emitting the <code>pick</code> event. Example: <code>vm.$emit('pick', new Date())</code></td>
<td>function</td>
<td>—</td>
<td>—</td>
</tr>
</tbody>
</table>
<h3 id="events"><a class="header-anchor" href="#events">¶</a> Events</h3>
<table>
<thead>
<tr>
<th>Event Name</th>
<th>Description</th>
<th>Parameters</th>
</tr>
</thead>
<tbody>
<tr>
<td>change</td>
<td>triggers when user confirms the value</td>
<td>component's binding value</td>
</tr>
<tr>
<td>blur</td>
<td>triggers when Input blurs</td>
<td>component instance</td>
</tr>
<tr>
<td>focus</td>
<td>triggers when Input focuses</td>
<td>component instance</td>
</tr>
</tbody>
</table>
<h3 id="methods"><a class="header-anchor" href="#methods">¶</a> Methods</h3>
<table>
<thead>
<tr>
<th>Method</th>
<th>Description</th>
<th>Parameters</th>
</tr>
</thead>
<tbody>
<tr>
<td>focus</td>
<td>focus the Input component</td>
<td>—</td>
</tr>
</tbody>
</table>
<h3 id="slots"><a class="header-anchor" href="#slots">¶</a> Slots</h3>
<table>
<thead>
<tr>
<th>Name</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>range-separator</td>
<td>custom range separator content</td>
</tr>
</tbody>
</table>
