(function(l){"object"==typeof exports&&"object"==typeof module?l(require("../../lib/codemirror"),require("./xml-hint")):"function"==typeof define&&define.amd?define(["../../lib/codemirror","./xml-hint"],l):l(CodeMirror)})(function(l){"use strict";function t(l){for(var t in c)c.hasOwnProperty(t)&&(l.attrs[t]=c[t])}function e(t,e){var a={schemaInfo:d};if(e)for(var n in e)a[n]=e[n];return l.hint.xml(t,a)}var a="ab aa af ak sq am ar an hy as av ae ay az bm ba eu be bn bh bi bs br bg my ca ch ce ny zh cv kw co cr hr cs da dv nl dz en eo et ee fo fj fi fr ff gl ka de el gn gu ht ha he hz hi ho hu ia id ie ga ig ik io is it iu ja jv kl kn kr ks kk km ki rw ky kv kg ko ku kj la lb lg li ln lo lt lu lv gv mk mg ms ml mt mi mr mh mn na nv nb nd ne ng nn no ii nr oc oj cu om or os pa pi fa pl ps pt qu rm rn ro ru sa sc sd se sm sg sr gd sn si sk sl so st es su sw ss sv ta te tg th ti bo tk tl tn to tr ts tt tw ty ug uk ur uz ve vi vo wa cy wo fy xh yi yo za zu".split(" "),n=["_blank","_self","_top","_parent"],r=["ascii","utf-8","utf-16","latin1","latin1"],o=["get","post","put","delete"],s=["application/x-www-form-urlencoded","multipart/form-data","text/plain"],u=["all","screen","print","embossed","braille","handheld","print","projection","screen","tty","tv","speech","3d-glasses","resolution [>][<][=] [X]","device-aspect-ratio: X/Y","orientation:portrait","orientation:landscape","device-height: [X]","device-width: [X]"],i={attrs:{}},d={a:{attrs:{href:null,ping:null,type:null,media:u,target:n,hreflang:a}},abbr:i,acronym:i,address:i,applet:i,area:{attrs:{alt:null,coords:null,href:null,target:null,ping:null,media:u,hreflang:a,type:null,shape:["default","rect","circle","poly"]}},article:i,aside:i,audio:{attrs:{src:null,mediagroup:null,crossorigin:["anonymous","use-credentials"],preload:["none","metadata","auto"],autoplay:["","autoplay"],loop:["","loop"],controls:["","controls"]}},b:i,base:{attrs:{href:null,target:n}},basefont:i,bdi:i,bdo:i,big:i,blockquote:{attrs:{cite:null}},body:i,br:i,button:{attrs:{form:null,formaction:null,name:null,value:null,autofocus:["","autofocus"],disabled:["","autofocus"],formenctype:s,formmethod:o,formnovalidate:["","novalidate"],formtarget:n,type:["submit","reset","button"]}},canvas:{attrs:{width:null,height:null}},caption:i,center:i,cite:i,code:i,col:{attrs:{span:null}},colgroup:{attrs:{span:null}},command:{attrs:{type:["command","checkbox","radio"],label:null,icon:null,radiogroup:null,command:null,title:null,disabled:["","disabled"],checked:["","checked"]}},data:{attrs:{value:null}},datagrid:{attrs:{disabled:["","disabled"],multiple:["","multiple"]}},datalist:{attrs:{data:null}},dd:i,del:{attrs:{cite:null,datetime:null}},details:{attrs:{open:["","open"]}},dfn:i,dir:i,div:i,dl:i,dt:i,em:i,embed:{attrs:{src:null,type:null,width:null,height:null}},eventsource:{attrs:{src:null}},fieldset:{attrs:{disabled:["","disabled"],form:null,name:null}},figcaption:i,figure:i,font:i,footer:i,form:{attrs:{action:null,name:null,"accept-charset":r,autocomplete:["on","off"],enctype:s,method:o,novalidate:["","novalidate"],target:n}},frame:i,frameset:i,h1:i,h2:i,h3:i,h4:i,h5:i,h6:i,head:{attrs:{},children:["title","base","link","style","meta","script","noscript","command"]},header:i,hgroup:i,hr:i,html:{attrs:{manifest:null},children:["head","body"]},i:i,iframe:{attrs:{src:null,srcdoc:null,name:null,width:null,height:null,sandbox:["allow-top-navigation","allow-same-origin","allow-forms","allow-scripts"],seamless:["","seamless"]}},img:{attrs:{alt:null,src:null,ismap:null,usemap:null,width:null,height:null,crossorigin:["anonymous","use-credentials"]}},input:{attrs:{alt:null,dirname:null,form:null,formaction:null,height:null,list:null,max:null,maxlength:null,min:null,name:null,pattern:null,placeholder:null,size:null,src:null,step:null,value:null,width:null,accept:["audio/*","video/*","image/*"],autocomplete:["on","off"],autofocus:["","autofocus"],checked:["","checked"],disabled:["","disabled"],formenctype:s,formmethod:o,formnovalidate:["","novalidate"],formtarget:n,multiple:["","multiple"],readonly:["","readonly"],required:["","required"],type:["hidden","text","search","tel","url","email","password","datetime","date","month","week","time","datetime-local","number","range","color","checkbox","radio","file","submit","image","reset","button"]}},ins:{attrs:{cite:null,datetime:null}},kbd:i,keygen:{attrs:{challenge:null,form:null,name:null,autofocus:["","autofocus"],disabled:["","disabled"],keytype:["RSA"]}},label:{attrs:{for:null,form:null}},legend:i,li:{attrs:{value:null}},link:{attrs:{href:null,type:null,hreflang:a,media:u,sizes:["all","16x16","16x16 32x32","16x16 32x32 64x64"]}},map:{attrs:{name:null}},mark:i,menu:{attrs:{label:null,type:["list","context","toolbar"]}},meta:{attrs:{content:null,charset:r,name:["viewport","application-name","author","description","generator","keywords"],"http-equiv":["content-language","content-type","default-style","refresh"]}},meter:{attrs:{value:null,min:null,low:null,high:null,max:null,optimum:null}},nav:i,noframes:i,noscript:i,object:{attrs:{data:null,type:null,name:null,usemap:null,form:null,width:null,height:null,typemustmatch:["","typemustmatch"]}},ol:{attrs:{reversed:["","reversed"],start:null,type:["1","a","A","i","I"]}},optgroup:{attrs:{disabled:["","disabled"],label:null}},option:{attrs:{disabled:["","disabled"],label:null,selected:["","selected"],value:null}},output:{attrs:{for:null,form:null,name:null}},p:i,param:{attrs:{name:null,value:null}},pre:i,progress:{attrs:{value:null,max:null}},q:{attrs:{cite:null}},rp:i,rt:i,ruby:i,s:i,samp:i,script:{attrs:{type:["text/javascript"],src:null,async:["","async"],defer:["","defer"],charset:r}},section:i,select:{attrs:{form:null,name:null,size:null,autofocus:["","autofocus"],disabled:["","disabled"],multiple:["","multiple"]}},small:i,source:{attrs:{src:null,type:null,media:null}},span:i,strike:i,strong:i,style:{attrs:{type:["text/css"],media:u,scoped:null}},sub:i,summary:i,sup:i,table:i,tbody:i,td:{attrs:{colspan:null,rowspan:null,headers:null}},textarea:{attrs:{dirname:null,form:null,maxlength:null,name:null,placeholder:null,rows:null,cols:null,autofocus:["","autofocus"],disabled:["","disabled"],readonly:["","readonly"],required:["","required"],wrap:["soft","hard"]}},tfoot:i,th:{attrs:{colspan:null,rowspan:null,headers:null,scope:["row","col","rowgroup","colgroup"]}},thead:i,time:{attrs:{datetime:null}},title:i,tr:i,track:{attrs:{src:null,label:null,default:null,kind:["subtitles","captions","descriptions","chapters","metadata"],srclang:a}},tt:i,u:i,ul:i,var:i,video:{attrs:{src:null,poster:null,width:null,height:null,crossorigin:["anonymous","use-credentials"],preload:["auto","metadata","none"],autoplay:["","autoplay"],mediagroup:["movie"],muted:["","muted"],controls:["","controls"]}},wbr:i},c={accesskey:["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","0","1","2","3","4","5","6","7","8","9"],class:null,contenteditable:["true","false"],contextmenu:null,dir:["ltr","rtl","auto"],draggable:["true","false","auto"],dropzone:["copy","move","link","string:","file:"],hidden:["hidden"],id:null,inert:["inert"],itemid:null,itemprop:null,itemref:null,itemscope:["itemscope"],itemtype:null,lang:["en","es"],spellcheck:["true","false"],style:null,tabindex:["1","2","3","4","5","6","7","8","9"],title:null,translate:["yes","no"],onclick:null,rel:["stylesheet","alternate","author","bookmark","help","license","next","nofollow","noreferrer","prefetch","prev","search","tag"]};t(i);for(var m in d)d.hasOwnProperty(m)&&d[m]!=i&&t(d[m]);l.htmlSchema=d,l.registerHelper("hint","html",e)});