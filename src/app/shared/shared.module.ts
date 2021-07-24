import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';

import { DynamicModule } from 'ng-dynamic-component';
import { Ng2OdometerModule } from 'ng2-odometer';

import { HeaderComponent } from './header/header.component';
import { TabsComponent } from './tabs/tabs.component';
import { AboutComponent } from 'src/app/components/about/about.component';
import { ProjectsComponent } from 'src/app/components/projects/projects.component';
import { WorkExperienceComponent } from '../components/work-experience/work-experience.component';
import { EducationComponent } from '../components/education/education.component';
import { MatDividerModule, MatExpansionModule, MatSelectModule } from '@angular/material';
import { DateDifferenceComponent } from './date-difference/date-difference.component';

import { ReactiveFormsModule } from '@angular/forms';
import { LinkPipe } from './pipes/link.pipe';


const MAT_MODULES = [
  MatToolbarModule,
  MatIconModule,
  MatButtonModule,
  MatTooltipModule,
  MatTabsModule,
  MatCardModule,
  MatDividerModule,
  MatExpansionModule,
  MatSelectModule
];

const COMMON_COMPONENTS = [
  HeaderComponent,
  TabsComponent
];

const TAB_COMPONENTS = [
  AboutComponent,
  ProjectsComponent,
  WorkExperienceComponent,
  EducationComponent
];

const PIPES = [
  LinkPipe
];

@NgModule({
  declarations: [
    ...COMMON_COMPONENTS,
    ...TAB_COMPONENTS,
    ...PIPES,
    DateDifferenceComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ...MAT_MODULES,
    DynamicModule.withComponents(TAB_COMPONENTS),
    Ng2OdometerModule.forRoot()
  ],
  exports: [
    ...COMMON_COMPONENTS,
    ...TAB_COMPONENTS,
    ...PIPES
  ]
})
export class SharedModule { }
