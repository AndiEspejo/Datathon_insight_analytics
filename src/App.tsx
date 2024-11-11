import TableauViz from './components/TableauViz';
import GeniallyEmbed from './components/GeniallyEmbed';
import Header from './components/Header';
import WelcomeToMedellin from './components/Welcome';
import TurismoGrowth from './components/TurismoGrowth';
import OdsComponent from './components/OdsComponent';
import DataSourcesComponent from './components/DataSources';
import Context from './components/Context';
import Timeline from './components/Timeline';
import TableauPIB from './components/TableauPIB';
import AttractivesEmbed from './components/AttractivesEmbed';
import TourismOverview from './components/TourismOverview';
import IndicadoresEconomicos from './components/IndicadoresEconomicos';
import SecurityIndicators from './components/SecurityIndicators';
import EnvironmentalIndicators from './components/EnvironmentalIndicators';
import TableauWifi from './components/TableauWifi';
import TableauSocial from './components/TableauSocial';

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
      <IndicadoresEconomicos />
      <TableauPIB />
      <SecurityIndicators />
      <TableauSocial />
      <EnvironmentalIndicators />
    </div>
  );
}

export default App;
