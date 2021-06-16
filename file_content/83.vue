<h2 id="notification"><a class="header-anchor" href="#notification">¶</a> Notification</h2>
<p>Displays a global notification message at a corner of the page.</p>
<h3 id="basic-usage"><a class="header-anchor" href="#basic-usage">¶</a> Basic usage</h3>
<demo-block>
        <div><p>Element has registered the <code>$notify</code> method and it receives an object as its parameter. In the simplest case, you can set the <code>title</code> field and the<code>message</code> field for the title and body of the notification. By default, the notification automatically closes after 4500ms, but by setting <code>duration</code> you can control its duration. Specifically, if set to <code>0</code>, it will not close automatically. Note that <code>duration</code> receives a <code>Number</code> in milliseconds.</p>
</div>
        <!--element-demo: <template>
  <el-button
    plain
    @click="open1">
    Closes automatically
  </el-button>
  <el-button
    plain
    @click="open2">
    Won't close automatically
    </el-button>
</template>

<script>
  export default {
    methods: {
      open1() {
        const h = this.$createElement;

        this.$notify({
          title: 'Title',
          message: h('i', { style: 'color: teal' }, 'This is a reminder')
        });
      },

      open2() {
        this.$notify({
          title: 'Prompt',
          message: 'This is a message that does not automatically close',
          duration: 0
        });
      }
    }
  }
</script>
:element-demo-->
        <template slot="highlight"><pre v-pre><code class="html">&lt;template&gt;
  &lt;el-button
    plain
    @click=&quot;open1&quot;&gt;
    Closes automatically
  &lt;/el-button&gt;
  &lt;el-button
    plain
    @click=&quot;open2&quot;&gt;
    Won't close automatically
    &lt;/el-button&gt;
&lt;/template&gt;

&lt;script&gt;
  export default {
    methods: {
      open1() {
        const h = this.$createElement;

        this.$notify({
          title: 'Title',
          message: h('i', { style: 'color: teal' }, 'This is a reminder')
        });
      },

      open2() {
        this.$notify({
          title: 'Prompt',
          message: 'This is a message that does not automatically close',
          duration: 0
        });
      }
    }
  }
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="with-types"><a class="header-anchor" href="#with-types">¶</a> With types</h3>
<p>We provide four types: success, warning, info and error.</p>
<demo-block>
        <div><p>Element provides four notification types: <code>success</code>, <code>warning</code>, <code>info</code> and <code>error</code>. They are set by the <code>type</code> field, and other values will be ignored. We also registered methods for these types that can be invoked directly like <code>open3</code> and <code>open4</code> without passing a <code>type</code> field.</p>
</div>
        <!--element-demo: <template>
  <el-button
    plain
    @click="open1">
    Success
  </el-button>
  <el-button
    plain
    @click="open2">
    Warning
  </el-button>
  <el-button
    plain
    @click="open3">
    Info
  </el-button>
  <el-button
    plain
    @click="open4">
    Error
  </el-button>
</template>

<script>
  export default {
    methods: {
      open1() {
        this.$notify({
          title: 'Success',
          message: 'This is a success message',
          type: 'success'
        });
      },

      open2() {
        this.$notify({
          title: 'Warning',
          message: 'This is a warning message',
          type: 'warning'
        });
      },

      open3() {
        this.$notify.info({
          title: 'Info',
          message: 'This is an info message'
        });
      },

      open4() {
        this.$notify.error({
          title: 'Error',
          message: 'This is an error message'
        });
      }
    }
  }
</script>
:element-demo-->
        <template slot="highlight"><pre v-pre><code class="html">&lt;template&gt;
  &lt;el-button
    plain
    @click=&quot;open1&quot;&gt;
    Success
  &lt;/el-button&gt;
  &lt;el-button
    plain
    @click=&quot;open2&quot;&gt;
    Warning
  &lt;/el-button&gt;
  &lt;el-button
    plain
    @click=&quot;open3&quot;&gt;
    Info
  &lt;/el-button&gt;
  &lt;el-button
    plain
    @click=&quot;open4&quot;&gt;
    Error
  &lt;/el-button&gt;
&lt;/template&gt;

&lt;script&gt;
  export default {
    methods: {
      open1() {
        this.$notify({
          title: 'Success',
          message: 'This is a success message',
          type: 'success'
        });
      },

      open2() {
        this.$notify({
          title: 'Warning',
          message: 'This is a warning message',
          type: 'warning'
        });
      },

      open3() {
        this.$notify.info({
          title: 'Info',
          message: 'This is an info message'
        });
      },

      open4() {
        this.$notify.error({
          title: 'Error',
          message: 'This is an error message'
        });
      }
    }
  }
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="custom-position"><a class="header-anchor" href="#custom-position">¶</a> Custom position</h3>
<p>Notification can emerge from any corner you like.</p>
<demo-block>
        <div><p>The <code>position</code> attribute defines which corner Notification slides in. It can be <code>top-right</code>, <code>top-left</code>, <code>bottom-right</code> or <code>bottom-left</code>. Defaults to <code>top-right</code>.</p>
