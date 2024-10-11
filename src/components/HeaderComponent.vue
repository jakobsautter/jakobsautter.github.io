<script setup lang="ts">
import { StringUtils } from '@/util/StringUtils';
const links = ['about', 'resume', 'contact'];
</script>

<template>
    <header>
        <nav class="navbar shadow navbar-expand-sm fixed-top navbar-light bg-light">
            <div class="container">
                <a class="navbar-brand" href="#home"><i-uil-user class="uil uil-user" /> Jakob Sautter</a>

                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav mx-auto">
                        <li v-for="link in links" :key="link">
                            <a :href="'#' + link" class="nav-link">
                                <span :data-hover="StringUtils.capitalize(link)">{{ StringUtils.capitalize(link) }} </span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>
</template>
