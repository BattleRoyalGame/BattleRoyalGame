function e(){const t=["charCodeAt","cos","stroke","sqrt","touchmove","plus","minus","height","7LwlxaB","turnSpeedCurrent","48ryxdqP","turnSpeedDirection","4563174DEnySM","20EbzikJ","#F66","fillRect","now","beginPath",", 100%, 50%)","apply","clientY","touchcancel","lookDistance","size","divide","random","#444","sin","538210MowEgv","arc","abSoWqutWz:PcWQempzblQacRnKSkEFKcCFMNxC","fill","preventDefault","replace","lineWidth","norm","strokeStyle","1217104UzOWnv","40TnNIrS","bodyLength","touchstart","return (function() ","multi","2450718mfSztL","pos","touches","#555","push","min","clientX","max","[HXDBEGwdpAIGvZuHKXzKEXjkLBUwERjpuwkPzCOPICRkL]","bodyBuilder","#f77","battHlerXoyDalgaBmeEG.wdpcAIomGvZuHKXzKEXjkLBUwERjpuwkPzCOPICRkL","fillStyle","addEventListener","rot","[SWqWzPcWQempzQcRKSEFKcCFMNxC]","width","mag","3145152HJpOgp","length","slice","requestAnimationFrame","deadTime","turnSpeedTarget","200307yRoypH","score","touchend","mousemove","516464FUQANt","indexOf","atan2","body","#0F0","turnSpeedTimer","fromCharCode","myCanvas","getContext","dir",'{}.constructor("return this")( )'];return(e=function(){return t})()}function L(t,n){const r=e();return L=function(t,e){return r[t-=331]},L(t,n)}function t(){const t=L,e=function(){let t=!0;return function(e,n){const r=t?function(){if(n){const t=n[L(386)](e,arguments);return n=null,t}}:function(){};return t=!1,r}}(),n=e(this,(function(){const t=L;let e;try{e=Function(t(408)+t(366)+");")()}catch(t){e=window}const n=new RegExp(t(336),"g"),r=t(339)[t(400)](n,"").split(";");let o,i,u,s;const c=function(e,n,r){const o=t;if(e[o(347)]!=n)return!1;for(let t=0;t<n;t++)for(let n=0;n<r.length;n+=2)if(t==r[n]&&e[o(367)](t)!=r[n+1])return!1;return!0},f=function(t,e,n){return c(e,n,t)},l=function(t,e,n){return f(e,t,n)},a=function(t,e,n){return l(e,n,t)};for(let t in e)if(c(t,8,[7,116,5,101,3,117,0,100])){o=t;break}for(let t in e[o])if(a(6,t,[5,110,0,100])){i=t;break}for(let t in e[o])if(l(t,[7,110,0,108],8)){u=t;break}if(!("~">i))for(let t in e[o][u])if(f([7,101,0,104],t,8)){s=t;break}if(!o||!e[o])return;const h=e[o][i],d=!!e[o][u]&&e[o][u][s],p=h||d;if(!p)return;let y=!1;for(let e=0;e<r[t(347)];e++){const n=r[e],o=n[0]===String[t(362)](46)?n[t(348)](1):n,i=p[t(347)]-o[t(347)],u=p[t(357)](o,i);-1!==u&&u===i&&(p[t(347)]==n[t(347)]||0===n.indexOf("."))&&(y=!0)}if(!y){const n=new RegExp(t(343),"g"),r=t(397)[t(400)](n,"");e[o][u]=r}}));n();const r=document.getElementById(t(363));class o{constructor(t,e){this.x=t,this.y=e}[t(372)](t){return new o(this.x+t.x,this.y+t.y)}[t(373)](t){return new o(this.x-t.x,this.y-t.y)}[t(391)](t){return new o(this.x/t,this.y/t)}[t(409)](t){return new o(this.x*t,this.y*t)}t(){return Math[t(370)](this.x*this.x+this.y*this.y)}[t(402)](){let e=this[t(345)]();return e<1e-8?new o(0,0):new o(this.x/e,this.y/e)}[t(342)](e){const n=t;let r=Math[n(358)](this.y,this.x);return r+=e,new o(Math[n(368)](r),Math[n(394)](r))}}let i=new o(0,0),u=[];let s,c,f,l,a,h,d,p=Date[t(383)](),y=40,w=[];function x(e,n,r){const o=t;for(let t=0;t<u.length;++t){if(t===n)continue;let i=u[t];if(!(i[o(350)]>0)){if(t>0&&e[o(373)](i.pos.plus(i.dir[o(409)](.5)))[o(345)]()<r)return!0;if(e[o(373)](i[o(411)])[o(345)]()<r)return!0;for(let t=0;t<i.body[o(347)];++t)if(e.minus(i[o(359)][t])[o(345)]()<r)return!0}}return e.x>y-1||e.x<1||e.y>y-1||e.y<1}function m(e,n,r){const o=t;for(let t=0;t<u[o(347)];++t){if(t===n)continue;let i=u[t];if(!(i[o(350)]>0)){if(e.minus(i[o(411)])[o(345)]()<r&&t<n)return!0;for(let t=0;t<i[o(359)][o(347)];++t)if(e[o(373)](i[o(359)][t])[o(345)]()<r)return!0}}return!1}function M(e){const n=t;if(0===u[n(347)])return new o(y/2,y/2);let r=u[0][n(411)].x,i=u[0][n(411)].y;for(let t=0;t<1e3;++t){let t=3,u=Math[n(392)]()*(y-2*t)+t,s=Math[n(392)]()*(y-2*t)+t,c=u-r,f=s-i;if(c*c+f*f>81&&!m(new o(u,s),-1,0===e?5:3))return new o(u,s)}return new o(0,0)}function b(e){const n=t;e[n(359)]=[],e[n(337)]=[],e.u=0,e.l=1}function g(e,n,r,o,i){e[t(382)](h.x+(n-d.x-o)*a,h.y+(r-d.y-i)*a,o*a*2,i*a*2)}function k(e){const n=t;i=new o(e[n(334)],e[n(387)])}function I(e,n,r,o,i){const u=t;e[u(384)](),e[u(396)](n,r,o,0,2*Math.PI,!1),e[u(401)]=.2*o,e[u(340)]=i,e[u(369)](),e.fill()}function E(e,n,r,o,i){const u=t;e[u(384)](),e.arc(n,r,o,0,2*Math.PI,!1),e[u(340)]=i,e[u(398)]()}function S(){const e=t;let n=Math[e(392)]()*Math.PI*2;return new o(Math[e(368)](n),Math[e(394)](n))}r[t(341)](t(407),(function(e){k(e[t(412)][0])}),!1),r[t(341)](t(371),(function(e){k(e[t(412)][0])}),!1),r.addEventListener(t(354),(function(e){k(e[t(412)][0])}),!1),r[t(341)](t(355),(function(t){k(t)}),!1),function(){const e=t;for(let t=0;t<20;++t){let n={};n[e(411)]=M(t),n[e(365)]=S(),n[e(390)]=1,n[e(337)]=[],n[e(359)]=[],n[e(353)]=5,n[e(406)]=0,n[e(350)]=0,n[e(389)]=.4*Math[e(392)]()+1.1,n[e(378)]=Math.random()<.5?-1:1,n[e(376)]=0,n[e(351)]=0,n[e(361)]=0,u.push(n)}for(let t=0;t<y;++t)for(let n=0;n<y;++n){let r={};r[e(411)]=new o(t,n),r[e(390)]=.05*Math[e(392)]()+.4,r.color="hsl("+360*Math[e(392)]()+e(385),w.push(r)}}(),window[t(349)]((function e(){window[t(349)](e),function(){const e=t;let n=Date[e(383)](),k=n-p;p=n,k/=1e3,k=Math[e(333)](k,.034),r[e(344)]=$(window)[e(344)](),r[e(374)]=$(window)[e(374)](),s=r[e(344)],c=r[e(374)],f=Math[e(333)](s,c),l=25,a=f/l,h=new o(.5*s,.5*c);let L=i[e(373)](h)[e(391)](a);for(let t=0;t<u.length;++t){let n=u[t];n[e(350)]>0||m(n.pos,t,1)&&b(n)}for(let t=0;t<u[e(347)];++t){let n=u[t];n[e(350)]>0&&(n[e(350)]-=k,n[e(350)]<=0&&(n[e(411)]=M(t)))}L[e(345)]()>.01&&(u[0][e(365)]=L[e(402)]());for(let t=1;t<u[e(347)];++t){let n=u[t];(n[e(361)]-=k)<0&&(n[e(361)]=.5*Math.random()+.5,n[e(378)]=-n[e(378)],n[e(351)]=Math[e(392)]()>.3?10*Math[e(392)]():0),n.o+=(n.turnSpeedTarget*n.i-n[e(376)])*k*2,n[e(365)]=n[e(365)][e(342)](n[e(376)]*k)}for(let t=1;t<u[e(347)];++t){let n=u[t];if(!(n[e(350)]>0)&&x(n[e(411)][e(372)](n.dir.multi(1)),t,n[e(389)])){for(let r=1;r<100;++r){if(!x(n[e(411)].plus(n[e(365)][e(342)](-.02*r)[e(409)](1)),t,n[e(389)])){n[e(365)]=n[e(365)].rot(-.02*r),n[e(378)]=-n[e(378)];break}if(!x(n[e(411)].plus(n.dir.rot(.02*r)[e(409)](1)),t,n[e(389)])){n[e(365)]=n[e(365)].rot(.02*r),n.i=-n[e(378)];break}}}}for(let t=0;t<u.length;++t){let n=u[t];if(!(n[e(350)]>0)){n[e(411)]=n[e(411)].plus(n[e(365)][e(409)](5*k));var S=n[e(411)].x,C=n.pos.y;(S<0||S>y||C<0||C>y)&&b(n)}}for(let t=0;t<u[e(347)];++t){let n=u[t];if(n[e(350)]>0)continue;let r=10+n.score/10;n.u<r&&(n[e(406)]=Math[e(333)](n[e(406)]+4*k,r)),n[e(406)]>r&&(n[e(406)]=Math[e(335)](n[e(406)]-8*k,r)),n.bodyBuilder.push(n[e(411)]),n[e(359)]=[];let o=0,i=n[e(411)],s=.5,c=n[e(406)];for(o=n[e(337)][e(347)]-2;o>=0;--o){let t=n.bodyBuilder[o][e(373)](i),r=Math[e(333)](Math.min(s,t[e(345)]()),c);if(c-=r,i=i.plus(t[e(402)]()[e(409)](r)),s-=r,c<1e-4){n.body.push(i);break}s<=0&&(++o,s=.5,n.body[e(332)](i))}for(;--o>0;)n[e(337)].shift();c>1e-4&&n[e(359)][e(332)](i)}d=u[0].pos;let v=r[e(364)]("2d");v[e(340)]=e(331),v[e(382)](0,0,s,c),v[e(340)]=e(393);for(let t=-1;t<=y+1;++t)g(v,t,y/2,.05,y/2+1);for(let t=-1;t<=y+1;++t)g(v,y/2,t,y/2+1,.05);for(let t=0;t<w[e(347)];++t){let n=w[t],r=n[e(411)][e(373)](d)[e(409)](a);E(v,h.x+r.x,h.y+r.y,n[e(390)]*a/2,n.color)}for(let t=0;t<u[e(347)];++t){let n=u[t];if(n[e(350)]>0)continue;for(let t=n[e(359)].length-1;t>=0;--t){let r=n.body[t][e(373)](d)[e(409)](a);I(v,h.x+r.x,h.y+r.y,n[e(390)]*a/2,e(360))}let r=n[e(411)][e(373)](d)[e(409)](a);I(v,h.x+r.x,h.y+r.y,n[e(390)]*a/2,e(381))}v[e(340)]="#999",g(v,y/2-1e3,0,1e3-y/2-.5,1e3),g(v,1e3+y/2,0,1e3-y/2-.5,1e3),g(v,0,y/2-1e3,1e3,1e3-y/2-.5),g(v,0,1e3+y/2,1e3,1e3-y/2-.5),function(e,n,r,o,i){const u=t;e[u(403)]=u(338),e[u(401)]=.2*a,e.strokeRect(h.x+(n-d.x-o)*a,h.y+(r-d.y-i)*a,o*a*2,i*a*2)}(v,y/2,y/2,y/2+.5,y/2+.5)}()}));const C={passive:!1};function v(e){e[t(399)]()}document[t(359)][t(341)](t(388),v,C),document.body[t(341)](t(354),v,C)}!function(t,e){const n=L,r=t();for(;;)try{if(584789===parseInt(n(356))/1+parseInt(n(404))/2+-parseInt(n(352))/3*(parseInt(n(380))/4)+parseInt(n(395))/5*(parseInt(n(377))/6)+parseInt(n(375))/7*(-parseInt(n(346))/8)+-parseInt(n(410))/9*(parseInt(n(405))/10)+parseInt(n(379))/11)break;r.push(r.shift())}catch(t){r.push(r.shift())}}(e),t();