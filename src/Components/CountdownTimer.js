import React,{ useEffect, useRef, useState} from 'react';

import styled, { css } from 'styled-components';


const Section=styled.div``;

const P=styled.div`
font-style: italic;
font-size: 2em;
color: #FEDE17;

`;





const SectionWrapper=styled.div`
position: relative;
bottom: -100vh;
border:2px solid #FEDE17;
border-radius: 10px;
display: grid;
grid-template-columns: repeat(7,1fr);
padding: 1.5em;
text-align: center;
width: 360px;
top: 50vh;
left: 70px;
 @media screen and (max-width: 480px){
    margin-left: 2em;
    margin-right: 2em;
    padding: 1em;
    width: 275px;
} 
`;

const CountdownTimer = () => {
    const [timerDay,SetTimerDay]=useState('00');
    const [timerHours,SetTimerHours]=useState('00');
    const [timerMinutes,SetTimerMinutes]=useState('00');
    const [timerSeconds,SetTimerSeconds]=useState('00');

    let interval =useRef();

    const startTimer = () =>{
        
          const countDownDate =new Date ('June 7,2021 00:00:00').getTime();
       
       

        interval =setInterval(()=>{
            const now =new Date().getTime();
            const distance=countDownDate-now;

            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor(distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60 ));
            const minutes = Math.floor(distance % (1000 * 60 * 60 ) / (1000 * 60));
            const seconds =Math.floor(distance % (1000 * 60) / (1000));



            if(distance < 0){
                clearInterval(interval.current);
            }
            else{
                SetTimerDay(days);
                SetTimerHours(hours);
                SetTimerMinutes(minutes);
                SetTimerSeconds(seconds);
            }

        },1000);
    };

    useEffect(() => {
        startTimer();
        return () => {
            clearInterval(interval.current);
        };
    });
    return (
        <SectionWrapper>
                
        <Section>
            <P>
            {timerDay}
            </P>
            <p>
            Days
            </p>
        </Section>
        <P>:</P>
        <Section>
            <P>
            {timerHours}
            </P>
            <p>
            Hours
            </p>
        </Section>
        <P>:</P>
        <Section>
            <P>
            {timerMinutes}
            </P>
            <p>
            Minutes
            </p>
            </Section>
            <P>:</P>
        <Section>
            <P>
            {timerSeconds}
            </P>
            <p>
            Seconds
            </p>
        </Section>
    </SectionWrapper>
    )
}

export default CountdownTimer
