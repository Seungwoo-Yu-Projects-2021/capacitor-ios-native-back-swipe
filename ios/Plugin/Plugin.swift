import Foundation
import Capacitor

/**
 * Please read the Capacitor iOS Plugin Development Guide
 * here: https://capacitorjs.com/docs/plugins/ios
 */
@objc(CapacitorIOSNativeBackSwipe)
public class CapacitorIOSNativeBackSwipe: CAPPlugin {
    @objc func enableSwipe(_ call: CAPPluginCall) {
        let webView = self.bridge.getWebView()

        DispatchQueue.main.async {
            webView?.allowsBackForwardNavigationGestures = true

            call.success([
                "result": true
            ])
        }
    }

    @objc func disableSwipe(_ call: CAPPluginCall) {
        let webView = self.bridge.getWebView()

        DispatchQueue.main.async {
            webView?.allowsBackForwardNavigationGestures = false

            call.success([
                "result": true
            ])
        }
    }
}
