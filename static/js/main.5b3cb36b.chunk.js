(this["webpackJsonpdemo-gdxjs"]=this["webpackJsonpdemo-gdxjs"]||[]).push([[0],{16:function(e,t,n){"use strict";n.r(t);var a,r,c,s,x,l,o,y,u,d=n(2),p=n.n(d),b=n(1),i=n(3),O=(n(26),n(0)),f=Object(O.g)().getCanvas(),j=Object(O.h)(f,50,100),g=Object(O.i)(f,j),h=0,v="",w=0,m=0,k=7,M=0;(function(){var e=Object(i.a)(p.a.mark((function e(){var t,n,d,i,f,C,P,_,F,I,R,T,L,B,J,K,q,A,E,N,S,U,z,D,G,H,Q,V,W,X,Y,Z,$,ee,te,ne,ae,re,ce,se,xe,le,oe,ye,ue,de,pe,be;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=j.getContext(),n=j.getCamera(),function(){},d=Object(O.e)(t),i=Object(O.j)(t),e.next=7,Object(O.l)(t,"./main.png");case 7:return f=e.sent,e.next=10,Object(O.l)(t,"./sky.jpg");case 10:return C=e.sent,e.next=13,Object(O.l)(t,"./base.jpg");case 13:return P=e.sent,e.next=16,Object(O.l)(t,"./bee01.png");case 16:return _=e.sent,e.next=19,Object(O.l)(t,"./bee02.png");case 19:return F=e.sent,e.next=22,Object(O.l)(t,"./pipe.png");case 22:return I=e.sent,e.next=25,Object(O.l)(t,"./pipe-down.png");case 25:return R=e.sent,e.next=28,Object(O.l)(t,"./sign.png");case 28:return T=e.sent,e.next=31,Object(O.l)(t,"./tree.png");case 31:return L=e.sent,e.next=34,Object(O.l)(t,"./wire.png");case 34:return B=e.sent,e.next=37,Object(O.l)(t,"./house.png");case 37:return J=e.sent,e.next=40,Object(O.l)(t,"./cloud.png");case 40:return K=e.sent,e.next=43,Object(O.l)(t,"./sora.jpg");case 43:return e.sent,e.next=46,Object(O.l)(t,"./1.png");case 46:return q=e.sent,e.next=49,Object(O.l)(t,"./2.png");case 49:return A=e.sent,e.next=52,Object(O.l)(t,"./3.png");case 52:return E=e.sent,e.next=55,Object(O.l)(t,"./4.png");case 55:return N=e.sent,e.next=58,Object(O.l)(t,"./5.png");case 58:return S=e.sent,e.next=61,Object(O.l)(t,"./6.png");case 61:return U=e.sent,e.next=64,Object(O.l)(t,"./7.png");case 64:return z=e.sent,e.next=67,Object(O.l)(t,"./8.png");case 67:return D=e.sent,e.next=70,Object(O.l)(t,"./9.png");case 70:return G=e.sent,e.next=73,Object(O.l)(t,"./0.png");case 73:return H=e.sent,e.next=76,Object(O.l)(t,"./square.png");case 76:return e.sent,e.next=79,Object(O.l)(t,"./bike.png");case 79:return Q=e.sent,e.next=82,Object(O.l)(t,"./bike2.png");case 82:return V=e.sent,W=O.b.splitTexture(f,3,1),X={x:5,y:40},e.next=87,Object(O.k)(t,"./enemy.atlas",{});case 87:Y=e.sent,Y.findRegions("boss_projectile_A"),Y.findRegions("boss_die"),Z=Object(O.d)(.1,W),$=Object(O.d)(50,W),ee=[],te=[],[-4,4.5,-5,-5.5,-6,-6.5,-7,-7.5,-8,-8.5,-9,-9.5,-10,-10.5,-11,-11.5,-12,-12.5,-13,-13.5,-14,15,-15.5,-16,10,9.5,9,8.5,8,7.5,7,6.5,6,5.5,5,4.5,4,3.5,3,2.5,2],ne=0,ae=[{x:25,y:80,speedup:0}],re=[{x:15,y:80,speedup:0}],ce=[],[{x:0,y:80}],se=[{x:0,y:65},{x:25,y:65},{x:50,y:65}],0,0,xe=[{x:0,y:90},{x:10,y:90},{x:20,y:90},{x:30,y:90},{x:40,y:90},{x:50,y:90}],0,0,4,le=0,oe=0,ye=0,ue=0,de=0,10,{x:0,y:0},1,0,pe=0,0,be=0,t.clearColor(0,0,0,1),Object(O.f)((function(e){if((be+=e)>=1.5&&(be=0),g.isTouched()&&0==w&&(X.y=X.y-1.5,console.log(be),m=0,k=7,M=0,ne>=4&&(ne-=4)),g.isTouched()&&1==w){var p,f=Object(b.a)(ce);try{for(f.s();!(p=f.n()).done;){var j=p.value;j.x=j.x-30}}catch(De){f.e(De)}finally{f.f()}X.y=40,h=0,w=0}le+=e,oe+=e,ue+=e,ye+=e,(de+=e)>1.5&&0==w&&(de=0,ce.push({x:45,y:Math.floor(51*Math.random())+30})),ue>3&&0==w&&(ue=0,ae.push({x:25,y:80,speedup:Math.random()}),re.push({x:15,y:80,speedup:Math.random()})),le>2&&0==w&&(le=0,ee.push({x:50,y:Math.floor(21*Math.random())+30,powerup:Math.random()}),te.push({x:70,y:Math.floor(41*Math.random())+20,powerup:Math.random()}));var W,Y=Object(b.a)(se);try{for(Y.s();!(W=Y.n()).done;){var ie=W.value;r=se.indexOf(ie),u=se.length-1,oe>4&&0==w&&(oe=0,se.push({x:se[u].x+25,y:65})),ie.x<-25&&se.splice(r,1)}}catch(De){Y.e(De)}finally{Y.f()}var Oe,fe=Object(b.a)(xe);try{for(fe.s();!(Oe=fe.n()).done;){var je=Oe.value;x=xe.indexOf(je),y=xe.length-1,ye>.3&&0==w&&(ye=0,xe.push({x:xe[y].x+10,y:90})),je.x<-50&&xe.splice(x,1)}}catch(De){fe.e(De)}finally{fe.f()}t.clear(t.COLOR_BUFFER_BIT),d.setProjection(n.combined),d.begin(),d.draw(i,0,0,50,100),m+=e,X.y=0==w?X.y+1.3*m:X.y,m>=2&&(m=0);var ge,he=Object(b.a)(se);try{for(he.s();!(ge=he.n()).done;){var ve=ge.value;d.draw(C,ve.x,ve.y-70,25,75),d.draw(K,ve.x,ve.y-3,25,25),d.draw(J,ve.x,ve.y,25,25),d.draw(B,ve.x,ve.y,25,25),d.draw(L,ve.x,ve.y+15,25,10),0==w&&(ve.x=ve.x-.1)}}catch(De){he.e(De)}finally{he.f()}var we,me=Object(b.a)(ee);try{for(me.s();!(we=me.n()).done;){var ke=we.value;l=ee.indexOf(ke),d.draw(_,ke.x,ke.y,15,8.55),ke.powerup<.4&&0==w?ke.x=ke.x-.2:0==w&&(ke.x=ke.x-.5),ke.x<-200&&ee.splice(l,1)}}catch(De){me.e(De)}finally{me.f()}var Me,Ce=Object(b.a)(te);try{for(Ce.s();!(Me=Ce.n()).done;){var Pe=Me.value;o=te.indexOf(Pe),d.draw(F,Pe.x,Pe.y,9,7.7),Pe.powerup<.2&&0==w?Pe.x=Pe.x-.2:0==w&&(Pe.x=Pe.x-.8),Pe.x<-350&&te.splice(o,1)}}catch(De){Ce.e(De)}finally{Ce.f()}var _e,Fe=Object(b.a)(ae);try{for(Fe.s();!(_e=Fe.n()).done;){var Ie=_e.value;c=ae.indexOf(Ie),d.draw(Q,Ie.x,Ie.y,60,10),0==w&&(Ie.x=Ie.x-.3),Ie.x<-200&&ae.splice(c,1)}}catch(De){Fe.e(De)}finally{Fe.f()}var Re,Te=Object(b.a)(re);try{for(Te.s();!(Re=Te.n()).done;){var Le=Re.value;s=re.indexOf(Le),d.draw(V,Le.x,Le.y,60,10),0==w&&(Le.x=Le.x-.5),Le.x<-200&&re.splice(s,1)}}catch(De){Te.e(De)}finally{Te.f()}e;var Be,Je=Object(b.a)(ce);try{for(Je.s();!(Be=Je.n()).done;){var Ke=Be.value;d.draw(I,Ke.x,Ke.y,10,100),d.draw(T,Ke.x+3.5,Ke.y+7,3,3),d.draw(R,Ke.x,90-(90-Ke.y)-20-100,10,100),0==w&&(Ke.x=Ke.x-.5),X.y<Ke.y&&X.y>Ke.y-20&&0==Math.round(X.x-Ke.x-2.5)&&0==w?h+=.5:(X.y>Ke.y&&X.x+5>Ke.x&&X.x<Ke.x+10||X.y<Ke.y-20&&X.x+5>Ke.x&&X.x<Ke.x+10||X.y>=85)&&(w=1)}}catch(De){Je.e(De)}finally{Je.f()}Number.isInteger(h)&&(v=h.toString());for(var qe=v.length-1;qe>=0;qe--)switch(v[qe]){case"0":d.draw(H,10+2*qe,0,2,2);break;case"1":d.draw(q,10+2*qe,0,2,2);break;case"2":d.draw(A,10+2*qe,0,2,2);break;case"3":d.draw(E,10+2*qe,0,2,2);break;case"4":d.draw(N,10+2*qe,0,2,2);break;case"5":d.draw(S,10+2*qe,0,2,2);break;case"6":d.draw(U,10+2*qe,0,2,2);break;case"7":d.draw(z,10+2*qe,0,2,2);break;case"8":d.draw(D,10+2*qe,0,2,2);break;case"9":d.draw(G,10+2*qe,0,2,2)}var Ae,Ee=Object(b.a)(xe);try{for(Ee.s();!(Ae=Ee.n()).done;){var Ne=Ae.value;d.draw(P,Ne.x,Ne.y,10,10),0==w&&(Ne.x=Ne.x-.5)}}catch(De){Ee.e(De)}finally{Ee.f()}0==w&&(k+=.2*(M+=e)),M>=1.5&&(M=0),0==w?Z.getKeyFrame(pe,O.a.LOOP).draw(d,X.x,X.y,5,4,2.5,2,k*Math.PI/4):$.getKeyFrame(pe,O.a.LOOP).draw(d,X.x,X.y,5,4,2.5,2,k*Math.PI/4),k>=10&&(k=10),ne<40&&(ne+=1),pe+=e;var Se,Ue=Object(b.a)(ce);try{for(Ue.s();!(Se=Ue.n()).done;){var ze=Se.value;a=ce.indexOf(ze),ze.x<-10&&ce.splice(a,1)}}catch(De){Ue.e(De)}finally{Ue.f()}1,d.setColor(.4,.4,.4,1),d.setColor(1,1,1,1),d.end()}));case 121:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()},26:function(e,t,n){}},[[16,1,2]]]);
//# sourceMappingURL=main.5b3cb36b.chunk.js.map