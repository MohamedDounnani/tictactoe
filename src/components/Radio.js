import React from 'react';

/*
  Classe che si occupa di creare il radio button e riceve dalla classe padre quale opzione è selezionata tramite la funzione onChange
*/

class Radio extends React.Component{


  render(){
    return(
      <form /*onSubmit={this.props.submit}*/>
        <div className="radio">
          <label>
            <input type="radio" checked={this.props.color==="red"} value="red" onChange={this.props.onChange} />
            Red
          </label>
        </div>
        <div className="radio">
          <label>
            <input type="radio" checked={this.props.color==="blue"} value="blue" onChange={this.props.onChange} />
            Blue
          </label>
        </div>
        <div className="radio">
          <label>
            <input type="radio" checked={this.props.color==="black"} value="black" onChange={this.props.onChange}/>
            Black
          </label>
        </div>

      {/*<button className="btn btn-default" type="submit">Save</button>*/}

      </form>
    );
  }
}

export default Radio;
