// Compiled by ClojureScript 1.7.122 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
cljs.repl.print_doc = (function cljs$repl$print_doc(m){
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4425__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4425__auto__)){
var ns = temp__4425__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__20059_20073 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__20060_20074 = null;
var count__20061_20075 = (0);
var i__20062_20076 = (0);
while(true){
if((i__20062_20076 < count__20061_20075)){
var f_20077 = cljs.core._nth.call(null,chunk__20060_20074,i__20062_20076);
cljs.core.println.call(null,"  ",f_20077);

var G__20078 = seq__20059_20073;
var G__20079 = chunk__20060_20074;
var G__20080 = count__20061_20075;
var G__20081 = (i__20062_20076 + (1));
seq__20059_20073 = G__20078;
chunk__20060_20074 = G__20079;
count__20061_20075 = G__20080;
i__20062_20076 = G__20081;
continue;
} else {
var temp__4425__auto___20082 = cljs.core.seq.call(null,seq__20059_20073);
if(temp__4425__auto___20082){
var seq__20059_20083__$1 = temp__4425__auto___20082;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20059_20083__$1)){
var c__12383__auto___20084 = cljs.core.chunk_first.call(null,seq__20059_20083__$1);
var G__20085 = cljs.core.chunk_rest.call(null,seq__20059_20083__$1);
var G__20086 = c__12383__auto___20084;
var G__20087 = cljs.core.count.call(null,c__12383__auto___20084);
var G__20088 = (0);
seq__20059_20073 = G__20085;
chunk__20060_20074 = G__20086;
count__20061_20075 = G__20087;
i__20062_20076 = G__20088;
continue;
} else {
var f_20089 = cljs.core.first.call(null,seq__20059_20083__$1);
cljs.core.println.call(null,"  ",f_20089);

var G__20090 = cljs.core.next.call(null,seq__20059_20083__$1);
var G__20091 = null;
var G__20092 = (0);
var G__20093 = (0);
seq__20059_20073 = G__20090;
chunk__20060_20074 = G__20091;
count__20061_20075 = G__20092;
i__20062_20076 = G__20093;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_20094 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__11580__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__11580__auto__)){
return or__11580__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_20094);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_20094)))?cljs.core.second.call(null,arglists_20094):arglists_20094));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__20063 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__20064 = null;
var count__20065 = (0);
var i__20066 = (0);
while(true){
if((i__20066 < count__20065)){
var vec__20067 = cljs.core._nth.call(null,chunk__20064,i__20066);
var name = cljs.core.nth.call(null,vec__20067,(0),null);
var map__20068 = cljs.core.nth.call(null,vec__20067,(1),null);
var map__20068__$1 = ((((!((map__20068 == null)))?((((map__20068.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20068.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20068):map__20068);
var doc = cljs.core.get.call(null,map__20068__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__20068__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__20095 = seq__20063;
var G__20096 = chunk__20064;
var G__20097 = count__20065;
var G__20098 = (i__20066 + (1));
seq__20063 = G__20095;
chunk__20064 = G__20096;
count__20065 = G__20097;
i__20066 = G__20098;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__20063);
if(temp__4425__auto__){
var seq__20063__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20063__$1)){
var c__12383__auto__ = cljs.core.chunk_first.call(null,seq__20063__$1);
var G__20099 = cljs.core.chunk_rest.call(null,seq__20063__$1);
var G__20100 = c__12383__auto__;
var G__20101 = cljs.core.count.call(null,c__12383__auto__);
var G__20102 = (0);
seq__20063 = G__20099;
chunk__20064 = G__20100;
count__20065 = G__20101;
i__20066 = G__20102;
continue;
} else {
var vec__20070 = cljs.core.first.call(null,seq__20063__$1);
var name = cljs.core.nth.call(null,vec__20070,(0),null);
var map__20071 = cljs.core.nth.call(null,vec__20070,(1),null);
var map__20071__$1 = ((((!((map__20071 == null)))?((((map__20071.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20071.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20071):map__20071);
var doc = cljs.core.get.call(null,map__20071__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__20071__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__20103 = cljs.core.next.call(null,seq__20063__$1);
var G__20104 = null;
var G__20105 = (0);
var G__20106 = (0);
seq__20063 = G__20103;
chunk__20064 = G__20104;
count__20065 = G__20105;
i__20066 = G__20106;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map