<h2 id="messagebox"><a class="header-anchor" href="#messagebox">¶</a> MessageBox</h2>
<p>A set of modal boxes simulating system message box, mainly for alerting information, confirm operations and prompting messages.</p>
<div class="tip">
<p>By design MessageBox provides simulations of system's <code>alert</code>, <code>confirm</code> and <code>prompt</code>，so it's content should be simple. For more complicated contents, please use Dialog.</p>
</div>
<h3 id="alert"><a class="header-anchor" href="#alert">¶</a> Alert</h3>
<p>Alert interrupts user operation until the user confirms.</p>
<demo-block>
        <div><p>Open an alert by calling the <code>$alert</code> method. It simulates the system's <code>alert</code>, and cannot be closed by pressing ESC or clicking outside the box. In this example, two parameters <code>message</code> and <code>title</code> are received. It is worth mentioning that when the box is closed, it returns a <code>Promise</code> object for further processing. If you are not sure if your target browsers support <code>Promise</code>, you should import a third party polyfill or use callbacks instead like this example.</p>
</div>
        <template slot="source"><element-demo0 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;template&gt;
  &lt;el-button type=&quot;text&quot; @click=&quot;open&quot;&gt;Click to open the Message Box&lt;/el-button&gt;
&lt;/template&gt;

&lt;script&gt;
  export default {
    methods: {
      open() {
        this.$alert('This is a message', 'Title', {
          confirmButtonText: 'OK',
          callback: action =&gt; {
            this.$message({
              type: 'info',
              message: `action: ${ action }`
            });
          }
        });
      }
    }
  }
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="confirm"><a class="header-anchor" href="#confirm">¶</a> Confirm</h3>
<p>Confirm is used to ask users' confirmation.</p>
<demo-block>
        <div><p>Call <code>$confirm</code> method to open a confirm, and it simulates the system's <code>confirm</code>. We can also highly customize Message Box by passing a third attribute <code>options</code> which is a literal object. The attribute <code>type</code> indicates the message type, and it's value can be <code>success</code>, <code>error</code>, <code>info</code> and <code>warning</code>. Note that the second attribute <code>title</code> must be a <code>string</code>, and if it is an <code>object</code>, it will be handled as the attribute <code>options</code>. Here we use <code>Promise</code> to handle further processing.</p>
</div>
        <template slot="source"><element-demo1 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;template&gt;
  &lt;el-button type=&quot;text&quot; @click=&quot;open&quot;&gt;Click to open the Message Box&lt;/el-button&gt;
&lt;/template&gt;

&lt;script&gt;
  export default {
    methods: {
      open() {
        this.$confirm('This will permanently delete the file. Continue?', 'Warning', {
          confirmButtonText: 'OK',
          cancelButtonText: 'Cancel',
          type: 'warning'
        }).then(() =&gt; {
          this.$message({
            type: 'success',
            message: 'Delete completed'
          });
        }).catch(() =&gt; {
          this.$message({
            type: 'info',
            message: 'Delete canceled'
          });          
        });
      }
    }
  }
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="prompt"><a class="header-anchor" href="#prompt">¶</a> Prompt</h3>
<p>Prompt is used when user input is required.</p>
<demo-block>
        <div><p>Call <code>$prompt</code> method to open a prompt, and it simulates the system's <code>prompt</code>. You can use <code>inputPattern</code> parameter to specify your own RegExp pattern. Use <code>inputValidator</code> to specify validation method, and it should return <code>Boolean</code> or <code>String</code>. Returning <code>false</code> or <code>String</code> means the validation has failed, and the string returned will be used as the <code>inputErrorMessage</code>. In addition, you can customize the placeholder of the input box with <code>inputPlaceholder</code> parameter.</p>
</div>
        <template slot="source"><element-demo2 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;template&gt;
  &lt;el-button type=&quot;text&quot; @click=&quot;open&quot;&gt;Click to open Message Box&lt;/el-button&gt;
&lt;/template&gt;

