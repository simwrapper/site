var P=Object.defineProperty;var L=(u,t,e)=>t in u?P(u,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):u[t]=e;var m=(u,t,e)=>(L(u,typeof t!="symbol"?t+"":t,e),e);import{g as S}from"./index-24c2379b.js";import{H as g}from"./HTTPFileSystem-017e7593.js";import{f as R}from"./util-8430d78c.js";import{W as C}from"./RoadNetworkLoader.worker-ba4f3b4d.js";import{C as F}from"./Coords-23d23a7c.js";import{r as D}from"./group-f6e6d4c5.js";function k(){return new Worker("/site/assets/DataFetcher.worker-5b7c4717.js")}const O=avro,E=!!window.showDirectoryPicker,A=!E;class G{constructor(...t){m(this,"files",[]);m(this,"threads",[]);m(this,"subfolder","");m(this,"root","");m(this,"fileApi");m(this,"networks",{});m(this,"featureCollections",{});m(this,"datasets",{});this.root=t.length?t[0]:"",this.subfolder=t.length?t[1]:"",this.fileApi=this._getFileSystem(this.root)}kill(){for(const t of this.threads)t.terminate()}getFilteredDataset(t){return t.dataset in this.datasets?{filteredRows:this.datasets[t.dataset].filteredRows}:{filteredRows:null}}async OLDgetFiltered(t){const e=this.datasets[t.dataset].filteredRows;if(!e)return{filteredRows:null};let s={};if(t.value&&t.groupBy){const i=t.value,c=t.groupBy;s=D(e,l=>l.reduce((o,a)=>o+a[i],0),l=>l[c])}const d=Array.from(s.keys()),r=Array.from(s.values());return{filteredRows:{x:d,y:r}}}async getDataset(t,e){try{this.datasets[t.dataset]||(console.log("load:",t.dataset),this.datasets[t.dataset]={dataset:this._fetchDataset(t,e),activeFilters:{},filteredRows:null,filterListeners:new Set});let d=await((l,o)=>{const a=new Promise((f,n)=>{setTimeout(()=>{n(new Error(`Operation timed out after ${o}ms`))},o)});return Promise.race([l,a])})(this.datasets[t.dataset].dataset,60*1e3),{_comments:r,...i}=d,c=r;return t.ignoreColumns&&t.ignoreColumns.forEach(l=>{delete i[l]}),t.useLastRow&&Object.keys(i).forEach(l=>{const o=d[l].values;i[l]=o[o.length-1]}),{allRows:i,comments:c}}catch(s){throw console.error(""+s),Error(`loading ${t.dataset}. Missing? CSV too large?`)}}setRowWisePropertyTable(t,e,s){const d=t.substring(t.lastIndexOf("/")+1);let r={dataset:d};return typeof s!="string"&&(r=Object.assign(r,s)),this.datasets[d]={activeFilters:{},filteredRows:null,filterListeners:new Set,dataset:new Promise(i=>{i(e)})},this.datasets[d].dataset}getFeatureCollection(t){return this.featureCollections[t]}async registerFeatures(t,e,s){this.featureCollections[t]=e;const d=e.map(r=>r.properties||{});await this.setFeatureProperties(t,d,s),e.forEach(r=>{r.properties={}})}setFeatureProperties(t,e,s){const d=t.substring(t.lastIndexOf("/")+1);let r={dataset:d};return typeof s!="string"&&(r=Object.assign(r,s)),this.datasets[d]={activeFilters:{},filteredRows:null,filterListeners:new Set,dataset:new Promise((i,c)=>{const l=new k;this.threads.push(l);try{l.postMessage({config:r,featureProperties:e}),l.onmessage=o=>{l.terminate(),o.data.error&&(console.error(o.data.error),c(`Problem loading properties in ${t}`)),i(o.data)}}catch(o){l.terminate(),console.error(o),c(o)}})},this.datasets[d].dataset}setPreloadedDataset(t){this.datasets[t.key]={dataset:new Promise((e,s)=>{e(t.dataTable)}),activeFilters:{},filteredRows:null,filterListeners:new Set}}async getRoadNetwork(t,e,s,d){const r=`/${e}/${t}`,i={};return s.projection&&(i.crs=s.projection),this.networks[r]||(this.networks[r]=this._fetchNetwork({subfolder:e,filename:t,vizDetails:s,cbStatus:d,options:i})),await this.networks[r]}async setFilter(t){const{dataset:e,column:s,value:d,invert:r,range:i}=t;if(!this.datasets[e]){console.warn(`${e} doesn't exist yet`),console.warn(Object.keys(this.datasets));return}console.log("> setFilter",e,s,d);const c=Array.isArray(d)?d:[d];this.datasets[e].activeFilters==null&&(this.datasets[e].activeFilters={});const l=this.datasets[e].activeFilters;c.length?l[s]={values:c,invert:r,range:i}:delete l[s],await this._updateFilters(e)}addFilterListener(t,e){if(!this.datasets[t.dataset])throw Error("No dataset named: "+t.dataset);this.datasets[t.dataset].filterListeners.add(e)}removeFilterListener(t,e){try{this.datasets[t.dataset].filterListeners&&this.datasets[t.dataset].filterListeners.delete(e)}catch{}}clearCache(){this.kill(),this.datasets={},this.networks={}}async _updateFilters(t){console.log("> updateFilters ",t);const e=this.datasets[t];if(console.log({metaData:e}),!Object.keys(e.activeFilters).length){console.log("no keys"),e.filteredRows=null,this._notifyListeners(t);return}const s=await e.dataset,d=Object.keys(s);let r=[];const i=s[d[0]].values.length;console.log("FILTERS:",e.activeFilters),console.log("TOTLROWS",i);const c=new Array(i).fill(!0),l=/^(<|>)/;for(const[o,a]of Object.entries(e.activeFilters)){const f=s[o];if(a.values[0]===void 0||a.values[0]==="")throw Error(t+": filter error");if(l.test(a.values[0]))a.values[0].startsWith("<=")?(a.conditional="<=",a.values[0]=a.values[0].substring(2).trim()):a.values[0].startsWith(">=")?(a.conditional=">=",a.values[0]=a.values[0].substring(2).trim()):a.values[0].startsWith("<")?(a.conditional="<",a.values[0]=a.values[0].substring(1).trim()):a.values[0].startsWith(">")&&(a.conditional=">",a.values[0]=a.values[0].substring(1).trim());else if(a.values.length===1&&typeof a.values[0]=="string"){const n=parseFloat(a.values[0]);Number.isFinite(n)&&a.values.push(n)}for(let n=0;n<i;n++)W(a,f.values[n])||(c[n]=!1)}for(let o=0;o<i;o++)if(c[o]){const a={};d.forEach(f=>a[f]=s[f].values[o]),r.push(a)}e.filteredRows=r,this._notifyListeners(t)}_notifyListeners(t){const e=this.datasets[t];for(const s of e.filterListeners)s(t)}async _fetchDataset(t,e){if(!this.files.length){const{files:s}=await new g(this.fileApi).getDirectory(this.subfolder);this.files=s}return new Promise((s,d)=>{const r=new k;this.threads.push(r);try{r.postMessage({fileSystemConfig:this.fileApi,subfolder:this.subfolder,files:this.files,config:t,options:e}),r.onmessage=i=>{var c;if(r.terminate(),!i.data||i.data.error){let l=""+(((c=i.data)==null?void 0:c.error)||"Error loading file");l=l.replace("[object Response]","Error loading file"),t!=null&&t.dataset&&l.indexOf(t.dataset)===-1&&(l+=`: ${t.dataset}`),d(l)}s(i.data)}}catch(i){r.terminate(),console.error(i),d(i)}})}async _getAvroNetwork(t){const s=await new g(this.fileApi).getFileBlob(`${t.subfolder}/${t.filename}`),r=(await new Promise(async(w,p)=>{const y=[];O.createBlobDecoder(s).on("metadata",v=>{}).on("data",v=>{y.push(v)}).on("end",()=>{w(y)})}))[0],i=r.linkId.length,c=r.crs||"EPSG:4326",l=c!=="EPSG:4326"&&c!=="WGS84",o=new Float32Array(2*i),a=new Float32Array(2*i),f=[];let n=[0,0],h=[0,0];for(let w=0;w<i;w++){const p=r.linkId[w],y=2*r.from[w],v=2*r.to[w];n[0]=r.nodeCoordinates[y],n[1]=r.nodeCoordinates[1+y],h[0]=r.nodeCoordinates[v],h[1]=r.nodeCoordinates[1+v],l&&(n=F.toLngLat(c,n),h=F.toLngLat(c,h)),o[2*w+0]=n[0],o[2*w+1]=n[1],a[2*w+0]=h[0],a[2*w+1]=h[1],f[w]=p}return{source:o,dest:a,linkIds:f,projection:"EPSG:4326"}}async _fetchNetwork(t){return new Promise(async(e,s)=>{const{subfolder:d,filename:r,vizDetails:i,cbStatus:c,options:l}=t,o=`/${d}/${r}`;console.log("load network:",o);let a=o.indexOf("/")>-1?o.substring(0,o.lastIndexOf("/")):this.subfolder;try{const{files:n}=await new g(this.fileApi).getDirectory(a);let h=o.indexOf("/")===-1?o:o.substring(o.lastIndexOf("/")+1);R(n,h).length!==1&&s("File not found: "+o)}catch{s("Error reading folder: "+a)}if(r.toLocaleLowerCase().endsWith(".avro")){const n=await this._getAvroNetwork(t);e(n);return}const f=new C;try{f.onmessage=n=>{if(n.data.promptUserForCRS){let h=prompt('Enter the projection coordinate reference system, e.g. "EPSG:25832", or cancel if unknown')||"Atlantis";Number.isInteger(parseInt(h))&&(h=`EPSG:${h}`),f.postMessage({crs:h});return}if(n.data.status){c&&c(n.data.status);return}f.terminate(),n.data.error&&(console.error(n.data.error),s(n.data.error)),e(n.data.links)},f.postMessage({filePath:o,fileSystem:this.fileApi,vizDetails:i,options:l,isFirefox:A})}catch(n){f.terminate(),console.error(n),s(n)}})}_getFileSystem(t){const e=S.state.svnProjects.filter(s=>s.slug===t);if(e.length===0)throw console.error(`DDM: no such project, is slug correct? (${t})`),Error;return e[0]}}function W(u,t){const e={"<":()=>t<u.values[0],"<=":()=>t<=u.values[0],">":()=>t>u.values[0],">=":()=>t>=u.values[0]};let s;return u.range?s=t>=u.values[0]&&t<=u.values[1]:u.conditional?s=e[u.conditional]():s=u.values.includes(t),u.invert?!s:s}export{G as D,k as W,O as a,W as c};
//# sourceMappingURL=DashboardDataManager-9bea9fc4.js.map