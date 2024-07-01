const { createApp } = Vue;

createApp({
  data() {
    return {
      notifiche: false,
      index: 0,
      numIndex:null,
      showdropdow:false,
      isActive:false,
      newmessage: "",
      FilterSelect: "",
      FilterShow: [],
      contacts: [
        {
          name: "Ant man",
          avatar: "img/Ant.jpg",
          wall:"img/ant-wall.jpg",
          visible: true,
          messages: [
            {
              date: "10/01/2020 15:30:55",
              message: "Hai portato a spasso il cane?",
              status: "sent",
            },
            {
              date: "10/01/2020 15:50:00",
              message: "Ricordati di stendere i panni",
              status: "sent",
            },
            {
              date: "10/01/2020 16:15:22",
              message: "Tutto fatto!",
              status: "received",
            },
          ],
        },
        {
          name: "Captain",
          avatar: "img/cap.jpg",
          wall:"img/cap-wall.jpg",
          visible: true,
          messages: [
            {
              date: "20/03/2020 16:30:00",
              message: "Ciao come stai?",
              status: "sent",
            },
            {
              date: "20/03/2020 16:30:55",
              message: "Bene grazie! Stasera ci vediamo?",
              status: "received",
            },
            {
              date: "20/03/2020 16:35:00",
              message: "Mi piacerebbe ma devo andare a fare la spesa.",
              status: "sent",
            },
          ],
        },
        {
          name: "Ciclope",
          avatar: "img/Ciclop.jpg",
          wall:"img/ciclopwall.jpg",
          visible: true,
          messages: [
            {
              date: "28/03/2020 10:10:40",
              message: "La Marianna va in campagna",
              status: "received",
            },
            {
              date: "28/03/2020 10:20:10",
              message: "Sicuro di non aver sbagliato chat?",
              status: "sent",
            },
            {
              date: "28/03/2020 16:15:22",
              message: "Ah scusa!",
              status: "received",
            },
          ],
        },
        {
          name: "Doctor Strange",
          avatar: "img/doctor.jpg",
          wall:"img/strange-wall.jpg",
          visible: true,
          messages: [
            {
              date: "10/01/2020 15:30:55",
              message: "Lo sai che ha aperto una nuova pizzeria?",
              status: "sent",
            },
            {
              date: "10/01/2020 15:50:00",
              message: "Si, ma preferirei andare al cinema",
              status: "received",
            },
          ],
        },
        {
          name: "Iron Man",
          avatar: "img/Iron.jpg",
          wall:"img/iron-wall.jpg",
          visible: true,
          messages: [
            {
              date: "10/01/2020 15:30:55",
              message: "Ricordati di chiamare la nonna",
              status: "sent",
            },
            {
              date: "10/01/2020 15:50:00",
              message: "Va bene, stasera la sento",
              status: "received",
            },
          ],
        },
        {
          name: "Vedova Nera",
          avatar: "img/Vedova.jpg",
          wall:"img/vedova-wall.png",
          visible: true,
          messages: [
            {
              date: "10/01/2020 15:30:55",
              message: "Ciao Claudia, hai novità?",
              status: "sent",
            },
            {
              date: "10/01/2020 15:50:00",
              message: "Non ancora",
              status: "received",
            },
            {
              date: "10/01/2020 15:51:00",
              message: "Nessuna nuova, buona nuova",
              status: "sent",
            },
          ],
        },
        {
          name: "Thanos",
          avatar: "img/thanos.jpg",
          wall:"img/Thanos_Gauntlet.webp",
          visible: true,
          messages: [
            {
              date: "10/01/2020 15:30:55",
              message: "Fai gli auguri a Martina che è il suo compleanno!",
              status: "sent",
            },
            {
              date: "10/01/2020 15:50:00",
              message: "Grazie per avermelo ricordato, le scrivo subito!",
              status: "received",
            },
          ],
        },
        {
          name: "Spider Man",
          avatar: "img/Spidy.jpg",
          wall:"img/venom.jpg",
          visible: true,
          messages: [
            {
              date: "10/01/2020 15:30:55",
              message: "Ciao, andiamo a mangiare la pizza stasera?",
              status: "received",
            },
            {
              date: "10/01/2020 15:50:00",
              message: "No, l'ho già mangiata ieri, ordiniamo sushi!",
              status: "sent",
            },
            {
              date: "10/01/2020 15:51:00",
              message: "OK!!",
              status: "received",
            },
          ],
        },
      ],
    };
  },
  methods: {
    /* - ogni volta che eseguo la funzione svuoto l'array che usero come filtro
       - inizio un ciclo della lunghezza dell array contacts
       - creo una variabile di valore uguale alla propietà name
       - trasformo tutti gli elementi della variabile in caratteri minuscoli
       - vedo se l'input che prelevo in pagina è incluso nella varibile e ne creo una variabile di valore uguale alla posizione in cui è incluso l'input
       - se l'input non è incluso metto l'elemento nel array che prima ho svuotato
       - puliasco il campo del input     
    */
    IncludsFilter() {
      this.FilterShow = [];

      for (let index = 0; index < this.contacts.length; index++) {
        
        const element = this.contacts[index].name;
         
        const elementName = element.toLowerCase();
        
       let includ = elementName.indexOf(this.FilterSelect.toLowerCase());
      
       if (includ==-1) {

        this.FilterShow.push(element);

       }
      }
        this.FilterSelect = ""; 
     
    },
    AddAnswer(){
          let newans = {
            date: this.NewTime(),
            message: "ok",
            status: "received",
          };
           
             this.contacts[this.index].messages.push(newans);
           
          this.newmessage = "";
        },
        /* - creo un oggetto con le stesse propietà dell array messages
           - assegno il valore alla propietà date con una funzione
           - assegno la variabile newmessage alla propietà message
           - se newmessage è diverso da nullo allora lo inserisco nel array messages
           - una volta che inserisco newmessage nel array allora faccio partire un timer che automatizza la risposta 
        */
    AddMessage() {   
      let newmes = {
        date: this.NewTime(),
        message: this.newmessage,
        status: "send",
      };
      
      if (this.newmessage != "" ) {
        this.contacts[this.index].messages.push(newmes);
        setTimeout(this.AddAnswer,1000)
      }   
    },

    /* funzione per ottenere l'ora e i minuti dalla propietà data  */
    LastMessageHoure(i){
     let Hour= this.contacts[i].messages[
        this.contacts[i].messages.length - 1
      ].date;
      
      let LastHour=Hour.split(' '); 

      let HourMinute = LastHour[1].split(":");
      
      let newHourMinure = HourMinute[0] +':'+ HourMinute[1];
      
      return newHourMinure;
    },

    /* per ognio nuovo messaggio genero una nuova data incrementata */
    NewTime(){
      const Time =
        this.contacts[this.index].messages[this.contacts[this.index].messages.length - 1 ].date;
        
        const TimeSplit = Time.split(' ');
        const NewTimeSplit = TimeSplit[1].split(':');
        if (NewTimeSplit[1] == 59) {
          NewTimeSplit[1] = 0;
          NewTimeSplit[0] = parseInt(NewTimeSplit[0]) + 1;
        }
        const IncrisNewTimeSplit =parseInt(NewTimeSplit[1]) + 1;
        const LastTime =
          TimeSplit[0] +
          " " +
          NewTimeSplit[0] +
          ":" +
          IncrisNewTimeSplit +
          ":" +
          NewTimeSplit[2];
         
          return LastTime
    },
   /* funzione per rimuovere  un messaggio in pagina */
    RemoveItem() {
      if (this.contacts[this.index].messages.length == 1) {
        this.contacts[this.index].messages.push({
          date: this.NewTime(),
          message: "inizia una nuova conversazioene",
          status: "",
        });
      }
      this.contacts[this.index].messages.splice(
        this.numIndex,
        1
      );

    },
  },
}).mount("#app");
