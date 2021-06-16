<h2 id="navmenu-dao-hang-cai-dan"><a class="header-anchor" href="#navmenu-dao-hang-cai-dan">¶</a> NavMenu 导航菜单</h2>
<p>为网站提供导航功能的菜单。</p>
<h3 id="ding-lan"><a class="header-anchor" href="#ding-lan">¶</a> 顶栏</h3>
<p>适用广泛的基础用法。</p>
<demo-block>
        <div><p>导航菜单默认为垂直模式，通过<code>mode</code>属性可以使导航菜单变更为水平模式。另外，在菜单中通过<code>submenu</code>组件可以生成二级菜单。Menu 还提供了<code>background-color</code>、<code>text-color</code>和<code>active-text-color</code>，分别用于设置菜单的背景色、菜单的文字颜色和当前激活菜单的文字颜色。</p>
</div>
        <template slot="source"><element-demo0 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;el-menu :default-active=&quot;activeIndex&quot; class=&quot;el-menu-demo&quot; mode=&quot;horizontal&quot; @select=&quot;handleSelect&quot;&gt;
  &lt;el-menu-item index=&quot;1&quot;&gt;处理中心&lt;/el-menu-item&gt;
  &lt;el-submenu index=&quot;2&quot;&gt;
    &lt;template slot=&quot;title&quot;&gt;我的工作台&lt;/template&gt;
    &lt;el-menu-item index=&quot;2-1&quot;&gt;选项1&lt;/el-menu-item&gt;
    &lt;el-menu-item index=&quot;2-2&quot;&gt;选项2&lt;/el-menu-item&gt;
    &lt;el-menu-item index=&quot;2-3&quot;&gt;选项3&lt;/el-menu-item&gt;
    &lt;el-submenu index=&quot;2-4&quot;&gt;
      &lt;template slot=&quot;title&quot;&gt;选项4&lt;/template&gt;
      &lt;el-menu-item index=&quot;2-4-1&quot;&gt;选项1&lt;/el-menu-item&gt;
      &lt;el-menu-item index=&quot;2-4-2&quot;&gt;选项2&lt;/el-menu-item&gt;
      &lt;el-menu-item index=&quot;2-4-3&quot;&gt;选项3&lt;/el-menu-item&gt;
    &lt;/el-submenu&gt;
  &lt;/el-submenu&gt;
  &lt;el-menu-item index=&quot;3&quot; disabled&gt;消息中心&lt;/el-menu-item&gt;
  &lt;el-menu-item index=&quot;4&quot;&gt;&lt;a href=&quot;https://www.ele.me&quot; target=&quot;_blank&quot;&gt;订单管理&lt;/a&gt;&lt;/el-menu-item&gt;
&lt;/el-menu&gt;
&lt;div class=&quot;line&quot;&gt;&lt;/div&gt;
&lt;el-menu
  :default-active=&quot;activeIndex2&quot;
  class=&quot;el-menu-demo&quot;
  mode=&quot;horizontal&quot;
  @select=&quot;handleSelect&quot;
  background-color=&quot;#545c64&quot;
  text-color=&quot;#fff&quot;
  active-text-color=&quot;#ffd04b&quot;&gt;
  &lt;el-menu-item index=&quot;1&quot;&gt;处理中心&lt;/el-menu-item&gt;
  &lt;el-submenu index=&quot;2&quot;&gt;
    &lt;template slot=&quot;title&quot;&gt;我的工作台&lt;/template&gt;
    &lt;el-menu-item index=&quot;2-1&quot;&gt;选项1&lt;/el-menu-item&gt;
    &lt;el-menu-item index=&quot;2-2&quot;&gt;选项2&lt;/el-menu-item&gt;
    &lt;el-menu-item index=&quot;2-3&quot;&gt;选项3&lt;/el-menu-item&gt;
    &lt;el-submenu index=&quot;2-4&quot;&gt;
      &lt;template slot=&quot;title&quot;&gt;选项4&lt;/template&gt;
      &lt;el-menu-item index=&quot;2-4-1&quot;&gt;选项1&lt;/el-menu-item&gt;
      &lt;el-menu-item index=&quot;2-4-2&quot;&gt;选项2&lt;/el-menu-item&gt;
      &lt;el-menu-item index=&quot;2-4-3&quot;&gt;选项3&lt;/el-menu-item&gt;
    &lt;/el-submenu&gt;
  &lt;/el-submenu&gt;
  &lt;el-menu-item index=&quot;3&quot; disabled&gt;消息中心&lt;/el-menu-item&gt;
  &lt;el-menu-item index=&quot;4&quot;&gt;&lt;a href=&quot;https://www.ele.me&quot; target=&quot;_blank&quot;&gt;订单管理&lt;/a&gt;&lt;/el-menu-item&gt;
