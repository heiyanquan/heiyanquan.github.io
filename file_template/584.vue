<h2 id="form-biao-dan"><a class="header-anchor" href="#form-biao-dan">¶</a> Form 表单</h2>
<p>由输入框、选择器、单选框、多选框等控件组成，用以收集、校验、提交数据</p>
<h3 id="dian-xing-biao-dan"><a class="header-anchor" href="#dian-xing-biao-dan">¶</a> 典型表单</h3>
<p>包括各种表单项，比如输入框、选择器、开关、单选框、多选框等。</p>
<demo-block>
        <div><p>在 Form 组件中，每一个表单域由一个 Form-Item 组件构成，表单域中可以放置各种类型的表单控件，包括 Input、Select、Checkbox、Radio、Switch、DatePicker、TimePicker</p>
</div>
        <template slot="source"><element-demo0 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;el-form ref=&quot;form&quot; :model=&quot;form&quot; label-width=&quot;80px&quot;&gt;
  &lt;el-form-item label=&quot;活动名称&quot;&gt;
    &lt;el-input v-model=&quot;form.name&quot;&gt;&lt;/el-input&gt;
  &lt;/el-form-item&gt;
  &lt;el-form-item label=&quot;活动区域&quot;&gt;
    &lt;el-select v-model=&quot;form.region&quot; placeholder=&quot;请选择活动区域&quot;&gt;
      &lt;el-option label=&quot;区域一&quot; value=&quot;shanghai&quot;&gt;&lt;/el-option&gt;
      &lt;el-option label=&quot;区域二&quot; value=&quot;beijing&quot;&gt;&lt;/el-option&gt;
    &lt;/el-select&gt;
  &lt;/el-form-item&gt;
  &lt;el-form-item label=&quot;活动时间&quot;&gt;
    &lt;el-col :span=&quot;11&quot;&gt;
      &lt;el-date-picker type=&quot;date&quot; placeholder=&quot;选择日期&quot; v-model=&quot;form.date1&quot; style=&quot;width: 100%;&quot;&gt;&lt;/el-date-picker&gt;
    &lt;/el-col&gt;
    &lt;el-col class=&quot;line&quot; :span=&quot;2&quot;&gt;-&lt;/el-col&gt;
    &lt;el-col :span=&quot;11&quot;&gt;
      &lt;el-time-picker placeholder=&quot;选择时间&quot; v-model=&quot;form.date2&quot; style=&quot;width: 100%;&quot;&gt;&lt;/el-time-picker&gt;
    &lt;/el-col&gt;
  &lt;/el-form-item&gt;
  &lt;el-form-item label=&quot;即时配送&quot;&gt;
    &lt;el-switch v-model=&quot;form.delivery&quot;&gt;&lt;/el-switch&gt;
  &lt;/el-form-item&gt;
  &lt;el-form-item label=&quot;活动性质&quot;&gt;
    &lt;el-checkbox-group v-model=&quot;form.type&quot;&gt;
      &lt;el-checkbox label=&quot;美食/餐厅线上活动&quot; name=&quot;type&quot;&gt;&lt;/el-checkbox&gt;
      &lt;el-checkbox label=&quot;地推活动&quot; name=&quot;type&quot;&gt;&lt;/el-checkbox&gt;
      &lt;el-checkbox label=&quot;线下主题活动&quot; name=&quot;type&quot;&gt;&lt;/el-checkbox&gt;
      &lt;el-checkbox label=&quot;单纯品牌曝光&quot; name=&quot;type&quot;&gt;&lt;/el-checkbox&gt;
    &lt;/el-checkbox-group&gt;
  &lt;/el-form-item&gt;
  &lt;el-form-item label=&quot;特殊资源&quot;&gt;
    &lt;el-radio-group v-model=&quot;form.resource&quot;&gt;
      &lt;el-radio label=&quot;线上品牌商赞助&quot;&gt;&lt;/el-radio&gt;
      &lt;el-radio label=&quot;线下场地免费&quot;&gt;&lt;/el-radio&gt;
    &lt;/el-radio-group&gt;
  &lt;/el-form-item&gt;
  &lt;el-form-item label=&quot;活动形式&quot;&gt;
    &lt;el-input type=&quot;textarea&quot; v-model=&quot;form.desc&quot;&gt;&lt;/el-input&gt;
  &lt;/el-form-item&gt;
  &lt;el-form-item&gt;
    &lt;el-button type=&quot;primary&quot; @click=&quot;onSubmit&quot;&gt;立即创建&lt;/el-button&gt;
    &lt;el-button&gt;取消&lt;/el-button&gt;
  &lt;/el-form-item&gt;
