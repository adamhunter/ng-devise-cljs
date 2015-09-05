// Compiled by ClojureScript 1.7.122 {}
goog.provide('figwheel.client.heads_up');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('figwheel.client.socket');
goog.require('cljs.core.async');
goog.require('goog.string');
figwheel.client.heads_up.clear;

figwheel.client.heads_up.cljs_logo_svg;
figwheel.client.heads_up.node = (function figwheel$client$heads_up$node(var_args){
var args__12645__auto__ = [];
var len__12638__auto___19811 = arguments.length;
var i__12639__auto___19812 = (0);
while(true){
if((i__12639__auto___19812 < len__12638__auto___19811)){
args__12645__auto__.push((arguments[i__12639__auto___19812]));

var G__19813 = (i__12639__auto___19812 + (1));
i__12639__auto___19812 = G__19813;
continue;
} else {
}
break;
}

var argseq__12646__auto__ = ((((2) < args__12645__auto__.length))?(new cljs.core.IndexedSeq(args__12645__auto__.slice((2)),(0))):null);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__12646__auto__);
});

figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic = (function (t,attrs,children){
var e = document.createElement(cljs.core.name.call(null,t));
var seq__19803_19814 = cljs.core.seq.call(null,cljs.core.keys.call(null,attrs));
var chunk__19804_19815 = null;
var count__19805_19816 = (0);
var i__19806_19817 = (0);
while(true){
if((i__19806_19817 < count__19805_19816)){
var k_19818 = cljs.core._nth.call(null,chunk__19804_19815,i__19806_19817);
e.setAttribute(cljs.core.name.call(null,k_19818),cljs.core.get.call(null,attrs,k_19818));

var G__19819 = seq__19803_19814;
var G__19820 = chunk__19804_19815;
var G__19821 = count__19805_19816;
var G__19822 = (i__19806_19817 + (1));
seq__19803_19814 = G__19819;
chunk__19804_19815 = G__19820;
count__19805_19816 = G__19821;
i__19806_19817 = G__19822;
continue;
} else {
var temp__4425__auto___19823 = cljs.core.seq.call(null,seq__19803_19814);
if(temp__4425__auto___19823){
var seq__19803_19824__$1 = temp__4425__auto___19823;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19803_19824__$1)){
var c__12383__auto___19825 = cljs.core.chunk_first.call(null,seq__19803_19824__$1);
var G__19826 = cljs.core.chunk_rest.call(null,seq__19803_19824__$1);
var G__19827 = c__12383__auto___19825;
var G__19828 = cljs.core.count.call(null,c__12383__auto___19825);
var G__19829 = (0);
seq__19803_19814 = G__19826;
chunk__19804_19815 = G__19827;
count__19805_19816 = G__19828;
i__19806_19817 = G__19829;
continue;
} else {
var k_19830 = cljs.core.first.call(null,seq__19803_19824__$1);
e.setAttribute(cljs.core.name.call(null,k_19830),cljs.core.get.call(null,attrs,k_19830));

var G__19831 = cljs.core.next.call(null,seq__19803_19824__$1);
var G__19832 = null;
var G__19833 = (0);
var G__19834 = (0);
seq__19803_19814 = G__19831;
chunk__19804_19815 = G__19832;
count__19805_19816 = G__19833;
i__19806_19817 = G__19834;
continue;
}
} else {
}
}
break;
}

