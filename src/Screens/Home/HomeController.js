import React from "react";
import HomeView from "./HomeView";

class HomeController extends React.Component {
    constructor(props) {
        super(props);

        //gerando logs da props
        console.log(" Chamando constructor() ");
        console.log(props);

        this.state = {
            count: 0,
            status: "Parado"
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

    iniciar = () => {
        this.setState({
            status: "Rodando"
        })
    }
    pausar = () => {
        this.setState({
            status: "Pausado"
        })
    }
    parar = () => {
        this.setState({
            status: "Parado"
        })
    }
    zerar = () => {
        this.setState({
            count: 0
        })
    }


    render() {
        console.log(" Chamando Render " + this.state.count);
        return (
            //Chamando o View e passando o props count_info
            <HomeView count={this.state.count} status={this.state.status}
                iniciar={this.iniciar} pausar={this.pausar} parar={this.parar} zerar={this.zerar} />
        );
    }
}
export default HomeController;
