<h2 id="form"><a class="header-anchor" href="#form">¶</a> Form</h2>
<p>Un formulaire est constitué des éléments <code>input</code>, <code>radio</code>, <code>select</code>, <code>checkbox</code>, etc. Il sert principalement à collecter, vérifier et soumettre des données.</p>
<h3 id="formulaire-de-base"><a class="header-anchor" href="#formulaire-de-base">¶</a> Formulaire de base</h3>
<p>Il peut contenir toutes sortes de champs tels que <code>input</code>, <code>select</code>, <code>radio</code> et <code>checkbox</code>.</p>
<demo-block>
        <div><p>Dans chaque composant <code>form</code>, il vous faudra utiliser la balise <code>form-item</code> pour servir de conteneur à chaque champ.</p>
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
      &lt;el-date-picker type=&quot;date&quot; placeholder=&quot;Choisissez une date&quot; v-model=&quot;form.date1&quot; style=&quot;width: 100%;&quot;&gt;&lt;/el-date-picker&gt;
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
    &lt;el-button type=&quot;primary&quot; @click=&quot;onSubmit&quot;&gt;Créer&lt;/el-button&gt;
    &lt;el-button&gt;Annuler&lt;/el-button&gt;
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
<p><a href="https://www.w3.org/MarkUp/html-spec/html-spec_8.html#SEC8.2">W3C</a> stipule que</p>
<blockquote>
<p><i>Lorsqu'il n'y a qu'un seul champ de type texte dans un formulaire, le navigateur devrait accepter la pression de la touche Entrée sur ce champ comme méthode de soumission du formulaire</i></p>
</blockquote>
<p>Pour éviter ce comportement, vous pouvez ajouter <code>@submit.native.prevent</code> dans <code>&lt;el-form&gt;</code>.</p>
</div>
<h3 id="formulaire-horizontal"><a class="header-anchor" href="#formulaire-horizontal">¶</a> Formulaire horizontal</h3>
<p>Lorsque l'espace vertical est limité et que le formulaire est relativement simple, vous pouvez le placer sur une seule ligne.</p>
<demo-block>
        <div><p>Mettez l'attribut <code>inline</code> à <code>true</code> et le formulaire sera en une seul ligne.</p>
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
</code></pre></template></demo-block><h3 id="alignement"><a class="header-anchor" href="#alignement">¶</a> Alignement</h3>
<p>Suivant votre design, il y a différents moyens d'aligner vos labels.</p>
<demo-block>
        <div><p>L'attribut <code>label-position</code> permet de régler l'alignement, il peut être à <code>top</code> ou <code>left</code>. Quand il est à <code>top</code>, les labels sont placés au-dessus des champs.</p>
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
<p>Le composant Form vous permet d'effectuer des vérifications, afin de détecter et corriger les erreurs facilement.</p>
<demo-block>
        <div><p>Ajoutez l'attribut <code>rules</code> au composant <code>Form</code>, passez les règles de validation, et configurez l'attribut <code>prop</code> de <code>Form-Item</code> pour ajouter la clé de la règle correspondante au champ. Plus d'informations ici:  <a href="https://github.com/yiminghe/async-validator">async-validator</a>.</p>
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
        &lt;el-date-picker type=&quot;date&quot; placeholder=&quot;Choisissez une date&quot; v-model=&quot;ruleForm.date1&quot; style=&quot;width: 100%;&quot;&gt;&lt;/el-date-picker&gt;
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
    &lt;el-button type=&quot;primary&quot; @click=&quot;submitForm('ruleForm')&quot;&gt;Créer&lt;/el-button&gt;
    &lt;el-button @click=&quot;resetForm('ruleForm')&quot;&gt;Réinitialiser&lt;/el-button&gt;
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
</code></pre></template></demo-block><h3 id="validations-personnalisees"><a class="header-anchor" href="#validations-personnalisees">¶</a> Validations personnalisées</h3>
<p>Cet exemple montre comment vous pouvez personnaliser vos règles de validation pour effectuer une identification à deux facteurs.</p>
<demo-block>
        <div><p>Ici, nous utilisons <code>status-icon</code> pour afficher le résultat de la validation sous forme d'icône.</p>
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
    &lt;el-button @click=&quot;resetForm('ruleForm')&quot;&gt;Réinitialiser&lt;/el-button&gt;
  &lt;/el-form-item&gt;
