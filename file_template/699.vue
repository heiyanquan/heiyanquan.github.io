<h2 id="messagebox-dan-kuang"><a class="header-anchor" href="#messagebox-dan-kuang">¶</a> MessageBox 弹框</h2>
<p>模拟系统的消息提示框而实现的一套模态对话框组件，用于消息提示、确认消息和提交内容。</p>
<div class="tip">
<p>从场景上说，MessageBox 的作用是美化系统自带的 <code>alert</code>、<code>confirm</code> 和 <code>prompt</code>，因此适合展示较为简单的内容。如果需要弹出较为复杂的内容，请使用 Dialog。</p>
</div>
<h3 id="xiao-xi-ti-shi"><a class="header-anchor" href="#xiao-xi-ti-shi">¶</a> 消息提示</h3>
<p>当用户进行操作时会被触发，该对话框中断用户操作，直到用户确认知晓后才可关闭。</p>
<demo-block>
        <div><p>调用<code>$alert</code>方法即可打开消息提示，它模拟了系统的 <code>alert</code>，无法通过按下 ESC 或点击框外关闭。此例中接收了两个参数，<code>message</code>和<code>title</code>。值得一提的是，窗口被关闭后，它默认会返回一个<code>Promise</code>对象便于进行后续操作的处理。若不确定浏览器是否支持<code>Promise</code>，可自行引入第三方 polyfill 或像本例一样使用回调进行后续处理。</p>
</div>
        <template slot="source"><element-demo0 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;template&gt;
  &lt;el-button type=&quot;text&quot; @click=&quot;open&quot;&gt;点击打开 Message Box&lt;/el-button&gt;
&lt;/template&gt;

