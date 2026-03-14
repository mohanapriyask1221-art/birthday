import { useState, useEffect, useRef } from 'react';
import './App.css';
import cakeImage from './football-cake-real.png';
import backgroundImage from './download.jpg';
import stadiumImage from './football-stadium.png';
import letter1Image from './letter1.jpeg';
import letter2Image from './letter2.jpeg';
import poem1Image from './poem1.jpeg';
import poem2Image from './poem2.jpeg';
import poem3Image from './poem3.jpeg';
import song1 from './song1.mp3';
import girlUniformImage from './her-uniform.png';
import boyUniformImage from './him-uniform.png';
import autoRideImage from './auto-ride.png';
import himAutoImage from './him-auto.png';
import chat1Image from './chat1.png';
import bikeRideImage from './first-bike-ride.png';
import fruitbaeImage from './fruitbae-roll.png';
import coffeeImage from './first-coffee.png';
import firstStoryImage from './first-story.png';
import chaatImage from './the cute chaat thing.png';
import nonDateImage from './our-first-non-date.png';

function HomePage({ onNavigate, onCustomize, onCustomize2, onCustomize3, onCustomize5 }) {
  const [showMessage, setShowMessage] = useState(false);
  const [currentMessage, setCurrentMessage] = useState(0);

  const loveMessages = [
    "You are MY SUNSHINE! ☀️",
    "You are the ANSWER FOR ALL THE QUESTIONS I EVER HAD! 💕",
    "You OWN MY SOUL! ❤️",
    "My life is as BEAUTIFUL AS YOU AFTER WE MET! 💖",
    "YOU ARE ALL I WANT NOW AND FOREVER! 💘"
  ];

  const handleMoonClick = () => {
    setCurrentMessage(0);
    setShowMessage(true);
  };

  const handleNextMessage = (e) => {
    e.stopPropagation();
    if (currentMessage < loveMessages.length - 1) {
      setCurrentMessage(currentMessage + 1);
    }
  };

  const handleClose = (e) => {
    e.stopPropagation();
    setShowMessage(false);
  };

  return (
    <div className="birthday-container">
      <div className="night-sky">
        <div className="stars"></div>
        <div className="moon" onClick={handleMoonClick} style={{ cursor: 'pointer' }}></div>
        <div className="mountains mountains-back"></div>
        <div className="mountains mountains-front"></div>
      </div>
      
      {showMessage && (
        <div className="love-message" onClick={handleClose}>
          <p>{loveMessages[currentMessage]}</p>
          <span className="message-hint" onClick={currentMessage < loveMessages.length - 1 ? handleNextMessage : handleClose}>
            {currentMessage < loveMessages.length - 1 ? "Tap to see next 💕" : "Click to close 💕"}
          </span>
        </div>
      )}
      
      <div className="moon-hint" onClick={handleMoonClick}>
        Click the moon 🌕
      </div>
      
      <button className="cake-toggle-btn" onClick={onNavigate}>
        🎂
      </button>
      
      <button className="customize-btn" onClick={onCustomize}>
        ⚽
      </button>
      
      <button className="top-left-btn" onClick={onCustomize2}>
        📬
      </button>

      <button className="camera-btn" onClick={onCustomize5}>
        📷
      </button>

      <button className="new-customize-btn" onClick={onCustomize3}>
        🎁
      </button>
    </div>
  );
}

