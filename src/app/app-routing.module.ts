import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutMeComponent } from './about-me/about-me.component';
import { CvComponent } from './cv/cv.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ProjectOneComponent } from './project-one/project-one.component';
import { ProjectDetailComponent } from './project-detail/project-detail.component'; // Import your project detail component
import { ProjectTwoComponent } from './project-two/project-two.component'; // Import the component
import { ProjectThreeComponent } from './project-three/project-three.component'; // Import the component
import { ProjectFourComponent } from './project-four/project-four.component';


const routes: Routes = [
  { path: '', component: AboutMeComponent }, // Default route
  { path: 'about-me', component: AboutMeComponent },
  { path: 'cv', component: CvComponent },
  { path: 'portfolio', component: PortfolioComponent },
  { path: 'project/1', component: ProjectOneComponent }, // Update route for Project 1
  { path: 'project/2', component: ProjectTwoComponent }, // Update route for Project 2
  { path: 'project/3', component: ProjectThreeComponent }, // Update route for Project 3
  { path: 'project/4', component: ProjectFourComponent }, // Update route for Project 4
  { path: 'project/:id', component: ProjectDetailComponent },

];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }