import{_ as i,p as c,q as l,s as n,G as s,t as a,J as o,n as t}from"./framework-75bf9f82.js";const r={},d=o(`<h2 id="introduction" tabindex="-1"><a class="header-anchor" href="#introduction" aria-hidden="true">#</a> Introduction</h2><p>The theme built-in comment plugin <code>@vuepress-reco/vuepress-plugin-comments</code>, currently only supports <code>Valine</code>, because <code>Vssue</code> has not yet adapted to <code>Vue3</code>;</p><p>If you want to not load comments by default, but only display comments on certain pages, you can set <code>hideComments: true</code> in <code>valineConfig</code>, and set <code>hideComments: false</code> on pages that need to display comments.</p><p>If it is only a certain article that you don&#39;t want to enable comments, you can set <code>hideComments: true</code> in <code>front-matter</code>.</p><h2 id="option-api" tabindex="-1"><a class="header-anchor" href="#option-api" aria-hidden="true">#</a> Option API</h2><h3 id="valine" tabindex="-1"><a class="header-anchor" href="#valine" aria-hidden="true">#</a> Valine</h3><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// .vuepress/config.ts</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span> defineUserConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vuepress&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> recoTheme <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vuepress-theme-reco&#39;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineUserConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  theme<span class="token operator">:</span> <span class="token function">recoTheme</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    commentConfig<span class="token operator">:</span> <span class="token punctuation">{</span>
      type<span class="token operator">:</span> <span class="token string">&#39;valine&#39;</span><span class="token punctuation">,</span>
      options<span class="token operator">:</span> <span class="token punctuation">{</span>
        appId<span class="token operator">:</span> <span class="token string">&#39;...&#39;</span><span class="token punctuation">,</span> <span class="token comment">// your appId</span>
        appKey<span class="token operator">:</span> <span class="token string">&#39;...&#39;</span><span class="token punctuation">,</span> <span class="token comment">// your appKey</span>
        hideComments<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// hide comments globally, default false</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7),u={href:"https://valine.js.org/configuration.html",target:"_blank",rel:"noopener noreferrer"},m=n("div",{class:"custom-container tip"},[n("svg",{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 24 24"},[n("g",{fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},[n("circle",{cx:"12",cy:"12",r:"9"}),n("path",{d:"M12 8h.01"}),n("path",{d:"M11 12h1v4h1"})])]),n("p",{class:"custom-container-title"},"TIP"),n("p",null,[s("If valine's interface for getting comments reports a "),n("code",null,"404"),s(" error, don't worry, this is because you haven't added a comment, as long as there is 1 comment, no error will be reported, this is just the request processing operation of "),n("code",null,"leanCloud"),s(";")])],-1),k={id:"waline",tabindex:"-1"},v=n("a",{class:"header-anchor",href:"#waline","aria-hidden":"true"},"#",-1),h=o(`<div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// .vuepress/config.ts</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span> defineUserConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vuepress&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> recoTheme <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vuepress-theme-reco&#39;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineUserConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  theme<span class="token operator">:</span> <span class="token function">recoTheme</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    commentConfig<span class="token operator">:</span> <span class="token punctuation">{</span>
      type<span class="token operator">:</span> <span class="token string">&#39;waline&#39;</span><span class="token punctuation">,</span>
      options<span class="token operator">:</span> <span class="token punctuation">{</span>
        serverURL<span class="token operator">:</span> <span class="token string">&#39;your serverURL&#39;</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),f={href:"https://waline.js.org/guide/get-started.html",target:"_blank",rel:"noopener noreferrer"};function b(g,y){const e=t("ExternalLinkIcon"),p=t("Badge");return c(),l("div",null,[d,n("p",null,[s("For other parameters, please refer to "),n("a",u,[s("Valine official website"),a(e)]),s(".")]),m,n("h3",k,[v,s(" Waline "),a(p,{text:"Temporarily removed",type:"danger"})]),h,n("p",null,[s("Refer to "),n("a",f,[s("Waline official website"),a(e)]),s(" for the tutorial and other parameters of options.")])])}const _=i(r,[["render",b],["__file","comments.html.vue"]]);export{_ as default};