&lt;/el-form&gt;
&lt;script&gt;
  export default {
    data() {
      var checkAge = (rule, value, callback) =&gt; {
        if (!value) {
          return callback(new Error('Veuillez entrer l\'âge'));
        }
        setTimeout(() =&gt; {
          if (!Number.isInteger(value)) {
            callback(new Error('Veuillez entrer des chiffres'));
          } else {
            if (value &lt; 18) {
              callback(new Error('L\'âge doit être supérieur à 18 ans'));
            } else {
              callback();
            }
          }
        }, 1000);
      };
      var validatePass = (rule, value, callback) =&gt; {
        if (value === '') {
          callback(new Error('Veuillez entrer le mot de passe'));
        } else {
          if (this.ruleForm.checkPass !== '') {
            this.$refs.ruleForm.validateField('checkPass');
          }
          callback();
        }
      };
      var validatePass2 = (rule, value, callback) =&gt; {
        if (value === '') {
          callback(new Error('Veuillez entrer à nouveau le mot de passe'));
        } else if (value !== this.ruleForm.pass) {
          callback(new Error('Les deux entrées ne correspondent pas!'));
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
<p>Les callback de validations personnalisées doivent être appelées. Un usage plus avancé se trouve ici: <a href="https://github.com/yiminghe/async-validator">async-validator</a>.</p>
</div>
<h3 id="ajouter-ou-supprimer-des-champs-dynamiquement"><a class="header-anchor" href="#ajouter-ou-supprimer-des-champs-dynamiquement">¶</a> Ajouter ou supprimer des champs dynamiquement</h3>
<demo-block>
        <div><p>En plus de pouvoir passer toutes les règles de validation en une seule fois au formulaire, vous pouvez aussi ajouter ou supprimer des règles sur un seul champ de manière dynamique.</p>
</div>
        <template slot="source"><element-demo5 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;el-form :model=&quot;dynamicValidateForm&quot; ref=&quot;dynamicValidateForm&quot; label-width=&quot;120px&quot; class=&quot;demo-dynamic&quot;&gt;
  &lt;el-form-item
    prop=&quot;email&quot;
    label=&quot;Email&quot;
    :rules=&quot;[
      { required: true, message: 'Veuillez entrer l\'adresse e-mail', trigger: 'blur' },
      { type: 'email', message: 'Veuillez entrer une adresse e-mail valide', trigger: ['blur', 'change'] }
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
      required: true, message: 'domain ne peut pas être null', trigger: 'blur'
    }&quot;
  &gt;
    &lt;el-input v-model=&quot;domain.value&quot;&gt;&lt;/el-input&gt;&lt;el-button @click.prevent=&quot;removeDomain(domain)&quot;&gt;Supprimer&lt;/el-button&gt;
  &lt;/el-form-item&gt;
  &lt;el-form-item&gt;
    &lt;el-button type=&quot;primary&quot; @click=&quot;submitForm('dynamicValidateForm')&quot;&gt;Soumettre&lt;/el-button&gt;
    &lt;el-button @click=&quot;addDomain&quot;&gt;Nouveau domaine&lt;/el-button&gt;
    &lt;el-button @click=&quot;resetForm('dynamicValidateForm')&quot;&gt;Réinitialiser&lt;/el-button&gt;
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
</code></pre></template></demo-block><h3 id="validation-des-nombres"><a class="header-anchor" href="#validation-des-nombres">¶</a> Validation des nombres</h3>
<demo-block>
        <div><p>Pour valider les nombres correctement, il vous faudra ajouter le modificateur <code>.number</code> à l'attribut <code>v-model</code>. Il est utilisé par Vuejs pour transformer les valeurs en nombres .</p>
</div>
        <template slot="source"><element-demo6 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;el-form :model=&quot;numberValidateForm&quot; ref=&quot;numberValidateForm&quot; label-width=&quot;100px&quot; class=&quot;demo-ruleForm&quot;&gt;
  &lt;el-form-item
    label=&quot;age&quot;
    prop=&quot;age&quot;
    :rules=&quot;[
      { required: true, message: 'l\'âge est requis'},
      { type: 'number', message: 'l\'âge doit être un nombre'}
    ]&quot;
  &gt;
    &lt;el-input type=&quot;age&quot; v-model.number=&quot;numberValidateForm.age&quot; autocomplete=&quot;off&quot;&gt;&lt;/el-input&gt;
  &lt;/el-form-item&gt;
  &lt;el-form-item&gt;
    &lt;el-button type=&quot;primary&quot; @click=&quot;submitForm('numberValidateForm')&quot;&gt;Soumettre&lt;/el-button&gt;
    &lt;el-button @click=&quot;resetForm('numberValidateForm')&quot;&gt;Réinitialiser&lt;/el-button&gt;
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
<p>Lorsqu'un <code>el-form-item</code> est imbriqué dans un autre <code>el-form-item</code>, la largeur de son label sera <code>0</code>. Utilisez <code>label-width</code> sur ce <code>el-form-item</code> si besoin.</p>
</div>
<h3 id="taille"><a class="header-anchor" href="#taille">¶</a> Taille</h3>
<p>Tout les composants d'un formulaire héritent leur attribut <code>size</code> de ce formulaire. Il est aussi possible de l'utiliser individuellement sur chaque FormItem.</p>
<demo-block>
        <div><p>Vous pouvez régler le <code>size</code> de chaque item si vous ne souhaitez pas qu'il hérite de son parent.</p>
</div>
        <template slot="source"><element-demo7 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;el-form ref=&quot;form&quot; :model=&quot;sizeForm&quot; label-width=&quot;120px&quot; size=&quot;mini&quot;&gt;
  &lt;el-form-item label=&quot;Activity name&quot;&gt;
    &lt;el-input v-model=&quot;sizeForm.name&quot;&gt;&lt;/el-input&gt;
  &lt;/el-form-item&gt;
  &lt;el-form-item label=&quot;Activity zone&quot;&gt;
    &lt;el-select v-model=&quot;sizeForm.region&quot; placeholder=&quot;veuillez sélectionner votre zone&quot;&gt;
      &lt;el-option label=&quot;Zone one&quot; value=&quot;shanghai&quot;&gt;&lt;/el-option&gt;
      &lt;el-option label=&quot;Zone two&quot; value=&quot;beijing&quot;&gt;&lt;/el-option&gt;
    &lt;/el-select&gt;
  &lt;/el-form-item&gt;
  &lt;el-form-item label=&quot;Activity time&quot;&gt;
    &lt;el-col :span=&quot;11&quot;&gt;
      &lt;el-date-picker type=&quot;date&quot; placeholder=&quot;Choisissez une date&quot; v-model=&quot;sizeForm.date1&quot; style=&quot;width: 100%;&quot;&gt;&lt;/el-date-picker&gt;
    &lt;/el-col&gt;
    &lt;el-col class=&quot;line&quot; :span=&quot;2&quot;&gt;-&lt;/el-col&gt;
    &lt;el-col :span=&quot;11&quot;&gt;
      &lt;el-time-picker placeholder=&quot;Choisissez une heure&quot; v-model=&quot;sizeForm.date2&quot; style=&quot;width: 100%;&quot;&gt;&lt;/el-time-picker&gt;
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
    &lt;el-button type=&quot;primary&quot; @click=&quot;onSubmit&quot;&gt;Créer&lt;/el-button&gt;
    &lt;el-button&gt;Annuler&lt;/el-button&gt;
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
</code></pre></template></demo-block><h3 id="attributs-de-form"><a class="header-anchor" href="#attributs-de-form">¶</a> Attributs de Form</h3>
<table>
<thead>
<tr>
<th>Attribut</th>
<th>Description</th>
<th>Type</th>
<th>Valeurs acceptées</th>
<th>Défaut</th>
</tr>
</thead>
<tbody>
<tr>
<td>model</td>
<td>Données du formulaire.</td>
<td>object</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>rules</td>
<td>Règles de validation du formulaire.</td>
<td>object</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>inline</td>
<td>Si le formulaire est horizontal.</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>label-position</td>
<td>Position des labels. Si 'left' ou 'right', <code>label-width</code> est aussi requis.</td>
<td>string</td>
<td>left / right / top</td>
<td>right</td>
</tr>
<tr>
<td>label-width</td>
<td>Largeur des labels, tout les enfants directs hériteront de cette valeur. La largeur <code>auto</code> est supportée.</td>
<td>string</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>label-suffix</td>
<td>Suffixe de labels.</td>
<td>string</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>hide-required-asterisk</td>
<td>Si les champs obligatoires doivent avoir une astérisque rouge (étoile) à coté de leurs labels.</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>show-message</td>
<td>Si le message d'erreur doit apparaître.</td>
<td>boolean</td>
<td>—</td>
<td>true</td>
</tr>
<tr>
<td>inline-message</td>
<td>Si le message d'erreur doit apparaître en ligne avec son champ.</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>status-icon</td>
<td>Si une icône indiquant le résultat de validation doit apparaître.</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>validate-on-rule-change</td>
<td>Si la validation doit se déclencher lorsque <code>rules</code> est modifié.</td>
<td>boolean</td>
<td>—</td>
<td>true</td>
</tr>
<tr>
<td>size</td>
<td>Contrôle la taille des champs du formulaire.</td>
<td>string</td>
<td>medium / small / mini</td>
<td>—</td>
</tr>
<tr>
<td>disabled</td>
<td>Si tout les champs du formulaire doivent être désactivés. Si <code>true</code>, il ne peut pas être modifié par l'attribut <code>disabled</code> des enfants.</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
</tbody>
</table>
<h3 id="methodes-de-form"><a class="header-anchor" href="#methodes-de-form">¶</a> Méthodes de Form</h3>
<table>
<thead>
<tr>
<th>Méthode</th>
<th>Description</th>
<th>Paramètres</th>
</tr>
</thead>
<tbody>
<tr>
<td>validate</td>
<td>Valide le formulaire. Prends une callback en paramètre. Après la validation, la callback est exécutée avec deux paramètres: un boolean indiquant si la validation est bonne, et un objet contenant tout les champs qui ont échoués. Retourne une promesse si aucune callback n'est passée.</td>
<td>Function(callback: Function(boolean, object))</td>
</tr>
<tr>
<td>validateField</td>
<td>Valide un ou plusieurs champs du formulaire.</td>
<td>Function(props: string | array, callback: Function(errorMessage: string))</td>
</tr>
<tr>
<td>resetFields</td>
<td>Efface tout les champs et les résultats de validation.</td>
<td>—</td>
</tr>
<tr>
<td>clearValidate</td>
<td>Efface les messages de validation de certains champs. Le paramètre est le nom du champ ou une liste des champs concernés. S'il est omis, tout les champs seront concernés.</td>
<td>Function(props: string | array)</td>
</tr>
</tbody>
</table>
<h3 id="evennements-de-form"><a class="header-anchor" href="#evennements-de-form">¶</a> Évènnements de Form</h3>
<table>
<thead>
<tr>
<th>Nom</th>
<th>Description</th>
<th>Paramètres</th>
</tr>
</thead>
<tbody>
<tr>
<td>validate</td>
<td>Se déclenche après la validation d'un champ.</td>
<td>Nom du champs qui a été validé, si la validation est bonne et le message d'erreur sinon.</td>
</tr>
</tbody>
</table>
<h3 id="attributs-de-formitem"><a class="header-anchor" href="#attributs-de-formitem">¶</a> Attributs de FormItem</h3>
<table>
<thead>
<tr>
<th>Attribut</th>
<th>Description</th>
<th>Type</th>
<th>Valeurs acceptées</th>
<th>Défaut</th>
</tr>
</thead>
<tbody>
<tr>
<td>prop</td>
<td>Une des clés de <code>model</code>. Utilisés par les méthodes validate et resetFields. Requis.</td>
<td>string</td>
<td>Clés du model passé à <code>form</code>.</td>
<td></td>
</tr>
<tr>
<td>label</td>
<td>Le label.</td>
<td>string</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>label-width</td>
<td>Largeur du label, e.g. '50px'. La largeur <code>auto</code> est supportée.</td>
<td>string</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>required</td>
<td>Si le champ est requis ou non. Si omis, sera déterminé par les règles de validation.</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>rules</td>
<td>Règles de validation du formulaire.</td>
<td>object</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>error</td>
<td>Message d'erreur du champ. S'il est modifié, le champ l'affichera immédiatement.</td>
<td>string</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>show-message</td>
<td>Si le message d'erreur doit apparaître.</td>
<td>boolean</td>
<td>—</td>
<td>true</td>
</tr>
<tr>
<td>inline-message</td>
<td>Si le message d'erreur doit être en ligne avec le champ.</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>size</td>
<td>Contrôle la taille du FormItem.</td>
<td>string</td>
<td>medium / small / mini</td>
<td>-</td>
</tr>
</tbody>
</table>
<h3 id="slot-de-form-item"><a class="header-anchor" href="#slot-de-form-item">¶</a> Slot de Form-Item</h3>
<table>
<thead>
<tr>
<th>Nom</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>—</td>
<td>Contenu de Form Item.</td>
</tr>
<tr>
<td>label</td>
<td>Contenu du label.</td>
</tr>
</tbody>
</table>
<h3 id="slot-avec-portee-de-form-item"><a class="header-anchor" href="#slot-avec-portee-de-form-item">¶</a> Slot avec portée de Form-Item</h3>
<table>
<thead>
<tr>
<th>Nom</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>error</td>
<td>Contenu personnalisé pour les messages de validation. Le paramètre du scope est { error }.</td>
</tr>
</tbody>
</table>
<h3 id="methodes-de-form-item"><a class="header-anchor" href="#methodes-de-form-item">¶</a> Méthodes de Form-Item</h3>
<table>
<thead>
<tr>
<th>Méthode</th>
<th>Description</th>
<th>Paramètres</th>
</tr>
</thead>
<tbody>
<tr>
<td>resetField</td>
<td>Efface le champ et les résultats de validation.</td>
<td>—</td>
</tr>
<tr>
<td>clearValidate</td>
<td>Efface le status de validation du champ.</td>
<td>-</td>
</tr>
</tbody>
</table>
