![](https://lh3.googleusercontent.com/NUcpP0lmF9CSO44Lq3kwExOXFN6LOuaVSI_RfNQ_1NxFAZBCw9XbXXca3OUFJxvTnRv-mxYshP3Gdb3GKEOcAHySS6EwAAYzRt7GE7VO_xr0DX4QcE4MwNVLNrTvQ89suxF6xBHj "horizontal line")

Matteo Zagheno

5Ai 2020-2021

# Documentazione Elaborato

## Sito: [mzagheno.sytes.net](https://mzagheno.sytes.net/)  
API: [mzaghenoapi.sytes.net](https://mzaghenoapi.sytes.net/)

# Scopo del progetto

Il progetto è un sito per la consultazione e raccolta di statistiche riguardanti l’Esport.

### Funzionalità

Il sito è composto da:

-   Home Page
    
-   Global Data
    

	-   Statistiche globali riguardanti esport e visualizzazioni
	    
	-   Mappa delle nazioni con più guadagni
    

-   Games
    
	
	-   Indice dei giochi con ricerca
    

-   Game
    
	
	-   Statistiche numeriche riguardanti il singolo gioco divise in visualizzazioni e Esport
	    
	-   Grafico storico dei dati con possibilità di selezionare quali dati includere e quali escludere dal grafico cliccando sulle legende
	    
	-   Giocatori con più vincite
		    

		-   Link alla rispettiva pagina di esportsearnings.com
	    

	-   Eventi recenti
	    
	
		-   Link alla rispettiva pagina di esportsearnings.com
		    

	-   Teams con più vincite
	    
	-   Link alla rispettiva pagina di esportsearnings.com
	    
	-   Link alla rispettiva pagina di Twitch.tv
    

  

### Fonti Dati  
I dati sono stati in parte scaricati da Kaggle e in parte acquisiti tramite uno script che raccolto i dati dall’API di [esportsearnings.com](https://www.esportsearnings.com/) (un sito che cataloga i dati relativi a giocatori/tornei/teams)

-   [Twitch Dataset Kaggle](https://www.kaggle.com/rankirsh/evolution-of-top-games-on-twitch)
    
-   [Esport Dataset Kaggle](https://www.kaggle.com/rankirsh/esports-earnings)
    

La necessità di acquisire i dati da esportsearnings.com è nata dopo aver trovato un [altro dataset su kaggle](https://www.kaggle.com/jackdaoud/esports-earnings-for-players-teams-by-game?select=country-and-continent-codes-list.csv) dove erano stati raccolti altri dati da esportsearnings ma questo dataset include solo i dati da 10 giochi e quindi non adatto per mostrare i dati di ogni singolo gioco. Ho quindi scritto una breve applicazione in JavaScript/Node che mi ha permesso di inserire nel mio database i dati provenienti dall’[API di esportsearnings](https://www.esportsearnings.com/apidocs) per catalogare tutti gli eventi e giocatori per ogni gioco.

I dati che sono andato ad utilizzare (corrispondenti agli endpoint della mia API) sono:

1.  [getIdByGameName](https://mzaghenoapi.sytes.net/queryDB/getIdByGameName?name=%27Diabotical%27): Restituisce l’id del gioco a partire dal nome
    
2.  [getHistoricalEsportData_Post2016](https://mzaghenoapi.sytes.net/queryDB/getHistoricalEsportData_Post2016): restituisce lo storico dei dati esport post 2016
    
3.  [getHoursWatched](https://mzaghenoapi.sytes.net/queryDB/getHoursWatched): restituisce lo storico delle visualizzazioni dei videogiochi esport su twitch
    
4.  [getTwitchGlobal_HoursWatched](https://mzaghenoapi.sytes.net/queryDB/getTwitchGlobal_HoursWatched): restituisce lo storico delle visualizzazioni totali su twitch
    
5.  [getMostPlayedEsportGamesOffset](https://mzaghenoapi.sytes.net/queryDB/getMostPlayedEsportGamesOffset?limit=1000&offset=0): restituisce i giochi più giocati con la possibilità di impostare un offset e un limit sulla query*
    
6.  [getMostViewedEsportGamesOffset](https://mzaghenoapi.sytes.net/queryDB/getMostViewedEsportGamesOffset?limit=1000&offset=0): restituisce i giochi più visti con la possibilità di impostare un offset e un limit sulla query*
    
7.  [getGameInfo](https://mzaghenoapi.sytes.net/queryDB/getGameInfo?gameID=245): restituisce tutto le info su un gioco dato il suo id
    
8.  [getHighestEarningPlayersOffset](https://mzaghenoapi.sytes.net/queryDB/getHighestEarningPlayersOffset?limit=1000&offset=0):  restituisce i giocatori con più guadagni con la possibilità di impostare un offset e un limit sulla query*
    
9.  [getHighestEarningCountries](https://mzaghenoapi.sytes.net/queryDB/getHighestEarningCountries): restituisce le nazioni con più guadagni
    
10.  [getAllGames](https://mzaghenoapi.sytes.net/queryDB/getAllGames): restituisce la lista di tutti i giochi
    
11.  [getHighestEarningPlayersByGame](https://mzaghenoapi.sytes.net/queryDB/getHighestEarningPlayersByGame?gameID=245): restituisce i giocatori con più guadagni dato l’id di un gioco
    
12.  [getTournamentByGameOffset](https://mzaghenoapi.sytes.net/queryDB/getTournamentByGameOffset?limit=1000&offset=0&gameID=245): restituisce i tornei ordinati per data (a partire dal più recente) dato l’id di un gioco con la possibilità di impostare un offset e un limit sulla query*
    
13.  [getAnnualEsportGrowth](https://mzaghenoapi.sytes.net/queryDB/getAnnualEsportGrowth): restituisce i dati sulla crescita annua dei prizepool dei videogiochi esport
    
14.  [getHighestEarningTeamsByGame](https://mzaghenoapi.sytes.net/queryDB/getHighestEarningTeamsByGame?gameID=245): restituisce i teams con più guadagni dato l’id di un gioco

15. [getHighestEarningTeams](https://mzaghenoapi.sytes.net/queryDB/getHighestEarningTeams): restituisce i teams con più guadagni
    

 *(nel caso fosse servito implementare ad esempio un sistema di pagine: es pagina 1 limit 10 offset 0, pagina 2 limit 10 offset 10, pagina 3 limit 10 offset 20)

L’api è accessibile a mzaghenoapi.sytes.net/queryDB/<richiesta>?param=<param>

Es: [mzaghenoapi.sytes.net/queryDB/getIdByGameName?name=’diabotical](https://mzaghenoapi.sytes.net/queryDB/getIdByGameName?name=%27Diabotical%27)’

  
  
  
  
  
  
  
  
  
  
  
  
  
  

# Database

![](https://lh5.googleusercontent.com/Ir7MHMcj6roVT5gOVOm1QFn2z9jV3LpGUa2TU61m2xbFmZVaPRdZO-LzA3qdyEgweZ4qsZF0_ZGON5tnrQ85WfxJDKCeSX8uvM7EiVRiHiwSwc5c0ihcXq5btFCI8nTEV7ddg8tH)

Il primo problema incontrato è stato l’adattamento dei titoli dei videogames per incrociare le due fonti dati principali dato che un videogioco potrebbe avere dei sottotitoli o caratteri speciali al suo interno. Il secondo problema è stata l’incompletezza o l'incorrettezza dei dati che si è venuta a creare una volta unite le tabelle provenienti dalle fonti dati di kaggle e l’aggiunta di quelle create raccogliendo i dati dall’API di esportsearnings. Il database risulta quindi disordinato per via delle modifiche recenti che ho dovuto effettuare per normalizzare gli id dei giochi una volta unite le tabelle ai dati raccolti dall’API.

Le query sono tutte raccolte in stored procedures per separare ulteriormente la logica dai dati e permette di effettuare modifiche/correzioni alle query senza modificare il codice della mia API.

  

Esempi di query complesse:

  
  
  
  

    #restituisce il nome di un gioco prendendo id
    
    CREATE DEFINER=`zaghe`@`%`  FUNCTION  `getGameNameByID`(p_GameID INT(11)) RETURNS  varchar(100) CHARSET utf8mb4  
    BEGIN  
    DECLARE outValue VARCHAR(100) DEFAULT  '';  
    SET outValue = (SELECT GameName FROM AllGamesPure WHERE GameID = p_GameID);  
    RETURN outValue;  
    END  
      
    
      
      
      
      
      
      
    
    #restituisce i giocatori che hanno vinto montepremi più alti a partire dall'id del gioco  
    CREATE DEFINER=`zaghe`@`%`  PROCEDURE  `getHighestEarningPlayersByGame`(p_GameID INT(11))  
    BEGIN  
    SELECT  `HighestEarningPlayersGames`.`PlayerID`,  
    `HighestEarningPlayersGames`.`GameID`,  
    `AllPlayersPure`.`NameFirst`,  
    `AllPlayersPure`.`NameLast`,  
    `AllPlayersPure`.`CurrentHandle`,  
    `AllPlayersPure`.`CountryCode`,  
    `HighestEarningPlayersGames`.`TotalUSDPrize`  
    FROM  `db_zaghe`.`HighestEarningPlayersGames`  
    INNER  JOIN AllPlayersPure ON  `HighestEarningPlayersGames`.`PlayerID` = `AllPlayersPure`.`PlayerID`  
    WHERE  `HighestEarningPlayersGames`.`GameID` = p_GameID  
    ORDER  BY  `HighestEarningPlayersGames`.`TotalUSDPrize`  DESC  
    LIMIT  50;  
    END  
      
      
    
      
      
      
      
      
    
    #restituisce tutte le info di un gioco a partire dall'id  
    CREATE DEFINER=`zaghe`@`%`  PROCEDURE  `getGameInfo`(p_GameID INT(11))  
    BEGIN  
    SELECT  
    `EsportGames`.`GameID`,  
    getGameNameByID(`EsportGames`.`GameID`) AS  `GameName`,  
    `EsportGames`.`ReleaseDate`,  
    `EsportGames`.`Genre`,  
    `EsportGames`.`TotalEarnings`,  
    `EsportGames`.`OfflineEarnings`,  
    `EsportGames`.`TotalPlayers`,  
    `EsportGames`.`TotalTournaments`  
    FROM EsportGames WHERE GameID = p_GameID;  
    SELECT * FROM HistoricalEsportData WHERE Game = p_GameID GROUP  BY  Date;  
    SELECT * FROM TwitchEsportGames WHERE GameID = p_GameID;  
    SELECT  
    MAX(Peak_Viewers) AS Peak_Viewers,  
    MAX(Avg_Viewers) AS Avg_Viewers,  
    MAX(Peak_Channels) AS Peak_Channels,  
    ROUND(AVG(Rank),0) AS Avg_Rank  
    FROM TwitchEsportGames WHERE GameID = p_GameID;  
    CALL getHighestEarningPlayersByGame(p_GameID);  
    CALL getHighestEarningTeamsByGame(p_GameID);  
    END

  
  
  
  
  
  
  

# Architettura

Il sito è stato realizzato seguendo i principi [JAMstack](https://jamstack.org/) (Javascript, APIs, Markup) che si basa sulla netta separazione tra backend e frontend, la creazione di siti pre-renderizzati e resi interattivi da Javascript client-side e l’uso di API come backend, può essere quindi considerata un’architettura orientata ai servizi (SOA).

  
![](https://lh3.googleusercontent.com/xhPl7wqy8NMgZ2WFLw6F6tsj0zYBKi5rnjna1T7Yned_wZFAVTe94MU1NzdJ_rn84QUJL8IaCfRWKARNIxqGWy7qZBZOuWdJb0N4J6skAqPuANc4MR3aI7sYre5bg3G88m9ykONw)

Diversamente da una tradizionale web stack, JAM stack ha come elementi:

-   Il client
    
-   Una CDN (Content Delivery Network) è una rete distribuita di server che permette una maggiore velocità di distribuzione dei contenuti
    
-   Una o più API per lo scambio dei dati
    

Questa semplificazione e separazione degli elementi permette una maggiore scalabilità, efficienza e sicurezza.

Sia il frontend, sia il backend sono stati realizzati con Nodejs.

Per verificarne il funzionamento anche nel contesto di una CDN e dimostrare la scalabilità del sito, la cui componente frontend può essere tranquillamente hostata su più webserver o CDN mantenendo il backend fisicamente separato:

[https://pedantic-hypatia-64f174.netlify.app/](https://pedantic-hypatia-64f174.netlify.app/)

https://mzagheno.gatsbyjs.io/  
  
https://mzagheno.gatsbyjs.io/

Il primo link è il sito hostato su [Netlify](https://www.netlify.com/) un provider di servizi CDN.

Il secondo link è il sito hostato su [Gatsby Cloud](https://www.gatsbyjs.com/products/cloud/) la soluzione di hosting del framework usato per il mio progetto.

  
  
  
  
  
  
  
  
  
  
  

# BACKEND

Il backend è composto da un database mariaDB che comunica con un API in Node realizzata con il framework [Express](https://expressjs.com/).  
L’API si occupa solamente di gestire le richieste in arrivo a un determinato URL, acquisire eventuali parametri della richiesta HTTP, inserire la query in una coda e una volta ottenuta la risposta dal database inviare il risultato come oggetto JSON.  
Utilizzando Node il processo è single-thread e non bloccante, rendendo l’esecuzione molto più veloce.

Codice sorgente:  [https://github.com/Tsagae/ElaboratoBackEnd](https://github.com/Tsagae/ElaboratoBackEnd)

## Esempio di codice significativo

    Connessione al server, creazione del pool (coda) di connessione e funzione di esecuzione delle query
    
    var pool = mysql.createPool({ //creazione della connessione  
    host: loginData.host,  
    user: loginData.user,  
    password: loginData.password,  
    database: loginData.database,  
    connectionLimit: loginData.connectionLimit,  
    });  
      
    function  execQuery(sql, res) { //esecuzione della query  
    pool.query(sql, function (err, result, fields) {  
    if (err) {  
    console.log(err);  
    return res.status(500).json({ error: "query error" });  
    };  
    return res.status(200).json(result);
    
    //res è l’oggetto risposta http che viene passato dalla funzione che richiama execQuery  
    });  
      
    }

## Librerie e Plugin

-   [Express](https://www.npmjs.com/package/express) (web framework)
    
-   [MySQL](https://www.npmjs.com/package/mysql) (plugin per connettere il db al webserver Node)
    

# FRONTEND

Il frontend è stato realizzato con il framework [Gatsbyjs](https://www.gatsbyjs.com/), utilizzando la libreria [React](https://reactjs.org/).

Codice sorgente: [https://github.com/Tsagae/ElaboratoFrontEnd](https://github.com/Tsagae/ElaboratoFrontEnd)

## React

React è una libreria Javascript open source cha ha come principio la suddivisione degli elementi in una pagina in componenti. Una volta creati i componenti possono essere importati in qualsiasi pagina o in altri componenti per essere riutilizzati (in maniera analoga alla programmazione ad oggetti) rendendo le pagine modulari e modificando il componente vengono modificate automaticamente tutte le istanze in cui viene utilizzato.

In react un componente viene inserito nel codice come tag HTML.

    <h1>Titolo</h1>  
    <div>  
    <p>...Testo...</p>  
    <HelloWorld nome="Matteo"></HelloWorld>  
    </div>
    
      
    
    Output:  
    Titolo  
    ...Testo...  
    Hello, World  
    Ciao, Matteo!

React permette di scrivere tutte le pagine e componenti come classi o funzioni javascript e inserire all’interno di esse codice HTML in [JSX](https://reactjs.org/docs/introducing-jsx.html) (sintassi mista html dentro a javascript) inserendo parti di codice HTML in una classe javascript e permettendo l’inserimento di elementi dinamici javascript all’interno del codice HTML (es <h2>{this.state.frase}, {this.props.nome}!</h2>)

In questo caso è stato inserito un component custom chiamato HelloWorld che prende come parametro un nome e restituisce un div contenente un h1 e un h2 composto dal nostro nome e un'altra frase.

  
  

    class  HelloWorld  extends  React.Component {  
    constructor(props) {  
    super(props);  
    this.state = {frase: “Ciao”};  
    }  
      
    render() {  
    return (  
    <div>  
    <h1>Hello, world!</h1>  
    <h2>{this.state.frase}, {this.props.nome}!</h2>  
    </div>  
    );  
    }  
    }

Gli elementi principali di un component react sono:

-   Proprietà (this.props) che vengono passate al componente come proprietà HTML (es. `<a href=”mzagheno.sytes.net”></a> `href è un proprietà come nome in` <HelloWorld nome="Matteo" ></HelloWorld>`).
    
-   Stato (this.state) che contiene un oggetto javascript in cui possono essere inserite tutte le informazioni che serviranno al nostro componente. Permette di creare component dinamici perché al cambiamento di dello state viene ricreato il component.
    
-   Funzione render() (o solamente metodo return nel caso di un componente-funzione) che fai il return (in sintassi JSX) del codice HTML del nostro component.
    

Dal momento che l’interazione è gestita da funzioni separate richiamate da un evento (es. onClick) che cambiano uno stato e successivamente viene aggiornata la view il sito rientra nella logica Model View Controller

## Esempio di codice significativo

Pagina Game (visualizzazione delle statistiche del singolo gioco)

    import * as React from  "react";  
    import * as styles from  "./game.module.css";  
    import  "../globalStyle/globalStyle.css";  
    import Layout from  "../components/Layout";  
    import TwitchThumbnail from  "../components/TwitchThumbnail";  
    import GameInfoChart from  "../components/gamePanels/GameInfoChart";  
    import EsportDetailPanel from  "../components/gamePanels/EsportDetailPanel";  
    import TwitchDetailPanel from  "../components/gamePanels/TwitchDetailPanel";  
    import HighestEarningPlayersGameList from  "../components/gamePanels/HighestEarningPlayersGameList";  
    import TournamentsList from  "../components/gamePanels/TournamentsList";  
    export  default  class  Game  extends  React.Component {  
    constructor(props) {  
    super(props);  
    this.state = {  
    gameID: 0,  
    loaded: false,  
    EsportGames_Data: [],  
    HistoricalEsportData_Data: [],  
    TwitchEsportGames_Data: [],  
    TwitchDataSummary: [],  
    TopEarningPlayers: [],  
    };  
    }  
      
    componentDidMount() { //dopo il primo render viene richiamata questa funzione  
    let search = window.location.search; //cerca i parametri nell'url  
    let params = new URLSearchParams(search);  
    let gameID = params.get('gameID');  
    if (gameID == null) {  
    this.setState({  
    loaded: "error",  
    });  
    return; //prevent from asking the api a game that doesen't exist  
    }  
    fetch("https://mzaghenoapi.sytes.net/queryDB/getGameInfo?gameID=" + gameID) //fa richiesta all'api con i parametri che gli sono stati passati dalla pagina precente (in questo caso l'id del gioco) .then serve a "far aspettare" la conclusione della funzione precedente prima di eseguire la prossima  
    .then((res) => res.text())  
    .then((data) => {  
    this.setState({  
    gameID: gameID,  
    loaded: true,  
    EsportGames_Data: JSON.parse(data)[0][0],  
    HistoricalEsportData_Data: JSON.parse(data)[1],  
    TwitchEsportGames_Data: JSON.parse(data)[2],  
    TwitchDataSummary: JSON.parse(data)[3],  
    TopEarningPlayers: JSON.parse(data)[4],  
    });  
    });  
    }  
      
      
      
    render() {  
    if (!this.state.loaded) { //finché l'api non ha restituito i dati mostra un placeholder questo è necessario perché node essendo non bloccante esegue subito il render della pagina prima ancora di avere i dati  
    return (  
    <div>  
    <Layout>  
    <div className={styles.mainContainer}>  
    <h5>Loading...</h5>  
    </div>  
    </Layout>  
    </div>  
    );  
    } else  if (this.state.loaded == "error") { //in caso di gioco non valido mostra un errore  
    return (  
    <div>  
    <Layout>  
    <div className={styles.mainContainer}>  
    <h2> Invalid Game :( </h2>  
    </div>  
    </Layout>  
    </div>  
    );  
    }  
    else { //render dei componenti in caso di successo  
    return (  
    <div>  
    <Layout>  
    <div className={styles.mainContainer}>  
    <div className={styles.topInfoPanel}>  
    <div className={styles.twitchThumbnail}>  
    <TwitchThumbnail game={this.state.EsportGames_Data.GameName} width={285} height={380}  />  
    </div>  
    <div className={styles.detailInfoBox}>  
    <div className={styles.generalGameInfo}>  
    <h2>{this.state.EsportGames_Data.GameName}</h2>  
    <p>Release date: {this.state.EsportGames_Data.ReleaseDate}</p>  
    <p>Genre:  {this.state.EsportGames_Data.Genre}</p>  
    </div>  
    <div className={styles.infoPanels}>  
    <TwitchDetailPanel TwitchDataSummary={this.state.TwitchDataSummary[0]}  />  
    <EsportDetailPanel EsportGames_Data={this.state.EsportGames_Data}  />  
    </div>  
    </div>  
    </div>  
    <div className={styles.gameInfoChartContainer}>  
    <div className={styles.gameInfoChartWrapper}>  
    <GameInfoChart innertChartWrapper={styles.innertChartWrapper} className={styles.gameInfoChart} twitchData={this.state.TwitchEsportGames_Data} historicalEsportData={this.state.HistoricalEsportData_Data}  />  
    </div>  
    </div>  
    <div className={styles.chartRow}>  
    <div>  
    <HighestEarningPlayersGameList playersData={this.state.TopEarningPlayers}  />  
    </div>  
    <div>  
    <TournamentsList gameID={this.state.gameID} offset={0} limit={30}  />  
    </div>  
    </div>  
    </div>  
    </Layout>  
    </div>  
    );  
    }  
    }  
    }  
      

## Gatsby

[Gatsbyjs](https://www.gatsbyjs.com/) è il framework utilizzato per il progetto, i principali vantaggi sono:

-   Pre generazione statica delle pagine per una maggiore velocità.
    
-   Rendering intelligente delle pagine che permette di precaricare solo gli elementi necessari.
    
-   Gestione frontend delle pagine: il sito non viene ricaricato ogni volta che si cambia pagina garantendo performance migliori rispetto alle soluzioni tradizionali.
    
-   Vasta libreria di plugin
    

## Librerie e Plugin

-   [Poppins](https://fonts.google.com/specimen/Poppins)  font (google fonts)
    
-   [Chart.js](https://www.chartjs.org/)/[chartjs-plugin-zoom](https://github.com/chartjs/chartjs-plugin-zoom) (grafici)
    
-   [React-chartjs-2](https://github.com/reactchartjs/react-chartjs-2)  (wrapper per l’utilizzo di chart js in react)
    
-   [Gatsby-plugin-image/gatsby-plugin-sharp](https://www.gatsbyjs.com/plugins/gatsby-plugin-image/)/[react-lazy-load-image-component](https://www.npmjs.com/package/react-lazy-load-image-component) (ottimizzazione del caricamento delle immagini)
    
-   [Gatsby-plugin-styled-components](https://www.gatsbyjs.com/plugins/gatsby-plugin-styled-components/)/[styled-components](https://styled-components.com/) (gestione dello stile separata per ogni componente)
    
-   [Node-fetch](https://www.npmjs.com/package/node-fetch) (per prendere i dati dall’API)
    
-   [React-simple-maps](https://www.react-simple-maps.io/) (mappe)
    
-   [react-tooltip](https://www.npmjs.com/package/react-tooltip)/[wsdm-tooltip](https://www.npmjs.com/package/wsdm-tooltip) (etichette al passaggio del mouse)
    

  
  
  
  
  
  
  

# Soluzione Hosting

Il sito è hostato su un VPS (virtual private server) di [Contabo](https://contabo.com/en/) con 4 Cores, 8 GB RAM,200 GB SSD.

Il web server è Node sia per l’API, sia per Sito.

I vari servizi sono su porte e indirizzi diversi (sempre interni al server) e il [Reverse Proxy Nginx](https://www.nginx.com/resources/glossary/reverse-proxy-server/) si occupa di smistare le richieste e gestire la crittografia offerta dal protocollo HTTPS, questo permette di esporre esternamente solamente le porte 443, 80 e 22 e il proxy si occupa poi di smistare le richieste sulle varie porte interne.

I certificati sono forniti gratuitamente da [Let's Encrypt!](https://letsencrypt.org/) e gestiti automaticamente dal [Proxy  Manager Nginx](https://nginxproxymanager.com/).

I nomi di dominio sono forniti gratuitamente da [noip.com](http://noip.com).

Per la connessione al server si è deciso di usare il protocollo SSH utilizzato dal server SFTP, accessibile nativamente da client Linux o tramite software come [Winscp](https://winscp.net/eng/docs/free_sftp_client_for_windows) da Windows.

Come descritto in precedenza il sito può essere visualizzato anche a questi link, dove però il processo di pubblicazione viene completamente automatizzato andando a prendere direttamente il codice sorgente da github:

[https://pedantic-hypatia-64f174.netlify.app/](https://pedantic-hypatia-64f174.netlify.app/)

[https://mzagheno.gatsbyjs.io/](https://mzagheno.gatsbyjs.io/)

  
  
  
  
  
  

# Accesso in VPN

Nel caso sia necessaria una connessione di tipo VPN al server, adotterei [Wireguard](https://www.wireguard.com/): un server vpn alternativo a OpenVPN, che ha come vantaggi una maggiore velocità e semplicità rispetto a quest’ultimo.

Esempio di configurazione client e server entrambi in ambiente Linux:

Configurazione Server

1.  Installazione di wireguard tramite package manager
    
2.  Creazione della cartella /etc/wireguard per i file di configurazione se non presente
    
3.  Creazione della chiave pubblica e privata tramite l’utility di wireguard
    

1.  wg genkey | tee privatekey | wg pubkey > publickey
    

5.  Modificare il file di configurazione /etc/wireguard/wg0.conf
    

    [Interface]  
    Address = 10.6.0.1/24 #indirizzo del server all’interno della vpn  
    ListenPort = 51820 #porta di ascolto del server vpn  
    PrivateKey = AAABBBCCCDDD #private key del server generata in precedenza  

  

5.  Abilitare il servizio allo startup del sistema
    

1.  sudo systemctl enable wg-quick@wg0
    

7.  Startare il servizio
    

1.  sudo systemctl start wg-quick@wg0
    

Configurazione Client

1.  Installazione di wireguard tramite package manager
    
2.  Creazione della cartella /etc/wireguard per i file di configurazione se non presente
    
3.  Creazione della chiave pubblica e privata tramite l’utility di wireguard
    

1.  wg genkey | tee privatekey | wg pubkey > publickey
    

5.  Modificare il file di configurazione /etc/wireguard/wg0.conf
    

    [Interface]
    
    PrivateKey = QQQEEERRRTTT #private key del client generata in precedenza
    
    Address = 10.6.0.10/24 #indirizzo del client all’interno della vpn
    
    [Peer]
    
    PublicKey = DDDCCCBBBAAA #public key del server generata in precedenza
    
    AllowedIPs = 0.0.0.0/0 #ip ammessi (se 0.0.0.0/0 tutto il traffico passerà dal server vpn, se 10.6.0.0/24 il traffico passerà dalla vpn solo quando dobbiamo accedere a un device nella rete virtuale)
    
    Endpoint = 75.119.137.114:51820 #indirizzo del server vpn
    
    DNS = 10.6.0.2 #indirizzo del server dns nel caso ne avessimo uno nella vpn (opzionale)

5.  Abilitare il servizio allo startup del sistema (opzionale)
    

1.  sudo systemctl enable wg-quick@wg0
    

7.  Startare il servizio
    

1.  sudo systemctl start wg-quick@wg0
    

Aggiunta del client alla configurazione del server

1.  Aggiungere al file di configurazione /etc/wireguard/wg0.conf sul server
    

    [Peer]
    
    PublicKey = TTTRRREEEQQQ #public key del client generata in precedenza
    
    AllowedIPs = 10.6.0.10/32 #Assegna questo ip al dispostivo con public key TTTRRREEEQQQ

  

# Espandibilità futura

Il sito al momento pur non essendo particolarmente ricco di contenuti costituisce una base solida su cui poter costruire in relativamente breve tempo nuove pagine e funzionalità vista la natura modulare garantita dalla struttura a componenti.  
Nel caso di una possibile espansione del contenuto e delle funzionalità si potrebbe aggiungere un indice per i player e per i teams in maniera analoga all’indice dei giochi anche se non si potrebbe andare troppo nel dettaglio con una pagina specifica per ogni team/player vista la mancanza di informazioni in merito nella attuale versione dell’API di esportsearnings.  
Un’altra aggiunta potrebbe essere un indice delle nazioni dove in questo caso si potrebbe creare una pagina per ogni nazione che mostri giocatori, teams ed eventi e dati ad essi correlati come i giochi più popolari negli eventi o tra i giocatori.
