import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Account } from '../schemas/Account';
import { AccountStatus } from '../schemas/AccountStatus';
import { LoggerService } from '../logger.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent {
  @Input() account: Account;
  @Input() id: number;
  @Output() statusChanged = new EventEmitter<AccountStatus>();

  constructor(private logger: LoggerService) {}

  onSetTo(status: string) {
    this.statusChanged.emit({id: this.id, newStatus: status});
   
    this.logger.logToConsole(status);
  }
}
