(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{197:function(t,e,s){"use strict";s.r(e);var a=s(0),n=Object(a.a)({},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"content"},[t._m(0),t._v(" "),s("p",[t._v("本指南介绍了安装 webpack 的各种方法。")]),t._v(" "),t._m(1),t._v(" "),s("p",[t._v("在开始之前，请确保安装了 "),s("a",{attrs:{href:"https://nodejs.org/en/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Node.js"),s("OutboundLink")],1),t._v(" 的最新版本。使用 Node.js 最新的长期支持版本(LTS - Long Term Support)，是理想的起步。使用旧版本，你可能遇到各种问题，因为它们可能缺少 webpack 功能以及/或者缺少相关 package 包。")]),t._v(" "),t._m(2),t._v(" "),s("p",[t._v("最新的webpack版本是：v5.47.0")]),t._v(" "),s("p",[t._v("要安装最新版本或特定版本，请运行以下命令之一：")]),t._v(" "),t._m(3),s("p",[t._v("如果你使用 webpack 4+ 版本，你还需要安装 CLI。")]),t._v(" "),t._m(4),s("p",[t._v("对于大多数项目，我们建议本地安装。这可以使我们在引入破坏式变更(breaking change)的依赖时，更容易分别升级项目。通常，webpack 通过运行一个或多个 "),s("a",{attrs:{href:"https://docs.npmjs.com/misc/scripts",target:"_blank",rel:"noopener noreferrer"}},[t._v("npm scripts"),s("OutboundLink")],1),t._v("，会在本地 "),s("code",[t._v("node_modules")]),t._v(" 目录中查找安装的 webpack：")]),t._v(" "),t._m(5),t._m(6),t._v(" "),t._m(7),t._v(" "),t._m(8),t._v(" "),t._m(9),t._m(10),t._v(" "),t._m(11),t._v(" "),s("p",[t._v("如果你热衷于使用最新版本的 webpack，你可以使用以下命令，直接从 webpack 的仓库中安装：")]),t._v(" "),t._m(12),s("p",[t._v("安装这些最新体验版本时要小心！它们可能仍然包含 bug，因此不应该用于生产环境。")])])},[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"webpack教程"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#webpack教程","aria-hidden":"true"}},[this._v("#")]),this._v(" webpack教程")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"前提条件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#前提条件","aria-hidden":"true"}},[this._v("#")]),this._v(" 前提条件")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"本地安装"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#本地安装","aria-hidden":"true"}},[this._v("#")]),this._v(" 本地安装")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" --save-dev webpack\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" --save-dev webpack@"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("version"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[this._v("npm")]),this._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[this._v("install")]),this._v(" --save-dev webpack-cli\n")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"scripts"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"start"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"webpack --config webpack.config.js"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("blockquote",[e("p",[this._v("当你在本地安装 webpack 后，你能够从 "),e("code",[this._v("node_modules/.bin/webpack")]),this._v(" 访问它的 bin 版本。")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"全局安装"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#全局安装","aria-hidden":"true"}},[this._v("#")]),this._v(" 全局安装")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("以下的 NPM 安装方式，将使 "),e("code",[this._v("webpack")]),this._v(" 在全局环境下可用：")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[this._v("npm")]),this._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[this._v("install")]),this._v(" --global webpack\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("blockquote",[e("p",[this._v("不推荐全局安装 webpack。这会将你项目中的 webpack 锁定到指定版本，并且在使用不同的 webpack 版本的项目中，可能会导致构建失败。")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"最新体验版本"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#最新体验版本","aria-hidden":"true"}},[this._v("#")]),this._v(" 最新体验版本")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" webpack@beta\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" webpack/webpack"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#<tagname/branchname>")]),t._v("\n")])])])}],!1,null,null,null);e.default=n.exports}}]);