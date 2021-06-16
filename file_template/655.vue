<h2 id="table-biao-ge"><a class="header-anchor" href="#table-biao-ge">¶</a> Table 表格</h2>
<p>用于展示多条结构类似的数据，可对数据进行排序、筛选、对比或其他自定义操作。</p>
<h3 id="ji-chu-biao-ge"><a class="header-anchor" href="#ji-chu-biao-ge">¶</a> 基础表格</h3>
<p>基础的表格展示用法。</p>
<demo-block>
        <div><p>当<code>el-table</code>元素中注入<code>data</code>对象数组后，在<code>el-table-column</code>中用<code>prop</code>属性来对应对象中的键名即可填入数据，用<code>label</code>属性来定义表格的列名。可以使用<code>width</code>属性来定义列宽。</p>
</div>
        <template slot="source"><element-demo0 /></template>
        <template slot="highlight"><pre v-pre><code class="html">  &lt;template&gt;
    &lt;el-table
      :data=&quot;tableData&quot;
      style=&quot;width: 100%&quot;&gt;
      &lt;el-table-column
        prop=&quot;date&quot;
        label=&quot;日期&quot;
        width=&quot;180&quot;&gt;
      &lt;/el-table-column&gt;
      &lt;el-table-column
        prop=&quot;name&quot;
        label=&quot;姓名&quot;
        width=&quot;180&quot;&gt;
      &lt;/el-table-column&gt;
      &lt;el-table-column
        prop=&quot;address&quot;
        label=&quot;地址&quot;&gt;
      &lt;/el-table-column&gt;
    &lt;/el-table&gt;
  &lt;/template&gt;

  &lt;script&gt;
    export default {
      data() {
        return {
          tableData: [{
            date: '2016-05-02',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
          }, {
            date: '2016-05-04',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1517 弄'
          }, {
            date: '2016-05-01',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1519 弄'
          }, {
            date: '2016-05-03',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1516 弄'
          }]
        }
      }
    }
  &lt;/script&gt;
</code></pre></template></demo-block><h3 id="dai-ban-ma-wen-biao-ge"><a class="header-anchor" href="#dai-ban-ma-wen-biao-ge">¶</a> 带斑马纹表格</h3>
<p>使用带斑马纹的表格，可以更容易区分出不同行的数据。</p>
<demo-block>
        <div><p><code>stripe</code>属性可以创建带斑马纹的表格。它接受一个<code>Boolean</code>，默认为<code>false</code>，设置为<code>true</code>即为启用。</p>
</div>
        <template slot="source"><element-demo1 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;template&gt;
  &lt;el-table
    :data=&quot;tableData&quot;
    stripe
    style=&quot;width: 100%&quot;&gt;
    &lt;el-table-column
      prop=&quot;date&quot;
      label=&quot;日期&quot;
      width=&quot;180&quot;&gt;
    &lt;/el-table-column&gt;
    &lt;el-table-column
      prop=&quot;name&quot;
      label=&quot;姓名&quot;
      width=&quot;180&quot;&gt;
    &lt;/el-table-column&gt;
    &lt;el-table-column
      prop=&quot;address&quot;
      label=&quot;地址&quot;&gt;
    &lt;/el-table-column&gt;
  &lt;/el-table&gt;
&lt;/template&gt;

&lt;script&gt;
  export default {
    data() {
      return {
        tableData: [{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }]
      }
    }
  }
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="dai-bian-kuang-biao-ge"><a class="header-anchor" href="#dai-bian-kuang-biao-ge">¶</a> 带边框表格</h3>
<demo-block>
        <div><p>默认情况下，Table 组件是不具有竖直方向的边框的，如果需要，可以使用<code>border</code>属性，它接受一个<code>Boolean</code>，设置为<code>true</code>即可启用。</p>
</div>
        <template slot="source"><element-demo2 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;template&gt;
  &lt;el-table
    :data=&quot;tableData&quot;
    border
    style=&quot;width: 100%&quot;&gt;
    &lt;el-table-column
      prop=&quot;date&quot;
      label=&quot;日期&quot;
      width=&quot;180&quot;&gt;
    &lt;/el-table-column&gt;
    &lt;el-table-column
      prop=&quot;name&quot;
      label=&quot;姓名&quot;
      width=&quot;180&quot;&gt;
    &lt;/el-table-column&gt;
    &lt;el-table-column
      prop=&quot;address&quot;
      label=&quot;地址&quot;&gt;
    &lt;/el-table-column&gt;
  &lt;/el-table&gt;
&lt;/template&gt;

&lt;script&gt;
  export default {
    data() {
      return {
        tableData: [{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }]
      }
    }
  }
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="dai-zhuang-tai-biao-ge"><a class="header-anchor" href="#dai-zhuang-tai-biao-ge">¶</a> 带状态表格</h3>
<p>可将表格内容 highlight 显示，方便区分「成功、信息、警告、危险」等内容。</p>
<demo-block>
        <div><p>可以通过指定 Table 组件的 <code>row-class-name</code> 属性来为 Table 中的某一行添加 class，表明该行处于某种状态。</p>
</div>
        <template slot="source"><element-demo3 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;template&gt;
  &lt;el-table
    :data=&quot;tableData&quot;
    style=&quot;width: 100%&quot;
    :row-class-name=&quot;tableRowClassName&quot;&gt;
    &lt;el-table-column
      prop=&quot;date&quot;
      label=&quot;日期&quot;
      width=&quot;180&quot;&gt;
    &lt;/el-table-column&gt;
    &lt;el-table-column
      prop=&quot;name&quot;
      label=&quot;姓名&quot;
      width=&quot;180&quot;&gt;
    &lt;/el-table-column&gt;
    &lt;el-table-column
      prop=&quot;address&quot;
      label=&quot;地址&quot;&gt;
    &lt;/el-table-column&gt;
  &lt;/el-table&gt;
&lt;/template&gt;

&lt;style&gt;
  .el-table .warning-row {
    background: oldlace;
  }

  .el-table .success-row {
    background: #f0f9eb;
  }
&lt;/style&gt;

&lt;script&gt;
  export default {
    methods: {
      tableRowClassName({row, rowIndex}) {
        if (rowIndex === 1) {
          return 'warning-row';
        } else if (rowIndex === 3) {
          return 'success-row';
        }
        return '';
      }
    },
    data() {
      return {
        tableData: [{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }]
      }
    }
  }
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="gu-ding-biao-tou"><a class="header-anchor" href="#gu-ding-biao-tou">¶</a> 固定表头</h3>
<p>纵向内容过多时，可选择固定表头。</p>
<demo-block>
        <div><p>只要在<code>el-table</code>元素中定义了<code>height</code>属性，即可实现固定表头的表格，而不需要额外的代码。</p>
</div>
        <template slot="source"><element-demo4 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;template&gt;
  &lt;el-table
    :data=&quot;tableData&quot;
    height=&quot;250&quot;
    border
    style=&quot;width: 100%&quot;&gt;
    &lt;el-table-column
      prop=&quot;date&quot;
      label=&quot;日期&quot;
      width=&quot;180&quot;&gt;
    &lt;/el-table-column&gt;
    &lt;el-table-column
      prop=&quot;name&quot;
      label=&quot;姓名&quot;
      width=&quot;180&quot;&gt;
    &lt;/el-table-column&gt;
    &lt;el-table-column
      prop=&quot;address&quot;
      label=&quot;地址&quot;&gt;
    &lt;/el-table-column&gt;
  &lt;/el-table&gt;
&lt;/template&gt;

