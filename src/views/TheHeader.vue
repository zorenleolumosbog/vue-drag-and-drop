<template>
    <nav class="navbar navbar-expand-lg bg-light">
        <div class="container-fluid">
            <router-link class="navbar-brand" to="/">Home</router-link>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
                <li class="nav-item">
                    <router-link class="nav-link" to="/">Sort Listing</router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link" to="/two-list">Two Listing</router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link" to="/control-clone">Control Clone</router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link" to="/table-list">Table Listing</router-link>
                </li>
            </ul>
            </div>
        </div>
    </nav>
</template>
<script setup lang="ts">
    import { useRouter } from 'vue-router';

    const router = useRouter();
</script>