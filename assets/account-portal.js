
/* MAJORGLORY TRAVELS - Customer Portal
   Uses public Supabase client + RLS. Never includes secret/service keys.
   All booking history here is Duffel TEST MODE only. */
const ICONS={
 house:'<path d="m3 10 9-7 9 7v9a2 2 0 0 1-2 2h-4v-7H9v7H5a2 2 0 0 1-2-2z"/>',
 plane:'<path d="M17 21v-8l-5-3V3a2 2 0 0 0-4 0v7l-5 3v8l7-2 7 2Z" transform="translate(2)"/>',
 hotel:'<path d="M3 21V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v16M3 21h18M9 21v-6h6v6M7 7h.01M12 7h.01M17 7h.01M7 11h.01M12 11h.01M17 11h.01"/>',
 bus:'<rect x="5" y="3" width="14" height="16" rx="3"/><path d="M5 11h14M8 19v2m8-2v2M8 15h.01M16 15h.01"/>',
 compass:'<circle cx="12" cy="12" r="9"/><path d="m15.5 8.5-2 5-5 2 2-5z"/>',
 bookmark:'<path d="M6 4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18l-6-4-6 4Z"/>',
 suitcase:'<rect x="3" y="7" width="18" height="14" rx="2"/><path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M3 14h18"/>',
 help:'<circle cx="12" cy="12" r="10"/><path d="M9.4 9a3 3 0 0 1 5.8 1c0 2-3.2 2.5-3.2 4M12 18h.01"/>',
 settings:'<circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.7 1.7 0 0 0 .3 1.9l.1.1-2 2-.1-.1a1.7 1.7 0 0 0-1.9-.3 1.7 1.7 0 0 0-1 1.5V21h-3v-.9a1.7 1.7 0 0 0-1.1-1.5 1.7 1.7 0 0 0-1.9.3l-.1.1-2-2 .1-.1a1.7 1.7 0 0 0 .3-1.9 1.7 1.7 0 0 0-1.5-1H4v-3h.9A1.7 1.7 0 0 0 6.4 10a1.7 1.7 0 0 0-.3-1.9L6 8l2-2 .1.1A1.7 1.7 0 0 0 10 6.4 1.7 1.7 0 0 0 11 4.9V4h3v.9a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.9-.3L17 6l2 2-.1.1a1.7 1.7 0 0 0-.3 1.9 1.7 1.7 0 0 0 1.5 1H21v3h-.9a1.7 1.7 0 0 0-.7 1Z" transform="translate(-.5 -.5)"/>',
 ticket:'<path d="M2 7a3 3 0 0 0 0 6v4h20v-4a3 3 0 0 0 0-6V3H2Z" transform="translate(0 2) scale(1 .85)"/><path d="M12 7v2m0 4v2"/>',
 calendar:'<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M7 3v4M17 3v4M3 10h18"/>',
 chevron:'<path d="m9 18 6-6-6-6"/>',
 arrow:'<path d="M5 12h14m-6-6 6 6-6 6"/>',
 shield:'<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z"/><path d="m9 12 2 2 4-4"/>',
 bell:'<path d="M18 8a6 6 0 0 0-12 0c0 7-3 8-3 9h18c0-1-3-2-3-9M10 21h4"/>',
 user:'<circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0 1 16 0"/>',
 logout:'<path d="M10 17l5-5-5-5m5 5H3M12 3h7a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-7"/>',
 close:'<path d="M18 6 6 18M6 6l12 12"/>',
 trash:'<path d="M3 6h18M8 6V4h8v2m3 0-1 15H6L5 6M10 10v7m4-7v7"/>',
 copy:'<rect x="8" y="8" width="13" height="13" rx="2"/><path d="M16 8V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h3"/>',
 globe:'<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c4 5 4 13 0 18M12 3c-4 5-4 13 0 18"/>'
};
const ICON=(name)=>'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">'+(ICONS[name]||ICONS.compass)+'</svg>';
const OPTIONS={
 flights:[["MQP","Kruger Mpumalanga (MQP)"],["JNB","Johannesburg (JNB)"],["CPT","Cape Town (CPT)"],["DUR","Durban (DUR)"],["HLA","Lanseria (HLA)"],["MPM","Maputo (MPM)"]],
 stays:[["mbombela","Mbombela / Nelspruit"],["malelane","Malelane"],["hazyview","Hazyview"],["graskop","Graskop"],["johannesburg","Johannesburg"],["cape-town","Cape Town"],["durban","Durban"],["maputo","Maputo"],["duffel-test","Duffel Test Hotels"]]
};
const EL=(tag,cls,txt)=>{const node=document.createElement(tag);if(cls)node.className=cls;if(txt!==undefined&&txt!==null)node.textContent=String(txt);return node};
const addIcon=(el,name)=>{el.innerHTML=ICON(name);return el};
const formatDate=(iso)=>{if(!iso)return"";try{return new Intl.DateTimeFormat("en-ZA",{day:"numeric",month:"short",year:"numeric"}).format(new Date(iso))}catch{return String(iso).slice(0,10)}};
const money=(val)=>{const n=Number(val);return Number.isFinite(n)?new Intl.NumberFormat("en-ZA",{style:"currency",currency:"ZAR"}).format(n):"—"};
export function initMajorgloryPortal({client,openAuth,updateAccount,get}){
 const overlay=get("mgAccountOverlay");
 if(!overlay)return;
 let currentUser=null,currentProfile=null,activeTab="overview",loading=false;
 let bookingData=[],savedData=[],ticketData=[];
 const titleMap={overview:"Your travel dashboard",trips:"My test trips",saved:"Saved places",help:"Help centre",settings:"Account settings"};
 const portalActive=()=>!overlay.hidden;
 const status=(id,message,isError=false)=>{const el=get(id);if(el){el.textContent=message||"";el.classList.toggle("error",Boolean(isError))}};
 const empty=(label,description,iconName="suitcase")=>{const el=EL("div","mg-portal-empty");el.innerHTML=ICON(iconName);el.append(EL("strong","",label),EL("span","",description));return el};
 function goTab(name){
  if(!titleMap[name])return;
  activeTab=name;get("mgPortalPageTitle").textContent=titleMap[name];
  overlay.querySelectorAll("[data-portal-tab]").forEach(btn=>{const yes=btn.dataset.portalTab===name;btn.classList.toggle("active",yes);btn.setAttribute("aria-selected",String(yes))});
  overlay.querySelectorAll("[data-portal-view]").forEach(sec=>{sec.hidden=sec.dataset.portalView!==name});
  get("mgPortalScroll").scrollTop=0;
  if(name==="trips")renderTrips();
  if(name==="saved")renderSaved();
  if(name==="help")renderTickets();
  if(name==="overview")renderOverview();
  if(name==="settings")renderSettings();
 }
 function close(){overlay.hidden=true;document.body.style.overflow="";}
 function goExplore(section,code){
  close();
  if(section==="home"){window.scrollTo({top:0,behavior:"smooth"});return}
  if(section==="flights"){
   if(code&&get("flightTo"))get("flightTo").value=code;
   window.activateTravelTab?.("flights",true)
  }else if(section==="stays"){
   if(code&&get("stayDestination"))get("stayDestination").value=code;
   window.activateTravelTab?.("stays",true)
  }else if(section==="buses")window.activateTravelTab?.("buses",true);
 }
 async function fetchData(){
  const [p,b,s,t]=await Promise.all([
   client.from("mg_travel_profiles").select("*").eq("user_id",currentUser.id).maybeSingle(),
   client.from("mg_travel_test_orders").select("id,status,booking_reference,duffel_order_id,airline_amount,airline_currency,indicative_zar,service_fee_zar,total_indicative_zar,created_at").order("created_at",{ascending:false}).limit(60),
   client.from("mg_travel_saved_destinations").select("id,category,location_code,label,created_at").order("created_at",{ascending:false}).limit(100),
   client.from("mg_travel_support_tickets").select("id,category,subject,message,status,created_at,updated_at").order("created_at",{ascending:false}).limit(60)
  ]);
  currentProfile=p.error?null:p.data;bookingData=b.error?[]:b.data||[];savedData=s.error?[]:s.data||[];ticketData=t.error?[]:t.data||[];
  const problems=[p,b,s,t].filter(x=>x.error).map(x=>x.error.message);
  status("mgPortalLoadStatus",problems.length?"Some account information couldn't be loaded. Please refresh and try again.":"",problems.length>0);
  const display=(currentProfile?.full_name||"").trim();
  get("mgPortalGreeting").textContent=display?("Welcome back, "+display.split(/\s+/)[0]+"."):"Welcome to your travel space.";
  get("mgPortalEmail").textContent=currentUser.email||"";
  get("mgPortalIdentity").textContent=display||currentUser.email||"Traveller";
  get("mgPortalUserInitials").textContent=(display?display.split(/\s+/).slice(0,2).map(x=>x[0]||"").join(""):(currentUser.email||"T").slice(0,1)).toUpperCase();
  renderOverview();renderTrips();renderSaved();renderTickets();renderSettings();
 }
 async function open(){
  overlay.hidden=false;document.body.style.overflow="hidden";goTab("overview");get("mgPortalLoading").hidden=false;
  get("mgPortalGuest").hidden=true;get("mgPortalAuthed").hidden=true;
  status("mgPortalLoadStatus","");
  get("mgPortalPageTitle").textContent="Your travel dashboard";
  const {data:{user},error}=await client.auth.getUser();
  if(!portalActive())return;
  get("mgPortalLoading").hidden=true;
  if(error||!user){
   currentUser=null;currentProfile=null;bookingData=[];savedData=[];ticketData=[];
   get("mgPortalGuest").hidden=false;
   get("mgPortalAuthed").hidden=true;get("mgPortalLoadStatus").textContent="";
   return
  }
  currentUser=user;get("mgPortalGuest").hidden=true;get("mgPortalAuthed").hidden=false;
  if(loading)return;loading=true;
  try{await fetchData()}catch(e){status("mgPortalLoadStatus","Could not load your dashboard. Please retry.",true)}
  finally{loading=false}
 }
 function statCard(id,value){const target=get(id);if(target)target.textContent=String(value)}
 function renderOverview(){
  if(!currentUser)return;
  const successful=bookingData.filter(b=>b.status==="confirmed");
  const activeTickets=ticketData.filter(x=>x.status!=="resolved");
  statCard("mgMetricTrips",successful.length);
  statCard("mgMetricSaved",savedData.length);
  statCard("mgMetricSupport",activeTickets.length);
  statCard("mgMetricSearches",bookingData.length);
  const trips=get("mgOverviewTrips");trips.replaceChildren();
  if(!bookingData.length)trips.append(empty("No test trips yet","Search for a flight and complete a Duffel test order to see it here.","plane"));
  else for(const b of bookingData.slice(0,3))trips.append(tripElement(b,true));
  const saved=get("mgOverviewSaved");saved.replaceChildren();
  if(!savedData.length)saved.append(empty("Build your travel list","Save your favourite flight destinations or hotels.","bookmark"));
  else for(const x of savedData.slice(0,3)){const row=EL("div","mg-portal-saved-item");row.append(addIcon(EL("div","mg-portal-trip-icon"),x.category==="stays"?"hotel":"plane"));const info=EL("div","mg-portal-saved-info");info.append(EL("strong","",x.label),EL("small","",x.category==="stays"?"Accommodation":"Flight destination"));row.append(info);saved.append(row)}
  const events=get("mgPortalTimeline");events.replaceChildren();
  const timeline=[...bookingData.map(b=>({ts:b.created_at,title:b.status==="confirmed"?"Duffel test order confirmed":b.status==="failed"?"Test order unsuccessful":"Test order processing",note:b.booking_reference||"Flight checkout"})),...ticketData.map(t=>({ts:t.created_at,title:"Support request saved",note:t.subject}))].sort((a,b)=>Date.parse(b.ts)-Date.parse(a.ts)).slice(0,4);
  if(!timeline.length)events.append(empty("Nothing to report yet","Your test-booking activity and help requests appear here.","calendar"));
  else for(const activity of timeline){const item=EL("div","mg-portal-event");const info=EL("div");info.append(EL("strong","",activity.title),EL("span","",activity.note),EL("small","",formatDate(activity.ts)));item.append(info);events.append(item)}
 }
 function tripElement(b,small=false){
  const card=EL("article","mg-portal-trip");
  card.append(addIcon(EL("div","mg-portal-trip-icon"),"plane"));
  const main=EL("div");main.append(EL("strong","",b.booking_reference?"Reference "+b.booking_reference:"Duffel test flight"));
  main.append(EL("p","",(b.airline_currency||"")+" "+(b.airline_amount??"—")+" supplier test fare · "+formatDate(b.created_at)));
  if(b.duffel_order_id){const ref=EL("p","",b.duffel_order_id);ref.style.overflowWrap="anywhere";main.append(ref)}
  const side=EL("div","mg-portal-trip-side");const badge=EL("span","mg-portal-badge "+(b.status==="confirmed"?"done":b.status==="failed"?"failed":"pending"),b.status==="confirmed"?"Test confirmed":b.status==="failed"?"Unsuccessful":"Processing");side.append(badge);
  if(b.total_indicative_zar!==null&&b.total_indicative_zar!==undefined)side.append(EL("small","",money(b.total_indicative_zar)));
  card.append(main,side);return card
 }
 function renderTrips(){
  const target=get("mgPortalTrips");target.replaceChildren();
  if(!currentUser)return;
  const mode=get("mgPortalTripsFilter").value;
  const list=bookingData.filter(x=>mode==="all"||x.status===mode);
  get("mgPortalTripsCount").textContent=list.length+" "+(list.length===1?"test record":"test records");
  if(!list.length){target.append(empty("No matching test bookings",mode==="all"?"A completed Duffel test checkout will appear here.":"Try another status filter.","suitcase"));return}
  for(const b of list)target.append(tripElement(b))
 }
 function renderSaved(){
  if(!currentUser)return;
  const target=get("mgPortalSavedList");target.replaceChildren();
  get("mgPortalSavedCount").textContent=savedData.length+" saved "+(savedData.length===1?"place":"places");
  if(!savedData.length)target.append(empty("Your favourites start here","Choose a destination and save it for your next search.","bookmark"));
  for(const s of savedData){
   const row=EL("article","mg-portal-saved-item");
   row.append(addIcon(EL("div","mg-portal-trip-icon"),s.category==="flights"?"plane":"hotel"));
   const info=EL("div","mg-portal-saved-info");info.append(EL("strong","",s.label),EL("small","",s.category==="flights"?"Airport · "+s.location_code:"Accommodation destination"));row.append(info);
   const go=EL("button","mg-portal-btn","Plan");go.type="button";go.style.padding="9px 12px";go.style.fontSize="10px";go.addEventListener("click",()=>goExplore(s.category,s.location_code));
   const remove=addIcon(EL("button","mg-portal-icon-btn"),"trash");remove.type="button";remove.setAttribute("aria-label","Remove "+s.label);remove.addEventListener("click",async()=>{remove.disabled=true;const {error}=await client.from("mg_travel_saved_destinations").delete().eq("id",s.id).eq("user_id",currentUser.id);if(error){status("mgSavedStatus","Unable to remove destination. "+error.message,true);remove.disabled=false;return}savedData=savedData.filter(x=>x.id!==s.id);renderSaved();renderOverview();status("mgSavedStatus","Destination removed.")});row.append(go,remove);target.append(row)
  }
 }
 function populatePlaces(){
  const category=get("mgSavedCategory").value,place=get("mgSavedLocation");
  place.replaceChildren();for(const [code,label] of OPTIONS[category]||[]){const option=document.createElement("option");option.value=code;option.textContent=label;place.append(option)}
 }
 async function saveDestination(e){
  e.preventDefault();if(!currentUser)return;
  const category=get("mgSavedCategory").value,code=get("mgSavedLocation").value,found=OPTIONS[category]?.find(x=>x[0]===code);
  if(!found){status("mgSavedStatus","Please select a supported destination.",true);return}
  if(savedData.some(x=>x.category===category&&x.location_code===code)){status("mgSavedStatus","This destination is already saved.",true);return}
  const submit=get("mgSavedSubmit");submit.disabled=true;
  const {data,error}=await client.from("mg_travel_saved_destinations").insert({user_id:currentUser.id,category,location_code:code,label:found[1]}).select("id,category,location_code,label,created_at").single();
  submit.disabled=false;
  if(error){status("mgSavedStatus","Could not save destination. "+(error.code==="23505"?"Already saved.":error.message),true);return}
  savedData.unshift(data);renderSaved();renderOverview();status("mgSavedStatus","Destination saved to your travel list.")
 }
 function renderTickets(){
  if(!currentUser)return;const target=get("mgPortalTickets");target.replaceChildren();
  if(!ticketData.length){target.append(empty("No requests yet","Your support requests will be stored here after submission.","help"));return}
  for(const t of ticketData){const card=EL("article","mg-portal-ticket"),head=EL("div","mg-portal-ticket-header");head.append(EL("strong","",t.subject),EL("span","mg-portal-badge "+(t.status==="resolved"?"done":"pending"),t.status==="open"?"Open":t.status==="in_progress"?"In progress":"Resolved"));card.append(head,EL("p","",t.message),EL("small","",t.category+" · "+formatDate(t.created_at)));target.append(card)}
 }
 async function submitTicket(e){
  e.preventDefault();if(!currentUser)return;
  const category=get("mgHelpCategory").value,subject=get("mgHelpSubject").value.trim(),message=get("mgHelpMessage").value.trim();
  if(subject.length<6||subject.length>120||message.length<20||message.length>2000){status("mgTicketStatus","Subject must contain 6–120 characters and message 20–2000.",true);return}
  const submit=get("mgHelpSubmit");submit.disabled=true;
  const {data,error}=await client.from("mg_travel_support_tickets").insert({user_id:currentUser.id,category,subject,message}).select("id,category,subject,message,status,created_at,updated_at").single();
  submit.disabled=false;
  if(error){status("mgTicketStatus","Unable to save the request. "+error.message,true);return}
  ticketData.unshift(data);get("mgHelpForm").reset();renderTickets();renderOverview();status("mgTicketStatus","Request saved to your account. Staff notifications and replies are not yet connected."); 
 }
 function renderSettings(){
  if(!currentUser)return;const p=currentProfile||{};
  get("mgProfileFullName").value=p.full_name||"";
  get("mgProfilePhone").value=p.phone||"";
  get("mgProfileAirport").value=p.home_airport||"MQP";
  get("mgProfileEmail").value=currentUser.email||"";
  get("mgEmailUpdates").checked=!!p.email_updates;
  status("mgProfileStatusMessage","")
 }
 async function saveProfile(e){
  e.preventDefault();if(!currentUser)return;
  const full_name=get("mgProfileFullName").value.trim(),phone=get("mgProfilePhone").value.trim(),home_airport=get("mgProfileAirport").value;
  if(full_name.length>120||phone.length>32||!["MQP","JNB","CPT","DUR","HLA","MPM"].includes(home_airport)){status("mgProfileStatusMessage","Please check your profile details.",true);return}
  const btn=get("mgProfileSubmit");btn.disabled=true;
  const row={user_id:currentUser.id,full_name,phone,home_airport,preferred_currency:"ZAR",email_updates:get("mgEmailUpdates").checked,updated_at:new Date().toISOString()};
  const {data,error}=await client.from("mg_travel_profiles").upsert(row,{onConflict:"user_id"}).select("*").single();
  btn.disabled=false;
  if(error){status("mgProfileStatusMessage","Could not save profile. "+error.message,true);return}
  currentProfile=data;get("mgPortalGreeting").textContent=full_name?"Welcome back, "+full_name.split(/\s+/)[0]+".":"Welcome to your travel space.";
  get("mgPortalIdentity").textContent=full_name||currentUser.email||"Traveller";
  get("mgPortalUserInitials").textContent=(full_name?full_name.split(/\s+/).slice(0,2).map(s=>s[0]||"").join(""):(currentUser.email||"T").slice(0,1)).toUpperCase();
  status("mgProfileStatusMessage","Your travel profile has been saved.");
 }
 async function signOut(){
  const button=get("mgPortalSignOut");button.disabled=true;
  const {error}=await client.auth.signOut();
  button.disabled=false;
  if(error){status("mgPortalLoadStatus","Sign-out failed. Please retry.",true);return}
  close();await updateAccount();currentUser=null;currentProfile=null;bookingData=[];savedData=[];ticketData=[];
 }
 overlay.querySelectorAll("[data-portal-tab]").forEach(btn=>btn.addEventListener("click",()=>goTab(btn.dataset.portalTab)));
 overlay.querySelectorAll("[data-portal-go]").forEach(btn=>btn.addEventListener("click",()=>goTab(btn.dataset.portalGo)));
 overlay.querySelectorAll("[data-portal-explore]").forEach(btn=>btn.addEventListener("click",()=>goExplore(btn.dataset.portalExplore)));
 get("mgAccountClose").addEventListener("click",close);
 overlay.addEventListener("click",e=>{if(e.target===overlay)close()});
 document.addEventListener("keydown",e=>{if(e.key==="Escape"&&portalActive())close()});
 get("mgPortalSignOut").addEventListener("click",signOut);
 get("mgPortalRefresh").addEventListener("click",async()=>{if(!currentUser){await open();return}const button=get("mgPortalRefresh");button.disabled=true;status("mgPortalLoadStatus","Refreshing your travel account…");try{await fetchData()}catch(e){status("mgPortalLoadStatus","Could not refresh your account.",true)}finally{button.disabled=false}});

 get("mgPortalGuestSignIn").addEventListener("click",()=>{close();openAuth()});
 get("mgPortalTripsFilter").addEventListener("change",renderTrips);
 get("mgSavedCategory").addEventListener("change",populatePlaces);populatePlaces();
 get("mgSavedForm").addEventListener("submit",saveDestination);
 get("mgHelpForm").addEventListener("submit",submitTicket);
 get("mgProfileForm").addEventListener("submit",saveProfile);
 get("mgAccountAction").addEventListener("click",signOut);
 window.addEventListener("mg:account",open);
 client.auth.onAuthStateChange((_event,_session)=>{if(portalActive())setTimeout(()=>open(),0)});
 return{open,close,goTab,reload:fetchData};
}
