<h2 id="drawer"><a class="header-anchor" href="#drawer">¶</a> Drawer</h2>
<p>Sometimes, <code>Dialog</code> does not always satisfy our requirements, let's say you have a massive form, or you need space to display something like <code>terms &amp; conditions</code>, <code>Drawer</code> has almost identical API with <code>Dialog</code>, but it introduces different user experience.</p>
<h3 id="basic-usage"><a class="header-anchor" href="#basic-usage">¶</a> Basic Usage</h3>
<p>Callout a temporary drawer, from multiple direction</p>
<demo-block>
        <div><p>You must set <code>visible</code> for <code>Drawer</code> like <code>Dialog</code> does to control the visibility of <code>Drawer</code> itself, it's <code>boolean</code> type. <code>Drawer</code> has to parts: <code>title</code> &amp; <code>body</code>, the <code>title</code> is a named slot, you can also set the title through attribute named <code>title</code>, default to an empty string, the <code>body</code> part is the main area of <code>Drawer</code>, which contains user defined content. When opening, <code>Drawer</code> expand itself from the <strong>right corner to left</strong> which size is <strong>30%</strong> of the browser window by default. You can change that default behavior by setting <code>direction</code> and <code>size</code> attribute. This show case also demonstrated how to use the <code>before-close</code> API, check the Attribute section for more detail</p>
</div>
        <!--element-demo: <el-radio-group v-model="direction">
  <el-radio label="ltr">left to right</el-radio>
  <el-radio label="rtl">right to left</el-radio>
  <el-radio label="ttb">top to bottom</el-radio>
  <el-radio label="btt">bottom to top</el-radio>
</el-radio-group>

<el-button @click="drawer = true" type="primary" style="margin-left: 16px;">
  open
</el-button>

<el-drawer
  title="I am the title"
  :visible.sync="drawer"
  :direction="direction"
  :before-close="handleClose">
  <span>Hi, there!</span>
</el-drawer>

<script>
  export default {
    data() {
      return {
        drawer: false,
        direction: 'rtl',
      };
    },
    methods: {
      handleClose(done) {
        this.$confirm('Are you sure you want to close this?')
          .then(_ => {
            done();
          })
          .catch(_ => {});
      }
    }
  };
</script>
:element-demo-->
        <template slot="highlight"><pre v-pre><code class="html">&lt;el-radio-group v-model=&quot;direction&quot;&gt;
  &lt;el-radio label=&quot;ltr&quot;&gt;left to right&lt;/el-radio&gt;
  &lt;el-radio label=&quot;rtl&quot;&gt;right to left&lt;/el-radio&gt;
  &lt;el-radio label=&quot;ttb&quot;&gt;top to bottom&lt;/el-radio&gt;
  &lt;el-radio label=&quot;btt&quot;&gt;bottom to top&lt;/el-radio&gt;
&lt;/el-radio-group&gt;

&lt;el-button @click=&quot;drawer = true&quot; type=&quot;primary&quot; style=&quot;margin-left: 16px;&quot;&gt;
  open
&lt;/el-button&gt;

&lt;el-drawer
  title=&quot;I am the title&quot;
  :visible.sync=&quot;drawer&quot;
  :direction=&quot;direction&quot;
  :before-close=&quot;handleClose&quot;&gt;
  &lt;span&gt;Hi, there!&lt;/span&gt;
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
        this.$confirm('Are you sure you want to close this?')
          .then(_ =&gt; {
            done();
          })
          .catch(_ =&gt; {});
      }
    }
  };
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="no-title"><a class="header-anchor" href="#no-title">¶</a> No Title</h3>
<p>When you no longer need a title, you can remove title from drawer.</p>
<demo-block>
        <div><p>Set the <code>withHeader</code> attribute to <strong>false</strong>, you can remove the title from drawer, thus your drawer can have more space on screen. If you want to be accessible, make sure to set the <code>title</code> attribute.</p>
</div>
        <!--element-demo: <el-button @click="drawer = true" type="primary" style="margin-left: 16px;">
  open
</el-button>

<el-drawer
  title="I am the title"
  :visible.sync="drawer"
  :with-header="false">
  <span>Hi there!</span>
</el-drawer>

<script>
  export default {
    data() {
      return {
        drawer: false,
      };
    }
  };
</script>
:element-demo-->
        <template slot="highlight"><pre v-pre><code class="html">&lt;el-button @click=&quot;drawer = true&quot; type=&quot;primary&quot; style=&quot;margin-left: 16px;&quot;&gt;
  open
&lt;/el-button&gt;

