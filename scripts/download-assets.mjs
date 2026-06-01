import { writeFile, mkdir } from 'fs/promises';
import { existsSync } from 'fs';
import path from 'path';

const BASE = 'public/images';

const smallWorks = [
  { id: 'c4aec3_30300bf16a204bc79340d4303f8f8fe7~mv2', alt: 'Pink Fields 1' },
  { id: 'c4aec3_8fcfb6511f1a4aaf86839cee4c51a459~mv2', alt: 'Pink Fields 2' },
  { id: 'c4aec3_301bd5f060a64b42a131d6d0af0ea01f~mv2', alt: 'Lush' },
  { id: 'c4aec3_9ce36f76977c4444b1ad28b25f18eb40~mv2', alt: 'Kindness 1' },
  { id: 'c4aec3_61ef60979cde40818e5b8a34fd77553c~mv2', alt: 'Kindness 2' },
  { id: 'c4aec3_bc22648ec9d349909efa27689a657e24~mv2', alt: 'Kindness 3' },
  { id: 'c4aec3_4f4a56458483490e8d24b40560560e6e~mv2', alt: 'Small Work 7' },
  { id: 'c4aec3_6d46e725468b47b3995424bd179b0718~mv2', alt: 'Small Work 8' },
  { id: 'c4aec3_443f68b56aec4ca69baf1fa12f619a2a~mv2', alt: 'Small Work 9' },
  { id: 'c4aec3_c319390526ae4593ad48e62beaa31e11~mv2', alt: 'Small Work 10' },
  { id: 'c4aec3_c7e7fbfb60d3413f9bf5f5b08b1ebca4~mv2', alt: 'Small Work 11' },
  { id: 'c4aec3_b70a6d501cf343df9a8c310d77626570~mv2', alt: 'Small Work 12' },
];

const mediumWorks = [
  { id: 'c4aec3_4595d833e1564932863a9af49e402cf2~mv2', alt: 'Gorgeous Blooms' },
  { id: 'c4aec3_70dc2698d4f442efbadd3facabad1b48~mv2', alt: 'Blowing in the Wind' },
  { id: 'c4aec3_2a816a072f6d4eedbb13c4270ab4187c~mv2', alt: 'Alone but not Alone' },
  { id: 'c4aec3_2cd999b291714835ad27e628f86c8a04~mv2', alt: 'Bursting Lily' },
  { id: 'c4aec3_e95492f1d73a440896904fa4cfabc3ef~mv2', alt: 'Peaceful' },
  { id: 'c4aec3_55f442157f084d17acbe4bb21da526eb~mv2', alt: 'Conversations Between Roses' },
  { id: 'c4aec3_6921db5831b84a1b9714a9935559b75b~mv2', alt: 'Beach Day' },
  { id: 'c4aec3_b802e85a55234837934e40559f258986~mv2', alt: 'Regenerative' },
  { id: 'c4aec3_2133ec2204f148b883860c6230fc23ce~mv2', alt: 'Impasto Syndrome' },
  { id: 'c4aec3_61bbbb738f814f648174cb39a91d8233~mv2', alt: 'For the Love of Nature' },
  { id: 'c4aec3_19816aab791d40d3a2c6f502ccf65322~mv2', alt: 'Medium Work 11' },
];

const largeWorks = [
  { id: 'c4aec3_2bfb34bd60db45b6b7346133b519ca61~mv2', alt: 'Large Work 1' },
  { id: 'c4aec3_29a92f663a54401c83081959249be7f7~mv2', alt: 'Large Work 2' },
  { id: 'c4aec3_08ff606fb0f54b6aa16073eeee4bbc2a~mv2', alt: 'Traveling' },
  { id: 'c4aec3_20cf3338cc874c51b40cb09c2321cb95~mv2', alt: 'Garden Morning' },
  { id: 'c4aec3_0150f5bb857e43a7b6976209c7e0be52~mv2', alt: 'Open Spaces' },
  { id: 'c4aec3_93d8c7b9d93c4d35922455b23460071a~mv2', alt: 'Space to Play' },
  { id: 'c4aec3_7c38c80ce94a4b6eb82c95f3e06b64d0~mv2', alt: 'In Flight' },
  { id: 'c4aec3_28f8daa2d82e4d40b41f4b0f0bf5c01e~mv2', alt: 'New Hope' },
  { id: 'c4aec3_76820cbd4c61445cac460651ba09aa58~mv2', alt: 'Earth Day' },
  { id: 'c4aec3_11a8dd469fd14619a8c675b05bebacc5~mv2', alt: 'Entry to Joy' },
  { id: 'c4aec3_c5cf1fde05ea416f90151289e81609db~mv2', alt: 'Pink Play' },
  { id: 'c4aec3_a32864430ecf4efdb1445e019a7cbd2c~mv2', alt: 'Impressions' },
  { id: 'c4aec3_41524b3597784fa7862b55a4ad6088fb~mv2', alt: 'Impressions 2' },
  { id: 'c4aec3_ddd74ae844d341b798309607273681a0~mv2', alt: 'My Spring Colors' },
  { id: 'c4aec3_b1aba30c24694da68a4a3d74d674775f~mv2', alt: 'Calling the Birds' },
];

const bioImages = [
  { id: 'c4aec3_1000002108', alt: 'Bio Photo 1', ext: 'jpg' },
];

function getHighResUrl(id) {
  return `https://static.wixstatic.com/media/${id}.jpg/v1/fill/w_1200,h_1200,q_90/file.jpg`;
}

async function downloadImage(url, filepath) {
  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const buf = Buffer.from(await res.arrayBuffer());
    await writeFile(filepath, buf);
    console.log(`OK: ${filepath} (${(buf.length / 1024).toFixed(0)}KB)`);
  } catch (e) {
    console.error(`FAIL: ${filepath} - ${e.message}`);
  }
}

async function downloadBatch(items, dir) {
  const tasks = items.map((item, i) => {
    const slug = item.alt.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/-+$/, '');
    const filename = `${String(i + 1).padStart(2, '0')}-${slug}.jpg`;
    const url = getHighResUrl(item.id);
    return downloadImage(url, path.join(dir, filename));
  });
  // Download 4 at a time
  for (let i = 0; i < tasks.length; i += 4) {
    await Promise.all(tasks.slice(i, i + 4));
  }
}

console.log('Downloading Small Works...');
await downloadBatch(smallWorks, `${BASE}/small-works`);

console.log('\nDownloading Medium Works...');
await downloadBatch(mediumWorks, `${BASE}/medium-works`);

console.log('\nDownloading Large Works...');
await downloadBatch(largeWorks, `${BASE}/large-works`);

console.log('\nDone! Total images:', smallWorks.length + mediumWorks.length + largeWorks.length);
