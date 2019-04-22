import React, { Component } from "react";

class Counter extends Component {

    // state = {
    //     value: this.props.counter.value ,     // the state property is used to store any values of the component
    //       //count: this.props.value,
    //     // imageUrl: 'https://picsum.photos/200'   //this will generate random 200 × 200 image

    //    // tags: [tag1,tag2,tag3]
    //     tags: []
    // };     REMOVING THE LOCAL STATE AND COMPLETELY DEPENDING ON PROPS COMING FROM THE PARENT COMPONENT, Using the local state will not update the values

    styles = {

      fontSize: 15,
      fontWeight: "Bold"        // You can also use inline style like style={{fontSize: 20 }}

    };


    constructor(props){

      super(props); // since we are extending Component, we have to call that base constructor too
    //  this.handleIncrement = this.handleIncrement.bind(this);  // we are binding the 'this' with the handleIncrement so that we can get it there 

    }

    // handleIncrement(){

    //   console.log("Increment Clicked");
    //   //console.log("Increment Clicked", this.state.count);  // this will throw error because 'this' is undefined here 
    //   // we will have access to 'this' in constructor, so we can get it from there
    //   //now console.log("Increment Clicked", this.state.count);  , this line will not give error
    //   // we can also change this to arrow function to get 'this'
    //   //handleIncrement = () =>{ console.log("Increment Clicked");};
    //   this.setState({value: this.state.value + 1});   // setState is the method from Component Class
    // }; //SINCE LOCAL STATE IS REMOVED, IT IS ALSO NOT NEEDED

    
  render() {
    console.log(this.props.counter.id);
    return (
        //add div whenever there is more than one element otherwise it will throw error since babel cannot identify the type
      //<div>   // Since Extra div is not neccessary here, we can add React.Fragment
      <React.Fragment>
        {/* <img src={this.state.imageUrl} alt=""></img> */}

        {/* <h1>Hello World</h1> */}
        <div>{this.props.children}</div>
        <span style={this.styles} className={this.getBadgeClasses()}>{this.formatCount()}</span>     
        {/* Rendering Classe getBadgeClasses */}

        {/* <span style={this.styles}className="badge badge-primary m-2">{this.formatCount()}</span>   */}   


        {/* we can write any js expressions or functions within {} */}
        <button onClick = {() => this.props.onIncrement(this.props.counter)} className="btn btn-secondary btn-sm">Increment</button>

        <button onClick = {() => this.props.onDelete(this.props.counter.id)}className="btn btn-danger btn-sm m-2">Delete</button>

        {/* <ul>{this.state.tags.map(tag => <li key= {tag}>{tag}</li> )}</ul> */}


        {/* Rendering Lists. Whenever using map method to render the list of items , you need to set the key attribute for each item and key should be unique , this is the best practice  */}

        </React.Fragment>
     // </div>
    ); 
  }

  formatCount(){

      const {value} = this.props.counter;     // Object Destructuring
      return value === 0 ? "Zero" : value;
      //return this.count.state === 0 ? "Zero" : this.count.state;   // the above line without object destructuring
  }

  getBadgeClasses(){

    let classes = "badge m-2 badge-";
    classes += this.props.counter.value ===0 ? "warning" : "primary";
    return classes;
  }


}

export default Counter;

















//Conditional Rendering


// renderTags(){

//   if(this.state.tags.length === 0)  return <p>There are No Tags!</p>;

//   return <ul>{this.state.tags.map(tag => <li key = {tag}>{tag}</li>)}</ul>;

// }


// render(){
//     return <div>
//         {this.state.tags.length === 0 && 'Please Create a new tag '}
//         {/* In jsx, && operator will check the first element and if it is true, it will move on to the next element and will return the last element */}
//         {this.renderTags}
//     </div>
// }






//Passing Event Arguments


// handleIncrement = product => {
 
//   console.log(product);

// }



// <button onClick ={() => this.handleIncrement(product)}></button>  


// by this way we can pass arguments via onclick

// we can not pass like below as function, since it is a reference
//onClick = this.handleIncrement(product)













//Props vs State

// The state is local or private to that Component

// the props are public and can be accessed by another Component

// there is no state for some component where those component will get all the data from props itself

// And also props are read only and you cannot modify it

//To modify that, you have to put it in the state and then modify it as needed



//The Component that owns the piece of the state should be the one modifying it




// TO delete the counter in the counters from the counter component , the counter component needs to raise an event and it should be handled by the counters component
// By this way one component can communicate with another
// In the above code Counter component is raising an event onDelete and the Counters component is handling the event handleDelete()