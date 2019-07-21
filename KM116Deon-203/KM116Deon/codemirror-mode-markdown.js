(function(t){"object"==typeof exports&&"object"==typeof module?t(require("../../lib/codemirror"),require("../xml/xml"),require("../meta")):"function"==typeof define&&define.amd?define(["../../lib/codemirror","../xml/xml","../meta"],t):t(CodeMirror)})(function(t){"use strict";t.defineMode("markdown",function(e,i){function n(i){if(t.findModeByName){var n=t.findModeByName(i);n&&(i=n.mime||n.mimes[0])}var r=t.getMode(e,i);return"null"==r.name?null:r}function r(t,e,i){return e.f=e.inline=i,i(t,e)}function a(t,e,i){return e.f=e.block=i,i(t,e)}function l(t){return!t||!/\S/.test(t.string)}function o(t){return t.linkTitle=!1,t.em=!1,t.strong=!1,t.strikethrough=!1,t.quote=0,t.indentedCode=!1,t.f==s&&(t.f=f,t.block=h),t.trailingSpace=0,t.trailingSpaceNewLine=!1,t.prevLine=t.thisLine,t.thisLine={stream:null},null}function h(e,a){var o=e.column()===a.indentation,h=l(a.prevLine.stream),s=a.indentedCode,u=a.prevLine.hr,f=a.list!==!1,c=(a.listStack[a.listStack.length-1]||0)+3;a.indentedCode=!1;var d=a.indentation;if(null===a.indentationDiff&&(a.indentationDiff=a.indentation,f)){for(a.list=null;d<a.listStack[a.listStack.length-1];)a.listStack.pop(),a.listStack.length?a.indentation=a.listStack[a.listStack.length-1]:a.list=!1;a.list!==!1&&(a.indentationDiff=d-a.listStack[a.listStack.length-1])}var k=!(h||u||a.prevLine.header||f&&s||a.prevLine.fencedCodeEnd),v=(a.list===!1||u||h)&&a.indentation<=c&&e.match(M),S=null;if(a.indentationDiff>=4&&(s||a.prevLine.fencedCodeEnd||a.prevLine.header||h))return e.skipToEnd(),a.indentedCode=!0,T.code;if(e.eatSpace())return null;if(o&&a.indentation<=c&&(S=e.match(E))&&S[1].length<=6)return a.quote=0,a.header=S[1].length,a.thisLine.header=!0,i.highlightFormatting&&(a.formatting="header"),a.f=a.inline,m(a);if(a.indentation<=c&&e.eat(">"))return a.quote=o?1:a.quote+1,i.highlightFormatting&&(a.formatting="quote"),e.eatSpace(),m(a);if(!v&&!a.setext&&o&&a.indentation<=c&&(S=e.match(F))){var x=S[1]?"ol":"ul";return a.indentation=d+e.current().length,a.list=!0,a.quote=0,a.listStack.push(a.indentation),i.taskLists&&e.match(b,!1)&&(a.taskList=!0),a.f=a.inline,i.highlightFormatting&&(a.formatting=["list","list-"+x]),m(a)}return o&&a.indentation<=c&&(S=e.match(j,!0))?(a.quote=0,a.fencedEndRE=new RegExp(S[1]+"+ *$"),a.localMode=i.fencedCodeBlockHighlighting&&n(S[2]),a.localMode&&(a.localState=t.startState(a.localMode)),a.f=a.block=g,i.highlightFormatting&&(a.formatting="code-block"),a.code=-1,m(a)):a.setext||!(k&&f||a.quote||a.list!==!1||a.code||v||C.test(e.string))&&(S=e.lookAhead(1))&&(S=S.match(w))?(a.setext?(a.header=a.setext,a.setext=0,e.skipToEnd(),i.highlightFormatting&&(a.formatting="header")):(a.header="="==S[0].charAt(0)?1:2,a.setext=a.header),a.thisLine.header=!0,a.f=a.inline,m(a)):v?(e.skipToEnd(),a.hr=!0,a.thisLine.hr=!0,T.hr):"["===e.peek()?r(e,a,p):r(e,a,a.inline)}function s(e,i){var n=x.token(e,i.htmlState);if(!L){var r=t.innerMode(x,i.htmlState);("xml"==r.mode.name&&null===r.state.tagStart&&!r.state.context&&r.state.tokenize.isInText||i.md_inside&&e.current().indexOf(">")>-1)&&(i.f=f,i.block=h,i.htmlState=null)}return n}function g(t,e){var n=e.listStack[e.listStack.length-1]||0,r=e.indentation<n,l=n+3;if(e.fencedEndRE&&e.indentation<=l&&(r||t.match(e.fencedEndRE))){i.highlightFormatting&&(e.formatting="code-block");var o;return r||(o=m(e)),e.localMode=e.localState=null,e.block=h,e.f=f,e.fencedEndRE=null,e.code=0,e.thisLine.fencedCodeEnd=!0,r?a(t,e,e.block):o}return e.localMode?e.localMode.token(t,e.localState):(t.skipToEnd(),T.code)}function m(t){var e=[];if(t.formatting){e.push(T.formatting),"string"==typeof t.formatting&&(t.formatting=[t.formatting]);for(var n=0;n<t.formatting.length;n++)e.push(T.formatting+"-"+t.formatting[n]),"header"===t.formatting[n]&&e.push(T.formatting+"-"+t.formatting[n]+"-"+t.header),"quote"===t.formatting[n]&&(!i.maxBlockquoteDepth||i.maxBlockquoteDepth>=t.quote?e.push(T.formatting+"-"+t.formatting[n]+"-"+t.quote):e.push("error"))}if(t.taskOpen)return e.push("meta"),e.length?e.join(" "):null;if(t.taskClosed)return e.push("property"),e.length?e.join(" "):null;if(t.linkHref?e.push(T.linkHref,"url"):(t.strong&&e.push(T.strong),t.em&&e.push(T.em),t.strikethrough&&e.push(T.strikethrough),t.emoji&&e.push(T.emoji),t.linkText&&e.push(T.linkText),t.code&&e.push(T.code),t.image&&e.push(T.image),t.imageAltText&&e.push(T.imageAltText,"link"),t.imageMarker&&e.push(T.imageMarker)),t.header&&e.push(T.header,T.header+"-"+t.header),t.quote&&(e.push(T.quote),!i.maxBlockquoteDepth||i.maxBlockquoteDepth>=t.quote?e.push(T.quote+"-"+t.quote):e.push(T.quote+"-"+i.maxBlockquoteDepth)),t.list!==!1){var r=(t.listStack.length-1)%3;r?1===r?e.push(T.list2):e.push(T.list3):e.push(T.list1)}return t.trailingSpaceNewLine?e.push("trailing-space-new-line"):t.trailingSpace&&e.push("trailing-space-"+(t.trailingSpace%2?"a":"b")),e.length?e.join(" "):null}function u(t,e){if(t.match(y,!0))return m(e)}function f(e,n){var r=n.text(e,n);if("undefined"!=typeof r)return r;if(n.list)return n.list=null,m(n);if(n.taskList){var l=" "===e.match(b,!0)[1];return l?n.taskOpen=!0:n.taskClosed=!0,i.highlightFormatting&&(n.formatting="task"),n.taskList=!1,m(n)}if(n.taskOpen=!1,n.taskClosed=!1,n.header&&e.match(/^#+$/,!0))return i.highlightFormatting&&(n.formatting="header"),m(n);var o=e.next();if(n.linkTitle){n.linkTitle=!1;var h=o;"("===o&&(h=")"),h=(h+"").replace(/([.?*+^\[\]\\(){}|-])/g,"\\$1");var g="^\\s*(?:[^"+h+"\\\\]+|\\\\\\\\|\\\\.)"+h;if(e.match(new RegExp(g),!0))return T.linkHref}if("`"===o){var u=n.formatting;i.highlightFormatting&&(n.formatting="code"),e.eatWhile("`");var k=e.current().length;if(0!=n.code||n.quote&&1!=k){if(k==n.code){var p=m(n);return n.code=0,p}return n.formatting=u,m(n)}return n.code=k,m(n)}if(n.code)return m(n);if("\\"===o&&(e.next(),i.highlightFormatting)){var v=m(n),S=T.formatting+"-escape";return v?v+" "+S:S}if("!"===o&&e.match(/\[[^\]]*\] ?(?:\(|\[)/,!1))return n.imageMarker=!0,n.image=!0,i.highlightFormatting&&(n.formatting="image"),m(n);if("["===o&&n.imageMarker&&e.match(/[^\]]*\](\(.*?\)| ?\[.*?\])/,!1))return n.imageMarker=!1,n.imageAltText=!0,i.highlightFormatting&&(n.formatting="image"),m(n);if("]"===o&&n.imageAltText){i.highlightFormatting&&(n.formatting="image");var v=m(n);return n.imageAltText=!1,n.image=!1,n.inline=n.f=d,v}if("["===o&&!n.image)return n.linkText=!0,i.highlightFormatting&&(n.formatting="link"),m(n);if("]"===o&&n.linkText){i.highlightFormatting&&(n.formatting="link");var v=m(n);return n.linkText=!1,n.inline=n.f=e.match(/\(.*?\)| ?\[.*?\]/,!1)?d:f,v}if("<"===o&&e.match(/^(https?|ftps?):\/\/(?:[^\\>]|\\.)+>/,!1)){n.f=n.inline=c,i.highlightFormatting&&(n.formatting="link");var v=m(n);return v?v+=" ":v="",v+T.linkInline}if("<"===o&&e.match(/^[^> \\]+@(?:[^\\>]|\\.)+>/,!1)){n.f=n.inline=c,i.highlightFormatting&&(n.formatting="link");var v=m(n);return v?v+=" ":v="",v+T.linkEmail}if(i.xml&&"<"===o&&e.match(/^(!--|[a-z]+(?:\s+[a-z_:.\-]+(?:\s*=\s*[^ >]+)?)*\s*>)/i,!1)){var L=e.string.indexOf(">",e.pos);if(L!=-1){var q=e.string.substring(e.start,L);/markdown\s*=\s*('|"){0,1}1('|"){0,1}/.test(q)&&(n.md_inside=!0)}return e.backUp(1),n.htmlState=t.startState(x),a(e,n,s)}if(i.xml&&"<"===o&&e.match(/^\/\w*?>/))return n.md_inside=!1,"tag";if("*"===o||"_"===o){for(var M=1,F=1==e.pos?" ":e.string.charAt(e.pos-2);M<3&&e.eat(o);)M++;var E=e.peek()||" ",w=!/\s/.test(E)&&(!B.test(E)||/\s/.test(F)||B.test(F)),y=!/\s/.test(F)&&(!B.test(F)||/\s/.test(E)||B.test(E)),j=null,C=null;if(M%2&&(n.em||!w||"*"!==o&&y&&!B.test(F)?n.em!=o||!y||"*"!==o&&w&&!B.test(E)||(j=!1):j=!0),M>1&&(n.strong||!w||"*"!==o&&y&&!B.test(F)?n.strong!=o||!y||"*"!==o&&w&&!B.test(E)||(C=!1):C=!0),null!=C||null!=j){i.highlightFormatting&&(n.formatting=null==j?"strong":null==C?"em":"strong em"),j===!0&&(n.em=o),C===!0&&(n.strong=o);var p=m(n);return j===!1&&(n.em=!1),C===!1&&(n.strong=!1),p}}else if(" "===o&&(e.eat("*")||e.eat("_"))){if(" "===e.peek())return m(n);e.backUp(1)}if(i.strikethrough)if("~"===o&&e.eatWhile(o)){if(n.strikethrough){i.highlightFormatting&&(n.formatting="strikethrough");var p=m(n);return n.strikethrough=!1,p}if(e.match(/^[^\s]/,!1))return n.strikethrough=!0,i.highlightFormatting&&(n.formatting="strikethrough"),m(n)}else if(" "===o&&e.match(/^~~/,!0)){if(" "===e.peek())return m(n);e.backUp(2)}if(i.emoji&&":"===o&&e.match(/^[a-z_\d+-]+:/)){n.emoji=!0,i.highlightFormatting&&(n.formatting="emoji");var H=m(n);return n.emoji=!1,H}return" "===o&&(e.match(/ +$/,!1)?n.trailingSpace++:n.trailingSpace&&(n.trailingSpaceNewLine=!0)),m(n)}function c(t,e){var n=t.next();if(">"===n){e.f=e.inline=f,i.highlightFormatting&&(e.formatting="link");var r=m(e);return r?r+=" ":r="",r+T.linkInline}return t.match(/^[^>]+/,!0),T.linkInline}function d(t,e){if(t.eatSpace())return null;var n=t.next();return"("===n||"["===n?(e.f=e.inline=k("("===n?")":"]"),i.highlightFormatting&&(e.formatting="link-string"),e.linkHref=!0,m(e)):"error"}function k(t){return function(e,n){var r=e.next();if(r===t){n.f=n.inline=f,i.highlightFormatting&&(n.formatting="link-string");var a=m(n);return n.linkHref=!1,a}return e.match(D[t]),n.linkHref=!0,m(n)}}function p(t,e){return t.match(/^([^\]\\]|\\.)*\]:/,!1)?(e.f=v,t.next(),i.highlightFormatting&&(e.formatting="link"),e.linkText=!0,m(e)):r(t,e,f)}function v(t,e){if(t.match(/^\]:/,!0)){e.f=e.inline=S,i.highlightFormatting&&(e.formatting="link");var n=m(e);return e.linkText=!1,n}return t.match(/^([^\]\\]|\\.)+/,!0),T.linkText}function S(t,e){return t.eatSpace()?null:(t.match(/^[^\s]+/,!0),void 0===t.peek()?e.linkTitle=!0:t.match(/^(?:\s+(?:"(?:[^"\\]|\\\\|\\.)+"|'(?:[^'\\]|\\\\|\\.)+'|\((?:[^)\\]|\\\\|\\.)+\)))?/,!0),e.f=e.inline=f,T.linkHref+" url")}var x=t.getMode(e,"text/html"),L="null"==x.name;void 0===i.highlightFormatting&&(i.highlightFormatting=!1),void 0===i.maxBlockquoteDepth&&(i.maxBlockquoteDepth=0),void 0===i.taskLists&&(i.taskLists=!1),void 0===i.strikethrough&&(i.strikethrough=!1),void 0===i.emoji&&(i.emoji=!1),void 0===i.fencedCodeBlockHighlighting&&(i.fencedCodeBlockHighlighting=!0),void 0===i.xml&&(i.xml=!0),void 0===i.tokenTypeOverrides&&(i.tokenTypeOverrides={});var T={header:"header",code:"comment",quote:"quote",list1:"variable-2",list2:"variable-3",list3:"keyword",hr:"hr",image:"image",imageAltText:"image-alt-text",imageMarker:"image-marker",formatting:"formatting",linkInline:"link",linkEmail:"link",linkText:"link",linkHref:"string",em:"em",strong:"strong",strikethrough:"strikethrough",emoji:"builtin"};for(var q in T)T.hasOwnProperty(q)&&i.tokenTypeOverrides[q]&&(T[q]=i.tokenTypeOverrides[q]);var M=/^([*\-_])(?:\s*\1){2,}\s*$/,F=/^(?:[*\-+]|^[0-9]+([.)]))\s+/,b=/^\[(x| )\](?=\s)/i,E=i.allowAtxHeaderWithoutSpace?/^(#+)/:/^(#+)(?: |$)/,w=/^ *(?:\={1,}|-{1,})\s*$/,y=/^[^#!\[\]*_\\<>` "'(~:]+/,j=/^(~~~+|```+)[ \t]*([\w+#-]*)[^\n`]*$/,C=/^\s*\[[^\]]+?\]:\s*\S+(\s*\S*\s*)?$/,B=/[!\"#$%&\'()*+,\-\.\/:;<=>?@\[\\\]^_`{|}~—]/,H="    ",D={")":/^(?:[^\\\(\)]|\\.|\((?:[^\\\(\)]|\\.)*\))*?(?=\))/,"]":/^(?:[^\\\[\]]|\\.|\[(?:[^\\\[\]]|\\.)*\])*?(?=\])/},_={startState:function(){return{f:h,prevLine:{stream:null},thisLine:{stream:null},block:h,htmlState:null,indentation:0,inline:f,text:u,formatting:!1,linkText:!1,linkHref:!1,linkTitle:!1,code:0,em:!1,strong:!1,header:0,setext:0,hr:!1,taskList:!1,list:!1,listStack:[],quote:0,trailingSpace:0,trailingSpaceNewLine:!1,strikethrough:!1,emoji:!1,fencedEndRE:null}},copyState:function(e){return{f:e.f,prevLine:e.prevLine,thisLine:e.thisLine,block:e.block,htmlState:e.htmlState&&t.copyState(x,e.htmlState),indentation:e.indentation,localMode:e.localMode,localState:e.localMode?t.copyState(e.localMode,e.localState):null,inline:e.inline,text:e.text,formatting:!1,linkText:e.linkText,linkTitle:e.linkTitle,code:e.code,em:e.em,strong:e.strong,strikethrough:e.strikethrough,emoji:e.emoji,header:e.header,setext:e.setext,hr:e.hr,taskList:e.taskList,list:e.list,listStack:e.listStack.slice(0),quote:e.quote,indentedCode:e.indentedCode,trailingSpace:e.trailingSpace,trailingSpaceNewLine:e.trailingSpaceNewLine,md_inside:e.md_inside,fencedEndRE:e.fencedEndRE}},token:function(t,e){if(e.formatting=!1,t!=e.thisLine.stream){if(e.header=0,e.hr=!1,t.match(/^\s*$/,!0))return o(e),null;if(e.prevLine=e.thisLine,e.thisLine={stream:t},e.taskList=!1,e.trailingSpace=0,e.trailingSpaceNewLine=!1,!e.localState&&(e.f=e.block,e.f!=s)){var i=t.match(/^\s*/,!0)[0].replace(/\t/g,H).length;if(e.indentation=i,e.indentationDiff=null,i>0)return null}}return e.f(t,e)},innerMode:function(t){return t.block==s?{state:t.htmlState,mode:x}:t.localState?{state:t.localState,mode:t.localMode}:{state:t,mode:_}},indent:function(e,i,n){return e.block==s&&x.indent?x.indent(e.htmlState,i,n):e.localState&&e.localMode.indent?e.localMode.indent(e.localState,i,n):t.Pass},blankLine:o,getType:m,closeBrackets:"()[]{}''\"\"``",fold:"markdown"};return _},"xml"),t.defineMIME("text/x-markdown","markdown")});