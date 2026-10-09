import fs from 'node:fs';

// Lecture seule. Usage : node verifier-gel-medias.mjs baseline.json candidat.json
// --allowed=asset,sourceStart,intent,position seulement si le brief permet ces changements.
const args=process.argv.slice(2);
const files=args.filter(a=>!a.startsWith('--'));
const option=args.find(a=>a.startsWith('--allowed='));
if(files.length!==2||args.some(a=>a.startsWith('--')&&!a.startsWith('--allowed='))){
  console.error('Usage : node verifier-gel-medias.mjs baseline.json candidat.json [--allowed=asset,sourceStart,intent]');
  process.exit(2);
}
const allowed=new Set((option?.slice('--allowed='.length)||'asset,sourceStart,intent').split(',').filter(Boolean));
function canonical(v){
  if(Array.isArray(v))return v.map(canonical);
  if(v&&typeof v==='object')return Object.fromEntries(Object.keys(v).sort().map(k=>[k,canonical(v[k])]));
  return v;
}
function equal(a,b){return JSON.stringify(canonical(a))===JSON.stringify(canonical(b));}
try{
  const [baseline,candidate]=files.map(f=>JSON.parse(fs.readFileSync(f,'utf8')));
  for(const a of [baseline,candidate]){
    if(!Array.isArray(a)||a.some(x=>!x||Array.isArray(x)||typeof x!=='object'||typeof x.id!=='string'))throw Error('Le storyboard doit être un tableau de plans avec un id texte.');
    if(new Set(a.map(x=>x.id)).size!==a.length)throw Error('Identifiants de plans dupliqués.');
  }
  const violations=[],changed=[];
  if(baseline.length!==candidate.length)violations.push({type:'nombre-de-plans'});
  for(let i=0;i<Math.max(baseline.length,candidate.length);i++){
    const old=baseline[i],now=candidate[i];
    if(!old||!now){violations.push({index:i,type:'plan-ajoute-ou-retire'});continue;}
    if(old.id!==now.id){violations.push({index:i,type:'ordre-ou-identite'});continue;}
    const fields=[...new Set([...Object.keys(old),...Object.keys(now)])].filter(k=>!equal(old[k],now[k]));
    if(fields.length)changed.push({id:old.id,fields});
    for(const field of fields)if(!allowed.has(field))violations.push({id:old.id,field,type:'champ-gele'});
  }
  console.log(JSON.stringify({ok:violations.length===0,plans:candidate.length,changed,violations},null,2));
  if(violations.length)process.exitCode=1;
}catch(e){console.error(e.message);process.exitCode=2;}
