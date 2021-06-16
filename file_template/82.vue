<h2 id="message"><a class="header-anchor" href="#message">¶</a> Message</h2>
<p>Used to show feedback after an activity. The difference with Notification is that the latter is often used to show a system level passive notification.</p>
<h3 id="basic-usage"><a class="header-anchor" href="#basic-usage">¶</a> Basic usage</h3>
<p>Displays at the top, and disappears after 3 seconds.</p>
<demo-block>
        <div><p>The setup of Message is very similar to notification, so parts of the options won't be explained in detail here. You can check the options table below combined with notification doc to understand it. Element has registered a <code>$message</code> method for invoking. Message can take a string or a VNode as parameter, and it will be shown as the main body.</p>
</div>
        <template slot="source"><element-demo0 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;template&gt;
  &lt;el-button :plain=&quot;true&quot; @click=&quot;open&quot;&gt;Show message&lt;/el-button&gt;
  &lt;el-button :plain=&quot;true&quot; @click=&quot;openVn&quot;&gt;VNode&lt;/el-button&gt;
&lt;/template&gt;

&lt;script&gt;
  export default {
    methods: {
      open() {
        this.$message('This is a message.');
      },

      openVn() {
        const h = this.$createElement;
        this.$message({
          message: h('p', null, [
            h('span', null, 'Message can be '),
            h('i', { style: 'color: teal' }, 'VNode')
          ])
        });
      }
    }
  }
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="types"><a class="header-anchor" href="#types">¶</a> Types</h3>
<p>Used to show the feedback of Success, Warning, Message and Error activities.</p>
<demo-block>
        <div><p>When you need more customizations, Message component can also take an object as parameter. For example, setting value of <code>type</code> can define different types, and its default is <code>info</code>. In such cases the main body is passed in as the value of <code>message</code>. Also, we have registered methods for different types, so you can directly call it without passing a type like <code>open4</code>.</p>
</div>
        <template slot="source"><element-demo1 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;template&gt;
  &lt;el-button :plain=&quot;true&quot; @click=&quot;open2&quot;&gt;success&lt;/el-button&gt;
  &lt;el-button :plain=&quot;true&quot; @click=&quot;open3&quot;&gt;warning&lt;/el-button&gt;
  &lt;el-button :plain=&quot;true&quot; @click=&quot;open1&quot;&gt;message&lt;/el-button&gt;
  &lt;el-button :plain=&quot;true&quot; @click=&quot;open4&quot;&gt;error&lt;/el-button&gt;
&lt;/template&gt;

&lt;script&gt;
  export default {
    methods: {
      open1() {
        this.$message('This is a message.');
      },
      open2() {
        this.$message({
          message: 'Congrats, this is a success message.',
          type: 'success'
        });
      },

      open3() {
        this.$message({
          message: 'Warning, this is a warning message.',
          type: 'warning'
        });
      },

      open4() {
        this.$message.error('Oops, this is a error message.');
      }
    }
  }
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="closable"><a class="header-anchor" href="#closable">¶</a> Closable</h3>
<p>A close button can be added.</p>
<demo-block>
        <div><p>A default Message cannot be closed manually. If you need a closable message, you can set <code>showClose</code> field. Besides, same as notification, message has a controllable <code>duration</code>. Default duration is 3000 ms, and it won't disappear when set to <code>0</code>.</p>
</div>
        <template slot="source"><element-demo2 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;template&gt;
  &lt;el-button :plain=&quot;true&quot; @click=&quot;open1&quot;&gt;message&lt;/el-button&gt;
  &lt;el-button :plain=&quot;true&quot; @click=&quot;open2&quot;&gt;success&lt;/el-button&gt;
  &lt;el-button :plain=&quot;true&quot; @click=&quot;open3&quot;&gt;warning&lt;/el-button&gt;
  &lt;el-button :plain=&quot;true&quot; @click=&quot;open4&quot;&gt;error&lt;/el-button&gt;
&lt;/template&gt;

&lt;script&gt;
  export default {
    methods: {
      open1() {
        this.$message({
          showClose: true,
          message: 'This is a message.'
        });
      },

      open2() {
        this.$message({
          showClose: true,
          message: 'Congrats, this is a success message.',
          type: 'success'
        });
      },

      open3() {
        this.$message({
          showClose: true,
          message: 'Warning, this is a warning message.',
          type: 'warning'
        });
      },

      open4() {
        this.$message({
          showClose: true,
          message: 'Oops, this is a error message.',
          type: 'error'
        });
      }
    }
  }
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="centered-text"><a class="header-anchor" href="#centered-text">¶</a> Centered text</h3>
<p>Use the <code>center</code> attribute to center the text.</p>
<demo-block>
        
        <template slot="source"><element-demo3 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;template&gt;
  &lt;el-button :plain=&quot;true&quot; @click=&quot;openCenter&quot;&gt;Centered text&lt;/el-button&gt;
&lt;/template&gt;

&lt;script&gt;
  export default {
    methods: {
      openCenter() {
        this.$message({
          message: 'Centered text',
          center: true
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
        <template slot="source"><element-demo4 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;template&gt;
  &lt;el-button :plain=&quot;true&quot; @click=&quot;openHTML&quot;&gt;Use HTML String&lt;/el-button&gt;
&lt;/template&gt;

&lt;script&gt;
  export default {
    methods: {
      openHTML() {
        this.$message({
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
<h3 id="global-method"><a class="header-anchor" href="#global-method">¶</a> Global method</h3>
<p>Element has added a global method <code>$message</code> for Vue.prototype. So in a vue instance you can call <code>Message</code> like what we did in this page.</p>
<h3 id="local-import"><a class="header-anchor" href="#local-import">¶</a> Local import</h3>
<p>Import <code>Message</code>:</p>
<pre><code class="language-javascript">import { Message } from 'element-ui';
</code></pre>
<p>In this case you should call <code>Message(options)</code>. We have also registered methods for different types, e.g. <code>Message.success(options)</code>. You can call <code>Message.closeAll()</code> to manually close all the instances.</p>
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
<td>message</td>
<td>message text</td>
<td>string / VNode</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>type</td>
<td>message type</td>
<td>string</td>
<td>success/warning/info/error</td>
<td>info</td>
</tr>
<tr>
<td>iconClass</td>
<td>custom icon's class, overrides <code>type</code></td>
<td>string</td>
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
<td>customClass</td>
<td>custom class name for Message</td>
<td>string</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>duration</td>
<td>display duration, millisecond. If set to 0, it will not turn off automatically</td>
<td>number</td>
<td>—</td>
<td>3000</td>
</tr>
<tr>
<td>showClose</td>
<td>whether to show a close button</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>center</td>
<td>whether to center the text</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>onClose</td>
<td>callback function when closed with the message instance as the parameter</td>
<td>function</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>offset</td>
<td>set the distance to the top of viewport</td>
<td>number</td>
<td>—</td>
<td>20</td>
</tr>
</tbody>
</table>
<h3 id="methods"><a class="header-anchor" href="#methods">¶</a> Methods</h3>
<p><code>Message</code> and <code>this.$message</code> returns the current Message instance. To manually close the instance, you can call <code>close</code> on it.</p>
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
<td>close the Message</td>
</tr>
</tbody>
</table>