var seq__19807_19835 = cljs.core.seq.call(null,children);
var chunk__19808_19836 = null;
var count__19809_19837 = (0);
var i__19810_19838 = (0);
while(true){
if((i__19810_19838 < count__19809_19837)){
var ch_19839 = cljs.core._nth.call(null,chunk__19808_19836,i__19810_19838);
e.appendChild(ch_19839);

var G__19840 = seq__19807_19835;
var G__19841 = chunk__19808_19836;
var G__19842 = count__19809_19837;
var G__19843 = (i__19810_19838 + (1));
seq__19807_19835 = G__19840;
chunk__19808_19836 = G__19841;
count__19809_19837 = G__19842;
i__19810_19838 = G__19843;
continue;
} else {
var temp__4425__auto___19844 = cljs.core.seq.call(null,seq__19807_19835);
if(temp__4425__auto___19844){
var seq__19807_19845__$1 = temp__4425__auto___19844;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19807_19845__$1)){
var c__12383__auto___19846 = cljs.core.chunk_first.call(null,seq__19807_19845__$1);
var G__19847 = cljs.core.chunk_rest.call(null,seq__19807_19845__$1);
var G__19848 = c__12383__auto___19846;
var G__19849 = cljs.core.count.call(null,c__12383__auto___19846);
var G__19850 = (0);
seq__19807_19835 = G__19847;
chunk__19808_19836 = G__19848;
count__19809_19837 = G__19849;
i__19810_19838 = G__19850;
continue;
} else {
var ch_19851 = cljs.core.first.call(null,seq__19807_19845__$1);
e.appendChild(ch_19851);

var G__19852 = cljs.core.next.call(null,seq__19807_19845__$1);
var G__19853 = null;
var G__19854 = (0);
var G__19855 = (0);
seq__19807_19835 = G__19852;
chunk__19808_19836 = G__19853;
count__19809_19837 = G__19854;
i__19810_19838 = G__19855;
continue;
}
} else {
}
}
break;
}

return e;
});

figwheel.client.heads_up.node.cljs$lang$maxFixedArity = (2);

figwheel.client.heads_up.node.cljs$lang$applyTo = (function (seq19800){
var G__19801 = cljs.core.first.call(null,seq19800);
var seq19800__$1 = cljs.core.next.call(null,seq19800);
var G__19802 = cljs.core.first.call(null,seq19800__$1);
var seq19800__$2 = cljs.core.next.call(null,seq19800__$1);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic(G__19801,G__19802,seq19800__$2);
});
if(typeof figwheel.client.heads_up.heads_up_event_dispatch !== 'undefined'){
} else {
figwheel.client.heads_up.heads_up_event_dispatch = (function (){var method_table__12493__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__12494__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__12495__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__12496__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__12497__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.heads-up","heads-up-event-dispatch"),((function (method_table__12493__auto__,prefer_table__12494__auto__,method_cache__12495__auto__,cached_hierarchy__12496__auto__,hierarchy__12497__auto__){
return (function (dataset){
return dataset.figwheelEvent;
});})(method_table__12493__auto__,prefer_table__12494__auto__,method_cache__12495__auto__,cached_hierarchy__12496__auto__,hierarchy__12497__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__12497__auto__,method_table__12493__auto__,prefer_table__12494__auto__,method_cache__12495__auto__,cached_hierarchy__12496__auto__));
})();
}
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,new cljs.core.Keyword(null,"default","default",-1987822328),(function (_){
return cljs.core.PersistentArrayMap.EMPTY;
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"file-selected",(function (dataset){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"file-selected",new cljs.core.Keyword(null,"file-name","file-name",-1654217259),dataset.fileName,new cljs.core.Keyword(null,"file-line","file-line",-1228823138),dataset.fileLine], null));
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"close-heads-up",(function (dataset){
return figwheel.client.heads_up.clear.call(null);
}));
figwheel.client.heads_up.ancestor_nodes = (function figwheel$client$heads_up$ancestor_nodes(el){
return cljs.core.iterate.call(null,(function (e){
return e.parentNode;
}),el);
});
figwheel.client.heads_up.get_dataset = (function figwheel$client$heads_up$get_dataset(el){
return cljs.core.first.call(null,cljs.core.keep.call(null,(function (x){
if(cljs.core.truth_(x.dataset.figwheelEvent)){
return x.dataset;
} else {
return null;
}
}),cljs.core.take.call(null,(4),figwheel.client.heads_up.ancestor_nodes.call(null,el))));
});
figwheel.client.heads_up.heads_up_onclick_handler = (function figwheel$client$heads_up$heads_up_onclick_handler(event){
var dataset = figwheel.client.heads_up.get_dataset.call(null,event.target);
event.preventDefault();

if(cljs.core.truth_(dataset)){
return figwheel.client.heads_up.heads_up_event_dispatch.call(null,dataset);
} else {
return null;
}
});
figwheel.client.heads_up.ensure_container = (function figwheel$client$heads_up$ensure_container(){
var cont_id = "figwheel-heads-up-container";
var content_id = "figwheel-heads-up-content-area";
if(cljs.core.not.call(null,document.querySelector([cljs.core.str("#"),cljs.core.str(cont_id)].join('')))){
var el_19856 = figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cont_id,new cljs.core.Keyword(null,"style","style",-496642736),[cljs.core.str("-webkit-transition: all 0.2s ease-in-out;"),cljs.core.str("-moz-transition: all 0.2s ease-in-out;"),cljs.core.str("-o-transition: all 0.2s ease-in-out;"),cljs.core.str("transition: all 0.2s ease-in-out;"),cljs.core.str("font-size: 13px;"),cljs.core.str("border-top: 1px solid #f5f5f5;"),cljs.core.str("box-shadow: 0px 0px 1px #aaaaaa;"),cljs.core.str("line-height: 18px;"),cljs.core.str("color: #333;"),cljs.core.str("font-family: monospace;"),cljs.core.str("padding: 0px 10px 0px 70px;"),cljs.core.str("position: fixed;"),cljs.core.str("bottom: 0px;"),cljs.core.str("left: 0px;"),cljs.core.str("height: 0px;"),cljs.core.str("opacity: 0.0;"),cljs.core.str("box-sizing: border-box;"),cljs.core.str("z-index: 10000;")].join('')], null));
el_19856.onclick = figwheel.client.heads_up.heads_up_onclick_handler;

