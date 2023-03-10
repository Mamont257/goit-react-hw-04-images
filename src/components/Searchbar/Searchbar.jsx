import React, { Component } from "react";
import PropTypes from 'prop-types';
import { SearchBar, SearchForm, SearchFormButton, SearchFormButtonLabel, SearchFormInput } from "./Searchbar.styled";


export class Searchbar extends Component {
    state = {
        imageName: "",
    }

    handleSearchImg = e => {
        this.setState({ imageName: e.target.value.toLowerCase() }); 
    }

    handleSubmit = e => {
        e.preventDefault();

        if (this.state.imageName.trim() !== '') {
            // toast('🦄 Wow greats!');
            this.props.onSearch(this.state.imageName)
        }

        this.setState({ imageName: "" })
    }

    render() {
        return (
            <SearchBar>
                <SearchForm onSubmit={this.handleSubmit}>
                    <SearchFormButton type="submit">
                        <SearchFormButtonLabel>Search</SearchFormButtonLabel>
                    </SearchFormButton>

                    <SearchFormInput
                        type="text"
                        name="imageName"
                        value={this.state.imageName}
                        placeholder="Search images and photos"
                        onChange={this.handleSearchImg}
                    />
                </SearchForm>
            </SearchBar>
        )
    }
}

Searchbar.propTypes = {
  onSearch: PropTypes.func.isRequired,
};