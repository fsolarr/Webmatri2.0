import React from 'react';
import { Navigation } from './components/Navigation';
import { Header } from './components/Header';
import { GiftRegistry } from './components/GiftRegistry';
import { EventMap } from './components/EventMap';
import { RsvpForm } from './components/RsvpForm';
import { PhotoGallery } from './components/PhotoGallery';
import { MessageForm } from './components/MessageForm';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Header />
      <PhotoGallery />
      <EventMap />
      <GiftRegistry />
      <RsvpForm />
      <MessageForm />
    </div>
  );
}

export default App;