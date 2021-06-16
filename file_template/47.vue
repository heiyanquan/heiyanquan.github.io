<h2 id="steps"><a class="header-anchor" href="#steps">¶</a> Steps</h2>
<p>Guide the user to complete tasks in accordance with the process. Its steps can be set according to the actual application scenario and the number of the steps can't be less than 2.</p>
<h3 id="basic-usage"><a class="header-anchor" href="#basic-usage">¶</a> Basic usage</h3>
<p>Simple step bar.</p>
<demo-block>
        <div><p>Set <code>active</code> attribute with <code>Number</code> type, which indicates the index of steps and starts from 0. You can set <code>space</code> attribute when the width of the step needs to be fixed which accepts <code>Number</code> type. The unit of the <code>space</code> attribute is <code>px</code>. If not set, it is responsive. Setting the <code>finish-status</code> attribute can change the state of the steps that have been completed.</p>
</div>
        <template slot="source"><element-demo0 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;el-steps :active=&quot;active&quot; finish-status=&quot;success&quot;&gt;
  &lt;el-step title=&quot;Step 1&quot;&gt;&lt;/el-step&gt;
  &lt;el-step title=&quot;Step 2&quot;&gt;&lt;/el-step&gt;
  &lt;el-step title=&quot;Step 3&quot;&gt;&lt;/el-step&gt;
&lt;/el-steps&gt;

&lt;el-button style=&quot;margin-top: 12px;&quot; @click=&quot;next&quot;&gt;Next step&lt;/el-button&gt;

&lt;script&gt;
  export default {
    data() {
      return {
        active: 0
      };
    },

    methods: {
      next() {
        if (this.active++ &gt; 2) this.active = 0;
      }
    }
  }
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="step-bar-that-contains-status"><a class="header-anchor" href="#step-bar-that-contains-status">¶</a> Step bar that contains status</h3>
<p>Shows the status of the step for each step.</p>
<demo-block>
        <div><p>Use <code>title</code> attribute to set the name of the step, or override the attribute by using a named <code>slot</code>. We have listed all the slot names for you at the end of this page.</p>
</div>
        <template slot="source"><element-demo1 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;el-steps :space=&quot;200&quot; :active=&quot;1&quot; finish-status=&quot;success&quot;&gt;
  &lt;el-step title=&quot;Done&quot;&gt;&lt;/el-step&gt;
  &lt;el-step title=&quot;Processing&quot;&gt;&lt;/el-step&gt;
  &lt;el-step title=&quot;Step 3&quot;&gt;&lt;/el-step&gt;
&lt;/el-steps&gt;
</code></pre></template></demo-block><h3 id="center"><a class="header-anchor" href="#center">¶</a> Center</h3>
<p>Title and desription can be centered.</p>
<demo-block>
        
        <template slot="source"><element-demo2 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;el-steps :active=&quot;2&quot; align-center&gt;
  &lt;el-step title=&quot;Step 1&quot; description=&quot;Some description&quot;&gt;&lt;/el-step&gt;
  &lt;el-step title=&quot;Step 2&quot; description=&quot;Some description&quot;&gt;&lt;/el-step&gt;
  &lt;el-step title=&quot;Step 3&quot; description=&quot;Some description&quot;&gt;&lt;/el-step&gt;
  &lt;el-step title=&quot;Step 4&quot; description=&quot;Some description&quot;&gt;&lt;/el-step&gt;
&lt;/el-steps&gt;
</code></pre></template></demo-block><h3 id="step-bar-with-description"><a class="header-anchor" href="#step-bar-with-description">¶</a> Step bar with description</h3>
<p>There is description for each step.</p>
<demo-block>
        
        <template slot="source"><element-demo3 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;el-steps :active=&quot;1&quot;&gt;
  &lt;el-step title=&quot;Step 1&quot; description=&quot;Some description&quot;&gt;&lt;/el-step&gt;
  &lt;el-step title=&quot;Step 2&quot; description=&quot;Some description&quot;&gt;&lt;/el-step&gt;
  &lt;el-step title=&quot;Step 3&quot; description=&quot;Some description&quot;&gt;&lt;/el-step&gt;
&lt;/el-steps&gt;
</code></pre></template></demo-block><h3 id="step-bar-with-icon"><a class="header-anchor" href="#step-bar-with-icon">¶</a> Step bar with icon</h3>
<p>A variety of custom icons can be used in the step bar.</p>
<demo-block>
        <div><p>The icon is set by the <code>icon</code> property. The types of icons can be found in the document for the Icon component. In addition, you can customize the icon through a named <code>slot</code>.</p>
