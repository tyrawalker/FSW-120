import React from 'react'; 
import CalculatorTitle from './calculatorTitle.js'; 
import OutputScreen from './outPutScreen.js'; 
import Button from './button.js'

constructor() { 
    super(); 
  
    
    this.state = { 
      question: '', 
      answer: ''
    } 
    handleClick = {this.handleClick}
 
    this.handleClick = this.handleClick.bind(this); 

  } 
  
class Calculator extends React.Component { 
    render() 
    { 
    return ( 
    <div> 
    <CalculatorTitle value="Calculator"/> 
    <div> 
    <OutputScreen/> 
    <div> 
      <Button label={'Clear'}/> 
      <Button label={'Delete'}/> 
      <Button label={'.'}/> 
      <Button label={'/'}/><br/> 
   
      <Button label={'7'}/> 
      <Button label={'8'}/> 
      <Button label={'9'}/> 
      <Button label={'*'}/><br/>>
    
      <Button label={'4'}/> 
      <Button label={'5'}/> 
      <Button label={'6'}/> 
      <Button label={'-'}/><br/> 
    
      <Button label={'1'}/> 
      <Button label={'2'}/> 
      <Button label={'3'}/> 
      <Button label={'+'}/> 
    </div> 
    <div> 
      <Button label={'0'}/> 
      <Button label={'='}/> 
    </div> 
    </div> 
    </div> 
    ); 
  } 


    handleClick(event){ 
    const value = event.target.value; 
   
    switch (value) { 
      case '=': { 
   
        if (this.state.question!=='') 
        { 
            var ans=''; 
              try
                { 
                    ans = eval(this.state.question); 
                } 
                catch(err) 
                { 
                    this.setState({answer: "Math Error"}); 
                } 
                if (ans===undefined) 
                    this.setState({answer: "Math Error"}); 
   
            
                else
                    this.setState({ answer: ans , question: ''}); 
                break; 
            } 
      } 
      case 'Clear': { 
   
        this.setState({ question: '', answer: '' }); 
        break; 
      } 
   
      case 'Delete': { 
        var str = this.state.question; 
          str = str.substr(0,str.length-1); 
          this.setState({question: str}); 
          break; 
      } 
   
    default: { 
   
        this.setState({ question: this.state.question += value}) 
        break; 
      } 
    } 
  } 
} 

export default Calculator; 