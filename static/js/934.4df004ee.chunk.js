"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[934],{411:function(e,i,t){t(791);var s=t(691);t(184);i.Z=function(){s.Nx}},934:function(e,i,t){t.r(i);var s=t(433),n=t(439),o=t(791),m=t(677),l=t(411),a=t(689),_=t(87),r=t(184);i.default=function(){var e=(0,o.useState)([]),i=(0,n.Z)(e,2),t=i[0],c=i[1],h=(0,o.useState)(!1),u=(0,n.Z)(h,2),f=u[0],d=u[1],v=(0,o.useState)(null),Z=(0,n.Z)(v,2),j=Z[0],g=Z[1],p=(0,a.TH)();return(0,o.useEffect)((function(){d(!0),fetch("https://api.themoviedb.org/3/trending/movie/day?language=en-US",{method:"GET",headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ZmNkOTM1ZjZkZjQ5YTgwOWFjNzg0NTk2MmM3NGQ0ZCIsInN1YiI6IjY0NzMwN2E0YTE5OWE2MDBiZjI5ZTVlZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.250sjm96Er0JgnZyU-7UbzMGl38okKHn9DWdgi3aWgA"}}).then((function(e){return e.ok?e.json():Promise.reject(new Error("Trending movies not found"))})).then((function(e){c((function(i){return(0,s.Z)(e.results)}))})).catch((function(e){g(e)})).finally(d(!1))}),[]),(0,r.jsxs)("div",{children:[j&&(0,r.jsx)("h1",{children:j.message}),f&&(0,r.jsx)(l.Z,{}),(0,r.jsx)("h1",{className:m.Z.movies_list_title,children:"Trending today"}),(0,r.jsx)("ul",{className:m.Z.movies_list,children:t.map((function(e){return(0,r.jsx)("li",{children:(0,r.jsxs)(_.rU,{to:"movies/".concat(e.id),state:{from:p},className:m.Z.movies_list_item,children:[(0,r.jsx)("img",{src:"https://image.tmdb.org/t/p/w500".concat(e.poster_path),alt:m.Z.movies_list_item,className:m.Z.movies_list_img}),(0,r.jsx)("span",{className:m.Z.movies_list_name,children:e.original_title})]})},e.id)}))})]})}},677:function(e,i){i.Z={movies_list_title:"home_movies_list_title__2fmlD",movies_list_item:"home_movies_list_item__AEhf-",movies_list_name:"home_movies_list_name__aHUwm",movies_list_img:"home_movies_list_img__rpiK0",movies_list:"home_movies_list__ET2tf"}}}]);
//# sourceMappingURL=934.4df004ee.chunk.js.map