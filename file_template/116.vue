<h2 id="internationalization"><a class="header-anchor" href="#internationalization">¶</a> Internationalization</h2>
<p>The default language of Element is Chinese. If you wish to use another language, you'll need to do some i18n configuration. In your entry file, if you are importing Element entirely:</p>
<pre><code class="language-javascript">import Vue from 'vue'
import ElementUI from 'element-ui'
import locale from 'element-ui/lib/locale/lang/en'

Vue.use(ElementUI, { locale })
</code></pre>
<p>Or if you are importing Element on demand:</p>
<pre><code class="language-javascript">import Vue from 'vue'
import { Button, Select } from 'element-ui'
import lang from 'element-ui/lib/locale/lang/en'
import locale from 'element-ui/lib/locale'

// configure language
locale.use(lang)

// import components
Vue.component(Button.name, Button)
Vue.component(Select.name, Select)
</code></pre>
<p>The Chinese language pack is imported by default, even if you're using another language. But with <code>NormalModuleReplacementPlugin</code> provided by webpack you can replace default locale:</p>
<p>webpack.config.js</p>
<pre><code class="language-javascript">{
  plugins: [
    new webpack.NormalModuleReplacementPlugin(/element-ui[\/\\]lib[\/\\]locale[\/\\]lang[\/\\]zh-CN/, 'element-ui/lib/locale/lang/en')
  ]
}
</code></pre>
<h2 id="compatible-with-vue-i18n-5-x"><a class="header-anchor" href="#compatible-with-vue-i18n-5-x">¶</a> Compatible with <code>vue-i18n@5.x</code></h2>
<p>Element is compatible with <a href="https://github.com/kazupon/vue-i18n">vue-i18n@5.x</a>, which makes multilingual switching even easier.</p>
<pre><code class="language-javascript">import Vue from 'vue'
import VueI18n from 'vue-i18n'
import Element from 'element-ui'
import enLocale from 'element-ui/lib/locale/lang/en'
import zhLocale from 'element-ui/lib/locale/lang/zh-CN'

Vue.use(VueI18n)
Vue.use(Element)

Vue.config.lang = 'zh-cn'
Vue.locale('zh-cn', zhLocale)
Vue.locale('en', enLocale)
</code></pre>
<h2 id="compatible-with-other-i18n-plugins"><a class="header-anchor" href="#compatible-with-other-i18n-plugins">¶</a> Compatible with other i18n plugins</h2>
<p>Element may not be compatible with i18n plugins other than vue-i18n, but you can customize how Element processes i18n.</p>
<pre><code class="language-javascript">import Vue from 'vue'
import Element from 'element-ui'
import enLocale from 'element-ui/lib/locale/lang/en'
import zhLocale from 'element-ui/lib/locale/lang/zh-CN'

Vue.use(Element, {
  i18n: function (path, options) {
    // ...
  }
})
</code></pre>
<h2 id="compatible-with-vue-i18n-6-x"><a class="header-anchor" href="#compatible-with-vue-i18n-6-x">¶</a> Compatible with <code>vue-i18n@6.x</code></h2>
<p>You need to manually handle it for compatibility with <code>6.x</code>.</p>
<pre><code class="language-javascript">import Vue from 'vue'
import Element from 'element-ui'
import VueI18n from 'vue-i18n'
import enLocale from 'element-ui/lib/locale/lang/en'
import zhLocale from 'element-ui/lib/locale/lang/zh-CN'

Vue.use(VueI18n)

const messages = {
  en: {
    message: 'hello',
    ...enLocale // Or use `Object.assign({ message: 'hello' }, enLocale)`
  },
  zh: {
    message: '你好',
    ...zhLocale // Or use `Object.assign({ message: '你好' }, zhLocale)`
  }
}
// Create VueI18n instance with options
const i18n = new VueI18n({
  locale: 'en', // set locale
  messages, // set locale messages
})

Vue.use(Element, {
  i18n: (key, value) =&gt; i18n.t(key, value)
})

new Vue({ i18n }).$mount('#app')
</code></pre>
<h2 id="custom-i18n-in-on-demand-components"><a class="header-anchor" href="#custom-i18n-in-on-demand-components">¶</a> Custom i18n in on-demand components</h2>
<pre><code class="language-js">import Vue from 'vue'
import DatePicker from 'element/lib/date-picker'
import VueI18n from 'vue-i18n'

import enLocale from 'element-ui/lib/locale/lang/en'
import zhLocale from 'element-ui/lib/locale/lang/zh-CN'
import ElementLocale from 'element-ui/lib/locale'

