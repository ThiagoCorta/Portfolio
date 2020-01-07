import { Component } from "@angular/core";

@Component({
  selector: "app-skills",
  templateUrl: "./skills.component.html",
  styleUrls: ["./skills.component.scss"]
})
export class SkillsComponent {
  public skillsDonuts: SkillsDonuts[] = [
    {
      titulo: "Typescript",
      porcentaje: 30,
      color: "#007acc"
    },
    {
      titulo: "JavaScript",
      porcentaje: 40,
      color: "#F0DB4F"
    },
    {
      titulo: "HTML",
      porcentaje: 50,
      color: "#e44d26"
    },
    {
      titulo: "CSS",
      porcentaje: 50,
      color: "#e31b5f"
    },
    {
      titulo: "C#",
      porcentaje: 120,
      color: "#00A4EF"
    },
    {
      titulo: "Java",
      porcentaje: 150,
      color: "#f89820"
    },
    {
      titulo: "C",
      porcentaje: 150,
      color: "#fff"
    },
    {
      titulo: "Angular",
      porcentaje: 30,
      color: "#b52e31"
    },
    {
      titulo: "Bootstrap",
      porcentaje: 50,
      color: "#553c7b"
    },
    {
      titulo: "NGRX",
      porcentaje: 70,
      color: "#764abc"
    },

    {
      titulo: "Git",
      porcentaje: 125,
      color: "#F1502F"
    },
    {
      titulo: "Ingles",
      porcentaje: 60,
      color: "#fff"
    }
  ];

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

interface SkillsDonuts {
  titulo: string;
  porcentaje: number;
  color: string;
}
