import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import SearchBooks from './pages/SearchBooks';
import SavedBooks from './pages/SavedBooks';
import Navbar from './components/Navbar';
import NotFound from './pages/NotFound';

const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
});

function App() {
  return(
    <ApolloProvider client={client}>
      <Router>
        <div className="flex-column justify-center align-center min-100-vh bg-primary">
        <Navbar/>
        <Switch>
       <Route exact path='/' component={SearchBooks}> 
          <SearchBooks />
       </Route>
        <Route exact path='/saved' component={SavedBooks}>
          <SavedBooks/>
        </Route>
       <Route exact path="/book/:id">
         <SavedBooks/>
       </Route>
       <Route>
         <NotFound/>
       </Route>
        </Switch>
        </div> 
      </Router>
    </ApolloProvider>
  );
}


// function App() {
//   return (
//     <Router>
//       <>
//         <Navbar />
//         <Switch>
//           <Route exact path='/' component={SearchBooks} />
//           <Route exact path='/saved' component={SavedBooks} />
//           <Route render={() => <h1 className='display-2'>Wrong page!</h1>} />
//         </Switch>
//       </>
//     </Router>
//   );
// }

export default App;
