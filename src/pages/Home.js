import { StyledContent, LatestStyle } from "./HomeStyle";
import React, { Component } from 'react';
import axios from 'axios';
import Disqus from "../components/disqus/Disqus";
const ApiUrl = 'https://thefoundaterbackend.azurewebsites.net/lastarticle/';
const url = 'https://thefoundaterbackend.azurewebsites.net';
class Home extends Component {
    state = {
        persons: []
    }
    componentDidMount() {
        axios.get(ApiUrl)
            .then(res => {
                const persons = res.data;
                this.setState({ persons });
            })
    }
    render(persons) {
        return (
            <LatestStyle>
                <div className="latest">
                    <h1>Latest Article</h1>
                </div>
                <StyledContent>
                    <article>
                        <div className="firstDiv">
                            <h3>{this.state.persons.firstName}</h3>
                            <h3>{this.state.persons.lastName}</h3>
                            <p>{this.state.persons.slug}</p>
                            <p>{this.state.persons.company}</p>
                            <p>{this.state.persons.birthDay}</p>
                            <p><a href={this.state.persons.link}>{this.state.persons.link}</a></p>
                            <img src={url + this.state.persons.photo} alt="entrepreneur" accept="image/png, image/jpeg"/>
                        </div>
                        <div className="articleDiv">
                            <h3>{this.state.persons.firstTitle}</h3>
                            <p>{this.state.persons.firstText}</p>
                            <h3>{this.state.persons.secondTitle}</h3>
                            <p>{this.state.persons.secondText}</p>
                            <h3>{this.state.persons.thirdTitle}</h3>
                            <p>{this.state.persons.thirdText}</p>
                        </div>
                    </article>
                    <aside>
                        <Disqus />
                    </aside>
                </StyledContent>
            </LatestStyle>
        )
    }

}

export default Home;