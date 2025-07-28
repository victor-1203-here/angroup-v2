import localFont from 'next/font/local';

export const gillSans = localFont({
    src: [
        {
            path: '../fonts/GillSans/GillSans-Regular.woff2',
            weight: '400',
            style: 'normal',
        },
        {
            path: '../fonts/GillSans/GillSans-RegularItalic.woff2',
            weight: '400',
            style: 'italic',
        },
        {
            path: '../fonts/GillSans/GillSans-Light.woff2',
            weight: '300',
            style: 'normal',
        },
        {
            path: '../fonts/GillSans/GillSans-LightItalic.woff2',
            weight: '300',
            style: 'italic',
        },
        {
            path: '../fonts/GillSans/GillSans-Bold.woff2',
            weight: '700',
            style: 'normal',
        },
        {
            path: '../fonts/GillSans/GillSans-BoldItalic.woff2',
            weight: '700',
            style: 'italic',
        },
    ],
    variable: '--font-gill',
    display: 'swap',
});