&lt;/el-form&gt;
&lt;script&gt;
  export default {
    data() {
      return {
        form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        }
      }
    },
    methods: {
      onSubmit() {
        console.log('submit!');
      }
    }
  }
&lt;/script&gt;
</code></pre></template></demo-block><div class="tip">
<p>W3C 标准中有如下<a href="https://www.w3.org/MarkUp/html-spec/html-spec_8.html#SEC8.2">规定</a>：</p>
<blockquote>
<p><i>When there is only one single-line text input field in a form, the user agent should accept Enter in that field as a request to submit the form.</i></p>
</blockquote>
<p>即：当一个 form 元素中只有一个输入框时，在该输入框中按下回车应提交该表单。如果希望阻止这一默认行为，可以在 <code>&lt;el-form&gt;</code> 标签上添加 <code>@submit.native.prevent</code>。</p>
</div>
<h3 id="xing-nei-biao-dan"><a class="header-anchor" href="#xing-nei-biao-dan">¶</a> 行内表单</h3>
<p>当垂直方向空间受限且表单较简单时，可以在一行内放置表单。</p>
<demo-block>
        <div><p>设置 <code>inline</code> 属性可以让表单域变为行内的表单域</p>
</div>
        <template slot="source"><element-demo1 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;el-form :inline=&quot;true&quot; :model=&quot;formInline&quot; class=&quot;demo-form-inline&quot;&gt;
  &lt;el-form-item label=&quot;审批人&quot;&gt;
    &lt;el-input v-model=&quot;formInline.user&quot; placeholder=&quot;审批人&quot;&gt;&lt;/el-input&gt;
  &lt;/el-form-item&gt;
  &lt;el-form-item label=&quot;活动区域&quot;&gt;
    &lt;el-select v-model=&quot;formInline.region&quot; placeholder=&quot;活动区域&quot;&gt;
      &lt;el-option label=&quot;区域一&quot; value=&quot;shanghai&quot;&gt;&lt;/el-option&gt;
      &lt;el-option label=&quot;区域二&quot; value=&quot;beijing&quot;&gt;&lt;/el-option&gt;
    &lt;/el-select&gt;
  &lt;/el-form-item&gt;
  &lt;el-form-item&gt;
    &lt;el-button type=&quot;primary&quot; @click=&quot;onSubmit&quot;&gt;查询&lt;/el-button&gt;
  &lt;/el-form-item&gt;
&lt;/el-form&gt;
&lt;script&gt;
  export default {
    data() {
      return {
        formInline: {
          user: '',
          region: ''
        }
      }
    },
    methods: {
      onSubmit() {
        console.log('submit!');
      }
    }
  }
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="dui-qi-fang-shi"><a class="header-anchor" href="#dui-qi-fang-shi">¶</a> 对齐方式</h3>
<p>根据具体目标和制约因素，选择最佳的标签对齐方式。</p>
<demo-block>
        <div><p>通过设置 <code>label-position</code> 属性可以改变表单域标签的位置，可选值为 <code>top</code>、<code>left</code>，当设为 <code>top</code> 时标签会置于表单域的顶部</p>
</div>
        <template slot="source"><element-demo2 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;el-radio-group v-model=&quot;labelPosition&quot; size=&quot;small&quot;&gt;
  &lt;el-radio-button label=&quot;left&quot;&gt;左对齐&lt;/el-radio-button&gt;
  &lt;el-radio-button label=&quot;right&quot;&gt;右对齐&lt;/el-radio-button&gt;
  &lt;el-radio-button label=&quot;top&quot;&gt;顶部对齐&lt;/el-radio-button&gt;
