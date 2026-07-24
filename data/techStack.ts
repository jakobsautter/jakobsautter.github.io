import type { Component } from 'vue';

import AspNetIcon from '@/components/icons/AspNetIcon.vue';

import IconJava from '~icons/mdi/language-java';
import IconTypeScript from '~icons/mdi/language-typescript';
import IconJavaScript from '~icons/mdi/language-javascript';
import IconCSharp from '~icons/mdi/language-csharp';

import IconSpring from '~icons/simple-icons/spring';
import IconSpringBoot from '~icons/simple-icons/springboot';
import IconMysql from '~icons/simple-icons/mysql';
import IconPostgresql from '~icons/simple-icons/postgresql';
import IconMssql from '~icons/simple-icons/microsoftsqlserver';

import IconAngular from '~icons/mdi/angular';
import IconVuejs from '~icons/mdi/vuejs';
import IconVuetify from '~icons/mdi/vuetify';
import IconBootstrap from '~icons/mdi/bootstrap';
import IconHtml5 from '~icons/mdi/language-html5';
import IconCss3 from '~icons/mdi/language-css3';
import IconSass from '~icons/ion/logo-sass';

import IconGithub from '~icons/uil/github';
import IconGitlab from '~icons/uil/gitlab';
import IconIntellij from '~icons/simple-icons/intellijidea';
import IconVsCode from '~icons/mdi/microsoft-visual-studio-code';
import IconVisualStudio from '~icons/mdi/microsoft-visual-studio';
import IconResharper from '~icons/simple-icons/resharper';
import IconRider from '~icons/simple-icons/rider';
import IconTeamCity from '~icons/simple-icons/teamcity';
import IconJenkins from '~icons/simple-icons/jenkins';
import IconDocker from '~icons/simple-icons/docker';
import IconJira from '~icons/simple-icons/jirasoftware';
import IconConfluence from '~icons/simple-icons/confluence';
import IconBitbucket from '~icons/simple-icons/bitbucket';
import IconBamboo from '~icons/simple-icons/bamboo';

export interface TechItem {
    title: string;
    url: string;
    icon: Component;
}

export interface TechCategory {
    name: string;
    items: TechItem[];
}

export const techStack: TechCategory[] = [
    {
        name: 'Languages',
        items: [
            { title: 'Java', url: 'https://www.java.com/', icon: IconJava },
            { title: 'TypeScript', url: 'https://www.typescriptlang.org/', icon: IconTypeScript },
            { title: 'JavaScript', url: 'https://developer.mozilla.org/docs/Web/JavaScript', icon: IconJavaScript },
            { title: 'C#', url: 'https://learn.microsoft.com/dotnet/csharp/', icon: IconCSharp }
        ]
    },
    {
        name: 'Backend',
        items: [
            { title: 'Spring', url: 'https://spring.io/', icon: IconSpring },
            { title: 'Spring Boot', url: 'https://spring.io/', icon: IconSpringBoot },
            { title: 'ASP.net', url: 'https://dotnet.microsoft.com/en-us/apps/aspnet', icon: AspNetIcon },
            { title: 'MySQL', url: 'https://www.mysql.com/', icon: IconMysql },
            { title: 'PostgreSQL', url: 'https://www.postgresql.org/', icon: IconPostgresql },
            { title: 'MS-SQL', url: 'https://www.microsoft.com/sql-server', icon: IconMssql }
        ]
    },
    {
        name: 'Frontend',
        items: [
            { title: 'Angular', url: 'https://angular.io/', icon: IconAngular },
            { title: 'Vue.js', url: 'https://vuejs.org/', icon: IconVuejs },
            { title: 'Vuetify', url: 'https://vuetifyjs.com/en/', icon: IconVuetify },
            { title: 'Bootstrap', url: 'https://getbootstrap.com/', icon: IconBootstrap },
            { title: 'HTML 5', url: 'https://developer.mozilla.org/docs/Glossary/HTML5/', icon: IconHtml5 },
            { title: 'CSS 3', url: 'https://www.w3.org/Style/CSS/', icon: IconCss3 },
            { title: 'SASS', url: 'https://sass-lang.com/', icon: IconSass }
        ]
    },
    {
        name: 'Tools',
        items: [
            { title: 'GitHub', url: 'https://www.github.com/', icon: IconGithub },
            { title: 'GitLab', url: 'https://about.gitlab.com/', icon: IconGitlab },
            { title: 'IntelliJ', url: 'https://www.jetbrains.com/idea/', icon: IconIntellij },
            { title: 'VS Code', url: 'https://code.visualstudio.com/', icon: IconVsCode },
            { title: 'Visual Studio', url: 'https://visualstudio.microsoft.com/', icon: IconVisualStudio },
            { title: 'ReSharper', url: 'https://www.jetbrains.com/resharper/', icon: IconResharper },
            { title: 'Rider', url: 'https://www.jetbrains.com/rider/', icon: IconRider },
            { title: 'TeamCity', url: 'https://www.jetbrains.com/teamcity/', icon: IconTeamCity },
            { title: 'Jenkins', url: 'https://www.jenkins.io/', icon: IconJenkins },
            { title: 'Docker', url: 'https://www.docker.com/', icon: IconDocker },
            { title: 'Jira', url: 'https://www.atlassian.com/software/jira', icon: IconJira },
            { title: 'Confluence', url: 'https://www.atlassian.com/software/confluence', icon: IconConfluence },
            { title: 'Bitbucket', url: 'https://bitbucket.org/', icon: IconBitbucket },
            { title: 'Bamboo', url: 'https://www.atlassian.com/de/software/bamboo', icon: IconBamboo }
        ]
    }
];
