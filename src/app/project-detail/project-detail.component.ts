// src/app/project-detail/project-detail.component.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.scss']
})
export class ProjectDetailComponent implements OnInit {
  projectId!: string;

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.projectId = params.get('id')!;
      this.navigateToProjectComponent(this.projectId);
    });
  }

  navigateToProjectComponent(id: string): void {
    if (id === '1') {
      this.router.navigate(['/project/1']);
    }
    // Add additional logic for other project IDs if needed
    else {
      console.log('Loading details for project ID:', id);
      // Load the project details based on the project ID
    }
  }
}
