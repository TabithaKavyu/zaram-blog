import { useState } from 'react';

const Home = () => {
     const [name, setName] = useState('Maleek')
     const [age, setAge]  = useState(25);

    const handleClick = () => {
        setName('Milton');
        setAge(37);
    }
    
    return (  
        <div className="home">
            <h2>Homepage</h2>
            <p>{ name } is { age } years old</p>
            <button onClick={handleClick}>Click Me</button>
            
        </div>
    );
}
 
export default Home;