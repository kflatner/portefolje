import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AboutMeComponent } from './about-me/about-me.component';
import { CvComponent } from './cv/cv.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { HomeComponent } from './home/home.component';
import { TestComponent } from './test/test.component';
import { ProjectOneComponent } from './project-one/project-one.component';
import { HttpClientModule } from '@angular/common/http';
import { ProjectDetailComponent } from './project-detail/project-detail.component';
import { ProjectTwoComponent } from './project-two/project-two.component';
import { ProjectThreeComponent} from './project-three/project-three.component';
import { ProjectFourComponent } from './project-four/project-four.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutMeComponent,
    CvComponent,
    PortfolioComponent,
    ProjectDetailComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeComponent,
    HttpClientModule,
    TestComponent,
    ProjectOneComponent,
    ProjectTwoComponent,
    ProjectThreeComponent,
    ProjectFourComponent
    
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

