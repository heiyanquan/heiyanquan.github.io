<h2 id="an-zhuang"><a class="header-anchor" href="#an-zhuang">¶</a> 安装</h2>
<h3 id="npm-an-zhuang"><a class="header-anchor" href="#npm-an-zhuang">¶</a> npm 安装</h3>
<p>推荐使用 npm 的方式安装，它能更好地和 <a href="https://webpack.js.org/">webpack</a> 打包工具配合使用。</p>
<pre><code class="language-shell">npm i element-ui -S
</code></pre>
<h3 id="cdn"><a class="header-anchor" href="#cdn">¶</a> CDN</h3>
<p>目前可以通过 <a href="https://unpkg.com/element-ui/">unpkg.com/element-ui</a> 获取到最新版本的资源，在页面上引入 js 和 css 文件即可开始使用。</p>
<pre><code class="language-html">&lt;!-- 引入样式 --&gt;
&lt;link rel=&quot;stylesheet&quot; href=&quot;https://unpkg.com/element-ui/lib/theme-chalk/index.css&quot;&gt;
&lt;!-- 引入组件库 --&gt;
&lt;script src=&quot;https://unpkg.com/element-ui/lib/index.js&quot;&gt;&lt;/script&gt;
</code></pre>
<div class="tip">
<p>我们建议使用 CDN 引入 Element 的用户在链接地址上锁定版本，以免将来 Element 升级时受到非兼容性更新的影响。锁定版本的方法请查看 <a href="https://unpkg.com">unpkg.com</a>。</p>
</div>
<h3 id="hello-world"><a class="header-anchor" href="#hello-world">¶</a> Hello world</h3>
<p>通过 CDN 的方式我们可以很容易地使用 Element 写出一个 Hello world 页面。<a href="https://codepen.io/ziyoung/pen/rRKYpd">在线演示</a></p>
<iframe height="265" style="width: 100%;" scrolling="no" title="Element demo" src="//codepen.io/ziyoung/embed/rRKYpd/?height=265&theme-id=light&default-tab=html" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/ziyoung/pen/rRKYpd/'>Element demo</a> by hetech
  (<a href='https://codepen.io/ziyoung'>@ziyoung</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>
<p>如果是通过 npm 安装，并希望配合 webpack 使用，请阅读下一节：<a href="/#/zh-CN/component/quickstart">快速上手</a>。</p>
