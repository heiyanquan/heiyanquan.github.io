<h2 id="card"><a class="header-anchor" href="#card">¶</a> Card</h2>
<p>Muestra información dentro de un contenedor <code>card</code></p>
<h3 id="uso-basico"><a class="header-anchor" href="#uso-basico">¶</a> Uso Básico</h3>
<p><code>Card</code> incluye titulo, contenido y operaciones.</p>
<demo-block>
        <div><p>Card se compone de cabecera y cuerpo. La cabecera es opcional y la colocación de su  contenido depende de un slot con nombre.</p>
</div>
        <!--element-demo: <el-card class="box-card">
  <div slot="header" class="clearfix">
    <span>Card name</span>
    <el-button style="float: right; padding: 3px 0" type="text">Operation button</el-button>
  </div>
  <div v-for="o in 4" :key="o" class="text item">
    {{'List item ' + o }}
  </div>
</el-card>

<style>
  .text {
    font-size: 14px;
  }

  .item {
    margin-bottom: 18px;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both
  }

  .box-card {
    width: 480px;
  }
</style>
:element-demo-->
        <template slot="highlight"><pre v-pre><code class="html">&lt;el-card class=&quot;box-card&quot;&gt;
  &lt;div slot=&quot;header&quot; class=&quot;clearfix&quot;&gt;
    &lt;span&gt;Card name&lt;/span&gt;
    &lt;el-button style=&quot;float: right; padding: 3px 0&quot; type=&quot;text&quot;&gt;Operation button&lt;/el-button&gt;
  &lt;/div&gt;
  &lt;div v-for=&quot;o in 4&quot; :key=&quot;o&quot; class=&quot;text item&quot;&gt;
    {{'List item ' + o }}
  &lt;/div&gt;
&lt;/el-card&gt;

&lt;style&gt;
  .text {
    font-size: 14px;
  }

  .item {
    margin-bottom: 18px;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: &quot;&quot;;
  }
  .clearfix:after {
    clear: both
  }

  .box-card {
    width: 480px;
  }
&lt;/style&gt;
</code></pre></template></demo-block><h3 id="card-simple"><a class="header-anchor" href="#card-simple">¶</a> Card simple</h3>
<p>La parte de la cabecera puede omitirse.</p>
<demo-block>
        
        <!--element-demo: <el-card class="box-card">
  <div v-for="o in 4" :key="o" class="text item">
    {{'List item ' + o }}
  </div>
</el-card>

<style>
  .text {
    font-size: 14px;
  }

  .item {
    padding: 18px 0;
  }

  .box-card {
    width: 480px;
  }
</style>
:element-demo-->
        <template slot="highlight"><pre v-pre><code class="html">&lt;el-card class=&quot;box-card&quot;&gt;
  &lt;div v-for=&quot;o in 4&quot; :key=&quot;o&quot; class=&quot;text item&quot;&gt;
    {{'List item ' + o }}
  &lt;/div&gt;
&lt;/el-card&gt;

&lt;style&gt;
  .text {
    font-size: 14px;
  }

  .item {
    padding: 18px 0;
  }

  .box-card {
    width: 480px;
  }
&lt;/style&gt;
</code></pre></template></demo-block><h3 id="con-imagenes"><a class="header-anchor" href="#con-imagenes">¶</a> Con imágenes</h3>
<p>Muestre un contenido más rico añadiendo algunas configuraciones.</p>
<demo-block>
        <div><p>El atributo <code>body-style</code> define el estilo CSS del <code>body</code> personalizado. Este ejemplo también utiliza  <code>el-col</code> para el layout.</p>
</div>
        <!--element-demo: <el-row>
  <el-col :span="8" v-for="(o, index) in 2" :key="o" :offset="index > 0 ? 2 : 0">
    <el-card :body-style="{ padding: '0px' }">
      <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" class="image">
      <div style="padding: 14px;">
        <span>Yummy hamburger</span>
        <div class="bottom clearfix">
          <time class="time">{{ currentDate }}</time>
          <el-button type="text" class="button">Operating</el-button>
        </div>
      </div>
    </el-card>
  </el-col>
</el-row>

