import { WebPlugin } from '@capacitor/core';
import { IOSNativeBackSwipePlugin } from './definitions';
export declare class IOSNativeBackSwipeWeb extends WebPlugin implements IOSNativeBackSwipePlugin {
    constructor();
    enableSwipe(): Promise<{
        result: boolean;
    }>;
    disableSwipe(): Promise<{
        result: boolean;
    }>;
}
declare const IOSNativeBackSwipe: IOSNativeBackSwipeWeb;
export { IOSNativeBackSwipe };
