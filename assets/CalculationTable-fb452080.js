import{d as l,g as s,n as a}from"./index-24c2379b.js";import{y as o}from"./index-719eff74.js";import{H as r}from"./HTTPFileSystem-017e7593.js";import{T as n}from"./TopSheet-21dca6a3.js";const c="url('assets/thumbnail.jpg') no-repeat;",f=l({name:"CalculationTable",components:{TopSheet:n},props:{root:{type:String,required:!0},subfolder:{type:String,required:!0},yamlConfig:String,config:Object,thumbnail:Boolean},data:()=>({globalState:s.state,allConfigFiles:{dashboards:{},topsheets:{},vizes:{},configs:{}},files:[],isLoaded:!1,vizDetails:{title:"",description:"",thumbnail:""}}),computed:{fileApi(){return new r(this.fileSystem,s)},fileSystem(){const i=this.$store.state.svnProjects.filter(t=>t.slug===this.root);if(i.length===0)throw console.log("no such project"),Error;return i[0]},urlThumbnail(){return c}},methods:{async getVizDetails(){if(!this.fileApi)return;try{const t=await this.fileApi.getFileText(this.subfolder+"/"+this.yamlConfig);this.vizDetails=o.parse(t)}catch(t){console.error("failed "+t),this.$emit("error",""+t)}const i=this.vizDetails.title?this.vizDetails.title:"Table";this.$emit("title",i)}},async mounted(){await this.getVizDetails(),this.allConfigFiles=await this.fileApi.findAllYamlConfigs(this.subfolder);const{files:i}=await this.fileApi.getDirectory(this.subfolder);this.files=i,this.isLoaded=!0,this.thumbnail}}),u="/site/assets/table-439da6cc.png";var h=function(){var t=this,e=t._self._c;return t._self._setupProxy,e("div",{staticClass:"my-component",class:{"hide-thumbnail":!t.thumbnail},attrs:{oncontextmenu:"return false"}},[t.thumbnail?e("img",{staticClass:"thumb",attrs:{src:u,width:128}}):t._e(),!t.thumbnail&&t.isLoaded?e("div",{staticClass:"topsheet"},[e("p",{staticClass:"header"},[t._v(t._s(t.subfolder))]),e("h2",[t._v(t._s(t.vizDetails.title))]),e("p",[t._v(t._s(t.vizDetails.description))]),e("hr"),e("TopSheet",{tag:"component",staticClass:"dash-card",attrs:{fileSystemConfig:t.fileSystem,subfolder:t.subfolder,config:t.vizDetails,yaml:t.yamlConfig,files:t.files,cardTitle:t.vizDetails.title,cardId:"table1",allConfigFiles:t.allConfigFiles}})],1):t._e()])},m=[];var d=a(f,h,m,!1,null,"73ee6118",null,null);const v=d.exports;export{v as default};
//# sourceMappingURL=CalculationTable-fb452080.js.map