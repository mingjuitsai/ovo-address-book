(this["webpackJsonpovo-address-book"]=this["webpackJsonpovo-address-book"]||[]).push([[0],{22:function(e,t,a){e.exports=a.p+"static/media/management.1427b09d.svg"},27:function(e,t,a){e.exports=a(38)},32:function(e,t,a){},38:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(21),l=a.n(o),m=a(14),s=(a(32),a(22)),c=a.n(s),i=a(6),p=a(26),u=a(16),h=a(8),E=a(9),y=a(11),d=a(10),v=a(2),N=a(12),b=[{firstName:"Meris",lastName:"Ivanchikov",phone:"126-524-5425",department:"Garden"},{firstName:"Lamond",lastName:"Kubanek",phone:"932-759-3777",department:"Electronics"},{firstName:"Darcee",lastName:"de Quesne",phone:"373-589-2153",department:"Outdoors"},{firstName:"Crichton",lastName:"Rowet",phone:"843-827-1001",department:"Outdoors"},{firstName:"Renae",lastName:"Adnams",phone:"726-292-4384",department:"Garden"},{firstName:"Gabi",lastName:"Matley",phone:"461-488-8118",department:"Outdoors"},{firstName:"Fredrika",lastName:"McBayne",phone:"749-830-8102",department:"Grocery"},{firstName:"Atlante",lastName:"Dawbery",phone:"765-773-9356",department:"Beauty"},{firstName:"Ninette",lastName:"Child",phone:"784-845-7712",department:"Garden"},{firstName:"Pauly",lastName:"Pluthero",phone:"234-646-7175",department:"Automotive"},{firstName:"Merv",lastName:"Pudner",phone:"978-490-1427",department:"Automotive"},{firstName:"Octavius",lastName:"Gatrill",phone:"339-733-3083",department:"Electronics"},{firstName:"Jamal",lastName:"Crosi",phone:"398-406-4241",department:"Books"},{firstName:"Ced",lastName:"Dibbe",phone:"170-361-4487",department:"Beauty"},{firstName:"Brit",lastName:"Dye",phone:"789-132-4127",department:"Toys"}],f=a(23),O=a.n(f);function w(e){return e.employees.map((function(t,a){return r.a.createElement("tr",{key:a},r.a.createElement("td",null,t.firstName),r.a.createElement("td",null,t.lastName),r.a.createElement("td",null,t.phone),r.a.createElement("td",null,t.department),r.a.createElement("td",{hidden:!e.canRemove},r.a.createElement("button",{onClick:function(t){return e.onRowRemove(a,t)}},"Remove")))}))}var g=function(e){function t(e){var a;return Object(h.a)(this,t),(a=Object(y.a)(this,Object(d.a)(t).call(this,e))).state={initialEmployees:[],computedEmpolyees:[]},a.onRemoveEmployee=a.onRemoveEmployee.bind(Object(v.a)(a)),a.searchFilterEmployees=a.searchFilterEmployees.bind(Object(v.a)(a)),a.sortEmployeesByFirstName=a.sortEmployeesByFirstName.bind(Object(v.a)(a)),a.sortEmployeesByLastName=a.sortEmployeesByLastName.bind(Object(v.a)(a)),a.sortEmployeesByDepartment=a.sortEmployeesByDepartment.bind(Object(v.a)(a)),a}return Object(N.a)(t,e),Object(E.a)(t,[{key:"componentDidMount",value:function(){this.setState({initialEmployees:this.props.employees,computedEmpolyees:this.props.employees})}},{key:"componentDidUpdate",value:function(){}},{key:"onRemoveEmployee",value:function(e,t){var a=this.state.computedEmpolyees.slice();a.splice(e,1),this.props.onRemoveEmployee(a),this.setState({computedEmpolyees:a})}},{key:"searchFilterEmployees",value:function(e,t,a){var n;if(!a||!t)return e;"name"===a&&(n=["firstName","lastName"]),"department"===a&&(n=["department"]);var r={keys:n,threshold:.5};return new O.a(e,r).search(t)}},{key:"sortEmployeesByDepartment",value:function(){var e=this.state.computedEmpolyees.sort((function(e,t){var a=e.department.toLowerCase(),n=t.department.toLowerCase();return a<n?-1:a>n?1:0}));this.setState({computedEmpolyees:e})}},{key:"sortEmployeesByLastName",value:function(){var e=this.state.computedEmpolyees.sort((function(e,t){var a=e.lastName.toLowerCase(),n=t.lastName.toLowerCase();return a<n?-1:a>n?1:0}));this.setState({computedEmpolyees:e})}},{key:"sortEmployeesByFirstName",value:function(){var e=this.state.computedEmpolyees.sort((function(e,t){var a=e.firstName.toLowerCase(),n=t.firstName.toLowerCase();return a<n?-1:a>n?1:0}));this.setState({computedEmpolyees:e})}},{key:"render",value:function(){var e=this.state.computedEmpolyees,t=this.props.search,a=this.props.searchBy,n=this.searchFilterEmployees(e,t,a);return r.a.createElement("table",{className:"EmployeeTable"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",{className:"canSort",onClick:this.sortEmployeesByFirstName},"First Name"),r.a.createElement("th",{className:"canSort",onClick:this.sortEmployeesByLastName},"Last Name"),r.a.createElement("th",null,"Phone"),r.a.createElement("th",{className:"canSort",onClick:this.sortEmployeesByDepartment},"Department"),r.a.createElement("th",null,"Action"))),r.a.createElement("tbody",null,r.a.createElement(w,{employees:n,canRemove:this.props.canRemove,onRowRemove:this.onRemoveEmployee})))}}]),t}(r.a.Component);function j(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function S(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?j(a,!0).forEach((function(t){Object(u.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):j(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var k=function(e){function t(e){var a;return Object(h.a)(this,t),(a=Object(y.a)(this,Object(d.a)(t).call(this,e))).onRemoveEmployee=a.onRemoveEmployee.bind(Object(v.a)(a)),a.onNewEmployeeInput=a.onNewEmployeeInput.bind(Object(v.a)(a)),a.onNewEmployeeSubmit=a.onNewEmployeeSubmit.bind(Object(v.a)(a)),a.state={newEmpolyee:{firstName:"",lastName:"",department:"",phone:""}},a.newEmpolyeeForm=r.a.createRef(),a}return Object(N.a)(t,e),Object(E.a)(t,[{key:"onNewEmployeeSubmit",value:function(e){e.preventDefault(),this.newEmpolyeeForm.current.checkValidity()&&(b.unshift(S({},this.state.newEmpolyee)),this.setState({newEmpolyee:{firstName:"",lastName:"",department:"",phone:""}}))}},{key:"onRemoveEmployee",value:function(e){b.splice.apply(b,[0,b.length].concat(Object(p.a)(e)))}},{key:"onNewEmployeeInput",value:function(e){this.setState({newEmpolyee:S({},this.state.newEmpolyee,Object(u.a)({},e.target.name,e.target.value))})}},{key:"render",value:function(){var e=this.state.newEmpolyee;return r.a.createElement("div",{className:"Manage"},r.a.createElement("header",{className:"Manage-header"},r.a.createElement("h1",{className:"Manage-title"},"Add New Empolyee")),r.a.createElement("div",{className:"Manage-form"},r.a.createElement("form",{ref:this.newEmpolyeeForm},r.a.createElement("div",{className:"inputRow"},r.a.createElement("div",{className:"inputCell"},r.a.createElement("label",{htmlFor:"firstName"},"First Name"),r.a.createElement("input",{value:e.firstName,onChange:this.onNewEmployeeInput,type:"text",id:"firstName",name:"firstName",required:!0})),r.a.createElement("div",{className:"inputCell"},r.a.createElement("label",{htmlFor:"lastName"},"Last Name"),r.a.createElement("input",{value:e.lastName,onChange:this.onNewEmployeeInput,type:"text",id:"lastName",name:"lastName",required:!0})),r.a.createElement("div",{className:"inputCell"},r.a.createElement("label",{htmlFor:"phone"},"Phone"),r.a.createElement("input",{value:e.phone,onChange:this.onNewEmployeeInput,type:"text",id:"phone",name:"phone",required:!0})),r.a.createElement("div",{className:"inputCell"},r.a.createElement("label",{htmlFor:"department"},"Department"),r.a.createElement("select",{onChange:this.onNewEmployeeInput,name:"department",value:e.department,required:!0},r.a.createElement("option",{value:"",disabled:!0},"Select department"),r.a.createElement("option",{value:"Garden"},"Garden"),r.a.createElement("option",{value:"Electronics"},"Electronics"),r.a.createElement("option",{value:"Outdoors"},"Outdoors"),r.a.createElement("option",{value:"Grocery"},"Grocery"),r.a.createElement("option",{value:"Beauty"},"Beauty"),r.a.createElement("option",{value:"Automotive"},"Automotive"),r.a.createElement("option",{value:"Books"},"Books"),r.a.createElement("option",{value:"Toys"},"Toys"))),r.a.createElement("div",{className:"inputCell"},r.a.createElement("button",{type:"submit",onClick:this.onNewEmployeeSubmit},"Submit"))))),r.a.createElement(g,{employees:b,onRemoveEmployee:this.onRemoveEmployee,canRemove:!0}))}}]),t}(r.a.Component),B=function(e){function t(e){var a;return Object(h.a)(this,t),(a=Object(y.a)(this,Object(d.a)(t).call(this,e))).state={search:"",searchBy:"name"},a.onSearchInput=a.onSearchInput.bind(Object(v.a)(a)),a.onSearchByInput=a.onSearchByInput.bind(Object(v.a)(a)),a}return Object(N.a)(t,e),Object(E.a)(t,[{key:"onSearchInput",value:function(e){this.setState({search:e.target.value})}},{key:"onSearchByInput",value:function(e){this.setState({searchBy:e.target.value})}},{key:"render",value:function(){return r.a.createElement("div",{className:"Search"},r.a.createElement("header",{className:"Search-header"},r.a.createElement("h1",{className:"Search-title"},"Search")),r.a.createElement("div",{className:"Search-form"},r.a.createElement("form",null,r.a.createElement("div",{className:"inputRow"},r.a.createElement("div",{className:"inputCell"},r.a.createElement("label",{htmlFor:"searchBy"},"Search by:"),r.a.createElement("select",{onChange:this.onSearchByInput,name:"searchBy",value:this.state.searchBy,required:!0},r.a.createElement("option",{value:"name"},"Name"),r.a.createElement("option",{value:"department"},"Department"))),r.a.createElement("div",{className:"inputCell Search-input"},r.a.createElement("label",{htmlFor:"search"},"Search:"),r.a.createElement("input",{value:this.state.search,onChange:this.onSearchInput,type:"text",id:"search",name:"search",required:!0}))))),r.a.createElement(g,{employees:b,search:this.state.search,searchBy:this.state.searchBy,canRemove:!1}))}}]),t}(r.a.Component);var C=function(){return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement("img",{src:c.a,className:"App-logo",alt:"logo"}),r.a.createElement("h1",{className:"App-heading"},"Retail Management"),r.a.createElement("nav",{className:"App-nav"},r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(m.b,{to:"/manage"},"\u262f Manage")),r.a.createElement("li",null,r.a.createElement(m.b,{to:"/search"},"\u26b2 Search"))))),r.a.createElement("main",{className:"App-main"},r.a.createElement(i.d,null,r.a.createElement(i.b,{exact:!0,path:"/"},r.a.createElement(i.a,{to:"/manage"})),r.a.createElement(i.b,{exact:!0,path:"/manage",component:k}),r.a.createElement(i.b,{exact:!0,path:"/search",component:B}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(m.a,null,r.a.createElement(C,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[27,1,2]]]);
//# sourceMappingURL=main.2d529009.chunk.js.map