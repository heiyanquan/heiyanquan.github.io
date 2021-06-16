<h2 id="tooltip-wen-zi-ti-shi"><a class="header-anchor" href="#tooltip-wen-zi-ti-shi">¶</a> Tooltip 文字提示</h2>
<p>常用于展示鼠标 hover 时的提示信息。</p>
<h3 id="ji-chu-yong-fa"><a class="header-anchor" href="#ji-chu-yong-fa">¶</a> 基础用法</h3>
<p>在这里我们提供 9 种不同方向的展示方式，可以通过以下完整示例来理解，选择你要的效果。</p>
<demo-block>
        <div><p>使用<code>content</code>属性来决定<code>hover</code>时的提示信息。由<code>placement</code>属性决定展示效果：<code>placement</code>属性值为：<code>方向-对齐位置</code>；四个方向：<code>top</code>、<code>left</code>、<code>right</code>、<code>bottom</code>；三种对齐位置：<code>start</code>, <code>end</code>，默认为空。如<code>placement=&quot;left-end&quot;</code>，则提示信息出现在目标元素的左侧，且提示信息的底部与目标元素的底部对齐。</p>
</div>
        <!--element-demo: <div class="box">
  <div class="top">
    <el-tooltip class="item" effect="dark" content="Top Left 提示文字" placement="top-start">
      <el-button>上左</el-button>
    </el-tooltip>
    <el-tooltip class="item" effect="dark" content="Top Center 提示文字" placement="top">
      <el-button>上边</el-button>
    </el-tooltip>
    <el-tooltip class="item" effect="dark" content="Top Right 提示文字" placement="top-end">
      <el-button>上右</el-button>
    </el-tooltip>
  </div>
  <div class="left">
    <el-tooltip class="item" effect="dark" content="Left Top 提示文字" placement="left-start">
      <el-button>左上</el-button>
    </el-tooltip>
    <el-tooltip class="item" effect="dark" content="Left Center 提示文字" placement="left">
      <el-button>左边</el-button>
    </el-tooltip>
    <el-tooltip class="item" effect="dark" content="Left Bottom 提示文字" placement="left-end">
      <el-button>左下</el-button>
    </el-tooltip>
  </div>

  <div class="right">
    <el-tooltip class="item" effect="dark" content="Right Top 提示文字" placement="right-start">
      <el-button>右上</el-button>
    </el-tooltip>
    <el-tooltip class="item" effect="dark" content="Right Center 提示文字" placement="right">
      <el-button>右边</el-button>
    </el-tooltip>
    <el-tooltip class="item" effect="dark" content="Right Bottom 提示文字" placement="right-end">
      <el-button>右下</el-button>
    </el-tooltip>
  </div>
  <div class="bottom">
    <el-tooltip class="item" effect="dark" content="Bottom Left 提示文字" placement="bottom-start">
      <el-button>下左</el-button>
    </el-tooltip>
    <el-tooltip class="item" effect="dark" content="Bottom Center 提示文字" placement="bottom">
      <el-button>下边</el-button>
    </el-tooltip>
    <el-tooltip class="item" effect="dark" content="Bottom Right 提示文字" placement="bottom-end">
      <el-button>下右</el-button>
    </el-tooltip>
  </div>
</div>

