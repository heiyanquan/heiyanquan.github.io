<h2 id="message-xiao-xi-ti-shi"><a class="header-anchor" href="#message-xiao-xi-ti-shi">¶</a> Message 消息提示</h2>
<p>常用于主动操作后的反馈提示。与 Notification 的区别是后者更多用于系统级通知的被动提醒。</p>
<h3 id="ji-chu-yong-fa"><a class="header-anchor" href="#ji-chu-yong-fa">¶</a> 基础用法</h3>
<p>从顶部出现，3 秒后自动消失。</p>
<demo-block>
        <div><p>Message 在配置上与 Notification 非常类似，所以部分 options 在此不做详尽解释，文末有 options 列表，可以结合 Notification 的文档理解它们。Element 注册了一个<code>$message</code>方法用于调用，Message 可以接收一个字符串或一个 VNode 作为参数，它会被显示为正文内容。</p>
</div>
        <!--element-demo: <template>
  <el-button :plain="true" @click="open">打开消息提示</el-button>
  <el-button :plain="true" @click="openVn">VNode</el-button>
</template>

<script>
  export default {
    methods: {
      open() {
        this.$message('这是一条消息提示');
      },

      openVn() {
        const h = this.$createElement;
        this.$message({
          message: h('p', null, [
            h('span', null, '内容可以是 '),
            h('i', { style: 'color: teal' }, 'VNode')
          ])
        });
      }
    }
  }
</script>
:element-demo-->
        <template slot="highlight"><pre v-pre><code class="html">&lt;template&gt;
  &lt;el-button :plain=&quot;true&quot; @click=&quot;open&quot;&gt;打开消息提示&lt;/el-button&gt;
  &lt;el-button :plain=&quot;true&quot; @click=&quot;openVn&quot;&gt;VNode&lt;/el-button&gt;
&lt;/template&gt;

&lt;script&gt;
  export default {
    methods: {
      open() {
        this.$message('这是一条消息提示');
      },

      openVn() {
        const h = this.$createElement;
        this.$message({
          message: h('p', null, [
            h('span', null, '内容可以是 '),
            h('i', { style: 'color: teal' }, 'VNode')
          ])
        });
      }
    }
  }
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="bu-tong-zhuang-tai"><a class="header-anchor" href="#bu-tong-zhuang-tai">¶</a> 不同状态</h3>
<p>用来显示「成功、警告、消息、错误」类的操作反馈。</p>
<demo-block>
        <div><p>当需要自定义更多属性时，Message 也可以接收一个对象为参数。比如，设置<code>type</code>字段可以定义不同的状态，默认为<code>info</code>。此时正文内容以<code>message</code>的值传入。同时，我们也为 Message 的各种 type 注册了方法，可以在不传入<code>type</code>字段的情况下像<code>open4</code>那样直接调用。</p>
</div>
        <!--element-demo: <template>
  <el-button :plain="true" @click="open2">成功</el-button>
  <el-button :plain="true" @click="open3">警告</el-button>
  <el-button :plain="true" @click="open1">消息</el-button>
  <el-button :plain="true" @click="open4">错误</el-button>
</template>

<script>
  export default {
    methods: {
      open1() {
        this.$message('这是一条消息提示');
      },
      open2() {
        this.$message({
          message: '恭喜你，这是一条成功消息',
          type: 'success'
        });
      },

      open3() {
        this.$message({
          message: '警告哦，这是一条警告消息',
          type: 'warning'
        });
      },

      open4() {
        this.$message.error('错了哦，这是一条错误消息');
      }
    }
  }
</script>
:element-demo-->
        <template slot="highlight"><pre v-pre><code class="html">&lt;template&gt;
  &lt;el-button :plain=&quot;true&quot; @click=&quot;open2&quot;&gt;成功&lt;/el-button&gt;
  &lt;el-button :plain=&quot;true&quot; @click=&quot;open3&quot;&gt;警告&lt;/el-button&gt;
  &lt;el-button :plain=&quot;true&quot; @click=&quot;open1&quot;&gt;消息&lt;/el-button&gt;
  &lt;el-button :plain=&quot;true&quot; @click=&quot;open4&quot;&gt;错误&lt;/el-button&gt;
