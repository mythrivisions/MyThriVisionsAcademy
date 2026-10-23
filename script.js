const navGroups=[
 {label:"Home",url:"index.html"},
 {label:"About Us",url:"about.html"},
 {label:"Courses",url:"courses.html",children:[["Mathematics","courses.html#mathematics"],["Mental Maths","courses.html#mental-maths"],["English Grammar","courses.html#english-grammar"],["Telugu","courses.html#telugu"],["NMMS Coaching","courses.html#nmms"],["Gurukula Coaching","courses.html#gurukula"]]},
 {label:"Exams & Practice",url:"practice.html",children:[["Practice Questions","practice.html"],["NMMS 2026","practice.html#nmms-2026"],["Mock Tests","practice.html#mock-tests"],["Worksheets","practice.html#worksheets"],["Achievements & Results","achievements.html"]]},
 {label:"Student Zone",url:"register.html",children:[["Student Registration","register.html"],["Student Progress","student-progress.html"],["Study Materials","practice.html"]]},
 {label:"Gallery",url:"gallery.html"},
 {label:"Contact",url:"contact.html"}
];
const portalLinks=[["Overview","admin.html","▦"],["Student Management","admin.html#studentForm","👥"],["Marks & Exams","admin.html#studentForm","📝"],["Student Progress","student-progress.html","📈"],["Export Reports","admin.html#exportBtn","⬇"],["Public Website","index.html","↗"],["Contact Academy","contact.html","☎"]];
function header(active){
 const items=navGroups.map((g,i)=>`<div class="nav-item ${g.children?'has-dropdown':''}"><a class="nav-link ${active===g.url?'active':''}" href="${g.url}" ${g.children?'aria-haspopup="true" aria-expanded="false"':''}>${g.label}${g.children?'<span aria-hidden="true">▾</span>':''}</a>${g.children?`<div class="dropdown-menu">${g.children.map(([n,u])=>`<a href="${u}">${n}</a>`).join("")}</div>`:""}</div>`).join("");
 return `<div class="topbar"><span>📍 Local C. Belagal, Kurnool – 518462</span><span>📞 <a href="tel:+916300039916">6300039916</a> · ✉️ <a href="mailto:mythrivisionsacademy@gmail.com">mythrivisionsacademy@gmail.com</a></span></div><header class="navbar"><a class="brand" href="index.html"><span class="logo">MVA</span><span>MyThri Visions Academy<small style="display:block;color:#64748b">Knowledge • Skills • Discipline • Success</small></span></a><a class="btn" href="register.html">Register Now</a></header><nav class="site-nav"><div style="max-width:1250px;margin:auto;padding:0 4%"><button class="nav-toggle" type="button" aria-expanded="false">☰ Menu</button><div class="nav-inner">${items}</div></div></nav>`;
}
function sidebar(active){return `<aside class="portal-sidebar" id="portalSidebar"><div class="portal-mobile-head"><h2>🎓 Student Portal</h2><button type="button" id="portalToggle" aria-expanded="false">☰ Menu</button></div><h2 class="portal-desktop-title">🎓 Academy Portal</h2><nav class="portal-links">${portalLinks.map(([n,u,icon])=>`<a class="${active===u?'active':''}" href="${u}"><span>${icon}</span>${n}</a>`).join("")}</nav><p style="font-size:12px;color:#dbeafe;margin:16px 8px 4px">Demo portal · Browser-saved data</p></aside>`}
function footer(){return `<footer class="footer"><div class="footer-grid"><div><h3>MyThri Visions Academy</h3><p style="color:#dbe5fb">Helping every student learn, practise and grow with confidence.</p><strong>Mentor &amp; Faculty: G. Vijay Kumar</strong></div><div><h4>Quick Links</h4><a href="about.html">About Us</a><a href="courses.html">Courses</a><a href="practice.html">Practice</a><a href="student-progress.html">Student Progress</a><a href="achievements.html">Achievements</a></div><div><h4>Contact</h4><a href="tel:+916300039916">6300039916</a><a href="mailto:mythrivisionsacademy@gmail.com">Email Academy</a><a href="https://wa.me/916300039916">WhatsApp Us</a></div></div><div class="copyright">© <span id="year"></span> MyThri Visions Academy. All rights reserved.</div></footer>`}
document.addEventListener("DOMContentLoaded",()=>{
 const page=document.body.dataset.page||location.pathname.split("/").pop()||"index.html";
 const headerTarget=document.querySelector("#site-header");
 if(headerTarget)headerTarget.innerHTML=header(page);
 const footerTarget=document.querySelector("#site-footer");
 if(footerTarget)footerTarget.innerHTML=footer();
 const year=document.querySelector("#year");if(year)year.textContent=new Date().getFullYear();
 const navToggle=document.querySelector(".nav-toggle"), navInner=document.querySelector(".nav-inner");
 if(navToggle&&navInner)navToggle.addEventListener("click",()=>{const open=navInner.classList.toggle("nav-open");navToggle.setAttribute("aria-expanded",String(open));});
 document.querySelectorAll(".site-nav .has-dropdown > .nav-link").forEach(link=>link.addEventListener("click",e=>{
   if(window.matchMedia("(max-width: 820px)").matches){const item=link.parentElement;if(!item.classList.contains("open")){e.preventDefault();item.classList.add("open");link.setAttribute("aria-expanded","true");}}
 }));
 if(page==="admin.html"||page==="student-progress.html"){
   const main=document.querySelector("main");
   if(main){const layout=document.createElement("div");layout.className="portal-layout";const side=document.createElement("div");side.innerHTML=sidebar(page);main.parentNode.insertBefore(layout,main);layout.appendChild(side);layout.appendChild(main);main.classList.add("portal-main");const title=main.querySelector("h1");if(title)title.classList.add("portal-title");}
   const portalToggle=document.querySelector("#portalToggle"),portalSidebar=document.querySelector("#portalSidebar");
   if(portalToggle&&portalSidebar)portalToggle.addEventListener("click",()=>{const open=portalSidebar.classList.toggle("sidebar-open");portalToggle.setAttribute("aria-expanded",String(open));});
 }
 const form=document.querySelector("#registrationForm");
 if(form)form.addEventListener("submit",e=>{e.preventDefault();const d=new FormData(form);const text=`Hello MyThri Visions Academy, I want to register.\nStudent: ${d.get("studentName")}\nParent/Guardian: ${d.get("parentName")}\nMobile: ${d.get("mobile")}\nClass: ${d.get("className")}\nCourse: ${d.get("course")}\nNote: ${d.get("note")||"None"}`;window.open("https://wa.me/916300039916?text="+encodeURIComponent(text),"_blank","noopener");});
});
