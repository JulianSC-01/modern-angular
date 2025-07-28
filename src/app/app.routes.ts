import { Routes } from '@angular/router';
import { Login } from './pages/login/login';
import { EmployeeService } from './services/employee.service';
import { authGuard } from './shared/guards/auth.guard';

export const routes: Routes = [
  { path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  { path: 'login',
    component: Login
  },
  { path: 'registration',
    loadComponent: async () => {
      const m = await import('./pages/registration/registration');
      return m.Registration;
    }
  },
  { path: 'employees',
    canActivate: [authGuard],
    providers: [EmployeeService],
    loadChildren: async () => {
      const m = await import('./pages/employees/employees.routes');
      return m.employeeRoutes;
    }
  }
];