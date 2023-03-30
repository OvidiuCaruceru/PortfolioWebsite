import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './components/contact/contact.component';
import { IntroComponent } from './components/intro/intro.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { SkillsComponent } from './components/skills/skills.component';

const routes: Routes = [
  {path: 'Intro', component: IntroComponent},
  {path: 'Skills', component: SkillsComponent},
  {path: 'Projects', component: ProjectsComponent},
  {path: 'Contact', component: ContactComponent},
  {path: '', redirectTo: '/Intro', pathMatch: 'full'},
  {path: '**', redirectTo: '/Intro', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
