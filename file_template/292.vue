<h2 id="internacionalizacion"><a class="header-anchor" href="#internacionalizacion">¶</a> Internacionalización</h2>
<p>El idioma predeterminado de Element es el chino. Si se desea utilizar otro idioma, será necesario realizar alguna configuración de i18n. En su fichero de entrada, si está importando Element por completo:</p>
<pre><code class="language-javascript">import Vue from 'vue'
import ElementUI from 'element-ui'
import locale from 'element-ui/lib/locale/lang/en'

Vue.use(ElementUI, { locale })
</code></pre>
<p>O si está importando Element a petición:</p>
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
<p>El paquete de idioma chino se importa por defecto, incluso si se esta usando otro idioma. Pero con <code>NormalModuleReplacementPlugin</code> proporcionado por el webpack puede reemplazar la localización predeterminada:</p>
<p>webpack.config.js</p>
<pre><code class="language-javascript">{
  plugins: [
    new webpack.NormalModuleReplacementPlugin(/element-ui[\/\\]lib[\/\\]locale[\/\\]lang[\/\\]zh-CN/, 'element-ui/lib/locale/lang/en')
  ]
}
</code></pre>
<h2 id="compatible-con-vue-i18n-5-x"><a class="header-anchor" href="#compatible-con-vue-i18n-5-x">¶</a> Compatible con <code>vue-i18n@5.x</code></h2>
<p>Element es compatible con <a href="https://github.com/kazupon/vue-i18n">vue-i18n@5.x</a>, lo que facilita aún más la conmutación multilenguaje.</p>
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
<h2 id="compatible-con-otros-plugins-i18n"><a class="header-anchor" href="#compatible-con-otros-plugins-i18n">¶</a> Compatible con otros plugins i18n</h2>
<p>Es posible que Element no sea compatible con otros plugins i18n que no sean vue-i18n, pero puede personalizar la forma en que Element procesa i18n.</p>
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
<h2 id="compatible-con-vue-i18n-6-x"><a class="header-anchor" href="#compatible-con-vue-i18n-6-x">¶</a> Compatible con <code>vue-i18n@6.x</code></h2>
<p>Necesita manejarlo manualmente para ser compatible con <code>6.x</code>.</p>
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
<h2 id="personalizacion-de-i18n-en-componentes-bajo-peticion"><a class="header-anchor" href="#personalizacion-de-i18n-en-componentes-bajo-peticion">¶</a> Personalización de i18n en componentes bajo petición</h2>
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
<h2 id="importar-via-cdn"><a class="header-anchor" href="#importar-via-cdn">¶</a> Importar via CDN</h2>
<pre><code class="language-html">&lt;script src=&quot;//unpkg.com/vue&quot;&gt;&lt;/script&gt;
&lt;script src=&quot;//unpkg.com/element-ui&quot;&gt;&lt;/script&gt;
&lt;script src=&quot;//unpkg.com/element-ui/lib/umd/locale/en.js&quot;&gt;&lt;/script&gt;

&lt;script&gt;
  ELEMENT.locale(ELEMENT.lang.en)
&lt;/script&gt;
</code></pre>
<p>Compatible con <code>vue-i18n</code></p>
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
<p>Actualmente Element está disponible en los siguientes idiomas:</p>
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
  <li>Vasco (eu)</li>
  <li>Kirguizstán (kg)</li>
  <li>Armenio (hy)</li>
  <li>Croatian (hr)</li>
  <li>Esperanto (eo)</li>
</ul>
<p>Si su idioma de destino no está incluido, puede contribuir: simplemente añada  <a href="https://github.com/ElemeFE/element/tree/dev/src/locale/lang">aqui</a> otra configuración de idioma y cree un pull request.</p>
