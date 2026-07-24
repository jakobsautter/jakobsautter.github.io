<script setup lang="ts">
import type { TimelineItem } from '@/../data/timeline';

defineProps<{ items: TimelineItem[] }>();
</script>

<template>
    <div class="timeline">
        <div v-for="item in items" :key="item.timestamp" class="timeline-wrapper">
            <div class="timeline-yr">
                <span>{{ item.timestamp }}</span>
            </div>
            <div class="timeline-info">
                <h3>
                    <span>{{ item.title }}</span>
                    <small>
                        <a :href="item.subtitleUrl" target="_blank" rel="noopener noreferrer">{{ item.subtitle }}</a>
                    </small>
                </h3>
                <p>{{ item.description }}</p>
                <p v-if="item.meta">{{ item.meta }}</p>
            </div>
        </div>
    </div>
</template>
