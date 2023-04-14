<template>
    <the-header></the-header>
    <div class="container mt-5">
        <div class="row">
            <div class="col-8">
                <h3>Draggable table</h3>
        
                <table class="table table-striped">
                <thead class="thead-dark">
                    <tr>
                    <th scope="col">Id</th>
                    <th scope="col">Name</th>
                    <th scope="col">Sport</th>
                    </tr>
                </thead>
                <draggable v-model="state.list" 
                    tag="tbody" 
                    v-bind="dragOptions" 
                    :move="checkMove" 
                    item-key="name">
                    <template #item="{ element }">
                    <tr>
                        <td scope="row">{{ element.id }}</td>
                        <td>{{ element.name }}</td>
                        <td>{{ element.sport }}</td>
                    </tr>
                    </template>
                </draggable>
                </table>
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

    const dragging = ref(false);

    const state = reactive({
        list: [
          { id: 1, name: "Abby", sport: "basket" },
          { id: 2, name: "Brooke", sport: "foot" },
          { id: 3, name: "Courtenay", sport: "volley" },
          { id: 4, name: "David", sport: "rugby" }
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
.ghost {
  background: #f0f0f0;
  color: transparent;
}
.table .thead-dark th {
    color: #fff;
    background-color: #343a40;
    border-color: #454d55;
}
tr {
  cursor: move;
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