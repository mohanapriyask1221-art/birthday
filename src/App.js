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
import poem4Image from './poem4.jpeg';
import song1 from './song1.mp3';
import loveStorySong from './loveStorySong.mp3';
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
import vibheeAmmaImage from './vibhee-ammachi.png';
import years20Image from './20years.jpeg';
import vibheeVishaalImage from './vibhee-vishaal.jpeg';
import youAndIImage from './you-and-i.jpeg';
import ourFamilyImage from './our-family.jpeg';
import the3Image from './the3.jpeg';
import kuttyVibheeImage from './kutty-vibhee.jpeg';
import perfectImage from './perfect.jpeg';
import lilChampImage from './lil-champ.jpeg';
import samreImage from './samre.jpeg';
import storyTimeImage from './story-time.jpeg';
import twinningImage from './twinning.jpeg';
import bubblyVibheeImage from './bubbly-vibhee.jpeg';
import ourFirstSelfieImage from './our-first-selfie.jpeg';
import whatsappLaughingImage from './whatsapp-laughing.jpeg';
import theScooterImage from './the-scooter.jpeg';
import cutiesImage from './cuties.jpeg';
import myFavouriteGoalieImage from './my-favourite-goalie.jpeg';
import myBabeImage from './my-babe.jpeg';
import heroHaiHeroImage from './hero-hai-hero.jpeg';
import theTrioImage from './the-trio.jpeg';
import myManImage from './my-man.jpeg';
import akkasThangapullaImage from './akkas-thangapulla.jpeg';
import ourFavDayImage from './our-fav-day.jpeg';
import myFavCookImage from './my-fav-cook.jpeg';
import theIconicStareImage from './the-iconic-stare.jpeg';
import randomVibheeshanImage from './random-vibheeshan.jpeg';
import meWithHimImage from './me-with-him.jpeg';
import cutiePieImage from './cutie-pie.jpeg';
import ourFirstMovieImage from './our-first-movie.jpeg';
import broLookingAtMeImage from './bro-looking-at-me.jpeg';
import myFavImage from './my-fav.jpeg';
import myPookieImage from './my-pookie.jpeg';
import pookieVibheeshanNewImage from './pookie-vibheeshan-new.jpeg';
import idealLoveImage from './ideal-love.jpeg';
import cuteRonaldinhoImage from './cute-ronaldinho.jpeg';
import cutestImage from './cutest.jpeg';
import broFlexingImage from './bro-flexing.jpeg';
import vibheeSharmiImage from './vibhee-sharmi.jpeg';
import hisPeaceImage from './his-peace.jpeg';
import myPeaceImage from './my-peace.jpeg';
import myHomeImage from './my-home.jpeg';
import myLoveImage from './my-love.jpeg';
import myWorldImage from './my-world.jpeg';
import gangImage from './gang.jpeg';
import kaadhaleyVenaaDuoImage from './kaadhaley-venaa-duo.jpeg';

function HomePage({ onNavigate, onCustomize, onCustomize2, onCustomize3, onCustomize5, isPlaying }) {
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
        <div className="floating-quote" style={{ left: '5%', top: '12%' }}>May your day be as beautiful as you are!</div>
        <div className="floating-quote" style={{ left: '65%', top: '5%' }}>Here's to another year of amazing memories!</div>
        <div className="floating-quote" style={{ left: '20%', top: '35%' }}>Wishing you endless happiness!</div>
        <div className="floating-quote" style={{ left: '75%', top: '85%' }}>May all your dreams come true today!</div>
        <div className="floating-quote" style={{ left: '10%', top: '58%' }}>You deserve all the love in the world!</div>
        <div className="floating-quote" style={{ left: '55%', top: '52%' }}>Hope your birthday is as special as you are!</div>
        <div className="floating-quote" style={{ left: '25%', top: '80%' }}>Sending you all my love today!</div>
        <div className="floating-quote" style={{ left: '70%', top: '75%' }}>You are my greatest gift!</div>
        <div className="floating-quote" style={{ left: '50%', top: '92%', transform: 'translateX(-50%)' }}>To the love of my life, I wish this year brings you everything you deserve!</div>
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
        <span style={{ marginTop: '-2px', marginLeft: '-1px' }}>⚽</span>
      </button>
    </div>
  );
}

