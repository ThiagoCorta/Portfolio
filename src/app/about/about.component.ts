import { Component } from "@angular/core";

@Component({
  selector: "app-about",
  templateUrl: "./about.component.html",
  styleUrls: ["./about.component.scss"]
})
export class AboutComponent {
  constructor() {}

  navigateGithub() {
    window.open("https://github.com/thiagocorta", "_blank");
  }

  navigateLinkedin() {
    window.open(
      "https://www.linkedin.com/in/thiago-corta-8a920815a/",
      "_blank"
    );
  }
}
