import { DEVELOPER_TYPE, DEVELOPER_TYPES } from './developer-type.constant';

export const TECH_ENVIRONMENT_ICON = {
    ANGULAR: 'assets/images/tech_logo/angular-logo.png',
    JAVA: 'assets/images/tech_logo/java-logo.png',
    SPRING: 'assets/images/tech_logo/spring-logo.png',
    SPRING_BOOT: 'assets/images/tech_logo/spring-boot-logo.png',
    REACT_JS: 'assets/images/tech_logo/react-js-logo.png',
    MY_SQL: 'assets/images/tech_logo/mysql-logo.png',
    HIBERNATE: 'assets/images/tech_logo/hibernate-logo.png',
    MONGO_DB: 'assets/images/tech_logo/mongodb-logo.png'
};

export const TECH_ENVIRONMENT = {
    ANGULAR_2: {
        key: 'ANGULAR_2',
        name: 'Angular',
        version: 2,
        icon: TECH_ENVIRONMENT_ICON.ANGULAR,
        developerTypes: [DEVELOPER_TYPE.FRONT_END.id, DEVELOPER_TYPE.FULL_STACK.id]
    },
    ANGULAR_4: {
        key: 'ANGULAR_4',
        name: 'Angular',
        version: 4,
        icon: TECH_ENVIRONMENT_ICON.ANGULAR,
        developerTypes: [DEVELOPER_TYPE.FRONT_END.id, DEVELOPER_TYPE.FULL_STACK.id]
    },
    ANGULAR_5: {
        key: 'ANGULAR_5',
        name: 'Angular',
        version: 5,
        icon: TECH_ENVIRONMENT_ICON.ANGULAR,
        developerTypes: [DEVELOPER_TYPE.FRONT_END.id, DEVELOPER_TYPE.FULL_STACK.id]
    },
    ANGULAR_6: {
        key: 'ANGULAR_6',
        name: 'Angular',
        version: 6,
        icon: TECH_ENVIRONMENT_ICON.ANGULAR,
        developerTypes: [DEVELOPER_TYPE.FRONT_END.id, DEVELOPER_TYPE.FULL_STACK.id]
    },
    ANGULAR_7: {
        key: 'ANGULAR_7',
        name: 'Angular',
        version: 7,
        icon: TECH_ENVIRONMENT_ICON.ANGULAR,
        developerTypes: [DEVELOPER_TYPE.FRONT_END.id, DEVELOPER_TYPE.FULL_STACK.id]
    },
    ANGULAR_8: {
        key: 'ANGULAR_8',
        name: 'Angular',
        version: 8,
        icon: TECH_ENVIRONMENT_ICON.ANGULAR,
        developerTypes: [DEVELOPER_TYPE.FRONT_END.id, DEVELOPER_TYPE.FULL_STACK.id]
    },
    ANGULAR_11: {
        key: 'ANGULAR_11',
        name: 'Angular',
        version: 11,
        icon: TECH_ENVIRONMENT_ICON.ANGULAR,
        developerTypes: [DEVELOPER_TYPE.FRONT_END.id, DEVELOPER_TYPE.FULL_STACK.id]
    },
    JAVA_8: {
        key: 'JAVA_8',
        name: 'Java',
        version: 8,
        icon: TECH_ENVIRONMENT_ICON.JAVA,
        developerTypes: [DEVELOPER_TYPE.BACK_END.id, DEVELOPER_TYPE.FULL_STACK.id]
    },
    SPRING_3: {
        key: 'SPRING_3',
        name: 'Spring Framework',
        icon: TECH_ENVIRONMENT_ICON.SPRING,
        developerTypes: [DEVELOPER_TYPE.BACK_END.id, DEVELOPER_TYPE.FULL_STACK.id]
    },
    SPRING_BOOT: {
        key: 'SPRING_BOOT',
        name: 'Spring Boot',
        icon: TECH_ENVIRONMENT_ICON.SPRING_BOOT,
        developerTypes: [DEVELOPER_TYPE.BACK_END.id, DEVELOPER_TYPE.FULL_STACK.id]
    },
    REACT_JS: {
        key: 'REACT_JS',
        name: 'React JS',
        icon: TECH_ENVIRONMENT_ICON.REACT_JS,
        developerTypes: [DEVELOPER_TYPE.FRONT_END.id, DEVELOPER_TYPE.FULL_STACK.id]
    },
    REACT_NATIVE: {
        key: 'REACT_NATIVE',
        name: 'React Native',
        icon: TECH_ENVIRONMENT_ICON.REACT_JS,
        developerTypes: [DEVELOPER_TYPE.ANDROID_APP],
    },
    HIBERNATE: {
        key: 'HIBERNATE',
        name: 'Hibernate',
        icon: TECH_ENVIRONMENT_ICON.HIBERNATE,
        developerTypes: [DEVELOPER_TYPE.BACK_END.id, DEVELOPER_TYPE.FULL_STACK.id]
    },
    MY_SQL: {
        key: 'MY_SQL',
        name: 'My SQL',
        icon: TECH_ENVIRONMENT_ICON.MY_SQL,
        developerTypes: [DEVELOPER_TYPE.BACK_END.id, DEVELOPER_TYPE.FULL_STACK.id]
    },
    MONOGO_DB: {
        key: 'MONGO_DB',
        name: 'MongoDB',
        icon: TECH_ENVIRONMENT_ICON.MONGO_DB,
        developerTypes: [DEVELOPER_TYPE.BACK_END.id, DEVELOPER_TYPE.FULL_STACK.id]
    },
};

export const TECH_ENVIRONMENTS = [
    TECH_ENVIRONMENT.ANGULAR_6,
    TECH_ENVIRONMENT.ANGULAR_7,
    TECH_ENVIRONMENT.ANGULAR_8,
    TECH_ENVIRONMENT.ANGULAR_11,
    TECH_ENVIRONMENT.JAVA_8,
    TECH_ENVIRONMENT.SPRING_3,
    TECH_ENVIRONMENT.SPRING_BOOT,
    TECH_ENVIRONMENT.REACT_JS,
    TECH_ENVIRONMENT.REACT_NATIVE,
    TECH_ENVIRONMENT.HIBERNATE,
    TECH_ENVIRONMENT.MY_SQL,
    TECH_ENVIRONMENT.MONOGO_DB
];
