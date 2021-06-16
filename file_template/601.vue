<h2 id="dropdown-xia-la-cai-dan"><a class="header-anchor" href="#dropdown-xia-la-cai-dan">¶</a> Dropdown 下拉菜单</h2>
<p>将动作或菜单折叠到下拉菜单中。</p>
<h3 id="ji-chu-yong-fa"><a class="header-anchor" href="#ji-chu-yong-fa">¶</a> 基础用法</h3>
<p>移动到下拉菜单上，展开更多操作。</p>
<demo-block>
        <div><p>通过组件<code>slot</code>来设置下拉触发的元素以及需要通过具名<code>slot</code>为<code>dropdown</code> 来设置下拉菜单。默认情况下，下拉按钮只要<code>hover</code>即可，无需点击也会显示下拉菜单。</p>
</div>
        <template slot="source"><element-demo0 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;el-dropdown&gt;
  &lt;span class=&quot;el-dropdown-link&quot;&gt;
    下拉菜单&lt;i class=&quot;el-icon-arrow-down el-icon--right&quot;&gt;&lt;/i&gt;
  &lt;/span&gt;
  &lt;el-dropdown-menu slot=&quot;dropdown&quot;&gt;
    &lt;el-dropdown-item&gt;黄金糕&lt;/el-dropdown-item&gt;
    &lt;el-dropdown-item&gt;狮子头&lt;/el-dropdown-item&gt;
    &lt;el-dropdown-item&gt;螺蛳粉&lt;/el-dropdown-item&gt;
    &lt;el-dropdown-item disabled&gt;双皮奶&lt;/el-dropdown-item&gt;
    &lt;el-dropdown-item divided&gt;蚵仔煎&lt;/el-dropdown-item&gt;
  &lt;/el-dropdown-menu&gt;
&lt;/el-dropdown&gt;

&lt;style&gt;
  .el-dropdown-link {
    cursor: pointer;
    color: #409EFF;
  }
  .el-icon-arrow-down {
    font-size: 12px;
  }
&lt;/style&gt;
</code></pre></template></demo-block><h3 id="hong-fa-dui-xiang"><a class="header-anchor" href="#hong-fa-dui-xiang">¶</a> 触发对象</h3>
<p>可使用按钮触发下拉菜单。</p>
<demo-block>
        <div><p>设置<code>split-button</code>属性来让触发下拉元素呈现为按钮组，左边是功能按钮，右边是触发下拉菜单的按钮，设置为<code>true</code>即可。</p>
</div>
        <template slot="source"><element-demo1 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;el-dropdown&gt;
  &lt;el-button type=&quot;primary&quot;&gt;
    更多菜单&lt;i class=&quot;el-icon-arrow-down el-icon--right&quot;&gt;&lt;/i&gt;
  &lt;/el-button&gt;
  &lt;el-dropdown-menu slot=&quot;dropdown&quot;&gt;
    &lt;el-dropdown-item&gt;黄金糕&lt;/el-dropdown-item&gt;
    &lt;el-dropdown-item&gt;狮子头&lt;/el-dropdown-item&gt;
    &lt;el-dropdown-item&gt;螺蛳粉&lt;/el-dropdown-item&gt;
    &lt;el-dropdown-item&gt;双皮奶&lt;/el-dropdown-item&gt;
    &lt;el-dropdown-item&gt;蚵仔煎&lt;/el-dropdown-item&gt;
  &lt;/el-dropdown-menu&gt;
&lt;/el-dropdown&gt;
&lt;el-dropdown split-button type=&quot;primary&quot; @click=&quot;handleClick&quot;&gt;
  更多菜单
  &lt;el-dropdown-menu slot=&quot;dropdown&quot;&gt;
    &lt;el-dropdown-item&gt;黄金糕&lt;/el-dropdown-item&gt;
    &lt;el-dropdown-item&gt;狮子头&lt;/el-dropdown-item&gt;
    &lt;el-dropdown-item&gt;螺蛳粉&lt;/el-dropdown-item&gt;
    &lt;el-dropdown-item&gt;双皮奶&lt;/el-dropdown-item&gt;
    &lt;el-dropdown-item&gt;蚵仔煎&lt;/el-dropdown-item&gt;
  &lt;/el-dropdown-menu&gt;
&lt;/el-dropdown&gt;

&lt;style&gt;
  .el-dropdown {
    vertical-align: top;
  }
  .el-dropdown + .el-dropdown {
    margin-left: 15px;
  }
  .el-icon-arrow-down {
    font-size: 12px;
  }
&lt;/style&gt;

&lt;script&gt;
  export default {
    methods: {
      handleClick() {
        alert('button click');
      }
    }
  }
&lt;/script&gt;