&lt;el-drawer
  title=&quot;I am the title&quot;
  :visible.sync=&quot;drawer&quot;
  :with-header=&quot;false&quot;&gt;
  &lt;span&gt;Hi there!&lt;/span&gt;
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
</code></pre></template></demo-block><h3 id="customization-content"><a class="header-anchor" href="#customization-content">¶</a> Customization Content</h3>
<p>Like <code>Dialog</code>, <code>Drawer</code> can do many diverse interaction as you wanted.</p>
<demo-block>
        
        <!--element-demo: <el-button type="text" @click="table = true">Open Drawer with nested table</el-button>
<el-button type="text" @click="dialog = true">Open Drawer with nested form</el-button>
<el-drawer
  title="I have a nested table inside!"
  :visible.sync="table"
  direction="rtl"
  size="50%">
   <el-table :data="gridData">
      <el-table-column property="date" label="Date" width="150"></el-table-column>
      <el-table-column property="name" label="Name" width="200"></el-table-column>
      <el-table-column property="address" label="Address"></el-table-column>
    </el-table>
</el-drawer>

<el-drawer
  title="I have a nested form inside!"
  :before-close="handleClose"
  :visible.sync="dialog"
  direction="ltr"
  custom-class="demo-drawer"
  ref="drawer"
  >
  <div class="demo-drawer__content">
    <el-form :model="form">
      <el-form-item label="Name" :label-width="formLabelWidth">
        <el-input v-model="form.name" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="Area" :label-width="formLabelWidth">
        <el-select v-model="form.region" placeholder="Please select activity area">
          <el-option label="Area1" value="shanghai"></el-option>
          <el-option label="Area2" value="beijing"></el-option>
        </el-select>
      </el-form-item>
    </el-form>
    <div class="demo-drawer__footer">
      <el-button @click="cancelForm">Cancel</el-button>
      <el-button type="primary" @click="$refs.drawer.closeDrawer()" :loading="loading">{{ loading ? 'Submitting ...' : 'Submit' }}</el-button>
    </div>
  </div>
</el-drawer>

