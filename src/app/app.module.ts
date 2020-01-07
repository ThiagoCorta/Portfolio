import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AboutComponent } from "./about/about.component";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { SkillsComponent } from "./skills/skills.component";
import { WelcomeComponent } from "./welcome/welcome.component";
import { MDBBootstrapModule, ChartsModule } from "angular-bootstrap-md";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SkillsComponent,
    WelcomeComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
