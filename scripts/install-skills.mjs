import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import {fileURLToPath} from 'node:url';

// Copie locale inspectable, sans réseau, sans installation de logiciels, sans écrasement.
const repo=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');
const args=process.argv.slice(2);
const accepted=new Set(['--target','--dir','--modules','--dry-run']);
let target='claude',custom=null,modules=false,dry=false;
for(let i=0;i<args.length;i++){
  if(!accepted.has(args[i]))throw Error('Option inconnue : '+args[i]);
  if(args[i]==='--modules')modules=true;
  else if(args[i]==='--dry-run')dry=true;
  else {const value=args[++i];if(!value||value.startsWith('--'))throw Error('Valeur manquante');if(args[i-1]==='--target')target=value;else custom=value;}
}
if(!['claude','codex'].includes(target))throw Error('--target doit être claude ou codex');
const manifest=JSON.parse(fs.readFileSync(path.join(repo,'manifest.json')));
const selected=modules?manifest.modules:[manifest.defaultSkill];
const dest=custom?path.resolve(custom):path.join(os.homedir(),target==='claude'?'.claude':'.codex','skills');
function entries(root,rel=''){
  return fs.readdirSync(path.join(root,rel)).sort().flatMap(name=>{
    const p=path.join(rel,name),s=fs.lstatSync(path.join(root,p));
    if(s.isSymbolicLink())throw Error('Lien symbolique refusé : '+p);
    return s.isDirectory()?entries(root,p):[p];
  });
}
function equal(a,b){
  const x=entries(a),y=entries(b);
  return JSON.stringify(x)===JSON.stringify(y)&&x.every(f=>fs.readFileSync(path.join(a,f)).equals(fs.readFileSync(path.join(b,f))));
}
// Pré-vérifier tous les conflits avant toute copie, même en mode modules.
const plan=selected.map(name=>{
  if(!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(name))throw Error('Nom invalide');
  const src=path.join(repo,'skills',name),to=path.join(dest,name);
  if(!fs.existsSync(path.join(src,'SKILL.md')))throw Error('SKILL.md absent : '+name);
  entries(src);
  if(fs.existsSync(to)){
    if(!fs.lstatSync(to).isDirectory()||fs.lstatSync(to).isSymbolicLink()||!equal(src,to))throw Error('Conflit, aucune copie effectuée : '+name+'. Comparer et décider manuellement.');
    return{name,src,to,action:'déjà identique'};
  }
  return{name,src,to,action:'copier'};
});
for(const item of plan){
  if(!dry&&item.action==='copier'){
    fs.mkdirSync(dest,{recursive:true});
    fs.cpSync(item.src,item.to,{recursive:true,force:false,errorOnExist:true});
    if(!equal(item.src,item.to))throw Error('Copie différente : '+item.name);
  }
  console.log(JSON.stringify({skill:item.name,destination:item.to,action:item.action,dryRun:dry}));
}
