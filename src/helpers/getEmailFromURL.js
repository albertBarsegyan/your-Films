import React from 'react';
export default function getEmailFromURL(url) {
  const emailFromURL = url.substring(url.lastIndexOf('/') + 1);
  return emailFromURL;
}
