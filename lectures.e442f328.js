import{$c3aae675162b2de6e5167b700184678$init as e}from"./lectures.8530cdd1.js";import{$e5f55b2e41da3fb2956aa19b001706b$init as t,$bf50779a85efbaabc121d74c5253077$init as r,$b16775c2d96d9b6bd584730e846d3822$init as n,$d7f3e883460968146cf987de83434c3$init as l}from"./forums.d3b6e00b.js";class c extends t().Collapsible{constructor(){super("#collapsible-content",!0)}render(){super.render(),this.querySelector('[data-element="title"]').innerText=this.getAttribute("title")}}window.customElements.define("collapsible-content",c);class o extends(l().DatabaseConsumer(window.HTMLElement)){constructor(){super(),this.lecturesTemplateId="#lectures-list"}notified(){this.render()}render(){const t=r().databaseManager.getLectures(),l=document.querySelector(this.lecturesTemplateId).content.cloneNode(!0),c=l.querySelector('[data-element="lectures"]');if(t.forEach(t=>{const r=new(e().Lecture);r.lecture=t,c.appendChild(r)}),new window.URL(window.location.toString()).searchParams.has("new")){const e=()=>{window.location.href=n().createUrl("lectures")},t=l.querySelector('[data-element="new-modal"]');t.classList.add("is-active"),t.querySelector('[data-element="new-form"]').onsubmit=e=>{e.preventDefault();const t=e.target.querySelector("input").value,l=r().databaseManager.addLecture(t);window.location.href=n().createUrl("lecture",l.$loki)},t.querySelector('[data-element="cancel-button"]').onclick=e,t.querySelector('[data-element="close-button"]').onclick=e}this.innerHTML="",this.appendChild(l)}}window.customElements.define("lectures-list",o);
//# sourceMappingURL=lectures.e442f328.js.map