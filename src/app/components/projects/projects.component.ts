import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Subject } from 'rxjs';
import { DEVELOPER_TYPE, DEVELOPER_TYPES } from 'src/app/core/constants/developer-type.constant';
import { TECH_ENVIRONMENTS } from 'src/app/core/constants/tech-environment.constant';
import { PROJECTS } from './projects.constant';
import { ProjectSearch } from './projects.model';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit, OnDestroy {

  searchForm = this.formBuilder.group(new ProjectSearch());

  devTypeFilter = DEVELOPER_TYPES;
  projects = PROJECTS;
  techEnvironmentFilters = TECH_ENVIRONMENTS;

  ngOnDestroySubject = new Subject();

  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.registerOnChange();
  }

  resetSearch() {
    this.searchForm.reset();
    this.techEnvironmentFilters = TECH_ENVIRONMENTS;
    this.projects = PROJECTS;
  }

  ngOnDestroy() {
    this.ngOnDestroySubject.next();
    this.ngOnDestroySubject.unsubscribe();
  }

  private registerOnChange() {
    this.registerOnRoleSearchChange();
    this.registerOnEnvironmentSearchChange();
  }

  private registerOnRoleSearchChange() {
    this.searchForm.get('role').valueChanges
      .pipe(takeUntil(this.ngOnDestroySubject))
      .subscribe(value => {
        if (value) {
          this.techEnvironmentFilters = TECH_ENVIRONMENTS.filter(env =>
            env.developerTypes.includes(value.id)
          );

          if (value.id === DEVELOPER_TYPE.ANDROID_APP.id) {
            this.projects = PROJECTS.filter(project =>
              project.roles.includes(value)
            );
          } else {
            this.projects = PROJECTS.filter(project =>
              project.roles.includes(value) ||
              project.roles.includes(DEVELOPER_TYPE.FULL_STACK)
            );
          }
        } else {
          this.techEnvironmentFilters = TECH_ENVIRONMENTS;
          this.projects = PROJECTS;
        }
      });
  }

  private registerOnEnvironmentSearchChange() {
    this.searchForm.get('techEnvironments').valueChanges
      .pipe(takeUntil(this.ngOnDestroySubject))
      .subscribe((values: Array<any>) => {
        if (values && values.length) {
          this.projects = PROJECTS.filter(
            project =>
              values.every(value => project.environments.includes(value))
          )
        } else {
          this.projects = PROJECTS;
        }
      });
  }

}
