<h2 id="alert"><a class="header-anchor" href="#alert">¶</a> Alert</h2>
<p>Displays important alert messages.</p>
<h3 id="basic-usage"><a class="header-anchor" href="#basic-usage">¶</a> Basic usage</h3>
<p>Alert components are non-overlay elements in the page that does not disappear automatically.</p>
<demo-block>
        <div><p>Alert provides 4 types of themes defined by <code>type</code>, whose default value is <code>info</code>.</p>
</div>
        <template slot="source"><element-demo0 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;template&gt;
  &lt;el-alert
    title=&quot;success alert&quot;
    type=&quot;success&quot;&gt;
  &lt;/el-alert&gt;
  &lt;el-alert
    title=&quot;info alert&quot;
    type=&quot;info&quot;&gt;
  &lt;/el-alert&gt;
  &lt;el-alert
    title=&quot;warning alert&quot;
    type=&quot;warning&quot;&gt;
  &lt;/el-alert&gt;
  &lt;el-alert
    title=&quot;error alert&quot;
    type=&quot;error&quot;&gt;
  &lt;/el-alert&gt;
&lt;/template&gt;
</code></pre></template></demo-block><h3 id="theme"><a class="header-anchor" href="#theme">¶</a> Theme</h3>
<p>Alert provide two different themes, <code>light</code> and <code>dark</code>.</p>
<demo-block>
        <div><p>Set <code>effect</code> to change theme, default is <code>light</code>.</p>
</div>
        <template slot="source"><element-demo1 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;template&gt;
  &lt;el-alert
    title=&quot;success alert&quot;
    type=&quot;success&quot;
    effect=&quot;dark&quot;&gt;
  &lt;/el-alert&gt;
  &lt;el-alert
    title=&quot;info alert&quot;
    type=&quot;info&quot;
    effect=&quot;dark&quot;&gt;
  &lt;/el-alert&gt;
  &lt;el-alert
    title=&quot;warning alert&quot;
    type=&quot;warning&quot;
    effect=&quot;dark&quot;&gt;
  &lt;/el-alert&gt;
  &lt;el-alert
    title=&quot;error alert&quot;
    type=&quot;error&quot;
    effect=&quot;dark&quot;&gt;
  &lt;/el-alert&gt;
&lt;/template&gt;
</code></pre></template></demo-block><h3 id="customizable-close-button"><a class="header-anchor" href="#customizable-close-button">¶</a> Customizable close button</h3>
<p>Customize the close button as texts or other symbols.</p>
<demo-block>
        <div><p>Alert allows you to configure if it's closable. The close button text and closing callbacks are also customizable. <code>closable</code> attribute decides if the component can be closed or not. It accepts <code>boolean</code>, and the default is <code>true</code>. You can set <code>close-text</code> attribute to replace the default cross symbol as the close button. Be careful that <code>close-text</code> must be a string. <code>close</code> event fires when the component is closed.</p>
</div>
        <template slot="source"><element-demo2 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;template&gt;
  &lt;el-alert
    title=&quot;unclosable alert&quot;
    type=&quot;success&quot;
    :closable=&quot;false&quot;&gt;
  &lt;/el-alert&gt;
  &lt;el-alert
    title=&quot;customized close-text&quot;
    type=&quot;info&quot;
    close-text=&quot;Gotcha&quot;&gt;
  &lt;/el-alert&gt;
  &lt;el-alert
    title=&quot;alert with callback&quot;
    type=&quot;warning&quot;
    @close=&quot;hello&quot;&gt;
  &lt;/el-alert&gt;
&lt;/template&gt;

&lt;script&gt;
  export default {
    methods: {
      hello() {
        alert('Hello World!');
      }
    }
  }
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="with-icon"><a class="header-anchor" href="#with-icon">¶</a> With icon</h3>
<p>Displaying an icon improves readability.</p>
<demo-block>
        <div><p>Setting the <code>show-icon</code> attribute displays an icon that corresponds with the current Alert type.</p>
