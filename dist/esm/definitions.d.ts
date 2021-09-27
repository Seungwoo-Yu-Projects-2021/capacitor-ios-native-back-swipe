declare module '@capacitor/core' {
    interface PluginRegistry {
        IOSNativeBackSwipe: IOSNativeBackSwipePlugin;
    }
}
export interface IOSNativeBackSwipePlugin {
    enableSwipe(): Promise<{
        result: boolean;
    }>;
    disableSwipe(): Promise<{
        result: boolean;
    }>;
}
