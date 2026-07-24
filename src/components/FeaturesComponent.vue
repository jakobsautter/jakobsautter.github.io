<script setup lang="ts">
import workExperienceData from '@/../data/workExperience.json';
import educationData from '@/../data/education.json';
import { techStack } from '@/../data/techStack';
import type { TimelineItem } from '@/../data/timeline';
import TimelineComponent from '@/components/TimelineComponent.vue';

const workExperience: TimelineItem[] = workExperienceData;
const education: TimelineItem[] = educationData;
</script>

<template>
    <section class="resume py-5 d-lg-flex justify-content-center align-items-center" id="resume">
        <div class="container">
            <div class="row">
                <div class="col-lg-6 col-12">
                    <h2 class="mb-4">Work Experience</h2>
                    <TimelineComponent :items="workExperience" />
                </div>

                <div class="col-lg-6 col-12">
                    <h2 class="mb-4 mobile-mt-2">Education</h2>
                    <TimelineComponent :items="education" />
                </div>
            </div>

            <div class="row">
                <div class="col-lg-12 col-12 text-center">
                    <h2 class="m-4 mobile-mt-2">I like to work with</h2>
                </div>

                <div v-for="category in techStack" :key="category.name" class="col-lg-3 col-12 text-center tech-icon">
                    <h3 class="mb-4 mobile-mt-2">{{ category.name }}</h3>
                    <a
                        v-for="item in category.items"
                        :key="item.title"
                        :href="item.url"
                        target="_blank"
                        rel="noopener noreferrer"
                        :title="item.title">
                        <component :is="item.icon" class="tech-icon-link" />
                    </a>
                </div>
            </div>
        </div>
    </section>
</template>
