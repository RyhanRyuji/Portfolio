import React from 'react';
import './Description.css'

function Description(){
    return(
        <div className='description'>
           
            Hello, my name is<br/>  <span className='floating'>Al Ryhan ABI</span>,
            
             <br/>

           I am a Computer Scientist specialised in full-stack web developer.


          <br/> <button className='button'><a href='mailto: ryhanwahid@gmail.com'>Contact Me</a></button>
        </div>
    );
}

export default Description;