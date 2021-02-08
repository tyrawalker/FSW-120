import React from "react"
import Article1 from "./Article1"


function App (){
    return <div className= "blog">
           <Article1
            info={{title:"Top Ten Diving Destinations", subtitle:"Stay in the USA", information:"written by Tyra Walker" }}/>

             <Article1
            info={{title:"SCUBA Diving…my rebirth!", subtitle:"Nothing Short of Marvelous", information:"by various authors"}}/>

            <Article1
            info= {{title:"Dive into the pelago of the soul", subtitle:"Dare to find the courage and take a deep dive into your soul.", information:"by guest authors"}}/>

            <Article1
            info= {{title:"My own…Deep Blue Sea", subtitle:"73% of the earth is covered by water", information:"Nick Ventroz"}}/>

            <Article1
            info={{title:"Divemaster Rocks", subtitle:"What is the PADI Divemaster course? ", information:"Manos Ventroz"}}/>

            <Article1
            info= {{title:"Find the courage!", subtitle:"Divers are the most social beings of the sea", information:"Maria Rapti"}}/>

            <Article1
            info= {{title:"Life Lessons from Scuba Diving", subtitle:"After a few dives it becomes a way of living .", information:"Maria Rapti"}}/>

            <Article1
            info= {{title:"Free Diving. Did you know that…", subtitle:"After you read this article you will know the basic milestones of Free Diving history.", information:" various authors"}}/>

            <Article1
            info={{title:"Free diving set my life", subtitle:"You concentrate on your body without external stimuli.", information:"guest author"}}/>

            <Article1
            info={{title:"7 reasons for SCUBA Diving during winter", subtitle:"Winter is coming", information:"O"}}/>

            <Article1
            info={{title:"Debunking Myths regarding Scuba Diving", subtitle:"It’s expensive! Yet, it is cheaper than getting your driving license and with the Open Water certification you can dive globally at 18m.", information:"O"}}/> 
    </div>
}

export default App