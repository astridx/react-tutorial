(this["webpackJsonpreact-tutorial"]=this["webpackJsonpreact-tutorial"]||[]).push([[0],{14:function(e,t,a){},15:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(6),i=a.n(l),u=a(8),c=a(1),o=a(2),m=a(4),s=a(3),h=function(){return r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Name"),r.a.createElement("th",null,"Aufgabe")))},b=function(e){var t=e.TodoDaten.map((function(t,a){return r.a.createElement("tr",{key:a},r.a.createElement("td",null,t.name),r.a.createElement("td",null,t.aufgabe),r.a.createElement("td",null,r.a.createElement("button",{onClick:function(){return e.removeListeneintrag(a)}},"Delete")))}));return r.a.createElement("tbody",null,t)},f=function(e){var t=e.TodoDaten,a=e.removeListeneintrag;return r.a.createElement("table",{className:"table table-striped"},r.a.createElement(h,null),r.a.createElement(b,{TodoDaten:t,removeListeneintrag:a}))},g=a(7),d=function(e){Object(m.a)(a,e);var t=Object(s.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).handleChange=function(e){var t=e.target,a=t.name,r=t.value;n.setState(Object(g.a)({},a,r))},n.submitForm=function(){n.props.handleSubmit(n.state),n.setState(n.initialState)},n.initialState={name:"",aufgabe:""},n.state=n.initialState,n}return Object(o.a)(a,[{key:"render",value:function(){var e=this.state,t=e.name,a=e.aufgabe;return r.a.createElement("form",null,r.a.createElement("label",{for:"name"},"Name"),r.a.createElement("input",{type:"text",name:"name",id:"name",value:t,onChange:this.handleChange}),r.a.createElement("label",{for:"aufgabe"},"Aufgabe"),r.a.createElement("input",{type:"text",name:"aufgabe",id:"aufgabe",value:a,onChange:this.handleChange}),r.a.createElement("input",{type:"button",value:"Neuen Listeneintrag absenden",onClick:this.submitForm}))}}]),a}(n.Component),E=function(e){Object(m.a)(a,e);var t=Object(s.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={data:[]},e}return Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=this;fetch("https://hn.algolia.com/api/v1/search?query=React").then((function(e){return e.json()})).then((function(t){e.setState({data:t.hits})}))}},{key:"render",value:function(){var e=this.state.data.map((function(e,t){return r.a.createElement("tr",null,r.a.createElement("td",null,r.a.createElement("a",{href:e.url},e.title)))}));return r.a.createElement("div",{className:"container"},r.a.createElement("hr",null),r.a.createElement("hr",null),r.a.createElement("hr",null),r.a.createElement("h1",null,"Hacker News"),r.a.createElement("table",{className:"table"},e))}}]),a}(n.Component),v=function(e){Object(m.a)(a,e);var t=Object(s.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={listeneintraege:[{name:"Uschi",aufgabe:"Grundst\xfcck bewachen"},{name:"Elmar",aufgabe:"M\xfcll entworgen"},{name:"Astrid",aufgabe:"Buch lesen"},{name:"Nina",aufgabe:"Staubsaugen"}]},e.handleSubmit=function(t){e.setState({listeneintraege:[].concat(Object(u.a)(e.state.listeneintraege),[t])})},e.removeListeneintrag=function(t){var a=e.state.listeneintraege;e.setState({listeneintraege:a.filter((function(e,a){return a!==t}))})},e}return Object(o.a)(a,[{key:"render",value:function(){var e=this.state.listeneintraege;return r.a.createElement("div",null,r.a.createElement(f,{TodoDaten:e,removeListeneintrag:this.removeListeneintrag}),r.a.createElement(d,{handleSubmit:this.handleSubmit}),r.a.createElement(E,null))}}]),a}(n.Component);a(14);i.a.render(r.a.createElement(v,null),document.getElementById("root"))},9:function(e,t,a){e.exports=a(15)}},[[9,1,2]]]);
//# sourceMappingURL=main.0eb3dc04.chunk.js.map