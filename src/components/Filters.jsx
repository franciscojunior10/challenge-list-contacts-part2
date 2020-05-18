import React from 'react';

import './Filters.scss';

class Filters extends React.Component {
	constructor(props) {
        super(props);
        this.state = {
            orderActive: 'name',
        }
    }

    handleOrderBy = (orderBy) => {
        this.props.handleOnClickOrderList(orderBy);
        this.setState({ orderActive: orderBy })
    }
    
    render() {
        return (
            <div className="container" data-testid="filters">
                <section className="filters">
                    <div className="filters__search">
                        <input 
                            type="text" 
                            className="filters__search__input" 
                            placeholder="Pesquisar"
                            onChange={(e) => this.props.handleSearchText(e.target.value)}
                        />
                        <button className="filters__search__icon">
                            <i className="fa fa-search" />
                        </button>       
                    </div>
    
                    <button 
                        className={`filters__item ${this.state.orderActive === 'name' ? 'is-selected' : ''}`}
                        onClick={() => this.handleOrderBy('name')}
                    >
                        Nome <i className="fas fa-sort-down" />
                    </button>
    
                    <button 
                        className={`filters__item ${this.state.orderActive === 'country' ? 'is-selected' : ''}`}
                        onClick={() => this.handleOrderBy('country')}
                    >
                        País <i className="fas fa-sort-down" />
                    </button>
    
                    <button 
                        className={`filters__item ${this.state.orderActive === 'company' ? 'is-selected' : ''}`}
                        onClick={() => this.handleOrderBy('company')}
                    >
                        Empresa <i className="fas fa-sort-down" />
                    </button>
    
                    <button 
                        className={`filters__item ${this.state.orderActive === 'department' ? 'is-selected' : ''}`}
                        onClick={() => this.handleOrderBy('department')}
                    >
                        Departamento <i className="fas fa-sort-down" />
                    </button>
    
                    <button 
                        className={`filters__item ${this.state.orderActive === 'admissionDate' ? 'is-selected' : ''}`}
                        onClick={() => this.handleOrderBy('admissionDate')}
                    >
                        Data de admissão <i className="fas fa-sort-down" />
                    </button>
                </section>
            </div>
        )
    }
}

export default Filters;
