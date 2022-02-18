import { Injectable } from '@nestjs/common';

@Injectable()
export class TimedRequestService {
  timer: NodeJS.Timer;
  callback: (...args) => any;
  ms: number;
  args: any[];

  init(callback, ms: number, ...args) {
    this.callback = callback;
    this.ms = ms;
    this.args = args;
    this.timer = setInterval(() => callback(...args), ms);
  }

  sync() {
    if (!this.timer) {
      return `There is no interval at this time`;
    }
    clearInterval(this.timer);
    this.init(this.callback, this.ms, this.args);
    return 'Interval was refreshed';
  }
}
