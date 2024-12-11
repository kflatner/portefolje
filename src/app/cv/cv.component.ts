import { Component } from '@angular/core';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.scss']
})
export class CvComponent {

  downloadCV() {
    const cvContainer = document.getElementById('cv-container');

    if (cvContainer) {
      html2canvas(cvContainer).then(canvas => {
        const link = document.createElement('a');
        link.download = 'cv.png';
        link.href = canvas.toDataURL();
        link.click();
      });
    }
  }
}
