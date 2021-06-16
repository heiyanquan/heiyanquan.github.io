<h2 id="messagebox"><a class="header-anchor" href="#messagebox">¶</a> MessageBox</h2>
<p>Un conjunto de cajas modales simulando un sistema de message box, principalmente para alertar información, confirmar operaciones y  mostrar mensajes de aviso.</p>
<div class="tip">
<p>Por diseño los message box nos proveen de simulaciones de sistemas como los componentes <code>alert</code>, <code>confirm</code> y <code>prompt</code>，entonces su contenido debería ser simple. para contenido mas complejo, por favor utilice el componente Dialog.</p>
</div>
<h3 id="alert"><a class="header-anchor" href="#alert">¶</a> Alert</h3>
<p>Alert interrumpe las operaciones realizadas hasta que el usuario confirme la alerta.</p>
<demo-block>
        <div><p>Desplegar una alerta utilizando el método <code>$alert</code>. Simula el sistema <code>alert</code>, y no puede ser cerrado al presionar la tecla ESC o al dar clic fuera de la caja. En este ejemplo, dos parámetros son recibidos <code>message</code> y <code>title</code>. Vale la pena mencionar que cuando la caja es cerrada, regresa un objeto <code>Promise</code> para su procesamiento posteriormente. Si no estas seguro si el navegador soporta <code>Promise</code>, deberías importar una librería de terceros de polyfill o utilizar callbacks.</p>
</div>
        <!--element-demo: <template>
  <el-button type="text" @click="open">Click to open the Message Box</el-button>
</template>

<script>
  export default {
    methods: {
      open() {
        this.$alert('This is a message', 'Title', {
          confirmButtonText: 'OK',
          callback: action => {
            this.$message({
              type: 'info',
              message: `action: ${ action }`
            });
          }
        });
      }
    }
  }
</script>
:element-demo-->
        <template slot="highlight"><pre v-pre><code class="html">&lt;template&gt;
  &lt;el-button type=&quot;text&quot; @click=&quot;open&quot;&gt;Click to open the Message Box&lt;/el-button&gt;
&lt;/template&gt;

&lt;script&gt;
  export default {
    methods: {
      open() {
        this.$alert('This is a message', 'Title', {
          confirmButtonText: 'OK',
          callback: action =&gt; {
            this.$message({
              type: 'info',
              message: `action: ${ action }`
            });
          }
        });
      }
    }
  }
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="confirm"><a class="header-anchor" href="#confirm">¶</a> Confirm</h3>
<p>Confirm es utilizado para preguntar al usuario y recibir una confirmación.</p>
<demo-block>
        <div><p>Llamando al método <code>$confirm</code> para abrir el componente confirm, y simula el sistema <code>confirm</code>. También podemos personalizar a gran medida el componente Message Box al mandar un tercer atributo llamado <code>options</code> que es literalmente un objeto. El atributo <code>type</code> indica el tipo de mensaje, y su valor puede ser <code>success</code>, <code>error</code>, <code>info</code> y <code>warning</code>. Se debe tener en cuenta que el segundo atributo <code>title</code> debe ser de tipo <code>string</code>, y si es de tipo <code>object</code>, sera manejado como el atributo <code>options</code>. Aquí utilizamos <code>Promise</code> para manejar posteriormente el proceso.</p>
</div>
        <!--element-demo: <template>
  <el-button type="text" @click="open">Click to open the Message Box</el-button>
</template>

<script>
  export default {
    methods: {
      open() {
        this.$confirm('This will permanently delete the file. Continue?', 'Warning', {
          confirmButtonText: 'OK',
          cancelButtonText: 'Cancel',
          type: 'warning'
        }).then(() => {
          this.$message({
            type: 'success',
            message: 'Delete completed'
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: 'Delete canceled'
          });          
        });
      }
    }
  }
</script>
:element-demo-->
        <template slot="highlight"><pre v-pre><code class="html">&lt;template&gt;
  &lt;el-button type=&quot;text&quot; @click=&quot;open&quot;&gt;Click to open the Message Box&lt;/el-button&gt;
