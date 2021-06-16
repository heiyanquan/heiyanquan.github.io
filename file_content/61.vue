<h2 id="quick-start"><a class="header-anchor" href="#quick-start">¶</a> Quick start</h2>
<p>This part walks you through the process of using Element in a webpack project.</p>
<h3 id="use-vue-cli-3"><a class="header-anchor" href="#use-vue-cli-3">¶</a> Use vue-cli@3</h3>
<p>We provide an <a href="https://github.com/ElementUI/vue-cli-plugin-element">Element plugin</a> for vue-cli@3, which you can use to quickly build an Element-based project.</p>
<h3 id="use-starter-kit"><a class="header-anchor" href="#use-starter-kit">¶</a> Use Starter Kit</h3>
<p>We provide a general <a href="https://github.com/ElementUI/element-starter">project template</a> for you. For Laravel users, we also have a <a href="https://github.com/ElementUI/element-in-laravel-starter">template</a>. You can download and use them directly.</p>
<p>If you prefer not to use them, please read the following.</p>
<h3 id="import-element"><a class="header-anchor" href="#import-element">¶</a> Import Element</h3>
<p>You can import Element entirely, or just import what you need. Let's start with fully import.</p>
<h4 id="fully-import"><a class="header-anchor" href="#fully-import">¶</a> Fully import</h4>
<p>In main.js:</p>
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
<p>The above imports Element entirely. Note that CSS file needs to be imported separately.</p>
<h4 id="on-demand"><a class="header-anchor" href="#on-demand">¶</a> On demand</h4>
<p>With the help of <a href="https://github.com/QingWei-Li/babel-plugin-component">babel-plugin-component</a>, we can import components we actually need, making the project smaller than otherwise.</p>
<p>First, install babel-plugin-component:</p>
<pre><code class="language-bash">npm install babel-plugin-component -D
</code></pre>
<p>Then edit .babelrc:</p>
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
<p>Next, if you need Button and Select, edit main.js:</p>
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
<p>Full example (Component list reference <a href="https://github.com/ElemeFE/element/blob/master/components.json">components.json</a>)</p>
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
<h3 id="global-config"><a class="header-anchor" href="#global-config">¶</a> Global config</h3>
<p>When importing Element, you can define a global config object. For now this object has two properties: <code>size</code> and <code>zIndex</code>. The property <code>size</code> sets the default size for all components and the property <code>zIndex</code> sets the initial z-index (default: 2000) for modal boxes:</p>
<p>Fully import Element：</p>
<pre><code class="language-js">import Vue from 'vue';
import Element from 'element-ui';
Vue.use(Element, { size: 'small', zIndex: 3000 });
</code></pre>
<p>Partial import Element：</p>
<pre><code class="language-js">import Vue from 'vue';
import { Button } from 'element-ui';

Vue.prototype.$ELEMENT = { size: 'small', zIndex: 3000 };
Vue.use(Button);
</code></pre>
<p>With the above config, the default size of all components that have size attribute will be 'small', and the initial z-index of modal boxes is 3000.</p>
<h3 id="start-coding"><a class="header-anchor" href="#start-coding">¶</a> Start coding</h3>
<p>Now you have implemented Vue and Element to your project, and it's time to write your code. Please refer to each component's documentation to learn how to use them.</p>
<h3 id="use-nuxt-js"><a class="header-anchor" href="#use-nuxt-js">¶</a> Use Nuxt.js</h3>
<p>We can also start a project using <a href="https://nuxtjs.org/">Nuxt.js</a>:</p>
<div class="glitch-embed-wrap" style="height: 420px; width: 100%;">
  <iframe src="https://glitch.com/embed/#!/embed/nuxt-with-element?path=nuxt.config.js&previewSize=0&attributionHidden=true" alt="nuxt-with-element on glitch" style="height: 100%; width: 100%; border: 0;"></iframe>
</div>
