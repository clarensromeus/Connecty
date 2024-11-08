import * as React from "react";
import { View } from "react-native";
import Svg, { G, Path } from "react-native-svg";

export default function BlueCheck(props: any) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="34"
      height="34"
      viewBox="-100 -40 1400 1400"
    >
      <path
        d="M478.8 87.352c2.45 2.17 4.83 4.39 7.2 6.65.66.6 1.32 1.19 2 1.81 9.39 8.8 17.76 20.45 23 32.19v2c1.2-.34 2.39-.68 3.63-1.03 34.99-9.67 71.16-8.01 103.31 10.21 27.27 16.08 46.41 41.16 54.79 71.8 6.83 26.55 4.94 51.95-2.73 78.02.85.24 1.7.49 2.58.74 3.7 1.36 6.84 3.17 10.11 5.32.61.4 1.22.8 1.85 1.21 29.48 19.58 48.31 48.35 55.92 82.7 5.47 30.52-1.71 63.03-19.1 88.73-11.4 16.04-25.48 29.21-42.36 39.3-.63.38-1.26.75-1.91 1.14-4.85 2.86-4.85 2.86-7.09 2.86.33.98.65 1.97.99 2.98 10.62 33.24 9.08 67.27-6.74 98.66-15.66 30.04-41.88 50.25-73.81 60.55-26.52 7.83-53.48 5.46-79.44-3.19-.25.85-.49 1.7-.75 2.58-1.35 3.7-3.16 6.84-5.31 10.11-.4.61-.8 1.22-1.21 1.85-19.68 29.61-48.12 48.06-82.63 55.88-30.44 5.68-63.19-1.73-88.8-19.06-17.76-12.63-34.21-29.34-43.3-49.36v-2c-1.26.34-2.52.67-3.81 1.02-37.19 9.78-72.43 6.99-106.19-12.02-4.94-3-9.5-6.38-14-10-.9-.72-1.8-1.43-2.72-2.17-23.41-19.83-36.3-52.01-39-81.98-1.23-17.05-.09-38.23 7.72-53.85-1.32-.41-1.32-.41-2.66-.82-25.96-9.19-46.54-34.2-58.34-58.18-14.53-31.21-15.5-62.75-4.02-94.84 11.02-29.15 33.59-53.48 61.34-67.45 1.68-.71 1.68-.71 3.68-.71-.34-1.03-.68-2.06-1.02-3.11-10.12-31.23-9.49-65 5.02-94.89.28-.58.56-1.17.85-1.77 4.5-9.14 9.69-17.31 16.15-25.23.62-.79 1.25-1.58 1.89-2.39 18.86-22.67 49.52-34.96 78.15-38.3 19.05-1.52 37.9.2 55.96 6.69.47-.87.95-1.74 1.43-2.64 16.81-30.47 42.95-54.56 76.65-64.66 3.62-1.01 7.25-1.89 10.92-2.7 1.09-.25 2.19-.49 3.31-.74 34.96-6.51 71.67 5.57 98.49 28.09m30.2 182.65c-5.49 5.4-10.93 10.78-15.93 16.65-2.91 3.31-5.93 6.51-8.95 9.72-4.67 4.99-9.3 10.02-13.86 15.12-4.19 4.65-8.45 9.24-12.71 13.83-2.54 2.75-5.08 5.49-7.61 8.24l-1.51 1.63c-4.7 5.1-9.39 10.21-14.07 15.32l-6.86 7.49c-.92 1-1.83 2-2.75 3l-16.5 18-1.38 1.5c-.91 1-1.83 2-2.75 3-2.28 2.49-4.56 4.97-6.84 7.46-5.25 5.74-10.52 11.47-15.8 17.18-4.26 4.61-8.5 9.24-12.74 13.87-1.9 2.07-3.8 4.13-5.7 6.2-.49.53-.97 1.06-1.48 1.6-1.35 1.47-2.7 2.93-4.05 4.4-2.59 2.87-5.06 5.81-7.51 8.79-2.9-1.32-4.97-2.72-7.22-4.98-.61-.6-1.22-1.21-1.85-1.84-.99-1-.99-1-1.99-2.02-.71-.7-1.41-1.4-2.13-2.13-2.32-2.32-4.64-4.65-6.95-6.98l-4.83-4.83c-4.23-4.24-8.46-8.49-12.68-12.74-4.32-4.33-8.63-8.66-12.95-12.99-8.47-8.49-16.94-16.99-25.4-25.49-3.92 3.3-7.76 6.63-11.38 10.26l-2.36 2.36c-.82.83-1.63 1.65-2.48 2.5l-2.59 2.59-8.13 8.16c-1.85 1.86-3.69 3.71-5.54 5.56-4.51 4.52-9.02 9.04-13.52 13.57 1.57 3.79 3.94 6.19 6.83 9.07l1.51 1.51c1.66 1.67 3.33 3.32 4.99 4.98 1.2 1.19 2.39 2.38 3.58 3.58 3.24 3.24 6.48 6.47 9.73 9.7 3.38 3.37 6.77 6.76 10.15 10.14 6.41 6.4 12.83 12.8 19.24 19.2 7.31 7.28 14.61 14.57 21.91 21.86 15.01 14.99 30.03 29.98 45.06 44.96.77-.78 1.55-1.55 2.35-2.35 1.69-1.69 3.38-3.37 5.08-5.05 4.33-4.28 8.51-8.59 12.47-13.21 2.92-3.32 5.95-6.54 8.97-9.77 4.68-4.99 9.31-10.01 13.86-15.11 2.69-2.98 5.42-5.94 8.14-8.89.51-.54 1.02-1.09 1.54-1.66l1.54-1.66c6.2-6.71 12.39-13.44 18.49-20.24 4.46-4.97 8.98-9.87 13.52-14.77 2.87-3.11 5.74-6.23 8.6-9.35.45-.5.9-.99 1.36-1.49.91-.99 1.82-1.98 2.72-2.97 2.29-2.49 4.57-4.99 6.86-7.48.92-1 1.83-2 2.75-3 27.5-30 27.5-30 28.87-31.5.92-1 1.83-2 2.75-3 2.32-2.52 4.63-5.05 6.95-7.57 4.23-4.61 8.44-9.22 12.62-13.87 4.46-4.97 8.98-9.87 13.52-14.77 4.24-4.58 8.45-9.19 12.67-13.79 1.4-1.54 2.81-3.07 4.22-4.6 5.44-5.92 10.84-11.87 16.15-17.9-4.87-6.09-10.49-11.21-16.26-16.42-3.11-2.83-6.17-5.71-9.24-8.58-4.74-4.43-9.48-8.86-14.25-13.25l-2.86-2.64c-2.4-2.21-2.4-2.21-5.39-4.11"
        fill="#1C9BF0"
      />
    </svg>
  );
}