// Compiled by ClojureScript 1.7.122 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
goog.require('cljs.repl');
goog.require('figwheel.client.heads_up');
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),args], null));

return args;
});
figwheel.client.console_print = (function figwheel$client$console_print(args){
console.log.apply(console,cljs.core.into_array.call(null,args));

return args;
});
figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

return cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__19012__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__19012 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__19013__i = 0, G__19013__a = new Array(arguments.length -  0);
while (G__19013__i < G__19013__a.length) {G__19013__a[G__19013__i] = arguments[G__19013__i + 0]; ++G__19013__i;}
  args = new cljs.core.IndexedSeq(G__19013__a,0);
} 
return G__19012__delegate.call(this,args);};
G__19012.cljs$lang$maxFixedArity = 0;
G__19012.cljs$lang$applyTo = (function (arglist__19014){
var args = cljs.core.seq(arglist__19014);
return G__19012__delegate(args);
});
G__19012.cljs$core$IFn$_invoke$arity$variadic = G__19012__delegate;
return G__19012;
})()
;
});
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel$client$get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__19015){
var map__19018 = p__19015;
var map__19018__$1 = ((((!((map__19018 == null)))?((((map__19018.cljs$lang$protocol_mask$partition0$ & (64))) || (map__19018.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19018):map__19018);
var message = cljs.core.get.call(null,map__19018__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__19018__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__11580__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__11580__auto__)){
return or__11580__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__11568__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__11568__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__11568__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__14660__auto___19148 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__14660__auto___19148,ch){
return (function (){
var f__14661__auto__ = (function (){var switch__14595__auto__ = ((function (c__14660__auto___19148,ch){
return (function (state_19122){
var state_val_19123 = (state_19122[(1)]);
if((state_val_19123 === (7))){
var inst_19118 = (state_19122[(2)]);
var state_19122__$1 = state_19122;
var statearr_19124_19149 = state_19122__$1;
(statearr_19124_19149[(2)] = inst_19118);

(statearr_19124_19149[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19123 === (1))){
var state_19122__$1 = state_19122;
var statearr_19125_19150 = state_19122__$1;
(statearr_19125_19150[(2)] = null);

(statearr_19125_19150[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19123 === (4))){
var inst_19086 = (state_19122[(7)]);
var inst_19086__$1 = (state_19122[(2)]);
var state_19122__$1 = (function (){var statearr_19126 = state_19122;
(statearr_19126[(7)] = inst_19086__$1);

return statearr_19126;
})();
if(cljs.core.truth_(inst_19086__$1)){
var statearr_19127_19151 = state_19122__$1;
(statearr_19127_19151[(1)] = (5));

} else {
var statearr_19128_19152 = state_19122__$1;
(statearr_19128_19152[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19123 === (13))){
var state_19122__$1 = state_19122;
var statearr_19129_19153 = state_19122__$1;
(statearr_19129_19153[(2)] = null);

(statearr_19129_19153[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19123 === (6))){
var state_19122__$1 = state_19122;
var statearr_19130_19154 = state_19122__$1;
(statearr_19130_19154[(2)] = null);

(statearr_19130_19154[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19123 === (3))){
var inst_19120 = (state_19122[(2)]);
var state_19122__$1 = state_19122;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19122__$1,inst_19120);
} else {
if((state_val_19123 === (12))){
var inst_19093 = (state_19122[(8)]);
var inst_19106 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_19093);
var inst_19107 = cljs.core.first.call(null,inst_19106);
var inst_19108 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_19107);
var inst_19109 = console.warn("Figwheel: Not loading code with warnings - ",inst_19108);
var state_19122__$1 = state_19122;
var statearr_19131_19155 = state_19122__$1;
(statearr_19131_19155[(2)] = inst_19109);

(statearr_19131_19155[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19123 === (2))){
var state_19122__$1 = state_19122;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19122__$1,(4),ch);
} else {
if((state_val_19123 === (11))){
var inst_19102 = (state_19122[(2)]);
var state_19122__$1 = state_19122;
var statearr_19132_19156 = state_19122__$1;
(statearr_19132_19156[(2)] = inst_19102);

(statearr_19132_19156[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19123 === (9))){
var inst_19092 = (state_19122[(9)]);
var inst_19104 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_19092,opts);
var state_19122__$1 = state_19122;
if(cljs.core.truth_(inst_19104)){
var statearr_19133_19157 = state_19122__$1;
(statearr_19133_19157[(1)] = (12));

} else {
var statearr_19134_19158 = state_19122__$1;
(statearr_19134_19158[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19123 === (5))){
var inst_19092 = (state_19122[(9)]);
var inst_19086 = (state_19122[(7)]);
var inst_19088 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_19089 = (new cljs.core.PersistentArrayMap(null,2,inst_19088,null));
var inst_19090 = (new cljs.core.PersistentHashSet(null,inst_19089,null));
var inst_19091 = figwheel.client.focus_msgs.call(null,inst_19090,inst_19086);
var inst_19092__$1 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_19091);
var inst_19093 = cljs.core.first.call(null,inst_19091);
var inst_19094 = figwheel.client.reload_file_state_QMARK_.call(null,inst_19092__$1,opts);
var state_19122__$1 = (function (){var statearr_19135 = state_19122;
(statearr_19135[(9)] = inst_19092__$1);

(statearr_19135[(8)] = inst_19093);

return statearr_19135;
})();
if(cljs.core.truth_(inst_19094)){
var statearr_19136_19159 = state_19122__$1;
(statearr_19136_19159[(1)] = (8));

} else {
var statearr_19137_19160 = state_19122__$1;
(statearr_19137_19160[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19123 === (14))){
var inst_19112 = (state_19122[(2)]);
var state_19122__$1 = state_19122;
var statearr_19138_19161 = state_19122__$1;
(statearr_19138_19161[(2)] = inst_19112);

(statearr_19138_19161[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19123 === (10))){
var inst_19114 = (state_19122[(2)]);
var state_19122__$1 = (function (){var statearr_19139 = state_19122;
(statearr_19139[(10)] = inst_19114);

return statearr_19139;
})();
var statearr_19140_19162 = state_19122__$1;
(statearr_19140_19162[(2)] = null);

(statearr_19140_19162[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19123 === (8))){
var inst_19093 = (state_19122[(8)]);
var inst_19096 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_19097 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_19093);
var inst_19098 = cljs.core.async.timeout.call(null,(1000));
var inst_19099 = [inst_19097,inst_19098];
var inst_19100 = (new cljs.core.PersistentVector(null,2,(5),inst_19096,inst_19099,null));
var state_19122__$1 = state_19122;
return cljs.core.async.ioc_alts_BANG_.call(null,state_19122__$1,(11),inst_19100);
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
});})(c__14660__auto___19148,ch))
;
return ((function (switch__14595__auto__,c__14660__auto___19148,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__14596__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__14596__auto____0 = (function (){
var statearr_19144 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_19144[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__14596__auto__);

(statearr_19144[(1)] = (1));

return statearr_19144;
});
var figwheel$client$file_reloader_plugin_$_state_machine__14596__auto____1 = (function (state_19122){
while(true){
var ret_value__14597__auto__ = (function (){try{while(true){
var result__14598__auto__ = switch__14595__auto__.call(null,state_19122);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14598__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14598__auto__;
}
break;
}
}catch (e19145){if((e19145 instanceof Object)){
var ex__14599__auto__ = e19145;
var statearr_19146_19163 = state_19122;
(statearr_19146_19163[(5)] = ex__14599__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19122);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19145;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14597__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19164 = state_19122;
state_19122 = G__19164;
continue;
} else {
return ret_value__14597__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__14596__auto__ = function(state_19122){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__14596__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__14596__auto____1.call(this,state_19122);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__14596__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__14596__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__14596__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__14596__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__14596__auto__;
})()
;})(switch__14595__auto__,c__14660__auto___19148,ch))
})();
var state__14662__auto__ = (function (){var statearr_19147 = f__14661__auto__.call(null);
(statearr_19147[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14660__auto___19148);

return statearr_19147;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14662__auto__);
});})(c__14660__auto___19148,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__19165_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__19165_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
var base_path_19172 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_19172){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var _STAR_print_fn_STAR_19170 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR_19171 = cljs.core._STAR_print_newline_STAR_;
cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_fn_STAR_19170,_STAR_print_newline_STAR_19171,base_path_19172){
return (function() { 
var G__19173__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__19173 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__19174__i = 0, G__19174__a = new Array(arguments.length -  0);
while (G__19174__i < G__19174__a.length) {G__19174__a[G__19174__i] = arguments[G__19174__i + 0]; ++G__19174__i;}
  args = new cljs.core.IndexedSeq(G__19174__a,0);
} 
return G__19173__delegate.call(this,args);};
G__19173.cljs$lang$maxFixedArity = 0;
G__19173.cljs$lang$applyTo = (function (arglist__19175){
var args = cljs.core.seq(arglist__19175);
return G__19173__delegate(args);
});
G__19173.cljs$core$IFn$_invoke$arity$variadic = G__19173__delegate;
return G__19173;
})()
;})(_STAR_print_fn_STAR_19170,_STAR_print_newline_STAR_19171,base_path_19172))
;

cljs.core._STAR_print_newline_STAR_ = false;

try{return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"value","value",305978217),[cljs.core.str(figwheel.client.utils.eval_helper.call(null,code,opts))].join('')], null));
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_19171;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_19170;
}}catch (e19169){if((e19169 instanceof Error)){
var e = e19169;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_19172], null));
} else {
var e = e19169;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_19172))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = {};
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__19176){
var map__19183 = p__19176;
var map__19183__$1 = ((((!((map__19183 == null)))?((((map__19183.cljs$lang$protocol_mask$partition0$ & (64))) || (map__19183.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19183):map__19183);
var opts = map__19183__$1;
var build_id = cljs.core.get.call(null,map__19183__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__19183,map__19183__$1,opts,build_id){
return (function (p__19185){
var vec__19186 = p__19185;
var map__19187 = cljs.core.nth.call(null,vec__19186,(0),null);
var map__19187__$1 = ((((!((map__19187 == null)))?((((map__19187.cljs$lang$protocol_mask$partition0$ & (64))) || (map__19187.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19187):map__19187);
var msg = map__19187__$1;
var msg_name = cljs.core.get.call(null,map__19187__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__19186,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__19186,map__19187,map__19187__$1,msg,msg_name,_,map__19183,map__19183__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__19186,map__19187,map__19187__$1,msg,msg_name,_,map__19183,map__19183__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__19183,map__19183__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__19193){
var vec__19194 = p__19193;
var map__19195 = cljs.core.nth.call(null,vec__19194,(0),null);
var map__19195__$1 = ((((!((map__19195 == null)))?((((map__19195.cljs$lang$protocol_mask$partition0$ & (64))) || (map__19195.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19195):map__19195);
var msg = map__19195__$1;
var msg_name = cljs.core.get.call(null,map__19195__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__19194,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__19197){
var map__19207 = p__19197;
var map__19207__$1 = ((((!((map__19207 == null)))?((((map__19207.cljs$lang$protocol_mask$partition0$ & (64))) || (map__19207.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19207):map__19207);
var on_compile_warning = cljs.core.get.call(null,map__19207__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__19207__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__19207,map__19207__$1,on_compile_warning,on_compile_fail){
return (function (p__19209){
var vec__19210 = p__19209;
var map__19211 = cljs.core.nth.call(null,vec__19210,(0),null);
var map__19211__$1 = ((((!((map__19211 == null)))?((((map__19211.cljs$lang$protocol_mask$partition0$ & (64))) || (map__19211.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19211):map__19211);
var msg = map__19211__$1;
var msg_name = cljs.core.get.call(null,map__19211__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__19210,(1));
var pred__19213 = cljs.core._EQ_;
var expr__19214 = msg_name;
if(cljs.core.truth_(pred__19213.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__19214))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__19213.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__19214))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__19207,map__19207__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__14660__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__14660__auto__,msg_hist,msg_names,msg){
return (function (){
var f__14661__auto__ = (function (){var switch__14595__auto__ = ((function (c__14660__auto__,msg_hist,msg_names,msg){
return (function (state_19415){
var state_val_19416 = (state_19415[(1)]);
if((state_val_19416 === (7))){
var inst_19349 = (state_19415[(2)]);
var state_19415__$1 = state_19415;
var statearr_19417_19458 = state_19415__$1;
(statearr_19417_19458[(2)] = inst_19349);

(statearr_19417_19458[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19416 === (20))){
var inst_19377 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_19415__$1 = state_19415;
if(cljs.core.truth_(inst_19377)){
var statearr_19418_19459 = state_19415__$1;
(statearr_19418_19459[(1)] = (22));

} else {
var statearr_19419_19460 = state_19415__$1;
(statearr_19419_19460[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19416 === (27))){
var inst_19389 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_19390 = figwheel.client.heads_up.display_warning.call(null,inst_19389);
var state_19415__$1 = state_19415;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19415__$1,(30),inst_19390);
} else {
if((state_val_19416 === (1))){
var inst_19337 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_19415__$1 = state_19415;
if(cljs.core.truth_(inst_19337)){
var statearr_19420_19461 = state_19415__$1;
(statearr_19420_19461[(1)] = (2));

} else {
var statearr_19421_19462 = state_19415__$1;
(statearr_19421_19462[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19416 === (24))){
var inst_19405 = (state_19415[(2)]);
var state_19415__$1 = state_19415;
var statearr_19422_19463 = state_19415__$1;
(statearr_19422_19463[(2)] = inst_19405);

(statearr_19422_19463[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19416 === (4))){
var inst_19413 = (state_19415[(2)]);
var state_19415__$1 = state_19415;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19415__$1,inst_19413);
} else {
if((state_val_19416 === (15))){
var inst_19365 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_19366 = figwheel.client.format_messages.call(null,inst_19365);
var inst_19367 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_19368 = figwheel.client.heads_up.display_error.call(null,inst_19366,inst_19367);
var state_19415__$1 = state_19415;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19415__$1,(18),inst_19368);
} else {
if((state_val_19416 === (21))){
var inst_19407 = (state_19415[(2)]);
var state_19415__$1 = state_19415;
var statearr_19423_19464 = state_19415__$1;
(statearr_19423_19464[(2)] = inst_19407);

(statearr_19423_19464[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19416 === (31))){
var inst_19396 = figwheel.client.heads_up.flash_loaded.call(null);
var state_19415__$1 = state_19415;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19415__$1,(34),inst_19396);
} else {
if((state_val_19416 === (32))){
var state_19415__$1 = state_19415;
var statearr_19424_19465 = state_19415__$1;
(statearr_19424_19465[(2)] = null);

(statearr_19424_19465[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19416 === (33))){
var inst_19401 = (state_19415[(2)]);
var state_19415__$1 = state_19415;
var statearr_19425_19466 = state_19415__$1;
(statearr_19425_19466[(2)] = inst_19401);

(statearr_19425_19466[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19416 === (13))){
var inst_19355 = (state_19415[(2)]);
var inst_19356 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_19357 = figwheel.client.format_messages.call(null,inst_19356);
var inst_19358 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_19359 = figwheel.client.heads_up.display_error.call(null,inst_19357,inst_19358);
var state_19415__$1 = (function (){var statearr_19426 = state_19415;
(statearr_19426[(7)] = inst_19355);

return statearr_19426;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19415__$1,(14),inst_19359);
} else {
if((state_val_19416 === (22))){
var inst_19379 = figwheel.client.heads_up.clear.call(null);
var state_19415__$1 = state_19415;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19415__$1,(25),inst_19379);
} else {
if((state_val_19416 === (29))){
var inst_19403 = (state_19415[(2)]);
var state_19415__$1 = state_19415;
var statearr_19427_19467 = state_19415__$1;
(statearr_19427_19467[(2)] = inst_19403);

(statearr_19427_19467[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19416 === (6))){
var inst_19345 = figwheel.client.heads_up.clear.call(null);
var state_19415__$1 = state_19415;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19415__$1,(9),inst_19345);
} else {
if((state_val_19416 === (28))){
var inst_19394 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_19415__$1 = state_19415;
if(cljs.core.truth_(inst_19394)){
var statearr_19428_19468 = state_19415__$1;
(statearr_19428_19468[(1)] = (31));

} else {
var statearr_19429_19469 = state_19415__$1;
(statearr_19429_19469[(1)] = (32));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19416 === (25))){
var inst_19381 = (state_19415[(2)]);
var inst_19382 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_19383 = figwheel.client.heads_up.display_warning.call(null,inst_19382);
var state_19415__$1 = (function (){var statearr_19430 = state_19415;
(statearr_19430[(8)] = inst_19381);

return statearr_19430;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19415__$1,(26),inst_19383);
} else {
if((state_val_19416 === (34))){
var inst_19398 = (state_19415[(2)]);
var state_19415__$1 = state_19415;
var statearr_19431_19470 = state_19415__$1;
(statearr_19431_19470[(2)] = inst_19398);

(statearr_19431_19470[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19416 === (17))){
var inst_19409 = (state_19415[(2)]);
var state_19415__$1 = state_19415;
var statearr_19432_19471 = state_19415__$1;
(statearr_19432_19471[(2)] = inst_19409);

(statearr_19432_19471[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19416 === (3))){
var inst_19351 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_19415__$1 = state_19415;
if(cljs.core.truth_(inst_19351)){
var statearr_19433_19472 = state_19415__$1;
(statearr_19433_19472[(1)] = (10));

} else {
var statearr_19434_19473 = state_19415__$1;
(statearr_19434_19473[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19416 === (12))){
var inst_19411 = (state_19415[(2)]);
var state_19415__$1 = state_19415;
var statearr_19435_19474 = state_19415__$1;
(statearr_19435_19474[(2)] = inst_19411);

(statearr_19435_19474[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19416 === (2))){
var inst_19339 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_19415__$1 = state_19415;
if(cljs.core.truth_(inst_19339)){
var statearr_19436_19475 = state_19415__$1;
(statearr_19436_19475[(1)] = (5));

} else {
var statearr_19437_19476 = state_19415__$1;
(statearr_19437_19476[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19416 === (23))){
var inst_19387 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_19415__$1 = state_19415;
if(cljs.core.truth_(inst_19387)){
var statearr_19438_19477 = state_19415__$1;
(statearr_19438_19477[(1)] = (27));

} else {
var statearr_19439_19478 = state_19415__$1;
(statearr_19439_19478[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19416 === (19))){
var inst_19374 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_19375 = figwheel.client.heads_up.append_message.call(null,inst_19374);
var state_19415__$1 = state_19415;
var statearr_19440_19479 = state_19415__$1;
(statearr_19440_19479[(2)] = inst_19375);

(statearr_19440_19479[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19416 === (11))){
var inst_19363 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_19415__$1 = state_19415;
if(cljs.core.truth_(inst_19363)){
var statearr_19441_19480 = state_19415__$1;
(statearr_19441_19480[(1)] = (15));

} else {
var statearr_19442_19481 = state_19415__$1;
(statearr_19442_19481[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19416 === (9))){
var inst_19347 = (state_19415[(2)]);
var state_19415__$1 = state_19415;
var statearr_19443_19482 = state_19415__$1;
(statearr_19443_19482[(2)] = inst_19347);

(statearr_19443_19482[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19416 === (5))){
var inst_19341 = figwheel.client.heads_up.flash_loaded.call(null);
var state_19415__$1 = state_19415;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19415__$1,(8),inst_19341);
} else {
if((state_val_19416 === (14))){
var inst_19361 = (state_19415[(2)]);
var state_19415__$1 = state_19415;
var statearr_19444_19483 = state_19415__$1;
(statearr_19444_19483[(2)] = inst_19361);

(statearr_19444_19483[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19416 === (26))){
var inst_19385 = (state_19415[(2)]);
var state_19415__$1 = state_19415;
var statearr_19445_19484 = state_19415__$1;
(statearr_19445_19484[(2)] = inst_19385);

(statearr_19445_19484[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19416 === (16))){
var inst_19372 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_19415__$1 = state_19415;
if(cljs.core.truth_(inst_19372)){
var statearr_19446_19485 = state_19415__$1;
(statearr_19446_19485[(1)] = (19));

} else {
var statearr_19447_19486 = state_19415__$1;
(statearr_19447_19486[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19416 === (30))){
var inst_19392 = (state_19415[(2)]);
var state_19415__$1 = state_19415;
var statearr_19448_19487 = state_19415__$1;
(statearr_19448_19487[(2)] = inst_19392);

(statearr_19448_19487[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19416 === (10))){
var inst_19353 = figwheel.client.heads_up.clear.call(null);
var state_19415__$1 = state_19415;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19415__$1,(13),inst_19353);
} else {
if((state_val_19416 === (18))){
var inst_19370 = (state_19415[(2)]);
var state_19415__$1 = state_19415;
var statearr_19449_19488 = state_19415__$1;
(statearr_19449_19488[(2)] = inst_19370);

(statearr_19449_19488[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19416 === (8))){
var inst_19343 = (state_19415[(2)]);
var state_19415__$1 = state_19415;
var statearr_19450_19489 = state_19415__$1;
(statearr_19450_19489[(2)] = inst_19343);

(statearr_19450_19489[(1)] = (7));


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
});})(c__14660__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__14595__auto__,c__14660__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__14596__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__14596__auto____0 = (function (){
var statearr_19454 = [null,null,null,null,null,null,null,null,null];
(statearr_19454[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__14596__auto__);

(statearr_19454[(1)] = (1));

return statearr_19454;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__14596__auto____1 = (function (state_19415){
while(true){
var ret_value__14597__auto__ = (function (){try{while(true){
var result__14598__auto__ = switch__14595__auto__.call(null,state_19415);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14598__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14598__auto__;
}
break;
}
}catch (e19455){if((e19455 instanceof Object)){
var ex__14599__auto__ = e19455;
var statearr_19456_19490 = state_19415;
(statearr_19456_19490[(5)] = ex__14599__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19415);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19455;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14597__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19491 = state_19415;
state_19415 = G__19491;
continue;
} else {
return ret_value__14597__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__14596__auto__ = function(state_19415){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__14596__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__14596__auto____1.call(this,state_19415);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__14596__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__14596__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__14596__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__14596__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__14596__auto__;
})()
;})(switch__14595__auto__,c__14660__auto__,msg_hist,msg_names,msg))
})();
var state__14662__auto__ = (function (){var statearr_19457 = f__14661__auto__.call(null);
(statearr_19457[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14660__auto__);

return statearr_19457;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14662__auto__);
});})(c__14660__auto__,msg_hist,msg_names,msg))
);

return c__14660__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__14660__auto___19554 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__14660__auto___19554,ch){
return (function (){
var f__14661__auto__ = (function (){var switch__14595__auto__ = ((function (c__14660__auto___19554,ch){
return (function (state_19537){
var state_val_19538 = (state_19537[(1)]);
if((state_val_19538 === (1))){
var state_19537__$1 = state_19537;
var statearr_19539_19555 = state_19537__$1;
(statearr_19539_19555[(2)] = null);

(statearr_19539_19555[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19538 === (2))){
var state_19537__$1 = state_19537;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19537__$1,(4),ch);
} else {
if((state_val_19538 === (3))){
var inst_19535 = (state_19537[(2)]);
var state_19537__$1 = state_19537;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19537__$1,inst_19535);
} else {
if((state_val_19538 === (4))){
var inst_19525 = (state_19537[(7)]);
var inst_19525__$1 = (state_19537[(2)]);
var state_19537__$1 = (function (){var statearr_19540 = state_19537;
(statearr_19540[(7)] = inst_19525__$1);

return statearr_19540;
})();
if(cljs.core.truth_(inst_19525__$1)){
var statearr_19541_19556 = state_19537__$1;
(statearr_19541_19556[(1)] = (5));

} else {
var statearr_19542_19557 = state_19537__$1;
(statearr_19542_19557[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19538 === (5))){
var inst_19525 = (state_19537[(7)]);
var inst_19527 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_19525);
var state_19537__$1 = state_19537;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19537__$1,(8),inst_19527);
} else {
if((state_val_19538 === (6))){
var state_19537__$1 = state_19537;
var statearr_19543_19558 = state_19537__$1;
(statearr_19543_19558[(2)] = null);

(statearr_19543_19558[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19538 === (7))){
var inst_19533 = (state_19537[(2)]);
var state_19537__$1 = state_19537;
var statearr_19544_19559 = state_19537__$1;
(statearr_19544_19559[(2)] = inst_19533);

(statearr_19544_19559[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19538 === (8))){
var inst_19529 = (state_19537[(2)]);
var state_19537__$1 = (function (){var statearr_19545 = state_19537;
(statearr_19545[(8)] = inst_19529);

return statearr_19545;
})();
var statearr_19546_19560 = state_19537__$1;
(statearr_19546_19560[(2)] = null);

(statearr_19546_19560[(1)] = (2));


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
});})(c__14660__auto___19554,ch))
;
return ((function (switch__14595__auto__,c__14660__auto___19554,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__14596__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__14596__auto____0 = (function (){
var statearr_19550 = [null,null,null,null,null,null,null,null,null];
(statearr_19550[(0)] = figwheel$client$heads_up_plugin_$_state_machine__14596__auto__);

(statearr_19550[(1)] = (1));

return statearr_19550;
});
var figwheel$client$heads_up_plugin_$_state_machine__14596__auto____1 = (function (state_19537){
while(true){
var ret_value__14597__auto__ = (function (){try{while(true){
var result__14598__auto__ = switch__14595__auto__.call(null,state_19537);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14598__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14598__auto__;
}
break;
}
}catch (e19551){if((e19551 instanceof Object)){
var ex__14599__auto__ = e19551;
var statearr_19552_19561 = state_19537;
(statearr_19552_19561[(5)] = ex__14599__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19537);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19551;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14597__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19562 = state_19537;
state_19537 = G__19562;
continue;
} else {
return ret_value__14597__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__14596__auto__ = function(state_19537){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__14596__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__14596__auto____1.call(this,state_19537);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__14596__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__14596__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__14596__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__14596__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__14596__auto__;
})()
;})(switch__14595__auto__,c__14660__auto___19554,ch))
})();
var state__14662__auto__ = (function (){var statearr_19553 = f__14661__auto__.call(null);
(statearr_19553[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14660__auto___19554);

return statearr_19553;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14662__auto__);
});})(c__14660__auto___19554,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__14660__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__14660__auto__){
return (function (){
var f__14661__auto__ = (function (){var switch__14595__auto__ = ((function (c__14660__auto__){
return (function (state_19583){
var state_val_19584 = (state_19583[(1)]);
if((state_val_19584 === (1))){
var inst_19578 = cljs.core.async.timeout.call(null,(3000));
var state_19583__$1 = state_19583;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19583__$1,(2),inst_19578);
} else {
if((state_val_19584 === (2))){
var inst_19580 = (state_19583[(2)]);
var inst_19581 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_19583__$1 = (function (){var statearr_19585 = state_19583;
(statearr_19585[(7)] = inst_19580);

return statearr_19585;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19583__$1,inst_19581);
} else {
return null;
}
}
});})(c__14660__auto__))
;
return ((function (switch__14595__auto__,c__14660__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__14596__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__14596__auto____0 = (function (){
var statearr_19589 = [null,null,null,null,null,null,null,null];
(statearr_19589[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__14596__auto__);

(statearr_19589[(1)] = (1));

return statearr_19589;
});
var figwheel$client$enforce_project_plugin_$_state_machine__14596__auto____1 = (function (state_19583){
while(true){
var ret_value__14597__auto__ = (function (){try{while(true){
var result__14598__auto__ = switch__14595__auto__.call(null,state_19583);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14598__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14598__auto__;
}
break;
}
}catch (e19590){if((e19590 instanceof Object)){
var ex__14599__auto__ = e19590;
var statearr_19591_19593 = state_19583;
(statearr_19591_19593[(5)] = ex__14599__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19583);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19590;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14597__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19594 = state_19583;
state_19583 = G__19594;
continue;
} else {
return ret_value__14597__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__14596__auto__ = function(state_19583){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__14596__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__14596__auto____1.call(this,state_19583);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__14596__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__14596__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__14596__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__14596__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__14596__auto__;
})()
;})(switch__14595__auto__,c__14660__auto__))
})();
var state__14662__auto__ = (function (){var statearr_19592 = f__14661__auto__.call(null);
(statearr_19592[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14660__auto__);

return statearr_19592;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14662__auto__);
});})(c__14660__auto__))
);

return c__14660__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__19595){
var map__19602 = p__19595;
var map__19602__$1 = ((((!((map__19602 == null)))?((((map__19602.cljs$lang$protocol_mask$partition0$ & (64))) || (map__19602.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19602):map__19602);
var ed = map__19602__$1;
var formatted_exception = cljs.core.get.call(null,map__19602__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__19602__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__19602__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__19604_19608 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__19605_19609 = null;
var count__19606_19610 = (0);
var i__19607_19611 = (0);
while(true){
if((i__19607_19611 < count__19606_19610)){
var msg_19612 = cljs.core._nth.call(null,chunk__19605_19609,i__19607_19611);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_19612);

var G__19613 = seq__19604_19608;
var G__19614 = chunk__19605_19609;
var G__19615 = count__19606_19610;
var G__19616 = (i__19607_19611 + (1));
seq__19604_19608 = G__19613;
chunk__19605_19609 = G__19614;
count__19606_19610 = G__19615;
i__19607_19611 = G__19616;
continue;
} else {
var temp__4425__auto___19617 = cljs.core.seq.call(null,seq__19604_19608);
if(temp__4425__auto___19617){
var seq__19604_19618__$1 = temp__4425__auto___19617;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19604_19618__$1)){
var c__12383__auto___19619 = cljs.core.chunk_first.call(null,seq__19604_19618__$1);
var G__19620 = cljs.core.chunk_rest.call(null,seq__19604_19618__$1);
var G__19621 = c__12383__auto___19619;
var G__19622 = cljs.core.count.call(null,c__12383__auto___19619);
var G__19623 = (0);
seq__19604_19608 = G__19620;
chunk__19605_19609 = G__19621;
count__19606_19610 = G__19622;
i__19607_19611 = G__19623;
continue;
} else {
var msg_19624 = cljs.core.first.call(null,seq__19604_19618__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_19624);

var G__19625 = cljs.core.next.call(null,seq__19604_19618__$1);
var G__19626 = null;
var G__19627 = (0);
var G__19628 = (0);
seq__19604_19608 = G__19625;
chunk__19605_19609 = G__19626;
count__19606_19610 = G__19627;
i__19607_19611 = G__19628;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Error on file "),cljs.core.str(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", line "),cljs.core.str(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", column "),cljs.core.str(new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__19629){
var map__19632 = p__19629;
var map__19632__$1 = ((((!((map__19632 == null)))?((((map__19632.cljs$lang$protocol_mask$partition0$ & (64))) || (map__19632.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19632):map__19632);
var w = map__19632__$1;
var message = cljs.core.get.call(null,map__19632__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),[cljs.core.str("Figwheel: Compile Warning - "),cljs.core.str(message)].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[figwheel.client.default_on_compile_warning,figwheel.client.default_on_jsload,true,figwheel.client.default_on_compile_fail,false,true,[cljs.core.str("ws://"),cljs.core.str((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str("/figwheel-ws")].join(''),figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__11568__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__11568__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__11568__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__19640 = cljs.core.seq.call(null,plugins);
var chunk__19641 = null;
var count__19642 = (0);
var i__19643 = (0);
while(true){
if((i__19643 < count__19642)){
var vec__19644 = cljs.core._nth.call(null,chunk__19641,i__19643);
var k = cljs.core.nth.call(null,vec__19644,(0),null);
var plugin = cljs.core.nth.call(null,vec__19644,(1),null);
if(cljs.core.truth_(plugin)){
var pl_19646 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__19640,chunk__19641,count__19642,i__19643,pl_19646,vec__19644,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_19646.call(null,msg_hist);
});})(seq__19640,chunk__19641,count__19642,i__19643,pl_19646,vec__19644,k,plugin))
);
} else {
}

var G__19647 = seq__19640;
var G__19648 = chunk__19641;
var G__19649 = count__19642;
var G__19650 = (i__19643 + (1));
seq__19640 = G__19647;
chunk__19641 = G__19648;
count__19642 = G__19649;
i__19643 = G__19650;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__19640);
if(temp__4425__auto__){
var seq__19640__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19640__$1)){
var c__12383__auto__ = cljs.core.chunk_first.call(null,seq__19640__$1);
var G__19651 = cljs.core.chunk_rest.call(null,seq__19640__$1);
var G__19652 = c__12383__auto__;
var G__19653 = cljs.core.count.call(null,c__12383__auto__);
var G__19654 = (0);
seq__19640 = G__19651;
chunk__19641 = G__19652;
count__19642 = G__19653;
i__19643 = G__19654;
continue;
} else {
var vec__19645 = cljs.core.first.call(null,seq__19640__$1);
var k = cljs.core.nth.call(null,vec__19645,(0),null);
var plugin = cljs.core.nth.call(null,vec__19645,(1),null);
if(cljs.core.truth_(plugin)){
var pl_19655 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__19640,chunk__19641,count__19642,i__19643,pl_19655,vec__19645,k,plugin,seq__19640__$1,temp__4425__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_19655.call(null,msg_hist);
});})(seq__19640,chunk__19641,count__19642,i__19643,pl_19655,vec__19645,k,plugin,seq__19640__$1,temp__4425__auto__))
);
} else {
}

var G__19656 = cljs.core.next.call(null,seq__19640__$1);
var G__19657 = null;
var G__19658 = (0);
var G__19659 = (0);
seq__19640 = G__19656;
chunk__19641 = G__19657;
count__19642 = G__19658;
i__19643 = G__19659;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var args19660 = [];
var len__12638__auto___19663 = arguments.length;
var i__12639__auto___19664 = (0);
while(true){
if((i__12639__auto___19664 < len__12638__auto___19663)){
args19660.push((arguments[i__12639__auto___19664]));

var G__19665 = (i__12639__auto___19664 + (1));
i__12639__auto___19664 = G__19665;
continue;
} else {
}
break;
}

var G__19662 = args19660.length;
switch (G__19662) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19660.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

return figwheel.client.socket.open.call(null,system_options);
}));
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;
figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__12645__auto__ = [];
var len__12638__auto___19671 = arguments.length;
var i__12639__auto___19672 = (0);
while(true){
if((i__12639__auto___19672 < len__12638__auto___19671)){
args__12645__auto__.push((arguments[i__12639__auto___19672]));

var G__19673 = (i__12639__auto___19672 + (1));
i__12639__auto___19672 = G__19673;
continue;
} else {
}
break;
}

var argseq__12646__auto__ = ((((0) < args__12645__auto__.length))?(new cljs.core.IndexedSeq(args__12645__auto__.slice((0)),(0))):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__12646__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__19668){
var map__19669 = p__19668;
var map__19669__$1 = ((((!((map__19669 == null)))?((((map__19669.cljs$lang$protocol_mask$partition0$ & (64))) || (map__19669.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19669):map__19669);
var opts = map__19669__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq19667){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq19667));
});

//# sourceMappingURL=client.js.map