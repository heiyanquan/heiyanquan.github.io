<h2 id="slider"><a class="header-anchor" href="#slider">¶</a> Slider</h2>
<p>Drag the slider within a fixed range.</p>
<h3 id="basic-usage"><a class="header-anchor" href="#basic-usage">¶</a> Basic usage</h3>
<p>The current value is displayed when the slider is being dragged.</p>
<demo-block>
        <div><p>Customize the initial value of the slider by setting the binding value.</p>
</div>
        <!--element-demo: <template>
  <div class="block">
    <span class="demonstration">Default value</span>
    <el-slider v-model="value1"></el-slider>
  </div>
  <div class="block">
    <span class="demonstration">Customized initial value</span>
    <el-slider v-model="value2"></el-slider>
  </div>
  <div class="block">
    <span class="demonstration">Hide Tooltip</span>
    <el-slider v-model="value3" :show-tooltip="false"></el-slider>
  </div>
  <div class="block">
    <span class="demonstration">Format Tooltip</span>
    <el-slider v-model="value4" :format-tooltip="formatTooltip"></el-slider>
  </div>
  <div class="block">
    <span class="demonstration">Disabled</span>
    <el-slider v-model="value5" disabled></el-slider>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        value1: 0,
        value2: 50,
        value3: 36,
        value4: 48,
        value5: 42
      }
    },
    methods: {
      formatTooltip(val) {
        return val / 100;
      }
    }
  }
</script>
:element-demo-->
        <template slot="highlight"><pre v-pre><code class="html">&lt;template&gt;
  &lt;div class=&quot;block&quot;&gt;
    &lt;span class=&quot;demonstration&quot;&gt;Default value&lt;/span&gt;
    &lt;el-slider v-model=&quot;value1&quot;&gt;&lt;/el-slider&gt;
  &lt;/div&gt;
  &lt;div class=&quot;block&quot;&gt;
    &lt;span class=&quot;demonstration&quot;&gt;Customized initial value&lt;/span&gt;
    &lt;el-slider v-model=&quot;value2&quot;&gt;&lt;/el-slider&gt;
  &lt;/div&gt;
  &lt;div class=&quot;block&quot;&gt;
    &lt;span class=&quot;demonstration&quot;&gt;Hide Tooltip&lt;/span&gt;
    &lt;el-slider v-model=&quot;value3&quot; :show-tooltip=&quot;false&quot;&gt;&lt;/el-slider&gt;
  &lt;/div&gt;
  &lt;div class=&quot;block&quot;&gt;
    &lt;span class=&quot;demonstration&quot;&gt;Format Tooltip&lt;/span&gt;
    &lt;el-slider v-model=&quot;value4&quot; :format-tooltip=&quot;formatTooltip&quot;&gt;&lt;/el-slider&gt;
  &lt;/div&gt;
  &lt;div class=&quot;block&quot;&gt;
    &lt;span class=&quot;demonstration&quot;&gt;Disabled&lt;/span&gt;
    &lt;el-slider v-model=&quot;value5&quot; disabled&gt;&lt;/el-slider&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
  export default {
    data() {
      return {
        value1: 0,
        value2: 50,
        value3: 36,
        value4: 48,
        value5: 42
      }
    },
    methods: {
      formatTooltip(val) {
        return val / 100;
      }
    }
  }
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="discrete-values"><a class="header-anchor" href="#discrete-values">¶</a> Discrete values</h3>
<p>The options can be discrete.</p>
<demo-block>
        <div><p>Set step size with the <code>step</code> attribute. You can display breakpoints by setting the <code>show-stops</code> attribute.</p>
</div>
        <!--element-demo: <template>
  <div class="block">
    <span class="demonstration">Breakpoints not displayed</span>
    <el-slider
      v-model="value1"
      :step="10">
    </el-slider>
  </div>
  <div class="block">
    <span class="demonstration">Breakpoints displayed</span>
    <el-slider
      v-model="value2"
      :step="10"
      show-stops>
    </el-slider>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        value1: 0,
        value2: 0
      }
    }
  }
</script>
:element-demo-->
        <template slot="highlight"><pre v-pre><code class="html">&lt;template&gt;
  &lt;div class=&quot;block&quot;&gt;
    &lt;span class=&quot;demonstration&quot;&gt;Breakpoints not displayed&lt;/span&gt;
    &lt;el-slider
      v-model=&quot;value1&quot;
      :step=&quot;10&quot;&gt;
    &lt;/el-slider&gt;
  &lt;/div&gt;
  &lt;div class=&quot;block&quot;&gt;
    &lt;span class=&quot;demonstration&quot;&gt;Breakpoints displayed&lt;/span&gt;
    &lt;el-slider
      v-model=&quot;value2&quot;
      :step=&quot;10&quot;
      show-stops&gt;
    &lt;/el-slider&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
  export default {
    data() {
      return {
        value1: 0,
        value2: 0
      }
    }
  }
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="slider-with-input-box"><a class="header-anchor" href="#slider-with-input-box">¶</a> Slider with input box</h3>
<p>Set value via a input box.</p>
<demo-block>
        <div><p>Set the <code>show-input</code> attribute to display an input box on the right.</p>
</div>
        <!--element-demo: <template>
  <div class="block">
    <el-slider
      v-model="value"
      show-input>
    </el-slider>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        value: 0
      }
    }
  }
