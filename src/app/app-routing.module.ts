import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuickIntroComponent } from './quick-intro/quick-intro.component';
import { WorkExperienceComponent } from './work-experience/work-experience.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { SkillsComponent } from './skills/skills.component';
import { ProjectsComponent } from './projects/projects.component';
import { EducationDetailsComponent } from './education-details/education-details.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', redirectTo: 'intro', pathMatch: 'full' }, // if path becomes '' i.e full path matches as '' then redirect to intro route and the pathmatch should be full
  {
    path: 'intro',
    component: QuickIntroComponent,
    title: 'My Intro',
    data: { animation: 'IntroPage' },
  },
  {
    path: 'education-details',
    component: EducationDetailsComponent,
    title: 'My Education Journey',
    data: { animation: 'EducationPage' },
  },
  {
    path: 'skills',
    component: SkillsComponent,
    title: 'My Skills',
    data: { animation: 'SkillsPage' },
  },
  {
    path: 'employment-details',
    component: WorkExperienceComponent,
    title: 'Meet My Employers',
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
  { path: '**', component: PageNotFoundComponent }, //Wild Card component
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