function CustomizePage({ onNavigate }) {
  const [countdown, setCountdown] = useState(5);
  const [showWish, setShowWish] = useState(false);

  useEffect(() => {
    if (countdown > 0) {
      const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
      return () => clearTimeout(timer);
    } else {
      setShowWish(true);
    }
  }, [countdown]);

  const quotes = [
    "May your day be as beautiful as you are!",
    "Here's to another year of amazing memories!",
    "Wishing you endless happiness!",
    "May all your dreams come true today!",
    "You deserve all the love in the world!",
    "Hope your birthday is as special as you are!",
    "Sending you all my love today!",
    "You are my greatest gift!"
  ];

  const emojis = ["❤️", "💕", "💖", "💗", "💘", "💝", "✨", "🌟", "⭐", "🍀", "🌈", "🦋", "🌸", "🌺", "💐", "🎉", "🎊", "🥳", "🎁", "🎂"];

  return (
    <div className="party-container collage-bg" style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className="collage-layer">
        {[...Array(25)].map((_, i) => (
          <div key={i} className="collage-emoji" style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${4 + Math.random() * 3}s`,
            fontSize: `${1.5 + Math.random() * 1.5}rem`,
            opacity: 0.3 + Math.random() * 0.4
          }}>{emojis[Math.floor(Math.random() * emojis.length)]}</div>
        ))}
      </div>

      <div className="quotes-layer">
        <div className="floating-quote" style={{ left: '3%', top: '15%' }}>May your day be as beautiful as you are!</div>
        <div className="floating-quote" style={{ left: '70%', top: '8%' }}>Here's to another year of amazing memories!</div>
        <div className="floating-quote" style={{ left: '5%', top: '70%' }}>Wishing you endless happiness!</div>
        <div className="floating-quote" style={{ left: '72%', top: '65%' }}>May all your dreams come true today!</div>
        <div className="floating-quote" style={{ left: '8%', top: '42%' }}>You deserve all the love in the world!</div>
        <div className="floating-quote" style={{ left: '68%', top: '40%' }}>Hope your birthday is as special as you are!</div>
        <div className="floating-quote" style={{ left: '35%', top: '5%' }}>Sending you all my love today!</div>
        <div className="floating-quote" style={{ left: '38%', top: '78%' }}>You are my greatest gift!</div>
      </div>

      <div className="confetti-container">
        {[...Array(40)].map((_, i) => (
          <div key={i} className="confetti" style={{
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 4}s`,
            animationDuration: `${3 + Math.random() * 2}s`,
            backgroundColor: ['#ff6b9d', '#ff8fab', '#ffb3c6', '#ffc2d1', '#ffdde6', '#ff9a9e', '#fecfef', '#ffecd2'][Math.floor(Math.random() * 8)]
          }}></div>
        ))}
      </div>
      
      <div className="balloon-container">
        <div className="balloon b1">🎈</div>
        <div className="balloon b2">🎈</div>
        <div className="balloon b3">🎈</div>
        <div className="balloon b4">🎈</div>
        <div className="balloon b5">🎈</div>
        <div className="balloon b6">❤️</div>
        <div className="balloon b7">💕</div>
        <div className="balloon b8">💖</div>
        <div className="balloon b9">💗</div>
        <div className="balloon b10">🎈</div>
      </div>

      <div className="hearts-container">
        {[...Array(20)].map((_, i) => (
          <div key={i} className="heart" style={{
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 3}s`,
            animationDuration: `${3 + Math.random() * 2}s`
          }}>❤️</div>
        ))}
      </div>
      
      <h2 className="party-title">Happiest Birthday My World 💕</h2>
      
      <div className="cake-preview">
        <div className="cake-glow"></div>
        <img src={cakeImage} alt="Birthday Cake" className="cake-image" />
      </div>
      
      {showWish ? (
        <div className="wish-container">
          <p className="wish-message">Make a wish! 🎂</p>
          <p className="wish-subtitle">May all your dreams come true! ✨</p>
        </div>
      ) : (
        <p className="countdown-text">Blow out the candles in {countdown}...</p>
      )}
      
      <button className="cake-toggle-btn" onClick={onNavigate}>
        🎂
      </button>
    </div>
  );
}

function CustomizePage2({ onNavigate }) {
  return (
    <div className="party-container collage-bg" style={{ backgroundImage: `url(${stadiumImage})`, backgroundSize: '100% 100%', backgroundRepeat: 'no-repeat' }}>
      <button className="top-left-btn" onClick={onNavigate}>
        ⚽
      </button>
    </div>
  );
}

function CustomizePage3({ onNavigate }) {
  const [showLetters, setShowLetters] = useState(false);
  const [selectedLetter, setSelectedLetter] = useState(null);

  const loveLetters = [
    { title: "Letter 1", isImage: true, image: letter1Image },
    { title: "Letter 2", isImage: true, image: letter2Image },
    { title: "Poem 1", isImage: true, image: poem1Image },
    { title: "Poem 2", isImage: true, image: poem2Image },
    { title: "Poem 3", isImage: true, image: poem3Image },
    { title: "My Answer", text: "You are the ANSWER FOR ALL THE QUESTIONS I EVER HAD! 💕\nEvery doubt, every question - you are the answer." },
    { title: "My Soul", text: "You OWN MY SOUL! ❤️\nMy heart, my spirit - all belong to you." },
    { title: "My Beautiful Life", text: "My life is as BEAUTIFUL AS YOU AFTER WE MET! 💖\nEvery moment since then has been magical." },
    { title: "My All", text: "YOU ARE ALL I WANT NOW AND FOREVER! 💘\nToday, tomorrow, always - just you." }
  ];

  return (
    <div className="party-container collage-bg" style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <button className="top-left-btn" onClick={onNavigate}>
        📬
      </button>
      
      <div className="mailbox-container" onClick={() => setShowLetters(!showLetters)}>
        <div className="mailbox">📬</div>
        <div className="mailbox-label">Click to open mail</div>
      </div>

      {showLetters && (
        <div className="letters-overlay">
          <div className="letters-box">
            <h2>Your Love Letters 💕</h2>
            <div className="letters-list">
              {loveLetters.map((letter, index) => (
                <div 
                  key={index} 
                  className="letter-envelope"
                  onClick={() => setSelectedLetter(letter)}
                >
                  💌 Letter {index + 1}
                </div>
              ))}
            </div>
            <button className="close-letters" onClick={() => setShowLetters(false)}>Close ✕</button>
          </div>
        </div>
      )}

      {selectedLetter && (
        <div className="letter-modal" onClick={() => setSelectedLetter(null)}>
          <div className="letter-content">
            {selectedLetter.isImage ? (
              <img src={selectedLetter.image} alt="Letter" className="letter-image" />
            ) : (
              <>
                <h3>{selectedLetter.title}</h3>
                <p>{selectedLetter.text}</p>
              </>
            )}
            <button className="close-letter-btn" onClick={() => setSelectedLetter(null)}>Close ✕</button>
          </div>
        </div>
      )}
    </div>
  );
}

function CameraPage({ onNavigate }) {
  return (
    <div className="camera-page" style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <button className="mid-left-btn" onClick={onNavigate}>
        📷
      </button>
      
      <div className="camera-content">
        <h1 className="camera-title">Camera 📷</h1>
        <p>Camera page coming soon...</p>
      </div>
    </div>
  );
}

function LoveStoryPage({ onNavigate }) {
  const [scene, setScene] = useState(0);

  const scenes = [
    { 
      text: "", 
      boyPos: "left: 30%; opacity: 0", 
      girlPos: "right: 30%; opacity: 0" 
    },
    { 
      text: "This is Vibheeshan", 
      boyPos: "left: 30%; opacity: 1", 
      girlPos: "right: 30%; opacity: 0" 
    },
    { 
      text: "This is Mohanapriya", 
      boyPos: "left: 30%; opacity: 0", 
      girlPos: "right: 30%; opacity: 1" 
    },
    { 
      text: "They are destined to meet in their college. Surprisingly, they have a mutual friend, Sharmi. Now, they both know each other. They say hi and bye and smile when they get to see each other.", 
      boyPos: "left: 30%; opacity: 1", 
      girlPos: "right: 30%; opacity: 1" 
    },
    { 
      text: "One day Mohana looks at Vibhee and finds his smile cute. But, since she has no idea in falling for anyone it was one second's thought and she continues with her work.",
      thinkText: "He looks cute when he smiles. Mhmmm. ",
      boyPos: "left: 30%; opacity: 1", 
      girlPos: "right: 30%; opacity: 1" 
    },
    { 
      text: "Mohana always goes to her hostel by auto. And, expectedly or unexpectedly, Vibheeshan came to the same auto to reach the bustand. Once they saw each other and smiled.",
      boyPos: "left: 30%; opacity: 0", 
      girlPos: "right: 30%; opacity: 0",
      showAuto: true 
    },
    { 
      text: "Vibhee is so tall that the auto wasn't comfortable for him to sit. Mohana noticed it and smiled. Fortunately or unfortunately, 2 more people entered the auto and sat next to Vibhee. Now, Vibhee was dying inside and they again looked at each other and he smiled with embarrassment. Mohana noticed that he could not sit at all and made some space next to the third girl and asked Vibhee to sit next to the girl. Vibhee was so happy and he smiled with a whispering thank you!",
      boyPos: "left: 30%; opacity: 0", 
      girlPos: "right: 30%; opacity: 0",
      showHimAuto: true 
    },
    { 
      text: "In the meanwhile, Mohana introduced Vibhee to her bestfriend, Hema. And Vibhee conveys his thanks to Mohana through Sharmi. And Mohana sends an instagram friend request to Vibhee and he accepts. Mohana and Hema were stalking his account and accidentally, Mohana sends a sticker as a DM and quickly deletes it. However, Vibhee saw the text and texted her 'naa paathutten'. Mohana gets embarrassed and replies and the conversation continues.",
      boyPos: "left: 30%; opacity: 1", 
      girlPos: "right: 30%; opacity: 1",
      showChat: true 
    },
    { 
      text: "Everything was usual, they were good friends, their vibe matched. And one day Mohana got bitten by a dog. She came back to college. She asked Vibhee whether he could go with her for the second dose. Vibhee said yes and that was the first time she went on a bike with him.", 
      boyPos: "left: 30%; opacity: 0", 
      girlPos: "right: 30%; opacity: 0",
      showBikeRide: true 
    },
    { 
      text: "After getting vaccined, they went to Fruitbae. There, they got to talk a lot in person. They laughed out loud. It was a good day. The same night, Mohana was saying something to Vibhee. Though she did not convey what she intended to say every single conversation they had made them more closer.", 
      boyPos: "left: 30%; opacity: 0", 
      girlPos: "right: 30%; opacity: 0",
      showFruitbae: true 
    },
    { 
      text: "They eventually got close. Like, going for a coffee everyday, late night calls, chats and what not!", 
      boyPos: "left: 30%; opacity: 0", 
      girlPos: "right: 30%; opacity: 0",
      showCoffee: true 
    },
    { 
      text: "Coffee in cothas became a routine. On another random day, Mohana had to take a blood test and she asked Vibhee if he could come and he said Dannu will come with you. But surprisingly, Vibhee came to pick her to the clinic. Later on their way back Vibhee asked if they could go Starbucks for a coffee and she said yes. They were chatting about their type in love and it went on. Later, Mohana was upset for a reason but after a conversation with Vibhee everything felt lighter. And guess what! Vibhee posted Mohana in his story for the first time and it made her day.", 
      boyPos: "left: 30%; opacity: 0", 
      girlPos: "right: 30%; opacity: 0",
      showFirstStory: true 
    },
    { 
      text: "On a random day, Mohana broke her spex and she asked Vibhee if he could go with her to lenskart and then to Cothas. He came to pick her to the shop. He saw her in the green kurti and said 'AZHAGA IRUKKINGA GUYS' and she smiled. The day was as beautiful as them. He was gazing at her in the mirror and what happened in Cothas is magical. Their eyes met and so did she hold his hand. And finally she rested her legs on his leg. They knew something is unusual and this is so special. Later, after the coffee they decided to go have chaats, Vibhee was ready to take the bike but, Mohana asked if they could walk to the shop. And the day got much special. She fed him and he was trying to fix her spex and it felt like 'LOVE IS IN THE AIR'.", 
      boyPos: "left: 30%; opacity: 0", 
      girlPos: "right: 30%; opacity: 0",
      showChaat: true 
    },
    {
      text: `She knew it was a good day for her and asked Vibhee 'How was your day?' on their way back. He asked if it was a date. She said 'IDK, what a date is you tell me'. And he told her what a date is. She asked 'Okay, then would you name this day a date?' and he meant 'yeah, konjam.' Mohana then said, "We will name it our FIRST NON-DATE!" And they both smiled. And that's how their beautiful love story began. They crossed a lot of difficulties and yet, love each other more and more. This is a never-ending fairytale of MOHANA and VIBHEE!`,
      boyPos: "left: 30%; opacity: 0",
      girlPos: "right: 30%; opacity: 0",
      showNonDate: true
    }
  ];

  const handleNext = () => {
    setScene((prev) => (prev < scenes.length - 1 ? prev + 1 : 0));
  };

  const handlePrev = () => {
    setScene((prev) => (prev > 0 ? prev - 1 : scenes.length - 1));
  };

  const currentScene = scenes[scene];

  return (
    <div className="story-container" style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <button className="mid-right-btn" onClick={onNavigate}>
        🎁
      </button>
      
      {scene === 0 && (
        <div className="story-title-center">
          <p>This is a wrap up of our LOVE STORY</p>
        </div>
      )}
      
      <div className="story-scene">
        <div className="character boy-character" style={{ 
          position: 'absolute', 
          transition: 'all 1s ease',
          ...currentScene.boyPos.split(';').reduce((acc, curr) => {
            const [key, val] = curr.split(':');
            if (key && val) acc[key.trim()] = val.trim();
            return acc;
          }, {})
        }}>
          <img src={boyUniformImage} alt="Boy" className="character-img" />
        </div>
        
        <div className="character girl-character" style={{ 
          position: 'absolute', 
          transition: 'all 1s ease',
          ...currentScene.girlPos.split(';').reduce((acc, curr) => {
            const [key, val] = curr.split(':');
            if (key && val) acc[key.trim()] = val.trim();
            return acc;
          }, {})
        }}>
          <img src={girlUniformImage} alt="Girl" className="character-img" />
        </div>
        
        {currentScene.showAuto && (
          <div className="auto-ride-container">
            <img src={autoRideImage} alt="Auto Ride" className="auto-ride-img" />
          </div>
        )}
        
        {currentScene.showHimAuto && (
          <div className="auto-ride-container">
            <img src={himAutoImage} alt="Him in Auto" className="auto-ride-img" />
          </div>
        )}
        
        {currentScene.showChat && (
          <div className="chat-container">
            <img src={chat1Image} alt="Chat" className="chat-img" />
          </div>
        )}
        
        {currentScene.showBikeRide && (
          <div className="bike-ride-container">
            <img src={bikeRideImage} alt="First Bike Ride" className="bike-ride-img" />
          </div>
        )}
        
        {currentScene.showFruitbae && (
          <div className="fruitbae-container">
            <img src={fruitbaeImage} alt="Fruitbae" className="fruitbae-img" />
          </div>
        )}
        
        {currentScene.showCoffee && (
          <div className="coffee-container">
            <img src={coffeeImage} alt="First Coffee" className="coffee-img" />
          </div>
        )}
        
        {currentScene.showFirstStory && (
          <div className="first-story-container">
            <img src={firstStoryImage} alt="First Story" className="first-story-img" />
          </div>
        )}

        {currentScene.showChaat && (
          <div className="chaat-container">
            <img src={chaatImage} alt="Chaat" className="chaat-img" />
          </div>
        )}

        {currentScene.showNonDate && (
          <div className="non-date-container">
            <img src={nonDateImage} alt="First Non Date" className="non-date-img" />
          </div>
        )}

        {currentScene.text && (
          <div className={scene === 12 || scene === 13 ? "story-narration-box-large" : "story-narration-box"}>
            <p>{currentScene.text}</p>
          </div>
        )}
        
        {currentScene.thinkText && (
          <div className="thinking-cloud">
            <p>{currentScene.thinkText}</p>
          </div>
        )}
        
        <button className="story-prev-btn" onClick={handlePrev}>
          ⬅️ Previous
        </button>
        
        <button className="story-next-btn" onClick={handleNext}>
          {scene === scenes.length - 1 ? "Restart 🔄" : "Next ➡️"}
        </button>
      </div>
    </div>
  );
}

function App() {
  const [showBirthday, setShowBirthday] = useState(false);
  const [showCustomize, setShowCustomize] = useState(false);
  const [showCustomize2, setShowCustomize2] = useState(false);
  const [showCustomize3, setShowCustomize3] = useState(false);
  const [showCustomize5, setShowCustomize5] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const toggleMusic = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <>
      <audio ref={audioRef} src={song1} loop />
      <button className={`music-btn ${isPlaying ? 'playing' : ''}`} onClick={toggleMusic}>
        <div className="music-box">
          <div className="music-box-lid"></div>
          <div className="music-box-body"></div>
          <span className="music-note">♪</span>
          <span className="music-note">♫</span>
          <span className="music-note">♬</span>
        </div>
      </button>
      {showBirthday ? (
        <CustomizePage onNavigate={() => setShowBirthday(false)} />
      ) : showCustomize ? (
        <CustomizePage2 onNavigate={() => setShowCustomize(false)} />
      ) : showCustomize2 ? (
        <CustomizePage3 onNavigate={() => setShowCustomize2(false)} />
      ) : showCustomize3 ? (
        <LoveStoryPage onNavigate={() => setShowCustomize3(false)} />
      ) : showCustomize5 ? (
        <CameraPage onNavigate={() => setShowCustomize5(false)} />
      ) : (
        <HomePage 
          onNavigate={() => setShowBirthday(true)} 
          onCustomize={() => setShowCustomize(true)}
          onCustomize2={() => setShowCustomize2(true)}
          onCustomize3={() => setShowCustomize3(true)}
          onCustomize5={() => setShowCustomize5(true)}
        />
      )}
    </>
  );
}

export default App;
