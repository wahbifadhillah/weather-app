(this["webpackJsonpweather-app"]=this["webpackJsonpweather-app"]||[]).push([[0],{1:function(e,t,a){e.exports={wrapper:"styles_wrapper__32SMc",night:"styles_night__1bP8E",city:"styles_city__2Ptyb",dawndusk:"styles_dawndusk__3PNh0",temp:"styles_temp__-AIhT",weathername:"styles_weathername__DOS4e",dayData:"styles_dayData__2WxpU",day:"styles_day__ODG2r",weather:"styles_weather__2OnFa",weathericon:"styles_weathericon__1k_ag"}},14:function(e,t,a){},18:function(e,t,a){"use strict";a.r(t);a(9);var n=a(2),s=a.n(n),c=a(7),r=a.n(c),i=(a(14),a(6)),o=a.n(i),d=a(8),h=a(4),l=a(1),u=a.n(l),j=a(3),m=a.n(j),p=a(0),b=function(e){var t=e.weatherData,a="http://openweathermap.org/img/wn/"+t.weather[0].icon+"@4x.png",n=m()().hour(),s="day";return n>=6&&(s="day"),n>11&&(s="night"),n<6&&(s="night"),Object(p.jsxs)("div",{className:"".concat(u.a.wrapper," ").concat("day"==s?u.a.day:u.a.night),children:[Object(p.jsx)("div",{className:u.a.city,children:t.name}),Object(p.jsxs)("div",{className:u.a.dawndusk,children:[Object(p.jsxs)("div",{className:u.a.sunrise,children:["Sunrise: ",new Date(1e3*t.sys.sunrise).toLocaleTimeString("en-IN")]}),Object(p.jsxs)("div",{className:u.a.sunset,children:["Sunset: ",new Date(1e3*t.sys.sunset).toLocaleTimeString("en-IN")]})]}),Object(p.jsx)("div",{className:u.a.weather,children:Object(p.jsx)("img",{className:u.a.weathericon,src:a,alt:"Weather icon"})}),Object(p.jsxs)("div",{className:u.a.temp,children:[t.main.temp," \xb0C"]}),Object(p.jsx)("div",{className:u.a.weathername,children:t.weather[0].main}),Object(p.jsxs)("div",{className:u.a.dayData,children:[Object(p.jsx)("div",{className:u.a.day,children:m()().format("ddd")}),"|",Object(p.jsx)("div",{className:u.a.date,children:m()().format("MMM D")}),"|",Object(p.jsx)("div",{className:u.a.time,children:m()().format("hh[.]mm A")})]})]})};function w(){var e=Object(n.useState)([]),t=Object(h.a)(e,2),a=t[0],s=t[1],c=Object(n.useState)([]),r=Object(h.a)(c,2),i=r[0],l=r[1],u=Object(n.useState)([]),j=Object(h.a)(u,2),m=j[0],w=j[1];return Object(n.useEffect)((function(){var e=function(){var e=Object(d.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return navigator.geolocation.getCurrentPosition((function(e){s(e.coords.latitude),l(e.coords.longitude)})),e.next=3,fetch("".concat("https://api.openweathermap.org/data/2.5","/weather/?lat=").concat(a,"&lon=").concat(i,"&units=metric&APPID=").concat("7b60dd157cae7bc0e343328905a9b1ff")).then((function(e){return e.json()})).then((function(e){w(e),console.log(e)}));case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[a,i]),Object(p.jsx)("div",{className:"App",children:"undefined"!=typeof m.main?Object(p.jsx)(b,{weatherData:m}):Object(p.jsx)("div",{})})}var _=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,20)).then((function(t){var a=t.getCLS,n=t.getFID,s=t.getFCP,c=t.getLCP,r=t.getTTFB;a(e),n(e),s(e),c(e),r(e)}))};r.a.render(Object(p.jsx)(s.a.StrictMode,{children:Object(p.jsx)(w,{})}),document.getElementById("root")),_()}},[[18,1,2]]]);
//# sourceMappingURL=main.d487902e.chunk.js.map