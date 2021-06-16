<h2 id="drawer-chou-ti"><a class="header-anchor" href="#drawer-chou-ti">¶</a> Drawer 抽屉</h2>
<p>有些时候, <code>Dialog</code> 组件并不满足我们的需求, 比如你的表单很长, 亦或是你需要临时展示一些文档, <code>Drawer</code> 拥有和 <code>Dialog</code> 几乎相同的 API, 在 UI 上带来不一样的体验.</p>
<h3 id="ji-ben-yong-fa"><a class="header-anchor" href="#ji-ben-yong-fa">¶</a> 基本用法</h3>
<p>呼出一个临时的侧边栏, 可以从多个方向呼出</p>
<demo-block>
        <div><p>需要设置 <code>visible</code> 属性，它的<strong>类型</strong>是 <code>boolean</code>,当为 <strong>true</strong> 时显示 Drawer。Drawer 分为两个部分：<code>title</code> 和 <code>body</code>，<code>title</code> 需要具名为 <strong>title</strong> 的 <code>slot</code>, 也可以通过 <code>title</code> 属性来定义，默认值为空。需要注意的是, Drawer 默认是从右往左打开, 当然可以设置对应的 <code>direction</code>, 详细请参考 <code>direction</code> 用法 最后，本例还展示了 <code>before-close</code> 的用法</p>
</div>
        <template slot="source"><element-demo0 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;el-radio-group v-model=&quot;direction&quot;&gt;
  &lt;el-radio label=&quot;ltr&quot;&gt;从左往右开&lt;/el-radio&gt;
  &lt;el-radio label=&quot;rtl&quot;&gt;从右往左开&lt;/el-radio&gt;
  &lt;el-radio label=&quot;ttb&quot;&gt;从上往下开&lt;/el-radio&gt;
  &lt;el-radio label=&quot;btt&quot;&gt;从下往上开&lt;/el-radio&gt;
&lt;/el-radio-group&gt;

&lt;el-button @click=&quot;drawer = true&quot; type=&quot;primary&quot; style=&quot;margin-left: 16px;&quot;&gt;
  点我打开
&lt;/el-button&gt;

&lt;el-drawer
  title=&quot;我是标题&quot;
  :visible.sync=&quot;drawer&quot;
  :direction=&quot;direction&quot;
  :before-close=&quot;handleClose&quot;&gt;
  &lt;span&gt;我来啦!&lt;/span&gt;
&lt;/el-drawer&gt;

&lt;script&gt;
  export default {
    data() {
      return {
        drawer: false,
        direction: 'rtl',
      };
    },
    methods: {
      handleClose(done) {
        this.$confirm('确认关闭？')
          .then(_ =&gt; {
            done();
          })
          .catch(_ =&gt; {});
      }
    }
  };
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="bu-tian-jia-title"><a class="header-anchor" href="#bu-tian-jia-title">¶</a> 不添加 Title</h3>
<p>当你不需要标题到时候, 你还可以去掉标题</p>
<demo-block>
        <div><p>当遇到不需要 title 的场景时, 可以通过 <code>withHeader</code> 这个属性来关闭掉 title 的显示, 这样可以留出更大的空间给到用户, 为了用户的可访问性, 请务必设定 <code>title</code> 的值</p>
</div>
        <template slot="source"><element-demo1 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;el-button @click=&quot;drawer = true&quot; type=&quot;primary&quot; style=&quot;margin-left: 16px;&quot;&gt;
  点我打开
&lt;/el-button&gt;

&lt;el-drawer
  title=&quot;我是标题&quot;
  :visible.sync=&quot;drawer&quot;
  :with-header=&quot;false&quot;&gt;
  &lt;span&gt;我来啦!&lt;/span&gt;
&lt;/el-drawer&gt;

&lt;script&gt;
  export default {
    data() {
      return {
        drawer: false,
      };
    }
  };
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="zi-ding-yi-nei-rong"><a class="header-anchor" href="#zi-ding-yi-nei-rong">¶</a> 自定义内容</h3>
<p>和 <code>Dialog</code> 组件一样, <code>Drawer</code> 同样可以在其内部嵌套各种丰富的操作</p>
<demo-block>
        
        <template slot="source"><element-demo2 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;el-button type=&quot;text&quot; @click=&quot;table = true&quot;&gt;打开嵌套表格的 Drawer&lt;/el-button&gt;
&lt;el-button type=&quot;text&quot; @click=&quot;dialog = true&quot;&gt;打开嵌套 Form 的 Drawer&lt;/el-button&gt;
&lt;el-drawer
  title=&quot;我嵌套了表格!&quot;
  :visible.sync=&quot;table&quot;
  direction=&quot;rtl&quot;
  size=&quot;50%&quot;&gt;
   &lt;el-table :data=&quot;gridData&quot;&gt;
      &lt;el-table-column property=&quot;date&quot; label=&quot;日期&quot; width=&quot;150&quot;&gt;&lt;/el-table-column&gt;
      &lt;el-table-column property=&quot;name&quot; label=&quot;姓名&quot; width=&quot;200&quot;&gt;&lt;/el-table-column&gt;
      &lt;el-table-column property=&quot;address&quot; label=&quot;地址&quot;&gt;&lt;/el-table-column&gt;
    &lt;/el-table&gt;
