import React, {Component} from 'react'
import styled from 'styled-components'
import MyHead from './myHearderOne'
import styles from './myCss.module.css'

const Title = styled.h1
 `   
    color: purple;
    font-size: 80 px;
    `   
const Button = styled.button
` 
    background: black;
    font-size: 15px;
    color: #ffffff;
    padding: 12px 13px;
    border-radius: 10px;
    
    `

class Form extends Component {
    render() {
        return (
            <div>
                <h1 className={styles.green}>Un titre en vert</h1>
                <MyHead />
                <p>je suis rouge ou bleu</p>
              <Title>Commentaire 1</Title>
              <button className='btn btn-danger'>Valider</button>
              <Button>Valider 2</Button>
            </div>
          )
    }

}

export default Form