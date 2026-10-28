/*
 * PANEL INFORMATIVO INFERIOR
 * Los cuatro botones comparten un único panel. Al abrir uno, se cierran los
 * demás; al volver a pulsar el mismo botón, el panel se oculta.
 */
(function(){
 const buttons=[...document.querySelectorAll('.info-button')];
 const panel=document.getElementById('infoPanel');
 const contents=[...document.querySelectorAll('.info-content[data-panel]')];
 buttons.forEach(button=>button.addEventListener('click',()=>{
   const key=button.dataset.info;
   const wasOpen=button.getAttribute('aria-expanded')==='true';
   buttons.forEach(b=>b.setAttribute('aria-expanded','false'));
   contents.forEach(c=>c.hidden=true);
   if(wasOpen){panel.hidden=true;return;}
   button.setAttribute('aria-expanded','true');
   const content=contents.find(c=>c.dataset.panel===key);
   if(content)content.hidden=false;
   panel.hidden=false;
 }));
})();
