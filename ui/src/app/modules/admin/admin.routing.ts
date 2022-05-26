import { Routes } from '@angular/router';
import { tb_testeComponent } from './components/tb_teste/tb_teste.component';


import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AdminComponent } from './admin.component';

export const AdminRoutes: Routes = [
    { path: '', component: AdminComponent },
	{ path: 'tb_teste', component: tb_testeComponent },


    { path: 'dashboard', component: DashboardComponent }
    
];