</div>
        <template slot="source"><element-demo4 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;el-steps :active=&quot;1&quot;&gt;
  &lt;el-step title=&quot;Step 1&quot; icon=&quot;el-icon-edit&quot;&gt;&lt;/el-step&gt;
  &lt;el-step title=&quot;Step 2&quot; icon=&quot;el-icon-upload&quot;&gt;&lt;/el-step&gt;
  &lt;el-step title=&quot;Step 3&quot; icon=&quot;el-icon-picture&quot;&gt;&lt;/el-step&gt;
&lt;/el-steps&gt;
</code></pre></template></demo-block><h3 id="vertical-step-bar"><a class="header-anchor" href="#vertical-step-bar">¶</a> Vertical step bar</h3>
<p>Vertical step bars.</p>
<demo-block>
        <div><p>You only need to set the <code>direction</code> attribute to<code>vertical</code> in the <code>el-steps</code> element.</p>
</div>
        <template slot="source"><element-demo5 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;div style=&quot;height: 300px;&quot;&gt;
  &lt;el-steps direction=&quot;vertical&quot; :active=&quot;1&quot;&gt;
    &lt;el-step title=&quot;Step 1&quot;&gt;&lt;/el-step&gt;
    &lt;el-step title=&quot;Step 2&quot;&gt;&lt;/el-step&gt;
    &lt;el-step title=&quot;Step 3&quot;&gt;&lt;/el-step&gt;
  &lt;/el-steps&gt;
&lt;/div&gt;
</code></pre></template></demo-block><h3 id="simple-step-bar"><a class="header-anchor" href="#simple-step-bar">¶</a> Simple step bar</h3>
<p>Simple step bars, where <code>align-center</code>, <code>description</code>, <code>direction</code> and <code>space</code> will be ignored.</p>
<demo-block>
        
        <template slot="source"><element-demo6 /></template>
        <template slot="highlight"><pre v-pre><code class="html">
&lt;el-steps :space=&quot;200&quot; :active=&quot;1&quot; simple&gt;
  &lt;el-step title=&quot;Step 1&quot; icon=&quot;el-icon-edit&quot;&gt;&lt;/el-step&gt;
  &lt;el-step title=&quot;Step 2&quot; icon=&quot;el-icon-upload&quot;&gt;&lt;/el-step&gt;
  &lt;el-step title=&quot;Step 3&quot; icon=&quot;el-icon-picture&quot;&gt;&lt;/el-step&gt;
&lt;/el-steps&gt;

&lt;el-steps :active=&quot;1&quot; finish-status=&quot;success&quot; simple style=&quot;margin-top: 20px&quot;&gt;
  &lt;el-step title=&quot;Step 1&quot; &gt;&lt;/el-step&gt;
  &lt;el-step title=&quot;Step 2&quot; &gt;&lt;/el-step&gt;
  &lt;el-step title=&quot;Step 3&quot; &gt;&lt;/el-step&gt;
&lt;/el-steps&gt;
</code></pre></template></demo-block><h3 id="steps-attributes"><a class="header-anchor" href="#steps-attributes">¶</a> Steps Attributes</h3>
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
<td>space</td>
<td>the spacing of each step, will be responsive if omitted. Supports percentage.</td>
<td>number / string</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>direction</td>
<td>display direction</td>
<td>string</td>
<td>vertical/horizontal</td>
<td>horizontal</td>
</tr>
<tr>
<td>active</td>
<td>current activation step</td>
<td>number</td>
<td>—</td>
<td>0</td>
</tr>
<tr>
<td>process-status</td>
<td>status of current step</td>
<td>string</td>
<td>wait / process / finish / error / success</td>
<td>process</td>
</tr>
<tr>
<td>finish-status</td>
<td>status of end step</td>
<td>string</td>
<td>wait / process / finish / error / success</td>
<td>finish</td>
</tr>
<tr>
<td>align-center</td>
<td>center title and description</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>simple</td>
<td>whether to apply simple theme</td>
<td>boolean</td>
<td>-</td>
<td>false</td>
</tr>
</tbody>
</table>
<h3 id="step-attributes"><a class="header-anchor" href="#step-attributes">¶</a> Step Attributes</h3>
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
<td>title</td>
<td>step title</td>
<td>string</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>description</td>
<td>step description</td>
<td>string</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>icon</td>
<td>step icon</td>
<td>step icon's class name. Icons can be passed via named slot as well</td>
<td>string</td>
<td>—</td>
</tr>
<tr>
<td>status</td>
<td>current status. It will be automatically set by Steps if not configured.</td>
<td>wait / process / finish / error / success</td>
<td>-</td>
<td></td>
</tr>
</tbody>
</table>
<h3 id="step-slot"><a class="header-anchor" href="#step-slot">¶</a> Step Slot</h3>
<table>
<thead>
<tr>
<th>Name</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>icon</td>
<td>custom icon</td>
</tr>
<tr>
<td>title</td>
<td>step title</td>
</tr>
<tr>
<td>description</td>
<td>step description</td>
</tr>
</tbody>
</table>
