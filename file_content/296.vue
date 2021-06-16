<h2 id="form"><a class="header-anchor" href="#form">¶</a> Form</h2>
<p>Form consiste en <code>input</code>, <code>radio</code>, <code>select</code>, <code>checkbox</code>, etcétera. Con el formulario, usted puede recopilar, verificar y enviar datos.</p>
<h3 id="form-basico"><a class="header-anchor" href="#form-basico">¶</a> Form básico</h3>
<p>Incluye todo tipo de entradas, tales como <code>input</code>, <code>select</code>, <code>radio</code> y <code>checkbox</code>.</p>
<demo-block>
        <div><p>En cada componente <code>form</code>, necesita un campo <code>form-item</code> para que sea el contenedor del ítem.</p>
</div>
        <!--element-demo: <el-form ref="form" :model="form" label-width="120px">
  <el-form-item label="Activity name">
    <el-input v-model="form.name"></el-input>
  </el-form-item>
  <el-form-item label="Activity zone">
    <el-select v-model="form.region" placeholder="please select your zone">
      <el-option label="Zone one" value="shanghai"></el-option>
      <el-option label="Zone two" value="beijing"></el-option>
    </el-select>
  </el-form-item>
  <el-form-item label="Activity time">
    <el-col :span="11">
      <el-date-picker type="date" placeholder="Pick a date" v-model="form.date1" style="width: 100%;"></el-date-picker>
    </el-col>
    <el-col class="line" :span="2">-</el-col>
    <el-col :span="11">
      <el-time-picker placeholder="Pick a time" v-model="form.date2" style="width: 100%;"></el-time-picker>
    </el-col>
  </el-form-item>
  <el-form-item label="Instant delivery">
    <el-switch v-model="form.delivery"></el-switch>
  </el-form-item>
  <el-form-item label="Activity type">
    <el-checkbox-group v-model="form.type">
      <el-checkbox label="Online activities" name="type"></el-checkbox>
      <el-checkbox label="Promotion activities" name="type"></el-checkbox>
      <el-checkbox label="Offline activities" name="type"></el-checkbox>
      <el-checkbox label="Simple brand exposure" name="type"></el-checkbox>
    </el-checkbox-group>
  </el-form-item>
  <el-form-item label="Resources">
    <el-radio-group v-model="form.resource">
      <el-radio label="Sponsor"></el-radio>
      <el-radio label="Venue"></el-radio>
    </el-radio-group>
  </el-form-item>
  <el-form-item label="Activity form">
    <el-input type="textarea" v-model="form.desc"></el-input>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="onSubmit">Create</el-button>
    <el-button>Cancel</el-button>
  </el-form-item>
</el-form>
<script>
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
</script>
:element-demo-->
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
<p><a href="https://www.w3.org/MarkUp/html-spec/html-spec_8.html#SEC8.2">W3C</a> reglamenta que</p>
<blockquote>
<p><i>Cuando sólo hay un campo de entrada de texto de una sola línea en un formulario, el agente usuario debe aceptar <b>Enter</b> en ese campo como una solicitud para enviar el formulario.</i></p>
</blockquote>
<p>Para prevenir este comportamiento, puede agregar <code>@submit.native.prevent</code> on <code>&lt;el-form&gt;</code>.</p>
</div>
<h3 id="formulario-inline"><a class="header-anchor" href="#formulario-inline">¶</a> Formulario inline</h3>
<p>Cuando el espacio vertical es limitado y la forma es relativamente simple, puede ponerlo en una unica línea.</p>
<demo-block>
        <div><p>Establezca el atributo <code>inline</code> como <code>true</code> y el formulario sera inline.</p>
</div>
        <!--element-demo: <el-form :inline="true" :model="formInline" class="demo-form-inline">
  <el-form-item label="Approved by">
    <el-input v-model="formInline.user" placeholder="Approved by"></el-input>
  </el-form-item>
  <el-form-item label="Activity zone">
    <el-select v-model="formInline.region" placeholder="Activity zone">
      <el-option label="Zone one" value="shanghai"></el-option>
      <el-option label="Zone two" value="beijing"></el-option>
    </el-select>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="onSubmit">Query</el-button>
  </el-form-item>
