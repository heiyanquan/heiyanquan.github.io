<h2 id="theme"><a class="header-anchor" href="#theme">¶</a> Thème</h2>
<p>Element utilise le style BEM pour le CSS afin que vous puissiez écraser les règles prédéfinies facilement. Mais si vous avez besoin de remplacer des styles à une plus grande échelle , e.g. changer le thème de bleu à orange ou vert, les modifier une par une serait fastidieux. Nous fournissons ttrtois méthodes pour changer les variables de style.</p>
<h3 id="theme-roller"><a class="header-anchor" href="#theme-roller">¶</a> Theme Roller</h3>
<p>Utilisez <a href="./#/fr-FR/theme">Online Theme Roller</a> pour personnaliser les Design Tokens des variables globales et des composants, et prévisualisez le nouveau thème en temps réel. Il peut générer un package de style complet basé sur le nouveau thème que vous pouvez télécharger directement (pour importer de nouveaux fichiers de style dans votre projet, veuillez vous reporter à la partie 'Importer un thème personnalisé'' de cette section).</p>
<p>Also, use <a href="https://chrome.google.com/webstore/detail/element-theme-roller/lifkjlojflekabbmlddfccdkphlelmim">Theme Roller Chrome Extension</a>，to customize theme and preview in real-time on any website developed by Element.</p>
<img src="https://shadow.elemecdn.com/app/sns-client/element-theme-editor2.e16c6a01-806d-11e9-bc23-21435c54c509.png" style="width: 100%;margin: 30px auto 0;display: block;">
<h3 id="changer-la-couleur-du-theme"><a class="header-anchor" href="#changer-la-couleur-du-theme">¶</a> Changer la couleur du thème</h3>
<p>Si vous avez juste besoin de changer la couleur du thème, le <a href="https://elementui.github.io/theme-chalk-preview/#/en-US">générateur de thème en ligne</a> est recommandé. La couleur du thème d'Element est un bleu clair et agréable. En le changeant, vous rendez Element visuellement plus adapté à vos projets.</p>
<p>Le site précédent vous permet de visualiser et de télécharger un nouveau thème immédiatement (pour importer un nouveau thème, référez-vous à la partie 'Importer un thème personnalisé' or 'Importer un thème de composant à la demande' de cette section).</p>
<h3 id="mettre-a-jour-les-variables-scss-de-votre-projet"><a class="header-anchor" href="#mettre-a-jour-les-variables-scss-de-votre-projet">¶</a> Mettre à jour les variables SCSS de votre projet</h3>
<p><code>theme-chalk</code> est écrit en SCSS. Si votre projet utilises SCSS, vous pouvez changer directement les variables d'Élément. Créez un nouveau fichier, e.g. <code>element-variables.scss</code>:</p>
<pre><code class="language-html">/* couleur du thème */
$--color-primary: teal;

/* chemin vers le fichier de police, requis */
$--font-path: '~element-ui/lib/theme-chalk/fonts';

@import &quot;~element-ui/packages/theme-chalk/src/index&quot;;
</code></pre>
<p>Puis dans le fichier d'entrée, importez ce style au lieu de celui d'Element:</p>
<pre><code class="language-JS">import Vue from 'vue'
import Element from 'element-ui'
import './element-variables.scss'

Vue.use(Element)
</code></pre>
<div class="tip">
<p>Il est obligatoire de remplacer le chemin du fichier de police.</p>
</div>
<h3 id="outil-de-theme-cli"><a class="header-anchor" href="#outil-de-theme-cli">¶</a> Outil de thème CLI</h3>
<p>Si votre projet n'utilise pas SCSS, vous pouvez personnaliser le thème en utilisant notre outil en ligne de commande:</p>
<h4 id="installation"><a class="header-anchor" href="#installation">¶</a> <strong>Installation</strong></h4>
<p>Installez le générateur de thème de manière globale ou locale. Une installation locale est recommandé afin que les personnes clonant votre dépôt bénéficient d'une installation automatique via npm.</p>
<pre><code class="language-shell">npm i element-theme -g
</code></pre>
<p>Installer ensuite le thème chalk depuis npm ou GitHub.</p>
<pre><code class="language-shell"># Via npm
npm i element-theme-chalk -D

# Via GitHub
npm i https://github.com/ElementUI/theme-chalk -D
</code></pre>
<h4 id="initialisation-d-un-fichier-de-variable"><a class="header-anchor" href="#initialisation-d-un-fichier-de-variable">¶</a> <strong>Initialisation d'un fichier de variable</strong></h4>
<p>Après l'installation des paquets ci-dessus, une commande appelée <code>et</code> devient disponible dans le CLI (si les paquets sont installés localement, utilisez <code>node_modules/.bin/et</code> à la place). Utilisez <code>-i</code> pour initialiser le fichier de variables, <code>element-variables.scss</code> par défaut. Vous pouvez spécifier n'importe quel dossier comme sortie.</p>
<pre><code class="language-shell">et -i [nom du fichier]

&gt; ✔ Generator variables file
</code></pre>
<p>Dans <code>element-variables.scss</code> vous trouverez toutes les variables utilisées pour le style d'Element, définies en SCSS. Voici un snippet:</p>
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
<h4 id="modifier-les-variables"><a class="header-anchor" href="#modifier-les-variables">¶</a> <strong>Modifier les variables</strong></h4>
<p>Éditer <code>element-variables.scss</code>, e.g. en changeant la couleur du thème pour du rouge:</p>
<pre><code class="language-CSS">$--color-primary: red;
</code></pre>
<h4 id="generer-le-theme"><a class="header-anchor" href="#generer-le-theme">¶</a> <strong>Générer le thème</strong></h4>
<p>Après avoir sauvegardé le fichier de variables, utilisez <code>et</code> pour générer le thème. Vous pouvez activer le mode <code>watch</code> en ajoutant le paramètre <code>-w</code>. Si vous avez choisi le chemin du fichier de sortie, il vous faudra ajouter le paramètre <code>-c</code> avec le nom du fichier. Par défaut le thème généré est placé dans <code>./theme</code>. Vous pouvez spécifier le dossier de sortie grâce à <code>-o</code>.</p>
<pre><code class="language-shell">et

&gt; ✔ build theme font
&gt; ✔ build element theme
</code></pre>
<h3 id="use-custom-theme"><a class="header-anchor" href="#use-custom-theme">¶</a> Use custom theme</h3>
<h4 id="importer-le-theme"><a class="header-anchor" href="#importer-le-theme">¶</a> <strong>Importer le thème</strong></h4>
<p>Importing your own theme is just like importing the default theme, only this time you import the file built from &quot;Online Theme Roller&quot; or &quot;CLI tool&quot;:</p>
<pre><code class="language-javascript">import '../theme/index.css'
import ElementUI from 'element-ui'
import Vue from 'vue'

Vue.use(ElementUI)
</code></pre>
<h4 id="importer-le-theme-d-un-composant-sur-demande"><a class="header-anchor" href="#importer-le-theme-d-un-composant-sur-demande">¶</a> <strong>Importer le thème d'un composant sur demande</strong></h4>
<p>Si vous utilisez <code>babel-plugin-component</code> pour les imports sur demande, modifiez <code>.babelrc</code> et spécifiez <code>styleLibraryName</code> avec le chemin où votre thème est localisé relativement à <code>.babelrc</code>. N'oubliez pas que <code>~</code> est requis:</p>
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
<p>Si vous n'êtes pas familier avec <code>babel-plugin-component</code>, référez-vous à la page <a href="./#/fr-FR/component/quickstart">Guide</a>. Pour plus d'informations, jetez un oeil au <a href="https://github.com/ElementUI/element-theme">dépôt du projet</a> de <code>element-theme</code>.</p>
