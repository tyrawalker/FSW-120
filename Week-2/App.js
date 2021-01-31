import React from "React"
import article from ".article"


function App (){
    return <div className= "blog">
            <article
            info={{title:"Top Ten Diving Destinations", subtitle:"Stay in the USA", information:"written by Tyra Walker" }}/>

            <article
            info={{title:"SCUBA Diving…my rebirth!", subtitle:"Nothing Short of Marvelous", information:"by various authors"}}/>

            <article
            info= {{title:"Dive into the pelago of the soul", subtitle:"Dare to find the courage and take a deep dive into your soul.", information:"by guest authors"}}/>

            <article
            info= {{title:"My own…Deep Blue Sea", subtitle:"73% of the earth is covered by water", information:"Nick Ventroz"}}/>

            <article
            info={{title:"Divemaster Rocks", subtitle:"What is the PADI Divemaster course? ", information:"Manos Ventroz"}}/>

            <article
            info= {{title:"Find the courage!", subtitle:"Divers are the most social beings of the sea", information:"Maria Rapti"}}/>

            <article
            info= {{title:"Life Lessons from Scuba Diving", subtitle:"After a few dives it becomes a way of living .", information:"Maria Rapti"}}/>

            <article
            info= {{title:"Free Diving. Did you know that…", subtitle:"After you read this article you will know the basic milestones of Free Diving history.", information:" various authors"}}/>

            <article
            info={{title:"Free diving set my life", subtitle:"You concentrate on your body without external stimuli.", information:"guest author"}}/>

            <article
            info={{title:"7 reasons for SCUBA Diving during winter", subtitle:"Winter is coming", information:"O"}}/>

            <article
            info={{title:"Debunking Myths regarding Scuba Diving", subtitle:"It’s expensive! Yet, it is cheaper than getting your driving license and with the Open Water certification you can dive globally at 18m.", information:"O"}}/>
    </div>
}

export default App