el_19856.innerHTML = figwheel.client.heads_up.cljs_logo_svg;

el_19856.appendChild(figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),content_id], null)));

document.body.appendChild(el_19856);
} else {
}

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"container-el","container-el",109664205),document.getElementById(cont_id),new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187),document.getElementById(content_id)], null);
});
figwheel.client.heads_up.set_style_BANG_ = (function figwheel$client$heads_up$set_style_BANG_(p__19857,st_map){
var map__19862 = p__19857;
var map__19862__$1 = ((((!((map__19862 == null)))?((((map__19862.cljs$lang$protocol_mask$partition0$ & (64))) || (map__19862.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19862):map__19862);
var container_el = cljs.core.get.call(null,map__19862__$1,new cljs.core.Keyword(null,"container-el","container-el",109664205));
return cljs.core.mapv.call(null,((function (map__19862,map__19862__$1,container_el){
return (function (p__19864){
var vec__19865 = p__19864;
var k = cljs.core.nth.call(null,vec__19865,(0),null);
var v = cljs.core.nth.call(null,vec__19865,(1),null);
return (container_el.style[cljs.core.name.call(null,k)] = v);
});})(map__19862,map__19862__$1,container_el))
,st_map);
});
figwheel.client.heads_up.set_content_BANG_ = (function figwheel$client$heads_up$set_content_BANG_(p__19866,dom_str){
var map__19869 = p__19866;
var map__19869__$1 = ((((!((map__19869 == null)))?((((map__19869.cljs$lang$protocol_mask$partition0$ & (64))) || (map__19869.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19869):map__19869);
var c = map__19869__$1;
var content_area_el = cljs.core.get.call(null,map__19869__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML = dom_str;
});
figwheel.client.heads_up.get_content = (function figwheel$client$heads_up$get_content(p__19871){
var map__19874 = p__19871;
var map__19874__$1 = ((((!((map__19874 == null)))?((((map__19874.cljs$lang$protocol_mask$partition0$ & (64))) || (map__19874.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19874):map__19874);
var content_area_el = cljs.core.get.call(null,map__19874__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML;
});
figwheel.client.heads_up.close_link = (function figwheel$client$heads_up$close_link(){
return [cljs.core.str("<a style=\""),cljs.core.str("float: right;"),cljs.core.str("font-size: 18px;"),cljs.core.str("text-decoration: none;"),cljs.core.str("text-align: right;"),cljs.core.str("width: 30px;"),cljs.core.str("height: 30px;"),cljs.core.str("color: rgba(84,84,84, 0.5);"),cljs.core.str("\" href=\"#\"  data-figwheel-event=\"close-heads-up\">"),cljs.core.str("x"),cljs.core.str("</a>")].join('');
});
figwheel.client.heads_up.display_heads_up = (function figwheel$client$heads_up$display_heads_up(style,msg){
var c__14660__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__14660__auto__){
return (function (){
var f__14661__auto__ = (function (){var switch__14595__auto__ = ((function (c__14660__auto__){
return (function (state_19917){
var state_val_19918 = (state_19917[(1)]);
if((state_val_19918 === (1))){
var inst_19902 = (state_19917[(7)]);
var inst_19902__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_19903 = [new cljs.core.Keyword(null,"paddingTop","paddingTop",-1088692345),new cljs.core.Keyword(null,"paddingBottom","paddingBottom",-916694489),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_19904 = ["10px","10px","100%","68px","1.0"];
var inst_19905 = cljs.core.PersistentHashMap.fromArrays(inst_19903,inst_19904);
var inst_19906 = cljs.core.merge.call(null,inst_19905,style);
var inst_19907 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_19902__$1,inst_19906);
var inst_19908 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_19902__$1,msg);
var inst_19909 = cljs.core.async.timeout.call(null,(300));
var state_19917__$1 = (function (){var statearr_19919 = state_19917;
(statearr_19919[(8)] = inst_19908);

(statearr_19919[(7)] = inst_19902__$1);

(statearr_19919[(9)] = inst_19907);

return statearr_19919;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19917__$1,(2),inst_19909);
} else {
if((state_val_19918 === (2))){
var inst_19902 = (state_19917[(7)]);
var inst_19911 = (state_19917[(2)]);
var inst_19912 = [new cljs.core.Keyword(null,"height","height",1025178622)];
var inst_19913 = ["auto"];
var inst_19914 = cljs.core.PersistentHashMap.fromArrays(inst_19912,inst_19913);
var inst_19915 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_19902,inst_19914);
var state_19917__$1 = (function (){var statearr_19920 = state_19917;
(statearr_19920[(10)] = inst_19911);

return statearr_19920;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19917__$1,inst_19915);
} else {
return null;
}
}
});})(c__14660__auto__))
;
return ((function (switch__14595__auto__,c__14660__auto__){
return (function() {
var figwheel$client$heads_up$display_heads_up_$_state_machine__14596__auto__ = null;
var figwheel$client$heads_up$display_heads_up_$_state_machine__14596__auto____0 = (function (){
var statearr_19924 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_19924[(0)] = figwheel$client$heads_up$display_heads_up_$_state_machine__14596__auto__);

(statearr_19924[(1)] = (1));

return statearr_19924;
});
var figwheel$client$heads_up$display_heads_up_$_state_machine__14596__auto____1 = (function (state_19917){
while(true){
var ret_value__14597__auto__ = (function (){try{while(true){
var result__14598__auto__ = switch__14595__auto__.call(null,state_19917);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14598__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14598__auto__;
}
break;
}
}catch (e19925){if((e19925 instanceof Object)){
var ex__14599__auto__ = e19925;
var statearr_19926_19928 = state_19917;
(statearr_19926_19928[(5)] = ex__14599__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19917);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19925;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14597__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19929 = state_19917;
state_19917 = G__19929;
continue;
} else {
return ret_value__14597__auto__;
}
break;
}
});
figwheel$client$heads_up$display_heads_up_$_state_machine__14596__auto__ = function(state_19917){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$display_heads_up_$_state_machine__14596__auto____0.call(this);
case 1:
return figwheel$client$heads_up$display_heads_up_$_state_machine__14596__auto____1.call(this,state_19917);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$display_heads_up_$_state_machine__14596__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$display_heads_up_$_state_machine__14596__auto____0;
figwheel$client$heads_up$display_heads_up_$_state_machine__14596__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$display_heads_up_$_state_machine__14596__auto____1;
return figwheel$client$heads_up$display_heads_up_$_state_machine__14596__auto__;
})()
;})(switch__14595__auto__,c__14660__auto__))
})();
var state__14662__auto__ = (function (){var statearr_19927 = f__14661__auto__.call(null);
(statearr_19927[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14660__auto__);

return statearr_19927;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14662__auto__);
});})(c__14660__auto__))
);

return c__14660__auto__;
});
figwheel.client.heads_up.heading = (function figwheel$client$heads_up$heading(s){
return [cljs.core.str("<div style=\""),cljs.core.str("font-size: 26px;"),cljs.core.str("line-height: 26px;"),cljs.core.str("margin-bottom: 2px;"),cljs.core.str("padding-top: 1px;"),cljs.core.str("\">"),cljs.core.str(s),cljs.core.str("</div>")].join('');
});
figwheel.client.heads_up.file_and_line_number = (function figwheel$client$heads_up$file_and_line_number(msg){
if(cljs.core.truth_(cljs.core.re_matches.call(null,/.*at\sline.*/,msg))){
return cljs.core.take.call(null,(2),cljs.core.reverse.call(null,clojure.string.split.call(null,msg," ")));
} else {
return null;
}
});
figwheel.client.heads_up.file_selector_div = (function figwheel$client$heads_up$file_selector_div(file_name,line_number,msg){
return [cljs.core.str("<div data-figwheel-event=\"file-selected\" data-file-name=\""),cljs.core.str(file_name),cljs.core.str("\" data-file-line=\""),cljs.core.str(line_number),cljs.core.str("\">"),cljs.core.str(msg),cljs.core.str("</div>")].join('');
});
figwheel.client.heads_up.format_line = (function figwheel$client$heads_up$format_line(msg){
var msg__$1 = goog.string.htmlEscape(msg);
var temp__4423__auto__ = figwheel.client.heads_up.file_and_line_number.call(null,msg__$1);
if(cljs.core.truth_(temp__4423__auto__)){
var vec__19931 = temp__4423__auto__;
var f = cljs.core.nth.call(null,vec__19931,(0),null);
var ln = cljs.core.nth.call(null,vec__19931,(1),null);
return figwheel.client.heads_up.file_selector_div.call(null,f,ln,msg__$1);
} else {
return [cljs.core.str("<div>"),cljs.core.str(msg__$1),cljs.core.str("</div>")].join('');
}
});
figwheel.client.heads_up.display_error = (function figwheel$client$heads_up$display_error(formatted_messages,cause){
var vec__19934 = (cljs.core.truth_(cause)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause),new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause),new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause)], null):cljs.core.first.call(null,cljs.core.keep.call(null,figwheel.client.heads_up.file_and_line_number,formatted_messages)));
var file_name = cljs.core.nth.call(null,vec__19934,(0),null);
var file_line = cljs.core.nth.call(null,vec__19934,(1),null);
var file_column = cljs.core.nth.call(null,vec__19934,(2),null);
var msg = cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,((function (vec__19934,file_name,file_line,file_column){
return (function (p1__19932_SHARP_){
return [cljs.core.str("<div>"),cljs.core.str(goog.string.htmlEscape(p1__19932_SHARP_)),cljs.core.str("</div>")].join('');
});})(vec__19934,file_name,file_line,file_column))
,formatted_messages));
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 161, 161, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link.call(null)),cljs.core.str(figwheel.client.heads_up.heading.call(null,"Compile Error")),cljs.core.str(figwheel.client.heads_up.file_selector_div.call(null,file_name,(function (){var or__11580__auto__ = file_line;
if(cljs.core.truth_(or__11580__auto__)){
return or__11580__auto__;
} else {
var and__11568__auto__ = cause;
if(cljs.core.truth_(and__11568__auto__)){
return new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause);
} else {
return and__11568__auto__;
}
}
})(),[cljs.core.str(msg),cljs.core.str((cljs.core.truth_(cause)?[cljs.core.str("Error on file "),cljs.core.str(goog.string.htmlEscape(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause))),cljs.core.str(", line "),cljs.core.str(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", column "),cljs.core.str(new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause))].join(''):""))].join('')))].join(''));
});
figwheel.client.heads_up.display_system_warning = (function figwheel$client$heads_up$display_system_warning(header,msg){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 220, 110, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link.call(null)),cljs.core.str(figwheel.client.heads_up.heading.call(null,header)),cljs.core.str(figwheel.client.heads_up.format_line.call(null,msg))].join(''));
});
figwheel.client.heads_up.display_warning = (function figwheel$client$heads_up$display_warning(msg){
return figwheel.client.heads_up.display_system_warning.call(null,"Compile Warning",msg);
});
figwheel.client.heads_up.append_message = (function figwheel$client$heads_up$append_message(message){
var map__19937 = figwheel.client.heads_up.ensure_container.call(null);
var map__19937__$1 = ((((!((map__19937 == null)))?((((map__19937.cljs$lang$protocol_mask$partition0$ & (64))) || (map__19937.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19937):map__19937);
var content_area_el = cljs.core.get.call(null,map__19937__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
var el = document.createElement("div");
el.innerHTML = figwheel.client.heads_up.format_line.call(null,message);

return content_area_el.appendChild(el);
});
figwheel.client.heads_up.clear = (function figwheel$client$heads_up$clear(){
var c__14660__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__14660__auto__){
return (function (){
var f__14661__auto__ = (function (){var switch__14595__auto__ = ((function (c__14660__auto__){
return (function (state_19985){
var state_val_19986 = (state_19985[(1)]);
if((state_val_19986 === (1))){
var inst_19968 = (state_19985[(7)]);
var inst_19968__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_19969 = [new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_19970 = ["0.0"];
var inst_19971 = cljs.core.PersistentHashMap.fromArrays(inst_19969,inst_19970);
var inst_19972 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_19968__$1,inst_19971);
var inst_19973 = cljs.core.async.timeout.call(null,(300));
var state_19985__$1 = (function (){var statearr_19987 = state_19985;
(statearr_19987[(8)] = inst_19972);

(statearr_19987[(7)] = inst_19968__$1);

return statearr_19987;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19985__$1,(2),inst_19973);
} else {
if((state_val_19986 === (2))){
var inst_19968 = (state_19985[(7)]);
var inst_19975 = (state_19985[(2)]);
var inst_19976 = [new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491)];
var inst_19977 = ["auto","0px","0px","0px 10px 0px 70px","0px","transparent"];
var inst_19978 = cljs.core.PersistentHashMap.fromArrays(inst_19976,inst_19977);
var inst_19979 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_19968,inst_19978);
var inst_19980 = cljs.core.async.timeout.call(null,(200));
var state_19985__$1 = (function (){var statearr_19988 = state_19985;
(statearr_19988[(9)] = inst_19979);

(statearr_19988[(10)] = inst_19975);

return statearr_19988;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19985__$1,(3),inst_19980);
} else {
if((state_val_19986 === (3))){
var inst_19968 = (state_19985[(7)]);
var inst_19982 = (state_19985[(2)]);
var inst_19983 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_19968,"");
var state_19985__$1 = (function (){var statearr_19989 = state_19985;
(statearr_19989[(11)] = inst_19982);

return statearr_19989;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19985__$1,inst_19983);
} else {
return null;
}
}
}
});})(c__14660__auto__))
;
return ((function (switch__14595__auto__,c__14660__auto__){
return (function() {
var figwheel$client$heads_up$clear_$_state_machine__14596__auto__ = null;
var figwheel$client$heads_up$clear_$_state_machine__14596__auto____0 = (function (){
var statearr_19993 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19993[(0)] = figwheel$client$heads_up$clear_$_state_machine__14596__auto__);

(statearr_19993[(1)] = (1));

return statearr_19993;
});
var figwheel$client$heads_up$clear_$_state_machine__14596__auto____1 = (function (state_19985){
while(true){
var ret_value__14597__auto__ = (function (){try{while(true){
var result__14598__auto__ = switch__14595__auto__.call(null,state_19985);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14598__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14598__auto__;
}
break;
}
}catch (e19994){if((e19994 instanceof Object)){
var ex__14599__auto__ = e19994;
var statearr_19995_19997 = state_19985;
(statearr_19995_19997[(5)] = ex__14599__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19985);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19994;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14597__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19998 = state_19985;
state_19985 = G__19998;
continue;
} else {
return ret_value__14597__auto__;
}
break;
}
});
figwheel$client$heads_up$clear_$_state_machine__14596__auto__ = function(state_19985){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$clear_$_state_machine__14596__auto____0.call(this);
case 1:
return figwheel$client$heads_up$clear_$_state_machine__14596__auto____1.call(this,state_19985);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$clear_$_state_machine__14596__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$clear_$_state_machine__14596__auto____0;
figwheel$client$heads_up$clear_$_state_machine__14596__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$clear_$_state_machine__14596__auto____1;
return figwheel$client$heads_up$clear_$_state_machine__14596__auto__;
})()
;})(switch__14595__auto__,c__14660__auto__))
})();
var state__14662__auto__ = (function (){var statearr_19996 = f__14661__auto__.call(null);
(statearr_19996[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14660__auto__);

return statearr_19996;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14662__auto__);
});})(c__14660__auto__))
);

return c__14660__auto__;
});
figwheel.client.heads_up.display_loaded_start = (function figwheel$client$heads_up$display_loaded_start(){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(211,234,172,1.0)",new cljs.core.Keyword(null,"width","width",-384071477),"68px",new cljs.core.Keyword(null,"height","height",1025178622),"68px",new cljs.core.Keyword(null,"paddingLeft","paddingLeft",262720813),"0px",new cljs.core.Keyword(null,"paddingRight","paddingRight",-1642313463),"0px",new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),"35px"], null),"");
});
figwheel.client.heads_up.flash_loaded = (function figwheel$client$heads_up$flash_loaded(){
var c__14660__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__14660__auto__){
return (function (){
var f__14661__auto__ = (function (){var switch__14595__auto__ = ((function (c__14660__auto__){
return (function (state_20030){
var state_val_20031 = (state_20030[(1)]);
if((state_val_20031 === (1))){
var inst_20020 = figwheel.client.heads_up.display_loaded_start.call(null);
var state_20030__$1 = state_20030;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20030__$1,(2),inst_20020);
} else {
if((state_val_20031 === (2))){
var inst_20022 = (state_20030[(2)]);
var inst_20023 = cljs.core.async.timeout.call(null,(400));
var state_20030__$1 = (function (){var statearr_20032 = state_20030;
(statearr_20032[(7)] = inst_20022);

return statearr_20032;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20030__$1,(3),inst_20023);
} else {
if((state_val_20031 === (3))){
var inst_20025 = (state_20030[(2)]);
var inst_20026 = figwheel.client.heads_up.clear.call(null);
var state_20030__$1 = (function (){var statearr_20033 = state_20030;
(statearr_20033[(8)] = inst_20025);

return statearr_20033;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20030__$1,(4),inst_20026);
} else {
if((state_val_20031 === (4))){
var inst_20028 = (state_20030[(2)]);
var state_20030__$1 = state_20030;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20030__$1,inst_20028);
} else {
return null;
}
}
}
}
});})(c__14660__auto__))
;
return ((function (switch__14595__auto__,c__14660__auto__){
return (function() {
var figwheel$client$heads_up$flash_loaded_$_state_machine__14596__auto__ = null;
var figwheel$client$heads_up$flash_loaded_$_state_machine__14596__auto____0 = (function (){
var statearr_20037 = [null,null,null,null,null,null,null,null,null];
(statearr_20037[(0)] = figwheel$client$heads_up$flash_loaded_$_state_machine__14596__auto__);

(statearr_20037[(1)] = (1));

return statearr_20037;
});
var figwheel$client$heads_up$flash_loaded_$_state_machine__14596__auto____1 = (function (state_20030){
while(true){
var ret_value__14597__auto__ = (function (){try{while(true){
var result__14598__auto__ = switch__14595__auto__.call(null,state_20030);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14598__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14598__auto__;
}
break;
}
}catch (e20038){if((e20038 instanceof Object)){
var ex__14599__auto__ = e20038;
var statearr_20039_20041 = state_20030;
(statearr_20039_20041[(5)] = ex__14599__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20030);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20038;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14597__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20042 = state_20030;
state_20030 = G__20042;
continue;
} else {
return ret_value__14597__auto__;
}
break;
}
});
figwheel$client$heads_up$flash_loaded_$_state_machine__14596__auto__ = function(state_20030){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$flash_loaded_$_state_machine__14596__auto____0.call(this);
case 1:
return figwheel$client$heads_up$flash_loaded_$_state_machine__14596__auto____1.call(this,state_20030);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$flash_loaded_$_state_machine__14596__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$flash_loaded_$_state_machine__14596__auto____0;
figwheel$client$heads_up$flash_loaded_$_state_machine__14596__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$flash_loaded_$_state_machine__14596__auto____1;
return figwheel$client$heads_up$flash_loaded_$_state_machine__14596__auto__;
})()
;})(switch__14595__auto__,c__14660__auto__))
})();
var state__14662__auto__ = (function (){var statearr_20040 = f__14661__auto__.call(null);
(statearr_20040[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14660__auto__);

return statearr_20040;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14662__auto__);
});})(c__14660__auto__))
);

return c__14660__auto__;
});
figwheel.client.heads_up.cljs_logo_svg = "<?xml version='1.0' encoding='utf-8'?>\n<!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'>\n<svg width='49px' height='49px' style='position:absolute; top:9px; left: 10px;' version='1.1'\n  xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px'\n  viewBox='0 0 428 428' enable-background='new 0 0 428 428' xml:space='preserve'>\n<circle fill='#fff' cx='213' cy='214' r='213' />\n<g>\n<path fill='#96CA4B' d='M122,266.6c-12.7,0-22.3-3.7-28.9-11.1c-6.6-7.4-9.9-18-9.9-31.8c0-14.1,3.4-24.9,10.3-32.5\n  s16.8-11.4,29.9-11.4c8.8,0,16.8,1.6,23.8,4.9l-5.4,14.3c-7.5-2.9-13.7-4.4-18.6-4.4c-14.5,0-21.7,9.6-21.7,28.8\n  c0,9.4,1.8,16.4,5.4,21.2c3.6,4.7,8.9,7.1,15.9,7.1c7.9,0,15.4-2,22.5-5.9v15.5c-3.2,1.9-6.6,3.2-10.2,4\n  C131.5,266.2,127.1,266.6,122,266.6z'/>\n<path fill='#96CA4B' d='M194.4,265.1h-17.8V147.3h17.8V265.1z'/>\n<path fill='#5F7FBF' d='M222.9,302.3c-5.3,0-9.8-0.6-13.3-1.9v-14.1c3.4,0.9,6.9,1.4,10.5,1.4c7.6,0,11.4-4.3,11.4-12.9v-93.5h17.8\n  v94.7c0,8.6-2.3,15.2-6.8,19.6C237.9,300.1,231.4,302.3,222.9,302.3z M230.4,159.2c0-3.2,0.9-5.6,2.6-7.3c1.7-1.7,4.2-2.6,7.5-2.6\n  c3.1,0,5.6,0.9,7.3,2.6c1.7,1.7,2.6,4.2,2.6,7.3c0,3-0.9,5.4-2.6,7.2c-1.7,1.7-4.2,2.6-7.3,2.6c-3.2,0-5.7-0.9-7.5-2.6\n  C231.2,164.6,230.4,162.2,230.4,159.2z'/>\n<path fill='#5F7FBF' d='M342.5,241.3c0,8.2-3,14.4-8.9,18.8c-6,4.4-14.5,6.5-25.6,6.5c-11.2,0-20.1-1.7-26.9-5.1v-15.4\n  c9.8,4.5,19,6.8,27.5,6.8c10.9,0,16.4-3.3,16.4-9.9c0-2.1-0.6-3.9-1.8-5.3c-1.2-1.4-3.2-2.9-6-4.4c-2.8-1.5-6.6-3.2-11.6-5.1\n  c-9.6-3.7-16.2-7.5-19.6-11.2c-3.4-3.7-5.1-8.6-5.1-14.5c0-7.2,2.9-12.7,8.7-16.7c5.8-4,13.6-5.9,23.6-5.9c9.8,0,19.1,2,27.9,6\n  l-5.8,13.4c-9-3.7-16.6-5.6-22.8-5.6c-9.4,0-14.1,2.7-14.1,8c0,2.6,1.2,4.8,3.7,6.7c2.4,1.8,7.8,4.3,16,7.5\n  c6.9,2.7,11.9,5.1,15.1,7.3c3.1,2.2,5.4,4.8,7,7.7C341.7,233.7,342.5,237.2,342.5,241.3z'/>\n</g>\n<path fill='#96CA4B' stroke='#96CA4B' stroke-width='6' stroke-miterlimit='10' d='M197,392.7c-91.2-8.1-163-85-163-178.3\n  S105.8,44.3,197,36.2V16.1c-102.3,8.2-183,94-183,198.4s80.7,190.2,183,198.4V392.7z'/>\n<path fill='#5F7FBF' stroke='#5F7FBF' stroke-width='6' stroke-miterlimit='10' d='M229,16.1v20.1c91.2,8.1,163,85,163,178.3\n  s-71.8,170.2-163,178.3v20.1c102.3-8.2,183-94,183-198.4S331.3,24.3,229,16.1z'/>\n</svg>";

//# sourceMappingURL=heads_up.js.map