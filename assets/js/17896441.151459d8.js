"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[401],{2383:(e,t,n)=>{n.d(t,{A:()=>l});var a=n(8168),i=n(6540),s=n(1622);function l(e){const t=i.Children.toArray(e.children),n=t.find((e=>i.isValidElement(e)&&"summary"===e.props?.mdxType)),l=i.createElement(i.Fragment,null,t.filter((e=>e!==n)));return i.createElement(s.A,(0,a.A)({},e,{open:!0,summary:n}),l)}},6902:(e,t,n)=>{n.d(t,{A:()=>r});var a=n(6540),i=n(5489),s=n(4586),l=n(6347),o=n(4516),c=n(1963);function r(e){const t=(0,s.A)(),{pathname:n}=(0,l.zy)(),r=t?.siteMetadata?.siteVersion,u=t?.siteConfig?.title,d=t?.siteConfig?.customFields?.feedbackAssignee,A=t?.siteConfig?.customFields?.feedbackLabels,m=A?`labels=${A.join("+")}&`:"";return n&&!n.includes("/blog")?a.createElement(a.Fragment,null,a.createElement(o.A,e),a.createElement("hr",null),a.createElement(c.A,{title:"Feedback",type:"note"},a.createElement("ul",null,a.createElement("li",null,a.createElement(i.A,{to:`https://github.com/h2oai/docs-issues-requests/issues/new?assignees=${d}&${m}body=%23%23%23%20Documentation%20issue%2Frequest%0A%0A%3C!--%20Please%20provide%20a%20clear%20and%20concise%20description%20of%20the%20documentation%20issue%2Frequest%20--%3E%0A%0A%23%23%23%20Additional%20context%0A%0A%3C!--%20Please%20add%20any%20other%20context%20about%20the%20issue%2Frequest%20here%20(e.g.%2C%20images)%20--%3E%0A%0A%23%23%23%20Page%20details%20%0A%0A-%20Application%20name%3A%20${u}%0A-%20Application%20version%3A%20${r}%0A-%20Page%20title%3A%20${n}%20&title=%5BHAIC-APP%5D`},"Submit and view feedback for this page")),a.createElement("li",null,`Send feedback about ${u} to `,a.createElement(i.A,{to:"mailto:cloud-feedback@h2o.ai"},"cloud-feedback@h2o.ai"))))):a.createElement(o.A,e)}}}]);