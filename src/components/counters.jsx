import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 }
    ]
  };

  handleDelete = counterId => {
     const counters = this.state.counters.filter(c => c.id !== counterId);
     this.setState({ counters });
    //console.log('Event handled', counterId);
  };

  handleReset = () => {
    const counters = this.state.counters.filter(c => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  };

  handleIncrement = counter => {
    // const counters = [...this.state.counters];
    // counters[0].value++;
    // console.log(this.state.counters[0]);      //this will modify the same counter object in the state, we should not do like this

    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters });
  };

  render() {
    return (
      <div>
        <button
          onClick={this.handleReset}
          className="btn btn-primary btn-sm m-2"
        >
          Reset
        </button>

        {this.state.counters.map(counter => (
          //   <Counter
          //     key={counter.id}
          //     onDelete={this.handleDelete}
          //     value={counter.value}
          //     id={counter.id}
          //   >

          <Counter
            key={counter.id}
            onDelete={this.handleDelete}
            onIncrement={this.handleIncrement}
            counter={counter}
          >
            {/* Instead of passing the value, id etc... seperately, we can directly pass the object 'counter' and it is a best practice */}

            <h4>Counter #{counter.id}</h4>

            {/* this can be accessed by props.children */}
          </Counter>
        ))}
      </div>
    );
  }
}

export default Counters;
