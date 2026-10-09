import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import {spawnSync} from 'node:child_process';
import {fileURLToPath} from 'node:url';
const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');
const manifest=JSON.parse(fs.readFileSync(path.join(root,'manifest.json')));
const full=path.join(root,'skills',manifest.defaultSkill);
for(const name of manifest.modules){fs.copyFileSync(path.join(root,'LICENSE'),path.join(root,'skills',name,'LICENSE'));fs.cpSync(path.join(root,'skills',name),path.join(full,'modules',name),{recursive:true});}
fs.copyFileSync(path.join(root,'LICENSE'),path.join(full,'LICENSE'));
fs.mkdirSync(path.join(root,'dist'),{recursive:true});
const all=[manifest.defaultSkill,...manifest.modules];
for(const name of all){const output=path.join(root,'dist',name+'.zip');if(fs.existsSync(output))throw Error('Archive existe : '+output);const r=spawnSync('zip',['-q','-r',output,name],{cwd:path.join(root,'skills'),encoding:'utf8'});if(r.status)throw Error(r.stderr||'zip indisponible');}
const pack=path.join(root,'dist','atelier-video-skills-pack.zip');if(fs.existsSync(pack))throw Error('Archive pack existe');
const r=spawnSync('zip',['-q','-r',pack,'skills','scripts','manifest.json','README.md','INSTALLATION.md','MESSAGE-POUR-CLAUDE.md','PROVENANCE.md','VALIDATION.md','LICENSE'],{cwd:root,encoding:'utf8'});if(r.status)throw Error(r.stderr);
const sums=fs.readdirSync(path.join(root,'dist')).filter(x=>x.endsWith('.zip')).sort().map(f=>crypto.createHash('sha256').update(fs.readFileSync(path.join(root,'dist',f))).digest('hex')+'  '+f).join('\n')+'\n';
fs.writeFileSync(path.join(root,'dist','SHA256SUMS.txt'),sums);
console.log(sums);