</el-form>
<script>
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
</script>
:element-demo-->
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
</code></pre></template></demo-block><h3 id="alineamiento"><a class="header-anchor" href="#alineamiento">¶</a> Alineamiento</h3>
<p>Dependiendo de su diseño, hay varias maneras diferentes de alinear el elemento de la etiqueta.</p>
<demo-block>
        <div><p>El atributo <code>label-position</code> decide cómo se alinean las etiquetas, puede estar <code>top</code> o <code>left</code>. Cuando se establece en <code>top</code>, las etiquetas se colocarán en la parte superior del campo de formulario.</p>
</div>
        <!--element-demo: <el-radio-group v-model="labelPosition" size="small">
  <el-radio-button label="left">Left</el-radio-button>
  <el-radio-button label="right">Right</el-radio-button>
  <el-radio-button label="top">Top</el-radio-button>
</el-radio-group>
<div style="margin: 20px;"></div>
<el-form :label-position="labelPosition" label-width="100px" :model="formLabelAlign">
  <el-form-item label="Name">
    <el-input v-model="formLabelAlign.name"></el-input>
  </el-form-item>
  <el-form-item label="Activity zone">
    <el-input v-model="formLabelAlign.region"></el-input>
  </el-form-item>
  <el-form-item label="Activity form">
    <el-input v-model="formLabelAlign.type"></el-input>
  </el-form-item>
</el-form>
<script>
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
</script>
:element-demo-->
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
</code></pre></template></demo-block><h3 id="validacion"><a class="header-anchor" href="#validacion">¶</a> Validación</h3>
<p>El componente <code>form</code> le permite verificar sus datos, ayudándole a encontrar y corregir errores.</p>
<demo-block>
        <div><p>Sólo tiene que añadir el atributo <code>rules</code> en el componente <code>Form</code>, pasar las reglas de validación y establecer el atributo <code>prop</code> para <code>Form-Item</code> como una clave específica que necesita ser validada. Ver más información en <a href="https://github.com/yiminghe/async-validator">async-validator</a>.</p>
</div>
        <!--element-demo: <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="120px" class="demo-ruleForm">
  <el-form-item label="Activity name" prop="name">
    <el-input v-model="ruleForm.name"></el-input>
  </el-form-item>
  <el-form-item label="Activity zone" prop="region">
    <el-select v-model="ruleForm.region" placeholder="Activity zone">
      <el-option label="Zone one" value="shanghai"></el-option>
      <el-option label="Zone two" value="beijing"></el-option>
    </el-select>
  </el-form-item>
  <el-form-item label="Activity time" required>
    <el-col :span="11">
      <el-form-item prop="date1">
        <el-date-picker type="date" placeholder="Pick a date" v-model="ruleForm.date1" style="width: 100%;"></el-date-picker>
      </el-form-item>
    </el-col>
    <el-col class="line" :span="2">-</el-col>
    <el-col :span="11">
      <el-form-item prop="date2">
        <el-time-picker placeholder="Pick a time" v-model="ruleForm.date2" style="width: 100%;"></el-time-picker>
      </el-form-item>
    </el-col>
  </el-form-item>
  <el-form-item label="Instant delivery" prop="delivery">
    <el-switch v-model="ruleForm.delivery"></el-switch>
  </el-form-item>
  <el-form-item label="Activity type" prop="type">
    <el-checkbox-group v-model="ruleForm.type">
      <el-checkbox label="Online activities" name="type"></el-checkbox>
      <el-checkbox label="Promotion activities" name="type"></el-checkbox>
      <el-checkbox label="Offline activities" name="type"></el-checkbox>
      <el-checkbox label="Simple brand exposure" name="type"></el-checkbox>
    </el-checkbox-group>
  </el-form-item>
  <el-form-item label="Resources" prop="resource">
    <el-radio-group v-model="ruleForm.resource">
      <el-radio label="Sponsorship"></el-radio>
      <el-radio label="Venue"></el-radio>
    </el-radio-group>
  </el-form-item>
  <el-form-item label="Activity form" prop="desc">
    <el-input type="textarea" v-model="ruleForm.desc"></el-input>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="submitForm('ruleForm')">Create</el-button>
    <el-button @click="resetForm('ruleForm')">Reset</el-button>
  </el-form-item>
