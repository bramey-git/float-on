import React from 'react'

const Boat = ({wrongGuesses}) => {
  const hits = wrongGuesses.length
  return (
    <svg height='256px' width='256px' viewBox='-10.09 -10.09 524.72 524.72' fill='#000000'>
      <g id='SVGRepo_bgCarrier' strokeWidth='0'></g>
      <g id='SVGRepo_tracerCarrier' strokeLinecap='round' strokeLinejoin='round'></g>
      <g id='SVGRepo_iconCarrier'>
        <g transform='translate(1 3)'>
          {/* Oar Body */}
          {hits < 2 && <path style={{fill:'#623E25'}} d='M314.102,407.991c6.827,6.827,6.827,17.067,0,23.893c-1.707,1.707-6.827,6.827-8.533,8.533 l-0.853,0.853c-3.413,1.707-8.533,3.413-13.653,3.413c-3.413-0.853-6.827-2.56-8.533-5.12c-6.827-6.827-6.827-17.067,0-23.893 c1.707-1.707,6.827-6.827,8.533-8.533C297.035,401.164,307.275,401.164,314.102,407.991z M228.769,407.991 c6.827,6.827,6.827,17.067,0,23.893c-1.707,1.707-6.827,6.827-8.533,8.533c-2.56,2.56-5.973,4.267-9.387,4.267 c-5.12-0.853-9.387-1.707-13.653-3.413c-0.853,0-0.853-0.853-1.707-0.853c-6.827-6.827-6.827-17.067,0-23.893 c1.707-1.707,6.827-6.827,8.533-8.533C211.702,401.164,221.942,401.164,228.769,407.991z M143.435,407.991 c6.827,6.827,6.827,17.067,0,23.893c-1.707,1.707-6.827,6.827-8.533,8.533c-2.56,2.56-5.973,4.267-9.387,4.267 c-5.12-0.853-9.387-1.707-13.653-3.413c-0.853,0-0.853-0.853-1.707-0.853c-6.827-6.827-6.827-17.067,0-23.893 c1.707-1.707,6.827-6.827,8.533-8.533C126.369,401.164,136.609,401.164,143.435,407.991z'></path>}
          {/* Water */}
          <path style={{fill:'#4280AC'}} d='M46.155,428.471c0,0,8.533,17.067,34.133,17.067c13.653,0,22.187-5.12,27.307-9.387 c0.853,1.707,1.707,3.413,3.413,4.267c5.973,5.973,14.507,6.827,21.333,2.56c4.267,1.707,9.387,2.56,16.213,2.56 c25.6,0,34.133-17.067,34.133-17.067s4.267,8.533,15.36,13.653c3.413,3.413,8.533,4.267,13.653,3.413c1.707,0,3.413,0,5.12,0 c25.6,0,34.133-17.067,34.133-17.067s8.533,17.067,34.133,17.067c1.707,0,3.413,0,5.973,0c5.12,0.853,10.24,0,13.653-3.413 c10.24-5.12,14.507-12.8,14.507-12.8s8.533,17.067,34.133,17.067s34.133-17.067,34.133-17.067s6.827,13.653,27.307,16.213 c2.56,0,4.267,0.853,6.827,0.853c25.6,0,34.133-17.067,34.133-17.067s8.533,17.067,34.133,17.067c3.413,0,5.973,0,8.533-0.853v51.2 c-2.56,0.853-5.12,0.853-8.533,0.853c-25.6,0-34.133-17.067-34.133-17.067s-8.533,17.067-34.133,17.067 c-25.6,0-34.133-17.067-34.133-17.067s-8.533,17.067-34.133,17.067s-34.133-17.067-34.133-17.067s-8.533,17.067-34.133,17.067 s-34.133-17.067-34.133-17.067s-8.533,17.067-34.133,17.067s-34.133-17.067-34.133-17.067s-8.533,17.067-34.133,17.067 c-25.6,0-34.133-17.067-34.133-17.067s-8.533,17.067-34.133,17.067s-34.133-17.067-34.133-17.067s-8.533,17.067-34.133,17.067 c-3.413,0-5.973,0-8.533-0.853v-51.2c2.56,0.853,5.12,0.853,8.533,0.853c11.093,0,18.773-3.413,24.747-6.827 C43.595,433.591,46.155,428.471,46.155,428.471'></path>
          {/* Boat Body */}
          {hits < 7 && <path style={{fill:'#A0522D'}} d='M46.155,428.471c0,0-2.56,5.12-9.387,10.24c-19.627-14.507-32.427-29.013-32.427-61.44v-68.267h25.6 c17.067,0,17.067,34.133,34.133,34.133h315.733c28.16,0,51.2-23.893,51.2-51.2v-34.133c0-18.773,15.36-34.133,34.133-34.133h34.133 v25.6c0,8.533-17.067,8.533-17.067,17.067v76.8c0,67.413-33.28,85.333-67.413,101.547c-19.627-2.56-27.307-16.213-27.307-16.213 s-8.533,17.067-34.133,17.067s-34.133-17.067-34.133-17.067s-4.267,7.68-14.507,12.8c0.853,0,0.853-0.853,0.853-0.853 c1.707-1.707,6.827-6.827,8.533-8.533c6.827-6.827,6.827-17.067,0-23.893c-6.827-6.827-17.067-6.827-23.893,0 c-1.707,1.707-6.827,6.827-8.533,8.533c-6.827,6.827-6.827,17.067,0,23.893c2.56,2.56,5.973,4.267,9.387,4.267 c-1.707,0-3.413,0-5.973,0c-25.6,0-34.133-17.067-34.133-17.067s-8.533,17.067-34.133,17.067c-1.707,0-3.413,0-5.12,0 c3.413-0.853,6.827-1.707,9.387-4.267c1.707-1.707,6.827-6.827,8.533-8.533c6.827-6.827,6.827-17.067,0-23.893 c-6.827-6.827-17.067-6.827-23.893,0c-1.707,1.707-6.827,6.827-8.533,8.533c-6.827,6.827-6.827,17.067,0,23.893 c0.853,0.853,0.853,0.853,1.707,0.853c-11.093-5.12-15.36-13.653-15.36-13.653s-8.533,17.067-34.133,17.067 c-6.827,0-11.947-0.853-16.213-2.56c0.853-0.853,1.707-1.707,2.56-2.56c1.707-1.707,6.827-6.827,8.533-8.533 c6.827-6.827,6.827-17.067,0-23.893s-17.067-6.827-23.893,0c-1.707,1.707-6.827,6.827-8.533,8.533 c-5.12,5.12-6.827,13.653-3.413,19.627c-5.12,4.267-13.653,9.387-27.307,9.387C54.689,445.538,46.155,428.471,46.155,428.471'></path>}
          <g>
            {/* Inside Right Sail Panel (3)*/}
            {hits < 5 && <path style={{fill:'#DEE3E8'}} d='M259.489,18.871c0,0,34.133,51.2,34.133,136.533s-34.133,136.533-34.133,136.533h-51.2 c0,0,34.133-51.2,34.133-136.533S208.289,18.871,208.289,18.871H259.489z'></path>}
            {/* Inside Left Sail Panel (2)*/}
            {hits < 6 && <path style={{fill:'#F2F7FD'}} d='M208.289,18.871c0,0,34.133,51.2,34.133,136.533s-34.133,136.533-34.133,136.533h-51.2 c0,0,34.133-51.2,34.133-136.533S157.089,18.871,157.089,18.871H208.289z'></path>}
            {/* Outside Left Sail Panel (1)*/}
            {hits < 6 && <path style={{fill:'#DEE3E8'}} d='M157.089,18.871c0,0,34.133,51.2,34.133,136.533s-34.133,136.533-34.133,136.533h-51.2 c0,0,34.133-51.2,34.133-136.533S105.889,18.871,105.889,18.871H157.089z'></path>}
            {/* Outside Right Sail Panel (1)*/}
            {hits < 4 && <path style={{fill:'#F2F7FD'}} d='M310.689,18.871c0,0,34.133,51.2,34.133,136.533s-34.133,136.533-34.133,136.533h-51.2 c0,0,34.133-51.2,34.133-136.533S259.489,18.871,259.489,18.871H310.689z'></path>}
          </g>
        </g>
        {/* Full Outline */}
        {hits < 8 && <path style={{fill:'#4B5968'}} d='M490.889,504.004c-18.773,0-29.013-8.533-34.133-13.653c-5.12,5.973-15.36,13.653-34.133,13.653 s-29.013-8.533-34.133-13.653c-5.12,5.973-15.36,13.653-34.133,13.653s-29.013-8.533-34.133-13.653 c-5.12,5.973-15.36,13.653-34.133,13.653c-18.773,0-29.013-8.533-34.133-13.653c-5.12,5.973-15.36,13.653-34.133,13.653 s-29.013-8.533-34.133-13.653c-5.12,5.973-15.36,13.653-34.133,13.653c-18.773,0-29.013-8.533-34.133-13.653 c-5.12,5.973-15.36,13.653-34.133,13.653s-29.013-8.533-34.133-13.653c-5.12,5.973-15.36,13.653-34.133,13.653 c-3.413,0-5.973,0-9.387-0.853c-2.56,0-4.267-2.56-3.413-5.12c0-2.56,2.56-4.267,5.12-3.413c2.56,0.853,5.12,0.853,7.68,0.853 c22.187,0,29.867-14.507,30.72-14.507c0.853-1.707,1.707-2.56,3.413-2.56c1.707,0,3.413,0.853,3.413,2.56 c0,0.853,7.68,14.507,30.72,14.507s29.867-14.507,30.72-14.507c0.853-1.707,2.56-2.56,3.413-2.56c1.707,0,3.413,0.853,3.413,2.56 c0,0.853,7.68,14.507,30.72,14.507s29.867-14.507,30.72-14.507c0.853-1.707,2.56-2.56,3.413-2.56c1.707,0,3.413,0.853,3.413,2.56 c0,0.853,7.68,14.507,30.72,14.507s29.867-14.507,30.72-14.507c0.853-1.707,1.707-2.56,3.413-2.56s3.413,0.853,3.413,2.56 c0,0.853,7.68,14.507,30.72,14.507c23.04,0,29.867-14.507,30.72-14.507c0.853-1.707,2.56-2.56,3.413-2.56l0,0 c1.707,0,3.413,0.853,3.413,2.56c0,0.853,7.68,14.507,30.72,14.507s29.867-14.507,30.72-14.507c0.853-1.707,2.56-2.56,3.413-2.56 l0,0c1.707,0,3.413,0.853,3.413,2.56c0,0.853,7.68,14.507,30.72,14.507s29.867-14.507,30.72-14.507 c0.853-1.707,2.56-1.707,3.413-2.56c1.707,0,3.413,0.853,3.413,2.56c0,0.853,7.68,14.507,30.72,14.507c2.56,0,5.12,0,7.68-0.853 c2.56,0,4.267,0.853,5.12,3.413c0,2.56-0.853,4.267-3.413,5.12C496.862,504.004,494.302,504.004,490.889,504.004z M414.089,452.804 c-1.707,0-3.413-0.853-3.413-2.56c-0.853-1.707,0-4.267,1.707-5.973c34.133-17.067,65.707-33.28,65.707-98.987v-76.8 c0-6.827,5.973-10.24,11.093-11.947c3.413-1.707,5.973-3.413,5.973-5.12v-21.333h-29.867c-16.213,0-29.867,13.653-29.867,29.867 v34.133c0,29.867-25.6,55.467-55.467,55.467H64.222c-11.093,0-16.213-10.24-20.48-19.627c-4.267-9.387-7.68-14.507-13.653-14.507 H8.755v64c0,35.84,15.36,47.787,40.96,64.853c1.707,1.707,2.56,4.267,0.853,5.973c-1.707,1.707-4.267,2.56-5.973,0.853 c-27.307-17.92-44.373-32.427-44.373-71.68v-68.267c0-2.56,1.707-4.267,4.267-4.267h25.6c11.093,0,16.213,10.24,20.48,19.627 c4.267,9.387,7.68,14.507,13.653,14.507h140.8v-42.667h-64c-2.56,0-4.267-1.707-4.267-4.267c0-2.56,1.707-4.267,4.267-4.267h14.507 c5.973-10.24,32.427-58.027,32.427-132.267S161.502,35.525,155.529,25.285h-40.96c9.387,16.213,30.72,63.147,30.72,132.267 c0,85.333-33.28,136.533-34.987,139.093c-1.707,1.707-4.267,2.56-5.973,0.853c-1.707-1.707-2.56-4.267-0.853-5.973 c0-0.853,33.28-51.2,33.28-133.973c0-81.92-32.427-132.267-33.28-133.973c0,0,0-0.853-0.853-0.853c0-0.853,0-0.853,0-1.707 s0-0.853,0.853-1.707c0-0.853,0.853-0.853,0.853-1.707c0,0,0.853-0.853,1.707-0.853s0.853,0,1.707,0h51.2l0,0h46.933V4.804 c0-2.56,1.707-4.267,4.267-4.267s4.267,1.707,4.267,4.267v12.8h46.933l0,0h17.067c2.56,0,4.267,1.707,4.267,4.267 s-1.707,4.267-4.267,4.267h-9.387c9.387,16.213,30.72,63.147,30.72,132.267s-21.333,116.053-30.72,132.267h40.96 c5.973-10.24,32.427-58.027,32.427-132.267c0-82.773-33.28-133.973-33.28-133.973c-1.707-1.707-0.853-4.267,0.853-5.973 c1.707-1.707,4.267-0.853,5.973,0.853c1.707,2.56,34.987,52.907,34.987,139.093s-33.28,136.533-34.987,139.093 c-0.853,0.853-1.707,1.707-3.413,1.707h-98.133v42.667h166.4c25.6,0,46.933-21.333,46.933-46.933v-34.133 c0-20.48,17.92-38.4,38.4-38.4h34.133c2.56,0,4.267,1.707,4.267,4.267v25.6c0,6.827-5.973,10.24-11.093,11.947 c-3.413,1.707-5.973,3.413-5.973,5.12v76.8c0,70.827-35.84,88.747-70.827,105.813C415.795,452.804,414.942,452.804,414.089,452.804z M216.969,290.671h40.96c5.973-10.24,32.427-58.027,32.427-132.267S263.902,36.378,257.929,26.138h-40.96 c9.387,16.213,30.72,63.147,30.72,132.267S226.355,274.458,216.969,290.671z M165.769,290.671h40.96 c5.973-10.24,32.427-58.027,32.427-132.267S212.702,36.378,206.729,26.138h-40.96c9.387,16.213,30.72,63.147,30.72,132.267 S175.155,274.458,165.769,290.671z M294.622,452.804c-5.12,0-11.093-1.707-15.36-5.973c-8.533-8.533-8.533-22.187,0-29.867 l8.533-8.533c6.827-6.827,18.773-7.68,26.453-2.56l28.16-28.16c1.707-1.707,4.267-1.707,5.973,0 c0.853,0.853,0.853,1.707,0.853,3.413s0,2.56-0.853,3.413l-28.16,28.16c5.12,8.533,4.267,19.627-2.56,26.453l-8.533,8.533 C305.715,451.098,299.742,452.804,294.622,452.804z M303.155,410.138c-3.413,0-6.827,1.707-9.387,3.413l-8.533,8.533 c-5.12,5.12-5.12,12.8,0,17.92c5.12,5.12,12.8,5.12,17.92,0l8.533-8.533c5.12-5.12,5.12-11.947,0.853-17.067 c0,0-0.853,0-0.853-0.853s-0.853-0.853-0.853-0.853C309.129,410.991,306.569,410.138,303.155,410.138z M209.289,452.804 c-5.12,0-11.093-1.707-15.36-5.973c-8.533-8.533-8.533-22.187,0-29.867l8.533-8.533c6.827-6.827,18.773-7.68,26.453-2.56 l28.16-28.16c1.707-1.707,4.267-1.707,5.973,0c0.853,0.853,0.853,1.707,0.853,3.413s0,2.56-0.853,3.413l-28.16,28.16 c5.12,8.533,4.267,19.627-2.56,26.453l-8.533,8.533C220.382,451.098,214.409,452.804,209.289,452.804z M217.822,410.138 c-3.413,0-6.827,1.707-9.387,3.413l-8.533,8.533c-5.12,5.12-5.12,12.8,0,17.92c5.12,5.12,12.8,5.12,17.92,0l8.533-8.533 c5.12-5.12,5.12-11.947,0.853-17.067c0,0-0.853,0-0.853-0.853s-0.853-0.853-0.853-0.853 C223.795,410.991,221.235,410.138,217.822,410.138z M123.955,452.804c-5.12,0-11.093-1.707-15.36-5.973 c-8.533-8.533-8.533-22.187,0-29.867l8.533-8.533c6.827-6.827,18.773-7.68,26.453-2.56l28.16-28.16c1.707-1.707,4.267-1.707,5.973,0 c0.853,0.853,0.853,1.707,0.853,3.413s0,2.56-0.853,3.413l-28.16,28.16c5.12,8.533,4.267,19.627-2.56,26.453l-8.533,8.533 C135.049,451.098,129.075,452.804,123.955,452.804z M132.489,410.138c-3.413,0-6.827,1.707-9.387,3.413l-8.533,8.533 c-5.12,5.12-5.12,12.8,0,17.92c5.12,5.12,12.8,5.12,17.92,0l8.533-8.533c5.12-5.12,5.12-11.947,0.853-17.067 c0,0-0.853,0-0.853-0.853s-0.853-0.853-0.853-0.853C138.462,410.991,135.902,410.138,132.489,410.138z'></path>}
      </g>
    </svg>
  )
}

export default Boat