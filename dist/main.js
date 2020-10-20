!function(e){var t={};function i(s){if(t[s])return t[s].exports;var n=t[s]={i:s,l:!1,exports:{}};return e[s].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=t,i.d=function(e,t,s){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(i.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(s,n,function(t){return e[t]}.bind(null,n));return s},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/dist/",i(i.s=2)}([function(e,t,i){},function(e,t){window.addEventListener("load",(function(){var e=document.getElementById("canvas1"),t=e.getContext("2d");e.width=800,e.height=500;var i=new Image;i.src="./src/images/background.png",i.onload=function(){t.drawImage(i,0,0)}}))},function(e,t,i){"use strict";i.r(t);i(0),i(1);function s(e,t){for(var i=0;i<t.length;i++){var s=t[i];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(e,s.key,s)}}var n=document.getElementById("canvas7"),h=n.getContext("2d");n.width=800,n.height=500;var r=function(){function e(t,i,s,n,h){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.x=t,this.y=i,this.width=s,this.height=n,this.orderType=h}var t,i,r;return t=e,r=[{key:"clear",value:function(){h.clearRect(0,0,n.width,n.height)}}],(i=[{key:"draw",value:function(){var e=this.x+this.width,t=this.y+this.height;h.beginPath(),h.fillStyle="white",h.fill(),h.strokeStyle="black",h.lineWidth="1",h.moveTo(this.x+10,this.y),h.lineTo(e-10,this.y),h.quadraticCurveTo(e,this.y,e,this.y+10),h.lineTo(e,this.y+this.height-10),h.quadraticCurveTo(e,t,e-10,t),h.lineTo(this.x+10,t),h.quadraticCurveTo(this.x,t,this.x,t-10),h.lineTo(this.x,this.y+10),h.quadraticCurveTo(this.x,this.y,this.x+10,this.y),h.fill(),h.stroke(),h.fillStyle="#000",h.fillText(this.orderType,this.x+20,this.y+30)}}])&&s(t.prototype,i),r&&s(t,r),e}();function a(e,t){for(var i=0;i<t.length;i++){var s=t[i];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(e,s.key,s)}}var o=document.getElementById("canvas4"),u=o.getContext("2d");o.width=800,o.height=500;var d=new(function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.height=48,this.width=32,this.x=143,this.y=290,this.moving=!1,this.frameX=0,this.frameY=3,this.cashierSprite=new Image,this.cashierSprite.src="src/images/L.png",this.speed=10}var t,i,s;return t=e,(i=[{key:"draw",value:function(){u.clearRect(0,0,o.width,o.height),u.drawImage(this.cashierSprite,this.width*this.frameX,this.height*this.frameY,this.width,this.height,this.x,this.y,this.width,this.height)}},{key:"move",value:function(){}}])&&a(t.prototype,i),s&&a(t,s),e}());function c(e,t){for(var i=0;i<t.length;i++){var s=t[i];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(e,s.key,s)}}var l=document.getElementById("canvas3"),f=l.getContext("2d");l.width=800,l.height=500;var g=function(){function e(t,i,s,n,h,r,a){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.id=t,this.x=s,this.y=n,this.width=a.width/4,this.height=a.height/4,this.moving=!0,this.frameX=0,this.frameY=0,this.speed=i,this.guestSprite=new Image,this.guestSprite.src="./src/images/".concat(a.name,".png"),this.ordered=!1,this.waiting=!1,this.frustrated=!1,this.timeWaited=0,this.patience=h,this.orderType=r,this.showBubble=!1,this.bubble=!1}var t,i,s;return t=e,s=[{key:"clear",value:function(){f.clearRect(0,0,l.width,l.height)}}],(i=[{key:"wait",value:function(){this.waiting=!0,this.moving=!1,this.frameY=0,this.timeWaited+=1*b.speed,this.patience-=1*b.speed}},{key:"order",value:function(){this.bubble=this.bubble||new r(this.x+this.width,this.y-this.height/2,f.measureText(this.orderType).width+40,50,this.orderType),d.frameY=3,this.wait(),this.showBubble=!0,this.timeWaited>=100&&(this.timeWaited=0,this.waiting=!1,this.ordered=!0,b.numOrders+=1,this.frameY=2,this.moving=!0,d.frameY=2)}},{key:"waitForOrder",value:function(){this.wait(),this.patience-=1*b.speed,this.patience<=0&&(b.lives-=1,0===b.lives&&(b.over=!0),this.timeWaited=0,this.waiting=!1,this.frustrated=!0,b.speed+=.1,this.frameY=3,this.moving=!0,this.showBubble=!1,b.numOrders-=1)}},{key:"handleGuestFrame",value:function(){this.frameX<3&&this.moving?this.frameX++:this.frameX=0}},{key:"draw",value:function(){f.drawImage(this.guestSprite,this.width*this.frameX,this.height*this.frameY,this.width,this.height,this.x,this.y,this.width,this.height),this.handleGuestFrame(),this.showBubble&&this.bubble.draw()}},{key:"update",value:function(){var e=this;if(b.guests.forEach((function(t){t.id<e.id&&(b.collision(e,t)&&e.patience>0?e.wait():(e.waiting=!1,e.moving=!0))})),this.ordered||(!this.waiting&&this.x>144&&this.y>0?this.x-=.3:!this.waiting&&this.x<142&&this.y>0&&(this.x+=.3),this.y>=185&&this.order()),this.x>=600)if(this.frustrated||this.fulfilled){if(this.fulfilled)return this.waiting=!1,this.showBubble=!1,this.y-=b.speed,this.y+this.height<0&&b.guests.splice(b.guests.indexOf(this),1),void(this.frameY=3)}else this.waitForOrder();if(this.waiting){var t=!1;return b.guests.forEach((function(i){i.id<e.id&&e.showBubble&&i.showBubble&&b.collision(e.bubble,i.bubble)&&(t=!0)})),void(!1===t&&this.bubble.x+this.bubble.width/2<this.x+this.width/2&&(this.bubble.x+=1*b.speed))}this.ordered&&!this.frustrated?(this.x+=this.speed,b.guests.forEach((function(t){t.id<e.id&&e.showBubble&&t.showBubble&&b.collision(e.bubble,t.bubble)&&(e.bubble.y+=1*b.speed,e.bubble.x-=1*b.speed)})),this.bubble.y>=40&&(this.bubble.y-=1*b.speed),this.bubble.x+this.bubble.width/2>this.x+this.width/2&&(this.bubble.x-=.3333),this.bubble.x+=1*b.speed):this.frustrated?(this.y-=this.speed,this.y+this.height<0&&b.guests.splice(b.guests.indexOf(this),1)):this.y+=this.speed}}])&&c(t.prototype,i),s&&c(t,s),e}();function m(e,t){for(var i=0;i<t.length;i++){var s=t[i];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(e,s.key,s)}}var y=document.getElementById("canvas2"),v=y.getContext("2d");y.width=800,y.height=500;var w=["Hot Coffee","Redeye","Latte","Iced Coffee","Espresso"],p=[];p.push({name:"deadpool",width:128,height:192}),p.push({name:"newton",width:128,height:192}),p.push({name:"death_scythe",width:200,height:192}),p.push({name:"crowley_wings",width:192,height:192}),p.push({name:"jawa",width:128,height:192}),p.push({name:"barret",width:160,height:224});var b=new(function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.speed=1,this.guests=[],this.numGuests=5,this.guestSpacing=300/this.speed,this.guestPatience=500/this.speed,this.numOrders=0,this.lives=5,this.score=0,this.over=!1}var t,i,s;return t=e,(i=[{key:"initGuests",value:function(){for(var e=0;e<this.numGuests;e++){var t=e*-this.guestSpacing,i=p[p.length*Math.random()|0],s=w[w.length*Math.random()|0];this.guests.push(new g(e,this.speed,105,t,this.guestPatience,s,i))}}},{key:"handleGuests",value:function(){g.clear(),r.clear(),0===this.guests.length&&this.nextLevel();for(var e=0;e<this.guests.length;e++)this.guests[e].update(),this.guests[e].draw()}},{key:"handleScoreboard",value:function(){v.clearRect(0,0,y.width,y.height),v.fillStyle="black",v.strokeStyle="black",v.font="bold 16px Roboto",v.fillText("Score: ".concat(this.score),700,20),v.fillText("Lives: ".concat(this.lives),700,40)}},{key:"collision",value:function(e,t){return!(e.x>t.x+t.width||e.x+e.width<t.x||e.y>t.y+t.height||e.y+e.height<t.y)}},{key:"nextLevel",value:function(){this.speed*=1.2,this.numGuests+=3,this.initGuests()}},{key:"gameOver",value:function(){b.guests=[],b.speed=0}}])&&m(t.prototype,i),s&&m(t,s),e}());function x(e,t){for(var i=0;i<t.length;i++){var s=t[i];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(e,s.key,s)}}var k=document.getElementById("canvas5"),E=k.getContext("2d");k.width=800,k.height=500;var I=document.getElementById("canvas6"),T=I.getContext("2d");I.width=150,I.height=450;var S=[{name:"Milk",width:10,height:20,x:680,y:325,frameDir:2,icon_url:"./src/images/items/milk-carton.svg"},{name:"Cup",width:10,height:20,x:260,y:275,frameDir:3,icon_url:"./src/images/items/coffee-mug.svg"},{name:"Portafilter",width:100,height:20,x:490,y:275,frameDir:3,icon_url:"./src/images/items/iced-coffee.svg"}],C=[{name:"Steamed Milk",width:10,height:20,x:470,y:275,reagents:["Milk"],frameDir:3,icon_url:"./src/images/items/red-milk-carton.svg"},{name:"Hot Coffee",width:40,height:20,x:260,y:355,reagents:["Cup"],frameDir:0,icon_url:"./src/images/items/hot-coffee.svg"},{name:"Iced Coffee",width:40,height:20,x:460,y:355,reagents:["Hot Coffee"],frameDir:0,icon_url:"./src/images/items/iced-coffee.svg"},{name:"Ground Espresso",width:1,height:20,x:370,y:275,reagents:["Portafilter"],frameDir:3,icon_url:"./src/images/items/redeye.svg"},{name:"Espresso",width:100,height:20,x:490,y:275,reagents:["Cup","Ground Espresso"],frameDir:3,icon_url:"./src/images/items/hot-espresso.svg"},{name:"Redeye",width:70,height:20,x:490,y:275,reagents:["Hot Coffee","Ground Espresso"],frameDir:3,icon_url:"./src/images/items/redeye.svg"},{name:"Latte",width:20,height:20,x:470,y:275,reagents:["Cup","Steamed Milk","Ground Espresso"],frameDir:3,icon_url:"./src/images/items/latte.svg"},{name:"Iced Latte",width:20,height:20,x:400,y:355,reagents:["Latte"],frameDir:0,icon_url:"./src/images/items/iced-latte.svg"}],O=new(function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.keys=[],this.height=64,this.width=48,this.x=500,this.y=275,this.moving=!1,this.frameX=0,this.frameY=0,this.playerSprite=new Image,this.playerSprite.src="src/images/ryuk.png",this.speed=10,this.inventory=[]}var t,i,s;return t=e,(i=[{key:"handleInventory",value:function(){var e=this,t="";S.forEach((function(i){b.collision(e,i)&&e.frameY===i.frameDir&&(e.inventory.length>=3&&e.inventory.pop(),e.addItemToInventory(i),t=i)}));var i=[];this.inventory.forEach((function(e){i.push(e.name)})),C.forEach((function(s){if(b.collision(e,s)&&e.frameY===s.frameDir){var n=!0;s.reagents.forEach((function(e){i.includes(e)||(n=!1)})),n&&e.addItemToInventory(s,i,t)}}))}},{key:"addItemToInventory",value:function(e,t,i){var s=this;e.reagents&&e.reagents.forEach((function(e){s.inventory.splice(t.indexOf(e),1)})),e.icon=new Image,e.icon.src=e.icon_url,this.inventory.unshift(e),e.reagents&&this.inventory.forEach((function(e,t){e===i&&s.inventory.splice(t,1)}))}},{key:"clearInventory",value:function(){this.inventory=[]}},{key:"renderItems",value:function(){this.inventory.forEach((function(e,t){T.drawImage(e.icon,10,10+150*t,125,125)}))}},{key:"serveGuest",value:function(e){var t=this,i=[];this.inventory.forEach((function(e){i.push(e.name)})),b.guests.forEach((function(s){if(s.ordered&&!s.fulfilled&&!s.frustrated&&t.inventory[e].name===s.orderType)return s.fulfilled=!0,b.score+=1,void t.inventory.splice(i.indexOf(s.orderType),1)}))}},{key:"update",value:function(){if(this.keys.ArrowUp){if(this.moving=!0,this.frameY=3,this.x<170&&this.y<350)return;this.y>275&&(this.y-=this.speed)}if(this.keys.ArrowDown&&(this.frameY=0,this.moving=!0,this.y<350&&(this.y+=this.speed)),this.keys.ArrowLeft){if(this.frameY=1,this.moving=!0,this.x<170&&this.y<350)return;this.x>125&&(this.x-=this.speed)}this.keys.ArrowRight&&(this.frameY=2,this.moving=!0,this.x<650&&(this.x+=this.speed)),this.keys.Delete&&this.clearInventory()}},{key:"drawSprite",value:function(e,t,i,s,n,h,r,a,o){E.drawImage(e,t,i,s,n,h,r,a,o)}},{key:"handlePlayerFrame",value:function(){this.frameX<3&&this.moving?this.frameX++:this.frameX=0}},{key:"draw",value:function(){E.clearRect(0,0,k.width,k.height),T.clearRect(0,0,I.width,I.height),this.drawSprite(this.playerSprite,this.width*this.frameX,this.height*this.frameY,this.width,this.height,this.x,this.y,this.width,this.height),this.handlePlayerFrame(),this.renderItems()}}])&&x(t.prototype,i),s&&x(t,s),e}()),D={x:600,y:275,width:100,height:20};window.addEventListener("load",(function(){var e,t,i,s;function n(){requestAnimationFrame(n),t=Date.now(),(s=t-i)>e&&!b.over&&(i=t-s%e,O.draw(),O.update(),d.draw(),b.handleGuests(),b.handleScoreboard())}document.addEventListener("keydown",(function(e){O.keys[e.code]=!0,"Space"===e.code&&O.handleInventory(),O.keys.Digit1&&b.collision(O,D)&&O.serveGuest(0),O.keys.Digit2&&b.collision(O,D)&&O.serveGuest(1),O.keys.Digit3&&b.collision(O,D)&&O.serveGuest(2)})),document.addEventListener("keyup",(function(e){delete O.keys[e.code],O.moving=!1,e.handled=!0})),b.initGuests(),e=1e3/30,i=Date.now(),n()}))}]);
//# sourceMappingURL=main.js.map