&lt;/template&gt;

&lt;script&gt;
  export default {
    methods: {
      open1() {
        this.$message('这是一条消息提示');
      },
      open2() {
        this.$message({
          message: '恭喜你，这是一条成功消息',
          type: 'success'
        });
      },

      open3() {
        this.$message({
          message: '警告哦，这是一条警告消息',
          type: 'warning'
        });
      },

      open4() {
        this.$message.error('错了哦，这是一条错误消息');
      }
    }
  }
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="ke-guan-bi"><a class="header-anchor" href="#ke-guan-bi">¶</a> 可关闭</h3>
<p>可以添加关闭按钮。</p>
<demo-block>
        <div><p>默认的 Message 是不可以被人工关闭的，如果需要可手动关闭的 Message，可以使用<code>showClose</code>字段。此外，和 Notification 一样，Message 拥有可控的<code>duration</code>，设置<code>0</code>为不会被自动关闭，默认为 3000 毫秒。</p>
</div>
        <!--element-demo: <template>
  <el-button :plain="true" @click="open1">消息</el-button>
  <el-button :plain="true" @click="open2">成功</el-button>
  <el-button :plain="true" @click="open3">警告</el-button>
  <el-button :plain="true" @click="open4">错误</el-button>
</template>

<script>
  export default {
    methods: {
      open1() {
        this.$message({
          showClose: true,
          message: '这是一条消息提示'
        });
      },

      open2() {
        this.$message({
          showClose: true,
          message: '恭喜你，这是一条成功消息',
          type: 'success'
        });
      },

      open3() {
        this.$message({
          showClose: true,
          message: '警告哦，这是一条警告消息',
          type: 'warning'
        });
      },

      open4() {
        this.$message({
          showClose: true,
          message: '错了哦，这是一条错误消息',
          type: 'error'
        });
      }
    }
  }
</script>
:element-demo-->
        <template slot="highlight"><pre v-pre><code class="html">&lt;template&gt;
  &lt;el-button :plain=&quot;true&quot; @click=&quot;open1&quot;&gt;消息&lt;/el-button&gt;
  &lt;el-button :plain=&quot;true&quot; @click=&quot;open2&quot;&gt;成功&lt;/el-button&gt;
  &lt;el-button :plain=&quot;true&quot; @click=&quot;open3&quot;&gt;警告&lt;/el-button&gt;
  &lt;el-button :plain=&quot;true&quot; @click=&quot;open4&quot;&gt;错误&lt;/el-button&gt;
&lt;/template&gt;

&lt;script&gt;
  export default {
    methods: {
      open1() {
        this.$message({
          showClose: true,
          message: '这是一条消息提示'
        });
      },

      open2() {
        this.$message({
          showClose: true,
          message: '恭喜你，这是一条成功消息',
          type: 'success'
        });
      },

      open3() {
        this.$message({
          showClose: true,
          message: '警告哦，这是一条警告消息',
          type: 'warning'
        });
      },

      open4() {
        this.$message({
          showClose: true,
          message: '错了哦，这是一条错误消息',
          type: 'error'
        });
      }
    }
  }
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="wen-zi-ju-zhong"><a class="header-anchor" href="#wen-zi-ju-zhong">¶</a> 文字居中</h3>
<p>使用 <code>center</code> 属性让文字水平居中。</p>
<demo-block>
        
        <!--element-demo: <template>
  <el-button :plain="true" @click="openCenter">文字居中</el-button>
</template>

<script>
  export default {
    methods: {
      openCenter() {
        this.$message({
          message: '居中的文字',
          center: true
        });
      }
    }
  }
</script>
:element-demo-->
        <template slot="highlight"><pre v-pre><code class="html">&lt;template&gt;
  &lt;el-button :plain=&quot;true&quot; @click=&quot;openCenter&quot;&gt;文字居中&lt;/el-button&gt;
&lt;/template&gt;