&lt;script&gt;
  export default {
    methods: {
      open() {
        this.$prompt('Please input your e-mail', 'Tip', {
          confirmButtonText: 'OK',
          cancelButtonText: 'Cancel',
          inputPattern: /[\w!#$%&amp;'*+/=?^_`{|}~-]+(?:\.[\w!#$%&amp;'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/,
          inputErrorMessage: 'Invalid Email'
        }).then(({ value }) =&gt; {
          this.$message({
            type: 'success',
            message: 'Your email is:' + value
          });
        }).catch(() =&gt; {
          this.$message({
            type: 'info',
            message: 'Input canceled'
          });       
        });
      }
    }
  }
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="customization"><a class="header-anchor" href="#customization">¶</a> Customization</h3>
<p>Can be customized to show various content.</p>
<demo-block>
        <div><p>The three methods mentioned above are repackagings of the <code>$msgbox</code> method. This example calls <code>$msgbox</code> method directly using the <code>showCancelButton</code> attribute, which is used to indicate if a cancel button is displayed. Besides we can use <code>cancelButtonClass</code> to add a custom style and <code>cancelButtonText</code> to customize the button text (the confirm button also has these fields, and a complete list of fields can be found at the end of this documentation). This example also uses the <code>beforeClose</code> attribute. It is a method and will be triggered when the MessageBox instance will be closed, and its execution will stop the instance from closing. It has three parameters: <code>action</code>, <code>instance</code> and <code>done</code>. Using it enables you to manipulate the instance before it closes, e.g. activating <code>loading</code> for confirm button; you can invoke the <code>done</code> method to close the MessageBox instance (if <code>done</code> is not called inside <code>beforeClose</code>, the instance will not be closed).</p>
</div>
        <template slot="source"><element-demo3 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;template&gt;
  &lt;el-button type=&quot;text&quot; @click=&quot;open&quot;&gt;Click to open Message Box&lt;/el-button&gt;
&lt;/template&gt;

&lt;script&gt;
  export default {
    methods: {
      open() {
        const h = this.$createElement;
        this.$msgbox({
          title: 'Message',
          message: h('p', null, [
            h('span', null, 'Message can be '),
            h('i', { style: 'color: teal' }, 'VNode')
          ]),
          showCancelButton: true,
          confirmButtonText: 'OK',
          cancelButtonText: 'Cancel',
          beforeClose: (action, instance, done) =&gt; {
            if (action === 'confirm') {
              instance.confirmButtonLoading = true;
              instance.confirmButtonText = 'Loading...';
              setTimeout(() =&gt; {
                done();
                setTimeout(() =&gt; {
                  instance.confirmButtonLoading = false;
                }, 300);
              }, 3000);
            } else {
              done();
            }
          }
        }).then(action =&gt; {
          this.$message({
            type: 'info',
            message: 'action: ' + action
          });
        });
      },
    }
  }
&lt;/script&gt;
</code></pre></template></demo-block><div class="tip">
<p>The content of MessageBox can be <code>VNode</code>, allowing us to pass custom components. When opening the MessageBox, Vue compares new <code>VNode</code> with old <code>VNode</code>, then figures out how to efficiently update the UI, so the components may not be completely re-rendered (<a href="https://github.com/ElemeFE/element/issues/8931">#8931</a>). In this case, you can add a unique key to <code>VNode</code> each time MessageBox opens: <a href="https://jsfiddle.net/zhiyang/ezmhq2ef">example</a>.</p>
</div>
<h3 id="use-html-string"><a class="header-anchor" href="#use-html-string">¶</a> Use HTML String</h3>
<p><code>message</code> supports HTML string.</p>
<demo-block>
        <div><p>Set <code>dangerouslyUseHTMLString</code> to true and <code>message</code> will be treated as an HTML string.</p>
</div>
        <template slot="source"><element-demo4 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;template&gt;
  &lt;el-button type=&quot;text&quot; @click=&quot;open&quot;&gt;Click to open Message Box&lt;/el-button&gt;
&lt;/template&gt;

&lt;script&gt;
  export default {
    methods: {
      open() {
        this.$alert('&lt;strong&gt;This is &lt;i&gt;HTML&lt;/i&gt; string&lt;/strong&gt;', 'HTML String', {
          dangerouslyUseHTMLString: true
        });
      }
    }
  }
&lt;/script&gt;
</code></pre></template></demo-block><div class="warning">
<p>Although <code>message</code> property supports HTML strings, dynamically rendering arbitrary HTML on your website can be very dangerous because it can easily lead to <a href="https://en.wikipedia.org/wiki/Cross-site_scripting">XSS attacks</a>. So when <code>dangerouslyUseHTMLString</code> is on, please make sure the content of <code>message</code> is trusted, and <strong>never</strong> assign <code>message</code> to user-provided content.</p>
</div>
<h3 id="distinguishing-cancel-and-close"><a class="header-anchor" href="#distinguishing-cancel-and-close">¶</a> Distinguishing cancel and close</h3>
<p>In some cases, clicking the cancel button and close button may have different meanings.</p>
<demo-block>
        <div><p>By default, the parameters of Promise's reject callback and <code>callback</code> are 'cancel' when the user cancels (clicking the cancel button) and closes (clicking the close button or mask layer, pressing the ESC key) the MessageBox. If <code>distinguishCancelAndClose</code> is set to true, the parameters of the above two operations are 'cancel' and 'close' respectively.</p>
</div>
        <template slot="source"><element-demo5 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;template&gt;
  &lt;el-button type=&quot;text&quot; @click=&quot;open&quot;&gt;Click to open Message Box&lt;/el-button&gt;
&lt;/template&gt;

&lt;script&gt;
  export default {
    methods: {
      open() {
        this.$confirm('You have unsaved changes, save and proceed?', 'Confirm', {
          distinguishCancelAndClose: true,
          confirmButtonText: 'Save',
          cancelButtonText: 'Discard Changes'
        })
          .then(() =&gt; {
            this.$message({
              type: 'info',
              message: 'Changes saved. Proceeding to a new route.'
            });
          })
          .catch(action =&gt; {
            this.$message({
              type: 'info',
              message: action === 'cancel'
                ? 'Changes discarded. Proceeding to a new route.'
                : 'Stay in the current route'
            })
          });
      }
    }
  }
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="centered-content"><a class="header-anchor" href="#centered-content">¶</a> Centered content</h3>
<p>Content of MessageBox can be centered.</p>
<demo-block>
        <div><p>Setting <code>center</code> to <code>true</code> will center the content</p>
</div>
        <template slot="source"><element-demo6 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;template&gt;
  &lt;el-button type=&quot;text&quot; @click=&quot;open&quot;&gt;Click to open Message Box&lt;/el-button&gt;
&lt;/template&gt;

&lt;script&gt;
  export default {
    methods: {
      open() {
        this.$confirm('This will permanently delete the file. Continue?', 'Warning', {
          confirmButtonText: 'OK',
          cancelButtonText: 'Cancel',
          type: 'warning',
          center: true
        }).then(() =&gt; {
          this.$message({
            type: 'success',
            message: 'Delete completed'
          });
        }).catch(() =&gt; {
          this.$message({
            type: 'info',
            message: 'Delete canceled'
          });
        });
      }
    }
  }
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="global-method"><a class="header-anchor" href="#global-method">¶</a> Global method</h3>
<p>If Element is fully imported, it will add the following global methods for Vue.prototype: <code>$msgbox</code>, <code>$alert</code>, <code>$confirm</code> and <code>$prompt</code>. So in a Vue instance you can call <code>MessageBox</code> like what we did in this page. The parameters are:</p>
<ul>
<li><code>$msgbox(options)</code></li>
<li><code>$alert(message, title, options)</code> or <code>$alert(message, options)</code></li>
<li><code>$confirm(message, title, options)</code> or <code>$confirm(message, options)</code></li>
<li><code>$prompt(message, title, options)</code> or <code>$prompt(message, options)</code></li>
</ul>
<h3 id="local-import"><a class="header-anchor" href="#local-import">¶</a> Local import</h3>
<p>If you prefer importing <code>MessageBox</code> on demand:</p>
<pre><code class="language-javascript">import { MessageBox } from 'element-ui';
</code></pre>
<p>The corresponding methods are: <code>MessageBox</code>, <code>MessageBox.alert</code>, <code>MessageBox.confirm</code> and <code>MessageBox.prompt</code>. The parameters are the same as above.</p>
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
<td>title of the MessageBox</td>
<td>string</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>message</td>
<td>content of the MessageBox</td>
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
<td>type</td>
<td>message type, used for icon display</td>
<td>string</td>
<td>success / info / warning / error</td>
<td>—</td>
</tr>
<tr>
<td>iconClass</td>
<td>custom icon's class, overrides <code>type</code></td>
<td>string</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>customClass</td>
<td>custom class name for MessageBox</td>
<td>string</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>callback</td>
<td>MessageBox closing callback if you don't prefer Promise</td>
<td>function(action), where action can be 'confirm', 'cancel' or 'close', and <code>instance</code> is the MessageBox instance. You can access to that instance's attributes and methods</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>showClose</td>
<td>whether to show close icon of MessageBox</td>
<td>boolean</td>
<td>—</td>
<td>true</td>
</tr>
<tr>
<td>beforeClose</td>
<td>callback before MessageBox closes, and it will prevent MessageBox from closing</td>
<td>function(action, instance, done), where <code>action</code> can be 'confirm', 'cancel' or 'close'; <code>instance</code> is the MessageBox instance, and you can access to that instance's attributes and methods; <code>done</code> is for closing the instance</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>distinguishCancelAndClose</td>
<td>whether to distinguish canceling and closing the MessageBox</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>lockScroll</td>
<td>whether to lock body scroll when MessageBox prompts</td>
<td>boolean</td>
<td>—</td>
<td>true</td>
</tr>
<tr>
<td>showCancelButton</td>
<td>whether to show a cancel button</td>
<td>boolean</td>
<td>—</td>
<td>false (true when called with confirm and prompt)</td>
</tr>
<tr>
<td>showConfirmButton</td>
<td>whether to show a confirm button</td>
<td>boolean</td>
<td>—</td>
<td>true</td>
</tr>
<tr>
<td>cancelButtonText</td>
<td>text content of cancel button</td>
<td>string</td>
<td>—</td>
<td>Cancel</td>
</tr>
<tr>
<td>confirmButtonText</td>
<td>text content of confirm button</td>
<td>string</td>
<td>—</td>
<td>OK</td>
</tr>
<tr>
<td>cancelButtonClass</td>
<td>custom class name of cancel button</td>
<td>string</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>confirmButtonClass</td>
<td>custom class name of confirm button</td>
<td>string</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>closeOnClickModal</td>
<td>whether MessageBox can be closed by clicking the mask</td>
<td>boolean</td>
<td>—</td>
<td>true (false when called with alert)</td>
</tr>
<tr>
<td>closeOnPressEscape</td>
<td>whether MessageBox can be closed by pressing the ESC</td>
<td>boolean</td>
<td>—</td>
<td>true (false when called with alert)</td>
</tr>
<tr>
<td>closeOnHashChange</td>
<td>whether to close MessageBox when hash changes</td>
<td>boolean</td>
<td>—</td>
<td>true</td>
</tr>
<tr>
<td>showInput</td>
<td>whether to show an input</td>
<td>boolean</td>
<td>—</td>
<td>false (true when called with prompt)</td>
</tr>
<tr>
<td>inputPlaceholder</td>
<td>placeholder of input</td>
<td>string</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>inputType</td>
<td>type of input</td>
<td>string</td>
<td>—</td>
<td>text</td>
</tr>
<tr>
<td>inputValue</td>
<td>initial value of input</td>
<td>string</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>inputPattern</td>
<td>regexp for the input</td>
<td>regexp</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>inputValidator</td>
<td>validation function for the input. Should returns a boolean or string. If a string is returned, it will be assigned to inputErrorMessage</td>
<td>function</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>inputErrorMessage</td>
<td>error message when validation fails</td>
<td>string</td>
<td>—</td>
<td>Illegal input</td>
</tr>
<tr>
<td>center</td>
<td>whether to align the content in center</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>roundButton</td>
<td>whether to use round button</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
</tbody>
</table>