</div>
        <template slot="source"><element-demo3 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;template&gt;
  &lt;el-alert
    title=&quot;success alert&quot;
    type=&quot;success&quot;
    show-icon&gt;
  &lt;/el-alert&gt;
  &lt;el-alert
    title=&quot;info alert&quot;
    type=&quot;info&quot;
    show-icon&gt;
  &lt;/el-alert&gt;
  &lt;el-alert
    title=&quot;warning alert&quot;
    type=&quot;warning&quot;
    show-icon&gt;
  &lt;/el-alert&gt;
  &lt;el-alert
    title=&quot;error alert&quot;
    type=&quot;error&quot;
    show-icon&gt;
  &lt;/el-alert&gt;
&lt;/template&gt;
</code></pre></template></demo-block><h2 id="centered-text"><a class="header-anchor" href="#centered-text">¶</a> Centered text</h2>
<p>Use the <code>center</code> attribute to center the text.</p>
<demo-block>
        
        <template slot="source"><element-demo4 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;template&gt;
  &lt;el-alert
    title=&quot;success alert&quot;
    type=&quot;success&quot;
    center
    show-icon&gt;
  &lt;/el-alert&gt;
  &lt;el-alert
    title=&quot;info alert&quot;
    type=&quot;info&quot;
    center
    show-icon&gt;
  &lt;/el-alert&gt;
  &lt;el-alert
    title=&quot;warning alert&quot;
    type=&quot;warning&quot;
    center
    show-icon&gt;
  &lt;/el-alert&gt;
  &lt;el-alert
    title=&quot;error alert&quot;
    type=&quot;error&quot;
    center
    show-icon&gt;
  &lt;/el-alert&gt;
&lt;/template&gt;
</code></pre></template></demo-block><h3 id="with-description"><a class="header-anchor" href="#with-description">¶</a> With description</h3>
<p>Description includes a message with more detailed information.</p>
<demo-block>
        <div><p>Besides the required <code>title</code> attribute, you can add a <code>description</code> attribute to help you describe the alert with more details. Description can only store text string, and it will word wrap automatically.</p>
</div>
        <template slot="source"><element-demo5 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;template&gt;
  &lt;el-alert
    title=&quot;with description&quot;
    type=&quot;success&quot;
    description=&quot;This is a description.&quot;&gt;
  &lt;/el-alert&gt;
&lt;/template&gt;
</code></pre></template></demo-block><h3 id="with-icon-and-description"><a class="header-anchor" href="#with-icon-and-description">¶</a> With icon and description</h3>
<demo-block>
        <div><p>At last, this is an example with both icon and description.</p>
</div>
        <template slot="source"><element-demo6 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;template&gt;
  &lt;el-alert
    title=&quot;success alert&quot;
    type=&quot;success&quot;
    description=&quot;more text description&quot;
    show-icon&gt;
  &lt;/el-alert&gt;
  &lt;el-alert
    title=&quot;info alert&quot;
    type=&quot;info&quot;
    description=&quot;more text description&quot;
    show-icon&gt;
  &lt;/el-alert&gt;
  &lt;el-alert
    title=&quot;warning alert&quot;
    type=&quot;warning&quot;
    description=&quot;more text description&quot;
    show-icon&gt;
  &lt;/el-alert&gt;
  &lt;el-alert
    title=&quot;error alert&quot;
    type=&quot;error&quot;
    description=&quot;more text description&quot;
    show-icon&gt;
  &lt;/el-alert&gt;
&lt;/template&gt;
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
<td>title</td>
<td>title</td>
<td>string</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>type</td>
<td>Component type</td>
<td>string</td>
<td>success/warning/info/error</td>
<td>info</td>
</tr>
<tr>
<td>description</td>
<td>Descriptive text. Can also be passed with the default slot</td>
<td>string</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>closable</td>
<td>If closable or not</td>
<td>boolean</td>
<td>—</td>
<td>true</td>
</tr>
<tr>
<td>center</td>
<td>Whether to center the text</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>close-text</td>
<td>Customized close button text</td>
<td>string</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>show-icon</td>
<td>If a type icon is displayed</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>effect</td>
<td>Choose theme</td>
<td>string</td>
<td>light/dark</td>
<td>light</td>
</tr>
</tbody>
</table>
<h3 id="slot"><a class="header-anchor" href="#slot">¶</a> Slot</h3>
<table>
<thead>
<tr>
<th>Name</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>—</td>
<td>description</td>
</tr>
<tr>
<td>title</td>
<td>content of the Alert title</td>
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
<td>close</td>
<td>fires when alert is closed</td>
<td>—</td>
</tr>
</tbody>
</table>
