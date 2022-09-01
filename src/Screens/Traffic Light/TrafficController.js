import React from "react";
import TrafficView from "./TrafficView";

class TrafficController extends React.Component {
    constructor(props) {
        super(props);

        //gerando logs da props
        console.log(" Chamando constructor() ");
        console.log(props);

        this.state = {
            count: 0,
            status: 'change',
            green: true,
            yellow: false,
            red: false
        }; //inicializando o state
    }

    componentDidMount() {
        console.log(" Chamando componentDidMount ");
        //Inicializando o timeout
        this.interval = setInterval(() => {
            //atualizando o contador
            console.log(" Atualizando a classe ");
            if (this.state.status === "Rodando") {
                this.setState({
                    count: this.state.count + 1,
                });
            }
        }, 1000);
    }
    transition = () => {
        if (this.state.green) {
            this.setState({
                green: false,
                yellow: true,
                red: false
            });
            this.yellow();
            return;
        }

        if (this.state.yellow) {
            this.setState({
                green: false,
                yellow: false,
                red: true
            });
            this.red();
            return;
        }

        if (this.state.red) {
            this.setState({
                green: true,
                yellow: false,
                red: false
            });
            this.green();
            return;
        }
    };

    change = () => {
        this.setState({
            status: 'change'
        })
    }
    yellow = () => {
        this.setState({
            status: 'yellow'
        })
    }
    red = () => {
        this.setState({
            status: 'red'
        })
    }
    green = () => {
        this.setState({
            status: 'green'
        })
    }


    render() {
        console.log(" Chamando Render " + this.state.count);
        return (
            //Chamando o View e passando o props count_info
            <TrafficView count={this.state.count} status={this.state.status}
                iniciar={this.iniciar} yellow={this.yellow} red={this.red} green={this.green} />
        );
    }
}
export default TrafficController;
