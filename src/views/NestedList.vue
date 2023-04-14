<template>
    <the-header></the-header>
    <div class="container mt-5">
        <div class="row">
            <div class="col-8">
            <h3>Nested draggable</h3>
            <nested-draggable :tasks="state.list" />
            </div>
        
            <div class="col-3">
                <pre>{{ state.list }}</pre>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
    import TheHeader from './TheHeader.vue';
    import NestedDraggable from "./Infra/Nested/NestedDraggable.vue";
    import { ref, reactive, computed } from 'vue';

    const state = reactive({
        list: [
            {
            name: "task 1",
            tasks: [
                {
                    name: "task 2",
                    tasks: []
                }
            ]
            },
            {
            name: "task 3",
            tasks: [
                {
                    name: "task 4",
                    tasks: []
                }
            ]
            },
            {
            name: "task 5",
                tasks: []
            }
        ]
    });
</script>
<style scoped>
pre {
  display: block;
  padding: 9.5px;
  margin: 0 0 10px;
  font-size: 13px;
  line-height: 1.42857143;
  color: #333;
  word-break: break-all;
  word-wrap: break-word;
  background-color: #f5f5f5;
  border: 1px solid #ccc;
  border-radius: 4px;
}
</style>
