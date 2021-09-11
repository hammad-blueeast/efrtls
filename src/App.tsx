import React from 'react';
import './App.css';
import Card from './components/cards';
import Header from './components/header';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Fixtures, Response } from '../src/services/model';
import { token } from '../src/services/config';



function App() {
  const [apiData, setApiData] = React.useState<Array<Response> | undefined>(undefined)
  const [favData, setfavData] = React.useState<Array<Response> | undefined>(undefined)
  const [todayData, setTodayMetch] = React.useState<Array<Response> | undefined>(undefined)
  const [seletTab, setseletTab] = React.useState(1)
  React.useEffect(() => {
    const SoccerApi = async () => {
      const responseType = await fetchSoccerData();
      const jsonResponse: Fixtures = await responseType;
      setApiData(jsonResponse.response);
      console.log(jsonResponse.response)
      let data = jsonResponse.response.filter(function (item) {
        return isToday(new Date(item.fixture.date));
      })
      console.log(data, "data")
      setTodayMetch(data)
    }
    SoccerApi();
  }, []);
  const fetchSoccerData = async (): Promise<Fixtures> => {
    try {
      const responseApi = await fetch('https://api.refactor.ro/football/fixtures', {
        headers: {
          "Authorization": `Bearer ${token}`,
          "content-type": "application/json"
        },
        method: 'GET'

      })
      return await Promise.resolve(responseApi.json());
    } catch (error) {
      return await Promise.reject(error)

    }
  }
  const isToday = (someDate: any) => {
    const today = new Date()
    return someDate.getDate() == today.getDate() &&
      someDate.getMonth() == today.getMonth() &&
      someDate.getFullYear() == today.getFullYear()
  }
  console.log(favData)
  return (
    <>
      <Header click={(item: any) => {
        setseletTab(item)
      }} />
      <div className="mainrow">
        {seletTab == 1 ?
          apiData?.map((item, i) => {
            return (
              <Card item={item} time={item.fixture.date} referee={item.fixture.referee} logo={item.league.logo} leagueName={item.league.name} teamA={item.teams.home.name} teamB={item.teams.away.name} teamALogo={item.teams.home.logo} teamBLogo={item.teams.away.logo} teamAGoal={item.goals.home} teamBGoal={item.goals.away} elapsed={item.fixture.status.elapsed}
                saveFav={(itemData: any) => {
                  console.log(itemData)
                  let fav = favData?.length == undefined ? [] : favData
                  fav.push(itemData)
                  setfavData(fav)
                }} />
            )
          })
          : seletTab == 2 ?
            favData?.map((item, i) => {
              return (
                <Card item={item} time={item.fixture.date} referee={item.fixture.referee} logo={item.league.logo} leagueName={item.league.name} teamA={item.teams.home.name} teamB={item.teams.away.name} teamALogo={item.teams.home.logo} teamBLogo={item.teams.away.logo} teamAGoal={item.goals.home} teamBGoal={item.goals.away} elapsed={item.fixture.status.elapsed}
                  saveFav={(itemData: any) => {
                    console.log(itemData)
                    let fav = favData?.length == undefined ? [] : favData
                    fav.push(itemData)
                    setfavData(fav)
                  }} />
              )
            })
            : todayData?.map((item, i) => {
              return (
                <Card item={item} time={item.fixture.date} referee={item.fixture.referee} logo={item.league.logo} leagueName={item.league.name} teamA={item.teams.home.name} teamB={item.teams.away.name} teamALogo={item.teams.home.logo} teamBLogo={item.teams.away.logo} teamAGoal={item.goals.home} teamBGoal={item.goals.away} elapsed={item.fixture.status.elapsed}
                  saveFav={(itemData: any) => {
                    console.log(itemData)
                    let fav = favData?.length == undefined ? [] : favData
                    fav.push(itemData)
                    setfavData(fav)
                  }} />
              )
            })
        }
      </div>
    </>);
}

export default App;
