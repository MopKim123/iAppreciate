// import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import axios from 'axios';
import png1 from './badges/1.png'
import png2 from './badges/2.png'
import png3 from './badges/3.png'
import png4 from './badges/4.png'
import png5 from './badges/5.png'
import png6 from './badges/6.png'
import png7 from './badges/7.png'
import png8 from './badges/8.png'
import png9 from './badges/9.png'
import png10 from './badges/10.png'
import png11 from './badges/11.png'
import png12 from './badges/12.png'
import png13 from './badges/13.png'
import png14 from './badges/14.png'
import png15 from './badges/15.png'
import png16 from './badges/16.png'
import png17 from './badges/17.png'
import png18 from './badges/18.png'
import png19 from './badges/19.png' 

function App() {
  
  // State variables to store form data
  const [senderName, setSenderName] = useState('');
  const [senderEmail, setSenderEmail] = useState('');
  const [receiverName, setReceiverName] = useState('');
  const [receiverEmail, setReceiverEmail] = useState('');
  const [selectedImage, setSelectedImage] = useState('');
  const [message, setMessage] = useState('');



  // Function to handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();
    var imageLink

    switch(selectedImage){
      case "1":
        imageLink = "https://i.pinimg.com/736x/db/d8/64/dbd86409910d910ce353ffc9d1971af0.jpg"
        break;
      case "2":
        imageLink = "https://i.pinimg.com/736x/b3/e9/30/b3e930d97e4106c4a97fbacc7ffd9f0d.jpg"
        break;
      case "3":
        imageLink = "https://i.pinimg.com/736x/9f/c0/98/9fc09870b226f7860ac137a1e47321b2.jpg"
        break;
      case "4":
        imageLink = "https://i.pinimg.com/736x/b0/ee/23/b0ee23fd8a751564dde84f1ad042cf52.jpg"
        break;
      case "5":
        imageLink = "https://i.pinimg.com/736x/0f/55/f7/0f55f793db806178f7151591fc5306fa.jpg"
        break;
      case "6":
        imageLink = "https://i.pinimg.com/736x/7b/c2/5f/7bc25f384707ef6701296f417764a4a4.jpg"
        break;
      case "7":
        imageLink = "https://i.pinimg.com/736x/37/22/35/37223519af467f9e8f628c43c86cedf6.jpg"
        break;
      case "8":
        imageLink = "https://i.pinimg.com/736x/22/9b/71/229b7116bac7423f9d0c4e3b1ffa9165.jpg"
        break;
      case "9":
        imageLink = "https://i.pinimg.com/736x/2d/7c/f0/2d7cf02cfc13d42912d222783d7de03f.jpg"
        break;
      case "10":
        imageLink = "https://i.pinimg.com/736x/79/3b/74/793b7479e04456490ea33607566e27a1.jpg"
        break;
      case "11":
        imageLink = "https://i.pinimg.com/736x/d4/12/01/d4120180553df1c82825926ec3c1126d.jpg"
        break;
      case "12":
        imageLink = "https://i.pinimg.com/736x/fd/30/43/fd3043530501fa3c19d507f5c481dc83.jpg"
        break;
      case "13":
        imageLink = "https://i.pinimg.com/736x/86/e9/1d/86e91dc7fc25cd47d6813eba6ca45d0a.jpg"
        break;
      case "14":
        imageLink = "https://i.pinimg.com/736x/8d/08/cf/8d08cfbaacd3fdd53a12e42f2a1d92aa.jpg"
        break;
      case "15":
        imageLink = "https://i.pinimg.com/736x/3f/b0/00/3fb00052d582a6e222651d24c6e5d87e.jpg"
        break;
      case "16":
        imageLink = "https://i.pinimg.com/736x/58/42/b9/5842b9818f2072a8b3974dae817880aa.jpg"
        break;
      case "17":
        imageLink = "https://i.pinimg.com/736x/24/50/6e/24506eecd78e35382d3ba922821c3175.jpg"
        break;
      case "18":
        imageLink = "https://i.pinimg.com/736x/ef/4e/1b/ef4e1b53fdafe31c6b091ef33808271f.jpg"
        break;
      case "19":
        imageLink = "https://i.pinimg.com/736x/e0/36/52/e0365283c750b0db46c272bed8f10d1d.jpg"
        break; 
    }

    const formData = {
      sender_name: senderName,
      sender_email: senderEmail,
      receiver_name: receiverName,
      receiver_email: receiverEmail,
      message: message,
      image: imageLink,
      // attachment: {
      //   name: 'test2.jpeg', // File name
      //   data: selectedImage, // Image data (Base64-encoded string)
      //   type: 'image/jpeg', // Image MIME type 
      //   cid: 'image1', // Content ID for referencing in email template
      //   encoded: true
      // },
      // Add more fields as needed
    };

    console.log()

    // const handleSubmit = async (e) => {
    //   e.preventDefault();

      try {
          const response = await axios.post('https://pcc223-trinidad.000webhostapp.com/Innodata/insert.php', {
              senderName,
              senderEmail,
              receiverName,
              receiverEmail,
              message,
              imageLink,
          });
          console.log(response.data); // Log the response from the server
      } catch (error) {
          console.error('Error inserting data:', error);
      }
  // };

  // try {
  //   const response = await fetch('https://pcc223-trinidad.000webhostapp.com/Innodata/insert.php', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify({
  //       senderName,
  //       senderEmail,
  //       receiverName,
  //       receiverEmail,
  //       message,
  //       imageLink,
  //     }),
  //   });
  
  //   if (!response.ok) {
  //     throw new Error('Failed to insert data');
  //   }
  
  //   const responseData = await response.json();
  //   console.log(responseData); // Log the response from the server
  // } catch (error) {
  //   console.error('Error inserting data:', error);
  // }


    // emailjs.send('service_64t7o9j', 'template_wk5zble', formData, 'UapKvKlcMOVJTgbLy')
    //   .then((result) => {
    //     console.log('Email sent successfully:', result.text);
    //   }, (error) => {
    //     console.error('Email sending failed:', error.text);
    //   });
  };

  // Function to handle image selection
  const handleImageChange = (event) => {
    setSelectedImage(event.target.value);
  };

  return (
    <form onSubmit={handleSubmit} className="gradient-background">
      <div  className="form">
        <div  className="field"> {/* Sender name */}
          <label htmlFor="senderName" 
            className="label">Sender's Name: </label> 
          <input
            type="text"
            id="senderName"
            className="input"
            value={senderName}
            onChange={(event) => setSenderName(event.target.value)}
            required
          />
        </div>
        <div  className="field"> {/* Sender email */}
          <label htmlFor="senderEmail">Sender's Email: </label>
          <input
            type="email"
            id="senderEmail"
            className="input"
            value={senderEmail}
            onChange={(event) => setSenderEmail(event.target.value)}
            required
          />
        </div>
        <div  className="field"> {/* Employee name */}
          <label htmlFor="receiverName">Employee's Name: </label>
          <input
            type="text"
            id="receiverName"
            className="input"
            value={receiverName}
            onChange={(event) => setReceiverName(event.target.value)}
            required
          />
        </div>
        <div  className="field"> {/* Employee email */}
          <label htmlFor="receiverEmail">Employee's Email: </label>
          <input
            type="email"
            id="receiverEmail"
            className="input"
            value={receiverEmail}
            onChange={(event) => setReceiverEmail(event.target.value)}
            required
          />
        </div>
        <div  className="field">
          <p>Select Image:</p>
          <div className='image-list'> 
            <label>
              <input
                type="radio" 
                value="1"
                checked={selectedImage === '1'}
                onChange={handleImageChange}
              />
              <img src={png1} alt="1.png" className='image' />
            </label> 
            <label>
              <input
                type="radio" 
                value="2"
                checked={selectedImage === '2'}
                onChange={handleImageChange}
              />
              <img src={png2} alt="2.png" className='image' />
            </label> 
            <label>
              <input
                type="radio" 
                value="3"
                checked={selectedImage === '3'}
                onChange={handleImageChange}
              />
              <img src={png3} alt="3.png" className='image' />
            </label> 
            <label>
              <input
                type="radio" 
                value="4"
                checked={selectedImage === '4'}
                onChange={handleImageChange}
              />
              <img src={png4} alt="4.png" className='image' />
            </label> 
            <label>
              <input
                type="radio" 
                value="5"
                checked={selectedImage === '5'}
                onChange={handleImageChange}
              />
              <img src={png5} alt="5.png" className='image' />
            </label> 
            <label>
              <input
                type="radio" 
                value="6"
                checked={selectedImage === '6'}
                onChange={handleImageChange}
              />
              <img src={png6} alt="6.png" className='image' />
            </label> 
            <label>
              <input
                type="radio" 
                value="7"
                checked={selectedImage === '7'}
                onChange={handleImageChange}
              />
              <img src={png7} alt="7.png" className='image' />
            </label> 
            <label>
              <input
                type="radio" 
                value="8"
                checked={selectedImage === '8'}
                onChange={handleImageChange}
              />
              <img src={png8} alt="8.png" className='image' />
            </label> 
            <label>
              <input
                type="radio" 
                value="9"
                checked={selectedImage === '9'}
                onChange={handleImageChange}
              />
              <img src={png9} alt="9.png" className='image' />
            </label> 
            <label>
              <input
                type="radio" 
                value="10"
                checked={selectedImage === '10'}
                onChange={handleImageChange}
              />
              <img src={png10} alt="10.png" className='image' />
            </label> 
            <label>
              <input
                type="radio" 
                value="11"
                checked={selectedImage === '11'}
                onChange={handleImageChange}
              />
              <img src={png11} alt="11.png" className='image' />
            </label> 
            <label>
              <input
                type="radio" 
                value="12"
                checked={selectedImage === '12'}
                onChange={handleImageChange}
              />
              <img src={png12} alt="12.png" className='image' />
            </label> 
            <label>
              <input
                type="radio" 
                value="13"
                checked={selectedImage === '13'}
                onChange={handleImageChange}
              />
              <img src={png13} alt="13.png" className='image' />
            </label> 
            <label>
              <input
                type="radio" 
                value="14"
                checked={selectedImage === '14'}
                onChange={handleImageChange}
              />
              <img src={png14} alt="14.png" className='image' />
            </label> 
            <label>
              <input
                type="radio" 
                value="15"
                checked={selectedImage === '15'}
                onChange={handleImageChange}
              />
              <img src={png15} alt="15.png" className='image' />
            </label> 
            <label>
              <input
                type="radio" 
                value="16"
                checked={selectedImage === '16'}
                onChange={handleImageChange}
              />
              <img src={png16} alt="16.png" className='image' />
            </label> 
            <label>
              <input
                type="radio" 
                value="17"
                checked={selectedImage === '17'}
                onChange={handleImageChange}
              />
              <img src={png17} alt="17.png" className='image' />
            </label> 
            <label>
              <input
                type="radio" 
                value="18"
                checked={selectedImage === '18'}
                onChange={handleImageChange}
              />
              <img src={png18} alt="18.png" className='image' />
            </label> 
            <label>
              <input
                type="radio" 
                value="19"
                checked={selectedImage === '19'}
                onChange={handleImageChange}
              />
              <img src={png19} alt="19.png" className='image' />
            </label> 
            {/* Add more images as needed */}
          </div> 
        </div>
        <div className="field"> {/* Messages */}
          <label htmlFor="message">Message: </label>
          <input
            type="text"
            id="message"
            className="input"
            value={message}
            onChange={(event) => setMessage(event.target.value)}
            required
          />
        </div>
        <button type="submit">Send Email</button>
      </div>
    </form>
  );
}

export default App;
