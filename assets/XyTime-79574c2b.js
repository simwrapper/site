var A=Object.defineProperty;var E=(e,t,i)=>t in e?A(e,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[t]=i;var p=(e,t,i)=>(E(e,typeof t!="symbol"?t+"":t,i),i);import{d as b,n as C,r as z,g as h,k as u,R as T,M as L,h as c}from"./index-24c2379b.js";import{G as $}from"./lil-gui.esm-1e0f7d72.js";import{y as P}from"./index-719eff74.js";import{c as x}from"./index-48a773a4.js";import{u as B}from"./util-8430d78c.js";import{C as I}from"./CollapsiblePanel-4fe937e3.js";import{D as O}from"./DrawingTool-6c6ed265.js";import{H as F}from"./HTTPFileSystem-017e7593.js";import{L as V}from"./LegendBox-11257845.js";import{L as X}from"./LegendStore-3aadd543.js";import{D as W,S as N}from"./set-rtl-text-plugin-40f27fec.js";import{t as j}from"./index-5ab379e4.js";import{S as Y}from"./text-layer-98e63af8.js";import{D as G}from"./data-filter-8aa14a06.js";import{Z as H}from"./ZoomButtons-85071e8e.js";import"./fxp-b80b6d05.js";import"./layer-7bd8a07e.js";import"./geojson-layer-4489d197.js";import"./path-layer-7a20967b.js";import"./layer-extension-7e1876a6.js";const d=6,q=b({name:"TimeSlider",props:{labels:Array,range:Array,activeTimeExtent:Array,isAnimating:Boolean},data:()=>({state:{componentWidth:0,dragStartX:0,dragType:0,isDragging:!1,isSetupComplete:!1,leftPosition:0,rightPosition:1,datasetRange:[0,86400],labels:["",""]},id:"id-"+Math.floor(1e12*Math.random()),resizer:null}),computed:{fullDatasetTimeSpan(){return this.state.datasetRange[1]-this.state.datasetRange[0]},extentLeftToRight(){return this.state.rightPosition-this.state.leftPosition},hasNonZeroTimeRange(){return!!this.fullDatasetTimeSpan},calculateActiveMargins(){const e=this.state.componentWidth-2*d,t=Math.floor(e*this.state.leftPosition),i=Math.floor(e*(1-this.state.rightPosition));return{marginLeft:`${t}px`,marginRight:`${i}px`}}},mounted(){this.getDimensions(),this.setupInitialValues(),this.setupResizer(),window.addEventListener("mouseup",this.dragEnd),window.addEventListener("mousemove",this.dragging)},beforeDestroy(){window.removeEventListener("mouseup",this.dragEnd),window.removeEventListener("mousemove",this.dragging)},watch:{activeTimeExtent(){this.updateExtent()},labels(){this.updateLabels()},"state.leftPosition"(){this.emitValues()},"state.rightPosition"(){this.emitValues()}},methods:{setupResizer(){try{this.resizer=new ResizeObserver(this.getDimensions);const e=document.getElementById(`id-${this.id}`);this.resizer.observe(e)}catch(e){console.error(""+e)}},setupInitialValues(){try{this.range&&(this.state.datasetRange=this.range),this.fullDatasetTimeSpan===0?(this.state.leftPosition=0,this.state.rightPosition=1):this.updateExtent()}catch(e){console.error(""+e)}finally{this.state.isSetupComplete=!0}},updateExtent(){this.activeTimeExtent&&(this.state.leftPosition=(this.activeTimeExtent[0]-this.state.datasetRange[0])/this.fullDatasetTimeSpan,this.state.rightPosition=(this.activeTimeExtent[1]-this.state.datasetRange[0])/this.fullDatasetTimeSpan)},updateLabels(){this.labels&&(this.state.labels=this.labels)},emitValues(){if(!this.state.isSetupComplete)return;const e=this.state.datasetRange[0]+this.state.leftPosition*this.fullDatasetTimeSpan,t=this.state.datasetRange[0]+this.state.rightPosition*this.fullDatasetTimeSpan;this.$emit("timeExtent",[e,t])},getDimensions(){var e;this.state.componentWidth=((e=this.$refs.slider)==null?void 0:e.clientWidth)||0},dragStart(e){this.$emit("drag"),this.state.isDragging=!0,this.state.dragStartX=e.clientX;const t=this.state.componentWidth-2*d,i=Math.floor(t*this.state.leftPosition),s=Math.floor(t*(1-this.state.rightPosition)),o=this.state.componentWidth-s-i-2*d;e.offsetX>=0&&e.offsetX<o?this.state.dragType=0:e.offsetX<0?this.state.dragType=1:e.offsetX>o&&(this.state.dragType=2)},dragging(e){if(!this.state.isDragging)return;const t=e.clientX-this.state.dragStartX,i=this.state.componentWidth-2*d;if(this.state.dragType==0){const s=this.extentLeftToRight;let o=(i*this.state.leftPosition+t)/i,a=o+s;o<0&&(o=0,a=s),a>1&&(a=1,o=a-s),this.state.leftPosition=o,this.state.rightPosition=a,this.state.dragStartX=e.clientX;return}if(this.state.dragType==1){const s=i*this.state.leftPosition+t;this.state.leftPosition=Math.max(0,s/i),this.state.leftPosition>this.state.rightPosition&&(this.state.rightPosition=this.state.leftPosition),this.state.dragStartX=e.clientX;return}if(this.state.dragType==2){const s=i*this.state.rightPosition+t;this.state.rightPosition=Math.min(1,s/i),this.state.leftPosition>this.state.rightPosition&&(this.state.leftPosition=this.state.rightPosition),this.state.dragStartX=e.clientX;return}},dragEnd(e){this.state.isDragging=!1}}});var Z=function(){var t=this,i=t._self._c;return t._self._setupProxy,t.hasNonZeroTimeRange?i("div",{staticClass:"time-slider-component",attrs:{id:`id-${t.id}`}},[i("div",{staticClass:"label-area"},[i("p",{staticClass:"p1"},[t._v(t._s(t.state.labels[0]))]),i("p",{directives:[{name:"show",rawName:"v-show",value:t.state.labels[1]!==void 0,expression:"state.labels[1] !== undefined"}],staticClass:"p2"},[t._v(" - "+t._s(t.state.labels[1]))])]),i("div",{staticClass:"slider-area"},[i("button",{staticClass:"button play-button",attrs:{size:"is-small",type:"is-link"},on:{click:function(s){return t.$emit("toggleAnimation")}}},[t._v(t._s(t.isAnimating?"| |":">"))]),i("div",{ref:"slider",staticClass:"time-slider-dragger",on:{mousemove:t.dragging}},[i("div",{staticClass:"active-region",style:t.calculateActiveMargins,on:{mousedown:t.dragStart,mouseup:function(s){return s.stopPropagation(),t.dragEnd.apply(null,arguments)},mousemove:function(s){return s.stopPropagation(),t.dragging.apply(null,arguments)}}})])])]):t._e()},U=[];var K=C(q,Z,U,!1,null,"ff3ce95c",null,null);const J=K.exports;class k extends Y{constructor(){super(...arguments);p(this,"MAX_COLORS",21);p(this,"uniformColors",new Array(this.MAX_COLORS*3));p(this,"uniformBreakpoints",new Array(this.MAX_COLORS-1))}initializeState(i){super.initializeState(i),this.getAttributeManager().addInstanced({instanceValue:{accessor:"getValue",size:1,defaultValue:0,transition:!0}})}getShaders(){return{...super.getShaders(),inject:{"vs:#decl":`
            #define MAX_COLORS 21
            #define MAX_BREAKPOINTS 20
            uniform int numBreakpoints;
            uniform vec3 colors[MAX_COLORS];
            uniform float breakpoints[MAX_BREAKPOINTS];
            attribute float instanceValue;
            `,"vs:DECKGL_FILTER_COLOR":`
            // geometry.pickingColor = instancePickingColors;
            picking_setPickingColor(geometry.pickingColor);

            int lastBreakpoint = numBreakpoints;

            for(int i=0; i < MAX_BREAKPOINTS; ++i) {
              if (instanceValue < breakpoints[i]) {
                color = vec4(colors[i], 1.0);
                return;
              }
              if (i == lastBreakpoint) {
                color = vec4(colors[i], 1.0);
                return;
              }
            }
            color = vec4(1.0, 0.0, 0.0, 1.0);
            return;
          `}}}draw({uniforms:i}){const{colors:s,breakpoints:o}=this.props;s.map((n,l)=>{this.uniformColors[l*3]=n[0]/256,this.uniformColors[l*3+1]=n[1]/256,this.uniformColors[l*3+2]=n[2]/256}),o.map((n,l)=>{this.uniformBreakpoints[l]=n});const a={...i,colors:this.uniformColors,breakpoints:this.uniformBreakpoints,numBreakpoints:o.length};super.draw({uniforms:a})}}k.layerName="ScatterplotColorBinsLayer";k.defaultProps={colors:[[128,128,128],[128,128,128]],breakpoints:[0]};const Q=new G({filterSize:1});function tt(e){const t=e;try{const i=j(t),s=("00"+i.minutes).slice(-2);return`${i.hours}:${s}`}catch{return"00:00"}}function et({viewId:e=0,pointLayers:t=[],timeFilter:i=[],dark:s=!1,colors:o=[[1,0,0],[.25,.25,1]],breakpoints:a=[0],radius:n=5,mapIsIndependent:l=!1}){const[f,g]=z.useState(h.state.viewState);u[e]=()=>{g(h.state.viewState)};function _(r){r.latitude&&(r.center||(r.center=[0,0]),r.center[0]=r.longitude,r.center[1]=r.latitude,g(r),l||h.commit("setMapCamera",r))}function v(r,y){var S;if(r.index<0)return null;const m=(S=r==null?void 0:r.layer)==null?void 0:S.id;if(m===void 0)return null;const R=t[m].time[r.index],M=tt(R),w=t[m].value[r.index];return{html:`        <table style="font-size: 0.9rem">
        <tr>
          <td>Value</td>
          <td style="padding-left: 0.5rem;"><b>${Math.round(1e6*w)/1e6}</b></td>
        </tr><tr>
          <td style="text-align: right;">Time</td>
          <td style="padding-left: 0.5rem;"><b>${M}</b></td>
        </tr>
        </table>
      `,style:s?{color:"#ccc",backgroundColor:"#2a3c4f"}:{color:"#223",backgroundColor:"white"}}}const D=t.map((r,y)=>{const m=r.timeRange[0]>i[1]||r.timeRange[1]<i[0];return new k({data:{length:r.time.length,attributes:{getPosition:{value:r.coordinates,size:2},getFilterValue:{value:r.time,size:1},getValue:{value:r.value,size:1}}},autoHighlight:!0,breakpoints:a,colors:o,extensions:[Q],id:y,filled:!0,filterRange:i.length?i:null,getRadius:n,highlightColor:[255,0,224],opacity:1,parameters:{depthTest:!1},pickable:!0,radiusScale:1,stroked:!1,updateTriggers:{getPosition:t,getFillColor:t,getFilterValue:i},visible:!m})});return T.createElement(W,{layers:D,controller:!0,useDevicePixels:!0,viewState:f,onViewStateChange:r=>_(r.viewState),pickingRadius:4,onClick:v,getTooltip:v},T.createElement(N,{mapStyle:h.getters.mapStyle,preventStyleDiffing:!0,mapboxApiAccessToken:L}))}function it(){return new Worker("/site/assets/XytDataParser.worker-695312d4.js")}const st=b({name:"ModalDialogCustomColorbreakpoint",props:{breakpointsProp:{type:Array,required:!0},colorsProp:{type:Array,required:!0}},data(){return{breakpoints:[],incorrectBreakpoints:[],colors:[]}},mounted(){this.colors=this.colorsProp,this.breakpoints=this.breakpointsProp,this.checkIfBreakpointsAreCorrect()},watch:{breakpointsProp(){this.breakpoints=this.breakpointsProp;for(let e=0;e<this.breakpointsProp.length;e++)this.breakpoints[e]=this.roundToDecimalPlaces(this.breakpoints[e],6),this.breakpointsProp[e]=this.roundToDecimalPlaces(this.breakpointsProp[e],6)},colorsProp(){this.colors=this.colorsProp}},methods:{addColor(){this.breakpointsProp.push(this.breakpointsProp[this.breakpointsProp.length-1]),this.colorsProp.push(this.colorsProp[this.colorsProp.length-1]),this.$emit("addOrRemoveBreakpoint",this.colors,this.breakpoints)},intArrayToHexColor(e){if(e.length!==3)throw new Error("The array must contain exactly 3 elements.");return`#${e.map(s=>{const o=s.toString(16);return o.length===1?"0"+o:o}).join("")}`},hexColorToIntArray(e){if(e=e.replace(/^#/,""),e.length!==6)throw new Error("The hex color string must be 6 characters long.");const t=parseInt(e.slice(0,2),16),i=parseInt(e.slice(2,4),16),s=parseInt(e.slice(4,6),16);return[t,i,s]},roundToDecimalPlaces(e,t){if(t<0)throw new Error("The number of decimal places cannot be negative.");const i=Math.pow(10,t);return Math.round(e*i)/i},addBreakpoint(e){if(e==0)return;const t=this.colorsProp[e],i=this.colorsProp[e+1],s=this.breakpoints[e-1],o=this.breakpoints[e],a=this.calculateAverageColor(t,i),n=(s+o)/2;this.colorsProp.splice(e+1,0,a),this.breakpoints.splice(e,0,n),this.$emit("addOrRemoveBreakpoint",this.colors,this.breakpoints)},calculateAverageColor(e,t){if(e.length!==3||t.length!==3)throw new Error("Colors must be in the format [r, g, b]");return[Math.round((e[0]+t[0])/2),Math.round((e[1]+t[1])/2),Math.round((e[2]+t[2])/2)]},removeBreakpoint(e){this.breakpointsProp.splice(e-1,1),this.colorsProp.splice(e,1),this.$emit("addOrRemoveBreakpoint",this.colors,this.breakpoints),this.checkIfBreakpointsAreCorrect()},closeModalDialog(){this.$emit("close")},colorChange(e,t){const i=this.hexColorToIntArray(e.target.value);this.colors[t]=i,this.$emit("updateColor",this.colors)},changeBreakpoint(e,t){this.breakpoints[t]=e.target.value;for(let i=0;i<this.breakpointsProp.length;i++)this.breakpoints[i]===void 0&&(this.breakpoints[i]=this.roundToDecimalPlaces(this.breakpointsProp[i],6));this.$emit("updateBreakpoint",this.breakpoints),this.checkIfBreakpointsAreCorrect()},checkIfBreakpointsAreCorrect(){let e=Number.NEGATIVE_INFINITY;this.incorrectBreakpoints=[];let t=!0;for(let i=0;i<this.breakpoints.length;i++)this.incorrectBreakpoints[i]=!1,e=this.breakpoints[i]>e?this.breakpoints[i]:e,this.breakpoints[i]<e&&(this.incorrectBreakpoints[i]=!0,t=!1);return t}}});var ot=function(){var t=this,i=t._self._c;return t._self._setupProxy,i("div",{staticClass:"modal-dialog"},[i("h2",{staticClass:"modal-dialog-heading"},[t._v("Custom Breakpoints")]),i("div",{staticClass:"color-table"},t._l(t.colors,function(s,o){return i("div",{staticClass:"color"},[i("i",{staticClass:"remove-button fas fa-xs fa-trash",on:{click:function(a){return t.removeBreakpoint(o)}}}),i("input",{staticClass:"color-picker",attrs:{type:"color"},domProps:{value:t.intArrayToHexColor(s)},on:{change:function(a){return t.colorChange(a,o)}}}),o===0?i("p",{staticClass:"comperator",domProps:{innerHTML:t._s("<p>&lt;</p>")}}):i("p",{staticClass:"comperator",domProps:{innerHTML:t._s("<p>&gE;</p>")}}),o!==0?i("input",{staticClass:"breakpoint-picker",class:{"incorrect-number-indicator":t.incorrectBreakpoints[o-1]},attrs:{type:"number",step:".01",placeholder:t.roundToDecimalPlaces(t.breakpointsProp[o-1],6)},on:{change:function(a){return t.changeBreakpoint(a,o-1)}}}):i("input",{staticClass:"breakpoint-picker",class:{"incorrect-number-indicator":t.incorrectBreakpoints[o-1]},attrs:{type:"number",step:".01",placeholder:t.roundToDecimalPlaces(t.breakpointsProp[o],6)},on:{change:function(a){return t.changeBreakpoint(a,o)}}}),i("div",{staticClass:"add-button-container"},[o!=t.colors.length-1&&o!=0?i("i",{staticClass:"remove-button fas fa-sm fa-plus",on:{click:function(a){return t.addBreakpoint(o)}}}):t._e()])])}),0),i("div",{staticClass:"button-holder"},[i("button",{staticClass:"button is-success is-small is-outlined",on:{click:t.addColor}},[t._v("Add Color")]),i("button",{staticClass:"button is-danger is-small is-outlined",on:{click:t.closeModalDialog}},[t._v("Close")])])])},at=[];var rt=C(st,ot,at,!1,null,"7b970b47",null,null);const nt=rt.exports,lt={messages:{en:{loading:"Loading data...",sorting:"Sorting into bins...",aggregate:"Summary",maxHeight:"3D Height",showDetails:"Show Details",selection:"Selection",areas:"Areas",count:"Count",promptCRS:`Enter the coordinate reference system, e.g. EPSG:25832

These coordinates are not in long/lat format. To fix this permanently, convert them to long/lat or add "# EPSG:xxxx" to your CSV header`},de:{loading:"Dateien laden...",sorting:"Sortieren...",aggregate:"Daten",maxHeight:"3-D Höhe",showDetails:"Details anzeigen",selection:"Ausgewählt",areas:"Orte",count:"Anzahl"}}},ht=b({name:"XYTime",i18n:lt,components:{CollapsiblePanel:I,DrawingTool:O,LegendBox:V,TimeSlider:J,ZoomButtons:H,XyTimeDeckMap:et,ModalDialogCustomColorbreakpoint:nt},props:{root:{type:String,required:!0},subfolder:{type:String,required:!0},yamlConfig:String,config:Object,thumbnail:Boolean},data(){return{guiConfig:{buckets:7,exponent:4,radius:5,"clip max":100,"color ramp":"viridis",colorRamps:["bathymetry","electric","inferno","jet","magma","par","viridis"],flip:!1,"Custom breakpoints...":this.toggleModalDialog,"manual breaks":""},minRadius:5,maxRadius:50,showCustomBreakpoints:!1,viewId:`xyt-id-${Math.floor(1e12*Math.random())}`,configId:`gui-config-${Math.floor(1e12*Math.random())}`,timeLabels:[0,1],startTime:0,isAnimating:!1,timeFilter:[0,3599],colors:[[128,128,128],[128,128,128]],breakpoints:[0],range:[1/0,-1/0],timeRange:[1/0,-1/0],legendStore:null,standaloneYAMLconfig:{title:"",description:"",file:"",projection:"",thumbnail:"",radius:250,maxHeight:0,center:null,zoom:9},YAMLrequirementsXY:{file:""},columnLookup:[],gzipWorker:null,vizDetails:{title:"",description:"",file:"",projection:"",thumbnail:"",center:null,zoom:9,buckets:5,exponent:4,clipMax:100,radius:5,colorRamp:"viridis",flip:!1,breakpoints:null},myState:{statusMessage:"",subfolder:"",yamlConfig:"",thumbnail:!1},pointLayers:[],isLoaded:!1,animator:null,guiController:null,resizer:null,thumbnailUrl:"url('assets/thumbnail.jpg') no-repeat;",ANIMATE_SPEED:4,animationElapsedTime:0}},async mounted(){this.$store.commit("setFullScreen",!this.thumbnail),this.myState.thumbnail=this.thumbnail,this.myState.yamlConfig=this.yamlConfig||"",this.myState.subfolder=this.subfolder,await this.getVizDetails(),await this.buildThumbnail(),!this.thumbnail&&(this.setupLogoMover(),this.setupGui(),this.myState.statusMessage=`${this.$i18n.t("loading")}`,this.isLoaded||await this.loadFiles())},beforeDestroy(){u[this.viewId]=void 0,delete u[this.viewId];try{this.gzipWorker&&(this.gzipWorker.postMessage({terminate:!0}),this.gzipWorker.terminate()),this.guiController&&this.guiController.destroy()}catch(e){console.warn(e)}this.animator&&window.cancelAnimationFrame(this.animator),this.$store.commit("setFullScreen",!1)},computed:{fileApi(){return new F(this.fileSystem,h)},fileSystem(){const e=this.$store.state.svnProjects.filter(t=>t.slug===this.root);if(e.length===0)throw console.log("no such project"),Error;return e[0]},urlThumbnail(){return this.thumbnailUrl}},watch:{"$store.state.viewState"(){u[this.viewId]&&u[this.viewId]()}},methods:{toggleModalDialog(){this.showCustomBreakpoints=!this.showCustomBreakpoints},handleTimeSliderValues(e){this.animationElapsedTime=e[0],this.timeFilter=e,this.timeLabels=[this.convertSecondsToClockTimeMinutes(e[0]),this.convertSecondsToClockTimeMinutes(e[1])]},setupLogoMover(){this.resizer=new ResizeObserver(this.moveLogo);const e=document.getElementById(`id-${this.viewId}`);this.resizer.observe(e)},moveLogo(){const e=document.getElementById(`${this.viewId}`),t=e==null?void 0:e.querySelector(".mapboxgl-ctrl-bottom-left");if(t){const i=e.clientWidth>640?"280px":"36px";t.style.right=i}},setupGui(){this.guiController=new $({title:"Settings",injectStyles:!0,width:200,container:document.getElementById(this.configId)||void 0});const e=this.guiController;e.add(this.guiConfig,"radius",this.minRadius,this.maxRadius,1);const t=e.addFolder("colors");t.add(this.guiConfig,"color ramp",this.guiConfig.colorRamps).onChange(this.setColors),t.add(this.guiConfig,"flip").onChange(this.setColors);const i=e.addFolder("breakpoints");i.add(this.guiConfig,"buckets",2,19,1).onChange(this.setColors),i.add(this.guiConfig,"clip max",0,100,1).onChange(this.setColors),i.add(this.guiConfig,"exponent",1,10,1).onChange(this.setColors),i.add(this.guiConfig,"Custom breakpoints...",1,100,1)},async solveProjection(){if(!this.thumbnail){console.log("WHAT PROJECTION:");try{const e=await this.fileApi.getFileText(this.myState.subfolder+"/"+this.myState.yamlConfig);this.vizDetails=P.parse(e)}catch(e){console.error(e),this.$emit("error",""+e)}}},async getVizDetails(){if(this.config){this.validateYAML(),this.vizDetails=Object.assign({},this.config),this.setCustomGuiConfig();return}new RegExp(".*(yml|yaml)$").test(this.myState.yamlConfig)?await this.loadStandaloneYAMLConfig():this.setConfigForRawCSV()},setCustomGuiConfig(){this.config&&(this.config.radius>=this.minRadius&&this.config.radius<=this.maxRadius&&(this.guiConfig.radius=this.config.radius),Object.prototype.toString.call(this.config.breakpoints)==="[object Array]"?this.setManualBreakpoints(this.config.breakpoints):this.config.breakpoints&&(this.config.breakpoints.values.length+1!=this.config.breakpoints.colors.length?this.$emit("error",{type:c.ERROR,msg:"Wrong number of colors and values for the breakpoints.",desc:`Number of colors: ${this.config.breakpoints.colors.length}, Number of values: ${this.config.breakpoints.values.length}, Must apply: Number of colors = number of values plus one.`}):(this.guiConfig.buckets=this.config.breakpoints.colors.length,this.breakpoints=this.config.breakpoints.values,this.colors=this.config.breakpoints.colors)))},setManualBreakpoints(e){this.breakpoints=e,this.guiConfig.buckets=1+e.length},setConfigForRawCSV(){let e="EPSG:4326";this.vizDetails=Object.assign(this.vizDetails,{title:"Point Data: "+this.myState.yamlConfig,description:this.myState.yamlConfig,file:this.myState.yamlConfig,projection:e,center:this.vizDetails.center,zoom:this.vizDetails.zoom}),this.$emit("title",this.vizDetails.title||this.vizDetails.file)},async loadStandaloneYAMLConfig(){try{const e=this.myState.yamlConfig.indexOf("/")>-1?this.myState.yamlConfig:this.myState.subfolder+"/"+this.myState.yamlConfig,t=await this.fileApi.getFileText(e);this.standaloneYAMLconfig=Object.assign({},P.parse(t)),this.validateYAML(),this.setVizDetails()}catch(e){console.log("failed"+e),this.$emit("error",`File not found: ${this.myState.subfolder}/${this.myState.yamlConfig}`)}},validateYAML(){const e=new RegExp(".*(yml|yaml)$").test(this.myState.yamlConfig);let t={};e?(console.log("has yaml"),t=this.standaloneYAMLconfig):(console.log("no yaml"),t=this.config);for(const i in this.YAMLrequirementsXY)i in t||this.$emit("error",{type:c.ERROR,msg:`XYTime missing required key: ${i}`,desc:`XYTime requires keys: ${Object.keys(this.YAMLrequirementsXY)}`});t.radius==0&&this.$emit("error",{type:c.WARNING,msg:"Radius set to zero",desc:"Radius can not be zero, preset value used instead. "}),(t.zoom<5||t.zoom>50)&&this.$emit("error",{type:c.WARNING,msg:"Zoom is out of the recommended range ",desc:"Zoom levels should be between 5 and 50. "})},setVizDetails(){this.vizDetails=Object.assign({},this.vizDetails,this.standaloneYAMLconfig);const e=this.vizDetails.title?this.vizDetails.title:"Point Data: "+this.vizDetails.file;this.$emit("title",e),this.vizDetails.buckets&&(this.guiConfig.buckets=this.vizDetails.buckets),this.vizDetails.exponent&&(this.guiConfig.exponent=this.vizDetails.exponent),this.vizDetails.radius&&(this.guiConfig.radius=this.vizDetails.radius),this.vizDetails.clipMax&&(this.guiConfig["clip max"]=this.vizDetails.clipMax),this.vizDetails.colorRamp&&(this.guiConfig["color ramp"]=this.vizDetails.colorRamp)},async buildThumbnail(){if(this.thumbnail&&this.vizDetails.thumbnail)try{const t=await(await this.fileApi.getFileBlob(this.myState.subfolder+"/"+this.vizDetails.thumbnail)).arrayBuffer(),i=B.arrayBufferToBase64(t);i&&(this.thumbnailUrl=`center / cover no-repeat url(data:image/png;base64,${i})`)}catch(e){console.error(e)}},async parseCSVFile(e){this.myState.statusMessage="Loading file...";let t=0;this.gzipWorker=new it,this.gzipWorker.onmessage=async i=>{if(i.data.status)this.myState.statusMessage=i.data.status;else if(i.data.error)this.myState.statusMessage=i.data.error,this.$emit("error",{type:c.ERROR,msg:"XYT Loading Error",desc:`Error loading: ${this.myState.subfolder}/${this.vizDetails.file}`});else if(i.data.finished)this.finishedLoadingData(t,i.data);else if(i.data.needCRS){this.gzipWorker&&this.gzipWorker.terminate();let s=prompt(""+this.$t("promptCRS"))||"EPSG:25833";Number.isFinite(parseInt(s))&&(s=`EPSG:${s}`),this.vizDetails.projection=s.toUpperCase(),this.parseCSVFile(e)}else{const s=i.data.time.length;t||this.setFirstZoom(i.data.coordinates,s),t+=s,this.timeRange=[Math.min(this.timeRange[0],i.data.time[0]),Math.max(this.timeRange[1],i.data.time[s-1])],this.pointLayers.push(i.data)}},this.gzipWorker.postMessage({filepath:e,fileSystem:this.fileSystem,projection:this.vizDetails.projection})},setFirstZoom(e,t){const i=.5*(e[0]+e[t*2-2]),s=.5*(e[1]+e[t*2-1]);Number.isFinite(i)&&Number.isFinite(s)&&h.commit("setMapCamera",Object.assign({},h.state.viewState,{longitude:i,latitude:s,zoom:10}))},finishedLoadingData(e,t){console.log("ALL DONE",{totalRows:e,data:t.range,time:this.timeRange}),this.myState.statusMessage="",this.timeFilter=[this.timeRange[0],this.timeRange[0]+3599],this.isLoaded=!0,this.range=t.range,this.gzipWorker&&this.gzipWorker.terminate(),this.setColors(),this.moveLogo()},animate(){if(!this.isAnimating)return;this.animationElapsedTime=this.ANIMATE_SPEED*(Date.now()-this.startTime);const e=this.animationElapsedTime+this.timeRange[0];e>this.timeRange[1]&&(this.startTime=Date.now(),this.animationElapsedTime=0);const t=this.timeFilter[1]-this.timeFilter[0];this.timeFilter=[e,e+t],this.animator=window.requestAnimationFrame(this.animate)},toggleAnimation(){this.isAnimating=!this.isAnimating,this.isAnimating&&(this.animationElapsedTime=this.timeFilter[0]-this.timeRange[0],this.startTime=Date.now()-this.animationElapsedTime/this.ANIMATE_SPEED,this.animate())},setColors(){const e=this.guiConfig.exponent;let t=x({colormap:this.guiConfig["color ramp"],nshades:256,format:"rba",alpha:1}).map(n=>[n[0],n[1],n[2]]);this.guiConfig.flip&&(t=t.reverse());const i=256/(this.guiConfig.buckets-1),s=[];for(let n=0;n<this.guiConfig.buckets-1;n++)s.push(t[Math.round(i*n)]);s.push(t[255]),this.colors=s;const a=Math.pow(this.range[1],1/e)*this.guiConfig["clip max"]/100;if(!this.vizDetails.breakpoints){const n=[];for(let l=1;l<this.guiConfig.buckets;l++){const f=a*l/this.guiConfig.buckets,g=Math.pow(f,e);n.push(g)}this.breakpoints=n}this.isLoaded&&this.setLegend(s,this.breakpoints)},setLegend(e,t){this.range[1]-this.range[0]!==0&&(this.legendStore=new X,this.legendStore.setLegendSection({section:"Legend",column:"Legend",values:e.map((i,s)=>{const o=t[s==0?s:s-1];let a=""+Math.round(1e6*o)/1e6;return s==0&&(a="< "+a),s==e.length-1&&(a="> "+a),{label:a,value:i}})}),this.breakpoints=t)},async loadFiles(){await this.fileApi.getChromePermission(this.fileSystem.handle);try{let e=`${this.myState.subfolder}/${this.vizDetails.file}`;await this.parseCSVFile(e),this.$emit("isLoaded")}catch(e){console.error(e),this.myState.statusMessage=""+e,this.$emit("error",{type:c.ERROR,msg:"Loading/Parsing Error",desc:"Error loading/parsing: ${this.myState.subfolder}/${this.vizDetails.file}"})}},convertSecondsToClockTimeMinutes(e){const t=Math.floor(e/3600),i=Math.floor((e-t*3600)/60),s=e-t*3600-i*60,o={h:`${t}`,m:`${i}`.padStart(2,"0"),s:`${s}`.padStart(2,"0")};return`${o.h}:${o.m}`}}});var ct=function(){var t=this,i=t._self._c;return t._self._setupProxy,i("div",{staticClass:"viz-plugin",class:{"hide-thumbnail":!t.thumbnail},attrs:{oncontextmenu:"return false",id:`id-${t.viewId}`}},[t.thumbnail?t._e():i("xy-time-deck-map",{staticClass:"map-layer",attrs:{viewId:t.viewId,pointLayers:t.pointLayers,timeFilter:t.timeFilter,dark:this.$store.state.isDarkMode,colors:this.colors,breakpoints:this.breakpoints,radius:this.guiConfig.radius,mapIsIndependent:!1}}),t.thumbnail?t._e():i("zoom-buttons",{attrs:{corner:"bottom"}}),i("div",{staticClass:"top-right"},[i("div",{staticClass:"gui-config",attrs:{id:t.configId}})]),i("div",{staticClass:"bottom-right"},[t.legendStore?i("div",{staticClass:"legend-area"},[i("legend-box",{attrs:{legendStore:t.legendStore}})],1):t._e()]),t.isLoaded?i("time-slider",{staticClass:"time-slider-area",attrs:{range:t.timeRange,activeTimeExtent:t.timeFilter,labels:t.timeLabels,isAnimating:t.isAnimating},on:{timeExtent:t.handleTimeSliderValues,toggleAnimation:t.toggleAnimation,drag:function(s){t.isAnimating=!1}}}):t._e(),!t.thumbnail&&t.myState.statusMessage?i("div",{staticClass:"message"},[i("p",{staticClass:"status-message"},[t._v(t._s(t.myState.statusMessage))])]):t._e(),this.showCustomBreakpoints?i("modal-dialog-custom-colorbreakpoint",{attrs:{breakpointsProp:this.breakpoints,colorsProp:this.colors},on:{close:function(s){t.showCustomBreakpoints=!1},updateColor:s=>this.setLegend(s,this.breakpoints),updateBreakpoint:s=>this.setLegend(this.colors,s),addOrRemoveBreakpoint:(s,o)=>this.setLegend(s,o)}}):t._e()],1)},mt=[];var ut=C(ht,ct,mt,!1,null,"202d49f3",null,null);const xt=ut.exports;export{xt as default};
//# sourceMappingURL=XyTime-79574c2b.js.map