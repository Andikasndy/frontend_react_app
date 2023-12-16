import React from "react"

class Footer extends React.Component{
    constructor(props){
    super(props);
    }
    render(){
        return(
            <div>
                <h1> done kack </h1>
                {this.props.paragrap()}
            </div>
        );
    }
}

export default Footer;