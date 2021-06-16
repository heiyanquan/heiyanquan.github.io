<h2 id="dialog"><a class="header-anchor" href="#dialog">¶</a> Dialog</h2>
<p>Informs users while preserving the current page state.</p>
<h3 id="basic-usage"><a class="header-anchor" href="#basic-usage">¶</a> Basic usage</h3>
<p>Dialog pops up a dialog box, and it's quite customizable.</p>
<demo-block>
        <div><p>Set the <code>visible</code> attribute with a <code>Boolean</code>, and Dialog shows when it is <code>true</code>. The Dialog has two parts: <code>body</code> and <code>footer</code>, and the latter requires a <code>slot</code> named <code>footer</code>. The optional <code>title</code> attribute (empty by default) is for defining a title. Finally, this example demonstrates how <code>before-close</code> is used.</p>
</div>
        <!--element-demo: <el-button type="text" @click="dialogVisible = true">click to open the Dialog</el-button>

<el-dialog
  title="Tips"
  :visible.sync="dialogVisible"
  width="30%"
  :before-close="handleClose">
  <span>This is a message</span>
  <span slot="footer" class="dialog-footer">
    <el-button @click="dialogVisible = false">Cancel</el-button>
    <el-button type="primary" @click="dialogVisible = false">Confirm</el-button>
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
        this.$confirm('Are you sure to close this dialog?')
          .then(_ => {
            done();
          })
          .catch(_ => {});
      }
    }
  };
</script>
:element-demo-->
        <template slot="highlight"><pre v-pre><code class="html">&lt;el-button type=&quot;text&quot; @click=&quot;dialogVisible = true&quot;&gt;click to open the Dialog&lt;/el-button&gt;

&lt;el-dialog
  title=&quot;Tips&quot;
  :visible.sync=&quot;dialogVisible&quot;
  width=&quot;30%&quot;
  :before-close=&quot;handleClose&quot;&gt;
  &lt;span&gt;This is a message&lt;/span&gt;
  &lt;span slot=&quot;footer&quot; class=&quot;dialog-footer&quot;&gt;
    &lt;el-button @click=&quot;dialogVisible = false&quot;&gt;Cancel&lt;/el-button&gt;
    &lt;el-button type=&quot;primary&quot; @click=&quot;dialogVisible = false&quot;&gt;Confirm&lt;/el-button&gt;
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
        this.$confirm('Are you sure to close this dialog?')
          .then(_ =&gt; {
            done();
          })
          .catch(_ =&gt; {});
      }
    }
  };
&lt;/script&gt;
</code></pre></template></demo-block><div class="tip">
<p><code>before-close</code> only works when user clicks the close icon or the backdrop. If you have buttons that close the Dialog in the <code>footer</code> named slot, you can add what you would do with <code>before-close</code> in the buttons' click event handler.</p>
</div>
<h3 id="customizations"><a class="header-anchor" href="#customizations">¶</a> Customizations</h3>
<p>The content of Dialog can be anything, even a table or a form. This example shows how to use Element Table and Form with Dialog。</p>
<demo-block>
        
        <!--element-demo: <!-- Table -->
<el-button type="text" @click="dialogTableVisible = true">open a Table nested Dialog</el-button>

<el-dialog title="Shipping address" :visible.sync="dialogTableVisible">
  <el-table :data="gridData">
    <el-table-column property="date" label="Date" width="150"></el-table-column>
    <el-table-column property="name" label="Name" width="200"></el-table-column>
    <el-table-column property="address" label="Address"></el-table-column>
  </el-table>
</el-dialog>

<!-- Form -->
<el-button type="text" @click="dialogFormVisible = true">open a Form nested Dialog</el-button>

