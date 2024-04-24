import { Injectable } from "@angular/core";

@Injectable()
export class LoggerService {
    constructor() {}

    logToConsole(accountStatus: string) {
        console.log('A server status changed, new status: ' + accountStatus);
    }
}