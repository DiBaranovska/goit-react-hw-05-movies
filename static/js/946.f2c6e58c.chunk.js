"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[946],{411:function(e,i,s){s(791);var t=s(691);s(184);i.Z=function(){t.Nx}},946:function(e,i,s){s.r(i),s.d(i,{default:function(){return g}});var t=s(439),n=s(791),a=s(689),l=s(87),c="movieDetails_conteiner__i8sE4",o="movieDetails_backBtn__7ulZg",r=s(411),m="movieItem_about_film__GXCNk",d="movieItem_about_film_img__Iuv12",h="movieItem_about_film_genres__5pj45",_="movieItem_about_film_genres_item__y1lk2",u="movieItem_details__GhgiF",v="movieItem_movie_details_list__qXJ5N",j="movieItem_movie_details_link__3Idpf",f="movieItem_movie_details_item__O+hWz",x=s(184),N=function(e){var i=e.movie,s=new Date(i.release_date);return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsxs)("section",{className:m,children:[(0,x.jsx)("img",{className:d,src:"https://image.tmdb.org/t/p/w500".concat(i.poster_path),alt:"poster of the movie ".concat(i.title),loading:"lazy"}),(0,x.jsxs)("div",{children:[(0,x.jsx)("h1",{children:"".concat(i.title," (").concat(s.getFullYear(),")")}),(0,x.jsx)("p",{children:"User Score: ".concat(Math.round(10*i.vote_average),"%")}),(0,x.jsx)("h2",{children:"Overview"}),(0,x.jsx)("p",{children:i.overview}),(0,x.jsx)("h3",{children:"Genres"}),(0,x.jsx)("ul",{className:h,children:i.genres.map((function(e){return(0,x.jsx)("li",{className:_,children:e.name},e.id)}))})]})]}),(0,x.jsxs)("section",{children:[(0,x.jsxs)("div",{className:u,children:[(0,x.jsx)("h4",{children:"Additional information"}),(0,x.jsxs)("ul",{className:v,children:[(0,x.jsx)("li",{className:f,children:(0,x.jsx)(l.rU,{to:"cast",className:j,children:"Cast"})}),(0,x.jsx)("li",{className:f,children:(0,x.jsx)(l.rU,{to:"reviews",className:j,children:"Reviews"})})]})]}),(0,x.jsx)(n.Suspense,{fallback:(0,x.jsx)("div",{children:"Loading..."}),children:(0,x.jsx)(a.j3,{})})]})]})},g=function(){var e,i,s=(0,a.UO)().movieID,m=(0,n.useState)(null),d=(0,t.Z)(m,2),h=d[0],_=d[1],u=(0,n.useState)(!1),v=(0,t.Z)(u,2),j=v[0],f=v[1],g=(0,n.useState)(null),I=(0,t.Z)(g,2),p=I[0],k=I[1],Z=(0,a.TH)(),b=(0,n.useRef)(null!==(e=null===(i=Z.state)||void 0===i?void 0:i.from)&&void 0!==e?e:"/movies");return(0,n.useEffect)((function(){f(!0),fetch("https://api.themoviedb.org/3/movie/".concat(s,"?language=en-US"),{method:"GET",headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ZmNkOTM1ZjZkZjQ5YTgwOWFjNzg0NTk2MmM3NGQ0ZCIsInN1YiI6IjY0NzMwN2E0YTE5OWE2MDBiZjI5ZTVlZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.250sjm96Er0JgnZyU-7UbzMGl38okKHn9DWdgi3aWgA"}}).then((function(e){return e.ok?e.json():Promise.reject(new Error("Movie not found"))})).then((function(e){_(e)})).catch((function(e){k(e)})).finally(f(!1))}),[s]),(0,x.jsxs)("div",{className:c,children:[(0,x.jsx)(l.rU,{to:b.current,className:o,children:"Go back"}),p&&(0,x.jsx)("h1",{children:p.message}),j&&(0,x.jsx)(r.Z,{}),h&&(0,x.jsx)(N,{movie:h})]})}}}]);
//# sourceMappingURL=946.f2c6e58c.chunk.js.map