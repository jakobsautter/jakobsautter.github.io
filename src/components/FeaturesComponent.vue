//
<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { Tooltip } from 'bootstrap';

const java = ref(null);
const javaScript = ref(null);
const typeScript = ref(null);
const cSharp = ref(null);
const spring = ref(null);
const springBoot = ref(null);
const aspNet = ref(null);
const mySql = ref(null);
const postgreSql = ref(null);
const msSql = ref(null);
const vue = ref(null);
const vuetify = ref(null);
const bootstrap = ref(null);
const html5 = ref(null);
const css3 = ref(null);
const sass = ref(null);
const github = ref(null);
const gitlab = ref(null);
const vscode = ref(null);
const visualStudio = ref(null);
const resharper = ref(null);
const rider = ref(null);
const intellijIdea = ref(null);
const teamcity = ref(null);
const jenkins = ref(null);
const docker = ref(null);
const jira = ref(null);
const confluence = ref(null);
const bitbucket = ref(null);

let javaTooltip: Tooltip | undefined;
let javaScriptTooltip: Tooltip | undefined;
let typeScriptTooltip: Tooltip | undefined;
let cSharpTooltip: Tooltip | undefined;
let springTooltip: Tooltip | undefined;
let springBootTooltip: Tooltip | undefined;
let aspNetTooltip: Tooltip | undefined;
let mySqlTooltip: Tooltip | undefined;
let postgreSqlTooltip: Tooltip | undefined;
let msSqlTooltip: Tooltip | undefined;
let vueTooltip: Tooltip | undefined;
let vuetifyTooltip: Tooltip | undefined;
let bootstrapTooltip: Tooltip | undefined;
let html5Tooltip: Tooltip | undefined;
let css3Tooltip: Tooltip | undefined;
let sassTooltip: Tooltip | undefined;
let githubTooltip: Tooltip | undefined;
let gitlabTooltip: Tooltip | undefined;
let vscodeTooltip: Tooltip | undefined;
let visualstudioTooltip: Tooltip | undefined;
let resharperTooltip: Tooltip | undefined;
let riderTooltip: Tooltip | undefined;
let intellijideaTooltip: Tooltip | undefined;
let teamcityTooltip: Tooltip | undefined;
let jenkinsTooltip: Tooltip | undefined;
let dockerTooltip: Tooltip | undefined;
let jiraTooltip: Tooltip | undefined;
let confluenceTooltip: Tooltip | undefined;
let bitbucketTooltip: Tooltip | undefined;