Vue.use(VueI18n)
Vue.use(DatePicker)

const messages = {
  en: {
    message: 'hello',
    ...enLocale
  },
  zh: {
    message: '你好',
    ...zhLocale
  }
}
// Create VueI18n instance with options
const i18n = new VueI18n({
  locale: 'en', // set locale
  messages, // set locale messages
})

ElementLocale.i18n((key, value) =&gt; i18n.t(key, value))
</code></pre>
<h2 id="import-via-cdn"><a class="header-anchor" href="#import-via-cdn">¶</a> Import via CDN</h2>
<pre><code class="language-html">&lt;script src=&quot;//unpkg.com/vue&quot;&gt;&lt;/script&gt;
&lt;script src=&quot;//unpkg.com/element-ui&quot;&gt;&lt;/script&gt;
&lt;script src=&quot;//unpkg.com/element-ui/lib/umd/locale/en.js&quot;&gt;&lt;/script&gt;

&lt;script&gt;
  ELEMENT.locale(ELEMENT.lang.en)
&lt;/script&gt;
</code></pre>
<p>Compatible with <code>vue-i18n</code></p>
<pre><code class="language-html">&lt;script src=&quot;//unpkg.com/vue&quot;&gt;&lt;/script&gt;
&lt;script src=&quot;//unpkg.com/vue-i18n/dist/vue-i18n.js&quot;&gt;&lt;/script&gt;
&lt;script src=&quot;//unpkg.com/element-ui&quot;&gt;&lt;/script&gt;
&lt;script src=&quot;//unpkg.com/element-ui/lib/umd/locale/zh-CN.js&quot;&gt;&lt;/script&gt;
&lt;script src=&quot;//unpkg.com/element-ui/lib/umd/locale/en.js&quot;&gt;&lt;/script&gt;

&lt;script&gt;
  Vue.locale('en', ELEMENT.lang.en)
  Vue.locale('zh-cn', ELEMENT.lang.zhCN)
&lt;/script&gt;
</code></pre>
<p>Currently Element ships with the following languages:</p>
<ul class="language-list">
  <li>Simplified Chinese (zh-CN)</li>
  <li>English (en)</li>
  <li>German (de)</li>
  <li>Portuguese (pt)</li>
  <li>Spanish (es)</li>
  <li>Danish (da)</li>
  <li>French (fr)</li>
  <li>Norwegian (nb-NO)</li>
  <li>Traditional Chinese (zh-TW)</li>
  <li>Italian (it)</li>
  <li>Korean (ko)</li>
  <li>Japanese (ja)</li>
  <li>Dutch (nl)</li>
  <li>Vietnamese (vi)</li>
  <li>Russian (ru-RU)</li>
  <li>Turkish (tr-TR)</li>
  <li>Brazilian Portuguese (pt-br)</li>
  <li>Farsi (fa)</li>
  <li>Thai (th)</li>
  <li>Indonesian (id)</li>
  <li>Bulgarian (bg)</li>
  <li>Polish (pl)</li>
  <li>Finnish (fi)</li>
  <li>Swedish (sv-SE)</li>
  <li>Greek (el)</li>
  <li>Slovak (sk)</li>
  <li>Catalunya (ca)</li>
  <li>Czech (cs-CZ)</li>
  <li>Ukrainian (ua)</li>
  <li>Turkmen (tk)</li>
  <li>Tamil (ta)</li>
  <li>Latvian (lv)</li>
  <li>Afrikaans (af-ZA)</li>
  <li>Estonian (ee)</li>
  <li>Slovenian (sl)</li>
  <li>Arabic (ar)</li>
  <li>Hebrew (he)</li>
  <li>Lithuanian (lt)</li>
  <li>Mongolian (mn)</li>
  <li>Kazakh (kz)</li>
  <li>Hungarian (hu)</li>
  <li>Romanian (ro)</li>
  <li>Kurdish (ku)</li>
  <li>Uighur (ug-CN)</li>
  <li>Khmer (km)</li>
  <li>Serbian (sr)</li>
  <li>Basque (eu)</li>
  <li>Kyrgyz (kg)</li>
  <li>Armenian (hy)</li>
  <li>Croatian (hr)</li>
  <li>Esperanto (eo)</li>
</ul>
<p>If your target language is not included, you are more than welcome to contribute: just add another language config <a href="https://github.com/ElemeFE/element/tree/dev/src/locale/lang">here</a> and create a pull request.</p>
