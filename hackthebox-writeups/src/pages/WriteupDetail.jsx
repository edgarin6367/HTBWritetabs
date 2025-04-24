import React from 'react';
import { useParams } from 'react-router-dom';
import writeups from '../data';
import YouTube from 'react-youtube';
import ReactMarkdown from 'react-markdown';

function WriteupDetail() {
  const { id } = useParams();
  const writeup = writeups.find(writeup => writeup.id === parseInt(id));

  // Define youtubeOptions aquí, ASEGÚRATE DE QUE ESTÁ AQUÍ
  const youtubeOptions = {
    height: '390',
    width: '640',
    playerVars: {
      autoplay: 0,
    },
  };

  if (!writeup) {
    return <div>Writeup no encontrado</div>;
  }

  return (
    <div>
      <h1>{writeup.title}</h1>
      <p>Máquina: {writeup.machine}</p>
      <p>Dificultad: {writeup.difficulty}</p>
      <p>Estado: {writeup.status}</p>
      <p>{writeup.description}</p>

      <YouTube videoId={writeup.videoId} opts={youtubeOptions} />

      <ReactMarkdown children={writeup.content} />
    </div>
  );
}

export default WriteupDetail;