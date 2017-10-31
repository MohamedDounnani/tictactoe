# TICTACTOE 
  

## Applicazione web utilizzando Reactjs


### Sviluppatore:
- Dounnani Mohamed


## Descrizione Progetto:
Ho fatto un'applicazione web del classico gioco tictactoe aggiungendo qualche feature.

Funzionalità implementate:
 - E' possibile, attraverso i bottoni, percorrere la storia delle mosse effettuate.
 - Quando un giocatore vince, le sue mosse vincenti vengono colorate di verde.
 - Alla  vincita di un giocatore o ad una situazione di stallo viene abilitato il tasto reset. Una volta premuto quest'ultimo il gioco si resetta.
 - E' possibile scegliere diversi colori per i simboli X e O.


## Dev:
L'applicazione l'ho fatta prendendo spunto dalla guida che si può facilemente reperire dalla doc di reactjs.
Ho sviluppato il codice modularmente, assegnando ad ogni componente una sua specifica funzione.

# Index.js : 
Richiamo Game, la classe padre che gestisce tutto il gioco, e il riferimento al 'root'.
Nella cartella css si trova il file .css, per ora molto grezzo, struttura solo la grafica basilare del programma.
Nella cartella components, come suggerisce il nome, ci sono all'interno tutte le componenti del programma.


# Game.js: 
La classe padre, in cui setto lo stato iniziale composto da
-History: un buffer che tiene in memoria tutte le fasi della partita, composto da, squares(array di 9 elementi) e background-color(array di 9 elementi che tiene il backgound-color di 			 squares)
-stepNumber: una varibiale che tiene conto dell'avanzamento della partita, inizializzata a 0
-xIsNext : una variabile booleana inizializzata a true, che tiene conto dei torni. Se true tocca a X se false tocca a O
-checked : una variabile stringa in cui memorizzo il colore dei simboli, inizializzato a black che è il colore di default  
	
Nel render vi sono le seguenti componenti:
- status, una variabile che si aggiorna dipendentemente dalla situazione. Segnala il turno dei giocatori, il vincitore o la situazione di stallo. Attraverso delle opportune verifiche
- Board (componente figlio) e gli passo dei parametri, Squares, color e checked.
- Button reset che richiama la funzione restartGame presente in './functions.js'
- Radio button che richiama la funzione handleSubmit presente in './functions.js'


# Board.js: 
Una classe che si occupa di formare il campo(9 quadrati)
Nel render richiamo una funzione che per ogni "quadrato" creato si occupa di passare dei paramentre a <Square />, nello specifico:
-value: value corrente del simbolo che viene preso da squares ricevuto da Game
-backgroud-color: tiene sotto controllo il backgourd-color e al momento opportuna(alla vittoria) viene cambiato
-color: colore corrente del simbolo


# functions.js: 
sono presenti tutte le funzioni che utilizzo per far funzionare il programma.		
	    
-calculateWinner: Riceve come paramentro di input la fase corrente di gioco (squares) e controlla se c'è un vincitore. La variabile di controllo consiste in un array in cui si sono
tutti i possibili esiti di vittoria. Se nella fase corrente è presente un esito viene salvato in un'altro array insieme al simbolo vincente e viene mandato in output 
quest'ultimo.		 
-Squares: Riceve come paramentro di input i paramentri descritti nella spiegazione di Board e per ognuno di essi viene correllato nella sua funzione.			  
-restartGame: Riceve come paramentro l'istanza corrente e si occupa semplicemente di settare lo stato alle condizioni iniziali. Viene triggerato dal Reset button	
-handleClick: Riceve come paramentro la posizione corrente(il quadrato visualizzato nella web app) e si occupa come suggerisce il nome di gestire i click fatti dall'utente nel board. 
In una situazione in cui l'utente clicca su un quadrato già occupato da un simbolo non succede nulla in quanto non è permesso modificare le mosse.
In una situazione di vittoria non è possibile proseguire. Inoltre ad ogni click, il buffer History ingloba la nuova fase della partita.	
-jumpTo: Riceve come paramentro iniziale la fase della partita desiderata e si occupa di far vedere attraverso una modifica dello stato, la fase desiderata.	
-handleChange: Una funzione che riceve come paramentri iniziali ChangeEvent(triggerato dal radio button) e l'istanza. Si occupa di modificare l'elemento color presente nello stato.
In base al colore ricevuto dal radio button il checked cambia il suo valore rispetto ad esso.



## Come funziona:
Ituitivamente è molto facile in quanto si rifà al famoso gioco tictactoe. La schermata principale è composta da status, campo , storia e scelta dei colori.	
-Status: viene visualizzato il turno dei giocatori, quando un giocatore vince il simbolo del giocatore e la scritta Premi reset nella situazione di stallo.
-Campo: viene visualizzato il campo vero e proprio, attraverso un click in uno dei quadrati viene posto un simbolo X,O dipendentemente dal turno. In caso ci sia un vincitore vengono illuminate
le mosse vincenti.	
-Storia: Si può tornare indietro nel tempo in base allo step desiderato. Ed è presente il tasto reset, abilitato solo in caso di vittoria o stallo.	
-Scelta colori: E' possibile impostare i colori dei simboli. Non è presente un pulsante submit in quanto non ho ritenuto necessaria questa aggiunta. 



## Come installarla:
Clonare la cartella -> aprire il terminale e digitare i seguenti comandi:
-yarn init 
-yarn add react react-dom.



## Come avviarla:
Sempre da terminale digitare il seguente comando:
-yarn start facendo attenzione a non avere la porta 3000 occupata
Successivamente si aprirà automaticamente il browser all'inidirizzo localhost:3000 in cui è presente la web app. 
	
 


		
		   
 
 

  
