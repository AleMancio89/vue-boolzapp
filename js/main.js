const app = new Vue({
  el : "#root",
  data: {
    contacts: [
      {
        name: "Michele",
        imgSrc: "img/avatar_1.jpg",
        isActive: false,
        lastSeen:''
      },
      {
        name: "Fabio",
        imgSrc: "img/avatar_2.jpg",
        isActive: false,
        lastSeen:''
      },
      {
        name: "Samuele",
        imgSrc: "img/avatar_3.jpg",
        isActive: false,
        lastSeen:''
      },
      {
        name: "Luisa",
        imgSrc: "img/avatar_8.jpg",
        isActive: false,
        lastSeen:''
      },
    ]
  },
  methods: {
    active: function(actIndex) {
      this.contacts[actIndex].isActive = !(this.contacts[actIndex].isActive)
    }
  }

});
