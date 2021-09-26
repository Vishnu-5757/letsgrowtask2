import React from 'react';
import Card from './Card';
import '../styles.css';


const CardList = ({robots})=>{
    return(
            <div className='client-wrapper'>
                {
                  //displays all the card by calling the card component and passing all the values
                    robots.map((user, i) => {
                        return(
                                    <Card
                                    key={i}
                                    id={robots[i].id}
                                    name={robots[i].first_name}
                                    lname={robots[i].last_name}
                                    email={robots[i].email}
                                    />
                            );
                    })
                }
                <p className='copy'style={{  padding:'5px 0px',height: '30px', color: 'white' }} ></p>
            </div>
        );
}

export default CardList;