</code></pre></template></demo-block><h3 id="hong-fa-fang-shi"><a class="header-anchor" href="#hong-fa-fang-shi">¶</a> 触发方式</h3>
<p>可以配置 click 激活或者 hover 激活。</p>
<demo-block>
        <div><p>在<code>trigger</code>属性设置为<code>click</code>即可。</p>
</div>
        <template slot="source"><element-demo2 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;el-row class=&quot;block-col-2&quot;&gt;
  &lt;el-col :span=&quot;12&quot;&gt;
    &lt;span class=&quot;demonstration&quot;&gt;hover 激活&lt;/span&gt;
    &lt;el-dropdown&gt;
      &lt;span class=&quot;el-dropdown-link&quot;&gt;
        下拉菜单&lt;i class=&quot;el-icon-arrow-down el-icon--right&quot;&gt;&lt;/i&gt;
      &lt;/span&gt;
      &lt;el-dropdown-menu slot=&quot;dropdown&quot;&gt;
        &lt;el-dropdown-item icon=&quot;el-icon-plus&quot;&gt;黄金糕&lt;/el-dropdown-item&gt;
        &lt;el-dropdown-item icon=&quot;el-icon-circle-plus&quot;&gt;狮子头&lt;/el-dropdown-item&gt;
        &lt;el-dropdown-item icon=&quot;el-icon-circle-plus-outline&quot;&gt;螺蛳粉&lt;/el-dropdown-item&gt;
        &lt;el-dropdown-item icon=&quot;el-icon-check&quot;&gt;双皮奶&lt;/el-dropdown-item&gt;
        &lt;el-dropdown-item icon=&quot;el-icon-circle-check&quot;&gt;蚵仔煎&lt;/el-dropdown-item&gt;
      &lt;/el-dropdown-menu&gt;
    &lt;/el-dropdown&gt;
  &lt;/el-col&gt;
  &lt;el-col :span=&quot;12&quot;&gt;
    &lt;span class=&quot;demonstration&quot;&gt;click 激活&lt;/span&gt;
    &lt;el-dropdown trigger=&quot;click&quot;&gt;
      &lt;span class=&quot;el-dropdown-link&quot;&gt;
        下拉菜单&lt;i class=&quot;el-icon-arrow-down el-icon--right&quot;&gt;&lt;/i&gt;
      &lt;/span&gt;
      &lt;el-dropdown-menu slot=&quot;dropdown&quot;&gt;
        &lt;el-dropdown-item icon=&quot;el-icon-plus&quot;&gt;黄金糕&lt;/el-dropdown-item&gt;
        &lt;el-dropdown-item icon=&quot;el-icon-circle-plus&quot;&gt;狮子头&lt;/el-dropdown-item&gt;
        &lt;el-dropdown-item icon=&quot;el-icon-circle-plus-outline&quot;&gt;螺蛳粉&lt;/el-dropdown-item&gt;
        &lt;el-dropdown-item icon=&quot;el-icon-check&quot;&gt;双皮奶&lt;/el-dropdown-item&gt;
        &lt;el-dropdown-item icon=&quot;el-icon-circle-check&quot;&gt;蚵仔煎&lt;/el-dropdown-item&gt;
      &lt;/el-dropdown-menu&gt;
    &lt;/el-dropdown&gt;
  &lt;/el-col&gt;
&lt;/el-row&gt;

&lt;style&gt;
  .el-dropdown-link {
    cursor: pointer;
    color: #409EFF;
  }
  .el-icon-arrow-down {
    font-size: 12px;
  }
  .demonstration {
    display: block;
    color: #8492a6;
    font-size: 14px;
    margin-bottom: 20px;
  }
&lt;/style&gt;
</code></pre></template></demo-block><h3 id="cai-dan-yin-cang-fang-shi"><a class="header-anchor" href="#cai-dan-yin-cang-fang-shi">¶</a> 菜单隐藏方式</h3>
<p>可以<code>hide-on-click</code>属性来配置。</p>
<demo-block>
        <div><p>下拉菜单默认在点击菜单项后会被隐藏，将<code>hide-on-click</code>属性默认为<code>false</code>可以关闭此功能。</p>
</div>
        <template slot="source"><element-demo3 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;el-dropdown :hide-on-click=&quot;false&quot;&gt;
  &lt;span class=&quot;el-dropdown-link&quot;&gt;
    下拉菜单&lt;i class=&quot;el-icon-arrow-down el-icon--right&quot;&gt;&lt;/i&gt;
  &lt;/span&gt;
  &lt;el-dropdown-menu slot=&quot;dropdown&quot;&gt;
    &lt;el-dropdown-item&gt;黄金糕&lt;/el-dropdown-item&gt;
    &lt;el-dropdown-item&gt;狮子头&lt;/el-dropdown-item&gt;
    &lt;el-dropdown-item&gt;螺蛳粉&lt;/el-dropdown-item&gt;
    &lt;el-dropdown-item disabled&gt;双皮奶&lt;/el-dropdown-item&gt;
    &lt;el-dropdown-item divided&gt;蚵仔煎&lt;/el-dropdown-item&gt;
  &lt;/el-dropdown-menu&gt;
