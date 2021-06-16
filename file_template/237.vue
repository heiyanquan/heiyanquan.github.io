<h2 id="inicio-rapido"><a class="header-anchor" href="#inicio-rapido">¶</a> Inicio rápido</h2>
<p>Esta sección te guía en el proceso de usar Element con webpack en un proyecto.</p>
<h3 id="use-vue-cli-3"><a class="header-anchor" href="#use-vue-cli-3">¶</a> Use vue-cli@3</h3>
<p>Proporcionamos un <a href="https://github.com/ElementUI/vue-cli-plugin-element">plugin de Element</a> para vue-cli@3, que puede utilizar para construir rápidamente un proyecto basado en Element.</p>
<h3 id="usa-la-plantilla-de-kit-de-inicio"><a class="header-anchor" href="#usa-la-plantilla-de-kit-de-inicio">¶</a> Usa la plantilla de Kit de inicio</h3>
<p>Proveemos una plantilla general <a href="https://github.com/ElementUI/element-starter">project template</a>. Para los usuarios de Laravel, también tenemos <a href="https://github.com/ElementUI/element-in-laravel-starter">template</a>. Puedes descargarlas y agregarlas directamente también.</p>
<p>Si prefiere no utilizarlas, lee las siguientes secciones de este documento.</p>
<h3 id="importando-element"><a class="header-anchor" href="#importando-element">¶</a> Importando Element</h3>
<p>Puede importar Element completamente o solamente importar lo que necesite. Comencemos importando todo.</p>
<h4 id="importando-todo"><a class="header-anchor" href="#importando-todo">¶</a> Importando todo</h4>
<p>En main.js:</p>
<pre><code class="language-javascript">import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue';

Vue.use(ElementUI);

new Vue({
  el: '#app',
  render: h =&gt; h(App)
});
</code></pre>
<p>El código anterior importa Element completamente. Nótese que el archivo CSS necesita ser incluido por separado.</p>
<h4 id="en-demanda"><a class="header-anchor" href="#en-demanda">¶</a> En demanda</h4>
<p>Con la ayuda de <a href="https://github.com/QingWei-Li/babel-plugin-component">babel-plugin-component</a>, podemos importar los componentes que necesitamos, haciendo nuestro proyecto más pequeño que de la otra manera.</p>
<p>Primero, instale babel-plugin-component:</p>
<pre><code class="language-bash">npm install babel-plugin-component -D
</code></pre>
<p>Luego edite .babelrc:</p>
<pre><code class="language-json">{
  &quot;presets&quot;: [[&quot;es2015&quot;, { &quot;modules&quot;: false }]],
  &quot;plugins&quot;: [
    [
      &quot;component&quot;,
      {
        &quot;libraryName&quot;: &quot;element-ui&quot;,
        &quot;styleLibraryName&quot;: &quot;theme-chalk&quot;
      }
    ]
  ]
}
</code></pre>
<p>Luego, si necesita Button y Select, edite main.js:</p>
<pre><code class="language-javascript">import Vue from 'vue';
import { Button, Select } from 'element-ui';
import App from './App.vue';

Vue.component(Button.name, Button);
Vue.component(Select.name, Select);
/* or
 * Vue.use(Button)
 * Vue.use(Select)
 */

new Vue({
  el: '#app',
  render: h =&gt; h(App)
});
</code></pre>
<p>Ejemplo completo (Referencia completa de componentes <a href="https://github.com/ElemeFE/element/blob/master/components.json">components.json</a>)</p>
<pre><code class="language-javascript">import Vue from 'vue';
import {
  Pagination,
  Dialog,
  Autocomplete,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  Menu,
  Submenu,
  MenuItem,
  MenuItemGroup,
  Input,
  InputNumber,
  Radio,
  RadioGroup,
  RadioButton,
  Checkbox,
  CheckboxButton,
  CheckboxGroup,
  Switch,
  Select,
  Option,
  OptionGroup,
  Button,
  ButtonGroup,
  Table,
  TableColumn,
  DatePicker,
  TimeSelect,
  TimePicker,
  Popover,
  Tooltip,
  Breadcrumb,
  BreadcrumbItem,
  Form,
  FormItem,
  Tabs,
  TabPane,
  Tag,
  Tree,
  Alert,
  Slider,
  Icon,
  Row,
  Col,
  Upload,
  Progress,
  Spinner,
  Badge,
  Card,
  Rate,
  Steps,
  Step,
  Carousel,
  CarouselItem,
  Collapse,
  CollapseItem,
  Cascader,
  ColorPicker,
  Transfer,
  Container,
  Header,
  Aside,
  Main,
  Footer,
  Timeline,
  TimelineItem,
  Link,
  Divider,
  Image,
  Calendar,
  Backtop,
  PageHeader,
  CascaderPanel,
  Loading,
  MessageBox,
  Message,
  Notification
} from 'element-ui';

