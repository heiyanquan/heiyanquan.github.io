<h2 id="progress"><a class="header-anchor" href="#progress">¶</a> Progress</h2>
<p>Progress is used to show the progress of current operation, and inform the user the current status.</p>
<h3 id="linear-progress-bar"><a class="header-anchor" href="#linear-progress-bar">¶</a> Linear progress bar</h3>
<demo-block>
        <div><p>Use <code>percentage</code> attribute to set the percentage. It's <strong>required</strong> and must be between <code>0-100</code>. You can custom text format by setting <code>format</code>.</p>
</div>
        <template slot="source"><element-demo0 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;el-progress :percentage=&quot;50&quot;&gt;&lt;/el-progress&gt;
&lt;el-progress :percentage=&quot;100&quot; :format=&quot;format&quot;&gt;&lt;/el-progress&gt;
&lt;el-progress :percentage=&quot;100&quot; status=&quot;success&quot;&gt;&lt;/el-progress&gt;
&lt;el-progress :percentage=&quot;100&quot; status=&quot;warning&quot;&gt;&lt;/el-progress&gt;
&lt;el-progress :percentage=&quot;50&quot; status=&quot;exception&quot;&gt;&lt;/el-progress&gt;

&lt;script&gt;
  export default {
    methods: {
      format(percentage) {
        return percentage === 100 ? 'Full' : `${percentage}%`;
      }
    }
  };
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="internal-percentage"><a class="header-anchor" href="#internal-percentage">¶</a> Internal percentage</h3>
<p>In this case the percentage takes no additional space.</p>
<demo-block>
        <div><p><code>stroke-width</code> attribute decides the <code>width</code> of progress bar, and use <code>text-inside</code> attribute to put description inside the progress bar.</p>
</div>
        <template slot="source"><element-demo1 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;el-progress :text-inside=&quot;true&quot; :stroke-width=&quot;26&quot; :percentage=&quot;70&quot;&gt;&lt;/el-progress&gt;
&lt;el-progress :text-inside=&quot;true&quot; :stroke-width=&quot;24&quot; :percentage=&quot;100&quot; status=&quot;success&quot;&gt;&lt;/el-progress&gt;
&lt;el-progress :text-inside=&quot;true&quot; :stroke-width=&quot;22&quot; :percentage=&quot;80&quot; status=&quot;warning&quot;&gt;&lt;/el-progress&gt;
&lt;el-progress :text-inside=&quot;true&quot; :stroke-width=&quot;20&quot; :percentage=&quot;50&quot; status=&quot;exception&quot;&gt;&lt;/el-progress&gt;
</code></pre></template></demo-block><h3 id="custom-color"><a class="header-anchor" href="#custom-color">¶</a> Custom color</h3>
<p>You can use <code>color</code> attr to set the progress bar color. it accepts color string, function, or array.</p>
<demo-block>
        
        <template slot="source"><element-demo2 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;el-progress :percentage=&quot;percentage&quot; :color=&quot;customColor&quot;&gt;&lt;/el-progress&gt;

&lt;el-progress :percentage=&quot;percentage&quot; :color=&quot;customColorMethod&quot;&gt;&lt;/el-progress&gt;

&lt;el-progress :percentage=&quot;percentage&quot; :color=&quot;customColors&quot;&gt;&lt;/el-progress&gt;
&lt;div&gt;
  &lt;el-button-group&gt;
    &lt;el-button icon=&quot;el-icon-minus&quot; @click=&quot;decrease&quot;&gt;&lt;/el-button&gt;
    &lt;el-button icon=&quot;el-icon-plus&quot; @click=&quot;increase&quot;&gt;&lt;/el-button&gt;
  &lt;/el-button-group&gt;
&lt;/div&gt;

&lt;script&gt;
  export default {
    data() {
      return {
        percentage: 20,
        customColor: '#409eff',
        customColors: [
          {color: '#f56c6c', percentage: 20},
          {color: '#e6a23c', percentage: 40},
          {color: '#5cb87a', percentage: 60},
          {color: '#1989fa', percentage: 80},
          {color: '#6f7ad3', percentage: 100}
        ]
      };
    },
    methods: {
      customColorMethod(percentage) {
        if (percentage &lt; 30) {
          return '#909399';
        } else if (percentage &lt; 70) {
          return '#e6a23c';
        } else {
          return '#67c23a';
        }
      },
      increase() {
        this.percentage += 10;
        if (this.percentage &gt; 100) {
          this.percentage = 100;
        }
      },
      decrease() {
        this.percentage -= 10;
        if (this.percentage &lt; 0) {
          this.percentage = 0;
        }
      }
    }
  }
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="circular-progress-bar"><a class="header-anchor" href="#circular-progress-bar">¶</a> Circular progress bar</h3>
<demo-block>
        <div><p>You can specify <code>type</code> attribute to <code>circle</code> to use circular progress bar, and use <code>width</code> attribute to change the size of circle.</p>
