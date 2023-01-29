<script setup lang="ts">
import Home from '@/components/HomeComponent.vue';
import About from '@/components/AboutComponent.vue';
import Header from '@/components/HeaderComponent.vue';
import Features from '@/components/FeaturesComponent.vue';
import Contact from '@/components/ContactComponent.vue';
import Footer from '@/components/FooterComponent.vue';
</script>

<template>
    <Header />

    <main>
        <Home />
        <About />
        <Features />
        <Contact />
    </main>

    <Footer />
</template>
