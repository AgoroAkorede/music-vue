<template>
  <section class="container mx-auto mt-6">
    <div class="md:grid md:grid-cols-3 md:gap-4"></div>

    <div class="col-span-1">
      <app-upload ref="upload" :addSong="addSong" />
    </div>
    <div class="col-span-2">
      <div
        class="bg-white rounded border border-gray-200 relative flex flex-col"
      >
        <div class="px-6 pt-6 pb-5 font-bold border-b border-gray-200">
          <span class="card-title">My Songs</span>
          <i class="fa fa-compact-disc float-right text-green-400 text-2xl"></i>
        </div>
        <div class="p-6">
          <div class="border border-gray-200 p-3 mb-4 rounded">
            <div>
              <h4 class="inline-block text-2xl font-bold">Song Name</h4>
              <button
                class="ml-1 py-1 px-2 text-sm rounded text-white bg-red-600 float-right"
              >
                <i class="fa fa-times"></i>
              </button>
              <button
                class="ml-1 py-1 px-2 text-sm rounded text-white bg-blue-600 float-right"
              >
                <i class="fa fa-pencil-alt"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <composition-item-vue
      v-for="(song, i) in songs"
      :key="song.docID"
      :song="song"
      :updateSong="updateSong"
      :index="i"
      :removesong="removeSong"
      :updateUnsavedFlag="updateUnsavedFlag"
    />
  </section>
</template>

<script>
import AppUpload from "@/components/Upload.vue";
import CompositionItemVue from "@/components/CompositionItem.vue";
import { songsCollection, auth } from "@/includes/firebase";

export default {
  name: "manage-view",
  components: {
    AppUpload,
    CompositionItemVue,
  },
  data() {
    return {
      songs: [],
      unsavedFlag: false,
    };
  },
  async created() {
    const snapshot = await songsCollection
      .where("uid", "==", auth.currentUser.uid)
      .get();

    snapshot.forEach(this.addSong);
  },
  methods: {
    updateSong(i, value) {
      this.songs[i].modified_name = value.modified_name;
      this.songs[i].genre = value.genre;
    },
    removeSong(i) {
      this.song.splice(i, 1);
    },
    addSong(document) {
      const song = {
        ...document.data(),
        docId: document.id,
      };
      this.songs.push(song);
    },
    updateUnsavedFlag(value) {
      this.unsavedFlag = value;
    },
  },
  beforeRouteLeave(to, from, next) {
    if (!this.unsavedFlag) {
      next();
    } else {
      const leave = confirm(
        "You have unsaved changes Are you sure you want to leave?"
      );
      next(leave);
    }
  },
  // beforeRouteLeave(to, from, next) {
  //   this.$refs.upload;

  //   next();
  // },

  // beforeRouteEnter(to, from, next) {
  //   if (store.state.userLoggedIn) {
  //     next();
  //   } else {
  //     next({ name: "home" });
  //   }
  // },
};
</script>
