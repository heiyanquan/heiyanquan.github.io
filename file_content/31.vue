<h2 id="timepicker"><a class="header-anchor" href="#timepicker">¶</a> TimePicker</h2>
<p>Use Time Picker for time input.</p>
<h3 id="fixed-time-picker"><a class="header-anchor" href="#fixed-time-picker">¶</a> Fixed time picker</h3>
<p>Provide a list of fixed time for users to choose.</p>
<demo-block>
        <div><p>Use <code>el-time-select</code> label, then assign start time, end time and time step with <code>start</code>, <code>end</code> and <code>step</code>.</p>
</div>
        <!--element-demo: <el-time-select
  v-model="value"
  :picker-options="{
    start: '08:30',
    step: '00:15',
    end: '18:30'
  }"
  placeholder="Select time">
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
  placeholder=&quot;Select time&quot;&gt;
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
</code></pre></template></demo-block><h3 id="arbitrary-time-picker"><a class="header-anchor" href="#arbitrary-time-picker">¶</a> Arbitrary time picker</h3>
<p>Can pick an arbitrary time.</p>
<demo-block>
        <div><p>Use <code>el-time-picker</code> label, and you can limit the time range by specifying <code>selectableRange</code>. By default, you can scroll the mouse wheel to pick time, alternatively you can use the control arrows when the <code>arrow-control</code> attribute is set.</p>
</div>
        <!--element-demo: <template>
  <el-time-picker
    v-model="value1"
    :picker-options="{
      selectableRange: '18:30:00 - 20:30:00'
    }"
    placeholder="Arbitrary time">
  </el-time-picker>
  <el-time-picker
    arrow-control
    v-model="value2"
    :picker-options="{
      selectableRange: '18:30:00 - 20:30:00'
    }"
    placeholder="Arbitrary time">
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
    placeholder=&quot;Arbitrary time&quot;&gt;
  &lt;/el-time-picker&gt;
  &lt;el-time-picker
    arrow-control
    v-model=&quot;value2&quot;
    :picker-options=&quot;{
      selectableRange: '18:30:00 - 20:30:00'
    }&quot;
    placeholder=&quot;Arbitrary time&quot;&gt;
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
</code></pre></template></demo-block><h3 id="fixed-time-range"><a class="header-anchor" href="#fixed-time-range">¶</a> Fixed time range</h3>
<p>If start time is picked at first, then the end time will change accordingly.</p>
<demo-block>
        
        <!--element-demo: <template>
  <el-time-select
    placeholder="Start time"
    v-model="startTime"
    :picker-options="{
      start: '08:30',
      step: '00:15',
      end: '18:30'
    }">
  </el-time-select>
  <el-time-select
    placeholder="End time"
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
    placeholder=&quot;Start time&quot;
    v-model=&quot;startTime&quot;
    :picker-options=&quot;{
      start: '08:30',
      step: '00:15',
      end: '18:30'
    }&quot;&gt;
  &lt;/el-time-select&gt;
  &lt;el-time-select
    placeholder=&quot;End time&quot;
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
</code></pre></template></demo-block><h3 id="arbitrary-time-range"><a class="header-anchor" href="#arbitrary-time-range">¶</a> Arbitrary time range</h3>
<p>Can pick an arbitrary time range.</p>
<demo-block>
        <div><p>We can pick a time range by adding an <code>is-range</code> attribute. Also, <code>arrow-control</code> is supported in range mode.</p>
</div>
        <!--element-demo: <template>
  <el-time-picker
    is-range
    v-model="value1"
    range-separator="To"
    start-placeholder="Start time"
    end-placeholder="End time">
  </el-time-picker>
  <el-time-picker
    is-range
    arrow-control
    v-model="value2"
    range-separator="To"
    start-placeholder="Start time"
    end-placeholder="End time">
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
    start-placeholder=&quot;Start time&quot;
    end-placeholder=&quot;End time&quot;&gt;
  &lt;/el-time-picker&gt;
  &lt;el-time-picker
    is-range
    arrow-control
    v-model=&quot;value2&quot;
    range-separator=&quot;To&quot;
    start-placeholder=&quot;Start time&quot;
    end-placeholder=&quot;End time&quot;&gt;
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
<td>date(TimePicker) / string(TimeSelect)</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>readonly</td>
<td>whether TimePicker is read only</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>disabled</td>
<td>whether TimePicker is disabled</td>
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
<td>medium / small / mini</td>
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
<td>placeholder for the start time in range mode</td>
<td>string</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>end-placeholder</td>
<td>placeholder for the end time in range mode</td>
<td>string</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>is-range</td>
<td>whether to pick a time range, only works with <code>&lt;el-time-picker&gt;</code></td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>arrow-control</td>
<td>whether to pick time using arrow buttons, only works with <code>&lt;el-time-picker&gt;</code></td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>align</td>
<td>alignment</td>
<td>left / center / right</td>
<td>left</td>
<td></td>
</tr>
<tr>
<td>popper-class</td>
<td>custom class name for TimePicker's dropdown</td>
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
<td>Date for TimePicker, string for TimeSelect</td>
<td>anything accepted by <code>new Date()</code> for TimePicker, selectable value for TimeSelect</td>
<td>—</td>
</tr>
<tr>
<td>value-format</td>
<td>optional, only for TimePicker, format of binding value. If not specified, the binding value will be a Date object</td>
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
<td>prefix-icon</td>
<td>Custom prefix icon class</td>
<td>string</td>
<td>—</td>
<td>el-icon-time</td>
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
<h3 id="time-select-options"><a class="header-anchor" href="#time-select-options">¶</a> Time Select Options</h3>
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
<td>start</td>
<td>start time</td>
<td>string</td>
<td>—</td>
<td>09:00</td>
</tr>
<tr>
<td>end</td>
<td>end time</td>
<td>string</td>
<td>—</td>
<td>18:00</td>
</tr>
<tr>
<td>step</td>
<td>time step</td>
<td>string</td>
<td>—</td>
<td>00:30</td>
</tr>
<tr>
<td>minTime</td>
<td>minimum time, any time before this time will be disabled</td>
<td>string</td>
<td>—</td>
<td>00:00</td>
</tr>
<tr>
<td>maxTime</td>
<td>maximum time, any time after this time will be disabled</td>
<td>string</td>
<td>—</td>
<td>—</td>
</tr>
</tbody>
</table>
<h3 id="time-picker-options"><a class="header-anchor" href="#time-picker-options">¶</a> Time Picker Options</h3>
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
<td>selectableRange</td>
<td>available time range, e.g.<code>'18:30:00 - 20:30:00'</code>or<code>['09:30:00 - 12:00:00', '14:30:00 - 18:30:00']</code></td>
<td>string / array</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>format</td>
<td>format of the picker</td>
<td>string</td>
<td>hour <code>HH</code>, minute <code>mm</code>, second <code>ss</code>, AM/PM <code>A</code></td>
<td>HH:mm:ss</td>
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
<td>-</td>
</tr>
</tbody>
</table>