<el-dialog title="Shipping address" :visible.sync="dialogFormVisible">
  <el-form :model="form">
    <el-form-item label="Promotion name" :label-width="formLabelWidth">
      <el-input v-model="form.name" autocomplete="off"></el-input>
    </el-form-item>
    <el-form-item label="Zones" :label-width="formLabelWidth">
      <el-select v-model="form.region" placeholder="Please select a zone">
        <el-option label="Zone No.1" value="shanghai"></el-option>
        <el-option label="Zone No.2" value="beijing"></el-option>
      </el-select>
    </el-form-item>
  </el-form>
  <span slot="footer" class="dialog-footer">
    <el-button @click="dialogFormVisible = false">Cancel</el-button>
    <el-button type="primary" @click="dialogFormVisible = false">Confirm</el-button>
  </span>
</el-dialog>

<script>
  export default {
    data() {
      return {
        gridData: [{
          date: '2016-05-02',
          name: 'John Smith',
          address: 'No.1518,  Jinshajiang Road, Putuo District'
        }, {
          date: '2016-05-04',
          name: 'John Smith',
          address: 'No.1518,  Jinshajiang Road, Putuo District'
        }, {
          date: '2016-05-01',
          name: 'John Smith',
          address: 'No.1518,  Jinshajiang Road, Putuo District'
        }, {
          date: '2016-05-03',
          name: 'John Smith',
          address: 'No.1518,  Jinshajiang Road, Putuo District'
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
&lt;el-button type=&quot;text&quot; @click=&quot;dialogTableVisible = true&quot;&gt;open a Table nested Dialog&lt;/el-button&gt;

&lt;el-dialog title=&quot;Shipping address&quot; :visible.sync=&quot;dialogTableVisible&quot;&gt;
  &lt;el-table :data=&quot;gridData&quot;&gt;
    &lt;el-table-column property=&quot;date&quot; label=&quot;Date&quot; width=&quot;150&quot;&gt;&lt;/el-table-column&gt;
    &lt;el-table-column property=&quot;name&quot; label=&quot;Name&quot; width=&quot;200&quot;&gt;&lt;/el-table-column&gt;
    &lt;el-table-column property=&quot;address&quot; label=&quot;Address&quot;&gt;&lt;/el-table-column&gt;
  &lt;/el-table&gt;
&lt;/el-dialog&gt;

&lt;!-- Form --&gt;
&lt;el-button type=&quot;text&quot; @click=&quot;dialogFormVisible = true&quot;&gt;open a Form nested Dialog&lt;/el-button&gt;

&lt;el-dialog title=&quot;Shipping address&quot; :visible.sync=&quot;dialogFormVisible&quot;&gt;
  &lt;el-form :model=&quot;form&quot;&gt;
    &lt;el-form-item label=&quot;Promotion name&quot; :label-width=&quot;formLabelWidth&quot;&gt;
      &lt;el-input v-model=&quot;form.name&quot; autocomplete=&quot;off&quot;&gt;&lt;/el-input&gt;
    &lt;/el-form-item&gt;
    &lt;el-form-item label=&quot;Zones&quot; :label-width=&quot;formLabelWidth&quot;&gt;
      &lt;el-select v-model=&quot;form.region&quot; placeholder=&quot;Please select a zone&quot;&gt;
        &lt;el-option label=&quot;Zone No.1&quot; value=&quot;shanghai&quot;&gt;&lt;/el-option&gt;
        &lt;el-option label=&quot;Zone No.2&quot; value=&quot;beijing&quot;&gt;&lt;/el-option&gt;
      &lt;/el-select&gt;
    &lt;/el-form-item&gt;
  &lt;/el-form&gt;
  &lt;span slot=&quot;footer&quot; class=&quot;dialog-footer&quot;&gt;
    &lt;el-button @click=&quot;dialogFormVisible = false&quot;&gt;Cancel&lt;/el-button&gt;
    &lt;el-button type=&quot;primary&quot; @click=&quot;dialogFormVisible = false&quot;&gt;Confirm&lt;/el-button&gt;
  &lt;/span&gt;
&lt;/el-dialog&gt;

&lt;script&gt;
  export default {
    data() {
      return {
        gridData: [{
          date: '2016-05-02',
          name: 'John Smith',
          address: 'No.1518,  Jinshajiang Road, Putuo District'
        }, {
          date: '2016-05-04',
          name: 'John Smith',
          address: 'No.1518,  Jinshajiang Road, Putuo District'
        }, {
          date: '2016-05-01',
          name: 'John Smith',
          address: 'No.1518,  Jinshajiang Road, Putuo District'
        }, {
          date: '2016-05-03',
          name: 'John Smith',
          address: 'No.1518,  Jinshajiang Road, Putuo District'
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
</code></pre></template></demo-block><h3 id="nested-dialog"><a class="header-anchor" href="#nested-dialog">¶</a> Nested Dialog</h3>
<p>If a Dialog is nested in another Dialog, <code>append-to-body</code> is required.</p>
<demo-block>
        <div><p>Normally we do not recommend using nested Dialog. If you need multiple Dialogs rendered on the page, you can simply flat them so that they're siblings to each other. If you must nest a Dialog inside another Dialog, set <code>append-to-body</code> of the nested Dialog to true, and it will append to body instead of its parent node, so both Dialogs can be correctly rendered.</p>
</div>
        <!--element-demo: <template>
  <el-button type="text" @click="outerVisible = true">open the outer Dialog</el-button>
  
  <el-dialog title="Outer Dialog" :visible.sync="outerVisible">
    <el-dialog
        width="30%"
        title="Inner Dialog"
        :visible.sync="innerVisible"
        append-to-body>
    </el-dialog>
    <div slot="footer" class="dialog-footer">
      <el-button @click="outerVisible = false">Cancel</el-button>
      <el-button type="primary" @click="innerVisible = true">open the inner Dialog</el-button>
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
  &lt;el-button type=&quot;text&quot; @click=&quot;outerVisible = true&quot;&gt;open the outer Dialog&lt;/el-button&gt;
  
  &lt;el-dialog title=&quot;Outer Dialog&quot; :visible.sync=&quot;outerVisible&quot;&gt;
    &lt;el-dialog
        width=&quot;30%&quot;
        title=&quot;Inner Dialog&quot;
        :visible.sync=&quot;innerVisible&quot;
        append-to-body&gt;
    &lt;/el-dialog&gt;
    &lt;div slot=&quot;footer&quot; class=&quot;dialog-footer&quot;&gt;
      &lt;el-button @click=&quot;outerVisible = false&quot;&gt;Cancel&lt;/el-button&gt;
      &lt;el-button type=&quot;primary&quot; @click=&quot;innerVisible = true&quot;&gt;open the inner Dialog&lt;/el-button&gt;
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
</code></pre></template></demo-block><h3 id="centered-content"><a class="header-anchor" href="#centered-content">¶</a> Centered content</h3>
<p>Dialog's content can be centered.</p>
<demo-block>
        <div><p>Setting <code>center</code> to <code>true</code> will center dialog's header and footer horizontally. <code>center</code> only affects Dialog's header and footer. The body of Dialog can be anything, so sometimes it may not look good when centered. You need to write some CSS if you wish to center the body as well.</p>
</div>
        <!--element-demo: <el-button type="text" @click="centerDialogVisible = true">Click to open the Dialog</el-button>

<el-dialog
  title="Warning"
  :visible.sync="centerDialogVisible"
  width="30%"
  center>
  <span>It should be noted that the content will not be aligned in center by default</span>
  <span slot="footer" class="dialog-footer">
    <el-button @click="centerDialogVisible = false">Cancel</el-button>
    <el-button type="primary" @click="centerDialogVisible = false">Confirm</el-button>
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
        <template slot="highlight"><pre v-pre><code class="html">&lt;el-button type=&quot;text&quot; @click=&quot;centerDialogVisible = true&quot;&gt;Click to open the Dialog&lt;/el-button&gt;

&lt;el-dialog
  title=&quot;Warning&quot;
  :visible.sync=&quot;centerDialogVisible&quot;
  width=&quot;30%&quot;
  center&gt;
  &lt;span&gt;It should be noted that the content will not be aligned in center by default&lt;/span&gt;
  &lt;span slot=&quot;footer&quot; class=&quot;dialog-footer&quot;&gt;
    &lt;el-button @click=&quot;centerDialogVisible = false&quot;&gt;Cancel&lt;/el-button&gt;
    &lt;el-button type=&quot;primary&quot; @click=&quot;centerDialogVisible = false&quot;&gt;Confirm&lt;/el-button&gt;
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
<p>The content of Dialog is lazily rendered, which means the default slot is not rendered onto the DOM until it is firstly opened. Therefore, if you need to perform a DOM manipulation or access a component using <code>ref</code>, do it in the <code>open</code> event callback.</p>
</div>
<div class="tip">
<p>If the variable bound to <code>visible</code> is managed in Vuex store, the <code>.sync</code> can not work properly. In this case, please remove the <code>.sync</code> modifier, listen to <code>open</code> and <code>close</code> events of Dialog, and commit Vuex mutations to update the value of that variable in the event handlers.</p>
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
<td>visible</td>
<td>visibility of Dialog, supports the .sync modifier</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>title</td>
<td>title of Dialog. Can also be passed with a named slot (see the following table)</td>
<td>string</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>width</td>
<td>width of Dialog</td>
<td>string</td>
<td>—</td>
<td>50%</td>
</tr>
<tr>
<td>fullscreen</td>
<td>whether the Dialog takes up full screen</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>top</td>
<td>value for <code>margin-top</code> of Dialog CSS</td>
<td>string</td>
<td>—</td>
<td>15vh</td>
</tr>
<tr>
<td>modal</td>
<td>whether a mask is displayed</td>
<td>boolean</td>
<td>—</td>
<td>true</td>
</tr>
<tr>
<td>modal-append-to-body</td>
<td>whether to append modal to body element. If false, the modal will be appended to Dialog's parent element</td>
<td>boolean</td>
<td>—</td>
<td>true</td>
</tr>
<tr>
<td>append-to-body</td>
<td>whether to append Dialog itself to body. A nested Dialog should have this attribute set to <code>true</code></td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>lock-scroll</td>
<td>whether scroll of body is disabled while Dialog is displayed</td>
<td>boolean</td>
<td>—</td>
<td>true</td>
</tr>
<tr>
<td>custom-class</td>
<td>custom class names for Dialog</td>
<td>string</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>close-on-click-modal</td>
<td>whether the Dialog can be closed by clicking the mask</td>
<td>boolean</td>
<td>—</td>
<td>true</td>
</tr>
<tr>
<td>close-on-press-escape</td>
<td>whether the Dialog can be closed by pressing ESC</td>
<td>boolean</td>
<td>—</td>
<td>true</td>
</tr>
<tr>
<td>show-close</td>
<td>whether to show a close button</td>
<td>boolean</td>
<td>—</td>
<td>true</td>
</tr>
<tr>
<td>before-close</td>
<td>callback before Dialog closes, and it will prevent Dialog from closing</td>
<td>function(done)，done is used to close the Dialog</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>center</td>
<td>whether to align the header and footer in center</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>destroy-on-close</td>
<td>Destroy elements in Dialog when closed</td>
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
<th>Name</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>—</td>
<td>content of Dialog</td>
</tr>
<tr>
<td>title</td>
<td>content of the Dialog title</td>
</tr>
<tr>
<td>footer</td>
<td>content of the Dialog footer</td>
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
<td>open</td>
<td>triggers when the Dialog opens</td>
<td>—</td>
</tr>
<tr>
<td>opened</td>
<td>triggers when the Dialog opening animation ends</td>
<td>—</td>
</tr>
<tr>
<td>close</td>
<td>triggers when the Dialog closes</td>
<td>—</td>
</tr>
<tr>
<td>closed</td>
<td>triggers when the Dialog closing animation ends</td>
<td>—</td>
</tr>
</tbody>
</table>
