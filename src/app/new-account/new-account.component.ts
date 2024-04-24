import { Component, EventEmitter, Output } from '@angular/core';
import { Account } from '../schemas/Account';
import { LoggerService } from '../logger.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css']
})
export class NewAccountComponent {
  @Output() accountAdded = new EventEmitter<Account>();

  constructor(private logger: LoggerService) {}
  onCreateAccount(accountName: string, accountStatus: string) {
    this.accountAdded.emit({
      name: accountName, 
      status: accountStatus
    });
   
    this.logger.logToConsole(accountStatus);
  }
}
