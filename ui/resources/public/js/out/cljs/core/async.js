// Compiled by ClojureScript 1.7.122 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(f){
if(typeof cljs.core.async.t_cljs$core$async21184 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async21184 = (function (fn_handler,f,meta21185){
this.fn_handler = fn_handler;
this.f = f;
this.meta21185 = meta21185;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async21184.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21186,meta21185__$1){
var self__ = this;
var _21186__$1 = this;
return (new cljs.core.async.t_cljs$core$async21184(self__.fn_handler,self__.f,meta21185__$1));
});

cljs.core.async.t_cljs$core$async21184.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21186){
var self__ = this;
var _21186__$1 = this;
return self__.meta21185;
});

cljs.core.async.t_cljs$core$async21184.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async21184.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async21184.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async21184.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"fn-handler","fn-handler",648785851,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null)], null)))], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"meta21185","meta21185",306026926,null)], null);
});

cljs.core.async.t_cljs$core$async21184.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async21184.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async21184";

cljs.core.async.t_cljs$core$async21184.cljs$lang$ctorPrWriter = (function (this__12178__auto__,writer__12179__auto__,opt__12180__auto__){
return cljs.core._write.call(null,writer__12179__auto__,"cljs.core.async/t_cljs$core$async21184");
});

cljs.core.async.__GT_t_cljs$core$async21184 = (function cljs$core$async$fn_handler_$___GT_t_cljs$core$async21184(fn_handler__$1,f__$1,meta21185){
return (new cljs.core.async.t_cljs$core$async21184(fn_handler__$1,f__$1,meta21185));
});

}

return (new cljs.core.async.t_cljs$core$async21184(cljs$core$async$fn_handler,f,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || (buff.cljs$core$async$impl$protocols$UnblockingBuffer$)){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var args21189 = [];
var len__12638__auto___21192 = arguments.length;
var i__12639__auto___21193 = (0);
while(true){
if((i__12639__auto___21193 < len__12638__auto___21192)){
args21189.push((arguments[i__12639__auto___21193]));

var G__21194 = (i__12639__auto___21193 + (1));
i__12639__auto___21193 = G__21194;
continue;
} else {
}
break;
}

var G__21191 = args21189.length;
switch (G__21191) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21189.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"buf-or-n","buf-or-n",-1646815050,null)))].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;
/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var args21196 = [];
var len__12638__auto___21199 = arguments.length;
var i__12639__auto___21200 = (0);
while(true){
if((i__12639__auto___21200 < len__12638__auto___21199)){
args21196.push((arguments[i__12639__auto___21200]));

var G__21201 = (i__12639__auto___21200 + (1));
i__12639__auto___21200 = G__21201;
continue;
} else {
}
break;
}

var G__21198 = args21196.length;
switch (G__21198) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21196.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_21203 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_21203);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_21203,ret){
return (function (){
return fn1.call(null,val_21203);
});})(val_21203,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;
cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var args21204 = [];
var len__12638__auto___21207 = arguments.length;
var i__12639__auto___21208 = (0);
while(true){
if((i__12639__auto___21208 < len__12638__auto___21207)){
args21204.push((arguments[i__12639__auto___21208]));

var G__21209 = (i__12639__auto___21208 + (1));
i__12639__auto___21208 = G__21209;
continue;
} else {
}
break;
}

var G__21206 = args21204.length;
switch (G__21206) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21204.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4423__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4423__auto__)){
var ret = temp__4423__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4423__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4423__auto__)){
var retb = temp__4423__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4423__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4423__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;
cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__12483__auto___21211 = n;
var x_21212 = (0);
while(true){
if((x_21212 < n__12483__auto___21211)){
(a[x_21212] = (0));

var G__21213 = (x_21212 + (1));
x_21212 = G__21213;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__21214 = (i + (1));
i = G__21214;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async21218 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async21218 = (function (alt_flag,flag,meta21219){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta21219 = meta21219;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async21218.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_21220,meta21219__$1){
var self__ = this;
var _21220__$1 = this;
return (new cljs.core.async.t_cljs$core$async21218(self__.alt_flag,self__.flag,meta21219__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async21218.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_21220){
var self__ = this;
var _21220__$1 = this;
return self__.meta21219;
});})(flag))
;

cljs.core.async.t_cljs$core$async21218.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async21218.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async21218.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async21218.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta21219","meta21219",-1560844115,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async21218.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async21218.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async21218";

cljs.core.async.t_cljs$core$async21218.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__12178__auto__,writer__12179__auto__,opt__12180__auto__){
return cljs.core._write.call(null,writer__12179__auto__,"cljs.core.async/t_cljs$core$async21218");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async21218 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async21218(alt_flag__$1,flag__$1,meta21219){
return (new cljs.core.async.t_cljs$core$async21218(alt_flag__$1,flag__$1,meta21219));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async21218(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async21224 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async21224 = (function (alt_handler,flag,cb,meta21225){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta21225 = meta21225;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async21224.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21226,meta21225__$1){
var self__ = this;
var _21226__$1 = this;
return (new cljs.core.async.t_cljs$core$async21224(self__.alt_handler,self__.flag,self__.cb,meta21225__$1));
});

cljs.core.async.t_cljs$core$async21224.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21226){
var self__ = this;
var _21226__$1 = this;
return self__.meta21225;
});

cljs.core.async.t_cljs$core$async21224.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async21224.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async21224.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async21224.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta21225","meta21225",-1700606578,null)], null);
});

cljs.core.async.t_cljs$core$async21224.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async21224.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async21224";

cljs.core.async.t_cljs$core$async21224.cljs$lang$ctorPrWriter = (function (this__12178__auto__,writer__12179__auto__,opt__12180__auto__){
return cljs.core._write.call(null,writer__12179__auto__,"cljs.core.async/t_cljs$core$async21224");
});

cljs.core.async.__GT_t_cljs$core$async21224 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async21224(alt_handler__$1,flag__$1,cb__$1,meta21225){
return (new cljs.core.async.t_cljs$core$async21224(alt_handler__$1,flag__$1,cb__$1,meta21225));
});

}