</div>
        <template slot="source"><element-demo3 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;el-progress type=&quot;circle&quot; :percentage=&quot;0&quot;&gt;&lt;/el-progress&gt;
&lt;el-progress type=&quot;circle&quot; :percentage=&quot;25&quot;&gt;&lt;/el-progress&gt;
&lt;el-progress type=&quot;circle&quot; :percentage=&quot;100&quot; status=&quot;success&quot;&gt;&lt;/el-progress&gt;
&lt;el-progress type=&quot;circle&quot; :percentage=&quot;70&quot; status=&quot;warning&quot;&gt;&lt;/el-progress&gt;
&lt;el-progress type=&quot;circle&quot; :percentage=&quot;50&quot; status=&quot;exception&quot;&gt;&lt;/el-progress&gt;
</code></pre></template></demo-block><h3 id="dashboard-progress-bar"><a class="header-anchor" href="#dashboard-progress-bar">¶</a> Dashboard progress bar</h3>
<p>You also can specify <code>type</code> attribute to <code>dashboard</code> to use dashboard progress bar.</p>
<demo-block>
        
        <template slot="source"><element-demo4 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;el-progress type=&quot;dashboard&quot; :percentage=&quot;percentage&quot; :color=&quot;colors&quot;&gt;&lt;/el-progress&gt;
&lt;div&gt;
  &lt;el-button-group&gt;
    &lt;el-button icon=&quot;el-icon-minus&quot; @click=&quot;decrease&quot;&gt;&lt;/el-button&gt;
    &lt;el-button icon=&quot;el-icon-plus&quot; @click=&quot;increase&quot;&gt;&lt;/el-button&gt;
  &lt;/el-button-group&gt;
&lt;/div&gt;

&lt;script&gt;
  export default {
    data() {
      return {
        percentage: 10,
        colors: [
          {color: '#f56c6c', percentage: 20},
          {color: '#e6a23c', percentage: 40},
          {color: '#5cb87a', percentage: 60},
          {color: '#1989fa', percentage: 80},
          {color: '#6f7ad3', percentage: 100}
        ]
      };
    },
    methods: {
      increase() {
        this.percentage += 10;
        if (this.percentage &gt; 100) {
          this.percentage = 100;
        }
      },
      decrease() {
        this.percentage -= 10;
        if (this.percentage &lt; 0) {
          this.percentage = 0;
        }
      }
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
<td><strong>percentage</strong></td>
<td>percentage, <strong>required</strong></td>
<td>number</td>
<td>0-100</td>
<td>0</td>
</tr>
<tr>
<td>type</td>
<td>the type of progress bar</td>
<td>string</td>
<td>line/circle/dashboard</td>
<td>line</td>
</tr>
<tr>
<td>stroke-width</td>
<td>the width of progress bar</td>
<td>number</td>
<td>—</td>
<td>6</td>
</tr>
<tr>
<td>text-inside</td>
<td>whether to place the percentage inside progress bar, only works when <code>type</code> is 'line'</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>status</td>
<td>the current status of progress bar</td>
<td>string</td>
<td>success/exception/warning</td>
<td>—</td>
</tr>
<tr>
<td>color</td>
<td>background color of progress bar. Overrides <code>status</code> prop</td>
<td>string/function/array</td>
<td>—</td>
<td>''</td>
</tr>
<tr>
<td>width</td>
<td>the canvas width of circle progress bar</td>
<td>number</td>
<td>—</td>
<td>126</td>
</tr>
<tr>
<td>show-text</td>
<td>whether to show percentage</td>
<td>boolean</td>
<td>—</td>
<td>true</td>
</tr>
<tr>
<td>stroke-linecap</td>
<td>circle/dashboard type shape at the end path</td>
<td>string</td>
<td>butt/round/square</td>
<td>round</td>
</tr>
<tr>
<td>format</td>
<td>custom text format</td>
<td>function(percentage)</td>
<td>—</td>
<td>—</td>
</tr>
</tbody>
</table>
