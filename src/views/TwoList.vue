<template>
    <div class="container mt-5">
        <div class="row">
            <div class="col-3">
                <h3>Draggable 1</h3>
                
                <div class="v-card">
                    <draggable
                        class="list-group"
                        tag="transition-group"
                        :component-data="{
                        tag: 'ul',
                        type: 'transition-group',
                        name: !dragging ? 'flip-list' : null
                        }"
                        :move="checkMove"
                        v-model="state.list1"
                        v-bind="dragOptions"
                        @start="dragging = true"
                        @end="dragging = false"
                        item-key="order"
                    >
                        <template #item="{ element }">
                        <li class="list-group-item">
                            <i
                            :class="
                                element.fixed ? 'fa fa-anchor' : 'glyphicon glyphicon-pushpin'
                            "
                            @click="element.fixed = !element.fixed"
                            aria-hidden="true"
                            ></i>
                            {{ element.name }}
                        </li>
                        </template>
                    </draggable>
                </div>
            </div>
            <div class="col-3">
                <h3>Draggable 2</h3>
                
                <div class="v-card">
                    <draggable
                        class="list-group"
                        tag="transition-group"
                        :component-data="{
                        tag: 'ul',
                        type: 'transition-group',
                        name: !dragging ? 'flip-list' : null
                        }"
                        :move="checkMove"
                        v-model="state.list2"
                        v-bind="dragOptions"
                        @start="dragging = true"
                        @end="dragging = false"
                        item-key="order"
                    >
                        <template #item="{ element }">
                        <li class="list-group-item">
                            <i
                            :class="
                                element.fixed ? 'fa fa-anchor' : 'glyphicon glyphicon-pushpin'
                            "
                            @click="element.fixed = !element.fixed"
                            aria-hidden="true"
                            ></i>
                            {{ element.name }}
                        </li>
                        </template>
                    </draggable>
                </div>
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
    import draggable from 'vuedraggable';
    import { ref, reactive, computed } from 'vue';

    const dragging = ref(false);

    const state = reactive({
        list1: [
            { name: "John", id: 1 },
            { name: "Joao", id: 2 },
            { name: "Jean", id: 3 },
            { name: "Gerard", id: 4 }
        ],
        list2: [
            { name: "Juan", id: 5 },
            { name: "Edgard", id: 6 },
            { name: "Johnson", id: 7 }
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
  opacity: 0.5;
  background: #f0f0f0;
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