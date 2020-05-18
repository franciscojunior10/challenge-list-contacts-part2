import React from 'react';

import './App.scss';

import Contacts from './components/Contacts';
import Filters from './components/Filters';
import Topbar from './components/Topbar';
import Loading from './components/Loading';

import { filterContacts } from './utils';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: [],
      contactsFilter: [],
      orderBy: 'name',
      searchText: '',
      loading: false,
    }
  }

  componentDidMount() {
    this.loadingData();
  }

  loadingData = async () => {
    this.setState({ loading: true });

    const res = await fetch('https://5e82ac6c78337f00160ae496.mockapi.io/api/v1/contacts');

    const setData = await res.json();

    this.setState({ contacts: setData, contactsFilter: filterContacts(setData, '', this.state.orderBy), loading: false });
  }

  handleSearchText = (text) => {
    const newContacts = filterContacts(this.state.contacts, text, this.state.orderBy)
    
    this.setState({ contactsFilter: newContacts });
  }

  handleOnClickOrderList = (orderBy) => {
    const newContacts = filterContacts(this.state.contacts, this.state.searchText, orderBy);
    
    this.setState({ contactsFilter: newContacts });
  }

  render() {
    return (
      <div data-testid="app" className="app">
        <Topbar />
        <Filters 
          handleSearchText={value => this.handleSearchText(value)}
          handleOnClickOrderList={orderBy => this.handleOnClickOrderList(orderBy)}
        />
        {/* {this.state.loading ? <Loading/> : null}  */}
        <Contacts data={this.state.contactsFilter}/>
      </div>
    )
  }
}

export default App;
