"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[961],{5680:(e,t,n)=>{n.d(t,{xA:()=>d,yg:()=>m});var r=n(6540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=c(n),f=a,m=u["".concat(s,".").concat(f)]||u[f]||p[f]||o;return n?r.createElement(m,i(i({ref:t},d),{},{components:n})):r.createElement(m,i({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},1132:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=n(8168),a=(n(6540),n(5680));const o={description:"Learn about the core features of LLM Studio."},i="Core features",l={unversionedId:"get-started/core-features",id:"get-started/core-features",title:"Core features",description:"Learn about the core features of LLM Studio.",source:"@site/docs/get-started/core-features.md",sourceDirName:"get-started",slug:"/get-started/core-features",permalink:"/h2o-llmstudio/get-started/core-features",draft:!1,tags:[],version:"current",frontMatter:{description:"Learn about the core features of LLM Studio."},sidebar:"defaultSidebar",previous:{title:"Model flow",permalink:"/h2o-llmstudio/get-started/llm-studio-flow"},next:{title:"Videos",permalink:"/h2o-llmstudio/get-started/videos"}},s={},c=[{value:"No-code fine-tuning",id:"no-code-fine-tuning",level:2},{value:"Highly customizable (wide range of hyperparameters)",id:"highly-customizable-wide-range-of-hyperparameters",level:2},{value:"Advanced evaluation metrics and experiment comparison",id:"advanced-evaluation-metrics-and-experiment-comparison",level:2},{value:"Instant publishing models",id:"instant-publishing-models",level:2},{value:"Instant feedback on model performance",id:"instant-feedback-on-model-performance",level:2}],d={toc:c},u="wrapper";function p(e){let{components:t,...n}=e;return(0,a.yg)(u,(0,r.A)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"core-features"},"Core features"),(0,a.yg)("h2",{id:"no-code-fine-tuning"},"No-code fine-tuning"),(0,a.yg)("p",null,"NLP practioners can easily fine-tune models without the need for code expertise. The user interface, which is specifically designed for LLMs, allows users to upload large datasets easily and configure ",(0,a.yg)("a",{parentName:"p",href:"../concepts#parameters-and-hyperparameters"},"hyperparameters")," to fine-tune the model. "),(0,a.yg)("h2",{id:"highly-customizable-wide-range-of-hyperparameters"},"Highly customizable (wide range of hyperparameters)"),(0,a.yg)("p",null,"H2O LLM Studio supports a wide variety of hyperparameters that can be used to fine-tune the model and supports the following fine-tuning techniques to enable advanced customization:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"../concepts#lora-low-rank-adaptation"},"Low-Rank Adaptation (LoRA)")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"../concepts#8-bit-model-training-with-a-low-memory-footprint"},"8-bit model training with a low memory footprint"))),(0,a.yg)("h2",{id:"advanced-evaluation-metrics-and-experiment-comparison"},"Advanced evaluation metrics and experiment comparison"),(0,a.yg)("p",null,"Advanced evaluation metrics in H2O LLM Studio can be used to validate the answers generated by the LLM. This helps to make data-driven decisions about the model. It also offers visual tracking and comparison of experiment performance, making it easy to analyze and compare different fine-tuned models.You can also visualize how different parameters affect the model performance, and optionally use the ",(0,a.yg)("a",{parentName:"p",href:"https://neptune.ai/"},"Neptune")," integraton to track and log your experiments. "),(0,a.yg)("h2",{id:"instant-publishing-models"},"Instant publishing models"),(0,a.yg)("p",null,"H2O LLM Studio enables easy model sharing with the community by allowing you to export the model to the ",(0,a.yg)("a",{parentName:"p",href:"https://huggingface.co/h2oai"},"Hugging Face Hub")," with a single click. "),(0,a.yg)("h2",{id:"instant-feedback-on-model-performance"},"Instant feedback on model performance"),(0,a.yg)("p",null,"Additionally, H2O LLM Studio lets you chat with the fine-tuned model and recieve instant feedback about model performance."))}p.isMDXComponent=!0}}]);