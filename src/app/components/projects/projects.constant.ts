import { DEVELOPER_TYPE } from "src/app/core/constants/developer-type.constant";
import { TECH_ENVIRONMENT } from "src/app/core/constants/tech-environment.constant";

export const PROJECTS = [
    {
        name: 'RPM',
        roles: [DEVELOPER_TYPE.FULL_STACK],
        startDate: '02/01/2019',
        endDate: null,
        shortInfo: 'Registered Program Manager',
        environments: [
            TECH_ENVIRONMENT.ANGULAR_6,
            TECH_ENVIRONMENT.SPRING_BOOT,
            TECH_ENVIRONMENT.JAVA_8,
            TECH_ENVIRONMENT.MY_SQL
        ]
    },
    {
        name: 'Snap-Crescent',
        roles: [DEVELOPER_TYPE.FULL_STACK, DEVELOPER_TYPE.ANDROID_APP],
        startDate: '12/01/2020',
        endDate: null,
        shortInfo: 'Image/Video backup storage.',
        environments: [
            TECH_ENVIRONMENT.REACT_JS,
            TECH_ENVIRONMENT.REACT_NATIVE,
            TECH_ENVIRONMENT.SPRING_BOOT,
            TECH_ENVIRONMENT.JAVA_8,
            TECH_ENVIRONMENT.MY_SQL
        ]
    },
    {
        name: 'ALPHA',
        roles: [DEVELOPER_TYPE.FRONT_END],
        startDate: '09/01/2020',
        endDate: '03/15/2021',
        shortInfo: 'N/A',
        environments: [
            TECH_ENVIRONMENT.ANGULAR_7
        ]
    },
    {
        name: 'Campaign Solution',
        roles: [DEVELOPER_TYPE.FRONT_END],
        startDate: '02/01/2020',
        endDate: '08/31/2020',
        shortInfo: 'Campaign management system.',
        environments: [
            TECH_ENVIRONMENT.ANGULAR_6
        ]
    },
    {
        name: 'Smart Parking',
        roles: [DEVELOPER_TYPE.FULL_STACK],
        startDate: '12/01/2019',
        endDate: '01/31/2020',
        shortInfo: 'IOT based smart paring system.',
        environments: [
            TECH_ENVIRONMENT.ANGULAR_8,
            TECH_ENVIRONMENT.JAVA_8,
            TECH_ENVIRONMENT.SPRING_3,
            TECH_ENVIRONMENT.HIBERNATE,
            TECH_ENVIRONMENT.MY_SQL,
        ]
    },
    {
        name: 'Talent-Hunt',
        roles: [DEVELOPER_TYPE.FULL_STACK],
        startDate: '10/01/2018',
        endDate: '02/28/2019',
        shortInfo: 'Online aptitude test portal.',
        environments: [
            TECH_ENVIRONMENT.ANGULAR_8,
            TECH_ENVIRONMENT.JAVA_8,
            TECH_ENVIRONMENT.SPRING_3,
            TECH_ENVIRONMENT.HIBERNATE,
            TECH_ENVIRONMENT.MY_SQL,
        ]
    },
];