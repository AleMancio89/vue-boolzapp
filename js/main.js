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
          // sent = true means message sent from the loggedUser to the contact
          {
            text: "Ciao",
            sent: true,
            date: new Date(2020, 10 , 23 , 10 , 20 , 00)
          },
          {
            text: "Chi si sente",
            sent: false,
            date: new Date(2020, 10 , 23 , 10 , 22 , 00)
          },
          {
            text: "Tutto bene",
            sent: true,
            date: new Date(2020, 10 , 23 , 11 , 15 , 00)
          },
          {
            text: "No, è un periodaccio",
            sent: false,
            date: new Date(2020, 10 , 23 , 11 , 45 , 00)
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
            date: new Date(2020, 10 , 23 , 16 , 41 , 00)
          },
          {
            text: "E' tutta la mattina che continuo ad arrovellarmi il cervello",
            sent: false,
            date: new Date(2020, 10 , 23 , 16 , 42 , 00)
          },
          {
            text: "Oh Fabio ciao, dimmi",
            sent: true,
            date: new Date(2020, 10 , 23 , 17 , 01 , 00)
          },
          {
            text: "Finalmente! Iniziavo a non sperarci più e non so come uscirne",
            sent: false,
            date: new Date(2020, 10 , 23 , 17 , 05 , 00)
          },
          {
            text: "Dove posso trovare lo stesso maglione che indossavi ieri?",
            sent: false,
            date: new Date(2020, 10 , 23 , 17 , 06 , 00)
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
            date: new Date(2020, 10 , 23 , 12 , 36 , 00)
          },
          {
            text: "Certo, puoi venire a vederla lunedì",
            sent: false,
            date: new Date(2020, 10 , 23 , 12 , 45 , 00)
          },
          {
            text: "Perfetto direi, ci vediamo verso le 10:00",
            sent: true,
            date: new Date(2020, 10 , 23 , 13 , 55 , 00)
          },
          {
            text: "A lunedì!",
            sent: false,
            date: new Date(2020, 10 , 23 , 14 , 15 , 00)
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
            date: new Date(2020, 10 , 23 , 16 , 41 , 00)
          }
        ]
      },
      {
        name: "Alessio",
        imgSrc: "img/avatar_4.jpg",
        lastSeen:'11:17',
        message: [
          {
            text: "Stasera tieniti pronto che andiamo al pub a vedere la partita",
            sent: false,
            date: new Date(2020, 10 , 23 , 15 , 22 , 00)
          },
          {
            text: "Chiaro! Sempre forza Juventus!",
            sent: true,
            date: new Date(2020, 10 , 23 , 15 , 31 , 00)
          },
          {
            text: "A dopo!",
            sent: false,
            date: new Date(2020, 10 , 23 , 15 , 31 , 00)
          },
        ]
      },
      {
        name: "Pierpaolo",
        imgSrc: "img/avatar_5.jpg",
        lastSeen:'19:35',
        message: [
          {
            text: "Ho trovato il modo di dare una svolta alla tua vita",
            sent: true,
            date: new Date(2020, 10 , 23 , 19 , 19 , 00)
          },
          {
            text: "Devi visitare il sito boolean.careers",
            sent: true,
            date: new Date(2020, 10 , 23 , 19 , 20 , 00)
          },
          {
            text: "Non te ne pentirai!",
            sent: true,
            date: new Date(2020, 10 , 23 , 19 , 20 , 00)
          },
          {
            text: "Ma a me piacciono i treni",
            sent: false,
            date: new Date(2020, 10 , 23 , 19 , 35 , 00)
          },
        ]
      },
      {
        name: "Mariassunta",
        imgSrc: "img/avatar_6.jpg",
        lastSeen:'9:00',
        message: [
          {
            text: "Scusa, sono appena arrivata a lavoro",
            sent: false,
            date: new Date(2020, 10 , 23 , 8 , 40 , 00)
          },
          {
            text: "Non fa niente, ci sentiamo più tardi",
            sent: true,
            date: new Date(2020, 10 , 23 , 8 , 50 , 00)
          },
          {
            text: "Ti chiamo non appena riesco",
            sent: false,
            date: new Date(2020, 10 , 23 , 9 , 00 , 00)
          }
        ]
      },
      {
        name: "Pietro",
        imgSrc: "img/avatar_7.jpg",
        lastSeen:'18:06',
        message: [
          {
            text: "Stasera calcetto alle 21:00",
            sent: true,
            date: new Date(2020, 10 , 23 , 14 , 40 , 00)
          },
          {
            text: "Ti voglio bello carico",
            sent: true,
            date: new Date(2020, 10 , 23 , 14 , 40 , 00)
          },
          {
            text: "Accidenti, stasera non posso! Ho il corso di uncinetto con mamma",
            sent: false,
            date: new Date(2020, 10 , 23 , 14 , 50 , 00)
          },
          {
            text: "Io non ho parole..",
            sent: true,
            date: new Date(2020, 10 , 23 , 14 , 55 , 00)
          }
        ]
      },
    ],
    inputUserMessage: "",
    activeContactIndex: 0,
    filterInput: ""
  },
  filters: {
    //Format date in a useful type and return a different way if today message
    formatDate(inputDate) {
      let date = `${inputDate.getUTCDate()}/${inputDate.getUTCMonth() + 1}/${inputDate.getUTCFullYear()}`;
      let hours = inputDate.getUTCHours();
      let minutes = (inputDate.getUTCMinutes() < 10 ? '0' : '') + inputDate.getUTCMinutes();
      let seconds = (inputDate.getUTCSeconds() < 10 ? '0' : '') + inputDate.getUTCSeconds();

      if ((inputDate.getUTCDate()) == (new Date().getUTCDate())) {
        return `${hours + 1}:${minutes}`;
      } else {
        return `${date} ${hours + 1}:${minutes}:${seconds}`;
      }
    }
  },
  methods: {
    //Define active contact
    activeContact(actIndex) {
      this.activeContactIndex = [actIndex];
    },
    //Set automatic reply
    automaticReply() {
      this.contacts[this.activeContactIndex].message.push(
        {
          text: "Scusami ora non posso rispondere, sentiamoci più tardi",
          sent: false,
          date: new Date()
        }
      )
    },
    //Handle input message from user and setInterval for automatic reply after 3seconds
    sendMessage(activeContactIndex) {
      this.contacts[activeContactIndex].message.push(
        {
        text: this.inputUserMessage,
        sent: true,
        date: new Date()
        // date: `${new Date().getUTCDay()}/${new Date().getUTCMonth()}/${new Date().getUTCFullYear()} ${new Date().getUTCHours()}:${new Date().getUTCMinutes()}:${new Date().getUTCSeconds()}`
        },
      )
      this.inputUserMessage = '';
      setTimeout(this.automaticReply, 3000);
    },
  },
  computed:{
    //Compute the original contacts array to filter in a new one based on FilterInput
    filteredContacts(){
      return this.contacts.filter(element =>{
        return element.name.toLowerCase().includes(this.filterInput.toLowerCase())
      });
    },
  }
});
