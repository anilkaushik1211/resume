import { WorkExperienceComponent } from 'src/app/components/work-experience/work-experience.component';
import { AboutComponent } from 'src/app/components/about/about.component';
import { ProjectsComponent } from 'src/app/components/projects/projects.component';
import { Tab } from './tabs.model';
import { EducationComponent } from 'src/app/components/education/education.component';

export const TABS: Array<Tab> = [
    {
        label: 'About',
        icon: 'perm_identity',
        component: AboutComponent
    },
    {
        label: 'Work Experience',
        icon: 'business_center',
        component: WorkExperienceComponent
    },
    {
        label: 'Projects',
        icon: 'integration_instructions',
        component: ProjectsComponent
    },
    {
        label: 'Education',
        icon: 'school',
        component: EducationComponent
    }
];