&lt;/template&gt;

&lt;script&gt;
  export default {
    methods: {
      open() {
        this.$confirm('This will permanently delete the file. Continue?', 'Warning', {
          confirmButtonText: 'OK',
          cancelButtonText: 'Cancel',
          type: 'warning'
        }).then(() =&gt; {
          this.$message({
            type: 'success',
            message: 'Delete completed'
          });
        }).catch(() =&gt; {
          this.$message({
            type: 'info',
            message: 'Delete canceled'
          });          
        });
      }
    }
  }
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="prompt"><a class="header-anchor" href="#prompt">¶</a> Prompt</h3>
<p>Prompt es utilizado cuando se requiere entrada de información del usuario.</p>
<demo-block>
        <div><p>Llamando al método <code>$prompt</code> desplegamos el componente prompt, y simula el sistema <code>prompt</code>.Puedes utilizar el parámetro <code>inputPattern</code> para especificar tu propio patrón RegExp. Utiliza el parámetro <code>inputValidator</code> para especificar el método de validación, y debería regresar un valor de tipo <code>Boolean</code> o <code>String</code>. Al regresar <code>false</code> o <code>String</code> significa que la validación a fallado, y la cadena regresada se usara como <code>inputErrorMessage</code>. Ademas, puedes personalizar el atributo placeholder del input box con el parámetro <code>inputPlaceholder</code>.</p>
</div>
        <!--element-demo: <template>
  <el-button type="text" @click="open">Click to open Message Box</el-button>
</template>

<script>
  export default {
    methods: {
      open() {
        this.$prompt('Please input your e-mail', 'Tip', {
          confirmButtonText: 'OK',
          cancelButtonText: 'Cancel',
          inputPattern: /[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/,
          inputErrorMessage: 'Invalid Email'
        }).then(({ value }) => {
          this.$message({
            type: 'success',
            message: 'Your email is:' + value
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: 'Input canceled'
          });       
        });
      }
    }
  }
</script>
:element-demo-->
        <template slot="highlight"><pre v-pre><code class="html">&lt;template&gt;
  &lt;el-button type=&quot;text&quot; @click=&quot;open&quot;&gt;Click to open Message Box&lt;/el-button&gt;
&lt;/template&gt;

&lt;script&gt;
  export default {
    methods: {
      open() {
        this.$prompt('Please input your e-mail', 'Tip', {
          confirmButtonText: 'OK',
          cancelButtonText: 'Cancel',
          inputPattern: /[\w!#$%&amp;'*+/=?^_`{|}~-]+(?:\.[\w!#$%&amp;'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/,
          inputErrorMessage: 'Invalid Email'
        }).then(({ value }) =&gt; {
          this.$message({
            type: 'success',
            message: 'Your email is:' + value
          });
        }).catch(() =&gt; {
          this.$message({
            type: 'info',
            message: 'Input canceled'
          });       
        });
      }
    }
  }
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="personalizacion"><a class="header-anchor" href="#personalizacion">¶</a> Personalización</h3>
<p>Puede ser personalizado para mostrar diversos contenidos.</p>
<demo-block>
        <div><p>Los tres métodos mencionados anteriormente son un rempaquetado del método <code>$msgbox</code>. En este ejemplo se realiza una llamada al método <code>$msgbox</code> directamente utilizando el atributo <code>showCancelButton</code>, el cual es utilizado para indicar si el botón cancelar es mostrado en pantalla. Además podemos utilizar el atributo <code>cancelButtonClass</code> para agregar un estilo personalizado y el atributo <code>cancelButtonText</code> para personalizar el texto del botón (el botón de confirmación también cuenta con estos campos, y podrá encontrar una lista completa de estos atributos al final de esta documentación). Este ejemplo también utiliza el atributo <code>beforeClose</code>. Es un método que es disparado cuando una instancia del componente MessageBox es cerrada, y su ejecución detendrá el cierre de la instancia. Tiene tres parámetros: <code>action</code>, <code>instance</code> y <code>done</code>. Al utilizarla te permite manipular la instancia antes de que sea cerrada, e.g. activando <code>loading</code> para el botón de confirmación; puede invocar el método <code>done</code> para cerrar la instancia del componente MessageBox  (si el método <code>done</code> no es llamado dentro del atributo <code>beforeClose</code>, la instancia no podrá cerrarse).</p>
</div>
        <!--element-demo: <template>
  <el-button type="text" @click="open">Click to open Message Box</el-button>
</template>

<script>
  export default {
    methods: {
      open() {
        const h = this.$createElement;
        this.$msgbox({
          title: 'Message',
          message: h('p', null, [
            h('span', null, 'Message can be '),
            h('i', { style: 'color: teal' }, 'VNode')
          ]),
          showCancelButton: true,
          confirmButtonText: 'OK',
          cancelButtonText: 'Cancel',
          beforeClose: (action, instance, done) => {
            if (action === 'confirm') {
              instance.confirmButtonLoading = true;
              instance.confirmButtonText = 'Loading...';
              setTimeout(() => {
                done();
                setTimeout(() => {
                  instance.confirmButtonLoading = false;
                }, 300);
              }, 3000);
            } else {
              done();
            }
          }
        }).then(action => {
          this.$message({
            type: 'info',
            message: 'action: ' + action
          });
        });
      },
    }
  }
</script>
:element-demo-->
        <template slot="highlight"><pre v-pre><code class="html">&lt;template&gt;
  &lt;el-button type=&quot;text&quot; @click=&quot;open&quot;&gt;Click to open Message Box&lt;/el-button&gt;
&lt;/template&gt;

&lt;script&gt;
  export default {
    methods: {
      open() {
        const h = this.$createElement;
        this.$msgbox({
          title: 'Message',
          message: h('p', null, [
            h('span', null, 'Message can be '),
            h('i', { style: 'color: teal' }, 'VNode')
          ]),
          showCancelButton: true,
          confirmButtonText: 'OK',
          cancelButtonText: 'Cancel',
          beforeClose: (action, instance, done) =&gt; {
            if (action === 'confirm') {
              instance.confirmButtonLoading = true;
              instance.confirmButtonText = 'Loading...';
              setTimeout(() =&gt; {
                done();
                setTimeout(() =&gt; {
                  instance.confirmButtonLoading = false;
                }, 300);
              }, 3000);
            } else {
              done();
            }
          }
        }).then(action =&gt; {
          this.$message({
            type: 'info',
            message: 'action: ' + action
          });
        });
      },
    }
  }
&lt;/script&gt;
</code></pre></template></demo-block><div class="tip">
<p>El contenido de MessageBox puede ser <code>VNode</code>, permitiéndonos pasar componentes personalizados. Al abrir el MessageBox, Vue compara el nuevo <code>VNode</code> con el viejo <code>VNode</code>, y luego averigua cómo actualizar eficientemente la interfaz de usuario, de modo que es posible que los componentes no se vuelvan a procesar completamente (<a href="https://github.com/ElemeFE/element/issues/8931">#8931</a>). En este caso, se puede añadir una clave única a <code>VNode</code> cada vez que se abre MessageBox: <a href="https://jsfiddle.net/zhiyang/ezmhq2ef">ejemplo</a>.</p>
</div>
<h3 id="utiliza-cadenas-html"><a class="header-anchor" href="#utiliza-cadenas-html">¶</a> Utiliza cadenas HTML</h3>
<p><code>message</code> soporta cadenas HTML.</p>
<demo-block>
        <div><p>Establezca el valor de <code>dangerouslyUseHTMLString</code> a true y <code>message</code> sera tratado como una cadena HTML.</p>
</div>
        <!--element-demo: <template>
  <el-button type="text" @click="open">Click to open Message Box</el-button>
</template>

<script>
  export default {
    methods: {
      open() {
        this.$alert('<strong>This is <i>HTML</i> string</strong>', 'HTML String', {
          dangerouslyUseHTMLString: true
        });
      }
    }
  }
</script>
:element-demo-->
        <template slot="highlight"><pre v-pre><code class="html">&lt;template&gt;
  &lt;el-button type=&quot;text&quot; @click=&quot;open&quot;&gt;Click to open Message Box&lt;/el-button&gt;
&lt;/template&gt;

&lt;script&gt;
  export default {
    methods: {
      open() {
        this.$alert('&lt;strong&gt;This is &lt;i&gt;HTML&lt;/i&gt; string&lt;/strong&gt;', 'HTML String', {
          dangerouslyUseHTMLString: true
        });
      }
    }
  }
&lt;/script&gt;
</code></pre></template></demo-block><div class="warning">
<p>Aunque la propiedad <code>message</code> soporta cadenas HTML, realizar arbitrariamente render dinámico de HTML en nuestro sitio web puede ser muy peligroso ya que puede conducir fácilmente a <a href="https://en.wikipedia.org/wiki/Cross-site_scripting">XSS attacks</a>. Entonces cuando <code>dangerouslyUseHTMLString</code> esta activada, asegúrese que el contenido de <code>message</code> sea de confianza, y <strong>nunca</strong> asignar <code>message</code> a contenido generado por el usuario.</p>
</div>
<h3 id="distinguir-entre-cancelar-y-cerrar"><a class="header-anchor" href="#distinguir-entre-cancelar-y-cerrar">¶</a> Distinguir entre cancelar y cerrar</h3>
<p>En algunos casos, hacer clic en el botón Cancelar y en el botón Cerrar puede tener diferentes significados.</p>
<demo-block>
        <div><p>Por defecto, los parámetros de <code>Promise's reject callback</code> y <code>callback</code> son <code>cancel</code> cuando el usuario cancela (haciendo clic en el botón de cancelación)  y cierra  (haciendo clic en el botón de cerrar o en la capa de máscara, pulsando la tecla ESC) el MessageBox. Si <code>distinguishCancelAndClose</code> está ajustado a <code>true</code>, los parámetros de las dos operaciones anteriores son <code>cancel</code> y <code>close</code> respectivamente.</p>
</div>
        <!--element-demo: <template>
  <el-button type="text" @click="open">Click to open Message Box</el-button>
</template>

<script>
  export default {
    methods: {
      open() {
        this.$confirm('You have unsaved changes, save and proceed?', 'Confirm', {
          distinguishCancelAndClose: true,
          confirmButtonText: 'Save',
          cancelButtonText: 'Discard Changes'
        })
          .then(() => {
            this.$message({
              type: 'info',
              message: 'Changes saved. Proceeding to a new route.'
            });
          })
          .catch(action => {
            this.$message({
              type: 'info',
              message: action === 'cancel'
                ? 'Changes discarded. Proceeding to a new route.'
                : 'Stay in the current route'
            })
          });
      }
    }
  }
</script>
:element-demo-->
        <template slot="highlight"><pre v-pre><code class="html">&lt;template&gt;
  &lt;el-button type=&quot;text&quot; @click=&quot;open&quot;&gt;Click to open Message Box&lt;/el-button&gt;
&lt;/template&gt;

&lt;script&gt;
  export default {
    methods: {
      open() {
        this.$confirm('You have unsaved changes, save and proceed?', 'Confirm', {
          distinguishCancelAndClose: true,
          confirmButtonText: 'Save',
          cancelButtonText: 'Discard Changes'
        })
          .then(() =&gt; {
            this.$message({
              type: 'info',
              message: 'Changes saved. Proceeding to a new route.'
            });
          })
          .catch(action =&gt; {
            this.$message({
              type: 'info',
              message: action === 'cancel'
                ? 'Changes discarded. Proceeding to a new route.'
                : 'Stay in the current route'
            })
          });
      }
    }
  }
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="contenido-centrado"><a class="header-anchor" href="#contenido-centrado">¶</a> Contenido centrado</h3>
<p>El contenido del componente MessageBox puede ser centrado.</p>
<demo-block>
        <div><p>Establecer <code>center</code> a <code>true</code> centrara el contenido</p>
</div>
        <!--element-demo: <template>
  <el-button type="text" @click="open">Click to open Message Box</el-button>
</template>

<script>
  export default {
    methods: {
      open() {
        this.$confirm('This will permanently delete the file. Continue?', 'Warning', {
          confirmButtonText: 'OK',
          cancelButtonText: 'Cancel',
          type: 'warning',
          center: true
        }).then(() => {
          this.$message({
            type: 'success',
            message: 'Delete completed'
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: 'Delete canceled'
          });
        });
      }
    }
  }
</script>
:element-demo-->
        <template slot="highlight"><pre v-pre><code class="html">&lt;template&gt;
  &lt;el-button type=&quot;text&quot; @click=&quot;open&quot;&gt;Click to open Message Box&lt;/el-button&gt;
&lt;/template&gt;

&lt;script&gt;
  export default {
    methods: {
      open() {
        this.$confirm('This will permanently delete the file. Continue?', 'Warning', {
          confirmButtonText: 'OK',
          cancelButtonText: 'Cancel',
          type: 'warning',
          center: true
        }).then(() =&gt; {
          this.$message({
            type: 'success',
            message: 'Delete completed'
          });
        }).catch(() =&gt; {
          this.$message({
            type: 'info',
            message: 'Delete canceled'
          });
        });
      }
    }
  }
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="metodos-globales"><a class="header-anchor" href="#metodos-globales">¶</a> Métodos Globales</h3>
<p>Si Element fue importado completamente, agregara los siguientes métodos globales para Vue.prototype: <code>$msgbox</code>, <code>$alert</code>, <code>$confirm</code> y <code>$prompt</code>. Así que en una instancia de Vue puedes llamar el método <code>MessageBox</code> como lo que hicimos en esta pagina. Los parámetros son:</p>
<ul>
<li><code>$msgbox(options)</code></li>
<li><code>$alert(message, title, options)</code> or <code>$alert(message, options)</code></li>
<li><code>$confirm(message, title, options)</code> or <code>$confirm(message, options)</code></li>
<li><code>$prompt(message, title, options)</code> or <code>$prompt(message, options)</code></li>
</ul>
<h3 id="importacion-local"><a class="header-anchor" href="#importacion-local">¶</a> Importación local</h3>
<p>Si prefieres importar <code>MessageBox</code> cuando lo necesites (on demand):</p>
<pre><code class="language-javascript">import { MessageBox } from 'element-ui';
</code></pre>
<p>Los métodos correspondientes: <code>MessageBox</code>, <code>MessageBox.alert</code>, <code>MessageBox.confirm</code> y <code>MessageBox.prompt</code>. Los parámetros son los mismos que los anteriores.</p>
<h3 id="opciones"><a class="header-anchor" href="#opciones">¶</a> Opciones</h3>
<table>
<thead>
<tr>
<th>Atributo</th>
<th>Descripción</th>
<th>Tipo</th>
<th>Valores Permitidos</th>
<th>Por defecto</th>
</tr>
</thead>
<tbody>
<tr>
<td>title</td>
<td>titulo del componente MessageBox</td>
<td>string</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>message</td>
<td>contenido del componente MessageBox</td>
<td>string</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>dangerouslyUseHTMLString</td>
<td>utilizado para que <code>message</code> sea tratado como una cadena HTML</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>type</td>
<td>tipo de mensaje , utilizado para mostrar el  icono</td>
<td>string</td>
<td>success / info / warning / error</td>
<td>—</td>
</tr>
<tr>
<td>iconClass</td>
<td>clase personalizada para el icono, sobrescribe <code>type</code></td>
<td>string</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>customClass</td>
<td>nombre de la clase personalizada para el componente MessageBox</td>
<td>string</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>callback</td>
<td>MessageBox callback al cerrar si no desea utilizar Promise</td>
<td>function(action), donde la accion puede ser 'confirm', 'cancel' o 'close', e <code>instance</code>  es la instancia del componente MessageBox. Puedes acceder a los metodos y atributos de esa instancia</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>beforeClose</td>
<td>callback llamado antes de cerrar el componente MessageBox, y previene que el componente MessageBox se cierre</td>
<td>function(action, instance, done), donde <code>action</code> pueden ser 'confirm', 'cancel' o 'close'; <code>instance</code> es la instancia del componente MessageBox, Puedes acceder a los metodos y atributos de esa instancia; <code>done</code> es para cerrar la instancia</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>distinguishCancelAndClose</td>
<td>si se debe distinguir entre cancelar y cerrar</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>lockScroll</td>
<td>utilizado para bloquear el desplazamiento del contenido del MessageBox prompts</td>
<td>boolean</td>
<td>—</td>
<td>true</td>
</tr>
<tr>
<td>showCancelButton</td>
<td>utilizado para mostrar un botón cancelar</td>
<td>boolean</td>
<td>—</td>
<td>false (true cuando es llamado con confirm y prompt)</td>
</tr>
<tr>
<td>showConfirmButton</td>
<td>utilizado para mostrar un botón confirmar</td>
<td>boolean</td>
<td>—</td>
<td>true</td>
</tr>
<tr>
<td>cancelButtonText</td>
<td>contenido de texto del botón cancelar</td>
<td>string</td>
<td>—</td>
<td>Cancel</td>
</tr>
<tr>
<td>confirmButtonText</td>
<td>contenido de texto del botón confirmar</td>
<td>string</td>
<td>—</td>
<td>OK</td>
</tr>
<tr>
<td>cancelButtonClass</td>
<td>nombre de la clase personalizada del botón cancelar</td>
<td>string</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>confirmButtonClass</td>
<td>nombre de la clase personalizada del botón confirmar</td>
<td>string</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>closeOnClickModal</td>
<td>utilizado para que que el componente MessageBox pueda ser cerrado al dar clic en la mascara</td>
<td>boolean</td>
<td>—</td>
<td>true (false cuando es llamado con alert)</td>
</tr>
<tr>
<td>closeOnPressEscape</td>
<td>utilizado para que que el componente MessageBox pueda ser cerrado al presionar la tecla ESC</td>
<td>boolean</td>
<td>—</td>
<td>true (false cuando es llamado con alert)</td>
</tr>
<tr>
<td>closeOnHashChange</td>
<td>utilizado para cerra el componente MessageBox cuando hash cambie</td>
<td>boolean</td>
<td>—</td>
<td>true</td>
</tr>
<tr>
<td>showInput</td>
<td>utilizado para mostrar el componente input</td>
<td>boolean</td>
<td>—</td>
<td>false (true cuando es llamado con prompt)</td>
</tr>
<tr>
<td>inputPlaceholder</td>
<td>placeholder para el componente input</td>
<td>string</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>inputType</td>
<td>tipo del componente input</td>
<td>string</td>
<td>—</td>
<td>text</td>
</tr>
<tr>
<td>inputValue</td>
<td>valor inicial del componente input</td>
<td>string</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>inputPattern</td>
<td>regexp del componente input</td>
<td>regexp</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>inputValidator</td>
<td>función de validación del componente input. Debe regresar un valor de tipo boolean o string. Si regresa un valor tipo string, sera asignado a inputErrorMessage</td>
<td>function</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>inputErrorMessage</td>
<td>mensaje de error cuando la validación falla</td>
<td>string</td>
<td>—</td>
<td>Illegal input</td>
</tr>
<tr>
<td>center</td>
<td>utilizado para alinear el contenido al centro</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>roundButton</td>
<td>utilizado para redondear el botón</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
</tbody>
</table>