<script>
export default {
  data() {
    return {
      table: false,
      dialog: false,
      loading: false,
      gridData: [{
        date: '2016-05-02',
        name: 'Peter Parker',
        address: 'Queens, New York City'
      }, {
        date: '2016-05-04',
        name: 'Peter Parker',
        address: 'Queens, New York City'
      }, {
        date: '2016-05-01',
        name: 'Peter Parker',
        address: 'Queens, New York City'
      }, {
        date: '2016-05-03',
        name: 'Peter Parker',
        address: 'Queens, New York City'
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
      this.$confirm('Do you want to submit?')
        .then(_ => {
          this.loading = true;
          this.timer = setTimeout(() => {
            done();
            // animation takes time
            setTimeout(() => {
              this.loading = false;
            }, 400);
          }, 2000);
        })
        .catch(_ => {});
    },
    cancelForm() {
      this.loading = false;
      this.dialog = false;
      clearTimeout(this.timer);
    }
  }
}
</script>
:element-demo-->
        <template slot="highlight"><pre v-pre><code class="html">&lt;el-button type=&quot;text&quot; @click=&quot;table = true&quot;&gt;Open Drawer with nested table&lt;/el-button&gt;
&lt;el-button type=&quot;text&quot; @click=&quot;dialog = true&quot;&gt;Open Drawer with nested form&lt;/el-button&gt;
&lt;el-drawer
  title=&quot;I have a nested table inside!&quot;
  :visible.sync=&quot;table&quot;
  direction=&quot;rtl&quot;
  size=&quot;50%&quot;&gt;
   &lt;el-table :data=&quot;gridData&quot;&gt;
      &lt;el-table-column property=&quot;date&quot; label=&quot;Date&quot; width=&quot;150&quot;&gt;&lt;/el-table-column&gt;
      &lt;el-table-column property=&quot;name&quot; label=&quot;Name&quot; width=&quot;200&quot;&gt;&lt;/el-table-column&gt;
      &lt;el-table-column property=&quot;address&quot; label=&quot;Address&quot;&gt;&lt;/el-table-column&gt;
    &lt;/el-table&gt;
&lt;/el-drawer&gt;

&lt;el-drawer
  title=&quot;I have a nested form inside!&quot;
  :before-close=&quot;handleClose&quot;
  :visible.sync=&quot;dialog&quot;
  direction=&quot;ltr&quot;
  custom-class=&quot;demo-drawer&quot;
  ref=&quot;drawer&quot;
  &gt;
  &lt;div class=&quot;demo-drawer__content&quot;&gt;
    &lt;el-form :model=&quot;form&quot;&gt;
      &lt;el-form-item label=&quot;Name&quot; :label-width=&quot;formLabelWidth&quot;&gt;
        &lt;el-input v-model=&quot;form.name&quot; autocomplete=&quot;off&quot;&gt;&lt;/el-input&gt;
      &lt;/el-form-item&gt;
      &lt;el-form-item label=&quot;Area&quot; :label-width=&quot;formLabelWidth&quot;&gt;
        &lt;el-select v-model=&quot;form.region&quot; placeholder=&quot;Please select activity area&quot;&gt;
          &lt;el-option label=&quot;Area1&quot; value=&quot;shanghai&quot;&gt;&lt;/el-option&gt;
          &lt;el-option label=&quot;Area2&quot; value=&quot;beijing&quot;&gt;&lt;/el-option&gt;
        &lt;/el-select&gt;
      &lt;/el-form-item&gt;
    &lt;/el-form&gt;
    &lt;div class=&quot;demo-drawer__footer&quot;&gt;
      &lt;el-button @click=&quot;cancelForm&quot;&gt;Cancel&lt;/el-button&gt;
      &lt;el-button type=&quot;primary&quot; @click=&quot;$refs.drawer.closeDrawer()&quot; :loading=&quot;loading&quot;&gt;{{ loading ? 'Submitting ...' : 'Submit' }}&lt;/el-button&gt;
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
        name: 'Peter Parker',
        address: 'Queens, New York City'
      }, {
        date: '2016-05-04',
        name: 'Peter Parker',
        address: 'Queens, New York City'
      }, {
        date: '2016-05-01',
        name: 'Peter Parker',
        address: 'Queens, New York City'
      }, {
        date: '2016-05-03',
        name: 'Peter Parker',
        address: 'Queens, New York City'
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
      this.$confirm('Do you want to submit?')
        .then(_ =&gt; {
          this.loading = true;
          this.timer = setTimeout(() =&gt; {
            done();
            // animation takes time
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
</code></pre></template></demo-block><h3 id="nested-drawer"><a class="header-anchor" href="#nested-drawer">¶</a> Nested Drawer</h3>
<p>You can also have multiple layer of <code>Drawer</code> just like <code>Dialog</code>.</p>
<demo-block>
        <div><p>If you need multiple Drawer in different layer, you must set the <code>append-to-body</code> attribute to <strong>true</strong></p>
</div>
        <!--element-demo: 
<el-button @click="drawer = true" type="primary" style="margin-left: 16px;">
  open
</el-button>

<el-drawer
  title="I'm outer Drawer"
  :visible.sync="drawer"
  size="50%">
  <div>
   <el-button @click="innerDrawer = true">Click me!</el-button>
   <el-drawer
     title="I'm inner Drawer"
     :append-to-body="true"
     :before-close="handleClose"
     :visible.sync="innerDrawer">
     <p>_(:зゝ∠)_</p>
   </el-drawer>
  </div>
</el-drawer>

<script>
  export default {
    data() {
      return {
        drawer: false,
        innerDrawer: false,
      };
    },
    methods: {
      handleClose(done) {
        this.$confirm('You still have unsaved data, proceed?')
          .then(_ => {
            done();
          })
          .catch(_ => {});
      }
    }
  };
</script>

:element-demo-->
        <template slot="highlight"><pre v-pre><code class="html">
&lt;el-button @click=&quot;drawer = true&quot; type=&quot;primary&quot; style=&quot;margin-left: 16px;&quot;&gt;
  open
&lt;/el-button&gt;

&lt;el-drawer
  title=&quot;I'm outer Drawer&quot;
  :visible.sync=&quot;drawer&quot;
  size=&quot;50%&quot;&gt;
  &lt;div&gt;
   &lt;el-button @click=&quot;innerDrawer = true&quot;&gt;Click me!&lt;/el-button&gt;
   &lt;el-drawer
     title=&quot;I'm inner Drawer&quot;
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
        this.$confirm('You still have unsaved data, proceed?')
          .then(_ =&gt; {
            done();
          })
          .catch(_ =&gt; {});
      }
    }
  };
&lt;/script&gt;

</code></pre></template></demo-block><div class="tip">
<p>The content inside Drawer should be lazy rendered, which means that the content inside Drawer will not impact the initial render performance, therefore any DOM operation should be performed through <code>ref</code> or after <code>open</code> event emitted.</p>
</div>
<div class="tip">
<p>Drawer provides an API called <code>destroyOnClose</code>, which is a flag variable that indicates should destroy the children content inside Drawer after Drawer was closed. You can use this API when you need your <code>mounted</code> life cycle to be called every time the Drawer opens.</p>
</div>
<div class="tip">
<p>If the variable bound to <code>visible</code> is managed in Vuex store, the <code>.sync</code> can not work properly. In this case, please remove the <code>.sync</code> modifier, listen to <code>open</code> and <code>close</code> events of Dialog, and commit Vuex mutations to update the value of that variable in the event handlers.</p>
</div>
<h3 id="drawer-attributes"><a class="header-anchor" href="#drawer-attributes">¶</a> Drawer Attributes</h3>
<table>
<thead>
<tr>
<th>Parameter</th>
<th>Description</th>
<th>Type</th>
<th>Acceptable Values</th>
<th>Defaults</th>
</tr>
</thead>
<tbody>
<tr>
<td>append-to-body</td>
<td>Controls should Drawer be inserted to DocumentBody Element, nested Drawer must assign this param to <strong>true</strong></td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>before-close</td>
<td>If set, closing procedure will be halted</td>
<td>function(done), done is function type that accepts a boolean as parameter, calling done with true or without parameter will abort the close procedure</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>close-on-press-escape</td>
<td>Indicates whether Drawer can be closed by pressing ESC</td>
<td>boolean</td>
<td>—</td>
<td>true</td>
</tr>
<tr>
<td>custom-class</td>
<td>Extra class names for Drawer</td>
<td>string</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>destroy-on-close</td>
<td>Indicates whether children should be destroyed after Drawer closed</td>
<td>boolean</td>
<td>-</td>
<td>false</td>
</tr>
<tr>
<td>modal</td>
<td>Should show shadowing layer</td>
<td>boolean</td>
<td>—</td>
<td>true</td>
</tr>
<tr>
<td>modal-append-to-body</td>
<td>Indicates should shadowing layer be insert into DocumentBody element</td>
<td>boolean</td>
<td>—</td>
<td>true</td>
</tr>
<tr>
<td>direction</td>
<td>Drawer's opening direction</td>
<td>Direction</td>
<td>rtl / ltr / ttb / btt</td>
<td>rtl</td>
</tr>
<tr>
<td>show-close</td>
<td>Should show close button at the top right of Drawer</td>
<td>boolean</td>
<td>—</td>
<td>true</td>
</tr>
<tr>
<td>size</td>
<td>Drawer's size, if Drawer is horizontal mode, it effects the width property, otherwise it effects the height property, when size is <code>number</code> type, it describes the size by unit of pixels; when size is <code>string</code> type, it should be used with <code>x%</code> notation, other wise it will be interpreted to pixel unit</td>
<td>number / string</td>
<td>-</td>
<td>'30%'</td>
</tr>
<tr>
<td>title</td>
<td>Drawer's title, can also be set by named slot, detailed descriptions can be found in the slot form</td>
<td>string</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>visible</td>
<td>Should Drawer be displayed, also support the <code>.sync</code> notation</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>wrapperClosable</td>
<td>Indicates whether user can close Drawer by clicking the shadowing layer.</td>
<td>boolean</td>
<td>-</td>
<td>true</td>
</tr>
<tr>
<td>withHeader</td>
<td>Flag that controls the header section's existance, default to true, when withHeader set to false, both <code>title attribute</code> and <code>title slot</code> won't work</td>
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
<th>Name</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>—</td>
<td>Drawer's Content</td>
</tr>
<tr>
<td>title</td>
<td>Drawer Title Section</td>
</tr>
</tbody>
</table>
<h3 id="drawer-methods"><a class="header-anchor" href="#drawer-methods">¶</a> Drawer Methods</h3>
<table>
<thead>
<tr>
<th>Name</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>closeDrawer</td>
<td>In order to close Drawer, this method will call <code>before-close</code>.</td>
</tr>
</tbody>
</table>
<h3 id="drawer-events"><a class="header-anchor" href="#drawer-events">¶</a> Drawer Events</h3>
<table>
<thead>
<tr>
<th>Event Name</th>
<th>Description</th>
<th>Parameter</th>
</tr>
</thead>
<tbody>
<tr>
<td>open</td>
<td>Triggered before Drawer opening animation begins</td>
<td>—</td>
</tr>
<tr>
<td>opened</td>
<td>Triggered after Drawer opening animation ended</td>
<td>—</td>
</tr>
<tr>
<td>close</td>
<td>Triggered before Drawer closing animation begins</td>
<td>—</td>
</tr>
<tr>
<td>closed</td>
<td>Triggered after Drawer closing animation ended</td>
<td>—</td>
</tr>
</tbody>
</table>
