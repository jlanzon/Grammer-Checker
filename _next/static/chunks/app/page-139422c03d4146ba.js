(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{2042:function(e,t,r){Promise.resolve().then(r.bind(r,9218))},9218:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return g}});var n=r(7437),o=r(8264),i=r(2298),a=r(976),s=r(4998);function l(e){let{output:t}=e,r=(0,a.ff)("navy.700","white");return(0,n.jsx)(s.Z,{display:t?"flex":"none",px:"22px !important",pl:"22px !important",color:r,minH:"450px",fontSize:{base:"sm",md:"md"},lineHeight:{base:"24px",md:"26px"},fontWeight:"500",children:(0,n.jsx)(i.D,{className:"font-medium",children:t||""})})}var x=r(6834),p=r(1780),d=r(8441),c=r(1935),h=r(2079),u=r(1209),f=r(2265),m=r(8910);function g(e){let[t,r]=(0,f.useState)(""),[i,s]=(0,f.useState)(""),[g,b]=(0,f.useState)(""),[j,w]=(0,f.useState)("gpt-3.5-turbo"),[y,C]=(0,f.useState)(!1),k=(0,a.ff)("gray.200","whiteAlpha.200"),v=(0,a.ff)("navy.700","white"),S=(0,a.ff)("brand.500","white"),A=(0,a.ff)("linear-gradient(180deg, #FBFBFF 0%, #CACAFF 100%)","whiteAlpha.200"),z=(0,a.ff)("brand.500","white"),F=(0,a.ff)("white","whiteAlpha.100"),_=(0,a.ff)("gray.500","white"),P=(0,a.ff)("14px 27px 45px rgba(112, 144, 176, 0.2)","none"),R=(0,a.ff)("navy.700","white"),W=(0,a.ff)({color:"gray.500"},{color:"whiteAlpha.600"}),I=async()=>{let e=localStorage.getItem("apiKey");if(r(i),!(null==e?void 0:e.includes("sk-"))){alert("Please enter an API key.");return}if(!i){alert("Please enter your message.");return}if(i.length>700){alert("Please enter code less than ".concat(700," characters. You are currently at ").concat(i.length," characters."));return}b(" "),C(!0);let t=new AbortController,n=await fetch("./api/chatAPI",{method:"POST",headers:{"Content-Type":"application/json"},signal:t.signal,body:JSON.stringify({inputCode:i,model:j,apiKey:e})});if(!n.ok){C(!1),n&&alert("Something went wrong went fetching from the API. Make sure to use a valid API key.");return}let o=n.body;if(!o){C(!1),alert("Something went wrong");return}let a=o.getReader(),s=new TextDecoder,l=!1;for(;!l;){C(!0);let{value:e,done:t}=await a.read();l=t;let r=s.decode(e);b(e=>e+r)}C(!1)};return(0,n.jsxs)(x.kC,{w:"100%",pt:{base:"70px",md:"0px"},direction:"column",position:"relative",children:[(0,n.jsx)(p.Ei,{src:"/_next/static/media/bg-image.4b3208f1.png",position:"absolute",w:"350px",left:"50%",top:"50%",transform:"translate(-50%, -50%)"}),(0,n.jsxs)(x.kC,{direction:"column",mx:"auto",w:{base:"100%",md:"100%",xl:"100%"},minH:{base:"75vh","2xl":"85vh"},maxW:"1000px",children:[(0,n.jsxs)(x.kC,{direction:"column",w:"100%",mb:g?"20px":"auto",children:[(0,n.jsxs)(x.kC,{mx:"auto",zIndex:"2",w:"max-content",mb:"20px",borderRadius:"60px",children:[(0,n.jsxs)(x.kC,{cursor:"pointer",transition:"0.3s",justify:"center",align:"center",bg:"gpt-3.5-turbo"===j?F:"transparent",w:"174px",h:"70px",boxShadow:"gpt-3.5-turbo"===j?P:"none",borderRadius:"14px",color:R,fontSize:"18px",fontWeight:"700",onClick:()=>w("gpt-3.5-turbo"),children:[(0,n.jsx)(x.kC,{borderRadius:"full",justify:"center",align:"center",bg:A,me:"10px",h:"39px",w:"39px",children:(0,n.jsx)(d.JO,{as:m.Gd0,width:"20px",height:"20px",color:S})}),"GPT-3.5"]}),(0,n.jsxs)(x.kC,{cursor:"pointer",transition:"0.3s",justify:"center",align:"center",bg:"gpt-4"===j?F:"transparent",w:"164px",h:"70px",boxShadow:"gpt-4"===j?P:"none",borderRadius:"14px",color:R,fontSize:"18px",fontWeight:"700",onClick:()=>w("gpt-4"),children:[(0,n.jsx)(x.kC,{borderRadius:"full",justify:"center",align:"center",bg:A,me:"10px",h:"39px",w:"39px",children:(0,n.jsx)(d.JO,{as:m.oXF,width:"20px",height:"20px",color:S})}),"GPT-4"]})]}),(0,n.jsx)(c.UQ,{color:_,allowToggle:!0,w:"100%",my:"0px",mx:"auto",children:(0,n.jsxs)(c.Qd,{border:"none",children:[(0,n.jsxs)(c.KF,{borderBottom:"0px solid",maxW:"max-content",mx:"auto",_hover:{border:"0px solid",bg:"none"},_focus:{border:"0px solid",bg:"none"},children:[(0,n.jsx)(x.xu,{flex:"1",textAlign:"left",children:(0,n.jsx)(x.xv,{color:_,fontWeight:"500",fontSize:"sm",children:"No plugins added"})}),(0,n.jsx)(c.XE,{color:_})]}),(0,n.jsx)(c.Hk,{mx:"auto",w:"max-content",p:"0px 0px 10px 0px",children:(0,n.jsx)(x.xv,{color:_,fontWeight:"500",fontSize:"sm",textAlign:"center",children:"This is a cool text example."})})]})})]}),(0,n.jsxs)(x.kC,{direction:"column",w:"100%",mx:"auto",display:g?"flex":"none",mb:"auto",children:[(0,n.jsxs)(x.kC,{w:"100%",align:"center",mb:"10px",children:[(0,n.jsx)(x.kC,{borderRadius:"full",justify:"center",align:"center",bg:"transparent",border:"1px solid",borderColor:k,me:"20px",h:"40px",minH:"40px",minW:"40px",children:(0,n.jsx)(d.JO,{as:m.Vyx,width:"20px",height:"20px",color:z})}),(0,n.jsxs)(x.kC,{p:"22px",border:"1px solid",borderColor:k,borderRadius:"14px",w:"100%",zIndex:"2",children:[(0,n.jsx)(x.xv,{color:R,fontWeight:"600",fontSize:{base:"sm",md:"md"},lineHeight:{base:"24px",md:"26px"},children:t}),(0,n.jsx)(d.JO,{cursor:"pointer",as:m.zmo,ms:"auto",width:"20px",height:"20px",color:_})]})]}),(0,n.jsxs)(x.kC,{w:"100%",children:[(0,n.jsx)(x.kC,{borderRadius:"full",justify:"center",align:"center",bg:"linear-gradient(15.46deg, #4A25E1 26.3%, #7B5AFF 86.4%)",me:"20px",h:"40px",minH:"40px",minW:"40px",children:(0,n.jsx)(d.JO,{as:m.Gd0,width:"20px",height:"20px",color:"white"})}),(0,n.jsx)(l,{output:g})]})]}),(0,n.jsxs)(x.kC,{ms:{base:"0px",xl:"60px"},mt:"20px",justifySelf:"flex-end",children:[(0,n.jsx)(h.II,{minH:"54px",h:"100%",border:"1px solid",borderColor:k,borderRadius:"45px",p:"15px 20px",me:"10px",fontSize:"sm",fontWeight:"500",_focus:{borderColor:"none"},color:v,_placeholder:W,placeholder:"Type your message here...",onChange:Event=>{s(Event.target.value)}}),(0,n.jsx)(u.zx,{variant:"primary",py:"20px",px:"16px",fontSize:"sm",borderRadius:"45px",ms:"auto",w:{base:"160px",md:"210px"},h:"54px",_hover:{boxShadow:"0px 21px 27px -10px rgba(96, 60, 255, 0.48) !important",bg:"linear-gradient(15.46deg, #4A25E1 26.3%, #7B5AFF 86.4%) !important",_disabled:{bg:"linear-gradient(15.46deg, #4A25E1 26.3%, #7B5AFF 86.4%)"}},onClick:I,isLoading:!!y,children:"Submit"})]}),(0,n.jsxs)(x.kC,{justify:"center",mt:"20px",direction:{base:"column",md:"row"},alignItems:"center",children:[(0,n.jsx)(x.xv,{fontSize:"xs",textAlign:"center",color:_,children:"Free Research Preview. ChatGPT may produce inaccurate information about people, places, or facts."}),(0,n.jsx)(o.Z,{href:"https://help.openai.com/en/articles/6825453-chatgpt-release-notes",children:(0,n.jsx)(x.xv,{fontSize:"xs",color:R,fontWeight:"500",textDecoration:"underline",children:"ChatGPT May 12 Version"})})]})]})]})}},4998:function(e,t,r){"use strict";var n=r(7437),o=r(5232);let i=(0,o.Gp)((e,t)=>{let{size:r,variant:i,...a}=e,s=(0,o.mq)("Card",{size:r,variant:i});return(0,n.jsx)(o.m$.div,{ref:t,__css:s,...a})});t.Z=i},8264:function(e,t,r){"use strict";var n=r(7437),o=r(1396),i=r.n(o),a=r(1209);t.Z=function(e){let{href:t,children:r,...o}=e;return(0,n.jsx)(i(),{href:t,passHref:!0,legacyBehavior:!0,children:(0,n.jsx)(a.zx,{as:"a",variant:"a",...o,children:r})})}}},function(e){e.O(0,[582,149,298,971,472,744],function(){return e(e.s=2042)}),_N_E=e.O()}]);