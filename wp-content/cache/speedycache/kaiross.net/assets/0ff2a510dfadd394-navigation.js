(function(){
var container, button, menu, links, i, len;
container=document.getElementById('site-navigation');
if(! container){
return;
}
button=document.getElementsByClassName('menu-toggle')[0];
if('undefined'===typeof button){
return;
}
menu=container.getElementsByTagName('ul')[0];
if('undefined'===typeof menu){
button.style.display='none';
return;
}
if(-1===menu.className.indexOf('nav-menu')){
menu.className +=' nav-menu';
}
button.onclick=function(){
if(container.classList.contains('hidden-mobile')==true){
container.className=container.className.replace('hidden-mobile', '');
button.setAttribute('aria-expanded', 'false');
}else{
container.className +=' hidden-mobile';
button.setAttribute('aria-expanded', 'true');
}};
document.addEventListener('click', function(event){
var isClickInside=container.contains(event.target);
if(! isClickInside){
container.className=container.className.replace(' toggled', '');
button.setAttribute('aria-expanded', 'false');
}});
links=menu.getElementsByTagName('a');
for(i=0, len=links.length; i < len; i++){
links[i].addEventListener('focus', toggleFocus, true);
links[i].addEventListener('blur', toggleFocus, true);
}
function toggleFocus(){
var self=this;
while(-1===self.className.indexOf('nav-menu')){
if('li'===self.tagName.toLowerCase()){
if(-1!==self.className.indexOf('focus')){
self.className=self.className.replace(' focus', '');
}else{
self.className +=' focus';
}}
self=self.parentElement;
}}
(function(){
var touchStartFn,
parentLink=container.querySelectorAll('.menu-item-has-children > a, .page_item_has_children > a');
if('ontouchstart' in window){
touchStartFn=function(e){
var menuItem=this.parentNode;
if(! menuItem.classList.contains('focus')){
e.preventDefault();
for(i=0; i < menuItem.parentNode.children.length; ++i){
if(menuItem===menuItem.parentNode.children[i]){
continue;
}
menuItem.parentNode.children[i].classList.remove('focus');
}
menuItem.classList.add('focus');
}else{
menuItem.classList.remove('focus');
}};
for(i=0; i < parentLink.length; ++i){
parentLink[i].addEventListener('touchstart', touchStartFn, false);
}}
}(container));
}());
(function(){
var isIe=/(trident|msie)/i.test(navigator.userAgent);
if(isIe&&document.getElementById&&window.addEventListener){
window.addEventListener('hashchange', function(){
var id=location.hash.substring(1),
element;
if(!(/^[A-z0-9_-]+$/.test(id))){
return;
}
element=document.getElementById(id);
if(element){
if(!(/^(?:a|select|input|button|textarea)$/i.test(element.tagName))){
element.tabIndex=-1;
}
element.focus();
}}, false);
}}());
jQuery(document).ready(function(){
pfx_toggle_scroll_top();
jQuery(window).on("scroll.scroll_top", function(){
pfx_toggle_scroll_top();
});
});
jQuery(document).on("click", "a.pfx-scroll-top", function(){
jQuery("html, body").animate({scrollTop:0}, 700);
});
function pfx_toggle_scroll_top(){
var jEle=jQuery("a.pfx-scroll-top");
if(jQuery(window).scrollTop() > 200){
jEle.fadeIn();
return;
}
jEle.fadeOut();
}