&lt;script&gt;
  export default {
    methods: {
      open() {
        this.$alert('这是一段内容', '标题名称', {
          confirmButtonText: '确定',
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
</code></pre></template></demo-block><h3 id="que-ren-xiao-xi"><a class="header-anchor" href="#que-ren-xiao-xi">¶</a> 确认消息</h3>
<p>提示用户确认其已经触发的动作，并询问是否进行此操作时会用到此对话框。</p>
<demo-block>
        <div><p>调用<code>$confirm</code>方法即可打开消息提示，它模拟了系统的 <code>confirm</code>。Message Box 组件也拥有极高的定制性，我们可以传入<code>options</code>作为第三个参数，它是一个字面量对象。<code>type</code>字段表明消息类型，可以为<code>success</code>，<code>error</code>，<code>info</code>和<code>warning</code>，无效的设置将会被忽略。注意，第二个参数<code>title</code>必须定义为<code>String</code>类型，如果是<code>Object</code>，会被理解为<code>options</code>。在这里我们用了 Promise 来处理后续响应。</p>
</div>
        <template slot="source"><element-demo1 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;template&gt;
  &lt;el-button type=&quot;text&quot; @click=&quot;open&quot;&gt;点击打开 Message Box&lt;/el-button&gt;
&lt;/template&gt;

&lt;script&gt;
  export default {
    methods: {
      open() {
        this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() =&gt; {
          this.$message({
            type: 'success',
            message: '删除成功!'
          });
        }).catch(() =&gt; {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });          
        });
      }
    }
  }
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="ti-jiao-nei-rong"><a class="header-anchor" href="#ti-jiao-nei-rong">¶</a> 提交内容</h3>
<p>当用户进行操作时会被触发，中断用户操作，提示用户进行输入的对话框。</p>
<demo-block>
        <div><p>调用<code>$prompt</code>方法即可打开消息提示，它模拟了系统的 <code>prompt</code>。可以用<code>inputPattern</code>字段自己规定匹配模式，或者用<code>inputValidator</code>规定校验函数，可以返回<code>Boolean</code>或<code>String</code>，返回<code>false</code>或字符串时均表示校验未通过，同时返回的字符串相当于定义了<code>inputErrorMessage</code>字段。此外，可以用<code>inputPlaceholder</code>字段来定义输入框的占位符。</p>
</div>
        <template slot="source"><element-demo2 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;template&gt;
  &lt;el-button type=&quot;text&quot; @click=&quot;open&quot;&gt;点击打开 Message Box&lt;/el-button&gt;
&lt;/template&gt;

&lt;script&gt;
  export default {
    methods: {
      open() {
        this.$prompt('请输入邮箱', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          inputPattern: /[\w!#$%&amp;'*+/=?^_`{|}~-]+(?:\.[\w!#$%&amp;'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/,
          inputErrorMessage: '邮箱格式不正确'
        }).then(({ value }) =&gt; {
          this.$message({
            type: 'success',
            message: '你的邮箱是: ' + value
          });
        }).catch(() =&gt; {
          this.$message({
            type: 'info',
            message: '取消输入'
          });       
        });
      }
    }
  }
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="zi-ding-yi"><a class="header-anchor" href="#zi-ding-yi">¶</a> 自定义</h3>
<p>可自定义配置不同内容。</p>
<demo-block>
        <div><p>以上三个方法都是对<code>$msgbox</code>方法的再包装。本例直接调用<code>$msgbox</code>方法，使用了<code>showCancelButton</code>字段，用于显示取消按钮。另外可使用<code>cancelButtonClass</code>为其添加自定义样式，使用<code>cancelButtonText</code>来自定义按钮文本（Confirm 按钮也具有相同的字段，在文末的字段说明中有完整的字段列表）。此例还使用了<code>beforeClose</code>属性，它的值是一个方法，会在 MessageBox 的实例关闭前被调用，同时暂停实例的关闭。它有三个参数：<code>action</code>、实例本身和<code>done</code>方法。使用它能够在关闭前对实例进行一些操作，比如为确定按钮添加<code>loading</code>状态等；此时若需要关闭实例，可以调用<code>done</code>方法（若在<code>beforeClose</code>中没有调用<code>done</code>，则实例不会关闭）。</p>
</div>
        <template slot="source"><element-demo3 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;template&gt;
  &lt;el-button type=&quot;text&quot; @click=&quot;open&quot;&gt;点击打开 Message Box&lt;/el-button&gt;
&lt;/template&gt;

&lt;script&gt;
  export default {
    methods: {
      open() {
        const h = this.$createElement;
        this.$msgbox({
          title: '消息',
          message: h('p', null, [
            h('span', null, '内容可以是 '),
            h('i', { style: 'color: teal' }, 'VNode')
          ]),
          showCancelButton: true,
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          beforeClose: (action, instance, done) =&gt; {
            if (action === 'confirm') {
              instance.confirmButtonLoading = true;
              instance.confirmButtonText = '执行中...';
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
      }
    }
  }
&lt;/script&gt;
</code></pre></template></demo-block><div class="tip">
<p>弹出层的内容可以是 <code>VNode</code>，所以我们能把一些自定义组件传入其中。每次弹出层打开后，Vue 会对新老 <code>VNode</code> 节点进行比对，然后将根据比较结果进行最小单位地修改视图。这也许会造成弹出层内容区域的组件没有重新渲染，例如 <a href="https://github.com/ElemeFE/element/issues/8931">#8931</a>。当这类问题出现时，解决方案是给 <code>VNode</code> 加上一个不相同的 key，参考<a href="https://jsfiddle.net/zhiyang/ezmhq2ef/">这里</a>。</p>
</div>
<h3 id="shi-yong-html-pian-duan"><a class="header-anchor" href="#shi-yong-html-pian-duan">¶</a> 使用 HTML 片段</h3>
<p><code>message</code> 属性支持传入 HTML 片段。</p>
<demo-block>
        <div><p>将<code>dangerouslyUseHTMLString</code>属性设置为 true，<code>message</code> 就会被当作 HTML 片段处理。</p>
</div>
        <template slot="source"><element-demo4 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;template&gt;
  &lt;el-button type=&quot;text&quot; @click=&quot;open&quot;&gt;点击打开 Message Box&lt;/el-button&gt;
&lt;/template&gt;

&lt;script&gt;
  export default {
    methods: {
      open() {
        this.$alert('&lt;strong&gt;这是 &lt;i&gt;HTML&lt;/i&gt; 片段&lt;/strong&gt;', 'HTML 片段', {
          dangerouslyUseHTMLString: true
        });
      }
    }
  }
&lt;/script&gt;
</code></pre></template></demo-block><div class="warning">
<p><code>message</code> 属性虽然支持传入 HTML 片段，但是在网站上动态渲染任意 HTML 是非常危险的，因为容易导致 <a href="https://en.wikipedia.org/wiki/Cross-site_scripting">XSS 攻击</a>。因此在 <code>dangerouslyUseHTMLString</code> 打开的情况下，请确保 <code>message</code> 的内容是可信的，<strong>永远不要</strong>将用户提交的内容赋值给 <code>message</code> 属性。</p>
</div>
<h3 id="qu-fen-qu-xiao-yu-guan-bi"><a class="header-anchor" href="#qu-fen-qu-xiao-yu-guan-bi">¶</a> 区分取消与关闭</h3>
<p>有些场景下，点击取消按钮与点击关闭按钮有着不同的含义。</p>
<demo-block>
        <div><p>默认情况下，当用户触发取消（点击取消按钮）和触发关闭（点击关闭按钮或遮罩层、按下 ESC 键）时，Promise 的 reject 回调和<code>callback</code>回调的参数均为 'cancel'。如果将<code>distinguishCancelAndClose</code>属性设置为 true，则上述两种行为的参数分别为 'cancel' 和 'close'。</p>
</div>
        <template slot="source"><element-demo5 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;template&gt;
  &lt;el-button type=&quot;text&quot; @click=&quot;open&quot;&gt;点击打开 Message Box&lt;/el-button&gt;
&lt;/template&gt;

&lt;script&gt;
  export default {
    methods: {
      open() {
        this.$confirm('检测到未保存的内容，是否在离开页面前保存修改？', '确认信息', {
          distinguishCancelAndClose: true,
          confirmButtonText: '保存',
          cancelButtonText: '放弃修改'
        })
          .then(() =&gt; {
            this.$message({
              type: 'info',
              message: '保存修改'
            });
          })
          .catch(action =&gt; {
            this.$message({
              type: 'info',
              message: action === 'cancel'
                ? '放弃保存并离开页面'
                : '停留在当前页面'
            })
          });
      }
    }
  }
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="ju-zhong-bu-ju"><a class="header-anchor" href="#ju-zhong-bu-ju">¶</a> 居中布局</h3>
<p>内容支持居中布局</p>
<demo-block>
        <div><p>将 <code>center</code> 设置为 <code>true</code> 即可开启居中布局</p>
</div>
        <template slot="source"><element-demo6 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;template&gt;
  &lt;el-button type=&quot;text&quot; @click=&quot;open&quot;&gt;点击打开 Message Box&lt;/el-button&gt;
&lt;/template&gt;

&lt;script&gt;
  export default {
    methods: {
      open() {
        this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning',
          center: true
        }).then(() =&gt; {
          this.$message({
            type: 'success',
            message: '删除成功!'
          });
        }).catch(() =&gt; {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });
        });
      }
    }
  }
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="quan-ju-fang-fa"><a class="header-anchor" href="#quan-ju-fang-fa">¶</a> 全局方法</h3>
<p>如果你完整引入了 Element，它会为 Vue.prototype 添加如下全局方法：$msgbox, $alert, $confirm 和 $prompt。因此在 Vue instance 中可以采用本页面中的方式调用 <code>MessageBox</code>。调用参数为：</p>
<ul>
<li><code>$msgbox(options)</code></li>
<li><code>$alert(message, title, options)</code> 或 <code>$alert(message, options)</code></li>
<li><code>$confirm(message, title, options)</code> 或 <code>$confirm(message, options)</code></li>
<li><code>$prompt(message, title, options)</code> 或 <code>$prompt(message, options)</code></li>
</ul>
<h3 id="dan-du-yin-yong"><a class="header-anchor" href="#dan-du-yin-yong">¶</a> 单独引用</h3>
<p>如果单独引入 <code>MessageBox</code>：</p>
<pre><code class="language-javascript">import { MessageBox } from 'element-ui';
</code></pre>
<p>那么对应于上述四个全局方法的调用方法依次为：MessageBox, MessageBox.alert, MessageBox.confirm 和 MessageBox.prompt，调用参数与全局方法相同。</p>
<h3 id="options"><a class="header-anchor" href="#options">¶</a> Options</h3>
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
<td>MessageBox 标题</td>
<td>string</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>message</td>
<td>MessageBox 消息正文内容</td>
<td>string / VNode</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>dangerouslyUseHTMLString</td>
<td>是否将 message 属性作为 HTML 片段处理</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>type</td>
<td>消息类型，用于显示图标</td>
<td>string</td>
<td>success / info / warning / error</td>
<td>—</td>
</tr>
<tr>
<td>iconClass</td>
<td>自定义图标的类名，会覆盖 <code>type</code></td>
<td>string</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>customClass</td>
<td>MessageBox 的自定义类名</td>
<td>string</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>callback</td>
<td>若不使用 Promise，可以使用此参数指定 MessageBox 关闭后的回调</td>
<td>function(action, instance)，action 的值为'confirm', 'cancel'或'close', instance 为 MessageBox 实例，可以通过它访问实例上的属性和方法</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>showClose</td>
<td>MessageBox 是否显示右上角关闭按钮</td>
<td>boolean</td>
<td>—</td>
<td>true</td>
</tr>
<tr>
<td>beforeClose</td>
<td>MessageBox 关闭前的回调，会暂停实例的关闭</td>
<td>function(action, instance, done)，action 的值为'confirm', 'cancel'或'close'；instance 为 MessageBox 实例，可以通过它访问实例上的属性和方法；done 用于关闭 MessageBox 实例</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>distinguishCancelAndClose</td>
<td>是否将取消（点击取消按钮）与关闭（点击关闭按钮或遮罩层、按下 ESC 键）进行区分</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>lockScroll</td>
<td>是否在 MessageBox 出现时将 body 滚动锁定</td>
<td>boolean</td>
<td>—</td>
<td>true</td>
</tr>
<tr>
<td>showCancelButton</td>
<td>是否显示取消按钮</td>
<td>boolean</td>
<td>—</td>
<td>false（以 confirm 和 prompt 方式调用时为 true）</td>
</tr>
<tr>
<td>showConfirmButton</td>
<td>是否显示确定按钮</td>
<td>boolean</td>
<td>—</td>
<td>true</td>
</tr>
<tr>
<td>cancelButtonText</td>
<td>取消按钮的文本内容</td>
<td>string</td>
<td>—</td>
<td>取消</td>
</tr>
<tr>
<td>confirmButtonText</td>
<td>确定按钮的文本内容</td>
<td>string</td>
<td>—</td>
<td>确定</td>
</tr>
<tr>
<td>cancelButtonClass</td>
<td>取消按钮的自定义类名</td>
<td>string</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>confirmButtonClass</td>
<td>确定按钮的自定义类名</td>
<td>string</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>closeOnClickModal</td>
<td>是否可通过点击遮罩关闭 MessageBox</td>
<td>boolean</td>
<td>—</td>
<td>true（以 alert 方式调用时为 false）</td>
</tr>
<tr>
<td>closeOnPressEscape</td>
<td>是否可通过按下 ESC 键关闭 MessageBox</td>
<td>boolean</td>
<td>—</td>
<td>true（以 alert 方式调用时为 false）</td>
</tr>
<tr>
<td>closeOnHashChange</td>
<td>是否在 hashchange 时关闭 MessageBox</td>
<td>boolean</td>
<td>—</td>
<td>true</td>
</tr>
<tr>
<td>showInput</td>
<td>是否显示输入框</td>
<td>boolean</td>
<td>—</td>
<td>false（以 prompt 方式调用时为 true）</td>
</tr>
<tr>
<td>inputPlaceholder</td>
<td>输入框的占位符</td>
<td>string</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>inputType</td>
<td>输入框的类型</td>
<td>string</td>
<td>—</td>
<td>text</td>
</tr>
<tr>
<td>inputValue</td>
<td>输入框的初始文本</td>
<td>string</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>inputPattern</td>
<td>输入框的校验表达式</td>
<td>regexp</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>inputValidator</td>
<td>输入框的校验函数。可以返回布尔值或字符串，若返回一个字符串, 则返回结果会被赋值给 inputErrorMessage</td>
<td>function</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>inputErrorMessage</td>
<td>校验未通过时的提示文本</td>
<td>string</td>
<td>—</td>
<td>输入的数据不合法!</td>
</tr>
<tr>
<td>center</td>
<td>是否居中布局</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>roundButton</td>
<td>是否使用圆角按钮</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
</tbody>
</table>
