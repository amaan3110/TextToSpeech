// TextToSpeech.js
import React, { useState } from 'react';
import { saveAs } from 'file-saver';

import './TextSpeech.css'

const TextToSpeech = () => {
  const [text, setText] = useState('');
  const [isSpeaking, setIsSpeaking] = useState(false);

  const handleInputChange = (e) => {
    setText(e.target.value);
  };

  const handleSpeak = () => {
    const utterance = new SpeechSynthesisUtterance(text);
    speechSynthesis.speak(utterance);
    setIsSpeaking(true);

    utterance.onend = () => {
      setIsSpeaking(false);
    };
  };

  const handleDownload = () => {
    const blob = new Blob([text], { type: 'text/plain;charset=utf-8' });
    saveAs(blob, 'text-to-speech.txt');
  };

  return (
    <div className='main'>
        <h2>Text &rArr; Speech Converter</h2>
      <textarea
        value={text}
        onChange={handleInputChange}
        placeholder="Enter text..."
      />
      <button onClick={handleSpeak} disabled={isSpeaking}>
        {isSpeaking ? 'Speaking...' : 'Speak'}
      </button>
      <button onClick={handleDownload}>Download</button>
    </div>
  );
};

export default TextToSpeech;