onMounted(() => {
    javaTooltip = new Tooltip(java.value!);
    javaScriptTooltip = new Tooltip(javaScript.value!);
    typeScriptTooltip = new Tooltip(typeScript.value!);
    cSharpTooltip = new Tooltip(cSharp.value!);
    springTooltip = new Tooltip(spring.value!);
    springBootTooltip = new Tooltip(springBoot.value!);
    aspNetTooltip = new Tooltip(aspNet.value!);
    mySqlTooltip = new Tooltip(mySql.value!);
    postgreSqlTooltip = new Tooltip(postgreSql.value!);
    msSqlTooltip = new Tooltip(msSql.value!);
    vueTooltip = new Tooltip(vue.value!);
    vuetifyTooltip = new Tooltip(vuetify.value!);
    bootstrapTooltip = new Tooltip(bootstrap.value!);
    html5Tooltip = new Tooltip(html5.value!);
    css3Tooltip = new Tooltip(css3.value!);
    sassTooltip = new Tooltip(sass.value!);
    githubTooltip = new Tooltip(github.value!);
    gitlabTooltip = new Tooltip(gitlab.value!);
    vscodeTooltip = new Tooltip(vscode.value!);
    visualstudioTooltip = new Tooltip(visualStudio.value!);
    resharperTooltip = new Tooltip(resharper.value!);
    riderTooltip = new Tooltip(rider.value!);
    intellijideaTooltip = new Tooltip(intellijIdea.value!);
    teamcityTooltip = new Tooltip(teamcity.value!);
    jenkinsTooltip = new Tooltip(jenkins.value!);
    dockerTooltip = new Tooltip(docker.value!);
    jiraTooltip = new Tooltip(jira.value!);
    confluenceTooltip = new Tooltip(confluence.value!);
    bitbucketTooltip = new Tooltip(bitbucket.value!);
});
</script>
<template>
    <section class="resume py-5 d-lg-flex justify-content-center align-items-center" id="resume">
        <div class="container">
            <div class="row">
                <div class="col-lg-6 col-12">
                    <h2 class="mb-4">Work Experience</h2>

                    <div class="timeline">
                        <div class="timeline-wrapper">
                            <div class="timeline-yr">
                                <span>2021</span>
                            </div>
                            <div class="timeline-info">
                                <h3>
                                    <span>Senior Software Engineer/Researcher</span>
                                    <small><a href="https://www.scch.at" target="_blank">Software Competence Center Hagenberg</a></small>
                                </h3>
                                <p>
                                    Senior responsibility for architecture, conceptional and technical prototyping, design and TDD-implementation as
                                    well as deployment of different modules of in-house software-analysis platform "eKNOWS".
                                </p>
                                <p>Techstack: Java, Spring Boot, Vue.js/TypeScript, Docker</p>
                            </div>
                        </div>

                        <div class="timeline-wrapper">
                            <div class="timeline-yr">
                                <span>2014</span>
                            </div>
                            <div class="timeline-info">
                                <h3>
                                    <span>Software Engineer</span>
                                    <small><a href="https://www.rubicon.eu" target="_blank">Rubicon IT</a></small>
                                </h3>
                                <p>
                                    Conceptional and technical design and TDD-implementation of new product features for “ACTA NOVA”, a web-based
                                    records, workflow and documents management solution as part of an agile team.
                                </p>
                                <p>Techstack: C#, ASP.NET/JavaScript, MSSQL</p>
                            </div>
                        </div>

                        <div class="timeline-wrapper">
                            <div class="timeline-yr">
                                <span>2012</span>
                            </div>
                            <div class="timeline-info">
                                <h3>
                                    <span>Teaching Assistant</span>
                                    <small>
                                        <a href="https://www.fh-ooe.at/campus-hagenberg/" target="_blank">
                                            University of Applied Sciences Upper Austria
                                        </a>
                                    </small>
                                </h3>
                                <p>Assistance to students of algorithm/data structure and project management courses.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-lg-6 col-12">
                    <h2 class="mb-4 mobile-mt-2">Education</h2>

                    <div class="timeline">
                        <div class="timeline-wrapper">
                            <div class="timeline-yr">
                                <span>2018</span>
                            </div>
                            <div class="timeline-info">
                                <h3>
                                    <span>Software Engineering / MSc</span>
                                    <small>
                                        <a href="https://www.fh-ooe.at/campus-hagenberg/studiengaenge/master/software-engineering/" target="_blank">
                                            University of Applied Sciences Upper Austria
                                        </a>
                                    </small>
                                </h3>
                                <p>
                                    Studies of advanced software engineering with a focus on data science, genetic/heuristic methods and generative
                                    programming as well as modern service oriented (web) architectures.
                                </p>
                            </div>
                        </div>

                        <div class="timeline-wrapper">
                            <div class="timeline-yr">
                                <span>2014</span>
                            </div>
                            <div class="timeline-info">
                                <h3>
                                    <span>Software Engineering / BSc</span>
                                    <small>
                                        <a href="https://www.fh-ooe.at/campus-hagenberg/studiengaenge/bachelor/software-engineering/" target="_blank">
                                            University of Applied Sciences Upper Austria
                                        </a>
                                    </small>
                                </h3>
                                <p>Studies of software engineering with a focus on software architecture, web technologies and project management.</p>
                            </div>
                        </div>

                        <div class="timeline-wrapper">
                            <div class="timeline-yr">
                                <span>2011</span>
                            </div>
                            <div class="timeline-info">
                                <h3>
                                    <span>Sociology / BA</span>
                                    <small><a href="https://www.soz.univie.ac.at/" target="_blank"> University of Vienna </a></small>
                                </h3>
                                <p>
                                    Studies of sociology with a broad theoretical and methodological foundation and a focus on
                                    quantitative/statistical methods.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-lg-12 col-12 text-center">
                    <h2 class="mb-4 mobile-mt-2">I like to work with</h2>
                </div>
                <div class="col-lg-3 col-12 text-center tech-icon">
                    <h3 class="mb-4 mobile-mt-2">Languages</h3>
                    <i data-bs-toggle="tooltip" data-bs-placement="top" title="Java" ref="java">
                        <i-mdi-language-java />
                    </i>
                    <i data-bs-toggle="tooltip" data-bs-placement="top" title="JavaScript" ref="javaScript">
                        <i-mdi-language-javascript />
                    </i>
                    <i data-bs-toggle="tooltip" data-bs-placement="top" title="TypeScript" ref="typeScript">
                        <i-mdi-language-typescript />
                    </i>
                    <i data-bs-toggle="tooltip" data-bs-placement="top" title="C#" ref="cSharp">
                        <i-mdi-language-csharp />
                    </i>
                </div>

                <div class="col-lg-3 col-12 text-center tech-icon">
                    <h3 class="mb-4 mobile-mt-2">Backend</h3>
                    <i data-bs-toggle="tooltip" data-bs-placement="top" title="Spring" ref="spring">
                        <i-simple-icons-spring />
                    </i>
                    <i data-bs-toggle="tooltip" data-bs-placement="top" title="Spring Boot" ref="springBoot">
                        <i-simple-icons-springboot />
                    </i>
                    <i data-bs-toggle="tooltip" data-bs-placement="top" title="ASP.net" ref="aspNet">
                        <svg width="1em" height="1em" viewBox="0 0 32 32">
                            <path
                                fill="#606060"
                                d="M12.786 23.5H9.852l-.842-3.158H5.676l-.8 3.158H2L6.053 8.49h2.566Zm-6.231-6.609H8.1l-.78-3.024Zm10.187 6.858a3.706 3.706 0 0 1-3.05-1.349a7.1 7.1 0 0 1-1.3-3.909l-.046-.566l2.622-.368l.062.5a3.409 3.409 0 0 0 .565 1.693a1.425 1.425 0 0 0 1.169.515a1.454 1.454 0 0 0 1.179-.448a1.36 1.36 0 0 0 .338-.911a.919.919 0 0 0-.11-.478a1.251 1.251 0 0 0-.537-.438c-.147-.074-.534-.238-1.524-.592a5.006 5.006 0 0 1-2.355-1.5a5.121 5.121 0 0 1-1.016-3.216a5.536 5.536 0 0 1 .481-2.3a3.553 3.553 0 0 1 1.368-1.6a3.834 3.834 0 0 1 2.042-.527a3.6 3.6 0 0 1 2.97 1.277A5.645 5.645 0 0 1 20.7 13l.014.552l-2.651.168l-.063-.482a2.26 2.26 0 0 0-.395-1.2a1.274 1.274 0 0 0-1-.353a1.47 1.47 0 0 0-1.11.4a.535.535 0 0 0-.15.409a.612.612 0 0 0 .152.415a3.877 3.877 0 0 0 1.634.817a7.9 7.9 0 0 1 2.188 1.048a3.917 3.917 0 0 1 1.211 1.61a6.386 6.386 0 0 1 .443 2.517a6.254 6.254 0 0 1-.521 2.542A3.757 3.757 0 0 1 18.98 23.2a4.286 4.286 0 0 1-2.238.549Zm7.818-.249h-2.7V8.49h3.5a7.985 7.985 0 0 1 2.41.227a3.122 3.122 0 0 1 1.587 1.555a6.479 6.479 0 0 1 .643 3.05a7.047 7.047 0 0 1-.368 2.419a4.29 4.29 0 0 1-.942 1.559a2.854 2.854 0 0 1-1.142.743a7.929 7.929 0 0 1-2.1.211h-.892Zm0-8.717h.688a3.214 3.214 0 0 0 1.4-.182a1.038 1.038 0 0 0 .434-.482a1.752 1.752 0 0 0 .152-.762a1.616 1.616 0 0 0-.209-.875a.946.946 0 0 0-.571-.446a6.032 6.032 0 0 0-1.335-.086h-.563Z"></path>
                        </svg>
                    </i>
                    <i data-bs-toggle="tooltip" data-bs-placement="top" title="MySQL" ref="mySql">
                        <i-simple-icons-mysql />
                    </i>
                    <i data-bs-toggle="tooltip" data-bs-placement="top" title="PostgreSQL" ref="postgreSql">
                        <i-simple-icons-postgresql />
                    </i>
                    <i data-bs-toggle="tooltip" data-bs-placement="top" title="MS-SQL" ref="msSql">
                        <i-simple-icons-microsoftsqlserver />
                    </i>
                </div>

                <div class="col-lg-3 col-12 text-center tech-icon">
                    <h3 class="mb-4 mobile-mt-2">Frontend</h3>
                    <i data-bs-toggle="tooltip" data-bs-placement="top" title="Vue.js" ref="vue">
                        <i-mdi-vuejs ref="vue" />
                    </i>
                    <i data-bs-toggle="tooltip" data-bs-placement="top" title="Vuetify" ref="vuetify">
                        <i-mdi-vuetify ref="vuetify" />
                    </i>
                    <i data-bs-toggle="tooltip" data-bs-placement="top" title="Bootstrap" ref="bootstrap">
                        <i-mdi-bootstrap ref="bootstrap" />
                    </i>
                    <i data-bs-toggle="tooltip" data-bs-placement="top" title="HTML 5" ref="html5">
                        <i-mdi-language-html5 ref="html5" />
                    </i>
                    <i data-bs-toggle="tooltip" data-bs-placement="top" title="CSS 3" ref="css3">
                        <i-mdi-language-css3 ref="css3" />
                    </i>
                    <i data-bs-toggle="tooltip" data-bs-placement="top" title="SASS" ref="sass">
                        <i-ion-logo-sass ref="sass" />
                    </i>
                </div>

                <div class="col-lg-3 col-12 text-center tech-icon">
                    <h3 class="mb-4 mobile-mt-2">Tools</h3>
                    <i data-bs-toggle="tooltip" data-bs-placement="top" title="GitHub" ref="github">
                        <i-uil-github />
                    </i>
                    <i data-bs-toggle="tooltip" data-bs-placement="top" title="GitLab" ref="gitlab">
                        <i-uil-gitlab />
                    </i>
                    <i data-bs-toggle="tooltip" data-bs-placement="top" title="VS Code" ref="vscode">
                        <i-mdi-microsoft-visual-studio-code />
                    </i>
                    <i data-bs-toggle="tooltip" data-bs-placement="top" title="Visual Studio" ref="visualStudio">
                        <i-mdi-microsoft-visual-studio />
                    </i>
                    <i data-bs-toggle="tooltip" data-bs-placement="top" title="ReSharper" ref="resharper">
                        <i-simple-icons-resharper />
                    </i>
                    <i data-bs-toggle="tooltip" data-bs-placement="top" title="Rider" ref="rider">
                        <i-simple-icons-rider />
                    </i>
                    <i data-bs-toggle="tooltip" data-bs-placement="top" title="IntelliJ" ref="intellijIdea">
                        <i-simple-icons-intellijidea />
                    </i>
                    <i data-bs-toggle="tooltip" data-bs-placement="top" title="TeamCity" ref="teamcity">
                        <i-simple-icons-teamcity />
                    </i>
                    <i data-bs-toggle="tooltip" data-bs-placement="top" title="Jenkins" ref="jenkins">
                        <i-simple-icons-jenkins />
                    </i>
                    <i data-bs-toggle="tooltip" data-bs-placement="top" title="Docker" ref="docker">
                        <i-simple-icons-docker />
                    </i>
                    <i data-bs-toggle="tooltip" data-bs-placement="top" title="Jira" ref="jira">
                        <i-simple-icons-jirasoftware />
                    </i>
                    <i data-bs-toggle="tooltip" data-bs-placement="top" title="Confluence" ref="confluence">
                        <i-simple-icons-confluence />
                    </i>
                    <i data-bs-toggle="tooltip" data-bs-placement="top" title="Bitbucket" ref="bitbucket">
                        <i-simple-icons-bitbucket />
                    </i>
                </div>
            </div>
        </div>
    </section>
</template>
