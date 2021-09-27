import { WebPlugin } from '@capacitor/core';
import { IOSNativeBackSwipePlugin } from './definitions';

export class IOSNativeBackSwipeWeb extends WebPlugin implements IOSNativeBackSwipePlugin {
  constructor() {
    super({
      name: 'IOSNativeBackSwipe',
      platforms: ['web'],
    });
  }

  async enableSwipe(): Promise<{ result: boolean }> {
    return { result: false };
  }

  async disableSwipe(): Promise<{ result: boolean }> {
    return { result: false };
  }
}

const IOSNativeBackSwipe = new IOSNativeBackSwipeWeb();

export { IOSNativeBackSwipe };

import { registerWebPlugin } from '@capacitor/core';
registerWebPlugin(IOSNativeBackSwipe);
