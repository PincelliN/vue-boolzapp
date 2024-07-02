const { createApp } = Vue;

createApp({
  data() {
    return {
      notifiche: false,
      OnlineValue: "A",
      index: 0,
      numIndex: null,
      showdropdow: false,
      isActive: false,
      newmessage: "",
      FilterSelect: "",
      FilterShow: [],
      contacts: [
        {
          name: "Ant man",
          avatar: "img/Ant.jpg",
          wall: "img/ant-wall.jpg",
          visible: true,
          cit: [
            "é troppo tardi per cambiare nome?",
            "Voi mettete la parola quantistica in tutte le frasi. ",
            "Se vuoi una cosa fatta bene stendi una lista. ",
            "Perché non possono riconoscerci? Perché indossiamo cappello ed occhiali? Sembriamo noi stessi a una partita di basket. ",
          ],
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
          wall: "img/cap-wall.jpg",
          visible: true,
          cit: [
            "Arrendermi? ARRENDERMI!? CREDI CHE QUESTA LETTERA SIGNIFICHI FRANCIA?",
            "L'Hydra non ha teste a sufficienza per mettermi K.O.",
            "Quando ero congelato, il mondo era in guerra. Mi sveglio e dicono che abbiamo vinto. Ma non che cosa abbiamo perso",
            "Se cominci a scappare non ti fermi più. Li affronti, ti ribelli. Devi andare avanti lo stesso, no?",
          ],
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
          wall: "img/ciclopwall.jpg",
          visible: true,
          cit: [
            "Nel tipo di carriera per cui ci stiamo preparando, non esiste la parola 'giusto'!",
            " Beh, cosa preferiresti?! Una calzamaglia gialla?!",
            "Beh, probabilmente ti brucia che un ragazzino come me ti abbia salvato la vita, eh?! Però sta attento, la prossima volta potrei non esserci! Ah, Logan... Sta alla larga dalla mia ragazza!",
            "Lei mi ha insegnato tutto quello che nella vita vale la pena di sapere... E se dovesse succederle qualcosa... Mi prenderò cura io di loro!",
          ],
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
          wall: "img/strange-wall.jpg",
          visible: true,
          cit: [
            "Attraverso le arti mistiche imbrigliamo l'energia e plasmiamo la realtà. Percorriamo grandidistanze, in un istante.",
            "Non tutto ha senso. Non tutto deve averlo.",
            "Non c'è limite all'impossibile.",
            "Apri la mente. Cambia la realtà.",
          ],
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
          wall: "img/iron-wall.jpg",
          visible: true,
          cit: [
            "Dammi uno scotch. Sto morendo di fame",
            "Tieniti forte, Legolas",
            "Te l’ho detto. Non voglio unirmi alla tua boyband super segreta",
            "”Iron Man.” Accattivante, suona bene. Non è tecnicamente preciso. L'armatura è in lega di oro e titanio, ma è un nome evocativo, simbolico",
          ],
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
          wall: "img/vedova-wall.png",
          visible: true,
          cit: [
            "A un certo punto bisogna scegliere tra quello che il mondo vuole che tu sia e chi sei veramente.",
            "Ho vissuto molte vite, ma non voglio fuggire dal passato.",
            "Volevo fare qualcosa di buono: essere più di una killer esperta.",
            "Prima di lavorare per lo S.H.I.E.L.D, io.... beh, avevo una certa popolarità. Sono dotata di un'abilità molto specifica. Non mi importava per chi la usassi, o su chi. Ero sui radar dello S.H.I.E.L.D. con profilo negativo. Inviarono l'agente Barton ad uccidermi. Lui decise in modo diverso.",
          ],
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
          wall: "img/Thanos_Gauntlet.webp",
          visible: true,
          cit: [
            "L'unica faccenda che non prendo sul serio, bimbo... sei tu. La tua politica mi annoia! La tua condotta è quello di un neonato lamentoso, e a quanto pare hai reso ostile la mia figlia preferita, Gamora. Terrò fede al nostro accordo, Kree, se mi porterai l'Orb... ma se tornerai di nuovo a mani vuote, le stelle si bagneranno nel tuo sangue impuro",
            "Questo universo è limitato, come le sue risorse. Se la vita viene lasciata incontrollata, cesserà di esistere. Servono correttivi! Io sono l'unico che lo sa. Almeno, io sono l'unico con la volontà di intervenire.",
            "Con le sei gemme, mi basterebbero solo schioccare le dita. Cesserebbero tutti di esistere. Io lo chiamo pietà.Infine mi riposerò... e guarderò il sole sorgere su un universo grato. Le scelte più difficili richiedono la volontà più ferrea.",
            "Io sono... ineluttabile.",
          ],
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
          wall: "img/venom.jpg",
          visible: true,
          cit: [
            "Devi stare con i piedi per terra, sviluppa le tue capacità con la gente comune, come la signora che ti ha comprato il churro. Non puoi essere un 'amichevole Spider-Man di quartiere'?",
            "Tu lo sai chi sono io. Il tuo amichevole Spider-Man di quartiere!",
            "Qualunque cosa la vita abbia in serbo per me, non dimenticherò mai queste parole: 'Da un grande potere derivano grandi responsabilità'. È il mio talento, è la mia maledizione. Chi sono io? Sono Spider-Man!",
            "D'accordo, ve lo racconto un'ultima volta. Mi chiamo Peter Parker, sono stato morso da un ragno radioattivo e per dieci anni sono stato il solo e unico Spider-Man. Il resto lo sapete. Ho salvato un sacco di gente, mi sono innamorato, ho salvato la città, poi ho salvato di nuovo la città, di nuovo e di nuovo e... di nuovo. E ho fatto... Ho fatto questo. Ma non ne parliamo adesso. Allora, sono un fumetto, dei cereali, ho inciso un disco di Natale, ho una sigla favolosa... e sono un ghiacciolo bruttarello. Be', sono stato anche peggio. Tutto considerato, ancora mi piace essere Spider-Man; a chi non piacerebbe? Quindi non importa quanti colpi prendo, trovo sempre il modo di rialzarmi. Perché l'unica cosa che separa questa città dall'oblio... Sono io! C'è un solo Spider-Man, e lo state vedendo!",
          ],
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
            message:
              this.contacts[this.index].cit[Math.floor(Math.random() * 4)],
            status: "received",
          };
             this.contacts[this.index].messages.push(newans);
            
             
              this.OnlineValue='C';
              setTimeout(this.ChangeValue,2000);
        },

        ChangeValue(){
          this.OnlineValue='A'
        },
        /* - creo un oggetto con le stesse propietà dell array messages
           - assegno il valore alla propietà date con una funzione
           - assegno la variabile newmessage alla propietà message
           - se newmessage è diverso da nullo allora lo inserisco nel array messages
           - una volta che inserisco newmessage nel array allora faccio partire un timer che automatizza la risposta 
        */
    AddMessage() { 
      let DateTime = luxon.DateTime;

      const NewDateTime =
        DateTime.now().c.day +
        "/" +
        DateTime.now().c.month +
        "/" +
        DateTime.now().c.year +
        "  " +
        DateTime.now().c.hour +
        ":" +
        DateTime.now().c.minute +
        ":" +
        DateTime.now().c.second;
      

      let newmes = {
        date: NewDateTime,
        message: this.newmessage,
        status: "send",
      };
      
      if (this.newmessage != "" ) {
         this.OnlineValue = 'B';
        this.contacts[this.index].messages.push(newmes);
        setTimeout(this.AddAnswer,2000)
        this.newmessage = "";
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
        
        console.log(Time);
        const TimeSplit = Time.split(' ');
        console.log(TimeSplit);
        const NewTimeSplit = TimeSplit[2].split(':');
        console.log(NewTimeSplit);
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
      this.contacts.splice(this.index,1);
      }else{
      this.contacts[this.index].messages.splice(
        this.numIndex,
        1
      );
      }
        
    },
  },
  mounted(){
    let DateTime = luxon.DateTime;

    const NewDateTime =
      DateTime.now().c.day +
      "/" +
      DateTime.now().c.month +
      "/" +
      DateTime.now().c.year +
      "  " +
      DateTime.now().c.hour +
      ":" +
      DateTime.now().c.minute +
      ":" +
      DateTime.now().c.second;
     
    console.log(NewDateTime);
    console.log(DateTime.now().c.hour);
    console.log(DateTime.now().c.minute);
    console.log(DateTime.now().c.day);
    console.log(DateTime.now().c.second);
    console.log(DateTime.now().c.month);
    console.log(DateTime.now().c.year);
    
    console.log(DateTime.now().c);
    console.log(this.OnlineValue);
  }
}).mount("#app");
