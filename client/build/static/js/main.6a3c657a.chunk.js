(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{13:function(e,t,n){e.exports={container:"Header_container__2Ucq0",formContainer:"Header_formContainer__Tyy13",searchInput:"Header_searchInput__38LOO",optionsDiv:"Header_optionsDiv__97tJx",option:"Header_option__11863",refreshBtn:"Header_refreshBtn__ilLXr",createBtn:"Header_createBtn__33dy3"}},14:function(e,t,n){e.exports={mainContainer:"Details_mainContainer__1zEzZ",dogDetails:"Details_dogDetails__39JSE",dogImage:"Details_dogImage__2QWYK",infoContainer:"Details_infoContainer__AqC_L",changeDogBtn:"Details_changeDogBtn__2C0m-",detailsDiv:"Details_detailsDiv__2EiXp",homeBtn:"Details_homeBtn__3fU87",loading:"Details_loading__24wYA"}},16:function(e,t,n){e.exports={pagesContainer:"Pagination_pagesContainer__3RFzU",pageBtn:"Pagination_pageBtn__2ut1Y",active:"Pagination_active__367dh"}},21:function(e,t,n){e.exports={dogImage:"Dog_dogImage__3CzWS",card:"Dog_card__2SAU3",dogInfo:"Dog_dogInfo__2qyy_"}},24:function(e,t,n){e.exports={container:"Landing_container__3Xhay",mainText:"Landing_mainText__1uo3P",beginBtn:"Landing_beginBtn__hDOTG"}},25:function(e,t,n){e.exports={dogsContainer:"Home_dogsContainer__TiWh7",loading:"Home_loading__1y9GY"}},29:function(e,t,n){e.exports={container:"Footer_container__22snZ",socialContainer:"Footer_socialContainer__1xKJo"}},3:function(e,t,n){e.exports={tempContainer:"CreateDog_tempContainer__1qAie",formContainer:"CreateDog_formContainer__2u3Tb",infoInput:"CreateDog_infoInput__uygI9",tempDiv:"CreateDog_tempDiv__2TkrJ",numberInput:"CreateDog_numberInput__1VtAN",numberInputs:"CreateDog_numberInputs__3hGTM",tempDivLabel:"CreateDog_tempDivLabel__3z5a9",mainContainer:"CreateDog_mainContainer__16ajk",errorsList:"CreateDog_errorsList__36ZmM",inputError:"CreateDog_inputError__2xGe-",deleteTempBtn:"CreateDog_deleteTempBtn__1ewY9",overlay:"CreateDog_overlay__8Sx53",submitNotice:"CreateDog_submitNotice__2C3i_",submitBtn:"CreateDog_submitBtn__2kwD_",selectedTemps:"CreateDog_selectedTemps__2XvJU",link:"CreateDog_link__3CmzT",homeBtn:"CreateDog_homeBtn__3dZeH"}},47:function(e,t,n){},48:function(e,t,n){},49:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),c=n(22),i=n.n(c),l=n(9),s=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,50)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),a(e),r(e),c(e),i(e)}))},o=n(6),A=n(27),g=n(32),u=n(15),m=n(2),h="GET_ALL_DOGS",d="GET_DOGS_FROM_API",j="GET_DOGS_FROM_DB",b="GET_DOGS_BY_QUERY",p="GET_DOG_DETAILS",O="GET_TEMPERAMENTS",f="FILTER_BY_TEMPERAMENTS",x="SORT_BY_WEIGHT",C="SORT_ALPHABETICALLY",D="RESET_ARRAYS",v={allDogs:[],dogsFromApi:[],dogsFromDb:[],dogDetails:{},filteredDogs:[],dogsSearched:[],temperaments:[]},M=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case h:return Object(m.a)(Object(m.a)({},e),{},{allDogs:t.payload});case d:return Object(m.a)(Object(m.a)({},e),{},{dogsFromApi:Object(u.a)(e.allDogs).filter((function(e){return"number"===typeof e.id}))});case j:return Object(m.a)(Object(m.a)({},e),{},{dogsFromDb:Object(u.a)(e.allDogs).filter((function(e){return!Number(e.id)}))});case b:return Object(m.a)(Object(m.a)({},e),{},{dogsSearched:t.payload});case p:return Object(m.a)(Object(m.a)({},e),{},{dogDetails:t.payload});case O:return Object(m.a)(Object(m.a)({},e),{},{temperaments:t.payload});case f:return Object(m.a)(Object(m.a)({},e),{},{filteredDogs:Object(u.a)(e.allDogs).filter((function(e){return e.temperament.includes(t.payload)}))});case x:return"ascending"===t.payload?Object(m.a)(Object(m.a)({},e),{},{allDogs:Object(u.a)(e.allDogs).sort((function(e,t){return Number(e.weight.split(" ")[e.weight.split(" ").length-2]-Number(t.weight.split(" ")[t.weight.split(" ").length-2]))}))}):Object(m.a)(Object(m.a)({},e),{},{allDogs:Object(u.a)(e.allDogs).sort((function(e,t){return Number(t.weight.split(" ")[t.weight.split(" ").length-2]-Number(e.weight.split(" ")[e.weight.split(" ").length-2]))}))});case C:return"ascending"===t.payload?Object(m.a)(Object(m.a)({},e),{},{allDogs:Object(u.a)(e.allDogs).sort((function(e,t){return e.name.localeCompare(t.name)}))}):Object(m.a)(Object(m.a)({},e),{},{allDogs:Object(u.a)(e.allDogs).sort((function(e,t){return t.name.localeCompare(e.name)}))});case D:return Object(m.a)(Object(m.a)({},e),{},{dogsFromApi:[],dogsFromDb:[],filteredDogs:[],dogsSearched:[]});default:return e}},y=Object(A.b)(M,Object(A.a)(g.a)),w=n(5),N=n(24),E=n.n(N),B=n(0),k=function(){return Object(B.jsxs)("div",{className:E.a.container,children:[Object(B.jsxs)("div",{className:E.a.mainText,children:[Object(B.jsx)("h1",{children:"Welcome to the Doggie-App"}),Object(B.jsx)("p",{children:"By clicking the button below you'll be able to look for any dog race along with it's main characteristics and much more, have fun!"})]}),Object(B.jsx)(l.b,{to:"/home",children:Object(B.jsx)("button",{className:E.a.beginBtn,children:"Click to begin"})})]})},T=n(10),I=function(){return function(e){fetch("http://localhost:3001/dogs").then((function(e){return e.json()})).then((function(t){return e({type:h,payload:t})})).catch((function(e){return console.error(e)}))}},S=function(){return{type:d}},H=function(){return{type:j}},P=function(e){return function(t){fetch("http://localhost:3001/dogs?name=".concat(e)).then((function(e){return e.json()})).then((function(e){return t({type:b,payload:e})})).catch((function(e){return console.error(e)}))}},W=function(e){return function(t){fetch("http://localhost:3001/dogs/".concat(e)).then((function(e){return e.json()})).then((function(e){return t({type:p,payload:e})})).catch((function(e){return console.error(e)}))}},F=function(){return function(e){fetch("http://localhost:3001/temperaments").then((function(e){return e.json()})).then((function(t){return e({type:O,payload:t})})).catch((function(e){return console.error(e)}))}},Y=function(e){return{type:f,payload:e}},Q=function(){return{type:D}},G=function(e){return{type:x,payload:e}},L=function(e){return{type:C,payload:e}},Z=function(e){var t={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)};fetch("http://localhost:3001/dogs",t).then((function(e){return e.json()})).then((function(e){return console.log(e)})).catch((function(e){return console.error(e)}))},z={handleChange:function(e,t){t(e.target.value)},handleSubmit:function(e,t,n,a,r,c){t(n()),e.preventDefault(),t(a(c)),r(""),document.querySelector("input").blur()},filterByTemperament:function(e,t,n){e(t()),e(n(document.getElementById("filter-temp").value))},filterByType:function(e,t,n,a){e(t()),e("Existing"===document.getElementById("filter-type").value?n():a())},handleSorting:function(e,t,n,a){e(t());var r=document.getElementById("sort").value,c=r.split(" ")[1];r.includes("Weight")?e(n(c)):e(a(c))},handleRefresh:function(e,t,n){e(t()),e(n())}},q=n(13),U=n.n(q),J=function(){var e=Object(o.b)(),t=Object(o.c)((function(e){return e.temperaments})),n=Object(a.useState)(""),r=Object(T.a)(n,2),c=r[0],i=r[1];return t.length||e(F()),Object(B.jsxs)("header",{className:U.a.container,children:[Object(B.jsxs)("form",{onSubmit:function(t){return z.handleSubmit(t,e,Q,P,i,c)},className:U.a.formContainer,children:[Object(B.jsx)("input",{className:U.a.searchInput,type:"text",value:c,onChange:function(e){return z.handleChange(e,i)},placeholder:"Search for any race..."}),Object(B.jsxs)("div",{className:U.a.optionsDiv,children:[Object(B.jsxs)("div",{className:U.a.option,children:[Object(B.jsx)("label",{htmlFor:"filter-temp",children:"Filter by temperament"}),Object(B.jsx)("select",{onChange:function(){return z.filterByTemperament(e,Q,Y)},id:"filter-temp",children:t&&t.map((function(e){return Object(B.jsx)("option",{value:e,children:e},e)}))})]}),Object(B.jsxs)("div",{className:U.a.option,children:[Object(B.jsx)("label",{htmlFor:"filter-type",children:"Filter by type"}),Object(B.jsxs)("select",{onChange:function(){return z.filterByType(e,Q,S,H)},id:"filter-type",children:[Object(B.jsx)("option",{value:"Existing",children:"Existing"}),Object(B.jsx)("option",{value:"Created",children:"Created"})]})]}),Object(B.jsxs)("div",{className:U.a.option,children:[Object(B.jsx)("label",{htmlFor:"sort",children:"Sort by"}),Object(B.jsxs)("select",{onChange:function(){return z.handleSorting(e,Q,G,L)},id:"sort",children:[Object(B.jsx)("option",{value:"Alphabetically descending",children:"Alphabetically descending"}),Object(B.jsx)("option",{value:"Alphabetically ascending",children:"Alphabetically ascending"}),Object(B.jsx)("option",{value:"Weight descending",children:"Weight descending"}),Object(B.jsx)("option",{value:"Weight ascending",children:"Weight ascending"})]})]}),Object(B.jsx)("button",{onClick:function(){return z.handleRefresh(e,Q,I)},className:U.a.refreshBtn,children:"Refresh"})]})]}),Object(B.jsx)(l.b,{to:"/create/dog",children:Object(B.jsx)("button",{className:U.a.createBtn,children:"Create your own dog! \u2197"})})]})},X={handleFilter:function(e,t,n,a,r,c,i){var l,s,o=e*t,A=o-t,g=function(e){return e.slice(A,o)};return n.length?(l=g(n),s=n.length):a.length?(l=g(a),s=a.length):r.length?(l=g(r),s=r.length):c.length?(l=g(c),s=c.length):(l=g(i),s=i.length),{currentDogs:l,currentLength:s}},handlePageChanging:function(e,t,n,a,r){var c=Math.ceil(t/n);"\u25c1"===e.target.innerHTML&&1===r?a(c):"\u25b7"===e.target.innerHTML&&r===c?a(1):"\u25c1"===e.target.innerHTML?a((function(e){return--e})):"\u25b7"===e.target.innerHTML?a((function(e){return++e})):a(Number(e.target.innerHTML))}},V=n(21),K=n.n(V),R=function(e){var t=e.id,n=e.image,a=e.name,r=e.temperament,c=e.weight,i="";return Array.isArray(r)&&(i=r.map((function(e){return e.name})).join(", ")),Object(B.jsxs)("figure",{className:K.a.card,children:[Object(B.jsx)(l.b,{className:K.a.link,to:"/dog/".concat(t),children:Object(B.jsx)("img",{className:K.a.dogImage,src:n,alt:a})}),Object(B.jsx)("span",{children:a}),Object(B.jsxs)("div",{className:K.a.dogInfo,children:[Object(B.jsxs)("p",{children:[Object(B.jsx)("em",{children:"- Temperament:"})," ",i||r]}),Object(B.jsxs)("p",{children:[Object(B.jsx)("em",{children:"- Weight:"})," ",c]})]})]})},_={highlightActivePage:function(e,t,n,a,r){var c=e.target,i=document.querySelectorAll("li");i.forEach((function(e){return e.classList.remove(r.active)})),Number(c.innerHTML)?(c.classList.add(r.active),n(Number(c.innerHTML))):"\u25c1"===c.innerHTML&&1===t?(n(a.length),i[a.length].classList.add(r.active)):"\u25b7"===c.innerHTML&&t===a.length?(n(1),i[1].classList.add(r.active)):"\u25c1"===c.innerHTML?(n((function(e){return--e})),i[t-1].classList.add(r.active)):"\u25b7"===c.innerHTML&&(n((function(e){return++e})),i[t+1].classList.add(r.active))}},$=n(16),ee=n.n($),te=function(e){for(var t=e.dogsPerPage,n=e.totalDogs,r=e.handlePageChanging,c=[],i=Object(a.useState)(1),l=Object(T.a)(i,2),s=l[0],o=l[1],A=1;A<=Math.ceil(n/t);A++)c.push(A);return Object(B.jsx)("nav",{children:Object(B.jsxs)("ul",{className:ee.a.pagesContainer,onClick:function(e){return _.highlightActivePage(e,s,o,c,ee.a)},children:[Object(B.jsx)("li",{className:ee.a.pageBtn,onClick:function(e){return r(e)},children:"\u25c1"}),c.map((function(e){return Object(B.jsx)("li",{className:ee.a.pageBtn,onClick:function(e){return r(e)},children:e},e)})),Object(B.jsx)("li",{className:ee.a.pageBtn,onClick:function(e){return r(e)},children:"\u25b7"})]})})},ne=n.p+"static/media/generic-dog.feeb2d4c.jpg",ae=n.p+"static/media/loading.abfc2d1d.gif",re=n(25),ce=n.n(re),ie=function(){Object(a.useEffect)((function(){e(I())}),[]);var e=Object(o.b)(),t=Object(o.c)((function(e){return e.allDogs})),n=Object(o.c)((function(e){return e.dogsSearched})),r=Object(o.c)((function(e){return e.filteredDogs})),c=Object(o.c)((function(e){return e.dogsFromApi})),i=Object(o.c)((function(e){return e.dogsFromDb})),l=Object(a.useState)(1),s=Object(T.a)(l,2),A=s[0],g=s[1],u=X.handleFilter(A,8,r,n,c,i,t);return u.currentLength?Object(B.jsxs)("div",{className:ce.a.mainContainer,children:[Object(B.jsx)(te,{dogsPerPage:8,totalDogs:u.currentLength,handlePageChanging:function(e){return X.handlePageChanging(e,u.currentLength,8,g,A)}}),Object(B.jsx)("div",{className:ce.a.dogsContainer,children:u.currentDogs&&u.currentDogs.map((function(e){return Object(B.jsx)(R,{id:e.id,image:e.image||ne,name:e.name,temperament:e.temperament,weight:e.weight,height:e.height,life_span:e.life_span},e.id)}))})]}):Object(B.jsx)("img",{className:ce.a.loading,src:ae,alt:"Loading"})},le={handleDogChanging:function(e,t,n,a,r,c){var i=Number(t)?n.findIndex((function(e){return e.id===Number(t)})):n.findIndex((function(e){return e.id===t}));"Next"===e.target.innerHTML&&i===n.length-1?(a(n[0].id),r(c(t))):"Next"===e.target.innerHTML?(a(n[i+1].id),r(c(t))):"Previous"===e.target.innerHTML&&0===i?(a(n[n.length-1].id),r(c(t))):"Previous"===e.target.innerHTML&&(a(n[i-1].id),r(c(t)))}},se=n(14),oe=n.n(se),Ae=function(){var e,t=Object(o.b)(),n=Object(o.c)((function(e){return e.dogDetails})),r=Object(o.c)((function(e){return e.allDogs})),c=Object(w.f)().id,i=Object(a.useState)(c),s=Object(T.a)(i,2),A=s[0],g=s[1];return r.length||t(I()),Object(a.useEffect)((function(){t(W(A))}),[n]),Array.isArray(n.temperament)&&(e=n.temperament.map((function(e){return e.name})).join(", ")),!Object.keys(n).length||Number(A)&&n.id!==Number(A)||!Number(A)&&n.id!==A?Object(B.jsx)("img",{className:oe.a.loading,src:ae,alt:"Loading"}):Object(B.jsxs)("div",{className:oe.a.mainContainer,children:[Object(B.jsx)("span",{className:oe.a.changeDogBtn,onClick:function(e){return le.handleDogChanging(e,A,r,g,t,W)},children:"Previous"}),Object(B.jsxs)("div",{className:oe.a.detailsDiv,children:[Object(B.jsxs)("article",{className:oe.a.dogDetails,children:[Object(B.jsx)("img",{className:oe.a.dogImage,src:n.image||ne,alt:"".concat(n.name)}),Object(B.jsxs)("div",{className:oe.a.infoContainer,children:[Object(B.jsxs)("span",{children:[Object(B.jsx)("em",{children:"- Race:"})," ",n.name]}),Object(B.jsxs)("span",{children:[Object(B.jsx)("em",{children:"- Weight:"})," ",n.weight]}),Object(B.jsxs)("span",{children:[Object(B.jsx)("em",{children:"- Height:"})," ",n.height]}),Object(B.jsxs)("span",{children:[Object(B.jsx)("em",{children:"- Life span:"})," ",n.life_span]}),Object(B.jsxs)("p",{children:[Object(B.jsx)("em",{children:"- Temperament:"})," ",e||n.temperament]})]})]}),Object(B.jsx)(l.b,{to:"/home",children:Object(B.jsx)("button",{className:oe.a.homeBtn,children:"Home"})})]}),Object(B.jsx)("span",{className:oe.a.changeDogBtn,onClick:function(e){return le.handleDogChanging(e,A,r,g,t,W)},children:"Next"})]})},ge=n(20),ue={validateForm:function(e,t){var n={};return e.race?/^[A-Za-z\s]*$/.test(e.race)?t.includes(e.race)&&(n.race="Race already exists"):n.race="Only letters allowed in race":n.race="Race is required",e.minHeight&&e.maxHeight?/^[0-9]*$/.test(e.minHeight)&&/^[0-9]*$/.test(e.maxHeight)?e.minHeight>=e.maxHeight&&(n.height="Min height has to be less than max height"):n.height="Only positive numbers allowed in height":n.height="Min height and max height are required",e.minWeight&&e.maxWeight?/^[0-9]*$/.test(e.minWeight)&&/^[0-9]*$/.test(e.maxWeight)?e.minWeight>=e.maxWeight&&(n.weight="Min weight has to be less than max weight"):n.weight="Only positive numbers allowed in weight":n.weight="Min weight and max weight are required",e.minYears&&e.maxYears?/^[0-9]*$/.test(e.minYears)&&/^[0-9]*$/.test(e.maxYears)?e.minYears>=e.maxYears&&(n.years="Min years has to be less than max years"):n.years="Only positive numbers allowed in years":n.years="Min years and max years are required",n},displayTemperaments:function(e,t,n,a,r,c,i){var l=document.getElementById("tempOptions").value;r.innerHTML.includes(l)||5===r.innerHTML.split(",").length||(e((function(e){return e+(e.split("").length>1?", ".concat(l):"".concat(l))})),t(Object(m.a)(Object(m.a)({},c),{},{temperament:a})),n(ue.validateForm(Object(m.a)(Object(m.a)({},c),{},{temperament:a}),i)),r.innerHTML=a)},deleteTemperament:function(e,t,n){e.preventDefault();var a=n.innerHTML.split(",");t(a.filter((function(e){return e!==a[a.length-1]})).join(","))},handleInput:function(e,t,n,a,r,c){t(Object(m.a)(Object(m.a)({},a),{},Object(ge.a)({temperament:r},e.target.name,e.target.value))),n(ue.validateForm(Object(m.a)(Object(m.a)({},a),{},Object(ge.a)({temperament:r},e.target.name,e.target.value)),c))},handleSubmit:function(e,t,n,a,r,c,i,l,s,o){if(e.preventDefault(),!Object.keys(t).length){var A=a.innerHTML.split(", "),g=A[A.length-1];n(Object(m.a)(Object(m.a)({},r),{},{temperament:"".concat(c,", ").concat(g)})),i({race:"",minHeight:"",maxHeight:"",minWeight:"",maxWeight:"",minYears:"",maxYears:"",temperament:""}),l({race:"Race is required",height:"Min height and max height are required",weight:"Min weight and max weight are required",years:"Min years and max years are required"}),a.innerHTML="",s(""),o(!0),setTimeout((function(){o(!1)}),2500)}}},me=ue,he=n(3),de=n.n(he),je=function(){var e=Object(a.useState)({race:"",minHeight:"",maxHeight:"",minWeight:"",maxWeight:"",minYears:"",maxYears:"",temperament:""}),t=Object(T.a)(e,2),n=t[0],r=t[1],c=Object(a.useState)({race:"Race is required",height:"Min height and max height are required",weight:"Min weight and max weight are required",years:"Min years and max years are required"}),i=Object(T.a)(c,2),s=i[0],A=i[1],g=Object(a.useState)(""),u=Object(T.a)(g,2),m=u[0],h=u[1],d=Object(a.useState)(!1),j=Object(T.a)(d,2),b=j[0],p=j[1],O=Object(o.b)(),f=Object(o.c)((function(e){return e.temperaments})),x=Object(o.c)((function(e){return e.allDogs})).map((function(e){return e.name})),C=document.getElementById("tempText");return f.length||O(F()),Object(B.jsxs)("div",{className:de.a.mainContainer,children:[Object(B.jsx)(l.b,{className:de.a.link,to:"/home",children:Object(B.jsx)("button",{className:de.a.homeBtn,children:"Home"})}),Object(B.jsx)("h1",{children:"Fill the info to create a new dog"}),b&&Object(B.jsx)("div",{className:de.a.overlay,children:Object(B.jsx)("div",{className:de.a.submitNotice,children:Object(B.jsx)("p",{children:"Dog created succesfully!"})})}),Object(B.jsxs)("form",{onSubmit:function(e){return me.handleSubmit(e,s,Z,C,n,m,r,A,h,p)},className:de.a.formContainer,children:[Object(B.jsxs)("div",{className:de.a.infoInput,children:[Object(B.jsx)("div",{children:Object(B.jsx)("label",{htmlFor:"raceInput",children:"Race"})}),Object(B.jsx)("input",{id:"raceInput",className:s.race&&de.a.inputError,onChange:function(e){return me.handleInput(e,r,A,n,m,x)},name:"race",type:"text",value:n.race,placeholder:"Race of your dog"})]}),Object(B.jsxs)("div",{className:de.a.numberInputs,children:[Object(B.jsxs)("div",{className:de.a.infoInput,children:[Object(B.jsxs)("label",{htmlFor:"heightInput",children:["Height ","(cm)"]}),Object(B.jsxs)("div",{children:[Object(B.jsx)("input",{id:"heightInput",onChange:function(e){return me.handleInput(e,r,A,n,m,x)},name:"minHeight",className:"".concat(de.a.numberInput," ").concat(s.height&&de.a.inputError),type:"number",value:n.minHeight,placeholder:"Min"}),Object(B.jsx)("input",{onChange:function(e){return me.handleInput(e,r,A,n,m,x)},name:"maxHeight",className:"".concat(de.a.numberInput," ").concat(s.height&&de.a.inputError),type:"number",value:n.maxHeight,placeholder:"Max"})]})]}),Object(B.jsxs)("div",{className:de.a.infoInput,children:[Object(B.jsxs)("label",{htmlFor:"weightInput",children:["Weight ","(Kg)"]}),Object(B.jsxs)("div",{children:[Object(B.jsx)("input",{id:"weightInput",onChange:function(e){return me.handleInput(e,r,A,n,m,x)},name:"minWeight",className:"".concat(de.a.numberInput," ").concat(s.weight&&de.a.inputError),type:"number",value:n.minWeight,placeholder:"Min"}),Object(B.jsx)("input",{onChange:function(e){return me.handleInput(e,r,A,n,m,x)},name:"maxWeight",className:"".concat(de.a.numberInput," ").concat(s.weight&&de.a.inputError),type:"number",value:n.maxWeight,placeholder:"Max"})]})]}),Object(B.jsxs)("div",{className:de.a.infoInput,children:[Object(B.jsxs)("label",{htmlFor:"yearsInput",children:["Life span ","(years)"]}),Object(B.jsxs)("div",{children:[Object(B.jsx)("input",{id:"yearsInput",onChange:function(e){return me.handleInput(e,r,A,n,m,x)},name:"minYears",className:"".concat(de.a.numberInput," ").concat(s.years&&de.a.inputError),type:"number",value:n.minYears,placeholder:"Min"}),Object(B.jsx)("input",{onChange:function(e){return me.handleInput(e,r,A,n,m,x)},name:"maxYears",className:"".concat(de.a.numberInput," ").concat(s.years&&de.a.inputError),type:"number",value:n.maxYears,placeholder:"Max"})]})]})]}),Object(B.jsxs)("div",{className:de.a.infoInput,children:[Object(B.jsxs)("div",{className:de.a.tempDivLabel,children:[Object(B.jsx)("label",{htmlFor:"",children:"Select up to 5 temperaments"}),Object(B.jsx)("div",{className:de.a.deleteTempBtn,onClick:function(e){return me.deleteTemperament(e,h,C)},children:"Delete"})]}),Object(B.jsxs)("div",{className:de.a.tempDiv,children:[Object(B.jsx)("div",{className:de.a.tempContainer,children:Object(B.jsx)("span",{id:"tempText",className:de.a.selectedTemps,children:m})}),Object(B.jsx)("select",{onChange:function(){return me.displayTemperaments(h,r,A,m,C,n,x)},multiple:!0,size:"5",id:"tempOptions",children:f&&f.map((function(e){return Object(B.jsx)("option",{value:e,children:e},e)}))})]})]}),Object(B.jsx)("input",{className:de.a.submitBtn,type:"submit",value:"Create dog"})]}),Object.keys(s)&&Object(B.jsx)("ul",{className:de.a.errorsList,children:Object.keys(s).map((function(e){return Object(B.jsx)("li",{children:s[e]},s[e])}))})]})},be=n.p+"static/media/Github-logo.492cd893.png",pe=n(29),Oe=n.n(pe),fe=function(){return Object(B.jsxs)("footer",{className:Oe.a.container,children:[Object(B.jsx)("div",{children:Object(B.jsx)("p",{children:"\xa9 2022, This web application was made by Efrain Chacon for the Henry bootcamp individual project"})}),Object(B.jsxs)("div",{className:Oe.a.socialContainer,children:[Object(B.jsx)("a",{target:"_blank",href:"https://www.linkedin.com/in/efra%C3%ADn-chac%C3%B3n-521485234/",children:Object(B.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAoAAAAKACAMAAAA7EzkRAAAACXBIWXMAAAsTAAALEwEAmpwYAAADAFBMVEVHcEwllc0ml88ll88opsoll84mmMsmlM0ll9AnlM4lls8lls4mls44e7gmls4lmM8mlc4ll88nk9Amlc8nlc8pmc8mlc8pl9Ellc4mlswhn8Imlc8ll88mlM8mlMommM8mlc0llNAllNAnl80lls4mlM8mlc8klM0ml88nl84lksomls4nl88ll9Alls0mls4ml84ll80mmM0ml84lmM0lls4lls4nls4ml88ml84lls0mls8mk84mlM8lls4kls4mlM0ll84lls0llM4kl88llM8mls0kl84ilM0llM8mls4mls4mlNAkls0kls4kmM0ml84mlc0kmM8nltAlls4ml80nl80llM8kl8wmlcwmls0lmM8mmM0nl9Aml88kls0nlc0lls4kl88nl8////8ml88mls8ll88nl80rmM8nlc8ol88klM0AhMUAgcQtmdAtms8Adb+w2u2x2O1YrtoAcr0vm9Cv2e0llc8ll80nl84AfcSf0OkAgsQnlc2VzOcWjckAg8Maj8uJxOIqmM8llc0nl8wpmM8ll8wnlcwAfcIpl88Qi8kAgMQAg8YAfcMklcwmls4nl9AAgMMnlM8AdL4Ae8EekswFhscMisknldADhsYAg8Qilc0Sjcq43e8AecAHh8cnmM8KiMcgk80llM8nlM0nls8bkcwKicgtmtAAhMb///4omM8AfsM7oNI2ntEsmdATjskckcu/3/AlldAllM0mlc4ol80ZkMv9/f0glMwXjsqUy+Z9wOEumtCk0+oAcL2ZzucqmM4/otQAdr8ll9DO5vTq9PmCwuK12u4DhMcAgcWp1evE4vFltNy73u8Ag8XY6/Yym9Apls/f7/e43O94veFwut/I5PKf0Oj6/PyJxeWOyOVgstsqmtCh0enQ6POt1+xDpdRKp9bj8ficz+gnmM1ottxTrNiGxOOWzOdcsNrm8/j1+vzb7fbS6fVOqNdsuN7M5vLw+PpXrdgnls4ql9EtmM4Acr90vN+VzeYAb7yw2e2w2esAZ7jsqjnLAAAAY3RSTlMAdDQiBMoVku+zi0NwAeFqj5krVd4SJgqwMAcb0UcYlWXQHvWceMzHubwP1G3qTMDZhUBPPYg33GG2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",alt:"LinkedIn logo"})}),Object(B.jsx)("a",{target:"_blank",href:"https://github.com/ChaconEfrain",children:Object(B.jsx)("img",{src:be,alt:"Github logo"})})]})]})};n(47);var xe=function(){return Object(B.jsx)("div",{className:"App",children:Object(B.jsxs)(w.c,{children:[Object(B.jsx)(w.a,{exact:!0,path:"/",children:Object(B.jsx)(k,{})}),Object(B.jsxs)(w.a,{exact:!0,path:"/home",children:[Object(B.jsx)(J,{}),Object(B.jsx)(ie,{}),Object(B.jsx)(fe,{})]}),Object(B.jsx)(w.a,{exact:!0,path:"/dog/:id",children:Object(B.jsx)(Ae,{})}),Object(B.jsx)(w.a,{exact:!0,path:"/create/dog",children:Object(B.jsx)(je,{})})]})})};n(48);i.a.render(Object(B.jsx)(r.a.StrictMode,{children:Object(B.jsx)(o.a,{store:y,children:Object(B.jsx)(l.a,{children:Object(B.jsx)(xe,{})})})}),document.getElementById("root")),s()}},[[49,1,2]]]);
//# sourceMappingURL=main.6a3c657a.chunk.js.map