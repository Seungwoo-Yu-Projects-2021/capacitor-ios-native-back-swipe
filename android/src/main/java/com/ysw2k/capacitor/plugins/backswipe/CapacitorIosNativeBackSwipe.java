package com.ysw2k.capacitor.plugins.backswipe;

import com.getcapacitor.JSObject;
import com.getcapacitor.NativePlugin;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;

@NativePlugin
public class CapacitorIosNativeBackSwipe extends Plugin {

    @PluginMethod
    public void enableSwipe(PluginCall call) {
        JSObject ret = new JSObject();
        ret.put("result", false);
        call.success(ret);
    }

    @PluginMethod
    public void disableSwipe(PluginCall call) {
        JSObject ret = new JSObject();
        ret.put("result", false);
        call.success(ret);
    }
}
