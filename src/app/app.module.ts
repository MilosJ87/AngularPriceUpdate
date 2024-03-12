import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ZlatneKovaniceComponent } from './zlatne-kovanice/zlatne-kovanice.component'; // Ensure this path is correct
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ZlatnePolugeComponent } from './zlatne-poluge/zlatne-poluge.component';
import { KursnaListaComponent } from './kursna-lista/kursna-lista.component';
import { GenericCenovnikComponent } from './generic-cenovnik/generic-cenovnik.component';
import { MenuComponent } from './menu/menu.component';
import { RouterModule } from '@angular/router'
import { SigninRedirectCallbackComponent } from './signin-redirect-callback/signin-redirect-callback.component';
import { SignoutRedirectCallbackComponent } from './signout-redirect-callback/signout-redirect-callback.component';

@NgModule({
  declarations: [
    AppComponent,
    ZlatneKovaniceComponent,
    ZlatnePolugeComponent,
    KursnaListaComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      {path:'Generic', loadChildren:()=> import('./generic-cenovnik/generic-cenovnik.module'). then(m=>m.GenericCenovnikModule)},
      { path: 'signin-callback', component: SigninRedirectCallbackComponent },
      { path: 'signout-callback', component: SignoutRedirectCallbackComponent }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