<style>
  .box {
    width: 400px;

    .top {
      text-align: center;
    }

    .left {
      float: left;
      width: 60px;
    }

    .right {
      float: right;
      width: 60px;
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
  }
</style>
:element-demo-->
        <template slot="highlight"><pre v-pre><code class="html">&lt;div class=&quot;box&quot;&gt;
  &lt;div class=&quot;top&quot;&gt;
    &lt;el-tooltip class=&quot;item&quot; effect=&quot;dark&quot; content=&quot;Top Left 提示文字&quot; placement=&quot;top-start&quot;&gt;
      &lt;el-button&gt;上左&lt;/el-button&gt;
    &lt;/el-tooltip&gt;
    &lt;el-tooltip class=&quot;item&quot; effect=&quot;dark&quot; content=&quot;Top Center 提示文字&quot; placement=&quot;top&quot;&gt;
      &lt;el-button&gt;上边&lt;/el-button&gt;
    &lt;/el-tooltip&gt;
    &lt;el-tooltip class=&quot;item&quot; effect=&quot;dark&quot; content=&quot;Top Right 提示文字&quot; placement=&quot;top-end&quot;&gt;
      &lt;el-button&gt;上右&lt;/el-button&gt;
    &lt;/el-tooltip&gt;
  &lt;/div&gt;
  &lt;div class=&quot;left&quot;&gt;
    &lt;el-tooltip class=&quot;item&quot; effect=&quot;dark&quot; content=&quot;Left Top 提示文字&quot; placement=&quot;left-start&quot;&gt;
      &lt;el-button&gt;左上&lt;/el-button&gt;
    &lt;/el-tooltip&gt;
    &lt;el-tooltip class=&quot;item&quot; effect=&quot;dark&quot; content=&quot;Left Center 提示文字&quot; placement=&quot;left&quot;&gt;
      &lt;el-button&gt;左边&lt;/el-button&gt;
    &lt;/el-tooltip&gt;
    &lt;el-tooltip class=&quot;item&quot; effect=&quot;dark&quot; content=&quot;Left Bottom 提示文字&quot; placement=&quot;left-end&quot;&gt;
      &lt;el-button&gt;左下&lt;/el-button&gt;
    &lt;/el-tooltip&gt;
  &lt;/div&gt;

  &lt;div class=&quot;right&quot;&gt;
    &lt;el-tooltip class=&quot;item&quot; effect=&quot;dark&quot; content=&quot;Right Top 提示文字&quot; placement=&quot;right-start&quot;&gt;
      &lt;el-button&gt;右上&lt;/el-button&gt;
    &lt;/el-tooltip&gt;
    &lt;el-tooltip class=&quot;item&quot; effect=&quot;dark&quot; content=&quot;Right Center 提示文字&quot; placement=&quot;right&quot;&gt;
      &lt;el-button&gt;右边&lt;/el-button&gt;
    &lt;/el-tooltip&gt;
    &lt;el-tooltip class=&quot;item&quot; effect=&quot;dark&quot; content=&quot;Right Bottom 提示文字&quot; placement=&quot;right-end&quot;&gt;
      &lt;el-button&gt;右下&lt;/el-button&gt;
    &lt;/el-tooltip&gt;
  &lt;/div&gt;
  &lt;div class=&quot;bottom&quot;&gt;
    &lt;el-tooltip class=&quot;item&quot; effect=&quot;dark&quot; content=&quot;Bottom Left 提示文字&quot; placement=&quot;bottom-start&quot;&gt;
      &lt;el-button&gt;下左&lt;/el-button&gt;
    &lt;/el-tooltip&gt;
    &lt;el-tooltip class=&quot;item&quot; effect=&quot;dark&quot; content=&quot;Bottom Center 提示文字&quot; placement=&quot;bottom&quot;&gt;
      &lt;el-button&gt;下边&lt;/el-button&gt;
    &lt;/el-tooltip&gt;
    &lt;el-tooltip class=&quot;item&quot; effect=&quot;dark&quot; content=&quot;Bottom Right 提示文字&quot; placement=&quot;bottom-end&quot;&gt;
      &lt;el-button&gt;下右&lt;/el-button&gt;
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
      width: 60px;
    }

    .right {
      float: right;
      width: 60px;
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
  }
&lt;/style&gt;
</code></pre></template></demo-block><h3 id="zhu-ti"><a class="header-anchor" href="#zhu-ti">¶</a> 主题</h3>
<p>Tooltip 组件提供了两个不同的主题：<code>dark</code>和<code>light</code>。</p>
<demo-block>
        <div><p>通过设置<code>effect</code>属性来改变主题，默认为<code>dark</code>。</p>
</div>
        <!--element-demo: <el-tooltip content="Top center" placement="top">
  <el-button>Dark</el-button>
</el-tooltip>
<el-tooltip content="Bottom center" placement="bottom" effect="light">
  <el-button>Light</el-button>
</el-tooltip>
:element-demo-->
        <template slot="highlight"><pre v-pre><code class="html">&lt;el-tooltip content=&quot;Top center&quot; placement=&quot;top&quot;&gt;
  &lt;el-button&gt;Dark&lt;/el-button&gt;
&lt;/el-tooltip&gt;
&lt;el-tooltip content=&quot;Bottom center&quot; placement=&quot;bottom&quot; effect=&quot;light&quot;&gt;
  &lt;el-button&gt;Light&lt;/el-button&gt;
&lt;/el-tooltip&gt;
</code></pre></template></demo-block><h3 id="geng-duo-content"><a class="header-anchor" href="#geng-duo-content">¶</a> 更多 Content</h3>
<p>展示多行文本或者是设置文本内容的格式</p>
<demo-block>
        <div><p>用具名 slot 分发<code>content</code>，替代<code>tooltip</code>中的<code>content</code>属性。</p>
</div>
        <!--element-demo: <el-tooltip placement="top">
  <div slot="content">多行信息<br/>第二行信息</div>
  <el-button>Top center</el-button>
</el-tooltip>
:element-demo-->
        <template slot="highlight"><pre v-pre><code class="html">&lt;el-tooltip placement=&quot;top&quot;&gt;
  &lt;div slot=&quot;content&quot;&gt;多行信息&lt;br/&gt;第二行信息&lt;/div&gt;
  &lt;el-button&gt;Top center&lt;/el-button&gt;
