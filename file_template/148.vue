<h2 id="colorpicker"><a class="header-anchor" href="#colorpicker">¶</a> ColorPicker</h2>
<p>ColorPicker is a color selector supporting multiple color formats.</p>
<h3 id="basic-usage"><a class="header-anchor" href="#basic-usage">¶</a> Basic usage</h3>
<demo-block>
        <div><p>ColorPicker requires a string typed variable to be bound to v-model.</p>
</div>
        <template slot="source"><element-demo0 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;div class=&quot;block&quot;&gt;
  &lt;span class=&quot;demonstration&quot;&gt;With default value&lt;/span&gt;
  &lt;el-color-picker v-model=&quot;color1&quot;&gt;&lt;/el-color-picker&gt;
&lt;/div&gt;
&lt;div class=&quot;block&quot;&gt;
  &lt;span class=&quot;demonstration&quot;&gt;With no default value&lt;/span&gt;
  &lt;el-color-picker v-model=&quot;color2&quot;&gt;&lt;/el-color-picker&gt;
&lt;/div&gt;

&lt;script&gt;
  export default {
    data() {
      return {
        color1: '#409EFF',
        color2: null
      }
    }
  };
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="alpha"><a class="header-anchor" href="#alpha">¶</a> Alpha</h3>
<demo-block>
        <div><p>ColorPicker supports alpha channel selecting. To activate alpha selecting, just add the <code>show-alpha</code> attribute.</p>
</div>
        <template slot="source"><element-demo1 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;el-color-picker v-model=&quot;color&quot; show-alpha&gt;&lt;/el-color-picker&gt;

&lt;script&gt;
  export default {
    data() {
      return {
        color: 'rgba(19, 206, 102, 0.8)'
      }
    }
  };
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="predefined-colors"><a class="header-anchor" href="#predefined-colors">¶</a> Predefined colors</h3>
<demo-block>
        <div><p>ColorPicker supports predefined color options</p>
</div>
        <template slot="source"><element-demo2 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;el-color-picker
  v-model=&quot;color&quot;
  show-alpha
  :predefine=&quot;predefineColors&quot;&gt;
&lt;/el-color-picker&gt;

&lt;script&gt;
  export default {
    data() {
      return {
        color: 'rgba(255, 69, 0, 0.68)',
        predefineColors: [
          '#ff4500',
          '#ff8c00',
          '#ffd700',
          '#90ee90',
          '#00ced1',
          '#1e90ff',
          '#c71585',
          'rgba(255, 69, 0, 0.68)',
          'rgb(255, 120, 0)',
          'hsv(51, 100, 98)',
          'hsva(120, 40, 94, 0.5)',
          'hsl(181, 100%, 37%)',
          'hsla(209, 100%, 56%, 0.73)',
          '#c7158577'
        ]
      }
    }
  };
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="sizes"><a class="header-anchor" href="#sizes">¶</a> Sizes</h3>
<demo-block>
        
        <template slot="source"><element-demo3 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;el-color-picker v-model=&quot;color&quot;&gt;&lt;/el-color-picker&gt;
&lt;el-color-picker v-model=&quot;color&quot; size=&quot;medium&quot;&gt;&lt;/el-color-picker&gt;
&lt;el-color-picker v-model=&quot;color&quot; size=&quot;small&quot;&gt;&lt;/el-color-picker&gt;
&lt;el-color-picker v-model=&quot;color&quot; size=&quot;mini&quot;&gt;&lt;/el-color-picker&gt;

&lt;script&gt;
  export default {
    data() {
      return {
        color: '#409EFF'
      }
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
<td>string</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>disabled</td>
<td>whether to disable the ColorPicker</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>size</td>
<td>size of ColorPicker</td>
<td>string</td>
<td>—</td>
<td>medium / small / mini</td>
</tr>
<tr>
<td>show-alpha</td>
<td>whether to display the alpha slider</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>color-format</td>
<td>color format of v-model</td>
<td>string</td>
<td>hsl / hsv / hex / rgb</td>
<td>hex (when show-alpha is false)/ rgb (when show-alpha is true)</td>
</tr>
<tr>
<td>popper-class</td>
<td>custom class name for ColorPicker's dropdown</td>
<td>string</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>predefine</td>
<td>predefined color options</td>
<td>array</td>
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
<td>triggers when input value changes</td>
<td>color value</td>
</tr>
<tr>
<td>active-change</td>
<td>triggers when the current active color changes</td>
<td>active color value</td>
</tr>
</tbody>
</table>
