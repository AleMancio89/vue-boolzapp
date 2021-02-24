/*
Create your version of WhatsApp by Boolean using Vue.js
*/

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
        lastSeen: new Date(2020, 10 , 23 , 12 , 00 , 00),
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
        lastSeen:new Date(2020, 10 , 23 , 16 , 46 , 00),
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
        lastSeen:new Date(2020, 10 , 23 , 8 , 40 , 00),
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
        lastSeen:new Date(2020, 10 , 23 , 15 , 15 , 00),
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
        lastSeen:new Date(2020, 10 , 23 , 11 , 17 , 00),
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
        lastSeen:new Date(2020, 10 , 23 , 19 , 35 , 00),
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
        lastSeen:new Date(2020, 10 , 23 , 9 , 00 , 00),
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
        lastSeen:new Date(2020, 10 , 23 , 18 , 06 , 00),
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
    activeContact: null,
    filterInput: "",
    isEmoticonActive: false,
    emoticonHead: [...emoticonHead],
    emoticonHeadIndex: 0,
    dataEmoticon: [
      [
          {
              title: "Recenti",
              emoji: [...recently]
          }
      ],
      [
          {
              title: "Faccine e Persone",
              emoji: [...smileys, ...people]
          }
      ],
      [
          {
              title: "Animali e Natura",
              emoji: [...animalNature]
          }
      ],
      [
          {
              title: "Cibo e Bevande",
              emoji: [...food]
          }
      ],
      [
          {
              title: "Attività",
              emoji: [...activities]
          }
      ],
      [
          {
              title: "Viaggi e Luoghi",
              emoji: [...travel]
          }
      ],
      [
          {
              title: "Oggetti",
              emoji: [...object]
          }
      ],
      [
          {
              title: "Simboli",
              emoji: [...symbol]
          }
      ],
      [
          {
              title: "Vestiti",
              emoji: [...clothing]
          }
      ],
    ],
  },
  // Initialize first contact like activeContact after the istance has been created
  created: function(){
    this.activeContact = this.contacts[0];
  },
  filters: {
    //Format date in a useful type and return a different way if today message
    formatDate(inputDate) {
      let date = `${inputDate.getUTCDate()}/${inputDate.getUTCMonth() + 1}/${inputDate.getUTCFullYear()}`;
      let hours = inputDate.getUTCHours();
      let minutes = (inputDate.getUTCMinutes() < 10 ? '0' : '') + inputDate.getUTCMinutes();

      if ((inputDate.getUTCDate()) == (new Date().getUTCDate())) {
        return `${hours + 1}:${minutes}`;
      } else {
        return `${date} ${hours + 1}:${minutes}`;
      }
    }
  },
  methods: {
    //Define active contact
    activatedContact(contact) {
      this.activeContact = contact;
    },
    //Handle input message from user and setInterval for automatic reply after 3seconds
    sendMessage() {
      this.activeContact.message.push(
        {
        text: this.inputUserMessage,
        sent: true,
        date: new Date()
        },
      );
      this.inputUserMessage = '';
      this.autoscroll();
      //Automatic response after 3 sec
      let answerUser = this.activeContact;
      setTimeout(() => {
        answerUser.message.push(
              {
                text: "Scusami ora non posso rispondere, sentiamoci più tardi",
                sent: false,
                date: new Date()
              }
            )
        answerUser.lastSeen = new Date();
        this.autoscroll();
      }, 3000);
    },
    //Autoscroll to the end after next DOM update cycle
    autoscroll() {
       this.$nextTick(function(){
          let windowChat = document.getElementsByClassName('rowMainChat')[0];
          windowChat.scrollTop = windowChat.scrollHeight;
        });
    },
    // Show emoticon Menu
    showEmoticon() {
      this.isEmoticonActive = !this.isEmoticonActive;
    },
    //Select right category of emoji
    emojiHeadSelected: function(index) {
      this.emoticonHeadIndex = index;
    },
    //Select emoji and add to the input
    selectEmoji: function(indexEl, emoticonHeadIndex) {
      this.inputUserMessage += this.dataEmoticon[emoticonHeadIndex][0].emoji[indexEl];
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
