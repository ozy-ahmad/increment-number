import React, { Component } from 'react'
import styled from 'styled-components'

 class Increment extends Component {
     constructor(props) {
         super(props)
         this.state = {
             count: 0
         }
     }
     handleIncrement = () => this.setState({count: this.state.count + 1})
     handleDecrement = () => this.setState({count: this.state.count - 1})
     
     handleReset = () => this.setState({count: this.state.count = 0})
     
    render() {
        let content; 
                if (this.state.count < 0 ) {
                    window.alert('GABISA')
                    this.state.count = 0
                }
                else {
                    content = this.state.count
                }
        return (
            
                
                <Container>
                <Wrapper>
                <Button onClick={this.handleIncrement}>+</Button>
                <Input value={this.state.count}></Input>
                <Button onClick={this.handleDecrement}>-</Button>
                </Wrapper>
                <Button onClick={this.handleReset}>Reset</Button>
                </Container>
            
        )
    }
}
export default Increment

const Button = styled.button`
background-color: #80ac7b;
margin: 1em;
padding: 0.5em 2em;
border-radius: 5px; 
border: none`


const Input = styled.input`
type: text;
background-color: white;
border-style: line;
text-align: center;
padding: 5px 10px;
justify-content:space-between;
`

const Wrapper = styled.section`
display: flex;
flex-direction: row;
align-content: center;
`
const Container = styled.div`
text-align: center`


