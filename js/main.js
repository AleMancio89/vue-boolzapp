const app = new Vue({
  el : "#root",
  data: {
    loggedUser: {
      name: "Alessandro Mancineli",
      imgSrc: "img/avatar_io.jpg"
    },
    contacts: [
      {
        name: "Michele",
        imgSrc: "img/avatar_1.jpg",
        lastSeen:'13:23'
      },
      {
        name: "Fabio",
        imgSrc: "img/avatar_2.jpg",
        lastSeen:'16:46'
      },
      {
        name: "Samuele",
        imgSrc: "img/avatar_3.jpg",
        lastSeen:'8:40'
      },
      {
        name: "Luisa",
        imgSrc: "img/avatar_8.jpg",
        lastSeen:'15:15'
      },
    ],
    activeContactIndex: 0
  },
  methods: {
    active: function(actIndex) {
      this.activeContactIndex = [actIndex];
    }
  }
});
