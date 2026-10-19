// Illustrative state model only. No dependency, package integration or network.
const mode=process.argv[2] || 'retry';
if (!['success','retry','failure'].includes(mode)) throw new Error('Use success, retry or failure');
const states=mode==='success'?['queued','running','completed']:['queued','running','retrying','running',mode==='retry'?'completed':'failed'];
states.forEach((state,i)=>console.log(JSON.stringify({id:'job-001',state,attempt:i===0?0:i<3?1:2})));