</script>
:element-demo-->
        <template slot="highlight"><pre v-pre><code class="html">&lt;template&gt;
  &lt;div class=&quot;block&quot;&gt;
    &lt;el-slider
      v-model=&quot;value&quot;
      show-input&gt;
    &lt;/el-slider&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
  export default {
    data() {
      return {
        value: 0
      }
    }
  }
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="range-selection"><a class="header-anchor" href="#range-selection">¶</a> Range selection</h3>
<p>Selecting a range of values is supported.</p>
<demo-block>
        <div><p>Setting the <code>range</code> attribute activates range mode, where the binding value is an array made up of two boundary values.</p>
</div>
        <!--element-demo: <template>
  <div class="block">
    <el-slider
      v-model="value"
      range
      show-stops
      :max="10">
    </el-slider>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        value: [4, 8]
      }
    }
  }
</script>
:element-demo-->
        <template slot="highlight"><pre v-pre><code class="html">&lt;template&gt;
  &lt;div class=&quot;block&quot;&gt;
    &lt;el-slider
      v-model=&quot;value&quot;
      range
      show-stops
      :max=&quot;10&quot;&gt;
    &lt;/el-slider&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
  export default {
    data() {
      return {
        value: [4, 8]
      }
    }
  }
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="vertical-mode"><a class="header-anchor" href="#vertical-mode">¶</a> Vertical mode</h3>
<demo-block>
        <div><p>Setting the <code>vertical</code> attribute to <code>true</code> enables vertical mode. In vertical mode, the <code>height</code> attribute is required.</p>
</div>
        <!--element-demo: <template>
  <div class="block">
    <el-slider
      v-model="value"
      vertical
      height="200px">
    </el-slider>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        value: 0
      }
    }
  }
</script>
:element-demo-->
        <template slot="highlight"><pre v-pre><code class="html">&lt;template&gt;
  &lt;div class=&quot;block&quot;&gt;
    &lt;el-slider
      v-model=&quot;value&quot;
      vertical
      height=&quot;200px&quot;&gt;
    &lt;/el-slider&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
  export default {
    data() {
      return {
        value: 0
      }
    }
  }
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="show-marks"><a class="header-anchor" href="#show-marks">¶</a> Show marks</h3>
<demo-block>
        <div><p>Setting this <code>marks</code> attribute can show mark on slider.</p>
</div>
        <!--element-demo: <template>
  <div class="block">
    <el-slider
      v-model="value"
      range
      :marks="marks">
    </el-slider>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        value: [30, 60],
        marks: {
          0: '0°C',
          8: '8°C',
          37: '37°C',
          50: {
            style: {
              color: '#1989FA'
            },
            label: this.$createElement('strong', '50%')
          }
        }
      }
    }
  }
</script>
:element-demo-->
        <template slot="highlight"><pre v-pre><code class="html">&lt;template&gt;
  &lt;div class=&quot;block&quot;&gt;
    &lt;el-slider
      v-model=&quot;value&quot;
      range
      :marks=&quot;marks&quot;&gt;
    &lt;/el-slider&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
  export default {
    data() {
      return {
        value: [30, 60],
        marks: {
          0: '0°C',
          8: '8°C',
          37: '37°C',
          50: {
            style: {
              color: '#1989FA'
            },
            label: this.$createElement('strong', '50%')
          }
        }
      }
    }
  }
&lt;/script&gt;
</code></pre></template></demo-block><h2 id="attributes"><a class="header-anchor" href="#attributes">¶</a> Attributes</h2>
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
<td>number</td>
<td>—</td>
<td>0</td>
</tr>
<tr>
<td>min</td>
<td>minimum value</td>
<td>number</td>
<td>—</td>
<td>0</td>
</tr>
<tr>
<td>max</td>
<td>maximum value</td>
<td>number</td>
<td>—</td>
<td>100</td>
</tr>
<tr>
<td>disabled</td>
<td>whether Slider is disabled</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>step</td>
<td>step size</td>
<td>number</td>
<td>—</td>
<td>1</td>
</tr>
<tr>
<td>show-input</td>
<td>whether to display an input box, works when <code>range</code> is false</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>show-input-controls</td>
<td>whether to display control buttons when <code>show-input</code> is true</td>
<td>boolean</td>
<td>—</td>
<td>true</td>
</tr>
<tr>
<td>input-size</td>
<td>size of the input box</td>
<td>string</td>
<td>large / medium / small / mini</td>
<td>small</td>
</tr>
<tr>
<td>show-stops</td>
<td>whether to display breakpoints</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>show-tooltip</td>
<td>whether to display tooltip value</td>
<td>boolean</td>
<td>—</td>
<td>true</td>
</tr>
<tr>
<td>format-tooltip</td>
<td>format to display tooltip value</td>
<td>function(value)</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>range</td>
<td>whether to select a range</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>vertical</td>
<td>vertical mode</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>height</td>
<td>Slider height, required in vertical mode</td>
<td>string</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>label</td>
<td>label for screen reader</td>
<td>string</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>debounce</td>
<td>debounce delay when typing, in milliseconds, works when <code>show-input</code> is true</td>
<td>number</td>
<td>—</td>
<td>300</td>
</tr>
<tr>
<td>tooltip-class</td>
<td>custom class name for the tooltip</td>
<td>string</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>marks</td>
<td>marks， type of key must be <code>number</code> and must in closed interval <code>[min, max]</code>, each mark can custom style</td>
<td>object</td>
<td>—</td>
<td>—</td>
</tr>
</tbody>
</table>
<h2 id="events"><a class="header-anchor" href="#events">¶</a> Events</h2>
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
<td>triggers when the value changes (if the mouse is being dragged, this event only fires when the mouse is released)</td>
<td>value after changing</td>
</tr>
<tr>
<td>input</td>
<td>triggers when the data changes (It'll be emitted in real time during sliding)</td>
<td>value after changing</td>
</tr>
</tbody>
</table>