&lt;/el-dropdown&gt;

&lt;style&gt;
  .el-dropdown-link {
    cursor: pointer;
    color: #409EFF;
  }
  .el-icon-arrow-down {
    font-size: 12px;
  }
&lt;/style&gt;
</code></pre></template></demo-block><h3 id="zhi-ling-shi-jian"><a class="header-anchor" href="#zhi-ling-shi-jian">¶</a> 指令事件</h3>
<p>点击菜单项后会触发事件，用户可以通过相应的菜单项 key 进行不同的操作</p>
<demo-block>
        
        <template slot="source"><element-demo4 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;el-dropdown @command=&quot;handleCommand&quot;&gt;
  &lt;span class=&quot;el-dropdown-link&quot;&gt;
    下拉菜单&lt;i class=&quot;el-icon-arrow-down el-icon--right&quot;&gt;&lt;/i&gt;
  &lt;/span&gt;
  &lt;el-dropdown-menu slot=&quot;dropdown&quot;&gt;
    &lt;el-dropdown-item command=&quot;a&quot;&gt;黄金糕&lt;/el-dropdown-item&gt;
    &lt;el-dropdown-item command=&quot;b&quot;&gt;狮子头&lt;/el-dropdown-item&gt;
    &lt;el-dropdown-item command=&quot;c&quot;&gt;螺蛳粉&lt;/el-dropdown-item&gt;
    &lt;el-dropdown-item command=&quot;d&quot; disabled&gt;双皮奶&lt;/el-dropdown-item&gt;
    &lt;el-dropdown-item command=&quot;e&quot; divided&gt;蚵仔煎&lt;/el-dropdown-item&gt;
  &lt;/el-dropdown-menu&gt;
&lt;/el-dropdown&gt;

&lt;style&gt;
  .el-dropdown-link {
    cursor: pointer;
    color: #409EFF;
  }
  .el-icon-arrow-down {
    font-size: 12px;
  }
&lt;/style&gt;

&lt;script&gt;
  export default {
    methods: {
      handleCommand(command) {
        this.$message('click on item ' + command);
      }
    }
  }
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="bu-tong-chi-cun"><a class="header-anchor" href="#bu-tong-chi-cun">¶</a> 不同尺寸</h3>
<p>Dropdown 组件提供除了默认值以外的三种尺寸，可以在不同场景下选择合适的尺寸。</p>
<demo-block>
        <div><p>额外的尺寸：<code>medium</code>、<code>small</code>、<code>mini</code>，通过设置<code>size</code>属性来配置它们。</p>
</div>
        <template slot="source"><element-demo5 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;el-dropdown split-button type=&quot;primary&quot;&gt;
  默认尺寸
  &lt;el-dropdown-menu slot=&quot;dropdown&quot;&gt;
    &lt;el-dropdown-item&gt;黄金糕&lt;/el-dropdown-item&gt;
    &lt;el-dropdown-item&gt;狮子头&lt;/el-dropdown-item&gt;
    &lt;el-dropdown-item&gt;螺蛳粉&lt;/el-dropdown-item&gt;
    &lt;el-dropdown-item&gt;双皮奶&lt;/el-dropdown-item&gt;
    &lt;el-dropdown-item&gt;蚵仔煎&lt;/el-dropdown-item&gt;
  &lt;/el-dropdown-menu&gt;
&lt;/el-dropdown&gt;

&lt;el-dropdown size=&quot;medium&quot; split-button type=&quot;primary&quot;&gt;
  中等尺寸
  &lt;el-dropdown-menu slot=&quot;dropdown&quot;&gt;
    &lt;el-dropdown-item&gt;黄金糕&lt;/el-dropdown-item&gt;
    &lt;el-dropdown-item&gt;狮子头&lt;/el-dropdown-item&gt;
    &lt;el-dropdown-item&gt;螺蛳粉&lt;/el-dropdown-item&gt;
    &lt;el-dropdown-item&gt;双皮奶&lt;/el-dropdown-item&gt;
    &lt;el-dropdown-item&gt;蚵仔煎&lt;/el-dropdown-item&gt;
  &lt;/el-dropdown-menu&gt;
&lt;/el-dropdown&gt;

