import './App.css';
import { ApolloProvider, InMemoryCache, ApolloClient} from "@apollo/client"
import Home from './Pages/Home'


function App() {

  const client = new ApolloClient({
    cache: new InMemoryCache,
    uri: "https://graphql-weather-api.herokuapp.com/"
  })

  return (
    <ApolloProvider client={client} >
      <Home />
    </ApolloProvider>
      
  );
}

export default App;
