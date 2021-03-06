(defproject devise-ui "0.1.0-SNAPSHOT"
  :description "FIXME: write this!"
  :url "http://example.com/FIXME"
  :dependencies [[org.clojure/clojure "1.7.0"]
                 [org.clojure/clojurescript "1.7.122" :classifier "aot"
                  :exclusion [org.clojure/data.json]]
                 [org.clojure/data.json "0.2.6" :classifier "aot"]
                 [im.chit/gyr  "0.3.1"]]
  :jvm-opts ^:replace ["-Xmx1g" "-server"]
  :plugins [[lein-npm "0.6.1"]
            [lein-figwheel  "0.3.9"]]
  :npm {:dependencies [[source-map-support "0.3.2"]]}
  :source-paths ["src" "target/classes"]
  :clean-targets ["out" "release"]
  :target-path "target"
  
  :cljsbuild {
              :builds [ { :id "ui" 
                         :source-paths ["src/"]
                         :figwheel true
                         :compiler {  :main "devise-ui.core"
                                    :asset-path "js/out"
                                    :output-to "resources/public/js/devise_ui.js"
                                    :output-dir "resources/public/js/out" } } ]
              })
