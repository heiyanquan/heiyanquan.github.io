<h2 id="tooltip"><a class="header-anchor" href="#tooltip">¶</a> Tooltip</h2>
<p>Display prompt information for mouse hover.</p>
<h3 id="basic-usage"><a class="header-anchor" href="#basic-usage">¶</a> Basic usage</h3>
<p>Tooltip has 9 placements.</p>
<demo-block>
        <div><p>Use attribute <code>content</code> to set the display content when hover. The attribute <code>placement</code> determines the position of the tooltip. Its value is <code>[orientation]-[alignment]</code> with four orientations <code>top</code>, <code>left</code>, <code>right</code>, <code>bottom</code> and three alignments <code>start</code>, <code>end</code>, <code>null</code>, and the default alignment is null. Take <code>placement=&quot;left-end&quot;</code> for example, Tooltip will display on the left of the element which you are hovering and the bottom of the tooltip aligns with the bottom of the element.</p>
</div>
        <template slot="source"><element-demo0 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;div class=&quot;box&quot;&gt;
  &lt;div class=&quot;top&quot;&gt;
    &lt;el-tooltip class=&quot;item&quot; effect=&quot;dark&quot; content=&quot;Top Left prompts info&quot; placement=&quot;top-start&quot;&gt;
      &lt;el-button&gt;top-start&lt;/el-button&gt;
    &lt;/el-tooltip&gt;
    &lt;el-tooltip class=&quot;item&quot; effect=&quot;dark&quot; content=&quot;Top Center prompts info&quot; placement=&quot;top&quot;&gt;
      &lt;el-button&gt;top&lt;/el-button&gt;
    &lt;/el-tooltip&gt;
    &lt;el-tooltip class=&quot;item&quot; effect=&quot;dark&quot; content=&quot;Top Right prompts info&quot; placement=&quot;top-end&quot;&gt;
      &lt;el-button&gt;top-end&lt;/el-button&gt;
    &lt;/el-tooltip&gt;
  &lt;/div&gt;
  &lt;div class=&quot;left&quot;&gt;
    &lt;el-tooltip class=&quot;item&quot; effect=&quot;dark&quot; content=&quot;Left Top prompts info&quot; placement=&quot;left-start&quot;&gt;
      &lt;el-button&gt;left-start&lt;/el-button&gt;
    &lt;/el-tooltip&gt;
    &lt;el-tooltip class=&quot;item&quot; effect=&quot;dark&quot; content=&quot;Left Center prompts info&quot; placement=&quot;left&quot;&gt;
      &lt;el-button&gt;left&lt;/el-button&gt;
    &lt;/el-tooltip&gt;
    &lt;el-tooltip class=&quot;item&quot; effect=&quot;dark&quot; content=&quot;Left Bottom prompts info&quot; placement=&quot;left-end&quot;&gt;
      &lt;el-button&gt;left-end&lt;/el-button&gt;
    &lt;/el-tooltip&gt;
  &lt;/div&gt;

  &lt;div class=&quot;right&quot;&gt;
    &lt;el-tooltip class=&quot;item&quot; effect=&quot;dark&quot; content=&quot;Right Top prompts info&quot; placement=&quot;right-start&quot;&gt;
      &lt;el-button&gt;right-start&lt;/el-button&gt;
    &lt;/el-tooltip&gt;
    &lt;el-tooltip class=&quot;item&quot; effect=&quot;dark&quot; content=&quot;Right Center prompts info&quot; placement=&quot;right&quot;&gt;
      &lt;el-button&gt;right&lt;/el-button&gt;
    &lt;/el-tooltip&gt;
    &lt;el-tooltip class=&quot;item&quot; effect=&quot;dark&quot; content=&quot;Right Bottom prompts info&quot; placement=&quot;right-end&quot;&gt;
      &lt;el-button&gt;right-end&lt;/el-button&gt;
    &lt;/el-tooltip&gt;
  &lt;/div&gt;
  &lt;div class=&quot;bottom&quot;&gt;
    &lt;el-tooltip class=&quot;item&quot; effect=&quot;dark&quot; content=&quot;Bottom Left prompts info&quot; placement=&quot;bottom-start&quot;&gt;
      &lt;el-button&gt;bottom-start&lt;/el-button&gt;
    &lt;/el-tooltip&gt;
    &lt;el-tooltip class=&quot;item&quot; effect=&quot;dark&quot; content=&quot;Bottom Center prompts info&quot; placement=&quot;bottom&quot;&gt;
      &lt;el-button&gt;bottom&lt;/el-button&gt;
    &lt;/el-tooltip&gt;
    &lt;el-tooltip class=&quot;item&quot; effect=&quot;dark&quot; content=&quot;Bottom Right prompts info&quot; placement=&quot;bottom-end&quot;&gt;
      &lt;el-button&gt;bottom-end&lt;/el-button&gt;
    &lt;/el-tooltip&gt;
  &lt;/div&gt;
&lt;/div&gt;

&lt;style&gt;
  .box {
    width: 400px;

    .top {
      text-align: center;
    }

    .left {
      float: left;
      width: 110px;
    }

    .right {
      float: right;
      width: 110px;
    }

    .bottom {
      clear: both;
      text-align: center;
    }

    .item {
      margin: 4px;
    }

    .left .el-tooltip__popper,
    .right .el-tooltip__popper {
      padding: 8px 10px;
    }

    .el-button {
      width: 110px;
    }
  }
&lt;/style&gt;
</code></pre></template></demo-block><h3 id="theme"><a class="header-anchor" href="#theme">¶</a> Theme</h3>
<p>Tooltip has two themes: <code>dark</code> and <code>light</code>。</p>
<demo-block>
        <div><p>Set <code>effect</code> to modify theme, and the default value is <code>dark</code>.</p>
