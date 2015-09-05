(ns figwheel.connect (:require [figwheel.client] [figwheel.client.utils] [devise-ui.core]))
(figwheel.client/start {:build-id "ui", :websocket-url "ws://localhost:3449/figwheel-ws"})

