import React, { Component } from 'react';
// import ReactAnime from 'react-animejs';
import '../style/Burger.scss';

export class Burger extends Component {
    render() {
        return (
            <div>
                <svg id="burger_svg" width="88" height="109" viewBox="0 0 88 109" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g filter="url(#burger_circle_filter)">
                        <circle id="burger_circle" cx="44" cy="40" r="35" fill="#A11C21" />
                    </g>
                    <line id="bureger_line_top" x1="41" y1="24.5" x2="63" y2="25.5" stroke="white" strokeWidth="3"/>
                    <line id="bureger_line_mid" x1="25" y1="38.5" x2="63" y2="39.5" stroke="white" strokeWidth="3"/>
                    <line id="bureger_line_bot" x1="25" y1="52.5" x2="47" y2="53.5" stroke="white" strokeWidth="3"/>
                    <g filter="url(#burger_text)">
                        <path d="M31.3545 99H28.8145V92.918C28.8145 92.5078 28.8174 92.1826 28.8232 91.9424C28.8291 91.7021 28.8701 90.7002 28.9463 88.9365H28.8672L25.5537 99H23.0576L19.9639 88.9189H19.8848C19.9961 90.917 20.0518 92.2852 20.0518 93.0234V99H17.6172V86.1504H21.3262L24.3672 95.9766H24.4199L27.6455 86.1504H31.3545V99ZM41.998 88.3828H37.3223V91.2041H41.6641V93.4365H37.3223V96.75H41.998V99H34.5977V86.1504H41.998V88.3828ZM56.0869 99H52.624L47.0342 89.2793H46.9551C47.0664 90.9492 47.1221 92.1738 47.1221 92.9531V99H44.6875V86.1504H48.124L53.7051 95.7744H53.7666C53.6787 94.1045 53.6348 92.9238 53.6348 92.2324V86.1504H56.0869V99ZM69.7891 86.1504V94.4648C69.7891 94.4824 69.7891 94.5 69.7891 94.5176C69.7891 95.9238 69.3145 97.0518 68.3652 97.9014C67.416 98.751 66.1475 99.1758 64.5596 99.1758C64.5303 99.1758 64.498 99.1758 64.4629 99.1758C62.8105 99.1758 61.5273 98.751 60.6133 97.9014C59.6992 97.0518 59.2422 95.8945 59.2422 94.4297V86.1504H61.958V94.0166C61.958 95.0127 62.1602 95.7422 62.5645 96.2051C62.9688 96.6621 63.6191 96.8906 64.5156 96.8906C65.4121 96.8906 66.0625 96.6592 66.4668 96.1963C66.8711 95.7334 67.0732 95.001 67.0732 93.999V86.1504H69.7891Z" fill="white"/>
                    </g>
                    <defs>
                        <filter id="burger_circle_filter" x="0" y="0" width="88" height="88" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
                            <feOffset dy="4"/>
                            <feGaussianBlur stdDeviation="2"/>
                            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
                        </filter>
                        <filter id="burger_text" x="13.6172" y="86.1504" width="60.1719" height="22.0254" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
                            <feOffset dy="5"/>
                            <feGaussianBlur stdDeviation="2"/>
                            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0"/>
                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
                        </filter>
                    </defs>
                </svg>
            </div>
        )
    }
}

export default Burger
