<h2 id="form"><a class="header-anchor" href="#form">¶</a> Form</h2>
<p>Form consists of <code>input</code>, <code>radio</code>, <code>select</code>, <code>checkbox</code> and so on. With form, you can collect, verify and submit data.</p>
<h3 id="basic-form"><a class="header-anchor" href="#basic-form">¶</a> Basic form</h3>
<p>It includes all kinds of input items, such as <code>input</code>, <code>select</code>, <code>radio</code> and <code>checkbox</code>.</p>
<demo-block>
        <div><p>In each <code>form</code> component, you need a <code>form-item</code> field to be the container of your input item.</p>
</div>
        <template slot="source"><element-demo0 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;el-form ref=&quot;form&quot; :model=&quot;form&quot; label-width=&quot;120px&quot;&gt;
  &lt;el-form-item label=&quot;Activity name&quot;&gt;
    &lt;el-input v-model=&quot;form.name&quot;&gt;&lt;/el-input&gt;
  &lt;/el-form-item&gt;
  &lt;el-form-item label=&quot;Activity zone&quot;&gt;
    &lt;el-select v-model=&quot;form.region&quot; placeholder=&quot;please select your zone&quot;&gt;
      &lt;el-option label=&quot;Zone one&quot; value=&quot;shanghai&quot;&gt;&lt;/el-option&gt;
      &lt;el-option label=&quot;Zone two&quot; value=&quot;beijing&quot;&gt;&lt;/el-option&gt;
    &lt;/el-select&gt;
  &lt;/el-form-item&gt;
  &lt;el-form-item label=&quot;Activity time&quot;&gt;
    &lt;el-col :span=&quot;11&quot;&gt;
      &lt;el-date-picker type=&quot;date&quot; placeholder=&quot;Pick a date&quot; v-model=&quot;form.date1&quot; style=&quot;width: 100%;&quot;&gt;&lt;/el-date-picker&gt;
    &lt;/el-col&gt;
    &lt;el-col class=&quot;line&quot; :span=&quot;2&quot;&gt;-&lt;/el-col&gt;
    &lt;el-col :span=&quot;11&quot;&gt;
      &lt;el-time-picker placeholder=&quot;Pick a time&quot; v-model=&quot;form.date2&quot; style=&quot;width: 100%;&quot;&gt;&lt;/el-time-picker&gt;
    &lt;/el-col&gt;
  &lt;/el-form-item&gt;
  &lt;el-form-item label=&quot;Instant delivery&quot;&gt;
    &lt;el-switch v-model=&quot;form.delivery&quot;&gt;&lt;/el-switch&gt;
  &lt;/el-form-item&gt;
  &lt;el-form-item label=&quot;Activity type&quot;&gt;
    &lt;el-checkbox-group v-model=&quot;form.type&quot;&gt;
      &lt;el-checkbox label=&quot;Online activities&quot; name=&quot;type&quot;&gt;&lt;/el-checkbox&gt;
      &lt;el-checkbox label=&quot;Promotion activities&quot; name=&quot;type&quot;&gt;&lt;/el-checkbox&gt;
      &lt;el-checkbox label=&quot;Offline activities&quot; name=&quot;type&quot;&gt;&lt;/el-checkbox&gt;
      &lt;el-checkbox label=&quot;Simple brand exposure&quot; name=&quot;type&quot;&gt;&lt;/el-checkbox&gt;
    &lt;/el-checkbox-group&gt;
  &lt;/el-form-item&gt;
  &lt;el-form-item label=&quot;Resources&quot;&gt;
    &lt;el-radio-group v-model=&quot;form.resource&quot;&gt;
      &lt;el-radio label=&quot;Sponsor&quot;&gt;&lt;/el-radio&gt;
      &lt;el-radio label=&quot;Venue&quot;&gt;&lt;/el-radio&gt;
    &lt;/el-radio-group&gt;
  &lt;/el-form-item&gt;
  &lt;el-form-item label=&quot;Activity form&quot;&gt;
    &lt;el-input type=&quot;textarea&quot; v-model=&quot;form.desc&quot;&gt;&lt;/el-input&gt;
  &lt;/el-form-item&gt;
  &lt;el-form-item&gt;
    &lt;el-button type=&quot;primary&quot; @click=&quot;onSubmit&quot;&gt;Create&lt;/el-button&gt;
    &lt;el-button&gt;Cancel&lt;/el-button&gt;
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
<p><a href="https://www.w3.org/MarkUp/html-spec/html-spec_8.html#SEC8.2">W3C</a> regulates that</p>
<blockquote>
<p><i>When there is only one single-line text input field in a form, the user agent should accept Enter in that field as a request to submit the form.</i></p>
</blockquote>
<p>To prevent this behavior, you can add <code>@submit.native.prevent</code> on <code>&lt;el-form&gt;</code>.</p>
</div>
<h3 id="inline-form"><a class="header-anchor" href="#inline-form">¶</a> Inline form</h3>
<p>When the vertical space is limited and the form is relatively simple, you can put it in one line.</p>
<demo-block>
        <div><p>Set the <code>inline</code> attribute to <code>true</code> and the form will be inline.</p>
