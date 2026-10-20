/* Pieces used by the home chunk and by the lazily loaded catalog chunk alike. */
export const repo='https://github.com/tunakurucu/startup-landing-lab';
export const labels:Record<string,string>={'typographic-technical':'Typographic technical','expressive-world':'Expressive world','canvas-first':'Canvas first','functional-entrance':'Functional entrance','workflow-theater':'Workflow theater','immersive-editorial':'Immersive editorial','editorial-platform':'Editorial platform'};
export function Mark({kind='functional-entrance'}:{kind?:string}){return <div className={`study ${kind}`} aria-hidden="true"><span className="shape a"/><span className="shape b"/><span className="shape c"/><span className="study-line"/><span className="study-label">A STUDY IN COMPOSITION</span></div>}
export function Missing(){return <section className="section"><h1>That page isn’t here.</h1><a href="#/">Return to the lab ↗</a></section>}