&lt;/el-menu&gt;

&lt;script&gt;
  export default {
    data() {
      return {
        activeIndex: '1',
        activeIndex2: '1'
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="ce-lan"><a class="header-anchor" href="#ce-lan">¶</a> 侧栏</h3>
<p>垂直菜单，可内嵌子菜单。</p>
<demo-block>
        <div><p>通过<code>el-menu-item-group</code>组件可以实现菜单进行分组，分组名可以通过<code>title</code>属性直接设定，也可以通过具名 slot 来设定。</p>
</div>
        <template slot="source"><element-demo1 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;el-row class=&quot;tac&quot;&gt;
  &lt;el-col :span=&quot;12&quot;&gt;
    &lt;h5&gt;默认颜色&lt;/h5&gt;
    &lt;el-menu
      default-active=&quot;2&quot;
      class=&quot;el-menu-vertical-demo&quot;
      @open=&quot;handleOpen&quot;
      @close=&quot;handleClose&quot;&gt;
      &lt;el-submenu index=&quot;1&quot;&gt;
        &lt;template slot=&quot;title&quot;&gt;
          &lt;i class=&quot;el-icon-location&quot;&gt;&lt;/i&gt;
          &lt;span&gt;导航一&lt;/span&gt;
        &lt;/template&gt;
        &lt;el-menu-item-group&gt;
          &lt;template slot=&quot;title&quot;&gt;分组一&lt;/template&gt;
          &lt;el-menu-item index=&quot;1-1&quot;&gt;选项1&lt;/el-menu-item&gt;
          &lt;el-menu-item index=&quot;1-2&quot;&gt;选项2&lt;/el-menu-item&gt;
        &lt;/el-menu-item-group&gt;
        &lt;el-menu-item-group title=&quot;分组2&quot;&gt;
          &lt;el-menu-item index=&quot;1-3&quot;&gt;选项3&lt;/el-menu-item&gt;
        &lt;/el-menu-item-group&gt;
        &lt;el-submenu index=&quot;1-4&quot;&gt;
          &lt;template slot=&quot;title&quot;&gt;选项4&lt;/template&gt;
          &lt;el-menu-item index=&quot;1-4-1&quot;&gt;选项1&lt;/el-menu-item&gt;
        &lt;/el-submenu&gt;
      &lt;/el-submenu&gt;
      &lt;el-menu-item index=&quot;2&quot;&gt;
        &lt;i class=&quot;el-icon-menu&quot;&gt;&lt;/i&gt;
        &lt;span slot=&quot;title&quot;&gt;导航二&lt;/span&gt;
      &lt;/el-menu-item&gt;
      &lt;el-menu-item index=&quot;3&quot; disabled&gt;
        &lt;i class=&quot;el-icon-document&quot;&gt;&lt;/i&gt;
        &lt;span slot=&quot;title&quot;&gt;导航三&lt;/span&gt;
      &lt;/el-menu-item&gt;
      &lt;el-menu-item index=&quot;4&quot;&gt;
        &lt;i class=&quot;el-icon-setting&quot;&gt;&lt;/i&gt;
        &lt;span slot=&quot;title&quot;&gt;导航四&lt;/span&gt;
      &lt;/el-menu-item&gt;
    &lt;/el-menu&gt;
  &lt;/el-col&gt;
  &lt;el-col :span=&quot;12&quot;&gt;
    &lt;h5&gt;自定义颜色&lt;/h5&gt;
    &lt;el-menu
      default-active=&quot;2&quot;
      class=&quot;el-menu-vertical-demo&quot;
      @open=&quot;handleOpen&quot;
      @close=&quot;handleClose&quot;
      background-color=&quot;#545c64&quot;
      text-color=&quot;#fff&quot;
      active-text-color=&quot;#ffd04b&quot;&gt;
      &lt;el-submenu index=&quot;1&quot;&gt;
        &lt;template slot=&quot;title&quot;&gt;
          &lt;i class=&quot;el-icon-location&quot;&gt;&lt;/i&gt;
          &lt;span&gt;导航一&lt;/span&gt;
        &lt;/template&gt;
        &lt;el-menu-item-group&gt;
          &lt;template slot=&quot;title&quot;&gt;分组一&lt;/template&gt;
          &lt;el-menu-item index=&quot;1-1&quot;&gt;选项1&lt;/el-menu-item&gt;
          &lt;el-menu-item index=&quot;1-2&quot;&gt;选项2&lt;/el-menu-item&gt;
        &lt;/el-menu-item-group&gt;
        &lt;el-menu-item-group title=&quot;分组2&quot;&gt;
          &lt;el-menu-item index=&quot;1-3&quot;&gt;选项3&lt;/el-menu-item&gt;
        &lt;/el-menu-item-group&gt;
        &lt;el-submenu index=&quot;1-4&quot;&gt;
          &lt;template slot=&quot;title&quot;&gt;选项4&lt;/template&gt;
          &lt;el-menu-item index=&quot;1-4-1&quot;&gt;选项1&lt;/el-menu-item&gt;
        &lt;/el-submenu&gt;
      &lt;/el-submenu&gt;
      &lt;el-menu-item index=&quot;2&quot;&gt;
        &lt;i class=&quot;el-icon-menu&quot;&gt;&lt;/i&gt;
        &lt;span slot=&quot;title&quot;&gt;导航二&lt;/span&gt;
      &lt;/el-menu-item&gt;
      &lt;el-menu-item index=&quot;3&quot; disabled&gt;
        &lt;i class=&quot;el-icon-document&quot;&gt;&lt;/i&gt;
        &lt;span slot=&quot;title&quot;&gt;导航三&lt;/span&gt;
      &lt;/el-menu-item&gt;
      &lt;el-menu-item index=&quot;4&quot;&gt;
        &lt;i class=&quot;el-icon-setting&quot;&gt;&lt;/i&gt;
        &lt;span slot=&quot;title&quot;&gt;导航四&lt;/span&gt;
      &lt;/el-menu-item&gt;
    &lt;/el-menu&gt;
  &lt;/el-col&gt;
&lt;/el-row&gt;

&lt;script&gt;
  export default {
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="zhe-die"><a class="header-anchor" href="#zhe-die">¶</a> 折叠</h3>
<demo-block>
        
        <template slot="source"><element-demo2 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;el-radio-group v-model=&quot;isCollapse&quot; style=&quot;margin-bottom: 20px;&quot;&gt;
  &lt;el-radio-button :label=&quot;false&quot;&gt;展开&lt;/el-radio-button&gt;
  &lt;el-radio-button :label=&quot;true&quot;&gt;收起&lt;/el-radio-button&gt;
&lt;/el-radio-group&gt;
&lt;el-menu default-active=&quot;1-4-1&quot; class=&quot;el-menu-vertical-demo&quot; @open=&quot;handleOpen&quot; @close=&quot;handleClose&quot; :collapse=&quot;isCollapse&quot;&gt;
  &lt;el-submenu index=&quot;1&quot;&gt;
    &lt;template slot=&quot;title&quot;&gt;
      &lt;i class=&quot;el-icon-location&quot;&gt;&lt;/i&gt;
      &lt;span slot=&quot;title&quot;&gt;导航一&lt;/span&gt;
    &lt;/template&gt;
    &lt;el-menu-item-group&gt;
      &lt;span slot=&quot;title&quot;&gt;分组一&lt;/span&gt;
      &lt;el-menu-item index=&quot;1-1&quot;&gt;选项1&lt;/el-menu-item&gt;
      &lt;el-menu-item index=&quot;1-2&quot;&gt;选项2&lt;/el-menu-item&gt;
    &lt;/el-menu-item-group&gt;
    &lt;el-menu-item-group title=&quot;分组2&quot;&gt;
      &lt;el-menu-item index=&quot;1-3&quot;&gt;选项3&lt;/el-menu-item&gt;
    &lt;/el-menu-item-group&gt;
    &lt;el-submenu index=&quot;1-4&quot;&gt;
      &lt;span slot=&quot;title&quot;&gt;选项4&lt;/span&gt;
      &lt;el-menu-item index=&quot;1-4-1&quot;&gt;选项1&lt;/el-menu-item&gt;
    &lt;/el-submenu&gt;
  &lt;/el-submenu&gt;
  &lt;el-menu-item index=&quot;2&quot;&gt;
    &lt;i class=&quot;el-icon-menu&quot;&gt;&lt;/i&gt;
    &lt;span slot=&quot;title&quot;&gt;导航二&lt;/span&gt;
  &lt;/el-menu-item&gt;
  &lt;el-menu-item index=&quot;3&quot; disabled&gt;
    &lt;i class=&quot;el-icon-document&quot;&gt;&lt;/i&gt;
    &lt;span slot=&quot;title&quot;&gt;导航三&lt;/span&gt;
  &lt;/el-menu-item&gt;
  &lt;el-menu-item index=&quot;4&quot;&gt;
    &lt;i class=&quot;el-icon-setting&quot;&gt;&lt;/i&gt;
    &lt;span slot=&quot;title&quot;&gt;导航四&lt;/span&gt;
  &lt;/el-menu-item&gt;
&lt;/el-menu&gt;

&lt;style&gt;
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }
&lt;/style&gt;

&lt;script&gt;
  export default {
    data() {
      return {
        isCollapse: true
      };
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="menu-attribute"><a class="header-anchor" href="#menu-attribute">¶</a> Menu Attribute</h3>
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
<td>mode</td>
<td>模式</td>
<td>string</td>
<td>horizontal / vertical</td>
<td>vertical</td>
</tr>
<tr>
<td>collapse</td>
<td>是否水平折叠收起菜单（仅在 mode 为 vertical 时可用）</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>background-color</td>
<td>菜单的背景色（仅支持 hex 格式）</td>
<td>string</td>
<td>—</td>
<td>#ffffff</td>
</tr>
<tr>
<td>text-color</td>
<td>菜单的文字颜色（仅支持 hex 格式）</td>
<td>string</td>
<td>—</td>
<td>#303133</td>
</tr>
<tr>
<td>active-text-color</td>
<td>当前激活菜单的文字颜色（仅支持 hex 格式）</td>
<td>string</td>
<td>—</td>
<td>#409EFF</td>
</tr>
<tr>
<td>default-active</td>
<td>当前激活菜单的 index</td>
<td>string</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>default-openeds</td>
<td>当前打开的 sub-menu 的 index 的数组</td>
<td>Array</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>unique-opened</td>
<td>是否只保持一个子菜单的展开</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>menu-trigger</td>
<td>子菜单打开的触发方式(只在 mode 为 horizontal 时有效)</td>
<td>string</td>
<td>hover / click</td>
<td>hover</td>
</tr>
<tr>
<td>router</td>
<td>是否使用 vue-router 的模式，启用该模式会在激活导航时以 index 作为 path 进行路由跳转</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>collapse-transition</td>
<td>是否开启折叠动画</td>
<td>boolean</td>
<td>—</td>
<td>true</td>
</tr>
</tbody>
</table>
<h3 id="menu-methods"><a class="header-anchor" href="#menu-methods">¶</a> Menu Methods</h3>
<table>
<thead>
<tr>
<th>方法名称</th>
<th>说明</th>
<th>参数</th>
</tr>
</thead>
<tbody>
<tr>
<td>open</td>
<td>展开指定的 sub-menu</td>
<td>index: 需要打开的 sub-menu 的 index</td>
</tr>
<tr>
<td>close</td>
<td>收起指定的 sub-menu</td>
<td>index: 需要收起的 sub-menu 的 index</td>
</tr>
</tbody>
</table>
<h3 id="menu-events"><a class="header-anchor" href="#menu-events">¶</a> Menu Events</h3>
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
<td>select</td>
<td>菜单激活回调</td>
<td>index: 选中菜单项的 index, indexPath: 选中菜单项的 index path</td>
</tr>
<tr>
<td>open</td>
<td>sub-menu 展开的回调</td>
<td>index: 打开的 sub-menu 的 index， indexPath: 打开的 sub-menu 的 index path</td>
</tr>
<tr>
<td>close</td>
<td>sub-menu 收起的回调</td>
<td>index: 收起的 sub-menu 的 index， indexPath: 收起的 sub-menu 的 index path</td>
</tr>
</tbody>
</table>
<h3 id="submenu-attribute"><a class="header-anchor" href="#submenu-attribute">¶</a> SubMenu Attribute</h3>
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
<td>index</td>
<td>唯一标志</td>
<td>string/null</td>
<td>—</td>
<td>null</td>
</tr>
<tr>
<td>popper-class</td>
<td>弹出菜单的自定义类名</td>
<td>string</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>show-timeout</td>
<td>展开 sub-menu 的延时</td>
<td>number</td>
<td>—</td>
<td>300</td>
</tr>
<tr>
<td>hide-timeout</td>
<td>收起 sub-menu 的延时</td>
<td>number</td>
<td>—</td>
<td>300</td>
</tr>
<tr>
<td>disabled</td>
<td>是否禁用</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>popper-append-to-body</td>
<td>是否将弹出菜单插入至 body 元素。在菜单的定位出现问题时，可尝试修改该属性</td>
<td>boolean</td>
<td>—</td>
<td>一级子菜单：true / 非一级子菜单：false</td>
</tr>
</tbody>
</table>
<h3 id="menu-item-attribute"><a class="header-anchor" href="#menu-item-attribute">¶</a> Menu-Item Attribute</h3>
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
<td>index</td>
<td>唯一标志</td>
<td>string</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>route</td>
<td>Vue Router 路径对象</td>
<td>Object</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>disabled</td>
<td>是否禁用</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
</tbody>
</table>
<h3 id="menu-group-attribute"><a class="header-anchor" href="#menu-group-attribute">¶</a> Menu-Group Attribute</h3>
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
<td>title</td>
<td>分组标题</td>
<td>string</td>
<td>—</td>
<td>—</td>
</tr>
</tbody>
</table>
