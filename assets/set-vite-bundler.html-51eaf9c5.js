import{_ as t,p as o,q as i,s as n,G as s,t as a,J as c,n as p}from"./framework-75bf9f82.js";const l={},r=n("div",{class:"custom-container tip"},[n("svg",{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 24 24"},[n("g",{fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},[n("circle",{cx:"12",cy:"12",r:"9"}),n("path",{d:"M12 8h.01"}),n("path",{d:"M11 12h1v4h1"})])]),n("p",{class:"custom-container-title"},"TIP"),n("p",null,"We configure postcss plugins by default, which is the basic configuration to ensure project startup.")],-1),u={href:"https://v2.vuepress.vuejs.org/reference/bundler/vite.html",target:"_blank",rel:"noopener noreferrer"},d=n("h2",{id:"configure",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#configure","aria-hidden":"true"},"#"),s(" Configure")],-1),k=n("h3",{id:"vitebundler",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#vitebundler","aria-hidden":"true"},"#"),s(" viteBundler")],-1),v=n("li",null,"description: User-defined packaging configuration",-1),h=n("li",null,"viteOptions: Accepts all options of Vite.",-1),m={href:"https://www.npmjs.com/package/@vitejs/plugin-vue",target:"_blank",rel:"noopener noreferrer"},g=c(`<div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> defineUserConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vuepress&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> recoTheme <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vuepress-theme-reco&#39;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineUserConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  theme<span class="token operator">:</span> <span class="token function">recoTheme</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    viteBundler<span class="token operator">:</span> <span class="token punctuation">{</span>
      viteOptions<span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token operator">...</span><span class="token keyword">do</span> somthing
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      vuePluginOptions<span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token operator">...</span><span class="token keyword">do</span> somthing
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1);function f(_,b){const e=p("ExternalLinkIcon");return o(),i("div",null,[r,n("p",null,[s("If you are not satisfied with our existing packaging or want to customize the packaging configuration, you can use this function, which is the Vite-based packaging configuration provided by vuepress@2.x, "),n("a",u,[s("check the details"),a(e)]),s("，")]),d,k,n("ul",null,[v,n("li",null,[s("Options: "),n("ul",null,[h,n("li",null,[s("vuePluginOptions： Accepts all options of "),n("a",m,[s("@vitejs/plugin-vue"),a(e)]),s(".")])])])]),g])}const x=t(l,[["render",f],["__file","set-vite-bundler.html.vue"]]);export{x as default};