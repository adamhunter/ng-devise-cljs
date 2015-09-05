// Compiled by ClojureScript 1.7.122 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('goog.Uri');
goog.require('goog.net.jsloader');
goog.require('cljs.core.async');
goog.require('goog.object');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
figwheel.client.file_reloading.queued_file_reload;
if(typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined'){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__11580__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__11580__auto__){
return or__11580__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return (goog.dependencies_.nameToPath[ns]);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return (goog.dependencies_.written[figwheel.client.file_reloading.name__GT_path.call(null,ns)]);
});
figwheel.client.file_reloading.fix_node_request_url = (function figwheel$client$file_reloading$fix_node_request_url(url){

if(cljs.core.truth_(goog.string.startsWith(url,"../"))){
return clojure.string.replace.call(null,url,"../","");
} else {
return [cljs.core.str("goog/"),cljs.core.str(url)].join('');
}
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__11580__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, ["svgpan.SvgPan",null,"far.out",null,"testDep.bar",null,"someprotopackage.TestPackageTypes",null,"goog",null,"an.existing.path",null,"cljs.core",null,"ns",null,"dup.base",null], null), null).call(null,name);
if(cljs.core.truth_(or__11580__auto__)){
return or__11580__auto__;
} else {
return cljs.core.some.call(null,cljs.core.partial.call(null,goog.string.startsWith,name),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["goog.","cljs.","clojure.","fake.","proto2."], null));
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__20111_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__20111_SHARP_));
}),goog.object.getKeys((goog.dependencies_.requires[figwheel.client.file_reloading.name__GT_path.call(null,ns)]))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([name], true));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([parent_ns], true));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__20116 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__20117 = null;
var count__20118 = (0);
var i__20119 = (0);
while(true){
if((i__20119 < count__20118)){
var n = cljs.core._nth.call(null,chunk__20117,i__20119);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__20120 = seq__20116;
var G__20121 = chunk__20117;
var G__20122 = count__20118;
var G__20123 = (i__20119 + (1));
seq__20116 = G__20120;
chunk__20117 = G__20121;
count__20118 = G__20122;
i__20119 = G__20123;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__20116);
if(temp__4425__auto__){
var seq__20116__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20116__$1)){
var c__12383__auto__ = cljs.core.chunk_first.call(null,seq__20116__$1);
var G__20124 = cljs.core.chunk_rest.call(null,seq__20116__$1);
var G__20125 = c__12383__auto__;
var G__20126 = cljs.core.count.call(null,c__12383__auto__);
var G__20127 = (0);
seq__20116 = G__20124;
chunk__20117 = G__20125;
count__20118 = G__20126;
i__20119 = G__20127;
continue;
} else {
var n = cljs.core.first.call(null,seq__20116__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__20128 = cljs.core.next.call(null,seq__20116__$1);
var G__20129 = null;
var G__20130 = (0);
var G__20131 = (0);
seq__20116 = G__20128;
chunk__20117 = G__20129;
count__20118 = G__20130;
i__20119 = G__20131;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__20170_20177 = cljs.core.seq.call(null,deps);
var chunk__20171_20178 = null;
var count__20172_20179 = (0);
var i__20173_20180 = (0);
while(true){
if((i__20173_20180 < count__20172_20179)){
var dep_20181 = cljs.core._nth.call(null,chunk__20171_20178,i__20173_20180);
topo_sort_helper_STAR_.call(null,dep_20181,(depth + (1)),state);

var G__20182 = seq__20170_20177;
var G__20183 = chunk__20171_20178;
var G__20184 = count__20172_20179;
var G__20185 = (i__20173_20180 + (1));
seq__20170_20177 = G__20182;
chunk__20171_20178 = G__20183;
count__20172_20179 = G__20184;
i__20173_20180 = G__20185;
continue;
} else {
var temp__4425__auto___20186 = cljs.core.seq.call(null,seq__20170_20177);
if(temp__4425__auto___20186){
var seq__20170_20187__$1 = temp__4425__auto___20186;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20170_20187__$1)){
var c__12383__auto___20188 = cljs.core.chunk_first.call(null,seq__20170_20187__$1);
var G__20189 = cljs.core.chunk_rest.call(null,seq__20170_20187__$1);
var G__20190 = c__12383__auto___20188;
var G__20191 = cljs.core.count.call(null,c__12383__auto___20188);
var G__20192 = (0);
seq__20170_20177 = G__20189;
chunk__20171_20178 = G__20190;
count__20172_20179 = G__20191;
i__20173_20180 = G__20192;
continue;
} else {
var dep_20193 = cljs.core.first.call(null,seq__20170_20187__$1);
topo_sort_helper_STAR_.call(null,dep_20193,(depth + (1)),state);

var G__20194 = cljs.core.next.call(null,seq__20170_20187__$1);
var G__20195 = null;
var G__20196 = (0);
var G__20197 = (0);
seq__20170_20177 = G__20194;
chunk__20171_20178 = G__20195;
count__20172_20179 = G__20196;
i__20173_20180 = G__20197;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__20174){
var vec__20176 = p__20174;
var x = cljs.core.nth.call(null,vec__20176,(0),null);
var xs = cljs.core.nthnext.call(null,vec__20176,(1));
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__20176,x,xs,get_deps__$1){
return (function (p1__20132_SHARP_){
return clojure.set.difference.call(null,p1__20132_SHARP_,x);
});})(vec__20176,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str(goog.basePath),cljs.core.str(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str(goog.basePath),cljs.core.str(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__20210 = cljs.core.seq.call(null,provides);
var chunk__20211 = null;
var count__20212 = (0);
var i__20213 = (0);
while(true){
if((i__20213 < count__20212)){
var prov = cljs.core._nth.call(null,chunk__20211,i__20213);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__20214_20222 = cljs.core.seq.call(null,requires);
var chunk__20215_20223 = null;
var count__20216_20224 = (0);
var i__20217_20225 = (0);
while(true){
if((i__20217_20225 < count__20216_20224)){
var req_20226 = cljs.core._nth.call(null,chunk__20215_20223,i__20217_20225);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_20226,prov);

var G__20227 = seq__20214_20222;
var G__20228 = chunk__20215_20223;
var G__20229 = count__20216_20224;
var G__20230 = (i__20217_20225 + (1));
seq__20214_20222 = G__20227;
chunk__20215_20223 = G__20228;
count__20216_20224 = G__20229;
i__20217_20225 = G__20230;
continue;
} else {
var temp__4425__auto___20231 = cljs.core.seq.call(null,seq__20214_20222);
if(temp__4425__auto___20231){
var seq__20214_20232__$1 = temp__4425__auto___20231;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20214_20232__$1)){
var c__12383__auto___20233 = cljs.core.chunk_first.call(null,seq__20214_20232__$1);
var G__20234 = cljs.core.chunk_rest.call(null,seq__20214_20232__$1);
var G__20235 = c__12383__auto___20233;
var G__20236 = cljs.core.count.call(null,c__12383__auto___20233);
var G__20237 = (0);
seq__20214_20222 = G__20234;
chunk__20215_20223 = G__20235;
count__20216_20224 = G__20236;
i__20217_20225 = G__20237;
continue;
} else {
var req_20238 = cljs.core.first.call(null,seq__20214_20232__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_20238,prov);

var G__20239 = cljs.core.next.call(null,seq__20214_20232__$1);
var G__20240 = null;
var G__20241 = (0);
var G__20242 = (0);
seq__20214_20222 = G__20239;
chunk__20215_20223 = G__20240;
count__20216_20224 = G__20241;
i__20217_20225 = G__20242;
continue;
}
} else {
}
}
break;
}

var G__20243 = seq__20210;
var G__20244 = chunk__20211;
var G__20245 = count__20212;
var G__20246 = (i__20213 + (1));
seq__20210 = G__20243;
chunk__20211 = G__20244;
count__20212 = G__20245;
i__20213 = G__20246;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__20210);
if(temp__4425__auto__){
var seq__20210__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20210__$1)){
var c__12383__auto__ = cljs.core.chunk_first.call(null,seq__20210__$1);
var G__20247 = cljs.core.chunk_rest.call(null,seq__20210__$1);
var G__20248 = c__12383__auto__;
var G__20249 = cljs.core.count.call(null,c__12383__auto__);
var G__20250 = (0);
seq__20210 = G__20247;
chunk__20211 = G__20248;
count__20212 = G__20249;
i__20213 = G__20250;
continue;
} else {
var prov = cljs.core.first.call(null,seq__20210__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__20218_20251 = cljs.core.seq.call(null,requires);
var chunk__20219_20252 = null;
var count__20220_20253 = (0);
var i__20221_20254 = (0);
while(true){
if((i__20221_20254 < count__20220_20253)){
var req_20255 = cljs.core._nth.call(null,chunk__20219_20252,i__20221_20254);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_20255,prov);

var G__20256 = seq__20218_20251;
var G__20257 = chunk__20219_20252;
var G__20258 = count__20220_20253;
var G__20259 = (i__20221_20254 + (1));
seq__20218_20251 = G__20256;
chunk__20219_20252 = G__20257;
count__20220_20253 = G__20258;
i__20221_20254 = G__20259;
continue;
} else {
var temp__4425__auto___20260__$1 = cljs.core.seq.call(null,seq__20218_20251);
if(temp__4425__auto___20260__$1){
var seq__20218_20261__$1 = temp__4425__auto___20260__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20218_20261__$1)){
var c__12383__auto___20262 = cljs.core.chunk_first.call(null,seq__20218_20261__$1);
var G__20263 = cljs.core.chunk_rest.call(null,seq__20218_20261__$1);
var G__20264 = c__12383__auto___20262;
var G__20265 = cljs.core.count.call(null,c__12383__auto___20262);
var G__20266 = (0);
seq__20218_20251 = G__20263;
chunk__20219_20252 = G__20264;
count__20220_20253 = G__20265;
i__20221_20254 = G__20266;
continue;
} else {
var req_20267 = cljs.core.first.call(null,seq__20218_20261__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_20267,prov);

var G__20268 = cljs.core.next.call(null,seq__20218_20261__$1);
var G__20269 = null;
var G__20270 = (0);
var G__20271 = (0);
seq__20218_20251 = G__20268;
chunk__20219_20252 = G__20269;
count__20220_20253 = G__20270;
i__20221_20254 = G__20271;
continue;
}
} else {
}
}
break;
}

var G__20272 = cljs.core.next.call(null,seq__20210__$1);
var G__20273 = null;
var G__20274 = (0);
var G__20275 = (0);
seq__20210 = G__20272;
chunk__20211 = G__20273;
count__20212 = G__20274;
i__20213 = G__20275;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel$client$file_reloading$figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__20280_20284 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__20281_20285 = null;
var count__20282_20286 = (0);
var i__20283_20287 = (0);
while(true){
if((i__20283_20287 < count__20282_20286)){
var ns_20288 = cljs.core._nth.call(null,chunk__20281_20285,i__20283_20287);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_20288);

var G__20289 = seq__20280_20284;
var G__20290 = chunk__20281_20285;
var G__20291 = count__20282_20286;
var G__20292 = (i__20283_20287 + (1));
seq__20280_20284 = G__20289;
chunk__20281_20285 = G__20290;
count__20282_20286 = G__20291;
i__20283_20287 = G__20292;
continue;
} else {
var temp__4425__auto___20293 = cljs.core.seq.call(null,seq__20280_20284);
if(temp__4425__auto___20293){
var seq__20280_20294__$1 = temp__4425__auto___20293;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20280_20294__$1)){
var c__12383__auto___20295 = cljs.core.chunk_first.call(null,seq__20280_20294__$1);
var G__20296 = cljs.core.chunk_rest.call(null,seq__20280_20294__$1);
var G__20297 = c__12383__auto___20295;
var G__20298 = cljs.core.count.call(null,c__12383__auto___20295);
var G__20299 = (0);
seq__20280_20284 = G__20296;
chunk__20281_20285 = G__20297;
count__20282_20286 = G__20298;
i__20283_20287 = G__20299;
continue;
} else {
var ns_20300 = cljs.core.first.call(null,seq__20280_20294__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_20300);

var G__20301 = cljs.core.next.call(null,seq__20280_20294__$1);
var G__20302 = null;
var G__20303 = (0);
var G__20304 = (0);
seq__20280_20284 = G__20301;
chunk__20281_20285 = G__20302;
count__20282_20286 = G__20303;
i__20283_20287 = G__20304;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__11580__auto__ = goog.require__;
if(cljs.core.truth_(or__11580__auto__)){
return or__11580__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__20305__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__20305 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__20306__i = 0, G__20306__a = new Array(arguments.length -  0);
while (G__20306__i < G__20306__a.length) {G__20306__a[G__20306__i] = arguments[G__20306__i + 0]; ++G__20306__i;}
  args = new cljs.core.IndexedSeq(G__20306__a,0);
} 
return G__20305__delegate.call(this,args);};
G__20305.cljs$lang$maxFixedArity = 0;
G__20305.cljs$lang$applyTo = (function (arglist__20307){
var args = cljs.core.seq(arglist__20307);
return G__20305__delegate(args);
});
G__20305.cljs$core$IFn$_invoke$arity$variadic = G__20305__delegate;
return G__20305;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if(typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined'){
return null;
} else {
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
;
}
});
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__20308 = cljs.core._EQ_;
var expr__20309 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__20308.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__20309))){
return ((function (pred__20308,expr__20309){
return (function (request_url,callback){

var root = clojure.string.join.call(null,"/",cljs.core.reverse.call(null,cljs.core.drop.call(null,(2),cljs.core.reverse.call(null,clojure.string.split.call(null,__dirname,"/")))));
var path = [cljs.core.str(root),cljs.core.str("/"),cljs.core.str(figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))].join('');
(require.cache[path] = null);

return callback.call(null,(function (){try{return require(path);
}catch (e20311){if((e20311 instanceof Error)){
var e = e20311;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e20311;

}
}})());
});
;})(pred__20308,expr__20309))
} else {
if(cljs.core.truth_(pred__20308.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__20309))){
return ((function (pred__20308,expr__20309){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),{"cleanupWhenDone": true});
deferred.addCallback(((function (deferred,pred__20308,expr__20309){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__20308,expr__20309))
);

return deferred.addErrback(((function (deferred,pred__20308,expr__20309){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__20308,expr__20309))
);
});
;})(pred__20308,expr__20309))
} else {
return ((function (pred__20308,expr__20309){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__20308,expr__20309))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__20312,callback){
var map__20315 = p__20312;
var map__20315__$1 = ((((!((map__20315 == null)))?((((map__20315.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20315.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20315):map__20315);
var file_msg = map__20315__$1;
var request_url = cljs.core.get.call(null,map__20315__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__20315,map__20315__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__20315,map__20315__$1,file_msg,request_url))
);
});
if(typeof figwheel.client.file_reloading.reload_chan !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if(typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined'){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined'){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if(typeof figwheel.client.file_reloading.reloader_loop !== 'undefined'){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__14660__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__14660__auto__){
return (function (){
var f__14661__auto__ = (function (){var switch__14595__auto__ = ((function (c__14660__auto__){
return (function (state_20339){
var state_val_20340 = (state_20339[(1)]);
if((state_val_20340 === (7))){
var inst_20335 = (state_20339[(2)]);
var state_20339__$1 = state_20339;
var statearr_20341_20361 = state_20339__$1;
(statearr_20341_20361[(2)] = inst_20335);

(statearr_20341_20361[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20340 === (1))){
var state_20339__$1 = state_20339;
var statearr_20342_20362 = state_20339__$1;
(statearr_20342_20362[(2)] = null);

(statearr_20342_20362[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20340 === (4))){
var inst_20319 = (state_20339[(7)]);
var inst_20319__$1 = (state_20339[(2)]);
var state_20339__$1 = (function (){var statearr_20343 = state_20339;
(statearr_20343[(7)] = inst_20319__$1);

return statearr_20343;
})();
if(cljs.core.truth_(inst_20319__$1)){
var statearr_20344_20363 = state_20339__$1;
(statearr_20344_20363[(1)] = (5));

} else {
var statearr_20345_20364 = state_20339__$1;
(statearr_20345_20364[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20340 === (6))){
var state_20339__$1 = state_20339;
var statearr_20346_20365 = state_20339__$1;
(statearr_20346_20365[(2)] = null);

(statearr_20346_20365[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20340 === (3))){
var inst_20337 = (state_20339[(2)]);
var state_20339__$1 = state_20339;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20339__$1,inst_20337);
} else {
if((state_val_20340 === (2))){
var state_20339__$1 = state_20339;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20339__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_20340 === (11))){
var inst_20331 = (state_20339[(2)]);
var state_20339__$1 = (function (){var statearr_20347 = state_20339;
(statearr_20347[(8)] = inst_20331);

return statearr_20347;
})();
var statearr_20348_20366 = state_20339__$1;
(statearr_20348_20366[(2)] = null);

(statearr_20348_20366[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20340 === (9))){
var inst_20323 = (state_20339[(9)]);
var inst_20325 = (state_20339[(10)]);
var inst_20327 = inst_20325.call(null,inst_20323);
var state_20339__$1 = state_20339;
var statearr_20349_20367 = state_20339__$1;
(statearr_20349_20367[(2)] = inst_20327);

(statearr_20349_20367[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20340 === (5))){
var inst_20319 = (state_20339[(7)]);
var inst_20321 = figwheel.client.file_reloading.blocking_load.call(null,inst_20319);
var state_20339__$1 = state_20339;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20339__$1,(8),inst_20321);
} else {
if((state_val_20340 === (10))){
var inst_20323 = (state_20339[(9)]);
var inst_20329 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_20323);
var state_20339__$1 = state_20339;
var statearr_20350_20368 = state_20339__$1;
(statearr_20350_20368[(2)] = inst_20329);

(statearr_20350_20368[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20340 === (8))){
var inst_20319 = (state_20339[(7)]);
var inst_20325 = (state_20339[(10)]);
var inst_20323 = (state_20339[(2)]);
var inst_20324 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_20325__$1 = cljs.core.get.call(null,inst_20324,inst_20319);
var state_20339__$1 = (function (){var statearr_20351 = state_20339;
(statearr_20351[(9)] = inst_20323);

(statearr_20351[(10)] = inst_20325__$1);

return statearr_20351;
})();
if(cljs.core.truth_(inst_20325__$1)){
var statearr_20352_20369 = state_20339__$1;
(statearr_20352_20369[(1)] = (9));

} else {
var statearr_20353_20370 = state_20339__$1;
(statearr_20353_20370[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__14660__auto__))
;
return ((function (switch__14595__auto__,c__14660__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__14596__auto__ = null;
var figwheel$client$file_reloading$state_machine__14596__auto____0 = (function (){
var statearr_20357 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_20357[(0)] = figwheel$client$file_reloading$state_machine__14596__auto__);

(statearr_20357[(1)] = (1));

return statearr_20357;
});
var figwheel$client$file_reloading$state_machine__14596__auto____1 = (function (state_20339){
while(true){
var ret_value__14597__auto__ = (function (){try{while(true){
var result__14598__auto__ = switch__14595__auto__.call(null,state_20339);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14598__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14598__auto__;
}
break;
}
}catch (e20358){if((e20358 instanceof Object)){
var ex__14599__auto__ = e20358;
var statearr_20359_20371 = state_20339;
(statearr_20359_20371[(5)] = ex__14599__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20339);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20358;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14597__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20372 = state_20339;
state_20339 = G__20372;
continue;
} else {
return ret_value__14597__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__14596__auto__ = function(state_20339){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__14596__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__14596__auto____1.call(this,state_20339);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__14596__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__14596__auto____0;
figwheel$client$file_reloading$state_machine__14596__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__14596__auto____1;
return figwheel$client$file_reloading$state_machine__14596__auto__;
})()
;})(switch__14595__auto__,c__14660__auto__))
})();
var state__14662__auto__ = (function (){var statearr_20360 = f__14661__auto__.call(null);
(statearr_20360[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14660__auto__);

return statearr_20360;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14662__auto__);
});})(c__14660__auto__))
);

return c__14660__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__20373,callback){
var map__20376 = p__20373;
var map__20376__$1 = ((((!((map__20376 == null)))?((((map__20376.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20376.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20376):map__20376);
var file_msg = map__20376__$1;
var namespace = cljs.core.get.call(null,map__20376__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__20376,map__20376__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__20376,map__20376__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__20378){
var map__20381 = p__20378;
var map__20381__$1 = ((((!((map__20381 == null)))?((((map__20381.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20381.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20381):map__20381);
var file_msg = map__20381__$1;
var namespace = cljs.core.get.call(null,map__20381__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__11568__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas));
if(and__11568__auto__){
var or__11580__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__11580__auto__)){
return or__11580__auto__;
} else {
var or__11580__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__11580__auto____$1)){
return or__11580__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__11568__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__20383,callback){
var map__20386 = p__20383;
var map__20386__$1 = ((((!((map__20386 == null)))?((((map__20386.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20386.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20386):map__20386);
var file_msg = map__20386__$1;
var request_url = cljs.core.get.call(null,map__20386__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__20386__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Figwheel: Not trying to load file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__14660__auto___20474 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__14660__auto___20474,out){
return (function (){
var f__14661__auto__ = (function (){var switch__14595__auto__ = ((function (c__14660__auto___20474,out){
return (function (state_20456){
var state_val_20457 = (state_20456[(1)]);
if((state_val_20457 === (1))){
var inst_20434 = cljs.core.nth.call(null,files,(0),null);
var inst_20435 = cljs.core.nthnext.call(null,files,(1));
var inst_20436 = files;
var state_20456__$1 = (function (){var statearr_20458 = state_20456;
(statearr_20458[(7)] = inst_20436);

(statearr_20458[(8)] = inst_20434);

(statearr_20458[(9)] = inst_20435);

return statearr_20458;
})();
var statearr_20459_20475 = state_20456__$1;
(statearr_20459_20475[(2)] = null);

(statearr_20459_20475[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20457 === (2))){
var inst_20436 = (state_20456[(7)]);
var inst_20439 = (state_20456[(10)]);
var inst_20439__$1 = cljs.core.nth.call(null,inst_20436,(0),null);
var inst_20440 = cljs.core.nthnext.call(null,inst_20436,(1));
var inst_20441 = (inst_20439__$1 == null);
var inst_20442 = cljs.core.not.call(null,inst_20441);
var state_20456__$1 = (function (){var statearr_20460 = state_20456;
(statearr_20460[(11)] = inst_20440);

(statearr_20460[(10)] = inst_20439__$1);

return statearr_20460;
})();
if(inst_20442){
var statearr_20461_20476 = state_20456__$1;
(statearr_20461_20476[(1)] = (4));

} else {
var statearr_20462_20477 = state_20456__$1;
(statearr_20462_20477[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20457 === (3))){
var inst_20454 = (state_20456[(2)]);
var state_20456__$1 = state_20456;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20456__$1,inst_20454);
} else {
if((state_val_20457 === (4))){
var inst_20439 = (state_20456[(10)]);
var inst_20444 = figwheel.client.file_reloading.reload_js_file.call(null,inst_20439);
var state_20456__$1 = state_20456;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20456__$1,(7),inst_20444);
} else {
if((state_val_20457 === (5))){
var inst_20450 = cljs.core.async.close_BANG_.call(null,out);
var state_20456__$1 = state_20456;
var statearr_20463_20478 = state_20456__$1;
(statearr_20463_20478[(2)] = inst_20450);

(statearr_20463_20478[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20457 === (6))){
var inst_20452 = (state_20456[(2)]);
var state_20456__$1 = state_20456;
var statearr_20464_20479 = state_20456__$1;
(statearr_20464_20479[(2)] = inst_20452);

(statearr_20464_20479[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20457 === (7))){
var inst_20440 = (state_20456[(11)]);
var inst_20446 = (state_20456[(2)]);
var inst_20447 = cljs.core.async.put_BANG_.call(null,out,inst_20446);
var inst_20436 = inst_20440;
var state_20456__$1 = (function (){var statearr_20465 = state_20456;
(statearr_20465[(12)] = inst_20447);

(statearr_20465[(7)] = inst_20436);

return statearr_20465;
})();
var statearr_20466_20480 = state_20456__$1;
(statearr_20466_20480[(2)] = null);

(statearr_20466_20480[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(c__14660__auto___20474,out))
;
return ((function (switch__14595__auto__,c__14660__auto___20474,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__14596__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__14596__auto____0 = (function (){
var statearr_20470 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20470[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__14596__auto__);

(statearr_20470[(1)] = (1));

return statearr_20470;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__14596__auto____1 = (function (state_20456){
while(true){
var ret_value__14597__auto__ = (function (){try{while(true){
var result__14598__auto__ = switch__14595__auto__.call(null,state_20456);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14598__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14598__auto__;
}
break;
}
}catch (e20471){if((e20471 instanceof Object)){
var ex__14599__auto__ = e20471;
var statearr_20472_20481 = state_20456;
(statearr_20472_20481[(5)] = ex__14599__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20456);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20471;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14597__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20482 = state_20456;
state_20456 = G__20482;
continue;
} else {
return ret_value__14597__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__14596__auto__ = function(state_20456){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__14596__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__14596__auto____1.call(this,state_20456);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__14596__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__14596__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__14596__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__14596__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__14596__auto__;
})()
;})(switch__14595__auto__,c__14660__auto___20474,out))
})();
var state__14662__auto__ = (function (){var statearr_20473 = f__14661__auto__.call(null);
(statearr_20473[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14660__auto___20474);

return statearr_20473;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14662__auto__);
});})(c__14660__auto___20474,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__20483,opts){
var map__20487 = p__20483;
var map__20487__$1 = ((((!((map__20487 == null)))?((((map__20487.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20487.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20487):map__20487);
var eval_body__$1 = cljs.core.get.call(null,map__20487__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__20487__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__11568__auto__ = eval_body__$1;
if(cljs.core.truth_(and__11568__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__11568__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e20489){var e = e20489;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["figwheel.connect",null], null), null),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__4423__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__20490_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__20490_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__4423__auto__)){
var file_msg = temp__4423__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__20495){
var vec__20496 = p__20495;
var k = cljs.core.nth.call(null,vec__20496,(0),null);
var v = cljs.core.nth.call(null,vec__20496,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__20497){
var vec__20498 = p__20497;
var k = cljs.core.nth.call(null,vec__20498,(0),null);
var v = cljs.core.nth.call(null,vec__20498,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__20502,p__20503){
var map__20750 = p__20502;
var map__20750__$1 = ((((!((map__20750 == null)))?((((map__20750.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20750.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20750):map__20750);
var opts = map__20750__$1;
var before_jsload = cljs.core.get.call(null,map__20750__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__20750__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__20750__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__20751 = p__20503;
var map__20751__$1 = ((((!((map__20751 == null)))?((((map__20751.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20751.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20751):map__20751);
var msg = map__20751__$1;
var files = cljs.core.get.call(null,map__20751__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__20751__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__20751__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__14660__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__14660__auto__,map__20750,map__20750__$1,opts,before_jsload,on_jsload,reload_dependents,map__20751,map__20751__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__14661__auto__ = (function (){var switch__14595__auto__ = ((function (c__14660__auto__,map__20750,map__20750__$1,opts,before_jsload,on_jsload,reload_dependents,map__20751,map__20751__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_20904){
var state_val_20905 = (state_20904[(1)]);
if((state_val_20905 === (7))){
var inst_20766 = (state_20904[(7)]);
var inst_20765 = (state_20904[(8)]);
var inst_20767 = (state_20904[(9)]);
var inst_20768 = (state_20904[(10)]);
var inst_20773 = cljs.core._nth.call(null,inst_20766,inst_20768);
var inst_20774 = figwheel.client.file_reloading.eval_body.call(null,inst_20773,opts);
var inst_20775 = (inst_20768 + (1));
var tmp20906 = inst_20766;
var tmp20907 = inst_20765;
var tmp20908 = inst_20767;
var inst_20765__$1 = tmp20907;
var inst_20766__$1 = tmp20906;
var inst_20767__$1 = tmp20908;
var inst_20768__$1 = inst_20775;
var state_20904__$1 = (function (){var statearr_20909 = state_20904;
(statearr_20909[(7)] = inst_20766__$1);

(statearr_20909[(8)] = inst_20765__$1);

(statearr_20909[(9)] = inst_20767__$1);

(statearr_20909[(11)] = inst_20774);

(statearr_20909[(10)] = inst_20768__$1);

return statearr_20909;
})();
var statearr_20910_20996 = state_20904__$1;
(statearr_20910_20996[(2)] = null);

(statearr_20910_20996[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20905 === (20))){
var inst_20808 = (state_20904[(12)]);
var inst_20816 = figwheel.client.file_reloading.sort_files.call(null,inst_20808);
var state_20904__$1 = state_20904;
var statearr_20911_20997 = state_20904__$1;
(statearr_20911_20997[(2)] = inst_20816);

(statearr_20911_20997[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20905 === (27))){
var state_20904__$1 = state_20904;
var statearr_20912_20998 = state_20904__$1;
(statearr_20912_20998[(2)] = null);

(statearr_20912_20998[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20905 === (1))){
var inst_20757 = (state_20904[(13)]);
var inst_20754 = before_jsload.call(null,files);
var inst_20755 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_20756 = (function (){return ((function (inst_20757,inst_20754,inst_20755,state_val_20905,c__14660__auto__,map__20750,map__20750__$1,opts,before_jsload,on_jsload,reload_dependents,map__20751,map__20751__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__20499_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__20499_SHARP_);
});
;})(inst_20757,inst_20754,inst_20755,state_val_20905,c__14660__auto__,map__20750,map__20750__$1,opts,before_jsload,on_jsload,reload_dependents,map__20751,map__20751__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_20757__$1 = cljs.core.filter.call(null,inst_20756,files);
var inst_20758 = cljs.core.not_empty.call(null,inst_20757__$1);
var state_20904__$1 = (function (){var statearr_20913 = state_20904;
(statearr_20913[(14)] = inst_20754);

(statearr_20913[(13)] = inst_20757__$1);

(statearr_20913[(15)] = inst_20755);

return statearr_20913;
})();
if(cljs.core.truth_(inst_20758)){
var statearr_20914_20999 = state_20904__$1;
(statearr_20914_20999[(1)] = (2));

} else {
var statearr_20915_21000 = state_20904__$1;
(statearr_20915_21000[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20905 === (24))){
var state_20904__$1 = state_20904;
var statearr_20916_21001 = state_20904__$1;
(statearr_20916_21001[(2)] = null);

(statearr_20916_21001[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20905 === (39))){
var inst_20858 = (state_20904[(16)]);
var state_20904__$1 = state_20904;
var statearr_20917_21002 = state_20904__$1;
(statearr_20917_21002[(2)] = inst_20858);

(statearr_20917_21002[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20905 === (46))){
var inst_20899 = (state_20904[(2)]);
var state_20904__$1 = state_20904;
var statearr_20918_21003 = state_20904__$1;
(statearr_20918_21003[(2)] = inst_20899);

(statearr_20918_21003[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20905 === (4))){
var inst_20802 = (state_20904[(2)]);
var inst_20803 = cljs.core.List.EMPTY;
var inst_20804 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_20803);
var inst_20805 = (function (){return ((function (inst_20802,inst_20803,inst_20804,state_val_20905,c__14660__auto__,map__20750,map__20750__$1,opts,before_jsload,on_jsload,reload_dependents,map__20751,map__20751__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__20500_SHARP_){
var and__11568__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__20500_SHARP_);
if(cljs.core.truth_(and__11568__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__20500_SHARP_));
} else {
return and__11568__auto__;
}
});
;})(inst_20802,inst_20803,inst_20804,state_val_20905,c__14660__auto__,map__20750,map__20750__$1,opts,before_jsload,on_jsload,reload_dependents,map__20751,map__20751__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_20806 = cljs.core.filter.call(null,inst_20805,files);
var inst_20807 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_20808 = cljs.core.concat.call(null,inst_20806,inst_20807);
var state_20904__$1 = (function (){var statearr_20919 = state_20904;
(statearr_20919[(17)] = inst_20802);

(statearr_20919[(18)] = inst_20804);

(statearr_20919[(12)] = inst_20808);

return statearr_20919;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_20920_21004 = state_20904__$1;
(statearr_20920_21004[(1)] = (16));

} else {
var statearr_20921_21005 = state_20904__$1;
(statearr_20921_21005[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20905 === (15))){
var inst_20792 = (state_20904[(2)]);
var state_20904__$1 = state_20904;
var statearr_20922_21006 = state_20904__$1;
(statearr_20922_21006[(2)] = inst_20792);

(statearr_20922_21006[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20905 === (21))){
var inst_20818 = (state_20904[(19)]);
var inst_20818__$1 = (state_20904[(2)]);
var inst_20819 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_20818__$1);
var state_20904__$1 = (function (){var statearr_20923 = state_20904;
(statearr_20923[(19)] = inst_20818__$1);

return statearr_20923;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20904__$1,(22),inst_20819);
} else {
if((state_val_20905 === (31))){
var inst_20902 = (state_20904[(2)]);
var state_20904__$1 = state_20904;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20904__$1,inst_20902);
} else {
if((state_val_20905 === (32))){
var inst_20858 = (state_20904[(16)]);
var inst_20863 = inst_20858.cljs$lang$protocol_mask$partition0$;
var inst_20864 = (inst_20863 & (64));
var inst_20865 = inst_20858.cljs$core$ISeq$;
var inst_20866 = (inst_20864) || (inst_20865);
var state_20904__$1 = state_20904;
if(cljs.core.truth_(inst_20866)){
var statearr_20924_21007 = state_20904__$1;
(statearr_20924_21007[(1)] = (35));

} else {
var statearr_20925_21008 = state_20904__$1;
(statearr_20925_21008[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20905 === (40))){
var inst_20879 = (state_20904[(20)]);
var inst_20878 = (state_20904[(2)]);
var inst_20879__$1 = cljs.core.get.call(null,inst_20878,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_20880 = cljs.core.get.call(null,inst_20878,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_20881 = cljs.core.not_empty.call(null,inst_20879__$1);
var state_20904__$1 = (function (){var statearr_20926 = state_20904;
(statearr_20926[(21)] = inst_20880);

(statearr_20926[(20)] = inst_20879__$1);

return statearr_20926;
})();
if(cljs.core.truth_(inst_20881)){
var statearr_20927_21009 = state_20904__$1;
(statearr_20927_21009[(1)] = (41));

} else {
var statearr_20928_21010 = state_20904__$1;
(statearr_20928_21010[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20905 === (33))){
var state_20904__$1 = state_20904;
var statearr_20929_21011 = state_20904__$1;
(statearr_20929_21011[(2)] = false);

(statearr_20929_21011[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20905 === (13))){
var inst_20778 = (state_20904[(22)]);
var inst_20782 = cljs.core.chunk_first.call(null,inst_20778);
var inst_20783 = cljs.core.chunk_rest.call(null,inst_20778);
var inst_20784 = cljs.core.count.call(null,inst_20782);
var inst_20765 = inst_20783;
var inst_20766 = inst_20782;
var inst_20767 = inst_20784;
var inst_20768 = (0);
var state_20904__$1 = (function (){var statearr_20930 = state_20904;
(statearr_20930[(7)] = inst_20766);

(statearr_20930[(8)] = inst_20765);

(statearr_20930[(9)] = inst_20767);

(statearr_20930[(10)] = inst_20768);

return statearr_20930;
})();
var statearr_20931_21012 = state_20904__$1;
(statearr_20931_21012[(2)] = null);

(statearr_20931_21012[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20905 === (22))){
var inst_20822 = (state_20904[(23)]);
var inst_20818 = (state_20904[(19)]);
var inst_20826 = (state_20904[(24)]);
var inst_20821 = (state_20904[(25)]);
var inst_20821__$1 = (state_20904[(2)]);
var inst_20822__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_20821__$1);
var inst_20823 = (function (){var all_files = inst_20818;
var res_SINGLEQUOTE_ = inst_20821__$1;
var res = inst_20822__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_20822,inst_20818,inst_20826,inst_20821,inst_20821__$1,inst_20822__$1,state_val_20905,c__14660__auto__,map__20750,map__20750__$1,opts,before_jsload,on_jsload,reload_dependents,map__20751,map__20751__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__20501_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__20501_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_20822,inst_20818,inst_20826,inst_20821,inst_20821__$1,inst_20822__$1,state_val_20905,c__14660__auto__,map__20750,map__20750__$1,opts,before_jsload,on_jsload,reload_dependents,map__20751,map__20751__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_20824 = cljs.core.filter.call(null,inst_20823,inst_20821__$1);
var inst_20825 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_20826__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_20825);
var inst_20827 = cljs.core.not_empty.call(null,inst_20826__$1);
var state_20904__$1 = (function (){var statearr_20932 = state_20904;
(statearr_20932[(23)] = inst_20822__$1);

(statearr_20932[(26)] = inst_20824);

(statearr_20932[(24)] = inst_20826__$1);

(statearr_20932[(25)] = inst_20821__$1);

return statearr_20932;
})();
if(cljs.core.truth_(inst_20827)){
var statearr_20933_21013 = state_20904__$1;
(statearr_20933_21013[(1)] = (23));

} else {
var statearr_20934_21014 = state_20904__$1;
(statearr_20934_21014[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20905 === (36))){
var state_20904__$1 = state_20904;
var statearr_20935_21015 = state_20904__$1;
(statearr_20935_21015[(2)] = false);

(statearr_20935_21015[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20905 === (41))){
var inst_20879 = (state_20904[(20)]);
var inst_20883 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_20884 = cljs.core.map.call(null,inst_20883,inst_20879);
var inst_20885 = cljs.core.pr_str.call(null,inst_20884);
var inst_20886 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_20885)].join('');
var inst_20887 = figwheel.client.utils.log.call(null,inst_20886);
var state_20904__$1 = state_20904;
var statearr_20936_21016 = state_20904__$1;
(statearr_20936_21016[(2)] = inst_20887);

(statearr_20936_21016[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20905 === (43))){
var inst_20880 = (state_20904[(21)]);
var inst_20890 = (state_20904[(2)]);
var inst_20891 = cljs.core.not_empty.call(null,inst_20880);
var state_20904__$1 = (function (){var statearr_20937 = state_20904;
(statearr_20937[(27)] = inst_20890);

return statearr_20937;
})();
if(cljs.core.truth_(inst_20891)){
var statearr_20938_21017 = state_20904__$1;
(statearr_20938_21017[(1)] = (44));

} else {
var statearr_20939_21018 = state_20904__$1;
(statearr_20939_21018[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20905 === (29))){
var inst_20858 = (state_20904[(16)]);
var inst_20822 = (state_20904[(23)]);
var inst_20818 = (state_20904[(19)]);
var inst_20824 = (state_20904[(26)]);
var inst_20826 = (state_20904[(24)]);
var inst_20821 = (state_20904[(25)]);
var inst_20854 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_20857 = (function (){var all_files = inst_20818;
var res_SINGLEQUOTE_ = inst_20821;
var res = inst_20822;
var files_not_loaded = inst_20824;
var dependencies_that_loaded = inst_20826;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_20858,inst_20822,inst_20818,inst_20824,inst_20826,inst_20821,inst_20854,state_val_20905,c__14660__auto__,map__20750,map__20750__$1,opts,before_jsload,on_jsload,reload_dependents,map__20751,map__20751__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__20856){
var map__20940 = p__20856;
var map__20940__$1 = ((((!((map__20940 == null)))?((((map__20940.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20940.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20940):map__20940);
var namespace = cljs.core.get.call(null,map__20940__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_20858,inst_20822,inst_20818,inst_20824,inst_20826,inst_20821,inst_20854,state_val_20905,c__14660__auto__,map__20750,map__20750__$1,opts,before_jsload,on_jsload,reload_dependents,map__20751,map__20751__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_20858__$1 = cljs.core.group_by.call(null,inst_20857,inst_20824);
var inst_20860 = (inst_20858__$1 == null);
var inst_20861 = cljs.core.not.call(null,inst_20860);
var state_20904__$1 = (function (){var statearr_20942 = state_20904;
(statearr_20942[(16)] = inst_20858__$1);

(statearr_20942[(28)] = inst_20854);

return statearr_20942;
})();
if(inst_20861){
var statearr_20943_21019 = state_20904__$1;
(statearr_20943_21019[(1)] = (32));

} else {
var statearr_20944_21020 = state_20904__$1;
(statearr_20944_21020[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20905 === (44))){
var inst_20880 = (state_20904[(21)]);
var inst_20893 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_20880);
var inst_20894 = cljs.core.pr_str.call(null,inst_20893);
var inst_20895 = [cljs.core.str("not required: "),cljs.core.str(inst_20894)].join('');
var inst_20896 = figwheel.client.utils.log.call(null,inst_20895);
var state_20904__$1 = state_20904;
var statearr_20945_21021 = state_20904__$1;
(statearr_20945_21021[(2)] = inst_20896);

(statearr_20945_21021[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20905 === (6))){
var inst_20799 = (state_20904[(2)]);
var state_20904__$1 = state_20904;
var statearr_20946_21022 = state_20904__$1;
(statearr_20946_21022[(2)] = inst_20799);

(statearr_20946_21022[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20905 === (28))){
var inst_20824 = (state_20904[(26)]);
var inst_20851 = (state_20904[(2)]);
var inst_20852 = cljs.core.not_empty.call(null,inst_20824);
var state_20904__$1 = (function (){var statearr_20947 = state_20904;
(statearr_20947[(29)] = inst_20851);

return statearr_20947;
})();
if(cljs.core.truth_(inst_20852)){
var statearr_20948_21023 = state_20904__$1;
(statearr_20948_21023[(1)] = (29));

} else {
var statearr_20949_21024 = state_20904__$1;
(statearr_20949_21024[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20905 === (25))){
var inst_20822 = (state_20904[(23)]);
var inst_20838 = (state_20904[(2)]);
var inst_20839 = cljs.core.not_empty.call(null,inst_20822);
var state_20904__$1 = (function (){var statearr_20950 = state_20904;
(statearr_20950[(30)] = inst_20838);

return statearr_20950;
})();
if(cljs.core.truth_(inst_20839)){
var statearr_20951_21025 = state_20904__$1;
(statearr_20951_21025[(1)] = (26));

} else {
var statearr_20952_21026 = state_20904__$1;
(statearr_20952_21026[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20905 === (34))){
var inst_20873 = (state_20904[(2)]);
var state_20904__$1 = state_20904;
if(cljs.core.truth_(inst_20873)){
var statearr_20953_21027 = state_20904__$1;
(statearr_20953_21027[(1)] = (38));

} else {
var statearr_20954_21028 = state_20904__$1;
(statearr_20954_21028[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20905 === (17))){
var state_20904__$1 = state_20904;
var statearr_20955_21029 = state_20904__$1;
(statearr_20955_21029[(2)] = recompile_dependents);

(statearr_20955_21029[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20905 === (3))){
var state_20904__$1 = state_20904;
var statearr_20956_21030 = state_20904__$1;
(statearr_20956_21030[(2)] = null);

(statearr_20956_21030[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20905 === (12))){
var inst_20795 = (state_20904[(2)]);
var state_20904__$1 = state_20904;
var statearr_20957_21031 = state_20904__$1;
(statearr_20957_21031[(2)] = inst_20795);

(statearr_20957_21031[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20905 === (2))){
var inst_20757 = (state_20904[(13)]);
var inst_20764 = cljs.core.seq.call(null,inst_20757);
var inst_20765 = inst_20764;
var inst_20766 = null;
var inst_20767 = (0);
var inst_20768 = (0);
var state_20904__$1 = (function (){var statearr_20958 = state_20904;
(statearr_20958[(7)] = inst_20766);

(statearr_20958[(8)] = inst_20765);

(statearr_20958[(9)] = inst_20767);

(statearr_20958[(10)] = inst_20768);

return statearr_20958;
})();
var statearr_20959_21032 = state_20904__$1;
(statearr_20959_21032[(2)] = null);

(statearr_20959_21032[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20905 === (23))){
var inst_20822 = (state_20904[(23)]);
var inst_20818 = (state_20904[(19)]);
var inst_20824 = (state_20904[(26)]);
var inst_20826 = (state_20904[(24)]);
var inst_20821 = (state_20904[(25)]);
var inst_20829 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_20831 = (function (){var all_files = inst_20818;
var res_SINGLEQUOTE_ = inst_20821;
var res = inst_20822;
var files_not_loaded = inst_20824;
var dependencies_that_loaded = inst_20826;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_20822,inst_20818,inst_20824,inst_20826,inst_20821,inst_20829,state_val_20905,c__14660__auto__,map__20750,map__20750__$1,opts,before_jsload,on_jsload,reload_dependents,map__20751,map__20751__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__20830){
var map__20960 = p__20830;
var map__20960__$1 = ((((!((map__20960 == null)))?((((map__20960.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20960.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20960):map__20960);
var request_url = cljs.core.get.call(null,map__20960__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_20822,inst_20818,inst_20824,inst_20826,inst_20821,inst_20829,state_val_20905,c__14660__auto__,map__20750,map__20750__$1,opts,before_jsload,on_jsload,reload_dependents,map__20751,map__20751__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_20832 = cljs.core.reverse.call(null,inst_20826);
var inst_20833 = cljs.core.map.call(null,inst_20831,inst_20832);
var inst_20834 = cljs.core.pr_str.call(null,inst_20833);
var inst_20835 = figwheel.client.utils.log.call(null,inst_20834);
var state_20904__$1 = (function (){var statearr_20962 = state_20904;
(statearr_20962[(31)] = inst_20829);

return statearr_20962;
})();
var statearr_20963_21033 = state_20904__$1;
(statearr_20963_21033[(2)] = inst_20835);

(statearr_20963_21033[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20905 === (35))){
var state_20904__$1 = state_20904;
var statearr_20964_21034 = state_20904__$1;
(statearr_20964_21034[(2)] = true);

(statearr_20964_21034[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20905 === (19))){
var inst_20808 = (state_20904[(12)]);
var inst_20814 = figwheel.client.file_reloading.expand_files.call(null,inst_20808);
var state_20904__$1 = state_20904;
var statearr_20965_21035 = state_20904__$1;
(statearr_20965_21035[(2)] = inst_20814);

(statearr_20965_21035[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20905 === (11))){
var state_20904__$1 = state_20904;
var statearr_20966_21036 = state_20904__$1;
(statearr_20966_21036[(2)] = null);

(statearr_20966_21036[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20905 === (9))){
var inst_20797 = (state_20904[(2)]);
var state_20904__$1 = state_20904;
var statearr_20967_21037 = state_20904__$1;
(statearr_20967_21037[(2)] = inst_20797);

(statearr_20967_21037[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20905 === (5))){
var inst_20767 = (state_20904[(9)]);
var inst_20768 = (state_20904[(10)]);
var inst_20770 = (inst_20768 < inst_20767);
var inst_20771 = inst_20770;
var state_20904__$1 = state_20904;
if(cljs.core.truth_(inst_20771)){
var statearr_20968_21038 = state_20904__$1;
(statearr_20968_21038[(1)] = (7));

} else {
var statearr_20969_21039 = state_20904__$1;
(statearr_20969_21039[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20905 === (14))){
var inst_20778 = (state_20904[(22)]);
var inst_20787 = cljs.core.first.call(null,inst_20778);
var inst_20788 = figwheel.client.file_reloading.eval_body.call(null,inst_20787,opts);
var inst_20789 = cljs.core.next.call(null,inst_20778);
var inst_20765 = inst_20789;
var inst_20766 = null;
var inst_20767 = (0);
var inst_20768 = (0);
var state_20904__$1 = (function (){var statearr_20970 = state_20904;
(statearr_20970[(7)] = inst_20766);

(statearr_20970[(8)] = inst_20765);

(statearr_20970[(9)] = inst_20767);

(statearr_20970[(10)] = inst_20768);

(statearr_20970[(32)] = inst_20788);

return statearr_20970;
})();
var statearr_20971_21040 = state_20904__$1;
(statearr_20971_21040[(2)] = null);

(statearr_20971_21040[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20905 === (45))){
var state_20904__$1 = state_20904;
var statearr_20972_21041 = state_20904__$1;
(statearr_20972_21041[(2)] = null);

(statearr_20972_21041[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20905 === (26))){
var inst_20822 = (state_20904[(23)]);
var inst_20818 = (state_20904[(19)]);
var inst_20824 = (state_20904[(26)]);
var inst_20826 = (state_20904[(24)]);
var inst_20821 = (state_20904[(25)]);
var inst_20841 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_20843 = (function (){var all_files = inst_20818;
var res_SINGLEQUOTE_ = inst_20821;
var res = inst_20822;
var files_not_loaded = inst_20824;
var dependencies_that_loaded = inst_20826;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_20822,inst_20818,inst_20824,inst_20826,inst_20821,inst_20841,state_val_20905,c__14660__auto__,map__20750,map__20750__$1,opts,before_jsload,on_jsload,reload_dependents,map__20751,map__20751__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__20842){
var map__20973 = p__20842;
var map__20973__$1 = ((((!((map__20973 == null)))?((((map__20973.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20973.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20973):map__20973);
var namespace = cljs.core.get.call(null,map__20973__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__20973__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_20822,inst_20818,inst_20824,inst_20826,inst_20821,inst_20841,state_val_20905,c__14660__auto__,map__20750,map__20750__$1,opts,before_jsload,on_jsload,reload_dependents,map__20751,map__20751__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_20844 = cljs.core.map.call(null,inst_20843,inst_20822);
var inst_20845 = cljs.core.pr_str.call(null,inst_20844);
var inst_20846 = figwheel.client.utils.log.call(null,inst_20845);
var inst_20847 = (function (){var all_files = inst_20818;
var res_SINGLEQUOTE_ = inst_20821;
var res = inst_20822;
var files_not_loaded = inst_20824;
var dependencies_that_loaded = inst_20826;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_20822,inst_20818,inst_20824,inst_20826,inst_20821,inst_20841,inst_20843,inst_20844,inst_20845,inst_20846,state_val_20905,c__14660__auto__,map__20750,map__20750__$1,opts,before_jsload,on_jsload,reload_dependents,map__20751,map__20751__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_20822,inst_20818,inst_20824,inst_20826,inst_20821,inst_20841,inst_20843,inst_20844,inst_20845,inst_20846,state_val_20905,c__14660__auto__,map__20750,map__20750__$1,opts,before_jsload,on_jsload,reload_dependents,map__20751,map__20751__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_20848 = setTimeout(inst_20847,(10));
var state_20904__$1 = (function (){var statearr_20975 = state_20904;
(statearr_20975[(33)] = inst_20846);

(statearr_20975[(34)] = inst_20841);

return statearr_20975;
})();
var statearr_20976_21042 = state_20904__$1;
(statearr_20976_21042[(2)] = inst_20848);

(statearr_20976_21042[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20905 === (16))){
var state_20904__$1 = state_20904;
var statearr_20977_21043 = state_20904__$1;
(statearr_20977_21043[(2)] = reload_dependents);

(statearr_20977_21043[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20905 === (38))){
var inst_20858 = (state_20904[(16)]);
var inst_20875 = cljs.core.apply.call(null,cljs.core.hash_map,inst_20858);
var state_20904__$1 = state_20904;
var statearr_20978_21044 = state_20904__$1;
(statearr_20978_21044[(2)] = inst_20875);

(statearr_20978_21044[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20905 === (30))){
var state_20904__$1 = state_20904;
var statearr_20979_21045 = state_20904__$1;
(statearr_20979_21045[(2)] = null);

(statearr_20979_21045[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20905 === (10))){
var inst_20778 = (state_20904[(22)]);
var inst_20780 = cljs.core.chunked_seq_QMARK_.call(null,inst_20778);
var state_20904__$1 = state_20904;
if(inst_20780){
var statearr_20980_21046 = state_20904__$1;
(statearr_20980_21046[(1)] = (13));

} else {
var statearr_20981_21047 = state_20904__$1;
(statearr_20981_21047[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20905 === (18))){
var inst_20812 = (state_20904[(2)]);
var state_20904__$1 = state_20904;
if(cljs.core.truth_(inst_20812)){
var statearr_20982_21048 = state_20904__$1;
(statearr_20982_21048[(1)] = (19));

} else {
var statearr_20983_21049 = state_20904__$1;
(statearr_20983_21049[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20905 === (42))){
var state_20904__$1 = state_20904;
var statearr_20984_21050 = state_20904__$1;
(statearr_20984_21050[(2)] = null);

(statearr_20984_21050[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20905 === (37))){
var inst_20870 = (state_20904[(2)]);
var state_20904__$1 = state_20904;
var statearr_20985_21051 = state_20904__$1;
(statearr_20985_21051[(2)] = inst_20870);

(statearr_20985_21051[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20905 === (8))){
var inst_20765 = (state_20904[(8)]);
var inst_20778 = (state_20904[(22)]);
var inst_20778__$1 = cljs.core.seq.call(null,inst_20765);
var state_20904__$1 = (function (){var statearr_20986 = state_20904;
(statearr_20986[(22)] = inst_20778__$1);

return statearr_20986;
})();
if(inst_20778__$1){
var statearr_20987_21052 = state_20904__$1;
(statearr_20987_21052[(1)] = (10));

} else {
var statearr_20988_21053 = state_20904__$1;
(statearr_20988_21053[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__14660__auto__,map__20750,map__20750__$1,opts,before_jsload,on_jsload,reload_dependents,map__20751,map__20751__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__14595__auto__,c__14660__auto__,map__20750,map__20750__$1,opts,before_jsload,on_jsload,reload_dependents,map__20751,map__20751__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__14596__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__14596__auto____0 = (function (){
var statearr_20992 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20992[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__14596__auto__);

(statearr_20992[(1)] = (1));

return statearr_20992;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__14596__auto____1 = (function (state_20904){
while(true){
var ret_value__14597__auto__ = (function (){try{while(true){
var result__14598__auto__ = switch__14595__auto__.call(null,state_20904);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14598__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14598__auto__;
}
break;
}
}catch (e20993){if((e20993 instanceof Object)){
var ex__14599__auto__ = e20993;
var statearr_20994_21054 = state_20904;
(statearr_20994_21054[(5)] = ex__14599__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20904);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20993;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14597__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21055 = state_20904;
state_20904 = G__21055;
continue;
} else {
return ret_value__14597__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__14596__auto__ = function(state_20904){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__14596__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__14596__auto____1.call(this,state_20904);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__14596__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__14596__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__14596__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__14596__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__14596__auto__;
})()
;})(switch__14595__auto__,c__14660__auto__,map__20750,map__20750__$1,opts,before_jsload,on_jsload,reload_dependents,map__20751,map__20751__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__14662__auto__ = (function (){var statearr_20995 = f__14661__auto__.call(null);
(statearr_20995[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14660__auto__);

return statearr_20995;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14662__auto__);
});})(c__14660__auto__,map__20750,map__20750__$1,opts,before_jsload,on_jsload,reload_dependents,map__20751,map__20751__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__14660__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__21058,link){
var map__21061 = p__21058;
var map__21061__$1 = ((((!((map__21061 == null)))?((((map__21061.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21061.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21061):map__21061);
var file = cljs.core.get.call(null,map__21061__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4425__auto__ = link.href;
if(cljs.core.truth_(temp__4425__auto__)){
var link_href = temp__4425__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4425__auto__,map__21061,map__21061__$1,file){
return (function (p1__21056_SHARP_,p2__21057_SHARP_){
if(cljs.core._EQ_.call(null,p1__21056_SHARP_,p2__21057_SHARP_)){
return p1__21056_SHARP_;
} else {
return false;
}
});})(link_href,temp__4425__auto__,map__21061,map__21061__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__4425__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__21067){
var map__21068 = p__21067;
var map__21068__$1 = ((((!((map__21068 == null)))?((((map__21068.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21068.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21068):map__21068);
var match_length = cljs.core.get.call(null,map__21068__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__21068__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__21063_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__21063_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4425__auto__)){
var res = temp__4425__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.add_link_to_doc = (function figwheel$client$file_reloading$add_link_to_doc(var_args){
var args21070 = [];
var len__12638__auto___21073 = arguments.length;
var i__12639__auto___21074 = (0);
while(true){
if((i__12639__auto___21074 < len__12638__auto___21073)){
args21070.push((arguments[i__12639__auto___21074]));

var G__21075 = (i__12639__auto___21074 + (1));
i__12639__auto___21074 = G__21075;
continue;
} else {
}
break;
}

var G__21072 = args21070.length;
switch (G__21072) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21070.length)].join('')));

}
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1 = (function (new_link){
return (document.getElementsByTagName("head")[(0)]).appendChild(new_link);
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2 = (function (orig_link,klone){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
return parent.removeChild(orig_link);
});})(parent))
,(300));
});

figwheel.client.file_reloading.add_link_to_doc.cljs$lang$maxFixedArity = 2;
figwheel.client.file_reloading.distictify = (function figwheel$client$file_reloading$distictify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__21077_SHARP_,p2__21078_SHARP_){
return cljs.core.assoc.call(null,p1__21077_SHARP_,cljs.core.get.call(null,p2__21078_SHARP_,key),p2__21078_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__21079){
var map__21082 = p__21079;
var map__21082__$1 = ((((!((map__21082 == null)))?((((map__21082.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21082.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21082):map__21082);
var f_data = map__21082__$1;
var file = cljs.core.get.call(null,map__21082__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4425__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4425__auto__)){
var link = temp__4425__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__21084,files_msg){
var map__21091 = p__21084;
var map__21091__$1 = ((((!((map__21091 == null)))?((((map__21091.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21091.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21091):map__21091);
var opts = map__21091__$1;
var on_cssload = cljs.core.get.call(null,map__21091__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__21093_21097 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__21094_21098 = null;
var count__21095_21099 = (0);
var i__21096_21100 = (0);
while(true){
if((i__21096_21100 < count__21095_21099)){
var f_21101 = cljs.core._nth.call(null,chunk__21094_21098,i__21096_21100);
figwheel.client.file_reloading.reload_css_file.call(null,f_21101);

var G__21102 = seq__21093_21097;
var G__21103 = chunk__21094_21098;
var G__21104 = count__21095_21099;
var G__21105 = (i__21096_21100 + (1));
seq__21093_21097 = G__21102;
chunk__21094_21098 = G__21103;
count__21095_21099 = G__21104;
i__21096_21100 = G__21105;
continue;
} else {
var temp__4425__auto___21106 = cljs.core.seq.call(null,seq__21093_21097);
if(temp__4425__auto___21106){
var seq__21093_21107__$1 = temp__4425__auto___21106;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21093_21107__$1)){
var c__12383__auto___21108 = cljs.core.chunk_first.call(null,seq__21093_21107__$1);
var G__21109 = cljs.core.chunk_rest.call(null,seq__21093_21107__$1);
var G__21110 = c__12383__auto___21108;
var G__21111 = cljs.core.count.call(null,c__12383__auto___21108);
var G__21112 = (0);
seq__21093_21097 = G__21109;
chunk__21094_21098 = G__21110;
count__21095_21099 = G__21111;
i__21096_21100 = G__21112;
continue;
} else {
var f_21113 = cljs.core.first.call(null,seq__21093_21107__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_21113);

var G__21114 = cljs.core.next.call(null,seq__21093_21107__$1);
var G__21115 = null;
var G__21116 = (0);
var G__21117 = (0);
seq__21093_21097 = G__21114;
chunk__21094_21098 = G__21115;
count__21095_21099 = G__21116;
i__21096_21100 = G__21117;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__21091,map__21091__$1,opts,on_cssload){
return (function (){
return on_cssload.call(null,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg));
});})(map__21091,map__21091__$1,opts,on_cssload))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map