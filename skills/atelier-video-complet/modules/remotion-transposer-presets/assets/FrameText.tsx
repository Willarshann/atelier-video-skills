import React from 'react';
import {useCurrentFrame} from 'remotion';

// Exemple original minimal : aucune macro ni police tierce n'est embarquée.
// Charger la police choisie dans le projet avant d'utiliser ce composant.
export function FrameText({text,start=0,duration=18,stagger=.9,width=600,size=70,fontFamily='sans-serif',color='white',mode='rise'}:{text:string;start?:number;duration?:number;stagger?:number;width?:number;size?:number;fontFamily?:string;color?:string;mode?:'rise'|'letters'|'compact'|'cinema'}){
  const frame=useCurrentFrame();
  const ease=(t:number)=>1-Math.pow(1-Math.max(0,Math.min(1,t)),3);
  const p=ease((frame-start)/duration);
  const canvas=typeof document==='undefined'?null:document.createElement('canvas').getContext('2d');
  if(canvas)canvas.font=`${size}px ${fontFamily}`;
  const extra=mode==='compact'?text.length*5:0;
  const measured=(canvas?.measureText(text).width||text.length*size*.6)+extra;
  const fitted=Math.min(size,size*(width-12)/measured);
  const style:React.CSSProperties={fontFamily,fontSize:fitted,width,lineHeight:1.1,whiteSpace:'nowrap',color,opacity:mode==='letters'?1:p,transform:mode==='cinema'?`scale(${1.04-.04*p})`:mode==='rise'?`translateY(${(1-p)*18}px)`:'none',transformOrigin:'left'};
  if(mode==='letters'||mode==='compact')return <div style={style}>{[...text].map((c,i)=>{const q=ease((frame-start-i*stagger)/duration);return <span key={i} style={{display:'inline-block',whiteSpace:'pre',opacity:mode==='letters'?q:1,transform:mode==='letters'?`translateY(${(1-q)*12}px)`:`translateX(${(i-(text.length-1)/2)*(1-p)*5}px)`}}>{c}</span>})}</div>;
  return <div style={style}>{text}</div>;
}
