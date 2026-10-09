import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import {spawn,spawnSync} from 'node:child_process';
const args=process.argv.slice(2),video=args.shift(),opts={};
const allowed=new Set(['--width','--height','--fps','--frames','--rapport','--audio-reference']);
if(!video)throw Error('Usage : node audit-video.mjs film.mp4 [--width 720 --height 1280 --fps 30 --frames 2193 --rapport rapport.json --audio-reference ancien.mp4]');
for(let i=0;i<args.length;i+=2){if(!allowed.has(args[i])||!args[i+1]||args[i+1].startsWith('--'))throw Error('Option invalide');opts[args[i].slice(2)]=args[i+1];}
if(opts.rapport&&(path.resolve(opts.rapport)===path.resolve(video)||fs.existsSync(opts.rapport)))throw Error('Le rapport existe déjà ou cible la vidéo ; choisir un autre nom.');
for(const key of ['width','height','fps','frames'])if(opts[key]&&(!Number.isFinite(Number(opts[key]))||Number(opts[key])<=0))throw Error('Valeur numérique invalide : '+key);
const ffmpeg=process.env.FFMPEG||'ffmpeg',ffprobe=process.env.FFPROBE||'ffprobe';
const meta=spawnSync(ffprobe,['-v','error','-count_frames','-show_streams','-show_format','-of','json',video],{encoding:'utf8',maxBuffer:8*1024*1024});
if(meta.status!==0)throw Error('FFprobe : '+(meta.error?.message||meta.stderr));
const data=JSON.parse(meta.stdout),v=data.streams.find(s=>s.codec_type==='video'),a=data.streams.filter(s=>s.codec_type==='audio');
const issues=[];if(!v)issues.push('piste vidéo absente');
const ratio=s=>{const [n,d]=String(s).split('/').map(Number);return d?n/d:n;};
for(const key of ['width','height'])if(opts[key]&&v?.[key]!==Number(opts[key]))issues.push(key+' inattendu');
if(opts.fps&&Math.abs(ratio(v?.avg_frame_rate)-Number(opts.fps))>.001)issues.push('fps inattendu');
if(opts.frames&&Number(v?.nb_read_frames)!==Number(opts.frames))issues.push('nombre de frames inattendu');
const decoded=spawnSync(ffmpeg,['-v','error','-i',video,'-f','null','-'],{encoding:'utf8',maxBuffer:8*1024*1024});
if(decoded.status!==0||decoded.stderr?.trim())issues.push('erreur de décodage : '+(decoded.error?.message||decoded.stderr?.trim()||decoded.status));
async function audioHash(file){
  return await new Promise((resolve,reject)=>{
    const h=crypto.createHash('sha256');let stderr='';
    const p=spawn(ffmpeg,['-v','error','-i',file,'-map','0:a:0','-vn','-ar','48000','-ac','2','-f','s16le','-acodec','pcm_s16le','-']);
    p.stdout.on('data',b=>h.update(b));p.stderr.on('data',b=>stderr+=b.toString());p.on('error',reject);
    p.on('close',code=>code||stderr.trim()?reject(Error('Comparaison audio impossible : '+stderr)):resolve(h.digest('hex')));
  });
}
let audioIdentique=null;
if(opts['audio-reference']){audioIdentique=(await audioHash(video))===(await audioHash(opts['audio-reference']));if(!audioIdentique)issues.push('audio différent de la référence');}
const report={ok:issues.length===0,video:path.basename(video),duration:Number(data.format.duration),videoStream:v?{codec:v.codec_name,width:v.width,height:v.height,fps:ratio(v.avg_frame_rate),frames:Number(v.nb_read_frames)}:null,audioStreams:a.map(x=>({codec:x.codec_name,sampleRate:Number(x.sample_rate),channels:x.channels})),decoding:decoded.status===0&&!decoded.stderr?.trim(),audioIdentique,issues,limits:'Ne contrôle pas lèvres/voix, stabilité, sens des sous-titres, licences, noir/figé ni qualité artistique.'};
if(opts.rapport)fs.writeFileSync(opts.rapport,JSON.stringify(report,null,2),{flag:'wx'});
console.log(JSON.stringify(report,null,2));if(issues.length)process.exitCode=1;