function CustomizePage3({ onNavigate }) {
  const [showLetters, setShowLetters] = useState(false);
  const [selectedLetter, setSelectedLetter] = useState(null);
  const [currentLetterIndex, setCurrentLetterIndex] = useState(0);

  const loveLetters = [
    { title: "Letter 1", isImage: true, image: letter1Image },
    { title: "Letter 2", isImage: true, image: letter2Image },
    { title: "Poem 1", isImage: true, image: poem1Image },
    { title: "Poem 2", isImage: true, image: poem2Image },
    { title: "Poem 3", isImage: true, image: poem3Image },
    { title: "Poem 4", isImage: true, image: poem4Image }
  ];

  const handleLetterClick = (index) => {
    setCurrentLetterIndex(index);
    setSelectedLetter(loveLetters[index]);
  };

  const handleNextLetter = () => {
    const nextIndex = (currentLetterIndex + 1) % loveLetters.length;
    setCurrentLetterIndex(nextIndex);
    setSelectedLetter(loveLetters[nextIndex]);
  };

  const handleCloseLetter = () => {
    setSelectedLetter(null);
  };

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
                  onClick={() => handleLetterClick(index)}
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
        <div className="letter-modal" onClick={handleCloseLetter}>
          <div className="letter-content letter-content-large">
            {selectedLetter.isImage ? (
              <img src={selectedLetter.image} alt="Letter" className="letter-image letter-image-large" />
            ) : (
              <>
                <h3>{selectedLetter.title}</h3>
                <p>{selectedLetter.text}</p>
              </>
            )}
            <div className="letter-buttons">
              <button className="close-letter-btn" onClick={handleCloseLetter}>Close ✕</button>
              <button className="next-letter-btn" onClick={(e) => { e.stopPropagation(); handleNextLetter(); }}>Next ➡️</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function CameraPage({ onNavigate }) {
  const [showImage, setShowImage] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const memories = [
    { image: samreImage, caption: "FAMILY!" },
    { image: vibheeAmmaImage, caption: "AMMACHI'S VIBHEE KUTTY! 💕" },
    { image: years20Image, caption: "HAVE I KNOWN YOU FOR 20 SECONDS OR 20 YEARS! 💕" },
    { image: vibheeVishaalImage, caption: "SURYA AND DEVARAJ! 💕" },
    { image: kaadhaleyVenaaDuoImage, caption: "THE PRETENDING TO BE KAADHALEY VENAA DUO! 💕" },
    { image: youAndIImage, caption: "YOU AND I BELONG TOGETHER! 💕" },
    { image: twinningImage, caption: "THE DUO! 💕" },
    { image: bubblyVibheeImage, caption: "BUBBLY VIBHEE! 💕" },
    { image: the3Image, caption: "" },
    { image: kuttyVibheeImage, caption: "KUTTY VIBHEE! 💕" },
    { image: perfectImage, caption: "PERFECT! 💕" },
    { image: lilChampImage, caption: "LITTLE CHAMP! 💕" },
    { image: ourFirstSelfieImage, caption: "OUR FIRST SELFIE! 💕" },
    { image: theScooterImage, caption: "THE SCOOTER HAD TO BE INCLUDED FOR ALL THE MEMORIES YOU HOLD! 🛵" },
    { image: whatsappLaughingImage, caption: "LAUGHING YOUR ASS OFF? 😂" },
    { image: cutiesImage, caption: "CUTIES! 💕" },
    { image: pookieVibheeshanNewImage, caption: "I WISH OUR COLLEGE LETS YOU GROW LONG HAIR 😭" },
    { image: myFavouriteGoalieImage, caption: "MY FAVOURITE GOALIE EVERRRR! 💕" },
    { image: storyTimeImage, caption: "THAT ENNA AACHU THERIYUMA FACE" },
    { image: myBabeImage, caption: "MY BABE! 💕" },
    { image: gangImage, caption: "A REASON FOR OUR MEET? 💕" },
    { image: heroHaiHeroImage, caption: "HERO HAI HEROO! 💕" },
    { image: theTrioImage, caption: "THE TRIO! 💕" },
    { image: myManImage, caption: "MY MAN! 💕" },
    { image: akkasThangapullaImage, caption: "AKKA'S THANGAPULLA! 💕" },
    { image: ourFavDayImage, caption: "OUR FAV DAY! 💕" },
    { image: myFavCookImage, caption: "MY FAV COOK! 💕" },
    { image: theIconicStareImage, caption: "THE ICONIC STARE! 💕" },
    { image: randomVibheeshanImage, caption: "ANDRE KANITHAAR VIBHEESHAN! 💕" },
    { image: meWithHimImage, caption: "ME WITH HIM! 💕" },
    { image: cutiePieImage, caption: "CUTIE PIE! 💕" },
    { image: ourFirstMovieImage, caption: "OUR FIRST MOVIE! 💕" },
    { image: broLookingAtMeImage, caption: "BRO LOOKING AT ME FROM THERE! 💕" },
    { image: myFavImage, caption: "ISN'T IT THE BEST! 💕" },
    { image: myPookieImage, caption: "MY POOKIE! 💕" },
    { image: idealLoveImage, caption: "BEST OF ALL! 💕" },
    { image: cuteRonaldinhoImage, caption: "CUTE RONALDINHO! 💕" },
    { image: cutestImage, caption: "CUTEST! 💕" },
    { image: broFlexingImage, caption: "BRO FLEXING HIS JAWLINE! 💕" },
    { image: vibheeSharmiImage, caption: "AWWW! 💕" },
    { image: hisPeaceImage, caption: "YOUR PEACE! 💕" },
    { image: myPeaceImage, caption: "MY PEACE! 💕" },
    { image: myHomeImage, caption: "MY HOME! 💕" },
    { image: myLoveImage, caption: "MY LOVE! 💕" },
    { image: myWorldImage, caption: "MY WORLD! 💕" },
    { image: ourFamilyImage, caption: "THIS IS HOW WE ARE GONNA END UP! 💕" }
  ];

  const handleNext = () => {
    if (currentIndex === memories.length - 1) {
      setShowImage(false);
    } else {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + memories.length) % memories.length);
  };

  return (
    <div className="camera-page" style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <button className="mid-left-btn" onClick={onNavigate}>
        📷
      </button>
      
      {!showImage ? (
        <div className="memories-archive" onClick={() => setShowImage(true)}>
          <h1 className="memories-title">MEMORIES ARCHIVE</h1>
          <p className="memories-hint">Tap to open 💕</p>
        </div>
      ) : (
        <div className="photo-viewer">
          <div className="photo-frame">
            <img src={memories[currentIndex].image} alt={`Memory ${currentIndex + 1}`} className="camera-photo" />
            <p className="photo-caption">{memories[currentIndex].caption}</p>
          </div>
          <div className="photo-nav-container">
            <button className="photo-nav prev-btn-photo" onClick={handlePrev}>
              ⬅️ Previous
            </button>
            <button className="photo-nav next-btn-photo" onClick={handleNext}>
              {currentIndex === memories.length - 1 ? "Restart 🔄" : "Next ➡️"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

function LoveStoryPage({ onNavigate }) {
  const [scene, setScene] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.currentTime = 47;
    }
  }, []);

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
      text: "They were destined to meet in their college. Surprisingly, they had a mutual friend, Sharmi. Through her, they got to know each other. From then on, whenever they crossed paths, they would exchange a simple hi and bye, and share a small smile whenever they saw each other.", 
      boyPos: "left: 30%; opacity: 1", 
      girlPos: "right: 30%; opacity: 1" 
    },
    { 
      text: "One day, Mohana looked at Vibhee and found his smile cute. But since she had no idea about falling for anyone, it was only a passing thought. Within a second, she brushed it aside and continued with her work.",
      thinkText: "He looks cute when he smiles. Mhmmm. ",
      boyPos: "left: 30%; opacity: 1", 
      girlPos: "right: 30%; opacity: 1" 
    },
    { 
      text: "Mohana always went to her hostel by auto. One day, expectedly or unexpectedly, Vibheeshan got into the same auto to reach the bus stand. When they saw each other, they simply smiled.",
      boyPos: "left: 30%; opacity: 0", 
      girlPos: "right: 30%; opacity: 0",
      showAuto: true 
    },
    { 
      text: "Vibhee was so tall that the auto was not comfortable for him to sit in. Mohana noticed this and smiled. Soon, fortunately or unfortunately, two more people entered the auto and sat next to Vibhee. Now he was dying inside from the discomfort. They looked at each other again, and he smiled with a hint of embarrassment. Mohana noticed that he could hardly sit at all. So she made some space next to the third girl and asked Vibhee to sit there. Vibhee was so happy. He smiled and softly whispered a \"thank you.\"",
      boyPos: "left: 30%; opacity: 0", 
      girlPos: "right: 30%; opacity: 0",
      showHimAuto: true 
    },
    { 
      text: "Meanwhile, Mohana casually mentioned Vibhee to her best friend, Hema, saying that there was this guy she kind of found cute. Vibhee also conveyed his thanks to Mohana through Sharmi. Later, Mohana sent Vibhee a friend request on Instagram, and he accepted it. One day, Mohana and Hema were stalking his account. Accidentally, Mohana sent a sticker as a DM and quickly deleted it. However, Vibhee had already seen the message and texted her, \"Naa paathutten.\" Mohana felt embarrassed but replied anyway, and the conversation continued.",
      boyPos: "left: 30%; opacity: 1", 
      girlPos: "right: 30%; opacity: 1",
      showChat: true 
    },
    { 
      text: "Everything was usual. They were good friends, and their vibe matched. Then one day, Mohana got bitten by a dog. After she came back to college, she asked Vibhee if he could go with her for her second dose of the vaccine. Vibhee said yes, and that was the first time she went on a bike with him.", 
      boyPos: "left: 30%; opacity: 0", 
      girlPos: "right: 30%; opacity: 0",
      showBikeRide: true 
    },
    { 
      text: "After getting vaccinated, they went to Fruitbae. There, they finally had the chance to talk a lot in person. They laughed out loud and enjoyed each other's company, and it turned out to be a really good day. That same night, Mohana was trying to tell Vibhee something. Even though she did not fully convey what she intended to say, every conversation they had brought them a little closer.", 
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
      text: "Coffee at Cothas soon became a routine for them. On another random day, Mohana had to take a blood test, and when she asked Vibhee if he could come with her, he said Dannu would go instead. But surprisingly, Vibhee himself came to pick her up and take her to the clinic. Later, on their way back, Vibhee asked if they could go to Starbucks for a coffee, and she said yes. As they sat there, they chatted about their types in love, and the conversation went on for a while. At one point, Mohana was upset about something, but after talking with Vibhee, everything felt lighter. And guess what? Vibhee posted Mohana on his story for the first time, and it completely made her day.", 
      boyPos: "left: 30%; opacity: 0", 
      girlPos: "right: 30%; opacity: 0",
      showFirstStory: true 
    },
    { 
      text: "On a random day, Mohana broke her spex and she asked Vibhee if he could go with her to lenskart and then to Cothas. He came to pick her to the shop. He saw her in the green kurti and said 'AZHAGA IRUKKINGA GUYS' and she smiled. The day was as beautiful as them. He was gazing at her in the mirror and what happened in Cothas is magical. Their eyes met and so did she hold his hand. And finally she rested her leg on his legs. They knew something is unusual and this is so special. Later, after the coffee they decided to go have chaats, Vibhee was ready to take the bike but, Mohana asked if they could walk to the shop. And the day got much special. She fed him and he was trying to fix her spex and it felt like 'LOVE IS IN THE AIR'.", 
      boyPos: "left: 30%; opacity: 0", 
      girlPos: "right: 30%; opacity: 0",
      showChaat: true 
    },
    { 
      text: "She knew it had been a good day for her, so on their way back she asked Vibhee, \"How was your day?\" He playfully asked if it was a date. Mohana replied, \"I don't know what a date is—you tell me.\" So he explained what a date meant. Then she asked, \"Okay, then would you call this day a date?\" He replied, \"Yeah… konjam,\" and gestured with his hand. Mohana laughed and said, \"Then we'll call it our first non-date!\" And they both smiled. And that's how their beautiful love story began. They crossed a lot of difficulties and yet, love each other more and more. This is a never-ending fairytale of MOHANA and VIBHEE.", 
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
      <audio ref={audioRef} src={loveStorySong} loop />
      <button className="mid-right-btn" onClick={onNavigate}>
        🎁
      </button>
      <button className={`music-btn ${isPlaying ? 'playing' : ''}`} onClick={toggleMusic}>
        <div className="music-box">
          <div className="music-box-lid"></div>
          <div className="music-box-body"></div>
        </div>
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
          <div className={scene === 9 || scene === 10 || scene === 11 || scene === 12 || scene === 13 ? "story-narration-box-large" : "story-narration-box"}>
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
          isPlaying={isPlaying}
        />
      )}
    </>
  );
}

export default App;
