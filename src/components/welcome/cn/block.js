import React from 'react';
const placeholder = `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`;
const Block = ({title='title', intro=`${placeholder}`, img='/histogram', action={msg:'check product', fnc:()=>console.log('action!')} }) => (<div className='block product'>
  <div className='wrapper'>
    <div className='child left'>
    <div className='title'>
      {title}
    </div>
    <div className='intro'>
      {intro}
    </div>
    {/* <div className='action' onClick={action.fnc}>
      {action.msg}
    </div> */}
    </div>
    <div className='child'>
    <img src={`assets/landing/${img}.png`}/>
    </div>
  </div>
</div>)

export default Block;