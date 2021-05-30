import axios from "axios";
import Card from "./cardStyle";
import React, { Component } from "react";
const API = "https://thefoundaterbackend.azurewebsites.net/article/stories";
const Url = "https://thefoundaterbackend.azurewebsites.net/article/";
const UrlImg = "https://thefoundaterbackend.azurewebsites.net"
class Cards extends Component {
    state = {
        persons: []
    }
    componentDidMount() {
        axios.get(API)
            .then(res => {
                const persons = res.data;
                this.setState({ persons });
            })
    }
    render() {
        return (
            <Card>

                {this.state.persons.map(person => <a href={Url + person.id}><ul><li className="Images"><img src={UrlImg + person.photo} accept="image/png, image/jpeg" alt="entrepreneurs"/></li> < li className="firstName">{person.firstName}</li><li>{person.lastName}</li><li>{person.slug}</li><li>{person.company}</li></ul></a>)}

            </Card>
        )
    }
}


export default Cards;