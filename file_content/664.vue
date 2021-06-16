<h2 id="dialog-dui-hua-kuang"><a class="header-anchor" href="#dialog-dui-hua-kuang">¶</a> Dialog 对话框</h2>
<p>在保留当前页面状态的情况下，告知用户并承载相关操作。</p>
<h3 id="ji-ben-yong-fa"><a class="header-anchor" href="#ji-ben-yong-fa">¶</a> 基本用法</h3>
<p>Dialog 弹出一个对话框，适合需要定制性更大的场景。</p>
<demo-block>
        <div><p>需要设置<code>visible</code>属性，它接收<code>Boolean</code>，当为<code>true</code>时显示 Dialog。Dialog 分为两个部分：<code>body</code>和<code>footer</code>，<code>footer</code>需要具名为<code>footer</code>的<code>slot</code>。<code>title</code>属性用于定义标题，它是可选的，默认值为空。最后，本例还展示了<code>before-close</code>的用法。</p>
</div>
        <!--element-demo: <el-button type="text" @click="dialogVisible = true">点击打开 Dialog</el-button>

<el-dialog
  title="提示"
  :visible.sync="dialogVisible"
  width="30%"
  :before-close="handleClose">
  <span>这是一段信息</span>
  <span slot="footer" class="dialog-footer">
    <el-button @click="dialogVisible = false">取 消</el-button>
    <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
  </span>
</el-dialog>

<script>
  export default {
    data() {
      return {
        dialogVisible: false
      };
    },
    methods: {
      handleClose(done) {
        this.$confirm('确认关闭？')
          .then(_ => {
            done();
          })
          .catch(_ => {});
      }
    }
  };
</script>
:element-demo-->
        <template slot="highlight"><pre v-pre><code class="html">&lt;el-button type=&quot;text&quot; @click=&quot;dialogVisible = true&quot;&gt;点击打开 Dialog&lt;/el-button&gt;

&lt;el-dialog
  title=&quot;提示&quot;
  :visible.sync=&quot;dialogVisible&quot;
  width=&quot;30%&quot;
  :before-close=&quot;handleClose&quot;&gt;
  &lt;span&gt;这是一段信息&lt;/span&gt;
  &lt;span slot=&quot;footer&quot; class=&quot;dialog-footer&quot;&gt;
    &lt;el-button @click=&quot;dialogVisible = false&quot;&gt;取 消&lt;/el-button&gt;
    &lt;el-button type=&quot;primary&quot; @click=&quot;dialogVisible = false&quot;&gt;确 定&lt;/el-button&gt;
  &lt;/span&gt;
&lt;/el-dialog&gt;

