import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { schedule } from '../data/schedule';

export const EventMap = () => {
  const position: [number, number] = [-32.6602859, -71.4337882]; // Example coordinates

  return (
    <section className="py-20 px-4 bg-white" id="details">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-serif text-center mb-12">Event Details</h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div className="h-[400px] rounded-lg overflow-hidden shadow-lg">
            <MapContainer center={position} zoom={13} className="h-full">
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              />
              <Marker position={position}>
                <Popup>
                  Wedding Venue <br />
                  123 Wedding Lane, New York
                </Popup>
              </Marker>
            </MapContainer>
          </div>

          <div className="space-y-6">
            {schedule.map((event, index) => (
              <div key={index} className="border-l-4 border-emerald-600 pl-4">
                <div className="text-xl font-bold">{event.time}</div>
                <div className="text-lg font-serif">{event.title}</div>
                <div className="text-gray-600">{event.description}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};