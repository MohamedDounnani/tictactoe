# TICTACTOE 
  

## Applicazione web utilizzando Reactjs


### Sviluppatore:
- Dounnani Mohamed


## Descrizione Progetto:
Ho fatto un'applicazione web del classico gioco TicTacToe aggiungendo qualche feature.

Funzionalità implementate:
 - Quando un giocatore vince, le sue mosse vincenti vengono colorate di verde.
 - Alla  vincita di un giocatore o ad una situazione di stallo viene abilitato il tasto reset. Una volta premuto quest'ultimo il gioco si resetta.
 - E' possibile scegliere diversi colori per i simboli X e O.


## Dev:
L'applicazione l'ho fatta prendendo spunto dalla guida che si può facilemente reperire dalla doc di reactjs.
Ho sviluppato il codice modularmente, assegnando ad ogni componente una sua specifica funzione.

- Index.js richiama la classe Game, la classe padre che gestisce tutto il gioco, e il riferimento al 'root'.
- css si trova il file .css, per ora molto grezzo, struttura solo la grafica basilare del programma.
- components, come suggerisce il nome, ci sono all'interno tutte le componenti del programma.
	- Game.js: La classe, in cui setto lo stato iniziale. Ed invio i paramentre necessari alle classi figlie
	- Board.js: Una classe che si occupa di formare il campo(9 quadrati) tramite la funzione square
	- Radio.js: Una classe che si occupa di creare il radio button 
	- Functions.js: sono presenti tutte le funzioni di appoggio che utilizzo per far funzionare il programma.	    

## Come funziona:
Ituitivamente è molto facile in quanto si rifà al famoso gioco TicTacToe. La schermata principale è composta da status, campo, storia e scelta dei colori.	
- Status: Vengono visualizzati a seconda della situazione, il turno dei giocatori, il simbolo del giocatore vincente e la scritta "Premi reset" nella situazione di stallo.
- Campo: viene visualizzato il campo vero e proprio, attraverso un click in uno dei quadrati viene posto un simbolo X,O dipendentemente dal turno. In caso ci sia un vincitore vengono illuminate
le mosse vincenti.	
- Storia: Si può tornare indietro nel tempo in base allo step desiderato. Ed è presente il tasto reset, abilitato solo in caso di vittoria o stallo.	
- Scelta colori: E' possibile impostare i colori dei simboli. Non è presente un pulsante submit in quanto non ho ritenuto necessaria questa aggiunta. 


## Come installarla:
Clonare la cartella -> aprire il terminale e digitare i seguenti comandi:
- yarn init 
- yarn add react react-dom



## Come avviarla:
Sempre da terminale digitare il seguente comando:
- yarn start (facendo attenzione a non avere la porta 3000 occupata. Successivamente si aprirà automaticamente il browser all'inidirizzo localhost:3000 in cui è presente la web app) 
	
 


		
		   
 
 

  
