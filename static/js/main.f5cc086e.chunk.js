(this["webpackJsonpdemo-gdxjs"]=this["webpackJsonpdemo-gdxjs"]||[]).push([[0],{16:function(e,a,t){"use strict";t.r(a);var n,r,c,x,s,l,y,o,u,f,d,p,i,b,O,j,v=t(2),h=t.n(v),g=t(1),w=t(3),m=(t(26),t(0)),k=Object(m.g)().getCanvas(),M=Object(m.h)(k,50,100),C=Object(m.i)(k,M),P=0,_="",F=0,I=0,R=7,T=0;(function(){var e=Object(w.a)(h.a.mark((function e(){var a,t,v,w,k,L,B,J,K,q,A,E,N,S,U,z,D,G,H,Q,V,W,X,Y,Z,$,ee,ae,te,ne,re,ce,xe,se,le,ye,oe,ue,fe,de,pe,ie,be,Oe,je,ve,he,ge,we,me,ke,Me,Ce,Pe,_e,Fe,Ie,Re;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=M.getContext(),t=M.getCamera(),function(){},v=Object(m.e)(a),w=Object(m.j)(a),e.next=7,Object(m.l)(a,"./main.png");case 7:return k=e.sent,e.next=10,Object(m.l)(a,"./sky.jpg");case 10:return L=e.sent,e.next=13,Object(m.l)(a,"./base.jpg");case 13:return B=e.sent,e.next=16,Object(m.l)(a,"./bee01.png");case 16:return J=e.sent,e.next=19,Object(m.l)(a,"./bee02.png");case 19:return K=e.sent,e.next=22,Object(m.l)(a,"./pipe.png");case 22:return q=e.sent,e.next=25,Object(m.l)(a,"./pipe-down.png");case 25:return A=e.sent,e.next=28,Object(m.l)(a,"./sign.png");case 28:return E=e.sent,e.next=31,Object(m.l)(a,"./tree.png");case 31:return N=e.sent,e.next=34,Object(m.l)(a,"./wire.png");case 34:return S=e.sent,e.next=37,Object(m.l)(a,"./house.png");case 37:return U=e.sent,e.next=40,Object(m.l)(a,"./cloud.png");case 40:return z=e.sent,e.next=43,Object(m.l)(a,"./sora.jpg");case 43:return e.sent,e.next=46,Object(m.l)(a,"./1.png");case 46:return D=e.sent,e.next=49,Object(m.l)(a,"./2.png");case 49:return G=e.sent,e.next=52,Object(m.l)(a,"./3.png");case 52:return H=e.sent,e.next=55,Object(m.l)(a,"./4.png");case 55:return Q=e.sent,e.next=58,Object(m.l)(a,"./5.png");case 58:return V=e.sent,e.next=61,Object(m.l)(a,"./6.png");case 61:return W=e.sent,e.next=64,Object(m.l)(a,"./7.png");case 64:return X=e.sent,e.next=67,Object(m.l)(a,"./8.png");case 67:return Y=e.sent,e.next=70,Object(m.l)(a,"./9.png");case 70:return Z=e.sent,e.next=73,Object(m.l)(a,"./0.png");case 73:return $=e.sent,e.next=76,Object(m.l)(a,"./square.png");case 76:return e.sent,e.next=79,Object(m.l)(a,"./bike.png");case 79:return ee=e.sent,e.next=82,Object(m.l)(a,"./bike2.png");case 82:return ae=e.sent,te=m.b.splitTexture(k,3,1),ne={x:5,y:40},e.next=87,Object(m.k)(a,"./enemy.atlas",{});case 87:re=e.sent,re.findRegions("boss_projectile_A"),re.findRegions("boss_die"),ce=Object(m.d)(.1,te),xe=Object(m.d)(50,te),se=[],le=[],[-4,4.5,-5,-5.5,-6,-6.5,-7,-7.5,-8,-8.5,-9,-9.5,-10,-10.5,-11,-11.5,-12,-12.5,-13,-13.5,-14,15,-15.5,-16,10,9.5,9,8.5,8,7.5,7,6.5,6,5.5,5,4.5,4,3.5,3,2.5,2],ye=0,oe=[{x:25,y:80,speedup:0}],ue=[{x:15,y:80,speedup:0}],fe=[],de=[{x:0,y:65},{x:25,y:65},{x:50,y:65}],pe=[{x:0,y:65},{x:25,y:65},{x:50,y:65}],ie=[{x:0,y:65},{x:25,y:65},{x:50,y:65}],be=[{x:0,y:65},{x:25,y:65},{x:50,y:65}],Oe=[{x:0,y:65},{x:25,y:65},{x:50,y:65}],0,0,je=[{x:0,y:90},{x:10,y:90},{x:20,y:90},{x:30,y:90},{x:40,y:90},{x:50,y:90}],0,0,4,ve=0,he=0,ge=0,we=0,me=0,ke=0,Me=0,Ce=0,Pe=0,10,{x:0,y:0},1,0,Fe=0,0,Ie=0,Re=0,a.clearColor(0,0,0,1),Object(m.f)((function(e){if((Ie+=e)>=1.5&&(Ie=0),C.isTouched()&&0==F&&(ne.y=ne.y-1.5,I=0,R=7,T=0,ye>=4&&(ye-=4)),C.isTouched()&&1==F){var h,k=Object(g.a)(fe);try{for(k.s();!(h=k.n()).done;){var M=h.value;M.x=M.x-30}}catch(Ra){k.e(Ra)}finally{k.f()}ne.y=40,P=0,F=0}Re+=e,ve+=e,me+=e,Me+=e,ke+=e,Pe+=e,we+=e,ge+=e,he+=e,(Ce+=e)>1.5&&0==F&&(Ce=0,fe.push({x:45,y:Math.floor(51*Math.random())+30})),Me>3&&0==F&&(Me=0,oe.push({x:25,y:80,speedup:Math.random()}),ue.push({x:15,y:80,speedup:Math.random()})),ve>2&&0==F&&(ve=0,se.push({x:80,y:Math.floor(21*Math.random())+30,powerup:Math.random()})),Pe>2&&0==F&&(Pe=0,le.push({x:60,y:Math.floor(41*Math.random())+20,powerup:Math.random()}));var te,re=Object(g.a)(be);try{for(re.s();!(te=re.n()).done;){var Te=te.value;o=be.indexOf(Te),b=be.length-1,he>4&&0==F&&(he=0,be.push({x:be[b].x+25,y:65})),Te.x<-25&&be.splice(o,1)}}catch(Ra){re.e(Ra)}finally{re.f()}var Le,Be=Object(g.a)(ie);try{for(Be.s();!(Le=Be.n()).done;){var Je=Le.value;l=ie.indexOf(Je),j=ie.length-1,ge>4&&0==F&&(ge=0,ie.push({x:ie[j].x+25,y:65})),Je.x<-25&&ie.splice(l,1)}}catch(Ra){Be.e(Ra)}finally{Be.f()}var Ke,qe=Object(g.a)(Oe);try{for(qe.s();!(Ke=qe.n()).done;){var Ae=Ke.value;y=Oe.indexOf(Ae),O=Oe.length-1,ke>4&&0==F&&(ke=0,Oe.push({x:Oe[O].x+25,y:65})),Ae.x<-25&&Oe.splice(y,1)}}catch(Ra){qe.e(Ra)}finally{qe.f()}var Ee,Ne=Object(g.a)(de);try{for(Ne.s();!(Ee=Ne.n()).done;){var Se=Ee.value;r=de.indexOf(Se),p=de.length-1,me>4&&0==F&&(me=0,de.push({x:de[p].x+25,y:65})),Se.x<-25&&de.splice(r,1)}}catch(Ra){Ne.e(Ra)}finally{Ne.f()}var Ue,ze=Object(g.a)(pe);try{for(ze.s();!(Ue=ze.n()).done;){var De=Ue.value;_e=pe.indexOf(De),i=pe.length-1,Re>4&&0==F&&(Re=0,pe.push({x:pe[i].x+25,y:65})),De.x<-25&&pe.splice(_e,1)}}catch(Ra){ze.e(Ra)}finally{ze.f()}var Ge,He=Object(g.a)(je);try{for(He.s();!(Ge=He.n()).done;){var Qe=Ge.value;s=je.indexOf(Qe),d=je.length-1,we>.3&&0==F&&(we=0,je.push({x:je[d].x+10,y:90})),Qe.x<-10&&je.splice(s,1)}}catch(Ra){He.e(Ra)}finally{He.f()}a.clear(a.COLOR_BUFFER_BIT),v.setProjection(t.combined),v.begin(),v.draw(w,0,0,50,100),I+=e,ne.y=0==F?ne.y+1.3*I:ne.y,I>=2&&(I=0),console.log(ie.length);var Ve,We=Object(g.a)(be);try{for(We.s();!(Ve=We.n()).done;){var Xe=Ve.value;v.draw(L,Xe.x,Xe.y-70,25,75),0==F&&(Xe.x=Xe.x-.1)}}catch(Ra){We.e(Ra)}finally{We.f()}var Ye,Ze=Object(g.a)(pe);try{for(Ze.s();!(Ye=Ze.n()).done;){var $e=Ye.value;v.draw(z,$e.x,$e.y-3,25,25),0==F&&($e.x=$e.x-.1)}}catch(Ra){Ze.e(Ra)}finally{Ze.f()}var ea,aa=Object(g.a)(ie);try{for(aa.s();!(ea=aa.n()).done;){var ta=ea.value;v.draw(U,ta.x,ta.y,25,25),0==F&&(ta.x=ta.x-.1)}}catch(Ra){aa.e(Ra)}finally{aa.f()}var na,ra=Object(g.a)(de);try{for(ra.s();!(na=ra.n()).done;){var ca=na.value;v.draw(S,ca.x,ca.y,25,25),0==F&&(ca.x=ca.x-.1)}}catch(Ra){ra.e(Ra)}finally{ra.f()}var xa,sa=Object(g.a)(Oe);try{for(sa.s();!(xa=sa.n()).done;){var la=xa.value;v.draw(N,la.x,la.y+15,25,15),0==F&&(la.x=la.x-.1)}}catch(Ra){sa.e(Ra)}finally{sa.f()}var ya,oa=Object(g.a)(se);try{for(oa.s();!(ya=oa.n()).done;){var ua=ya.value;u=se.indexOf(ua),v.draw(J,ua.x,ua.y,15,8.55),ua.powerup<.4&&0==F?ua.x=ua.x-.2:0==F&&(ua.x=ua.x-.5),ua.x<-300&&se.splice(u,1)}}catch(Ra){oa.e(Ra)}finally{oa.f()}var fa,da=Object(g.a)(le);try{for(da.s();!(fa=da.n()).done;){var pa=fa.value;f=le.indexOf(pa),v.draw(K,pa.x,pa.y,9,7.7),pa.powerup<.2&&0==F?pa.x=pa.x-.2:0==F&&(pa.x=pa.x-.8),pa.x<-350&&le.splice(f,1)}}catch(Ra){da.e(Ra)}finally{da.f()}var ia,ba=Object(g.a)(oe);try{for(ba.s();!(ia=ba.n()).done;){var Oa=ia.value;c=oe.indexOf(Oa),v.draw(ee,Oa.x,Oa.y,60,10),0==F&&(Oa.x=Oa.x-.3),Oa.x<-200&&oe.splice(c,1)}}catch(Ra){ba.e(Ra)}finally{ba.f()}var ja,va=Object(g.a)(ue);try{for(va.s();!(ja=va.n()).done;){var ha=ja.value;x=ue.indexOf(ha),v.draw(ae,ha.x,ha.y,60,10),0==F&&(ha.x=ha.x-.5),ha.x<-200&&ue.splice(x,1)}}catch(Ra){va.e(Ra)}finally{va.f()}e;var ga,wa=Object(g.a)(fe);try{for(wa.s();!(ga=wa.n()).done;){var ma=ga.value;v.draw(q,ma.x,ma.y,10,100),v.draw(E,ma.x+3.5,ma.y+7,3,3),v.draw(A,ma.x,90-(90-ma.y)-20-100,10,100),0==F&&(ma.x=ma.x-.5),ne.y<ma.y&&ne.y>ma.y-20&&0==Math.round(ne.x-ma.x-2.5)&&0==F?P+=.5:(ne.y>ma.y&&ne.x+5>ma.x&&ne.x<ma.x+10||ne.y<ma.y-20&&ne.x+5>ma.x&&ne.x<ma.x+10||ne.y>=85)&&(F=1)}}catch(Ra){wa.e(Ra)}finally{wa.f()}Number.isInteger(P)&&(_=P.toString());for(var ka=_.length-1;ka>=0;ka--)switch(_[ka]){case"0":v.draw($,10+2*ka,0,2,2);break;case"1":v.draw(D,10+2*ka,0,2,2);break;case"2":v.draw(G,10+2*ka,0,2,2);break;case"3":v.draw(H,10+2*ka,0,2,2);break;case"4":v.draw(Q,10+2*ka,0,2,2);break;case"5":v.draw(V,10+2*ka,0,2,2);break;case"6":v.draw(W,10+2*ka,0,2,2);break;case"7":v.draw(X,10+2*ka,0,2,2);break;case"8":v.draw(Y,10+2*ka,0,2,2);break;case"9":v.draw(Z,10+2*ka,0,2,2)}var Ma,Ca=Object(g.a)(je);try{for(Ca.s();!(Ma=Ca.n()).done;){var Pa=Ma.value;v.draw(B,Pa.x,Pa.y,10,10),0==F&&(Pa.x=Pa.x-.5)}}catch(Ra){Ca.e(Ra)}finally{Ca.f()}0==F&&(R+=.2*(T+=e)),T>=1.5&&(T=0),0==F?ce.getKeyFrame(Fe,m.a.LOOP).draw(v,ne.x,ne.y,5,4,2.5,2,R*Math.PI/4):xe.getKeyFrame(Fe,m.a.LOOP).draw(v,ne.x,ne.y,5,4,2.5,2,R*Math.PI/4),R>=10&&(R=10),ye<40&&(ye+=1),Fe+=e;var _a,Fa=Object(g.a)(fe);try{for(Fa.s();!(_a=Fa.n()).done;){var Ia=_a.value;n=fe.indexOf(Ia),Ia.x<-10&&fe.splice(n,1)}}catch(Ra){Fa.e(Ra)}finally{Fa.f()}1,v.setColor(.4,.4,.4,1),v.setColor(1,1,1,1),v.end()}));case 129:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()},26:function(e,a,t){}},[[16,1,2]]]);
//# sourceMappingURL=main.f5cc086e.chunk.js.map