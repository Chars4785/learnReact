import React,{useRef} from 'react';
import CreateUser from './CreateUser.js';

function User({user,onRemove}){
  const {username, email,id} = user;

  return(
    <div>
      <b>{username}</b> <span>({email})</span>
      <button onClick={()=>onRemove(id)}>삭제</button>
      {/* <button onClick={onRemove(id)}>삭제</button> 
      이렇게 하면 안된다. 함수를 호출하는 것이 아니고 함수를 넣어줘야 한다.
    */}
    </div>
  );
}
function Example({users,onRemove}){

  return(
    <>
    <div>
      {
        users.map(
          (user,index) => 
          (<User 
            user={user}
            key={user.id}
            onRemove={onRemove} 
          />)
        )
        // map((user,index)) => index 는 최대한 사용 안하는게 좋다. 
        // 그럼 key 는 뭔가
      }
    </div>

    </>
  );
}


export default Example;