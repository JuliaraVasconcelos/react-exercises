import React, { useState, useEffect } from "react";
import HomeView from "./HomeView";

const HomeController = () => {

    const [count, setCount] = useState(0);
    const [status, setStatus] = useState('parado')


    // useEffect(() => {
        // const interval = setInterval(() => {
            //atualizando o contador
            // console.log(" Atualizando a classe ");
            // if (status === "Rodando") {
                // setCount((count) => count + 1)
            // }
        // }, 1000);
        // return () => {
            // clearInterval(interval)
        // };
    // }, [])
    //mais usado
    // useEffect(() => {
        //Componente Did Mount
        // console.log("Montar o Componente");
        //Antes de chamar a API
        //Quando eu listar o interval
        //Buscar o BD 
        // const interval = setInterval(() => {
            //atualizando o contador
            // console.log(" Atualizando a classe ");
            // this.setState({
            //   count: this.state.count + 1,
            // });
        //     setCount((count) => count + 1);
        // }, 1000);
        // return () => {
            //ComponentWillUnmount
            // console.log("Desmontar o componente");
            //Limpar o interval
            //Fechar a conexao com o banco
            //Cancelar uma conexao
    //         clearInterval(interval)
    //     };
    // }, [])

    // useEffect(() => {
    //     console.log('antes de alterar a info depois do render');
    //     return () => {
    //         console.log('antes de alterar info antes do render');
    //     }
    // }, [count])


        
    // componentDidMount() {
    //     console.log(" Chamando componentDidMount ");
    //     //Inicializando o timeout
    //     this.interval = setInterval(() => {
    //         //atualizando o contador
    //         console.log(" Atualizando a classe ");
    //         if (this.state.status === "Rodando") {
    //             this.setState({
    //                 count: this.state.count + 1,
    //             });
    //         }
    //     }, 1000);
    // }
    //-----------------[ReactHook]----------------------------
    useEffect(() => {
        const interval = setInterval(() => {
            //atualizando o contador
            console.log(" Atualizando a classe ");
            if (status === "Rodando") {
                setCount((count) => count + 1)
            }
        }, 1000);
        return () => {
            clearInterval(interval)
        };
    }, [])

    const iniciar = () => {
        setStatus('rodando')
    }
    const pausar = () => {
        setStatus('pausado')
    }
    const parar = () => {
        setStatus('parado')
    }
    const zerar = () => {
        setCount(0)
    }
    //     console.log(" Chamando Render " + this.state.count);
    // const onClickButton = () => {
    //     setCount((count) => count + 1)
    // }
        return (
            //Chamando o View e passando o props count_info
            <HomeView 
            // count={count} onClickButton={onClickButton}
            count={count} status={status}
                iniciar={iniciar} pausar={pausar} parar={parar} zerar={zerar}
                 />
        );
    }

export default HomeController;
