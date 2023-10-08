import { loadRemoteModule } from '@nx/angular/mf';
import { NxWelcomeComponent } from './nx-welcome.component';
import { Route } from '@angular/router';
import { MonitorComponent } from './monitor/monitor.component';
import { EmployeeComponent } from './employee/employee.component';
import { DepartmentComponent } from './department/department.component';
import { AppComponent } from './app.component';
import { LoginguardService } from './loginguard.service';

export const appRoutes: Route[] = [
  {
    path: 'transaction',
    loadChildren: () =>
      import('transaction/Module').then((m) => m.RemoteEntryModule),
      canActivate: [LoginguardService]
  },
  {
    path: 'login',
    loadChildren: () => loadRemoteModule('login','./Module').then(m=> m.RemoteEntryModule),    
  }, 
  {
    path: 'employee',
    component: EmployeeComponent,    
  },
  {
    path: 'department',
    component: DepartmentComponent,
    canActivate: [LoginguardService]
  },
  {
    path: '',
    component: AppComponent,
    canActivate: [LoginguardService]
  },
];
