<h2 id="input-shu-ru-kuang"><a class="header-anchor" href="#input-shu-ru-kuang">¶</a> Input 输入框</h2>
<p>通过鼠标或键盘输入字符</p>
<div class="warning">
<p>Input 为受控组件，它<strong>总会显示 Vue 绑定值</strong>。</p>
<p>通常情况下，应当处理 <code>input</code> 事件，并更新组件的绑定值（或使用<code>v-model</code>）。否则，输入框内显示的值将不会改变。</p>
<p>不支持 <code>v-model</code> 修饰符。</p>
</div>
<h3 id="ji-chu-yong-fa"><a class="header-anchor" href="#ji-chu-yong-fa">¶</a> 基础用法</h3>
<demo-block>
        
        <!--element-demo: <el-input v-model="input" placeholder="请输入内容"></el-input>

<script>
export default {
  data() {
    return {
      input: ''
    }
  }
}
</script>
:element-demo-->
        <template slot="highlight"><pre v-pre><code class="html">&lt;el-input v-model=&quot;input&quot; placeholder=&quot;请输入内容&quot;&gt;&lt;/el-input&gt;

&lt;script&gt;
export default {
  data() {
    return {
      input: ''
    }
  }
}
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="jin-yong-zhuang-tai"><a class="header-anchor" href="#jin-yong-zhuang-tai">¶</a> 禁用状态</h3>
<demo-block>
        <div><p>通过 <code>disabled</code> 属性指定是否禁用 input 组件</p>
</div>
        <!--element-demo: <el-input
  placeholder="请输入内容"
  v-model="input"
  :disabled="true">
</el-input>

<script>
export default {
  data() {
    return {
      input: ''
    }
  }
}
</script>
:element-demo-->
        <template slot="highlight"><pre v-pre><code class="html">&lt;el-input
  placeholder=&quot;请输入内容&quot;
  v-model=&quot;input&quot;
  :disabled=&quot;true&quot;&gt;
&lt;/el-input&gt;

&lt;script&gt;
export default {
  data() {
    return {
      input: ''
    }
  }
}
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="ke-qing-kong"><a class="header-anchor" href="#ke-qing-kong">¶</a> 可清空</h3>
<demo-block>
        <div><p>使用<code>clearable</code>属性即可得到一个可清空的输入框</p>
</div>
        <!--element-demo: <el-input
  placeholder="请输入内容"
  v-model="input"
  clearable>
</el-input>

<script>
  export default {
    data() {
      return {
        input: ''
      }
    }
  }
</script>
:element-demo-->
        <template slot="highlight"><pre v-pre><code class="html">&lt;el-input
  placeholder=&quot;请输入内容&quot;
  v-model=&quot;input&quot;
  clearable&gt;
&lt;/el-input&gt;

&lt;script&gt;
  export default {
    data() {
      return {
        input: ''
      }
    }
  }
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="mi-ma-kuang"><a class="header-anchor" href="#mi-ma-kuang">¶</a> 密码框</h3>
<demo-block>
        <div><p>使用<code>show-password</code>属性即可得到一个可切换显示隐藏的密码框</p>
</div>
        <!--element-demo: <el-input placeholder="请输入密码" v-model="input" show-password></el-input>

<script>
  export default {
    data() {
      return {
        input: ''
      }
    }
  }
</script>
:element-demo-->
        <template slot="highlight"><pre v-pre><code class="html">&lt;el-input placeholder=&quot;请输入密码&quot; v-model=&quot;input&quot; show-password&gt;&lt;/el-input&gt;

&lt;script&gt;
  export default {
    data() {
      return {
        input: ''
      }
    }
  }
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="dai-icon-de-shu-ru-kuang"><a class="header-anchor" href="#dai-icon-de-shu-ru-kuang">¶</a> 带 icon 的输入框</h3>
<p>带有图标标记输入类型</p>
<demo-block>
        <div><p>可以通过 <code>prefix-icon</code> 和 <code>suffix-icon</code> 属性在 input 组件首部和尾部增加显示图标，也可以通过 slot 来放置图标。</p>
</div>
        <!--element-demo: <div class="demo-input-suffix">
  属性方式：
  <el-input
    placeholder="请选择日期"
    suffix-icon="el-icon-date"
    v-model="input1">
  </el-input>
  <el-input
    placeholder="请输入内容"
    prefix-icon="el-icon-search"
    v-model="input2">
  </el-input>
</div>
<div class="demo-input-suffix">
  slot 方式：
  <el-input
    placeholder="请选择日期"
    v-model="input3">
    <i slot="suffix" class="el-input__icon el-icon-date"></i>
  </el-input>
  <el-input
    placeholder="请输入内容"
    v-model="input4">
    <i slot="prefix" class="el-input__icon el-icon-search"></i>
  </el-input>
</div>

<script>
export default {
  data() {
    return {
      input1: '',
      input2: '',
      input3: '',
      input4: ''
    }
  }
}
</script>
:element-demo-->
        <template slot="highlight"><pre v-pre><code class="html">&lt;div class=&quot;demo-input-suffix&quot;&gt;
  属性方式：
  &lt;el-input
    placeholder=&quot;请选择日期&quot;
    suffix-icon=&quot;el-icon-date&quot;
    v-model=&quot;input1&quot;&gt;
  &lt;/el-input&gt;
  &lt;el-input
    placeholder=&quot;请输入内容&quot;
    prefix-icon=&quot;el-icon-search&quot;
    v-model=&quot;input2&quot;&gt;
  &lt;/el-input&gt;
&lt;/div&gt;
&lt;div class=&quot;demo-input-suffix&quot;&gt;
  slot 方式：
  &lt;el-input
    placeholder=&quot;请选择日期&quot;
    v-model=&quot;input3&quot;&gt;
    &lt;i slot=&quot;suffix&quot; class=&quot;el-input__icon el-icon-date&quot;&gt;&lt;/i&gt;
  &lt;/el-input&gt;
  &lt;el-input
    placeholder=&quot;请输入内容&quot;
    v-model=&quot;input4&quot;&gt;
    &lt;i slot=&quot;prefix&quot; class=&quot;el-input__icon el-icon-search&quot;&gt;&lt;/i&gt;
  &lt;/el-input&gt;
&lt;/div&gt;

&lt;script&gt;
export default {
  data() {
    return {
      input1: '',
      input2: '',
      input3: '',
      input4: ''
    }
  }
}
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="wen-ben-yu"><a class="header-anchor" href="#wen-ben-yu">¶</a> 文本域</h3>
<p>用于输入多行文本信息，通过将 <code>type</code> 属性的值指定为 textarea。</p>
<demo-block>
        <div><p>文本域高度可通过 <code>rows</code> 属性控制</p>
</div>
        <!--element-demo: <el-input
  type="textarea"
  :rows="2"
  placeholder="请输入内容"
  v-model="textarea">
</el-input>

<script>
export default {
  data() {
    return {
      textarea: ''
    }
  }
}
</script>
:element-demo-->
        <template slot="highlight"><pre v-pre><code class="html">&lt;el-input
  type=&quot;textarea&quot;
  :rows=&quot;2&quot;
  placeholder=&quot;请输入内容&quot;
  v-model=&quot;textarea&quot;&gt;
&lt;/el-input&gt;

&lt;script&gt;
export default {
  data() {
    return {
      textarea: ''
    }
  }
}
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="ke-zi-gua-ying-wen-ben-gao-du-de-wen-ben-yu"><a class="header-anchor" href="#ke-zi-gua-ying-wen-ben-gao-du-de-wen-ben-yu">¶</a> 可自适应文本高度的文本域</h3>
<p>通过设置 <code>autosize</code> 属性可以使得文本域的高度能够根据文本内容自动进行调整，并且 <code>autosize</code> 还可以设定为一个对象，指定最小行数和最大行数。</p>
<demo-block>
        
        <!--element-demo: <el-input
  type="textarea"
  autosize
  placeholder="请输入内容"
  v-model="textarea1">
</el-input>
<div style="margin: 20px 0;"></div>
<el-input
  type="textarea"
  :autosize="{ minRows: 2, maxRows: 4}"
  placeholder="请输入内容"
  v-model="textarea2">
</el-input>

<script>
export default {
  data() {
    return {
      textarea1: '',
      textarea2: ''
    }
  }
}
</script>
:element-demo-->
        <template slot="highlight"><pre v-pre><code class="html">&lt;el-input
  type=&quot;textarea&quot;
  autosize
  placeholder=&quot;请输入内容&quot;
  v-model=&quot;textarea1&quot;&gt;
&lt;/el-input&gt;
&lt;div style=&quot;margin: 20px 0;&quot;&gt;&lt;/div&gt;
&lt;el-input
  type=&quot;textarea&quot;
  :autosize=&quot;{ minRows: 2, maxRows: 4}&quot;
  placeholder=&quot;请输入内容&quot;
  v-model=&quot;textarea2&quot;&gt;
&lt;/el-input&gt;

&lt;script&gt;
export default {
  data() {
    return {
      textarea1: '',
      textarea2: ''
    }
  }
}
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="fu-he-xing-shu-ru-kuang"><a class="header-anchor" href="#fu-he-xing-shu-ru-kuang">¶</a> 复合型输入框</h3>
<p>可前置或后置元素，一般为标签或按钮</p>
<demo-block>
        <div><p>可通过 slot 来指定在 input 中前置或者后置内容。</p>
</div>
        <!--element-demo: <div>
  <el-input placeholder="请输入内容" v-model="input1">
    <template slot="prepend">Http://</template>
  </el-input>
