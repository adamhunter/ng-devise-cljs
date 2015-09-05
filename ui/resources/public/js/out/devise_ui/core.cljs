(ns devise-ui.core
  (:require [clojure.browser.repl :as repl])
  (:use-macros [gyr.core :only [def.module
                                def.config
                                def.filter
                                def.factory
                                def.controller
                                def.service]]))

;; (defonce conn
;;   (repl/connect "http://localhost:9000/repl"))

(enable-console-print!)

(println "Hello world!")

(def.module devise-ui [ng-token-auth])

(def.config devise-ui [$authProvider]
  (-> $authProvider
      (.configure (js-obj "apiUrl" "http://localhost:3000"))))

(def.controller devise-ui.dashboard [$scope $filter $auth]
  (set! (.-handleLogin $scope) 
        (fn [login]
          (-> $auth
              (.submitLogin login)
              (.then #(println "resp:" %))
              (.catch #(println "error:" %)))))
  (set! (.-items $scope) "things")
  (.$watch $scope "person.name" (fn [newVal oldVal]
                                  (println (($filter "uppercase") newVal)))))

