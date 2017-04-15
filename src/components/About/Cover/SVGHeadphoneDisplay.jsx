import React, { PropTypes } from 'react';

/* eslint-disable max-len, arrow-body-style */
const SVGHeadphoneDisplay = ({ dX, dY }) => {
  const x = 305 + 15 - dX * 0.7;
  const y = 84 + 180 - dY * 0.8;
  return (
    <g fill="none" fillRule="evenodd" transform={`translate(${x} ${y})`}>
      <g transform="translate(128 82)">
        <rect fill="#F4F4F4" y="9" width="36" height="2" rx="1" />
        <path fill="#CECECE" d="M5 9l2.496-9h21.008L31 9z" />
      </g>
      <g transform="translate(89 4)">
        <rect fill="#F4F4F4" width="114" height="78" rx="3" />
        <rect fill="#1A1A1A" width="114" height="68" rx="3" />
      </g>
      <path d="M147.461 76.703c-.006-.612.502-.905.525-.92-.286-.415-.73-.472-.889-.479-.379-.038-.739.222-.93.222-.192 0-.489-.216-.803-.21a1.19 1.19 0 0 0-1.005.605c-.43.74-.11 1.836.308 2.435.204.294.447.624.767.612.308-.012.424-.198.796-.198.373 0 .477.198.803.192.331-.006.54-.3.744-.594.234-.34.33-.67.336-.687-.007-.003-.645-.247-.652-.978m-.788-1.796c.17-.204.285-.488.253-.771-.244.01-.54.162-.715.366-.158.18-.295.47-.259.747.273.021.552-.137.721-.342" fill="#BBB" />
      <path fill="#66606C" d="M94 10h104v58H94z" />
      <path fill="#494949" d="M94 10h104v2H94z" />
      <path fill="#7B7B7B" d="M195 10.5h2v1h-2zm-2 0h1v1h-1zm-6 0h5v1h-5zm-3 0h2v1h-2zm-3 0h2v1h-2zm-54 0h2v1h-2zm-3 0h2v1h-2zm-3 0h2v1h-2zm-3 0h2v1h-2zm-3 0h2v1h-2zm-3 0h2v1h-2zm-3 0h2v1h-2zm-3 0h2v1h-2zm-3 0h2v1h-2zm-3 0h2v1h-2zm-3 0h2v1h-2zm-2 0h1v1h-1z" />
      <path fill="#333" d="M104 13h54v1h-54z" />
      <path fill="#36C" d="M119.828 13h.931v1h-.931z" />
      <path fill="#565656" d="M129.138 13h7.448v1h-7.448z" />
      <path fill="#7B7B7B" d="M131 13h3.724v1H131z" />
      <path fill="#565656" d="M120.759 13h7.448v1h-7.448z" />
      <path fill="#7B7B7B" d="M122.62 13h3.725v1h-3.724z" />
      <path fill="#565656" d="M112.38 13h7.447v1h-7.448z" />
      <path fill="#7B7B7B" d="M114.241 13h3.724v1h-3.724z" />
      <path fill="#565656" d="M104 13h7.448v1H104z" />
      <path fill="#7B7B7B" d="M105.862 13h3.724v1h-3.724z" />
      <path fill="#E6E6E6" d="M180 18h18v45h-18z" />
      <path fill="#D3D3D3" d="M181 38h4v1h-4z" />
      <path fill="#419BF9" d="M188 38h5v1h-5z" />
      <path fill="#FFF" d="M194 38h3v1h-3zm-7 0h1v1h-1z" />
      <path fill="#D3D3D3" d="M181 40h4v1h-4z" />
      <path fill="#419BF9" d="M195 40h2v1h-2z" />
      <path fill="#FFF" d="M187 40h8v1h-8zm-7-6h18v3h-18z" />
      <path fill="#D3D3D3" d="M195 35h2v1h-2zm-14 0h13v1h-13zm2-3h13v1h-13z" />
      <path fill="#FFF" d="M181 32h1v1h-1z" />
      <path fill="#BABABA" d="M180 30h18v1h-18z" />
      <path fill="#D3D3D3" d="M194 28h2v1h-2zm-5 0h2v1h-2zm-8-1h5v1h-5z" />
      <path fill="#FFF" d="M188 27h4v1h-4zm5 0h4v1h-4z" />
      <path fill="#D3D3D3" d="M194 25h2v1h-2zm-5 0h2v1h-2zm-8-1h3v1h-3z" />
      <path fill="#FFF" d="M188 24h4v1h-4zm5 0h4v1h-4z" />
      <path fill="#D3D3D3" d="M194 22h2v1h-2zm-5 0h2v1h-2zm-8-1h4v1h-4z" />
      <path fill="#FFF" d="M188 21h4v1h-4zm5 0h4v1h-4z" />
      <path fill="#F5F5F5" d="M180 18h18v2h-18z" />
      <path fill="#F2F2F2" d="M111 18h69v45h-69z" />
      <path stroke="#E9E9E9" strokeWidth=".5" fill="#FFF" d="M116 23h60v36h-60z" />
      <g strokeLinecap="round">
        <path d="M143 38.067h27.467M143 42.312h27.467M143 46.133h27.467M143 50.379h27.467M143 33.821h27.467" stroke="#CCC" />
        <path stroke="#29ABE2" strokeWidth="3" d="M144.445 51.36l7.164-9.083 2.997 3.379 5.082-8.865 1.239 3.648 6.142-10.192 1.913 6.544" />
      </g>
      <path d="M136.44 45.192c-.106 2.325-2.06 4.184-4.449 4.184h-.323l-2.385-2.312c.197-.272.379-.554.541-.849h2.167c.685 0 1.243-.548 1.243-1.223s-.558-1.223-1.243-1.223h-1.282a8.266 8.266 0 0 0-.005-3.161h.797l4.925 4.776c.006-.064.01-.128.014-.192zM122.296 35H121v3.161h1.296c2.262 0 4.104 1.812 4.104 4.039a3.96 3.96 0 0 1-.382 1.697l2.364 2.293a7.078 7.078 0 0 0 1.23-3.99c0-3.97-3.282-7.2-7.316-7.2z" fill="#F9A03C" />
      <path d="M131.991 35h-5.246a8.546 8.546 0 0 1 3.065 3.161h2.181c.685 0 1.243.549 1.243 1.223 0 .675-.558 1.224-1.243 1.224h-.49l4.926 4.776a4.321 4.321 0 0 0-1.015-3.196 4.32 4.32 0 0 0 1.033-2.804c0-2.417-1.998-4.384-4.454-4.384z" fill="#F8783D" />
      <path d="M131.668 49.376h-4.886a8.584 8.584 0 0 0 2.501-2.312l2.385 2.312zm-3.286-3.186l-2.364-2.293a4.114 4.114 0 0 1-3.722 2.342H121v3.16h1.296a7.345 7.345 0 0 0 6.086-3.21z" fill="#F9B23C" />
      <path fill="#FFF" d="M111 18h69v1h-68v44h-1z" />
      <path fill="#EBEBEB" d="M94 18h17v45H94z" />
      <path fill="#F0F0F0" d="M94 52h17v2H94z" />
      <path fill="#D3D3D3" d="M98 52.5h7v1h-7z" />
      <path fill="#A6A6A6" d="M96 52.75h1l-.5.5z" />
      <path fill="#EBEBEB" d="M94 50h17v2H94z" />
      <path fill="#D3D3D3" d="M98 50.5h7v1h-7z" />
      <path fill="#A6A6A6" d="M96 50.75h1l-.5.5z" />
      <path fill="#F0F0F0" d="M94 48h17v2H94z" />
      <path fill="#D3D3D3" d="M98 48.5h7v1h-7z" />
      <path fill="#A6A6A6" d="M96 48.75h1l-.5.5z" />
      <path fill="#EBEBEB" d="M94 46h17v2H94z" />
      <path fill="#D3D3D3" d="M98 46.5h7v1h-7z" />
      <path fill="#A6A6A6" d="M96 46.75h1l-.5.5z" />
      <path fill="#F0F0F0" d="M94 44h17v2H94z" />
      <path fill="#D3D3D3" d="M98 44.5h7v1h-7z" />
      <path fill="#A6A6A6" d="M96 44.75h1l-.5.5z" />
      <path fill="#EBEBEB" d="M94 42h17v2H94z" />
      <path fill="#D3D3D3" d="M98 42.5h7v1h-7z" />
      <path fill="#A6A6A6" d="M96 42.75h1l-.5.5z" />
      <path fill="#F0F0F0" d="M94 40h17v2H94z" />
      <path fill="#D3D3D3" d="M98 40.5h7v1h-7z" />
      <path fill="#A6A6A6" d="M96 40.75h1l-.5.5z" />
      <path fill="#EBEBEB" d="M94 28h17v2H94z" />
      <path fill="#D3D3D3" d="M98 28.5h7v1h-7z" />
      <path fill="#A6A6A6" d="M96 28.75h1l-.5.5z" />
      <path fill="#F0F0F0" d="M94 36h17v2H94z" />
      <path fill="#D3D3D3" d="M98 36.5h7v1h-7z" />
      <path fill="#A6A6A6" d="M96 36.75h1l-.5.5z" />
      <path fill="#EBEBEB" d="M94 34h17v2H94z" />
      <path fill="#D3D3D3" d="M98 34.5h7v1h-7z" />
      <path fill="#A6A6A6" d="M96 34.75h1l-.5.5z" />
      <path fill="#F0F0F0" d="M94 32h17v2H94z" />
      <path fill="#D3D3D3" d="M98 32.5h7v1h-7z" />
      <path fill="#A6A6A6" d="M96 32.75h1l-.5.5z" />
      <path fill="#EBEBEB" d="M94 30h17v2H94z" />
      <path fill="#D3D3D3" d="M98 30.5h7v1h-7z" />
      <path fill="#A6A6A6" d="M96 30.75h1l-.5.5z" />
      <path fill="#F3F3F3" d="M94 28h17v2H94z" />
      <path fill="#D4D4D4" d="M95 28.5h7v1h-7z" />
      <path fill="#F0F0F0" d="M94 26h17v2H94z" />
      <path fill="#D3D3D3" d="M96 26.5h7v1h-7z" />
      <path fill="#EBEBEB" d="M94 18h17v2H94z" />
      <path fill="#D3D3D3" d="M96 18.5h7v1h-7z" />
      <path fill="#F0F0F0" d="M94 22h17v2H94z" />
      <path fill="#D3D3D3" d="M96 22.5h7v1h-7z" />
      <path fill="#EBEBEB" d="M94 20h17v2H94z" />
      <path fill="#D3D3D3" d="M96 20.5h7v1h-7z" />
      <path fill="#F3F3F3" d="M94 18h17v2H94z" />
      <path fill="#D4D4D4" d="M95 18.5h7v1h-7z" />
      <path fill="#D9D7D9" d="M94 12h104v6H94z" />
      <path fill="#EBEBEB" d="M194 15h3v2h-3z" />
      <path fill="#6F6F6F" d="M195 14h1v2h-1z" />
      <path fill="#75B2F8" d="M192 15h-1v2h-1v-2h-1v-1h3z" />
      <path fill="#EBEBEB" d="M192 16h-3v-1h3zm-8-1h3v1h-3z" />
      <path fill="#75B2F8" d="M184 16h1v-2h1v2h1v1h-3zm-4-1h-1v2h2v-1h1v-2h-2v1z" />
      <path fill="#EBEBEB" d="M180 15h1v1h-1zm-5 0h-1v2h2v-1h1v-2h-2v1z" />
      <path fill="#75B2F8" d="M175 15h1v1h-1zm-6 0h2v2h-2z" />
      <path fill="#EBEBEB" d="M170 14h2v2h-2z" />
      <path d="M165 15h-1v2h2v-1h1v-2h-2v1z" fill="#75B2F8" />
      <path fill="#ECECEC" d="M157 14h3v3h-3z" />
      <path fill="#6AD573" d="M158 15h2v2h-2zm-6 0l1-1v3l-1-1h3l-1 1v-3l1 1h-3zm0-1h3v3h-3v-3z" />
      <path d="M147 14l2 2m1-2l-2 2" stroke="#BABABA" strokeWidth=".5" />
      <path fill="#B7DFBA" d="M147 15h3v1h-3z" />
      <path fill="#6AD573" d="M147 16h1v-1h1v1h1v1h-3z" />
      <path d="M140 17h3a3 3 0 0 0-3-3v3z" fill="#B7DFBA" />
      <path d="M142 17a2 2 0 0 0-2-2v2h2zm-5.5-.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm0 .5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" fill="#69DD74" />
      <path fill="#B7DFBA" d="M130 14h3v3h-3z" />
      <path fill="#69DD74" d="M131 15h1l1 2h-3z" />
      <g transform="translate(125 14)">
        <circle fill="#EDEDED" cx="1.5" cy="1.5" r="1.5" />
        <path d="M1.5 3a1.5 1.5 0 0 0 0-3L0 1.5A1.5 1.5 0 0 0 1.5 3z" fill="#69DD74" />
      </g>
      <g transform="translate(114 14)">
        <path d="M0 2h1L0 1v1l1-1H0l1 1V1L0 2zm0-1h1v1H0V1zm0 0h1v1H0V1zm6 1h1L6 1v1l1-1H6l1 1V1L6 2zm0-1h1v1H6V1zm0 0h1v1H6V1z" fill="#979797" />
        <circle fill="#D7F0F5" cx="3.25" cy="1.25" r="1.25" />
        <path d="M3.25 2a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5zm0 .5a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5z" fill="#5D5D5D" />
        <path d="M3.823 2.177l1 1a.25.25 0 0 0 .354-.354l-1-1a.25.25 0 0 0-.354.354z" fill="#5D5D5D" />
      </g>
      <path fill="#76C2FA" d="M107 14h2v2h-2z" />
      <path fill="#EDEDED" d="M108 15h2v2h-2zm-3-1v3h-3v-3z" />
      <path fill="#76C2FA" d="M103 15h1v1h-1z" />
      <path d="M95 14.495c0-.273.216-.495.495-.495h2.01c.273 0 .495.216.495.495v2.01a.492.492 0 0 1-.495.495h-2.01a.492.492 0 0 1-.495-.495v-2.01zm.5 1.338v-.666h.667V14.5h.666v.667h.667v.666h-.667v.667h-.666v-.667H95.5z" fill="#565656" />
      <path fill="#36CC4B" d="M97 12.5h1v1h-1z" />
      <path fill="#FEC242" d="M96 12.5h1v1h-1z" />
      <path fill="#FC635E" d="M95 12.5h1v1h-1z" />
      <g transform="translate(115 63)">
        <rect fillOpacity=".699" fill="#303030" width="67" height="5" rx="1" />
        <path d="M63.5 4a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" fillOpacity=".5" fill="#9CD393" />
        <path d="M59.5 4a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" fillOpacity=".5" fill="#FB765D" />
        <path d="M55.5 4a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" fillOpacity=".5" fill="#FF9F2B" />
        <path d="M51.5 4a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" fillOpacity=".5" fill="#9CD393" />
        <path d="M47.5 4a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" fillOpacity=".5" fill="#FB765D" />
        <path d="M43.5 4a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" fillOpacity=".5" fill="#FF9F2B" />
        <path d="M39.5 4a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" fillOpacity=".5" fill="#2FD566" />
        <path d="M35.5 4a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" fillOpacity=".5" fill="#9CA4A7" />
        <path d="M31.5 4a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" fillOpacity=".5" fill="#28B7F7" />
        <path d="M27.5 4a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" fillOpacity=".5" fill="#FA787C" />
        <path d="M23.5 4a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" fillOpacity=".5" fill="#D0D0D0" />
        <path d="M19.5 4a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" fillOpacity=".5" fill="#84C2F0" />
        <path d="M15.5 4a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" fillOpacity=".5" fill="#2D96D0" />
        <path d="M11.5 4a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" fillOpacity=".5" fill="#F1BE56" />
        <path d="M7.5 4a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" fillOpacity=".5" fill="#7F37B5" />
        <path d="M3.5 4a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" fillOpacity=".5" fill="#2AAFF6" />
      </g>
      <g transform="translate(145 7)">
        <rect fill="#4C4C4C" width="2" height="1" rx=".5" />
        <path d="M1.5 1a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1z" fill="#707070" />
      </g>
      <path d="M41.909 16.418c1.337 4.422 1.06 9.386-1.15 13.92-.545 1.116-1.363 1.973-2.336 2.67 1.676-2.11 2.239-3.974 1.562-4.975-.475-.701-.778-1.032-1.286-.942.213-.525-.02-.986-.494-1.687-1.39-2.056-2.562-2.78-10.458 2.818-7.896 5.6-7.645 6.977-6.255 9.032.475.701.815 1.086 1.37 1.067-.26.454-.064.862.41 1.564.53.781 1.805 1.023 3.537.68a5.1 5.1 0 0 0-.049.263c-.166 1.033 3.675 1.792 3.675 1.792 5.31-1.774 9.971-5.643 12.655-11.146 5.217-10.696.994-23.488-9.43-28.572s-23.102-.536-28.32 10.16c-2.682 5.502-2.862 11.557-.992 16.834 0 0 2.964 2.56 3.676 1.793a6.5 6.5 0 0 0 .177-.2c.796 1.576 1.772 2.433 2.713 2.368.846-.058 1.288-.155 1.485-.64.327.45.84.481 1.685.423 2.476-.169 3.716-.818 3.267-10.488-.45-9.669-1.741-10.146-4.219-9.977-.844.058-1.35.159-1.633.65-.241-.456-.69-.492-1.535-.434-1.207.083-2.33 1.675-2.96 4.296-.05-1.197.122-2.37.667-3.488 2.211-4.534 5.952-7.807 10.26-9.476.3.438.661.831 1.037.933 2.389.642 6.801-1.176 12.554 1.63 5.752 2.806 7.037 7.402 9.014 8.89.31.233.844.276 1.373.242z" fillOpacity=".25" fill="#151718" />
      <path d="M27.925 35.866c-7.925 5.657-8.16 6.323-9.547 4.259-1.386-2.064-1.634-3.449 6.29-9.107 7.925-5.657 9.097-4.932 10.484-2.867 1.386 2.064.697 2.058-7.227 7.715" fill="#454749" />
      <path d="M30.74 40.053c-5.045 3.602-9.477 4.365-10.587 2.713-1.387-2.066-.388-1.594 7.537-7.251 7.926-5.657 7.848-6.789 9.235-4.724 1.11 1.652-1.142 5.662-6.186 9.262" fill="#258399" />
      <path d="M8.448 26.366c.42 9.727.042 10.324 2.521 10.145 2.481-.177 3.725-.835 3.304-10.563-.42-9.728-1.713-10.204-4.195-10.026-2.48.178-2.05.717-1.63 10.444" fill="#454749" />
      <path d="M3.415 26.726c.266 6.192 2.395 10.156 4.38 10.013 2.481-.18 1.493-.677 1.072-10.404-.42-9.728.519-10.364-1.962-10.186-1.986.142-3.759 4.386-3.49 10.577" fill="#258399" />
      <path d="M1.23 32.773s2.96 2.567 3.676 1.793c4.096-4.431-3.154-11.745-.3-17.597 4.608-9.447 15.75-13.494 24.887-9.037 9.137 4.456 12.808 15.73 8.201 25.175-2.854 5.85-13.08 4.64-14.051 10.598-.17 1.04 3.674 1.792 3.674 1.792 5.324-1.801 10.004-5.709 12.708-11.253 5.257-10.779 1.067-23.637-9.357-28.721s-23.135-.47-28.392 10.31C-.428 21.375-.627 27.468 1.23 32.772" fill="#3BAACF" />
      <path d="M15.946 8.338c2.39.639 6.815-1.203 12.568 1.603 5.751 2.805 7.024 7.426 9 8.916.78.59 2.971-.04 2.971-.04-1.498-5.703-4.603-9.756-10.21-12.49-5.608-2.737-10.71-2.687-16.126-.357 0 0 .852 2.114 1.798 2.367" fill="#454749" />
      <path d="M18 9.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0" fill="#575757" />
      <path d="M19 8.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0" fill="#999" />
    </g>
  );
};
/* eslint-enable max-len, arrow-body-style */

SVGHeadphoneDisplay.propTypes = {
  dX: PropTypes.number.isRequired,
  dY: PropTypes.number.isRequired
};

export default SVGHeadphoneDisplay;