&lt;script&gt;
  export default {
    data() {
      return {
        tableData: [{
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-08',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-06',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-07',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }]
      }
    }
  }
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="gu-ding-lie"><a class="header-anchor" href="#gu-ding-lie">¶</a> 固定列</h3>
<p>横向内容过多时，可选择固定列。</p>
<demo-block>
        <div><p>固定列需要使用<code>fixed</code>属性，它接受 Boolean 值或者<code>left</code> <code>right</code>，表示左边固定还是右边固定。</p>
</div>
        <template slot="source"><element-demo5 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;template&gt;
  &lt;el-table
    :data=&quot;tableData&quot;
    border
    style=&quot;width: 100%&quot;&gt;
    &lt;el-table-column
      fixed
      prop=&quot;date&quot;
      label=&quot;日期&quot;
      width=&quot;150&quot;&gt;
    &lt;/el-table-column&gt;
    &lt;el-table-column
      prop=&quot;name&quot;
      label=&quot;姓名&quot;
      width=&quot;120&quot;&gt;
    &lt;/el-table-column&gt;
    &lt;el-table-column
      prop=&quot;province&quot;
      label=&quot;省份&quot;
      width=&quot;120&quot;&gt;
    &lt;/el-table-column&gt;
    &lt;el-table-column
      prop=&quot;city&quot;
      label=&quot;市区&quot;
      width=&quot;120&quot;&gt;
    &lt;/el-table-column&gt;
    &lt;el-table-column
      prop=&quot;address&quot;
      label=&quot;地址&quot;
      width=&quot;300&quot;&gt;
    &lt;/el-table-column&gt;
    &lt;el-table-column
      prop=&quot;zip&quot;
      label=&quot;邮编&quot;
      width=&quot;120&quot;&gt;
    &lt;/el-table-column&gt;
    &lt;el-table-column
      fixed=&quot;right&quot;
      label=&quot;操作&quot;
      width=&quot;100&quot;&gt;
      &lt;template slot-scope=&quot;scope&quot;&gt;
        &lt;el-button @click=&quot;handleClick(scope.row)&quot; type=&quot;text&quot; size=&quot;small&quot;&gt;查看&lt;/el-button&gt;
        &lt;el-button type=&quot;text&quot; size=&quot;small&quot;&gt;编辑&lt;/el-button&gt;
      &lt;/template&gt;
    &lt;/el-table-column&gt;
  &lt;/el-table&gt;
&lt;/template&gt;

&lt;script&gt;
  export default {
    methods: {
      handleClick(row) {
        console.log(row);
      }
    },

    data() {
      return {
        tableData: [{
          date: '2016-05-02',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-04',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1517 弄',
          zip: 200333
        }, {
          date: '2016-05-01',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1519 弄',
          zip: 200333
        }, {
          date: '2016-05-03',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1516 弄',
          zip: 200333
        }]
      }
    }
  }
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="gu-ding-lie-he-biao-tou"><a class="header-anchor" href="#gu-ding-lie-he-biao-tou">¶</a> 固定列和表头</h3>
<p>横纵内容过多时，可选择固定列和表头。</p>
<demo-block>
        <div><p>固定列和表头可以同时使用，只需要将上述两个属性分别设置好即可。</p>
</div>
        <template slot="source"><element-demo6 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;template&gt;
  &lt;el-table
    :data=&quot;tableData&quot;
    style=&quot;width: 100%&quot;
    height=&quot;250&quot;&gt;
    &lt;el-table-column
      fixed
      prop=&quot;date&quot;
      label=&quot;日期&quot;
      width=&quot;150&quot;&gt;
    &lt;/el-table-column&gt;
    &lt;el-table-column
      prop=&quot;name&quot;
      label=&quot;姓名&quot;
      width=&quot;120&quot;&gt;
    &lt;/el-table-column&gt;
    &lt;el-table-column
      prop=&quot;province&quot;
      label=&quot;省份&quot;
      width=&quot;120&quot;&gt;
    &lt;/el-table-column&gt;
    &lt;el-table-column
      prop=&quot;city&quot;
      label=&quot;市区&quot;
      width=&quot;120&quot;&gt;
    &lt;/el-table-column&gt;
    &lt;el-table-column
      prop=&quot;address&quot;
      label=&quot;地址&quot;
      width=&quot;300&quot;&gt;
    &lt;/el-table-column&gt;
    &lt;el-table-column
      prop=&quot;zip&quot;
      label=&quot;邮编&quot;
      width=&quot;120&quot;&gt;
    &lt;/el-table-column&gt;
  &lt;/el-table&gt;
&lt;/template&gt;

&lt;script&gt;
  export default {
    data() {
      return {
        tableData: [{
          date: '2016-05-03',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-02',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-04',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-01',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-08',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-06',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-07',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }]
      }
    }
  }
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="liu-ti-gao-du"><a class="header-anchor" href="#liu-ti-gao-du">¶</a> 流体高度</h3>
<p>当数据量动态变化时，可以为 Table 设置一个最大高度。</p>
<demo-block>
        <div><p>通过设置<code>max-height</code>属性为 Table 指定最大高度。此时若表格所需的高度大于最大高度，则会显示一个滚动条。</p>
</div>
        <template slot="source"><element-demo7 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;template&gt;
  &lt;el-table
    :data=&quot;tableData&quot;
    style=&quot;width: 100%&quot;
    max-height=&quot;250&quot;&gt;
    &lt;el-table-column
      fixed
      prop=&quot;date&quot;
      label=&quot;日期&quot;
      width=&quot;150&quot;&gt;
    &lt;/el-table-column&gt;
    &lt;el-table-column
      prop=&quot;name&quot;
      label=&quot;姓名&quot;
      width=&quot;120&quot;&gt;
    &lt;/el-table-column&gt;
    &lt;el-table-column
      prop=&quot;province&quot;
      label=&quot;省份&quot;
      width=&quot;120&quot;&gt;
    &lt;/el-table-column&gt;
    &lt;el-table-column
      prop=&quot;city&quot;
      label=&quot;市区&quot;
      width=&quot;120&quot;&gt;
    &lt;/el-table-column&gt;
    &lt;el-table-column
      prop=&quot;address&quot;
      label=&quot;地址&quot;
      width=&quot;300&quot;&gt;
    &lt;/el-table-column&gt;
    &lt;el-table-column
      prop=&quot;zip&quot;
      label=&quot;邮编&quot;
      width=&quot;120&quot;&gt;
    &lt;/el-table-column&gt;
    &lt;el-table-column
      fixed=&quot;right&quot;
      label=&quot;操作&quot;
      width=&quot;120&quot;&gt;
      &lt;template slot-scope=&quot;scope&quot;&gt;
        &lt;el-button
          @click.native.prevent=&quot;deleteRow(scope.$index, tableData)&quot;
          type=&quot;text&quot;
          size=&quot;small&quot;&gt;
          移除
        &lt;/el-button&gt;
      &lt;/template&gt;
    &lt;/el-table-column&gt;
  &lt;/el-table&gt;
&lt;/template&gt;

&lt;script&gt;
  export default {
    methods: {
      deleteRow(index, rows) {
        rows.splice(index, 1);
      }
    },
    data() {
      return {
        tableData: [{
          date: '2016-05-03',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-02',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-04',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-01',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-08',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-06',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-07',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }]
      }
    }
  }
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="duo-ji-biao-tou"><a class="header-anchor" href="#duo-ji-biao-tou">¶</a> 多级表头</h3>
<p>数据结构比较复杂的时候，可使用多级表头来展现数据的层次关系。</p>
<demo-block>
        <div><p>只需要在 el-table-column 里面嵌套 el-table-column，就可以实现多级表头。</p>
</div>
        <template slot="source"><element-demo8 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;template&gt;
  &lt;el-table
    :data=&quot;tableData&quot;
    style=&quot;width: 100%&quot;&gt;
    &lt;el-table-column
      prop=&quot;date&quot;
      label=&quot;日期&quot;
      width=&quot;150&quot;&gt;
    &lt;/el-table-column&gt;
    &lt;el-table-column label=&quot;配送信息&quot;&gt;
      &lt;el-table-column
        prop=&quot;name&quot;
        label=&quot;姓名&quot;
        width=&quot;120&quot;&gt;
      &lt;/el-table-column&gt;
      &lt;el-table-column label=&quot;地址&quot;&gt;
        &lt;el-table-column
          prop=&quot;province&quot;
          label=&quot;省份&quot;
          width=&quot;120&quot;&gt;
        &lt;/el-table-column&gt;
        &lt;el-table-column
          prop=&quot;city&quot;
          label=&quot;市区&quot;
          width=&quot;120&quot;&gt;
        &lt;/el-table-column&gt;
        &lt;el-table-column
          prop=&quot;address&quot;
          label=&quot;地址&quot;
          width=&quot;300&quot;&gt;
        &lt;/el-table-column&gt;
        &lt;el-table-column
          prop=&quot;zip&quot;
          label=&quot;邮编&quot;
          width=&quot;120&quot;&gt;
        &lt;/el-table-column&gt;
      &lt;/el-table-column&gt;
    &lt;/el-table-column&gt;
  &lt;/el-table&gt;
&lt;/template&gt;

&lt;script&gt;
  export default {
    data() {
      return {
        tableData: [{
          date: '2016-05-03',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-02',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-04',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-01',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-08',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-06',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-07',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }]
      }
    }
  }
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="dan-xuan"><a class="header-anchor" href="#dan-xuan">¶</a> 单选</h3>
<p>选择单行数据时使用色块表示。</p>
<demo-block>
        <div><p>Table 组件提供了单选的支持，只需要配置<code>highlight-current-row</code>属性即可实现单选。之后由<code>current-change</code>事件来管理选中时触发的事件，它会传入<code>currentRow</code>，<code>oldCurrentRow</code>。如果需要显示索引，可以增加一列<code>el-table-column</code>，设置<code>type</code>属性为<code>index</code>即可显示从 1 开始的索引号。</p>
</div>
        <template slot="source"><element-demo9 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;template&gt;
  &lt;el-table
    ref=&quot;singleTable&quot;
    :data=&quot;tableData&quot;
    highlight-current-row
    @current-change=&quot;handleCurrentChange&quot;
    style=&quot;width: 100%&quot;&gt;
    &lt;el-table-column
      type=&quot;index&quot;
      width=&quot;50&quot;&gt;
    &lt;/el-table-column&gt;
    &lt;el-table-column
      property=&quot;date&quot;
      label=&quot;日期&quot;
      width=&quot;120&quot;&gt;
    &lt;/el-table-column&gt;
    &lt;el-table-column
      property=&quot;name&quot;
      label=&quot;姓名&quot;
      width=&quot;120&quot;&gt;
    &lt;/el-table-column&gt;
    &lt;el-table-column
      property=&quot;address&quot;
      label=&quot;地址&quot;&gt;
    &lt;/el-table-column&gt;
  &lt;/el-table&gt;
  &lt;div style=&quot;margin-top: 20px&quot;&gt;
    &lt;el-button @click=&quot;setCurrent(tableData[1])&quot;&gt;选中第二行&lt;/el-button&gt;
    &lt;el-button @click=&quot;setCurrent()&quot;&gt;取消选择&lt;/el-button&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
  export default {
    data() {
      return {
        tableData: [{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }],
        currentRow: null
      }
    },

    methods: {
      setCurrent(row) {
        this.$refs.singleTable.setCurrentRow(row);
      },
      handleCurrentChange(val) {
        this.currentRow = val;
      }
    }
  }
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="duo-xuan"><a class="header-anchor" href="#duo-xuan">¶</a> 多选</h3>
<p>选择多行数据时使用 Checkbox。</p>
<demo-block>
        <div><p>实现多选非常简单: 手动添加一个<code>el-table-column</code>，设<code>type</code>属性为<code>selection</code>即可；默认情况下若内容过多会折行显示，若需要单行显示可以使用<code>show-overflow-tooltip</code>属性，它接受一个<code>Boolean</code>，为<code>true</code>时多余的内容会在 hover 时以 tooltip 的形式显示出来。</p>
</div>
        <template slot="source"><element-demo10 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;template&gt;
  &lt;el-table
    ref=&quot;multipleTable&quot;
    :data=&quot;tableData&quot;
    tooltip-effect=&quot;dark&quot;
    style=&quot;width: 100%&quot;
    @selection-change=&quot;handleSelectionChange&quot;&gt;
    &lt;el-table-column
      type=&quot;selection&quot;
      width=&quot;55&quot;&gt;
    &lt;/el-table-column&gt;
    &lt;el-table-column
      label=&quot;日期&quot;
      width=&quot;120&quot;&gt;
      &lt;template slot-scope=&quot;scope&quot;&gt;{{ scope.row.date }}&lt;/template&gt;
    &lt;/el-table-column&gt;
    &lt;el-table-column
      prop=&quot;name&quot;
      label=&quot;姓名&quot;
      width=&quot;120&quot;&gt;
    &lt;/el-table-column&gt;
    &lt;el-table-column
      prop=&quot;address&quot;
      label=&quot;地址&quot;
      show-overflow-tooltip&gt;
    &lt;/el-table-column&gt;
  &lt;/el-table&gt;
  &lt;div style=&quot;margin-top: 20px&quot;&gt;
    &lt;el-button @click=&quot;toggleSelection([tableData[1], tableData[2]])&quot;&gt;切换第二、第三行的选中状态&lt;/el-button&gt;
    &lt;el-button @click=&quot;toggleSelection()&quot;&gt;取消选择&lt;/el-button&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
  export default {
    data() {
      return {
        tableData: [{
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-08',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-06',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-07',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }],
        multipleSelection: []
      }
    },

    methods: {
      toggleSelection(rows) {
        if (rows) {
          rows.forEach(row =&gt; {
            this.$refs.multipleTable.toggleRowSelection(row);
          });
        } else {
          this.$refs.multipleTable.clearSelection();
        }
      },
      handleSelectionChange(val) {
        this.multipleSelection = val;
      }
    }
  }
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="pai-xu"><a class="header-anchor" href="#pai-xu">¶</a> 排序</h3>
<p>对表格进行排序，可快速查找或对比数据。</p>
<demo-block>
        <div><p>在列中设置<code>sortable</code>属性即可实现以该列为基准的排序，接受一个<code>Boolean</code>，默认为<code>false</code>。可以通过 Table 的<code>default-sort</code>属性设置默认的排序列和排序顺序。可以使用<code>sort-method</code>或者<code>sort-by</code>使用自定义的排序规则。如果需要后端排序，需将<code>sortable</code>设置为<code>custom</code>，同时在 Table 上监听<code>sort-change</code>事件，在事件回调中可以获取当前排序的字段名和排序顺序，从而向接口请求排序后的表格数据。在本例中，我们还使用了<code>formatter</code>属性，它用于格式化指定列的值，接受一个<code>Function</code>，会传入两个参数：<code>row</code>和<code>column</code>，可以根据自己的需求进行处理。</p>
</div>
        <template slot="source"><element-demo11 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;template&gt;
  &lt;el-table
    :data=&quot;tableData&quot;
    style=&quot;width: 100%&quot;
    :default-sort = &quot;{prop: 'date', order: 'descending'}&quot;
    &gt;
    &lt;el-table-column
      prop=&quot;date&quot;
      label=&quot;日期&quot;
      sortable
      width=&quot;180&quot;&gt;
    &lt;/el-table-column&gt;
    &lt;el-table-column
      prop=&quot;name&quot;
      label=&quot;姓名&quot;
      sortable
      width=&quot;180&quot;&gt;
    &lt;/el-table-column&gt;
    &lt;el-table-column
      prop=&quot;address&quot;
      label=&quot;地址&quot;
      :formatter=&quot;formatter&quot;&gt;
    &lt;/el-table-column&gt;
  &lt;/el-table&gt;
&lt;/template&gt;

&lt;script&gt;
  export default {
    data() {
      return {
        tableData: [{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }]
      }
    },
    methods: {
      formatter(row, column) {
        return row.address;
      }
    }
  }
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="shai-xuan"><a class="header-anchor" href="#shai-xuan">¶</a> 筛选</h3>
<p>对表格进行筛选，可快速查找到自己想看的数据。</p>
<demo-block>
        <div><p>在列中设置<code>filters</code> <code>filter-method</code>属性即可开启该列的筛选，filters 是一个数组，<code>filter-method</code>是一个方法，它用于决定某些数据是否显示，会传入三个参数：<code>value</code>, <code>row</code> 和 <code>column</code>。</p>
</div>
        <template slot="source"><element-demo12 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;template&gt;
  &lt;el-button @click=&quot;resetDateFilter&quot;&gt;清除日期过滤器&lt;/el-button&gt;
  &lt;el-button @click=&quot;clearFilter&quot;&gt;清除所有过滤器&lt;/el-button&gt;
  &lt;el-table
    ref=&quot;filterTable&quot;
    :data=&quot;tableData&quot;
    style=&quot;width: 100%&quot;&gt;
    &lt;el-table-column
      prop=&quot;date&quot;
      label=&quot;日期&quot;
      sortable
      width=&quot;180&quot;
      column-key=&quot;date&quot;
      :filters=&quot;[{text: '2016-05-01', value: '2016-05-01'}, {text: '2016-05-02', value: '2016-05-02'}, {text: '2016-05-03', value: '2016-05-03'}, {text: '2016-05-04', value: '2016-05-04'}]&quot;
      :filter-method=&quot;filterHandler&quot;
    &gt;
    &lt;/el-table-column&gt;
    &lt;el-table-column
      prop=&quot;name&quot;
      label=&quot;姓名&quot;
      width=&quot;180&quot;&gt;
    &lt;/el-table-column&gt;
    &lt;el-table-column
      prop=&quot;address&quot;
      label=&quot;地址&quot;
      :formatter=&quot;formatter&quot;&gt;
    &lt;/el-table-column&gt;
    &lt;el-table-column
      prop=&quot;tag&quot;
      label=&quot;标签&quot;
      width=&quot;100&quot;
      :filters=&quot;[{ text: '家', value: '家' }, { text: '公司', value: '公司' }]&quot;
      :filter-method=&quot;filterTag&quot;
      filter-placement=&quot;bottom-end&quot;&gt;
      &lt;template slot-scope=&quot;scope&quot;&gt;
        &lt;el-tag
          :type=&quot;scope.row.tag === '家' ? 'primary' : 'success'&quot;
          disable-transitions&gt;{{scope.row.tag}}&lt;/el-tag&gt;
      &lt;/template&gt;
    &lt;/el-table-column&gt;
  &lt;/el-table&gt;
&lt;/template&gt;

&lt;script&gt;
  export default {
    data() {
      return {
        tableData: [{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
          tag: '家'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄',
          tag: '公司'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄',
          tag: '家'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄',
          tag: '公司'
        }]
      }
    },
    methods: {
      resetDateFilter() {
        this.$refs.filterTable.clearFilter('date');
      },
      clearFilter() {
        this.$refs.filterTable.clearFilter();
      },
      formatter(row, column) {
        return row.address;
      },
      filterTag(value, row) {
        return row.tag === value;
      },
      filterHandler(value, row, column) {
        const property = column['property'];
        return row[property] === value;
      }
    }
  }
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="zi-ding-yi-lie-mo-ban"><a class="header-anchor" href="#zi-ding-yi-lie-mo-ban">¶</a> 自定义列模板</h3>
<p>自定义列的显示内容，可组合其他组件使用。</p>
<demo-block>
        <div><p>通过 <code>Scoped slot</code> 可以获取到 row, column, $index 和 store（table 内部的状态管理）的数据，用法参考 demo。</p>
</div>
        <template slot="source"><element-demo13 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;template&gt;
  &lt;el-table
    :data=&quot;tableData&quot;
    style=&quot;width: 100%&quot;&gt;
    &lt;el-table-column
      label=&quot;日期&quot;
      width=&quot;180&quot;&gt;
      &lt;template slot-scope=&quot;scope&quot;&gt;
        &lt;i class=&quot;el-icon-time&quot;&gt;&lt;/i&gt;
        &lt;span style=&quot;margin-left: 10px&quot;&gt;{{ scope.row.date }}&lt;/span&gt;
      &lt;/template&gt;
    &lt;/el-table-column&gt;
    &lt;el-table-column
      label=&quot;姓名&quot;
      width=&quot;180&quot;&gt;
      &lt;template slot-scope=&quot;scope&quot;&gt;
        &lt;el-popover trigger=&quot;hover&quot; placement=&quot;top&quot;&gt;
          &lt;p&gt;姓名: {{ scope.row.name }}&lt;/p&gt;
          &lt;p&gt;住址: {{ scope.row.address }}&lt;/p&gt;
          &lt;div slot=&quot;reference&quot; class=&quot;name-wrapper&quot;&gt;
            &lt;el-tag size=&quot;medium&quot;&gt;{{ scope.row.name }}&lt;/el-tag&gt;
          &lt;/div&gt;
        &lt;/el-popover&gt;
      &lt;/template&gt;
    &lt;/el-table-column&gt;
    &lt;el-table-column label=&quot;操作&quot;&gt;
      &lt;template slot-scope=&quot;scope&quot;&gt;
        &lt;el-button
          size=&quot;mini&quot;
          @click=&quot;handleEdit(scope.$index, scope.row)&quot;&gt;编辑&lt;/el-button&gt;
        &lt;el-button
          size=&quot;mini&quot;
          type=&quot;danger&quot;
          @click=&quot;handleDelete(scope.$index, scope.row)&quot;&gt;删除&lt;/el-button&gt;
      &lt;/template&gt;
    &lt;/el-table-column&gt;
  &lt;/el-table&gt;
&lt;/template&gt;

&lt;script&gt;
  export default {
    data() {
      return {
        tableData: [{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }]
      }
    },
    methods: {
      handleEdit(index, row) {
        console.log(index, row);
      },
      handleDelete(index, row) {
        console.log(index, row);
      }
    }
  }
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="zhan-kai-xing"><a class="header-anchor" href="#zhan-kai-xing">¶</a> 展开行</h3>
<p>当行内容过多并且不想显示横向滚动条时，可以使用 Table 展开行功能。</p>
<demo-block>
        <div><p>通过设置 type=&quot;expand&quot; 和 <code>Scoped slot</code> 可以开启展开行功能，<code>el-table-column</code> 的模板会被渲染成为展开行的内容，展开行可访问的属性与使用自定义列模板时的 <code>Scoped slot</code> 相同。</p>
</div>
        <template slot="source"><element-demo14 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;template&gt;
  &lt;el-table
    :data=&quot;tableData&quot;
    style=&quot;width: 100%&quot;&gt;
    &lt;el-table-column type=&quot;expand&quot;&gt;
      &lt;template slot-scope=&quot;props&quot;&gt;
        &lt;el-form label-position=&quot;left&quot; inline class=&quot;demo-table-expand&quot;&gt;
          &lt;el-form-item label=&quot;商品名称&quot;&gt;
            &lt;span&gt;{{ props.row.name }}&lt;/span&gt;
          &lt;/el-form-item&gt;
          &lt;el-form-item label=&quot;所属店铺&quot;&gt;
            &lt;span&gt;{{ props.row.shop }}&lt;/span&gt;
          &lt;/el-form-item&gt;
          &lt;el-form-item label=&quot;商品 ID&quot;&gt;
            &lt;span&gt;{{ props.row.id }}&lt;/span&gt;
          &lt;/el-form-item&gt;
          &lt;el-form-item label=&quot;店铺 ID&quot;&gt;
            &lt;span&gt;{{ props.row.shopId }}&lt;/span&gt;
          &lt;/el-form-item&gt;
          &lt;el-form-item label=&quot;商品分类&quot;&gt;
            &lt;span&gt;{{ props.row.category }}&lt;/span&gt;
          &lt;/el-form-item&gt;
          &lt;el-form-item label=&quot;店铺地址&quot;&gt;
            &lt;span&gt;{{ props.row.address }}&lt;/span&gt;
          &lt;/el-form-item&gt;
          &lt;el-form-item label=&quot;商品描述&quot;&gt;
            &lt;span&gt;{{ props.row.desc }}&lt;/span&gt;
          &lt;/el-form-item&gt;
        &lt;/el-form&gt;
      &lt;/template&gt;
    &lt;/el-table-column&gt;
    &lt;el-table-column
      label=&quot;商品 ID&quot;
      prop=&quot;id&quot;&gt;
    &lt;/el-table-column&gt;
    &lt;el-table-column
      label=&quot;商品名称&quot;
      prop=&quot;name&quot;&gt;
    &lt;/el-table-column&gt;
    &lt;el-table-column
      label=&quot;描述&quot;
      prop=&quot;desc&quot;&gt;
    &lt;/el-table-column&gt;
  &lt;/el-table&gt;
&lt;/template&gt;

&lt;style&gt;
  .demo-table-expand {
    font-size: 0;
  }
  .demo-table-expand label {
    width: 90px;
    color: #99a9bf;
  }
  .demo-table-expand .el-form-item {
    margin-right: 0;
    margin-bottom: 0;
    width: 50%;
  }
&lt;/style&gt;

&lt;script&gt;
  export default {
    data() {
      return {
        tableData: [{
          id: '12987122',
          name: '好滋好味鸡蛋仔',
          category: '江浙小吃、小吃零食',
          desc: '荷兰优质淡奶，奶香浓而不腻',
          address: '上海市普陀区真北路',
          shop: '王小虎夫妻店',
          shopId: '10333'
        }, {
          id: '12987123',
          name: '好滋好味鸡蛋仔',
          category: '江浙小吃、小吃零食',
          desc: '荷兰优质淡奶，奶香浓而不腻',
          address: '上海市普陀区真北路',
          shop: '王小虎夫妻店',
          shopId: '10333'
        }, {
          id: '12987125',
          name: '好滋好味鸡蛋仔',
          category: '江浙小吃、小吃零食',
          desc: '荷兰优质淡奶，奶香浓而不腻',
          address: '上海市普陀区真北路',
          shop: '王小虎夫妻店',
          shopId: '10333'
        }, {
          id: '12987126',
          name: '好滋好味鸡蛋仔',
          category: '江浙小吃、小吃零食',
          desc: '荷兰优质淡奶，奶香浓而不腻',
          address: '上海市普陀区真北路',
          shop: '王小虎夫妻店',
          shopId: '10333'
        }]
      }
    }
  }
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="shu-xing-shu-ju-yu-lan-jia-zai"><a class="header-anchor" href="#shu-xing-shu-ju-yu-lan-jia-zai">¶</a> 树形数据与懒加载</h3>
<demo-block>
        <div><p>支持树类型的数据的显示。当 row 中包含 <code>children</code> 字段时，被视为树形数据。渲染树形数据时，必须要指定 <code>row-key</code>。支持子节点数据异步加载。设置 Table 的 <code>lazy</code> 属性为 true 与加载函数 <code>load</code> 。通过指定 row 中的 <code>hasChildren</code> 字段来指定哪些行是包含子节点。<code>children</code> 与 <code>hasChildren</code> 都可以通过 <code>tree-props</code> 配置。</p>
</div>
        <template slot="source"><element-demo15 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;template&gt;
&lt;div&gt;
  &lt;el-table
    :data=&quot;tableData&quot;
    style=&quot;width: 100%;margin-bottom: 20px;&quot;
    row-key=&quot;id&quot;
    border
    default-expand-all
    :tree-props=&quot;{children: 'children', hasChildren: 'hasChildren'}&quot;&gt;
    &lt;el-table-column
      prop=&quot;date&quot;
      label=&quot;日期&quot;
      sortable
      width=&quot;180&quot;&gt;
    &lt;/el-table-column&gt;
    &lt;el-table-column
      prop=&quot;name&quot;
      label=&quot;姓名&quot;
      sortable
      width=&quot;180&quot;&gt;
    &lt;/el-table-column&gt;
    &lt;el-table-column
      prop=&quot;address&quot;
      label=&quot;地址&quot;&gt;
    &lt;/el-table-column&gt;
  &lt;/el-table&gt;

  &lt;el-table
    :data=&quot;tableData1&quot;
    style=&quot;width: 100%&quot;
    row-key=&quot;id&quot;
    border
    lazy
    :load=&quot;load&quot;
    :tree-props=&quot;{children: 'children', hasChildren: 'hasChildren'}&quot;&gt;
    &lt;el-table-column
      prop=&quot;date&quot;
      label=&quot;日期&quot;
      width=&quot;180&quot;&gt;
    &lt;/el-table-column&gt;
    &lt;el-table-column
      prop=&quot;name&quot;
      label=&quot;姓名&quot;
      width=&quot;180&quot;&gt;
    &lt;/el-table-column&gt;
    &lt;el-table-column
      prop=&quot;address&quot;
      label=&quot;地址&quot;&gt;
    &lt;/el-table-column&gt;
  &lt;/el-table&gt;
&lt;/div&gt;
&lt;/template&gt;
&lt;script&gt;
  export default {
    data() {
      return {
        tableData: [{
          id: 1,
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          id: 2,
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          id: 3,
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄',
          children: [{
              id: 31,
              date: '2016-05-01',
              name: '王小虎',
              address: '上海市普陀区金沙江路 1519 弄'
            }, {
              id: 32,
              date: '2016-05-01',
              name: '王小虎',
              address: '上海市普陀区金沙江路 1519 弄'
          }]
        }, {
          id: 4,
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }],
        tableData1: [{
          id: 1,
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          id: 2,
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          id: 3,
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄',
          hasChildren: true
        }, {
          id: 4,
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }]
      }
    },
    methods: {
      load(tree, treeNode, resolve) {
        setTimeout(() =&gt; {
          resolve([
            {
              id: 31,
              date: '2016-05-01',
              name: '王小虎',
              address: '上海市普陀区金沙江路 1519 弄'
            }, {
              id: 32,
              date: '2016-05-01',
              name: '王小虎',
              address: '上海市普陀区金沙江路 1519 弄'
            }
          ])
        }, 1000)
      }
    },
  }
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="zi-ding-yi-biao-tou"><a class="header-anchor" href="#zi-ding-yi-biao-tou">¶</a> 自定义表头</h3>
<p>表头支持自定义。</p>
<demo-block>
        <div><p>通过设置 <a href="https://cn.vuejs.org/v2/guide/components-slots.html#%E4%BD%9C%E7%94%A8%E5%9F%9F%E6%8F%92%E6%A7%BD">Scoped slot</a> 来自定义表头。</p>
</div>
        <template slot="source"><element-demo16 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;template&gt;
  &lt;el-table
    :data=&quot;tableData.filter(data =&gt; !search || data.name.toLowerCase().includes(search.toLowerCase()))&quot;
    style=&quot;width: 100%&quot;&gt;
    &lt;el-table-column
      label=&quot;Date&quot;
      prop=&quot;date&quot;&gt;
    &lt;/el-table-column&gt;
    &lt;el-table-column
      label=&quot;Name&quot;
      prop=&quot;name&quot;&gt;
    &lt;/el-table-column&gt;
    &lt;el-table-column
      align=&quot;right&quot;&gt;
      &lt;template slot=&quot;header&quot; slot-scope=&quot;scope&quot;&gt;
        &lt;el-input
          v-model=&quot;search&quot;
          size=&quot;mini&quot;
          placeholder=&quot;输入关键字搜索&quot;/&gt;
      &lt;/template&gt;
      &lt;template slot-scope=&quot;scope&quot;&gt;
        &lt;el-button
          size=&quot;mini&quot;
          @click=&quot;handleEdit(scope.$index, scope.row)&quot;&gt;Edit&lt;/el-button&gt;
        &lt;el-button
          size=&quot;mini&quot;
          type=&quot;danger&quot;
          @click=&quot;handleDelete(scope.$index, scope.row)&quot;&gt;Delete&lt;/el-button&gt;
      &lt;/template&gt;
    &lt;/el-table-column&gt;
  &lt;/el-table&gt;
&lt;/template&gt;

&lt;script&gt;
  export default {
    data() {
      return {
        tableData: [{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }],
        search: ''
      }
    },
    methods: {
      handleEdit(index, row) {
        console.log(index, row);
      },
      handleDelete(index, row) {
        console.log(index, row);
      }
    },
  }
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="biao-wei-he-ji-xing"><a class="header-anchor" href="#biao-wei-he-ji-xing">¶</a> 表尾合计行</h3>
<p>若表格展示的是各类数字，可以在表尾显示各列的合计。</p>
<demo-block>
        <div><p>将<code>show-summary</code>设置为<code>true</code>就会在表格尾部展示合计行。默认情况下，对于合计行，第一列不进行数据求合操作，而是显示「合计」二字（可通过<code>sum-text</code>配置），其余列会将本列所有数值进行求合操作，并显示出来。当然，你也可以定义自己的合计逻辑。使用<code>summary-method</code>并传入一个方法，返回一个数组，这个数组中的各项就会显示在合计行的各列中，具体可以参考本例中的第二个表格。</p>
</div>
        <template slot="source"><element-demo17 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;template&gt;
  &lt;el-table
    :data=&quot;tableData&quot;
    border
    show-summary
    style=&quot;width: 100%&quot;&gt;
    &lt;el-table-column
      prop=&quot;id&quot;
      label=&quot;ID&quot;
      width=&quot;180&quot;&gt;
    &lt;/el-table-column&gt;
    &lt;el-table-column
      prop=&quot;name&quot;
      label=&quot;姓名&quot;&gt;
    &lt;/el-table-column&gt;
    &lt;el-table-column
      prop=&quot;amount1&quot;
      sortable
      label=&quot;数值 1&quot;&gt;
    &lt;/el-table-column&gt;
    &lt;el-table-column
      prop=&quot;amount2&quot;
      sortable
      label=&quot;数值 2&quot;&gt;
    &lt;/el-table-column&gt;
    &lt;el-table-column
      prop=&quot;amount3&quot;
      sortable
      label=&quot;数值 3&quot;&gt;
    &lt;/el-table-column&gt;
  &lt;/el-table&gt;

  &lt;el-table
    :data=&quot;tableData&quot;
    border
    height=&quot;200&quot;
    :summary-method=&quot;getSummaries&quot;
    show-summary
    style=&quot;width: 100%; margin-top: 20px&quot;&gt;
    &lt;el-table-column
      prop=&quot;id&quot;
      label=&quot;ID&quot;
      width=&quot;180&quot;&gt;
    &lt;/el-table-column&gt;
    &lt;el-table-column
      prop=&quot;name&quot;
      label=&quot;姓名&quot;&gt;
    &lt;/el-table-column&gt;
    &lt;el-table-column
      prop=&quot;amount1&quot;
      label=&quot;数值 1（元）&quot;&gt;
    &lt;/el-table-column&gt;
    &lt;el-table-column
      prop=&quot;amount2&quot;
      label=&quot;数值 2（元）&quot;&gt;
    &lt;/el-table-column&gt;
    &lt;el-table-column
      prop=&quot;amount3&quot;
      label=&quot;数值 3（元）&quot;&gt;
    &lt;/el-table-column&gt;
  &lt;/el-table&gt;
&lt;/template&gt;

&lt;script&gt;
  export default {
    data() {
      return {
        tableData: [{
          id: '12987122',
          name: '王小虎',
          amount1: '234',
          amount2: '3.2',
          amount3: 10
        }, {
          id: '12987123',
          name: '王小虎',
          amount1: '165',
          amount2: '4.43',
          amount3: 12
        }, {
          id: '12987124',
          name: '王小虎',
          amount1: '324',
          amount2: '1.9',
          amount3: 9
        }, {
          id: '12987125',
          name: '王小虎',
          amount1: '621',
          amount2: '2.2',
          amount3: 17
        }, {
          id: '12987126',
          name: '王小虎',
          amount1: '539',
          amount2: '4.1',
          amount3: 15
        }]
      };
    },
    methods: {
      getSummaries(param) {
        const { columns, data } = param;
        const sums = [];
        columns.forEach((column, index) =&gt; {
          if (index === 0) {
            sums[index] = '总价';
            return;
          }
          const values = data.map(item =&gt; Number(item[column.property]));
          if (!values.every(value =&gt; isNaN(value))) {
            sums[index] = values.reduce((prev, curr) =&gt; {
              const value = Number(curr);
              if (!isNaN(value)) {
                return prev + curr;
              } else {
                return prev;
              }
            }, 0);
            sums[index] += ' 元';
          } else {
            sums[index] = 'N/A';
          }
        });

        return sums;
      }
    }
  };
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="he-bing-xing-huo-lie"><a class="header-anchor" href="#he-bing-xing-huo-lie">¶</a> 合并行或列</h3>
<p>多行或多列共用一个数据时，可以合并行或列。</p>
<demo-block>
        <div><p>通过给<code>table</code>传入<code>span-method</code>方法可以实现合并行或列，方法的参数是一个对象，里面包含当前行<code>row</code>、当前列<code>column</code>、当前行号<code>rowIndex</code>、当前列号<code>columnIndex</code>四个属性。该函数可以返回一个包含两个元素的数组，第一个元素代表<code>rowspan</code>，第二个元素代表<code>colspan</code>。 也可以返回一个键名为<code>rowspan</code>和<code>colspan</code>的对象。</p>
</div>
        <template slot="source"><element-demo18 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;template&gt;
  &lt;div&gt;
    &lt;el-table
      :data=&quot;tableData&quot;
      :span-method=&quot;arraySpanMethod&quot;
      border
      style=&quot;width: 100%&quot;&gt;
      &lt;el-table-column
        prop=&quot;id&quot;
        label=&quot;ID&quot;
        width=&quot;180&quot;&gt;
      &lt;/el-table-column&gt;
      &lt;el-table-column
        prop=&quot;name&quot;
        label=&quot;姓名&quot;&gt;
      &lt;/el-table-column&gt;
      &lt;el-table-column
        prop=&quot;amount1&quot;
        sortable
        label=&quot;数值 1&quot;&gt;
      &lt;/el-table-column&gt;
      &lt;el-table-column
        prop=&quot;amount2&quot;
        sortable
        label=&quot;数值 2&quot;&gt;
      &lt;/el-table-column&gt;
      &lt;el-table-column
        prop=&quot;amount3&quot;
        sortable
        label=&quot;数值 3&quot;&gt;
      &lt;/el-table-column&gt;
    &lt;/el-table&gt;

    &lt;el-table
      :data=&quot;tableData&quot;
      :span-method=&quot;objectSpanMethod&quot;
      border
      style=&quot;width: 100%; margin-top: 20px&quot;&gt;
      &lt;el-table-column
        prop=&quot;id&quot;
        label=&quot;ID&quot;
        width=&quot;180&quot;&gt;
      &lt;/el-table-column&gt;
      &lt;el-table-column
        prop=&quot;name&quot;
        label=&quot;姓名&quot;&gt;
      &lt;/el-table-column&gt;
      &lt;el-table-column
        prop=&quot;amount1&quot;
        label=&quot;数值 1（元）&quot;&gt;
      &lt;/el-table-column&gt;
      &lt;el-table-column
        prop=&quot;amount2&quot;
        label=&quot;数值 2（元）&quot;&gt;
      &lt;/el-table-column&gt;
      &lt;el-table-column
        prop=&quot;amount3&quot;
        label=&quot;数值 3（元）&quot;&gt;
      &lt;/el-table-column&gt;
    &lt;/el-table&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
  export default {
    data() {
      return {
        tableData: [{
          id: '12987122',
          name: '王小虎',
          amount1: '234',
          amount2: '3.2',
          amount3: 10
        }, {
          id: '12987123',
          name: '王小虎',
          amount1: '165',
          amount2: '4.43',
          amount3: 12
        }, {
          id: '12987124',
          name: '王小虎',
          amount1: '324',
          amount2: '1.9',
          amount3: 9
        }, {
          id: '12987125',
          name: '王小虎',
          amount1: '621',
          amount2: '2.2',
          amount3: 17
        }, {
          id: '12987126',
          name: '王小虎',
          amount1: '539',
          amount2: '4.1',
          amount3: 15
        }]
      };
    },
    methods: {
      arraySpanMethod({ row, column, rowIndex, columnIndex }) {
        if (rowIndex % 2 === 0) {
          if (columnIndex === 0) {
            return [1, 2];
          } else if (columnIndex === 1) {
            return [0, 0];
          }
        }
      },

      objectSpanMethod({ row, column, rowIndex, columnIndex }) {
        if (columnIndex === 0) {
          if (rowIndex % 2 === 0) {
            return {
              rowspan: 2,
              colspan: 1
            };
          } else {
            return {
              rowspan: 0,
              colspan: 0
            };
          }
        }
      }
    }
  };
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="zi-ding-yi-suo-yin"><a class="header-anchor" href="#zi-ding-yi-suo-yin">¶</a> 自定义索引</h3>
<p>自定义 <code>type=index</code> 列的行号。</p>
<demo-block>
        <div><p>通过给 <code>type=index</code> 的列传入 <code>index</code> 属性，可以自定义索引。该属性传入数字时，将作为索引的起始值。也可以传入一个方法，它提供当前行的行号（从 <code>0</code> 开始）作为参数，返回值将作为索引展示。</p>
</div>
        <template slot="source"><element-demo19 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;template&gt;
  &lt;el-table
    :data=&quot;tableData&quot;
    style=&quot;width: 100%&quot;&gt;
    &lt;el-table-column
      type=&quot;index&quot;
      :index=&quot;indexMethod&quot;&gt;
    &lt;/el-table-column&gt;
    &lt;el-table-column
      prop=&quot;date&quot;
      label=&quot;日期&quot;
      width=&quot;180&quot;&gt;
    &lt;/el-table-column&gt;
    &lt;el-table-column
      prop=&quot;name&quot;
      label=&quot;姓名&quot;
      width=&quot;180&quot;&gt;
    &lt;/el-table-column&gt;
    &lt;el-table-column
      prop=&quot;address&quot;
      label=&quot;地址&quot;&gt;
    &lt;/el-table-column&gt;
  &lt;/el-table&gt;
&lt;/template&gt;

&lt;script&gt;
  export default {
    data() {
      return {
        tableData: [{
          date: '2016-05-02',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333,
          tag: '家'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1517 弄',
          zip: 200333,
          tag: '公司'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1519 弄',
          zip: 200333,
          tag: '家'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1516 弄',
          zip: 200333,
          tag: '公司'
        }],
      }
    },
    methods: {
      indexMethod(index) {
        return index * 2;
      }
    }
  };
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="table-attributes"><a class="header-anchor" href="#table-attributes">¶</a> Table Attributes</h3>
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
<td>data</td>
<td>显示的数据</td>
<td>array</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>height</td>
<td>Table 的高度，默认为自动高度。如果 height 为 number 类型，单位 px；如果 height 为 string 类型，则这个高度会设置为 Table 的 style.height 的值，Table 的高度会受控于外部样式。</td>
<td>string/number</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>max-height</td>
<td>Table 的最大高度。合法的值为数字或者单位为 px 的高度。</td>
<td>string/number</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>stripe</td>
<td>是否为斑马纹 table</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>border</td>
<td>是否带有纵向边框</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>size</td>
<td>Table 的尺寸</td>
<td>string</td>
<td>medium / small / mini</td>
<td>—</td>
</tr>
<tr>
<td>fit</td>
<td>列的宽度是否自撑开</td>
<td>boolean</td>
<td>—</td>
<td>true</td>
</tr>
<tr>
<td>show-header</td>
<td>是否显示表头</td>
<td>boolean</td>
<td>—</td>
<td>true</td>
</tr>
<tr>
<td>highlight-current-row</td>
<td>是否要高亮当前行</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>current-row-key</td>
<td>当前行的 key，只写属性</td>
<td>String,Number</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>row-class-name</td>
<td>行的 className 的回调方法，也可以使用字符串为所有行设置一个固定的 className。</td>
<td>Function({row, rowIndex})/String</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>row-style</td>
<td>行的 style 的回调方法，也可以使用一个固定的 Object 为所有行设置一样的 Style。</td>
<td>Function({row, rowIndex})/Object</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>cell-class-name</td>
<td>单元格的 className 的回调方法，也可以使用字符串为所有单元格设置一个固定的 className。</td>
<td>Function({row, column, rowIndex, columnIndex})/String</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>cell-style</td>
<td>单元格的 style 的回调方法，也可以使用一个固定的 Object 为所有单元格设置一样的 Style。</td>
<td>Function({row, column, rowIndex, columnIndex})/Object</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>header-row-class-name</td>
<td>表头行的 className 的回调方法，也可以使用字符串为所有表头行设置一个固定的 className。</td>
<td>Function({row, rowIndex})/String</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>header-row-style</td>
<td>表头行的 style 的回调方法，也可以使用一个固定的 Object 为所有表头行设置一样的 Style。</td>
<td>Function({row, rowIndex})/Object</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>header-cell-class-name</td>
<td>表头单元格的 className 的回调方法，也可以使用字符串为所有表头单元格设置一个固定的 className。</td>
<td>Function({row, column, rowIndex, columnIndex})/String</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>header-cell-style</td>
<td>表头单元格的 style 的回调方法，也可以使用一个固定的 Object 为所有表头单元格设置一样的 Style。</td>
<td>Function({row, column, rowIndex, columnIndex})/Object</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>row-key</td>
<td>行数据的 Key，用来优化 Table 的渲染；在使用 reserve-selection 功能与显示树形数据时，该属性是必填的。类型为 String 时，支持多层访问：<code>user.info.id</code>，但不支持 <code>user.info[0].id</code>，此种情况请使用 <code>Function</code>。</td>
<td>Function(row)/String</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>empty-text</td>
<td>空数据时显示的文本内容，也可以通过 <code>slot=&quot;empty&quot;</code> 设置</td>
<td>String</td>
<td>—</td>
<td>暂无数据</td>
</tr>
<tr>
<td>default-expand-all</td>
<td>是否默认展开所有行，当 Table 包含展开行存在或者为树形表格时有效</td>
<td>Boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>expand-row-keys</td>
<td>可以通过该属性设置 Table 目前的展开行，需要设置 row-key 属性才能使用，该属性为展开行的 keys 数组。</td>
<td>Array</td>
<td>—</td>
<td></td>
</tr>
<tr>
<td>default-sort</td>
<td>默认的排序列的 prop 和顺序。它的<code>prop</code>属性指定默认的排序的列，<code>order</code>指定默认排序的顺序</td>
<td>Object</td>
<td><code>order</code>: ascending, descending</td>
<td>如果只指定了<code>prop</code>, 没有指定<code>order</code>, 则默认顺序是ascending</td>
</tr>
<tr>
<td>tooltip-effect</td>
<td>tooltip <code>effect</code> 属性</td>
<td>String</td>
<td>dark/light</td>
<td></td>
</tr>
<tr>
<td>show-summary</td>
<td>是否在表尾显示合计行</td>
<td>Boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>sum-text</td>
<td>合计行第一列的文本</td>
<td>String</td>
<td>—</td>
<td>合计</td>
</tr>
<tr>
<td>summary-method</td>
<td>自定义的合计计算方法</td>
<td>Function({ columns, data })</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>span-method</td>
<td>合并行或列的计算方法</td>
<td>Function({ row, column, rowIndex, columnIndex })</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>select-on-indeterminate</td>
<td>在多选表格中，当仅有部分行被选中时，点击表头的多选框时的行为。若为 true，则选中所有行；若为 false，则取消选择所有行</td>
<td>Boolean</td>
<td>—</td>
<td>true</td>
</tr>
<tr>
<td>indent</td>
<td>展示树形数据时，树节点的缩进</td>
<td>Number</td>
<td>—</td>
<td>16</td>
</tr>
<tr>
<td>lazy</td>
<td>是否懒加载子节点数据</td>
<td>Boolean</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>load</td>
<td>加载子节点数据的函数，lazy 为 true 时生效，函数第二个参数包含了节点的层级信息</td>
<td>Function(row, treeNode, resolve)</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>tree-props</td>
<td>渲染嵌套数据的配置选项</td>
<td>Object</td>
<td>—</td>
<td>{ hasChildren: 'hasChildren', children: 'children' }</td>
</tr>
</tbody>
</table>
<h3 id="table-events"><a class="header-anchor" href="#table-events">¶</a> Table Events</h3>
<table>
<thead>
<tr>
<th>事件名</th>
<th>说明</th>
<th>参数</th>
</tr>
</thead>
<tbody>
<tr>
<td>select</td>
<td>当用户手动勾选数据行的 Checkbox 时触发的事件</td>
<td>selection, row</td>
</tr>
<tr>
<td>select-all</td>
<td>当用户手动勾选全选 Checkbox 时触发的事件</td>
<td>selection</td>
</tr>
<tr>
<td>selection-change</td>
<td>当选择项发生变化时会触发该事件</td>
<td>selection</td>
</tr>
<tr>
<td>cell-mouse-enter</td>
<td>当单元格 hover 进入时会触发该事件</td>
<td>row, column, cell, event</td>
</tr>
<tr>
<td>cell-mouse-leave</td>
<td>当单元格 hover 退出时会触发该事件</td>
<td>row, column, cell, event</td>
</tr>
<tr>
<td>cell-click</td>
<td>当某个单元格被点击时会触发该事件</td>
<td>row, column, cell, event</td>
</tr>
<tr>
<td>cell-dblclick</td>
<td>当某个单元格被双击击时会触发该事件</td>
<td>row, column, cell, event</td>
</tr>
<tr>
<td>row-click</td>
<td>当某一行被点击时会触发该事件</td>
<td>row, column, event</td>
</tr>
<tr>
<td>row-contextmenu</td>
<td>当某一行被鼠标右键点击时会触发该事件</td>
<td>row, column, event</td>
</tr>
<tr>
<td>row-dblclick</td>
<td>当某一行被双击时会触发该事件</td>
<td>row, column, event</td>
</tr>
<tr>
<td>header-click</td>
<td>当某一列的表头被点击时会触发该事件</td>
<td>column, event</td>
</tr>
<tr>
<td>header-contextmenu</td>
<td>当某一列的表头被鼠标右键点击时触发该事件</td>
<td>column, event</td>
</tr>
<tr>
<td>sort-change</td>
<td>当表格的排序条件发生变化的时候会触发该事件</td>
<td>{ column, prop, order }</td>
</tr>
<tr>
<td>filter-change</td>
<td>当表格的筛选条件发生变化的时候会触发该事件，参数的值是一个对象，对象的 key 是 column 的 columnKey，对应的 value 为用户选择的筛选条件的数组。</td>
<td>filters</td>
</tr>
<tr>
<td>current-change</td>
<td>当表格的当前行发生变化的时候会触发该事件，如果要高亮当前行，请打开表格的 highlight-current-row 属性</td>
<td>currentRow, oldCurrentRow</td>
</tr>
<tr>
<td>header-dragend</td>
<td>当拖动表头改变了列的宽度的时候会触发该事件</td>
<td>newWidth, oldWidth, column, event</td>
</tr>
<tr>
<td>expand-change</td>
<td>当用户对某一行展开或者关闭的时候会触发该事件（展开行时，回调的第二个参数为 expandedRows；树形表格时第二参数为 expanded）</td>
<td>row, (expandedRows | expanded)</td>
</tr>
</tbody>
</table>
<h3 id="table-methods"><a class="header-anchor" href="#table-methods">¶</a> Table Methods</h3>
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
<td>clearSelection</td>
<td>用于多选表格，清空用户的选择</td>
<td>—</td>
</tr>
<tr>
<td>toggleRowSelection</td>
<td>用于多选表格，切换某一行的选中状态，如果使用了第二个参数，则是设置这一行选中与否（selected 为 true 则选中）</td>
<td>row, selected</td>
</tr>
<tr>
<td>toggleAllSelection</td>
<td>用于多选表格，切换所有行的选中状态</td>
<td>-</td>
</tr>
<tr>
<td>toggleRowExpansion</td>
<td>用于可展开表格与树形表格，切换某一行的展开状态，如果使用了第二个参数，则是设置这一行展开与否（expanded 为 true 则展开）</td>
<td>row, expanded</td>
</tr>
<tr>
<td>setCurrentRow</td>
<td>用于单选表格，设定某一行为选中行，如果调用时不加参数，则会取消目前高亮行的选中状态。</td>
<td>row</td>
</tr>
<tr>
<td>clearSort</td>
<td>用于清空排序条件，数据会恢复成未排序的状态</td>
<td>—</td>
</tr>
<tr>
<td>clearFilter</td>
<td>不传入参数时用于清空所有过滤条件，数据会恢复成未过滤的状态，也可传入由columnKey组成的数组以清除指定列的过滤条件</td>
<td>columnKey</td>
</tr>
<tr>
<td>doLayout</td>
<td>对 Table 进行重新布局。当 Table 或其祖先元素由隐藏切换为显示时，可能需要调用此方法</td>
<td>—</td>
</tr>
<tr>
<td>sort</td>
<td>手动对 Table 进行排序。参数<code>prop</code>属性指定排序列，<code>order</code>指定排序顺序。</td>
<td>prop: string, order: string</td>
</tr>
</tbody>
</table>
<h3 id="table-slot"><a class="header-anchor" href="#table-slot">¶</a> Table Slot</h3>
<table>
<thead>
<tr>
<th>name</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>append</td>
<td>插入至表格最后一行之后的内容，如果需要对表格的内容进行无限滚动操作，可能需要用到这个 slot。若表格有合计行，该 slot 会位于合计行之上。</td>
</tr>
</tbody>
</table>
<h3 id="table-column-attributes"><a class="header-anchor" href="#table-column-attributes">¶</a> Table-column Attributes</h3>
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
<td>对应列的类型。如果设置了 <code>selection</code> 则显示多选框；如果设置了 <code>index</code> 则显示该行的索引（从 1 开始计算）；如果设置了 <code>expand</code> 则显示为一个可展开的按钮</td>
<td>string</td>
<td>selection/index/expand</td>
<td>—</td>
</tr>
<tr>
<td>index</td>
<td>如果设置了 <code>type=index</code>，可以通过传递 <code>index</code> 属性来自定义索引</td>
<td>number, Function(index)</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>column-key</td>
<td>column 的 key，如果需要使用 filter-change 事件，则需要此属性标识是哪个 column 的筛选条件</td>
<td>string</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>label</td>
<td>显示的标题</td>
<td>string</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>prop</td>
<td>对应列内容的字段名，也可以使用 property 属性</td>
<td>string</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>width</td>
<td>对应列的宽度</td>
<td>string</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>min-width</td>
<td>对应列的最小宽度，与 width 的区别是 width 是固定的，min-width 会把剩余宽度按比例分配给设置了 min-width 的列</td>
<td>string</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>fixed</td>
<td>列是否固定在左侧或者右侧，true 表示固定在左侧</td>
<td>string, boolean</td>
<td>true, left, right</td>
<td>—</td>
</tr>
<tr>
<td>render-header</td>
<td>列标题 Label 区域渲染使用的 Function</td>
<td>Function(h, { column, $index })</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>sortable</td>
<td>对应列是否可以排序，如果设置为 'custom'，则代表用户希望远程排序，需要监听 Table 的 sort-change 事件</td>
<td>boolean, string</td>
<td>true, false, 'custom'</td>
<td>false</td>
</tr>
<tr>
<td>sort-method</td>
<td>对数据进行排序的时候使用的方法，仅当 sortable 设置为 true 的时候有效，需返回一个数字，和 Array.sort 表现一致</td>
<td>Function(a, b)</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>sort-by</td>
<td>指定数据按照哪个属性进行排序，仅当 sortable 设置为 true 且没有设置 sort-method 的时候有效。如果 sort-by 为数组，则先按照第 1 个属性排序，如果第 1 个相等，再按照第 2 个排序，以此类推</td>
<td>String/Array/Function(row, index)</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>sort-orders</td>
<td>数据在排序时所使用排序策略的轮转顺序，仅当 sortable 为 true 时有效。需传入一个数组，随着用户点击表头，该列依次按照数组中元素的顺序进行排序</td>
<td>array</td>
<td>数组中的元素需为以下三者之一：<code>ascending</code> 表示升序，<code>descending</code> 表示降序，<code>null</code> 表示还原为原始顺序</td>
<td>['ascending', 'descending', null]</td>
</tr>
<tr>
<td>resizable</td>
<td>对应列是否可以通过拖动改变宽度（需要在 el-table 上设置 border 属性为真）</td>
<td>boolean</td>
<td>—</td>
<td>true</td>
</tr>
<tr>
<td>formatter</td>
<td>用来格式化内容</td>
<td>Function(row, column, cellValue, index)</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>show-overflow-tooltip</td>
<td>当内容过长被隐藏时显示 tooltip</td>
<td>Boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>align</td>
<td>对齐方式</td>
<td>String</td>
<td>left/center/right</td>
<td>left</td>
</tr>
<tr>
<td>header-align</td>
<td>表头对齐方式，若不设置该项，则使用表格的对齐方式</td>
<td>String</td>
<td>left/center/right</td>
<td>—</td>
</tr>
<tr>
<td>class-name</td>
<td>列的 className</td>
<td>string</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>label-class-name</td>
<td>当前列标题的自定义类名</td>
<td>string</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>selectable</td>
<td>仅对 type=selection 的列有效，类型为 Function，Function 的返回值用来决定这一行的 CheckBox 是否可以勾选</td>
<td>Function(row, index)</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>reserve-selection</td>
<td>仅对 type=selection 的列有效，类型为 Boolean，为 true 则会在数据更新之后保留之前选中的数据（需指定 <code>row-key</code>）</td>
<td>Boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>filters</td>
<td>数据过滤的选项，数组格式，数组中的元素需要有 text 和 value 属性。</td>
<td>Array[{ text, value }]</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>filter-placement</td>
<td>过滤弹出框的定位</td>
<td>String</td>
<td>与 Tooltip 的 <code>placement</code> 属性相同</td>
<td>—</td>
</tr>
<tr>
<td>filter-multiple</td>
<td>数据过滤的选项是否多选</td>
<td>Boolean</td>
<td>—</td>
<td>true</td>
</tr>
<tr>
<td>filter-method</td>
<td>数据过滤使用的方法，如果是多选的筛选项，对每一条数据会执行多次，任意一次返回 true 就会显示。</td>
<td>Function(value, row, column)</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>filtered-value</td>
<td>选中的数据过滤项，如果需要自定义表头过滤的渲染方式，可能会需要此属性。</td>
<td>Array</td>
<td>—</td>
<td>—</td>
</tr>
</tbody>
</table>
<h3 id="table-column-scoped-slot"><a class="header-anchor" href="#table-column-scoped-slot">¶</a> Table-column Scoped Slot</h3>
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
<td>自定义列的内容，参数为 { row, column, $index }</td>
</tr>
<tr>
<td>header</td>
<td>自定义表头的内容. 参数为 { column, $index }</td>
</tr>
</tbody>
</table>
