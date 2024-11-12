import AttractivesEmbed from './components/AttractivesEmbed';
import Context from './components/Context';
import DataSourcesComponent from './components/DataSources';
import EnvironmentalIndicators from './components/EnvironmentalIndicators';
import GeniallyEmbed from './components/GeniallyEmbed';
import Header from './components/Header';
import IndicadoresEconomicos from './components/IndicadoresEconomicos';
import OdsComponent from './components/OdsComponent';
import SecurityIndicators from './components/SecurityIndicators';
import SocialIndicators from './components/SocialIndicators';
import TableauAccidents from './components/TableauAccidents';
import TableauDrugs from './components/TableauDrugs';
import TableauPIB from './components/TableauPIB';
import TableauSecurity from './components/TableauSecurity';
import TableauSocial from './components/TableauSocial';
import TableauTourism from './components/TableauTourism';
import TableauViz from './components/TableauViz';
import TableauWifi from './components/TableauWifi';
import Timeline from './components/Timeline';
import TourismOverview from './components/TourismOverview';
import TurismoGrowth from './components/TurismoGrowth';
import WelcomeToMedellin from './components/Welcome';

function App() {
  return (
    <div>
      <Header />
      <WelcomeToMedellin />
      <TurismoGrowth />
      <OdsComponent />
      <DataSourcesComponent />
      <Context />
      <Timeline />
      <GeniallyEmbed />
      <AttractivesEmbed />
      <TourismOverview />
      <TableauViz />
      <TableauWifi />
      <TableauTourism />
      <IndicadoresEconomicos />
      <TableauPIB />
      <SocialIndicators />
      <TableauSocial />
      <SecurityIndicators />
      <TableauSecurity />
      <TableauDrugs />
      <TableauAccidents />
      <EnvironmentalIndicators />
    </div>
  );
}

export default App;
