<template>
    <the-header></the-header>
    <div class="container mt-5">
        <div class="row">
        <div class="col-2">
            <button class="btn btn-secondary button" @click="add">Add</button>
        </div>
    
        <div class="col-7">
            <h3>Draggable</h3>
    
            <draggable
                tag="ul"
                :list="state.list"
                v-bind="dragOptions"
                :move="checkMove"
                class="list-group"
                handle=".handle"
                item-key="name"
                >
                <template #item="{ element, index }">
                    <li class="list-group-item">
                        <i class="bi bi-arrows-expand handle"></i>
                        <span class="text">{{ element.name }} </span>
                        <input type="text" class="form-control" v-model="element.text" />
                        <i class="bi bi-x close" @click="removeAt(index)"></i>
                    </li>
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
    import TheHeader from './TheHeader.vue';
    import draggable from 'vuedraggable';
    import { ref, reactive, computed } from 'vue';

    let id = 3;
    const dragging = ref(false);

    const state = reactive({
        list: [
          { name: "John", text: "", id: 0 },
          { name: "Joao", text: "", id: 1 },
          { name: "Jean", text: "", id: 2 }
        ]
    });

    const dragOptions = computed(() => {
      return {
        animation: 200,
        group: "people",
        disabled: false,
        ghostClass: "ghost"
      };
    });

    const removeAt = (idx: number) => {
        state.list.splice(idx, 1);
    };

    const add = () => {
        id++;
        state.list.push({ 
            name: "Juan " + id, 
            id, text: "" 
        });
    };

    const checkMove = (event: any) => {
        console.log("Future index: " + event.draggedContext.futureIndex);
    };
</script>
<style scoped>
  .button {
    margin-top: 35px;
  }
  .handle {
    float: left;
    padding-top: 8px;
    padding-bottom: 8px;
    font-size: 22px;
    cursor: move;
  }
  .close {
    float: right;
    padding-top: 8px;
    padding-bottom: 8px;
    font-size: 22px;
    cursor: pointer;
  }
  input {
    display: inline-block;
    width: 50%;
  }
  .text {
    margin: 20px;
  }
.ghost {
  background: #f0f0f0;
  color: transparent;
}
.ghost input {
  visibility: hidden;
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