&lt;/el-drawer&gt;

&lt;el-drawer
  title=&quot;我嵌套了 Form !&quot;
  :before-close=&quot;handleClose&quot;
  :visible.sync=&quot;dialog&quot;
  direction=&quot;ltr&quot;
  custom-class=&quot;demo-drawer&quot;
  ref=&quot;drawer&quot;
  &gt;
  &lt;div class=&quot;demo-drawer__content&quot;&gt;
    &lt;el-form :model=&quot;form&quot;&gt;
      &lt;el-form-item label=&quot;活动名称&quot; :label-width=&quot;formLabelWidth&quot;&gt;
        &lt;el-input v-model=&quot;form.name&quot; autocomplete=&quot;off&quot;&gt;&lt;/el-input&gt;
      &lt;/el-form-item&gt;
      &lt;el-form-item label=&quot;活动区域&quot; :label-width=&quot;formLabelWidth&quot;&gt;
        &lt;el-select v-model=&quot;form.region&quot; placeholder=&quot;请选择活动区域&quot;&gt;
          &lt;el-option label=&quot;区域一&quot; value=&quot;shanghai&quot;&gt;&lt;/el-option&gt;
          &lt;el-option label=&quot;区域二&quot; value=&quot;beijing&quot;&gt;&lt;/el-option&gt;
        &lt;/el-select&gt;
      &lt;/el-form-item&gt;
    &lt;/el-form&gt;
    &lt;div class=&quot;demo-drawer__footer&quot;&gt;
      &lt;el-button @click=&quot;cancelForm&quot;&gt;取 消&lt;/el-button&gt;
      &lt;el-button type=&quot;primary&quot; @click=&quot;$refs.drawer.closeDrawer()&quot; :loading=&quot;loading&quot;&gt;{{ loading ? '提交中 ...' : '确 定' }}&lt;/el-button&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/el-drawer&gt;

&lt;script&gt;
export default {
  data() {
    return {
      table: false,
      dialog: false,
      loading: false,
      gridData: [{
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }],
      form: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      },
      formLabelWidth: '80px',
      timer: null,
    };
  },
  methods: {
    handleClose(done) {
      if (this.loading) {
        return;
      }
      this.$confirm('确定要提交表单吗？')
        .then(_ =&gt; {
          this.loading = true;
          this.timer = setTimeout(() =&gt; {
            done();
            // 动画关闭需要一定的时间
            setTimeout(() =&gt; {
              this.loading = false;
            }, 400);
          }, 2000);
        })
        .catch(_ =&gt; {});
    },
    cancelForm() {
      this.loading = false;
      this.dialog = false;
      clearTimeout(this.timer);
    }
  }
}
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="duo-ceng-qian-tao"><a class="header-anchor" href="#duo-ceng-qian-tao">¶</a> 多层嵌套</h3>
<p><code>Drawer</code> 组件也拥有多层嵌套的方法</p>
<demo-block>
        <div><p>同样, 如果你需要嵌套多层 <code>Drawer</code> 请一定要设置 <code>append-to-body</code> 属性为 <strong>true</strong></p>
</div>
        <template slot="source"><element-demo3 /></template>
        <template slot="highlight"><pre v-pre><code class="html">
&lt;el-button @click=&quot;drawer = true&quot; type=&quot;primary&quot; style=&quot;margin-left: 16px;&quot;&gt;
  点我打开
&lt;/el-button&gt;

&lt;el-drawer
  title=&quot;我是外面的 Drawer&quot;
  :visible.sync=&quot;drawer&quot;
  size=&quot;50%&quot;&gt;
  &lt;div&gt;
   &lt;el-button @click=&quot;innerDrawer = true&quot;&gt;打开里面的!&lt;/el-button&gt;
   &lt;el-drawer
     title=&quot;我是里面的&quot;
     :append-to-body=&quot;true&quot;
     :before-close=&quot;handleClose&quot;
     :visible.sync=&quot;innerDrawer&quot;&gt;
     &lt;p&gt;_(:зゝ∠)_&lt;/p&gt;
   &lt;/el-drawer&gt;
  &lt;/div&gt;
&lt;/el-drawer&gt;

&lt;script&gt;
  export default {
    data() {
      return {
        drawer: false,
        innerDrawer: false,
      };
    },
    methods: {
      handleClose(done) {
        this.$confirm('还有未保存的工作哦确定关闭吗？')
          .then(_ =&gt; {
            done();
          })
          .catch(_ =&gt; {});
      }
    }
  };
&lt;/script&gt;

