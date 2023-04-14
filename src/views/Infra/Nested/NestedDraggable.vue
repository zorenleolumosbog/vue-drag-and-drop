<template>
    <draggable
      class="dragArea"
      tag="ul"
      :list="tasks"
      :group="{ name: 'g1' }"
      :move="checkMove"
      item-key="name"
    >
      <template #item="{ element }">
        <li>
          <p>{{ element.name }}</p>
          <nested-draggable :tasks="element.tasks" />
        </li>
      </template>
    </draggable>
  </template>
  <script lang="ts">
  import draggable from 'vuedraggable';
  export default {
    name: "nested-draggable",
    props: {
      tasks: {
        required: true,
        type: Array
      }
    },
    components: {
      draggable
    },
    setup() {
        const checkMove = (event: any) => {
            console.log("Future index: " + event.draggedContext.futureIndex);
        };

        return {
            checkMove
        };
    }
  };
  </script>
  <style scoped>
  .dragArea {
    min-height: 50px;
    outline: 1px dashed;
  }
  </style>