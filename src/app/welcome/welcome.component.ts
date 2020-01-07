import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-welcome",
  styleUrls: ["welcome.component.scss"],
  templateUrl: "welcome.component.html"
})
export class WelcomeComponent implements OnInit {
  public title: string;
  public isHome: boolean;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.url.subscribe(data => {
      if (data[0].path === "welcome") {
        this.title = "THIAG0";
        this.isHome = true;
      } else if (data[0].path === "404") {
        this.title = "404";
        this.isHome = false;
      }
    });
  }
}
