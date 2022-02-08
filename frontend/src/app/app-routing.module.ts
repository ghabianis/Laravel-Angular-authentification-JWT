import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AboutComponent } from './components/about/about.component';
import { HeaderComponent } from './components/header/header.component';
import { LoginComponent } from './components/login/login.component';
import { ReponseResetComponent } from './components/password/reponse-reset/reponse-reset.component';
import { RequestResetComponent } from './components/password/request-reset/request-reset.component';
import { ProfileComponent } from './components/profile/profile.component';
import { SignupComponent } from './components/signup/signup.component';
import { TasksComponent } from './components/tasks/tasks.component';
import { AfterLoginService } from './Services/after-login.service';
import { BeforeLoginService } from './Services/before-login.service';

const appRoutes: Routes = [
  {

      path:'Login',
      component:LoginComponent,
      canActivate: [BeforeLoginService]
    },
    {
      path:'Signup',
      component:SignupComponent,
      canActivate: [BeforeLoginService]
    },
    {
      path:'Profile',
      component:ProfileComponent,
      canActivate: [AfterLoginService]
    },
    {
      path:'request-password-reste',
      component:RequestResetComponent,
      canActivate: [BeforeLoginService]
    },
    {
      path:'response-password-reste',
      component:ReponseResetComponent,
      canActivate: [BeforeLoginService]
    },
    {path:'taskTracer',component:TasksComponent
    ,
      canActivate: [AfterLoginService]
  },
    {path:'About',component:AboutComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
