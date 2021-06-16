<h2 id="tema-personalizado"><a class="header-anchor" href="#tema-personalizado">¶</a> Tema personalizado</h2>
<p>Element utiliza la metodología BEM en CSS con la finalidad de que puedas sobrescribir los estilos fácilmente. Pero, si necesita remplazar estilos a gran escala, por ejemplo, cambiar el color del tema de azul a naranja o verde, quizás reemplazarlos uno a uno no sea lo más adecuado, para ello hay 4 maneras de modificar los estilos.</p>
<h3 id="theme-roller"><a class="header-anchor" href="#theme-roller">¶</a> Theme Roller</h3>
<p>Use <a href="./#/es/theme">Online Theme Roller</a> para personalizar el diseño de las  variables globales y componentes, y vea el resultado en tiempo real. Puede generar un completo paquete de estilos basado en un nuevo tema que puede bajar directamente (para importar los archivos del nuevo estilo al proyecto por favor vea la sección 'Importar un tema personalizado').</p>
<p>También puede usar <a href="https://chrome.google.com/webstore/detail/element-theme-roller/lifkjlojflekabbmlddfccdkphlelmim">Theme Roller Chrome Extension</a>, para personalizar un tema y ver el resultado en tiempo real en cualquier sitio desarrollado con Element.<img src="https://shadow.elemecdn.com/app/sns-client/element-theme-editor2.e16c6a01-806d-11e9-bc23-21435c54c509.png" style="width: 100%;margin: 30px auto 0;display: block;"></p>
<h3 id="cambiando-el-color-del-tema"><a class="header-anchor" href="#cambiando-el-color-del-tema">¶</a> Cambiando el color del tema</h3>
<p>Si lo que se busca es cambiar el color del tema de Element, se recomienda utilizar el <a href="https://elementui.github.io/theme-chalk-preview/#/en-US">sitio de visualización de temas</a>. Element utiliza un color azul brillante y amigable como tema principal. Al cambiarlo, puede hacer que Element este más conectado visualmente a proyectos específicos.</p>
<p>Este sitio, le permitirá obtener una vista previa del tema con un nuevo color en tiempo real, y, además, obtener un paquete de estilos completo basado en el nuevo color para su descarga (para importar estos nuevos estilos, consulte la sección ‘Importar un tema personalizado’ o ‘Importar un tema de componente bajo demanda' que se encuentran dentro de esta sección).</p>
<h3 id="actualizando-variables-scss-en-tu-proyecto"><a class="header-anchor" href="#actualizando-variables-scss-en-tu-proyecto">¶</a> Actualizando variables SCSS en tu proyecto</h3>
<p><code>theme-chalk</code> esta escrito en SCSS. Si su proyecto también utiliza SCSS, puede cambiar las variables de estilos de Element. Para ello, solo necesita crear un nuevo archivo de estilos, por ejemplo, <code>element-variables.scss</code>:</p>
<pre><code class="language-html">/* Color del tema */
$--color-primary: teal;

/* Ubicación de la fuente, obligatoria */
$--font-path: '~element-ui/lib/theme-chalk/fonts';

@import &quot;~element-ui/packages/theme-chalk/src/index&quot;;
</code></pre>
<p>Entonces, en el archivo principal del proyecto, importe este archivo de estilos en lugar de los estilos de Element:</p>
<pre><code class="language-JS">import Vue from 'vue'
import Element from 'element-ui'
import './element-variables.scss'

Vue.use(Element)
</code></pre>
<div class="tip">
<p>Nota es necesario sobrescribir la ruta de la fuente por una ruta relativa de las fuentes de Element.</p>
</div>
<h3 id="cli-para-generar-temas"><a class="header-anchor" href="#cli-para-generar-temas">¶</a> CLI para generar temas</h3>
<p>Si su proyecto no utiliza SCSS, puede personalizar el tema a través de esta herramienta:</p>
<h4 id="instalacion"><a class="header-anchor" href="#instalacion">¶</a> <strong>Instalación</strong></h4>
<p>Primero, debe instalar el generador de temas ya sea de forma global o local. Se recomienda instalarlo de forma local, ya que de esta manera, cuando otros clonen su proyecto, npm automáticamente los instalará para ellos.</p>
<pre><code class="language-shell">npm i element-theme -g
</code></pre>
<p>Ahora, instale el tema <code>chalk</code> desde npm o Github.</p>
<pre><code class="language-shell"># desde npm
npm i element-theme-chalk -D

# desde GitHub
npm i https://github.com/ElementUI/theme-chalk -D
</code></pre>
<h4 id="inicializar-archivo-de-variables"><a class="header-anchor" href="#inicializar-archivo-de-variables">¶</a> <strong>Inicializar archivo de variables</strong></h4>
<p>Después de haber instalado correctamente los paquetes, el comando <code>et</code> estará disponible en su CLI (si instalo el paquete de manera local, utilice <code>node_modules/.bin/et</code> en su lugar). Ejecute <code>-i</code> para inicializar un archivo de variables, puede especificar un nombre distinto, pero por defecto, el archivo se llama <code>element-variables.scss</code>. También puede especificar un directorio distinto.</p>
<pre><code class="language-shell">et -i [custom output file]

&gt; ✔ Generator variables file
</code></pre>
<p>En el archivo <code>element-variables.scss</code> podrá encontrar todas las variables que utiliza Element para definir los estilos y estos están definidos en SCSS. Aquí un ejemplo:</p>
<pre><code class="language-css">$--color-primary: #409EFF !default;
$--color-primary-light-1: mix($--color-white, $--color-primary, 10%) !default; /* 53a8ff */
$--color-primary-light-2: mix($--color-white, $--color-primary, 20%) !default; /* 66b1ff */
$--color-primary-light-3: mix($--color-white, $--color-primary, 30%) !default; /* 79bbff */
$--color-primary-light-4: mix($--color-white, $--color-primary, 40%) !default; /* 8cc5ff */
$--color-primary-light-5: mix($--color-white, $--color-primary, 50%) !default; /* a0cfff */
$--color-primary-light-6: mix($--color-white, $--color-primary, 60%) !default; /* b3d8ff */
$--color-primary-light-7: mix($--color-white, $--color-primary, 70%) !default; /* c6e2ff */
$--color-primary-light-8: mix($--color-white, $--color-primary, 80%) !default; /* d9ecff */
$--color-primary-light-9: mix($--color-white, $--color-primary, 90%) !default; /* ecf5ff */

$--color-success: #67c23a !default;
$--color-warning: #e6a23c !default;
$--color-danger: #f56c6c !default;
$--color-info: #909399 !default;

...
</code></pre>
<h4 id="modificando-variables"><a class="header-anchor" href="#modificando-variables">¶</a> <strong>Modificando variables</strong></h4>
<p>Solo debe modificar el archivo <code>element-variables.scss</code>, por ejemplo, para cambiar el color del tema a rojo:</p>
<pre><code class="language-CSS">$--color-primary: red;
</code></pre>
<h4 id="construyendo-el-tema"><a class="header-anchor" href="#construyendo-el-tema">¶</a> <strong>Construyendo el tema</strong></h4>
<p>Después de haber modificado el archivo de variables, utilizaremos el comando <code>et</code> para construir nuestro tema. Puedes activar el modo <code>watch</code> agregando el parámetro <code>-w</code>. Y, si desea personalizar el nombre del archivo, debes agregar el parámetro <code>-c</code> seguido del nombre. Por defecto, el archivo de tema construido es colocado dentro de <code>./theme</code>. Puede especificar un directorio distinto utilizando el parámetro <code>-o</code>.</p>
<pre><code class="language-shell">et

&gt; ✔ build theme font
&gt; ✔ build element theme
</code></pre>
<h3 id="uso-de-los-temas-personalizados"><a class="header-anchor" href="#uso-de-los-temas-personalizados">¶</a> Uso de los temas personalizados</h3>
<h4 id="importar-un-tema-personalizado"><a class="header-anchor" href="#importar-un-tema-personalizado">¶</a> <strong>Importar un tema personalizado</strong></h4>
<p>Importar su propio tema es igual que importar el tema por defecto, sol que esta vez se deben importar los archivos construidos con &quot;Online Theme Roller&quot; o &quot;CLI tool&quot;:</p>
<pre><code class="language-javascript">import '../theme/index.css'
import ElementUI from 'element-ui'
import Vue from 'vue'

Vue.use(ElementUI)
</code></pre>
<h4 id="importar-un-tema-de-componente-bajo-demanda"><a class="header-anchor" href="#importar-un-tema-de-componente-bajo-demanda">¶</a> <strong>Importar un tema de componente bajo demanda</strong></h4>
<p>Si esta utilizando <code>babel-plugin-component</code> para importar bajo demanda, solo debe modificar el archivo <code>.babelrc</code> y especificar en la propiedad <code>styleLibraryName</code> la ruta en donde se encuentra localizado su tema personalizado relativo a <code>.babelrc</code>. <strong>Nota</strong> el carácter <code>~</code> es obligatorio:</p>
<pre><code class="language-json">{
  &quot;plugins&quot;: [
    [
      &quot;component&quot;,
      {
        &quot;libraryName&quot;: &quot;element-ui&quot;,
        &quot;styleLibraryName&quot;: &quot;~theme&quot;
      }
    ]
  ]
}
</code></pre>
<p>Si no esta familiarizado con <code>babel-plugin-component</code>, por favor diríjase a la documentación sobre <a href="./#/en-US/component/quickstart">Como Iniciar</a>. Para más detalles, consulte el <a href="https://github.com/ElementUI/element-theme">repositorio del proyecto</a> de <code>element-theme</code>.</p>
