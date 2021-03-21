import { AboutComponent } from 'src/app/components/about/about.component';
import { ProjectsComponent } from 'src/app/components/projects/projects.component';
import { Tab } from './tabs.model';
import { WorkAndEducationComponent } from 'src/app/components/work-and-education/work-and-education.component';

export const TABS: Array<Tab> = [
    {
        label: 'About',
        icon: 'perm_identity',
        component: AboutComponent
    },
    {
        label: 'Work Experience & Education',
        icon: 'business_center',
        component: WorkAndEducationComponent
    },
    {
        label: 'Projects',
        icon: 'integration_instructions',
        component: ProjectsComponent
    }
];