&lt;script&gt;
  export default {
    methods: {
      openCenter() {
        this.$message({
          message: '居中的文字',
          center: true
        });
      }
    }
  }
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="shi-yong-html-pian-duan"><a class="header-anchor" href="#shi-yong-html-pian-duan">¶</a> 使用 HTML 片段</h3>
<p><code>message</code> 属性支持传入 HTML 片段</p>
<demo-block>
        <div><p>将<code>dangerouslyUseHTMLString</code>属性设置为 true，<code>message</code> 就会被当作 HTML 片段处理。</p>
</div>
        <!--element-demo: <template>
  <el-button :plain="true" @click="openHTML">使用 HTML 片段</el-button>
</template>

<script>
  export default {
    methods: {
      openHTML() {
        this.$message({
          dangerouslyUseHTMLString: true,
          message: '<strong>这是 <i>HTML</i> 片段</strong>'
        });
      }
    }
  }
</script>
:element-demo-->
        <template slot="highlight"><pre v-pre><code class="html">&lt;template&gt;
  &lt;el-button :plain=&quot;true&quot; @click=&quot;openHTML&quot;&gt;使用 HTML 片段&lt;/el-button&gt;
&lt;/template&gt;

&lt;script&gt;
  export default {
    methods: {
      openHTML() {
        this.$message({
          dangerouslyUseHTMLString: true,
          message: '&lt;strong&gt;这是 &lt;i&gt;HTML&lt;/i&gt; 片段&lt;/strong&gt;'
        });
      }
    }
  }
&lt;/script&gt;
</code></pre></template></demo-block><div class="warning">
<p><code>message</code> 属性虽然支持传入 HTML 片段，但是在网站上动态渲染任意 HTML 是非常危险的，因为容易导致 <a href="https://en.wikipedia.org/wiki/Cross-site_scripting">XSS 攻击</a>。因此在 <code>dangerouslyUseHTMLString</code> 打开的情况下，请确保 <code>message</code> 的内容是可信的，<strong>永远不要</strong>将用户提交的内容赋值给 <code>message</code> 属性。</p>
</div>
<h3 id="quan-ju-fang-fa"><a class="header-anchor" href="#quan-ju-fang-fa">¶</a> 全局方法</h3>
<p>Element 为 Vue.prototype 添加了全局方法 $message。因此在 vue instance 中可以采用本页面中的方式调用 <code>Message</code>。</p>
<h3 id="dan-du-yin-yong"><a class="header-anchor" href="#dan-du-yin-yong">¶</a> 单独引用</h3>
<p>单独引入 <code>Message</code>：</p>
<pre><code class="language-javascript">import { Message } from 'element-ui';
</code></pre>
<p>此时调用方法为 <code>Message(options)</code>。我们也为每个 type 定义了各自的方法，如 <code>Message.success(options)</code>。并且可以调用 <code>Message.closeAll()</code> 手动关闭所有实例。</p>
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
<td>message</td>
<td>消息文字</td>
<td>string / VNode</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>type</td>
<td>主题</td>
<td>string</td>
<td>success/warning/info/error</td>
<td>info</td>
</tr>
<tr>
<td>iconClass</td>
<td>自定义图标的类名，会覆盖 <code>type</code></td>
<td>string</td>
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
<td>customClass</td>
<td>自定义类名</td>
<td>string</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>duration</td>
<td>显示时间, 毫秒。设为 0 则不会自动关闭</td>
<td>number</td>
<td>—</td>
<td>3000</td>
</tr>
<tr>
<td>showClose</td>
<td>是否显示关闭按钮</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>center</td>
<td>文字是否居中</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>onClose</td>
<td>关闭时的回调函数, 参数为被关闭的 message 实例</td>
<td>function</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>offset</td>
<td>Message 距离窗口顶部的偏移量</td>
<td>number</td>
<td>—</td>
<td>20</td>
</tr>
</tbody>
</table>
<h3 id="fang-fa"><a class="header-anchor" href="#fang-fa">¶</a> 方法</h3>
<p>调用 <code>Message</code> 或 <code>this.$message</code> 会返回当前 Message 的实例。如果需要手动关闭实例，可以调用它的 <code>close</code> 方法。</p>
<table>
<thead>
<tr>
<th>方法名</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>close</td>
<td>关闭当前的 Message</td>
</tr>
</tbody>
</table>
