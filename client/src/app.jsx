/*const F_1 = props => (
    <form>
        <input type="text" placeholder="enter your name" id="name"/><br/>
        <input type="email" placeholder="enter your email" id="mail"/><br/>
        <input type="password" placeholder="enter your password" id="pass"/><br/>
        <button id="1" onClick={this.props.next}>NEXT</button>
    </form>
);*/

class F_1 extends React.Component{
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <form>
                <input type="text" placeholder="enter your name" id="name"/><br/>
                <input type="email" placeholder="enter your email" id="mail"/><br/>
                <input type="password" placeholder="enter your password" id="pass"/><br/>
                <button id="1" onClick={this.props.next}>NEXT</button>
            </form>
        )
    }
}

class F_2 extends React.Component{
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <form>

                <input type="text" placeholder="adresse line 1" id="line1"/><br/>
                <input type="text" placeholder="adresse line 2" id="line2"/><br/>
                <input type="text" placeholder="city" id="city"/><br/>
                <input type="text" placeholder="state" id="state"/><br/>

                <input type="number" placeholder="zip" id="zip"/><br/>
                <input type="number" placeholder="phone number" id="phone"/><br/>
                <button id="2" onClick={this.props.next}>NEXT</button>
            </form>
        )
    }
}

class F_3 extends React.Component{
    constructor(props) {
        super(props);
    }
    render(){
        return(
            <form >
                <input type="number" placeholder="card number" id="card"/><br/>
                <input type="date" placeholder="expiry date" id="expiry"/><br/>
                <input type="number" placeholder="CVV" id='cvv'/><br/>
                <input type="number" placeholder="billing zip code" id='bilzip'/><br/>
                <button id="3">Submit</button>
            </form>
        )
    }

}


class MainComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            step : 1,
            name: "",
            mail: "",
            pass: "",
            line1: "",
            line2: "",
            city: "",
            state:"",
            zip: "",
            phone: "",
            card: "",
            expiry: "",
            cvv: "",
            bilzip: ""
        }
    }
    click(event){
        event.preventDefault();
        var field = document.getElementsByTagName('input');
        for(let i = 0; i < field.length; i++){
            var txt = field[i].id;
            this.setState({[txt]: field[i].value})
        }
        console.log(this.state)
        this.setState({step : this.state.step + 1})
    }


   render(){
        if(this.state.step === 1){
            return (
                <div>
                    <F_1 next={this.click.bind(this)}/>
                </div>
            )
        }
       if(this.state.step === 2){
           return (
               <div>
                   <F_2 next={this.click.bind(this)}/>
               </div>
           )
       }
       if(this.state.step === 3){
           return (
               <div>
                   <F_3 next={this.click.bind(this)}/>
               </div>
           )
       }
   }
}



ReactDOM.render(
    <MainComponent />, document.getElementById('app')
)