</code></pre></template></demo-block><div class="tip">
<p>Drawer 的内容是懒渲染的，即在第一次被打开之前，传入的默认 slot 不会被渲染到 DOM 上。因此，如果需要执行 DOM 操作，或通过 <code>ref</code> 获取相应组件，请在 <code>open</code> 事件回调中进行。</p>
</div>
<div class="tip">
<p>Drawer 提供一个 <code>destroyOnClose</code> API, 用来在关闭 Drawer 时销毁子组件内容, 例如清理表单内的状态, 在必要时可以将该属性设置为 <strong>true</strong> 用来保证初始状态的一致性</p>
</div>
<div class="tip">
<p>如果 <code>visible</code> 属性绑定的变量位于 Vuex 的 store 内，那么 <code>.sync</code> 不会正常工作。此时需要去除 <code>.sync</code> 修饰符，同时监听 Drawer 的 <code>open</code> 和 <code>close</code> 事件，在事件回调中执行 Vuex 中对应的 mutation 更新 <code>visible</code> 属性绑定的变量的值。</p>
</div>
<h3 id="drawer-attributes"><a class="header-anchor" href="#drawer-attributes">¶</a> Drawer Attributes</h3>
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
<td>append-to-body</td>
<td>Drawer 自身是否插入至 body 元素上。嵌套的 Drawer 必须指定该属性并赋值为 true</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>before-close</td>
<td>关闭前的回调，会暂停 Drawer 的关闭</td>
<td>function(done)，done 用于关闭 Drawer</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>close-on-press-escape</td>
<td>是否可以通过按下 ESC 关闭 Drawer</td>
<td>boolean</td>
<td>—</td>
<td>true</td>
</tr>
<tr>
<td>custom-class</td>
<td>Drawer 的自定义类名</td>
<td>string</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>destroy-on-close</td>
<td>控制是否在关闭 Drawer 之后将子元素全部销毁</td>
<td>boolean</td>
<td>-</td>
<td>false</td>
</tr>
<tr>
<td>modal</td>
<td>是否需要遮罩层</td>
<td>boolean</td>
<td>—</td>
<td>true</td>
</tr>
<tr>
<td>modal-append-to-body</td>
<td>遮罩层是否插入至 body 元素上，若为 false，则遮罩层会插入至 Drawer 的父元素上</td>
<td>boolean</td>
<td>—</td>
<td>true</td>
</tr>
<tr>
<td>direction</td>
<td>Drawer 打开的方向</td>
<td>Direction</td>
<td>rtl / ltr / ttb / btt</td>
<td>rtl</td>
</tr>
<tr>
<td>show-close</td>
<td>是否显示关闭按钮</td>
<td>boolean</td>
<td>—</td>
<td>true</td>
</tr>
<tr>
<td>size</td>
<td>Drawer 窗体的大小, 当使用 <code>number</code> 类型时, 以像素为单位, 当使用 <code>string</code> 类型时, 请传入 'x%', 否则便会以 <code>number</code> 类型解释</td>
<td>number / string</td>
<td>-</td>
<td>'30%'</td>
</tr>
<tr>
<td>title</td>
<td>Drawer 的标题，也可通过具名 slot （见下表）传入</td>
<td>string</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>visible</td>
<td>是否显示 Drawer，支持 .sync 修饰符</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>wrapperClosable</td>
<td>点击遮罩层是否可以关闭 Drawer</td>
<td>boolean</td>
<td>-</td>
<td>true</td>
</tr>
<tr>
<td>withHeader</td>
<td>控制是否显示 header 栏, 默认为 true, 当此项为 false 时, title attribute 和 title slot 均不生效</td>
<td>boolean</td>
<td>-</td>
<td>true</td>
</tr>
</tbody>
</table>
<h3 id="drawer-slot"><a class="header-anchor" href="#drawer-slot">¶</a> Drawer Slot</h3>
<table>
<thead>
<tr>
<th>name</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>—</td>
<td>Drawer 的内容</td>
</tr>
<tr>
<td>title</td>
<td>Drawer 标题区的内容</td>
</tr>
</tbody>
</table>
<h3 id="drawer-methods"><a class="header-anchor" href="#drawer-methods">¶</a> Drawer Methods</h3>
<table>
<thead>
<tr>
<th>name</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>closeDrawer</td>
<td>用于关闭 Drawer, 该方法会调用传入的 <code>before-close</code> 方法</td>
</tr>
</tbody>
</table>
<h3 id="drawer-events"><a class="header-anchor" href="#drawer-events">¶</a> Drawer Events</h3>
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
<td>open</td>
<td>Drawer 打开的回调</td>
<td>—</td>
</tr>
<tr>
<td>opened</td>
<td>Drawer 打开动画结束时的回调</td>
<td>—</td>
</tr>
<tr>
<td>close</td>
<td>Drawer 关闭的回调</td>
<td>—</td>
</tr>
<tr>
<td>closed</td>
<td>Drawer 关闭动画结束时的回调</td>
<td>—</td>
</tr>
</tbody>
</table>
