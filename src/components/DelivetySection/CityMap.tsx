import React from "react";

interface CitiMapProps {
  children?: React.ReactNode;
  styles?: React.CSSProperties;
  title?: string;
  referrerPolicy?: string;
}

const mapStyle = {
  width: "100%",
  maxHeight: "320px",
  borderRadius: "14px",
  border: "0",
  padding: "0 0 75px 0",
};

export default function CityMap({ styles, referrerPolicy }: CitiMapProps) {
  return (
    <div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d651051.1538137215!2d29.973645684784213!3d50.400695970907336!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4cf4ee15a4505%3A0x764931d2170146fe!2z0JrQuNC10LIsIDAyMDAw!5e0!3m2!1sru!2sua!4v1664878781688!5m2!1sru!2sua"
        loading="lazy"
        style={mapStyle}
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
}
