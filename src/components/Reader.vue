<template>
  <div class="bg-red-500 h-[200px] w-[500px] p-1">
    <div id="viewerCanvas"></div>
  </div>
</template>

<script>


export default {
  name: "Reader",
  props: {
    // link: {
    //   type: String,
    //   required: true,
    // },
    computed: {
      bookId() {
        return this.$route.params.bookId;
      },
    },
    mounted() {
    if (typeof google === 'undefined' || !google.books) {
      const script = document.createElement('script');
      script.src = "https://www.gstatic.com/books/jsapi.js";
      script.onload = this.loadBook;
      document.head.appendChild(script);
    } else {
      this.loadBook();
    }
  },
  methods: {
    loadBook() {
      const link = this.$route.query.link;
      if (link) {
        google.books.load();
        google.books.setOnLoadCallback(() => {
          const viewer = new google.books.DefaultViewer(document.getElementById('viewerCanvas'));
          viewer.load(link);
        });
      } else {
        console.error("El libro no está disponible actualmente");
      }
    }
  }
    //   beforeMount() {
    //     if (this.link) {
    //       google.books.load();
    //       google.books.setOnLoadCallback(() => {
    //         const viewer = new google.books.DefaultViewer(
    //           document.getElementById("viewerCanvas")
    //         );
    //         viewer.load(this.link);
    //       });
    //     } else {
    //       return "El libro no está disponible actualmente";
    //     }
    //   },
//     mounted() {
//   const link = this.$route.query.link;
//   if (link) {
//     google.books.load();
//     google.books.setOnLoadCallback(() => {
//       const viewer = new google.books.DefaultViewer(document.getElementById('viewerCanvas'));
//       viewer.load(link);
//     });
//   } else {
//     return "El libro no está disponible actualmente";
//   }
// }
  },
};
</script>