Vue.use(Pagination);
Vue.use(Dialog);
Vue.use(Autocomplete);
Vue.use(Dropdown);
Vue.use(DropdownMenu);
Vue.use(DropdownItem);
Vue.use(Menu);
Vue.use(Submenu);
Vue.use(MenuItem);
Vue.use(MenuItemGroup);
Vue.use(Input);
Vue.use(InputNumber);
Vue.use(Radio);
Vue.use(RadioGroup);
Vue.use(RadioButton);
Vue.use(Checkbox);
Vue.use(CheckboxButton);
Vue.use(CheckboxGroup);
Vue.use(Switch);
Vue.use(Select);
Vue.use(Option);
Vue.use(OptionGroup);
Vue.use(Button);
Vue.use(ButtonGroup);
Vue.use(Table);
Vue.use(TableColumn);
Vue.use(DatePicker);
Vue.use(TimeSelect);
Vue.use(TimePicker);
Vue.use(Popover);
Vue.use(Tooltip);
Vue.use(Breadcrumb);
Vue.use(BreadcrumbItem);
Vue.use(Form);
Vue.use(FormItem);
Vue.use(Tabs);
Vue.use(TabPane);
Vue.use(Tag);
Vue.use(Tree);
Vue.use(Alert);
Vue.use(Slider);
Vue.use(Icon);
Vue.use(Row);
Vue.use(Col);
Vue.use(Upload);
Vue.use(Progress);
Vue.use(Spinner);
Vue.use(Badge);
Vue.use(Card);
Vue.use(Rate);
Vue.use(Steps);
Vue.use(Step);
Vue.use(Carousel);
Vue.use(CarouselItem);
Vue.use(Collapse);
Vue.use(CollapseItem);
Vue.use(Cascader);
Vue.use(ColorPicker);
Vue.use(Transfer);
Vue.use(Container);
Vue.use(Header);
Vue.use(Aside);
Vue.use(Main);
Vue.use(Footer);
Vue.use(Timeline);
Vue.use(TimelineItem);
Vue.use(Link);
Vue.use(Divider);
Vue.use(Image);
Vue.use(Calendar);
Vue.use(Backtop);
Vue.use(PageHeader);
Vue.use(CascaderPanel);

Vue.use(Loading.directive);

Vue.prototype.$loading = Loading.service;
Vue.prototype.$msgbox = MessageBox;
Vue.prototype.$alert = MessageBox.alert;
Vue.prototype.$confirm = MessageBox.confirm;
Vue.prototype.$prompt = MessageBox.prompt;
Vue.prototype.$notify = Notification;
Vue.prototype.$message = Message;
</code></pre>
<h3 id="configuracion-global"><a class="header-anchor" href="#configuracion-global">¶</a> Configuración global</h3>
<p>Cuando importa Element, puede definir un objeto global de configuración. Por ahora este elemento solo contiene dos propiedades: <code>size</code>, <code>zIndex</code>. <code>size</code> define el tamaño por defecto de todos los componentes.</p>
<p>La propiedad <code>zIndex</code> indica el z-index inicial (por defecto: 2000) para los modal:</p>
<p>Importando Element completamente：</p>
<pre><code class="language-js">import Vue from 'vue';
import Element from 'element-ui';
Vue.use(Element, { size: 'small', zIndex: 3000 });
</code></pre>
<p>Importando Element parcialmente：</p>
<pre><code class="language-js">import Vue from 'vue';
import { Button } from 'element-ui';

Vue.prototype.$ELEMENT = { size: 'small', zIndex: 3000 };
Vue.use(Button);
</code></pre>
<p>Con la anterior configuración, el tamaño por defecto de todos los componentes que tienen el atributo <code>size</code> será <code>small</code>. El valor inicial de z-index para los modals se ha establecido a 3000.</p>
<h3 id="empiece-ya"><a class="header-anchor" href="#empiece-ya">¶</a> Empiece ya!</h3>
<p>Ahora ha incorporado Vue y Element a su proyecto y es el momento para comenzar a programar. Por favor, refiérase a la documentación de cada componente para aprender cómo usarlos.</p>
<h3 id="use-nuxt-js"><a class="header-anchor" href="#use-nuxt-js">¶</a> Use Nuxt.js</h3>
<p>También podemos comenzar un proyecto usando <a href="nuxtjs.org">Nuxt.js</a>:</p>
<div class="glitch-embed-wrap" style="height: 420px; width: 100%;">
  <iframe src="https://glitch.com/embed/#!/embed/nuxt-with-element?path=nuxt.config.js&previewSize=0&attributionHidden=true" alt="nuxt-with-element on glitch" style="height: 100%; width: 100%; border: 0;"></iframe>
</div>