</div>
        <!--element-demo: <template>
  <el-button
    plain
    @click="open1">
    Top Right
  </el-button>
  <el-button
    plain
    @click="open2">
    Bottom Right
  </el-button>
  <el-button
    plain
    @click="open3">
    Bottom Left
  </el-button>
  <el-button
    plain
    @click="open4">
    Top Left
  </el-button>
</template>

<script>
  export default {
    methods: {
      open1() {
        this.$notify({
          title: 'Custom Position',
          message: 'I\'m at the top right corner'
        });
      },

      open2() {
        this.$notify({
          title: 'Custom Position',
          message: 'I\'m at the bottom right corner',
          position: 'bottom-right'
        });
      },

      open3() {
        this.$notify({
          title: 'Custom Position',
          message: 'I\'m at the bottom left corner',
          position: 'bottom-left'
        });
      },

      open4() {
        this.$notify({
          title: 'Custom Position',
          message: 'I\'m at the top left corner',
          position: 'top-left'
        });
      }
    }
  }
</script>
:element-demo-->
        <template slot="highlight"><pre v-pre><code class="html">&lt;template&gt;
  &lt;el-button
    plain
    @click=&quot;open1&quot;&gt;
    Top Right
  &lt;/el-button&gt;
  &lt;el-button
    plain
    @click=&quot;open2&quot;&gt;
    Bottom Right
  &lt;/el-button&gt;
  &lt;el-button
    plain
    @click=&quot;open3&quot;&gt;
    Bottom Left
  &lt;/el-button&gt;
  &lt;el-button
    plain
    @click=&quot;open4&quot;&gt;
    Top Left
  &lt;/el-button&gt;
&lt;/template&gt;

&lt;script&gt;
  export default {
    methods: {
      open1() {
        this.$notify({
          title: 'Custom Position',
          message: 'I\'m at the top right corner'
        });
      },

      open2() {
        this.$notify({
          title: 'Custom Position',
          message: 'I\'m at the bottom right corner',
          position: 'bottom-right'
        });
      },

      open3() {
        this.$notify({
          title: 'Custom Position',
          message: 'I\'m at the bottom left corner',
          position: 'bottom-left'
        });
      },

      open4() {
        this.$notify({
          title: 'Custom Position',
          message: 'I\'m at the top left corner',
          position: 'top-left'
        });
      }
    }
  }
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="with-offset"><a class="header-anchor" href="#with-offset">¶</a> With offset</h3>
<p>Customize Notification's offset from the edge of the screen.</p>
<demo-block>
        <div><p>Set the <code>offset</code> attribute to customize Notification's offset from the edge of the screen. Note that every Notification instance of the same moment should have the same offset.</p>
</div>
        <!--element-demo: <template>
  <el-button
    plain
    @click="open">
    Notification with offset
  </el-button>
</template>

<script>
  export default {
    methods: {
      open() {
        this.$notify.success({
          title: 'Success',
          message: 'This is a success message',
          offset: 100
        });
      }
    }
  }
</script>
:element-demo-->
        <template slot="highlight"><pre v-pre><code class="html">&lt;template&gt;
  &lt;el-button
    plain
    @click=&quot;open&quot;&gt;
    Notification with offset
  &lt;/el-button&gt;
&lt;/template&gt;

&lt;script&gt;
  export default {
    methods: {
      open() {
        this.$notify.success({
          title: 'Success',
          message: 'This is a success message',
          offset: 100
        });
      }
    }
  }
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="use-html-string"><a class="header-anchor" href="#use-html-string">¶</a> Use HTML string</h3>
<p><code>message</code> supports HTML string.</p>
<demo-block>
        <div><p>Set <code>dangerouslyUseHTMLString</code> to true and <code>message</code> will be treated as an HTML string.</p>
</div>
        <!--element-demo: <template>
  <el-button
    plain
    @click="open">
    Use HTML String
  </el-button>
</template>

<script>
  export default {
    methods: {
      open() {
        this.$notify({
          title: 'HTML String',
          dangerouslyUseHTMLString: true,
          message: '<strong>This is <i>HTML</i> string</strong>'
        });
      }
    }
  }
