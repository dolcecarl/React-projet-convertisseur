import { Button, FormControl, Grid, InputLabel, ListItemText, MenuItem, Select  } from '@mui/material';

import { Component, Fragment } from 'react';
import './Devise.css';


import canada from '../images/canada.png';

import euro from '../images/euro-union.png';
import nigeria from '../images/nigeria.png';

import japan from '../images/japan.png';
import usa from '../images/united-states.png';



class Devise extends Component{

    

    state={

        id:"",
           idCoin:["0-5x-long-bitcoin-token","01coin","15373-parkside","15770-prest"],
          
           vsCurrencies:["EUR","NGN","CAD","JPY","USD"],
           
           vsCurrencie:"",

           result:""
       }
  


         
       handlerVsCurrencie = (e) =>{

        this.setState({

           vsCurrencie:e.target.value
        })
       }

       handlerVsId = (e) =>{

        this.setState({

            id:e.target.value
        })
       }

    
         displaySelectItem = ()=>{

            
         }
      
    render(){

        console.log(this.state.id,this.state.vsCurrencie)
        
        return(
                

            <Fragment>
                 
                    
                   <div className="device-choix-user">
                      
                    <form className="form">

                   
                    <h1>{this.props.titre}</h1>
                                <FormControl>
                                    <InputLabel id="label">Choissisez un monnaie de départ</InputLabel>
                                        <div className="devise-select">
                                        <Select className="select" value={this.state.id} onChange={this.handlerVsId}>
                                                 
                                                    {this.state.idCoin.map((itemId,index)=>{
                                                        return(
                                                            
                                                            <MenuItem key={index} value={itemId}>
                                                            
                                                            <div className="select-item"><h3>&nbsp;&nbsp;{itemId}</h3></div>
                                                            <ListItemText  />
                                                        </MenuItem>
                                                        )
                                                    })}
                                            

                                
                                    </Select>
                                    
                                    
                                        </div>
                                        </FormControl>

                                    <FormControl>
                                    <InputLabel id="label-currency">Convertir en?</InputLabel>
                                        <div className="devise-select">
                                        <Select className="select" value={this.state.vsCurrencie} onChange={this.handlerVsCurrencie}>
                                    
                                        
                                        <MenuItem value={this.state.vsCurrencies[0]} className="menu-item">
                                                
                                                <div className="select-item"><img className="img-select" src={euro} alt=""/>&nbsp;&nbsp;{this.state.vsCurrencies[0]}</div>
                                                <ListItemText  />
                                            </MenuItem>
                                            
                                            <MenuItem value={this.state.vsCurrencies[1]}>
                                            <div className="select-item"> <img className="img-select" src={nigeria} alt=""/><h3>&nbsp;&nbsp;{this.state.vsCurrencies[1]}</h3></div> 
                                               
                                                
                                                <ListItemText  />
                                            </MenuItem>
                                            
                                            <MenuItem value={this.state.vsCurrencies[2]}>
                                            <div className="select-item"> <img className="img-select" src={canada} alt=""/><h3>&nbsp;&nbsp;{this.state.vsCurrencies[2]}</h3></div> 
                                             
                                                
                                                <ListItemText  />
                                            </MenuItem>
                                            <MenuItem value={this.state.vsCurrencies[3]} >
                                            <div className="select-item"> <img className="img-select" src={japan} alt=""/><h3>&nbsp;&nbsp;{this.state.vsCurrencies[3]}</h3></div> 
                                                
                                                
                                                <ListItemText  />
                                            </MenuItem>
                                            <MenuItem value={this.state.vsCurrencies[4]}>
                                            <div className="select-item">  <img className="img-select" src={usa} alt=""/><h3>&nbsp;&nbsp;{this.state.vsCurrencies[4]}</h3></div> 
                                               
                                                
                                                <ListItemText  />
                                            </MenuItem>
                                
                                    </Select>
                                    
                                    
                                        </div>
                                        
                                    
                                    </FormControl>

                        <div>
                                  <Button onClick={()=>{this.props.devise(this.state.id,this.state.vsCurrencie)}} className="bouton" variant="outlined">Convertir</Button>
                                  <Button onClick={this.props.initialiser}  className="bouton"  variant="outlined">Vider</Button>
                              </div>
                        
                    </form>
                   
                   </div>
                
                        
                  
                        
                   
               
            </Fragment>
        )
    }
}

export default Devise;