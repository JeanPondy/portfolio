import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { NgModule } from '@angular/core';



export const routes: Routes = [
    { path: '', component: ProfileComponent },
    { path: 'privacy-policy', component: PrivacyPolicyComponent },
    
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }
