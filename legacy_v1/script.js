const properties=[
 {name:"GREEN VALLEY",location:"Saravanampatti, Coimbatore",type:"Residential Plots",size:"1,200–2,400 Sq.Ft.",price:"₹24 Lakhs onwards",tags:["DTCP APPROVED","30 / 40 FT ROADS","LIMITED AVAILABILITY"],image:"https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80"},
 {name:"BHOOMI GARDENS",location:"Kovaipudur, Coimbatore",type:"Premium Residential Plots",size:"1,500–3,000 Sq.Ft.",price:"₹32 Lakhs onwards",tags:["PREMIUM LOCATION","BLACKTOP ROADS","AVENUE PLANTATION"],image:"https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=80"},
 {name:"HORIZON ESTATES",location:"Pollachi Main Road, Coimbatore",type:"Investment Plots",size:"1,000–2,000 Sq.Ft.",price:"₹18 Lakhs onwards",tags:["GROWING LOCATION","EASY CONNECTIVITY","INVESTMENT OPPORTUNITY"],image:"https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=80"}
];

function renderProperties(){
 const loc=document.querySelector("#locationFilter").value,type=document.querySelector("#typeFilter").value,size=document.querySelector("#sizeFilter").value;
 const grid=document.querySelector("#propertyGrid");
 const matches=properties.filter(p=>(loc==="all"||p.location.includes(loc))&&(type==="all"||p.type===type)&&(size==="all"||p.size===size));
 grid.innerHTML=matches.length?matches.map(p=>`<article class="property-card" style="--image:url('${p.image}')"><div class="property-info"><p class="eyebrow">${p.type}</p><h3>${p.name}</h3><p>${p.location}</p><p>${p.size}</p><p class="price">${p.price}</p><div class="tags">${p.tags.map(t=>`<span>${t}</span>`).join("")}</div><a class="property-link" href="#contact" data-property="${p.name}">DISCOVER PROPERTY →</a></div></article>`).join(""):`<p>No matching properties found. Try a different filter.</p>`;
 document.querySelectorAll("[data-property]").forEach(a=>a.addEventListener("click",()=>{document.querySelector('[name="property"]').value=a.dataset.property}));
}
renderProperties();
["locationFilter","typeFilter","sizeFilter"].forEach(id=>document.getElementById(id).addEventListener("change",renderProperties));
document.getElementById("exploreBtn").addEventListener("click",()=>document.getElementById("properties").scrollIntoView({behavior:"smooth"}));

const navbar=document.getElementById("navbar");
window.addEventListener("scroll",()=>navbar.classList.toggle("scrolled",scrollY>50));
document.querySelector(".menu-toggle").addEventListener("click",()=>navbar.classList.toggle("menu-open"));
document.querySelectorAll("nav a").forEach(a=>a.addEventListener("click",()=>navbar.classList.remove("menu-open")));

const io=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add("visible")}),{threshold:.15});
document.querySelectorAll(".reveal,.reveal-image").forEach(el=>io.observe(el));

const counters=document.querySelectorAll(".counter strong");
const counterIO=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting&&!e.target.dataset.done){e.target.dataset.done="1";const target=+e.target.dataset.target;let n=0;const step=Math.max(1,Math.ceil(target/45));const timer=setInterval(()=>{n=Math.min(target,n+step);e.target.textContent=n+"+";if(n===target)clearInterval(timer)},25)}}),{threshold:.6});
counters.forEach(c=>counterIO.observe(c));

document.getElementById("contactForm").addEventListener("submit",e=>{
 e.preventDefault();
 const f=new FormData(e.target);
 const msg=`Hi BHOOMIHUB, I'm interested in ${f.get("property")||"your properties"}. My name is ${f.get("name")} and my phone number is ${f.get("phone")}.`;
 document.getElementById("formMessage").textContent="Thank you for contacting BHOOMIHUB. Our team will get in touch with you shortly.";
 window.open("https://wa.me/919876543210?text="+encodeURIComponent(msg),"_blank");
});