&lt;/el-radio-group&gt;
&lt;div style=&quot;margin: 20px;&quot;&gt;&lt;/div&gt;
&lt;el-form :label-position=&quot;labelPosition&quot; label-width=&quot;80px&quot; :model=&quot;formLabelAlign&quot;&gt;
  &lt;el-form-item label=&quot;名称&quot;&gt;
    &lt;el-input v-model=&quot;formLabelAlign.name&quot;&gt;&lt;/el-input&gt;
  &lt;/el-form-item&gt;
  &lt;el-form-item label=&quot;活动区域&quot;&gt;
    &lt;el-input v-model=&quot;formLabelAlign.region&quot;&gt;&lt;/el-input&gt;
  &lt;/el-form-item&gt;
  &lt;el-form-item label=&quot;活动形式&quot;&gt;
    &lt;el-input v-model=&quot;formLabelAlign.type&quot;&gt;&lt;/el-input&gt;
  &lt;/el-form-item&gt;
&lt;/el-form&gt;
&lt;script&gt;
  export default {
    data() {
      return {
        labelPosition: 'right',
        formLabelAlign: {
          name: '',
          region: '',
          type: ''
        }
      };
    }
  }
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="biao-dan-yan-zheng"><a class="header-anchor" href="#biao-dan-yan-zheng">¶</a> 表单验证</h3>
<p>在防止用户犯错的前提下，尽可能让用户更早地发现并纠正错误。</p>
<demo-block>
        <div><p>Form 组件提供了表单验证的功能，只需要通过 <code>rules</code> 属性传入约定的验证规则，并将 Form-Item 的 <code>prop</code> 属性设置为需校验的字段名即可。校验规则参见 <a href="https://github.com/yiminghe/async-validator">async-validator</a></p>
</div>
        <template slot="source"><element-demo3 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;el-form :model=&quot;ruleForm&quot; :rules=&quot;rules&quot; ref=&quot;ruleForm&quot; label-width=&quot;100px&quot; class=&quot;demo-ruleForm&quot;&gt;
  &lt;el-form-item label=&quot;活动名称&quot; prop=&quot;name&quot;&gt;
    &lt;el-input v-model=&quot;ruleForm.name&quot;&gt;&lt;/el-input&gt;
  &lt;/el-form-item&gt;
  &lt;el-form-item label=&quot;活动区域&quot; prop=&quot;region&quot;&gt;
    &lt;el-select v-model=&quot;ruleForm.region&quot; placeholder=&quot;请选择活动区域&quot;&gt;
      &lt;el-option label=&quot;区域一&quot; value=&quot;shanghai&quot;&gt;&lt;/el-option&gt;
      &lt;el-option label=&quot;区域二&quot; value=&quot;beijing&quot;&gt;&lt;/el-option&gt;
    &lt;/el-select&gt;
  &lt;/el-form-item&gt;
  &lt;el-form-item label=&quot;活动时间&quot; required&gt;
    &lt;el-col :span=&quot;11&quot;&gt;
      &lt;el-form-item prop=&quot;date1&quot;&gt;
        &lt;el-date-picker type=&quot;date&quot; placeholder=&quot;选择日期&quot; v-model=&quot;ruleForm.date1&quot; style=&quot;width: 100%;&quot;&gt;&lt;/el-date-picker&gt;
      &lt;/el-form-item&gt;
    &lt;/el-col&gt;
    &lt;el-col class=&quot;line&quot; :span=&quot;2&quot;&gt;-&lt;/el-col&gt;
    &lt;el-col :span=&quot;11&quot;&gt;
      &lt;el-form-item prop=&quot;date2&quot;&gt;
        &lt;el-time-picker placeholder=&quot;选择时间&quot; v-model=&quot;ruleForm.date2&quot; style=&quot;width: 100%;&quot;&gt;&lt;/el-time-picker&gt;
      &lt;/el-form-item&gt;
    &lt;/el-col&gt;
  &lt;/el-form-item&gt;
  &lt;el-form-item label=&quot;即时配送&quot; prop=&quot;delivery&quot;&gt;
    &lt;el-switch v-model=&quot;ruleForm.delivery&quot;&gt;&lt;/el-switch&gt;
  &lt;/el-form-item&gt;
  &lt;el-form-item label=&quot;活动性质&quot; prop=&quot;type&quot;&gt;
    &lt;el-checkbox-group v-model=&quot;ruleForm.type&quot;&gt;
      &lt;el-checkbox label=&quot;美食/餐厅线上活动&quot; name=&quot;type&quot;&gt;&lt;/el-checkbox&gt;
      &lt;el-checkbox label=&quot;地推活动&quot; name=&quot;type&quot;&gt;&lt;/el-checkbox&gt;
      &lt;el-checkbox label=&quot;线下主题活动&quot; name=&quot;type&quot;&gt;&lt;/el-checkbox&gt;
      &lt;el-checkbox label=&quot;单纯品牌曝光&quot; name=&quot;type&quot;&gt;&lt;/el-checkbox&gt;
    &lt;/el-checkbox-group&gt;
  &lt;/el-form-item&gt;
  &lt;el-form-item label=&quot;特殊资源&quot; prop=&quot;resource&quot;&gt;
    &lt;el-radio-group v-model=&quot;ruleForm.resource&quot;&gt;
      &lt;el-radio label=&quot;线上品牌商赞助&quot;&gt;&lt;/el-radio&gt;
      &lt;el-radio label=&quot;线下场地免费&quot;&gt;&lt;/el-radio&gt;
    &lt;/el-radio-group&gt;
  &lt;/el-form-item&gt;
  &lt;el-form-item label=&quot;活动形式&quot; prop=&quot;desc&quot;&gt;
    &lt;el-input type=&quot;textarea&quot; v-model=&quot;ruleForm.desc&quot;&gt;&lt;/el-input&gt;
  &lt;/el-form-item&gt;
  &lt;el-form-item&gt;
    &lt;el-button type=&quot;primary&quot; @click=&quot;submitForm('ruleForm')&quot;&gt;立即创建&lt;/el-button&gt;
    &lt;el-button @click=&quot;resetForm('ruleForm')&quot;&gt;重置&lt;/el-button&gt;
  &lt;/el-form-item&gt;
