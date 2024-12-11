import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent {
  projects = [
    { id: '1', title: 'Project One', description: 'Homepage.' },
    { id: '2', title: 'Project Two', description: 'Housing-Project.' },
    { id: '3', title: 'Project Three', description: 'Tic-Tac-Toe.' },
    { id: '4', title: 'Project Four', description: 'Tour of Heroes.' }
  ];
}