&lt;el-dropdown size=&quot;small&quot; split-button type=&quot;primary&quot;&gt;
  小型尺寸
  &lt;el-dropdown-menu slot=&quot;dropdown&quot;&gt;
    &lt;el-dropdown-item&gt;黄金糕&lt;/el-dropdown-item&gt;
    &lt;el-dropdown-item&gt;狮子头&lt;/el-dropdown-item&gt;
    &lt;el-dropdown-item&gt;螺蛳粉&lt;/el-dropdown-item&gt;
    &lt;el-dropdown-item&gt;双皮奶&lt;/el-dropdown-item&gt;
    &lt;el-dropdown-item&gt;蚵仔煎&lt;/el-dropdown-item&gt;
  &lt;/el-dropdown-menu&gt;
&lt;/el-dropdown&gt;

&lt;el-dropdown size=&quot;mini&quot; split-button type=&quot;primary&quot;&gt;
  超小尺寸
  &lt;el-dropdown-menu slot=&quot;dropdown&quot;&gt;
    &lt;el-dropdown-item&gt;黄金糕&lt;/el-dropdown-item&gt;
    &lt;el-dropdown-item&gt;狮子头&lt;/el-dropdown-item&gt;
    &lt;el-dropdown-item&gt;螺蛳粉&lt;/el-dropdown-item&gt;
    &lt;el-dropdown-item&gt;双皮奶&lt;/el-dropdown-item&gt;
    &lt;el-dropdown-item&gt;蚵仔煎&lt;/el-dropdown-item&gt;
  &lt;/el-dropdown-menu&gt;
&lt;/el-dropdown&gt;
</code></pre></template></demo-block><h3 id="dropdown-attributes"><a class="header-anchor" href="#dropdown-attributes">¶</a> Dropdown Attributes</h3>
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
<td>type</td>
<td>菜单按钮类型，同 Button 组件(只在<code>split-button</code>为 true 的情况下有效)</td>
<td>string</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>size</td>
<td>菜单尺寸，在<code>split-button</code>为 true 的情况下也对触发按钮生效</td>
<td>string</td>
<td>medium / small / mini</td>
<td>—</td>
</tr>
<tr>
<td>split-button</td>
<td>下拉触发元素呈现为按钮组</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>placement</td>
<td>菜单弹出位置</td>
<td>string</td>
<td>top/top-start/top-end/bottom/bottom-start/bottom-end</td>
<td>bottom-end</td>
</tr>
<tr>
<td>trigger</td>
<td>触发下拉的行为</td>
<td>string</td>
<td>hover, click</td>
<td>hover</td>
</tr>
<tr>
<td>hide-on-click</td>
<td>是否在点击菜单项后隐藏菜单</td>
<td>boolean</td>
<td>—</td>
<td>true</td>
</tr>
<tr>
<td>show-timeout</td>
<td>展开下拉菜单的延时（仅在 trigger 为 hover 时有效）</td>
<td>number</td>
<td>—</td>
<td>250</td>
</tr>
<tr>
<td>hide-timeout</td>
<td>收起下拉菜单的延时（仅在 trigger 为 hover 时有效）</td>
<td>number</td>
<td>—</td>
<td>150</td>
</tr>
<tr>
<td>tabindex</td>
<td>Dropdown 组件的 <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/tabindex">tabindex</a></td>
<td>number</td>
<td>—</td>
<td>0</td>
</tr>
</tbody>
</table>
<h3 id="dropdown-slots"><a class="header-anchor" href="#dropdown-slots">¶</a> Dropdown Slots</h3>
<table>
<thead>
<tr>
<th>Name</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>—</td>
<td>触发下拉列表显示的元素。 注意： 必须是一个元素或者或者组件</td>
</tr>
<tr>
<td>dropdown</td>
<td>下拉列表，通常是 <code>&lt;el-dropdown-menu&gt;</code> 组件</td>
</tr>
</tbody>
</table>
<h3 id="dropdown-events"><a class="header-anchor" href="#dropdown-events">¶</a> Dropdown Events</h3>
<table>
<thead>
<tr>
<th>事件名称</th>
<th>说明</th>
<th>回调参数</th>
</tr>
</thead>
<tbody>
<tr>
<td>click</td>
<td><code>split-button</code> 为 true 时，点击左侧按钮的回调</td>
<td>—</td>
</tr>
<tr>
<td>command</td>
<td>点击菜单项触发的事件回调</td>
<td>dropdown-item 的指令</td>
</tr>
<tr>
<td>visible-change</td>
<td>下拉框出现/隐藏时触发</td>
<td>出现则为 true，隐藏则为 false</td>
</tr>
</tbody>
</table>
<h3 id="dropdown-menu-item-attributes"><a class="header-anchor" href="#dropdown-menu-item-attributes">¶</a> Dropdown Menu Item Attributes</h3>
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
<td>command</td>
<td>指令</td>
<td>string/number/object</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>disabled</td>
<td>禁用</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>divided</td>
<td>显示分割线</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>icon</td>
<td>图标类名</td>
<td>string</td>
<td>—</td>
<td>—</td>
</tr>
</tbody>
</table>
