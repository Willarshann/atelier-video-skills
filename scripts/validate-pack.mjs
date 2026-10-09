import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import {spawnSync} from 'node:child_process';
import {fileURLToPath} from 'node:url';
const repo=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');
const files=[];
function walk(dir){for(const n of fs.readdirSync(dir)){const p=path.join(dir,n),s=fs.lstatSync(p);if(s.isSymbolicLink())throw Error('symlink : '+p);if(s.isDirectory()){if(n!=='.git'&&n!=='dist')walk(p);}else files.push(p);}}
walk(repo);
let count=0;
for(const f of files){
  const text=fs.readFileSync(f,'utf8');
  if(/\/Users\/[A-Za-z0-9_-]+|\/home\/[A-Za-z0-9_-]+|nsa-spot-novembre|obsidian-vault|\.env\s*=/i.test(text)&&!f.endsWith('validate-pack.mjs'))throw Error('Chemin privé : '+path.relative(repo,f));
  if(path.basename(f)==='SKILL.md'){
    const match=text.match(/^---\n([\s\S]*?)\n---\n/);if(!match)throw Error('Frontmatter : '+f);
    const name=match[1].match(/^name: (.+)$/m)?.[1],desc=match[1].match(/^description: (.+)$/m)?.[1];
    if(!name||name!==path.basename(path.dirname(f))||name.length>64||!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(name)||!desc||desc.length>1024||/[<>]|\[TODO/.test(desc))throw Error('Metadata : '+f);
    count++;
  }
  if(f.endsWith('.md')){
    for(const m of text.matchAll(/\]\(([^)]+)\)/g)){
      const link=m[1].split('#')[0];if(!link||link.includes('://'))continue;
      if(!fs.existsSync(path.resolve(path.dirname(f),link)))throw Error('Lien absent : '+path.relative(repo,f)+' → '+link);
    }
  }
}
const manifest=JSON.parse(fs.readFileSync(path.join(repo,'manifest.json')));
for(const n of manifest.modules)if(!fs.existsSync(path.join(repo,'skills',manifest.defaultSkill,'modules',n,'SKILL.md')))throw Error('Module non inclus : '+n);
const sandbox=fs.mkdtempSync(path.join(os.tmpdir(),'atelier-skills-install-'));
function run(args){return spawnSync(process.execPath,[path.join(repo,'scripts/install-skills.mjs'),...args],{encoding:'utf8'});}
const clean=run(['--dir',sandbox]);if(clean.status!==0)throw Error(clean.stderr);
const again=run(['--dir',sandbox]);if(again.status!==0||!again.stdout.includes('déjà identique'))throw Error('Idempotence');
const target=path.join(sandbox,manifest.defaultSkill,'SKILL.md');fs.appendFileSync(target,'\nModification personnelle de test.\n');
const altered=fs.readFileSync(target);const conflict=run(['--dir',sandbox]);
if(conflict.status===0||!altered.equals(fs.readFileSync(target)))throw Error('Conflit non protégé');
const modulesDir=fs.mkdtempSync(path.join(os.tmpdir(),'atelier-skills-modules-'));
const modules=run(['--modules','--dir',modulesDir]);if(modules.status!==0)throw Error(modules.stderr);
if(manifest.modules.some(n=>!fs.existsSync(path.join(modulesDir,n,'SKILL.md'))))throw Error('Module non installé');
console.log(JSON.stringify({ok:true,skillEntrypoints:count,files:files.length,relativeLinks:'valides',cleanInstall:'réussie',repeatInstall:'identique',modifiedSkill:'refusé sans écrasement',modulesInstalled:manifest.modules.length},null,2));