&lt;script&gt;
  export default {
    data() {
      return {
        dialogVisible: false
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
</code></pre></template></demo-block><div class="tip">
<p><code>before-close</code> 仅当用户通过点击关闭图标或遮罩关闭 Dialog 时起效。如果你在 <code>footer</code> 具名 slot 里添加了用于关闭 Dialog 的按钮，那么可以在按钮的点击回调函数里加入 <code>before-close</code> 的相关逻辑。</p>
</div>
<h3 id="zi-ding-yi-nei-rong"><a class="header-anchor" href="#zi-ding-yi-nei-rong">¶</a> 自定义内容</h3>
<p>Dialog 组件的内容可以是任意的，甚至可以是表格或表单，下面是应用了 Element Table 和 Form 组件的两个样例。</p>
<demo-block>
        
        <!--element-demo: <!-- Table -->
<el-button type="text" @click="dialogTableVisible = true">打开嵌套表格的 Dialog</el-button>

<el-dialog title="收货地址" :visible.sync="dialogTableVisible">
  <el-table :data="gridData">
    <el-table-column property="date" label="日期" width="150"></el-table-column>
    <el-table-column property="name" label="姓名" width="200"></el-table-column>
    <el-table-column property="address" label="地址"></el-table-column>
  </el-table>
</el-dialog>

<!-- Form -->
<el-button type="text" @click="dialogFormVisible = true">打开嵌套表单的 Dialog</el-button>

<el-dialog title="收货地址" :visible.sync="dialogFormVisible">
  <el-form :model="form">
    <el-form-item label="活动名称" :label-width="formLabelWidth">
      <el-input v-model="form.name" autocomplete="off"></el-input>
    </el-form-item>
    <el-form-item label="活动区域" :label-width="formLabelWidth">
      <el-select v-model="form.region" placeholder="请选择活动区域">
        <el-option label="区域一" value="shanghai"></el-option>
        <el-option label="区域二" value="beijing"></el-option>
      </el-select>
    </el-form-item>
  </el-form>
  <div slot="footer" class="dialog-footer">
    <el-button @click="dialogFormVisible = false">取 消</el-button>
    <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
  </div>
</el-dialog>

<script>
  export default {
    data() {
      return {
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
        dialogTableVisible: false,
        dialogFormVisible: false,
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
        formLabelWidth: '120px'
      };
    }
  };
</script>
:element-demo-->
        <template slot="highlight"><pre v-pre><code class="html">&lt;!-- Table --&gt;
&lt;el-button type=&quot;text&quot; @click=&quot;dialogTableVisible = true&quot;&gt;打开嵌套表格的 Dialog&lt;/el-button&gt;

&lt;el-dialog title=&quot;收货地址&quot; :visible.sync=&quot;dialogTableVisible&quot;&gt;
  &lt;el-table :data=&quot;gridData&quot;&gt;
    &lt;el-table-column property=&quot;date&quot; label=&quot;日期&quot; width=&quot;150&quot;&gt;&lt;/el-table-column&gt;
    &lt;el-table-column property=&quot;name&quot; label=&quot;姓名&quot; width=&quot;200&quot;&gt;&lt;/el-table-column&gt;
    &lt;el-table-column property=&quot;address&quot; label=&quot;地址&quot;&gt;&lt;/el-table-column&gt;
  &lt;/el-table&gt;
&lt;/el-dialog&gt;

&lt;!-- Form --&gt;
&lt;el-button type=&quot;text&quot; @click=&quot;dialogFormVisible = true&quot;&gt;打开嵌套表单的 Dialog&lt;/el-button&gt;

&lt;el-dialog title=&quot;收货地址&quot; :visible.sync=&quot;dialogFormVisible&quot;&gt;
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
  &lt;div slot=&quot;footer&quot; class=&quot;dialog-footer&quot;&gt;
    &lt;el-button @click=&quot;dialogFormVisible = false&quot;&gt;取 消&lt;/el-button&gt;
    &lt;el-button type=&quot;primary&quot; @click=&quot;dialogFormVisible = false&quot;&gt;确 定&lt;/el-button&gt;
  &lt;/div&gt;
&lt;/el-dialog&gt;

&lt;script&gt;
  export default {
    data() {
      return {
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
        dialogTableVisible: false,
        dialogFormVisible: false,
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
        formLabelWidth: '120px'
      };
    }
  };
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="qian-tao-de-dialog"><a class="header-anchor" href="#qian-tao-de-dialog">¶</a> 嵌套的 Dialog</h3>
<p>如果需要在一个 Dialog 内部嵌套另一个 Dialog，需要使用 <code>append-to-body</code> 属性。</p>
<demo-block>
        <div><p>正常情况下，我们不建议使用嵌套的 Dialog，如果需要在页面上同时显示多个 Dialog，可以将它们平级放置。对于确实需要嵌套 Dialog 的场景，我们提供了<code>append-to-body</code>属性。将内层 Dialog 的该属性设置为 true，它就会插入至 body 元素上，从而保证内外层 Dialog 和遮罩层级关系的正确。</p>
</div>
        <!--element-demo: <template>
  <el-button type="text" @click="outerVisible = true">点击打开外层 Dialog</el-button>
  
  <el-dialog title="外层 Dialog" :visible.sync="outerVisible">
    <el-dialog
      width="30%"
      title="内层 Dialog"
      :visible.sync="innerVisible"
      append-to-body>
    </el-dialog>
    <div slot="footer" class="dialog-footer">
      <el-button @click="outerVisible = false">取 消</el-button>
      <el-button type="primary" @click="innerVisible = true">打开内层 Dialog</el-button>
    </div>
  </el-dialog>
</template>

<script>
  export default {
    data() {
      return {
        outerVisible: false,
        innerVisible: false
      };
    }
  }
</script>
:element-demo-->
        <template slot="highlight"><pre v-pre><code class="html">&lt;template&gt;
  &lt;el-button type=&quot;text&quot; @click=&quot;outerVisible = true&quot;&gt;点击打开外层 Dialog&lt;/el-button&gt;
  
  &lt;el-dialog title=&quot;外层 Dialog&quot; :visible.sync=&quot;outerVisible&quot;&gt;
    &lt;el-dialog
      width=&quot;30%&quot;
      title=&quot;内层 Dialog&quot;
      :visible.sync=&quot;innerVisible&quot;
      append-to-body&gt;
    &lt;/el-dialog&gt;
    &lt;div slot=&quot;footer&quot; class=&quot;dialog-footer&quot;&gt;
      &lt;el-button @click=&quot;outerVisible = false&quot;&gt;取 消&lt;/el-button&gt;
      &lt;el-button type=&quot;primary&quot; @click=&quot;innerVisible = true&quot;&gt;打开内层 Dialog&lt;/el-button&gt;
    &lt;/div&gt;
  &lt;/el-dialog&gt;
&lt;/template&gt;

&lt;script&gt;
  export default {
    data() {
      return {
        outerVisible: false,
        innerVisible: false
      };
    }
  }
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="ju-zhong-bu-ju"><a class="header-anchor" href="#ju-zhong-bu-ju">¶</a> 居中布局</h3>
<p>标题和底部可水平居中</p>
<demo-block>
        <div><p>将<code>center</code>设置为<code>true</code>即可使标题和底部居中。<code>center</code>仅影响标题和底部区域。Dialog 的内容是任意的，在一些情况下，内容并不适合居中布局。如果需要内容也水平居中，请自行为其添加 CSS。</p>
</div>
        <!--element-demo: <el-button type="text" @click="centerDialogVisible = true">点击打开 Dialog</el-button>

<el-dialog
  title="提示"
  :visible.sync="centerDialogVisible"
  width="30%"
  center>
  <span>需要注意的是内容是默认不居中的</span>
  <span slot="footer" class="dialog-footer">
    <el-button @click="centerDialogVisible = false">取 消</el-button>
    <el-button type="primary" @click="centerDialogVisible = false">确 定</el-button>
  </span>
</el-dialog>

<script>
  export default {
    data() {
      return {
        centerDialogVisible: false
      };
    }
  };
</script>
:element-demo-->
        <template slot="highlight"><pre v-pre><code class="html">&lt;el-button type=&quot;text&quot; @click=&quot;centerDialogVisible = true&quot;&gt;点击打开 Dialog&lt;/el-button&gt;

&lt;el-dialog
  title=&quot;提示&quot;
  :visible.sync=&quot;centerDialogVisible&quot;
  width=&quot;30%&quot;
  center&gt;
  &lt;span&gt;需要注意的是内容是默认不居中的&lt;/span&gt;
  &lt;span slot=&quot;footer&quot; class=&quot;dialog-footer&quot;&gt;
    &lt;el-button @click=&quot;centerDialogVisible = false&quot;&gt;取 消&lt;/el-button&gt;
    &lt;el-button type=&quot;primary&quot; @click=&quot;centerDialogVisible = false&quot;&gt;确 定&lt;/el-button&gt;
  &lt;/span&gt;
&lt;/el-dialog&gt;

&lt;script&gt;
  export default {
    data() {
      return {
        centerDialogVisible: false
      };
    }
  };
&lt;/script&gt;
</code></pre></template></demo-block><div class="tip">
<p>Dialog 的内容是懒渲染的，即在第一次被打开之前，传入的默认 slot 不会被渲染到 DOM 上。因此，如果需要执行 DOM 操作，或通过 <code>ref</code> 获取相应组件，请在 <code>open</code> 事件回调中进行。</p>
</div>
<div class="tip">
<p>如果 <code>visible</code> 属性绑定的变量位于 Vuex 的 store 内，那么 <code>.sync</code> 不会正常工作。此时需要去除 <code>.sync</code> 修饰符，同时监听 Dialog 的 <code>open</code> 和 <code>close</code> 事件，在事件回调中执行 Vuex 中对应的 mutation 更新 <code>visible</code> 属性绑定的变量的值。</p>
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
<td>visible</td>
<td>是否显示 Dialog，支持 .sync 修饰符</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>title</td>
<td>Dialog 的标题，也可通过具名 slot （见下表）传入</td>
<td>string</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>width</td>
<td>Dialog 的宽度</td>
<td>string</td>
<td>—</td>
<td>50%</td>
</tr>
<tr>
<td>fullscreen</td>
<td>是否为全屏 Dialog</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>top</td>
<td>Dialog CSS 中的 margin-top 值</td>
<td>string</td>
<td>—</td>
<td>15vh</td>
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
<td>遮罩层是否插入至 body 元素上，若为 false，则遮罩层会插入至 Dialog 的父元素上</td>
<td>boolean</td>
<td>—</td>
<td>true</td>
</tr>
<tr>
<td>append-to-body</td>
<td>Dialog 自身是否插入至 body 元素上。嵌套的 Dialog 必须指定该属性并赋值为 true</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>lock-scroll</td>
<td>是否在 Dialog 出现时将 body 滚动锁定</td>
<td>boolean</td>
<td>—</td>
<td>true</td>
</tr>
<tr>
<td>custom-class</td>
<td>Dialog 的自定义类名</td>
<td>string</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>close-on-click-modal</td>
<td>是否可以通过点击 modal 关闭 Dialog</td>
<td>boolean</td>
<td>—</td>
<td>true</td>
</tr>
<tr>
<td>close-on-press-escape</td>
<td>是否可以通过按下 ESC 关闭 Dialog</td>
<td>boolean</td>
<td>—</td>
<td>true</td>
</tr>
<tr>
<td>show-close</td>
<td>是否显示关闭按钮</td>
<td>boolean</td>
<td>—</td>
<td>true</td>
</tr>
<tr>
<td>before-close</td>
<td>关闭前的回调，会暂停 Dialog 的关闭</td>
<td>function(done)，done 用于关闭 Dialog</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>center</td>
<td>是否对头部和底部采用居中布局</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>destroy-on-close</td>
<td>关闭时销毁 Dialog 中的元素</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
</tbody>
</table>
<h3 id="slot"><a class="header-anchor" href="#slot">¶</a> Slot</h3>
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
<td>Dialog 的内容</td>
</tr>
<tr>
<td>title</td>
<td>Dialog 标题区的内容</td>
</tr>
<tr>
<td>footer</td>
<td>Dialog 按钮操作区的内容</td>
</tr>
</tbody>
</table>
<h3 id="events"><a class="header-anchor" href="#events">¶</a> Events</h3>
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
<td>Dialog 打开的回调</td>
<td>—</td>
</tr>
<tr>
<td>opened</td>
<td>Dialog 打开动画结束时的回调</td>
<td>—</td>
</tr>
<tr>
<td>close</td>
<td>Dialog 关闭的回调</td>
<td>—</td>
</tr>
<tr>
<td>closed</td>
<td>Dialog 关闭动画结束时的回调</td>
<td>—</td>
</tr>
</tbody>
</table>
