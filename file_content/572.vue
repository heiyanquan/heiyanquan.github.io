<h2 id="kuai-su-shang-shou"><a class="header-anchor" href="#kuai-su-shang-shou">¶</a> 快速上手</h2>
<p>本节将介绍如何在项目中使用 Element。</p>
<h3 id="shi-yong-vue-cli-3"><a class="header-anchor" href="#shi-yong-vue-cli-3">¶</a> 使用 vue-cli@3</h3>
<p>我们为新版的 vue-cli 准备了相应的 <a href="https://github.com/ElementUI/vue-cli-plugin-element">Element 插件</a>，你可以用它们快速地搭建一个基于 Element 的项目。</p>
<h3 id="shi-yong-starter-kit"><a class="header-anchor" href="#shi-yong-starter-kit">¶</a> 使用 Starter Kit</h3>
<p>我们提供了通用的<a href="https://github.com/ElementUI/element-starter">项目模板</a>，你可以直接使用。对于 Laravel 用户，我们也准备了相应的<a href="https://github.com/ElementUI/element-in-laravel-starter">模板</a>，同样可以直接下载使用。</p>
<p>如果不希望使用我们提供的模板，请继续阅读。</p>
<h3 id="yin-ru-element"><a class="header-anchor" href="#yin-ru-element">¶</a> 引入 Element</h3>
<p>你可以引入整个 Element，或是根据需要仅引入部分组件。我们先介绍如何引入完整的 Element。</p>
<h4 id="wan-zheng-yin-ru"><a class="header-anchor" href="#wan-zheng-yin-ru">¶</a> 完整引入</h4>
<p>在 main.js 中写入以下内容：</p>
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
<p>以上代码便完成了 Element 的引入。需要注意的是，样式文件需要单独引入。</p>
<h4 id="an-xu-yin-ru"><a class="header-anchor" href="#an-xu-yin-ru">¶</a> 按需引入</h4>
<p>借助 <a href="https://github.com/QingWei-Li/babel-plugin-component">babel-plugin-component</a>，我们可以只引入需要的组件，以达到减小项目体积的目的。</p>
<p>首先，安装 babel-plugin-component：</p>
<pre><code class="language-bash">npm install babel-plugin-component -D
</code></pre>
<p>然后，将 .babelrc 修改为：</p>
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
<p>接下来，如果你只希望引入部分组件，比如 Button 和 Select，那么需要在 main.js 中写入以下内容：</p>
<pre><code class="language-javascript">import Vue from 'vue';
import { Button, Select } from 'element-ui';
import App from './App.vue';

Vue.component(Button.name, Button);
Vue.component(Select.name, Select);
/* 或写为
 * Vue.use(Button)
 * Vue.use(Select)
 */

new Vue({
  el: '#app',
  render: h =&gt; h(App)
});
</code></pre>
<p>完整组件列表和引入方式（完整组件列表以 <a href="https://github.com/ElemeFE/element/blob/master/components.json">components.json</a> 为准）</p>
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
<h3 id="quan-ju-pei-zhi"><a class="header-anchor" href="#quan-ju-pei-zhi">¶</a> 全局配置</h3>
<p>在引入 Element 时，可以传入一个全局配置对象。该对象目前支持 <code>size</code> 与 <code>zIndex</code> 字段。<code>size</code> 用于改变组件的默认尺寸，<code>zIndex</code> 设置弹框的初始 z-index（默认值：2000）。按照引入 Element 的方式，具体操作如下：</p>
<p>完整引入 Element：</p>
<pre><code class="language-js">import Vue from 'vue';
import Element from 'element-ui';
Vue.use(Element, { size: 'small', zIndex: 3000 });
</code></pre>
<p>按需引入 Element：</p>
<pre><code class="language-js">import Vue from 'vue';
import { Button } from 'element-ui';

Vue.prototype.$ELEMENT = { size: 'small', zIndex: 3000 };
Vue.use(Button);
</code></pre>
<p>按照以上设置，项目中所有拥有 <code>size</code> 属性的组件的默认尺寸均为 'small'，弹框的初始 z-index 为 3000。</p>
<h3 id="kai-shi-shi-yong"><a class="header-anchor" href="#kai-shi-shi-yong">¶</a> 开始使用</h3>
<p>至此，一个基于 Vue 和 Element 的开发环境已经搭建完毕，现在就可以编写代码了。各个组件的使用方法请参阅它们各自的文档。</p>
<h3 id="shi-yong-nuxt-js"><a class="header-anchor" href="#shi-yong-nuxt-js">¶</a> 使用 Nuxt.js</h3>
<p>我们还可以使用 <a href="https://nuxtjs.org">Nuxt.js</a>：</p>
<div class="glitch-embed-wrap" style="height: 420px; width: 100%;">
  <iframe src="https://glitch.com/embed/#!/embed/nuxt-with-element?path=nuxt.config.js&previewSize=0&attributionHidden=true" alt="nuxt-with-element on glitch" style="height: 100%; width: 100%; border: 0;"></iframe>
</div>