&lt;/el-form&gt;
&lt;script&gt;
  export default {
    data() {
      return {
        ruleForm: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },
        rules: {
          name: [
            { required: true, message: '请输入活动名称', trigger: 'blur' },
            { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          ],
          region: [
            { required: true, message: '请选择活动区域', trigger: 'change' }
          ],
          date1: [
            { type: 'date', required: true, message: '请选择日期', trigger: 'change' }
          ],
          date2: [
            { type: 'date', required: true, message: '请选择时间', trigger: 'change' }
          ],
          type: [
            { type: 'array', required: true, message: '请至少选择一个活动性质', trigger: 'change' }
          ],
          resource: [
            { required: true, message: '请选择活动资源', trigger: 'change' }
          ],
          desc: [
            { required: true, message: '请填写活动形式', trigger: 'blur' }
          ]
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) =&gt; {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  }
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="zi-ding-yi-xiao-yan-gui-ze"><a class="header-anchor" href="#zi-ding-yi-xiao-yan-gui-ze">¶</a> 自定义校验规则</h3>
<p>这个例子中展示了如何使用自定义验证规则来完成密码的二次验证。</p>
<demo-block>
        <div><p>本例还使用<code>status-icon</code>属性为输入框添加了表示校验结果的反馈图标。</p>
</div>
        <template slot="source"><element-demo4 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;el-form :model=&quot;ruleForm&quot; status-icon :rules=&quot;rules&quot; ref=&quot;ruleForm&quot; label-width=&quot;100px&quot; class=&quot;demo-ruleForm&quot;&gt;
  &lt;el-form-item label=&quot;密码&quot; prop=&quot;pass&quot;&gt;
    &lt;el-input type=&quot;password&quot; v-model=&quot;ruleForm.pass&quot; autocomplete=&quot;off&quot;&gt;&lt;/el-input&gt;
  &lt;/el-form-item&gt;
  &lt;el-form-item label=&quot;确认密码&quot; prop=&quot;checkPass&quot;&gt;
    &lt;el-input type=&quot;password&quot; v-model=&quot;ruleForm.checkPass&quot; autocomplete=&quot;off&quot;&gt;&lt;/el-input&gt;
  &lt;/el-form-item&gt;
  &lt;el-form-item label=&quot;年龄&quot; prop=&quot;age&quot;&gt;
    &lt;el-input v-model.number=&quot;ruleForm.age&quot;&gt;&lt;/el-input&gt;
  &lt;/el-form-item&gt;
  &lt;el-form-item&gt;
    &lt;el-button type=&quot;primary&quot; @click=&quot;submitForm('ruleForm')&quot;&gt;提交&lt;/el-button&gt;
    &lt;el-button @click=&quot;resetForm('ruleForm')&quot;&gt;重置&lt;/el-button&gt;
  &lt;/el-form-item&gt;
&lt;/el-form&gt;
&lt;script&gt;
  export default {
    data() {
      var checkAge = (rule, value, callback) =&gt; {
        if (!value) {
          return callback(new Error('年龄不能为空'));
        }
        setTimeout(() =&gt; {
          if (!Number.isInteger(value)) {
            callback(new Error('请输入数字值'));
          } else {
            if (value &lt; 18) {
              callback(new Error('必须年满18岁'));
            } else {
              callback();
            }
          }
        }, 1000);
      };
      var validatePass = (rule, value, callback) =&gt; {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          if (this.ruleForm.checkPass !== '') {
            this.$refs.ruleForm.validateField('checkPass');
          }
          callback();
        }
      };
      var validatePass2 = (rule, value, callback) =&gt; {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.ruleForm.pass) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
      return {
        ruleForm: {
          pass: '',
          checkPass: '',
          age: ''
        },
        rules: {
          pass: [
            { validator: validatePass, trigger: 'blur' }
          ],
          checkPass: [
            { validator: validatePass2, trigger: 'blur' }
          ],
          age: [
            { validator: checkAge, trigger: 'blur' }
          ]
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) =&gt; {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  }
&lt;/script&gt;
</code></pre></template></demo-block><div class="tip">
<p>自定义校验 callback 必须被调用。 更多高级用法可参考 <a href="https://github.com/yiminghe/async-validator">async-validator</a>。</p>
</div>
<h3 id="dong-tai-zeng-jian-biao-dan-xiang"><a class="header-anchor" href="#dong-tai-zeng-jian-biao-dan-xiang">¶</a> 动态增减表单项</h3>
<demo-block>
        <div><p>除了在 Form 组件上一次性传递所有的验证规则外还可以在单个的表单域上传递属性的验证规则</p>
</div>
        <template slot="source"><element-demo5 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;el-form :model=&quot;dynamicValidateForm&quot; ref=&quot;dynamicValidateForm&quot; label-width=&quot;100px&quot; class=&quot;demo-dynamic&quot;&gt;
  &lt;el-form-item
    prop=&quot;email&quot;
    label=&quot;邮箱&quot;
    :rules=&quot;[
      { required: true, message: '请输入邮箱地址', trigger: 'blur' },
      { type: 'email', message: '请输入正确的邮箱地址', trigger: ['blur', 'change'] }
    ]&quot;
  &gt;
    &lt;el-input v-model=&quot;dynamicValidateForm.email&quot;&gt;&lt;/el-input&gt;
  &lt;/el-form-item&gt;
  &lt;el-form-item
    v-for=&quot;(domain, index) in dynamicValidateForm.domains&quot;
    :label=&quot;'域名' + index&quot;
    :key=&quot;domain.key&quot;
    :prop=&quot;'domains.' + index + '.value'&quot;
    :rules=&quot;{
      required: true, message: '域名不能为空', trigger: 'blur'
    }&quot;
  &gt;
    &lt;el-input v-model=&quot;domain.value&quot;&gt;&lt;/el-input&gt;&lt;el-button @click.prevent=&quot;removeDomain(domain)&quot;&gt;删除&lt;/el-button&gt;
  &lt;/el-form-item&gt;
  &lt;el-form-item&gt;
    &lt;el-button type=&quot;primary&quot; @click=&quot;submitForm('dynamicValidateForm')&quot;&gt;提交&lt;/el-button&gt;
    &lt;el-button @click=&quot;addDomain&quot;&gt;新增域名&lt;/el-button&gt;
    &lt;el-button @click=&quot;resetForm('dynamicValidateForm')&quot;&gt;重置&lt;/el-button&gt;
  &lt;/el-form-item&gt;
&lt;/el-form&gt;
&lt;script&gt;
  export default {
    data() {
      return {
        dynamicValidateForm: {
          domains: [{
            value: ''
          }],
          email: ''
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) =&gt; {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },
      removeDomain(item) {
        var index = this.dynamicValidateForm.domains.indexOf(item)
        if (index !== -1) {
          this.dynamicValidateForm.domains.splice(index, 1)
        }
      },
      addDomain() {
        this.dynamicValidateForm.domains.push({
          value: '',
          key: Date.now()
        });
      }
    }
  }
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="shu-zi-lei-xing-yan-zheng"><a class="header-anchor" href="#shu-zi-lei-xing-yan-zheng">¶</a> 数字类型验证</h3>
<demo-block>
        <div><p>数字类型的验证需要在 <code>v-model</code> 处加上 <code>.number</code> 的修饰符，这是 <code>Vue</code> 自身提供的用于将绑定值转化为 <code>number</code> 类型的修饰符。</p>
</div>
        <template slot="source"><element-demo6 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;el-form :model=&quot;numberValidateForm&quot; ref=&quot;numberValidateForm&quot; label-width=&quot;100px&quot; class=&quot;demo-ruleForm&quot;&gt;
  &lt;el-form-item
    label=&quot;年龄&quot;
    prop=&quot;age&quot;
    :rules=&quot;[
      { required: true, message: '年龄不能为空'},
      { type: 'number', message: '年龄必须为数字值'}
    ]&quot;
  &gt;
    &lt;el-input type=&quot;age&quot; v-model.number=&quot;numberValidateForm.age&quot; autocomplete=&quot;off&quot;&gt;&lt;/el-input&gt;
  &lt;/el-form-item&gt;
  &lt;el-form-item&gt;
    &lt;el-button type=&quot;primary&quot; @click=&quot;submitForm('numberValidateForm')&quot;&gt;提交&lt;/el-button&gt;
    &lt;el-button @click=&quot;resetForm('numberValidateForm')&quot;&gt;重置&lt;/el-button&gt;
  &lt;/el-form-item&gt;
&lt;/el-form&gt;
&lt;script&gt;
  export default {
    data() {
      return {
        numberValidateForm: {
          age: ''
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) =&gt; {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  }
&lt;/script&gt;
</code></pre></template></demo-block><div class="tip">
<p>嵌套在 <code>el-form-item</code> 中的 <code>el-form-item</code> 标签宽度默认为零，不会继承 <code>el-form</code> 的 <code>label-width</code>。如果需要可以为其单独设置 <code>label-width</code> 属性。</p>
</div>
<h3 id="biao-dan-nei-zu-jian-chi-cun-kong-zhi"><a class="header-anchor" href="#biao-dan-nei-zu-jian-chi-cun-kong-zhi">¶</a> 表单内组件尺寸控制</h3>
<p>通过设置 Form 上的 <code>size</code> 属性可以使该表单内所有可调节大小的组件继承该尺寸。Form-Item 也具有该属性。</p>
<demo-block>
        <div><p>如果希望某个表单项或某个表单组件的尺寸不同于 Form 上的<code>size</code>属性，直接为这个表单项或表单组件设置自己的<code>size</code>即可。</p>
</div>
        <template slot="source"><element-demo7 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;el-form ref=&quot;form&quot; :model=&quot;sizeForm&quot; label-width=&quot;80px&quot; size=&quot;mini&quot;&gt;
  &lt;el-form-item label=&quot;活动名称&quot;&gt;
    &lt;el-input v-model=&quot;sizeForm.name&quot;&gt;&lt;/el-input&gt;
  &lt;/el-form-item&gt;
  &lt;el-form-item label=&quot;活动区域&quot;&gt;
    &lt;el-select v-model=&quot;sizeForm.region&quot; placeholder=&quot;请选择活动区域&quot;&gt;
      &lt;el-option label=&quot;区域一&quot; value=&quot;shanghai&quot;&gt;&lt;/el-option&gt;
      &lt;el-option label=&quot;区域二&quot; value=&quot;beijing&quot;&gt;&lt;/el-option&gt;
    &lt;/el-select&gt;
  &lt;/el-form-item&gt;
  &lt;el-form-item label=&quot;活动时间&quot;&gt;
    &lt;el-col :span=&quot;11&quot;&gt;
      &lt;el-date-picker type=&quot;date&quot; placeholder=&quot;选择日期&quot; v-model=&quot;sizeForm.date1&quot; style=&quot;width: 100%;&quot;&gt;&lt;/el-date-picker&gt;
    &lt;/el-col&gt;
    &lt;el-col class=&quot;line&quot; :span=&quot;2&quot;&gt;-&lt;/el-col&gt;
    &lt;el-col :span=&quot;11&quot;&gt;
      &lt;el-time-picker placeholder=&quot;选择时间&quot; v-model=&quot;sizeForm.date2&quot; style=&quot;width: 100%;&quot;&gt;&lt;/el-time-picker&gt;
    &lt;/el-col&gt;
  &lt;/el-form-item&gt;
  &lt;el-form-item label=&quot;活动性质&quot;&gt;
    &lt;el-checkbox-group v-model=&quot;sizeForm.type&quot;&gt;
      &lt;el-checkbox-button label=&quot;美食/餐厅线上活动&quot; name=&quot;type&quot;&gt;&lt;/el-checkbox-button&gt;
      &lt;el-checkbox-button label=&quot;地推活动&quot; name=&quot;type&quot;&gt;&lt;/el-checkbox-button&gt;
      &lt;el-checkbox-button label=&quot;线下主题活动&quot; name=&quot;type&quot;&gt;&lt;/el-checkbox-button&gt;
    &lt;/el-checkbox-group&gt;
  &lt;/el-form-item&gt;
  &lt;el-form-item label=&quot;特殊资源&quot;&gt;
    &lt;el-radio-group v-model=&quot;sizeForm.resource&quot; size=&quot;medium&quot;&gt;
      &lt;el-radio border label=&quot;线上品牌商赞助&quot;&gt;&lt;/el-radio&gt;
      &lt;el-radio border label=&quot;线下场地免费&quot;&gt;&lt;/el-radio&gt;
    &lt;/el-radio-group&gt;
  &lt;/el-form-item&gt;
  &lt;el-form-item size=&quot;large&quot;&gt;
    &lt;el-button type=&quot;primary&quot; @click=&quot;onSubmit&quot;&gt;立即创建&lt;/el-button&gt;
    &lt;el-button&gt;取消&lt;/el-button&gt;
  &lt;/el-form-item&gt;
&lt;/el-form&gt;

&lt;script&gt;
  export default {
    data() {
      return {
        sizeForm: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        }
      };
    },
    methods: {
      onSubmit() {
        console.log('submit!');
      }
    }
  };
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="form-attributes"><a class="header-anchor" href="#form-attributes">¶</a> Form Attributes</h3>
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
<td>model</td>
<td>表单数据对象</td>
<td>object</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>rules</td>
<td>表单验证规则</td>
<td>object</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>inline</td>
<td>行内表单模式</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>label-position</td>
<td>表单域标签的位置，如果值为 left 或者 right 时，则需要设置 <code>label-width</code></td>
<td>string</td>
<td>right/left/top</td>
<td>right</td>
</tr>
<tr>
<td>label-width</td>
<td>表单域标签的宽度，例如 '50px'。作为 Form 直接子元素的 form-item 会继承该值。支持 <code>auto</code>。</td>
<td>string</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>label-suffix</td>
<td>表单域标签的后缀</td>
<td>string</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>hide-required-asterisk</td>
<td>是否显示必填字段的标签旁边的红色星号</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>show-message</td>
<td>是否显示校验错误信息</td>
<td>boolean</td>
<td>—</td>
<td>true</td>
</tr>
<tr>
<td>inline-message</td>
<td>是否以行内形式展示校验信息</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>status-icon</td>
<td>是否在输入框中显示校验结果反馈图标</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>validate-on-rule-change</td>
<td>是否在 <code>rules</code> 属性改变后立即触发一次验证</td>
<td>boolean</td>
<td>—</td>
<td>true</td>
</tr>
<tr>
<td>size</td>
<td>用于控制该表单内组件的尺寸</td>
<td>string</td>
<td>medium / small / mini</td>
<td>—</td>
</tr>
<tr>
<td>disabled</td>
<td>是否禁用该表单内的所有组件。若设置为 true，则表单内组件上的 disabled 属性不再生效</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
</tbody>
</table>
<h3 id="form-methods"><a class="header-anchor" href="#form-methods">¶</a> Form Methods</h3>
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
<td>validate</td>
<td>对整个表单进行校验的方法，参数为一个回调函数。该回调函数会在校验结束后被调用，并传入两个参数：是否校验成功和未通过校验的字段。若不传入回调函数，则会返回一个 promise</td>
<td>Function(callback: Function(boolean, object))</td>
</tr>
<tr>
<td>validateField</td>
<td>对部分表单字段进行校验的方法</td>
<td>Function(props: array | string, callback: Function(errorMessage: string))</td>
</tr>
<tr>
<td>resetFields</td>
<td>对整个表单进行重置，将所有字段值重置为初始值并移除校验结果</td>
<td>—</td>
</tr>
<tr>
<td>clearValidate</td>
<td>移除表单项的校验结果。传入待移除的表单项的 prop 属性或者 prop 组成的数组，如不传则移除整个表单的校验结果</td>
<td>Function(props: array | string)</td>
</tr>
</tbody>
</table>
<h3 id="form-events"><a class="header-anchor" href="#form-events">¶</a> Form Events</h3>
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
<td>validate</td>
<td>任一表单项被校验后触发</td>
<td>被校验的表单项 prop 值，校验是否通过，错误消息（如果存在）</td>
</tr>
</tbody>
</table>
<h3 id="form-item-attributes"><a class="header-anchor" href="#form-item-attributes">¶</a> Form-Item Attributes</h3>
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
<td>prop</td>
<td>表单域 model 字段，在使用 validate、resetFields 方法的情况下，该属性是必填的</td>
<td>string</td>
<td>传入 Form 组件的 <code>model</code> 中的字段</td>
<td>—</td>
</tr>
<tr>
<td>label</td>
<td>标签文本</td>
<td>string</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>label-width</td>
<td>表单域标签的的宽度，例如 '50px'。支持 <code>auto</code>。</td>
<td>string</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>required</td>
<td>是否必填，如不设置，则会根据校验规则自动生成</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>rules</td>
<td>表单验证规则</td>
<td>object</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>error</td>
<td>表单域验证错误信息, 设置该值会使表单验证状态变为<code>error</code>，并显示该错误信息</td>
<td>string</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>show-message</td>
<td>是否显示校验错误信息</td>
<td>boolean</td>
<td>—</td>
<td>true</td>
</tr>
<tr>
<td>inline-message</td>
<td>以行内形式展示校验信息</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>size</td>
<td>用于控制该表单域下组件的尺寸</td>
<td>string</td>
<td>medium / small / mini</td>
<td>-</td>
</tr>
</tbody>
</table>
<h3 id="form-item-slot"><a class="header-anchor" href="#form-item-slot">¶</a> Form-Item Slot</h3>
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
<td>Form Item 的内容</td>
</tr>
<tr>
<td>label</td>
<td>标签文本的内容</td>
</tr>
</tbody>
</table>
<h3 id="form-item-scoped-slot"><a class="header-anchor" href="#form-item-scoped-slot">¶</a> Form-Item Scoped Slot</h3>
<table>
<thead>
<tr>
<th>name</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>error</td>
<td>自定义表单校验信息的显示方式，参数为 { error }</td>
</tr>
</tbody>
</table>
<h3 id="form-item-methods"><a class="header-anchor" href="#form-item-methods">¶</a> Form-Item Methods</h3>
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
<td>resetField</td>
<td>对该表单项进行重置，将其值重置为初始值并移除校验结果</td>
<td>-</td>
</tr>
<tr>
<td>clearValidate</td>
<td>移除该表单项的校验结果</td>
<td>-</td>
</tr>
</tbody>
</table>
