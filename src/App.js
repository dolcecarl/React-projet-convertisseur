
import './App.css';
import Devise from './components/Devise';
import Footer from './components/Footer';
import Header from './components/Header';
import React,{Component} from 'react';
import Alert from '@mui/material/Alert';

import myImage from './images/currency.png';

class App extends Component {

         const 
  
         state={

          data:[],
          erreur:"",
          titre:"Convertisseur de monnaie",
          symbolId:"",
          symboleCurrency:"",
          update:true
         }
           
    


     chercherDevise = async(idBicoin,vsCurrencie) =>{

      if(idBicoin && vsCurrencie){

        try{
           let response=await fetch(`https://api.coingecko.com/api/v3/simple/price?ids=${idBicoin}&vs_currencies=${vsCurrencie}`);
           let data= await response.json();
           console.log(response)
           console.log(data)
          this.setState({
            
            data:Object.values(Object.values(data)), //  data:data.symbol,
            erreur:"",
            symbolId:Object.keys(data)
          })
          
          // console.log(this.state. symbolId)
         
        } 
        catch(e){
           
          this.setState({
            erreur:"Oups! Erreur lors de la recherche"
          })

        }
         
      }
      else{
        this.setState({
          erreur:"Oups! Votre choix n'est pas valide,veuillez réessayer"
        })

      }
      
    }



       initialiserRechercheDevise = () =>{

        this.setState({

          data:[],
          erreur:""
        })
       }

        displayResult = ()=>{

         return this.state.data.map((result)=>{
            return <div className="resultatConversion">
                      <div className="img">
                        <img  src={myImage}/>
                      </div>
                       <p>{this.state.symbolId}&nbsp;&nbsp;=&nbsp;&nbsp;{Object.values(result)}&nbsp;{Object.keys(result)}</p>
                   </div>
            //  console.log(Object.values(result))
         })
        }

     render(){

        console.log(this.state.data[0])

      return (
        <div className="App">
          

            <Header/>

            <Devise devise={this.chercherDevise} initialiser={this.initialiserRechercheDevise} titre={this.state.titre}/>

            {/* Affichage resultat conversion */}
            {this.state.data? this.displayResult():undefined}

            <div className="message-alert">


            {this.state.erreur? <Alert  variant="filled" severity="warning">{this.state.erreur}</Alert>:undefined}
            
            </div>

           
            
            
            
            <Footer/>

            
            
            
        </div>
      );
     }


                      
}

export default App;
