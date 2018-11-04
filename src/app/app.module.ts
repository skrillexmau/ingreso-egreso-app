import { NgModule } from                   '@angular/core';
import { BrowserModule } from              '@angular/platform-browser';

import { AppRoutingModule } from           './app-routing.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { IngresoEgresoComponent } from './pages/ingreso-egreso/ingreso-egreso.component';
import { EstadisticaComponent } from './pages/ingreso-egreso/estadistica/estadistica.component';
import { DetalleComponent } from './pages/ingreso-egreso/detalle/detalle.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    IngresoEgresoComponent,
    EstadisticaComponent,
    DetalleComponent,
    NavbarComponent,
    FooterComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
