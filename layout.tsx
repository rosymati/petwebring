import type { ComponentChildren } from "preact";

interface Props {
  title: string;
  children: ComponentChildren;
}

const PAW_PATH =
  "M39.041,36.843c2.054,3.234,3.022,4.951,3.022,6.742c0,3.537-2.627,5.252-6.166,5.252c-1.56,0-2.567-0.002-5.112-1.326c0,0-1.649-1.509-5.508-1.354c-3.895-0.154-5.545,1.373-5.545,1.373c-2.545,1.323-3.516,1.309-5.074,1.309c-3.539,0-6.168-1.713-6.168-5.252c0-1.791,0.971-3.506,3.024-6.742c0,0,3.881-6.445,7.244-9.477c2.43-2.188,5.973-2.18,5.973-2.18h1.093v-0.001c0,0,3.698-0.009,5.976,2.181C35.059,30.51,39.041,36.844,39.041,36.843z M16.631,20.878c3.7,0,6.699-4.674,6.699-10.439S20.331,0,16.631,0S9.932,4.674,9.932,10.439S12.931,20.878,16.631,20.878z M10.211,30.988c2.727-1.259,3.349-5.723,1.388-9.971s-5.761-6.672-8.488-5.414s-3.348,5.723-1.388,9.971C3.684,29.822,7.484,32.245,10.211,30.988z M32.206,20.878c3.7,0,6.7-4.674,6.7-10.439S35.906,0,32.206,0s-6.699,4.674-6.699,10.439C25.507,16.204,28.506,20.878,32.206,20.878z M45.727,15.602c-2.728-1.259-6.527,1.165-8.488,5.414s-1.339,8.713,1.389,9.972c2.728,1.258,6.527-1.166,8.488-5.414S48.455,16.861,45.727,15.602z";

const paws = [
  // trailing diagonally from top-left to bottom-right, like a dog trotting past
  { top: "4%", left: "6%", size: 44, rotate: 35 },
  { top: "12%", left: "13%", size: 36, rotate: 42 },
  { top: "20%", left: "8%", size: 40, rotate: 38 },
  { top: "29%", left: "16%", size: 34, rotate: 45 },
  // crossing the far right edge going down
  { top: "15%", right: "4%", size: 42, rotate: -40 },
  { top: "26%", right: "11%", size: 36, rotate: -35 },
  { top: "38%", right: "5%", size: 44, rotate: -42 },
  // bottom scatter
  { bottom: "14%", left: "7%", size: 38, rotate: 30 },
  { bottom: "6%", left: "14%", size: 32, rotate: 25 },
  { bottom: "10%", right: "8%", size: 40, rotate: -30 },
];

function PawPrint({
  top,
  bottom,
  left,
  right,
  size,
  rotate,
}: (typeof paws)[0]) {
  const style = [
    "position:fixed",
    "z-index:0",
    "pointer-events:none",
    "opacity:0.15",
    "fill:oklch(0.65 0.12 235)",
    top !== undefined ? `top:${top}` : "",
    bottom !== undefined ? `bottom:${bottom}` : "",
    left !== undefined ? `left:${left}` : "",
    right !== undefined ? `right:${right}` : "",
    `width:${size}px`,
    `height:${size}px`,
    `transform:rotate(${rotate}deg)`,
  ]
    .filter(Boolean)
    .join(";");

  return (
    <svg aria-hidden="true" style={style} viewBox="0 0 48.839 48.839">
      <path d={PAW_PATH} />
    </svg>
  );
}

export function Layout({ title, children }: Props) {
  return (
    <html lang="en">
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{title}</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Fredoka:wght@300..700&display=swap"
        />
        <link rel="preload" href="/style.css" as="style" />
        <link rel="stylesheet" href="/style.css" />
      </head>
      <body>
        {paws.map((p, i) => <PawPrint key={i} {...p} />)}
        {children}
      </body>
    </html>
  );
}