return (new cljs.core.async.t_cljs$core$async21224(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__21227_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__21227_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__21228_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__21228_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__11580__auto__ = wport;
if(cljs.core.truth_(or__11580__auto__)){
return or__11580__auto__;
} else {
return port;
}
})()], null));
} else {
var G__21229 = (i + (1));
i = G__21229;
continue;
}
} else {
return null;
}
break;
}
})();
var or__11580__auto__ = ret;
if(cljs.core.truth_(or__11580__auto__)){
return or__11580__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4425__auto__ = (function (){var and__11568__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__11568__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__11568__auto__;
}
})();
if(cljs.core.truth_(temp__4425__auto__)){
var got = temp__4425__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__12645__auto__ = [];
var len__12638__auto___21235 = arguments.length;
var i__12639__auto___21236 = (0);
while(true){
if((i__12639__auto___21236 < len__12638__auto___21235)){
args__12645__auto__.push((arguments[i__12639__auto___21236]));

var G__21237 = (i__12639__auto___21236 + (1));
i__12639__auto___21236 = G__21237;
continue;
} else {
}
break;
}

var argseq__12646__auto__ = ((((1) < args__12645__auto__.length))?(new cljs.core.IndexedSeq(args__12645__auto__.slice((1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__12646__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__21232){
var map__21233 = p__21232;
var map__21233__$1 = ((((!((map__21233 == null)))?((((map__21233.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21233.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21233):map__21233);
var opts = map__21233__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq21230){
var G__21231 = cljs.core.first.call(null,seq21230);
var seq21230__$1 = cljs.core.next.call(null,seq21230);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__21231,seq21230__$1);
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args21238 = [];
var len__12638__auto___21288 = arguments.length;
var i__12639__auto___21289 = (0);
while(true){
if((i__12639__auto___21289 < len__12638__auto___21288)){
args21238.push((arguments[i__12639__auto___21289]));

var G__21290 = (i__12639__auto___21289 + (1));
i__12639__auto___21289 = G__21290;
continue;
} else {
}
break;
}

var G__21240 = args21238.length;
switch (G__21240) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21238.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__14660__auto___21292 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__14660__auto___21292){
return (function (){
var f__14661__auto__ = (function (){var switch__14595__auto__ = ((function (c__14660__auto___21292){
return (function (state_21264){
var state_val_21265 = (state_21264[(1)]);
if((state_val_21265 === (7))){
var inst_21260 = (state_21264[(2)]);
var state_21264__$1 = state_21264;
var statearr_21266_21293 = state_21264__$1;
(statearr_21266_21293[(2)] = inst_21260);

(statearr_21266_21293[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21265 === (1))){
var state_21264__$1 = state_21264;
var statearr_21267_21294 = state_21264__$1;
(statearr_21267_21294[(2)] = null);

(statearr_21267_21294[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21265 === (4))){
var inst_21243 = (state_21264[(7)]);
var inst_21243__$1 = (state_21264[(2)]);
var inst_21244 = (inst_21243__$1 == null);
var state_21264__$1 = (function (){var statearr_21268 = state_21264;
(statearr_21268[(7)] = inst_21243__$1);

return statearr_21268;
})();
if(cljs.core.truth_(inst_21244)){
var statearr_21269_21295 = state_21264__$1;
(statearr_21269_21295[(1)] = (5));

} else {
var statearr_21270_21296 = state_21264__$1;
(statearr_21270_21296[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21265 === (13))){
var state_21264__$1 = state_21264;
var statearr_21271_21297 = state_21264__$1;
(statearr_21271_21297[(2)] = null);

(statearr_21271_21297[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21265 === (6))){
var inst_21243 = (state_21264[(7)]);
var state_21264__$1 = state_21264;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21264__$1,(11),to,inst_21243);
} else {
if((state_val_21265 === (3))){
var inst_21262 = (state_21264[(2)]);
var state_21264__$1 = state_21264;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21264__$1,inst_21262);
} else {
if((state_val_21265 === (12))){
var state_21264__$1 = state_21264;
var statearr_21272_21298 = state_21264__$1;
(statearr_21272_21298[(2)] = null);

(statearr_21272_21298[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21265 === (2))){
var state_21264__$1 = state_21264;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21264__$1,(4),from);
} else {
if((state_val_21265 === (11))){
var inst_21253 = (state_21264[(2)]);
var state_21264__$1 = state_21264;
if(cljs.core.truth_(inst_21253)){
var statearr_21273_21299 = state_21264__$1;
(statearr_21273_21299[(1)] = (12));

} else {
var statearr_21274_21300 = state_21264__$1;
(statearr_21274_21300[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21265 === (9))){
var state_21264__$1 = state_21264;
var statearr_21275_21301 = state_21264__$1;
(statearr_21275_21301[(2)] = null);

(statearr_21275_21301[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21265 === (5))){
var state_21264__$1 = state_21264;
if(cljs.core.truth_(close_QMARK_)){
var statearr_21276_21302 = state_21264__$1;
(statearr_21276_21302[(1)] = (8));

} else {
var statearr_21277_21303 = state_21264__$1;
(statearr_21277_21303[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21265 === (14))){
var inst_21258 = (state_21264[(2)]);
var state_21264__$1 = state_21264;
var statearr_21278_21304 = state_21264__$1;
(statearr_21278_21304[(2)] = inst_21258);

(statearr_21278_21304[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21265 === (10))){
var inst_21250 = (state_21264[(2)]);
var state_21264__$1 = state_21264;
var statearr_21279_21305 = state_21264__$1;
(statearr_21279_21305[(2)] = inst_21250);

(statearr_21279_21305[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21265 === (8))){
var inst_21247 = cljs.core.async.close_BANG_.call(null,to);
var state_21264__$1 = state_21264;
var statearr_21280_21306 = state_21264__$1;
(statearr_21280_21306[(2)] = inst_21247);

(statearr_21280_21306[(1)] = (10));


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
});})(c__14660__auto___21292))
;
return ((function (switch__14595__auto__,c__14660__auto___21292){
return (function() {
var cljs$core$async$state_machine__14596__auto__ = null;
var cljs$core$async$state_machine__14596__auto____0 = (function (){
var statearr_21284 = [null,null,null,null,null,null,null,null];
(statearr_21284[(0)] = cljs$core$async$state_machine__14596__auto__);

(statearr_21284[(1)] = (1));

return statearr_21284;
});
var cljs$core$async$state_machine__14596__auto____1 = (function (state_21264){
while(true){
var ret_value__14597__auto__ = (function (){try{while(true){
var result__14598__auto__ = switch__14595__auto__.call(null,state_21264);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14598__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14598__auto__;
}
break;
}
}catch (e21285){if((e21285 instanceof Object)){
var ex__14599__auto__ = e21285;
var statearr_21286_21307 = state_21264;
(statearr_21286_21307[(5)] = ex__14599__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21264);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21285;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14597__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21308 = state_21264;
state_21264 = G__21308;
continue;
} else {
return ret_value__14597__auto__;
}
break;
}
});
cljs$core$async$state_machine__14596__auto__ = function(state_21264){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14596__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14596__auto____1.call(this,state_21264);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14596__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14596__auto____0;
cljs$core$async$state_machine__14596__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14596__auto____1;
return cljs$core$async$state_machine__14596__auto__;
})()
;})(switch__14595__auto__,c__14660__auto___21292))
})();
var state__14662__auto__ = (function (){var statearr_21287 = f__14661__auto__.call(null);
(statearr_21287[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14660__auto___21292);

return statearr_21287;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14662__auto__);
});})(c__14660__auto___21292))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;
cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"pos?","pos?",-244377722,null),new cljs.core.Symbol(null,"n","n",-2092305744,null))))].join('')));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__21492){
var vec__21493 = p__21492;
var v = cljs.core.nth.call(null,vec__21493,(0),null);
var p = cljs.core.nth.call(null,vec__21493,(1),null);
var job = vec__21493;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__14660__auto___21675 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__14660__auto___21675,res,vec__21493,v,p,job,jobs,results){
return (function (){
var f__14661__auto__ = (function (){var switch__14595__auto__ = ((function (c__14660__auto___21675,res,vec__21493,v,p,job,jobs,results){
return (function (state_21498){
var state_val_21499 = (state_21498[(1)]);
if((state_val_21499 === (1))){
var state_21498__$1 = state_21498;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21498__$1,(2),res,v);
} else {
if((state_val_21499 === (2))){
var inst_21495 = (state_21498[(2)]);
var inst_21496 = cljs.core.async.close_BANG_.call(null,res);
var state_21498__$1 = (function (){var statearr_21500 = state_21498;
(statearr_21500[(7)] = inst_21495);

return statearr_21500;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21498__$1,inst_21496);
} else {
return null;
}
}
});})(c__14660__auto___21675,res,vec__21493,v,p,job,jobs,results))
;
return ((function (switch__14595__auto__,c__14660__auto___21675,res,vec__21493,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__14596__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__14596__auto____0 = (function (){
var statearr_21504 = [null,null,null,null,null,null,null,null];
(statearr_21504[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__14596__auto__);

(statearr_21504[(1)] = (1));

return statearr_21504;
});
var cljs$core$async$pipeline_STAR__$_state_machine__14596__auto____1 = (function (state_21498){
while(true){
var ret_value__14597__auto__ = (function (){try{while(true){
var result__14598__auto__ = switch__14595__auto__.call(null,state_21498);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14598__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14598__auto__;
}
break;
}
}catch (e21505){if((e21505 instanceof Object)){
var ex__14599__auto__ = e21505;
var statearr_21506_21676 = state_21498;
(statearr_21506_21676[(5)] = ex__14599__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21498);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21505;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14597__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21677 = state_21498;
state_21498 = G__21677;
continue;
} else {
return ret_value__14597__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__14596__auto__ = function(state_21498){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__14596__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__14596__auto____1.call(this,state_21498);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__14596__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__14596__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__14596__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__14596__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__14596__auto__;
})()
;})(switch__14595__auto__,c__14660__auto___21675,res,vec__21493,v,p,job,jobs,results))
})();
var state__14662__auto__ = (function (){var statearr_21507 = f__14661__auto__.call(null);
(statearr_21507[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14660__auto___21675);

return statearr_21507;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14662__auto__);
});})(c__14660__auto___21675,res,vec__21493,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__21508){
var vec__21509 = p__21508;
var v = cljs.core.nth.call(null,vec__21509,(0),null);
var p = cljs.core.nth.call(null,vec__21509,(1),null);
var job = vec__21509;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__12483__auto___21678 = n;
var __21679 = (0);
while(true){
if((__21679 < n__12483__auto___21678)){
var G__21510_21680 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__21510_21680) {
case "compute":
var c__14660__auto___21682 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__21679,c__14660__auto___21682,G__21510_21680,n__12483__auto___21678,jobs,results,process,async){
return (function (){
var f__14661__auto__ = (function (){var switch__14595__auto__ = ((function (__21679,c__14660__auto___21682,G__21510_21680,n__12483__auto___21678,jobs,results,process,async){
return (function (state_21523){
var state_val_21524 = (state_21523[(1)]);
if((state_val_21524 === (1))){
var state_21523__$1 = state_21523;
var statearr_21525_21683 = state_21523__$1;
(statearr_21525_21683[(2)] = null);

(statearr_21525_21683[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21524 === (2))){
var state_21523__$1 = state_21523;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21523__$1,(4),jobs);
} else {
if((state_val_21524 === (3))){
var inst_21521 = (state_21523[(2)]);
var state_21523__$1 = state_21523;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21523__$1,inst_21521);
} else {
if((state_val_21524 === (4))){
var inst_21513 = (state_21523[(2)]);
var inst_21514 = process.call(null,inst_21513);
var state_21523__$1 = state_21523;
if(cljs.core.truth_(inst_21514)){
var statearr_21526_21684 = state_21523__$1;
(statearr_21526_21684[(1)] = (5));

} else {
var statearr_21527_21685 = state_21523__$1;
(statearr_21527_21685[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21524 === (5))){
var state_21523__$1 = state_21523;
var statearr_21528_21686 = state_21523__$1;
(statearr_21528_21686[(2)] = null);

(statearr_21528_21686[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21524 === (6))){
var state_21523__$1 = state_21523;
var statearr_21529_21687 = state_21523__$1;
(statearr_21529_21687[(2)] = null);

(statearr_21529_21687[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21524 === (7))){
var inst_21519 = (state_21523[(2)]);
var state_21523__$1 = state_21523;
var statearr_21530_21688 = state_21523__$1;
(statearr_21530_21688[(2)] = inst_21519);

(statearr_21530_21688[(1)] = (3));


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
});})(__21679,c__14660__auto___21682,G__21510_21680,n__12483__auto___21678,jobs,results,process,async))
;
return ((function (__21679,switch__14595__auto__,c__14660__auto___21682,G__21510_21680,n__12483__auto___21678,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__14596__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__14596__auto____0 = (function (){
var statearr_21534 = [null,null,null,null,null,null,null];
(statearr_21534[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__14596__auto__);

(statearr_21534[(1)] = (1));

return statearr_21534;
});
var cljs$core$async$pipeline_STAR__$_state_machine__14596__auto____1 = (function (state_21523){
while(true){
var ret_value__14597__auto__ = (function (){try{while(true){
var result__14598__auto__ = switch__14595__auto__.call(null,state_21523);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14598__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14598__auto__;
}
break;
}
}catch (e21535){if((e21535 instanceof Object)){
var ex__14599__auto__ = e21535;
var statearr_21536_21689 = state_21523;
(statearr_21536_21689[(5)] = ex__14599__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21523);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21535;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14597__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21690 = state_21523;
state_21523 = G__21690;
continue;
} else {
return ret_value__14597__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__14596__auto__ = function(state_21523){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__14596__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__14596__auto____1.call(this,state_21523);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__14596__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__14596__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__14596__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__14596__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__14596__auto__;
})()
;})(__21679,switch__14595__auto__,c__14660__auto___21682,G__21510_21680,n__12483__auto___21678,jobs,results,process,async))
})();
var state__14662__auto__ = (function (){var statearr_21537 = f__14661__auto__.call(null);
(statearr_21537[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14660__auto___21682);

return statearr_21537;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14662__auto__);
});})(__21679,c__14660__auto___21682,G__21510_21680,n__12483__auto___21678,jobs,results,process,async))
);


break;
case "async":
var c__14660__auto___21691 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__21679,c__14660__auto___21691,G__21510_21680,n__12483__auto___21678,jobs,results,process,async){
return (function (){
var f__14661__auto__ = (function (){var switch__14595__auto__ = ((function (__21679,c__14660__auto___21691,G__21510_21680,n__12483__auto___21678,jobs,results,process,async){
return (function (state_21550){
var state_val_21551 = (state_21550[(1)]);
if((state_val_21551 === (1))){
var state_21550__$1 = state_21550;
var statearr_21552_21692 = state_21550__$1;
(statearr_21552_21692[(2)] = null);

(statearr_21552_21692[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21551 === (2))){
var state_21550__$1 = state_21550;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21550__$1,(4),jobs);
} else {
if((state_val_21551 === (3))){
var inst_21548 = (state_21550[(2)]);
var state_21550__$1 = state_21550;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21550__$1,inst_21548);
} else {
if((state_val_21551 === (4))){
var inst_21540 = (state_21550[(2)]);
var inst_21541 = async.call(null,inst_21540);
var state_21550__$1 = state_21550;
if(cljs.core.truth_(inst_21541)){
var statearr_21553_21693 = state_21550__$1;
(statearr_21553_21693[(1)] = (5));

} else {
var statearr_21554_21694 = state_21550__$1;
(statearr_21554_21694[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21551 === (5))){
var state_21550__$1 = state_21550;
var statearr_21555_21695 = state_21550__$1;
(statearr_21555_21695[(2)] = null);

(statearr_21555_21695[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21551 === (6))){
var state_21550__$1 = state_21550;
var statearr_21556_21696 = state_21550__$1;
(statearr_21556_21696[(2)] = null);

(statearr_21556_21696[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21551 === (7))){
var inst_21546 = (state_21550[(2)]);
var state_21550__$1 = state_21550;
var statearr_21557_21697 = state_21550__$1;
(statearr_21557_21697[(2)] = inst_21546);

(statearr_21557_21697[(1)] = (3));


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
});})(__21679,c__14660__auto___21691,G__21510_21680,n__12483__auto___21678,jobs,results,process,async))
;
return ((function (__21679,switch__14595__auto__,c__14660__auto___21691,G__21510_21680,n__12483__auto___21678,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__14596__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__14596__auto____0 = (function (){
var statearr_21561 = [null,null,null,null,null,null,null];
(statearr_21561[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__14596__auto__);

(statearr_21561[(1)] = (1));

return statearr_21561;
});
var cljs$core$async$pipeline_STAR__$_state_machine__14596__auto____1 = (function (state_21550){
while(true){
var ret_value__14597__auto__ = (function (){try{while(true){
var result__14598__auto__ = switch__14595__auto__.call(null,state_21550);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14598__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14598__auto__;
}
break;
}
}catch (e21562){if((e21562 instanceof Object)){
var ex__14599__auto__ = e21562;
var statearr_21563_21698 = state_21550;
(statearr_21563_21698[(5)] = ex__14599__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21550);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21562;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14597__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21699 = state_21550;
state_21550 = G__21699;
continue;
} else {
return ret_value__14597__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__14596__auto__ = function(state_21550){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__14596__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__14596__auto____1.call(this,state_21550);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__14596__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__14596__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__14596__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__14596__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__14596__auto__;
})()
;})(__21679,switch__14595__auto__,c__14660__auto___21691,G__21510_21680,n__12483__auto___21678,jobs,results,process,async))
})();
var state__14662__auto__ = (function (){var statearr_21564 = f__14661__auto__.call(null);
(statearr_21564[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14660__auto___21691);

return statearr_21564;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14662__auto__);
});})(__21679,c__14660__auto___21691,G__21510_21680,n__12483__auto___21678,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__21700 = (__21679 + (1));
__21679 = G__21700;
continue;
} else {
}
break;
}

var c__14660__auto___21701 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__14660__auto___21701,jobs,results,process,async){
return (function (){
var f__14661__auto__ = (function (){var switch__14595__auto__ = ((function (c__14660__auto___21701,jobs,results,process,async){
return (function (state_21586){
var state_val_21587 = (state_21586[(1)]);
if((state_val_21587 === (1))){
var state_21586__$1 = state_21586;
var statearr_21588_21702 = state_21586__$1;
(statearr_21588_21702[(2)] = null);

(statearr_21588_21702[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21587 === (2))){
var state_21586__$1 = state_21586;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21586__$1,(4),from);
} else {
if((state_val_21587 === (3))){
var inst_21584 = (state_21586[(2)]);
var state_21586__$1 = state_21586;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21586__$1,inst_21584);
} else {
if((state_val_21587 === (4))){
var inst_21567 = (state_21586[(7)]);
var inst_21567__$1 = (state_21586[(2)]);
var inst_21568 = (inst_21567__$1 == null);
var state_21586__$1 = (function (){var statearr_21589 = state_21586;
(statearr_21589[(7)] = inst_21567__$1);

return statearr_21589;
})();
if(cljs.core.truth_(inst_21568)){
var statearr_21590_21703 = state_21586__$1;
(statearr_21590_21703[(1)] = (5));

} else {
var statearr_21591_21704 = state_21586__$1;
(statearr_21591_21704[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21587 === (5))){
var inst_21570 = cljs.core.async.close_BANG_.call(null,jobs);
var state_21586__$1 = state_21586;
var statearr_21592_21705 = state_21586__$1;
(statearr_21592_21705[(2)] = inst_21570);

(statearr_21592_21705[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21587 === (6))){
var inst_21572 = (state_21586[(8)]);
var inst_21567 = (state_21586[(7)]);
var inst_21572__$1 = cljs.core.async.chan.call(null,(1));
var inst_21573 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_21574 = [inst_21567,inst_21572__$1];
var inst_21575 = (new cljs.core.PersistentVector(null,2,(5),inst_21573,inst_21574,null));
var state_21586__$1 = (function (){var statearr_21593 = state_21586;
(statearr_21593[(8)] = inst_21572__$1);

return statearr_21593;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21586__$1,(8),jobs,inst_21575);
} else {
if((state_val_21587 === (7))){
var inst_21582 = (state_21586[(2)]);
var state_21586__$1 = state_21586;
var statearr_21594_21706 = state_21586__$1;
(statearr_21594_21706[(2)] = inst_21582);

(statearr_21594_21706[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21587 === (8))){
var inst_21572 = (state_21586[(8)]);
var inst_21577 = (state_21586[(2)]);
var state_21586__$1 = (function (){var statearr_21595 = state_21586;
(statearr_21595[(9)] = inst_21577);

return statearr_21595;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21586__$1,(9),results,inst_21572);
} else {
if((state_val_21587 === (9))){
var inst_21579 = (state_21586[(2)]);
var state_21586__$1 = (function (){var statearr_21596 = state_21586;
(statearr_21596[(10)] = inst_21579);

return statearr_21596;
})();
var statearr_21597_21707 = state_21586__$1;
(statearr_21597_21707[(2)] = null);

(statearr_21597_21707[(1)] = (2));


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
});})(c__14660__auto___21701,jobs,results,process,async))
;
return ((function (switch__14595__auto__,c__14660__auto___21701,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__14596__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__14596__auto____0 = (function (){
var statearr_21601 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_21601[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__14596__auto__);

(statearr_21601[(1)] = (1));

return statearr_21601;
});
var cljs$core$async$pipeline_STAR__$_state_machine__14596__auto____1 = (function (state_21586){
while(true){
var ret_value__14597__auto__ = (function (){try{while(true){
var result__14598__auto__ = switch__14595__auto__.call(null,state_21586);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14598__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14598__auto__;
}
break;
}
}catch (e21602){if((e21602 instanceof Object)){
var ex__14599__auto__ = e21602;
var statearr_21603_21708 = state_21586;
(statearr_21603_21708[(5)] = ex__14599__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21586);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21602;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14597__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21709 = state_21586;
state_21586 = G__21709;
continue;
} else {
return ret_value__14597__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__14596__auto__ = function(state_21586){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__14596__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__14596__auto____1.call(this,state_21586);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__14596__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__14596__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__14596__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__14596__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__14596__auto__;
})()
;})(switch__14595__auto__,c__14660__auto___21701,jobs,results,process,async))
})();
var state__14662__auto__ = (function (){var statearr_21604 = f__14661__auto__.call(null);
(statearr_21604[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14660__auto___21701);

return statearr_21604;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14662__auto__);
});})(c__14660__auto___21701,jobs,results,process,async))
);


var c__14660__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__14660__auto__,jobs,results,process,async){
return (function (){
var f__14661__auto__ = (function (){var switch__14595__auto__ = ((function (c__14660__auto__,jobs,results,process,async){
return (function (state_21642){
var state_val_21643 = (state_21642[(1)]);
if((state_val_21643 === (7))){
var inst_21638 = (state_21642[(2)]);
var state_21642__$1 = state_21642;
var statearr_21644_21710 = state_21642__$1;
(statearr_21644_21710[(2)] = inst_21638);

(statearr_21644_21710[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21643 === (20))){
var state_21642__$1 = state_21642;
var statearr_21645_21711 = state_21642__$1;
(statearr_21645_21711[(2)] = null);

(statearr_21645_21711[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21643 === (1))){
var state_21642__$1 = state_21642;
var statearr_21646_21712 = state_21642__$1;
(statearr_21646_21712[(2)] = null);

(statearr_21646_21712[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21643 === (4))){
var inst_21607 = (state_21642[(7)]);
var inst_21607__$1 = (state_21642[(2)]);
var inst_21608 = (inst_21607__$1 == null);
var state_21642__$1 = (function (){var statearr_21647 = state_21642;
(statearr_21647[(7)] = inst_21607__$1);

return statearr_21647;
})();
if(cljs.core.truth_(inst_21608)){
var statearr_21648_21713 = state_21642__$1;
(statearr_21648_21713[(1)] = (5));

} else {
var statearr_21649_21714 = state_21642__$1;
(statearr_21649_21714[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21643 === (15))){
var inst_21620 = (state_21642[(8)]);
var state_21642__$1 = state_21642;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21642__$1,(18),to,inst_21620);
} else {
if((state_val_21643 === (21))){
var inst_21633 = (state_21642[(2)]);
var state_21642__$1 = state_21642;
var statearr_21650_21715 = state_21642__$1;
(statearr_21650_21715[(2)] = inst_21633);

(statearr_21650_21715[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21643 === (13))){
var inst_21635 = (state_21642[(2)]);
var state_21642__$1 = (function (){var statearr_21651 = state_21642;
(statearr_21651[(9)] = inst_21635);

return statearr_21651;
})();
var statearr_21652_21716 = state_21642__$1;
(statearr_21652_21716[(2)] = null);

(statearr_21652_21716[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21643 === (6))){
var inst_21607 = (state_21642[(7)]);
var state_21642__$1 = state_21642;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21642__$1,(11),inst_21607);
} else {
if((state_val_21643 === (17))){
var inst_21628 = (state_21642[(2)]);
var state_21642__$1 = state_21642;
if(cljs.core.truth_(inst_21628)){
var statearr_21653_21717 = state_21642__$1;
(statearr_21653_21717[(1)] = (19));

} else {
var statearr_21654_21718 = state_21642__$1;
(statearr_21654_21718[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21643 === (3))){
var inst_21640 = (state_21642[(2)]);
var state_21642__$1 = state_21642;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21642__$1,inst_21640);
} else {
if((state_val_21643 === (12))){
var inst_21617 = (state_21642[(10)]);
var state_21642__$1 = state_21642;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21642__$1,(14),inst_21617);
} else {
if((state_val_21643 === (2))){
var state_21642__$1 = state_21642;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21642__$1,(4),results);
} else {
if((state_val_21643 === (19))){
var state_21642__$1 = state_21642;
var statearr_21655_21719 = state_21642__$1;
(statearr_21655_21719[(2)] = null);

(statearr_21655_21719[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21643 === (11))){
var inst_21617 = (state_21642[(2)]);
var state_21642__$1 = (function (){var statearr_21656 = state_21642;
(statearr_21656[(10)] = inst_21617);

return statearr_21656;
})();
var statearr_21657_21720 = state_21642__$1;
(statearr_21657_21720[(2)] = null);

(statearr_21657_21720[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21643 === (9))){
var state_21642__$1 = state_21642;
var statearr_21658_21721 = state_21642__$1;
(statearr_21658_21721[(2)] = null);

(statearr_21658_21721[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21643 === (5))){
var state_21642__$1 = state_21642;
if(cljs.core.truth_(close_QMARK_)){
var statearr_21659_21722 = state_21642__$1;
(statearr_21659_21722[(1)] = (8));

} else {
var statearr_21660_21723 = state_21642__$1;
(statearr_21660_21723[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21643 === (14))){
var inst_21620 = (state_21642[(8)]);
var inst_21622 = (state_21642[(11)]);
var inst_21620__$1 = (state_21642[(2)]);
var inst_21621 = (inst_21620__$1 == null);
var inst_21622__$1 = cljs.core.not.call(null,inst_21621);
var state_21642__$1 = (function (){var statearr_21661 = state_21642;
(statearr_21661[(8)] = inst_21620__$1);

(statearr_21661[(11)] = inst_21622__$1);

return statearr_21661;
})();
if(inst_21622__$1){
var statearr_21662_21724 = state_21642__$1;
(statearr_21662_21724[(1)] = (15));

} else {
var statearr_21663_21725 = state_21642__$1;
(statearr_21663_21725[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21643 === (16))){
var inst_21622 = (state_21642[(11)]);
var state_21642__$1 = state_21642;
var statearr_21664_21726 = state_21642__$1;
(statearr_21664_21726[(2)] = inst_21622);

(statearr_21664_21726[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21643 === (10))){
var inst_21614 = (state_21642[(2)]);
var state_21642__$1 = state_21642;
var statearr_21665_21727 = state_21642__$1;
(statearr_21665_21727[(2)] = inst_21614);

(statearr_21665_21727[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21643 === (18))){
var inst_21625 = (state_21642[(2)]);
var state_21642__$1 = state_21642;
var statearr_21666_21728 = state_21642__$1;
(statearr_21666_21728[(2)] = inst_21625);

(statearr_21666_21728[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21643 === (8))){
var inst_21611 = cljs.core.async.close_BANG_.call(null,to);
var state_21642__$1 = state_21642;
var statearr_21667_21729 = state_21642__$1;
(statearr_21667_21729[(2)] = inst_21611);

(statearr_21667_21729[(1)] = (10));


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
});})(c__14660__auto__,jobs,results,process,async))
;
return ((function (switch__14595__auto__,c__14660__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__14596__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__14596__auto____0 = (function (){
var statearr_21671 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21671[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__14596__auto__);

(statearr_21671[(1)] = (1));

return statearr_21671;
});
var cljs$core$async$pipeline_STAR__$_state_machine__14596__auto____1 = (function (state_21642){
while(true){
var ret_value__14597__auto__ = (function (){try{while(true){
var result__14598__auto__ = switch__14595__auto__.call(null,state_21642);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14598__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14598__auto__;
}
break;
}
}catch (e21672){if((e21672 instanceof Object)){
var ex__14599__auto__ = e21672;
var statearr_21673_21730 = state_21642;
(statearr_21673_21730[(5)] = ex__14599__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21642);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21672;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14597__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21731 = state_21642;
state_21642 = G__21731;
continue;
} else {
return ret_value__14597__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__14596__auto__ = function(state_21642){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__14596__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__14596__auto____1.call(this,state_21642);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__14596__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__14596__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__14596__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__14596__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__14596__auto__;
})()
;})(switch__14595__auto__,c__14660__auto__,jobs,results,process,async))
})();
var state__14662__auto__ = (function (){var statearr_21674 = f__14661__auto__.call(null);
(statearr_21674[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14660__auto__);

return statearr_21674;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14662__auto__);
});})(c__14660__auto__,jobs,results,process,async))
);

return c__14660__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var args21732 = [];
var len__12638__auto___21735 = arguments.length;
var i__12639__auto___21736 = (0);
while(true){
if((i__12639__auto___21736 < len__12638__auto___21735)){
args21732.push((arguments[i__12639__auto___21736]));

var G__21737 = (i__12639__auto___21736 + (1));
i__12639__auto___21736 = G__21737;
continue;
} else {
}
break;
}

var G__21734 = args21732.length;
switch (G__21734) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21732.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var args21739 = [];
var len__12638__auto___21742 = arguments.length;
var i__12639__auto___21743 = (0);
while(true){
if((i__12639__auto___21743 < len__12638__auto___21742)){
args21739.push((arguments[i__12639__auto___21743]));

var G__21744 = (i__12639__auto___21743 + (1));
i__12639__auto___21743 = G__21744;
continue;
} else {
}
break;
}

var G__21741 = args21739.length;
switch (G__21741) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21739.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;
/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var args21746 = [];
var len__12638__auto___21799 = arguments.length;
var i__12639__auto___21800 = (0);
while(true){
if((i__12639__auto___21800 < len__12638__auto___21799)){
args21746.push((arguments[i__12639__auto___21800]));

var G__21801 = (i__12639__auto___21800 + (1));
i__12639__auto___21800 = G__21801;
continue;
} else {
}
break;
}

var G__21748 = args21746.length;
switch (G__21748) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21746.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__14660__auto___21803 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__14660__auto___21803,tc,fc){
return (function (){
var f__14661__auto__ = (function (){var switch__14595__auto__ = ((function (c__14660__auto___21803,tc,fc){
return (function (state_21774){
var state_val_21775 = (state_21774[(1)]);
if((state_val_21775 === (7))){
var inst_21770 = (state_21774[(2)]);
var state_21774__$1 = state_21774;
var statearr_21776_21804 = state_21774__$1;
(statearr_21776_21804[(2)] = inst_21770);

(statearr_21776_21804[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21775 === (1))){
var state_21774__$1 = state_21774;
var statearr_21777_21805 = state_21774__$1;
(statearr_21777_21805[(2)] = null);

(statearr_21777_21805[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21775 === (4))){
var inst_21751 = (state_21774[(7)]);
var inst_21751__$1 = (state_21774[(2)]);
var inst_21752 = (inst_21751__$1 == null);
var state_21774__$1 = (function (){var statearr_21778 = state_21774;
(statearr_21778[(7)] = inst_21751__$1);

return statearr_21778;
})();
if(cljs.core.truth_(inst_21752)){
var statearr_21779_21806 = state_21774__$1;
(statearr_21779_21806[(1)] = (5));

} else {
var statearr_21780_21807 = state_21774__$1;
(statearr_21780_21807[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21775 === (13))){
var state_21774__$1 = state_21774;
var statearr_21781_21808 = state_21774__$1;
(statearr_21781_21808[(2)] = null);

(statearr_21781_21808[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21775 === (6))){
var inst_21751 = (state_21774[(7)]);
var inst_21757 = p.call(null,inst_21751);
var state_21774__$1 = state_21774;
if(cljs.core.truth_(inst_21757)){
var statearr_21782_21809 = state_21774__$1;
(statearr_21782_21809[(1)] = (9));

} else {
var statearr_21783_21810 = state_21774__$1;
(statearr_21783_21810[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21775 === (3))){
var inst_21772 = (state_21774[(2)]);
var state_21774__$1 = state_21774;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21774__$1,inst_21772);
} else {
if((state_val_21775 === (12))){
var state_21774__$1 = state_21774;
var statearr_21784_21811 = state_21774__$1;
(statearr_21784_21811[(2)] = null);

(statearr_21784_21811[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21775 === (2))){
var state_21774__$1 = state_21774;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21774__$1,(4),ch);
} else {
if((state_val_21775 === (11))){
var inst_21751 = (state_21774[(7)]);
var inst_21761 = (state_21774[(2)]);
var state_21774__$1 = state_21774;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21774__$1,(8),inst_21761,inst_21751);
} else {
if((state_val_21775 === (9))){
var state_21774__$1 = state_21774;
var statearr_21785_21812 = state_21774__$1;
(statearr_21785_21812[(2)] = tc);

(statearr_21785_21812[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21775 === (5))){
var inst_21754 = cljs.core.async.close_BANG_.call(null,tc);
var inst_21755 = cljs.core.async.close_BANG_.call(null,fc);
var state_21774__$1 = (function (){var statearr_21786 = state_21774;
(statearr_21786[(8)] = inst_21754);

return statearr_21786;
})();
var statearr_21787_21813 = state_21774__$1;
(statearr_21787_21813[(2)] = inst_21755);

(statearr_21787_21813[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21775 === (14))){
var inst_21768 = (state_21774[(2)]);
var state_21774__$1 = state_21774;
var statearr_21788_21814 = state_21774__$1;
(statearr_21788_21814[(2)] = inst_21768);

(statearr_21788_21814[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21775 === (10))){
var state_21774__$1 = state_21774;
var statearr_21789_21815 = state_21774__$1;
(statearr_21789_21815[(2)] = fc);

(statearr_21789_21815[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21775 === (8))){
var inst_21763 = (state_21774[(2)]);
var state_21774__$1 = state_21774;
if(cljs.core.truth_(inst_21763)){
var statearr_21790_21816 = state_21774__$1;
(statearr_21790_21816[(1)] = (12));

} else {
var statearr_21791_21817 = state_21774__$1;
(statearr_21791_21817[(1)] = (13));

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
});})(c__14660__auto___21803,tc,fc))
;
return ((function (switch__14595__auto__,c__14660__auto___21803,tc,fc){
return (function() {
var cljs$core$async$state_machine__14596__auto__ = null;
var cljs$core$async$state_machine__14596__auto____0 = (function (){
var statearr_21795 = [null,null,null,null,null,null,null,null,null];
(statearr_21795[(0)] = cljs$core$async$state_machine__14596__auto__);

(statearr_21795[(1)] = (1));

return statearr_21795;
});
var cljs$core$async$state_machine__14596__auto____1 = (function (state_21774){
while(true){
var ret_value__14597__auto__ = (function (){try{while(true){
var result__14598__auto__ = switch__14595__auto__.call(null,state_21774);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14598__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14598__auto__;
}
break;
}
}catch (e21796){if((e21796 instanceof Object)){
var ex__14599__auto__ = e21796;
var statearr_21797_21818 = state_21774;
(statearr_21797_21818[(5)] = ex__14599__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21774);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21796;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14597__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21819 = state_21774;
state_21774 = G__21819;
continue;
} else {
return ret_value__14597__auto__;
}
break;
}
});
cljs$core$async$state_machine__14596__auto__ = function(state_21774){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14596__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14596__auto____1.call(this,state_21774);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14596__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14596__auto____0;
cljs$core$async$state_machine__14596__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14596__auto____1;
return cljs$core$async$state_machine__14596__auto__;
})()
;})(switch__14595__auto__,c__14660__auto___21803,tc,fc))
})();
var state__14662__auto__ = (function (){var statearr_21798 = f__14661__auto__.call(null);
(statearr_21798[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14660__auto___21803);

return statearr_21798;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14662__auto__);
});})(c__14660__auto___21803,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;
/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__14660__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__14660__auto__){
return (function (){
var f__14661__auto__ = (function (){var switch__14595__auto__ = ((function (c__14660__auto__){
return (function (state_21866){
var state_val_21867 = (state_21866[(1)]);
if((state_val_21867 === (1))){
var inst_21852 = init;
var state_21866__$1 = (function (){var statearr_21868 = state_21866;
(statearr_21868[(7)] = inst_21852);

return statearr_21868;
})();
var statearr_21869_21884 = state_21866__$1;
(statearr_21869_21884[(2)] = null);

(statearr_21869_21884[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21867 === (2))){
var state_21866__$1 = state_21866;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21866__$1,(4),ch);
} else {
if((state_val_21867 === (3))){
var inst_21864 = (state_21866[(2)]);
var state_21866__$1 = state_21866;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21866__$1,inst_21864);
} else {
if((state_val_21867 === (4))){
var inst_21855 = (state_21866[(8)]);
var inst_21855__$1 = (state_21866[(2)]);
var inst_21856 = (inst_21855__$1 == null);
var state_21866__$1 = (function (){var statearr_21870 = state_21866;
(statearr_21870[(8)] = inst_21855__$1);

return statearr_21870;
})();
if(cljs.core.truth_(inst_21856)){
var statearr_21871_21885 = state_21866__$1;
(statearr_21871_21885[(1)] = (5));

} else {
var statearr_21872_21886 = state_21866__$1;
(statearr_21872_21886[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21867 === (5))){
var inst_21852 = (state_21866[(7)]);
var state_21866__$1 = state_21866;
var statearr_21873_21887 = state_21866__$1;
(statearr_21873_21887[(2)] = inst_21852);

(statearr_21873_21887[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21867 === (6))){
var inst_21855 = (state_21866[(8)]);
var inst_21852 = (state_21866[(7)]);
var inst_21859 = f.call(null,inst_21852,inst_21855);
var inst_21852__$1 = inst_21859;
var state_21866__$1 = (function (){var statearr_21874 = state_21866;
(statearr_21874[(7)] = inst_21852__$1);

return statearr_21874;
})();
var statearr_21875_21888 = state_21866__$1;
(statearr_21875_21888[(2)] = null);

(statearr_21875_21888[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21867 === (7))){
var inst_21862 = (state_21866[(2)]);
var state_21866__$1 = state_21866;
var statearr_21876_21889 = state_21866__$1;
(statearr_21876_21889[(2)] = inst_21862);

(statearr_21876_21889[(1)] = (3));


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
});})(c__14660__auto__))
;
return ((function (switch__14595__auto__,c__14660__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__14596__auto__ = null;
var cljs$core$async$reduce_$_state_machine__14596__auto____0 = (function (){
var statearr_21880 = [null,null,null,null,null,null,null,null,null];
(statearr_21880[(0)] = cljs$core$async$reduce_$_state_machine__14596__auto__);

(statearr_21880[(1)] = (1));

return statearr_21880;
});
var cljs$core$async$reduce_$_state_machine__14596__auto____1 = (function (state_21866){
while(true){
var ret_value__14597__auto__ = (function (){try{while(true){
var result__14598__auto__ = switch__14595__auto__.call(null,state_21866);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14598__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14598__auto__;
}
break;
}
}catch (e21881){if((e21881 instanceof Object)){
var ex__14599__auto__ = e21881;
var statearr_21882_21890 = state_21866;
(statearr_21882_21890[(5)] = ex__14599__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21866);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21881;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14597__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21891 = state_21866;
state_21866 = G__21891;
continue;
} else {
return ret_value__14597__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__14596__auto__ = function(state_21866){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__14596__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__14596__auto____1.call(this,state_21866);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__14596__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__14596__auto____0;
cljs$core$async$reduce_$_state_machine__14596__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__14596__auto____1;
return cljs$core$async$reduce_$_state_machine__14596__auto__;
})()
;})(switch__14595__auto__,c__14660__auto__))
})();
var state__14662__auto__ = (function (){var statearr_21883 = f__14661__auto__.call(null);
(statearr_21883[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14660__auto__);

return statearr_21883;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14662__auto__);
});})(c__14660__auto__))
);

return c__14660__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var args21892 = [];
var len__12638__auto___21944 = arguments.length;
var i__12639__auto___21945 = (0);
while(true){
if((i__12639__auto___21945 < len__12638__auto___21944)){
args21892.push((arguments[i__12639__auto___21945]));

var G__21946 = (i__12639__auto___21945 + (1));
i__12639__auto___21945 = G__21946;
continue;
} else {
}
break;
}

var G__21894 = args21892.length;
switch (G__21894) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21892.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__14660__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__14660__auto__){
return (function (){
var f__14661__auto__ = (function (){var switch__14595__auto__ = ((function (c__14660__auto__){
return (function (state_21919){
var state_val_21920 = (state_21919[(1)]);
if((state_val_21920 === (7))){
var inst_21901 = (state_21919[(2)]);
var state_21919__$1 = state_21919;
var statearr_21921_21948 = state_21919__$1;
(statearr_21921_21948[(2)] = inst_21901);

(statearr_21921_21948[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21920 === (1))){
var inst_21895 = cljs.core.seq.call(null,coll);
var inst_21896 = inst_21895;
var state_21919__$1 = (function (){var statearr_21922 = state_21919;
(statearr_21922[(7)] = inst_21896);

return statearr_21922;
})();
var statearr_21923_21949 = state_21919__$1;
(statearr_21923_21949[(2)] = null);

(statearr_21923_21949[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21920 === (4))){
var inst_21896 = (state_21919[(7)]);
var inst_21899 = cljs.core.first.call(null,inst_21896);
var state_21919__$1 = state_21919;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21919__$1,(7),ch,inst_21899);
} else {
if((state_val_21920 === (13))){
var inst_21913 = (state_21919[(2)]);
var state_21919__$1 = state_21919;
var statearr_21924_21950 = state_21919__$1;
(statearr_21924_21950[(2)] = inst_21913);

(statearr_21924_21950[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21920 === (6))){
var inst_21904 = (state_21919[(2)]);
var state_21919__$1 = state_21919;
if(cljs.core.truth_(inst_21904)){
var statearr_21925_21951 = state_21919__$1;
(statearr_21925_21951[(1)] = (8));

} else {
var statearr_21926_21952 = state_21919__$1;
(statearr_21926_21952[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21920 === (3))){
var inst_21917 = (state_21919[(2)]);
var state_21919__$1 = state_21919;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21919__$1,inst_21917);
} else {
if((state_val_21920 === (12))){
var state_21919__$1 = state_21919;
var statearr_21927_21953 = state_21919__$1;
(statearr_21927_21953[(2)] = null);

(statearr_21927_21953[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21920 === (2))){
var inst_21896 = (state_21919[(7)]);
var state_21919__$1 = state_21919;
if(cljs.core.truth_(inst_21896)){
var statearr_21928_21954 = state_21919__$1;
(statearr_21928_21954[(1)] = (4));

} else {
var statearr_21929_21955 = state_21919__$1;
(statearr_21929_21955[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21920 === (11))){
var inst_21910 = cljs.core.async.close_BANG_.call(null,ch);
var state_21919__$1 = state_21919;
var statearr_21930_21956 = state_21919__$1;
(statearr_21930_21956[(2)] = inst_21910);

(statearr_21930_21956[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21920 === (9))){
var state_21919__$1 = state_21919;
if(cljs.core.truth_(close_QMARK_)){
var statearr_21931_21957 = state_21919__$1;
(statearr_21931_21957[(1)] = (11));

} else {
var statearr_21932_21958 = state_21919__$1;
(statearr_21932_21958[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21920 === (5))){
var inst_21896 = (state_21919[(7)]);
var state_21919__$1 = state_21919;
var statearr_21933_21959 = state_21919__$1;
(statearr_21933_21959[(2)] = inst_21896);

(statearr_21933_21959[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21920 === (10))){
var inst_21915 = (state_21919[(2)]);
var state_21919__$1 = state_21919;
var statearr_21934_21960 = state_21919__$1;
(statearr_21934_21960[(2)] = inst_21915);

(statearr_21934_21960[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21920 === (8))){
var inst_21896 = (state_21919[(7)]);
var inst_21906 = cljs.core.next.call(null,inst_21896);
var inst_21896__$1 = inst_21906;
var state_21919__$1 = (function (){var statearr_21935 = state_21919;
(statearr_21935[(7)] = inst_21896__$1);

return statearr_21935;
})();
var statearr_21936_21961 = state_21919__$1;
(statearr_21936_21961[(2)] = null);

(statearr_21936_21961[(1)] = (2));


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
});})(c__14660__auto__))
;
return ((function (switch__14595__auto__,c__14660__auto__){
return (function() {
var cljs$core$async$state_machine__14596__auto__ = null;
var cljs$core$async$state_machine__14596__auto____0 = (function (){
var statearr_21940 = [null,null,null,null,null,null,null,null];
(statearr_21940[(0)] = cljs$core$async$state_machine__14596__auto__);

(statearr_21940[(1)] = (1));

return statearr_21940;
});
var cljs$core$async$state_machine__14596__auto____1 = (function (state_21919){
while(true){
var ret_value__14597__auto__ = (function (){try{while(true){
var result__14598__auto__ = switch__14595__auto__.call(null,state_21919);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14598__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14598__auto__;
}
break;
}
}catch (e21941){if((e21941 instanceof Object)){
var ex__14599__auto__ = e21941;
var statearr_21942_21962 = state_21919;
(statearr_21942_21962[(5)] = ex__14599__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21919);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21941;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14597__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21963 = state_21919;
state_21919 = G__21963;
continue;
} else {
return ret_value__14597__auto__;
}
break;
}
});
cljs$core$async$state_machine__14596__auto__ = function(state_21919){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14596__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14596__auto____1.call(this,state_21919);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14596__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14596__auto____0;
cljs$core$async$state_machine__14596__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14596__auto____1;
return cljs$core$async$state_machine__14596__auto__;
})()
;})(switch__14595__auto__,c__14660__auto__))
})();
var state__14662__auto__ = (function (){var statearr_21943 = f__14661__auto__.call(null);
(statearr_21943[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14660__auto__);

return statearr_21943;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14662__auto__);
});})(c__14660__auto__))
);

return c__14660__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__12235__auto__ = (((_ == null))?null:_);
var m__12236__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__12235__auto__)]);
if(!((m__12236__auto__ == null))){
return m__12236__auto__.call(null,_);
} else {
var m__12236__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__12236__auto____$1 == null))){
return m__12236__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__12235__auto__ = (((m == null))?null:m);
var m__12236__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__12235__auto__)]);
if(!((m__12236__auto__ == null))){
return m__12236__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__12236__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__12236__auto____$1 == null))){
return m__12236__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__12235__auto__ = (((m == null))?null:m);
var m__12236__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__12235__auto__)]);
if(!((m__12236__auto__ == null))){
return m__12236__auto__.call(null,m,ch);
} else {
var m__12236__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__12236__auto____$1 == null))){
return m__12236__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__12235__auto__ = (((m == null))?null:m);
var m__12236__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__12235__auto__)]);
if(!((m__12236__auto__ == null))){
return m__12236__auto__.call(null,m);
} else {
var m__12236__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__12236__auto____$1 == null))){
return m__12236__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async22185 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22185 = (function (mult,ch,cs,meta22186){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta22186 = meta22186;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async22185.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_22187,meta22186__$1){
var self__ = this;
var _22187__$1 = this;
return (new cljs.core.async.t_cljs$core$async22185(self__.mult,self__.ch,self__.cs,meta22186__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async22185.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_22187){
var self__ = this;
var _22187__$1 = this;
return self__.meta22186;
});})(cs))
;

cljs.core.async.t_cljs$core$async22185.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async22185.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async22185.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async22185.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async22185.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async22185.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async22185.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta22186","meta22186",-1880693300,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async22185.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22185.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22185";

cljs.core.async.t_cljs$core$async22185.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__12178__auto__,writer__12179__auto__,opt__12180__auto__){
return cljs.core._write.call(null,writer__12179__auto__,"cljs.core.async/t_cljs$core$async22185");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async22185 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async22185(mult__$1,ch__$1,cs__$1,meta22186){
return (new cljs.core.async.t_cljs$core$async22185(mult__$1,ch__$1,cs__$1,meta22186));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async22185(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__14660__auto___22406 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__14660__auto___22406,cs,m,dchan,dctr,done){
return (function (){
var f__14661__auto__ = (function (){var switch__14595__auto__ = ((function (c__14660__auto___22406,cs,m,dchan,dctr,done){
return (function (state_22318){
var state_val_22319 = (state_22318[(1)]);
if((state_val_22319 === (7))){
var inst_22314 = (state_22318[(2)]);
var state_22318__$1 = state_22318;
var statearr_22320_22407 = state_22318__$1;
(statearr_22320_22407[(2)] = inst_22314);

(statearr_22320_22407[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22319 === (20))){
var inst_22219 = (state_22318[(7)]);
var inst_22229 = cljs.core.first.call(null,inst_22219);
var inst_22230 = cljs.core.nth.call(null,inst_22229,(0),null);
var inst_22231 = cljs.core.nth.call(null,inst_22229,(1),null);
var state_22318__$1 = (function (){var statearr_22321 = state_22318;
(statearr_22321[(8)] = inst_22230);

return statearr_22321;
})();
if(cljs.core.truth_(inst_22231)){
var statearr_22322_22408 = state_22318__$1;
(statearr_22322_22408[(1)] = (22));

} else {
var statearr_22323_22409 = state_22318__$1;
(statearr_22323_22409[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22319 === (27))){
var inst_22261 = (state_22318[(9)]);
var inst_22190 = (state_22318[(10)]);
var inst_22259 = (state_22318[(11)]);
var inst_22266 = (state_22318[(12)]);
var inst_22266__$1 = cljs.core._nth.call(null,inst_22259,inst_22261);
var inst_22267 = cljs.core.async.put_BANG_.call(null,inst_22266__$1,inst_22190,done);
var state_22318__$1 = (function (){var statearr_22324 = state_22318;
(statearr_22324[(12)] = inst_22266__$1);

return statearr_22324;
})();
if(cljs.core.truth_(inst_22267)){
var statearr_22325_22410 = state_22318__$1;
(statearr_22325_22410[(1)] = (30));

} else {
var statearr_22326_22411 = state_22318__$1;
(statearr_22326_22411[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22319 === (1))){
var state_22318__$1 = state_22318;
var statearr_22327_22412 = state_22318__$1;
(statearr_22327_22412[(2)] = null);

(statearr_22327_22412[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22319 === (24))){
var inst_22219 = (state_22318[(7)]);
var inst_22236 = (state_22318[(2)]);
var inst_22237 = cljs.core.next.call(null,inst_22219);
var inst_22199 = inst_22237;
var inst_22200 = null;
var inst_22201 = (0);
var inst_22202 = (0);
var state_22318__$1 = (function (){var statearr_22328 = state_22318;
(statearr_22328[(13)] = inst_22202);

(statearr_22328[(14)] = inst_22236);

(statearr_22328[(15)] = inst_22200);

(statearr_22328[(16)] = inst_22199);

(statearr_22328[(17)] = inst_22201);

return statearr_22328;
})();
var statearr_22329_22413 = state_22318__$1;
(statearr_22329_22413[(2)] = null);

(statearr_22329_22413[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22319 === (39))){
var state_22318__$1 = state_22318;
var statearr_22333_22414 = state_22318__$1;
(statearr_22333_22414[(2)] = null);

(statearr_22333_22414[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22319 === (4))){
var inst_22190 = (state_22318[(10)]);
var inst_22190__$1 = (state_22318[(2)]);
var inst_22191 = (inst_22190__$1 == null);
var state_22318__$1 = (function (){var statearr_22334 = state_22318;
(statearr_22334[(10)] = inst_22190__$1);

return statearr_22334;
})();
if(cljs.core.truth_(inst_22191)){
var statearr_22335_22415 = state_22318__$1;
(statearr_22335_22415[(1)] = (5));

} else {
var statearr_22336_22416 = state_22318__$1;
(statearr_22336_22416[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22319 === (15))){
var inst_22202 = (state_22318[(13)]);
var inst_22200 = (state_22318[(15)]);
var inst_22199 = (state_22318[(16)]);
var inst_22201 = (state_22318[(17)]);
var inst_22215 = (state_22318[(2)]);
var inst_22216 = (inst_22202 + (1));
var tmp22330 = inst_22200;
var tmp22331 = inst_22199;
var tmp22332 = inst_22201;
var inst_22199__$1 = tmp22331;
var inst_22200__$1 = tmp22330;
var inst_22201__$1 = tmp22332;
var inst_22202__$1 = inst_22216;
var state_22318__$1 = (function (){var statearr_22337 = state_22318;
(statearr_22337[(13)] = inst_22202__$1);

(statearr_22337[(15)] = inst_22200__$1);

(statearr_22337[(16)] = inst_22199__$1);

(statearr_22337[(18)] = inst_22215);

(statearr_22337[(17)] = inst_22201__$1);

return statearr_22337;
})();
var statearr_22338_22417 = state_22318__$1;
(statearr_22338_22417[(2)] = null);

(statearr_22338_22417[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22319 === (21))){
var inst_22240 = (state_22318[(2)]);
var state_22318__$1 = state_22318;
var statearr_22342_22418 = state_22318__$1;
(statearr_22342_22418[(2)] = inst_22240);

(statearr_22342_22418[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22319 === (31))){
var inst_22266 = (state_22318[(12)]);
var inst_22270 = done.call(null,null);
var inst_22271 = cljs.core.async.untap_STAR_.call(null,m,inst_22266);
var state_22318__$1 = (function (){var statearr_22343 = state_22318;
(statearr_22343[(19)] = inst_22270);

return statearr_22343;
})();
var statearr_22344_22419 = state_22318__$1;
(statearr_22344_22419[(2)] = inst_22271);

(statearr_22344_22419[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22319 === (32))){
var inst_22261 = (state_22318[(9)]);
var inst_22259 = (state_22318[(11)]);
var inst_22260 = (state_22318[(20)]);
var inst_22258 = (state_22318[(21)]);
var inst_22273 = (state_22318[(2)]);
var inst_22274 = (inst_22261 + (1));
var tmp22339 = inst_22259;
var tmp22340 = inst_22260;
var tmp22341 = inst_22258;
var inst_22258__$1 = tmp22341;
var inst_22259__$1 = tmp22339;
var inst_22260__$1 = tmp22340;
var inst_22261__$1 = inst_22274;
var state_22318__$1 = (function (){var statearr_22345 = state_22318;
(statearr_22345[(9)] = inst_22261__$1);

(statearr_22345[(11)] = inst_22259__$1);

(statearr_22345[(20)] = inst_22260__$1);

(statearr_22345[(21)] = inst_22258__$1);

(statearr_22345[(22)] = inst_22273);

return statearr_22345;
})();
var statearr_22346_22420 = state_22318__$1;
(statearr_22346_22420[(2)] = null);

(statearr_22346_22420[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22319 === (40))){
var inst_22286 = (state_22318[(23)]);
var inst_22290 = done.call(null,null);
var inst_22291 = cljs.core.async.untap_STAR_.call(null,m,inst_22286);
var state_22318__$1 = (function (){var statearr_22347 = state_22318;
(statearr_22347[(24)] = inst_22290);

return statearr_22347;
})();
var statearr_22348_22421 = state_22318__$1;
(statearr_22348_22421[(2)] = inst_22291);

(statearr_22348_22421[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22319 === (33))){
var inst_22277 = (state_22318[(25)]);
var inst_22279 = cljs.core.chunked_seq_QMARK_.call(null,inst_22277);
var state_22318__$1 = state_22318;
if(inst_22279){
var statearr_22349_22422 = state_22318__$1;
(statearr_22349_22422[(1)] = (36));

} else {
var statearr_22350_22423 = state_22318__$1;
(statearr_22350_22423[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22319 === (13))){
var inst_22209 = (state_22318[(26)]);
var inst_22212 = cljs.core.async.close_BANG_.call(null,inst_22209);
var state_22318__$1 = state_22318;
var statearr_22351_22424 = state_22318__$1;
(statearr_22351_22424[(2)] = inst_22212);

(statearr_22351_22424[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22319 === (22))){
var inst_22230 = (state_22318[(8)]);
var inst_22233 = cljs.core.async.close_BANG_.call(null,inst_22230);
var state_22318__$1 = state_22318;
var statearr_22352_22425 = state_22318__$1;
(statearr_22352_22425[(2)] = inst_22233);

(statearr_22352_22425[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22319 === (36))){
var inst_22277 = (state_22318[(25)]);
var inst_22281 = cljs.core.chunk_first.call(null,inst_22277);
var inst_22282 = cljs.core.chunk_rest.call(null,inst_22277);
var inst_22283 = cljs.core.count.call(null,inst_22281);
var inst_22258 = inst_22282;
var inst_22259 = inst_22281;
var inst_22260 = inst_22283;
var inst_22261 = (0);
var state_22318__$1 = (function (){var statearr_22353 = state_22318;
(statearr_22353[(9)] = inst_22261);

(statearr_22353[(11)] = inst_22259);

(statearr_22353[(20)] = inst_22260);

(statearr_22353[(21)] = inst_22258);

return statearr_22353;
})();
var statearr_22354_22426 = state_22318__$1;
(statearr_22354_22426[(2)] = null);

(statearr_22354_22426[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22319 === (41))){
var inst_22277 = (state_22318[(25)]);
var inst_22293 = (state_22318[(2)]);
var inst_22294 = cljs.core.next.call(null,inst_22277);
var inst_22258 = inst_22294;
var inst_22259 = null;
var inst_22260 = (0);
var inst_22261 = (0);
var state_22318__$1 = (function (){var statearr_22355 = state_22318;
(statearr_22355[(9)] = inst_22261);

(statearr_22355[(27)] = inst_22293);

(statearr_22355[(11)] = inst_22259);

(statearr_22355[(20)] = inst_22260);

(statearr_22355[(21)] = inst_22258);

return statearr_22355;
})();
var statearr_22356_22427 = state_22318__$1;
(statearr_22356_22427[(2)] = null);

(statearr_22356_22427[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22319 === (43))){
var state_22318__$1 = state_22318;
var statearr_22357_22428 = state_22318__$1;
(statearr_22357_22428[(2)] = null);

(statearr_22357_22428[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22319 === (29))){
var inst_22302 = (state_22318[(2)]);
var state_22318__$1 = state_22318;
var statearr_22358_22429 = state_22318__$1;
(statearr_22358_22429[(2)] = inst_22302);

(statearr_22358_22429[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22319 === (44))){
var inst_22311 = (state_22318[(2)]);
var state_22318__$1 = (function (){var statearr_22359 = state_22318;
(statearr_22359[(28)] = inst_22311);

return statearr_22359;
})();
var statearr_22360_22430 = state_22318__$1;
(statearr_22360_22430[(2)] = null);

(statearr_22360_22430[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22319 === (6))){
var inst_22250 = (state_22318[(29)]);
var inst_22249 = cljs.core.deref.call(null,cs);
var inst_22250__$1 = cljs.core.keys.call(null,inst_22249);
var inst_22251 = cljs.core.count.call(null,inst_22250__$1);
var inst_22252 = cljs.core.reset_BANG_.call(null,dctr,inst_22251);
var inst_22257 = cljs.core.seq.call(null,inst_22250__$1);
var inst_22258 = inst_22257;
var inst_22259 = null;
var inst_22260 = (0);
var inst_22261 = (0);
var state_22318__$1 = (function (){var statearr_22361 = state_22318;
(statearr_22361[(9)] = inst_22261);

(statearr_22361[(30)] = inst_22252);

(statearr_22361[(29)] = inst_22250__$1);

(statearr_22361[(11)] = inst_22259);

(statearr_22361[(20)] = inst_22260);

(statearr_22361[(21)] = inst_22258);

return statearr_22361;
})();
var statearr_22362_22431 = state_22318__$1;
(statearr_22362_22431[(2)] = null);

(statearr_22362_22431[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22319 === (28))){
var inst_22258 = (state_22318[(21)]);
var inst_22277 = (state_22318[(25)]);
var inst_22277__$1 = cljs.core.seq.call(null,inst_22258);
var state_22318__$1 = (function (){var statearr_22363 = state_22318;
(statearr_22363[(25)] = inst_22277__$1);

return statearr_22363;
})();
if(inst_22277__$1){
var statearr_22364_22432 = state_22318__$1;
(statearr_22364_22432[(1)] = (33));

} else {
var statearr_22365_22433 = state_22318__$1;
(statearr_22365_22433[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22319 === (25))){
var inst_22261 = (state_22318[(9)]);
var inst_22260 = (state_22318[(20)]);
var inst_22263 = (inst_22261 < inst_22260);
var inst_22264 = inst_22263;
var state_22318__$1 = state_22318;
if(cljs.core.truth_(inst_22264)){
var statearr_22366_22434 = state_22318__$1;
(statearr_22366_22434[(1)] = (27));

} else {
var statearr_22367_22435 = state_22318__$1;
(statearr_22367_22435[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22319 === (34))){
var state_22318__$1 = state_22318;
var statearr_22368_22436 = state_22318__$1;
(statearr_22368_22436[(2)] = null);

(statearr_22368_22436[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22319 === (17))){
var state_22318__$1 = state_22318;
var statearr_22369_22437 = state_22318__$1;
(statearr_22369_22437[(2)] = null);

(statearr_22369_22437[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22319 === (3))){
var inst_22316 = (state_22318[(2)]);
var state_22318__$1 = state_22318;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22318__$1,inst_22316);
} else {
if((state_val_22319 === (12))){
var inst_22245 = (state_22318[(2)]);
var state_22318__$1 = state_22318;
var statearr_22370_22438 = state_22318__$1;
(statearr_22370_22438[(2)] = inst_22245);

(statearr_22370_22438[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22319 === (2))){
var state_22318__$1 = state_22318;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22318__$1,(4),ch);
} else {
if((state_val_22319 === (23))){
var state_22318__$1 = state_22318;
var statearr_22371_22439 = state_22318__$1;
(statearr_22371_22439[(2)] = null);

(statearr_22371_22439[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22319 === (35))){
var inst_22300 = (state_22318[(2)]);
var state_22318__$1 = state_22318;
var statearr_22372_22440 = state_22318__$1;
(statearr_22372_22440[(2)] = inst_22300);

(statearr_22372_22440[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22319 === (19))){
var inst_22219 = (state_22318[(7)]);
var inst_22223 = cljs.core.chunk_first.call(null,inst_22219);
var inst_22224 = cljs.core.chunk_rest.call(null,inst_22219);
var inst_22225 = cljs.core.count.call(null,inst_22223);
var inst_22199 = inst_22224;
var inst_22200 = inst_22223;
var inst_22201 = inst_22225;
var inst_22202 = (0);
var state_22318__$1 = (function (){var statearr_22373 = state_22318;
(statearr_22373[(13)] = inst_22202);

(statearr_22373[(15)] = inst_22200);

(statearr_22373[(16)] = inst_22199);

(statearr_22373[(17)] = inst_22201);

return statearr_22373;
})();
var statearr_22374_22441 = state_22318__$1;
(statearr_22374_22441[(2)] = null);

(statearr_22374_22441[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22319 === (11))){
var inst_22219 = (state_22318[(7)]);
var inst_22199 = (state_22318[(16)]);
var inst_22219__$1 = cljs.core.seq.call(null,inst_22199);
var state_22318__$1 = (function (){var statearr_22375 = state_22318;
(statearr_22375[(7)] = inst_22219__$1);

return statearr_22375;
})();
if(inst_22219__$1){
var statearr_22376_22442 = state_22318__$1;
(statearr_22376_22442[(1)] = (16));

} else {
var statearr_22377_22443 = state_22318__$1;
(statearr_22377_22443[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22319 === (9))){
var inst_22247 = (state_22318[(2)]);
var state_22318__$1 = state_22318;
var statearr_22378_22444 = state_22318__$1;
(statearr_22378_22444[(2)] = inst_22247);

(statearr_22378_22444[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22319 === (5))){
var inst_22197 = cljs.core.deref.call(null,cs);
var inst_22198 = cljs.core.seq.call(null,inst_22197);
var inst_22199 = inst_22198;
var inst_22200 = null;
var inst_22201 = (0);
var inst_22202 = (0);
var state_22318__$1 = (function (){var statearr_22379 = state_22318;
(statearr_22379[(13)] = inst_22202);

(statearr_22379[(15)] = inst_22200);

(statearr_22379[(16)] = inst_22199);

(statearr_22379[(17)] = inst_22201);

return statearr_22379;
})();
var statearr_22380_22445 = state_22318__$1;
(statearr_22380_22445[(2)] = null);

(statearr_22380_22445[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22319 === (14))){
var state_22318__$1 = state_22318;
var statearr_22381_22446 = state_22318__$1;
(statearr_22381_22446[(2)] = null);

(statearr_22381_22446[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22319 === (45))){
var inst_22308 = (state_22318[(2)]);
var state_22318__$1 = state_22318;
var statearr_22382_22447 = state_22318__$1;
(statearr_22382_22447[(2)] = inst_22308);

(statearr_22382_22447[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22319 === (26))){
var inst_22250 = (state_22318[(29)]);
var inst_22304 = (state_22318[(2)]);
var inst_22305 = cljs.core.seq.call(null,inst_22250);
var state_22318__$1 = (function (){var statearr_22383 = state_22318;
(statearr_22383[(31)] = inst_22304);

return statearr_22383;
})();
if(inst_22305){
var statearr_22384_22448 = state_22318__$1;
(statearr_22384_22448[(1)] = (42));

} else {
var statearr_22385_22449 = state_22318__$1;
(statearr_22385_22449[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22319 === (16))){
var inst_22219 = (state_22318[(7)]);
var inst_22221 = cljs.core.chunked_seq_QMARK_.call(null,inst_22219);
var state_22318__$1 = state_22318;
if(inst_22221){
var statearr_22386_22450 = state_22318__$1;
(statearr_22386_22450[(1)] = (19));

} else {
var statearr_22387_22451 = state_22318__$1;
(statearr_22387_22451[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22319 === (38))){
var inst_22297 = (state_22318[(2)]);
var state_22318__$1 = state_22318;
var statearr_22388_22452 = state_22318__$1;
(statearr_22388_22452[(2)] = inst_22297);

(statearr_22388_22452[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22319 === (30))){
var state_22318__$1 = state_22318;
var statearr_22389_22453 = state_22318__$1;
(statearr_22389_22453[(2)] = null);

(statearr_22389_22453[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22319 === (10))){
var inst_22202 = (state_22318[(13)]);
var inst_22200 = (state_22318[(15)]);
var inst_22208 = cljs.core._nth.call(null,inst_22200,inst_22202);
var inst_22209 = cljs.core.nth.call(null,inst_22208,(0),null);
var inst_22210 = cljs.core.nth.call(null,inst_22208,(1),null);
var state_22318__$1 = (function (){var statearr_22390 = state_22318;
(statearr_22390[(26)] = inst_22209);

return statearr_22390;
})();
if(cljs.core.truth_(inst_22210)){
var statearr_22391_22454 = state_22318__$1;
(statearr_22391_22454[(1)] = (13));

} else {
var statearr_22392_22455 = state_22318__$1;
(statearr_22392_22455[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22319 === (18))){
var inst_22243 = (state_22318[(2)]);
var state_22318__$1 = state_22318;
var statearr_22393_22456 = state_22318__$1;
(statearr_22393_22456[(2)] = inst_22243);

(statearr_22393_22456[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22319 === (42))){
var state_22318__$1 = state_22318;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22318__$1,(45),dchan);
} else {
if((state_val_22319 === (37))){
var inst_22286 = (state_22318[(23)]);
var inst_22190 = (state_22318[(10)]);
var inst_22277 = (state_22318[(25)]);
var inst_22286__$1 = cljs.core.first.call(null,inst_22277);
var inst_22287 = cljs.core.async.put_BANG_.call(null,inst_22286__$1,inst_22190,done);
var state_22318__$1 = (function (){var statearr_22394 = state_22318;
(statearr_22394[(23)] = inst_22286__$1);

return statearr_22394;
})();
if(cljs.core.truth_(inst_22287)){
var statearr_22395_22457 = state_22318__$1;
(statearr_22395_22457[(1)] = (39));

} else {
var statearr_22396_22458 = state_22318__$1;
(statearr_22396_22458[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22319 === (8))){
var inst_22202 = (state_22318[(13)]);
var inst_22201 = (state_22318[(17)]);
var inst_22204 = (inst_22202 < inst_22201);
var inst_22205 = inst_22204;
var state_22318__$1 = state_22318;
if(cljs.core.truth_(inst_22205)){
var statearr_22397_22459 = state_22318__$1;
(statearr_22397_22459[(1)] = (10));

} else {
var statearr_22398_22460 = state_22318__$1;
(statearr_22398_22460[(1)] = (11));

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
});})(c__14660__auto___22406,cs,m,dchan,dctr,done))
;
return ((function (switch__14595__auto__,c__14660__auto___22406,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__14596__auto__ = null;
var cljs$core$async$mult_$_state_machine__14596__auto____0 = (function (){
var statearr_22402 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22402[(0)] = cljs$core$async$mult_$_state_machine__14596__auto__);

(statearr_22402[(1)] = (1));

return statearr_22402;
});
var cljs$core$async$mult_$_state_machine__14596__auto____1 = (function (state_22318){
while(true){
var ret_value__14597__auto__ = (function (){try{while(true){
var result__14598__auto__ = switch__14595__auto__.call(null,state_22318);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14598__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14598__auto__;
}
break;
}
}catch (e22403){if((e22403 instanceof Object)){
var ex__14599__auto__ = e22403;
var statearr_22404_22461 = state_22318;
(statearr_22404_22461[(5)] = ex__14599__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22318);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22403;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14597__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22462 = state_22318;
state_22318 = G__22462;
continue;
} else {
return ret_value__14597__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__14596__auto__ = function(state_22318){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__14596__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__14596__auto____1.call(this,state_22318);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__14596__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__14596__auto____0;
cljs$core$async$mult_$_state_machine__14596__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__14596__auto____1;
return cljs$core$async$mult_$_state_machine__14596__auto__;
})()
;})(switch__14595__auto__,c__14660__auto___22406,cs,m,dchan,dctr,done))
})();
var state__14662__auto__ = (function (){var statearr_22405 = f__14661__auto__.call(null);
(statearr_22405[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14660__auto___22406);

return statearr_22405;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14662__auto__);
});})(c__14660__auto___22406,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var args22463 = [];
var len__12638__auto___22466 = arguments.length;
var i__12639__auto___22467 = (0);
while(true){
if((i__12639__auto___22467 < len__12638__auto___22466)){
args22463.push((arguments[i__12639__auto___22467]));

var G__22468 = (i__12639__auto___22467 + (1));
i__12639__auto___22467 = G__22468;
continue;
} else {
}
break;
}

var G__22465 = args22463.length;
switch (G__22465) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22463.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;
/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__12235__auto__ = (((m == null))?null:m);
var m__12236__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__12235__auto__)]);
if(!((m__12236__auto__ == null))){
return m__12236__auto__.call(null,m,ch);
} else {
var m__12236__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__12236__auto____$1 == null))){
return m__12236__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__12235__auto__ = (((m == null))?null:m);
var m__12236__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__12235__auto__)]);
if(!((m__12236__auto__ == null))){
return m__12236__auto__.call(null,m,ch);
} else {
var m__12236__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__12236__auto____$1 == null))){
return m__12236__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__12235__auto__ = (((m == null))?null:m);
var m__12236__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__12235__auto__)]);
if(!((m__12236__auto__ == null))){
return m__12236__auto__.call(null,m);
} else {
var m__12236__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__12236__auto____$1 == null))){
return m__12236__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__12235__auto__ = (((m == null))?null:m);
var m__12236__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__12235__auto__)]);
if(!((m__12236__auto__ == null))){
return m__12236__auto__.call(null,m,state_map);
} else {
var m__12236__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__12236__auto____$1 == null))){
return m__12236__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__12235__auto__ = (((m == null))?null:m);
var m__12236__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__12235__auto__)]);
if(!((m__12236__auto__ == null))){
return m__12236__auto__.call(null,m,mode);
} else {
var m__12236__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__12236__auto____$1 == null))){
return m__12236__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__12645__auto__ = [];
var len__12638__auto___22480 = arguments.length;
var i__12639__auto___22481 = (0);
while(true){
if((i__12639__auto___22481 < len__12638__auto___22480)){
args__12645__auto__.push((arguments[i__12639__auto___22481]));

var G__22482 = (i__12639__auto___22481 + (1));
i__12639__auto___22481 = G__22482;
continue;
} else {
}
break;
}

var argseq__12646__auto__ = ((((3) < args__12645__auto__.length))?(new cljs.core.IndexedSeq(args__12645__auto__.slice((3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__12646__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__22474){
var map__22475 = p__22474;
var map__22475__$1 = ((((!((map__22475 == null)))?((((map__22475.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22475.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22475):map__22475);
var opts = map__22475__$1;
var statearr_22477_22483 = state;
(statearr_22477_22483[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4425__auto__ = cljs.core.async.do_alts.call(null,((function (map__22475,map__22475__$1,opts){
return (function (val){
var statearr_22478_22484 = state;
(statearr_22478_22484[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__22475,map__22475__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4425__auto__)){
var cb = temp__4425__auto__;
var statearr_22479_22485 = state;
(statearr_22479_22485[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq22470){
var G__22471 = cljs.core.first.call(null,seq22470);
var seq22470__$1 = cljs.core.next.call(null,seq22470);
var G__22472 = cljs.core.first.call(null,seq22470__$1);
var seq22470__$2 = cljs.core.next.call(null,seq22470__$1);
var G__22473 = cljs.core.first.call(null,seq22470__$2);
var seq22470__$3 = cljs.core.next.call(null,seq22470__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__22471,G__22472,G__22473,seq22470__$3);
});
/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async22649 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22649 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta22650){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta22650 = meta22650;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async22649.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_22651,meta22650__$1){
var self__ = this;
var _22651__$1 = this;
return (new cljs.core.async.t_cljs$core$async22649(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta22650__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async22649.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_22651){
var self__ = this;
var _22651__$1 = this;
return self__.meta22650;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async22649.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async22649.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async22649.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async22649.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async22649.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async22649.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async22649.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async22649.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null))))].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async22649.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta22650","meta22650",-997283352,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async22649.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22649.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22649";

cljs.core.async.t_cljs$core$async22649.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__12178__auto__,writer__12179__auto__,opt__12180__auto__){
return cljs.core._write.call(null,writer__12179__auto__,"cljs.core.async/t_cljs$core$async22649");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async22649 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async22649(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta22650){
return (new cljs.core.async.t_cljs$core$async22649(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta22650));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async22649(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__14660__auto___22812 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__14660__auto___22812,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__14661__auto__ = (function (){var switch__14595__auto__ = ((function (c__14660__auto___22812,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_22749){
var state_val_22750 = (state_22749[(1)]);
if((state_val_22750 === (7))){
var inst_22667 = (state_22749[(2)]);
var state_22749__$1 = state_22749;
var statearr_22751_22813 = state_22749__$1;
(statearr_22751_22813[(2)] = inst_22667);

(statearr_22751_22813[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22750 === (20))){
var inst_22679 = (state_22749[(7)]);
var state_22749__$1 = state_22749;
var statearr_22752_22814 = state_22749__$1;
(statearr_22752_22814[(2)] = inst_22679);

(statearr_22752_22814[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22750 === (27))){
var state_22749__$1 = state_22749;
var statearr_22753_22815 = state_22749__$1;
(statearr_22753_22815[(2)] = null);

(statearr_22753_22815[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22750 === (1))){
var inst_22655 = (state_22749[(8)]);
var inst_22655__$1 = calc_state.call(null);
var inst_22657 = (inst_22655__$1 == null);
var inst_22658 = cljs.core.not.call(null,inst_22657);
var state_22749__$1 = (function (){var statearr_22754 = state_22749;
(statearr_22754[(8)] = inst_22655__$1);

return statearr_22754;
})();
if(inst_22658){
var statearr_22755_22816 = state_22749__$1;
(statearr_22755_22816[(1)] = (2));

} else {
var statearr_22756_22817 = state_22749__$1;
(statearr_22756_22817[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22750 === (24))){
var inst_22709 = (state_22749[(9)]);
var inst_22702 = (state_22749[(10)]);
var inst_22723 = (state_22749[(11)]);
var inst_22723__$1 = inst_22702.call(null,inst_22709);
var state_22749__$1 = (function (){var statearr_22757 = state_22749;
(statearr_22757[(11)] = inst_22723__$1);

return statearr_22757;
})();
if(cljs.core.truth_(inst_22723__$1)){
var statearr_22758_22818 = state_22749__$1;
(statearr_22758_22818[(1)] = (29));

} else {
var statearr_22759_22819 = state_22749__$1;
(statearr_22759_22819[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22750 === (4))){
var inst_22670 = (state_22749[(2)]);
var state_22749__$1 = state_22749;
if(cljs.core.truth_(inst_22670)){
var statearr_22760_22820 = state_22749__$1;
(statearr_22760_22820[(1)] = (8));

} else {
var statearr_22761_22821 = state_22749__$1;
(statearr_22761_22821[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22750 === (15))){
var inst_22696 = (state_22749[(2)]);
var state_22749__$1 = state_22749;
if(cljs.core.truth_(inst_22696)){
var statearr_22762_22822 = state_22749__$1;
(statearr_22762_22822[(1)] = (19));

} else {
var statearr_22763_22823 = state_22749__$1;
(statearr_22763_22823[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22750 === (21))){
var inst_22701 = (state_22749[(12)]);
var inst_22701__$1 = (state_22749[(2)]);
var inst_22702 = cljs.core.get.call(null,inst_22701__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_22703 = cljs.core.get.call(null,inst_22701__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_22704 = cljs.core.get.call(null,inst_22701__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_22749__$1 = (function (){var statearr_22764 = state_22749;
(statearr_22764[(10)] = inst_22702);

(statearr_22764[(13)] = inst_22703);

(statearr_22764[(12)] = inst_22701__$1);

return statearr_22764;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_22749__$1,(22),inst_22704);
} else {
if((state_val_22750 === (31))){
var inst_22731 = (state_22749[(2)]);
var state_22749__$1 = state_22749;
if(cljs.core.truth_(inst_22731)){
var statearr_22765_22824 = state_22749__$1;
(statearr_22765_22824[(1)] = (32));

} else {
var statearr_22766_22825 = state_22749__$1;
(statearr_22766_22825[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22750 === (32))){
var inst_22708 = (state_22749[(14)]);
var state_22749__$1 = state_22749;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22749__$1,(35),out,inst_22708);
} else {
if((state_val_22750 === (33))){
var inst_22701 = (state_22749[(12)]);
var inst_22679 = inst_22701;
var state_22749__$1 = (function (){var statearr_22767 = state_22749;
(statearr_22767[(7)] = inst_22679);

return statearr_22767;
})();
var statearr_22768_22826 = state_22749__$1;
(statearr_22768_22826[(2)] = null);

(statearr_22768_22826[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22750 === (13))){
var inst_22679 = (state_22749[(7)]);
var inst_22686 = inst_22679.cljs$lang$protocol_mask$partition0$;
var inst_22687 = (inst_22686 & (64));
var inst_22688 = inst_22679.cljs$core$ISeq$;
var inst_22689 = (inst_22687) || (inst_22688);
var state_22749__$1 = state_22749;
if(cljs.core.truth_(inst_22689)){
var statearr_22769_22827 = state_22749__$1;
(statearr_22769_22827[(1)] = (16));

} else {
var statearr_22770_22828 = state_22749__$1;
(statearr_22770_22828[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22750 === (22))){
var inst_22709 = (state_22749[(9)]);
var inst_22708 = (state_22749[(14)]);
var inst_22707 = (state_22749[(2)]);
var inst_22708__$1 = cljs.core.nth.call(null,inst_22707,(0),null);
var inst_22709__$1 = cljs.core.nth.call(null,inst_22707,(1),null);
var inst_22710 = (inst_22708__$1 == null);
var inst_22711 = cljs.core._EQ_.call(null,inst_22709__$1,change);
var inst_22712 = (inst_22710) || (inst_22711);
var state_22749__$1 = (function (){var statearr_22771 = state_22749;
(statearr_22771[(9)] = inst_22709__$1);

(statearr_22771[(14)] = inst_22708__$1);

return statearr_22771;
})();
if(cljs.core.truth_(inst_22712)){
var statearr_22772_22829 = state_22749__$1;
(statearr_22772_22829[(1)] = (23));

} else {
var statearr_22773_22830 = state_22749__$1;
(statearr_22773_22830[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22750 === (36))){
var inst_22701 = (state_22749[(12)]);
var inst_22679 = inst_22701;
var state_22749__$1 = (function (){var statearr_22774 = state_22749;
(statearr_22774[(7)] = inst_22679);

return statearr_22774;
})();
var statearr_22775_22831 = state_22749__$1;
(statearr_22775_22831[(2)] = null);

(statearr_22775_22831[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22750 === (29))){
var inst_22723 = (state_22749[(11)]);
var state_22749__$1 = state_22749;
var statearr_22776_22832 = state_22749__$1;
(statearr_22776_22832[(2)] = inst_22723);

(statearr_22776_22832[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22750 === (6))){
var state_22749__$1 = state_22749;
var statearr_22777_22833 = state_22749__$1;
(statearr_22777_22833[(2)] = false);

(statearr_22777_22833[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22750 === (28))){
var inst_22719 = (state_22749[(2)]);
var inst_22720 = calc_state.call(null);
var inst_22679 = inst_22720;
var state_22749__$1 = (function (){var statearr_22778 = state_22749;
(statearr_22778[(7)] = inst_22679);

(statearr_22778[(15)] = inst_22719);

return statearr_22778;
})();
var statearr_22779_22834 = state_22749__$1;
(statearr_22779_22834[(2)] = null);

(statearr_22779_22834[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22750 === (25))){
var inst_22745 = (state_22749[(2)]);
var state_22749__$1 = state_22749;
var statearr_22780_22835 = state_22749__$1;
(statearr_22780_22835[(2)] = inst_22745);

(statearr_22780_22835[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22750 === (34))){
var inst_22743 = (state_22749[(2)]);
var state_22749__$1 = state_22749;
var statearr_22781_22836 = state_22749__$1;
(statearr_22781_22836[(2)] = inst_22743);

(statearr_22781_22836[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22750 === (17))){
var state_22749__$1 = state_22749;
var statearr_22782_22837 = state_22749__$1;
(statearr_22782_22837[(2)] = false);

(statearr_22782_22837[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22750 === (3))){
var state_22749__$1 = state_22749;
var statearr_22783_22838 = state_22749__$1;
(statearr_22783_22838[(2)] = false);

(statearr_22783_22838[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22750 === (12))){
var inst_22747 = (state_22749[(2)]);
var state_22749__$1 = state_22749;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22749__$1,inst_22747);
} else {
if((state_val_22750 === (2))){
var inst_22655 = (state_22749[(8)]);
var inst_22660 = inst_22655.cljs$lang$protocol_mask$partition0$;
var inst_22661 = (inst_22660 & (64));
var inst_22662 = inst_22655.cljs$core$ISeq$;
var inst_22663 = (inst_22661) || (inst_22662);
var state_22749__$1 = state_22749;
if(cljs.core.truth_(inst_22663)){
var statearr_22784_22839 = state_22749__$1;
(statearr_22784_22839[(1)] = (5));

} else {
var statearr_22785_22840 = state_22749__$1;
(statearr_22785_22840[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22750 === (23))){
var inst_22708 = (state_22749[(14)]);
var inst_22714 = (inst_22708 == null);
var state_22749__$1 = state_22749;
if(cljs.core.truth_(inst_22714)){
var statearr_22786_22841 = state_22749__$1;
(statearr_22786_22841[(1)] = (26));

} else {
var statearr_22787_22842 = state_22749__$1;
(statearr_22787_22842[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22750 === (35))){
var inst_22734 = (state_22749[(2)]);
var state_22749__$1 = state_22749;
if(cljs.core.truth_(inst_22734)){
var statearr_22788_22843 = state_22749__$1;
(statearr_22788_22843[(1)] = (36));

} else {
var statearr_22789_22844 = state_22749__$1;
(statearr_22789_22844[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22750 === (19))){
var inst_22679 = (state_22749[(7)]);
var inst_22698 = cljs.core.apply.call(null,cljs.core.hash_map,inst_22679);
var state_22749__$1 = state_22749;
var statearr_22790_22845 = state_22749__$1;
(statearr_22790_22845[(2)] = inst_22698);

(statearr_22790_22845[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22750 === (11))){
var inst_22679 = (state_22749[(7)]);
var inst_22683 = (inst_22679 == null);
var inst_22684 = cljs.core.not.call(null,inst_22683);
var state_22749__$1 = state_22749;
if(inst_22684){
var statearr_22791_22846 = state_22749__$1;
(statearr_22791_22846[(1)] = (13));

} else {
var statearr_22792_22847 = state_22749__$1;
(statearr_22792_22847[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22750 === (9))){
var inst_22655 = (state_22749[(8)]);
var state_22749__$1 = state_22749;
var statearr_22793_22848 = state_22749__$1;
(statearr_22793_22848[(2)] = inst_22655);

(statearr_22793_22848[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22750 === (5))){
var state_22749__$1 = state_22749;
var statearr_22794_22849 = state_22749__$1;
(statearr_22794_22849[(2)] = true);

(statearr_22794_22849[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22750 === (14))){
var state_22749__$1 = state_22749;
var statearr_22795_22850 = state_22749__$1;
(statearr_22795_22850[(2)] = false);

(statearr_22795_22850[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22750 === (26))){
var inst_22709 = (state_22749[(9)]);
var inst_22716 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_22709);
var state_22749__$1 = state_22749;
var statearr_22796_22851 = state_22749__$1;
(statearr_22796_22851[(2)] = inst_22716);

(statearr_22796_22851[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22750 === (16))){
var state_22749__$1 = state_22749;
var statearr_22797_22852 = state_22749__$1;
(statearr_22797_22852[(2)] = true);

(statearr_22797_22852[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22750 === (38))){
var inst_22739 = (state_22749[(2)]);
var state_22749__$1 = state_22749;
var statearr_22798_22853 = state_22749__$1;
(statearr_22798_22853[(2)] = inst_22739);

(statearr_22798_22853[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22750 === (30))){
var inst_22709 = (state_22749[(9)]);
var inst_22702 = (state_22749[(10)]);
var inst_22703 = (state_22749[(13)]);
var inst_22726 = cljs.core.empty_QMARK_.call(null,inst_22702);
var inst_22727 = inst_22703.call(null,inst_22709);
var inst_22728 = cljs.core.not.call(null,inst_22727);
var inst_22729 = (inst_22726) && (inst_22728);
var state_22749__$1 = state_22749;
var statearr_22799_22854 = state_22749__$1;
(statearr_22799_22854[(2)] = inst_22729);

(statearr_22799_22854[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22750 === (10))){
var inst_22655 = (state_22749[(8)]);
var inst_22675 = (state_22749[(2)]);
var inst_22676 = cljs.core.get.call(null,inst_22675,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_22677 = cljs.core.get.call(null,inst_22675,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_22678 = cljs.core.get.call(null,inst_22675,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_22679 = inst_22655;
var state_22749__$1 = (function (){var statearr_22800 = state_22749;
(statearr_22800[(16)] = inst_22678);

(statearr_22800[(7)] = inst_22679);

(statearr_22800[(17)] = inst_22676);

(statearr_22800[(18)] = inst_22677);

return statearr_22800;
})();
var statearr_22801_22855 = state_22749__$1;
(statearr_22801_22855[(2)] = null);

(statearr_22801_22855[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22750 === (18))){
var inst_22693 = (state_22749[(2)]);
var state_22749__$1 = state_22749;
var statearr_22802_22856 = state_22749__$1;
(statearr_22802_22856[(2)] = inst_22693);

(statearr_22802_22856[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22750 === (37))){
var state_22749__$1 = state_22749;
var statearr_22803_22857 = state_22749__$1;
(statearr_22803_22857[(2)] = null);

(statearr_22803_22857[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22750 === (8))){
var inst_22655 = (state_22749[(8)]);
var inst_22672 = cljs.core.apply.call(null,cljs.core.hash_map,inst_22655);
var state_22749__$1 = state_22749;
var statearr_22804_22858 = state_22749__$1;
(statearr_22804_22858[(2)] = inst_22672);

(statearr_22804_22858[(1)] = (10));


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
});})(c__14660__auto___22812,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__14595__auto__,c__14660__auto___22812,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__14596__auto__ = null;
var cljs$core$async$mix_$_state_machine__14596__auto____0 = (function (){
var statearr_22808 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22808[(0)] = cljs$core$async$mix_$_state_machine__14596__auto__);

(statearr_22808[(1)] = (1));

return statearr_22808;
});
var cljs$core$async$mix_$_state_machine__14596__auto____1 = (function (state_22749){
while(true){
var ret_value__14597__auto__ = (function (){try{while(true){
var result__14598__auto__ = switch__14595__auto__.call(null,state_22749);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14598__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14598__auto__;
}
break;
}
}catch (e22809){if((e22809 instanceof Object)){
var ex__14599__auto__ = e22809;
var statearr_22810_22859 = state_22749;
(statearr_22810_22859[(5)] = ex__14599__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22749);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22809;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14597__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22860 = state_22749;
state_22749 = G__22860;
continue;
} else {
return ret_value__14597__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__14596__auto__ = function(state_22749){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__14596__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__14596__auto____1.call(this,state_22749);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__14596__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__14596__auto____0;
cljs$core$async$mix_$_state_machine__14596__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__14596__auto____1;
return cljs$core$async$mix_$_state_machine__14596__auto__;
})()
;})(switch__14595__auto__,c__14660__auto___22812,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__14662__auto__ = (function (){var statearr_22811 = f__14661__auto__.call(null);
(statearr_22811[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14660__auto___22812);

return statearr_22811;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14662__auto__);
});})(c__14660__auto___22812,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__12235__auto__ = (((p == null))?null:p);
var m__12236__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__12235__auto__)]);
if(!((m__12236__auto__ == null))){
return m__12236__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__12236__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__12236__auto____$1 == null))){
return m__12236__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__12235__auto__ = (((p == null))?null:p);
var m__12236__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__12235__auto__)]);
if(!((m__12236__auto__ == null))){
return m__12236__auto__.call(null,p,v,ch);
} else {
var m__12236__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__12236__auto____$1 == null))){
return m__12236__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args22861 = [];
var len__12638__auto___22864 = arguments.length;
var i__12639__auto___22865 = (0);
while(true){
if((i__12639__auto___22865 < len__12638__auto___22864)){
args22861.push((arguments[i__12639__auto___22865]));

var G__22866 = (i__12639__auto___22865 + (1));
i__12639__auto___22865 = G__22866;
continue;
} else {
}
break;
}

var G__22863 = args22861.length;
switch (G__22863) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22861.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__12235__auto__ = (((p == null))?null:p);
var m__12236__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__12235__auto__)]);
if(!((m__12236__auto__ == null))){
return m__12236__auto__.call(null,p);
} else {
var m__12236__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__12236__auto____$1 == null))){
return m__12236__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__12235__auto__ = (((p == null))?null:p);
var m__12236__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__12235__auto__)]);
if(!((m__12236__auto__ == null))){
return m__12236__auto__.call(null,p,v);
} else {
var m__12236__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__12236__auto____$1 == null))){
return m__12236__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;

/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var args22869 = [];
var len__12638__auto___22994 = arguments.length;
var i__12639__auto___22995 = (0);
while(true){
if((i__12639__auto___22995 < len__12638__auto___22994)){
args22869.push((arguments[i__12639__auto___22995]));

var G__22996 = (i__12639__auto___22995 + (1));
i__12639__auto___22995 = G__22996;
continue;
} else {
}
break;
}

var G__22871 = args22869.length;
switch (G__22871) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22869.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__11580__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__11580__auto__)){
return or__11580__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__11580__auto__,mults){
return (function (p1__22868_SHARP_){
if(cljs.core.truth_(p1__22868_SHARP_.call(null,topic))){
return p1__22868_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__22868_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__11580__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async22872 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22872 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta22873){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta22873 = meta22873;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async22872.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_22874,meta22873__$1){
var self__ = this;
var _22874__$1 = this;
return (new cljs.core.async.t_cljs$core$async22872(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta22873__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async22872.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_22874){
var self__ = this;
var _22874__$1 = this;
return self__.meta22873;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async22872.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async22872.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async22872.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async22872.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async22872.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4425__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4425__auto__)){
var m = temp__4425__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async22872.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async22872.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async22872.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta22873","meta22873",265325164,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async22872.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22872.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22872";

cljs.core.async.t_cljs$core$async22872.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__12178__auto__,writer__12179__auto__,opt__12180__auto__){
return cljs.core._write.call(null,writer__12179__auto__,"cljs.core.async/t_cljs$core$async22872");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async22872 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async22872(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta22873){
return (new cljs.core.async.t_cljs$core$async22872(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta22873));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async22872(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__14660__auto___22998 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__14660__auto___22998,mults,ensure_mult,p){
return (function (){
var f__14661__auto__ = (function (){var switch__14595__auto__ = ((function (c__14660__auto___22998,mults,ensure_mult,p){
return (function (state_22946){
var state_val_22947 = (state_22946[(1)]);
if((state_val_22947 === (7))){
var inst_22942 = (state_22946[(2)]);
var state_22946__$1 = state_22946;
var statearr_22948_22999 = state_22946__$1;
(statearr_22948_22999[(2)] = inst_22942);

(statearr_22948_22999[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22947 === (20))){
var state_22946__$1 = state_22946;
var statearr_22949_23000 = state_22946__$1;
(statearr_22949_23000[(2)] = null);

(statearr_22949_23000[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22947 === (1))){
var state_22946__$1 = state_22946;
var statearr_22950_23001 = state_22946__$1;
(statearr_22950_23001[(2)] = null);

(statearr_22950_23001[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22947 === (24))){
var inst_22925 = (state_22946[(7)]);
var inst_22934 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_22925);
var state_22946__$1 = state_22946;
var statearr_22951_23002 = state_22946__$1;
(statearr_22951_23002[(2)] = inst_22934);

(statearr_22951_23002[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22947 === (4))){
var inst_22877 = (state_22946[(8)]);
var inst_22877__$1 = (state_22946[(2)]);
var inst_22878 = (inst_22877__$1 == null);
var state_22946__$1 = (function (){var statearr_22952 = state_22946;
(statearr_22952[(8)] = inst_22877__$1);

return statearr_22952;
})();
if(cljs.core.truth_(inst_22878)){
var statearr_22953_23003 = state_22946__$1;
(statearr_22953_23003[(1)] = (5));

} else {
var statearr_22954_23004 = state_22946__$1;
(statearr_22954_23004[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22947 === (15))){
var inst_22919 = (state_22946[(2)]);
var state_22946__$1 = state_22946;
var statearr_22955_23005 = state_22946__$1;
(statearr_22955_23005[(2)] = inst_22919);

(statearr_22955_23005[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22947 === (21))){
var inst_22939 = (state_22946[(2)]);
var state_22946__$1 = (function (){var statearr_22956 = state_22946;
(statearr_22956[(9)] = inst_22939);

return statearr_22956;
})();
var statearr_22957_23006 = state_22946__$1;
(statearr_22957_23006[(2)] = null);

(statearr_22957_23006[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22947 === (13))){
var inst_22901 = (state_22946[(10)]);
var inst_22903 = cljs.core.chunked_seq_QMARK_.call(null,inst_22901);
var state_22946__$1 = state_22946;
if(inst_22903){
var statearr_22958_23007 = state_22946__$1;
(statearr_22958_23007[(1)] = (16));

} else {
var statearr_22959_23008 = state_22946__$1;
(statearr_22959_23008[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22947 === (22))){
var inst_22931 = (state_22946[(2)]);
var state_22946__$1 = state_22946;
if(cljs.core.truth_(inst_22931)){
var statearr_22960_23009 = state_22946__$1;
(statearr_22960_23009[(1)] = (23));

} else {
var statearr_22961_23010 = state_22946__$1;
(statearr_22961_23010[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22947 === (6))){
var inst_22925 = (state_22946[(7)]);
var inst_22877 = (state_22946[(8)]);
var inst_22927 = (state_22946[(11)]);
var inst_22925__$1 = topic_fn.call(null,inst_22877);
var inst_22926 = cljs.core.deref.call(null,mults);
var inst_22927__$1 = cljs.core.get.call(null,inst_22926,inst_22925__$1);
var state_22946__$1 = (function (){var statearr_22962 = state_22946;
(statearr_22962[(7)] = inst_22925__$1);

(statearr_22962[(11)] = inst_22927__$1);

return statearr_22962;
})();
if(cljs.core.truth_(inst_22927__$1)){
var statearr_22963_23011 = state_22946__$1;
(statearr_22963_23011[(1)] = (19));

} else {
var statearr_22964_23012 = state_22946__$1;
(statearr_22964_23012[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22947 === (25))){
var inst_22936 = (state_22946[(2)]);
var state_22946__$1 = state_22946;
var statearr_22965_23013 = state_22946__$1;
(statearr_22965_23013[(2)] = inst_22936);

(statearr_22965_23013[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22947 === (17))){
var inst_22901 = (state_22946[(10)]);
var inst_22910 = cljs.core.first.call(null,inst_22901);
var inst_22911 = cljs.core.async.muxch_STAR_.call(null,inst_22910);
var inst_22912 = cljs.core.async.close_BANG_.call(null,inst_22911);
var inst_22913 = cljs.core.next.call(null,inst_22901);
var inst_22887 = inst_22913;
var inst_22888 = null;
var inst_22889 = (0);
var inst_22890 = (0);
var state_22946__$1 = (function (){var statearr_22966 = state_22946;
(statearr_22966[(12)] = inst_22912);

(statearr_22966[(13)] = inst_22889);

(statearr_22966[(14)] = inst_22887);

(statearr_22966[(15)] = inst_22888);

(statearr_22966[(16)] = inst_22890);

return statearr_22966;
})();
var statearr_22967_23014 = state_22946__$1;
(statearr_22967_23014[(2)] = null);

(statearr_22967_23014[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22947 === (3))){
var inst_22944 = (state_22946[(2)]);
var state_22946__$1 = state_22946;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22946__$1,inst_22944);
} else {
if((state_val_22947 === (12))){
var inst_22921 = (state_22946[(2)]);
var state_22946__$1 = state_22946;
var statearr_22968_23015 = state_22946__$1;
(statearr_22968_23015[(2)] = inst_22921);

(statearr_22968_23015[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22947 === (2))){
var state_22946__$1 = state_22946;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22946__$1,(4),ch);
} else {
if((state_val_22947 === (23))){
var state_22946__$1 = state_22946;
var statearr_22969_23016 = state_22946__$1;
(statearr_22969_23016[(2)] = null);

(statearr_22969_23016[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22947 === (19))){
var inst_22877 = (state_22946[(8)]);
var inst_22927 = (state_22946[(11)]);
var inst_22929 = cljs.core.async.muxch_STAR_.call(null,inst_22927);
var state_22946__$1 = state_22946;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22946__$1,(22),inst_22929,inst_22877);
} else {
if((state_val_22947 === (11))){
var inst_22901 = (state_22946[(10)]);
var inst_22887 = (state_22946[(14)]);
var inst_22901__$1 = cljs.core.seq.call(null,inst_22887);
var state_22946__$1 = (function (){var statearr_22970 = state_22946;
(statearr_22970[(10)] = inst_22901__$1);

return statearr_22970;
})();
if(inst_22901__$1){
var statearr_22971_23017 = state_22946__$1;
(statearr_22971_23017[(1)] = (13));

} else {
var statearr_22972_23018 = state_22946__$1;
(statearr_22972_23018[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22947 === (9))){
var inst_22923 = (state_22946[(2)]);
var state_22946__$1 = state_22946;
var statearr_22973_23019 = state_22946__$1;
(statearr_22973_23019[(2)] = inst_22923);

(statearr_22973_23019[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22947 === (5))){
var inst_22884 = cljs.core.deref.call(null,mults);
var inst_22885 = cljs.core.vals.call(null,inst_22884);
var inst_22886 = cljs.core.seq.call(null,inst_22885);
var inst_22887 = inst_22886;
var inst_22888 = null;
var inst_22889 = (0);
var inst_22890 = (0);
var state_22946__$1 = (function (){var statearr_22974 = state_22946;
(statearr_22974[(13)] = inst_22889);

(statearr_22974[(14)] = inst_22887);

(statearr_22974[(15)] = inst_22888);

(statearr_22974[(16)] = inst_22890);

return statearr_22974;
})();
var statearr_22975_23020 = state_22946__$1;
(statearr_22975_23020[(2)] = null);

(statearr_22975_23020[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22947 === (14))){
var state_22946__$1 = state_22946;
var statearr_22979_23021 = state_22946__$1;
(statearr_22979_23021[(2)] = null);

(statearr_22979_23021[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22947 === (16))){
var inst_22901 = (state_22946[(10)]);
var inst_22905 = cljs.core.chunk_first.call(null,inst_22901);
var inst_22906 = cljs.core.chunk_rest.call(null,inst_22901);
var inst_22907 = cljs.core.count.call(null,inst_22905);
var inst_22887 = inst_22906;
var inst_22888 = inst_22905;
var inst_22889 = inst_22907;
var inst_22890 = (0);
var state_22946__$1 = (function (){var statearr_22980 = state_22946;
(statearr_22980[(13)] = inst_22889);

(statearr_22980[(14)] = inst_22887);

(statearr_22980[(15)] = inst_22888);

(statearr_22980[(16)] = inst_22890);

return statearr_22980;
})();
var statearr_22981_23022 = state_22946__$1;
(statearr_22981_23022[(2)] = null);

(statearr_22981_23022[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22947 === (10))){
var inst_22889 = (state_22946[(13)]);
var inst_22887 = (state_22946[(14)]);
var inst_22888 = (state_22946[(15)]);
var inst_22890 = (state_22946[(16)]);
var inst_22895 = cljs.core._nth.call(null,inst_22888,inst_22890);
var inst_22896 = cljs.core.async.muxch_STAR_.call(null,inst_22895);
var inst_22897 = cljs.core.async.close_BANG_.call(null,inst_22896);
var inst_22898 = (inst_22890 + (1));
var tmp22976 = inst_22889;
var tmp22977 = inst_22887;
var tmp22978 = inst_22888;
var inst_22887__$1 = tmp22977;
var inst_22888__$1 = tmp22978;
var inst_22889__$1 = tmp22976;
var inst_22890__$1 = inst_22898;
var state_22946__$1 = (function (){var statearr_22982 = state_22946;
(statearr_22982[(13)] = inst_22889__$1);

(statearr_22982[(17)] = inst_22897);

(statearr_22982[(14)] = inst_22887__$1);

(statearr_22982[(15)] = inst_22888__$1);

(statearr_22982[(16)] = inst_22890__$1);

return statearr_22982;
})();
var statearr_22983_23023 = state_22946__$1;
(statearr_22983_23023[(2)] = null);

(statearr_22983_23023[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22947 === (18))){
var inst_22916 = (state_22946[(2)]);
var state_22946__$1 = state_22946;
var statearr_22984_23024 = state_22946__$1;
(statearr_22984_23024[(2)] = inst_22916);

(statearr_22984_23024[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22947 === (8))){
var inst_22889 = (state_22946[(13)]);
var inst_22890 = (state_22946[(16)]);
var inst_22892 = (inst_22890 < inst_22889);
var inst_22893 = inst_22892;
var state_22946__$1 = state_22946;
if(cljs.core.truth_(inst_22893)){
var statearr_22985_23025 = state_22946__$1;
(statearr_22985_23025[(1)] = (10));

} else {
var statearr_22986_23026 = state_22946__$1;
(statearr_22986_23026[(1)] = (11));

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
});})(c__14660__auto___22998,mults,ensure_mult,p))
;
return ((function (switch__14595__auto__,c__14660__auto___22998,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__14596__auto__ = null;
var cljs$core$async$state_machine__14596__auto____0 = (function (){
var statearr_22990 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22990[(0)] = cljs$core$async$state_machine__14596__auto__);

(statearr_22990[(1)] = (1));

return statearr_22990;
});
var cljs$core$async$state_machine__14596__auto____1 = (function (state_22946){
while(true){
var ret_value__14597__auto__ = (function (){try{while(true){
var result__14598__auto__ = switch__14595__auto__.call(null,state_22946);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14598__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14598__auto__;
}
break;
}
}catch (e22991){if((e22991 instanceof Object)){
var ex__14599__auto__ = e22991;
var statearr_22992_23027 = state_22946;
(statearr_22992_23027[(5)] = ex__14599__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22946);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22991;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14597__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23028 = state_22946;
state_22946 = G__23028;
continue;
} else {
return ret_value__14597__auto__;
}
break;
}
});
cljs$core$async$state_machine__14596__auto__ = function(state_22946){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14596__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14596__auto____1.call(this,state_22946);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14596__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14596__auto____0;
cljs$core$async$state_machine__14596__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14596__auto____1;
return cljs$core$async$state_machine__14596__auto__;
})()
;})(switch__14595__auto__,c__14660__auto___22998,mults,ensure_mult,p))
})();
var state__14662__auto__ = (function (){var statearr_22993 = f__14661__auto__.call(null);
(statearr_22993[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14660__auto___22998);

return statearr_22993;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14662__auto__);
});})(c__14660__auto___22998,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;
/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var args23029 = [];
var len__12638__auto___23032 = arguments.length;
var i__12639__auto___23033 = (0);
while(true){
if((i__12639__auto___23033 < len__12638__auto___23032)){
args23029.push((arguments[i__12639__auto___23033]));

var G__23034 = (i__12639__auto___23033 + (1));
i__12639__auto___23033 = G__23034;
continue;
} else {
}
break;
}

var G__23031 = args23029.length;
switch (G__23031) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23029.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;
/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var args23036 = [];
var len__12638__auto___23039 = arguments.length;
var i__12639__auto___23040 = (0);
while(true){
if((i__12639__auto___23040 < len__12638__auto___23039)){
args23036.push((arguments[i__12639__auto___23040]));

var G__23041 = (i__12639__auto___23040 + (1));
i__12639__auto___23040 = G__23041;
continue;
} else {
}
break;
}

var G__23038 = args23036.length;
switch (G__23038) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23036.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;
/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var args23043 = [];
var len__12638__auto___23114 = arguments.length;
var i__12639__auto___23115 = (0);
while(true){
if((i__12639__auto___23115 < len__12638__auto___23114)){
args23043.push((arguments[i__12639__auto___23115]));

var G__23116 = (i__12639__auto___23115 + (1));
i__12639__auto___23115 = G__23116;
continue;
} else {
}
break;
}

var G__23045 = args23043.length;
switch (G__23045) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23043.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__14660__auto___23118 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__14660__auto___23118,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__14661__auto__ = (function (){var switch__14595__auto__ = ((function (c__14660__auto___23118,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_23084){
var state_val_23085 = (state_23084[(1)]);
if((state_val_23085 === (7))){
var state_23084__$1 = state_23084;
var statearr_23086_23119 = state_23084__$1;
(statearr_23086_23119[(2)] = null);

(statearr_23086_23119[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23085 === (1))){
var state_23084__$1 = state_23084;
var statearr_23087_23120 = state_23084__$1;
(statearr_23087_23120[(2)] = null);

(statearr_23087_23120[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23085 === (4))){
var inst_23048 = (state_23084[(7)]);
var inst_23050 = (inst_23048 < cnt);
var state_23084__$1 = state_23084;
if(cljs.core.truth_(inst_23050)){
var statearr_23088_23121 = state_23084__$1;
(statearr_23088_23121[(1)] = (6));

} else {
var statearr_23089_23122 = state_23084__$1;
(statearr_23089_23122[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23085 === (15))){
var inst_23080 = (state_23084[(2)]);
var state_23084__$1 = state_23084;
var statearr_23090_23123 = state_23084__$1;
(statearr_23090_23123[(2)] = inst_23080);

(statearr_23090_23123[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23085 === (13))){
var inst_23073 = cljs.core.async.close_BANG_.call(null,out);
var state_23084__$1 = state_23084;
var statearr_23091_23124 = state_23084__$1;
(statearr_23091_23124[(2)] = inst_23073);

(statearr_23091_23124[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23085 === (6))){
var state_23084__$1 = state_23084;
var statearr_23092_23125 = state_23084__$1;
(statearr_23092_23125[(2)] = null);

(statearr_23092_23125[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23085 === (3))){
var inst_23082 = (state_23084[(2)]);
var state_23084__$1 = state_23084;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23084__$1,inst_23082);
} else {
if((state_val_23085 === (12))){
var inst_23070 = (state_23084[(8)]);
var inst_23070__$1 = (state_23084[(2)]);
var inst_23071 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_23070__$1);
var state_23084__$1 = (function (){var statearr_23093 = state_23084;
(statearr_23093[(8)] = inst_23070__$1);

return statearr_23093;
})();
if(cljs.core.truth_(inst_23071)){
var statearr_23094_23126 = state_23084__$1;
(statearr_23094_23126[(1)] = (13));

} else {
var statearr_23095_23127 = state_23084__$1;
(statearr_23095_23127[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23085 === (2))){
var inst_23047 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_23048 = (0);
var state_23084__$1 = (function (){var statearr_23096 = state_23084;
(statearr_23096[(9)] = inst_23047);

(statearr_23096[(7)] = inst_23048);

return statearr_23096;
})();
var statearr_23097_23128 = state_23084__$1;
(statearr_23097_23128[(2)] = null);

(statearr_23097_23128[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23085 === (11))){
var inst_23048 = (state_23084[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_23084,(10),Object,null,(9));
var inst_23057 = chs__$1.call(null,inst_23048);
var inst_23058 = done.call(null,inst_23048);
var inst_23059 = cljs.core.async.take_BANG_.call(null,inst_23057,inst_23058);
var state_23084__$1 = state_23084;
var statearr_23098_23129 = state_23084__$1;
(statearr_23098_23129[(2)] = inst_23059);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23084__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23085 === (9))){
var inst_23048 = (state_23084[(7)]);
var inst_23061 = (state_23084[(2)]);
var inst_23062 = (inst_23048 + (1));
var inst_23048__$1 = inst_23062;
var state_23084__$1 = (function (){var statearr_23099 = state_23084;
(statearr_23099[(7)] = inst_23048__$1);

(statearr_23099[(10)] = inst_23061);

return statearr_23099;
})();
var statearr_23100_23130 = state_23084__$1;
(statearr_23100_23130[(2)] = null);

(statearr_23100_23130[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23085 === (5))){
var inst_23068 = (state_23084[(2)]);
var state_23084__$1 = (function (){var statearr_23101 = state_23084;
(statearr_23101[(11)] = inst_23068);

return statearr_23101;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23084__$1,(12),dchan);
} else {
if((state_val_23085 === (14))){
var inst_23070 = (state_23084[(8)]);
var inst_23075 = cljs.core.apply.call(null,f,inst_23070);
var state_23084__$1 = state_23084;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23084__$1,(16),out,inst_23075);
} else {
if((state_val_23085 === (16))){
var inst_23077 = (state_23084[(2)]);
var state_23084__$1 = (function (){var statearr_23102 = state_23084;
(statearr_23102[(12)] = inst_23077);

return statearr_23102;
})();
var statearr_23103_23131 = state_23084__$1;
(statearr_23103_23131[(2)] = null);

(statearr_23103_23131[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23085 === (10))){
var inst_23052 = (state_23084[(2)]);
var inst_23053 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_23084__$1 = (function (){var statearr_23104 = state_23084;
(statearr_23104[(13)] = inst_23052);

return statearr_23104;
})();
var statearr_23105_23132 = state_23084__$1;
(statearr_23105_23132[(2)] = inst_23053);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23084__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23085 === (8))){
var inst_23066 = (state_23084[(2)]);
var state_23084__$1 = state_23084;
var statearr_23106_23133 = state_23084__$1;
(statearr_23106_23133[(2)] = inst_23066);

(statearr_23106_23133[(1)] = (5));


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
});})(c__14660__auto___23118,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__14595__auto__,c__14660__auto___23118,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__14596__auto__ = null;
var cljs$core$async$state_machine__14596__auto____0 = (function (){
var statearr_23110 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23110[(0)] = cljs$core$async$state_machine__14596__auto__);

(statearr_23110[(1)] = (1));

return statearr_23110;
});
var cljs$core$async$state_machine__14596__auto____1 = (function (state_23084){
while(true){
var ret_value__14597__auto__ = (function (){try{while(true){
var result__14598__auto__ = switch__14595__auto__.call(null,state_23084);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14598__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14598__auto__;
}
break;
}
}catch (e23111){if((e23111 instanceof Object)){
var ex__14599__auto__ = e23111;
var statearr_23112_23134 = state_23084;
(statearr_23112_23134[(5)] = ex__14599__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23084);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23111;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14597__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23135 = state_23084;
state_23084 = G__23135;
continue;
} else {
return ret_value__14597__auto__;
}
break;
}
});
cljs$core$async$state_machine__14596__auto__ = function(state_23084){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14596__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14596__auto____1.call(this,state_23084);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14596__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14596__auto____0;
cljs$core$async$state_machine__14596__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14596__auto____1;
return cljs$core$async$state_machine__14596__auto__;
})()
;})(switch__14595__auto__,c__14660__auto___23118,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__14662__auto__ = (function (){var statearr_23113 = f__14661__auto__.call(null);
(statearr_23113[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14660__auto___23118);

return statearr_23113;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14662__auto__);
});})(c__14660__auto___23118,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;
/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var args23137 = [];
var len__12638__auto___23193 = arguments.length;
var i__12639__auto___23194 = (0);
while(true){
if((i__12639__auto___23194 < len__12638__auto___23193)){
args23137.push((arguments[i__12639__auto___23194]));

var G__23195 = (i__12639__auto___23194 + (1));
i__12639__auto___23194 = G__23195;
continue;
} else {
}
break;
}

var G__23139 = args23137.length;
switch (G__23139) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23137.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__14660__auto___23197 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__14660__auto___23197,out){
return (function (){
var f__14661__auto__ = (function (){var switch__14595__auto__ = ((function (c__14660__auto___23197,out){
return (function (state_23169){
var state_val_23170 = (state_23169[(1)]);
if((state_val_23170 === (7))){
var inst_23148 = (state_23169[(7)]);
var inst_23149 = (state_23169[(8)]);
var inst_23148__$1 = (state_23169[(2)]);
var inst_23149__$1 = cljs.core.nth.call(null,inst_23148__$1,(0),null);
var inst_23150 = cljs.core.nth.call(null,inst_23148__$1,(1),null);
var inst_23151 = (inst_23149__$1 == null);
var state_23169__$1 = (function (){var statearr_23171 = state_23169;
(statearr_23171[(7)] = inst_23148__$1);

(statearr_23171[(9)] = inst_23150);

(statearr_23171[(8)] = inst_23149__$1);

return statearr_23171;
})();
if(cljs.core.truth_(inst_23151)){
var statearr_23172_23198 = state_23169__$1;
(statearr_23172_23198[(1)] = (8));

} else {
var statearr_23173_23199 = state_23169__$1;
(statearr_23173_23199[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23170 === (1))){
var inst_23140 = cljs.core.vec.call(null,chs);
var inst_23141 = inst_23140;
var state_23169__$1 = (function (){var statearr_23174 = state_23169;
(statearr_23174[(10)] = inst_23141);

return statearr_23174;
})();
var statearr_23175_23200 = state_23169__$1;
(statearr_23175_23200[(2)] = null);

(statearr_23175_23200[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23170 === (4))){
var inst_23141 = (state_23169[(10)]);
var state_23169__$1 = state_23169;
return cljs.core.async.ioc_alts_BANG_.call(null,state_23169__$1,(7),inst_23141);
} else {
if((state_val_23170 === (6))){
var inst_23165 = (state_23169[(2)]);
var state_23169__$1 = state_23169;
var statearr_23176_23201 = state_23169__$1;
(statearr_23176_23201[(2)] = inst_23165);

(statearr_23176_23201[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23170 === (3))){
var inst_23167 = (state_23169[(2)]);
var state_23169__$1 = state_23169;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23169__$1,inst_23167);
} else {
if((state_val_23170 === (2))){
var inst_23141 = (state_23169[(10)]);
var inst_23143 = cljs.core.count.call(null,inst_23141);
var inst_23144 = (inst_23143 > (0));
var state_23169__$1 = state_23169;
if(cljs.core.truth_(inst_23144)){
var statearr_23178_23202 = state_23169__$1;
(statearr_23178_23202[(1)] = (4));

} else {
var statearr_23179_23203 = state_23169__$1;
(statearr_23179_23203[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23170 === (11))){
var inst_23141 = (state_23169[(10)]);
var inst_23158 = (state_23169[(2)]);
var tmp23177 = inst_23141;
var inst_23141__$1 = tmp23177;
var state_23169__$1 = (function (){var statearr_23180 = state_23169;
(statearr_23180[(11)] = inst_23158);

(statearr_23180[(10)] = inst_23141__$1);

return statearr_23180;
})();
var statearr_23181_23204 = state_23169__$1;
(statearr_23181_23204[(2)] = null);

(statearr_23181_23204[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23170 === (9))){
var inst_23149 = (state_23169[(8)]);
var state_23169__$1 = state_23169;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23169__$1,(11),out,inst_23149);
} else {
if((state_val_23170 === (5))){
var inst_23163 = cljs.core.async.close_BANG_.call(null,out);
var state_23169__$1 = state_23169;
var statearr_23182_23205 = state_23169__$1;
(statearr_23182_23205[(2)] = inst_23163);

(statearr_23182_23205[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23170 === (10))){
var inst_23161 = (state_23169[(2)]);
var state_23169__$1 = state_23169;
var statearr_23183_23206 = state_23169__$1;
(statearr_23183_23206[(2)] = inst_23161);

(statearr_23183_23206[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23170 === (8))){
var inst_23148 = (state_23169[(7)]);
var inst_23150 = (state_23169[(9)]);
var inst_23141 = (state_23169[(10)]);
var inst_23149 = (state_23169[(8)]);
var inst_23153 = (function (){var cs = inst_23141;
var vec__23146 = inst_23148;
var v = inst_23149;
var c = inst_23150;
return ((function (cs,vec__23146,v,c,inst_23148,inst_23150,inst_23141,inst_23149,state_val_23170,c__14660__auto___23197,out){
return (function (p1__23136_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__23136_SHARP_);
});
;})(cs,vec__23146,v,c,inst_23148,inst_23150,inst_23141,inst_23149,state_val_23170,c__14660__auto___23197,out))
})();
var inst_23154 = cljs.core.filterv.call(null,inst_23153,inst_23141);
var inst_23141__$1 = inst_23154;
var state_23169__$1 = (function (){var statearr_23184 = state_23169;
(statearr_23184[(10)] = inst_23141__$1);

return statearr_23184;
})();
var statearr_23185_23207 = state_23169__$1;
(statearr_23185_23207[(2)] = null);

(statearr_23185_23207[(1)] = (2));


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
});})(c__14660__auto___23197,out))
;
return ((function (switch__14595__auto__,c__14660__auto___23197,out){
return (function() {
var cljs$core$async$state_machine__14596__auto__ = null;
var cljs$core$async$state_machine__14596__auto____0 = (function (){
var statearr_23189 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23189[(0)] = cljs$core$async$state_machine__14596__auto__);

(statearr_23189[(1)] = (1));

return statearr_23189;
});
var cljs$core$async$state_machine__14596__auto____1 = (function (state_23169){
while(true){
var ret_value__14597__auto__ = (function (){try{while(true){
var result__14598__auto__ = switch__14595__auto__.call(null,state_23169);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14598__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14598__auto__;
}
break;
}
}catch (e23190){if((e23190 instanceof Object)){
var ex__14599__auto__ = e23190;
var statearr_23191_23208 = state_23169;
(statearr_23191_23208[(5)] = ex__14599__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23169);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23190;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14597__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23209 = state_23169;
state_23169 = G__23209;
continue;
} else {
return ret_value__14597__auto__;
}
break;
}
});
cljs$core$async$state_machine__14596__auto__ = function(state_23169){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14596__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14596__auto____1.call(this,state_23169);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14596__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14596__auto____0;
cljs$core$async$state_machine__14596__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14596__auto____1;
return cljs$core$async$state_machine__14596__auto__;
})()
;})(switch__14595__auto__,c__14660__auto___23197,out))
})();
var state__14662__auto__ = (function (){var statearr_23192 = f__14661__auto__.call(null);
(statearr_23192[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14660__auto___23197);

return statearr_23192;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14662__auto__);
});})(c__14660__auto___23197,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var args23210 = [];
var len__12638__auto___23259 = arguments.length;
var i__12639__auto___23260 = (0);
while(true){
if((i__12639__auto___23260 < len__12638__auto___23259)){
args23210.push((arguments[i__12639__auto___23260]));

var G__23261 = (i__12639__auto___23260 + (1));
i__12639__auto___23260 = G__23261;
continue;
} else {
}
break;
}

var G__23212 = args23210.length;
switch (G__23212) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23210.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__14660__auto___23263 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__14660__auto___23263,out){
return (function (){
var f__14661__auto__ = (function (){var switch__14595__auto__ = ((function (c__14660__auto___23263,out){
return (function (state_23236){
var state_val_23237 = (state_23236[(1)]);
if((state_val_23237 === (7))){
var inst_23218 = (state_23236[(7)]);
var inst_23218__$1 = (state_23236[(2)]);
var inst_23219 = (inst_23218__$1 == null);
var inst_23220 = cljs.core.not.call(null,inst_23219);
var state_23236__$1 = (function (){var statearr_23238 = state_23236;
(statearr_23238[(7)] = inst_23218__$1);

return statearr_23238;
})();
if(inst_23220){
var statearr_23239_23264 = state_23236__$1;
(statearr_23239_23264[(1)] = (8));

} else {
var statearr_23240_23265 = state_23236__$1;
(statearr_23240_23265[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23237 === (1))){
var inst_23213 = (0);
var state_23236__$1 = (function (){var statearr_23241 = state_23236;
(statearr_23241[(8)] = inst_23213);

return statearr_23241;
})();
var statearr_23242_23266 = state_23236__$1;
(statearr_23242_23266[(2)] = null);

(statearr_23242_23266[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23237 === (4))){
var state_23236__$1 = state_23236;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23236__$1,(7),ch);
} else {
if((state_val_23237 === (6))){
var inst_23231 = (state_23236[(2)]);
var state_23236__$1 = state_23236;
var statearr_23243_23267 = state_23236__$1;
(statearr_23243_23267[(2)] = inst_23231);

(statearr_23243_23267[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23237 === (3))){
var inst_23233 = (state_23236[(2)]);
var inst_23234 = cljs.core.async.close_BANG_.call(null,out);
var state_23236__$1 = (function (){var statearr_23244 = state_23236;
(statearr_23244[(9)] = inst_23233);

return statearr_23244;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23236__$1,inst_23234);
} else {
if((state_val_23237 === (2))){
var inst_23213 = (state_23236[(8)]);
var inst_23215 = (inst_23213 < n);
var state_23236__$1 = state_23236;
if(cljs.core.truth_(inst_23215)){
var statearr_23245_23268 = state_23236__$1;
(statearr_23245_23268[(1)] = (4));

} else {
var statearr_23246_23269 = state_23236__$1;
(statearr_23246_23269[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23237 === (11))){
var inst_23213 = (state_23236[(8)]);
var inst_23223 = (state_23236[(2)]);
var inst_23224 = (inst_23213 + (1));
var inst_23213__$1 = inst_23224;
var state_23236__$1 = (function (){var statearr_23247 = state_23236;
(statearr_23247[(10)] = inst_23223);

(statearr_23247[(8)] = inst_23213__$1);

return statearr_23247;
})();
var statearr_23248_23270 = state_23236__$1;
(statearr_23248_23270[(2)] = null);

(statearr_23248_23270[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23237 === (9))){
var state_23236__$1 = state_23236;
var statearr_23249_23271 = state_23236__$1;
(statearr_23249_23271[(2)] = null);

(statearr_23249_23271[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23237 === (5))){
var state_23236__$1 = state_23236;
var statearr_23250_23272 = state_23236__$1;
(statearr_23250_23272[(2)] = null);

(statearr_23250_23272[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23237 === (10))){
var inst_23228 = (state_23236[(2)]);
var state_23236__$1 = state_23236;
var statearr_23251_23273 = state_23236__$1;
(statearr_23251_23273[(2)] = inst_23228);

(statearr_23251_23273[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23237 === (8))){
var inst_23218 = (state_23236[(7)]);
var state_23236__$1 = state_23236;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23236__$1,(11),out,inst_23218);
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
});})(c__14660__auto___23263,out))
;
return ((function (switch__14595__auto__,c__14660__auto___23263,out){
return (function() {
var cljs$core$async$state_machine__14596__auto__ = null;
var cljs$core$async$state_machine__14596__auto____0 = (function (){
var statearr_23255 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_23255[(0)] = cljs$core$async$state_machine__14596__auto__);

(statearr_23255[(1)] = (1));

return statearr_23255;
});
var cljs$core$async$state_machine__14596__auto____1 = (function (state_23236){
while(true){
var ret_value__14597__auto__ = (function (){try{while(true){
var result__14598__auto__ = switch__14595__auto__.call(null,state_23236);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14598__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14598__auto__;
}
break;
}
}catch (e23256){if((e23256 instanceof Object)){
var ex__14599__auto__ = e23256;
var statearr_23257_23274 = state_23236;
(statearr_23257_23274[(5)] = ex__14599__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23236);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23256;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14597__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23275 = state_23236;
state_23236 = G__23275;
continue;
} else {
return ret_value__14597__auto__;
}
break;
}
});
cljs$core$async$state_machine__14596__auto__ = function(state_23236){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14596__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14596__auto____1.call(this,state_23236);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14596__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14596__auto____0;
cljs$core$async$state_machine__14596__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14596__auto____1;
return cljs$core$async$state_machine__14596__auto__;
})()
;})(switch__14595__auto__,c__14660__auto___23263,out))
})();
var state__14662__auto__ = (function (){var statearr_23258 = f__14661__auto__.call(null);
(statearr_23258[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14660__auto___23263);

return statearr_23258;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14662__auto__);
});})(c__14660__auto___23263,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async23283 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23283 = (function (map_LT_,f,ch,meta23284){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta23284 = meta23284;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async23283.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23285,meta23284__$1){
var self__ = this;
var _23285__$1 = this;
return (new cljs.core.async.t_cljs$core$async23283(self__.map_LT_,self__.f,self__.ch,meta23284__$1));
});

cljs.core.async.t_cljs$core$async23283.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23285){
var self__ = this;
var _23285__$1 = this;
return self__.meta23284;
});

cljs.core.async.t_cljs$core$async23283.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async23283.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async23283.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async23283.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async23283.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async23286 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23286 = (function (map_LT_,f,ch,meta23284,_,fn1,meta23287){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta23284 = meta23284;
this._ = _;
this.fn1 = fn1;
this.meta23287 = meta23287;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async23286.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_23288,meta23287__$1){
var self__ = this;
var _23288__$1 = this;
return (new cljs.core.async.t_cljs$core$async23286(self__.map_LT_,self__.f,self__.ch,self__.meta23284,self__._,self__.fn1,meta23287__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async23286.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_23288){
var self__ = this;
var _23288__$1 = this;
return self__.meta23287;
});})(___$1))
;

cljs.core.async.t_cljs$core$async23286.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async23286.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async23286.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__23276_SHARP_){
return f1.call(null,(((p1__23276_SHARP_ == null))?null:self__.f.call(null,p1__23276_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async23286.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta23284","meta23284",-1876750362,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async23283","cljs.core.async/t_cljs$core$async23283",-2076967904,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta23287","meta23287",-399588334,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async23286.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23286.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23286";

cljs.core.async.t_cljs$core$async23286.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__12178__auto__,writer__12179__auto__,opt__12180__auto__){
return cljs.core._write.call(null,writer__12179__auto__,"cljs.core.async/t_cljs$core$async23286");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async23286 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async23286(map_LT___$1,f__$1,ch__$1,meta23284__$1,___$2,fn1__$1,meta23287){
return (new cljs.core.async.t_cljs$core$async23286(map_LT___$1,f__$1,ch__$1,meta23284__$1,___$2,fn1__$1,meta23287));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async23286(self__.map_LT_,self__.f,self__.ch,self__.meta23284,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__11568__auto__ = ret;
if(cljs.core.truth_(and__11568__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__11568__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async23283.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async23283.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async23283.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta23284","meta23284",-1876750362,null)], null);
});

cljs.core.async.t_cljs$core$async23283.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23283.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23283";

cljs.core.async.t_cljs$core$async23283.cljs$lang$ctorPrWriter = (function (this__12178__auto__,writer__12179__auto__,opt__12180__auto__){
return cljs.core._write.call(null,writer__12179__auto__,"cljs.core.async/t_cljs$core$async23283");
});

cljs.core.async.__GT_t_cljs$core$async23283 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async23283(map_LT___$1,f__$1,ch__$1,meta23284){
return (new cljs.core.async.t_cljs$core$async23283(map_LT___$1,f__$1,ch__$1,meta23284));
});

}

return (new cljs.core.async.t_cljs$core$async23283(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async23292 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23292 = (function (map_GT_,f,ch,meta23293){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta23293 = meta23293;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async23292.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23294,meta23293__$1){
var self__ = this;
var _23294__$1 = this;
return (new cljs.core.async.t_cljs$core$async23292(self__.map_GT_,self__.f,self__.ch,meta23293__$1));
});

cljs.core.async.t_cljs$core$async23292.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23294){
var self__ = this;
var _23294__$1 = this;
return self__.meta23293;
});

cljs.core.async.t_cljs$core$async23292.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async23292.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async23292.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async23292.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async23292.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async23292.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async23292.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta23293","meta23293",1119598312,null)], null);
});

cljs.core.async.t_cljs$core$async23292.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23292.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23292";

cljs.core.async.t_cljs$core$async23292.cljs$lang$ctorPrWriter = (function (this__12178__auto__,writer__12179__auto__,opt__12180__auto__){
return cljs.core._write.call(null,writer__12179__auto__,"cljs.core.async/t_cljs$core$async23292");
});

cljs.core.async.__GT_t_cljs$core$async23292 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async23292(map_GT___$1,f__$1,ch__$1,meta23293){
return (new cljs.core.async.t_cljs$core$async23292(map_GT___$1,f__$1,ch__$1,meta23293));
});

}

return (new cljs.core.async.t_cljs$core$async23292(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async23298 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23298 = (function (filter_GT_,p,ch,meta23299){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta23299 = meta23299;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async23298.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23300,meta23299__$1){
var self__ = this;
var _23300__$1 = this;
return (new cljs.core.async.t_cljs$core$async23298(self__.filter_GT_,self__.p,self__.ch,meta23299__$1));
});

cljs.core.async.t_cljs$core$async23298.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23300){
var self__ = this;
var _23300__$1 = this;
return self__.meta23299;
});

cljs.core.async.t_cljs$core$async23298.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async23298.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async23298.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async23298.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async23298.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async23298.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async23298.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async23298.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta23299","meta23299",920790992,null)], null);
});

cljs.core.async.t_cljs$core$async23298.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23298.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23298";

cljs.core.async.t_cljs$core$async23298.cljs$lang$ctorPrWriter = (function (this__12178__auto__,writer__12179__auto__,opt__12180__auto__){
return cljs.core._write.call(null,writer__12179__auto__,"cljs.core.async/t_cljs$core$async23298");
});

cljs.core.async.__GT_t_cljs$core$async23298 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async23298(filter_GT___$1,p__$1,ch__$1,meta23299){
return (new cljs.core.async.t_cljs$core$async23298(filter_GT___$1,p__$1,ch__$1,meta23299));
});

}

return (new cljs.core.async.t_cljs$core$async23298(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var args23301 = [];
var len__12638__auto___23345 = arguments.length;
var i__12639__auto___23346 = (0);
while(true){
if((i__12639__auto___23346 < len__12638__auto___23345)){
args23301.push((arguments[i__12639__auto___23346]));

var G__23347 = (i__12639__auto___23346 + (1));
i__12639__auto___23346 = G__23347;
continue;
} else {
}
break;
}

var G__23303 = args23301.length;
switch (G__23303) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23301.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__14660__auto___23349 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__14660__auto___23349,out){
return (function (){
var f__14661__auto__ = (function (){var switch__14595__auto__ = ((function (c__14660__auto___23349,out){
return (function (state_23324){
var state_val_23325 = (state_23324[(1)]);
if((state_val_23325 === (7))){
var inst_23320 = (state_23324[(2)]);
var state_23324__$1 = state_23324;
var statearr_23326_23350 = state_23324__$1;
(statearr_23326_23350[(2)] = inst_23320);

(statearr_23326_23350[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23325 === (1))){
var state_23324__$1 = state_23324;
var statearr_23327_23351 = state_23324__$1;
(statearr_23327_23351[(2)] = null);

(statearr_23327_23351[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23325 === (4))){
var inst_23306 = (state_23324[(7)]);
var inst_23306__$1 = (state_23324[(2)]);
var inst_23307 = (inst_23306__$1 == null);
var state_23324__$1 = (function (){var statearr_23328 = state_23324;
(statearr_23328[(7)] = inst_23306__$1);

return statearr_23328;
})();
if(cljs.core.truth_(inst_23307)){
var statearr_23329_23352 = state_23324__$1;
(statearr_23329_23352[(1)] = (5));

} else {
var statearr_23330_23353 = state_23324__$1;
(statearr_23330_23353[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23325 === (6))){
var inst_23306 = (state_23324[(7)]);
var inst_23311 = p.call(null,inst_23306);
var state_23324__$1 = state_23324;
if(cljs.core.truth_(inst_23311)){
var statearr_23331_23354 = state_23324__$1;
(statearr_23331_23354[(1)] = (8));

} else {
var statearr_23332_23355 = state_23324__$1;
(statearr_23332_23355[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23325 === (3))){
var inst_23322 = (state_23324[(2)]);
var state_23324__$1 = state_23324;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23324__$1,inst_23322);
} else {
if((state_val_23325 === (2))){
var state_23324__$1 = state_23324;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23324__$1,(4),ch);
} else {
if((state_val_23325 === (11))){
var inst_23314 = (state_23324[(2)]);
var state_23324__$1 = state_23324;
var statearr_23333_23356 = state_23324__$1;
(statearr_23333_23356[(2)] = inst_23314);

(statearr_23333_23356[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23325 === (9))){
var state_23324__$1 = state_23324;
var statearr_23334_23357 = state_23324__$1;
(statearr_23334_23357[(2)] = null);

(statearr_23334_23357[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23325 === (5))){
var inst_23309 = cljs.core.async.close_BANG_.call(null,out);
var state_23324__$1 = state_23324;
var statearr_23335_23358 = state_23324__$1;
(statearr_23335_23358[(2)] = inst_23309);

(statearr_23335_23358[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23325 === (10))){
var inst_23317 = (state_23324[(2)]);
var state_23324__$1 = (function (){var statearr_23336 = state_23324;
(statearr_23336[(8)] = inst_23317);

return statearr_23336;
})();
var statearr_23337_23359 = state_23324__$1;
(statearr_23337_23359[(2)] = null);

(statearr_23337_23359[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23325 === (8))){
var inst_23306 = (state_23324[(7)]);
var state_23324__$1 = state_23324;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23324__$1,(11),out,inst_23306);
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
});})(c__14660__auto___23349,out))
;
return ((function (switch__14595__auto__,c__14660__auto___23349,out){
return (function() {
var cljs$core$async$state_machine__14596__auto__ = null;
var cljs$core$async$state_machine__14596__auto____0 = (function (){
var statearr_23341 = [null,null,null,null,null,null,null,null,null];
(statearr_23341[(0)] = cljs$core$async$state_machine__14596__auto__);

(statearr_23341[(1)] = (1));

return statearr_23341;
});
var cljs$core$async$state_machine__14596__auto____1 = (function (state_23324){
while(true){
var ret_value__14597__auto__ = (function (){try{while(true){
var result__14598__auto__ = switch__14595__auto__.call(null,state_23324);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14598__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14598__auto__;
}
break;
}
}catch (e23342){if((e23342 instanceof Object)){
var ex__14599__auto__ = e23342;
var statearr_23343_23360 = state_23324;
(statearr_23343_23360[(5)] = ex__14599__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23324);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23342;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14597__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23361 = state_23324;
state_23324 = G__23361;
continue;
} else {
return ret_value__14597__auto__;
}
break;
}
});
cljs$core$async$state_machine__14596__auto__ = function(state_23324){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14596__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14596__auto____1.call(this,state_23324);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14596__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14596__auto____0;
cljs$core$async$state_machine__14596__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14596__auto____1;
return cljs$core$async$state_machine__14596__auto__;
})()
;})(switch__14595__auto__,c__14660__auto___23349,out))
})();
var state__14662__auto__ = (function (){var statearr_23344 = f__14661__auto__.call(null);
(statearr_23344[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14660__auto___23349);

return statearr_23344;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14662__auto__);
});})(c__14660__auto___23349,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args23362 = [];
var len__12638__auto___23365 = arguments.length;
var i__12639__auto___23366 = (0);
while(true){
if((i__12639__auto___23366 < len__12638__auto___23365)){
args23362.push((arguments[i__12639__auto___23366]));

var G__23367 = (i__12639__auto___23366 + (1));
i__12639__auto___23366 = G__23367;
continue;
} else {
}
break;
}

var G__23364 = args23362.length;
switch (G__23364) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23362.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;
cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__14660__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__14660__auto__){
return (function (){
var f__14661__auto__ = (function (){var switch__14595__auto__ = ((function (c__14660__auto__){
return (function (state_23534){
var state_val_23535 = (state_23534[(1)]);
if((state_val_23535 === (7))){
var inst_23530 = (state_23534[(2)]);
var state_23534__$1 = state_23534;
var statearr_23536_23577 = state_23534__$1;
(statearr_23536_23577[(2)] = inst_23530);

(statearr_23536_23577[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23535 === (20))){
var inst_23500 = (state_23534[(7)]);
var inst_23511 = (state_23534[(2)]);
var inst_23512 = cljs.core.next.call(null,inst_23500);
var inst_23486 = inst_23512;
var inst_23487 = null;
var inst_23488 = (0);
var inst_23489 = (0);
var state_23534__$1 = (function (){var statearr_23537 = state_23534;
(statearr_23537[(8)] = inst_23489);

(statearr_23537[(9)] = inst_23511);

(statearr_23537[(10)] = inst_23488);

(statearr_23537[(11)] = inst_23486);

(statearr_23537[(12)] = inst_23487);

return statearr_23537;
})();
var statearr_23538_23578 = state_23534__$1;
(statearr_23538_23578[(2)] = null);

(statearr_23538_23578[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23535 === (1))){
var state_23534__$1 = state_23534;
var statearr_23539_23579 = state_23534__$1;
(statearr_23539_23579[(2)] = null);

(statearr_23539_23579[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23535 === (4))){
var inst_23475 = (state_23534[(13)]);
var inst_23475__$1 = (state_23534[(2)]);
var inst_23476 = (inst_23475__$1 == null);
var state_23534__$1 = (function (){var statearr_23540 = state_23534;
(statearr_23540[(13)] = inst_23475__$1);

return statearr_23540;
})();
if(cljs.core.truth_(inst_23476)){
var statearr_23541_23580 = state_23534__$1;
(statearr_23541_23580[(1)] = (5));

} else {
var statearr_23542_23581 = state_23534__$1;
(statearr_23542_23581[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23535 === (15))){
var state_23534__$1 = state_23534;
var statearr_23546_23582 = state_23534__$1;
(statearr_23546_23582[(2)] = null);

(statearr_23546_23582[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23535 === (21))){
var state_23534__$1 = state_23534;
var statearr_23547_23583 = state_23534__$1;
(statearr_23547_23583[(2)] = null);

(statearr_23547_23583[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23535 === (13))){
var inst_23489 = (state_23534[(8)]);
var inst_23488 = (state_23534[(10)]);
var inst_23486 = (state_23534[(11)]);
var inst_23487 = (state_23534[(12)]);
var inst_23496 = (state_23534[(2)]);
var inst_23497 = (inst_23489 + (1));
var tmp23543 = inst_23488;
var tmp23544 = inst_23486;
var tmp23545 = inst_23487;
var inst_23486__$1 = tmp23544;
var inst_23487__$1 = tmp23545;
var inst_23488__$1 = tmp23543;
var inst_23489__$1 = inst_23497;
var state_23534__$1 = (function (){var statearr_23548 = state_23534;
(statearr_23548[(8)] = inst_23489__$1);

(statearr_23548[(10)] = inst_23488__$1);

(statearr_23548[(14)] = inst_23496);

(statearr_23548[(11)] = inst_23486__$1);

(statearr_23548[(12)] = inst_23487__$1);

return statearr_23548;
})();
var statearr_23549_23584 = state_23534__$1;
(statearr_23549_23584[(2)] = null);

(statearr_23549_23584[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23535 === (22))){
var state_23534__$1 = state_23534;
var statearr_23550_23585 = state_23534__$1;
(statearr_23550_23585[(2)] = null);

(statearr_23550_23585[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23535 === (6))){
var inst_23475 = (state_23534[(13)]);
var inst_23484 = f.call(null,inst_23475);
var inst_23485 = cljs.core.seq.call(null,inst_23484);
var inst_23486 = inst_23485;
var inst_23487 = null;
var inst_23488 = (0);
var inst_23489 = (0);
var state_23534__$1 = (function (){var statearr_23551 = state_23534;
(statearr_23551[(8)] = inst_23489);

(statearr_23551[(10)] = inst_23488);

(statearr_23551[(11)] = inst_23486);

(statearr_23551[(12)] = inst_23487);

return statearr_23551;
})();
var statearr_23552_23586 = state_23534__$1;
(statearr_23552_23586[(2)] = null);

(statearr_23552_23586[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23535 === (17))){
var inst_23500 = (state_23534[(7)]);
var inst_23504 = cljs.core.chunk_first.call(null,inst_23500);
var inst_23505 = cljs.core.chunk_rest.call(null,inst_23500);
var inst_23506 = cljs.core.count.call(null,inst_23504);
var inst_23486 = inst_23505;
var inst_23487 = inst_23504;
var inst_23488 = inst_23506;
var inst_23489 = (0);
var state_23534__$1 = (function (){var statearr_23553 = state_23534;
(statearr_23553[(8)] = inst_23489);

(statearr_23553[(10)] = inst_23488);

(statearr_23553[(11)] = inst_23486);

(statearr_23553[(12)] = inst_23487);

return statearr_23553;
})();
var statearr_23554_23587 = state_23534__$1;
(statearr_23554_23587[(2)] = null);

(statearr_23554_23587[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23535 === (3))){
var inst_23532 = (state_23534[(2)]);
var state_23534__$1 = state_23534;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23534__$1,inst_23532);
} else {
if((state_val_23535 === (12))){
var inst_23520 = (state_23534[(2)]);
var state_23534__$1 = state_23534;
var statearr_23555_23588 = state_23534__$1;
(statearr_23555_23588[(2)] = inst_23520);

(statearr_23555_23588[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23535 === (2))){
var state_23534__$1 = state_23534;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23534__$1,(4),in$);
} else {
if((state_val_23535 === (23))){
var inst_23528 = (state_23534[(2)]);
var state_23534__$1 = state_23534;
var statearr_23556_23589 = state_23534__$1;
(statearr_23556_23589[(2)] = inst_23528);

(statearr_23556_23589[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23535 === (19))){
var inst_23515 = (state_23534[(2)]);
var state_23534__$1 = state_23534;
var statearr_23557_23590 = state_23534__$1;
(statearr_23557_23590[(2)] = inst_23515);

(statearr_23557_23590[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23535 === (11))){
var inst_23486 = (state_23534[(11)]);
var inst_23500 = (state_23534[(7)]);
var inst_23500__$1 = cljs.core.seq.call(null,inst_23486);
var state_23534__$1 = (function (){var statearr_23558 = state_23534;
(statearr_23558[(7)] = inst_23500__$1);

return statearr_23558;
})();
if(inst_23500__$1){
var statearr_23559_23591 = state_23534__$1;
(statearr_23559_23591[(1)] = (14));

} else {
var statearr_23560_23592 = state_23534__$1;
(statearr_23560_23592[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23535 === (9))){
var inst_23522 = (state_23534[(2)]);
var inst_23523 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_23534__$1 = (function (){var statearr_23561 = state_23534;
(statearr_23561[(15)] = inst_23522);

return statearr_23561;
})();
if(cljs.core.truth_(inst_23523)){
var statearr_23562_23593 = state_23534__$1;
(statearr_23562_23593[(1)] = (21));

} else {
var statearr_23563_23594 = state_23534__$1;
(statearr_23563_23594[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23535 === (5))){
var inst_23478 = cljs.core.async.close_BANG_.call(null,out);
var state_23534__$1 = state_23534;
var statearr_23564_23595 = state_23534__$1;
(statearr_23564_23595[(2)] = inst_23478);

(statearr_23564_23595[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23535 === (14))){
var inst_23500 = (state_23534[(7)]);
var inst_23502 = cljs.core.chunked_seq_QMARK_.call(null,inst_23500);
var state_23534__$1 = state_23534;
if(inst_23502){
var statearr_23565_23596 = state_23534__$1;
(statearr_23565_23596[(1)] = (17));

} else {
var statearr_23566_23597 = state_23534__$1;
(statearr_23566_23597[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23535 === (16))){
var inst_23518 = (state_23534[(2)]);
var state_23534__$1 = state_23534;
var statearr_23567_23598 = state_23534__$1;
(statearr_23567_23598[(2)] = inst_23518);

(statearr_23567_23598[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23535 === (10))){
var inst_23489 = (state_23534[(8)]);
var inst_23487 = (state_23534[(12)]);
var inst_23494 = cljs.core._nth.call(null,inst_23487,inst_23489);
var state_23534__$1 = state_23534;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23534__$1,(13),out,inst_23494);
} else {
if((state_val_23535 === (18))){
var inst_23500 = (state_23534[(7)]);
var inst_23509 = cljs.core.first.call(null,inst_23500);
var state_23534__$1 = state_23534;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23534__$1,(20),out,inst_23509);
} else {
if((state_val_23535 === (8))){
var inst_23489 = (state_23534[(8)]);
var inst_23488 = (state_23534[(10)]);
var inst_23491 = (inst_23489 < inst_23488);
var inst_23492 = inst_23491;
var state_23534__$1 = state_23534;
if(cljs.core.truth_(inst_23492)){
var statearr_23568_23599 = state_23534__$1;
(statearr_23568_23599[(1)] = (10));

} else {
var statearr_23569_23600 = state_23534__$1;
(statearr_23569_23600[(1)] = (11));

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
});})(c__14660__auto__))
;
return ((function (switch__14595__auto__,c__14660__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__14596__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__14596__auto____0 = (function (){
var statearr_23573 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23573[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__14596__auto__);

(statearr_23573[(1)] = (1));

return statearr_23573;
});
var cljs$core$async$mapcat_STAR__$_state_machine__14596__auto____1 = (function (state_23534){
while(true){
var ret_value__14597__auto__ = (function (){try{while(true){
var result__14598__auto__ = switch__14595__auto__.call(null,state_23534);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14598__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14598__auto__;
}
break;
}
}catch (e23574){if((e23574 instanceof Object)){
var ex__14599__auto__ = e23574;
var statearr_23575_23601 = state_23534;
(statearr_23575_23601[(5)] = ex__14599__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23534);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23574;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14597__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23602 = state_23534;
state_23534 = G__23602;
continue;
} else {
return ret_value__14597__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__14596__auto__ = function(state_23534){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__14596__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__14596__auto____1.call(this,state_23534);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__14596__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__14596__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__14596__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__14596__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__14596__auto__;
})()
;})(switch__14595__auto__,c__14660__auto__))
})();
var state__14662__auto__ = (function (){var statearr_23576 = f__14661__auto__.call(null);
(statearr_23576[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14660__auto__);

return statearr_23576;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14662__auto__);
});})(c__14660__auto__))
);

return c__14660__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args23603 = [];
var len__12638__auto___23606 = arguments.length;
var i__12639__auto___23607 = (0);
while(true){
if((i__12639__auto___23607 < len__12638__auto___23606)){
args23603.push((arguments[i__12639__auto___23607]));

var G__23608 = (i__12639__auto___23607 + (1));
i__12639__auto___23607 = G__23608;
continue;
} else {
}
break;
}

var G__23605 = args23603.length;
switch (G__23605) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23603.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var args23610 = [];
var len__12638__auto___23613 = arguments.length;
var i__12639__auto___23614 = (0);
while(true){
if((i__12639__auto___23614 < len__12638__auto___23613)){
args23610.push((arguments[i__12639__auto___23614]));

var G__23615 = (i__12639__auto___23614 + (1));
i__12639__auto___23614 = G__23615;
continue;
} else {
}
break;
}

var G__23612 = args23610.length;
switch (G__23612) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23610.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var args23617 = [];
var len__12638__auto___23668 = arguments.length;
var i__12639__auto___23669 = (0);
while(true){
if((i__12639__auto___23669 < len__12638__auto___23668)){
args23617.push((arguments[i__12639__auto___23669]));

var G__23670 = (i__12639__auto___23669 + (1));
i__12639__auto___23669 = G__23670;
continue;
} else {
}
break;
}

var G__23619 = args23617.length;
switch (G__23619) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23617.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__14660__auto___23672 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__14660__auto___23672,out){
return (function (){
var f__14661__auto__ = (function (){var switch__14595__auto__ = ((function (c__14660__auto___23672,out){
return (function (state_23643){
var state_val_23644 = (state_23643[(1)]);
if((state_val_23644 === (7))){
var inst_23638 = (state_23643[(2)]);
var state_23643__$1 = state_23643;
var statearr_23645_23673 = state_23643__$1;
(statearr_23645_23673[(2)] = inst_23638);

(statearr_23645_23673[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23644 === (1))){
var inst_23620 = null;
var state_23643__$1 = (function (){var statearr_23646 = state_23643;
(statearr_23646[(7)] = inst_23620);

return statearr_23646;
})();
var statearr_23647_23674 = state_23643__$1;
(statearr_23647_23674[(2)] = null);

(statearr_23647_23674[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23644 === (4))){
var inst_23623 = (state_23643[(8)]);
var inst_23623__$1 = (state_23643[(2)]);
var inst_23624 = (inst_23623__$1 == null);
var inst_23625 = cljs.core.not.call(null,inst_23624);
var state_23643__$1 = (function (){var statearr_23648 = state_23643;
(statearr_23648[(8)] = inst_23623__$1);

return statearr_23648;
})();
if(inst_23625){
var statearr_23649_23675 = state_23643__$1;
(statearr_23649_23675[(1)] = (5));

} else {
var statearr_23650_23676 = state_23643__$1;
(statearr_23650_23676[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23644 === (6))){
var state_23643__$1 = state_23643;
var statearr_23651_23677 = state_23643__$1;
(statearr_23651_23677[(2)] = null);

(statearr_23651_23677[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23644 === (3))){
var inst_23640 = (state_23643[(2)]);
var inst_23641 = cljs.core.async.close_BANG_.call(null,out);
var state_23643__$1 = (function (){var statearr_23652 = state_23643;
(statearr_23652[(9)] = inst_23640);

return statearr_23652;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23643__$1,inst_23641);
} else {
if((state_val_23644 === (2))){
var state_23643__$1 = state_23643;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23643__$1,(4),ch);
} else {
if((state_val_23644 === (11))){
var inst_23623 = (state_23643[(8)]);
var inst_23632 = (state_23643[(2)]);
var inst_23620 = inst_23623;
var state_23643__$1 = (function (){var statearr_23653 = state_23643;
(statearr_23653[(7)] = inst_23620);

(statearr_23653[(10)] = inst_23632);

return statearr_23653;
})();
var statearr_23654_23678 = state_23643__$1;
(statearr_23654_23678[(2)] = null);

(statearr_23654_23678[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23644 === (9))){
var inst_23623 = (state_23643[(8)]);
var state_23643__$1 = state_23643;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23643__$1,(11),out,inst_23623);
} else {
if((state_val_23644 === (5))){
var inst_23623 = (state_23643[(8)]);
var inst_23620 = (state_23643[(7)]);
var inst_23627 = cljs.core._EQ_.call(null,inst_23623,inst_23620);
var state_23643__$1 = state_23643;
if(inst_23627){
var statearr_23656_23679 = state_23643__$1;
(statearr_23656_23679[(1)] = (8));

} else {
var statearr_23657_23680 = state_23643__$1;
(statearr_23657_23680[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23644 === (10))){
var inst_23635 = (state_23643[(2)]);
var state_23643__$1 = state_23643;
var statearr_23658_23681 = state_23643__$1;
(statearr_23658_23681[(2)] = inst_23635);

(statearr_23658_23681[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23644 === (8))){
var inst_23620 = (state_23643[(7)]);
var tmp23655 = inst_23620;
var inst_23620__$1 = tmp23655;
var state_23643__$1 = (function (){var statearr_23659 = state_23643;
(statearr_23659[(7)] = inst_23620__$1);

return statearr_23659;
})();
var statearr_23660_23682 = state_23643__$1;
(statearr_23660_23682[(2)] = null);

(statearr_23660_23682[(1)] = (2));


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
});})(c__14660__auto___23672,out))
;
return ((function (switch__14595__auto__,c__14660__auto___23672,out){
return (function() {
var cljs$core$async$state_machine__14596__auto__ = null;
var cljs$core$async$state_machine__14596__auto____0 = (function (){
var statearr_23664 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_23664[(0)] = cljs$core$async$state_machine__14596__auto__);

(statearr_23664[(1)] = (1));

return statearr_23664;
});
var cljs$core$async$state_machine__14596__auto____1 = (function (state_23643){
while(true){
var ret_value__14597__auto__ = (function (){try{while(true){
var result__14598__auto__ = switch__14595__auto__.call(null,state_23643);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14598__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14598__auto__;
}
break;
}
}catch (e23665){if((e23665 instanceof Object)){
var ex__14599__auto__ = e23665;
var statearr_23666_23683 = state_23643;
(statearr_23666_23683[(5)] = ex__14599__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23643);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23665;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14597__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23684 = state_23643;
state_23643 = G__23684;
continue;
} else {
return ret_value__14597__auto__;
}
break;
}
});
cljs$core$async$state_machine__14596__auto__ = function(state_23643){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14596__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14596__auto____1.call(this,state_23643);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14596__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14596__auto____0;
cljs$core$async$state_machine__14596__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14596__auto____1;
return cljs$core$async$state_machine__14596__auto__;
})()
;})(switch__14595__auto__,c__14660__auto___23672,out))
})();
var state__14662__auto__ = (function (){var statearr_23667 = f__14661__auto__.call(null);
(statearr_23667[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14660__auto___23672);

return statearr_23667;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14662__auto__);
});})(c__14660__auto___23672,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args23685 = [];
var len__12638__auto___23755 = arguments.length;
var i__12639__auto___23756 = (0);
while(true){
if((i__12639__auto___23756 < len__12638__auto___23755)){
args23685.push((arguments[i__12639__auto___23756]));

var G__23757 = (i__12639__auto___23756 + (1));
i__12639__auto___23756 = G__23757;
continue;
} else {
}
break;
}

var G__23687 = args23685.length;
switch (G__23687) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23685.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__14660__auto___23759 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__14660__auto___23759,out){
return (function (){
var f__14661__auto__ = (function (){var switch__14595__auto__ = ((function (c__14660__auto___23759,out){
return (function (state_23725){
var state_val_23726 = (state_23725[(1)]);
if((state_val_23726 === (7))){
var inst_23721 = (state_23725[(2)]);
var state_23725__$1 = state_23725;
var statearr_23727_23760 = state_23725__$1;
(statearr_23727_23760[(2)] = inst_23721);

(statearr_23727_23760[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23726 === (1))){
var inst_23688 = (new Array(n));
var inst_23689 = inst_23688;
var inst_23690 = (0);
var state_23725__$1 = (function (){var statearr_23728 = state_23725;
(statearr_23728[(7)] = inst_23690);

(statearr_23728[(8)] = inst_23689);

return statearr_23728;
})();
var statearr_23729_23761 = state_23725__$1;
(statearr_23729_23761[(2)] = null);

(statearr_23729_23761[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23726 === (4))){
var inst_23693 = (state_23725[(9)]);
var inst_23693__$1 = (state_23725[(2)]);
var inst_23694 = (inst_23693__$1 == null);
var inst_23695 = cljs.core.not.call(null,inst_23694);
var state_23725__$1 = (function (){var statearr_23730 = state_23725;
(statearr_23730[(9)] = inst_23693__$1);

return statearr_23730;
})();
if(inst_23695){
var statearr_23731_23762 = state_23725__$1;
(statearr_23731_23762[(1)] = (5));

} else {
var statearr_23732_23763 = state_23725__$1;
(statearr_23732_23763[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23726 === (15))){
var inst_23715 = (state_23725[(2)]);
var state_23725__$1 = state_23725;
var statearr_23733_23764 = state_23725__$1;
(statearr_23733_23764[(2)] = inst_23715);

(statearr_23733_23764[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23726 === (13))){
var state_23725__$1 = state_23725;
var statearr_23734_23765 = state_23725__$1;
(statearr_23734_23765[(2)] = null);

(statearr_23734_23765[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23726 === (6))){
var inst_23690 = (state_23725[(7)]);
var inst_23711 = (inst_23690 > (0));
var state_23725__$1 = state_23725;
if(cljs.core.truth_(inst_23711)){
var statearr_23735_23766 = state_23725__$1;
(statearr_23735_23766[(1)] = (12));

} else {
var statearr_23736_23767 = state_23725__$1;
(statearr_23736_23767[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23726 === (3))){
var inst_23723 = (state_23725[(2)]);
var state_23725__$1 = state_23725;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23725__$1,inst_23723);
} else {
if((state_val_23726 === (12))){
var inst_23689 = (state_23725[(8)]);
var inst_23713 = cljs.core.vec.call(null,inst_23689);
var state_23725__$1 = state_23725;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23725__$1,(15),out,inst_23713);
} else {
if((state_val_23726 === (2))){
var state_23725__$1 = state_23725;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23725__$1,(4),ch);
} else {
if((state_val_23726 === (11))){
var inst_23705 = (state_23725[(2)]);
var inst_23706 = (new Array(n));
var inst_23689 = inst_23706;
var inst_23690 = (0);
var state_23725__$1 = (function (){var statearr_23737 = state_23725;
(statearr_23737[(10)] = inst_23705);

(statearr_23737[(7)] = inst_23690);

(statearr_23737[(8)] = inst_23689);

return statearr_23737;
})();
var statearr_23738_23768 = state_23725__$1;
(statearr_23738_23768[(2)] = null);

(statearr_23738_23768[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23726 === (9))){
var inst_23689 = (state_23725[(8)]);
var inst_23703 = cljs.core.vec.call(null,inst_23689);
var state_23725__$1 = state_23725;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23725__$1,(11),out,inst_23703);
} else {
if((state_val_23726 === (5))){
var inst_23690 = (state_23725[(7)]);
var inst_23698 = (state_23725[(11)]);
var inst_23693 = (state_23725[(9)]);
var inst_23689 = (state_23725[(8)]);
var inst_23697 = (inst_23689[inst_23690] = inst_23693);
var inst_23698__$1 = (inst_23690 + (1));
var inst_23699 = (inst_23698__$1 < n);
var state_23725__$1 = (function (){var statearr_23739 = state_23725;
(statearr_23739[(11)] = inst_23698__$1);

(statearr_23739[(12)] = inst_23697);

return statearr_23739;
})();
if(cljs.core.truth_(inst_23699)){
var statearr_23740_23769 = state_23725__$1;
(statearr_23740_23769[(1)] = (8));

} else {
var statearr_23741_23770 = state_23725__$1;
(statearr_23741_23770[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23726 === (14))){
var inst_23718 = (state_23725[(2)]);
var inst_23719 = cljs.core.async.close_BANG_.call(null,out);
var state_23725__$1 = (function (){var statearr_23743 = state_23725;
(statearr_23743[(13)] = inst_23718);

return statearr_23743;
})();
var statearr_23744_23771 = state_23725__$1;
(statearr_23744_23771[(2)] = inst_23719);

(statearr_23744_23771[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23726 === (10))){
var inst_23709 = (state_23725[(2)]);
var state_23725__$1 = state_23725;
var statearr_23745_23772 = state_23725__$1;
(statearr_23745_23772[(2)] = inst_23709);

(statearr_23745_23772[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23726 === (8))){
var inst_23698 = (state_23725[(11)]);
var inst_23689 = (state_23725[(8)]);
var tmp23742 = inst_23689;
var inst_23689__$1 = tmp23742;
var inst_23690 = inst_23698;
var state_23725__$1 = (function (){var statearr_23746 = state_23725;
(statearr_23746[(7)] = inst_23690);

(statearr_23746[(8)] = inst_23689__$1);

return statearr_23746;
})();
var statearr_23747_23773 = state_23725__$1;
(statearr_23747_23773[(2)] = null);

(statearr_23747_23773[(1)] = (2));


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
});})(c__14660__auto___23759,out))
;
return ((function (switch__14595__auto__,c__14660__auto___23759,out){
return (function() {
var cljs$core$async$state_machine__14596__auto__ = null;
var cljs$core$async$state_machine__14596__auto____0 = (function (){
var statearr_23751 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23751[(0)] = cljs$core$async$state_machine__14596__auto__);

(statearr_23751[(1)] = (1));

return statearr_23751;
});
var cljs$core$async$state_machine__14596__auto____1 = (function (state_23725){
while(true){
var ret_value__14597__auto__ = (function (){try{while(true){
var result__14598__auto__ = switch__14595__auto__.call(null,state_23725);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14598__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14598__auto__;
}
break;
}
}catch (e23752){if((e23752 instanceof Object)){
var ex__14599__auto__ = e23752;
var statearr_23753_23774 = state_23725;
(statearr_23753_23774[(5)] = ex__14599__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23725);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23752;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14597__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23775 = state_23725;
state_23725 = G__23775;
continue;
} else {
return ret_value__14597__auto__;
}
break;
}
});
cljs$core$async$state_machine__14596__auto__ = function(state_23725){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14596__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14596__auto____1.call(this,state_23725);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14596__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14596__auto____0;
cljs$core$async$state_machine__14596__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14596__auto____1;
return cljs$core$async$state_machine__14596__auto__;
})()
;})(switch__14595__auto__,c__14660__auto___23759,out))
})();
var state__14662__auto__ = (function (){var statearr_23754 = f__14661__auto__.call(null);
(statearr_23754[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14660__auto___23759);

return statearr_23754;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14662__auto__);
});})(c__14660__auto___23759,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args23776 = [];
var len__12638__auto___23850 = arguments.length;
var i__12639__auto___23851 = (0);
while(true){
if((i__12639__auto___23851 < len__12638__auto___23850)){
args23776.push((arguments[i__12639__auto___23851]));

var G__23852 = (i__12639__auto___23851 + (1));
i__12639__auto___23851 = G__23852;
continue;
} else {
}
break;
}

var G__23778 = args23776.length;
switch (G__23778) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23776.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__14660__auto___23854 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__14660__auto___23854,out){
return (function (){
var f__14661__auto__ = (function (){var switch__14595__auto__ = ((function (c__14660__auto___23854,out){
return (function (state_23820){
var state_val_23821 = (state_23820[(1)]);
if((state_val_23821 === (7))){
var inst_23816 = (state_23820[(2)]);
var state_23820__$1 = state_23820;
var statearr_23822_23855 = state_23820__$1;
(statearr_23822_23855[(2)] = inst_23816);

(statearr_23822_23855[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23821 === (1))){
var inst_23779 = [];
var inst_23780 = inst_23779;
var inst_23781 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_23820__$1 = (function (){var statearr_23823 = state_23820;
(statearr_23823[(7)] = inst_23781);

(statearr_23823[(8)] = inst_23780);

return statearr_23823;
})();
var statearr_23824_23856 = state_23820__$1;
(statearr_23824_23856[(2)] = null);

(statearr_23824_23856[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23821 === (4))){
var inst_23784 = (state_23820[(9)]);
var inst_23784__$1 = (state_23820[(2)]);
var inst_23785 = (inst_23784__$1 == null);
var inst_23786 = cljs.core.not.call(null,inst_23785);
var state_23820__$1 = (function (){var statearr_23825 = state_23820;
(statearr_23825[(9)] = inst_23784__$1);

return statearr_23825;
})();
if(inst_23786){
var statearr_23826_23857 = state_23820__$1;
(statearr_23826_23857[(1)] = (5));

} else {
var statearr_23827_23858 = state_23820__$1;
(statearr_23827_23858[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23821 === (15))){
var inst_23810 = (state_23820[(2)]);
var state_23820__$1 = state_23820;
var statearr_23828_23859 = state_23820__$1;
(statearr_23828_23859[(2)] = inst_23810);

(statearr_23828_23859[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23821 === (13))){
var state_23820__$1 = state_23820;
var statearr_23829_23860 = state_23820__$1;
(statearr_23829_23860[(2)] = null);

(statearr_23829_23860[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23821 === (6))){
var inst_23780 = (state_23820[(8)]);
var inst_23805 = inst_23780.length;
var inst_23806 = (inst_23805 > (0));
var state_23820__$1 = state_23820;
if(cljs.core.truth_(inst_23806)){
var statearr_23830_23861 = state_23820__$1;
(statearr_23830_23861[(1)] = (12));

} else {
var statearr_23831_23862 = state_23820__$1;
(statearr_23831_23862[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23821 === (3))){
var inst_23818 = (state_23820[(2)]);
var state_23820__$1 = state_23820;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23820__$1,inst_23818);
} else {
if((state_val_23821 === (12))){
var inst_23780 = (state_23820[(8)]);
var inst_23808 = cljs.core.vec.call(null,inst_23780);
var state_23820__$1 = state_23820;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23820__$1,(15),out,inst_23808);
} else {
if((state_val_23821 === (2))){
var state_23820__$1 = state_23820;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23820__$1,(4),ch);
} else {
if((state_val_23821 === (11))){
var inst_23784 = (state_23820[(9)]);
var inst_23788 = (state_23820[(10)]);
var inst_23798 = (state_23820[(2)]);
var inst_23799 = [];
var inst_23800 = inst_23799.push(inst_23784);
var inst_23780 = inst_23799;
var inst_23781 = inst_23788;
var state_23820__$1 = (function (){var statearr_23832 = state_23820;
(statearr_23832[(7)] = inst_23781);

(statearr_23832[(11)] = inst_23798);

(statearr_23832[(8)] = inst_23780);

(statearr_23832[(12)] = inst_23800);

return statearr_23832;
})();
var statearr_23833_23863 = state_23820__$1;
(statearr_23833_23863[(2)] = null);

(statearr_23833_23863[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23821 === (9))){
var inst_23780 = (state_23820[(8)]);
var inst_23796 = cljs.core.vec.call(null,inst_23780);
var state_23820__$1 = state_23820;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23820__$1,(11),out,inst_23796);
} else {
if((state_val_23821 === (5))){
var inst_23781 = (state_23820[(7)]);
var inst_23784 = (state_23820[(9)]);
var inst_23788 = (state_23820[(10)]);
var inst_23788__$1 = f.call(null,inst_23784);
var inst_23789 = cljs.core._EQ_.call(null,inst_23788__$1,inst_23781);
var inst_23790 = cljs.core.keyword_identical_QMARK_.call(null,inst_23781,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_23791 = (inst_23789) || (inst_23790);
var state_23820__$1 = (function (){var statearr_23834 = state_23820;
(statearr_23834[(10)] = inst_23788__$1);

return statearr_23834;
})();
if(cljs.core.truth_(inst_23791)){
var statearr_23835_23864 = state_23820__$1;
(statearr_23835_23864[(1)] = (8));

} else {
var statearr_23836_23865 = state_23820__$1;
(statearr_23836_23865[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23821 === (14))){
var inst_23813 = (state_23820[(2)]);
var inst_23814 = cljs.core.async.close_BANG_.call(null,out);
var state_23820__$1 = (function (){var statearr_23838 = state_23820;
(statearr_23838[(13)] = inst_23813);

return statearr_23838;
})();
var statearr_23839_23866 = state_23820__$1;
(statearr_23839_23866[(2)] = inst_23814);

(statearr_23839_23866[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23821 === (10))){
var inst_23803 = (state_23820[(2)]);
var state_23820__$1 = state_23820;
var statearr_23840_23867 = state_23820__$1;
(statearr_23840_23867[(2)] = inst_23803);

(statearr_23840_23867[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23821 === (8))){
var inst_23784 = (state_23820[(9)]);
var inst_23788 = (state_23820[(10)]);
var inst_23780 = (state_23820[(8)]);
var inst_23793 = inst_23780.push(inst_23784);
var tmp23837 = inst_23780;
var inst_23780__$1 = tmp23837;
var inst_23781 = inst_23788;
var state_23820__$1 = (function (){var statearr_23841 = state_23820;
(statearr_23841[(7)] = inst_23781);

(statearr_23841[(14)] = inst_23793);

(statearr_23841[(8)] = inst_23780__$1);

return statearr_23841;
})();
var statearr_23842_23868 = state_23820__$1;
(statearr_23842_23868[(2)] = null);

(statearr_23842_23868[(1)] = (2));


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
});})(c__14660__auto___23854,out))
;
return ((function (switch__14595__auto__,c__14660__auto___23854,out){
return (function() {
var cljs$core$async$state_machine__14596__auto__ = null;
var cljs$core$async$state_machine__14596__auto____0 = (function (){
var statearr_23846 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23846[(0)] = cljs$core$async$state_machine__14596__auto__);

(statearr_23846[(1)] = (1));

return statearr_23846;
});
var cljs$core$async$state_machine__14596__auto____1 = (function (state_23820){
while(true){
var ret_value__14597__auto__ = (function (){try{while(true){
var result__14598__auto__ = switch__14595__auto__.call(null,state_23820);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14598__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14598__auto__;
}
break;
}
}catch (e23847){if((e23847 instanceof Object)){
var ex__14599__auto__ = e23847;
var statearr_23848_23869 = state_23820;
(statearr_23848_23869[(5)] = ex__14599__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23820);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23847;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14597__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23870 = state_23820;
state_23820 = G__23870;
continue;
} else {
return ret_value__14597__auto__;
}
break;
}
});
cljs$core$async$state_machine__14596__auto__ = function(state_23820){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14596__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14596__auto____1.call(this,state_23820);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14596__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14596__auto____0;
cljs$core$async$state_machine__14596__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14596__auto____1;
return cljs$core$async$state_machine__14596__auto__;
})()
;})(switch__14595__auto__,c__14660__auto___23854,out))
})();
var state__14662__auto__ = (function (){var statearr_23849 = f__14661__auto__.call(null);
(statearr_23849[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14660__auto___23854);

return statearr_23849;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14662__auto__);
});})(c__14660__auto___23854,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map