import React from 'react';
import '../css/TodoListTemplate.css';
import SearchButton from "@material-ui/core/Button/Button";
import Hidden from '@material-ui/core/Hidden';

export default class TodoListTemplate extends React.Component {
    constructor(props) {
        super(props)
    }
    render(){
        return (
            <main className="todo-list-template">
                <Hidden xsDown>
                    <div className="title">
                        TodoList
                    </div>
                </Hidden>
                <section className="picker dateform-wrapper">
                    { this.props.date_form }
                    <SearchButton
                        color='primary'
                        size='large'
                        variant='outlined'
                        className="btn-date-search"
                        onClick={this.props.onSearch}
                    >
                        <i className="fas fa-search"></i>List Search
                    </SearchButton>
                </section>
                <section className="form-wrapper">
                    { this.props.form }
                </section>
                <section className="todos-wrapper">
                    { this.props.children }
                </section>
            </main>
        );
    }
}