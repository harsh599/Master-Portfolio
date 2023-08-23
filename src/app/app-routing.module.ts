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
    data: { animation: 'HomePage' },
  },
  {
    path: 'education-details',
    component: EducationDetailsComponent,
    data: { animation: 'AboutPage' },
  },
  { path: 'work-experience', component: WorkExperienceComponent },
  { path: 'about-me', component: AboutMeComponent },
  { path: 'skills', component: SkillsComponent },
  { path: 'projects', component: ProjectsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