</div>
        <template slot="source"><element-demo1 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;el-form :inline=&quot;true&quot; :model=&quot;formInline&quot; class=&quot;demo-form-inline&quot;&gt;
  &lt;el-form-item label=&quot;Approved by&quot;&gt;
    &lt;el-input v-model=&quot;formInline.user&quot; placeholder=&quot;Approved by&quot;&gt;&lt;/el-input&gt;
  &lt;/el-form-item&gt;
  &lt;el-form-item label=&quot;Activity zone&quot;&gt;
    &lt;el-select v-model=&quot;formInline.region&quot; placeholder=&quot;Activity zone&quot;&gt;
      &lt;el-option label=&quot;Zone one&quot; value=&quot;shanghai&quot;&gt;&lt;/el-option&gt;
      &lt;el-option label=&quot;Zone two&quot; value=&quot;beijing&quot;&gt;&lt;/el-option&gt;
    &lt;/el-select&gt;
  &lt;/el-form-item&gt;
  &lt;el-form-item&gt;
    &lt;el-button type=&quot;primary&quot; @click=&quot;onSubmit&quot;&gt;Query&lt;/el-button&gt;
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
</code></pre></template></demo-block><h3 id="alignment"><a class="header-anchor" href="#alignment">¶</a> Alignment</h3>
<p>Depending on your design, there are several different ways to align your label element.</p>
<demo-block>
        <div><p>The <code>label-position</code> attribute decides how labels align, it can be <code>top</code> or <code>left</code>. When set to <code>top</code>, labels will be placed at the top of the form field.</p>
</div>
        <template slot="source"><element-demo2 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;el-radio-group v-model=&quot;labelPosition&quot; size=&quot;small&quot;&gt;
  &lt;el-radio-button label=&quot;left&quot;&gt;Left&lt;/el-radio-button&gt;
  &lt;el-radio-button label=&quot;right&quot;&gt;Right&lt;/el-radio-button&gt;
  &lt;el-radio-button label=&quot;top&quot;&gt;Top&lt;/el-radio-button&gt;
&lt;/el-radio-group&gt;
&lt;div style=&quot;margin: 20px;&quot;&gt;&lt;/div&gt;
&lt;el-form :label-position=&quot;labelPosition&quot; label-width=&quot;100px&quot; :model=&quot;formLabelAlign&quot;&gt;
  &lt;el-form-item label=&quot;Name&quot;&gt;
    &lt;el-input v-model=&quot;formLabelAlign.name&quot;&gt;&lt;/el-input&gt;
  &lt;/el-form-item&gt;
  &lt;el-form-item label=&quot;Activity zone&quot;&gt;
    &lt;el-input v-model=&quot;formLabelAlign.region&quot;&gt;&lt;/el-input&gt;
  &lt;/el-form-item&gt;
  &lt;el-form-item label=&quot;Activity form&quot;&gt;
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
</code></pre></template></demo-block><h3 id="validation"><a class="header-anchor" href="#validation">¶</a> Validation</h3>
<p>Form component allows you to verify your data, helping you find and correct errors.</p>
<demo-block>
        <div><p>Just add the <code>rules</code> attribute for <code>Form</code> component, pass validation rules, and set <code>prop</code> attribute for <code>Form-Item</code> as a specific key that needs to be validated. See more information at <a href="https://github.com/yiminghe/async-validator">async-validator</a>.</p>
