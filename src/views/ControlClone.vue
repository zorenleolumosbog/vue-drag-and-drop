<template>
    <the-header></the-header>
    <div class="container mt-5">
        <div class="row">
            <p>Press Ctrl to clone element from list 1</p>
            <div class="col-3">
                <h3>Draggable 1</h3>
                <draggable
                class="dragArea list-group"
                :list="state.list1"
                v-bind="dragOptions"
                :clone="clone"
                :group="{ name: 'people', pull: pullFunction }"
                @start="start"
                item-key="id"
                >
                <template #item="{ element }">
                    <div class="list-group-item">
                    {{ element.name }}
                    </div>
                </template>
                </draggable>
            </div>
        
            <div class="col-3">
                <h3>Draggable 2</h3>
                <draggable
                class="dragArea list-group"
                v-bind="dragOptions"
                :list="state.list2"
                group="people"
                item-key="id"
                >
                <template #item="{ element }">
                    <div class="list-group-item">
                    {{ element.name }}
                    </div>
                </template>
                </draggable>
            </div>
        
            <div class="col-3">
                <pre>{{ state.list1 }}</pre>
            </div>

            <div class="col-3">
                <pre>{{ state.list2 }}</pre>
            </div>
        </div>
        </div>
  </template>
  
<script setup lang="ts">
    import TheHeader from './TheHeader.vue';
    import draggable from 'vuedraggable';
    import { ref, reactive, computed } from 'vue';

    let idGlobal = 8;
    
    const controlOnStart = ref(true);

    const state = reactive({
        list1: [
          { name: "Jesus", id: 1 },
          { name: "Paul", id: 2 },
          { name: "Peter", id: 3 }
        ],
        list2: [
          { name: "Luc", id: 5 },
          { name: "Thomas", id: 6 },
          { name: "John", id: 7 }
        ],
    });

    const dragOptions = computed(() => {
        return {
            animation: 200,
            group: "people",
            disabled: false,
            ghostClass: "ghost"
        };
    });

    const clone = ({ name }) => {
        return { name, id: idGlobal++ };
    };
    const pullFunction = () => {
    return controlOnStart ? "clone" : true;
    };
    const start = ({ originalEvent }) => {
        controlOnStart.value = originalEvent.ctrlKey;
    };

    const checkMove = (event: any) => {
        console.log("Future index: " + event.draggedContext.futureIndex);
    };
</script>
<style scoped>
.flip-list-move {
  transition: transform 0.5s;
}
.no-move {
  transition: transform 0s;
}
.ghost {
  background: #f0f0f0;
  color: transparent;
}
.list-group {
  min-height: 20px;
}
.list-group-item {
  cursor: move;
}
.list-group-item i {
  cursor: pointer;
}
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
.v-card {
    background-color: #f5f5f5;
    border: 1px solid #ccc;
    border-radius: 4px;
    padding: 9.5px;
}
</style>