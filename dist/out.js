(()=>{"use strict";async function t(t){return{normal_mapped_entity_shader:await o(t,"/res/shaders/normal_mapped_entity_shader/"),raw_entity_shader:await o(t,"/res/shaders/raw_entity_shader/")}}function e(t,e,r,n){e.uniform_locations[r]||(e.uniform_locations[r]=t.getUniformLocation(e.program,r)),t.uniform1f(e.uniform_locations[r],n)}function r(t,e,r,n){e.uniform_locations[r]||(e.uniform_locations[r]=t.getUniformLocation(e.program,r)),t.uniform1i(e.uniform_locations[r],n)}function n(t,e,r,n){e.uniform_locations[r]||(e.uniform_locations[r]=t.getUniformLocation(e.program,r)),t.uniform3fv(e.uniform_locations[r],n)}function a(t,e,r,n){e.uniform_locations[r]||(e.uniform_locations[r]=t.getUniformLocation(e.program,r)),t.uniformMatrix4fv(e.uniform_locations[r],!1,n)}async function o(t,e){let r=(await Promise.all([fetch(e+"vs.glsl"),fetch(e+"fs.glsl")])).map((t=>t.text())),n=await Promise.all(r);return{program:i(t,n[0],n[1]),uniform_locations:{}}}function i(t,e,r){const n=t.createProgram(),a=s(t,t.VERTEX_SHADER,e),o=s(t,t.FRAGMENT_SHADER,r);return t.attachShader(n,a),t.attachShader(n,o),t.linkProgram(n),t.getProgramParameter(n,t.LINK_STATUS)||console.error("Failed to link program"),n}function s(t,e,r){const n=t.createShader(e);return t.shaderSource(n,r),t.compileShader(n),t.getShaderParameter(n,t.COMPILE_STATUS)||(e==t.VERTEX_SHADER?console.error("Failed to compile vertex shader"):console.error("Failed to compile fragment shader")),n}async function c(t){return{plane:await f(t,"/res/models/textured_models/plane.obj")}}async function u(t){return{bunny:await l(t,"/res/models/raw_models/bunny.obj")}}async function l(t,e){const r=await fetch(e),n=(await r.text()).split("\n"),a=[],o=[],i=[];for(let t=0;t<n.length;t++){const e=n[t].split(" ");switch(e[0]){case"v":a.push(e[1]),a.push(e[2]),a.push(e[3]);break;case"vn":o.push(e[1]),o.push(e[2]),o.push(e[3]);break;case"f":i.push(e[1]-1),i.push(e[2]-1),i.push(e[3]-1)}}return function(t,e,r,n){const a=t.createVertexArray();t.bindVertexArray(a);const o=t.createBuffer();t.bindBuffer(t.ARRAY_BUFFER,o),t.bufferData(t.ARRAY_BUFFER,new Float32Array(e),t.STATIC_DRAW),t.vertexAttribPointer(0,3,t.FLOAT,!1,0,0),t.enableVertexAttribArray(0);const i=t.createBuffer();t.bindBuffer(t.ARRAY_BUFFER,i),t.bufferData(t.ARRAY_BUFFER,new Float32Array(r),t.STATIC_DRAW),t.vertexAttribPointer(1,3,t.FLOAT,!1,0,0),t.enableVertexAttribArray(1);const s=t.createBuffer();return t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,s),t.bufferData(t.ELEMENT_ARRAY_BUFFER,new Uint16Array(n),t.STATIC_DRAW),{vao:a,indices_buff:s,num_indices:n.length}}(t,a,o,i)}async function f(t,e){const r=await fetch(e),n=(await r.text()).split("\n"),a=[],o=[],i=[];for(let t=0;t<n.length;t++){let e=n[t].split(" ");switch(e[0]){case"v":a.push(parseFloat(e[1])),a.push(parseFloat(e[2])),a.push(parseFloat(e[3]));break;case"vn":o.push(parseFloat(e[1])),o.push(parseFloat(e[2])),o.push(parseFloat(e[3]));break;case"vt":i.push(parseFloat(e[1])),i.push(parseFloat(e[2]))}}const s=[],c=[],u=[];for(let t=0;t<n.length;t++){let e=n[t].split(" ");if("f"==e[0])for(let t=1;t<4;t++){const r=e[t].split("/").map((t=>parseInt(t))),n=r[0]-1;s.push(a[3*n]),s.push(a[3*n+1]),s.push(a[3*n+2]);const l=r[1]-1;u.push(i[2*l]),u.push(i[2*l+1]);const f=r[2]-1;c.push(o[3*f]),c.push(o[3*f+1]),c.push(o[3*f+2])}}const l=function(t,e){const r=[];let n=0;for(let a=0;a<t.length;a+=9){const o=[t[a],t[a+1],t[a+2]],i=[t[a+3],t[a+4],t[a+5]],s=[t[a+6],t[a+7],t[a+8]],c=[e[n],e[n+1]],u=[e[n+2],e[n+3]],l=[e[n+4],e[n+5]];n+=6;const f=m(o,i),A=m(s,i),h=_(c,u),E=_(l,u),R=1/(h[0]*E[1]-h[1]*E[0]),T=p(m(p(f,E[1]),p(A,h[1])),R);r.push(T[0]),r.push(T[1]),r.push(T[2]),r.push(T[0]),r.push(T[1]),r.push(T[2]),r.push(T[0]),r.push(T[1]),r.push(T[2])}return r}(s,u);return function(t,e,r,n,a){const o=t.createVertexArray();t.bindVertexArray(o);const i=t.createBuffer();t.bindBuffer(t.ARRAY_BUFFER,i),t.bufferData(t.ARRAY_BUFFER,new Float32Array(e),t.STATIC_DRAW),t.enableVertexAttribArray(0),t.vertexAttribPointer(0,3,t.FLOAT,!1,0,0);const s=t.createBuffer();t.bindBuffer(t.ARRAY_BUFFER,s),t.bufferData(t.ARRAY_BUFFER,new Float32Array(r),t.STATIC_DRAW),t.enableVertexAttribArray(1),t.vertexAttribPointer(1,3,t.FLOAT,!1,0,0);const c=t.createBuffer();t.bindBuffer(t.ARRAY_BUFFER,c),t.bufferData(t.ARRAY_BUFFER,new Float32Array(n),t.STATIC_DRAW),t.enableVertexAttribArray(2),t.vertexAttribPointer(2,3,t.FLOAT,!1,0,0);const u=t.createBuffer();return t.bindBuffer(t.ARRAY_BUFFER,u),t.bufferData(t.ARRAY_BUFFER,new Float32Array(a),t.STATIC_DRAW),t.enableVertexAttribArray(3),t.vertexAttribPointer(3,2,t.FLOAT,!1,0,0),{vao:o,num_vertices:e.length/3}}(t,s,c,l,u)}function _(t,e){return[t[0]-e[0],t[1]-e[1]]}function m(t,e){return[t[0]-e[0],t[1]-e[1],t[2]-e[2]]}function p(t,e){return[t[0]*e,t[1]*e,t[2]*e]}async function A(t){return{bricks_texture:await h(t,"/res/textures/bricks_texture.jpg"),bricks_normal:await h(t,"/res/textures/bricks_normal.jpg")}}async function h(t,e){const r=t.createTexture();t.bindTexture(t.TEXTURE_2D,r);const n=new Image;return n.onload=function(){t.bindTexture(t.TEXTURE_2D,r),t.texImage2D(t.TEXTURE_2D,0,t.RGB,t.RGB,t.UNSIGNED_BYTE,n),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.REPEAT),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.REPEAT),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MAG_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.LINEAR_MIPMAP_LINEAR),t.generateMipmap(t.TEXTURE_2D);const e=t.getExtension("EXT_texture_filter_anisotropic");if(null!=e){const r=Math.min(4,t.getParameter(e.MAX_TEXTURE_MAX_ANISOTROPY_EXT));t.texParameteri(t.TEXTURE_2D,e.TEXTURE_MAX_ANISOTROPY_EXT,r)}else console.log("Browser does not support anisotropic filtering extension")},n.src=e,r}var E="undefined"!=typeof Float32Array?Float32Array:Array;function R(){var t=new E(16);return E!=Float32Array&&(t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0),t[0]=1,t[5]=1,t[10]=1,t[15]=1,t}function T(t){return t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=1,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=1,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}function d(t,e,r){var n,a,o,i,s,c,u,l,f,_,m,p,A=r[0],h=r[1],E=r[2];return e===t?(t[12]=e[0]*A+e[4]*h+e[8]*E+e[12],t[13]=e[1]*A+e[5]*h+e[9]*E+e[13],t[14]=e[2]*A+e[6]*h+e[10]*E+e[14],t[15]=e[3]*A+e[7]*h+e[11]*E+e[15]):(n=e[0],a=e[1],o=e[2],i=e[3],s=e[4],c=e[5],u=e[6],l=e[7],f=e[8],_=e[9],m=e[10],p=e[11],t[0]=n,t[1]=a,t[2]=o,t[3]=i,t[4]=s,t[5]=c,t[6]=u,t[7]=l,t[8]=f,t[9]=_,t[10]=m,t[11]=p,t[12]=n*A+s*h+f*E+e[12],t[13]=a*A+c*h+_*E+e[13],t[14]=o*A+u*h+m*E+e[14],t[15]=i*A+l*h+p*E+e[15]),t}function F(t,e,r,n){var a,o,i,s,c,u,l,f,_,m,p,A,h,E,R,T,d,F,b,g,y,x,v,U,w=n[0],B=n[1],P=n[2],D=Math.hypot(w,B,P);return D<1e-6?null:(w*=D=1/D,B*=D,P*=D,a=Math.sin(r),i=1-(o=Math.cos(r)),s=e[0],c=e[1],u=e[2],l=e[3],f=e[4],_=e[5],m=e[6],p=e[7],A=e[8],h=e[9],E=e[10],R=e[11],T=w*w*i+o,d=B*w*i+P*a,F=P*w*i-B*a,b=w*B*i-P*a,g=B*B*i+o,y=P*B*i+w*a,x=w*P*i+B*a,v=B*P*i-w*a,U=P*P*i+o,t[0]=s*T+f*d+A*F,t[1]=c*T+_*d+h*F,t[2]=u*T+m*d+E*F,t[3]=l*T+p*d+R*F,t[4]=s*b+f*g+A*y,t[5]=c*b+_*g+h*y,t[6]=u*b+m*g+E*y,t[7]=l*b+p*g+R*y,t[8]=s*x+f*v+A*U,t[9]=c*x+_*v+h*U,t[10]=u*x+m*v+E*U,t[11]=l*x+p*v+R*U,e!==t&&(t[12]=e[12],t[13]=e[13],t[14]=e[14],t[15]=e[15]),t)}Math.random,Math.PI,Math.hypot||(Math.hypot=function(){for(var t=0,e=arguments.length;e--;)t+=arguments[e]*arguments[e];return Math.sqrt(t)});function b(t){return t*Math.PI/180}function g(t,e,r){return{position:t,rotation:e,scale:r,matrix:R()}}function y(t){const{matrix:e,rotation:r,position:n,scale:a}=t;var o,i,s,c,u,l;T(e),d(e,e,n),F(e,e,b(r[0]),[1,0,0]),F(e,e,b(r[1]),[0,1,0]),F(e,e,b(r[2]),[0,0,1]),o=e,i=e,c=(s=a)[0],u=s[1],l=s[2],o[0]=i[0]*c,o[1]=i[1]*c,o[2]=i[2]*c,o[3]=i[3]*c,o[4]=i[4]*u,o[5]=i[5]*u,o[6]=i[6]*u,o[7]=i[7]*u,o[8]=i[8]*l,o[9]=i[9]*l,o[10]=i[10]*l,o[11]=i[11]*l,o[12]=i[12],o[13]=i[13],o[14]=i[14],o[15]=i[15]}function x(t){const e=R();return r=e,n=b(70),a=t,o=.1,i=1e3,c=1/Math.tan(n/2),r[0]=c/a,r[1]=0,r[2]=0,r[3]=0,r[4]=0,r[5]=c,r[6]=0,r[7]=0,r[8]=0,r[9]=0,r[11]=-1,r[12]=0,r[13]=0,r[15]=0,null!=i&&i!==1/0?(s=1/(o-i),r[10]=(i+o)*s,r[14]=2*i*o*s):(r[10]=-1,r[14]=-2*o),e;var r,n,a,o,i,s,c}function v(t,e,r){for(let a=0;a<r.length;a++)n(t,e,"light_position["+a+"]",r[a].position),n(t,e,"light_color["+a+"]",r[a].color),n(t,e,"light_attenuation["+a+"]",r[a].attenuation)}function U(t,e,r){a(t,e,"projection",r.projection),a(t,e,"view",r.view),n(t,e,"camera_position",r.position)}let w,B;function P(t){!function(t,r,o){t.clear(t.COLOR_BUFFER_BIT|t.DEPTH_BUFFER_BIT),r.lights[0].position[2]=4*Math.sin(.0015*o)-4,r.lights[1].position[2]=4*Math.cos(.0015*o)-4,function(t,r){!function(t){const{view:e,position:r,pitch:n,yaw:a}=t;T(e),F(e,e,b(n),[1,0,0]),F(e,e,b(a),[0,1,0]),d(e,e,r.map((t=>-1*t)))}(r.camera),function(t,r){const o=r.shaders.raw_entity_shader,i=r.raw_entities,{lights:s,camera:c}=r;t.useProgram(o.program),v(t,o,s),U(t,o,c),i.forEach((r=>{!function(t,r,o){n(t,r,"object_color",o.color),e(t,r,"reflectivity",o.reflectivity),e(t,r,"shine_damper",o.shine_damper),y(o.transform),a(t,r,"model",o.transform.matrix),function(t,e){t.bindVertexArray(e.vao),t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.indices_buff),t.drawElements(t.TRIANGLES,e.num_indices,t.UNSIGNED_SHORT,0)}(t,o.model)}(t,o,r)}))}(t,r),function(t,r){const n=r.shaders.normal_mapped_entity_shader,o=r.normal_mapped_entities,{lights:i,camera:s}=r;t.useProgram(n.program),v(t,n,i),U(t,n,s),o.forEach((r=>{!function(t,r,n){t.activeTexture(t.TEXTURE0),t.bindTexture(t.TEXTURE_2D,n.texture),t.activeTexture(t.TEXTURE1),t.bindTexture(t.TEXTURE_2D,n.normal_map),e(t,r,"reflectivity",n.reflectivity),e(t,r,"shine_damper",n.shine_damper),y(n.transform),a(t,r,"model",n.transform.matrix),function(t,e){t.bindVertexArray(e.vao),t.drawArrays(t.TRIANGLES,0,e.num_vertices)}(t,n.model)}(t,n,r)}))}(t,r)}(t,r)}(w,B,t),requestAnimationFrame(P)}window.onload=async function(){const e=document.getElementById("canvas");w=e.getContext("webgl2"),null!=w?(console.log("WebGL Version: "+w.getParameter(w.VERSION)),console.log("GLSL Version: "+w.getParameter(w.SHADING_LANGUAGE_VERSION)),B=await async function(e){const[n,a,o,i]=await Promise.all([t(e),c(e),u(e),A(e)]);return function(t){t.clearColor(0,0,0,1),t.enable(t.DEPTH_TEST),t.viewport(0,0,t.canvas.clientWidth,t.canvas.clientHeight)}(e),function(t,e){const{normal_mapped_entity_shader:n}=e;t.useProgram(n.program),r(t,n,"our_texture",0),r(t,n,"our_normal_map",1)}(e,n),{shaders:n,raw_entities:[{reflectivity:2,shine_damper:50,color:[.5,.5,.5],model:o.bunny,transform:g([4,1.75,-3],[0,-90,0],[30,30,30])}],normal_mapped_entities:[{reflectivity:1,shine_damper:10,model:a.plane,texture:i.bricks_texture,normal_map:i.bricks_normal,transform:g([0,0,-7],[0,90,0],[50,50,50])}],lights:[{position:[0,1,-2],color:[.1,.6,1],attenuation:[.4,.08,.08]},{position:[-2,1,-2],color:[.9,.4,.2],attenuation:[.4,.08,.08]}],camera:(s=[-3,1.5,3],l=e.canvas.clientWidth/e.canvas.clientHeight,{position:s,pitch:5,yaw:20,view:R(),projection:x(l)})};var s,l}(w),P()):console.error("Failed to initialize webgl")}})();