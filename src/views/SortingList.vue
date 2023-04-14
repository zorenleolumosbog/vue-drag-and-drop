<template>
    <div class="container mt-5">
        <div class="row">
            <div class="col-2">
                <div class="form-group">
                    <button class="btn btn-secondary button" @click="sort">
                        To original order
                    </button>
                    <button class="btn btn-secondary m-y" @click="add">Add</button>
                    <button class="btn btn-secondary m-1" @click="replace">Replace</button>
            
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
                class="list-group"
                tag="transition-group"
                :component-data="{
                tag: 'ul',
                type: 'transition-group',
                name: !dragging ? 'flip-list' : null
                }"
                :move="checkMove"
                v-model="state.list"
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

    const dragOptions = computed(() => {
      return {
        animation: 200,
        group: "description",
        disabled: false,
        ghostClass: "ghost"
      };
    });

    const sort = () => {
      state.list = state.list.sort((a, b) => a.id - b.id);
    };

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
</style>