</div>
        <template slot="source"><element-demo1 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;el-tooltip content=&quot;Top center&quot; placement=&quot;top&quot;&gt;
  &lt;el-button&gt;Dark&lt;/el-button&gt;
&lt;/el-tooltip&gt;
&lt;el-tooltip content=&quot;Bottom center&quot; placement=&quot;bottom&quot; effect=&quot;light&quot;&gt;
  &lt;el-button&gt;Light&lt;/el-button&gt;
&lt;/el-tooltip&gt;
</code></pre></template></demo-block><h3 id="more-content"><a class="header-anchor" href="#more-content">¶</a> More Content</h3>
<p>Display multiple lines of text and set their format.</p>
<demo-block>
        <div><p>Override attribute <code>content</code> of <code>el-tooltip</code> by adding a slot named <code>content</code>.</p>
</div>
        <template slot="source"><element-demo2 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;el-tooltip placement=&quot;top&quot;&gt;
  &lt;div slot=&quot;content&quot;&gt;multiple lines&lt;br/&gt;second line&lt;/div&gt;
  &lt;el-button&gt;Top center&lt;/el-button&gt;
&lt;/el-tooltip&gt;
</code></pre></template></demo-block><h3 id="advanced-usage"><a class="header-anchor" href="#advanced-usage">¶</a> Advanced usage</h3>
<p>In addition to basic usages, there are some attributes that allow you to customize your own:</p>
<p><code>transition</code> attribute allows you to customize the animation in which the tooltip shows or hides, and the default value is el-fade-in-linear.</p>
<p><code>disabled</code> attribute allows you to disable <code>tooltip</code>. You just need set it to <code>true</code>.</p>
<p>In fact, Tooltip is an extension based on <a href="https://github.com/element-component/vue-popper">Vue-popper</a>, you can use any attribute that are allowed in Vue-popper.</p>
<demo-block>
        
        <template slot="source"><element-demo3 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;template&gt;
  &lt;el-tooltip :disabled=&quot;disabled&quot; content=&quot;click to close tooltip function&quot; placement=&quot;bottom&quot; effect=&quot;light&quot;&gt;
    &lt;el-button @click=&quot;disabled = !disabled&quot;&gt;click to {{disabled ? 'active' : 'close'}} tooltip function&lt;/el-button&gt;
  &lt;/el-tooltip&gt;
&lt;/template&gt;

&lt;script&gt;
  export default {
    data() {
      return {
        disabled: false
      };
    }
  };
&lt;/script&gt;

&lt;style&gt;
  .slide-fade-enter-active {
    transition: all .3s ease;
  }
  .slide-fade-leave-active {
    transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }
  .slide-fade-enter, .expand-fade-leave-active {
    margin-left: 20px;
    opacity: 0;
  }
&lt;/style&gt;
</code></pre></template></demo-block><div class="tip">
<p>The <code>router-link</code> component is not supported in tooltip, please use <code>vm.$router.push</code>.</p>
<p>Disabled form elements are not supported for Tooltip, more information can be found at <a href="https://developer.mozilla.org/en-US/docs/Web/Events/mouseenter">MDN</a>. You need to wrap the disabled form element with a container element for Tooltip to work.</p>
</div>
<h3 id="attributes"><a class="header-anchor" href="#attributes">¶</a> Attributes</h3>
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
<td>effect</td>
<td>Tooltip theme</td>
<td>string</td>
<td>dark/light</td>
<td>dark</td>
</tr>
<tr>
<td>content</td>
<td>display content, can be overridden by <code>slot#content</code></td>
<td>String</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>placement</td>
<td>position of Tooltip</td>
<td>string</td>
<td>top/top-start/top-end/bottom/bottom-start/bottom-end/left/left-start/left-end/right/right-start/right-end</td>
<td>bottom</td>
</tr>
<tr>
<td>value / v-model</td>
<td>visibility of Tooltip</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>disabled</td>
<td>whether Tooltip is disabled</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>offset</td>
<td>offset of the Tooltip</td>
<td>number</td>
<td>—</td>
<td>0</td>
</tr>
<tr>
<td>transition</td>
<td>animation name</td>
<td>string</td>
<td>—</td>
<td>el-fade-in-linear</td>
</tr>
<tr>
<td>visible-arrow</td>
<td>whether an arrow is displayed. For more information, check <a href="https://github.com/element-component/vue-popper">Vue-popper</a> page</td>
<td>boolean</td>
<td>—</td>
<td>true</td>
</tr>
<tr>
<td>popper-options</td>
<td><a href="https://popper.js.org/documentation.html">popper.js</a> parameters</td>
<td>Object</td>
<td>refer to <a href="https://popper.js.org/documentation.html">popper.js</a> doc</td>
<td><code>{ boundariesElement: 'body', gpuAcceleration: false }</code></td>
</tr>
<tr>
<td>open-delay</td>
<td>delay of appearance, in millisecond</td>
<td>number</td>
<td>—</td>
<td>0</td>
</tr>
<tr>
<td>manual</td>
<td>whether to control Tooltip manually. <code>mouseenter</code> and <code>mouseleave</code> won't have effects if set to <code>true</code></td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>popper-class</td>
<td>custom class name for Tooltip's popper</td>
<td>string</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>enterable</td>
<td>whether the mouse can enter the tooltip</td>
<td>Boolean</td>
<td>—</td>
<td>true</td>
</tr>
<tr>
<td>hide-after</td>
<td>timeout in milliseconds to hide tooltip</td>
<td>number</td>
<td>—</td>
<td>0</td>
</tr>
<tr>
<td>tabindex</td>
<td><a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/tabindex">tabindex</a> of Tooltip</td>
<td>number</td>
<td>—</td>
<td>0</td>
</tr>
</tbody>
</table>
