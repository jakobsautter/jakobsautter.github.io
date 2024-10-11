<script setup lang="ts">
import { details } from '@/../data/about.json';
</script>
<template>
    <section class="about py-5 d-lg-flex justify-content-center align-items-center" id="about">
        <div class="container">
            <div class="row">
                <div class="col-lg-12 col-12">
                    <h2 class="mb-4 text-center">About</h2>
                    <p v-for="detail in details" :key="detail">{{ detail }}</p>
                    <p>You can reach out to me on my <a href="#contact">contact</a> page.</p>
                </div>
            </div>
        </div>
    </section>
</template>
