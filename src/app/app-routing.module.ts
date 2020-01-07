import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AboutComponent } from "./about/about.component";
import { SkillsComponent } from "./skills/skills.component";
import { WelcomeComponent } from "./welcome/welcome.component";

const routes: Routes = [
  { path: "skills", component: SkillsComponent },
  { path: "welcome", component: WelcomeComponent },
  { path: "about", component: AboutComponent },
  { path: "", redirectTo: "welcome", pathMatch: "full" },
  { path: "404", component: WelcomeComponent },
  { path: "**", redirectTo: "404" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
