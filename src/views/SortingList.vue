<template>
    <div class="container mt-5">
        <div class="row">
            <div class="col-2">
                <div class="form-group">
                    <div
                        class="btn-group-vertical buttons"
                        role="group"
                        aria-label="Basic example"
                    >
                        <button class="btn btn-secondary" @click="add">Add</button>
                        <button class="btn btn-secondary" @click="replace">Replace</button>
                    </div>
            
                    <div class="form-check">
                        <input
                        id="disabled"
                        type="checkbox"
                        v-model="enabled"
                        class="form-check-input"
                        />
                        <label class="form-check-label" for="disabled">DnD enabled</label>
                    </div>
                </div>
            </div>
        
            <div class="col-6">
                <h3>Draggable {{ draggingInfo }}</h3>
        
                <draggable
                :list="state.list"
                :disabled="!enabled"
                item-key="name"
                class="list-group"
                ghost-class="ghost"
                :move="checkMove"
                @start="dragging = true"
                @end="dragging = false"
                >
                <template #item="{ element }">
                    <div class="list-group-item" :class="{ 'not-draggable': !enabled }">
                    {{ element.name }}
                    </div>
                </template>
                </draggable>
            </div>
        
            <div class="col-3">
                <pre>{{ state.list }}</pre>
            </div>
        </div>
    </div>
  </template>
  
<script setup lang="ts">
    import draggable from 'vuedraggable';
    import { ref, reactive, computed } from 'vue';

    let id = 1;
    const enabled = ref(true);
    const dragging = ref(false);

    const state = reactive({
        list: [
            { name: "John", id: 0 },
            { name: "Joao", id: 1 },
            { name: "Jean", id: 2 }
        ]
    });

    const draggingInfo = computed(() => {
        return dragging ? "under drag" : "";
    });

    const add = () => {
        state.list.push({ name: "Juan " + id, id: id++ });
    };

    const replace = () => {
        state.list = [{ name: "Edgard", id: id++ }];
    };

    const checkMove = (event: any) => {
        console.log("Future index: " + event.draggedContext.futureIndex);
    };
  </script>
  <style scoped>
  .buttons {
    margin-top: 35px;
  }
  .ghost {
    opacity: 0.5;
    background: #c8ebfb;
  }
  .not-draggable {
    cursor: no-drop;
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
  </style>