// Compiled by ClojureScript 1.7.122 {}
goog.provide('devise_ui.core');
goog.require('cljs.core');
goog.require('clojure.browser.repl');
cljs.core.enable_console_print_BANG_.call(null);
cljs.core.println.call(null,"Hello world!");
devise_ui.core.devise_ui = angular.module("devise-ui",["ng-token-auth"]);
angular.module("devise-ui").config(["$authProvider",(function ($authProvider){
return $authProvider.configure((function (){var obj16869 = {"apiUrl":"http://localhost:3000"};
return obj16869;
})());
})]);
devise_ui.core.devise_ui_dashboard = ["$scope","$filter","$auth",(function ($scope,$filter,$auth){
$scope.handleLogin = (function (login){
return $auth.submitLogin(login).then((function (p1__16870_SHARP_){
return cljs.core.println.call(null,"resp:",p1__16870_SHARP_);
})).catch((function (p1__16871_SHARP_){
return cljs.core.println.call(null,"error:",p1__16871_SHARP_);
}));
});

$scope.items = "things";

return $scope.$watch("person.name",(function (newVal,oldVal){
return cljs.core.println.call(null,$filter.call(null,"uppercase").call(null,newVal));
}));
})];

angular.module("devise-ui").controller("dashboard",devise_ui.core.devise_ui_dashboard);

//# sourceMappingURL=core.js.map