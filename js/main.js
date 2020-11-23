const app = new Vue({
  el : "#root",
  data: {
    loggedUser: {
      name: "Alessandro Mancinelli",
      imgSrc: "img/avatar_io.jpg"
    },
    contacts: [
      {
        name: "Michele",
        imgSrc: "img/avatar_1.jpg",
        lastSeen:'13:23',
        message: [
          {
            text: "Ciao",
            sent: true,
            date: 10.03
          },
          {
            text: "Chi si sente",
            sent: false,
            date: 10.22
          },
          {
            text: "Tutto bene",
            sent: true,
            date: 11.15
          },
          {
            text: "No, è un periodaccio",
            sent: false,
            date: 11.45
          }
        ]
      },
      {
        name: "Fabio",
        imgSrc: "img/avatar_2.jpg",
        lastSeen:'16:46',
        message: [
          {
            text: "Ale ho bisogno del tuo aiuto",
            sent: false,
            date: 16.41
          },
          {
            text: "E' tutta la mattina che continuo ad arrovellarmi il cervello",
            sent: false,
            date: 16.42
          },
          {
            text: "Oh Fabio ciao, dimmi",
            sent: true,
            date: 17.01
          },
          {
            text: "Finalmente! Iniziavo a non sperarci più e non so come uscirne",
            sent: false,
            date: 17.05
          },
          {
            text: "Dove posso trovare lo stesso maglione che indossai ieri?",
            sent: false,
            date: 17.06
          }
        ]
      },
      {
        name: "Samuele",
        imgSrc: "img/avatar_3.jpg",
        lastSeen:'8:40',
        message:[
          {
            text: "Ciao, è ancora disponibile la stanza in affitto?",
            sent: true,
            date: 12.36
          },
          {
            text: "Certo, puoi venire a vederla lunedì",
            sent: false,
            date: 12.45
          },
          {
            text: "Perfetto direi, ci vediamo verso le 10:00",
            sent: true,
            date: 13.55
          },
          {
            text: "A lunedì!",
            sent: false,
            date: 14.15
          },
        ]
      },
      {
        name: "Luisa",
        imgSrc: "img/avatar_8.jpg",
        lastSeen:'15:15',
        message: [
          {
            text: "Dobbiamo parlare.",
            sent: false,
            date: 16.41
          }
        ]
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
