<h2 id="demarrer"><a class="header-anchor" href="#demarrer">¶</a> Démarrer</h2>
<p>Cette page vous guidera tout le long de l'installation d'Element au sein d'un projet webpack.</p>
<h3 id="use-vue-cli-3"><a class="header-anchor" href="#use-vue-cli-3">¶</a> Use vue-cli@3</h3>
<p>Nous fournissons un <a href="https://github.com/ElementUI/vue-cli-plugin-element">plugin Element</a> pour vue-cli@3, que vous pouvez utiliser pour créer rapidement un projet basé sur Element.</p>
<h3 id="utiliser-le-starter-kit"><a class="header-anchor" href="#utiliser-le-starter-kit">¶</a> Utiliser le Starter Kit</h3>
<p>Nous fournissons un <a href="https://github.com/ElementUI/element-starter">template de projet</a> pour débuter rapidement. Pour les utilisateurs Laravel, il est aussi possible d'utiliser ce <a href="https://github.com/ElementUI/element-in-laravel-starter">template</a>. VOus pouvez les télécharger directement.</p>
<p>Si vous préférer vous passer de template, voyez la section suivante.</p>
<h3 id="importer-element"><a class="header-anchor" href="#importer-element">¶</a> Importer Element</h3>
<p>Element peut être importé entièrement ou à la demande. Commençons par l'import total.</p>
<h4 id="import-total"><a class="header-anchor" href="#import-total">¶</a> Import total</h4>
<p>Dans main.js:</p>
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
<p>L'exemple ci-dessus importe Element entièrement. Notez que les fichiers CSS doivent être importés séparément.</p>
<h4 id="a-la-demande"><a class="header-anchor" href="#a-la-demande">¶</a> À la demande</h4>
<p>Grâce au <a href="https://github.com/QingWei-Li/babel-plugin-component">babel-plugin-component</a>, nous pouvons importer uniquement les composants désirés, rendant ainsi le projet plus léger.</p>
<p>Tout d'abord, installez babel-plugin-component:</p>
<pre><code class="language-bash">npm install babel-plugin-component -D
</code></pre>
<p>Puis éditez .babelrc:</p>
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
<p>Ensuite, si vous n'avez besoin que de Button et Select, éditez main.js comme suit:</p>
<pre><code class="language-javascript">import Vue from 'vue';
import { Button, Select } from 'element-ui';
import App from './App.vue';

Vue.component(Button.name, Button);
Vue.component(Select.name, Select);
/* ou
 * Vue.use(Button)
 * Vue.use(Select)
 */

new Vue({
  el: '#app',
  render: h =&gt; h(App)
});
</code></pre>
<p>Exemple complet (liste complète des composants dans <a href="https://github.com/ElemeFE/element/blob/master/components.json">components.json</a>):</p>
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
<h3 id="configuration-globale"><a class="header-anchor" href="#configuration-globale">¶</a> Configuration globale</h3>
<p>Lors de l'import d'Element, vous pouvez définir un objet de configuration global. Actuellement il possède de propriétés: <code>size</code> et <code>zIndex</code>. La propriété <code>size</code> détermine la taille par défaut de tout les composants et <code>zIndex</code> règle le z-index initial (default: 2000) des fenêtres modales:</p>
<p>Import total d'Element：</p>
<pre><code class="language-js">import Vue from 'vue';
import Element from 'element-ui';
Vue.use(Element, { size: 'small', zIndex: 3000 });
</code></pre>
<p>Import partiel d'Element：</p>
<pre><code class="language-js">import Vue from 'vue';
import { Button } from 'element-ui';

Vue.prototype.$ELEMENT = { size: 'small', zIndex: 3000 };
Vue.use(Button);
</code></pre>
<p>Avec la configuration ci-dessus, la taille par défaut des composants ayant l'attribut size sera 'small', et le z-index initial des fenêtres modales est 3000.</p>
<h3 id="commencer-a-developper"><a class="header-anchor" href="#commencer-a-developper">¶</a> Commencer à développer</h3>
<p>Maintenant que vous avez ajouté Vue et Element à votre projet, vous pouvez commencer à coder. Référez-vous à la documentation de chaque composant pour savoir comment les utiliser.</p>
<h3 id="utiliser-nuxt-js"><a class="header-anchor" href="#utiliser-nuxt-js">¶</a> Utiliser Nuxt.js</h3>
<p>Vous pouvez également commencer un projet avec <a href="https://nuxtjs.org/">Nuxt.js</a>:</p>
<div class="glitch-embed-wrap" style="height: 420px; width: 100%;">
  <iframe src="https://glitch.com/embed/#!/embed/nuxt-with-element?path=nuxt.config.js&previewSize=0&attributionHidden=true" alt="nuxt-with-element on glitch" style="height: 100%; width: 100%; border: 0;"></iframe>
</div>
