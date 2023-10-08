import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '@ng-mf/data-access';
import { distinctUntilChanged } from 'rxjs';

@Component({
  selector: 'ng-mf-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.scss'],
})
export class BaseComponent{  
  
}
