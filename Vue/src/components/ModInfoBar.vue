<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  data() {
    return {
      modInfo: {
        packageId: {
          name: "packageId",
          description: "packageId",
          field: "newu2012.template",
        },
        name: { name: "name", description: "name", field: "Parrots" },
        author: { name: "author", description: "author", field: "newu2012" },
        supportedVersions: {
          name: "supportedVersions",
          description: "supportedVersions",
          field: ["1.3"],
        },
        modDependencies: {
          name: "modDependencies",
          description: "modDependencies",
          field: [],
        },
        incompatibleWith: {
          name: "incompatibleWith",
          description: "incompatibleWith",
          field: [],
        },
        description: {
          name: "description",
          description: "description",
          field:
            "10 new types of real world parrots now in your human-eating colony!",
        },
      },
    };
  },
  computed: {
    templateUrl() {
      return `${window.location.origin}/template`;
    },
  },
});
</script>

<template>
  <div class="mainContainer">
    <div class="modInfo">
      <h2>Mod Info</h2>
      <a href="/template" download="mod_template">
        <button>Download mod template</button>
      </a>
      <p>
        {{ modInfo.packageId.name }}<input v-model="modInfo.packageId.field" />
      </p>
      <p>{{ modInfo.name.name }}<input v-model="modInfo.name.field" /></p>
      <p>{{ modInfo.author.name }}<input v-model="modInfo.author.field" /></p>
      <p>
        {{ modInfo.supportedVersions.name
        }}<input v-model="modInfo.supportedVersions.field" />
      </p>
      <p>
        {{ modInfo.modDependencies.name
        }}<input v-model="modInfo.modDependencies.field" />
      </p>
      <p>
        {{ modInfo.incompatibleWith.name
        }}<input v-model="modInfo.incompatibleWith.field" />
      </p>
      <p>
        {{ modInfo.description.name
        }}<input v-model="modInfo.description.field" />
      </p>
    </div>
  </div>
</template>

<style>
.mainContainer {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 16px;
}

.modInfo {
  margin: 16px;
  width: calc(100% - 32px);
}

.modInfo > p {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  contain: content;
}

.modInfo > a > button {
  height: 48px;
  width: -webkit-fill-available;
  font-size: 1.5vmax;
}
</style>