&lt;/el-tooltip&gt;
</code></pre></template></demo-block><h3 id="gao-ji-kuo-zhan"><a class="header-anchor" href="#gao-ji-kuo-zhan">¶</a> 高级扩展</h3>
<p>除了这些基本设置外，还有一些属性可以让使用者更好的定制自己的效果：</p>
<p><code>transition</code> 属性可以定制显隐的动画效果，默认为<code>fade-in-linear</code>。
如果需要关闭 <code>tooltip</code> 功能，<code>disabled</code> 属性可以满足这个需求，它接受一个<code>Boolean</code>，设置为<code>true</code>即可。</p>
<p>事实上，这是基于 <a href="https://github.com/element-component/vue-popper">Vue-popper</a> 的扩展，你可以自定义任意 Vue-popper 中允许定义的字段。
当然 Tooltip 组件实际上十分强大，文末的API文档会做一一说明。</p>
<demo-block>
        
        <!--element-demo: <template>
  <el-tooltip :disabled="disabled" content="点击关闭 tooltip 功能" placement="bottom" effect="light">
    <el-button @click="disabled = !disabled">点击{{disabled ? '开启' : '关闭'}} tooltip 功能</el-button>
  </el-tooltip>
</template>
<script>
  export default {
    data() {
      return {
        disabled: false
      };
    }
  };
</script>
:element-demo-->
        <template slot="highlight"><pre v-pre><code class="html">&lt;template&gt;
  &lt;el-tooltip :disabled=&quot;disabled&quot; content=&quot;点击关闭 tooltip 功能&quot; placement=&quot;bottom&quot; effect=&quot;light&quot;&gt;
    &lt;el-button @click=&quot;disabled = !disabled&quot;&gt;点击{{disabled ? '开启' : '关闭'}} tooltip 功能&lt;/el-button&gt;
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
</code></pre></template></demo-block><div class="tip">
<p>tooltip 内不支持 <code>router-link</code> 组件，请使用 <code>vm.$router.push</code> 代替。</p>
<p>tooltip 内不支持 disabled form 元素，参考<a href="https://developer.mozilla.org/en-US/docs/Web/Events/mouseenter">MDN</a>，请在 disabled form 元素外层添加一层包裹元素。</p>
</div>
<h3 id="attributes"><a class="header-anchor" href="#attributes">¶</a> Attributes</h3>
<table>
<thead>
<tr>
<th>参数</th>
<th>说明</th>
<th>类型</th>
<th>可选值</th>
<th>默认值</th>
</tr>
</thead>
<tbody>
<tr>
<td>effect</td>
<td>默认提供的主题</td>
<td>String</td>
<td>dark/light</td>
<td>dark</td>
</tr>
<tr>
<td>content</td>
<td>显示的内容，也可以通过 <code>slot#content</code> 传入 DOM</td>
<td>String</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>placement</td>
<td>Tooltip 的出现位置</td>
<td>String</td>
<td>top/top-start/top-end/bottom/bottom-start/bottom-end/left/left-start/left-end/right/right-start/right-end</td>
<td>bottom</td>
</tr>
<tr>
<td>value / v-model</td>
<td>状态是否可见</td>
<td>Boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>disabled</td>
<td>Tooltip 是否可用</td>
<td>Boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>offset</td>
<td>出现位置的偏移量</td>
<td>Number</td>
<td>—</td>
<td>0</td>
</tr>
<tr>
<td>transition</td>
<td>定义渐变动画</td>
<td>String</td>
<td>—</td>
<td>el-fade-in-linear</td>
</tr>
<tr>
<td>visible-arrow</td>
<td>是否显示 Tooltip 箭头，更多参数可见<a href="https://github.com/element-component/vue-popper">Vue-popper</a></td>
<td>Boolean</td>
<td>—</td>
<td>true</td>
</tr>
<tr>
<td>popper-options</td>
<td><a href="https://popper.js.org/documentation.html">popper.js</a> 的参数</td>
<td>Object</td>
<td>参考 <a href="https://popper.js.org/documentation.html">popper.js</a> 文档</td>
<td>{ boundariesElement: 'body', gpuAcceleration: false }</td>
</tr>
<tr>
<td>open-delay</td>
<td>延迟出现，单位毫秒</td>
<td>Number</td>
<td>—</td>
<td>0</td>
</tr>
<tr>
<td>manual</td>
<td>手动控制模式，设置为 true 后，mouseenter 和 mouseleave 事件将不会生效</td>
<td>Boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>popper-class</td>
<td>为 Tooltip 的 popper 添加类名</td>
<td>String</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>enterable</td>
<td>鼠标是否可进入到 tooltip 中</td>
<td>Boolean</td>
<td>—</td>
<td>true</td>
</tr>
<tr>
<td>hide-after</td>
<td>Tooltip 出现后自动隐藏延时，单位毫秒，为 0 则不会自动隐藏</td>
<td>number</td>
<td>—</td>
<td>0</td>
</tr>
<tr>
<td>tabindex</td>
<td>Tooltip 组件的 <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/tabindex">tabindex</a></td>
<td>number</td>
<td>—</td>
<td>0</td>
</tr>
</tbody>
</table>
