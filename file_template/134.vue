<h2 id="datetimepicker"><a class="header-anchor" href="#datetimepicker">¶</a> DateTimePicker</h2>
<p>Select date and time in one picker.</p>
<div class="tip">
<p>DateTimePicker is derived from DatePicker and TimePicker. For a more detailed explanation on <code>pickerOptions</code> and other attributes, you can refer to DatePicker and TimePicker.</p>
</div>
<h3 id="date-and-time"><a class="header-anchor" href="#date-and-time">¶</a> Date and time</h3>
<demo-block>
        <div><p>You can select date and time in one picker at the same time by setting <code>type</code> to <code>datetime</code>. The way to use shortcuts is the same as Date Picker.</p>
</div>
        <template slot="source"><element-demo0 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;template&gt;
  &lt;div class=&quot;block&quot;&gt;
    &lt;span class=&quot;demonstration&quot;&gt;Default&lt;/span&gt;
    &lt;el-date-picker
      v-model=&quot;value1&quot;
      type=&quot;datetime&quot;
      placeholder=&quot;Select date and time&quot;&gt;
    &lt;/el-date-picker&gt;
  &lt;/div&gt;
  &lt;div class=&quot;block&quot;&gt;
    &lt;span class=&quot;demonstration&quot;&gt;With shortcuts&lt;/span&gt;
    &lt;el-date-picker
      v-model=&quot;value2&quot;
      type=&quot;datetime&quot;
      placeholder=&quot;Select date and time&quot;
      :picker-options=&quot;pickerOptions&quot;&gt;
    &lt;/el-date-picker&gt;
  &lt;/div&gt;
  &lt;div class=&quot;block&quot;&gt;
    &lt;span class=&quot;demonstration&quot;&gt;With default time&lt;/span&gt;
    &lt;el-date-picker
      v-model=&quot;value3&quot;
      type=&quot;datetime&quot;
      placeholder=&quot;Select date and time&quot;
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
        value3: ''
      };
    }
  };
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="date-and-time-range"><a class="header-anchor" href="#date-and-time-range">¶</a> Date and time range</h3>
<demo-block>
        <div><p>You can select date and time range by setting <code>type</code> to <code>datetimerange</code>.</p>
</div>
        <template slot="source"><element-demo1 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;template&gt;
  &lt;div class=&quot;block&quot;&gt;
    &lt;span class=&quot;demonstration&quot;&gt;Default&lt;/span&gt;
    &lt;el-date-picker
      v-model=&quot;value1&quot;
      type=&quot;datetimerange&quot;
      range-separator=&quot;To&quot;
      start-placeholder=&quot;Start date&quot;
      end-placeholder=&quot;End date&quot;&gt;
    &lt;/el-date-picker&gt;
  &lt;/div&gt;
  &lt;div class=&quot;block&quot;&gt;
    &lt;span class=&quot;demonstration&quot;&gt;With shortcuts&lt;/span&gt;
    &lt;el-date-picker
      v-model=&quot;value2&quot;
      type=&quot;datetimerange&quot;
      :picker-options=&quot;pickerOptions&quot;
      range-separator=&quot;To&quot;
      start-placeholder=&quot;Start date&quot;
      end-placeholder=&quot;End date&quot;
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
        value1: [new Date(2000, 10, 10, 10, 10), new Date(2000, 10, 11, 10, 10)],
        value2: ''
      };
    }
  };
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="default-time-value-for-start-date-and-end-date"><a class="header-anchor" href="#default-time-value-for-start-date-and-end-date">¶</a> Default time value for start date and end date</h3>
<demo-block>
        <div><p>When picking date range on the date panel with type <code>datetimerange</code>, <code>00:00:00</code> will be used as the default time value for start and end date. We can control it with the <code>default-time</code> attribute. <code>default-time</code> accepts an array of up to two strings. The first item controls time value of the start date and the second item controls time value of the end date.</p>
</div>
        <template slot="source"><element-demo2 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;template&gt;
  &lt;div class=&quot;block&quot;&gt;
    &lt;span class=&quot;demonstration&quot;&gt;Start date time 12:00:00&lt;/span&gt;
    &lt;el-date-picker
      v-model=&quot;value1&quot;
      type=&quot;datetimerange&quot;
      start-placeholder=&quot;Start Date&quot;
      end-placeholder=&quot;End Date&quot;
      :default-time=&quot;['12:00:00']&quot;&gt;
    &lt;/el-date-picker&gt;
  &lt;/div&gt;
  &lt;div class=&quot;block&quot;&gt;
    &lt;span class=&quot;demonstration&quot;&gt;Start date time 12:00:00, end date time 08:00:00&lt;/span&gt;
    &lt;el-date-picker
      v-model=&quot;value2&quot;
      type=&quot;datetimerange&quot;
      align=&quot;right&quot;
      start-placeholder=&quot;Start Date&quot;
      end-placeholder=&quot;End Date&quot;
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
<td>date(DateTimePicker) / array(DateTimeRangePicker)</td>
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
<td>size</td>
<td>size of Input</td>
<td>string</td>
<td>large/small/mini</td>
<td>—</td>
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
<td>time-arrow-control</td>
<td>whether to pick time using arrow buttons</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>type</td>
<td>type of the picker</td>
<td>string</td>
<td>year/month/date/datetime/ week/datetimerange/daterange</td>
<td>date</td>
</tr>
<tr>
<td>format</td>
<td>format of the displayed value in the input box</td>
<td>string</td>
<td>see <a href="#/en-US/component/date-picker#date-formats">date formats</a></td>
<td>yyyy-MM-dd HH:mm:ss</td>
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
<td>custom class name for DateTimePicker's dropdown</td>
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
<td>-</td>
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
<td>the default time value after picking a date</td>
<td>non-range: string / range: string[]</td>
<td>non-range: a string like <code>12:00:00</code>, range: array of two strings, and the first item is for the start date and second for the end date. <code>00:00:00</code> will be used if not specified</td>
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
<td>unllink two date-panels in range-picker</td>
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