</el-form>
<script>
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
        this.$refs[formName].validate((valid) => {
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
</script>
:element-demo-->
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
</code></pre></template></demo-block><h3 id="reglas-personalizadas-de-validacion"><a class="header-anchor" href="#reglas-personalizadas-de-validacion">¶</a> Reglas personalizadas de validación</h3>
<p>Este ejemplo muestra cómo personalizar sus propias reglas de validación para finalizar una verificación de contraseña de dos pasos.</p>
<demo-block>
        <div><p>Aquí utilizamos el <code>status-icon</code> para reflejar el resultado de la validación como un icono.</p>
</div>
        <!--element-demo: <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="120px" class="demo-ruleForm">
  <el-form-item label="Password" prop="pass">
    <el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
  </el-form-item>
  <el-form-item label="Confirm" prop="checkPass">
    <el-input type="password" v-model="ruleForm.checkPass" autocomplete="off"></el-input>
  </el-form-item>
  <el-form-item label="Age" prop="age">
    <el-input v-model.number="ruleForm.age"></el-input>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="submitForm('ruleForm')">Submit</el-button>
    <el-button @click="resetForm('ruleForm')">Reset</el-button>
  </el-form-item>
</el-form>
<script>
  export default {
    data() {
      var checkAge = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('Please input the age'));
        }
        setTimeout(() => {
          if (!Number.isInteger(value)) {
            callback(new Error('Please input digits'));
          } else {
            if (value < 18) {
              callback(new Error('Age must be greater than 18'));
            } else {
              callback();
            }
          }
        }, 1000);
      };
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('Please input the password'));
        } else {
          if (this.ruleForm.checkPass !== '') {
            this.$refs.ruleForm.validateField('checkPass');
          }
          callback();
        }
      };
      var validatePass2 = (rule, value, callback) => {
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
        this.$refs[formName].validate((valid) => {
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
</script>
:element-demo-->
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
<p>Se debe llamar a la función de validación de llamada de retorno personalizada. Ver uso más avanzado en <a href="https://github.com/yiminghe/async-validator">async-validator</a>.</p>
</div>
<h3 id="eliminar-o-agregar-validaciones-dinamicamente"><a class="header-anchor" href="#eliminar-o-agregar-validaciones-dinamicamente">¶</a> Eliminar o agregar validaciones dinámicamente</h3>
<demo-block>
        <div><p>Además de pasar todas las reglas de validación al mismo tiempo en el componente <code>form</code>, también puede pasar las reglas de validación o borrar reglas en un único campo de formulario de forma dinámica.</p>
</div>
        <!--element-demo: <el-form :model="dynamicValidateForm" ref="dynamicValidateForm" label-width="120px" class="demo-dynamic">
  <el-form-item
    prop="email"
    label="Email"
    :rules="[
      { required: true, message: 'Please input email address', trigger: 'blur' },
      { type: 'email', message: 'Please input correct email address', trigger: ['blur', 'change'] }
    ]"
  >
    <el-input v-model="dynamicValidateForm.email"></el-input>
  </el-form-item>
  <el-form-item
    v-for="(domain, index) in dynamicValidateForm.domains"
    :label="'Domain' + index"
    :key="domain.key"
    :prop="'domains.' + index + '.value'"
    :rules="{
      required: true, message: 'domain can not be null', trigger: 'blur'
    }"
  >
    <el-input v-model="domain.value"></el-input><el-button @click.prevent="removeDomain(domain)">Delete</el-button>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="submitForm('dynamicValidateForm')">Submit</el-button>
    <el-button @click="addDomain">New domain</el-button>
    <el-button @click="resetForm('dynamicValidateForm')">Reset</el-button>
  </el-form-item>
</el-form>
<script>
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
        this.$refs[formName].validate((valid) => {
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
</script>
:element-demo-->
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
</code></pre></template></demo-block><h3 id="validacion-numerica"><a class="header-anchor" href="#validacion-numerica">¶</a> Validación numérica</h3>
<demo-block>
        <div><p>La validación numérica necesita un modificador <code>.number</code> añadido en el enlace <code>v-model</code> de entrada, sirve para transformar el valor de la cadena al número proporcionado por Vuejs.</p>
</div>
        <!--element-demo: <el-form :model="numberValidateForm" ref="numberValidateForm" label-width="100px" class="demo-ruleForm">
  <el-form-item
    label="age"
    prop="age"
    :rules="[
      { required: true, message: 'age is required'},
      { type: 'number', message: 'age must be a number'}
    ]"
  >
    <el-input type="age" v-model.number="numberValidateForm.age" autocomplete="off"></el-input>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="submitForm('numberValidateForm')">Submit</el-button>
    <el-button @click="resetForm('numberValidateForm')">Reset</el-button>
  </el-form-item>
</el-form>
<script>
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
        this.$refs[formName].validate((valid) => {
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
</script>
:element-demo-->
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
<p>Cuando un <code>el-form-item</code> está anidado en otro <code>el-form-item</code>, su ancho de etiqueta será 0. Si es necesario, puede establecer el ancho de etiqueta en ese <code>el-form-item</code>.</p>
</div>
<h3 id="tamano-del-control"><a class="header-anchor" href="#tamano-del-control">¶</a> Tamaño del control</h3>
<p>Todos los componentes de un formulario heredan su atributo <code>size</code>. De manera similar, FormItem también tiene un atributo <code>size</code>.</p>
<demo-block>
        <div><p>Aún así, puede ajustar el <code>size</code> de cada componente si no desea que herede su tamaño de From o FormItem.</p>
</div>
        <!--element-demo: <el-form ref="form" :model="sizeForm" label-width="120px" size="mini">
  <el-form-item label="Activity name">
    <el-input v-model="sizeForm.name"></el-input>
  </el-form-item>
  <el-form-item label="Activity zone">
    <el-select v-model="sizeForm.region" placeholder="please select your zone">
      <el-option label="Zone one" value="shanghai"></el-option>
      <el-option label="Zone two" value="beijing"></el-option>
    </el-select>
  </el-form-item>
  <el-form-item label="Activity time">
    <el-col :span="11">
      <el-date-picker type="date" placeholder="Pick a date" v-model="sizeForm.date1" style="width: 100%;"></el-date-picker>
    </el-col>
    <el-col class="line" :span="2">-</el-col>
    <el-col :span="11">
      <el-time-picker placeholder="Pick a time" v-model="sizeForm.date2" style="width: 100%;"></el-time-picker>
    </el-col>
  </el-form-item>
  <el-form-item label="Activity type">
    <el-checkbox-group v-model="sizeForm.type">
      <el-checkbox-button label="Online activities" name="type"></el-checkbox-button>
      <el-checkbox-button label="Promotion activities" name="type"></el-checkbox-button>
    </el-checkbox-group>
  </el-form-item>
  <el-form-item label="Resources">
    <el-radio-group v-model="sizeForm.resource" size="medium">
      <el-radio border label="Sponsor"></el-radio>
      <el-radio border label="Venue"></el-radio>
    </el-radio-group>
  </el-form-item>
  <el-form-item size="large">
    <el-button type="primary" @click="onSubmit">Create</el-button>
    <el-button>Cancel</el-button>
  </el-form-item>
</el-form>

<script>
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
</script>
:element-demo-->
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
</code></pre></template></demo-block><h3 id="form-atributos"><a class="header-anchor" href="#form-atributos">¶</a> Form Atributos</h3>
<table>
<thead>
<tr>
<th>Atributo</th>
<th>Descripción</th>
<th>Tipo</th>
<th>Valores aceptados</th>
<th>Por defecto</th>
</tr>
</thead>
<tbody>
<tr>
<td>model</td>
<td>Datos del componente</td>
<td>object</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>rules</td>
<td>Reglas de validación</td>
<td>object</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>inline</td>
<td>Si el form es inline</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>label-position</td>
<td>Posición de la etiqueta</td>
<td>string</td>
<td>left / right / top</td>
<td>right</td>
</tr>
<tr>
<td>label-width</td>
<td>anchura de la etiqueta, por ejemplo, &quot;50px&quot;. Todos sus elementos de formulario hijo directo heredarán este valor. El valor <code>auto</code> está soportado.</td>
<td>string</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>label-suffix</td>
<td>sufijo de la etiqueta</td>
<td>string</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>hide-required-asterisk</td>
<td>si los campos obligatorios deben tener un asterisco rojo (estrella) al lado de sus etiquetas</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>show-message</td>
<td>si mostrar o no el mensaje de error</td>
<td>boolean</td>
<td>—</td>
<td>true</td>
</tr>
<tr>
<td>inline-message</td>
<td>si desea visualizar el mensaje de error inline con la posición del form item</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>status-icon</td>
<td>si desea visualizar un icono que indique el resultado de la validación</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>validate-on-rule-change</td>
<td>si se dispara la validación cuando el prop <code>rules</code> cambia</td>
<td>boolean</td>
<td>—</td>
<td>true</td>
</tr>
<tr>
<td>size</td>
<td>el tamaño de los componentes en este form</td>
<td>string</td>
<td>medium / small / mini</td>
<td>—</td>
</tr>
<tr>
<td>disabled</td>
<td>si se desactivan todos los componentes del formulario. Si esta en <code>true</code> no puede ser cambiado por el prop <code>disabled</code> individual de los componentes.</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
</tbody>
</table>
<h3 id="form-metodos"><a class="header-anchor" href="#form-metodos">¶</a> Form Métodos</h3>
<table>
<thead>
<tr>
<th>Método</th>
<th>Descripción</th>
<th>Parámetros</th>
</tr>
</thead>
<tbody>
<tr>
<td>validate</td>
<td>el método para validar todo el formulario. Recibe una llamada como parámetro. Después de la validación, la llamada de retorno se ejecutará con dos parámetros: un booleano que indica si la validación ha pasado, y un objeto que contiene todos los campos que fallaron en la validación. Devuelve una promesa si se omite el return</td>
<td>Function(callback: Function(boolean, object))</td>
</tr>
<tr>
<td>validateField</td>
<td>validar uno o varios elementos de formulario</td>
<td>Function(props: string | array, callback: Function(errorMessage: string))</td>
</tr>
<tr>
<td>resetFields</td>
<td>restablece todos los campos y elimina el resultado de validación</td>
<td>—</td>
</tr>
<tr>
<td>clearValidate</td>
<td>borra el mensaje de validación para determinados campos. El parámetro es un prop name o un array de props names de los items del formulario cuyos mensajes de validación se eliminarán. Si se omiten, se borrarán todos los mensajes de validación de los campos.</td>
<td>Function(props: string | array)</td>
</tr>
</tbody>
</table>
<h3 id="eventos-form"><a class="header-anchor" href="#eventos-form">¶</a> Eventos Form</h3>
<table>
<thead>
<tr>
<th>Nombre</th>
<th>Descripción</th>
<th>Parámetros</th>
</tr>
</thead>
<tbody>
<tr>
<td>validate</td>
<td>se dispara después de validar un ítem del formulario</td>
<td>la propiedad (<code>prop name</code>) nombre del ítem del form que se esta validando, si la validación paso o no, y el mensaje de error si existe.</td>
</tr>
</tbody>
</table>
<h3 id="form-item-atributos"><a class="header-anchor" href="#form-item-atributos">¶</a> Form-Item Atributos</h3>
<table>
<thead>
<tr>
<th>Atributo</th>
<th>Descripción</th>
<th>Tipo</th>
<th>Valores aceptados</th>
<th>Por defecto</th>
</tr>
</thead>
<tbody>
<tr>
<td>prop</td>
<td>un clave del modelo. En el uso del método <code>validate</code> y <code>resetFields</code>, el atributo es obligatorio.</td>
<td>string</td>
<td>Clave del modelo que se ha pasado a  <code>form</code></td>
<td></td>
</tr>
<tr>
<td>label</td>
<td>etiqueta</td>
<td>string</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>label-width</td>
<td>ancho de la etiqueta, Ejemplo: '50px'. El valor <code>auto</code> esta soportado</td>
<td>string</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>required</td>
<td>si el campo es obligatorio o no, estará determinado por las reglas de validación si se omite.</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>rules</td>
<td>reglas de validación del form</td>
<td>object</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>error</td>
<td>mensaje de error de campo, establezca su valor y el campo validará el error y mostrará este mensaje inmediatamente.</td>
<td>string</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>show-message</td>
<td>si mostrar o no el mensaje de error</td>
<td>boolean</td>
<td>—</td>
<td>true</td>
</tr>
<tr>
<td>inline-message</td>
<td>mensaje de validación estilo inline</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>size</td>
<td>Tamaño de los componentes en este form item</td>
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
<th>Nombre</th>
<th>Descripción</th>
</tr>
</thead>
<tbody>
<tr>
<td>—</td>
<td>contenido del Form Item</td>
</tr>
<tr>
<td>label</td>
<td>contenido de la etiqueta</td>
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
<td>Contenido personalizado para mostrar el mensaje de validación. El parámetro del scope es { error }</td>
</tr>
</tbody>
</table>
<h3 id="form-item-metodo"><a class="header-anchor" href="#form-item-metodo">¶</a> Form-Item Método</h3>
<table>
<thead>
<tr>
<th>Método</th>
<th>Descripción</th>
<th>Parámetros</th>
</tr>
</thead>
<tbody>
<tr>
<td>resetField</td>
<td>restablecer campo actual y eliminar resultado de validación</td>
<td>—</td>
</tr>
<tr>
<td>clearValidate</td>
<td>elimina el estado de la validación de un campo</td>
<td>-</td>
</tr>
</tbody>
</table>
