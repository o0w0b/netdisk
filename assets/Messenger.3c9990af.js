import{h as e,bQ as i,az as w,a as y,n as k,m as C,a$ as r,be as c,cl as R,e as b,a7 as o,H as x,aw as H,G as T,I as z,aj as D,C as g,ck as F,b2 as L,dD as N}from"./index.3d57b177.js";const W=n=>e(i,{get children(){return n.content}}),j=n=>e(w,{get src(){return n.content}}),B={string:W,image:j},M=()=>{const n=y();k.info(n("manage.messenger-tips"));const[a,l]=C(""),[d,u]=r(()=>c.post("/admin/message/get")),[p,m]=r(()=>c.post("/admin/message/send",{message:a()})),[h,S]=R([]),s=async()=>{const t=await u();F(t,$=>{S(N(f=>f.push($)))})},v=async()=>{const t=await m();L(t)},I=setInterval(s,1e3);return b(()=>clearInterval(I)),e(o,{spacing:"$2",h:"$full",alignItems:"start",get children(){return[e(o,{w:"$full",spacing:"$2",alignItems:"start",p:"$2",rounded:"$lg",border:"1px solid var(--hope-colors-neutral6)",get children(){return[e(i,{size:"xl",get children(){return n("manage.received_msgs")}}),e(x,{each:h,children:t=>e(H,T({get component(){return B[t.type]}},t))})]}}),e(z,{w:"$full",get value(){return a()},onInput:t=>l(t.currentTarget.value)}),e(D,{spacing:"$2",get children(){return[e(g,{colorScheme:"accent",get loading(){return d()},onClick:s,get children(){return n("manage.receive")}}),e(g,{get loading(){return p()},onClick:v,get children(){return n("manage.send")}})]}})]}})};export{M as Messenger,B as Shower,M as default};