<style>
  .time {
    font-size: 13px;
    color: #999;
  }
  
  .bottom {
    margin-top: 13px;
    line-height: 12px;
  }

  .button {
    padding: 0;
    float: right;
  }

  .image {
    width: 100%;
    display: block;
  }

  .clearfix:before,
  .clearfix:after {
      display: table;
      content: "";
  }
  
  .clearfix:after {
      clear: both
  }
</style>

<script>
export default {
  data() {
    return {
      currentDate: new Date()
    };
  }
}
</script>
:element-demo-->
        <template slot="highlight"><pre v-pre><code class="html">&lt;el-row&gt;
  &lt;el-col :span=&quot;8&quot; v-for=&quot;(o, index) in 2&quot; :key=&quot;o&quot; :offset=&quot;index &gt; 0 ? 2 : 0&quot;&gt;
    &lt;el-card :body-style=&quot;{ padding: '0px' }&quot;&gt;
      &lt;img src=&quot;https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png&quot; class=&quot;image&quot;&gt;
      &lt;div style=&quot;padding: 14px;&quot;&gt;
        &lt;span&gt;Yummy hamburger&lt;/span&gt;
        &lt;div class=&quot;bottom clearfix&quot;&gt;
          &lt;time class=&quot;time&quot;&gt;{{ currentDate }}&lt;/time&gt;
          &lt;el-button type=&quot;text&quot; class=&quot;button&quot;&gt;Operating&lt;/el-button&gt;
        &lt;/div&gt;
      &lt;/div&gt;
    &lt;/el-card&gt;
  &lt;/el-col&gt;
&lt;/el-row&gt;

&lt;style&gt;
  .time {
    font-size: 13px;
    color: #999;
  }
  
  .bottom {
    margin-top: 13px;
    line-height: 12px;
  }

  .button {
    padding: 0;
    float: right;
  }

  .image {
    width: 100%;
    display: block;
  }

  .clearfix:before,
  .clearfix:after {
      display: table;
      content: &quot;&quot;;
  }
  
  .clearfix:after {
      clear: both
  }
&lt;/style&gt;

&lt;script&gt;
export default {
  data() {
    return {
      currentDate: new Date()
    };
  }
}
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="shadow"><a class="header-anchor" href="#shadow">¶</a> Shadow</h3>
<p>Puede definir cuándo mostrar las sombras.</p>
<demo-block>
        <div><p>El atributo de sombra determina cuándo se muestran las sombras. Puede ser <code>always</code>, <code>hover</code> o <code>never</code>.</p>
</div>
        <!--element-demo: <el-row :gutter="12">
  <el-col :span="8">
    <el-card shadow="always">
      Always
    </el-card>
  </el-col>
  <el-col :span="8">
    <el-card shadow="hover">
      Hover
    </el-card>
  </el-col>
  <el-col :span="8">
    <el-card shadow="never">
      Never
    </el-card>
  </el-col>
</el-row>
:element-demo-->
        <template slot="highlight"><pre v-pre><code class="html">&lt;el-row :gutter=&quot;12&quot;&gt;
  &lt;el-col :span=&quot;8&quot;&gt;
    &lt;el-card shadow=&quot;always&quot;&gt;
      Always
    &lt;/el-card&gt;
  &lt;/el-col&gt;
  &lt;el-col :span=&quot;8&quot;&gt;
    &lt;el-card shadow=&quot;hover&quot;&gt;
      Hover
    &lt;/el-card&gt;
  &lt;/el-col&gt;
  &lt;el-col :span=&quot;8&quot;&gt;
    &lt;el-card shadow=&quot;never&quot;&gt;
      Never
    &lt;/el-card&gt;
  &lt;/el-col&gt;
&lt;/el-row&gt;
</code></pre></template></demo-block><h3 id="atributos"><a class="header-anchor" href="#atributos">¶</a> Atributos</h3>
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
<td>header</td>
<td>Titulo del card. También acepta DOM pasado por <code>slot#header</code></td>
<td>string</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>body-style</td>
<td>Estilo CSS del cuerpo</td>
<td>object</td>
<td>—</td>
<td>{ padding: '20px' }</td>
</tr>
<tr>
<td>shadow</td>
<td>Cuando mostrar la sombra del Card</td>
<td>string</td>
<td>always / hover / never</td>
<td>always</td>
</tr>
</tbody>
</table>
