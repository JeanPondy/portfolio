import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  activeSection: string = ''; // Variable, um den aktiven Abschnitt zu verfolgen

  // Methode, um zu einem bestimmten Abschnitt zu scrollen und dabei 80px Offset oben zu lassen
  scrollToSection(section: string) {
    this.activeSection = section;  // Setze den aktiven Abschnitt
    
    const element = document.getElementById(section);
    if (element) {
      const yOffset = 0; // 80px Abstand vom oberen Rand
      const yPosition = element.getBoundingClientRect().top + window.pageYOffset + yOffset;

      window.scrollTo({
        top: yPosition,
        behavior: 'smooth'
      });
    }
  }

}
