import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person.js";


class App extends Component {
    state = {
        persons: [
            { id: 1, name: "kshitij", age: 25 },
            { id: 2, name: "aahna", age: 28 },
            { id: 3, name: "shivam", age: 32 },
        ],
        count: 1,
        showPersons: true,
    };

    incHandler = (newName) => {
        this.setState({
            persons: [
                { name: "Max", age: 25 },
                { name: "aahna", age: 28 },
                { name: "toom", age: 32 },
            ],
        });
    };

    nameChangeHandler = (event, id) => {
        // console.log(id);

        const personIndex = this.state.persons.findIndex((p) => {
            // console.log(p.id);
            if (p.id === id) {
                return id;
            }
        });

        // console.log(personIndex);

        const person = { ...this.state.persons[personIndex] };
        // console.log(person);

        person.name = event.target.value;

        const persons = [...this.state.persons];
        persons[personIndex] = person;

        this.setState({
            persons: persons,
        });
    };

    togglePersonHandler = () => {
        this.setState({
            showPersons: !this.state.showPersons,
        });
    };

    deletePersonHandler = (personIndex) => {
        // SLICE IS USED TO CREATE A COPY
        // const persons = this.state.persons.slice();
        // SECOND WAY OF COPYING
        const persons = [...this.state.persons];
        // SPLICE IS FILTERING IT OUR
        persons.splice(personIndex, 1);
        this.setState({ persons: persons });
    };

    render() {
        const style_show = {
            backgroundColor: "green",
            border: "2px solid black",
            padding: "5px",
            ":hover": {
                backgroundColor: "salmon",
            },
        };
        const style_hide = {
            backgroundColor: "red",
            border: "2px solid black",
            padding: "5px",
        };

        let persons = null;
        if (this.state.showPersons === true) {
            persons = (
                <div>
                    {this.state.persons.map((person, index) => {
                        return (
                            <Person
                                key={person.id}
                                click={this.deletePersonHandler.bind(
                                    this,
                                    index
                                )}
                                changedName={(event) =>
                                    this.nameChangeHandler(event, person.id)
                                }
                                name={person.name}
                            ></Person>
                        );
                    })}
                </div>
            );
        }

        let classes = [];

        if (this.state.persons.length <= 2) {
            classes.push("white");
        }
        if (this.state.persons.length >= 3) {
            classes.push("bold");
        }
        console.log(classes.join(" "));
        return (
        
                <div className="App">
                    {this.state.showPersons ? persons : null}

                    <button
                        className={classes.join(" ")}
                        style={this.state.showPersons ? style_hide : style_show}
                        onClick={this.togglePersonHandler}
                    >
                        TOGGLE
                    </button>
                    <p>{this.state.count}</p>
                </div>
          
        );
    }
}

export default App;
