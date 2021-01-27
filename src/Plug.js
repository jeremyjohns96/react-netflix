import React from 'react'
import './Plug.css'
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';

/*
function run() {
    console.log("Run function Ran")
    document.getElementsByClassName('Plug__child_1')[0].textContent = "Coded by Jeremy!";
    document.getElementsByClassName('Plug__child_2')[0].textContent = "+1 647 549 2970.";
}
*/
export default class Plug extends React.Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
        console.log("Constructor ran");
        //this.hide = this.hide.bind(this);

    }
    


    /*hide(e) {
        console.log("Hide function Ran")
        if (e.target.classList.contains("show")) {
            e.target.classList.remove("show");
            e.target.classList.add("hide");
            document.getElementsByClassName('Plug__child_1')[0].textContent = "";
            document.getElementsByClassName('Plug__child_2')[0].textContent = "";
        } else {
            e.target.classList.remove("hide");
            e.target.classList.add("show");
            console.log("Target: ")
            console.log(e.target.firstChild)
            document.getElementsByClassName('Plug__child_1')[0].textContent = "Coded by Jeremy!";
            document.getElementsByClassName('Plug__child_2')[0].textContent = "+1 647 549 2970.";
            //            <ArrowUpwardIcon />
        }
    }*/

    run() {
        console.log("Run function Ran")
        document.getElementsByClassName('Plug__child_1')[0].textContent = "Coded by Jeremy Johns!";
        document.getElementsByClassName('Plug__child_2')[0].textContent = "+1 647 549 2970 To Hire!.";
        //return (<div></div>)
    }

    render() {
        return (
            <div id="Plug" className="show" onClick={(e)=>this.hide(e)}>

                <div className="Plug__child_1">
                    Coded by Jeremy Johns!
                </div>

                <div className="Plug__child_2">
                Interested in Hiring?
                </div>

                <div className="Plug__child_3">
                HR Call: +1 647 549 2970 OR Email: jeremyjohns96@gmail.com
                </div>

            </div>

        )

    }
}

