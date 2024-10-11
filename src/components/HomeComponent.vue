<script setup lang="ts">
import { teaser, teaserAnimation } from '@/../data/about.json';
</script>
<template>
    <section class="home d-lg-flex justify-content-center align-items-center" id="home">
        <div class="container">
            <div class="row">
                <div class="col-lg-8 col-md-12 col-12 d-flex align-items-center">
                    <div class="about-text">
                        <h1 class="animated animated-text">
                            <span class="me-2">Hi, I'm </span>
                            <span class="me-2 main-color">Jakob.</span>
                            <br />
                            <br />
                            <span class="me-2"> {{ teaser }}</span>
                            <span class="animated-info">
                                <span v-for="item in teaserAnimation" :key="item" class="animated-item">{{ item }}.</span>
                            </span>
                        </h1>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