</div>
<div style="margin-top: 15px;">
  <el-input placeholder="请输入内容" v-model="input2">
    <template slot="append">.com</template>
  </el-input>
</div>
<div style="margin-top: 15px;">
  <el-input placeholder="请输入内容" v-model="input3" class="input-with-select">
    <el-select v-model="select" slot="prepend" placeholder="请选择">
      <el-option label="餐厅名" value="1"></el-option>
      <el-option label="订单号" value="2"></el-option>
      <el-option label="用户电话" value="3"></el-option>
    </el-select>
    <el-button slot="append" icon="el-icon-search"></el-button>
  </el-input>
</div>
<style>
  .el-select .el-input {
    width: 130px;
  }
  .input-with-select .el-input-group__prepend {
    background-color: #fff;
  }
</style>
<script>
export default {
  data() {
    return {
      input1: '',
      input2: '',
      input3: '',
      select: ''
    }
  }
}
</script>
:element-demo-->
        <template slot="highlight"><pre v-pre><code class="html">&lt;div&gt;
  &lt;el-input placeholder=&quot;请输入内容&quot; v-model=&quot;input1&quot;&gt;
    &lt;template slot=&quot;prepend&quot;&gt;Http://&lt;/template&gt;
  &lt;/el-input&gt;
&lt;/div&gt;
&lt;div style=&quot;margin-top: 15px;&quot;&gt;
  &lt;el-input placeholder=&quot;请输入内容&quot; v-model=&quot;input2&quot;&gt;
    &lt;template slot=&quot;append&quot;&gt;.com&lt;/template&gt;
  &lt;/el-input&gt;
&lt;/div&gt;
&lt;div style=&quot;margin-top: 15px;&quot;&gt;
  &lt;el-input placeholder=&quot;请输入内容&quot; v-model=&quot;input3&quot; class=&quot;input-with-select&quot;&gt;
    &lt;el-select v-model=&quot;select&quot; slot=&quot;prepend&quot; placeholder=&quot;请选择&quot;&gt;
      &lt;el-option label=&quot;餐厅名&quot; value=&quot;1&quot;&gt;&lt;/el-option&gt;
      &lt;el-option label=&quot;订单号&quot; value=&quot;2&quot;&gt;&lt;/el-option&gt;
      &lt;el-option label=&quot;用户电话&quot; value=&quot;3&quot;&gt;&lt;/el-option&gt;
    &lt;/el-select&gt;
    &lt;el-button slot=&quot;append&quot; icon=&quot;el-icon-search&quot;&gt;&lt;/el-button&gt;
  &lt;/el-input&gt;
&lt;/div&gt;
&lt;style&gt;
  .el-select .el-input {
    width: 130px;
  }
  .input-with-select .el-input-group__prepend {
    background-color: #fff;
  }
&lt;/style&gt;
&lt;script&gt;
export default {
  data() {
    return {
      input1: '',
      input2: '',
      input3: '',
      select: ''
    }
  }
}
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="chi-cun"><a class="header-anchor" href="#chi-cun">¶</a> 尺寸</h3>
<demo-block>
        <div><p>可通过 <code>size</code> 属性指定输入框的尺寸，除了默认的大小外，还提供了 large、small 和 mini 三种尺寸。</p>
</div>
        <!--element-demo: <div class="demo-input-size">
  <el-input
    placeholder="请输入内容"
    suffix-icon="el-icon-date"
    v-model="input1">
  </el-input>
  <el-input
    size="medium"
    placeholder="请输入内容"
    suffix-icon="el-icon-date"
    v-model="input2">
  </el-input>
  <el-input
    size="small"
    placeholder="请输入内容"
    suffix-icon="el-icon-date"
    v-model="input3">
  </el-input>
  <el-input
    size="mini"
    placeholder="请输入内容"
    suffix-icon="el-icon-date"
    v-model="input4">
  </el-input>
</div>

<script>
export default {
  data() {
    return {
      input1: '',
      input2: '',
      input3: '',
      input4: ''
    }
  }
}
</script>
:element-demo-->
        <template slot="highlight"><pre v-pre><code class="html">&lt;div class=&quot;demo-input-size&quot;&gt;
  &lt;el-input
    placeholder=&quot;请输入内容&quot;
    suffix-icon=&quot;el-icon-date&quot;
    v-model=&quot;input1&quot;&gt;
  &lt;/el-input&gt;
  &lt;el-input
    size=&quot;medium&quot;
    placeholder=&quot;请输入内容&quot;
    suffix-icon=&quot;el-icon-date&quot;
    v-model=&quot;input2&quot;&gt;
  &lt;/el-input&gt;
  &lt;el-input
    size=&quot;small&quot;
    placeholder=&quot;请输入内容&quot;
    suffix-icon=&quot;el-icon-date&quot;
    v-model=&quot;input3&quot;&gt;
  &lt;/el-input&gt;
  &lt;el-input
    size=&quot;mini&quot;
    placeholder=&quot;请输入内容&quot;
    suffix-icon=&quot;el-icon-date&quot;
    v-model=&quot;input4&quot;&gt;
  &lt;/el-input&gt;
&lt;/div&gt;

&lt;script&gt;
export default {
  data() {
    return {
      input1: '',
      input2: '',
      input3: '',
      input4: ''
    }
  }
}
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="dai-shu-ru-jian-yi"><a class="header-anchor" href="#dai-shu-ru-jian-yi">¶</a> 带输入建议</h3>
<p>根据输入内容提供对应的输入建议</p>
<demo-block>
        <div><p>autocomplete 是一个可带输入建议的输入框组件，<code>fetch-suggestions</code> 是一个返回输入建议的方法属性，如 querySearch(queryString, cb)，在该方法中你可以在你的输入建议数据准备好时通过 cb(data) 返回到 autocomplete 组件中。</p>
</div>
        <!--element-demo: <el-row class="demo-autocomplete">
  <el-col :span="12">
    <div class="sub-title">激活即列出输入建议</div>
    <el-autocomplete
      class="inline-input"
      v-model="state1"
      :fetch-suggestions="querySearch"
      placeholder="请输入内容"
      @select="handleSelect"
    ></el-autocomplete>
  </el-col>
  <el-col :span="12">
    <div class="sub-title">输入后匹配输入建议</div>
    <el-autocomplete
      class="inline-input"
      v-model="state2"
      :fetch-suggestions="querySearch"
      placeholder="请输入内容"
      :trigger-on-focus="false"
      @select="handleSelect"
    ></el-autocomplete>
  </el-col>
</el-row>
<script>
  export default {
    data() {
      return {
        restaurants: [],
        state1: '',
        state2: ''
      };
    },
    methods: {
      querySearch(queryString, cb) {
        var restaurants = this.restaurants;
        var results = queryString ? restaurants.filter(this.createFilter(queryString)) : restaurants;
        // 调用 callback 返回建议列表的数据
        cb(results);
      },
      createFilter(queryString) {
        return (restaurant) => {
          return (restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0);
        };
      },
      loadAll() {
        return [
          { "value": "三全鲜食（北新泾店）", "address": "长宁区新渔路144号" },
          { "value": "Hot honey 首尔炸鸡（仙霞路）", "address": "上海市长宁区淞虹路661号" },
          { "value": "新旺角茶餐厅", "address": "上海市普陀区真北路988号创邑金沙谷6号楼113" },
          { "value": "泷千家(天山西路店)", "address": "天山西路438号" },
          { "value": "胖仙女纸杯蛋糕（上海凌空店）", "address": "上海市长宁区金钟路968号1幢18号楼一层商铺18-101" },
          { "value": "贡茶", "address": "上海市长宁区金钟路633号" },
          { "value": "豪大大香鸡排超级奶爸", "address": "上海市嘉定区曹安公路曹安路1685号" },
          { "value": "茶芝兰（奶茶，手抓饼）", "address": "上海市普陀区同普路1435号" },
          { "value": "十二泷町", "address": "上海市北翟路1444弄81号B幢-107" },
          { "value": "星移浓缩咖啡", "address": "上海市嘉定区新郁路817号" },
          { "value": "阿姨奶茶/豪大大", "address": "嘉定区曹安路1611号" },
          { "value": "新麦甜四季甜品炸鸡", "address": "嘉定区曹安公路2383弄55号" },
          { "value": "Monica摩托主题咖啡店", "address": "嘉定区江桥镇曹安公路2409号1F，2383弄62号1F" },
          { "value": "浮生若茶（凌空soho店）", "address": "上海长宁区金钟路968号9号楼地下一层" },
          { "value": "NONO JUICE  鲜榨果汁", "address": "上海市长宁区天山西路119号" },
          { "value": "CoCo都可(北新泾店）", "address": "上海市长宁区仙霞西路" },
          { "value": "快乐柠檬（神州智慧店）", "address": "上海市长宁区天山西路567号1层R117号店铺" },
          { "value": "Merci Paul cafe", "address": "上海市普陀区光复西路丹巴路28弄6号楼819" },
          { "value": "猫山王（西郊百联店）", "address": "上海市长宁区仙霞西路88号第一层G05-F01-1-306" },
          { "value": "枪会山", "address": "上海市普陀区棕榈路" },
          { "value": "纵食", "address": "元丰天山花园(东门) 双流路267号" },
          { "value": "钱记", "address": "上海市长宁区天山西路" },
          { "value": "壹杯加", "address": "上海市长宁区通协路" },
          { "value": "唦哇嘀咖", "address": "上海市长宁区新泾镇金钟路999号2幢（B幢）第01层第1-02A单元" },
          { "value": "爱茜茜里(西郊百联)", "address": "长宁区仙霞西路88号1305室" },
          { "value": "爱茜茜里(近铁广场)", "address": "上海市普陀区真北路818号近铁城市广场北区地下二楼N-B2-O2-C商铺" },
          { "value": "鲜果榨汁（金沙江路和美广店）", "address": "普陀区金沙江路2239号金沙和美广场B1-10-6" },
          { "value": "开心丽果（缤谷店）", "address": "上海市长宁区威宁路天山路341号" },
          { "value": "超级鸡车（丰庄路店）", "address": "上海市嘉定区丰庄路240号" },
          { "value": "妙生活果园（北新泾店）", "address": "长宁区新渔路144号" },
          { "value": "香宜度麻辣香锅", "address": "长宁区淞虹路148号" },
          { "value": "凡仔汉堡（老真北路店）", "address": "上海市普陀区老真北路160号" },
          { "value": "港式小铺", "address": "上海市长宁区金钟路968号15楼15-105室" },
          { "value": "蜀香源麻辣香锅（剑河路店）", "address": "剑河路443-1" },
          { "value": "北京饺子馆", "address": "长宁区北新泾街道天山西路490-1号" },
          { "value": "饭典*新简餐（凌空SOHO店）", "address": "上海市长宁区金钟路968号9号楼地下一层9-83室" },
          { "value": "焦耳·川式快餐（金钟路店）", "address": "上海市金钟路633号地下一层甲部" },
          { "value": "动力鸡车", "address": "长宁区仙霞西路299弄3号101B" },
          { "value": "浏阳蒸菜", "address": "天山西路430号" },
          { "value": "四海游龙（天山西路店）", "address": "上海市长宁区天山西路" },
          { "value": "樱花食堂（凌空店）", "address": "上海市长宁区金钟路968号15楼15-105室" },
          { "value": "壹分米客家传统调制米粉(天山店)", "address": "天山西路428号" },
          { "value": "福荣祥烧腊（平溪路店）", "address": "上海市长宁区协和路福泉路255弄57-73号" },
          { "value": "速记黄焖鸡米饭", "address": "上海市长宁区北新泾街道金钟路180号1层01号摊位" },
          { "value": "红辣椒麻辣烫", "address": "上海市长宁区天山西路492号" },
          { "value": "(小杨生煎)西郊百联餐厅", "address": "长宁区仙霞西路88号百联2楼" },
          { "value": "阳阳麻辣烫", "address": "天山西路389号" },
          { "value": "南拳妈妈龙虾盖浇饭", "address": "普陀区金沙江路1699号鑫乐惠美食广场A13" }
        ];
      },
      handleSelect(item) {
        console.log(item);
      }
    },
    mounted() {
      this.restaurants = this.loadAll();
    }
  }
