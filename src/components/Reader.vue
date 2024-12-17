<template>
  <div class="bg-yellow-500 bg-opacity-40 w-full border-2 border-gray-500 rounded-sm">
    <div id="viewerCanvas"></div>
  </div>
</template>

<script>


export default {
  name: "Reader",
    computed: {
      bookId() {
        return this.$route.params.bookId;
      },
    },
    props: {
    link: {
      type: String,
      required: true,
    },
    mounted() {
    const link = this.$route.query.link;
    if (link) {
      google.books.load();
      google.books.setOnLoadCallback(() => {
        const viewer = new google.books.DefaultViewer(
          document.getElementById("viewerCanvas")
        );
        viewer.load(link);
      });
    } else {
      return "El libro no se encuentra disponible en este momento";
    }
  },
}
};
</script>
