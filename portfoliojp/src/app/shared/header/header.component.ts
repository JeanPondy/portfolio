import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

    // Diese Funktion wird beim Klicken aufgerufen
    scrollToAnchor() {
      const anchor = document.getElementById('anchor1');  // Anker (Ziel) finden
      if (anchor) {
        // Scrollen mit Animation
        anchor.scrollIntoView({
          behavior: 'smooth',   // sorgt für die Animation
          block: 'start',       // scrollt zum Anfang des Elements
          inline: 'nearest'
        });
      }
    }
}