</script>
:element-demo-->
        <template slot="highlight"><pre v-pre><code class="html">&lt;el-row class=&quot;demo-autocomplete&quot;&gt;
  &lt;el-col :span=&quot;12&quot;&gt;
    &lt;div class=&quot;sub-title&quot;&gt;激活即列出输入建议&lt;/div&gt;
    &lt;el-autocomplete
      class=&quot;inline-input&quot;
      v-model=&quot;state1&quot;
      :fetch-suggestions=&quot;querySearch&quot;
      placeholder=&quot;请输入内容&quot;
      @select=&quot;handleSelect&quot;
    &gt;&lt;/el-autocomplete&gt;
  &lt;/el-col&gt;
  &lt;el-col :span=&quot;12&quot;&gt;
    &lt;div class=&quot;sub-title&quot;&gt;输入后匹配输入建议&lt;/div&gt;
    &lt;el-autocomplete
      class=&quot;inline-input&quot;
      v-model=&quot;state2&quot;
      :fetch-suggestions=&quot;querySearch&quot;
      placeholder=&quot;请输入内容&quot;
      :trigger-on-focus=&quot;false&quot;
      @select=&quot;handleSelect&quot;
    &gt;&lt;/el-autocomplete&gt;
  &lt;/el-col&gt;
&lt;/el-row&gt;
&lt;script&gt;
  export default {
    data() {
      return {
        restaurants: [],
        state1: '',
        state2: ''
      };
    },
    methods: {
      querySearch(queryString, cb) {
        var restaurants = this.restaurants;
        var results = queryString ? restaurants.filter(this.createFilter(queryString)) : restaurants;
        // 调用 callback 返回建议列表的数据
        cb(results);
      },
      createFilter(queryString) {
        return (restaurant) =&gt; {
          return (restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0);
        };
      },
      loadAll() {
        return [
          { &quot;value&quot;: &quot;三全鲜食（北新泾店）&quot;, &quot;address&quot;: &quot;长宁区新渔路144号&quot; },
          { &quot;value&quot;: &quot;Hot honey 首尔炸鸡（仙霞路）&quot;, &quot;address&quot;: &quot;上海市长宁区淞虹路661号&quot; },
          { &quot;value&quot;: &quot;新旺角茶餐厅&quot;, &quot;address&quot;: &quot;上海市普陀区真北路988号创邑金沙谷6号楼113&quot; },
          { &quot;value&quot;: &quot;泷千家(天山西路店)&quot;, &quot;address&quot;: &quot;天山西路438号&quot; },
          { &quot;value&quot;: &quot;胖仙女纸杯蛋糕（上海凌空店）&quot;, &quot;address&quot;: &quot;上海市长宁区金钟路968号1幢18号楼一层商铺18-101&quot; },
          { &quot;value&quot;: &quot;贡茶&quot;, &quot;address&quot;: &quot;上海市长宁区金钟路633号&quot; },
          { &quot;value&quot;: &quot;豪大大香鸡排超级奶爸&quot;, &quot;address&quot;: &quot;上海市嘉定区曹安公路曹安路1685号&quot; },
          { &quot;value&quot;: &quot;茶芝兰（奶茶，手抓饼）&quot;, &quot;address&quot;: &quot;上海市普陀区同普路1435号&quot; },
          { &quot;value&quot;: &quot;十二泷町&quot;, &quot;address&quot;: &quot;上海市北翟路1444弄81号B幢-107&quot; },
          { &quot;value&quot;: &quot;星移浓缩咖啡&quot;, &quot;address&quot;: &quot;上海市嘉定区新郁路817号&quot; },
          { &quot;value&quot;: &quot;阿姨奶茶/豪大大&quot;, &quot;address&quot;: &quot;嘉定区曹安路1611号&quot; },
          { &quot;value&quot;: &quot;新麦甜四季甜品炸鸡&quot;, &quot;address&quot;: &quot;嘉定区曹安公路2383弄55号&quot; },
          { &quot;value&quot;: &quot;Monica摩托主题咖啡店&quot;, &quot;address&quot;: &quot;嘉定区江桥镇曹安公路2409号1F，2383弄62号1F&quot; },
          { &quot;value&quot;: &quot;浮生若茶（凌空soho店）&quot;, &quot;address&quot;: &quot;上海长宁区金钟路968号9号楼地下一层&quot; },
          { &quot;value&quot;: &quot;NONO JUICE  鲜榨果汁&quot;, &quot;address&quot;: &quot;上海市长宁区天山西路119号&quot; },
          { &quot;value&quot;: &quot;CoCo都可(北新泾店）&quot;, &quot;address&quot;: &quot;上海市长宁区仙霞西路&quot; },
          { &quot;value&quot;: &quot;快乐柠檬（神州智慧店）&quot;, &quot;address&quot;: &quot;上海市长宁区天山西路567号1层R117号店铺&quot; },
          { &quot;value&quot;: &quot;Merci Paul cafe&quot;, &quot;address&quot;: &quot;上海市普陀区光复西路丹巴路28弄6号楼819&quot; },
          { &quot;value&quot;: &quot;猫山王（西郊百联店）&quot;, &quot;address&quot;: &quot;上海市长宁区仙霞西路88号第一层G05-F01-1-306&quot; },
          { &quot;value&quot;: &quot;枪会山&quot;, &quot;address&quot;: &quot;上海市普陀区棕榈路&quot; },
          { &quot;value&quot;: &quot;纵食&quot;, &quot;address&quot;: &quot;元丰天山花园(东门) 双流路267号&quot; },
          { &quot;value&quot;: &quot;钱记&quot;, &quot;address&quot;: &quot;上海市长宁区天山西路&quot; },
          { &quot;value&quot;: &quot;壹杯加&quot;, &quot;address&quot;: &quot;上海市长宁区通协路&quot; },
          { &quot;value&quot;: &quot;唦哇嘀咖&quot;, &quot;address&quot;: &quot;上海市长宁区新泾镇金钟路999号2幢（B幢）第01层第1-02A单元&quot; },
          { &quot;value&quot;: &quot;爱茜茜里(西郊百联)&quot;, &quot;address&quot;: &quot;长宁区仙霞西路88号1305室&quot; },
          { &quot;value&quot;: &quot;爱茜茜里(近铁广场)&quot;, &quot;address&quot;: &quot;上海市普陀区真北路818号近铁城市广场北区地下二楼N-B2-O2-C商铺&quot; },
          { &quot;value&quot;: &quot;鲜果榨汁（金沙江路和美广店）&quot;, &quot;address&quot;: &quot;普陀区金沙江路2239号金沙和美广场B1-10-6&quot; },
          { &quot;value&quot;: &quot;开心丽果（缤谷店）&quot;, &quot;address&quot;: &quot;上海市长宁区威宁路天山路341号&quot; },
          { &quot;value&quot;: &quot;超级鸡车（丰庄路店）&quot;, &quot;address&quot;: &quot;上海市嘉定区丰庄路240号&quot; },
          { &quot;value&quot;: &quot;妙生活果园（北新泾店）&quot;, &quot;address&quot;: &quot;长宁区新渔路144号&quot; },
          { &quot;value&quot;: &quot;香宜度麻辣香锅&quot;, &quot;address&quot;: &quot;长宁区淞虹路148号&quot; },
          { &quot;value&quot;: &quot;凡仔汉堡（老真北路店）&quot;, &quot;address&quot;: &quot;上海市普陀区老真北路160号&quot; },
          { &quot;value&quot;: &quot;港式小铺&quot;, &quot;address&quot;: &quot;上海市长宁区金钟路968号15楼15-105室&quot; },
          { &quot;value&quot;: &quot;蜀香源麻辣香锅（剑河路店）&quot;, &quot;address&quot;: &quot;剑河路443-1&quot; },
          { &quot;value&quot;: &quot;北京饺子馆&quot;, &quot;address&quot;: &quot;长宁区北新泾街道天山西路490-1号&quot; },
          { &quot;value&quot;: &quot;饭典*新简餐（凌空SOHO店）&quot;, &quot;address&quot;: &quot;上海市长宁区金钟路968号9号楼地下一层9-83室&quot; },
          { &quot;value&quot;: &quot;焦耳·川式快餐（金钟路店）&quot;, &quot;address&quot;: &quot;上海市金钟路633号地下一层甲部&quot; },
          { &quot;value&quot;: &quot;动力鸡车&quot;, &quot;address&quot;: &quot;长宁区仙霞西路299弄3号101B&quot; },
          { &quot;value&quot;: &quot;浏阳蒸菜&quot;, &quot;address&quot;: &quot;天山西路430号&quot; },
          { &quot;value&quot;: &quot;四海游龙（天山西路店）&quot;, &quot;address&quot;: &quot;上海市长宁区天山西路&quot; },
          { &quot;value&quot;: &quot;樱花食堂（凌空店）&quot;, &quot;address&quot;: &quot;上海市长宁区金钟路968号15楼15-105室&quot; },
          { &quot;value&quot;: &quot;壹分米客家传统调制米粉(天山店)&quot;, &quot;address&quot;: &quot;天山西路428号&quot; },
          { &quot;value&quot;: &quot;福荣祥烧腊（平溪路店）&quot;, &quot;address&quot;: &quot;上海市长宁区协和路福泉路255弄57-73号&quot; },
          { &quot;value&quot;: &quot;速记黄焖鸡米饭&quot;, &quot;address&quot;: &quot;上海市长宁区北新泾街道金钟路180号1层01号摊位&quot; },
          { &quot;value&quot;: &quot;红辣椒麻辣烫&quot;, &quot;address&quot;: &quot;上海市长宁区天山西路492号&quot; },
          { &quot;value&quot;: &quot;(小杨生煎)西郊百联餐厅&quot;, &quot;address&quot;: &quot;长宁区仙霞西路88号百联2楼&quot; },
          { &quot;value&quot;: &quot;阳阳麻辣烫&quot;, &quot;address&quot;: &quot;天山西路389号&quot; },
          { &quot;value&quot;: &quot;南拳妈妈龙虾盖浇饭&quot;, &quot;address&quot;: &quot;普陀区金沙江路1699号鑫乐惠美食广场A13&quot; }
        ];
      },
      handleSelect(item) {
        console.log(item);
      }
    },
    mounted() {
      this.restaurants = this.loadAll();
    }
  }
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="zi-ding-yi-mo-ban"><a class="header-anchor" href="#zi-ding-yi-mo-ban">¶</a> 自定义模板</h3>
<p>可自定义输入建议的显示</p>
<demo-block>
        <div><p>使用<code>scoped slot</code>自定义输入建议的模板。该 scope 的参数为<code>item</code>，表示当前输入建议对象。</p>
</div>
        <!--element-demo: <el-autocomplete
  popper-class="my-autocomplete"
  v-model="state"
  :fetch-suggestions="querySearch"
  placeholder="请输入内容"
  @select="handleSelect">
  <i
    class="el-icon-edit el-input__icon"
    slot="suffix"
    @click="handleIconClick">
  </i>
  <template slot-scope="{ item }">
    <div class="name">{{ item.value }}</div>
    <span class="addr">{{ item.address }}</span>
  </template>
</el-autocomplete>

<style>
.my-autocomplete {
  li {
    line-height: normal;
    padding: 7px;

    .name {
      text-overflow: ellipsis;
      overflow: hidden;
    }
    .addr {
      font-size: 12px;
      color: #b4b4b4;
    }

    .highlighted .addr {
      color: #ddd;
    }
  }
}
</style>

<script>
  export default {
    data() {
      return {
        restaurants: [],
        state: ''
      };
    },
    methods: {
      querySearch(queryString, cb) {
        var restaurants = this.restaurants;
        var results = queryString ? restaurants.filter(this.createFilter(queryString)) : restaurants;
        // 调用 callback 返回建议列表的数据
        cb(results);
      },
      createFilter(queryString) {
        return (restaurant) => {
          return (restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0);
        };
      },
      loadAll() {
        return [
          { "value": "三全鲜食（北新泾店）", "address": "长宁区新渔路144号" },
          { "value": "Hot honey 首尔炸鸡（仙霞路）", "address": "上海市长宁区淞虹路661号" },
          { "value": "新旺角茶餐厅", "address": "上海市普陀区真北路988号创邑金沙谷6号楼113" },
          { "value": "泷千家(天山西路店)", "address": "天山西路438号" },
          { "value": "胖仙女纸杯蛋糕（上海凌空店）", "address": "上海市长宁区金钟路968号1幢18号楼一层商铺18-101" },
          { "value": "贡茶", "address": "上海市长宁区金钟路633号" },
          { "value": "豪大大香鸡排超级奶爸", "address": "上海市嘉定区曹安公路曹安路1685号" },
          { "value": "茶芝兰（奶茶，手抓饼）", "address": "上海市普陀区同普路1435号" },
          { "value": "十二泷町", "address": "上海市北翟路1444弄81号B幢-107" },
          { "value": "星移浓缩咖啡", "address": "上海市嘉定区新郁路817号" },
          { "value": "阿姨奶茶/豪大大", "address": "嘉定区曹安路1611号" },
          { "value": "新麦甜四季甜品炸鸡", "address": "嘉定区曹安公路2383弄55号" },
          { "value": "Monica摩托主题咖啡店", "address": "嘉定区江桥镇曹安公路2409号1F，2383弄62号1F" },
          { "value": "浮生若茶（凌空soho店）", "address": "上海长宁区金钟路968号9号楼地下一层" },
          { "value": "NONO JUICE  鲜榨果汁", "address": "上海市长宁区天山西路119号" },
          { "value": "CoCo都可(北新泾店）", "address": "上海市长宁区仙霞西路" },
          { "value": "快乐柠檬（神州智慧店）", "address": "上海市长宁区天山西路567号1层R117号店铺" },
          { "value": "Merci Paul cafe", "address": "上海市普陀区光复西路丹巴路28弄6号楼819" },
          { "value": "猫山王（西郊百联店）", "address": "上海市长宁区仙霞西路88号第一层G05-F01-1-306" },
          { "value": "枪会山", "address": "上海市普陀区棕榈路" },
          { "value": "纵食", "address": "元丰天山花园(东门) 双流路267号" },
          { "value": "钱记", "address": "上海市长宁区天山西路" },
          { "value": "壹杯加", "address": "上海市长宁区通协路" },
          { "value": "唦哇嘀咖", "address": "上海市长宁区新泾镇金钟路999号2幢（B幢）第01层第1-02A单元" },
          { "value": "爱茜茜里(西郊百联)", "address": "长宁区仙霞西路88号1305室" },
          { "value": "爱茜茜里(近铁广场)", "address": "上海市普陀区真北路818号近铁城市广场北区地下二楼N-B2-O2-C商铺" },
          { "value": "鲜果榨汁（金沙江路和美广店）", "address": "普陀区金沙江路2239号金沙和美广场B1-10-6" },
          { "value": "开心丽果（缤谷店）", "address": "上海市长宁区威宁路天山路341号" },
          { "value": "超级鸡车（丰庄路店）", "address": "上海市嘉定区丰庄路240号" },
          { "value": "妙生活果园（北新泾店）", "address": "长宁区新渔路144号" },
          { "value": "香宜度麻辣香锅", "address": "长宁区淞虹路148号" },
          { "value": "凡仔汉堡（老真北路店）", "address": "上海市普陀区老真北路160号" },
          { "value": "港式小铺", "address": "上海市长宁区金钟路968号15楼15-105室" },
          { "value": "蜀香源麻辣香锅（剑河路店）", "address": "剑河路443-1" },
          { "value": "北京饺子馆", "address": "长宁区北新泾街道天山西路490-1号" },
          { "value": "饭典*新简餐（凌空SOHO店）", "address": "上海市长宁区金钟路968号9号楼地下一层9-83室" },
          { "value": "焦耳·川式快餐（金钟路店）", "address": "上海市金钟路633号地下一层甲部" },
          { "value": "动力鸡车", "address": "长宁区仙霞西路299弄3号101B" },
          { "value": "浏阳蒸菜", "address": "天山西路430号" },
          { "value": "四海游龙（天山西路店）", "address": "上海市长宁区天山西路" },
          { "value": "樱花食堂（凌空店）", "address": "上海市长宁区金钟路968号15楼15-105室" },
          { "value": "壹分米客家传统调制米粉(天山店)", "address": "天山西路428号" },
          { "value": "福荣祥烧腊（平溪路店）", "address": "上海市长宁区协和路福泉路255弄57-73号" },
          { "value": "速记黄焖鸡米饭", "address": "上海市长宁区北新泾街道金钟路180号1层01号摊位" },
          { "value": "红辣椒麻辣烫", "address": "上海市长宁区天山西路492号" },
          { "value": "(小杨生煎)西郊百联餐厅", "address": "长宁区仙霞西路88号百联2楼" },
          { "value": "阳阳麻辣烫", "address": "天山西路389号" },
          { "value": "南拳妈妈龙虾盖浇饭", "address": "普陀区金沙江路1699号鑫乐惠美食广场A13" }
        ];
      },
      handleSelect(item) {
        console.log(item);
      },
      handleIconClick(ev) {
        console.log(ev);
      }
    },
    mounted() {
      this.restaurants = this.loadAll();
    }
  }
</script>
:element-demo-->
        <template slot="highlight"><pre v-pre><code class="html">&lt;el-autocomplete
  popper-class=&quot;my-autocomplete&quot;
  v-model=&quot;state&quot;
  :fetch-suggestions=&quot;querySearch&quot;
  placeholder=&quot;请输入内容&quot;
  @select=&quot;handleSelect&quot;&gt;
  &lt;i
    class=&quot;el-icon-edit el-input__icon&quot;
    slot=&quot;suffix&quot;
    @click=&quot;handleIconClick&quot;&gt;
  &lt;/i&gt;
  &lt;template slot-scope=&quot;{ item }&quot;&gt;
    &lt;div class=&quot;name&quot;&gt;{{ item.value }}&lt;/div&gt;
    &lt;span class=&quot;addr&quot;&gt;{{ item.address }}&lt;/span&gt;
  &lt;/template&gt;
&lt;/el-autocomplete&gt;

&lt;style&gt;
.my-autocomplete {
  li {
    line-height: normal;
    padding: 7px;

    .name {
      text-overflow: ellipsis;
      overflow: hidden;
    }
    .addr {
      font-size: 12px;
      color: #b4b4b4;
    }

    .highlighted .addr {
      color: #ddd;
    }
  }
}
&lt;/style&gt;

&lt;script&gt;
  export default {
    data() {
      return {
        restaurants: [],
        state: ''
      };
    },
    methods: {
      querySearch(queryString, cb) {
        var restaurants = this.restaurants;
        var results = queryString ? restaurants.filter(this.createFilter(queryString)) : restaurants;
        // 调用 callback 返回建议列表的数据
        cb(results);
      },
      createFilter(queryString) {
        return (restaurant) =&gt; {
          return (restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0);
        };
      },
      loadAll() {
        return [
          { &quot;value&quot;: &quot;三全鲜食（北新泾店）&quot;, &quot;address&quot;: &quot;长宁区新渔路144号&quot; },
          { &quot;value&quot;: &quot;Hot honey 首尔炸鸡（仙霞路）&quot;, &quot;address&quot;: &quot;上海市长宁区淞虹路661号&quot; },
          { &quot;value&quot;: &quot;新旺角茶餐厅&quot;, &quot;address&quot;: &quot;上海市普陀区真北路988号创邑金沙谷6号楼113&quot; },
          { &quot;value&quot;: &quot;泷千家(天山西路店)&quot;, &quot;address&quot;: &quot;天山西路438号&quot; },
          { &quot;value&quot;: &quot;胖仙女纸杯蛋糕（上海凌空店）&quot;, &quot;address&quot;: &quot;上海市长宁区金钟路968号1幢18号楼一层商铺18-101&quot; },
          { &quot;value&quot;: &quot;贡茶&quot;, &quot;address&quot;: &quot;上海市长宁区金钟路633号&quot; },
          { &quot;value&quot;: &quot;豪大大香鸡排超级奶爸&quot;, &quot;address&quot;: &quot;上海市嘉定区曹安公路曹安路1685号&quot; },
          { &quot;value&quot;: &quot;茶芝兰（奶茶，手抓饼）&quot;, &quot;address&quot;: &quot;上海市普陀区同普路1435号&quot; },
          { &quot;value&quot;: &quot;十二泷町&quot;, &quot;address&quot;: &quot;上海市北翟路1444弄81号B幢-107&quot; },
          { &quot;value&quot;: &quot;星移浓缩咖啡&quot;, &quot;address&quot;: &quot;上海市嘉定区新郁路817号&quot; },
          { &quot;value&quot;: &quot;阿姨奶茶/豪大大&quot;, &quot;address&quot;: &quot;嘉定区曹安路1611号&quot; },
          { &quot;value&quot;: &quot;新麦甜四季甜品炸鸡&quot;, &quot;address&quot;: &quot;嘉定区曹安公路2383弄55号&quot; },
          { &quot;value&quot;: &quot;Monica摩托主题咖啡店&quot;, &quot;address&quot;: &quot;嘉定区江桥镇曹安公路2409号1F，2383弄62号1F&quot; },
          { &quot;value&quot;: &quot;浮生若茶（凌空soho店）&quot;, &quot;address&quot;: &quot;上海长宁区金钟路968号9号楼地下一层&quot; },
          { &quot;value&quot;: &quot;NONO JUICE  鲜榨果汁&quot;, &quot;address&quot;: &quot;上海市长宁区天山西路119号&quot; },
          { &quot;value&quot;: &quot;CoCo都可(北新泾店）&quot;, &quot;address&quot;: &quot;上海市长宁区仙霞西路&quot; },
          { &quot;value&quot;: &quot;快乐柠檬（神州智慧店）&quot;, &quot;address&quot;: &quot;上海市长宁区天山西路567号1层R117号店铺&quot; },
          { &quot;value&quot;: &quot;Merci Paul cafe&quot;, &quot;address&quot;: &quot;上海市普陀区光复西路丹巴路28弄6号楼819&quot; },
          { &quot;value&quot;: &quot;猫山王（西郊百联店）&quot;, &quot;address&quot;: &quot;上海市长宁区仙霞西路88号第一层G05-F01-1-306&quot; },
          { &quot;value&quot;: &quot;枪会山&quot;, &quot;address&quot;: &quot;上海市普陀区棕榈路&quot; },
          { &quot;value&quot;: &quot;纵食&quot;, &quot;address&quot;: &quot;元丰天山花园(东门) 双流路267号&quot; },
          { &quot;value&quot;: &quot;钱记&quot;, &quot;address&quot;: &quot;上海市长宁区天山西路&quot; },
          { &quot;value&quot;: &quot;壹杯加&quot;, &quot;address&quot;: &quot;上海市长宁区通协路&quot; },
          { &quot;value&quot;: &quot;唦哇嘀咖&quot;, &quot;address&quot;: &quot;上海市长宁区新泾镇金钟路999号2幢（B幢）第01层第1-02A单元&quot; },
          { &quot;value&quot;: &quot;爱茜茜里(西郊百联)&quot;, &quot;address&quot;: &quot;长宁区仙霞西路88号1305室&quot; },
          { &quot;value&quot;: &quot;爱茜茜里(近铁广场)&quot;, &quot;address&quot;: &quot;上海市普陀区真北路818号近铁城市广场北区地下二楼N-B2-O2-C商铺&quot; },
          { &quot;value&quot;: &quot;鲜果榨汁（金沙江路和美广店）&quot;, &quot;address&quot;: &quot;普陀区金沙江路2239号金沙和美广场B1-10-6&quot; },
          { &quot;value&quot;: &quot;开心丽果（缤谷店）&quot;, &quot;address&quot;: &quot;上海市长宁区威宁路天山路341号&quot; },
          { &quot;value&quot;: &quot;超级鸡车（丰庄路店）&quot;, &quot;address&quot;: &quot;上海市嘉定区丰庄路240号&quot; },
          { &quot;value&quot;: &quot;妙生活果园（北新泾店）&quot;, &quot;address&quot;: &quot;长宁区新渔路144号&quot; },
          { &quot;value&quot;: &quot;香宜度麻辣香锅&quot;, &quot;address&quot;: &quot;长宁区淞虹路148号&quot; },
          { &quot;value&quot;: &quot;凡仔汉堡（老真北路店）&quot;, &quot;address&quot;: &quot;上海市普陀区老真北路160号&quot; },
          { &quot;value&quot;: &quot;港式小铺&quot;, &quot;address&quot;: &quot;上海市长宁区金钟路968号15楼15-105室&quot; },
          { &quot;value&quot;: &quot;蜀香源麻辣香锅（剑河路店）&quot;, &quot;address&quot;: &quot;剑河路443-1&quot; },
          { &quot;value&quot;: &quot;北京饺子馆&quot;, &quot;address&quot;: &quot;长宁区北新泾街道天山西路490-1号&quot; },
          { &quot;value&quot;: &quot;饭典*新简餐（凌空SOHO店）&quot;, &quot;address&quot;: &quot;上海市长宁区金钟路968号9号楼地下一层9-83室&quot; },
          { &quot;value&quot;: &quot;焦耳·川式快餐（金钟路店）&quot;, &quot;address&quot;: &quot;上海市金钟路633号地下一层甲部&quot; },
          { &quot;value&quot;: &quot;动力鸡车&quot;, &quot;address&quot;: &quot;长宁区仙霞西路299弄3号101B&quot; },
          { &quot;value&quot;: &quot;浏阳蒸菜&quot;, &quot;address&quot;: &quot;天山西路430号&quot; },
          { &quot;value&quot;: &quot;四海游龙（天山西路店）&quot;, &quot;address&quot;: &quot;上海市长宁区天山西路&quot; },
          { &quot;value&quot;: &quot;樱花食堂（凌空店）&quot;, &quot;address&quot;: &quot;上海市长宁区金钟路968号15楼15-105室&quot; },
          { &quot;value&quot;: &quot;壹分米客家传统调制米粉(天山店)&quot;, &quot;address&quot;: &quot;天山西路428号&quot; },
          { &quot;value&quot;: &quot;福荣祥烧腊（平溪路店）&quot;, &quot;address&quot;: &quot;上海市长宁区协和路福泉路255弄57-73号&quot; },
          { &quot;value&quot;: &quot;速记黄焖鸡米饭&quot;, &quot;address&quot;: &quot;上海市长宁区北新泾街道金钟路180号1层01号摊位&quot; },
          { &quot;value&quot;: &quot;红辣椒麻辣烫&quot;, &quot;address&quot;: &quot;上海市长宁区天山西路492号&quot; },
          { &quot;value&quot;: &quot;(小杨生煎)西郊百联餐厅&quot;, &quot;address&quot;: &quot;长宁区仙霞西路88号百联2楼&quot; },
          { &quot;value&quot;: &quot;阳阳麻辣烫&quot;, &quot;address&quot;: &quot;天山西路389号&quot; },
          { &quot;value&quot;: &quot;南拳妈妈龙虾盖浇饭&quot;, &quot;address&quot;: &quot;普陀区金沙江路1699号鑫乐惠美食广场A13&quot; }
        ];
      },
      handleSelect(item) {
        console.log(item);
      },
      handleIconClick(ev) {
        console.log(ev);
      }
    },
    mounted() {
      this.restaurants = this.loadAll();
    }
  }
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="yuan-cheng-sou-suo"><a class="header-anchor" href="#yuan-cheng-sou-suo">¶</a> 远程搜索</h3>
<p>从服务端搜索数据</p>
<demo-block>
        
        <!--element-demo: <el-autocomplete
  v-model="state"
  :fetch-suggestions="querySearchAsync"
  placeholder="请输入内容"
  @select="handleSelect"
></el-autocomplete>
<script>
  export default {
    data() {
      return {
        restaurants: [],
        state: '',
        timeout:  null
      };
    },
    methods: {
      loadAll() {
        return [
          { "value": "三全鲜食（北新泾店）", "address": "长宁区新渔路144号" },
          { "value": "Hot honey 首尔炸鸡（仙霞路）", "address": "上海市长宁区淞虹路661号" },
          { "value": "新旺角茶餐厅", "address": "上海市普陀区真北路988号创邑金沙谷6号楼113" },
          { "value": "泷千家(天山西路店)", "address": "天山西路438号" },
          { "value": "胖仙女纸杯蛋糕（上海凌空店）", "address": "上海市长宁区金钟路968号1幢18号楼一层商铺18-101" },
          { "value": "贡茶", "address": "上海市长宁区金钟路633号" },
          { "value": "豪大大香鸡排超级奶爸", "address": "上海市嘉定区曹安公路曹安路1685号" },
          { "value": "茶芝兰（奶茶，手抓饼）", "address": "上海市普陀区同普路1435号" },
          { "value": "十二泷町", "address": "上海市北翟路1444弄81号B幢-107" },
          { "value": "星移浓缩咖啡", "address": "上海市嘉定区新郁路817号" },
          { "value": "阿姨奶茶/豪大大", "address": "嘉定区曹安路1611号" },
          { "value": "新麦甜四季甜品炸鸡", "address": "嘉定区曹安公路2383弄55号" },
          { "value": "Monica摩托主题咖啡店", "address": "嘉定区江桥镇曹安公路2409号1F，2383弄62号1F" },
          { "value": "浮生若茶（凌空soho店）", "address": "上海长宁区金钟路968号9号楼地下一层" },
          { "value": "NONO JUICE  鲜榨果汁", "address": "上海市长宁区天山西路119号" },
          { "value": "CoCo都可(北新泾店）", "address": "上海市长宁区仙霞西路" },
          { "value": "快乐柠檬（神州智慧店）", "address": "上海市长宁区天山西路567号1层R117号店铺" },
          { "value": "Merci Paul cafe", "address": "上海市普陀区光复西路丹巴路28弄6号楼819" },
          { "value": "猫山王（西郊百联店）", "address": "上海市长宁区仙霞西路88号第一层G05-F01-1-306" },
          { "value": "枪会山", "address": "上海市普陀区棕榈路" },
          { "value": "纵食", "address": "元丰天山花园(东门) 双流路267号" },
          { "value": "钱记", "address": "上海市长宁区天山西路" },
          { "value": "壹杯加", "address": "上海市长宁区通协路" },
          { "value": "唦哇嘀咖", "address": "上海市长宁区新泾镇金钟路999号2幢（B幢）第01层第1-02A单元" },
          { "value": "爱茜茜里(西郊百联)", "address": "长宁区仙霞西路88号1305室" },
          { "value": "爱茜茜里(近铁广场)", "address": "上海市普陀区真北路818号近铁城市广场北区地下二楼N-B2-O2-C商铺" },
          { "value": "鲜果榨汁（金沙江路和美广店）", "address": "普陀区金沙江路2239号金沙和美广场B1-10-6" },
          { "value": "开心丽果（缤谷店）", "address": "上海市长宁区威宁路天山路341号" },
          { "value": "超级鸡车（丰庄路店）", "address": "上海市嘉定区丰庄路240号" },
          { "value": "妙生活果园（北新泾店）", "address": "长宁区新渔路144号" },
          { "value": "香宜度麻辣香锅", "address": "长宁区淞虹路148号" },
          { "value": "凡仔汉堡（老真北路店）", "address": "上海市普陀区老真北路160号" },
          { "value": "港式小铺", "address": "上海市长宁区金钟路968号15楼15-105室" },
          { "value": "蜀香源麻辣香锅（剑河路店）", "address": "剑河路443-1" },
          { "value": "北京饺子馆", "address": "长宁区北新泾街道天山西路490-1号" },
          { "value": "饭典*新简餐（凌空SOHO店）", "address": "上海市长宁区金钟路968号9号楼地下一层9-83室" },
          { "value": "焦耳·川式快餐（金钟路店）", "address": "上海市金钟路633号地下一层甲部" },
          { "value": "动力鸡车", "address": "长宁区仙霞西路299弄3号101B" },
          { "value": "浏阳蒸菜", "address": "天山西路430号" },
          { "value": "四海游龙（天山西路店）", "address": "上海市长宁区天山西路" },
          { "value": "樱花食堂（凌空店）", "address": "上海市长宁区金钟路968号15楼15-105室" },
          { "value": "壹分米客家传统调制米粉(天山店)", "address": "天山西路428号" },
          { "value": "福荣祥烧腊（平溪路店）", "address": "上海市长宁区协和路福泉路255弄57-73号" },
          { "value": "速记黄焖鸡米饭", "address": "上海市长宁区北新泾街道金钟路180号1层01号摊位" },
          { "value": "红辣椒麻辣烫", "address": "上海市长宁区天山西路492号" },
          { "value": "(小杨生煎)西郊百联餐厅", "address": "长宁区仙霞西路88号百联2楼" },
          { "value": "阳阳麻辣烫", "address": "天山西路389号" },
          { "value": "南拳妈妈龙虾盖浇饭", "address": "普陀区金沙江路1699号鑫乐惠美食广场A13" }
        ];
      },
      querySearchAsync(queryString, cb) {
        var restaurants = this.restaurants;
        var results = queryString ? restaurants.filter(this.createStateFilter(queryString)) : restaurants;

        clearTimeout(this.timeout);
        this.timeout = setTimeout(() => {
          cb(results);
        }, 3000 * Math.random());
      },
      createStateFilter(queryString) {
        return (state) => {
          return (state.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0);
        };
      },
      handleSelect(item) {
        console.log(item);
      }
    },
    mounted() {
      this.restaurants = this.loadAll();
    }
  };
</script>
:element-demo-->
        <template slot="highlight"><pre v-pre><code class="html">&lt;el-autocomplete
  v-model=&quot;state&quot;
  :fetch-suggestions=&quot;querySearchAsync&quot;
  placeholder=&quot;请输入内容&quot;
  @select=&quot;handleSelect&quot;
&gt;&lt;/el-autocomplete&gt;
&lt;script&gt;
  export default {
    data() {
      return {
        restaurants: [],
        state: '',
        timeout:  null
      };
    },
    methods: {
      loadAll() {
        return [
          { &quot;value&quot;: &quot;三全鲜食（北新泾店）&quot;, &quot;address&quot;: &quot;长宁区新渔路144号&quot; },
          { &quot;value&quot;: &quot;Hot honey 首尔炸鸡（仙霞路）&quot;, &quot;address&quot;: &quot;上海市长宁区淞虹路661号&quot; },
          { &quot;value&quot;: &quot;新旺角茶餐厅&quot;, &quot;address&quot;: &quot;上海市普陀区真北路988号创邑金沙谷6号楼113&quot; },
          { &quot;value&quot;: &quot;泷千家(天山西路店)&quot;, &quot;address&quot;: &quot;天山西路438号&quot; },
          { &quot;value&quot;: &quot;胖仙女纸杯蛋糕（上海凌空店）&quot;, &quot;address&quot;: &quot;上海市长宁区金钟路968号1幢18号楼一层商铺18-101&quot; },
          { &quot;value&quot;: &quot;贡茶&quot;, &quot;address&quot;: &quot;上海市长宁区金钟路633号&quot; },
          { &quot;value&quot;: &quot;豪大大香鸡排超级奶爸&quot;, &quot;address&quot;: &quot;上海市嘉定区曹安公路曹安路1685号&quot; },
          { &quot;value&quot;: &quot;茶芝兰（奶茶，手抓饼）&quot;, &quot;address&quot;: &quot;上海市普陀区同普路1435号&quot; },
          { &quot;value&quot;: &quot;十二泷町&quot;, &quot;address&quot;: &quot;上海市北翟路1444弄81号B幢-107&quot; },
          { &quot;value&quot;: &quot;星移浓缩咖啡&quot;, &quot;address&quot;: &quot;上海市嘉定区新郁路817号&quot; },
          { &quot;value&quot;: &quot;阿姨奶茶/豪大大&quot;, &quot;address&quot;: &quot;嘉定区曹安路1611号&quot; },
          { &quot;value&quot;: &quot;新麦甜四季甜品炸鸡&quot;, &quot;address&quot;: &quot;嘉定区曹安公路2383弄55号&quot; },
          { &quot;value&quot;: &quot;Monica摩托主题咖啡店&quot;, &quot;address&quot;: &quot;嘉定区江桥镇曹安公路2409号1F，2383弄62号1F&quot; },
          { &quot;value&quot;: &quot;浮生若茶（凌空soho店）&quot;, &quot;address&quot;: &quot;上海长宁区金钟路968号9号楼地下一层&quot; },
          { &quot;value&quot;: &quot;NONO JUICE  鲜榨果汁&quot;, &quot;address&quot;: &quot;上海市长宁区天山西路119号&quot; },
          { &quot;value&quot;: &quot;CoCo都可(北新泾店）&quot;, &quot;address&quot;: &quot;上海市长宁区仙霞西路&quot; },
          { &quot;value&quot;: &quot;快乐柠檬（神州智慧店）&quot;, &quot;address&quot;: &quot;上海市长宁区天山西路567号1层R117号店铺&quot; },
          { &quot;value&quot;: &quot;Merci Paul cafe&quot;, &quot;address&quot;: &quot;上海市普陀区光复西路丹巴路28弄6号楼819&quot; },
          { &quot;value&quot;: &quot;猫山王（西郊百联店）&quot;, &quot;address&quot;: &quot;上海市长宁区仙霞西路88号第一层G05-F01-1-306&quot; },
          { &quot;value&quot;: &quot;枪会山&quot;, &quot;address&quot;: &quot;上海市普陀区棕榈路&quot; },
          { &quot;value&quot;: &quot;纵食&quot;, &quot;address&quot;: &quot;元丰天山花园(东门) 双流路267号&quot; },
          { &quot;value&quot;: &quot;钱记&quot;, &quot;address&quot;: &quot;上海市长宁区天山西路&quot; },
          { &quot;value&quot;: &quot;壹杯加&quot;, &quot;address&quot;: &quot;上海市长宁区通协路&quot; },
          { &quot;value&quot;: &quot;唦哇嘀咖&quot;, &quot;address&quot;: &quot;上海市长宁区新泾镇金钟路999号2幢（B幢）第01层第1-02A单元&quot; },
          { &quot;value&quot;: &quot;爱茜茜里(西郊百联)&quot;, &quot;address&quot;: &quot;长宁区仙霞西路88号1305室&quot; },
          { &quot;value&quot;: &quot;爱茜茜里(近铁广场)&quot;, &quot;address&quot;: &quot;上海市普陀区真北路818号近铁城市广场北区地下二楼N-B2-O2-C商铺&quot; },
          { &quot;value&quot;: &quot;鲜果榨汁（金沙江路和美广店）&quot;, &quot;address&quot;: &quot;普陀区金沙江路2239号金沙和美广场B1-10-6&quot; },
          { &quot;value&quot;: &quot;开心丽果（缤谷店）&quot;, &quot;address&quot;: &quot;上海市长宁区威宁路天山路341号&quot; },
          { &quot;value&quot;: &quot;超级鸡车（丰庄路店）&quot;, &quot;address&quot;: &quot;上海市嘉定区丰庄路240号&quot; },
          { &quot;value&quot;: &quot;妙生活果园（北新泾店）&quot;, &quot;address&quot;: &quot;长宁区新渔路144号&quot; },
          { &quot;value&quot;: &quot;香宜度麻辣香锅&quot;, &quot;address&quot;: &quot;长宁区淞虹路148号&quot; },
          { &quot;value&quot;: &quot;凡仔汉堡（老真北路店）&quot;, &quot;address&quot;: &quot;上海市普陀区老真北路160号&quot; },
          { &quot;value&quot;: &quot;港式小铺&quot;, &quot;address&quot;: &quot;上海市长宁区金钟路968号15楼15-105室&quot; },
          { &quot;value&quot;: &quot;蜀香源麻辣香锅（剑河路店）&quot;, &quot;address&quot;: &quot;剑河路443-1&quot; },
          { &quot;value&quot;: &quot;北京饺子馆&quot;, &quot;address&quot;: &quot;长宁区北新泾街道天山西路490-1号&quot; },
          { &quot;value&quot;: &quot;饭典*新简餐（凌空SOHO店）&quot;, &quot;address&quot;: &quot;上海市长宁区金钟路968号9号楼地下一层9-83室&quot; },
          { &quot;value&quot;: &quot;焦耳·川式快餐（金钟路店）&quot;, &quot;address&quot;: &quot;上海市金钟路633号地下一层甲部&quot; },
          { &quot;value&quot;: &quot;动力鸡车&quot;, &quot;address&quot;: &quot;长宁区仙霞西路299弄3号101B&quot; },
          { &quot;value&quot;: &quot;浏阳蒸菜&quot;, &quot;address&quot;: &quot;天山西路430号&quot; },
          { &quot;value&quot;: &quot;四海游龙（天山西路店）&quot;, &quot;address&quot;: &quot;上海市长宁区天山西路&quot; },
          { &quot;value&quot;: &quot;樱花食堂（凌空店）&quot;, &quot;address&quot;: &quot;上海市长宁区金钟路968号15楼15-105室&quot; },
          { &quot;value&quot;: &quot;壹分米客家传统调制米粉(天山店)&quot;, &quot;address&quot;: &quot;天山西路428号&quot; },
          { &quot;value&quot;: &quot;福荣祥烧腊（平溪路店）&quot;, &quot;address&quot;: &quot;上海市长宁区协和路福泉路255弄57-73号&quot; },
          { &quot;value&quot;: &quot;速记黄焖鸡米饭&quot;, &quot;address&quot;: &quot;上海市长宁区北新泾街道金钟路180号1层01号摊位&quot; },
          { &quot;value&quot;: &quot;红辣椒麻辣烫&quot;, &quot;address&quot;: &quot;上海市长宁区天山西路492号&quot; },
          { &quot;value&quot;: &quot;(小杨生煎)西郊百联餐厅&quot;, &quot;address&quot;: &quot;长宁区仙霞西路88号百联2楼&quot; },
          { &quot;value&quot;: &quot;阳阳麻辣烫&quot;, &quot;address&quot;: &quot;天山西路389号&quot; },
          { &quot;value&quot;: &quot;南拳妈妈龙虾盖浇饭&quot;, &quot;address&quot;: &quot;普陀区金沙江路1699号鑫乐惠美食广场A13&quot; }
        ];
      },
      querySearchAsync(queryString, cb) {
        var restaurants = this.restaurants;
        var results = queryString ? restaurants.filter(this.createStateFilter(queryString)) : restaurants;

        clearTimeout(this.timeout);
        this.timeout = setTimeout(() =&gt; {
          cb(results);
        }, 3000 * Math.random());
      },
      createStateFilter(queryString) {
        return (state) =&gt; {
          return (state.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0);
        };
      },
      handleSelect(item) {
        console.log(item);
      }
    },
    mounted() {
      this.restaurants = this.loadAll();
    }
  };
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="shu-ru-chang-du-xian-zhi"><a class="header-anchor" href="#shu-ru-chang-du-xian-zhi">¶</a> 输入长度限制</h3>
<demo-block>
        <div><p><code>maxlength</code> 和 <code>minlength</code> 是原生属性，用来限制输入框的字符长度，其中字符长度是用 Javascript 的字符串长度统计的。对于类型为 <code>text</code> 或 <code>textarea</code> 的输入框，在使用 <code>maxlength</code> 属性限制最大输入长度的同时，可通过设置 <code>show-word-limit</code> 属性来展示字数统计。</p>
</div>
        <!--element-demo: <el-input
  type="text"
  placeholder="请输入内容"
  v-model="text"
  maxlength="10"
  show-word-limit
>
</el-input>
<div style="margin: 20px 0;"></div>
<el-input
  type="textarea"
  placeholder="请输入内容"
  v-model="textarea"
  maxlength="30"
  show-word-limit
>
</el-input>

<script>
export default {
  data() {
    return {
      text: '',
      textarea: ''
    }
  }
}
</script>
:element-demo-->
        <template slot="highlight"><pre v-pre><code class="html">&lt;el-input
  type=&quot;text&quot;
  placeholder=&quot;请输入内容&quot;
  v-model=&quot;text&quot;
  maxlength=&quot;10&quot;
  show-word-limit
&gt;
&lt;/el-input&gt;
&lt;div style=&quot;margin: 20px 0;&quot;&gt;&lt;/div&gt;
&lt;el-input
  type=&quot;textarea&quot;
  placeholder=&quot;请输入内容&quot;
  v-model=&quot;textarea&quot;
  maxlength=&quot;30&quot;
  show-word-limit
&gt;
&lt;/el-input&gt;

&lt;script&gt;
export default {
  data() {
    return {
      text: '',
      textarea: ''
    }
  }
}
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="input-attributes"><a class="header-anchor" href="#input-attributes">¶</a> Input Attributes</h3>
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
<td>type</td>
<td>类型</td>
<td>string</td>
<td>text，textarea 和其他 <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Form_%3Cinput%3E_types">原生 input 的 type 值</a></td>
<td>text</td>
</tr>
<tr>
<td>value / v-model</td>
<td>绑定值</td>
<td>string / number</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>maxlength</td>
<td>原生属性，最大输入长度</td>
<td>number</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>minlength</td>
<td>原生属性，最小输入长度</td>
<td>number</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>show-word-limit</td>
<td>是否显示输入字数统计，只在 <code>type = &quot;text&quot;</code> 或 <code>type = &quot;textarea&quot;</code> 时有效</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>placeholder</td>
<td>输入框占位文本</td>
<td>string</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>clearable</td>
<td>是否可清空</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>show-password</td>
<td>是否显示切换密码图标</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>disabled</td>
<td>禁用</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>size</td>
<td>输入框尺寸，只在 <code>type!=&quot;textarea&quot;</code> 时有效</td>
<td>string</td>
<td>medium / small / mini</td>
<td>—</td>
</tr>
<tr>
<td>prefix-icon</td>
<td>输入框头部图标</td>
<td>string</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>suffix-icon</td>
<td>输入框尾部图标</td>
<td>string</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>rows</td>
<td>输入框行数，只对 <code>type=&quot;textarea&quot;</code> 有效</td>
<td>number</td>
<td>—</td>
<td>2</td>
</tr>
<tr>
<td>autosize</td>
<td>自适应内容高度，只对 <code>type=&quot;textarea&quot;</code> 有效，可传入对象，如，{ minRows: 2, maxRows: 6 }</td>
<td>boolean / object</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>autocomplete</td>
<td>原生属性，自动补全</td>
<td>string</td>
<td>on, off</td>
<td>off</td>
</tr>
<tr>
<td>auto-complete</td>
<td>下个主版本弃用</td>
<td>string</td>
<td>on, off</td>
<td>off</td>
</tr>
<tr>
<td>name</td>
<td>原生属性</td>
<td>string</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>readonly</td>
<td>原生属性，是否只读</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>max</td>
<td>原生属性，设置最大值</td>
<td>—</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>min</td>
<td>原生属性，设置最小值</td>
<td>—</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>step</td>
<td>原生属性，设置输入字段的合法数字间隔</td>
<td>—</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>resize</td>
<td>控制是否能被用户缩放</td>
<td>string</td>
<td>none, both, horizontal, vertical</td>
<td>—</td>
</tr>
<tr>
<td>autofocus</td>
<td>原生属性，自动获取焦点</td>
<td>boolean</td>
<td>true, false</td>
<td>false</td>
</tr>
<tr>
<td>form</td>
<td>原生属性</td>
<td>string</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>label</td>
<td>输入框关联的label文字</td>
<td>string</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>tabindex</td>
<td>输入框的tabindex</td>
<td>string</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>validate-event</td>
<td>输入时是否触发表单的校验</td>
<td>boolean</td>
<td>-</td>
<td>true</td>
</tr>
</tbody>
</table>
<h3 id="input-slots"><a class="header-anchor" href="#input-slots">¶</a> Input Slots</h3>
<table>
<thead>
<tr>
<th>name</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>prefix</td>
<td>输入框头部内容，只对 <code>type=&quot;text&quot;</code> 有效</td>
</tr>
<tr>
<td>suffix</td>
<td>输入框尾部内容，只对 <code>type=&quot;text&quot;</code> 有效</td>
</tr>
<tr>
<td>prepend</td>
<td>输入框前置内容，只对 <code>type=&quot;text&quot;</code> 有效</td>
</tr>
<tr>
<td>append</td>
<td>输入框后置内容，只对 <code>type=&quot;text&quot;</code> 有效</td>
</tr>
</tbody>
</table>
<h3 id="input-events"><a class="header-anchor" href="#input-events">¶</a> Input Events</h3>
<table>
<thead>
<tr>
<th>事件名称</th>
<th>说明</th>
<th>回调参数</th>
</tr>
</thead>
<tbody>
<tr>
<td>blur</td>
<td>在 Input 失去焦点时触发</td>
<td>(event: Event)</td>
</tr>
<tr>
<td>focus</td>
<td>在 Input 获得焦点时触发</td>
<td>(event: Event)</td>
</tr>
<tr>
<td>change</td>
<td>仅在输入框失去焦点或用户按下回车时触发</td>
<td>(value: string | number)</td>
</tr>
<tr>
<td>input</td>
<td>在 Input 值改变时触发</td>
<td>(value: string | number)</td>
</tr>
<tr>
<td>clear</td>
<td>在点击由 <code>clearable</code> 属性生成的清空按钮时触发</td>
<td>—</td>
</tr>
</tbody>
</table>
<h3 id="input-methods"><a class="header-anchor" href="#input-methods">¶</a> Input Methods</h3>
<table>
<thead>
<tr>
<th>方法名</th>
<th>说明</th>
<th>参数</th>
</tr>
</thead>
<tbody>
<tr>
<td>focus</td>
<td>使 input 获取焦点</td>
<td>—</td>
</tr>
<tr>
<td>blur</td>
<td>使 input 失去焦点</td>
<td>—</td>
</tr>
<tr>
<td>select</td>
<td>选中 input 中的文字</td>
<td>—</td>
</tr>
</tbody>
</table>
<h3 id="autocomplete-attributes"><a class="header-anchor" href="#autocomplete-attributes">¶</a> Autocomplete Attributes</h3>
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
<td>placeholder</td>
<td>输入框占位文本</td>
<td>string</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>disabled</td>
<td>禁用</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>value-key</td>
<td>输入建议对象中用于显示的键名</td>
<td>string</td>
<td>—</td>
<td>value</td>
</tr>
<tr>
<td>value</td>
<td>必填值，输入绑定值</td>
<td>string</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>debounce</td>
<td>获取输入建议的去抖延时</td>
<td>number</td>
<td>—</td>
<td>300</td>
</tr>
<tr>
<td>placement</td>
<td>菜单弹出位置</td>
<td>string</td>
<td>top / top-start / top-end / bottom / bottom-start / bottom-end</td>
<td>bottom-start</td>
</tr>
<tr>
<td>fetch-suggestions</td>
<td>返回输入建议的方法，仅当你的输入建议数据 resolve 时，通过调用 callback(data:[]) 来返回它</td>
<td>Function(queryString, callback)</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>popper-class</td>
<td>Autocomplete 下拉列表的类名</td>
<td>string</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>trigger-on-focus</td>
<td>是否在输入框 focus 时显示建议列表</td>
<td>boolean</td>
<td>—</td>
<td>true</td>
</tr>
<tr>
<td>name</td>
<td>原生属性</td>
<td>string</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>select-when-unmatched</td>
<td>在输入没有任何匹配建议的情况下，按下回车是否触发 <code>select</code> 事件</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>label</td>
<td>输入框关联的label文字</td>
<td>string</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>prefix-icon</td>
<td>输入框头部图标</td>
<td>string</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>suffix-icon</td>
<td>输入框尾部图标</td>
<td>string</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>hide-loading</td>
<td>是否隐藏远程加载时的加载图标</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>popper-append-to-body</td>
<td>是否将下拉列表插入至 body 元素。在下拉列表的定位出现问题时，可将该属性设置为 false</td>
<td>boolean</td>
<td>-</td>
<td>true</td>
</tr>
<tr>
<td>highlight-first-item</td>
<td>是否默认突出显示远程搜索建议中的第一项</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
</tbody>
</table>
<h3 id="autocomplete-slots"><a class="header-anchor" href="#autocomplete-slots">¶</a> Autocomplete Slots</h3>
<table>
<thead>
<tr>
<th>name</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>prefix</td>
<td>输入框头部内容</td>
</tr>
<tr>
<td>suffix</td>
<td>输入框尾部内容</td>
</tr>
<tr>
<td>prepend</td>
<td>输入框前置内容</td>
</tr>
<tr>
<td>append</td>
<td>输入框后置内容</td>
</tr>
</tbody>
</table>
<h3 id="autocomplete-scoped-slot"><a class="header-anchor" href="#autocomplete-scoped-slot">¶</a> Autocomplete Scoped Slot</h3>
<table>
<thead>
<tr>
<th>name</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>—</td>
<td>自定义输入建议，参数为 { item }</td>
</tr>
</tbody>
</table>
<h3 id="autocomplete-events"><a class="header-anchor" href="#autocomplete-events">¶</a> Autocomplete Events</h3>
<table>
<thead>
<tr>
<th>事件名称</th>
<th>说明</th>
<th>回调参数</th>
</tr>
</thead>
<tbody>
<tr>
<td>select</td>
<td>点击选中建议项时触发</td>
<td>选中建议项</td>
</tr>
<tr>
<td>change</td>
<td>在 Input 值改变时触发</td>
<td>(value: string | number)</td>
</tr>
</tbody>
</table>
<h3 id="autocomplete-methods"><a class="header-anchor" href="#autocomplete-methods">¶</a> Autocomplete Methods</h3>
<table>
<thead>
<tr>
<th>方法名</th>
<th>说明</th>
<th>参数</th>
</tr>
</thead>
<tbody>
<tr>
<td>focus</td>
<td>使 input 获取焦点</td>
<td>-</td>
</tr>
</tbody>
</table>
