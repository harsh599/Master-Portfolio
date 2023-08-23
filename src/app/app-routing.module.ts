import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuickIntroComponent } from './quick-intro/quick-intro.component';
import { WorkExperienceComponent } from './work-experience/work-experience.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { SkillsComponent } from './skills/skills.component';
import { ProjectsComponent } from './projects/projects.component';
import { EducationDetailsComponent } from './education-details/education-details.component';

const routes: Routes = [
  { path: '', redirectTo: 'intro', pathMatch: 'full' },
  {
    path: 'intro',
    component: QuickIntroComponent,
    data: { animation: 'IntroPage' },
  },
  {
    path: 'education-details',
    component: EducationDetailsComponent,
    data: { animation: 'EducationPage' },
  },
  {
    path: 'skills',
    component: SkillsComponent,
    data: { animation: 'SkillsPage' },
  },
  {
    path: 'employment-details',
    component: WorkExperienceComponent,
    data: { animation: 'ExperiencePage' },
  },
  {
    path: 'project-details',
    component: ProjectsComponent,
    data: { animation: 'ProjectsPage' },
  },
  {
    path: 'about-me',
    component: AboutMeComponent,
    data: { animation: 'AboutMePage' },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
