import { Routes } from "@angular/router";
import { employeeDetailsResolver } from "../../shared/resolvers/employee-details-resolver";
import { EmployeeCreate } from "./employee-create/employee-create";
import { EmployeeDetails } from "./employee-details/employee-details";
import { EmployeeEdit } from "./employee-edit/employee-edit";
import { EmployeeList } from "./employee-list/employee-list";

export const employeeRoutes: Routes = [
  { path: 'list',
    component: EmployeeList
  },
  { path: 'details/:id',
    component: EmployeeDetails,
    resolve: { employee : employeeDetailsResolver }
  },
  { path: 'create',
    component: EmployeeCreate
  },
  { path: 'edit',
    component: EmployeeEdit
  }
]