</script>
:element-demo-->
        <template slot="highlight"><pre v-pre><code class="html">&lt;template&gt;
  &lt;el-button
    plain
    @click=&quot;open&quot;&gt;
    Use HTML String
  &lt;/el-button&gt;
&lt;/template&gt;

&lt;script&gt;
  export default {
    methods: {
      open() {
        this.$notify({
          title: 'HTML String',
          dangerouslyUseHTMLString: true,
          message: '&lt;strong&gt;This is &lt;i&gt;HTML&lt;/i&gt; string&lt;/strong&gt;'
        });
      }
    }
  }
&lt;/script&gt;
</code></pre></template></demo-block><div class="warning">
<p>Although <code>message</code> property supports HTML strings, dynamically rendering arbitrary HTML on your website can be very dangerous because it can easily lead to <a href="https://en.wikipedia.org/wiki/Cross-site_scripting">XSS attacks</a>. So when <code>dangerouslyUseHTMLString</code> is on, please make sure the content of <code>message</code> is trusted, and <strong>never</strong> assign <code>message</code> to user-provided content.</p>
</div>
<h3 id="hide-close-button"><a class="header-anchor" href="#hide-close-button">¶</a> Hide close button</h3>
<p>It is possible to hide the close button</p>
<demo-block>
        <div><p>Set the <code>showClose</code> attribute to <code>false</code> so the notification cannot be closed by the user.</p>
</div>
        <!--element-demo: <template>
  <el-button
    plain
    @click="open">
    Hide close button
    </el-button>
</template>

<script>
  export default {
    methods: {
      open() {
        this.$notify.success({
          title: 'Info',
          message: 'This is a message without close button',
          showClose: false
        });
      }
    }
  }
</script>
:element-demo-->
        <template slot="highlight"><pre v-pre><code class="html">&lt;template&gt;
  &lt;el-button
    plain
    @click=&quot;open&quot;&gt;
    Hide close button
    &lt;/el-button&gt;
&lt;/template&gt;

&lt;script&gt;
  export default {
    methods: {
      open() {
        this.$notify.success({
          title: 'Info',
          message: 'This is a message without close button',
          showClose: false
        });
      }
    }
  }
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="global-method"><a class="header-anchor" href="#global-method">¶</a> Global method</h3>
<p>Element has added a global method <code>$notify</code> for Vue.prototype. So in a vue instance you can call <code>Notification</code> like what we did in this page.</p>
<h3 id="local-import"><a class="header-anchor" href="#local-import">¶</a> Local import</h3>
<p>Import <code>Notification</code>:</p>
<pre><code class="language-javascript">import { Notification } from 'element-ui';
</code></pre>
<p>In this case you should call <code>Notification(options)</code>. We have also registered methods for different types, e.g. <code>Notification.success(options)</code>. You can call <code>Notification.closeAll()</code> to manually close all the instances.</p>
<h3 id="options"><a class="header-anchor" href="#options">¶</a> Options</h3>
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
<td>message</td>
<td>description text</td>
<td>string/Vue.VNode</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>dangerouslyUseHTMLString</td>
<td>whether <code>message</code> is treated as HTML string</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>type</td>
<td>notification type</td>
<td>string</td>
<td>success/warning/info/error</td>
<td>—</td>
</tr>
<tr>
<td>iconClass</td>
<td>custom icon's class. It will be overridden by <code>type</code></td>
<td>string</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>customClass</td>
<td>custom class name for Notification</td>
<td>string</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>duration</td>
<td>duration before close. It will not automatically close if set 0</td>
<td>number</td>
<td>—</td>
<td>4500</td>
</tr>
<tr>
<td>position</td>
<td>custom position</td>
<td>string</td>
<td>top-right/top-left/bottom-right/bottom-left</td>
<td>top-right</td>
</tr>
<tr>
<td>showClose</td>
<td>whether to show a close button</td>
<td>boolean</td>
<td>—</td>
<td>true</td>
</tr>
<tr>
<td>onClose</td>
<td>callback function when closed</td>
<td>function</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>onClick</td>
<td>callback function when notification clicked</td>
<td>function</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>offset</td>
<td>offset from the top edge of the screen. Every Notification instance of the same moment should have the same offset</td>
<td>number</td>
<td>—</td>
<td>0</td>
</tr>
</tbody>
</table>
<h3 id="methods"><a class="header-anchor" href="#methods">¶</a> Methods</h3>
<p><code>Notification</code> and <code>this.$notify</code> returns the current Notification instance. To manually close the instance, you can call <code>close</code> on it.</p>
<table>
<thead>
<tr>
<th>Method</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>close</td>
<td>close the Notification</td>
</tr>
</tbody>
</table>
