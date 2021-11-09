import About from 'pages/AboutPage/About';
import Board from 'pages/BoardPage/Board';
import DetailedProject from 'pages/DetailedProjectPage/DetailedProject';
import Error from 'pages/ErrorPage/Error';
import FAQ from 'pages/FAQPage/FAQ';
import Main from 'pages/MainPage/Main';
import MyPage from 'pages/MyPage/MyPage';
import Setting from 'pages/SettingPage/Setting';
import Start from 'pages/StartPage/Start';
import StartProject from 'pages/StartProjectPage/StartProject';
import { Route, Switch } from 'react-router';
// import Payments from 'components/DetailedProject/IntroSection/Payments';

const Body = () => {
  return (
    <main>
      {/* <Payments />; */}
      <Switch>
        <Route path="/" exact>
          <Main />
        </Route>
        <Route path="/board">
          <Board />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/detailed-project">
          <DetailedProject />
        </Route>
        <Route path="/error">
          <Error />
        </Route>
        <Route path="/faq">
          <FAQ />
        </Route>
        <Route path="/mypage">
          <MyPage />
        </Route>
        <Route path="/setting">
          <Setting />
        </Route>
        <Route path="/start-project">
          <StartProject />
        </Route>
        <Route path="/start">
          <Start />
        </Route>
        <Route path="/404">
          <Error />
        </Route>
      </Switch>
    </main>
  );
};

export default Body;
