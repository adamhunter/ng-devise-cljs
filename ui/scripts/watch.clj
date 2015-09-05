(require '[cljs.build.api :as b])

(b/watch "src"
  {:main 'devise-ui.core
   :output-to "out/devise_ui.js"
   :output-dir "out"})
