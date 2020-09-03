import React, {useState} from 'react';


function App() {
  const [phoneNumber,setPhoneNumber] = useState('')
  const [link, setLink] = useState(null)

  const makeAWhatsUpLink = () =>{
    setLink(`https://api.WhatsApp.com/send?phone=+972${phoneNumber}`);

  }

  return (
    <div> 
      <div>
        <label>Enter a Phone number</label>
        <input value={phoneNumber} onChange={(e)=> setPhoneNumber(e.target.value)}/>
        <button onClick={makeAWhatsUpLink}>Take me to whatsup</button>
      </div>
      <div>
        {link ? <a href={link}>{link}</a> : null}
      </div>
    </div>
  );
}

export default App;
