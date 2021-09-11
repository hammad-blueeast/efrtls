import React from 'react';
import './Cards.css';
interface FuncProps{
    time:string;
    referee:string|null;
    logo:string;
    leagueName:string;
    teamA:string;
    teamB:string;
    teamALogo:string;
    teamBLogo:string;
    teamAGoal:number| null;
    teamBGoal:number| null;
    elapsed:number|null;
    item: any;
    saveFav:any
}


function Card({time,referee,logo,leagueName,teamA,teamB,teamALogo,teamBLogo,teamAGoal,teamBGoal,elapsed,item,saveFav}:FuncProps) {
    const isToday = (someDate:any) => {
        const today = new Date()
        return someDate.getDate() == today.getDate() &&
          someDate.getMonth() == today.getMonth() &&
          someDate.getFullYear() == today.getFullYear()
      }
    return (
        <div className="card  column">
            <div className="card-footer">
                <div className="row row-d">
                    <div className="col-md-4">
                        {isToday(new Date(time)) && <a className="btn btn-primary btn-sm live" href="#!"> Live</a>}
                        
                    </div>
                    <div className="col-md-6 center">
                        <div style={{flex: 1, flexDirection: 'row'}}>

                        <img className="imageCenter" src={logo}/> 
                        <p className="par-p">{leagueName}</p>
                        </div>
                    </div>
                    <div className="col-md-2">
                        <button onClick={() =>{
                            saveFav(item)
                        }} className="btn btn-primary btn-sm live"> fav</button>
                    </div>
                </div>
            </div>
            <div className="card-body">
                <div className="row">
                    <div className="col-md-4 center">
                        <img className="imageteam"  src={teamALogo}/>
                        <h2 className="h2-2">{teamA}</h2>
                    </div>
                    <div className="col-md-4 center">
                        <h3 className="h3-3">{new Date(time).toDateString()} at {new Date(time).toLocaleTimeString()}</h3>
                        <h1 className="h1-1">{teamAGoal} : {teamBGoal}</h1>
                        <h4 style={{color:'orange'}}>{elapsed}'</h4>
                        <h2 className="h2-2-2"><span>Reguse:</span> {referee!}</h2>
                    </div>
                    <div className="col-md-4 center">
                        <img className="imageteam"  src={teamBLogo}/>
                        <h2 className="h2-2">{teamB}</h2>
                    </div>
                </div>
            </div>
            <div className="card-footer center"><a className="btn btn-primary btn-sm buy" href="#!">Estudiantes Estudiantes  LP.</a></div>
        </div>
  );
}

export default Card;
