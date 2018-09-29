import React from 'react';
import ReactDOM from 'react-dom';

const App = props => {
return <NumberOfStudents />;
};
    class NumberOfStudents extends React.Component {
        constructor(props){
            super(props);
            this.state = {
                
                enrolledStudents : 20,
                   addAmount: 0,
                   
                
                  
                  waitlistedStudents: 10,
                    addNumber: 0
                  
                  
            };
        }

        increment() {
            this.setState({
                enrolledStudents: this.state.enrolledStudents + parseInt(this.state.addAmount)
            });
           
        }

        incrementItem1(){
           
        this.setState({
            waitlistedStudents: this.state.waitlistedStudents + parseInt(this.state.addNumber)
        });
    }
        incrementItem2(){
            this.setState({
                enrolledStudents: this.state.enrolledStudents + 1
            })
            }

            incrementItem3(){
            this.setState({
                waitlistedStudents: this.state.waitlistedStudents + 1
            });
        }
        render(){
            return(
                <div>
                    <h1>Enrolled Students: ${this.state.enrolledStudents}</h1>
                    <button onClick={this.incrementItem2.bind(this)}>Add 1 Student</button>
                    <h2>Add Multiple Students</h2>
                    <input
                    type="number"
                    onChange={event => this.setState({addAmount: event.target.value})}
                    value={this.state.addAmount} />
                    <button onClick={this.increment.bind(this)}>Increase Amount</button>
                    
                    <h2>Waitlisted Students: ${this.state.waitlistedStudents}</h2>
                        <button onClick={this.incrementItem3.bind(this)}>Add 1 Student</button>
                    <h3>Add Multiple Students</h3>
                    <input
                    type="number"
                    onChange={event => this.setState({addNumber: event.target.value})}
                    value={this.state.addNumber} />

                    <button onClick={this.incrementItem1.bind(this)}>Increase Amount</button>
                    

                </div>
                
            )
        }
    }
ReactDOM.render(<App />, document.getElementById('root'));