</div>
        <template slot="source"><element-demo3 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;el-form :model=&quot;ruleForm&quot; :rules=&quot;rules&quot; ref=&quot;ruleForm&quot; label-width=&quot;120px&quot; class=&quot;demo-ruleForm&quot;&gt;
  &lt;el-form-item label=&quot;Activity name&quot; prop=&quot;name&quot;&gt;
    &lt;el-input v-model=&quot;ruleForm.name&quot;&gt;&lt;/el-input&gt;
  &lt;/el-form-item&gt;
  &lt;el-form-item label=&quot;Activity zone&quot; prop=&quot;region&quot;&gt;
    &lt;el-select v-model=&quot;ruleForm.region&quot; placeholder=&quot;Activity zone&quot;&gt;
      &lt;el-option label=&quot;Zone one&quot; value=&quot;shanghai&quot;&gt;&lt;/el-option&gt;
      &lt;el-option label=&quot;Zone two&quot; value=&quot;beijing&quot;&gt;&lt;/el-option&gt;
    &lt;/el-select&gt;
  &lt;/el-form-item&gt;
  &lt;el-form-item label=&quot;Activity time&quot; required&gt;
    &lt;el-col :span=&quot;11&quot;&gt;
      &lt;el-form-item prop=&quot;date1&quot;&gt;
        &lt;el-date-picker type=&quot;date&quot; placeholder=&quot;Pick a date&quot; v-model=&quot;ruleForm.date1&quot; style=&quot;width: 100%;&quot;&gt;&lt;/el-date-picker&gt;
      &lt;/el-form-item&gt;
    &lt;/el-col&gt;
    &lt;el-col class=&quot;line&quot; :span=&quot;2&quot;&gt;-&lt;/el-col&gt;
    &lt;el-col :span=&quot;11&quot;&gt;
      &lt;el-form-item prop=&quot;date2&quot;&gt;
        &lt;el-time-picker placeholder=&quot;Pick a time&quot; v-model=&quot;ruleForm.date2&quot; style=&quot;width: 100%;&quot;&gt;&lt;/el-time-picker&gt;
      &lt;/el-form-item&gt;
    &lt;/el-col&gt;
  &lt;/el-form-item&gt;
  &lt;el-form-item label=&quot;Instant delivery&quot; prop=&quot;delivery&quot;&gt;
    &lt;el-switch v-model=&quot;ruleForm.delivery&quot;&gt;&lt;/el-switch&gt;
  &lt;/el-form-item&gt;
  &lt;el-form-item label=&quot;Activity type&quot; prop=&quot;type&quot;&gt;
    &lt;el-checkbox-group v-model=&quot;ruleForm.type&quot;&gt;
      &lt;el-checkbox label=&quot;Online activities&quot; name=&quot;type&quot;&gt;&lt;/el-checkbox&gt;
      &lt;el-checkbox label=&quot;Promotion activities&quot; name=&quot;type&quot;&gt;&lt;/el-checkbox&gt;
      &lt;el-checkbox label=&quot;Offline activities&quot; name=&quot;type&quot;&gt;&lt;/el-checkbox&gt;
      &lt;el-checkbox label=&quot;Simple brand exposure&quot; name=&quot;type&quot;&gt;&lt;/el-checkbox&gt;
    &lt;/el-checkbox-group&gt;
  &lt;/el-form-item&gt;
  &lt;el-form-item label=&quot;Resources&quot; prop=&quot;resource&quot;&gt;
    &lt;el-radio-group v-model=&quot;ruleForm.resource&quot;&gt;
      &lt;el-radio label=&quot;Sponsorship&quot;&gt;&lt;/el-radio&gt;
      &lt;el-radio label=&quot;Venue&quot;&gt;&lt;/el-radio&gt;
    &lt;/el-radio-group&gt;
  &lt;/el-form-item&gt;
  &lt;el-form-item label=&quot;Activity form&quot; prop=&quot;desc&quot;&gt;
    &lt;el-input type=&quot;textarea&quot; v-model=&quot;ruleForm.desc&quot;&gt;&lt;/el-input&gt;
  &lt;/el-form-item&gt;
  &lt;el-form-item&gt;
    &lt;el-button type=&quot;primary&quot; @click=&quot;submitForm('ruleForm')&quot;&gt;Create&lt;/el-button&gt;
    &lt;el-button @click=&quot;resetForm('ruleForm')&quot;&gt;Reset&lt;/el-button&gt;
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
            { required: true, message: 'Please input Activity name', trigger: 'blur' },
            { min: 3, max: 5, message: 'Length should be 3 to 5', trigger: 'blur' }
          ],
          region: [
            { required: true, message: 'Please select Activity zone', trigger: 'change' }
          ],
          date1: [
            { type: 'date', required: true, message: 'Please pick a date', trigger: 'change' }
          ],
          date2: [
            { type: 'date', required: true, message: 'Please pick a time', trigger: 'change' }
          ],
          type: [
            { type: 'array', required: true, message: 'Please select at least one activity type', trigger: 'change' }
          ],
          resource: [
            { required: true, message: 'Please select activity resource', trigger: 'change' }
          ],
          desc: [
            { required: true, message: 'Please input activity form', trigger: 'blur' }
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
</code></pre></template></demo-block><h3 id="custom-validation-rules"><a class="header-anchor" href="#custom-validation-rules">¶</a> Custom validation rules</h3>
<p>This example shows how to customize your own validation rules to finish a two-factor password verification.</p>
<demo-block>
        <div><p>Here we use <code>status-icon</code> to reflect validation result as an icon.</p>
</div>
        <template slot="source"><element-demo4 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;el-form :model=&quot;ruleForm&quot; status-icon :rules=&quot;rules&quot; ref=&quot;ruleForm&quot; label-width=&quot;120px&quot; class=&quot;demo-ruleForm&quot;&gt;
  &lt;el-form-item label=&quot;Password&quot; prop=&quot;pass&quot;&gt;
    &lt;el-input type=&quot;password&quot; v-model=&quot;ruleForm.pass&quot; autocomplete=&quot;off&quot;&gt;&lt;/el-input&gt;
  &lt;/el-form-item&gt;
  &lt;el-form-item label=&quot;Confirm&quot; prop=&quot;checkPass&quot;&gt;
    &lt;el-input type=&quot;password&quot; v-model=&quot;ruleForm.checkPass&quot; autocomplete=&quot;off&quot;&gt;&lt;/el-input&gt;
  &lt;/el-form-item&gt;
  &lt;el-form-item label=&quot;Age&quot; prop=&quot;age&quot;&gt;
    &lt;el-input v-model.number=&quot;ruleForm.age&quot;&gt;&lt;/el-input&gt;
  &lt;/el-form-item&gt;
  &lt;el-form-item&gt;
    &lt;el-button type=&quot;primary&quot; @click=&quot;submitForm('ruleForm')&quot;&gt;Submit&lt;/el-button&gt;
    &lt;el-button @click=&quot;resetForm('ruleForm')&quot;&gt;Reset&lt;/el-button&gt;
  &lt;/el-form-item&gt;
&lt;/el-form&gt;
&lt;script&gt;
  export default {
    data() {
      var checkAge = (rule, value, callback) =&gt; {
        if (!value) {
          return callback(new Error('Please input the age'));
        }
        setTimeout(() =&gt; {
          if (!Number.isInteger(value)) {
            callback(new Error('Please input digits'));
          } else {
            if (value &lt; 18) {
              callback(new Error('Age must be greater than 18'));
            } else {
              callback();
            }
          }
        }, 1000);
      };
      var validatePass = (rule, value, callback) =&gt; {
        if (value === '') {
          callback(new Error('Please input the password'));
        } else {
          if (this.ruleForm.checkPass !== '') {
            this.$refs.ruleForm.validateField('checkPass');
          }
          callback();
        }
      };
      var validatePass2 = (rule, value, callback) =&gt; {
        if (value === '') {
          callback(new Error('Please input the password again'));
        } else if (value !== this.ruleForm.pass) {
          callback(new Error('Two inputs don\'t match!'));
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
<p>Custom validate callback function must be called. See more advanced usage at <a href="https://github.com/yiminghe/async-validator">async-validator</a>.</p>
</div>
<h3 id="delete-or-add-form-items-dynamically"><a class="header-anchor" href="#delete-or-add-form-items-dynamically">¶</a> Delete or add form items dynamically</h3>
<demo-block>
        <div><p>In addition to passing all validation rules at once on the form component, you can also pass the validation rules or delete rules on a single form field dynamically.</p>
</div>
        <template slot="source"><element-demo5 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;el-form :model=&quot;dynamicValidateForm&quot; ref=&quot;dynamicValidateForm&quot; label-width=&quot;120px&quot; class=&quot;demo-dynamic&quot;&gt;
  &lt;el-form-item
    prop=&quot;email&quot;
    label=&quot;Email&quot;
    :rules=&quot;[
      { required: true, message: 'Please input email address', trigger: 'blur' },
      { type: 'email', message: 'Please input correct email address', trigger: ['blur', 'change'] }
    ]&quot;
  &gt;
    &lt;el-input v-model=&quot;dynamicValidateForm.email&quot;&gt;&lt;/el-input&gt;
  &lt;/el-form-item&gt;
  &lt;el-form-item
    v-for=&quot;(domain, index) in dynamicValidateForm.domains&quot;
    :label=&quot;'Domain' + index&quot;
    :key=&quot;domain.key&quot;
    :prop=&quot;'domains.' + index + '.value'&quot;
    :rules=&quot;{
      required: true, message: 'domain can not be null', trigger: 'blur'
    }&quot;
  &gt;
    &lt;el-input v-model=&quot;domain.value&quot;&gt;&lt;/el-input&gt;&lt;el-button @click.prevent=&quot;removeDomain(domain)&quot;&gt;Delete&lt;/el-button&gt;
  &lt;/el-form-item&gt;
  &lt;el-form-item&gt;
    &lt;el-button type=&quot;primary&quot; @click=&quot;submitForm('dynamicValidateForm')&quot;&gt;Submit&lt;/el-button&gt;
    &lt;el-button @click=&quot;addDomain&quot;&gt;New domain&lt;/el-button&gt;
    &lt;el-button @click=&quot;resetForm('dynamicValidateForm')&quot;&gt;Reset&lt;/el-button&gt;
  &lt;/el-form-item&gt;
&lt;/el-form&gt;
&lt;script&gt;
  export default {
    data() {
      return {
        dynamicValidateForm: {
          domains: [{
            key: 1,
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
        var index = this.dynamicValidateForm.domains.indexOf(item);
        if (index !== -1) {
          this.dynamicValidateForm.domains.splice(index, 1);
        }
      },
      addDomain() {
        this.dynamicValidateForm.domains.push({
          key: Date.now(),
          value: ''
        });
      }
    }
  }
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="number-validate"><a class="header-anchor" href="#number-validate">¶</a> Number Validate</h3>
<demo-block>
        <div><p>Number Validate need a <code>.number</code> modifier added on the input <code>v-model</code> binding，it's used to transform the string value to the number which is provided by Vuejs.</p>
</div>
        <template slot="source"><element-demo6 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;el-form :model=&quot;numberValidateForm&quot; ref=&quot;numberValidateForm&quot; label-width=&quot;100px&quot; class=&quot;demo-ruleForm&quot;&gt;
  &lt;el-form-item
    label=&quot;age&quot;
    prop=&quot;age&quot;
    :rules=&quot;[
      { required: true, message: 'age is required'},
      { type: 'number', message: 'age must be a number'}
    ]&quot;
  &gt;
    &lt;el-input type=&quot;age&quot; v-model.number=&quot;numberValidateForm.age&quot; autocomplete=&quot;off&quot;&gt;&lt;/el-input&gt;
  &lt;/el-form-item&gt;
  &lt;el-form-item&gt;
    &lt;el-button type=&quot;primary&quot; @click=&quot;submitForm('numberValidateForm')&quot;&gt;Submit&lt;/el-button&gt;
    &lt;el-button @click=&quot;resetForm('numberValidateForm')&quot;&gt;Reset&lt;/el-button&gt;
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
<p>When an <code>el-form-item</code> is nested in another <code>el-form-item</code>, its label width will be <code>0</code>. You can set <code>label-width</code> on that <code>el-form-item</code> if needed.</p>
</div>
<h3 id="size-control"><a class="header-anchor" href="#size-control">¶</a> Size control</h3>
<p>All components in a Form inherit their <code>size</code> attribute from that Form. Similarly, FormItem also has a <code>size</code> attribute.</p>
<demo-block>
        <div><p>Still you can fine tune each component's <code>size</code> if you don't want that component to inherit its size from From or FormIten.</p>
</div>
        <template slot="source"><element-demo7 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;el-form ref=&quot;form&quot; :model=&quot;sizeForm&quot; label-width=&quot;120px&quot; size=&quot;mini&quot;&gt;
  &lt;el-form-item label=&quot;Activity name&quot;&gt;
    &lt;el-input v-model=&quot;sizeForm.name&quot;&gt;&lt;/el-input&gt;
  &lt;/el-form-item&gt;
  &lt;el-form-item label=&quot;Activity zone&quot;&gt;
    &lt;el-select v-model=&quot;sizeForm.region&quot; placeholder=&quot;please select your zone&quot;&gt;
      &lt;el-option label=&quot;Zone one&quot; value=&quot;shanghai&quot;&gt;&lt;/el-option&gt;
      &lt;el-option label=&quot;Zone two&quot; value=&quot;beijing&quot;&gt;&lt;/el-option&gt;
    &lt;/el-select&gt;
  &lt;/el-form-item&gt;
  &lt;el-form-item label=&quot;Activity time&quot;&gt;
    &lt;el-col :span=&quot;11&quot;&gt;
      &lt;el-date-picker type=&quot;date&quot; placeholder=&quot;Pick a date&quot; v-model=&quot;sizeForm.date1&quot; style=&quot;width: 100%;&quot;&gt;&lt;/el-date-picker&gt;
    &lt;/el-col&gt;
    &lt;el-col class=&quot;line&quot; :span=&quot;2&quot;&gt;-&lt;/el-col&gt;
    &lt;el-col :span=&quot;11&quot;&gt;
      &lt;el-time-picker placeholder=&quot;Pick a time&quot; v-model=&quot;sizeForm.date2&quot; style=&quot;width: 100%;&quot;&gt;&lt;/el-time-picker&gt;
    &lt;/el-col&gt;
  &lt;/el-form-item&gt;
  &lt;el-form-item label=&quot;Activity type&quot;&gt;
    &lt;el-checkbox-group v-model=&quot;sizeForm.type&quot;&gt;
      &lt;el-checkbox-button label=&quot;Online activities&quot; name=&quot;type&quot;&gt;&lt;/el-checkbox-button&gt;
      &lt;el-checkbox-button label=&quot;Promotion activities&quot; name=&quot;type&quot;&gt;&lt;/el-checkbox-button&gt;
    &lt;/el-checkbox-group&gt;
  &lt;/el-form-item&gt;
  &lt;el-form-item label=&quot;Resources&quot;&gt;
    &lt;el-radio-group v-model=&quot;sizeForm.resource&quot; size=&quot;medium&quot;&gt;
      &lt;el-radio border label=&quot;Sponsor&quot;&gt;&lt;/el-radio&gt;
      &lt;el-radio border label=&quot;Venue&quot;&gt;&lt;/el-radio&gt;
    &lt;/el-radio-group&gt;
  &lt;/el-form-item&gt;
  &lt;el-form-item size=&quot;large&quot;&gt;
    &lt;el-button type=&quot;primary&quot; @click=&quot;onSubmit&quot;&gt;Create&lt;/el-button&gt;
    &lt;el-button&gt;Cancel&lt;/el-button&gt;
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
<th>Attribute</th>
<th>Description</th>
<th>Type</th>
<th>Accepted Values</th>
<th>Default</th>
</tr>
</thead>
<tbody>
<tr>
<td>model</td>
<td>data of form component</td>
<td>object</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>rules</td>
<td>validation rules of form</td>
<td>object</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>inline</td>
<td>whether the form is inline</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>label-position</td>
<td>position of label. If set to 'left' or 'right', <code>label-width</code> prop is also required</td>
<td>string</td>
<td>left / right / top</td>
<td>right</td>
</tr>
<tr>
<td>label-width</td>
<td>width of label, e.g. '50px'. All its direct child form items will inherit this value. Width <code>auto</code> is supported.</td>
<td>string</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>label-suffix</td>
<td>suffix of the label</td>
<td>string</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>hide-required-asterisk</td>
<td>whether required fields should have a red asterisk (star) beside their labels</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>show-message</td>
<td>whether to show the error message</td>
<td>boolean</td>
<td>—</td>
<td>true</td>
</tr>
<tr>
<td>inline-message</td>
<td>whether to display the error message inline with the form item</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>status-icon</td>
<td>whether to display an icon indicating the validation result</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>validate-on-rule-change</td>
<td>whether to trigger validation when the <code>rules</code> prop is changed</td>
<td>boolean</td>
<td>—</td>
<td>true</td>
</tr>
<tr>
<td>size</td>
<td>control the size of components in this form</td>
<td>string</td>
<td>medium / small / mini</td>
<td>—</td>
</tr>
<tr>
<td>disabled</td>
<td>whether to disabled all components in this form. If set to true, it cannot be overridden by its inner components' <code>disabled</code> prop</td>
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
<th>Method</th>
<th>Description</th>
<th>Parameters</th>
</tr>
</thead>
<tbody>
<tr>
<td>validate</td>
<td>validate the whole form. Takes a callback as a param. After validation, the callback will be executed with two params: a boolean indicating if the validation has passed, and an object containing all fields that fail the validation. Returns a promise if callback is omitted</td>
<td>Function(callback: Function(boolean, object))</td>
</tr>
<tr>
<td>validateField</td>
<td>validate one or several form items</td>
<td>Function(props: string | array, callback: Function(errorMessage: string))</td>
</tr>
<tr>
<td>resetFields</td>
<td>reset all the fields and remove validation result</td>
<td>—</td>
</tr>
<tr>
<td>clearValidate</td>
<td>clear validation message for certain fields. The parameter is prop name or an array of prop names of the form items whose validation messages will be removed. When omitted, all fields' validation messages will be cleared</td>
<td>Function(props: string | array)</td>
</tr>
</tbody>
</table>
<h3 id="form-events"><a class="header-anchor" href="#form-events">¶</a> Form Events</h3>
<table>
<thead>
<tr>
<th>Event Name</th>
<th>Description</th>
<th>Parameters</th>
</tr>
</thead>
<tbody>
<tr>
<td>validate</td>
<td>triggers after a form item is validated</td>
<td>prop name of the form item being validated, whether validation is passed and the error message if not</td>
</tr>
</tbody>
</table>
<h3 id="form-item-attributes"><a class="header-anchor" href="#form-item-attributes">¶</a> Form-Item Attributes</h3>
<table>
<thead>
<tr>
<th>Attribute</th>
<th>Description</th>
<th>Type</th>
<th>Accepted Values</th>
<th>Default</th>
</tr>
</thead>
<tbody>
<tr>
<td>prop</td>
<td>a key of <code>model</code>. In the use of validate and resetFields method, the attribute is required</td>
<td>string</td>
<td>keys of model that passed to <code>form</code></td>
<td></td>
</tr>
<tr>
<td>label</td>
<td>label</td>
<td>string</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>label-width</td>
<td>width of label, e.g. '50px'. Width <code>auto</code> is supported.</td>
<td>string</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>required</td>
<td>whether the field is required or not, will be determined by validation rules if omitted</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>rules</td>
<td>validation rules of form</td>
<td>object</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>error</td>
<td>field error message, set its value and the field will validate error and show this message immediately</td>
<td>string</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>show-message</td>
<td>whether to show the error message</td>
<td>boolean</td>
<td>—</td>
<td>true</td>
</tr>
<tr>
<td>inline-message</td>
<td>inline style validate message</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>size</td>
<td>control the size of components in this form-item</td>
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
<th>Name</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>—</td>
<td>content of Form Item</td>
</tr>
<tr>
<td>label</td>
<td>content of label</td>
</tr>
</tbody>
</table>
<h3 id="form-item-scoped-slot"><a class="header-anchor" href="#form-item-scoped-slot">¶</a> Form-Item Scoped Slot</h3>
<table>
<thead>
<tr>
<th>Name</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>error</td>
<td>Custom content to display validation message. The scope parameter is { error }</td>
</tr>
</tbody>
</table>
<h3 id="form-item-methods"><a class="header-anchor" href="#form-item-methods">¶</a> Form-Item Methods</h3>
<table>
<thead>
<tr>
<th>Method</th>
<th>Description</th>
<th>Parameters</th>
</tr>
</thead>
<tbody>
<tr>
<td>resetField</td>
<td>reset current field and remove validation result</td>
<td>—</td>
</tr>
<tr>
<td>clearValidate</td>
<td>remove validation status of the field</td>
<td>-</td>
</tr>
</tbody>
</table>
