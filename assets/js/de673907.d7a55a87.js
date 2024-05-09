"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[736],{5680:(e,t,r)=>{r.d(t,{xA:()=>m,yg:()=>c});var a=r(6540);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),s=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},m=function(e){var t=s(e.components);return a.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),u=s(r),g=n,c=u["".concat(l,".").concat(g)]||u[g]||d[g]||o;return r?a.createElement(c,i(i({ref:t},m),{},{components:r})):a.createElement(c,i({ref:t},m))}));function c(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=g;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p[u]="string"==typeof e?e:n,i[1]=p;for(var s=2;s<o;s++)i[s]=r[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}g.displayName="MDXCreateElement"},1902:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>p,toc:()=>s});var a=r(8168),n=(r(6540),r(5680));const o={description:"The flow of creating and fine-tuning large language models using H2O LLM Studio."},i="Model flow",p={unversionedId:"get-started/llm-studio-flow",id:"get-started/llm-studio-flow",title:"Model flow",description:"The flow of creating and fine-tuning large language models using H2O LLM Studio.",source:"@site/docs/get-started/llm-studio-flow.md",sourceDirName:"get-started",slug:"/get-started/llm-studio-flow",permalink:"/h2o-llmstudio/get-started/llm-studio-flow",draft:!1,tags:[],version:"current",frontMatter:{description:"The flow of creating and fine-tuning large language models using H2O LLM Studio."},sidebar:"defaultSidebar",previous:{title:"H2O LLM Studio performance",permalink:"/h2o-llmstudio/get-started/llm-studio-performance"},next:{title:"Core features",permalink:"/h2o-llmstudio/get-started/core-features"}},l={},s=[{value:"Step 1: Import a dataset",id:"step-1-import-a-dataset",level:2},{value:"Step 2: Create an experiment",id:"step-2-create-an-experiment",level:2},{value:"Step 3: Monitor an experiment",id:"step-3-monitor-an-experiment",level:2},{value:"Step 4: Compare experiments",id:"step-4-compare-experiments",level:2},{value:"Step 5: Export a model to Hugging Face Hub",id:"step-5-export-a-model-to-hugging-face-hub",level:2}],m={toc:s},u="wrapper";function d(e){let{components:t,...r}=e;return(0,n.yg)(u,(0,a.A)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,n.yg)("h1",{id:"model-flow"},"Model flow"),(0,n.yg)("p",null,"The flow of creating and fine-tuning large language models using H2O LLM Studio can be summarized in the following sequential steps:"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"#step-1-import-a-dataset"},"Step 1: Import a dataset")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"#step-2-create-an-experiment"},"Step 2: Create an experiment")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"#step-3-monitor-an-experiment"},"Step 3: Monitor an experiment")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"#step-4-compare-experiments"},"Step 4: Compare experiments")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"#step-5-export-a-model-to-hugging-face-hub"},"Step 5: Export a model to Hugging Face Hub"))),(0,n.yg)("h2",{id:"step-1-import-a-dataset"},"Step 1: Import a dataset"),(0,n.yg)("p",null,"As the first step in the experiment flow, prep your data and import your dataset to H2O LLM Studio. "),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"To learn about supported data connectors and data format, see ",(0,n.yg)("a",{parentName:"li",href:"../guide/datasets/data-connectors-format"},"Supported data connectors and format"),"."),(0,n.yg)("li",{parentName:"ul"},"To learn about how to import a dataset to H2O LLM Studio, see ",(0,n.yg)("a",{parentName:"li",href:"../guide/datasets/import-dataset"},"Import a dataset"),"."),(0,n.yg)("li",{parentName:"ul"},"To learn about reviewing and editing a dataset, see ",(0,n.yg)("a",{parentName:"li",href:"/h2o-llmstudio/guide/datasets/view-dataset"},"View and manage dataset"),".")),(0,n.yg)("h2",{id:"step-2-create-an-experiment"},"Step 2: Create an experiment"),(0,n.yg)("p",null,"As the second step in the experiment flow, create an experiment using the imported dataset. H2O LLM Studio offers several hyperparameter settings that you can adjust for your experiment model. To ensure that your training process is effective, you may need to specify the ",(0,n.yg)("a",{parentName:"p",href:"../concepts#parameters-and-hyperparameters"},"hyperparameters")," like learning rate, batch size, and the number of epochs. H2O LLM Studio provides an overview of all the parameters you\u2019ll need to specify for your experiment."),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"To learn about creating a new experiment, see ",(0,n.yg)("a",{parentName:"li",href:"/h2o-llmstudio/guide/experiments/create-an-experiment"},"Create an experiment"),"."),(0,n.yg)("li",{parentName:"ul"},"To learn about the settings available for creating an experiment, see ",(0,n.yg)("a",{parentName:"li",href:"/h2o-llmstudio/guide/experiments/experiment-settings"},"Experiment settings"),".")),(0,n.yg)("h2",{id:"step-3-monitor-an-experiment"},"Step 3: Monitor an experiment"),(0,n.yg)("p",null,"As the third step in the experiment flow, monitor the launched experiment. H2O LLM Studio allows you to inspect your experiment (model) during and after model training. Simple interactive graphs in H2O LLM Studio allow you to understand the impact of selected hyperparameter values during and after model training. You can then adjust the ",(0,n.yg)("a",{parentName:"p",href:"../concepts#parameters-and-hyperparameters"},"hyperparameters")," to further optimize model performance. "),(0,n.yg)("p",null,"To learn about viewing and monitoring an experiment, see ",(0,n.yg)("a",{parentName:"p",href:"/h2o-llmstudio/guide/experiments/view-an-experiment"},"View and manage experiments"),"."),(0,n.yg)("h2",{id:"step-4-compare-experiments"},"Step 4: Compare experiments"),(0,n.yg)("p",null,"The H2O LLM studio provides a useful feature  that allows comparing various experiments and analyzing how different model parameters affect model performance. This feature is a powerful tool for fine-tuning your machine-learning models and ensuring they meet your desired performance metrics."),(0,n.yg)("p",null,"To learn about comparing multiple experiments, see ",(0,n.yg)("a",{parentName:"p",href:"/h2o-llmstudio/guide/experiments/compare-experiments"},"Compare experiments"),"."),(0,n.yg)("h2",{id:"step-5-export-a-model-to-hugging-face-hub"},"Step 5: Export a model to Hugging Face Hub"),(0,n.yg)("p",null,"As the final step in the experiment flow, you can export the fine-tuned model to Hugging Face with a single click."),(0,n.yg)("p",null,"To learn about exporting a trained model to Hugging Face Hub, see, ",(0,n.yg)("a",{parentName:"p",href:"/h2o-llmstudio/guide/experiments/export-trained-model"},"Export trained model to Hugging Face"),"."))}d.isMDXComponent=!0}}]);