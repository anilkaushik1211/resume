import { DEVELOPER_TYPE } from "./developer-type.constant";

export const TECH_ENVIRONMENT_ICON = {
    ANGULAR: 'assets/images/angular-logo.png',
    JAVA: 'assets/images/java-logo.png',
    SPRING: 'assets/images/spring-logo.png',
    SPRING_BOOT: 'assets/images/spring-boot-logo.png',
    REACT_JS: 'assets/images/react-js-logo.png',
    MY_SQL: 'assets/images/mysql-logo.png',
    HIBERNATE: 'assets/images/hibernate-logo.png',
};

export const TECH_ENVIRONMENT = {
    ANGULAR_2: { key: 'ANGULAR_2', name: 'Angular', version: 2, icon: TECH_ENVIRONMENT_ICON.ANGULAR, types: [DEVELOPER_TYPE.FRONT_END.id, DEVELOPER_TYPE.FULL_STACK.id] },
    ANGULAR_4: { key: 'ANGULAR_4', name: 'Angular', version: 4, icon: TECH_ENVIRONMENT_ICON.ANGULAR, types: [DEVELOPER_TYPE.FRONT_END.id, DEVELOPER_TYPE.FULL_STACK.id] },
    ANGULAR_5: { key: 'ANGULAR_5', name: 'Angular', version: 5, icon: TECH_ENVIRONMENT_ICON.ANGULAR, types: [DEVELOPER_TYPE.FRONT_END.id, DEVELOPER_TYPE.FULL_STACK.id] },
    ANGULAR_6: { key: 'ANGULAR_6', name: 'Angular', version: 6, icon: TECH_ENVIRONMENT_ICON.ANGULAR, types: [DEVELOPER_TYPE.FRONT_END.id, DEVELOPER_TYPE.FULL_STACK.id] },
    ANGULAR_7: { key: 'ANGULAR_7', name: 'Angular', version: 7, icon: TECH_ENVIRONMENT_ICON.ANGULAR, types: [DEVELOPER_TYPE.FRONT_END.id, DEVELOPER_TYPE.FULL_STACK.id] },
    ANGULAR_8: { key: 'ANGULAR_8', name: 'Angular', version: 8, icon: TECH_ENVIRONMENT_ICON.ANGULAR, types: [DEVELOPER_TYPE.FRONT_END.id, DEVELOPER_TYPE.FULL_STACK.id] },
    JAVA_8: { key: 'JAVA_8', name: 'Java', version: 8, icon: TECH_ENVIRONMENT_ICON.JAVA, types: [DEVELOPER_TYPE.BACK_END.id, DEVELOPER_TYPE.FULL_STACK.id] },
    SPRING_3: { key: 'SPRING_3', name: 'Spring Framework', icon: TECH_ENVIRONMENT_ICON.SPRING, types: [DEVELOPER_TYPE.BACK_END.id, DEVELOPER_TYPE.FULL_STACK.id] },
    SPRING_BOOT: { key: 'SPRING_BOOT', name: 'Spring Boot', icon: TECH_ENVIRONMENT_ICON.SPRING_BOOT, types: [DEVELOPER_TYPE.BACK_END.id, DEVELOPER_TYPE.FULL_STACK.id] },
    REACT_JS: { key: 'REACT_JS', name: 'React JS', icon: TECH_ENVIRONMENT_ICON.REACT_JS, types: [DEVELOPER_TYPE.FRONT_END.id, DEVELOPER_TYPE.FULL_STACK.id] },
    REACT_NATIVE: { key: 'REACT_NATIVE', name: 'React Native', icon: TECH_ENVIRONMENT_ICON.REACT_JS, types: [DEVELOPER_TYPE.ANDROID_APP.id, DEVELOPER_TYPE.FULL_STACK.id] },
    HIBERNATE: { key: 'HIBERNATE', name: 'Hibernate', icon: TECH_ENVIRONMENT_ICON.HIBERNATE, types: [DEVELOPER_TYPE.BACK_END.id, DEVELOPER_TYPE.FULL_STACK.id] },
    MY_SQL: { key: 'MY_SQL', name: 'My SQL', icon: TECH_ENVIRONMENT_ICON.MY_SQL, types: [DEVELOPER_TYPE.BACK_END.id, DEVELOPER_TYPE.FULL_STACK.id] },
};

export const TECH_ENVIRONMENTS = [
    TECH_ENVIRONMENT.ANGULAR_6,
    TECH_ENVIRONMENT.ANGULAR_7,
    TECH_ENVIRONMENT.ANGULAR_8,
    TECH_ENVIRONMENT.JAVA_8,
    TECH_ENVIRONMENT.SPRING_3,
    TECH_ENVIRONMENT.SPRING_BOOT,
    TECH_ENVIRONMENT.REACT_JS,
    TECH_ENVIRONMENT.REACT_NATIVE,
    TECH_ENVIRONMENT.HIBERNATE,
    TECH_ENVIRONMENT.MY_SQL
];
