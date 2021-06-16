
<h2 id="border"><a class="header-anchor" href="#border">¶</a> Border</h2>
<p>We standardize the borders that can be used in buttons, cards, pop-ups and other components.</p>
<h3 id="border-2"><a class="header-anchor" href="#border-2">¶</a> Border</h3>
<p>There are few border styles to choose.</p>
<table class="demo-border">
  <tbody>
    <tr>
      <td class="text">Name</td>
      <td class="text">Thickness</td>
      <td class="line">Demo</td>
    </tr>
    <tr>
      <td class="text">Solid</td>
      <td class="text">1px</td>
      <td class="line">
        <div></div>
      </td>
    </tr>
    <tr>
      <td class="text">Dashed</td>
      <td class="text">2px</td>
      <td class="line">
        <div class="dashed"></div>
      </td>
    </tr>
  </tbody>
</table>
<h3 id="radius"><a class="header-anchor" href="#radius">¶</a> Radius</h3>
<p>There are few radius styles to choose.</p>
<el-row :gutter="12" class="demo-radius">
  <el-col :span="6" :xs="{span: 12}">
    <div class="title">No Radius</div>
    <div class="value">border-radius: 0px</div>
    <div class="radius"></div>
  </el-col>
  <el-col :span="6" :xs="{span: 12}">
    <div class="title">Small Radius</div>
    <div class="value">border-radius: {{borderRadiusSmall}}</div>
    <div 
      class="radius" 
      :style="{ borderRadius: borderRadiusSmall }"
    ></div>
  </el-col>
  <el-col :span="6" :xs="{span: 12}">
    <div class="title">Large Radius</div>
    <div class="value">border-radius: {{borderRadiusBase}}</div>
    <div 
      class="radius"
      :style="{ borderRadius: borderRadiusBase }"
    ></div>
  </el-col>
  <el-col :span="6" :xs="{span: 12}">
    <div class="title">Round Radius</div>
    <div class="value">border-radius: 30px</div>
    <div class="radius radius-30"></div>
  </el-col>
</el-row>
<h3 id="shadow"><a class="header-anchor" href="#shadow">¶</a> Shadow</h3>
<p>There are few shadow styles to choose.</p>
<div 
class="demo-shadow"
:style="{ boxShadow: boxShadowBase }"
></div>
<span class="demo-shadow-text">Basic Shadow box-shadow: {{boxShadowBase}}</span>
<div 
class="demo-shadow"
:style="{ boxShadow: boxShadowLight }"
></div>
<span class="demo-shadow-text">Light Shadow box-shadow: {{boxShadowLight}}</span>
