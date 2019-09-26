import React,{useRef,useState} from 'react';
import Example from './Ex/Example';
import './App.css';
import CreateUser from './Ex/CreateUser';

function App() {
  const [inputs,setInput]= useState({
    username:'',
    email:''
  })
  const {username,email} = inputs;
  const onChange = e =>{
    const {name, value} = e.target;
    setInput({
      ...inputs,
      [name]:value
    })
  }

  const onRemove = id =>{
    setUsers(users.filter(user => user.id !== id));
    // 안에 조건이 true 인 것만 새로운 배열을 만들어 준다.
  };

  const [users,setUsers] = useState([
    {
      id:1,
      username: 'lee1',
      email:'test@name'
    },
    {
      id:2,
      username: 'lee2',
      email:'test2@name'
    },
    {
      id:3,
      username: 'lee3',
      email:'test3@name'
    }
  ]);
  
  // push splice sort 를 사용하게 되면 배열을 한번 복사하고 사용해야 한다.
  // 배열의 불변을 유지하면서  spread
  // concat 은 여러 하나의 배열로 함쳐줍니다.
  // push 를 사용하게 되면 업데이트가 되지 않는다.

  const nextId = useRef(4);
  //useRef 4가 바뀐다고 컴퍼넌트가 리렌더링 되지 않는다.

  const onCreate =() =>{
    const user ={
      id:nextId.current,
      username,
      email,
    }
    //const user ={
    //   id:nextId.current,
    //   ...inputs
    // }
    //
    // setUsers([...users,user]);
    setUsers(users.concat(user));
    setInput({
      username:'',
      email:''
    })
    console.log(nextId.current);
    nextId.current += 1;
  }

  return (
    <>
      <CreateUser username={username} 
        email={email} 
        onChange={onChange} 
        onCreate={onCreate} 
      />
      <Example users={users}  onRemove={onRemove}> </Example>
    </>
  );
}

export default App;
